import { HeaderContainer, HeaderContent } from "./styled";
import loggitgubblog from '../../assets/logo-github-blog.png'

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={loggitgubblog} alt="" width="34" />
        <span>GITHUB BLOG</span>
      </HeaderContent>
    </HeaderContainer>
  )
}