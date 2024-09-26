import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme.colors["base-post"]};
  padding: 2.5rem 0 7.5rem;
  text-align:center;
`
export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    img {
    margin: auto;
    }
`;