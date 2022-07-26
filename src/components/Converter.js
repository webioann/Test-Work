import React, { useState } from 'react'
import { useConveter } from '../hooks/useConveter'
import '../CSS/converter.scss'

const  Converter = () => {

    const [enter_value,setEnterValue] = useState('')
    const [enter_currency,setEC] = useState('UAH')
    const [result_currency,setRC] = useState('UAH')
    const converted = useConveter(enter_value, enter_currency, result_currency)

    return (
        <div className='converter'>
            <form className='enter'>
                <input
                    onChange={e => {setEnterValue(e.target.value)}}
                    value={enter_value}
                    placeholder='введіть кількість'
                    type='text'/>
                <select 
                    onChange={e => setEC(e.target.value)}
                    value={enter_currency}>
                    <option value='UAH'>гривні</option>
                    <option value='USD'>долари</option>
                    <option value='EUR'>євро</option>
                </select>
            </form>
            <form className='result'>
                <input
                    value={converted}
                    disabled={true}
                    type='text'/>
                <select 
                    onChange={e => setRC(e.target.value)}
                    value={result_currency}>
                    <option value='UAH'>гривні</option>
                    <option value='USD'>долари</option>
                    <option value='EUR'>євро</option>
                </select>
            </form>

        </div>
    )
}

export default Converter