import React, { Component } from "react";
import styled from "styled-components";
import Shrek from "../Images/Shrek.png";
import HomemAranha from "../Images/homem-aranha.png";
import VoltarSozinho from "../Images/hoje-eu-quero-voltar-sozinho.png";
import HorasVolta from "../Images/que-horas-ela-volta.png";
import SonhoLiberdade from "../Images/um-sonho-de-liberdade.png";

const DivPrincipal = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DivTodos = styled.div`
    // background-color: grey; 
    width: 15vw;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    

`;

const DivElementos = styled.div`
  width: 80%;
  height: 30%;
//   background-color: pink;
`;

const H1Todos = styled.h1`
    font-size: 1em;
`

const ImgTodos = styled.img`
    width: 100%;
`

const ParagrafoTodos = styled.p`
    font-size: 0.5em;
`

export default class Body extends Component {
  state = {
    filmes: [
      {
        img: Shrek,
        nome: "Shrek",
        description:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão."
      },
      {
        img: HomemAranha,
        nome: "Homem Aranha",
        description:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo."
      },
      {
        img: VoltarSozinho,
        nome: "Hoje Eu Quero Voltar Sozinho",
        description:
          "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga."
      },
      {
        img: HorasVolta,
        nome: "Que Horas Ela Volta",
        description:
          "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel."
      },
      {
        img: SonhoLiberdade,
        nome: "Um Sonho de Liberdade",
        description:
          "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão."
      }
    ]
  };


  render() {
    return (
      <DivPrincipal>
        {this.state.filmes.map((item) => (
          <DivTodos>
              <DivElementos>
            <ImgTodos src={item.img} alt={item.nome} />
            <H1Todos>{item.nome}</H1Todos>
            <ParagrafoTodos>{item.description}</ParagrafoTodos>
            </DivElementos>
          </DivTodos>
        ))}
      </DivPrincipal>
    );
  }
}
