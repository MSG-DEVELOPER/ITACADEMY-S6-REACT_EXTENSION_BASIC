// ServicesBox.style.ts
import styled from "styled-components";

/* contenedor principal */
export const Main = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  box-sizing: border-box;
  background: transparent;
`;

/* contenedor interno que limita ancho y centra contenido */
export const Inner = styled.div`
  width: min(1200px, 96%);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

/* grid para las cards: responsivo, minimalista */
export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  align-items: start;
`;

/* caja para el precio total alineada a la derecha */
export const BoxTotalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.6rem;
`;

/* estilo del total: discreto, con borde y fondo sutil */
export const ShowTotal = styled.div`
  font-size:  clamp(0.95rem, 1.6vw, 1.25rem);
  display: flex;
   color: #ffffff;
  background: rgba(0, 0, 0, 0.38); /* sutil y garantiza contraste */
  padding: 0.5rem 0.9rem;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.04);
  box-shadow: 0 8px 20px rgba(2,6,23,0.18);
   z-index: 30;
  position: relative;
`;


/* wrapper para el formulario o acciones (separación y alineado) */
export const FormWrapper = styled.div`
  width: 100%;
  margin-top: -5rem;
  display: flex;
  justify-content: center;
`;

/* pequeños helpers (opcional) */
export const SectionHeading = styled.h2`
  margin: 0 0 0.25rem 0;
  font-size: 1.05rem;
  color: rgba(230,247,255,0.95);
  font-weight: 700;
`;
