import './Login.css'
import concert from './concert3.jpg'
import { useState } from "react"
import { Link } from 'react-router-dom'
import axios, { Axios } from 'axios'
import { toast, Toaster } from 'react-hot-toast'
import { useEffect } from 'react'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/users")
            .then(res => setUsers(res.data))
    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:8080/users/login',
            headers: {},
            data: {
                email: email,
                password: password
            }
        }).then(res => {
            if (res.status == 200) {
                toast.success("Welcome")
                window.location.href("http://localhost:3000/")
            }
            else if (res.status == 401) {
                toast.error("Something went wrong")
            }
        });

    }

    return (
        <>
            <div className="loginPage">
                <div className="part1">
                    <form onSubmit={submitHandler} className='form'>
                        <h1>Welcome back!</h1>
                        <label className='littletext' htmlFor="email">Email</label>
                        <input required type="email" className='area' value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                        <label className='littletext' htmlFor="password">Password</label>
                        <input required type="password" className='area' value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Enter your password" />
                        <div className='section'>
                            <input type="checkbox" name="rememberMe" />
                            <label className='littletext' htmlFor="rememberMe"> Remember for 30 days</label>
                            <span><a className='littletext' href="#">Forgot password</a></span>
                        </div>
                        <button className="signin" onClick={(e) => submitHandler(e)}>Sign in</button>
                        <button className='area'><p className='littletext'>Sign in with Google</p></button>
                        <div className='formBottom'>
                            <p>Don't have an account?</p>
                            <Link to="/register">
                                Sign up!
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="part2">
                    <div className='image'>
                        <img src={concert} />
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    )
}

export default Login