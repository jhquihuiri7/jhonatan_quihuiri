'use client'
import {useState, useRef, useEffect} from 'react';
import {motion } from 'framer-motion';

import dynamic from "next/dynamic";
import {EarthCanvas} from './canvas';
import {SectionWrapper} from '@/wrapper';
import {slideIn} from '@/utils/motion';
import nodemailer from "nodemailer";
import { toast } from "sonner"

//const Earth = dynamic(() => import("./Earth"), { ssr: false });
type FormType = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
    const formRef = useRef<HTMLFormElement>();
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:'',
    })
    const [isFormValid, setIsFormValid] = useState(false);
    const [loading, setLoading] = useState(false);
    
    // Check if all form fields have values
    useEffect(() => {
        const { name, email, message } = form;
        setIsFormValid(name.trim() !== '' && email.trim() !== '' && message.trim() !== '');
    }, [form]);
    
    // @ts-ignore
    const handleChange = (event, type) => {
        if (type=="name"){
            setForm({
                name:event.target.value,
                email:form.email,
                message:form.message,
            })
        }else if(type=="email"){
            setForm({
                name:form.name,
                email:event.target.value,
                message:form.message,
            })
        }else{
            setForm({
                name:form.name,
                email:form.email,
                message:event.target.value,
            })
        }
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page reload
        
        // Double check form validity before submitting
        if (!isFormValid) return;
        
        setLoading(true);

        try {
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setForm({
                    name:'',
                    email:'',
                    message:'',
                })
                if (formRef.current) {
                    formRef.current.reset();
                }
                toast("Email sent successfully")
            }else {
                toast("Error sending email, try again.")
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div
            className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
            >
            <motion.div
                variants={slideIn('left',"tween",0.2,1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
                >
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact</h2>
                <form
                    //@ts-ignore
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8 bg-white/[.7] xl:px-12 px-5 py-5 rounded-xl"
                    >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text" name="name" onChange={(event)=>handleChange(event,"name")} placeholder="What's your name?"
                            className="bg-[#3b4b8b] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                            ></input>
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="email" name="email" onChange={(event)=>handleChange(event,"email")} placeholder="What's your email?"
                            className="bg-[#3b4b8b] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                            ></input>
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            //@ts-ignore
                            rows="7" name="message" onChange={(event)=>handleChange(event,"message")} placeholder="What do you want to say?"
                            className="bg-[#3b4b8b] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                            ></textarea>
                    </label>
                    <button 
                        type="submit" 
                        disabled={!isFormValid || loading}
                        className={`bg-gradient-to-tr from-[#882afa] from-0% to-[#ffa0d8] to-90% py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl ${
                            !isFormValid || loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                        }`}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn('rigth',"tween",0.2,1)}
                className="xl:flex-1"
                >
                <EarthCanvas></EarthCanvas>
            </motion.div>
        </div>
    )
}
  
export default SectionWrapper(Contact, "contact");