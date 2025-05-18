import { Card } from "./FeaturesHomeCard.style";

interface props {
  title: string;
}

function FeaturesHomeCard(props: props) {
  const texto: string =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus, autem tempore minus, ex delectus expedita minima ratione mollitia ipsa similique libero consequatur quis perspiciatis iure dignissimos soluta harum cum in consequuntur! Vero similique praesentium molestiae velit quasi dignissimos repellendus, hic fuga pariatur obcaecati quos debitis porro omnis, ab beatae.";

  return (
    <Card>
      <span style={{ fontWeight: "bolder" }}>{props.title}</span>
      <p style={{textAlign:"justify",padding:"0.4rem"}}>{texto}</p>
    </Card>
  );
}

export default FeaturesHomeCard;
