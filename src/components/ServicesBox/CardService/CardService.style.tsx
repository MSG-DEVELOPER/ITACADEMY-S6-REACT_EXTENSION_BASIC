import styled from "styled-components";

const Card = styled.div`
  width: 70%;
  border: 1px solid grey;
  box-shadow: 0 0 4px 2px rgba(128, 128, 128, 0.7);
  margin-top: 2%;
  margin-bottom: 2%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: beige;
`;

const Card_Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Card_Seccion1 = styled.div`
  width: 30%;
  display: flex; 
  flex-direction: column; 
`;

const Card_Seccion1_p1 = styled.p`
  font-size: xx-large;
  font-weight: 900;
`;

const Card_Seccion1_p2 = styled.p`
  font-size: larger;
  margin-top: -1rem;
`;

const Card_Seccion2 = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  font-weight: 800;
  text-shadow: 1px 0 black, -1px 0 black, 0 1px black, 0 -1px black;
`;

const Card_Seccion3 = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card_Seccion_Children = styled.div`
  margin-top: 2%;
  border: 5px dotted pink;
`;

export const Styles = {
  Card,
  Card_Main,
  Card_Seccion1,
  Card_Seccion1_p1,
  Card_Seccion1_p2,
  Card_Seccion2,
  Card_Seccion3,
  Card_Seccion_Children,
};
