import { Condition } from './Condition'
import { ConditionValue } from './ConditionValue'

import { Action } from './Action'
import { ActionValue } from './ActionValue'

export class Case {
    public shortName: string

    public conditionValues: Map<string, ConditionValue> = new Map
    public actionValues: Map<string, ActionValue> = new Map

    constructor( shortName: string) {
        this.shortName = shortName
    }

    static from( somecase: Case): Case {
        const newLocal = new Case(somecase.shortName)

        somecase.conditionValues.forEach((value: ConditionValue, key: string) => {
            newLocal.addConditionValue(  key, value)
        });
        somecase.actionValues.forEach((value: ActionValue, key: string) => {
            newLocal.addActionValue(  key, value)
        });

        return newLocal
    }

    addConditionValue( key: string, conditionValue: ConditionValue ) {
        this.conditionValues.set(key, conditionValue)
    }

    getConditionValue(key: string) {
        return this.conditionValues.get(key).conditionValue
    }

    addActionValue( key: string, actionValue: ActionValue ) {
        this.actionValues.set(key, actionValue)
    }

    getActionValue(key: string) {
        return this.actionValues.get(key).actionValue
    }
}

