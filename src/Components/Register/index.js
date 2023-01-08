import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';


const Register = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required,
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required,
            email: Yup.string()
                .email('Invalid email address')
                .required,

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <div className='container'>
                <div className='logo'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' />
                </div>
                <div className='box-1'>
                    <div className='text-1'>Create a new account</div>
                    <div className='text-2'>It’s quick and easy.</div>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='box-2'>
                        <div className='names'>
                            <div className='left'>
                                <label htmlFor="firstName"></label>
                                <input
                                    className='left-name'
                                    placeholder='First Name'
                                    id="firstName"
                                    type="text"
                                    {...formik.getFieldProps('firstName')}
                                />
                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <div>{formik.errors.firstName}</div>
                                ) : null}
                            </div>
                            <div className='right'>
                                <label htmlFor="lastName"></label>
                                <input className='right-name' placeholder='Last Name' id="lastName" type="text" {...formik.getFieldProps('lastName')} />
                                {formik.touched.lastName && formik.errors.lastName ? (
                                    <div>{formik.errors.lastName}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className='reg-mail'>
                            <label htmlFor="email"></label>
                            <input className='reg-mail' placeholder='Mobile number or email' id="email" type="email" {...formik.getFieldProps('email')} />
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className='reg-pass'>
                            <label htmlFor="password"></label>
                            <input className='reg-pass' placeholder='New password' id="password" type="password" {...formik.getFieldProps('password')} />

                        </div>
                        <div className='b-text'>Birthday</div>
                        <div className='birthday'>
                            <select className='birthday-op' title='month'>
                                <option value="1">Jan</option>
                                <option value="2">Feb</option>
                                <option value="3">Mar</option>
                                <option value="4">Apr</option>
                                <option value="5">May</option>
                                <option value="6">Jun</option>
                                <option value="7">Jul</option>
                                <option value="8">Aug</option>
                                <option value="9">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </select>

                            <select className='birthday-op' title='day'>
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                                <option value="1">6</option>
                                <option value="1">7</option>
                                <option value="1">8</option>
                                <option value="1">9</option>
                                <option value="1">10</option>
                                <option value="1">11</option>
                                <option value="1">12</option>
                                <option value="1">13</option>
                                <option value="1">14</option>
                                <option value="1">15</option>
                                <option value="1">16</option>
                                <option value="1">17</option>
                                <option value="1">18</option>
                                <option value="1">19</option>
                                <option value="1">20</option>
                                <option value="1">21</option>
                                <option value="1">22</option>
                                <option value="1">23</option>
                                <option value="1">24</option>
                                <option value="1">25</option>
                                <option value="1">26</option>
                                <option value="1">27</option>
                                <option value="1">28</option>
                                <option value="1">29</option>
                                <option value="1">30</option>
                                <option value="1">31</option>
                            </select>
                            <select className='birthday-op' title='year'>
                                <option value="1940">1940</option>
                                <option value="1941">1941</option>
                                <option value="1942">1942</option>
                                <option value="1943">1943</option>
                                <option value="1944">1944</option>
                                <option value="1945">1945</option>
                                <option value="1946">1946</option>
                                <option value="1947">1947</option>
                                <option value="1948">1948</option>
                                <option value="1949">1949</option>
                                <option value="1950">1950</option>
                                <option value="1951">1951</option>
                                <option value="1952">1952</option>
                                <option value="1953">1953</option>
                                <option value="1954">1954</option>
                                <option value="1955">1955</option>
                                <option value="1956">1956</option>
                                <option value="1957">1957</option>
                                <option value="1958">1958</option>
                                <option value="1959">1959</option>
                                <option value="1960">1960</option>
                                <option value="1961">1961</option>
                                <option value="1962">1962</option>
                                <option value="1963">1963</option>
                                <option value="1964">1964</option>
                                <option value="1965">1965</option>
                                <option value="1966">1966</option>
                                <option value="1967">1967</option>
                                <option value="1968">1968</option>
                                <option value="1969">1969</option>
                                <option value="1970">1970</option>
                                <option value="1971">1971</option>
                                <option value="1972">1972</option>
                                <option value="1973">1973</option>
                                <option value="1974">1974</option>
                                <option value="1975">1975</option>
                                <option value="1976">1976</option>
                                <option value="1977">1977</option>
                                <option value="1978">1978</option>
                                <option value="1979">1979</option>
                                <option value="1980">1980</option>
                                <option value="1981">1981</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>
                        <div className='gender-text'>Gender</div>
                        <div className='gender'>
                            <form action="/action_page.php">
                                <div>
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label for="html">Female</label></div>
                                <div>
                                    <input type="radio" id="css" name="fav_language" value="CSS" />
                                    <label for="css">Male</label></div>
                                <div>
                                    <input type="radio" id="javascript" name="fav_language" value="JavaScript" ></input>
                                    <label for="javascript">Custom</label>
                                </div>


                            </form>
                        </div>
                        <div className='bottom-text'>
                            <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                        </div>
                        <div className='bottom-text'>
                            <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                        </div>
                        <div className='button-bottom'>
                            <button className='last-button' type="submit">Sign Up</button>
                        </div>
                        <div className='already'>
                        <NavLink to={'/'} className='sign'>Already have an accaunt?</NavLink>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default Register