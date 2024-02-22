import { useState } from "react";
import styled from "styled-components";
function Home() {
  const [select, setSelect] = useState("O");

  const [firstLine, setFirstLine] = useState([[], [], []]);
  const [secondLine, setSecondLine] = useState([[], [], []]);
  const [thirdLine, setThirdLine] = useState([[], [], []]);

  //첫번째 줄
  const onClickFirstLineFirstBtn = () => {
    setFirstLine((prev) => {
      if (prev.length === 3 || prev.length > 3) {
        return (prev[0] = [select]);
      }
      return [...prev, (prev[0] = [select])];
    });
    select === "O" ? setSelect("X") : setSelect("O");

    console.log(firstLine);
  };

  const onClickFirstLineSecondBtn = (e) => {
    setFirstLine((prev) => {
      if (prev.length === 3 || prev.length > 3) {
        return (prev[1] = [select]);
      }
      return [...prev, (prev[1] = [select])];
    });

    select === "O" ? setSelect("X") : setSelect("O");
    console.log(firstLine);
  };

  const onClickFirstLineThirdBtn = () => {
    setFirstLine((prev) => {
      if (prev.length === 3 || prev.length > 3) {
        return (prev[2] = [select]);
      }
      return [...prev, (prev[2] = [select])];
    });
    select === "O" ? setSelect("X") : setSelect("O");
    console.log(firstLine);
  };

  //두번째 줄
  const onClickSecondLineFirstBtn = () => {
    setSecondLine((prev) => [...prev, (prev[0] = [select])]);
    select === "O" ? setSelect("X") : setSelect("O");

    console.log(firstLine);
  };

  const onClickSecondLineSecondBtn = () => {
    setSecondLine((prev) => [...prev, (prev[1] = [select])]);
    select === "O" ? setSelect("X") : setSelect("O");

    console.log(firstLine);
  };
  const onClickSecondLineThirdBtn = () => {
    setSecondLine((prev) => [...prev, (prev[2] = [select])]);
    select === "O" ? setSelect("X") : setSelect("O");

    console.log(firstLine);
  };

  //세번째 줄
  const onClickThirdLineFirstBtn = () => {
    setThirdLine((prev) => [...prev, (prev[0] = [select])]);

    select === "O" ? setSelect("X") : setSelect("O");

    console.log(firstLine);
  };
  const onClickThirdLineSecondBtn = () => {
    setThirdLine((prev) => [...prev, (prev[1] = [select])]);
    select === "O" ? setSelect("X") : setSelect("O");

    console.log(firstLine);
  };
  const onClickThirdLineThirdBtn = () => {
    setThirdLine((prev) => [...prev, (prev[2] = [select])]);
    select === "O" ? setSelect("X") : setSelect("O");

    console.log(firstLine);
  };

  return (
    <>
      <div>Tick-Tack-Tok</div>
      <TickTockDiv>
        <DivButton onClick={onClickFirstLineFirstBtn}>{firstLine[0]}</DivButton>
        <DivButton onClick={onClickFirstLineSecondBtn}>
          {firstLine[1]}
        </DivButton>
        <DivButton onClick={onClickFirstLineThirdBtn}>{firstLine[2]}</DivButton>
      </TickTockDiv>
      {/*줄나눔*/}
      <TickTockDiv>
        <DivButton onClick={onClickSecondLineFirstBtn}>
          {secondLine[0]}
        </DivButton>
        <DivButton onClick={onClickSecondLineSecondBtn}>
          {secondLine[1]}
        </DivButton>
        <DivButton onClick={onClickSecondLineThirdBtn}>
          {secondLine[2]}
        </DivButton>
      </TickTockDiv>
      {/*줄나눔*/}
      <TickTockDiv>
        <DivButton onClick={onClickThirdLineFirstBtn}>{thirdLine[0]}</DivButton>
        <DivButton onClick={onClickThirdLineSecondBtn}>
          {thirdLine[1]}
        </DivButton>
        <DivButton onClick={onClickThirdLineThirdBtn}>{thirdLine[2]}</DivButton>
      </TickTockDiv>
    </>
  );
}

export default Home;

const TickTockDiv = styled.div`
  background-color: grey;
  width: 330px;
  height: 100px;
  display: flex;
`;

const DivButton = styled.div`
  border-color: black;
  border-style: solid;
  width: 100px;
  margin-right: 10px;
  margin-bottom: 1px;
`;
