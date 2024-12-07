import { createI18n } from "vue-i18n";

const messages = {
  en: {
    title: "Vue Technical Test",
    form: {
      givenName: "Name",
      email: "Email",
      password: "Password",
      passwordConfirmation: "Confirm Password",
      dateOfBirth: "Date of Birth",
      service: "Choice of Service",
      termsConditions: "I accept the Terms and Conditions",
      submit: "Submit",
      validation: {
        givenName: {
          required: "Name is required",
          minimum: "Name must be at least 2 characters",
        },
        email: {
          required: "Email is required",
          valid: "Must be a valid email",
        },
        password: {
          required: "Password is required",
          minimum: "Password must be at least 8 characters",
          requirements: "Password must contain at least one number",
        },
        passwordConfirmation: {
          required: "Please confirm your new password",
          valid: "Passwords do not match",
        },
        dateOfBirth: {
          valid: "Date must be in the past",
        },
        service: "Choice of Service is required",
        serviceAdditional: "Service is required if selecting Other",
        termsConditions: "You must accept the terms and conditions",
      },
    },
  },
  es: {
    title: "Vue Technical Test (ES)",
    form: {
      givenName: "Name (ES)",
      email: "Email (ES)",
      password: "Password (ES)",
      passwordConfirmation: "Confirm Password (ES)",
      dateOfBirth: "Date of Birth (ES)",
      service: "Choice of Service (ES)",
      termsConditions: "I accept the Terms and Conditions (ES)",
      submit: "Submit (ES)",
      validation: {
        givenName: {
          required: "Name is required (ES)",
          minimum: "Name must be at least 2 characters (ES)",
        },
        email: {
          required: "Email is required (ES)",
          valid: "Must be a valid email (ES)",
        },
        password: {
          required: "Password is required (ES)",
          minimum: "Password must be at least 8 characters (ES)",
          requirements: "Password must contain at least one number (ES)",
        },
        passwordConfirmation: {
          required: "Please confirm your new password (ES)",
          valid: "Passwords do not match (ES)",
        },
        dateOfBirth: {
          valid: "Date must be in the past (ES)",
        },
        service: "Choice of Service is required (ES)",
        serviceAdditional: "Service is required if selecting Other (ES)",
        termsConditions: "You must accept the terms and conditions (ES)",
      },
    },
  },
};

const i18n = createI18n({
  // Set the default locale
  locale: "en",
  messages,
});

export default i18n;
