import { FIELD_CONSTANTS } from "../../constants/app/app.constants";
const OPTIONS = [
  {
    value: "Option 1",
    label: "Option 1",
  },
  {
    value: "Option 2",
    label: "Option 2",
  },
];

export const PHONE_FIELD = {
  type: FIELD_CONSTANTS.INPUT,
  name: "phonenumber",
  label: "Phone number",
  placeholder: "Enter Phone number",
};

export const NAME_FIELD = {
  type: FIELD_CONSTANTS.INPUT,
  name: "name",
  label: "Name",
  required: true,
  placeholder: "Eneter name",
  rules: [
    {
      min: 3,
      max: 50,
      required: true,
      message: "Please provide name",
    },
  ],
};


export const ADDRESS_FIELD = {
  type: FIELD_CONSTANTS.TEXTAREA,
  name: "address",
  label: "Address",
  placeholder: "Enter Address",
};

export const COUNTRY_FIELD = {
  type: FIELD_CONSTANTS.SELECT,
  name: "country",
  label: "Country",
  required: true,
  options: OPTIONS,
  placeholder: "Select Country",
  rules: [
    {
      required: true,
      message: "Please select Country",
    },
  ],
};

export const STATE_FIELD = {
  type: FIELD_CONSTANTS.SELECT,
  name: "state",
  label: "State",
  required: true,
  options: OPTIONS,
  placeholder: "Select State",
  rules: [
    {
      required: true,
      message: "Please select State",
    },
  ],
};

export const CITY_FIELD = {
  type: FIELD_CONSTANTS.INPUT,
  name: "city",
  label: "City",
  required: true,
  placeholder: "Select City",
  rules: [
    {
      min: 3,
      max: 50,
      required: true,
      message: "Please provide city",
    },
  ],
};

export const ZIPCODE_FIELD = {
  type: FIELD_CONSTANTS.INPUT,
  name: "zipcode",
  label: "Zip code",
  required: true,
  placeholder: "Select zipcode",
  rules: [
    {
      min: 3,
      max: 50,
      required: true,
      message: "Please provide zipcode",
    },
  ],
};

export const CERTIFICATE_FIELD = {
  type: FIELD_CONSTANTS.INPUT,
  name: "certificate",
  label: "Training certificate number",
  required: true,
  placeholder: "Eneter Training certificate number",
  rules: [
    {
      min: 3,
      max: 50,
      required: true,
      message: "Please provide zipcode",
    },
  ],
};

export const CATEGORY_FIELD = {
  type: FIELD_CONSTANTS.SELECT,
  name: "category",
  label: "Pilot Category",
  required: true,
  options: OPTIONS,
  placeholder: "Select Pilot Category",
  rules: [
    {
      required: true,
      message: "Please select Pilot Category",
    },
  ],
};

export const UIN_FIELD = {
  type: FIELD_CONSTANTS.INPUT,
  name: "uin",
  label: "Unique identification number",
  required: true,
  placeholder: "Eneter UIN",
  rules: [
    {
      min: 3,
      max: 50,
      required: true,
      message: "Please provide UIN",
    },
  ],
};

export const INDUSTRY_FIELD = {
  type: FIELD_CONSTANTS.SELECT,
  name: "industry",
  label: "Industry",
  mode: "multiple",
  required: true,
  options: OPTIONS,
  placeholder: "Select Industry",
  rules: [
    {
      required: true,
      message: "Please select industry",
    },
  ],
};

export const LANGUAGE_FIELD = {
  type: FIELD_CONSTANTS.SELECT,
  name: "language",
  label: "Select Language",
  mode: "multiple",
  required: true,
  options: OPTIONS,
  placeholder: "Select language",
  rules: [
    {
      required: true,
      message: "Please select language",
    },
  ],
};

export const PREFERRED_LOC_FIELD = {
  type: FIELD_CONSTANTS.SELECT,
  name: "location",
  label: "Predered Service Location",
  mode: "multiple",
  required: true,
  options: OPTIONS,
  placeholder: "Select service location",
  rules: [
    {
      required: true,
      message: "Please select service location",
    },
  ],
};

export const DRONE_BRAND_FIELD = {
  type: FIELD_CONSTANTS.SELECT,
  name: "brand",
  label: "Drone Brand",
  required: true,
  options: OPTIONS,
  placeholder: "Select Brand",
  rules: [
    {
      required: true,
      message: "Please select Brand",
    },
  ],
};

export const DRONE_MODEL_FIELD = {
  type: FIELD_CONSTANTS.SELECT,
  name: "model",
  label: "Drone Model",
  required: true,
  options: OPTIONS,
  placeholder: "Select Model",
  rules: [
    {
      required: true,
      message: "Please select Model",
    },
  ],
};

export const EMAIL_FIELD = {
  type: FIELD_CONSTANTS.EMAIL,
  name: "email",
  label: "Company email",
  placeholder: "Enter your company email",
  required: true,
  rules: [
    {
      required: true,
      message: "Please enter your company email",
    },
  ],
};

export const PASSWORD_FIELD = {
  type: FIELD_CONSTANTS.PASSWORD,
  name: "password",
  label: "Password",
  required: true,
  placeholder: "Password",
  rules: [
    {
      min: 8,
      max: 50,
      required: true,
      message: "Please provide valid password.",
    },
  ],
};

export const PERSONAL_DTL ={
  type: FIELD_CONSTANTS.ROW,
  fields: [
    {
      type: FIELD_CONSTANTS.DATE,
      name: "dob",
      label: "DOB",
      placeholder: "DOB"
    },
    {
      type: FIELD_CONSTANTS.SELECT,
      name: "sex",
      label: "Sex",
      required: true,
      options: [
        {
          value: "Male",
          label: "Male",
        },
        {
          value: "Female",
          label: "Female",
        }
      ],
      placeholder: "Select sex",
      rules: [
        {
          required: true,
          message: "Please select sex",
        },
      ],
    },
  ],
};

export const PERSONAL_EMAIL_FIELD = {
  type: FIELD_CONSTANTS.EMAIL,
  name: "email",
  label: "Email Id",
  placeholder: "Enter Email Id",
  required: true,
  rules: [
    {
      required: true,
      message: "Please enter your email id",
    },
  ],
};

export const AADHAR_FIELD = {
  type: FIELD_CONSTANTS.INPUT,
  name: "aadhar",
  label: "Aadhar Number",
  required: true,
  placeholder: "Eneter Aadhar number",
  rules: [
    {
      min: 12,
      max: 12,
      required: true,
      message: "Please provide aadhar number",
    },
  ],
};

export const CMPNY_NAME_FIELD = {
  type: FIELD_CONSTANTS.INPUT,
  name: "companyName",
  label: "Company Name",
  required: true,
  placeholder: "Eneter Company name",
  rules: [
    {
      min: 3,
      max: 50,
      required: true,
      message: "Please provide Company name",
    },
  ],
};

export const GST_FIELD = {
  type: FIELD_CONSTANTS.INPUT,
  name: "gstNumber",
  label: "GST Number",
  placeholder: "Eneter GST number",
  rules: [
    {
      min: 3,
      max: 50,
      message: "Please provide valid GST number",
    },
  ],
};

export const CMPNY_PHONE_FIELD = {
  type: FIELD_CONSTANTS.INPUT,
  name: "companyPhone",
  label: "Phone Number",
  required: true,
  placeholder: "Eneter phone number",
  rules: [
    {
      min: 3,
      max: 50,
      required: true,
      message: "Please provide phone number",
    },
  ],
};
