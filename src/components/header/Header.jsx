import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../pages/queroDoar/QueroDoar'
import './Header.scss'
import logo from './imgs/headerLogo.png'

export default function Header() {
    return (
   <BrowserRouter>
        <header>
            <div>
                <img src={logo} alt="Logo em formato de um livro aberto" />
                <h1>Livros Vai na Web</h1>           
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Início</Link></li>
                    <li><Link to='/livrosDoados'>Livros Doados</Link></li>
                    <li><Link to='/queroDoar'>Quero Doar</Link></li>
                </ul>
            </nav>
            <input type="text" placeholder='O que você procura?'/>
        </header>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/livrosDoados' element={<LivrosDoados/>} />
            <Route path='/queroDoar' element={<QueroDoar/>}/>
        </Routes>
   </BrowserRouter>
    )
}