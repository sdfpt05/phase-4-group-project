import { useFormik } from "formik";
import * as Yup from 'yup';
import './css/Signup.css';
// import { serverURL } from "../utils";
import { useAuth } from "../authcontext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup } = useAuth()
  const navigate = useNavigate

async function onSubmit (values) {
  console.log(values)
  signup()
  navigate('/login')
  // const res = await fetch(serverURL, {
  //   method: "POST",
  //   body: JSON.stringify(values),
  //   headers: {"Content-Type": "application/json"}
  // }) 
  // const data = await res.json()
}

    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Password is required').min(6, 'Password need to be 6 characters')
      }),
      onSubmit,
      
    });

  
    return (
      <form onSubmit={formik.handleSubmit} style={{ maxWidth: '400px', margin: 'auto'}}>
        <div style={{ marginTop: "5rem", marginBottom: '1rem' }}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            style={{
              width: '100%',
              padding: '0.5rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
  
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            style={{
              width: '100%',
              padding: '0.5rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>
  
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            style={{
              width: '100%',
              padding: '0.5rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>
              {formik.errors.email}
            </div>
          ) : null}
        </div>
  
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            style={{
              width: '100%',
              padding: '0.5rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>
              {formik.errors.password}
            </div>
          ) : null}
        </div>
  
        <button
          type="submit"
          style={{
            backgroundColor: '#301934',
            color: 'white',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    );
  };

export default Signup