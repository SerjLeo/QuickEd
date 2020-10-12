import React, {useState} from 'react';
import {ExerciseService} from "../../services/exercise";
import {Formula} from "../../interfaces";
import FormulaCard from "../shared/FormulaCard";
import './FormulaComponent.css'

function FormulaComponent() {
    const exerciseService = new ExerciseService()
    const [formulas, setFormulas] = useState<Formula[]>(exerciseService.createExercise(5))
    const generate = ():void => setFormulas(exerciseService.createExercise(5))

    return (
        <div>
            <button className="btn generate" onClick={() => generate()}>Обновить формулы</button>
            {formulas.map((formula: Formula) => (
                <FormulaCard formula={formula} key={formula.id}/>
            ))}
        </div>
    );
}

export default FormulaComponent;
