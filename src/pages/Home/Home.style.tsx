import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(180deg, #08101a 0%, #0f1720 60%);
`;

export const ThreeBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const Overlay = styled.div`
  position: relative;
  z-index: 2;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.02), transparent);
`;

export const Brand = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  letter-spacing: 0.4px;
`;

export const HeroSection = styled.section`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 28px;
  }
`;

export const HeroText = styled.div`
  flex: 1.2;
  max-width: 680px;

  h1 {
    font-size: 2.6rem;
    margin: 0 0 12px 0;
    line-height: 1.02;
  }

  p {
    margin: 0 0 20px 0;
    color: #cbd5e1;
    font-size: 1.05rem;
  }
`;

export const PrimaryCTA = styled(Link)`
  display: inline-block;
  background: linear-gradient(90deg, #ff8a00, #ff5e62);
  color: white;
  padding: 12px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(255, 94, 98, 0.18);
`;

export const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 18px;
  width: 360px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const FeatureCard = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.02)
  );
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(2, 6, 23, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.03);

  h3 {
    margin: 0 0 6px 0;
    font-size: 1.05rem;
  }

  p {
    margin: 0;
    color: #bcd0e6;
    font-size: 0.98rem;
  }
`;

