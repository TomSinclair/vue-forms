// validationSchema utilises yup to create a validation object that VeeValidate adheres to for Form
import { useI18n } from "vue-i18n";
import * as yup from "yup";

export const schema = () => {
  const { t } = useI18n();

  return yup.object({
    givenName: yup
      .string()
      .min(2, t("form.validation.givenName.minimum"))
      .required(t("form.validation.givenName.required")),
    email: yup
      .string()
      .email(t("form.validation.email.valid"))
      .required(t("form.validation.email.required")),
    password: yup
      .string()
      .min(8, t("form.validation.password.minimum"))
      .matches(/\d/, t("form.validation.password.requirements"))
      .required(t("form.validation.password.required")),
    passwordConfirmation: yup
      .string()
      .required(t("form.validation.passwordConfirmation.required"))
      .oneOf(
        [yup.ref("password")],
        t("form.validation.passwordConfirmation.valid")
      ),
    dateOfBirth: yup
      .date()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .max(new Date(), t("form.validation.dateOfBirth.valid"))
      .nullable(),
    service: yup.string().required(t("form.validation.service")),
    serviceAdditional: yup.string().when("service", {
      is: "Other",
      then: (schema) => schema.required(t("form.validation.serviceAdditional")),
      otherwise: (schema) => schema.optional(),
    }),
    termsConditions: yup
      .boolean()
      .required(t("form.validation.termsConditions")),
  });
};
