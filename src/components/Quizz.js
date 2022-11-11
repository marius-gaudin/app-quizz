import React, { useState }  from 'react';
import { useParams, Link } from 'react-router-dom';
import Answer from './Answer';

export default function Quizz({quizzs}) {
    const params = useParams();
    const quizz = quizzs.find(quizz => quizz.id === parseInt(params.id));
    const nbQuestions = quizz.quizz.length >= 10 ? 10 : quizz.quizz.length;

    const [numQuestion, setNumQuestion] = useState(1);
    const [nbGoodAnswer, setNbGoodAnswer] = useState(0);
    const [selected, setSelected] = useState(null);

    const correction = (answer) => {
        setSelected(answer);
        if(quizz.quizz[numQuestion-1].réponse === answer) {
            setNbGoodAnswer(nbGoodAnswer+1);
        }
    }

    const getState = (answer) => {
        if(!selected) {
            return null;
        }

        return {
            isSelected: (answer === selected),
            goodAnswer: (quizz.quizz[numQuestion-1].réponse === answer) 
        }
    }

    const next = () => {
        setSelected(null);
        setNumQuestion(numQuestion+1);
    }

    const getInfo = () => {
        if(selected) {
            return (
                <div className="info">
                    <p>{quizz.quizz[numQuestion-1].anecdote}</p>
                </div>
            )
        } else {
            return null;
        }

    }

    if(numQuestion > nbQuestions) {
        return (
            <div className="score">
                <h2>{quizz.title}</h2>
                <p>{nbGoodAnswer} / {nbQuestions}</p>
                <Link to={'/'}>Terminer</Link>
            </div>
        )
    }

    return (
        <>
            <p>Question {numQuestion}/{nbQuestions}</p>
            <h2>{quizz.quizz[numQuestion-1].question}</h2>
            {
                 getInfo()
            }
           
            <div className="choices">
                {
                    quizz.quizz[numQuestion-1].propositions.map((proposition, index) => <Answer position={index} key={proposition} answer={proposition} state={getState(proposition)} correction={correction} />)
                }
            </div>
            
            {
                selected ? <p onClick={next}>Suivant</p> : null
            }
            
        </>
    )
}
