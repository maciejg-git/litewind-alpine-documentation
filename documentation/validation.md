---
layout: "layouts/container.liquid"
tags: form
name: Validation
examples: {
    validationUsername: [
        {
            label: "Template",
            file: "examples/validation-username.liquid",
            language: "html",
        },
    ],
}
---
## Validation

{% render "example.liquid" example: "examples/validation-username.liquid", tabs: examples.validationUsername %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/plugins/validation/dist/cdn.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/form-text/dist/cdn.min.js"></script>
```

The main part of validation is the form component that is used to store validation data. The validation rules and other options are set seperately for each input in the form with the x-validation directive. Third part of validation is a form-text component that is used to display validation messages. The form-text component is optional and defined in a seperate file.

### Form component

Form component is a container for validated inputs. The data for the component is provided in the validation plugin.

### x-validation directive

The x-validation directive is used to set the rules and the mode of the validation. The value of the directive is in JSON format and has following properties:
- `rules` - is an array of objects and strings. Simple rules use strings and rules that require argument use objects.
- `mode` - is a string that defines when to validate input and how to update state depending on the validation results.

#### Rules

Available rules include following:

- `required`
- `alpha`
- `numeric`
- `alphanumeric`
- `minLength`
- `maxLength`
- `minElements`
- `maxElements`
- `minValue`
- `maxValue`
- `email`
- `atLeastOneUppercase`
- `atLeastOneLowercase`
- `atLeastOneDigit`
- `atLeastOneSpecial`
- `sameAs`

#### Mode

Mode defines when to validate input and how to update state depending in the validation results. Here are available modes:

- `"blur-silent"` - validate after input loses focus. State is set only for invalid inputs.
- `"blur-eager"` - validate after input loses focus. State is set for invalid and valid inputs.
- `"form-silent"` - validate manually after calling formValidate function. State is set only for invalid inputs.
- `"form-eager"` - validate manually after calling formValidate function. State is set for invalid and valid inputs.
- `"immediate-eager"` - validate on each update of the input. State is set for invalid and valid inputs.

### Validation results

Validation results for each input are stored in the form component. This data is automatically used by inputs and other components to set validation related styles and validation messages. Validation results can also be accessed with the $validation magic function.

The validation result is an object with following propreties:

- `status` - object containg the results of validation and the current state of the input (for example `touched`, `dirty` etc). It is updated once initially and then after each value change.
- `state` - final validation state of input. This state is based on the current `status` and is updated only when conditions for the `mode` are fulfilled (for example input lost focus etc). By default it is empty string for initial state of input, `"valid"` for valid input and `"invalid"` for invalid input.
- `messages` - object containing validation messages.
