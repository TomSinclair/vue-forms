// formFields array to allow for changes to the input used in the form
export const formFields = [
  {
    name: "givenName",
    label: "form.givenName",
    type: "text",
  },
  {
    name: "email",
    label: "form.email",
    type: "email",
  },
  {
    name: "password",
    label: "form.password",
    type: "password",
  },
  {
    name: "passwordConfirmation",
    label: "form.passwordConfirmation",
    type: "password",
    value: "",
  },
  {
    name: "dateOfBirth",
    label: "form.dateOfBirth",
    type: "date",
  },
  {
    name: "service",
    label: "form.service",
    type: "select",
    options: ["Web Development", "Mobile Development", "SEO Services", "Other"],
  },
  {
    name: "serviceAdditional",
    label: "",
    type: "text",
    // Allows the field to be displayed conditionally by checked if the service input/select is "Other"
    condition: (values) => values.service === "Other",
  },
  {
    name: "termsConditions",
    label: "form.termsConditions",
    type: "checkbox",
    value: true,
  },
];
