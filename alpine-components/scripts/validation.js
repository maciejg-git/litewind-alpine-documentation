let validationMessages = {
  required: "This field is required",
  alpha: "Please enter only letters",
  numeric: "Please enter only numbers",
  alphanumeric: "Please enter only letters or numbers",
  minLength: "Please enter at least %d characters",
  maxLength: "Please enter up to %d characters",
  minElements: "Please select at least %d elements",
  maxElements: "Please select at least %d elements",
  minValue: "",
  maxValue: "",
  email: "Please enter valid email address",
  atLeastOneUppercase: "Please enter at least one uppercase character",
  atLeastOneLowercase: "Please enter at least one lowercase character",
  atLeastOneDigit: "Please enter at least one numeric character",
  atLeastOneSpecial: "Please enter at least one special character",
  sameAs: ""
};

export let setValidationMessage = (validator, message) => {
  validationMessages[validator] = message
}

export let globalValidators = {
  required: (value, isRequired) => {
    if (typeof value === "boolean") return value
    if (Array.isArray(value)) return !!value.length || validationMessages.required;
    return !!value && !!value.trim() || validationMessages.required;
  },
  minLength: (value, length) => {
    return value.length >= length || validationMessages.minLength.replace('%d', length);
  },
  maxLength: (value, length) => {
    return value.length <= length || validationMessages.maxLength.replace('%d', length);
  },
  minElements: (value, length) => {
    return value.length >= length || validationMessages.minLength.replace('%d', length);
  },
  maxElements: (value, length) => {
    return value.length <= length || validationMessages.maxLength.replace('%d', length);
  },
  alpha: (value) => {
    return /^[a-zA-Z]+$/.test(value) || validationMessages.alpha;
  },
  numeric: (value) => {
    return /^[0-9]+$/.test(value) || validationMessages.numeric;
  },
  alphanumeric: (value) => {
    return /^[a-zA-Z0-9]+$/.test(value) || validationMessages.alphanumeric;
  },
  maxValue: (value, max) => {
    return Number(value) <= max || validationMessages.maxValue.replace('%d', max);
  },
  minValue: (value, min) => {
    return Number(value) >= min || validationMessages.minValue.replace('%d', min);
  },
  email: (value) => {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
      value
    ) || validationMessages.email;
  },
  atLeastOneUppercase: (value) => {
    return /[A-Z]/.test(value) || validationMessages.atLeastOneUppercase;
  },
  atLeastOneLowercase: (value) => {
    return /[a-z]/.test(value) || validationMessages.atLeastOneLowercase;
  },
  atLeastOneSpecial: (value) => {
    return /[^a-zA-Z0-9]/.test(value) || validationMessages.atLeastOneSpecial;
  },
  atLeastOneDigit: (value) => {
    return /[0-9]/.test(value) || validationMessages.atLeastOneDigit;
  },
  sameAs: (value, value2) => {
    return value === value2 || validationMessages.sameAs;
  }
};

let isFunction = (v) => typeof v === "function";

let validOptions = {
  validateOn: ["blur", "immediate", "form"],
  validateMode: ["silent", "eager"],
};

let defaultStatus = {
  touched: false,
  dirty: false,
  valid: false,
  optional: false,
  validated: false,
};

