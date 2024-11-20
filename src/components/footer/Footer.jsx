import s from './footer.module.scss'
import facebook from '../../assets/FacebookLogo.png'
import twitter from '../../assets/TwitterLogo.png'
import youtube from '../../assets/YoutubeLogo.png'
import linkedin from '../../assets/LinkedinLogo.png'
import instagram from '../../assets/InstagramLogo.png'


export default function Footer() {
    return (
        <footer className={s.footer}>
            <section className={s.sociais}>
                <p className={s.telefone}>4002-8922</p>
                <section className={s.logoSociais}>
                    <a target='blank' href="https://www.facebook.com/"><img src={facebook} alt="Logo em branco do facebook" /></a>
                    <a target='blank' href="https://x.com/"><img src={twitter} alt="Logo em branco do twitter" /></a>
                    <a target='blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={youtube} alt="Logo em branco do youtube" /></a>
                    <a target='blank' href="https://www.linkedin.com/in/vinicius-bernardino/"><img src={linkedin} alt="Logo em branco do linkedin" /></a>
                    <a target='blank' href="https://www.instagram.com/vinnyaguiarr/"><img src={instagram} alt="Logo em branco do instagram" /></a>
                </section>
            </section>
            <section className={s.info}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}