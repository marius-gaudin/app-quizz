import React from 'react'
import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai';

export default function Answer({answer, state, correction}) {

    const getClass = () => {
        
        if(!state) {
            return 'answer';
        }
        
        if(state.goodAnswer) {
            return 'answer good';
        } else if (state.isSelected){
            return 'answer notGood';
        }

        return 'answer';
    }

    const getSelector = () => {
        if(!state || !state.isSelected)  {
            return <div className="selector"></div>
        }

        if(state.goodAnswer) {
            return <AiFillCheckCircle className="check" />
        } else {
            return <AiFillCloseCircle className="close" />
        }
    }

    return (
        <div className={getClass()} onClick={state ? null : ()=>{correction(answer)}}>
            <p>{answer}</p>
            {
                getSelector()
            }
        </div>
    )
}
