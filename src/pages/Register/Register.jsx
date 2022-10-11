import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import concert from "./concert3.jpg"

const Register = () => {
    return (
        <>
            <div className="regPage">
                <div className="part1">
                    <form className='form'>
                        <h1>Join us now!</h1>
                        <div className="names">
                            <div className='firstName'>
                                <label className='littletext' htmlFor="firstName">First Name</label>
                                <input required type="text" className='area' name="firstName" placeholder="First Name..." />
                            </div>
                            <div className='lastName'>
                                <label className='littletext' htmlFor="lastName">Last Name</label>
                                <input required type="text" className='area' name="lastName" placeholder="Last Name..." />
                            </div>

                        </div>
                        <label className='littletext' htmlFor="email">Email</label>
                        <input required type="email" className='area' name="email" placeholder="Enter your email..." />
                        <label className='littletext' htmlFor="phone">Number</label>
                        <input required type="text" className='area' name="phone" placeholder="Enter your  number..." />
                        <label className='littletext' htmlFor="password">Password</label>
                        <input required type="password" className='area' name="password" placeholder="Enter your password..." />
                        <label className='littletext' htmlFor="password">Confirm Password</label>
                        <input required type="password" className='area' name="password" placeholder="Enter your password again..." />
                        <button className="signUp">Sign up</button>
                        <div className='formBottom'>
                            <p>Already have an account?</p>
                            <Link className='highlight' to="/login">Sign in!</Link>
                        </div>
                    </form>
                </div>
                <div className="part2">
                    <div className='image'>
                        <img src={concert} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register