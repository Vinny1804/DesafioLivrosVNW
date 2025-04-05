import s from './livrosDoados.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function LivrosDoados() {

    const [livros, setLivros] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [erroAPI, setErroAPI] = useState(false);
    const [livroSelecionado, setLivroSelecionado] = useState(null)

    const [loading, setLoading] = useState(false)
    
    const openModal = (livro) => {
        setLivroSelecionado(livro)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setLivroSelecionado(null)
        setErroAPI(false)
    }


    const getLivros = async() => {

        setLoading(true)
        try {
            const resposta = await axios.get("https://api-livros-lb7r.onrender.com/livros")
            setLivros(resposta.data)
            
        } catch (erro) {
            console.error("Erro ao buscar livros:", erro);
            setErroAPI(true)
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 600)
        }
    }

    useEffect(() => {
        getLivros()
    },[])



    return (
        <section className={s.livrosDoados}>
            <h2>Livros Doados</h2>
            
            <section className={s.listaDeLivros}>
                {loading ? (<section className={s.loaderSection}>
                    <p className={s.loaderText}>Organizando os livros na estante...</p>
                    <div className={s.progressBar}></div>
                </section>) : (

                livros.map((item) => (
                    <section className={s.livro} key={item.id} onClick={() => openModal(item)}>
                        <img src={item.image_url} alt={item.titulo}/>
                        <div className={s.infoLivro}>
                            <p>{item.titulo}</p>
                            <p>{item.autor}</p>
                            <p>{item.categoria}</p>
                        </div>
                    </section>
                ))
                )}
            </section>

            {isModalOpen && livroSelecionado && (
                <section className={s.modalOverlay} onClick={closeModal}>
                    <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                        <p>{livroSelecionado.titulo}</p>
                        <p>{livroSelecionado.autor}</p>
                        <img src={livroSelecionado.image_url} alt={livroSelecionado.titulo}/>
                        <button className={s.closeBtn} onClick={closeModal}>X</button>
                    </div>
                </section>
                )}

            {erroAPI && (
            <section className={s.modalOverlay} onClick={closeModal}>
                <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                <p>🚨Parece que os livros fugiram da estante.🚨</p>
                <p>Já estamos cuidando disso! </p>
                <button className={s.closeBtn} onClick={closeModal}>X</button>
                </div>
            </section>
            )}

        </section>
    )
}