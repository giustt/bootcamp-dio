import React, { useContext } from 'react'
import {ThemeContext} from './Themes'



function Form() {

    const context = useContext(ThemeContext)

    const renderForm =(
    <form>
        <label>Nome: </label>
        <input/>
        <label>Email: </label>
        <input/>
        <label>Idade: </label>
        <input/>
        <label>Telefone: </label>
        <input/>
    </form>
    )

    const renderNotLogged = (
        <h1>
            É Necessario Realizar o Login!
        </h1>
    )



    return (
        <div>
            {!context.token ? renderNotLogged : renderForm}
        </div>
    )
}

export default Form
