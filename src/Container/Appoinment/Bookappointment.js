import React from 'react';
import * as yup from 'yup';
import { Formik, useFormik, Form } from 'formik';
import { NavLink } from 'react-router-dom';

function Bookappointment(props) {
    // const history=useHistory();

    let schema = yup.object().shape({
        name: yup.string().required("Enter your name"),
        phone: yup.number().required().positive().integer(),
        email: yup.string().email().required("Enter your email"),
        message: yup.string().required("Enter your message"),
        department: yup.string().required("select your Department"),
        date: yup.date().required("Enter Appointment date"),
    });

    const handleinsert = (values) => {

        let id=Math.floor(Math.random()*1000);

        let data={
            id:id,
            ...values
        }

        let LocalData=JSON.parse(localStorage.getItem("apt"));

        if(LocalData === null){
            localStorage.setItem("apt",JSON.stringify([data]));
        }
        else{
            LocalData.push(data);
            localStorage.setItem("apt",JSON.stringify(LocalData));
        }

        console.log(LocalData);
    }

    // history.push('/Listappointment');

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            message: '',
            department: '',
            date: ''
        },

        validationSchema: schema,

        onSubmit: values => {
            handleinsert(values);
        },

    });

    const { handleChange, errors, handleSubmit, handleBlur, touched } = formik;

    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <div className='row'>
                            <div className='col-6' >
                                <NavLink to={"/Bookappointment"}>Bookappointment</NavLink>
                            </div>
                            <div className='col-6'>
                                <NavLink to={"/Listappointment"}>Listappointment</NavLink>
                            </div>
                        </div>
                    </div>
                    <Formik values={formik}>
                        <Form className="php-email-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChange} onBlur={handleBlur} />
                                    <p className="text-danger">{errors.name && touched.name ? errors.name : ''}</p>
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handleChange} onBlur={handleBlur} />
                                    <p className="text-danger">{errors.email && touched.email ? errors.email : ''}</p>
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChange} onBlur={handleBlur} />
                                    <p className="text-danger">{errors.phone && touched.phone ? errors.phone : ''}</p>
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChange} onBlur={handleBlur} />
                                    <p className="text-danger">{errors.date && touched.date ? errors.date : ''}</p>
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 ">
                                    <select name="department" id="department" className="form-select" onChange={handleChange} onBlur={handleBlur}>
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                    <p className="text-danger">{errors.department && touched.department ? errors.department : ''}</p>
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} onChange={handleChange} onBlur={handleBlur} />
                                <p className="text-danger">{errors.message && touched.message ? errors.message : ''}</p>
                                <div className="validate" />
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Make an Appointment</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>

    );
}

export default Bookappointment;