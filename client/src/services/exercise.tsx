import data from '../testData.json'
import {Formula} from "../interfaces";

export class ExerciseService {
    getData(): string {
        return JSON.stringify(data)
    }

    createExercise(amount: number): Formula[] {
        const {formulas} = data
        if (amount >= formulas.length) {
            return formulas
        }
        const numbers: Set<number> = new Set()
        while (numbers.size < amount) {
            let number = Math.floor(Math.random()*formulas.length)
            numbers.add(number)
        }
        const filteredFormulas: Formula[] = []
        numbers.forEach(key => filteredFormulas.push(formulas[key]))
        return filteredFormulas
    }
}
