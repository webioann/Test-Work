import React,{ useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { langEng,langUkr } from '../Redux-toolkit/reduxSlice'
import '../CSS/lang-switch.scss'

function LangSwitch() {

    const dispatch = useDispatch()
    const lang = useSelector(state => state.redux.lang)
    const [margin,setMargin] = useState(0)

    const switching = (event) => {
        let id = event.target.id
        if( margin === 0 && id === 'ukr') {
            setMargin(60)
            dispatch(langUkr())
        }
        else if( margin === 60 && id === 'eng') {
            setMargin(0)
            dispatch(langEng())
        }
    }
    return (
        <div className="switch-box">
            <span className={lang === 'eng' ? 'switch active' : 'switch'}
                id = 'eng' 
                onClick={switching}>
                eng
            </span>
            <span className={lang === 'ukr' ? 'switch active' : 'switch'}
                id = 'ukr'
                onClick={switching}>
                ukr
            </span>
            <div style={{marginLeft: margin}}
                className='bottom-border'></div>
        </div>
    )
}

export default LangSwitch;
