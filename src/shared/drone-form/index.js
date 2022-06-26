import { DeleteOutlined } from "@ant-design/icons";
import { DRONE_FORM } from "../../constants/form/form.constants";
import getFields from "../fields";

const DroneForm = ({ index = 0 }) => {
  return (
    <div className="drone-form__container">
      <div className="flex-between">
        <b>Drone {index + 1}</b>
        <DeleteOutlined />
      </div>
      {DRONE_FORM.fields.map((field) => getFields(field))}
    </div>
  );
};

export default DroneForm;
