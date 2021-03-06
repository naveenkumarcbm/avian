import Form from "../../compoent/Form";
import getFields from "../../shared/fields";
import { Button } from "antd";

const Formregistration = ({ step, totalSteps, config = {}, next, prev }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    if (next) {
      next();
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
      <div>{config.fields.map((field) => getFields(field))}</div>
      <Button block={true} type="primary" htmlType="submit">
        Continue
      </Button>
    </Form>
  );
};

export default Formregistration;
