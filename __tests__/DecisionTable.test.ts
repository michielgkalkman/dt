import { DecisionTable } from '../src/decisiontables/DecisionTable'

describe("This is a simple test", () => {
  test("Check the sampleFunction function", () => {
    let decisionTable = new DecisionTable()

    expect(decisionTable.asJson().conditions[0].condition).toEqual('condition-1')
  });
});

