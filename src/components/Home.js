import React from 'react';
import CardQuizz from './CardQuizz';

export default function Home({quizzs}) {
  return (
    <>
        <h1><span>?</span> APP QUIZZ <span>?</span></h1>
        {
            quizzs.map(quizz => <CardQuizz key={quizz.id} quizz={quizz} />)
        }
    </>
  )
}
