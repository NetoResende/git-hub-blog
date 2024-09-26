import styled from "styled-components";

export const FormContent = styled.form`
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
  margin: 0 auto;

  margin-top: 1rem;
  display: flex;
  input {
   flex: 1;
   padding: 1rem;
   border-radius: 6px;
   background: ${props=>props.theme.colors["base-input"]};
   border: 1px solid ${props => props.theme.colors["base-label"]};
   margin-top: 1rem;
   &::placeholder {
    color: ${props => props.theme.colors["base-label"]};
   }
  }

`;