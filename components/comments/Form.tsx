import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    username:string,
    email:string,
    comment:string,
    exampleRequired:string,
  };

interface propId{
    postId:number
}

const Form:React.FC<propId> = ({postId}) => {

 const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  
  const onSubmit: SubmitHandler<Inputs> =(data) =>{
     
    const dataArr={
        ...data,
        postId:postId,
    }

     fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(dataArr),
        headers: {
            "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        .catch(err => { 
            console.log(err)
        })
      console.log(data);
  };


  return (
    <form className='max-w-5xl mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
            <label htmlFor="name" className="block mb-2 comment-sm font-medium comment-gray-900 dark:text-gray-300">Your name</label>
            <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required 
             {...register("username")}
            />
        </div>
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" 
            {...register("email")}
            />
        </div>
        <div className="flex items-start mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."
            {...register("comment")}
            ></textarea>
        </div>
        {errors.username && <span>This field is required</span>}
        {errors.email && <span>This field is required</span>}
        {errors.comment && <span>This field is required</span>}
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
  )
}

export default Form