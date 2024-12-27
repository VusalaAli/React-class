import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from 'react-router-dom';
import { Atom } from 'react-loading-indicators';

function updateElement(id,obj) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };
    fetch('https://676925c5cbf3d7cefd39c25e.mockapi.io/api/products/' +id, requestOptions)
        .then(response => response.json())
}
function getData(id ,setproduct ,setloading) {
    fetch(`https://676925c5cbf3d7cefd39c25e.mockapi.io/api/products/` +id)
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);
        setloading(false);
      });
  }
const EditProduct = () => {
    const navigate = useNavigate()
    const [product, setproduct] = useState({})
    const [loading, setloading] = useState(true)
   const { id} = useParams()
   console.log(id);
   useEffect(() => {
    getData(id,setproduct,setloading)
   }, [])
   
  return (
    <>
      {loading ? (
        <Atom
          color="#3135cc"
          size="large"
          text="loading..."
          textColor="#NaNNaNNaN"
        />
      ) : (
      <Formik
      initialValues={{ title: product.title, description: product.description, category: product.category ,price:product.price}}
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
      onSubmit={(values, ) => {
      updateElement(id,values)
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
      )}
    </>
  )
}

export default EditProduct
