import React from 'react'
import { Link } from 'react-router-dom';

export default function CardQuizz({quizz}) {
  return (
    <Link to={'quizz/'+quizz.id} className="cardQuizz">
      <div className="cadreImage">
        <img src={quizz.image} alt={quizz.title}/>
      </div>
      <h2>{quizz.title}</h2>
    </Link>
  )
}
