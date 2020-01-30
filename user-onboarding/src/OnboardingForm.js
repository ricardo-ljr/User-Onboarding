import React, { useState, useEffect } from "react";
import { Formik, withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { TextField, Button, Checkbox } from "@material-ui/core";

const UserForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("status has changed", status);
    status && setUsers(users => [...users, status]);
  }, [status]);
  return (
    <div>
      <Formik
        initialValues={{ firstName: "" }}
        onSubmit={data => {
          console.log("submit", data);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="First Name..."
            />
            <br />
            <TextField
              name="Last Name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Last Name..."
            />
            <br />
            <TextField
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email..."
            />
            <br />
            <TextField
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password..."
              type="password"
            />

            <br />
            <label className="checkbox-container">
              Do You Agree With Our Terms?
              <br />
              <Checkbox
                type="checkbox"
                name="vaccinations"
                checked={values.vaccinations}
              />
              <span className="checkmark" />
            </label>
            <br />
            <Button type="submit">Submit</Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
