---
layout: "layouts/container.liquid"
tags: form
name: Validation
examples: {
    validationUsername: [
        {
            label: "Template",
            file: "examples/validation-username.html",
            language: "html",
        },
    ],
    validationMode: [
        {
            label: "Template",
            file: "examples/validation-mode.html",
            language: "html",
        },
    ],
    validationResults: [
        {
            label: "Template",
            file: "examples/validation-results.html",
            language: "html",
        },
    ],
}
---
## Validation

Validation functionality can be enabled for all form components using the validation plugin. Once included, from CDN or as a module, you can use the `form` component and `x-validation` directive to validate inputs based on a set of rules and display validation messages to users.

{% render "example.liquid" example: "examples/validation-username.html", tabs: examples.validationUsername %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/plugins/validation/dist/cdn.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/form-text/dist/cdn.min.js"></script>
```

The main part of validation is the `form` component that is used to store validation data. The validation rules and other options are set seperately for each input in the `form` with the `x-validation` directive. Third part of the validation plugin is the `$validation` utility magic function.

The `form-text` is a separate, optional component that can be used to display validation messages.

### Form component

Form component is a container for validated inputs that stores validation results and other validation related data. Form component has one required `data-form-name` prop. It also provides `validateForm` function that validates all inputs inside form and `resetForm` function that resets validation results to default state. If all inputs inside form are valid then `valid` property of the form component is set to true.

### x-validation directive

The `x-validation` directive is used to set the rules and the mode of the validation for the input in the `form`. The value of the directive is in JSON format and has following properties:
- `rules` - is an array of objects and strings. Simple rules use strings and rules that require argument use objects.
- `mode` - is a string that defines when to validate input and how to update state depending on the validation results. If mode is not defined the default `"blur-silent"` is used.
- `messages` - is an object containing validation messages. If messages are not defined the default global messages are used.

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

{% render "example.liquid" example: "examples/validation-mode.html", tabs: examples.validationMode %}

#### Messages

Each rule has default generic validation message for the invalid value. You can customize these messages for the input by adding them to the `messages` property. The key is a rule name and the value is the new message. The message can contain special `%d` characters that are replaced with a rule value.

### Validation results

Validation results for each input are stored in the `form` component. This data is automatically used by inputs and other components to set validation related styles and validation messages. Validation results can also be accessed with the `$validation` magic function that takes input name as and argument and returns validation results object.

The validation result is an object with following propreties:

- `status` - object containg the results of validation and the current state of the input (for example `touched`, `dirty` etc). It is updated once initially and then after each value change.
- `state` - final validation state of input. This state is based on the current `status` and is updated only when conditions for the `mode` are fulfilled (for example input lost focus etc). By default it is empty string for initial state of input, `"valid"` for valid input and `"invalid"` for invalid input.
- `messages` - object containing validation messages.

See how these properties are updated depending on the input value in the next example.

{% render "example.liquid" example: "examples/validation-results.html", tabs: examples.validationResults %}

### Adding rules

For the CDN build of the plugin you can add new rules to the `window.Litewind.globalValidators` object. A rule is simply a function that takes tested value as an argument and returns `true` or a message.

For a module build of the plugin import `globalValidators` object from the plugin file.

### Customizing messages

For the CDN build of the plugin you can modify default messages for the rules in the `window.Litewind.validationMessages` object.

For a module build of the plugin import `validationMessages` object from the plugin file.

A message can contain `%d` charecters that are replaced with a rule value.
