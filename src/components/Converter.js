import React, { useState } from 'react';
import { useConverter } from '../hooks/useConverter';
import { TbArrowsDownUp } from 'react-icons/tb';
import '../CSS/converter.scss';

const  Converter = () => {

    const [enter_value,setEnterValue] = useState('')
    const [enter_currency,setEC] = useState('UAH')
    const [result_currency,setRC] = useState('USD')
    const converted = useConverter(enter_value, enter_currency, result_currency)

    const submit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='converter'>
            <h3 className='title'>конвертер валют</h3>
            <form className='enter' onSubmit={submit}>
                <input
                    onChange={e => {setEnterValue(e.target.value)}}
                    value={enter_value}
                    placeholder='кількість'
                    type='text'/>
                <select 
                    onChange={e => setEC(e.target.value)}
                    value={enter_currency}>
                    <option value='UAH'>UAH</option>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                </select>
            </form>
            <TbArrowsDownUp className='arrows'/>
            <form className='result' onSubmit={submit}>
                <input
                    value={converted}
                    disabled={true}
                    type='text'/>
                <select 
                    onChange={e => setRC(e.target.value)}
                    value={result_currency}>
                    <option value='UAH'>UAH</option>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                </select>
            </form>
        </div>
    )
}

export default Converter;