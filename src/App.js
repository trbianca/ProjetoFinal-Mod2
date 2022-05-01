import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Todoflix from "./Images/todoflix.png";
import Usuario from "./Images/usuario.png";
import SetaBaixo from "./Images/setaBaixo.png";
import Home from "./Rotas/Home";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Todos from "./Rotas/Todos";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    text-decoration: none;
  }
`;

const DivHeader = styled.div`
  width: 100%;
  height: 15vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DivLeftHeader = styled.div`
  // background-color: grey;
  width: 30%;
  margin-left: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ButtonCategorias = styled.button`
  width: 120px;
  height: 30px;
  background-color: black;
  border: none;
  color: white;
  font-size: 1em;
`;

const DivRightHeader = styled.div`
  width: 40%;
  height: 10vh;
  // background-color: grey;
  display: flex;
  align-items: center;
  margin-right: 45px;
  justify-content: space-around;
`;

const ButtonAddFilmes = styled.button`
  width: 120px;
  height: 50px;
  background-color: #dc143c;
  border: none;
  border-radius: 5px;
  color: white;
`;

const InputHeader = styled.input`
  width: 50%;
  height: 3vh;
  border-radius: 5px;
  border-color: white;
  color: white;
  background: transparent;
`;

const UlRotas = styled.ul`
  position: absolute;
  // border: solid white;
  color: white;
  background-color: black;
  list-style: none;
  width: 10vw;
  height: 20vh;
  top: 10%;
  left: 24%;
`;

const LiRotas = styled.li`
  height: 5vh;
  font-size: 1em;
`;

export default class App extends Component {
  state = {
    boxCategorias: false
  };

  handleCategorias = () => {
    this.setState({ boxCategorias: !this.state.boxCategorias });
  };

  render() {
    return (
      <Router>
        <GlobalStyle />

        <DivHeader>
          
            <DivLeftHeader>
              <img src={Todoflix} alt="Todoflix" />

              <Link to="/">Início</Link>

              <ButtonCategorias onClick={this.handleCategorias}>
                Categorias ▼
              </ButtonCategorias>
              {this.state.boxCategorias && (
                <UlRotas>
                  <LiRotas>
                    <Link to="/todos">Todos</Link>
                  </LiRotas>
                  <LiRotas>Favoritos</LiRotas>
                  <LiRotas>Ja Vistos</LiRotas>
                  <LiRotas>Adicionados</LiRotas>
                </UlRotas>
              )}
            </DivLeftHeader>


          

          <DivRightHeader>
            <ButtonAddFilmes>Adicionar filmes</ButtonAddFilmes>

            <InputHeader type="text" />

            <div>
              <img src={Usuario} alt="usuario" />
              <img src={SetaBaixo} alt="seta-para-baixo" />
            </div>
          </DivRightHeader>
        </DivHeader>

        <Routes>
          <Route path="/" element={<Home />} /> 
            <Route path="/todos" element={<Todos />} />
            </Routes>
        </Router>
    );
  }
}

