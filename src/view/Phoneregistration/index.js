import { Button, Image } from "antd";
import Form from "../../compoent/Form";
import Phonenumber from "../../compoent/phone";
import registration from "../../assets/png/registration.png";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../config/routes.config";

const styles = {
  btn: {
    marginTop: "3rem",
  },
  p: {
    textAlign: "center",
    marginTop: "1rem",
  },
};

const Phoneregistration = ({ config, next }) => {
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
      <h1>{config.title}</h1>
      <p>{config.subTitle}</p>
      <Form
        name="phone-number-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <label htmlFor="phone-number">{config.phone.label}</label>
        <Phonenumber
          id="phone-number"
          placeholder={config.phone.placeholder}
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
        <p style={styles.p}>Registered? <Link to={ROUTE_PATH.LOGIN}></Link>Login</p>
      </Form>
    </div>
  );
};

export default Phoneregistration;
