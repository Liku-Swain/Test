import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const ProceedLogin = async (e) => {
        e.preventDefault();

// validation for login
if(validate()){
    const regobj = { username, password };

    try {
        // Simulating registration success
        toast.success('Registered Successfully.');
        // Navigate to login page or perform any other action
    } catch (err) {
        // Simulating registration failure
        toast.error('Failed: ' + err.message);
    }
}

    }
  
const validate = () => {
    let result = true;
    if (username === '' || username === null) {
        result = false;
        toast.warning('Please Enter User name');
    }
    if (password === '' || password === null) {
        result = false;
        toast.warning('Please Enter Password');
    }
    return result;
    }


    return (
        <div>



            <div className="offset-lg-3  col-lg-6 mt-5">
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2 >User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name<span className="errmsg">*</span></label>
                                <input type={username} required value={username} onChange={e => setUsername(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password<span className="errmsg">*</span></label>
                                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="form-control"></input>
                            </div>
                        </div>

                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button>
                            <Link className="btn btn-success ms-2" to={'/signup'}>New User</Link>
                        </div>
                    </div>
                </form>
                <ToastContainer/>
            </div>




        </div>
    )
}

export default Login
