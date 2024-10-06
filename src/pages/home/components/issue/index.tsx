import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  GithubLogo,
  MessengerLogo,
} from "phosphor-react";
import {
  IssueContainer,
  IssueContent,
  IssueContentFooter,
  IssueContentMain,
  IssueIsede,
} from "./styled";

export function Issue() {
  return (
    <IssueContainer>
      <IssueContent>
        <IssueIsede>
          <aside>
            <header>
              <span>
                <a href="/">
                  <CaretLeft size={22} />
                  Voltar
                </a>
              </span>
              <a href="https://github.com/NetoResende">
                <span> VER NO GIT HUB</span>
                <ArrowSquareOut size={28} />
              </a>
            </header>
            <h1>nome: dados pessoal</h1>
          </aside>

          <footer>
            <a href="https://github.com/NetoResende">
              <GithubLogo size={24} color="#3a536b" />
              <span>Meu nome</span>
            </a>

            <a href="https://app.rocketseat.com.br/">
              <Calendar size={24} color="#3a536b" />
              <span>Há 1 dia</span>
            </a>
            <a href="#">
              <MessengerLogo size={24} color="#3a536b" />
              <span> 5 comentários</span>
            </a>
          </footer>
        </IssueIsede>
      </IssueContent>
      <IssueContentMain>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, amet
            molestias corporis animi distinctio minima doloremque laborum ullam
            soluta doloribus esse labore illum nemo, fugit maiores, culpa in
            harum vitae.
          </p>
          <main>
            <span>
            <a href="#">Dynamic Typing</a>
            </span>
            <strong>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              aliquid dolor corporis vitae nesciunt aliquam, ad, corrupti est
              quibusdam voluptate saepe provident sequi facere sapiente id,
              atque tempore. Nisi, labore.
            </strong>
          </main>
      </IssueContentMain>
      <IssueContentFooter>
          <h2>let foo = 42</h2>
          <h2>foo = 'Bar'</h2>
          <h2>foo = 'true'</h2>
      </IssueContentFooter>
    </IssueContainer>
  );
}
