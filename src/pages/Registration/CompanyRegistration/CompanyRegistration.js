import { cloneElement, useState } from "react";
import RegistrationComplete from "../../../view/RegistrationComplete";
import Droneregistration from "../../../view/DroneRegistration";
import Formregistration from "../../../view/Formregistration";
import { COMAPNY_DRONE_FORM, COMAPNY_EMAIL_FORM, COMAPNY_INFO_FORM, COMAPNY_PILOT_FORM } from "../../../config/form/company.config";
import { getCurrenStepId, getShowButton, getTotalSteps } from "../../../util/helper.util";
import BackButton from "../../../compoent/backButton";
import { ArrowLeftOutlined } from "@ant-design/icons";

const steps = [
  {
    id: 1,
    content: <Formregistration config={COMAPNY_EMAIL_FORM} />,
  },
  {
    id: 2,
    content: <Formregistration key="company-info" config={COMAPNY_INFO_FORM} />,
  },
  {
    id: 3,
    content: <Formregistration key="pilot-info" config={COMAPNY_PILOT_FORM} />,
  },
  {
    id: 4,
    content: <Droneregistration key="company-drone-form" config={COMAPNY_DRONE_FORM} />,
  },
  {
    id: 5,
    content: <RegistrationComplete />,
  },
];

const CompanyRegistration = () => {
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

export default CompanyRegistration;
