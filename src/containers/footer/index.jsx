import { Container, Icons, Link, Title } from "./style";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
   <Container>
    <Title>MatheusTófani © 2024</Title>
    <Icons>
        <Link>  <FaGithub /></Link>
  <Link>  <FaInstagram /></Link>
  <Link> <FaLinkedin /></Link>
   
    </Icons>
   </Container>
    );
};

export default Footer;