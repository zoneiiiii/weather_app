import * as S from "../style/WeatherInfoStyled";
import { useNavigate, useLocation } from "react-router-dom";

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
  "13d": "/icons/snow.png",
  "13n": "/icons/snow.png",
  "50d": "/icons/mist.png",
  "50n": "/icons/mist.png",
};

const WeatherInfoComponent = (props) => {
  const { name, value } = props;

  return (
    <S.InfoContainer>
      <S.InfoIcon src={WeatherInfoIcons[name]} />
      <S.InfoLabel>
        {value} <span>{name}</span>
      </S.InfoLabel>
    </S.InfoContainer>
  );
};

const WeatherComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const weather = location.state;

  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <>
      <S.Condition>
        <span>{`${Math.floor(weather?.main?.temp - 273)}℃`}</span>
        {` | ${weather?.weather[0].description}`}
      </S.Condition>
      <S.WeatherIcon src={WeatherIcons[weather?.weather[0].icon]} />
      <S.Location>{`${weather?.name}, ${weather?.sys?.country}`}</S.Location>
      <S.WeatherInfoLabel>Weather Info</S.WeatherInfoLabel>
      <S.WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
      </S.WeatherInfoContainer>

      <S.BackButton onClick={() => navigate("/")}>Back</S.BackButton>
    </>
  );
};
export default WeatherComponent;
