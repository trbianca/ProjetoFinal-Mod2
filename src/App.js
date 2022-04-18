import React, {Component} from "react"
import styledComponents from "styled-components"
// import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"
import LogoTodoflix from "./images/todoflix.png"
import SetaBaixo from "./images/setaBaixo.png"
import Usuario from "./images/usuario.png"


const SectionHeader = styledComponents.section`
width: 100%;
background-color: black;
height: 10vh;
display: flex;
align-items: center;
justify-content: space-between;
`

const LeftDivHeader = styledComponents.div`
  // background-color: grey;
  width: 30%;
  height: 8vh;
  padding-left: 50px;
  display: flex;
  justify-content: space-around;
  color: white;
  align-items: center;
  font-weight: 500;
`

const DivCategoria = styledComponents.div`
  display: flex;
`

const DivInicio = styledComponents.div`
  padding-bottom: 8px;
`

const RightDivHeader = styledComponents.div`
  //  background-color: grey;
   width: 40%;
   height: 5vh;
   padding-right: 30px;
   display: felx;
   justify-content: space-around;
`

const AddInputDiv = styledComponents.div`
  // background-color: pink;
  width: 80%;
  display: flex;
  justify-content: space-around;
`

const ButtonHeader = styledComponents.button`
  background-color: 	#DC143C;
  height: 5vh;
  border-color: white;
  color: white;
  border-radius: 8px;
  border-width: 0.5px;
`

const InputHeader = styledComponents.input`
  width: 68%;
  height: 3vh;
  background: transparent;
  border-color: white;
  border-radius: 5px;
  border-width: 0.5px;
  margin-top: 5px;


`

const UserDiv = styledComponents.div`
  padding-left: 5px;
`

export default class App extends Component{



  render(){
    return(
      <SectionHeader>

        <LeftDivHeader>
          <div><img src={LogoTodoflix} alt="TodoLogo"/></div>
          <DivInicio>Início</DivInicio>
          
          <DivCategoria>Categoria
            <a href="/"><img src={SetaBaixo} alt="seta-para-baixo"/></a>
          </DivCategoria>

        </LeftDivHeader>

        <RightDivHeader>

          <AddInputDiv>
            <ButtonHeader>Adicionar Filme</ButtonHeader>

            <InputHeader placeholder="Pesquise aqui"/>
          </AddInputDiv>


          <UserDiv>
            <img src={Usuario} alt="usuario"/>
            <a href="/"><img src={SetaBaixo} alt="seta-para-baixo"/></a>
          </UserDiv>

        </RightDivHeader>

      </SectionHeader>
    )
  }
}

