import React from "react";
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";


const Form = ({ addTestResult }) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = testResult => addTestResult(testResult);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Customer Name</label>
        <input type="text" placeholder="Customer name" {...register("customerName", {required: true, maxLength: 80})} />
      </div>
      <div>
        <label>Test Name</label>
        <select {...register("testName", { required: true })}>
          <option value="Blood">Blood</option>
          <option value="Covid PCR">Covid PCR</option>
          <option value="Epiginetics">Epiginetics</option>
        </select>
      </div>

      <div>
        <label>Test Concentration (umol/L)</label>
        <input type="text" placeholder="Test concentration" {...register("testConcentration", {required: true})} />
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

export default connect(
  state => ({}),
  dispatch => ({
    addTestResult: (testResult) => dispatch.app.addTestResult(testResult),
  })
)(Form)