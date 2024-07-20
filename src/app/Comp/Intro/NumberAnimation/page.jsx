'use client'
import React, { useEffect } from 'react'

const page = () => {
    useEffect(() => {
        const countElements = document.querySelectorAll('.count');
    
        countElements.forEach((element) => {
          const startValue = 0;
          const endValue = parseInt(element.innerText, 10);
    
          const updateCounter = (timestamp) => {
            if (!startTimestamp) {
              startTimestamp = timestamp;
            }
    
            const progress = timestamp - startTimestamp;
    
            const percentage = Math.min(progress / duration, 1);
            const currentValue = startValue + percentage * (endValue - startValue);
    
            element.innerText = Math.ceil(currentValue);
    
            if (progress < duration) {
              requestAnimationFrame(updateCounter);
            }
          };
    
          let startTimestamp;
    
          const duration = 4000;
    
          requestAnimationFrame(updateCounter);
        });
      }, []);
  return (
    <div className="  grid  grid-cols-2 grid-rows-2 uppercase text-white py-8 px-7 gap-6 ">
        <div className=" space-x-2">
          <strong className=" text-5xl font-extrabold count ">3</strong>
          <span className=" text-2xl "> year of experience in Mern Stack</span>
        </div>
        <div className=" space-x-2">
          <strong className=" text-5xl count font-extrabold ">50 +</strong>
          <span className=" text-2xl ">Project Completed</span>
        </div>{" "}
        <div className=" space-x-2">
          <strong className=" text-5xl count font-extrabold ">1</strong>
          <span className=" text-2xl ">K Happy Clients</span>
        </div>
        <div className=" space-x-2">
          <strong className=" text-5xl count font-extrabold ">100 </strong>
          <span className=" text-2xl ">% of maintainability</span>{" "}
        </div>{" "}
      </div>
  )
}

export default page
