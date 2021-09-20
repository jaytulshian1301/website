import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
    startdate: '',
    enddate: ''
}

function parse(d) {
  let arr = d.split("-");

  return [arr[2], arr[1], arr[0]].join("-");
}

let errors = {}

const validate = (values, startdate, enddate) => {

    let date1 = new Date(values.startdate)
    let date2 = new Date(startdate)
    let date3 = new Date(values.enddate)
    let date4 = new Date(enddate)

    console.log(date1, date2, date3, date4)

    if(!values.startdate) {
        errors.startdate = "Start Date cannot be null"
    } else if(date1 < date2){
        errors.startdate = "Start Date cannot be less than " + parse(startdate)
    }else{
        errors.startdate = ""
    }
    if (!values.enddate) {
      errors.enddate = "End Date cannot be null";
    } else if (date3 > date4) {
      errors.enddate = "End Date cannot be greater than " + parse(enddate);
    } else {
      errors.enddate = "";
    }
};

const TextError = (props) => <div className="error-msg">{props.children}</div>

const Filter = ({ startdate, enddate }) => {

    const validator = (values) => {
        validate(values, startdate, enddate)
    }

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
      <div class="jumbotron m-5 mt-4 mb-0 p-3 border">
        <Formik
          initialValues={initialValues}
          validate={validator}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="d-flex flex-wrap coupon">
                <div className="col-9 mb-3">
                  <div className="input-group">
                    <Field
                      className="col-12"
                      type="date"
                      name="startdate"
                      id="startdate"
                      autoComplete="off"
                    />
                    <div
                      className="error-msg-wrapper"
                    >
                      <ErrorMessage
                        className="text-red"
                        name="coupon"
                        component={TextError}
                      />
                      <div>{errors.startdate}</div>
                    </div>
                  </div>
                </div>
                <div className="col-9 mb-3">
                  <div className="input-group">
                    <Field
                      className="col-12"
                      type="date"
                      name="enddate"
                      id="enddate"
                      autoComplete="off"
                      placeholder="Enter PromoCode"
                    />
                    <div
                      className="error-msg-wrapper"
                    >
                      <ErrorMessage
                        className="text-red"
                        name="coupon"
                        component={TextError}
                      />
                      <div>{errors.enddate}</div>
                    </div>
                  </div>
                </div>
                <div className="col-3 mb-2">
                  <button type="submit" onClick={onSubmit}>
                    Apply Filter
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    );
}

export default Filter
