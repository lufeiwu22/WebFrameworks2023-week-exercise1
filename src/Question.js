import React from 'react';
import Option from './Option';

function Question({question, options}) {
    return (
        <div className="question">
            <h2>{question}</h2>
            {options && options.map ((option, index) =>(
                <Option key= {index} option= {option}/>
            )
            )}
            </div>
    );  
}
export default Question;