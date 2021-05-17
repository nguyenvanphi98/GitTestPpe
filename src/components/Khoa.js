import React from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Progress } from 'antd';
import 'antd/dist/antd.css';

const Khoa = () => {
  return (
    <>
      <div style={{ width: 170 }}>
        <Progress percent={30} size="large" />
        <Progress percent={50} size="large" status="active" />
        <Progress percent={70} size="large" status="exception" />
        <Progress percent={100} size="large" />
      </div>
    </>
  );
};
export default Khoa;
