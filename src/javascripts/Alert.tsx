import * as React from "react";

const Alert: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div style={{ color: "skyblue", padding: "1em", backgroundColor: "brown" }}>
      {message}
    </div>
  );
};

export default Alert;
