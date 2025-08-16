import styled from "styled-components";
import { Link } from "react-router-dom";

/* contenedor fijo */
export const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7rem; /* aumentado */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

/* imagen de fondo (desde public/banner.jpg) */
export const Bg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("/82801.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: saturate(0.95) contrast(0.92);
  transform-origin: center;
  will-change: transform;
`;

/* overlay para contraste y legibilidad */
export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(6, 11, 16, 0.45), rgba(6, 11, 16, 0.25));
`;

/* Link estilizado para el icono - colocado a la izquierda absoluta */
export const HomeLink = styled(Link)`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%); /* base centrado verticalmente */

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease, box-shadow 160ms ease;

  /* ICON COLOR: blanco */
  svg {
    width: 24px;
    height: 24px;
    color: #ffffff;
  }

  /* On hover we ADD a slight upward move while keeping the -50% baseline */
  &:hover {
    transform: translateY(-50%) translateY(-3px);
    background: rgba(255, 255, 255, 0.06);
    box-shadow: 0 8px 18px rgba(2, 6, 23, 0.18);
  }

  &:hover svg {
    color: #ffffff; /* sigue siendo blanco al hover */
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 520px) {
    left: 12px;
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

/* contenido del header (centrado y con mayor anchura) */
export const Content = styled.div`
  position: relative;
  z-index: 2;
  width: min(2200px, 96%);
  display: flex;
  align-items: center;
  justify-content: center; /* esto centra el título horizontalmente */
  gap: 20px;
  pointer-events: auto;
  padding: 0 16px;
`;

/* título elegante y fino */
export const Title = styled.h1`
  margin: 0;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 6px 22px rgba(2, 6, 23, 0.6);
  line-height: 1.05;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  width: 100%;

  @media (max-width: 720px) {
    font-size: clamp(0.95rem, 4vw, 1.1rem);
  }
`;
