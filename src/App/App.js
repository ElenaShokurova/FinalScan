import { MainLayout } from '../MainLayout/MainLayout';
import { Routes, Route } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Authorization from "../Pages/Authorization/Authorization";
import Search from "../Pages/Search/Search";
import Result from "../Pages/Result/Result";
import NotFound from "../Pages/NotFound/NotFound";
import Menu from '../MainLayout/Header/MobileMenu';

function App() {
      return (

            <MainLayout>
                  <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/authorization" element={<Authorization />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/result" element={<Result />} />
                        <Route path="/*" element={<NotFound />} />
                        <Route path='/mobile' element={<Menu/>}/>
                  </Routes>
            </MainLayout>

      );
}

export default App;
