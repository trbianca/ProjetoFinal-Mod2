import React, { Component } from "react";
import styled from "styled-components";
import Shrek from "../Images/Shrek.png";
import HomemAranha from "../Images/homem-aranha.png";
import VoltarSozinho from "../Images/hoje-eu-quero-voltar-sozinho.png";
import HorasVolta from "../Images/que-horas-ela-volta.png";
import SonhoLiberdade from "../Images/um-sonho-de-liberdade.png";
import Umma from "../Images/Umma.jpg"


const H1Todos = styled.h1`
    font-size: 1em;
`
const PTodos = styled.p`
  font-size: 0.7em;
`

const InputTodos = styled.input`
  position: relative;
  bottom: 55px;
  left: 69%;
  border-radius: 5px;
  border-color: white;
  color: white;
  background: transparent;
  width: 245px;
`


const DivEngloba = styled.div`
  background-color: black;
  width: 100%;
  height: 400vh;
  display: flex;
  flex-direction: column;
`

const DivFilmes = styled.div`
  // background-color: grey;
  width: 30%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  padding-bottom: 5%;
`

const DivEstab = styled.div`
  width: 70%;
  height: 100vh;
  // background-color: pink;
  position: relative;
  left: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  
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
      },
      {
        img: Umma,
        nome: "Umma",
        description:
          "Amanda e sua filha vivem uma vida tranquila em uma fazenda americana, mas quando os restos mortais de sua mãe, com quem não tinha muito contato, chegam da Coréia, Amanda fica assombrada pelas memórias e o medo de se transformar em sua própria mãe."
      },
    ],

    filmesFiltrados: []
  };

  filtro = (event) =>{
    this.setState({filmesFiltrada : this.state.filmes})

    const filtro = this.state.filmesFiltrados.filter((item) =>{
        if(item.nome.toLowerCase().includes(event.target.value.toLowerCase())){
            return true
        }
    })
    this.setState({filmesFiltrados : filtro})
}

componentDidMount (){
    this.setState({filmesFiltrados: this.state.filmes})
}

  render() {
    return (
      <div>


      <DivEngloba>
        
          <InputTodos onChange={this.filtro} type="text" placeholder="🔎 Pesquisar"/>
        <DivEstab>
        {this.state.filmesFiltrados.map(item =>
          (
            <DivFilmes>
              <H1Todos>{item.nome}</H1Todos>
              <img src={item.img}/>
              <PTodos>{item.description}</PTodos>
            </DivFilmes>
          )
          )}
          </DivEstab>
      </DivEngloba>

      </div>
    );
  }
}
