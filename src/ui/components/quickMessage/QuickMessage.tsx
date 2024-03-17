"use client";

import { Typographie } from "@/ui/designsystem/typography/Typographie"
import React, { useState } from 'react'
import { BsChatTextFill } from "react-icons/bs";
import { Button } from '@/ui/designsystem/Button';
import { IoMdClose } from "react-icons/io";
import { Cards } from '../cards/Cards';

const QuickMessage = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            {show ?
            <>
            <div onClick={() => setShow(!show)} className="fixed top-0 left-0 w-screen h-screen bg-black/20 z-10"></div>
                <div className=" fixed z-30 bottom-6 right-6 sm:w-[20em] md:w-[25em]">
                    <Cards variant="medium" className="flex flex-col shadow-md">
                        <div >
                            <Typographie variant="h3" className="font-semi-bold flex items-center justify-between">
                                Message Me
                                <IoMdClose className="cursor-pointer" onClick={() => setShow(!show)} />
                            </Typographie>
                            <Typographie variant="body-sm" theme="tercery">
                                you can reach me anytime
                            </Typographie>
                        </div>
                        <div className="flex flex-col space-y-3 my-6 ">
                            <div className="flex flex-col space-y-1">
                                <Typographie variant="body-sm" theme="tercery" >
                                    Name
                                </Typographie>
                                <input className=" bg-tercery/10 text-sm font-normal p-3 rounded-[4px]" type="text" placeholder="Enter you're name" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <Typographie variant="body-sm" theme="tercery" >
                                    Email *
                                </Typographie>
                                <input className=" bg-tercery/10 text-sm font-normal p-3 rounded-[4px]" type="text" placeholder="mail@mail.com" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <Typographie variant="body-sm" theme="tercery" >
                                    Message
                                </Typographie>
                                <textarea rows={5} className=" bg-tercery/10 text-sm font-normal p-3 rounded-[4px]" placeholder="You’re message goes here" />
                            </div>
                        </div>
                        <Button>Send Message</Button>
                    </Cards>

                </div>
                </>
                :
                <div onClick={() => setShow(!show)} className="fixed z-20 bottom-6 right-6 text-white border-2 border-secondary border-dashed rounded-full p-0.5" >
                    <Button variant="icon" size="large" icon={{ icon: BsChatTextFill }} />
                </div>
            }
        </>
    )
}

export default QuickMessage