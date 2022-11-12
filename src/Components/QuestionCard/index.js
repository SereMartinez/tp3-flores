function QuestionCard ({preguntaActual }) { 
    console.log (preguntaActual.answers)
    return (
        < div className="box"> 
            <div className="mi-clase2">
            <span className="tag is-rounded is-info">{preguntaActual.id}</span>
            <span><strong>{preguntaActual.question}</strong></span>
            </div>
            <br/>
            {
                preguntaActual.answers.map((option) => (
                    <div key={option.id}>
                        <input type="radio" id={ `${option.id} `} name={option.id} value={option.answer}></input>
                        <label htmlFor={ `${option.id} `}>{option.answer}</label>
                    </div>
                ))  
            }
            <br/>
        
        </div>
    )
}


export default QuestionCard;