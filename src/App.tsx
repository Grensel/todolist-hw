import "./App.css";
import { S } from "./hw/components/TodolistItem_Styles";
import { HomeWork1 } from "./hw/HW1/HomeWork01-1";
import { HomeWork2 } from "./hw/HW2/HomeWork01-2";
import { HomeWork3 } from "./hw/HW3/HomeWork01-3";
import { HomeWork4 } from "./hw/HW4/HomeWork-01-4";

function App() {
  return (
    <S.TodolistHW>
      <HomeWork1 />
      <HomeWork2 />
      <HomeWork3 />
      <HomeWork4 />
    </S.TodolistHW>
  );
}

export default App;
