import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import {
  AsideContent,
  MainContainer,
  MainContent,
  ProfileContainer,
  ProfileContent,
  PublicattedContent,
} from "./styled";
import { FormInput } from "./components/Form";

export function Home() {
  return (
    <div>
      <ProfileContainer>
        <ProfileContent>
          <img src="https://github.com/netoresende.png" alt="" />
          <AsideContent>
            <header>
              <h1>Neto Resende</h1>
              <a href="#">
                <span>GITHUB</span>
                <ArrowSquareOut size={28} />
              </a>
            </header>
            <main>
              <h4>
                La dolos amet obcaecati neque aperiam molestiae sint ea
                necessitatibus nemo voluptatibus sed maxime eius
                oditgrgsrdgdgsdfgasfd!
              </h4>
            </main>
            <footer>
              <a href="#">
                <GithubLogo size={24} color="#3a536b" />
                <span>NetoResende</span>
              </a>

              <a href="#">
                <Buildings size={24} color="#3a536b" />
                <span>Rocketseat</span>
              </a>
              <a href="#">
                <Users size={24} color="#3a536b" />
                <span>Seguidores</span>
              </a>
            </footer>
          </AsideContent>
        </ProfileContent>
      </ProfileContainer>
      <PublicattedContent>
        <p>Publicações</p>
        <span>5 Publicações</span>
      </PublicattedContent>
      <FormInput />
      <MainContainer>
        <MainContent>
          <header>
            <p>JavaScript data types and data structures</p>
            <span>há 2 dia</span>
          </header>
          <strong>
            Lorem t onsectetur minima vel. Labore exercitationem impedit
            incidunt consectetur iure nesciunt natus?
          </strong>
        </MainContent>
        <MainContent>
          <header>
            <p>JavaScript data types and data structures</p>
            <span>há 2 dia</span>
          </header>
          <strong>
            Lorem t onsectetur minima vel. Labore exercitationem impedit
            incidunt consectetur iure nesciunt natus?
          </strong>
        </MainContent>
        <MainContent>
          <header>
            <p>JavaScript data types and data structures</p>
            <span>há 2 dia</span>
          </header>
          <strong>
            Lorem t onsectetur minima vel. Labore exercitationem impedit
            incidunt consectetur iure nesciunt natus?
          </strong>
        </MainContent>
        <MainContent>
          <header>
            <p>JavaScript data types and data structures</p>
            <span>há 2 dia</span>
          </header>
          <strong>
            Lorem t onsectetur minima vel. Labore exercitationem impedit
            incidunt consectetur iure nesciunt natus?
          </strong>
        </MainContent>
      </MainContainer>

    </div>
  );
}
