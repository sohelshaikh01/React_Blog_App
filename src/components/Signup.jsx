import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import authService from '../appwrite/auth';
import { login } from '../store/authSlice';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Button, Input, Logo } from './index';

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const[error, setError] = useState("");

    const create = async(data) => {
        setError("");

        try {
            const userData = await authService.createAccount(data);
            toast.success("Sign Up User Response", userData);

            if(userData) {
                const userData = await authService.getCurrentUser();
                if(userData) dispatch(login(userData));
                toast.success("Currenct User SignUp Response", userData);
                navigate("/");

            }
        } catch (error) {
          setError(error.message);  
        }
    }

  return (
    <div className="flex items-center justify-center w-full">
    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}> 

        <div className="mb-2 flex justify-center">
            <span className='inline-block w-full max-w-[100px]'>
            <Logo width="100px" />
            </span>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight">  Sign up to create your account </h2>

        <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp; 
        <Link to="/login" className="font-medium text-primary transition-all duration-200 hover:underline">
            Login
        </Link>
        </p>

        {error && <p className="text-red-600 mt-8 text-center"> {error} </p>}

        <form onSubmit={handleSubmit(create)}>
            <div className="space-y-5">
                
                <Input label="Full Name:" autoComplete="Name" type="text"  placeholder="Enter your full name"  {...register("name", {
                    required: true,
                })} />

                <Input label="Email:"  placeholder="Enter your Email" autoComplete="Email"  type="email"  {...register("email", {
                    required: true,
                    validate: { // can spelling error occurs = 'matchPatern' Original
                        matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })} />

                <Input label="Password:" placeholder="Enter your password" autoComplete="Password" type="password"  {...register("password", {
                    required: true
                })} />

                <Button type="Submit" className="w-full">
                    Create Account
                </Button>


            </div>
        </form>
      
    </div>
    </div>
  )
}

export default Signup;
