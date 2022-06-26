import Input from "antd/lib/input/Input";
import { useEffect, memo, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import {
  DEFAULT_COUNTRY,
  PREFRRED_COUNTRIES,
} from "../../constants/app/app.constants";

const Phonenumber = ({ placeholder, onChange }) => {
  const [country, setCountry] = useState(DEFAULT_COUNTRY);
  const [phoneNumber, setPhoneNumber] = useState("");

  const onPhoneInputChange = (evt) => {
    const { value: inputValue } = evt.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      setPhoneNumber(inputValue);
    }
    
  };

  const onCountryChange = (code, ctryObj) => {
    setCountry(ctryObj);
  };

  useEffect(() => {
    const phone = { country, phoneNumber };
    onChange(phone);
  }, [phoneNumber, country, onChange]);

  return (
    <div className="phone-number__container">
      <PhoneInput
        country={DEFAULT_COUNTRY.countryCode}
        preferredCountries={PREFRRED_COUNTRIES}
        onChange={onCountryChange}
        inputProps={{
          readOnly: true,
        }}
      />
      <Input
        type={"tel"}
        // required={true}
        value={phoneNumber}
        className="phone-number-input"
        placeholder={placeholder}
        onChange={onPhoneInputChange}
        // minLength={10}
        // maxLength={15}
      />
    </div>
  );
};
export default memo(Phonenumber);
