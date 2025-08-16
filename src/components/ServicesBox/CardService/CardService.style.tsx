// CardService.style.tsx
import styled from "styled-components";

const Card = styled.div`
  width: 100%;                 /* ocupa toda la columna del grid */
  margin: 0;                   /* el espacio lo da el gap del grid padre */
  border: 1px solid grey;
  box-shadow: 0 0 4px 2px rgba(128, 128, 128, 0.7);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 18px;
  box-sizing: border-box;
  background: linear-gradient(180deg, rgba(7,20,40,0.65), rgba(10,30,60,0.5));
`;

const Card_Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;      /* 3 filas */
  gap: 10px;
`;

const Card_Seccion1 = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 100%;
`;

const Card_Seccion1_p1 = styled.p`
  margin: 0;
  text-align: center;
  width: 100%;
  font-size: xx-large;
  font-weight: 900;
`;

const Card_DescripcionWrapper = styled.div`
  width: 100%;
  padding: 0 5%;               /* margen interno simétrico */
  box-sizing: border-box;
`;

const Card_Seccion1_p2 = styled.p`
  margin: 0;
  text-align: left;
  font-size: larger;
  /* quitamos el -1rem que empujaba hacia arriba y podía recortar */
`;

const Card_Fila3 = styled.div`
  width: 100%;
  padding: 8px 5% 0;           /* mismo padding lateral que la fila 2 */
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card_Seccion2 = styled.div`
  flex: 0 0 auto;
  text-align: left;
  margin: 0;
  padding: 0;                  /* sin padding para alinear exacto con la descripción */
  font-size: xx-large;
  font-weight: 800;
  text-shadow: 1px 0 black, -1px 0 black, 0 1px black, 0 -1px black;
  background: transparent;
  border: none;
  box-shadow: none;
`;

const Card_Seccion3 = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;

  .carrito-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .carrito-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .sr-only {
    display: none;
  }
`;

const Card_Seccion_Children = styled.div`
  margin-top: 12px;
  padding: 0 5%;               /* opcional: alinear con filas 2 y 3 */
  box-sizing: border-box;
`;

export const Styles = {
  Card,
  Card_Main,
  Card_Seccion1,
  Card_Seccion1_p1,
  Card_DescripcionWrapper,
  Card_Seccion1_p2,
  Card_Fila3,
  Card_Seccion2,
  Card_Seccion3,
  Card_Seccion_Children,
};
