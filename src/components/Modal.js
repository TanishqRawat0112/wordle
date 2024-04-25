import React from 'react'

export default function Modal({isCorrect,turn,solution}) {
  return (
    <div className="modal">
        {isCorrect && (
            <div>
                <h1>
                    You Win!
                </h1>
                <p className='solution'>
                    {solution}
                </p>
                <p>
                    You found the solution in {turn+1} guessees.
                </p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>
                    Never Mind!!
                </h1>
                <p className='solution'>
                    {solution}
                </p>
                <p>
                    Better Luck next time.
                </p>
            </div>
        )}
    </div>
  )
}
