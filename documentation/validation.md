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

The main part of validation is the form component that is used to store validation data. The validation rules and other options are set seperately for each input in the form with the x-validation directive. Third part of valiation is a form-text component that is used to display validation messages.

#### Form component

Form component is a container for validated inputs. The data for the component is provided in the validation plugin.

#### x-validation directive

The x-validation directive is used to set the rules and the mode of the validation. The value of the directive is in JSON format.
