import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import { NavLink } from 'react-router-dom';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required,
            email: Yup.string().email('Invalid email address').required,
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='container'>
            <div className='logo'>
                <img  src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'/>
            </div>
        <form onSubmit={formik.handleSubmit}>
            <div className='box'>
            <div className='top-text'>Log Into Facebook</div>
                <div className='email'>
                    <label htmlFor="email"></label>
                    <input placeholder='Email or phone number' id="email" type="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className='pass'>
                    <label htmlFor="password"></label>
                    <input
                        placeholder='Password'
                        id="password"
                        type="text"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                </div>



                <button className='login' type="submit">Log In</button>

                <div className='bottom-texts'>
<a href='#' className='forgot'>Forgot account?</a>
<span>· </span>
<NavLink to={'/Register'} className='sign'>Sign up for Facebook</NavLink>
                </div>
            </div>
        </form>
        </div>
    );
};
export default Login