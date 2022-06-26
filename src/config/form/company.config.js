import {
  CMPNY_NAME_FIELD,
  CMPNY_PHONE_FIELD,
  DRONE_BRAND_FIELD,
  DRONE_MODEL_FIELD,
  EMAIL_FIELD,
  GST_FIELD,
  INDUSTRY_FIELD,
  LANGUAGE_FIELD,
  NAME_FIELD,
  PREFERRED_LOC_FIELD
} from "../field/field.config";

export const COMAPNY_EMAIL_FORM = {
  title: "Register as Company",
  subTitle: "Email verification",
  name: "company",
  fields: [EMAIL_FIELD],
};

export const COMAPNY_INFO_FORM = {
  title: "Register as Company",
  subTitle: "Company Information",
  name: "company",
  fields: [
    NAME_FIELD,
    CMPNY_NAME_FIELD,
    GST_FIELD,
    CMPNY_PHONE_FIELD,
  ],
};

export const COMAPNY_PILOT_FORM = {
  title: "Register as Company",
  subTitle: "Piloting Information",
  name: "company",
  fields: [
    INDUSTRY_FIELD,
    LANGUAGE_FIELD,
    PREFERRED_LOC_FIELD,
  ],
};

export const COMAPNY_DRONE_FORM = {
  title: "Register as Company",
  subTitle: "Do you own a drone?",
  description: "Place click yes, if you have your own drones",
  addMoreText: "Add More Drones",
  name: "pilot",
  fields: [DRONE_BRAND_FIELD, DRONE_MODEL_FIELD],
};

export const COMAPNY_REGISTRATION_COMPLETE = {
  title: "Registration complete",
  description:
    "Your registration is successful. If the verification is successful you will receive a message in your email and phone number. This usually takes 1 or 2 days",
  btnText: "Close Application",
};

//
