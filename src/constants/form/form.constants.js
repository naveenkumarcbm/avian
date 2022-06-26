import { FIELD_CONSTANTS } from "../app/app.constants";

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

export const PHONE_FORM = {
  title: "Register as pilot",
  subTitle: "Personal Information",
  name: "pilot",
  phone: {
    type: FIELD_CONSTANTS.INPUT,
    name: "phonenumber",
    label: "Phone number",
    placeholder: "Enter Phone number",
  },
};

export const ADDRESS_FORM = {
  title: "Register as pilot",
  subTitle: "Personal Information",
  name: "pilot",
  fields: [
    {
      type: FIELD_CONSTANTS.TEXTAREA,
      name: "address",
      label: "Address",
      placeholder: "Enter Address",
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ],
};

export const PILOT_FORM = {
  title: "Register as pilot",
  subTitle: "Piloting Information",
  name: "pilot",
  fields: [
    {
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
    },
    {
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
    },
    {
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
    },
    {
      type: FIELD_CONSTANTS.SELECT,
      name: "industry",
      label: "Industry",
      required: true,
      options: OPTIONS,
      placeholder: "Select Industry",
      rules: [
        {
          required: true,
          message: "Please select industry",
        },
      ],
    },
    {
      type: FIELD_CONSTANTS.SELECT,
      name: "language",
      label: "Select Language",
      required: true,
      options: OPTIONS,
      placeholder: "Select language",
      rules: [
        {
          required: true,
          message: "Please select language",
        },
      ],
    },
    {
      type: FIELD_CONSTANTS.SELECT,
      name: "location",
      label: "Predered Service Location",
      required: true,
      options: OPTIONS,
      placeholder: "Select service location",
      rules: [
        {
          required: true,
          message: "Please select service location",
        },
      ],
    },
  ],
};

export const DRONE_FORM = {
  title: "Register as pilot",
  subTitle: "Do you own a drone?",
  description: "Place click yes, if you have your own drones",
  addMoreText: "Add More Drones",
  name: "pilot",
  fields: [
    {
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
    },
    {
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
    }
  ]
};

export const REGISTRATION_COMPLETE = {
  title: "Registration complete",
  description: "Your registration is successful. If the verification is successful you will receive a message in your email and phone number. This usually takes 1 or 2 days",
  btnText: "Close Application"
}