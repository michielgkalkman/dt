import { Condition } from './Condition'
import { Case } from './Case'
import { ConditionValue } from './ConditionValue'
import { ConditionValues } from './ConditionValues'

export class DecisionTable {
  conditions: Condition[] = []

  cases: Case[] = []

  constructor() {
  }

  asText() {
    let s: string = ''

    this.conditions.forEach( condition => {
      s = s + condition.shortName.padEnd( 25, ' ')

      this.cases.forEach( c => {
        s += c.getConditionValue(condition.shortName)
      })

      s += '\n'
    })

    return s
  }

  addCondition( shortName: string) {
    let condition: Condition = new Condition( shortName)
    
    if( this.cases.length == 0) {
      // Create two cases
      let case1: Case = new Case( '')
      let case2: Case = new Case( '')

      case1.addConditionValue( shortName, new ConditionValue( ConditionValues.Yes))
      case2.addConditionValue( shortName, new ConditionValue( ConditionValues.No))

      this.cases.push( case1, case2)
    } else {
      let newcases: Case[] = []

      this.cases.forEach( somecase => {
        let case1: Case = Case.from( somecase)
        case1.addConditionValue( shortName, new ConditionValue( ConditionValues.Yes))
        newcases.push( case1)
        let case2: Case = Case.from( somecase)
        case2.addConditionValue( shortName, new ConditionValue( ConditionValues.No))
        newcases.push( case2)
      })

      this.cases = newcases
    }
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
