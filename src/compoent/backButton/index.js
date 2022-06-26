import { Button } from "antd";
const style = {
  margin: 0,
  padding: 0,
};

const BackButton = ({ onClick, show, children }) => {
  if (!show) return null;
  return (
    <Button style={style} type="text" onClick={onClick}>
      {children}
    </Button>
  );
};

export default BackButton;
