import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface GitHubBlogProps {
  avatar_url: string;
  login: string;
  followers: number;
  public_repos: number;
}
export interface IssuesProps {
  id: number;
  title: string;
  updated_at: string;
  body: string
}
export interface IssueContextProviderProps{
  gitBlog: IssuesProps[];
  issue: ()=>Promise<void>;
}

export const IssueContext = createContext({} as IssueContextProviderProps)

interface IssueProviderProps {
  children: ReactNode
}

export function IssueProvider({children}: IssueProviderProps){

  const [ gitBlog, setGitBlog ] = useState<GitHubBlogProps>(
    {} as GitHubBlogProps
  );
  const [issues, setIssues] = useState<IssuesProps[]>([]);
 

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

  return(
    <IssueContext.Provider value={{gitBlog, issues}}>
      {children}
    </IssueContext.Provider>
  )
}