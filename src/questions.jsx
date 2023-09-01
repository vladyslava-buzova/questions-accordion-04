import React from 'react';
import Question from './question';

const Questions = ({ questions }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>

      { questions.map((question) => {
        const { id, title, info } = question;
         return <Question key={id} title={title} info={info} />
      })}
    </section>
  )
}

export default Questions