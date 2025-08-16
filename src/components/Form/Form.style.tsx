import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 2rem;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  background: rgba(15, 25, 45, 0.85); /* tono oscuro semitransparente */
  color: #f5f5f5;
  margin: 2rem auto;
  max-width: 1000px; /* centrado y más limpio */
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
  flex-wrap: wrap; /* mejor en pantallas pequeñas */
`;

export const Input = styled.input`
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border: 1px solid #555;
  border-radius: 6px;
  flex: 1;
  background-color: #1e2a3a;
  color: #f5f5f5;

  &::placeholder {
    color: #aaa;
  }
`;

export const RedButton = styled.button`
  padding: 0.7rem 1.5rem;
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #c92c38; /* rojo más oscuro */
  }
`;
