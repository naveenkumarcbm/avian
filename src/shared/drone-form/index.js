import { DeleteOutlined } from "@ant-design/icons";
import { DRONE_FORM } from "../../constants/form/form.constants";
import getFields from "../fields";

const DroneForm = ({ index = 0, field = {}, remove }) => {
  return (
    <div className="drone-form__container">
      <div className="flex-between">
        <b>Drone {index + 1}</b>
        <DeleteOutlined onClick={remove} />
      </div>
      {DRONE_FORM.fields.map((formField) => {
        let updatedFieldConfig = {
          ...field,
          ...formField,
          name: [field.name, formField.name],
        };
        return getFields(updatedFieldConfig);
      })}
    </div>
  );
};

export default DroneForm;
