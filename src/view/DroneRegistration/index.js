import { Radio, Form as AForm, Button } from "antd";
import { useState } from "react";
import Form from "../../compoent/Form";
import DroneForm from "../../shared/drone-form";
import { PlusCircleOutlined } from "@ant-design/icons";

const Droneregistration = ({ config, next }) => {
  const [hasDrone, setHasDrone] = useState(1);
  const [droneList, setDroneList] = useState([1]);

  const onFinish = (values) => {
    console.log("Success:", values);
    if(next)
    next();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setHasDrone(e.target.value);
  };

  const addDrones = () => setDroneList([...droneList, droneList.length]);

  const getDroneForm = () => {
    if (!hasDrone) return;
    return (
      <div>
        {droneList.map((drone, idx) => (
          <DroneForm key={`drone-${idx}`} />
        ))}
      </div>
    );
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
        {getDroneForm()}
        <Button type="link" onClick={addDrones}>
          <PlusCircleOutlined />
          {config.addMoreText}
        </Button>
        <Button block={true} type="primary" htmlType="submit">Register</Button>
      </Form>
    </div>
  );
};

export default Droneregistration;
