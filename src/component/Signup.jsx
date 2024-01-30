import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [eid, setEid] = useState("");
    const [eName, setEname] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    //   Validation 

    const isValidate = () => {

        let isProceed = true;
        let errormessage = "Please Enter the value";

        if (eid === null || eid === "") {
            isProceed = false;
            errormessage += 'eid';
        }
        if (eName == null || eName === "") {
            isProceed = false;
            errormessage += 'eName';
        }

        if (user == null || user === "") {
            isProceed = false;
            errormessage += 'user';
        }

        if (password == null || password === "") {
            isProceed = false;
            errormessage += 'password';
        }

        if (!isProceed) {
            toast.warning(errormessage);
        } else {
            // validation for Employee id
            if (/^[0-9]+$/.test(eid)) {

            } else {

                isProceed = false;
                toast.warning('Please enter the valid EmployeeId');
            }
        }
        // validation for UserId
       if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user)) {
       }else{
        isProceed = false;
        toast.warning('Please enter the valid UserId ')
       }
        //validation for password

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(password)) {

        } else {
            isProceed = false;
            toast.warning('Please enter the valid password atleast 8digit and one uppercase and one lowercase');
        }
 
    
    return isProceed;     
    }



    // For Submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();

        let regobj = {eid,eName,user,password}
        if(isValidate()){
            console.log(regobj);
            try {
                
                toast.success('Registered Successfully.');
                // navigate('/login');
                
            } catch (err) {
               
                toast.error('Failed: ' + err.message);
            }
        }
    };

    // For Resetting the Form
    const handleReset = () => {
        setEid("");
        setEname("");
        setUser("");
        setPassword("");
    };

    return (
        <div className="offset-lg-3 col-lg-6 register mt-5 ">
            <form className="container " onSubmit={handleSubmit} onReset={handleReset}>
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <h1>Employee Registration</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {/* Employee id */}
                                <div className="">
                                    <div className="form-group">
                                        <label>Employee Id<span className="errmsg">*</span></label>
                                        <input
                                            placeholder="Enter Employee Id"
                                            type='number'
                                            className="form-control"
                                            value={eid}
                                            onChange={(e) => {
                                                setEid(e.target.value);
                                                console.log("Employee Id:", e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                {/* Employee Name */}
                                <div className="">
                                    <div className="form-group">
                                        <label>Employee Name<span className="errmsg">*</span></label>
                                        <input
                                            placeholder="Enter Your EmployeeName "
                                            type='text'
                                            className="form-control"
                                            value={eName}
                                            onChange={(e) => {
                                                setEname(e.target.value);
                                                console.log("Employee Name", e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Employee UserId */}
                            <div className="">
                                <div className="form-group">
                                    <label>UserId<span className="errmsg">*</span></label>
                                    <input
                                        placeholder="Enter Your UserId (exa- UserId@123)"
                                        type='text'
                                        className="form-control"
                                        required value={user}
                                        onChange={(e) => {
                                            setUser(e.target.value);
                                            console.log("Employee Name", e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Employee password */}
                            <div className="">
                                <div className="form-group">
                                    <label>Password<span className="errmsg">*</span></label>
                                    <input
                                        placeholder="Enter Password"
                                        className="form-control"
                                        required
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            console.log("Employee pwd", e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer mt-2 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                            <button type="reset" className="btn btn-danger ms-2">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
                {/* Toast container */}

            </form>
            <ToastContainer />
        </div>
    );
}

export default Signup;
