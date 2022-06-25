import { Button } from "antd";
import Phonenumber from "../../compoent/phone";

const PioltRegistration = () => {
  return (
    <div className="registration__container">
      <div className="registration__content">
        <h1>Register as pilot</h1>
        <p>Verify your phone number</p>
        <label htmlFor="phone-number">Phone number</label>
        <Phonenumber id="phone-number" onChange={(pn) => console.log(pn)} />
        <Button block={true} type="primary" htmlType="submit" onClick>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PioltRegistration;
