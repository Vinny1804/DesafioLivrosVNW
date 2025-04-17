import s from './queroDoar.module.scss'
import logoFormulario from '../../assets/logoFormulario.png'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar() {
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalValidacao, setModalValidacao] = useState(false)
    const [loading, setLoading] = useState(false)


    const closeModal = () => {
        setIsModalOpen(false)
        setModalValidacao(false)
    }


    const enviarDados = async() => {
        const endPointApi = "https://api-livros-lb7r.onrender.com/doar"

        const dadosAEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }

        if (!titulo || !categoria || !autor || !image_url) {
            setModalValidacao(true)
            return
        }

        setLoading(true)

        try {
            await axios.post(endPointApi, dadosAEnviar)

            setTitulo('')
            setCategoria('')
            setAutor('')
            setImage_url('')
            
        } catch (erro) {
            console.error("Erro ao enviar a doação:", erro);
            alert("Ocorreu um erro ao enviar sua doação. Tente novamente.");
        } finally {
            setTimeout(() => {
                setLoading(false)
                setIsModalOpen(true)
            }, 1500)
        }
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
                    />

                    <input className={s.inputsFormulario}
                    type="text"
                    placeholder='Categoria'
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    />

                    <input className={s.inputsFormulario}
                    type="text"
                    placeholder='Autor'
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                    />

                    <input className={s.inputsFormulario}
                    type="text"
                    placeholder='Link da Imagem'
                    value={image_url}
                    onChange={(e) => setImage_url(e.target.value)}
                    />
                    
                    <input className={s.inputButton}
                    type="submit"
                    value='Doar'
                    onClick={enviarDados}/>
                </form>

                {loading &&
                <section className={s.loaderSection}>
                    <p className={s.loaderText}>Enviando Livro...</p>
                    <div className={s.progressBar}></div>
                </section>}

                {isModalOpen && (
                    <section className={s.modalOverlay} onClick={closeModal}>
                        <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                            <p>Livro doado com sucesso!</p>
                            <p>Valeu pela contribuição!</p>
                            <button className={s.closeBtn} onClick={closeModal}>X</button>
                        </div>
                    </section>)}

                    {modalValidacao && (
                    <section className={s.modalOverlay} onClick={closeModal}>
                        <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                            <p>Ei! Não esquece de preencher tudo direitinho antes de doar!</p>                            
                            <button className={s.closeBtn} onClick={closeModal}>X</button>
                        </div>
                    </section>)}
            </section>
        </section>
    )
}
