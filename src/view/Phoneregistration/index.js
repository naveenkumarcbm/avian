import { Button, Image } from "antd";
import Form from "../../compoent/Form";
import Phonenumber from "../../compoent/phone";
import { PHONE_FORM } from "../../constants/form.constants";
import registration from "../../assets/png/registration.png";

const styles = {
  btn: {
    marginTop: "3rem",
  },
  p: {
    textAlign: "center",
    marginTop: "1rem",
  },
};

const Phoneregistration = ({ next }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    next();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="registration__content">
      <Image preview={false} src={registration} />
      <h1>{PHONE_FORM.title}</h1>
      <p>{PHONE_FORM.subTitle}</p>
      <Form
        name="phone-number-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <label htmlFor="phone-number">{PHONE_FORM.phone.label}</label>
        <Phonenumber
          id="phone-number"
          placeholder={PHONE_FORM.phone.placeholder}
          onChange={(pn) => console.log(pn)}
        />
        <Button
          style={styles.btn}
          block={true}
          type="primary"
          htmlType="submit"
        >
          Continue
        </Button>
        <p style={styles.p}>Registered? Login</p>
      </Form>
    </div>
  );
};

export default Phoneregistration;
