import styled from "styled-components";

export const SCard= styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const SCardContent =styled.div`

border: 1px solid grey;
border-radius: 5px;
width: 70%;
margin-bottom: 2rem;
box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.2),  
    -4px 0 8px rgba(0, 0, 0, 0.05),  
    4px 0 8px rgba(0, 0, 0, 0.05);  
padding: 1rem;
display: flex;
justify-content: space-around;


`
export const SPersonalData = styled.div`
width: 30%;
flex-wrap: wrap;
p{
    color: grey;
    margin: 5px;
}

h1{
    margin:0;
    word-break: break-word;  /* rompe la palabra si es muy larga */
  overflow-wrap: break-word; /* ayuda a ajustar texto */
  white-space: normal; /* permite salto de línea */
}
`

export const SServices = styled.div`
width: 30%;
 ul {
    padding-left: 0; 
    list-style-position: inside; 
    margin: 0;
  }

`

export const SPrice= styled.div`
width: 30%;
display: flex;
flex-direction: column;
gap:1px;
p{
    color: grey;
    align-self: end;
   
     margin: 0;
}

h1{
    
      margin: 0;
     align-self: end;
}
    
`

