import React, { useRef, useState } from "react";
import { Button } from "@mantine/core";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Connect = (props) => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const form = useRef();

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      toast.error("Give proper mail dude 😑", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      emailjs
        .sendForm(
          "service_a7dqlun",
          "template_685q1ck",
          form.current,
          "p8h13ZVT5vtCjbN8V"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Cool you have notified me 😎", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          },
          (error) => {
            console.log(error.text);
            toast.error("There's an error, You couldn't notify me 🥲", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        );
    }
  };

  return (
    <div className="w-full py-16 text-black bg-white px-4" id="connect">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {!props.japan ? "Want to connect?" : "つながりたいですか？"}
          </h1>
          <p>
            {!props.japan
              ? "Notify me your mail. I'll get back to you in a day!!"
              : "メールで知らせてください。1日以内に連絡します！！"}
          </p>
        </div>
        <div className="my-4">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col sm:flex-row items-center justify-between w-full"
          >
            <input
              className="p-3 flex w-full rounded-md bg-black text-[#00df9a] placeholder:text-[#00df9a]"
              type="email"
              name="user_email"
              placeholder={
                !props.japan ? "Enter mail" : "メールアドレスを入力して"
              }
              onChange={(e) => {
                setIsValidEmail(validateEmail(e.target.value));
              }}
            />

            <Button
              variant="light"
              color="green"
              type="submit"
              className="bg-[#00df9a] text-black border-2 border-black uppercase font-bold rounded-md ml-4 w-64 h-12  my-6 px-6"
            >
              {!props.japan ? "Notify me" : "私に通知する"}
            </Button>
          </form>

          <div className="flex w-full items-center justify-center md:justify-normal md:items-start">
            <p>
              {!props.japan
                ? "Or text me in linkedIn."
                : "またはLinkedInでメッセージを送ってください。"}{" "}
              <a
                href="https://www.linkedin.com/in/gautam-p-5b43581b6/"
                className="text-[#00df9a] font-bold text-lg"
              >
                {!props.japan ? "Click me" : "クリックしてください"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
