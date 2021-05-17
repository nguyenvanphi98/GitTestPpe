import {
  HeartOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
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
      <p>PPEEEEE</p>
    </>
  );
};
export default Khoa;
