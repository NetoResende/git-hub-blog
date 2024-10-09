import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  GithubLogo,
  MessengerLogo,
} from "phosphor-react";
import { useParams } from "react-router-dom"
import {
  IssueContainer,
  IssueContent,
  IssueContentFooter,
  IssueContentMain,
  IssueIsede,
} from "./styled";
import { api } from "../../../../lib/axios";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface IssueIdProps {
  title: string;
  user: {
    login: string;
  };
  updated_at: string;
  comments: string;
  body: string;
}

export function Issue() {
  const { id } = useParams()
  const [ issueId, setIssueId ] = useState<IssueIdProps>()


  const getIssueId = async () => {
    const issues = await api.get(`repos/NetoResende/git-hub-blog/issues/${id}`);
    const IdIssue = issues.data
   setIssueId(IdIssue)
  }

  const formattedDate = () => {
    if (issueId?.updated_at) {
      return formatDistanceToNow(issueId.updated_at, {
        addSuffix: true,
        locale: ptBR
      })
    }
    return "";
  }

  useEffect(() => {
    if (id) {
      getIssueId();
    }
  } ,[id])

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
            <h1>{issueId?.title}</h1>
          </aside>

          <footer>
            <a href="https://github.com/NetoResende">
              <GithubLogo size={24} color="#3a536b" />
              <span>{issueId?.user.login} </span>
            </a>

            <a href="##">
              <Calendar size={24} color="#3a536b" />
              <span>
              {formattedDate()}
              </span>
            </a>
            <a href="#">
              <MessengerLogo size={24} color="#3a536b" />
              <span>{issueId?.comments}</span>
            </a>
          </footer>
        </IssueIsede>
      </IssueContent>
      <IssueContentMain>
          <p>{issueId?.body}</p>
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
