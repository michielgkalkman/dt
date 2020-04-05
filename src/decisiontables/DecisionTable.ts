import { Condition } from './Condition'
import { Action } from './Action'
import { Case } from './Case'
import { ConditionValue } from './ConditionValue'
import { ConditionValues } from './ConditionValues'
import { ActionValue } from './ActionValue'
import { ActionValues } from './ActionValues'

export class DecisionTable {
  conditions: Condition[] = []
  actions: Action[] = []

  cases: Case[] = []

  asText() {
    let s = ''

    this.conditions.forEach( condition => {
      s = s + condition.shortName.padEnd( 25, ' ')

      this.cases.forEach( c => {
        s += c.getConditionValue(condition.shortName)
      })

      s += '\n'
    })

    this.actions.forEach( action => {
      s = s + action.shortName.padEnd( 25, ' ')

      this.cases.forEach( c => {
        s += c.getActionValue(action.shortName)
      })

      s += '\n'
    })

    return s
  }

  addCondition( shortName: string) {
    const condition: Condition = new Condition( shortName)
    
    if( this.cases.length == 0) {
      // Create two cases
      const case1: Case = new Case( '')
      const case2: Case = new Case( '')

      case1.addConditionValue( shortName, new ConditionValue( ConditionValues.Yes))
      case2.addConditionValue( shortName, new ConditionValue( ConditionValues.No))

      this.cases.push( case1, case2)
    } else {
      const newcases: Case[] = []

      this.cases.forEach( somecase => {
        const case1: Case = Case.from( somecase)
        case1.addConditionValue( shortName, new ConditionValue( ConditionValues.Yes))
        newcases.push( case1)
        const case2: Case = Case.from( somecase)
        case2.addConditionValue( shortName, new ConditionValue( ConditionValues.No))
        newcases.push( case2)
      })

      this.cases = newcases
    }
    this.conditions.push( condition)
  }

  addAction( shortName: string) {
    const action: Action = new Action( shortName)
    
    if( this.cases.length > 0) {
      const newcases: Case[] = []

      this.cases.forEach( somecase => {
        const case1: Case = Case.from( somecase)
        case1.addActionValue( shortName, new ActionValue( ActionValues.Dont))
        newcases.push( case1)
        const case2: Case = Case.from( somecase)
        case2.addActionValue( shortName, new ActionValue( ActionValues.Dont))
        newcases.push( case2)
      })

      this.cases = newcases
    }
    this.actions.push( action)
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
