import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";


function createElement(obj) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };
    fetch('https://676925c5cbf3d7cefd39c25e.mockapi.io/api/products/', requestOptions)
        .then(response => response.json())
}

const AddProduct = () => {
    const navigate = useNavigate()
  return (
    <>
      <Formik
        initialValues={{ title: "", description: "", category: "" ,price:""}}
        validationSchema={Yup.object({
          title: Yup.string()
            .required("Required"),
          description: Yup.string()
            .required("Required"),
          category: Yup.string()
            .required("Required"),
          price: Yup.string()
            .required("Required"),
        })}
        onSubmit={(values) => {
        createElement(values)
        navigate("/admin")
        }}
      >
        <Form>
          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="description">Description</label>
          <Field name="description" type="text" />
          <ErrorMessage name="description" />

          <label htmlFor="category">Category</label>
          <Field name="category" type="text" />
          <ErrorMessage name="category" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />

          <button type="submit">Add</button>
        </Form>
      </Formik>
    </>
  );
};

export default AddProduct;
