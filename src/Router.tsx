import { Navigate, Route, Routes } from "react-router-dom";
import { MathGame } from "./pages/MathGame.layout";
import { RockPaperScissorPage } from "./pages/RockPaperScissors.layout";
import { CoinTossPage } from "./pages/CoinToss.layout";
import { ReactionTimeTestingPage } from "./pages/ReactionTimeTester.layout";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="maths" element={<MathGame />} />
      <Route path="rps" element={<RockPaperScissorPage />} />
      <Route path="toss" element={<CoinTossPage />} />
      <Route path="reaction" element={<ReactionTimeTestingPage />} />
    </Routes>
  );
};
