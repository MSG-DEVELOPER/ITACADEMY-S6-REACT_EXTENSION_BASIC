import { Home } from "lucide-react";
import { HeaderBar, Bg, Overlay, Content, Title, HomeLink } from "./Header.style";

export default function Header() {
  return (
    <HeaderBar role="banner" aria-label="Header principal">
      <Bg />
      <Overlay />
      <Content>
        <HomeLink to="/" aria-label="Volver al inicio" title="Inicio">
          <Home />
        </HomeLink>

        <Title>EL MERCADO MAS GRANDE DEL MUNDO</Title>
      </Content>
    </HeaderBar>
  );
}
