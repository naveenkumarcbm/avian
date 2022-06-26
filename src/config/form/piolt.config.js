import {
  AADHAR_FIELD,
  ADDRESS_FIELD,
  CATEGORY_FIELD,
  CERTIFICATE_FIELD,
  CITY_FIELD,
  COUNTRY_FIELD,
  DRONE_BRAND_FIELD,
  DRONE_MODEL_FIELD,
  INDUSTRY_FIELD,
  LANGUAGE_FIELD,
  NAME_FIELD,
  PERSONAL_DTL,
  PERSONAL_EMAIL_FIELD,
  PHONE_FIELD,
  PREFERRED_LOC_FIELD,
  STATE_FIELD,
  UIN_FIELD,
  ZIPCODE_FIELD,
} from "../field/field.config";

export const PHONE_FORM = {
  title: "Register as pilot",
  subTitle: "Personal Information",
  name: "pilot",
  phone: PHONE_FIELD,
};

export const PERSONAL_FORM = {
  title: "Register as pilot",
  subTitle: "Personal Information",
  name: "pilot",
  fields: [
    NAME_FIELD,
    PERSONAL_DTL,
    PERSONAL_EMAIL_FIELD,
    AADHAR_FIELD
  ],
};

export const ADDRESS_FORM = {
  title: "Register as pilot",
  subTitle: "Personal Information",
  name: "pilot",
  fields: [
    ADDRESS_FIELD,
    COUNTRY_FIELD,
    STATE_FIELD,
    CITY_FIELD,
    ZIPCODE_FIELD,
  ],
};

export const PILOT_FORM = {
  title: "Register as pilot",
  subTitle: "Piloting Information",
  name: "pilot",
  fields: [
    CERTIFICATE_FIELD,
    CATEGORY_FIELD,
    UIN_FIELD,
    INDUSTRY_FIELD,
    LANGUAGE_FIELD,
    PREFERRED_LOC_FIELD,
  ],
};

export const DRONE_FORM = {
  title: "Register as pilot",
  subTitle: "Do you own a drone?",
  description: "Place click yes, if you have your own drones",
  addMoreText: "Add More Drones",
  name: "pilot",
  fields: [DRONE_BRAND_FIELD, DRONE_MODEL_FIELD],
};

export const REGISTRATION_COMPLETE = {
  title: "Registration complete",
  description:
    "Your registration is successful. If the verification is successful you will receive a message in your email and phone number. This usually takes 1 or 2 days",
  btnText: "Close Application",
};
