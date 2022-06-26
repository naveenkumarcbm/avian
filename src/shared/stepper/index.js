import { cloneElement, useState } from "react";
import { ADDRESS_FORM, PILOT_FORM } from "../../constants/form/form.constants";
import RegistrationComplete from "../../view/RegistrationComplete";
import Droneregistration from "../../view/DroneRegistration";
import Formregistration from "../../view/Formregistration";
import Phoneregistration from "../../view/Phoneregistration";

const steps = [
  {
    id: 1,
    content: <Phoneregistration />,
  },
  {
    id: 2,
    content: <Formregistration key="personal-info" config={ADDRESS_FORM} />,
  },
  {
    id: 3,
    content: <Formregistration key="pilot-info" config={PILOT_FORM} />,
  },
  {
    id: 4,
    content: <Droneregistration />,
  },
  {
    id: 5,
    content: <RegistrationComplete />,
  },
];

const Stepper = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className="registration__container">
        {cloneElement(steps[current].content, { next, prev })}
      </div>
    </>
  );
};

export default Stepper;
