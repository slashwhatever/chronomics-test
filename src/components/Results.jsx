import React from 'react';
import { connect } from 'react-redux';
import store from '../store'

const Results = ({ testResults }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Test name</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
      {
        testResults.map(r => {
          return (
            <tr>
              <td>{r.customerName}</td>
              <td>{r.testName}</td>
              <td>{r.resultLevel}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}


const selection = store.select((models) => ({testResults: models.app.testResults}));

export default connect(selection)(Results);
