import { Radio, Form as AForm, Button } from "antd";
import { useState } from "react";
import Form from "../../compoent/Form";
import MultiDroneForm from "./MultiDroneForm";

const Droneregistration = ({ config, next }) => {
  const [hasDrone, setHasDrone] = useState(1);

  const onFinish = (values) => {
    if (next) next(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (e) => {
    setHasDrone(e.target.value);
  };

  return (
    <div>
      <h1>{config.title}</h1>
      <p>{config.subTitle}</p>
      <span>{config.description}</span>
      <Form
        name="drone-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <AForm.Item>
          <Radio.Group onChange={onChange} value={hasDrone}>
            <Radio value={1}>Yes</Radio>
            <Radio value={0}>No</Radio>
          </Radio.Group>
        </AForm.Item>
        
        {hasDrone ? <MultiDroneForm addMoreText={config.addMoreText} /> : null}
        <Button block={true} type="primary" htmlType="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Droneregistration;
