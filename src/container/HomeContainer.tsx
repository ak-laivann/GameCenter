import "antd/es/input/style/css";
import "antd/es/menu/style/css";
import React, { useState } from "react";
import { RootRouter } from "../Router";
import { Layout, Menu } from "antd";
import {
  BulbTwoTone,
  CalculatorTwoTone,
  SlidersTwoTone,
  DollarTwoTone,
  HourglassTwoTone,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
const { Content, Sider } = Layout;

const iconSize = { fontSize: "30px" };

const items: { id: string; icon: React.ReactElement; title: string }[] = [
  {
    id: "maths",
    icon: <BulbTwoTone style={iconSize} twoToneColor="#f0a500" />,
    title: "Maths Guessing Game",
  },
  // {
  //   id: "tictactoe",
  //   title: "Noughts and Crosses",
  //   icon: <CalculatorTwoTone style={iconSize} twoToneColor="#007bff" />,
  // },
  // {
  //   id: "memory",
  //   title: "Find the pairs by flipping",
  //   icon: <SwitcherTwoTone style={iconSize} twoToneColor="#28a745" />,
  // },
  {
    id: "rps",
    title: "Rock-Paper-Scissors",
    icon: <SlidersTwoTone style={iconSize} twoToneColor="#dc3545" />,
  },
  {
    id: "toss",
    title: "Coin Toss",
    icon: <DollarTwoTone style={iconSize} twoToneColor="#ffc107" />,
  },
  // {
  //   id: "lightsout",
  //   title: "Un-light",
  //   icon: <ApiTwoTone style={iconSize} twoToneColor="#17a2b8" />,
  // },
  {
    id: "reaction",
    title: "Reaction Game",
    icon: <HourglassTwoTone style={iconSize} twoToneColor="#6f42c1" />,
  },
];

const sideBarItems: any[] = items.map((i) => ({
  key: i.id,
  icon: i.icon,
  label: i.title,
}));

export const HomeContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeKeyFromURL = location.pathname.split("/")[2];
  const [activeKey, setActiveKey] = useState<string>(activeKeyFromURL);

  const onSideBarItemClick = (key: string) => {
    navigate(`../games/${key}`);
    setActiveKey(key);
  };

  return (
    <Layout style={{ minHeight: "100vh", display: "flex" }}>
      <Content
        style={{
          margin: "10px",
          padding: "10px 20px 0px 20px",
          backgroundColor: "rgba(10, 10, 10, 0.7)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 1)",
          borderRadius: "80px",
          height: "100%",
          color: "white",
          flex: 1,
          minHeight: "90vh",
        }}
      >
        <RootRouter />
      </Content>
      <Sider
        width={"20%"}
        style={{
          margin: "10px",
          backgroundColor: "rgba(10, 10, 10, 0.7)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 1)",
          borderRadius: "80px",
          color: "white",
        }}
      >
        <Menu
          defaultSelectedKeys={["maths"]}
          onClick={(e) => onSideBarItemClick(e.key)}
          activeKey={activeKey}
          items={sideBarItems}
          theme="dark"
          style={{ backgroundColor: "inherit", paddingTop: "60%" }}
        />
      </Sider>
    </Layout>
  );
};
