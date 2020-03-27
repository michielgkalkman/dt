import { DecisionTable } from '../src/decisiontables/DecisionTable'

describe("Adding conditions", () => {
  test("Check the toText function", () => {
    let decisionTable = new DecisionTable()

    expect( decisionTable.asText()).toEqual('')
  });
});

describe("Adding conditions", () => {
  it("Check the addCondition function", () => {
    let decisionTable = new DecisionTable()

    decisionTable.addCondition('condition-1')

    expect( decisionTable.asText()).toEqual('condition-1')
  });
});

describe("🔥 This is a simple test", () => {
  test("Check the sampleFunction function", () => {
    let decisionTable = new DecisionTable()

    expect(decisionTable.asJson().conditions[0].condition).toEqual('condition-1')
  });
});

