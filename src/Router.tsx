import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { ErroPages } from "./pages/ErroPages";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Issue } from "./pages/home/components/issue";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/issue/:id" element={<Issue/>}/>
      <Route path="*" element={<ErroPages/>}/>
      </Route>
    </Routes>
  )
}