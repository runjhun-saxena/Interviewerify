"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "./ui/form"

import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};



const Authform = ({type} : {type:FormType}) => {
    const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
         password:"",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try{
      if(type === 'sign-up'){
        console.log('sign up', values)
      } else {
         console.log('sign in', values)
      }

    }
    catch(error){
      console.log(error);
      toast.error(`There is an error : ${error}`)
    }

  }

 const isSignIn = type === 'sign-in';
 

  return (
    <div className="card-border lg:min-w-[560px] ">
      <div className="flex flex-col gap-6 card  py-14 px-10">
        <div className=" flex flex-row gap-2  justify-centre">
          <Image 
          src={"/logo.svg"}
           alt="Logo Interviewrify"
            height={32} 
            width={38} />
          <h2>Interviewrify</h2>
        
        </div>
          <h3>Your AI Practice Buddy</h3>

      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
          {!isSignIn && <p>Full Name</p>}
          <p>Email</p>
          <p>Password</p>

          <Button className="btn" type="submit">{isSignIn ? 'Sign in' : 'Create Account'}</Button>
        </form>
      </Form>
      <p className="text-center"> { isSignIn ? 'No account yet ?' : "Having an Account already?"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Sign In" : "Sign Up"}
          </Link>
      </p>
      </div>
    </div>
  )
}

export default Authform