export default function useValidation(inputs, globals) {
  let localInputs = Array.isArray(inputs) ? inputs : [inputs];

  let validation = localInputs.reduce((acc, input) => {
    let {
      form = globals?.form || null,
      name = "input",
      value,
      getValue,
      rules = globals?.rules || [],
      options = globals?.options || {},
      externalState = globals?.externalState,
      onUpdate = globals?.onUpdate,
      onReset = globals?.onReset,
      validation,
      effect,
    } = input;

    let status = Alpine.reactive({})
    let messages = Alpine.reactive({})
    let state = ""
    // let status = { ...defaultStatus };
    //
    // let state = "";
    //
    // let messages = {};

    let opts = {
      validateOn: validOptions.validateOn.includes(options.validateOn)
        ? options.validateOn
        : "blur",
      validateMode: validOptions.validateMode.includes(options.validateMode)
        ? options.validateMode
        : "silent",
      stateDefaultValue: options.stateDefaultValue ?? "",
      stateValidValue: options.stateValidValue ?? "valid",
      stateInvalidValue: options.stateInvalidValue ?? "invalid",
    };

    if (!isFunction(onUpdate)) {
      onUpdate = () => {};
    }

    let isOptional = (value) => {
      return (
        !rules.includes("required") &&
        (value === "" ||
          value === false ||
          (Array.isArray(value) && value.length === 0))
      );
    };

    onUpdate(status, state, messages);

    let validate = (value, event) => {
      let newStatus = {
        touched: status.touched || event === "touch",
        validated: status.validated || event === "formValidate",
        dirty: status.dirty || !!(value && !!value.length),
      };

      let newMessages = {};

      newStatus.valid = rules.reduce((valid, rule) => {
        let [key, v] =
          typeof rule === "string" ? [rule, null] : Object.entries(rule)[0];

        let validator = (isFunction(v) && v) || globalValidators[key];

        if (!validator) return valid;

        newStatus[key] = false;

        let res = validator(value, v);

        if (res === true) {
          newStatus[key] = true;
        } else {
          newMessages[key] = res;
        }

        return valid && newStatus[key];
      }, true);

      newStatus.optional = isOptional(value);

      return { status: newStatus, messages: newMessages }
    };

    let on = (event) => {
      let res = validate(value, event);

      Object.assign(status, res.status)
      messages = res.messages
      state = updateState();
      validation.status = res.status
      validation.messages = res.messages
      validation.state = state

      onUpdate(status, state, messages);
    }

    let updateState = () => {
      let { dirty, touched, validated, optional, valid } = status;

      // external state is set, return it
      if (externalState && externalState !== null) {
        return externalState;
      }

      // optional input (not required and empty) cannot be valid or invalid,
      // return defalut state
      if (optional) {
        return opts.stateDefaultValue;
      }

      // input has not been yet interacted in any way, return current state
      if (!dirty && !touched && !validated) {
        return state;
      }

      // input is validated manually, return current state
      if (opts.validateOn === "form" && !validated) {
        return state;
      }

      // input is validated on blur, return current state
      if (opts.validateOn === "blur" && !touched && !validated) {
        return state;
      }

      // input is validated immediately, has been touched or validated manually
      // and can change state
      // for invalid inputs always return invalid state
      if (!valid) {
        return opts.stateInvalidValue;
      }

      // for valid inputs return valid only in eager mode or when changing
      // from non default state
      if (
        opts.validateMode === "eager" ||
        state !== opts.stateDefaultValue
      ) {
        return opts.stateValidValue;
      }

      // return default state
      return state;
    };

    effect(() => {
      getValue((v) => {
      console.log(value)
      value = v
      on("valueUpdate")
        console.log(state,status)
      })
    })

    // reset

    let reset = () => {
      status = { ...defaultStatus };
      state = "";
      messages = {};
      isFunction(onReset) && onReset();
      onUpdate(status, state, messages);
    };

    return {
      ...acc,
      [name]: {
        form,
        name,
        value,
        status,
        state,
        messages,
        touch: () => on("touch"),
        formValidate: () => on("formValidate"),
        reset,
      },
    };
  }, {});

  // add inputs to form

  Object.values(validation).forEach((i) => {
    isFunction(i.form?.addToForm) && i.form.addToForm(i);
  });

  // return validation for single input

  let i = Object.keys(validation);

  return (i.length === 1) ? validation[i[0]] : validation
}

document.addEventListener('alpine:init', () => {
  Alpine.directive('validation', (el, { expression }, {evaluate, evaluateLater, Alpine, effect}) => {
    // let validation = evaluate(expression)
    Alpine.store("validation", {
      inputs: {},

      addInput(input) {
        this[input.name] = input
      }
    })
    let validation = {
      status: {},
      messages: {},
      state: "",
    }

    let rules = evaluate(expression)
    let getValue = evaluateLater("_value")
    let v = useValidation({
      getValue: getValue,
      rules,
      validation,
      effect,
    })
    Alpine.store("validation").addInput({
      status: v.status,
      messages: v.messages,
      state: v.state,
      name: v.name,
    })
    console.log(Alpine.store("validation"))
    effect(() => {
      getValue((value) => {
      console.log(value)
      console.log(Alpine.store("validation").input.status)
        console.log(status)
      })
    })
    effect(() => {
      console.log(Alpine.store("validation").input.status)
    })
    let data = Alpine.$data(el)
    data.onFocus = () => {
      console.log('focus')
    }
    console.log(data)
  })

  Alpine.magic("validation", () => {
    return Alpine.store("validation")
  })
})
