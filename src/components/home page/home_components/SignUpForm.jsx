import { useState } from "react"
import emailjs from 'emailjs-com';



export default function SignUpform() {
    const [userCredentials, SetUserCredentials] = useState({
        user_name: "",
        email: "",
        interest: ""
    })

    function handleChange(e) {
        const {name, value} = e.target

        SetUserCredentials(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const sendEmail = (e) => {
                e.preventDefault();
                console.log(userCredentials)
    
                emailjs
                .send('service_eur6dqk', 'template_kvkpu2r',{
                    user_name: userCredentials.user_name,
                    email: userCredentials.email,
                    interest: userCredentials.interest,
                } , 'HHvwTlVB99Dr-l6d_')
                .then(
                    () => {
                    console.log('SUCCESS!');
                    alert("Your request has been submitted successfully.")
                    SetUserCredentials({
                        user_name:"",
                        email:"",
                        interest: ""
                    })
                    },
                    (error) => {
                    console.log('FAILED...', error.text);
                    alert("Error submitting your request.")
                    },
                );
            };

    return(
        <form id="signup-form" className={`mt-4 space-y-3`} onSubmit={sendEmail}>
            <input 
                type="text"
                name="user_name" 
                placeholder="Your full name"  
                value={userCredentials.user_name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-md border border-inputBorder/30 rounded-md placeholder: text-placeholder bg-black/40 focus:shadow-sm focus:shadow-indigo-400 focus:outline-none"
            />
            <input 
                type="email"
                name="email" 
                placeholder="Email address" 
                value={userCredentials.email}
                onChange={handleChange}
                required 
                className="w-full px-3 py-2 rounded-md border border-inputBorder/30 rounded-md placeholder: text-placeholder bg-black/40 focus:shadow-sm focus:shadow-indigo-400 focus:outline-none"
            />

            <input 
                type="password"
                name="password" 
                placeholder="Password" 
                value={userCredentials.email}
                onChange={handleChange}
                required 
                className="w-full px-3 py-2 rounded-md border border-inputBorder/30 rounded-md placeholder: text-placeholder bg-black/40 focus:shadow-sm focus:shadow-indigo-400 focus:outline-none"
            />
            <input 
                type="password"
                name="password" 
                placeholder="Confirm Password" 
                value={userCredentials.email}
                onChange={handleChange}
                required 
                className="w-full px-3 py-2 rounded-md border border-inputBorder/30 rounded-md placeholder: text-placeholder bg-black/40 focus:shadow-sm focus:shadow-indigo-400 focus:outline-none"
            />
            <button className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md">Sign Up</button>
            
        </form>
    )
}