import { Button, Col, message, Row, Tag, Typography } from "antd";
import { useEffect, useState } from "react";
import {
  SettingTwoTone,
  ScissorOutlined,
  FileTextTwoTone,
} from "@ant-design/icons";

const choices = [
  {
    key: "ROCK",
    value: "Rock",
    icon: (
      <SettingTwoTone twoToneColor={"#000000"} style={{ fontSize: "20px" }} />
    ),
  },
  {
    key: "SCISSOR",
    value: "Scissor",
    icon: <ScissorOutlined style={{ color: "#FF4500", fontSize: "20px" }} />,
  },
  {
    key: "PAPER",
    value: "Paper",
    icon: (
      <FileTextTwoTone twoToneColor={"#1E90FF"} style={{ fontSize: "20px" }} />
    ),
  },
];

function generateComputerChoice() {
  return choices[Math.floor(Math.random() * 3)].key;
}

const findIfIWon = (userChoice: string, computerChoice: string) => {
  let haveIWon = false;

  if ("ROCK" === userChoice) {
    if (computerChoice === "SCISSOR") {
      haveIWon = true;
    } else {
      haveIWon = false;
    }
  } else if ("SCISSOR" === userChoice) {
    if (computerChoice === "ROCK") {
      haveIWon = false;
    } else {
      haveIWon = true;
    }
  } else {
    if (computerChoice === "ROCK") {
      haveIWon = true;
    } else {
      haveIWon = false;
    }
  }
  return haveIWon;
};

const checkTheResult = (userChoice: string | null, computerChoice: string) => {
  const choiceStatement = `Your choice was ${userChoice} and computer's choice was ${computerChoice}`;

  let didIWin: boolean | null = null;

  if (userChoice === null) {
    message.error("Select a item to play. Press Reset and start again.");
  } else {
    if (userChoice === computerChoice) {
      message.success("The match is tied. " + choiceStatement);
    } else {
      didIWin = findIfIWon(userChoice, computerChoice);
    }
  }

  const feedback =
    didIWin === null
      ? "The info says it all. Play again."
      : didIWin
      ? "Congrats you have won. " + choiceStatement
      : "Try Again. " + choiceStatement;

  return feedback;
};

export const RockPaperScissorPage = () => {
  const [computerChoice, setComputerChoice] = useState<string>(
    generateComputerChoice()
  );
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [seconds, setSeconds] = useState<number>(10);
  const [started, setStarted] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0 && started) {
        setSeconds((seconds) => seconds - 1);
      }
    }, 1000);
    if (seconds === 0) {
      setResult(checkTheResult(userChoice, computerChoice));
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds, started]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography.Title
          style={{ paddingTop: "20px" }}
          type="success"
          level={2}
        >
          Rock Paper Scissor
        </Typography.Title>
      </div>
      <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
        <Typography.Text keyboard style={{ color: "white" }}>
          Click the Start button to start the timer and choose a choice within
          the timer goes zero.
        </Typography.Text>
      </div>
      <br />
      <Row gutter={[24, 24]}>
        <Col
          xs={{ span: 24, push: 8 }}
          lg={{ span: 8, push: 11 }}
          md={{ span: 24, push: 8 }}
        >
          <Tag
            color="#0d3f4b"
            style={{
              padding: "10%",
              alignItems: "center",
            }}
          >
            {seconds}
          </Tag>
        </Col>
      </Row>
      <br />
      <Row gutter={[24, 64]}>
        {choices.map((i) => {
          return (
            <Col xs={{ span: 12 }} lg={{ span: 8, push: 2 }}>
              <Button
                type={"dashed"}
                size="large"
                children={i.value}
                onClick={() => setUserChoice(i.key)}
                icon={i.icon}
              />
            </Col>
          );
        })}
        <Col xs={{ span: 12 }} lg={{ span: 24 }}></Col>
        <Col
          style={{ paddingBottom: "30px" }}
          xs={{ span: 12, push: 2 }}
          lg={{ span: 12, push: 2 }}
        >
          <Button
            disabled={started}
            children="Start"
            onClick={() => setStarted(true)}
          />
        </Col>
        <Col xs={{ span: 12, push: 2 }} lg={{ span: 12, push: 6 }}>
          <Button
            children="Reset"
            onClick={() => {
              setSeconds(10);
              setComputerChoice(generateComputerChoice());
              setStarted(false);
              setUserChoice(null);
            }}
          />
        </Col>
        {seconds === 0 && started && (
          <Col span={22} push={2}>
            <Typography.Title style={{ color: "white" }} code level={3}>
              {result}
            </Typography.Title>
          </Col>
        )}
      </Row>
      {seconds === 10 && started && message.success("timer has started")}
    </>
  );
};
