import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await signUp (email, password)
            navigate('/')
        }catch (error){
            console.log(error)
        }
    }
    
  return (
    <div className="w-full h-screen">
      <img className="hidden sm:block absolute w-full h-full object-cover" 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/a678bf27-dbb6-42e7-aad1-d4dbb1c31d7b/IN-en-20221010-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt = "/"/>
        <div className= "bg-black/60 fixed top-0 left-0 w-full h-screen">
            <div className="fixed w-full px-4 py-24 z-50">
                <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                            <input onChange = {(e) => {
                                setEmail(e.target.value)
                            }}
                             className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder = "Email"/>
                            <input onChange = {(e) => {setPassword(e.target.value)}}
                             className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                            <div className="flex justify-between items-centre text-gray-600 text-sm">
                                <p> <input className="mr-2" type="checkbox"/>Remember me</p>
                                <p>Need Help ?</p>
                            </div>
                            <p className="py-8 cursor-pointer">
                                <span className="text-gray-600">Already subscribed to Netflix?   </span>
                                <Link to = '/Login'>Sign In</Link>
                            </p>

                        </form>

                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default SignUp