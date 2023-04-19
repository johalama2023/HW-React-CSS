import React from "react";
import styled from "styled-components";

const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Buttons = styled.button`
  font-family: "Acme", sans-serif;
  color: #141414;
  width: 150px;
  height: 50px;
  font-size: 2em;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
`;

export default class Botones extends React.Component {
  render() {
    const { alerts } = this.props;
    return (
      <DivButtons>
        <Buttons onClick={() => window.alert(alerts.m1)}>Módulo 1</Buttons>
        <Buttons onClick={() => window.alert(alerts.m2)}>Módulo 2</Buttons>
      </DivButtons>
    );
  }
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons };
