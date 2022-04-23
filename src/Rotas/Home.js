import React, { Component } from "react";
import styled from "styled-components";
import ImgCapFantastico from "../Images/CapitaoFantastico.png";
import Favoritar from "../Images/like.png";
import Like from "../Images/likeVerde.png";
import Shrek from "../Images/Shrek.png";
import HomemAranha from "../Images/homem-aranha.png";
import VoltarSozinho from "../Images/hoje-eu-quero-voltar-sozinho.png";
import HorasVolta from "../Images/que-horas-ela-volta.png";
import SonhoLiberdade from "../Images/um-sonho-de-liberdade.png";
import Carousel from "nuka-carousel";

const SectionDestaque = styled.section`
  width: 100%;
  height: 80vh;
  background-color: black;
  display: flex;
  align-items: center;
`;

const SectionCarrossel = styled.section`
  width: 100%;
  height: 50vh;
  background-color: black;
`;

const DivImgCapFant = styled.section`
  width: 33%;
  height: 38vh;
  background-color: black;
  margin-left: 45px;
`;

const DivInfCapFant = styled.section`
  width: 33%;
  height: 38vh;
//   background-color: pink;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

const ImgCapFant = styled.img`
  width: 100%;
`;

const DivLike = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50px;
  height: 30px;
//   background-color: green;
  align-items: center;
`;

const DivMovies = styled.div`
//   background-color: grey;
  width: 30%;
  height: 15vh;
`;

const TheCarousel = styled(Carousel)`
  width: 100%;
  height: 10vh;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
`;

const DivCarousel = styled.div``;

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
      <div>
        <SectionDestaque>
          <DivImgCapFant>
            <ImgCapFant src={ImgCapFantastico} alt="Capitao-Fantastico" />
          </DivImgCapFant>

          <DivInfCapFant>
            <div>
              <img src={Favoritar} alt="Favoritar" />
            </div>
            <h2>Visto recentemente</h2>
            <h1>Capitao Fantástico</h1>
            <p>
              Nas florestas do estado de Washington, um pai cria seus seis
              filhos longe da civilização, em uma rígida rotina de aventuras.
              Ele é forçado a deixar o isolamento e leva sua família para
              encarar o mundo, desafiando sua ideia do que significa ser pai.
            </p>
            <DivLike>
              <p>4/5</p>
              <img src={Like} alt="Like" />
            </DivLike>
          </DivInfCapFant>
        </SectionDestaque>

        <SectionCarrossel>
          <TheCarousel
            slidesToShow={3}
            autoplay="ture"
            autoplayInterval={2500}
            adaptiveHeight={true}
            wrapAround={true}
          >
            {this.state.filmes.map((item) => (
              <DivCarousel>
                <img src={item.img} alt={item.nome} />
                <h2>{item.nome}</h2>
                <p>{item.description}</p>
              </DivCarousel>
            ))}
          </TheCarousel>
        </SectionCarrossel>
      </div>
    );
  }
}
