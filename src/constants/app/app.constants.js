// field constants
export const FIELD_CONSTANTS = {
  INPUT: "input",
  EMAIL: "email",
  RADIO: "radio",
  UPLOAD: "upload",
  DATE: "date",
  PASSWORD: "password",
  DEPENDENT: "dependent", // should have dependencies=['field'], rule=[{},(val)=>{}]
  TEXTAREA: "textarea",
  SELECT: "select",
  SWITCH: "switch",
  ROW: "row",
};

// Phone number componet constants
export const DEFAULT_COUNTRY = {
  countryCode: "in",
  dialCode: "91",
  name: "India",
};

export const PREFRRED_COUNTRIES = ["in"]

// application entities
export const ENTITY = {
  pilot: 'Pilot',
  employer: 'Employer',
}
