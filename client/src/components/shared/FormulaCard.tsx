import React, {useState} from 'react';
import {Formula} from "../../interfaces";
import MathJax from "react-mathjax"
import './FormulaCard.css'

interface FormulaCard {
    formula: Formula
}

function FormulaCard({formula} : FormulaCard) {
    const [isHidden, toggleHidden] = useState<boolean>(true)
    const showAnswer = ():void => toggleHidden(!isHidden)
    return (
        <div className="formula-card">
            <div className="formula-description">
                <h3 className="formula-title">{formula.title}</h3>
                <div className="formula-subject">{formula.subject}</div>
            </div>
            <div className="formula-answer">
                <div className={isHidden?'formula-answer-section opacity-hidden':'formula-answer-section'}>
                    <MathJax.Provider>
                        <MathJax.Node formula={formula.answer}/>
                    </MathJax.Provider>
                </div>
                <button className="btn show-answer" onClick={() => showAnswer()}>Показать ответ</button>
            </div>
        </div>
    );
}

export default FormulaCard;
