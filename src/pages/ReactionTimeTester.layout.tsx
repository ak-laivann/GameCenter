import React, { useState, useEffect } from "react";
import { Avatar, Button, Col, Row, Typography } from "antd";
import "./Timer.css";

export const Timer = (props: { time: number }) => {
  return (
    <div className="timer">
      <span className="digits">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
      </span>
      <span className="digits mili-sec">
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
};

export const ReactionTimeTestingPage: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isStopped, setIsStopped] = useState<boolean>(true);
  const [time, setTime] = useState<number>(0);
  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout | null>(null);
  const [backgroundColor, setbackGroundColor] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && !isStopped) {
      setbackGroundColor("green");
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      if (interval) {
        clearInterval(interval);
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
    };
  }, [isActive, isStopped]);

  const handleStart = () => {
    setbackGroundColor("red");
    const id = setTimeout(() => {
      setIsActive(true);
      setIsStopped(false);
    }, 3000);
    setTimeOutId(id);
  };

  const handleStop = () => {
    setIsStopped(true);
  };

  const handleReset = () => {
    setbackGroundColor(undefined);
    setIsActive(false);
    setTime(0);
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography.Title type="success" level={2}>
          Reaction Timer
        </Typography.Title>
      </div>
      <div style={{ marginLeft: "5%", marginRight: "5%" }}>
        <Typography.Text keyboard style={{ color: "white" }}>
          Click Start to start the timer. The timer starts only after 3 seconds.
          The light turns red after pressing Start, hover above the Stop Button
          waiting for the timer to start and the light to turn green. Once the
          light turns green, the timer will start, click Stop to know your
          reaction time.
        </Typography.Text>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
      >
        <Avatar
          size={"large"}
          style={{
            backgroundColor: backgroundColor,
          }}
        />
      </div>
      <Timer time={time} />
      <Row gutter={[24, 24]} style={{ marginLeft: "15%" }}>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
          <Button
            type="primary"
            disabled={isActive}
            size="large"
            onClick={handleStart}
            children="Start"
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
          <Button
            type="primary"
            disabled={!isActive || isStopped}
            size="large"
            onClick={handleStop}
            children="Stop"
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
          <Button
            type="primary"
            size="large"
            onClick={handleReset}
            children="Reset"
          />
        </Col>
      </Row>
    </>
  );
};
