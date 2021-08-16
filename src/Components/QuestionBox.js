import React from 'react'

const QuestionBox = ({question, answer, options, fixOption,questionKey}) => {
    return (
        <div className="qt-component">
           <div className="question">
           {question}
           </div>
           <div className="options">
               {options.map((option,key)=>{
                   return (
                       <button  onClick={(e)=> fixOption(e.target.textContent,questionKey,e)} id={key} key={key}>{option}</button>
                   )
               })
               }

           </div>
        </div>
    )
}

export default QuestionBox;
