import { React } from "react";
import * as S from "./style/MainStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import WeatherComponent from "./components/WeatherInfoComponent";

function App() {
  return (
    <BrowserRouter>
      <S.VideoBackground>
        <S.Video autoPlay loop muted>
          <source src="/man_-_64729 (Original).mp4" type="video/mp4" />
        </S.Video>
      </S.VideoBackground>
      <S.Container>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/weather" element={<WeatherComponent />} />
        </Routes>
      </S.Container>
    </BrowserRouter>
  );
}
export default App;
