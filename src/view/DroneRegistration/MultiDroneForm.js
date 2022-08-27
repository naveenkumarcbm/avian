import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import DroneForm from "../../shared/drone-form";

const MultiDroneForm = ({ addMoreText }) => {
  return (
    <Form.List name="drones">
      {(fields, { add, remove }) => (
        <>
          {fields.map((field) => (
            <>
              <DroneForm key={field.name} field={field} remove={() => remove(field.name)} />
            </>
          ))}
          <Form.Item>
            <Button type="link" onClick={() => add()}>
              <PlusCircleOutlined />
              {addMoreText}
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default MultiDroneForm;
