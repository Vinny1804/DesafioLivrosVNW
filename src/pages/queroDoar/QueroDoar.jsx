import s from './queroDoar.module.scss'
import logoFormulario from '../../assets/logoFormulario.png'

export default function QueroDoar() {
    return (
        <section className={s.queroDoar}>
            <h3>Por favor, preencha o formulário com suas informações e as informações do Livro</h3>

            <section className={s.formulario}>

                <div className={s.tituloFormulario}>
                    <img src={logoFormulario} alt="Logo azul em formato de um livro aberto " />
                    <h3>Informações do Livro</h3>
                </div>
                <form className={s.forms} action="">

                        <fieldset>
                            <input className={s.inputsFormulario} type="text" placeholder='Titulo'/>
                        </fieldset>

                        <fieldset>
                            <input className={s.inputsFormulario} type="text" placeholder='Categoria'/>
                        </fieldset>

                        <fieldset>
                            <input className={s.inputsFormulario} type="text" placeholder='Autor'/>
                        </fieldset>

                        <fieldset>
                            <input className={s.inputsFormulario} type="text" placeholder='Link da Imagem'/>
                        </fieldset>

                        <input className={s.inputButton} type="submit" value='Doar'/>

                </form>
            </section>

        </section>
    )
}