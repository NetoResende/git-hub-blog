import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(1fr);
  gap: 1rem;

  margin-top: -5rem;
`;
export const ProfileContent = styled.div`
  background: ${(props) => props.theme.colors["base-profile"]};
  border-radius: 6px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  box-shadow: 2rem ${(props) => props.theme.colors["base-input"]};

  img {
    width: 9rem;
    height: 9rem;
    border-radius: 8px;
  }
`;

export const AsideContent = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme.colors["base-title"]};
      font-size: 2rem;
      font-weight: bold;
    }
    a {
      color: ${(props) => props.theme.colors["blue"]};
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      gap: 0.5rem;
    }
  }
  main {
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  footer {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
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
