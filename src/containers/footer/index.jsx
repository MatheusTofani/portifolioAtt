import { Container, Icons, Link, Title } from "./style";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
   <Container>
    <Title>MatheusTófani © 2024</Title>
    <Icons>
        <Link href="https://github.com/MatheusTofani" target="_blank" rel="noopener noreferrer">  <FaGithub /></Link>
  <Link href="https://www.linkedin.com/in/matheus-tofani-b85954328/" target="_blank" rel="noopener noreferrer">  <FaInstagram /></Link>
  <Link href="https://www.instagram.com/matheus.tofani/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></Link>
   
    </Icons>
   </Container>
    );
};

export default Footer;