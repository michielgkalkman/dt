import { DecisionTable } from '../src/decisiontables/DecisionTable'

describe("Empty decisisiontable", () => {
  test("Check the toText function", () => {
    let decisionTable = new DecisionTable()

    expect( decisionTable.asText()).toEqual('')
  })
})

describe("Adding conditions", () => {
  it("Check the addCondition function", () => {
    let decisionTable = new DecisionTable()

    decisionTable.addCondition('condition-1')

    expect( decisionTable.asText()).toEqual('condition-1              YN\n')
  })

  it("Check calling the addCondition function twice", () => {
    let decisionTable = new DecisionTable()

    decisionTable.addCondition('condition-1')
    decisionTable.addCondition('condition-2')

    expect( decisionTable.asText()).toEqual(
        'condition-1              YYNN\n'
      + 'condition-2              YNYN\n'  
      )
  })
})

describe("🔥 Adding actions", () => {
  test("Adding action, no conditions", () => {
    let decisionTable = new DecisionTable()

    decisionTable.addAction('action-1')

    expect(decisionTable.asText()).toEqual('action-1                 \n')
  });

  test("Adding 2 actions, no conditions", () => {
    let decisionTable = new DecisionTable()

    decisionTable.addAction('action-1')
    decisionTable.addAction('action-2')

    expect(decisionTable.asText()).toEqual(
        'action-1                 \n'
      + 'action-2                 \n')
  })
})

describe("🔥 Adding conditionas and actions", () => {
  test("Adding conditiontion, then actions", () => {
    let decisionTable = new DecisionTable()

    decisionTable.addCondition('condition-1')
    decisionTable.addAction('action-1')

    expect(decisionTable.asText()).toEqual(
        'condition-1              YYNN\n'
      + 'action-1                 ----\n')
      })
})

describe("🔥 This is a simple test", () => {
  test("Check the sampleFunction function", () => {
    let decisionTable = new DecisionTable()

    expect(decisionTable.asJson().conditions[0].condition).toEqual('condition-1')
  });
});

