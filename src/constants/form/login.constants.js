import { FIELD_CONSTANTS } from "../app/app.constants";

export const LOGIN_FORM = {
    title: "Login",
    description: 'User your registered phone number.',
    phone: {
        type: FIELD_CONSTANTS.INPUT,
        name: "phonenumber",
        label: "Phone number",
        placeholder: "Enter Phone number",
      },
}