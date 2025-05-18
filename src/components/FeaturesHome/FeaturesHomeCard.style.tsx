import styled from "styled-components";

export const Card = styled.main`
  border: solid 1px grey;
  width: 25%;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.3), 0px 6px 8px rgba(0, 0, 0, 0.15);
  padding: 0.3rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
  transform: translateY(-8px);
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.35), 
              0px 8px 12px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
  
  cursor:pointer;
}
`
