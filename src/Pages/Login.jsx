import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import Alert from './Alert';
import {Link} from 'react-router-dom'

const Login = () => {
    const {register,handleSubmit,formState:{errors}, reset } = useForm();

    const [alertMsg,setAlertMsg] = useState({show: false, type:  '',  msg: '' })

    const showAlert = (show = false, type = '' , msg='') =>{
        setAlertMsg({show, type, msg})
    }

    const onSubmit = (data) =>{
        console.log(data)
        showAlert(true,'success','Login successfully')
        reset()
    }
    return(
        <>
            <form className="LogForm container-fluid" onSubmit = {handleSubmit(onSubmit)}>
                <h1 className="text-center">Login Page</h1>
                <hr />
                <div className="LogInfo text-center">
                    <label>Email: </label><br />
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="Enter your email "
                        {...register("email",{required: 
                            {value:true,message:"Email field required"},
                            pattern:{value:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/ , message:'Invalid Email'}
                        })}
                    /> <br />
                    {errors.email && <small className="text-warning"> <p>{errors.email.message}</p> </small> }
                </div>

                <div className="LogInfo text-center">
                    <label>Password: </label><br />
                    <input 
                        type="password" 
                        name="Password" 
                        id="Password"
                        placeholder="Enter your password"
                        {...register("password",{required:
                        {value:true,message:"Enter field password"},
                        minLength:{value:6, message:'minimum 6 letters'},
                        maxLength: {value:15, message: 'maximum 15 letters'},
                        pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).(?=.*[0-9]).{5,15}$/ ,message:'Password should be in alphanumeric form'}
                        })}    
                    />
                    {errors.password && <small className="text-warning"><p>{errors.password.message}</p></small> }
                        <br />
                        {alertMsg.show && <Alert {...alertMsg} removeAlert={showAlert} />}
                </div>
                
                    
                

                <div className="LogInfo d-grid gap-2 d-lg-flex justify-content-lg-end">
                    <button className="btn btn-outline-warning btn-lg">Submit</button>
                </div>
                <br />
                <br />
                <hr />
                <div className="LogInfo d-lg-flex justify-content-lg-start">
                    <>Have not an Account ? </>
                    <Link className="text-warning mx-3" to={'/Signin'}> Please Registered first</Link>
                </div>
            </form>
        </>
    )
}
 export default Login