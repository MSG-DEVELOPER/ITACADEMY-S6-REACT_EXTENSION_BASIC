import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
 margin: 2rem auto;
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  flex: 1;
`;

export const RedButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;
