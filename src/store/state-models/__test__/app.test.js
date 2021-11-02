import store from '../../index.js'
import enums from '../../../utils/enums'

const _testResults = [
  {
    customerName: 'foo',
    testName: 'Blood',
    testConcentration: '0.1'
  },
  {
    customerName: 'foo',
    testName: 'Blood',
    testConcentration: '5.44'
  },
  {
    customerName: 'foo',
    testName: 'Blood',
    testConcentration: '5.45'
  },
  {
    customerName: 'foo',
    testName: 'Blood',
    testConcentration: '5.46'
  },
  {
    customerName: 'foo',
    testName: 'Blood',
    testConcentration: '12.3'
  },
  {
    customerName: 'foo',
    testName: 'Blood',
    testConcentration: '12.4'
  },
  {
    customerName: 'foo',
    testName: 'Blood',
    testConcentration: '12.5'
  },
  {
    customerName: 'foo',
    testName: 'Blood',
    testConcentration: '100'
  },
];

beforeEach(() => {
  return store.dispatch.app.clearTestResults();
});


describe("basic reducer tests", () => {

  it("add results to state then clear them", () => {

    // add a set of test results
    _testResults.map((r) => {
      store.dispatch.app.addTestResult(r)
    })

    // check the number of stored results is the same as the test data set
    expect(store.getState().app.testResults).toHaveLength(_testResults.length)

    // clear the results
    store.dispatch.app.clearTestResults();

    // check there are no results left in state
    expect(store.getState().app.testResults).toHaveLength(0)

  })

})

describe("test the resultLevel logic", () => {

  it("testConcentration of 5.45 should result in a low resultLevel value", () => {
    
    store.dispatch.app.addTestResult({
      customerName: 'foo',
      testName: 'Blood',
      testConcentration: '5.45'
    });

    const _testResult = store.getState().app.testResults[0];

    expect(_testResult.resultLevel).toEqual(enums.resultLevels.LOW);
  
  });

  it("testConcentration of 5.46 should result in a normal resultLevel value", () => {
    
    store.dispatch.app.addTestResult({
      customerName: 'foo',
      testName: 'Blood',
      testConcentration: '5.46'
    });

    const _testResult = store.getState().app.testResults[0];

    expect(_testResult.resultLevel).toEqual(enums.resultLevels.NORMAL);
  
  });

  
  it("testConcentration of 12.4 should result in a normal resultLevel value", () => {
    
    store.dispatch.app.addTestResult({
      customerName: 'foo',
      testName: 'Blood',
      testConcentration: '12.4'
    });

    const _testResult = store.getState().app.testResults[0];

    expect(_testResult.resultLevel).toEqual(enums.resultLevels.NORMAL);
  
  });

  
  it("testConcentration of 12.5 should result in a high resultLevel value", () => {
    
    store.dispatch.app.addTestResult({
      customerName: 'foo',
      testName: 'Blood',
      testConcentration: '12.5'
    });

    const _testResult = store.getState().app.testResults[0];

    expect(_testResult.resultLevel).toEqual(enums.resultLevels.HIGH);
  
  });

});