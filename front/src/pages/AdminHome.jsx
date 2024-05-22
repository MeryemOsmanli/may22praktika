import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AdminHome() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getAllInformation()
  }, []);

  async function getAllInformation() {
    const response = await fetch('http://localhost:3000/meryem/');
    const data = await response.json();
    setProduct(data)

  }

  async function getDelete(id) {
    const response = await fetch('http://localhost:3000/meryem/' + id, {
      method: 'DELETE'
    });
    const data = await response.json();
    getAllInformation()

  }


  return (

    <div>
      <Formik
        initialValues={{ image: '', title: '', price: '' }}
        validationSchema={Yup.object({
          image: Yup.string()

            .required('Required'),
          title: Yup.string()

            .required('Required'),
          price: Yup.number().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            async function getAdd() {
              const response = await fetch('http://localhost:3000/meryem/', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
              });
              const data = await response.json();
             getAllInformation()
            }
            getAdd()
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="image">First image</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="title">Last Name</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="price">price price</label>
          <Field name="price" type="text" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <table style={{ border: "1px solid black" }}>
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "1px solid black" }}>image</th>
          <th>title</th>
          <th>price</th>
        </tr>
        <tr>
          <td style={{ border: "1px solid black" }}>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        {product.map((x) => (

          <tr key={x._id}>
            <td><img src={x.image} alt="" /></td>
            <td>{x.title}</td>
            <td>{x.price}</td>
            <td><button onClick={()=>getDelete(x._id)}>delete</button></td>
          </tr>
        ))
        }

      </table>
    </div>
  )
}

export default AdminHome
