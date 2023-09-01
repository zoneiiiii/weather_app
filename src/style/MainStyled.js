import { styled } from "styled-components";

export const VideoBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 30px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Rajdhani;
  height: 570px;
  justify-content: center;
`;

export const AppLabel = styled.span`
  color: black;
  font-size: 30px;
  font-weight: 500;
  margin: 20px auto;
  font-family: Boogaloo;
`;

export const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin 40px auto;
`;

export const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

export const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: black solid 1px;
  border-radius 2px;
  margin: 20px;
  & input {
    padding: 10px;
    font-size: 14px;
    border:none;
    outline:none;
    font-weight: bold;
    font-family: Rajdhani;
  }
  & button{
    padding: 0 10px;
    font-size: 14px;
    color: white;
    background-color: black;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
    font-family: Rajdhani;
    transition: background-color 0.3s ease;
  }
  & button: hover {
    background-color: #4c4d4c;
  }

`;
