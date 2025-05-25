import { Main } from "./Home.style";
import { Title } from "./Home.style";
import { Footer } from "./Home.style";
import { Img } from "./Home.style";

import { Link } from "react-router-dom";

import FeaturesHomeCard from "../../components/FeaturesHome/FeaturesHomeCard";

function Home() {
  return (
    <Main>
      <br />
      <br />
      <br />
      <br />

      
      <Title> - SOLÉ BROTHERS TECNOLOGY - </Title>

      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "space-around",
        }} to="/shop"
      >
        <FeaturesHomeCard title="SEO" />
        <FeaturesHomeCard title="ADS" />
        <FeaturesHomeCard title="WEB" />
      </Link>

      <Footer>
        <Img src="/C.png" />
        <Img src="/HtmlYCss.png" />
        <Img src="/JS.jpg" />
        <Img src="/php.jpg" />
        <Img src="/react.png" />
      </Footer>
    </Main>
  );
}

export default Home;
