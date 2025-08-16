import styled from "styled-components";

export const SCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const SCardContent = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  width: 80%;
  padding: 1.5rem;
  background: linear-gradient(180deg, rgba(250, 250, 250, 0.95), rgba(240, 240, 240, 0.9));
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }
`;

export const SPersonalData = styled.div`
  width: 30%;

  h1 {
    margin: 0 0 0.5rem 0;
    font-size: 1.3rem;
    font-weight: 700;
    color: #071428;
    word-break: break-word;
  }

  p {
    margin: 3px 0;
    color: #666;
    font-size: 0.95rem;
  }
`;

export const SServices = styled.div`
  width: 35%;

  p {
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: #071428;
  }

  ul {
    padding-left: 1rem;
    margin: 0;
    list-style: disc;
    color: #333;

    li {
      margin-bottom: 0.25rem;
      font-size: 0.95rem;
    }
  }
`;

export const SPrice = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    color: grey;
    margin: 0;
    font-size: 0.9rem;
  }

  h1 {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 800;
    color: #e63946;
  }

  span {
    font-size: 1rem;
    color: #071428;
  }
`;
