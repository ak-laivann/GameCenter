import { HomePage } from "../pages";
import { MathGame } from "../pages/MathGame.layout";
import { HomeContainer } from "./HomeContainer";
import { Navigate, Route, Routes } from "react-router-dom";

export const RootContainer = () => {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to={"games"} />} />
        <Route path="games" element={<HomePage />} />
        <Route path="games/*" element={<HomeContainer />} />
      </Routes>
    </>
  );
};
