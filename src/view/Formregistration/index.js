import Form from "../../compoent/Form";
import getFields from "../../shared/fields";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../config/routes.config";

const Formregistration = ({
  step,
  totalSteps,
  config = {},
  next,
  showBackToLogin,
  defaultValues
}) => {
  const onFinish = (values) => {
    if (next) {
      next(values);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name={config.name}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <h2>{config.title}</h2>
      <p className="step-info">
        Step {step} of {totalSteps}
      </p>
      <h3>{config.subTitle}</h3>
      <div>{config.fields.map((field) => {
        return getFields(field, defaultValues);
        })}</div>
      <Button block={true} type="primary" htmlType="submit">
        Continue
      </Button>
      {showBackToLogin && <Link to={ROUTE_PATH.LOGIN}>Back to Login</Link>}
    </Form>
  );
};

export default Formregistration;
