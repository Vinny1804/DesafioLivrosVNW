import s from './livrosDoados.module.scss'
import livro from '../../assets/livroOProtagonista.png'

export default function LivrosDoados() {
    return (
        <section className={s.livrosDoados}>
            <h2>Livros Doados</h2>
            
            <section className={s.listaDeLivros}>

                <section className={s.Livro1}>
                    <img src={livro} alt="Imagem da capa do livro: O protagonista"/>
                    <div className={s.infoLivro}>
                        <p id='titulo'>O protagonista</p>
                        <p id='autor(a)'>Susanne Andrade</p>
                        <p id='genero'>Ficção</p>
                    </div>
                </section>
            </section>

        </section>
    )
}