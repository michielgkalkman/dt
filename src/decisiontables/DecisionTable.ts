import { Condition } from './Condition'

export class DecisionTable {
  conditions: Condition[] = []

  constructor() {
  }

  asText() {
    let s: string = ''

    this.conditions.forEach( condition => s = s + condition.shortName)

    return s
  }

  addCondition( shortName: string) {
    let condition: Condition = new Condition( shortName)
    this.conditions.push( condition) 
  }

  asJson() {
    return {
      conditions: [
        { condition: 'condition-1', value: 'NNYY' },
        { condition: 'condition-2', value: 'NYNY' }
      ],
      actions: [
        { action: 'action-1', value: '--XX' },
        { action: 'action-2', value: '-X--' }
      ]
    }
  }
}
