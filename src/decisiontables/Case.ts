import { Condition } from './Condition'
import { ConditionValue } from './ConditionValue'

export class Case {
    public shortName: string

    public conditionValues: IHash = {}

    constructor( shortName: string) {
        this.shortName = shortName
    }

    addConditionValue( key: string, conditionValue: ConditionValue ) {
        this.conditionValues[key] = conditionValue
    }

    getConditionValue(key: string) {
        return this.conditionValues[key].conditionValue
    }
}

interface IHash {
    [shortName: string] : ConditionValue;
} 

