import * as S from "../style/MainStyled";
import { Modal, Alert } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  borderLine: "none",
  outline: "none",
  fontStyle: "italic",
  p: 2,
};

const Main = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [errorText, setErrorText] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCity("");
  };

  const isEnglishAlphabet = (str) => /^[A-Za-z]+$/.test(str);

  const fetchWeather = async (e) => {
    e.preventDefault();
    setErrorText("");

    if (!isEnglishAlphabet(city) || !city) {
      setErrorText("Please enter a valid city name (English only).");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );
      const weather = response.data;
      navigate("/weather", { state: weather });
    } catch (error) {
      setErrorText("City not found or does not match the API data.");
    }
  };

  return (
    <>
      <S.AppLabel>Weather App</S.AppLabel>
      <S.WeatherLogo src="/icons/perfect-day.svg" />
      <S.ChooseCityLabel>Find Weather of your city</S.ChooseCityLabel>
      <S.SearchBox onSubmit={fetchWeather}>
        <input
          placeholder="City name"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button type="submit" onClick={handleOpen}>
          Search
        </button>
      </S.SearchBox>
      {errorText !== "" && (
        <Modal open={open} onClose={handleClose}>
          <Alert severity="error" sx={modalStyle}>
            <strong>Error</strong> - {errorText}
          </Alert>
        </Modal>
      )}
    </>
  );
};
export default Main;
