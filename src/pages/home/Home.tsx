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
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";


export interface GitHubBlogProps {
  avatar_url: string;
  login: string;
  followers: number;
  public_repos: number;
}
export interface IssuesProps {
  id: number;
  title: string;
  number: number;
  updated_at: string;
  body: string
}

export function Home() {
  const [ gitBlog, setGitBlog ] = useState<GitHubBlogProps>(
    {} as GitHubBlogProps
  );
  const [issues, setIssues] = useState<IssuesProps[]>([]);
  const navigate = useNavigate()

  async function BucaGitHubBlog() {
    const resposta = await api.get("users/NetoResende");
    const data = resposta.data;
    setGitBlog(data);
  }
  async function GitReposIssues() {
    const issues = await api.get("repos/NetoResende/git-hub-blog/issues");
    const repo = issues.data;
    setIssues(repo); 
  }
  useEffect(() => {
    BucaGitHubBlog();
    GitReposIssues();
  }, []);

  return (
    <div>
      <ProfileContainer>
        <ProfileContent>
          <AsideContent>
            <header>
              <h1>{gitBlog.login}</h1>
              <a href="https://github.com/NetoResende">
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
              <a href="https://github.com/NetoResende">
                <GithubLogo size={24} color="#3a536b" />
                <span>{gitBlog.login}</span>
              </a>

              <a href="https://app.rocketseat.com.br/">
                <Buildings size={24} color="#3a536b" />
                <span>Rocketseat</span>
              </a>
              <a href="#">
                <Users size={24} color="#3a536b" />
                <span>{gitBlog.followers} Seguidores </span>
              </a>
            </footer>
          </AsideContent>
        </ProfileContent>
      </ProfileContainer>
      <PublicattedContent>
        <p>Publicações</p>
        <span>{issues.length} Publicações</span>
      </PublicattedContent>
      <FormInput  issues ={setIssues}/>
      <MainContainer>
        {issues.map((issue) => {
          return (
            <button key={issue.id} onClick={() => navigate(`/issue/${issue.number}`)}>
              <MainContent >
                <header>
                  <p>{issue.title}</p>
                  <span>
                    {formatDistanceToNow(issue.updated_at, {
                      addSuffix: true,
                      locale: ptBR
                    })}
                  </span>
                </header>
                 <strong>{issue.body}</strong> 
              </MainContent>
            </button>
          );
        })}
      </MainContainer>
    </div>
  );
}
