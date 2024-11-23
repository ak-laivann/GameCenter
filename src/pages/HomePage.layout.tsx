import React from "react";
import {
  BulbTwoTone,
  SlidersTwoTone,
  DollarTwoTone,
  HourglassTwoTone,
} from "@ant-design/icons";
import { Card, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { CSS } from "styled-components/dist/types";
import backgroundImage from "../assets/background.webp";

const iconSize = { fontSize: "30px" };
const flipKeyframes = `
  @keyframes flip {
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(180deg); }
    100% { transform: rotateY(360deg); }
  }
`;

const coinFlipStyle = {
  fontSize: "30px",
  animation: "flip 3s infinite",
  display: "block",
  margin: "auto",
};

const textStyle = { color: "#fff", fontSize: "2rem" };
const headerFooterStyle: any = {
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  textAlign: "center",
  height: "100%",
};

const cardStyle: CSS.Properties = {
  textAlign: "center",
  borderRadius: "10px",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  boxShadow: "0 8px 16px rgba(150, 100, 100, 0.8)",
  color: "white",
  flexGrow: 1,
  flexBasis: "200px",
  marginTop: "10px",
};
const contentStyle: CSS.Properties = {
  padding: "20px 0",
};

const gamesRoutes: {
  id: string;
  label: string;
  icon: React.ReactElement;
  content: string;
}[] = [
  {
    id: "maths",
    label: "Guess the Number",
    icon: <BulbTwoTone style={iconSize} twoToneColor="#f0a500" />,
    content:
      "Try to guess the secret number with the fewest attempts. Challenge your brain with this fun math game!",
  },
  // {
  //   id: "tictactoe",
  //   label: "Play Noughts and Crosses",
  //   icon: <CalculatorTwoTone style={iconSize} twoToneColor="#007bff" />,
  //   content:
  //     "Play the classic Tic-Tac-Toe game against the computer. Can you get three in a row?",
  // },
  // {
  //   id: "memory",
  //   label: "Find the pairs by flipping",
  //   icon: <SwitcherTwoTone style={coinFlipStyle} twoToneColor="#28a745" />,
  //   content:
  //     "Flip the cards to find matching pairs. Test your memory and concentration with this engaging game!",
  // },
  {
    id: "rps",
    label: "Play Rock-Paper-Scissors",
    icon: <SlidersTwoTone style={iconSize} twoToneColor="#dc3545" />,
    content:
      "Challenge your computer in a game of Rock-Paper-Scissors. A simple yet strategic game of chance!",
  },
  {
    id: "toss",
    label: "Toss the coin and decide",
    icon: <DollarTwoTone style={coinFlipStyle} twoToneColor="#ffc107" />,
    content:
      "Toss the lucky coin for taking important decisions like, whether you want to propose her or not!",
  },
  // {
  //   id: "lightsout",
  //   label: "Un-light all the lights to win",
  //   icon: <ApiTwoTone style={iconSize} twoToneColor="#17a2b8" />,
  //   content:
  //     "Turn off all the lights to win. Each move affects multiple lights, making this puzzle both challenging and fun!",
  // },
  {
    id: "reaction",
    label: "React Quickly and find out the time",
    icon: <HourglassTwoTone style={iconSize} spin twoToneColor="#6f42c1" />,
    content:
      "Test your reaction time by clicking as fast as you can when the timer starts. See how quick you really are!",
  },
];

export const HomePage = () => {
  const navigate = useNavigate();

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(flipKeyframes, styleSheet.cssRules.length);

  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Layout.Header style={headerFooterStyle}>
        <div style={textStyle}>
          Waste your time (much appreciated during office hours)
        </div>
      </Layout.Header>
      <Layout.Content style={contentStyle}>
        {gamesRoutes.map((i) => {
          return (
            <Card
              key={i.id}
              style={cardStyle}
              title={
                <div
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textWrap: "pretty",
                  }}
                >
                  {i.label}
                </div>
              }
              extra={i.icon}
              children={<div style={{ fontSize: "20px" }}>{i.content}</div>}
              onClick={() => navigate(i.id)}
            />
          );
        })}
      </Layout.Content>
      <Layout.Footer style={headerFooterStyle}>
        <div style={textStyle}>Games Created by Anantha Krishnan</div>
      </Layout.Footer>
    </Layout>
  );
};
