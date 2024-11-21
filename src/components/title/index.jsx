import { TitleNameText, TitleCargo, TitleContainer } from "./style";
import React from 'react';
import Typewriter from 'typewriter-effect';

const TitleName = () => {
  return (
    <>
      <TitleContainer>
        <TitleNameText>Matheus Tófani</TitleNameText>
        <TitleCargo>
        <Typewriter 
          options={{
            strings: ['Front-End Developer', 'Web Designer', 'React Developer'],
            autoStart: true,
            loop: true,
            delay: 75, 
            deleteSpeed: 50, 
          }}
        />
        </TitleCargo>
      </TitleContainer>
    </>
  );
};

export default TitleName;
