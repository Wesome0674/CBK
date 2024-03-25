'use client'

import React, { useEffect, useState } from 'react';
import { Typographie } from "@/ui/designsystem/typography/Typographie";
import Typewriter from 'typewriter-effect';

const Loader = () => {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.addEventListener("load", function () {
      setIsLoading(true)
    })
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 8000)

  }, [])

  return (
    <>
      {isLoading ?
        <div className="fixed top-0 left-0 bg-black z-50 w-screen h-full flex justify-center items-center">
          <div className='flex flex-col items-center'>
            <Typographie className="text-valorant" variant="display" theme="tercery">
              Code By Killian
            </Typographie>
            <Typographie variant='h3'>
              <Typewriter
                options={{
                  strings: ['Front-end developper', 'Designer', "passionate student"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typographie>
          </div>
        </div> : ""}
    </>
  );
};

export default Loader;