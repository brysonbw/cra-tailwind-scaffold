import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const PageNotFound = (props: Props) => {

  return (
    <div className="pageNotFound text-white">
    <div className="w-9/12 m-auto py-16 my-44 flex items-center justify-center">
        <div className="max-w-md">
           <div className="text-5xl font-dark font-bold">404</div>
         <p
           className="text-2xl my-6 md:text-3xl font-light leading-normal"
         >Page Not Found</p>
       <p className="mt-3 mb-8"></p>
       
          
       <Link to='/' className="no-underline hover:underline">back to home</Link>
 
 </div>
</div>
</div>
  )
}

export default PageNotFound