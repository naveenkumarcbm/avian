import { useState } from "react";
import OtpInput from "react-otp-input";

const OTPInput = () => {
  const [otp, setOtp] = useState("");
  return (
    <div>
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      isInputNum={true}
      separator={<span>  </span>}
    />
    </div>
  );
};
export default OTPInput;
