import styled from "styled-components";

export const IssueContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(1fr);
  gap: 1rem;

  margin-top: -6rem;
`;
const BaseIssueContent = styled.div`
  background: ${(props) => props.theme.colors["base-profile"]};
  border-radius: 6px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  box-shadow: 2rem ${(props) => props.theme.colors["base-input"]};
`;
export const IssueContent = styled(BaseIssueContent)`
  background: ${(props) => props.theme.colors["base-profile"]};
  height: 200px;
  border-radius: 6px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  box-shadow: 2rem ${(props) => props.theme.colors["base-input"]};
`;
export const IssueContentMain = styled(BaseIssueContent)`
  background: transparent;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  p {
    font-size: 1.2rem;
  }
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span a {
      font-weight: bold;
      font-size: 1.2rem;
      color: ${props => props.theme.colors['blue']};
      border: 0;
      &:focus {
        border: none;
        box-shadow: none;
      }
    }
    strong {
      font-size: 1.1rem;
    }
  }
`;
export const IssueIsede = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors["blue"]};
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 1rem 0;

      a {
        color: ${(props) => props.theme.colors["blue"]};
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        gap: 0.5rem;
      }
    }
    h1 {
      padding: 0.5rem 0.5rem 0;
      font-size: 2.5rem;
      color: ${(props) => props.theme.colors["base-title"]};
    }
  }

  footer {
    display: flex;
    gap: 2rem;
    margin: 0;
    a {
      display: flex;
      gap: 0.5rem;
      text-decoration: none;

      span {
        color: ${(props) => props.theme.colors["base-subtitle"]};
        margin-top: 3px;
      }
    }
  }
`;

export const IssueContentFooter = styled(BaseIssueContent)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${(props) => props.theme.colors["base-post"]};
  margin-bottom: 1rem;
  height: 150px;
  padding: 0.5rem 2rem;
`;
