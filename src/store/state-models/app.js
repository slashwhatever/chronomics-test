import enums from '../../utils/enums'

const _initialState = {
  testResults: []
}

export const app = {
  name: 'app',
  state: _initialState, // initial state
  reducers: {
    clearTestResults() {
      return _initialState;
    },
    addTestResult(state, payload) {

      const _result = {
        ...payload,
        resultLevel: payload.testConcentration <= 5.45
          ? enums.resultLevels.LOW
          : (
            payload.testConcentration <= 12.4
              ? enums.resultLevels.NORMAL
              : enums.resultLevels.HIGH
          )
      }
      return {
        ...state,
        testResults: [...state.testResults, _result]
      };
    },
  },
  selectors: (slice, createSelector) => ({
    testResults() {
      return createSelector(
        slice,
        (app) => app.testResults);
    }
  })
};

export default app;