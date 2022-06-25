import { Button, Image } from "antd";
import { REGISTRATION_COMPLETE } from "../../constants/form.constants";
import registrationCompelete from "../../assets/png/registration-complete.png";

const RegistrationComplete = ({ next }) => {
  return (
    <div className="flex-column-center">
      <Image preview={false} src={registrationCompelete} />
      <h1>{REGISTRATION_COMPLETE.title}</h1>
      <p>{REGISTRATION_COMPLETE.description}</p>
      <Button block={true} type="primary" htmlType="submit">
        {REGISTRATION_COMPLETE.btnText}
      </Button>
    </div>
  );
};

export default RegistrationComplete;
