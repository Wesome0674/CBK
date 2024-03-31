"use client"

import emailjs from "@emailjs/browser";
import { Typographie } from "@/ui/designsystem/typography/Typographie";
import React, { useState, useRef } from "react";
import { BsChatTextFill } from "react-icons/bs";
import { Button } from "@/ui/designsystem/Button";
import { IoMdClose } from "react-icons/io";
import { Cards } from "../cards/Cards";
import { useTranslations } from "next-intl";

const QuickMessage = () => {

  const t = useTranslations("Message");

  const [show, setShow] = useState(false);
  const [validation, setValidation] = useState("");

  const form = useRef();

  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  console.log(inputs);

  const sendEmail = (e) => {
    e.preventDefault();

    if (inputs.current[0].value.length === 0) {
      setValidation("Please enter a valid name");
      return;
    } else if (inputs.current[1].value.length === 0) {
      setValidation("Please enter a valid email");
      return;
    } else if (inputs.current[2].value.length === 0) {
      setValidation("Please enter a valid message");
      return;
    }

    emailjs
      .sendForm(
        "service_weq4eww",
        "template_uyo64rq",
        form.current,
        "Y-kUBr67FiIff59A0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
    setValidation("Message sent");
  };

  return (
    <>
      {show ? (
        <>
          <div
            onClick={() => setShow(!show)}
            className="fixed top-0 left-0 w-screen h-screen bg-black/20 z-10"
          ></div>
          <div className=" fixed z-30 bottom-6 right-6 w-[20em] md:w-[25em]">
            <Cards variant="medium" className="flex flex-col shadow-md">
              <div>
                <Typographie
                  variant="h3"
                  className="font-semi-bold flex items-center justify-between"
                >
                  {t("title")}
                  <IoMdClose
                    className="cursor-pointer"
                    onClick={() => setShow(!show)}
                  />
                </Typographie>
                <Typographie variant="body-sm" theme="tercery">
                  {t("subtitle")}
                </Typographie>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col space-y-3 my-6 ">
                  <div className="flex flex-col space-y-1">
                    <Typographie variant="body-sm" theme="tercery">
                      {t("name")}
                    </Typographie>
                    <input
                      ref={addInputs}
                      name="user_name"
                      className=" bg-tercery/10 text-sm font-normal p-3 rounded-[4px]"
                      type="text"
                      placeholder={t("placeholderName")}
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Typographie variant="body-sm" theme="tercery">
                      Email *
                    </Typographie>
                    <input
                      ref={addInputs}
                      name="user_email"
                      className=" bg-tercery/10 text-sm font-normal p-3 rounded-[4px]"
                      type="email"
                      placeholder="mail@mail.com"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Typographie variant="body-sm" theme="tercery">
                      Message
                    </Typographie>
                    <textarea
                      ref={addInputs}
                      name="message"
                      rows={5}
                      className=" bg-tercery/10 text-sm font-normal p-3 rounded-[4px]"
                      placeholder={t("message")}
                    />
                  </div>
                  <p className="text-red">{validation}</p>
                </div>
               
                <Button className="w-full">
                    <input className="w-full" type="submit" value={t("button")} />
                </Button>
              </form>
            </Cards>
          </div>
        </>
      ) : (
        <div
          onClick={() => setShow(!show)}
          className="fixed z-20 bottom-6 right-6 text-white border-2 border-secondary border-dashed rounded-full p-0.5"
        >
          <Button variant="icon" size="large" icon={{ icon: BsChatTextFill }} />
        </div>
      )}
    </>
  );
};

export default QuickMessage;
