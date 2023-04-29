import React from 'react'

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit ">
           <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 cursor-pointer border-gray-500 hover:border-red-300 duration-300">About</p>
           </div>
           <p className="text-xl mt-10 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur dolores incidunt nesciunt quam velit quo iusto commodi, esse quas tempore 
            nobis inventore delectus, sunt, sequi repellendus! Voluptate, reiciendis pariatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Inventore ex deleniti, dolorem qui error, libero temporibus animi quasi quisquam, 
            corporis quia doloremque? In, autem? Blanditiis repellendus cumque dignissimos quae doloribus!
           </p>
           <br/>
           <p className="text-xl mt-2 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur dolores incidunt nesciunt quam velit quo iusto commodi, esse quas tempore 
            nobis inventore delectus, sunt, sequi repellendus! Voluptate, reiciendis pariatur?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Deleniti ipsam obcaecati eveniet quas inventore optio tempora consequuntur ratione quia consectetur. 
            Ipsam labore blanditiis at temporibus laudantium voluptate a quibusdam nam.
           </p>
        </div>
        
    </div>
  )
}

export default About