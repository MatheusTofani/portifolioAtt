import { useState } from "react";
import { GlobalStyle, Container } from "./style";
import Aside from "./containers/aside";
import Desc from "./containers/sobre";
import Home from "./containers/home";
import Projetos from "./containers/projetos";
import Footer from "./containers/footer";

function App() {
  const [activeTab, setActiveTab] = useState("home");


  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "sobre":
        return <Desc />;
        case "projetos":
        return <Projetos />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <GlobalStyle />
      <Aside setActiveTab={setActiveTab} />
      <Container>
        {renderContent()}
<Footer />
      </Container>
    </>
  );
}

export default App;
