export class DecisionTable {
  constructor() {
  }

  getDecisionTable() {
    return {
      decisionTable: {
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
}
