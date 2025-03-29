import s from './queroDoar.module.scss'
import logoFormulario from '../../assets/logoFormulario.png'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar() {
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturaTitulo = (e) => {
        setTitulo(e.target.value);
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturaImage_Url = (e) => {
        setImage_url(e.target.value)
    }

    const enviarDados = async() => {

        const endPointApi = "https://api-livros-lb7r.onrender.com/doar"

        const dadosAEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }

        await axios.post(endPointApi, dadosAEnviar)
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
                        <fieldset>
                            <input className={s.inputsFormulario} type="text" placeholder='Titulo' onChange={capturaTitulo}/>
                        </fieldset>

                        <fieldset>
                            <input className={s.inputsFormulario} type="text" placeholder='Categoria' onChange={capturaCategoria}/>
                        </fieldset>

                        <fieldset>
                            <input className={s.inputsFormulario} type="text" placeholder='Autor' onChange={capturaAutor}/>
                        </fieldset>

                        <fieldset>
                            <input className={s.inputsFormulario} type="text" placeholder='Link da Imagem' onChange={capturaImage_Url}/>
                        </fieldset>

                        <input className={s.inputButton} type="submit" value='Doar' onClick={enviarDados}/>
                </form>
            </section>

        </section>
    )
}