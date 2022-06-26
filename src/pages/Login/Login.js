import { Button, Image, Tabs } from "antd";
import Form from "../../compoent/Form";
import Phonenumber from "../../compoent/phone";
import registration from "../../assets/png/registration.png";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../../config/routes.config";
import { COMPANY_LOGIN, LOGIN_FORM } from "../../config/form/login.config";
import getFields from "../../shared/fields";
const { TabPane } = Tabs;

const styles = {
  container: {
    padding: "2rem",
  },
  btn: {
    marginTop: "3rem",
  },
  p: {
    textAlign: "center",
    marginTop: "1rem",
  },
};

const Login = ({ next }) => {
  let navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate(ROUTE_PATH.LIST_COMPANY);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="registration__content" style={styles.container}>
      <Image preview={false} src={registration} />
      <h1>{LOGIN_FORM.title}</h1>
      <p>{LOGIN_FORM.description}</p>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Pilot" key="1">
          <Form
            name="phone-number-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <label htmlFor="phone-number">{LOGIN_FORM.phone.label}</label>
            <Phonenumber
              id="phone-number"
              placeholder={LOGIN_FORM.phone.placeholder}
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
            <p style={styles.p}>
              New to Avian? (<Link to={ROUTE_PATH.REGISTER_PIOLET}>Pilot</Link>/
              <Link to={ROUTE_PATH.REGISTER_COMPANY}>Company</Link>)
            </p>
          </Form>
        </TabPane>
        <TabPane tab="Employer" key="2">
          <Form
            name={COMPANY_LOGIN.tab}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div>{COMPANY_LOGIN.fields.map((field) => getFields(field))}</div>
            <Link to={ROUTE_PATH.LOGIN}>Forgot Password?</Link>
            <Button block={true} type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Login;
