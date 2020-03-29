import { Condition } from './Condition'
import { ConditionValue } from './ConditionValue'

export class Case {
    public shortName: string

    public conditionValues: Map<string, ConditionValue> = new Map

    constructor( shortName: string) {
        this.shortName = shortName
    }

    static from( somecase: Case): Case {
        const newLocal = new Case(somecase.shortName)

        somecase.conditionValues.forEach((value: ConditionValue, key: string) => {
            newLocal.addConditionValue(  key, value)
        });

        return newLocal
    }

    addConditionValue( key: string, conditionValue: ConditionValue ) {
        this.conditionValues.set(key, conditionValue)
        console.log(key)
    }

    getConditionValue(key: string) {
        return this.conditionValues.get(key).conditionValue
    }
}

interface IHash {
    [shortName: string] : ConditionValue;
} 

