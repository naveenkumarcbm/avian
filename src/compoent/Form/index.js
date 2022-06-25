import { Form as AntForm } from "antd";

const Form = ({ name = "form", children, ...props }) => {
  const [form] = AntForm.useForm();
  return (
    <AntForm
      id={`${name}Id`}
      form={form}
      name={name}
      layout={props.layout || "vertical"}
      scrollToFirstError
      {...props}
    >
      <>{children}</>
    </AntForm>
  );
};

export default Form;
