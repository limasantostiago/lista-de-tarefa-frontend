import './App.css';
import Header from './componentes/compartilhado/header';
import { Routes, Route } from "react-router-dom";
import Home from './componentes/pages/home';
import Cadastrar from './componentes/pages/cadastro'
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route path={"/"} element={<Home />} />
    <Route path={"/cadastro"} element={<Cadastrar />} />
    </Routes>
   </div>  
  );
};
export default App;
