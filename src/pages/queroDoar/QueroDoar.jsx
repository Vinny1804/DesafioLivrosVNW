import s from './queroDoar.module.scss'
import logoFormulario from '../../assets/logoFormulario.png'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar() {
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const enviarDados = async() => {

        const endPointApi = "https://api-livros-lb7r.onrender.com/doar"

        const dadosAEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post(endPointApi, dadosAEnviar)

        setTitulo('')
        setCategoria('')
        setAutor('')
        setImage_url('')

        alert("Doação recebida! Obrigado!")
    }

    return (
        <section className={s.queroDoar}>
            <h3>Por favor, preencha o formulário com suas informações e as informações do Livro</h3>

            <section className={s.formulario}>

                <div className={s.tituloFormulario}>
                    <img src={logoFormulario} alt="Logo azul em formato de um livro aberto " />
                    <h3>Informações do Livro</h3>
                </div>

                <form className={s.forms} onSubmit={(e) => e.preventDefault()}>

                    <input className={s.inputsFormulario}
                    type="text"
                    placeholder='Titulo'
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required/>

                    <input className={s.inputsFormulario}
                    type="text"
                    placeholder='Categoria'
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    required/>

                    <input className={s.inputsFormulario}
                    type="text"
                    placeholder='Autor'
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                    required/>

                    <input className={s.inputsFormulario}
                    type="text"
                    placeholder='Link da Imagem'
                    value={image_url}
                    onChange={(e) => setImage_url(e.target.value)}
                    required/>
                    
                    <input className={s.inputButton}
                    type="submit"
                    value='Doar'
                    onClick={enviarDados}/>
                </form>
            </section>

        </section>
    )
}