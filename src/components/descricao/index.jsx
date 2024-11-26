import {
    CmdImage,
    Container,
    DescContainer,
    DescContent,
    DescHeader,
    DescTitle,
    Image,
    TextContainer,
  } from "./style";
  import "./style.css";
  import Eu from "../../../assets/eu.png";
  import Cmd from "../../../assets/cmd.png";
  import Typewriter from "typewriter-effect";
  import { Tilt } from 'react-tilt'
  
  const Descricao = () => {
    return (
      <Tilt
        className="tilt"
        options={{
          max: 25,
          scale: 1.1,
          speed: 400,
        }}
      >
        <Container>
          <DescContainer>
            <Image src={Eu} />
            <DescContent>
              <DescHeader>
                <CmdImage src={Cmd} />
                Prompt de Comando
              </DescHeader>
  
              <TextContainer>
                <DescTitle>
                  <Typewriter
                    options={{
                      strings: ["Sobre mim"],
                      autoStart: true,
                      delay: 75,
                      cursor: "_",
                      deleteSpeed: Infinity,
                      loop: false,
                      cursorClassName: "custom-cursor",
                      wrapperClassName: "typewriter",
                    }}
                  />
                </DescTitle>
  
                <Typewriter
                  options={{
                    strings: [
                      "Sou Matheus, tenho 20 anos e sou desenvolvedor front-end com experiência em tecnologias como React, Bootstrap e TypeScript. Tenho paixão por criar interfaces modernas e responsivas, sempre focando em proporcionar uma experiência de usuário agradável e eficiente.",
                    ],
                    autoStart: true,
                    delay: 25, // Alterado para efeito mais suave
                    cursor: "",
                    deleteSpeed: Infinity,
                    loop: false,
                    wrapperClassName: "typewriterText",
                  }}
                />
              </TextContainer>
            </DescContent>
          </DescContainer>
        </Container>
      </Tilt>
    );
  };
  
  export default Descricao;
  