import {
  EMAIL_FIELD,
  PASSWORD_FIELD,
  PHONE_FIELD,
} from "../field/field.config";

export const LOGIN_FORM = {
  title: "Login",
  tab: "Pilot",
  description: "User your registered phone number.",
  phone: PHONE_FIELD,
};

export const COMPANY_LOGIN = {
  title: "Login",
  tab: "Employer",
  description: "User your company email id.",
  fields: [EMAIL_FIELD, PASSWORD_FIELD],
};

