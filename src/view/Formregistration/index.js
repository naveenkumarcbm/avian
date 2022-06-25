import Form from "../../compoent/Form";
import getFields from "../../shared/fields";
import { Button } from "antd";

const Formregistration = ({ config = {}, next, prev }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    if(next){
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
      <p className="step-info">Step 2 of 4</p>
      <h3>{config.subTitle}</h3>
      <div>{config.fields.map((field) => getFields(field))}</div>
      <Button block={true} type="primary" htmlType="submit">Continue</Button>
      <Button block={true} type="primary" onClick={prev}>Previous</Button>
    </Form>
  );
};

export default Formregistration;
