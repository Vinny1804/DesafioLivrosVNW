import './Inicio.scss'
import logo1 from './imgs/logo1.png'
import logo2 from './imgs/logo2.png'
import logo3 from './imgs/logo3.png'
import logo4 from './imgs/logo4.png'

export default function Inicio() {
    return (
        <main>
            <section class='primeiraSection'>
                <p>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</p>
            </section>
            <section class='segundaSection'>
                <h2>Por que devo doar?</h2>
                <article>
                    <figure>
                        <img src={logo1} alt="Ícone simbolizando um circulo social" />
                        <figcaption>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</figcaption>
                    </figure>
                    <figure>
                        <img src={logo2} alt="Ícone simbolizando uma pessoa lendo um livro" />
                        <figcaption>Estimula o hábito da leitura e o aprendizado contínuo.</figcaption>
                    </figure>
                    <figure>
                        <img src={logo3} alt="Ícone simbolizando pessoas com um pensamento único de inspiração" />
                        <figcaption>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</figcaption>
                    </figure>
                    <figure>
                        <img src={logo4} alt="Ícone de uma balança" />
                        <figcaption>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</figcaption>
                    </figure>
                </article>
            </section>
        </main>
    )
}