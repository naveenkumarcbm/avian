import { cloneElement, useState } from "react";
import RegistrationComplete from "../../../view/RegistrationComplete";
import Droneregistration from "../../../view/DroneRegistration";
import Formregistration from "../../../view/Formregistration";
import Phoneregistration from "../../../view/Phoneregistration";
import {
  ADDRESS_FORM,
  DRONE_FORM,
  PERSONAL_FORM,
  PHONE_FORM,
  PILOT_FORM,
} from "../../../config/form/piolt.config";
import {
  getCurrenStepId,
  getShowButton,
  getTotalSteps
} from "../../../util/helper.util";
import { ArrowLeftOutlined } from "@ant-design/icons";
import BackButton from "../../../compoent/backButton";

const steps = [
  {
    id: 1,
    content: <Phoneregistration config={PHONE_FORM} />,
  },
  {
    id: 2,
    content: <Formregistration key="personal-info" config={PERSONAL_FORM} />,
  },
  {
    id: 3,
    content: <Formregistration key="address-info" config={ADDRESS_FORM} />,
  },
  {
    id: 4,
    content: <Formregistration key="pilot-info" config={PILOT_FORM} />,
  },
  {
    id: 5,
    content: <Droneregistration key="drone-form" config={DRONE_FORM} />,
  },
  {
    id: 6,
    content: <RegistrationComplete />,
  },
];

const PilotRegistration = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex(index + 1);
  };

  const prev = () => {
    setIndex(index - 1);
  };

  const step = getCurrenStepId(steps, index);
  const totalSteps = getTotalSteps(steps);
  const showBack = getShowButton(steps, index);
  console.log({ showBack });
  return (
    <>
      <div className="registration__container">
        <BackButton show={showBack} onClick={prev}>
          <ArrowLeftOutlined />
        </BackButton>
        {cloneElement(steps[index].content, { next, prev, step, totalSteps })}
      </div>
    </>
  );
};

export default PilotRegistration;
