import React, {useState, useEffect} from 'react'
import '../IfoodCounter/Ifoodcounter.css'

export default function Ifoodcounter() {
    const [value, setValue] = useState(1)
    const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')

    useEffect(()=>{
        document.getElementById('moeda').innerHTML = 2.0 * value;
        console.log(`O Preço Atual da Compra é: ${value * 2}`);

    },[value])

    useEffect(()=>{
        console.log(`o estilo atual do botao é: ${buttonStyle}`);
    },[buttonStyle])

    function down(){

        if (value <= 1){
            setButtonStyle('counter-button-minus-desactive')
        }

        if(value > 0){
            setValue(value - 1)
        }
    }

    function up(){
        setButtonStyle('counter-button-minus-active')
        setValue(value + 1)
    }

    return (
    <div className='countex-wrapper'>
        <button className={buttonStyle} onClick={down}>
            -
        </button>

        <p>{value}</p>

        <button className='counter-button-plus-active' onClick={up}>
            +
        </button>

        <button id='moeda'>R$12,00</button>

    </div>
)
}
