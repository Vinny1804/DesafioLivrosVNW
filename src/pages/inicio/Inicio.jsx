import s from './inicio.module.scss'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'

export default function Inicio() {
    return (
        <main>
            <section className={s.primeiraSection}>
                <p>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</p>
            </section>

            <section className={s.segundaSection}>
                <h2>Por que devo doar?</h2>
                <section className={s.cardsSection}> 
                    <section className={s.cards}> 
                        <img src={logo1} alt="Ícone simbolizando um circulo social" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section className={s.cards}>
                        <img src={logo2} alt="Ícone simbolizando uma pessoa lendo um livro" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section className={s.cards}>
                        <img src={logo3} alt="Ícone simbolizando pessoas com um pensamento único de inspiração" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section className={s.cards}>
                        <img src={logo4} alt="Ícone de uma balança" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </section>
            </section>
        </main>
    )
}