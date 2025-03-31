import s from './livrosDoados.module.scss'
import livro from '../../assets/livroOProtagonista.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function LivrosDoados() {

    const [livros, setLivros] = useState([])

    const getLivros = async() => {
        const resposta = await axios.get("https://api-livros-lb7r.onrender.com/livros")
        setLivros(resposta.data)
    }
    useEffect(() => {
        getLivros()
    },[])

    return (
        <section className={s.livrosDoados}>
            <h2>Livros Doados</h2>
            
            <section className={s.listaDeLivros}>

                <section className={s.Livro1}>
                    <img src={livro} alt="Imagem da capa do livro: O protagonista"/>
                    <div className={s.infoLivro}>
                        <p>O protagonista</p>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>

                {livros.map((item) => (
                    <section className={s.Livro1}>
                    <img src={item.image_url} alt={item.titulo}/>
                    <div className={s.infoLivro}>
                        <p>{item.titulo}</p>
                        <p>{item.autor}</p>
                        <p>{item.categoria}</p>
                    </div>
                </section>
                ))}

            </section>

        </section>
    )
}