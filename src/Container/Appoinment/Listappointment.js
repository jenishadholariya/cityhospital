import React from 'react';

function Listappointment(props) {
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
                </div>
            </section>
        </main>
    );
}

export default Listappointment;