import "antd/dist/antd.css";
import React from "react";



const Khoa = () => {
  const onFinish = (values) => {
    console.log("Ahihi:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish1 = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <>
    <p>PPE</p>
      <p>BUi van khoa</p>
      <p>BUi van khoa1</p>
    </>
  );
};
export default Khoa;
