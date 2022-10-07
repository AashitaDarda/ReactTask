import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import Alert from './Alert';
// import Login from './Login'
import {Link} from 'react-router-dom'

const Registration = () => {

    const {register, handleSubmit, formState:{errors}, reset } = useForm();
   
    const [alertMsg, setAlertMsg] = useState({show: false, msg:"", type:""})
    const [checkMsg, setCheckMsg] = useState({show: false, msg:"", type:""})



    const showAlert = (show = false, type = "" ,msg="") =>{
        setAlertMsg({show, type, msg})
    }

    const showCheck = (show = false, type = "" ,msg="") =>{
        setCheckMsg({show, type, msg})
    }

    const onSubmit = (data) => {
        if(data.hobbies.length < 2){
            return(
                <>
                    <p>{showCheck(true,'warning', 'Select Atleast 2 hobbies ')}</p>
                </>
            )
        }
        else if(data.conpass != data.password){
            return(
                <>
                    <p>{showAlert(true,'warning', 'Password did not Matched')}</p>
                </>
            )
        }
        else{
            reset()
            console.log(data)
            console.log('Registration done successfully')
        }
    }

    //Reset Button
    const onReset = (data) =>{
        console.log('Data Cleared')
        reset(data);
    }
    return(
        <>
            <form className="RegForm container-fluid" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="m-3 text-center">Registration-Form</h1> <hr />
                
                <div className="RegInfo text-center">
                    <label>Full Name: </label><br />
                    <input 
                        type="text" 
                        name="username"
                        id="username" 
                        placeholder="Enter your name"
                        {...register("username" , {required: {
                            value:true,
                            message:'Name field is required'},
                            pattern: {value:/^[a-zA-Z\s_, ]*$/,message:"Enter correct Name" },
                            minLength: {value:3,message:'minimum 3 characters'}
                        })}
                     /><br />
                    {errors.username && <small className="text-warning"> <p> {errors.username.message} </p> </small> }
                </div>

                <div className="RegInfo text-center">
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

                <div className="RegInfo text-center">
                    <label>Phone Number: </label><br />
                    <input 
                        type="number" 
                        name="phoneNumber" 
                        id="phoneNumber" 
                        placeholder="Enter your mobile number"
                        {...register("number", {required: {
                            value:true,
                            message: 'Number field is required'},
                            minLength: {value:10,message:'Enter 10 digit number'},
                            maxLength: {value:10,message:'Enter 10 digit number'},
                        })}
                    /> <br />
                    {errors.number && <small className="text-warning"> <p> {errors.number.message} </p> </small> }
                </div>

                <div className="RegInfo text-center">
                    <label>Address: </label><br />
                    <textarea 
                        type="text" 
                        name="Address" 
                        id="Address" 
                        placeholder="Enter your Address"
                        {...register("address", {required:{
                            value:true,message:'Address field required'},
                            pattern:{value:/^[a-zA-Z0-9\s_, ]*$/,message: 'put your write address'},
                            minLength:{value:10, message:'put your write address'}
                        })}
                    /> <br />
                    {errors.address && <small className="text-warning"> <p>{errors.address.message}</p> </small> }
                </div>

                <div className="RegInfo text-center">
                    <label>State :</label><br />
                        <select 
                            name="State" 
                            id="State"
                            {...register('state', {required: {
                                value:true,message:'Select any state'}
                            })}>
                            <option value="">Select state</option>
                            <option value="MadhyaPradesh">Madhya Pradesh</option>
                            <option value="HimachalPradesh">Himachal Pradesh</option>
                            <option value="AndraPradesh">Andra Pradesh</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Maharastra">Maharastra</option>
                            <option value="Gujrat">Gujrat</option>
                            <option value="Punjab">Punjab</option>
                        </select>   
                        {errors.state && <small className="text-warning"> <p> Select any State</p> </small> }
                </div>

                <div className="RegInfo text-center">
                    <label>City: </label><br />
                    <input 
                        type="text" 
                        name="City" 
                        id="City" 
                        placeholder="Enter your city"
                        {...register('city',{required:{
                        value:true,message:'City field required'},
                        pattern:{value:/^[a-zA-Z\s_, ]*$/, message: 'Put city name correctly'},
                        minLength:{value:3, message:'Put city name correctly'}
                        })}
                    />
                    {errors.city && <small className="text-warning"> <p>{errors.city.message}</p> </small> }
                </div>

                <div className="RegInfo text-center">
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
                </div>

                <div className="RegInfo text-center">
                    <label>confirm Password: </label><br />
                    <input 
                        type="password" 
                        name="conpass" 
                        id="conpass" 
                        placeholder="Conform your password"
                        {...register("conpass", {required:
                            {value:true,message:'Conform password field required'}
                        })}    
                    />
                    {alertMsg.show && <Alert {...alertMsg} removeAlert={showAlert} />}
                    {errors.conpass && <small className="text-warning"><p>{ errors.conpass.message }</p></small> }
                </div>

                <div className="RegInfo text-center">
                    <label>Gender: </label><br />
                    <input 
                        type="radio" 
                        className="gender mx-3" 
                        id="m" 
                        name="gender" 
                        value="Male"
                        {...register('gender', {required: 
                            {value:true, message:'Select any Gender'}
                        })}
                    />
                    <label>Male</label>
                    <input 
                        type="radio" 
                        className="gender mx-3" 
                        id="f" name="gender" 
                        value="Female"  
                        {...register('gender')}    
                    />
                    <label>Female</label>
                    {errors.gender && <small className="text-warning"><p>{errors.gender.message}</p></small> }
               </div>
                
               <div className="RegInfo text-center">
                    <label>Hobbies :</label><br />
                    <input 
                        type="checkbox" 
                        className="hobby mx-3" 
                        name="hobbies" 
                        value="Singing" 
                        {...register('hobbies',{required: 
                            {value:true , message:'Select any 2 hobbies'},
                            minLength: {value:2,message:'Select any 2 hobbies'}
                        })}    
                    /> 
                    <label>Singing</label>
                    <input 
                        type="checkbox" 
                        className="hobby mx-3" 
                        name="hobbies" 
                        value="Dancing" 
                        {...register('hobbies',{required: 
                            {value:true , message:'Select any 2 hobbies'},
                            minLength: {value:2,message:'Select any 2 hobbies'}
                        })}  
                    /> 
                     <label>Dancing</label>
                    <input 
                        type="checkbox" 
                        className="hobby mx-3" 
                        name="hobbies" 
                        value="Cooking" 
                        {...register('hobbies')}
                    />  
                    <label>Cooking</label> 
                    <br />
                    <input 
                        type="checkbox" 
                        className="hobby mx-3" 
                        name="hobbies"
                        value="Travelling" 
                        {...register('hobbies')}
                    /> 
                    <label>Travelling</label> 
                    <input 
                        type="checkbox" 
                        className="hobby mx-3" 
                        name="hobbies" 
                        value="Reading"  
                        {...register('hobbies')}
                    />  
                    <label>Reading</label>
                    {errors.hobbies && <small className="text-warning"><p>{errors.hobbies.message}</p></small> }
                    {checkMsg.show && <Alert {...checkMsg} removeAlert={showCheck} />}
                </div>

                <div className="RegInfo d-grid gap-2 d-lg-flex justify-content-lg-end">
                    <button className="btn btn-outline-warning btn-lg">Submit</button>
                    <button className="btn btn-outline-info btn-lg" onReset={handleSubmit(onReset)}>Reset</button>
                    <p>
                    </p>
                </div>
                <br />
                <hr />
                <div className="RegInfo d-lg-flex justify-content-lg-start">
                    <>Have an Account ? </>
                    <Link className="text-warning mx-3" to={'/Login'}> Please Login</Link>
                </div>

            </form>
        </>
    )
}

export default Registration