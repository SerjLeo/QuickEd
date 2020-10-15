import React, {useState} from 'react';
import {ExerciseService} from "../services/exercise";
import {IFormula} from "../helpers/interfaces";
import FormulaCard from "../components/formula/FormulaCard";
import '../styles/FormulaComponent.css'

function FormulaPage() {
    const exerciseService = new ExerciseService()
    const [formulas, setFormulas] = useState<IFormula[]>(exerciseService.createExercise(5))
    const generate = ():void => setFormulas(exerciseService.createExercise(5))

    return (
        <div>
            <button className="btn generate" onClick={() => generate()}>Обновить формулы</button>
            {formulas.map((formula: IFormula) => (
                <FormulaCard formula={formula} key={formula.id}/>
            ))}
        </div>
    );
}

export default FormulaPage;
