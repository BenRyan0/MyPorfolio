import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import React, { useRef, useState } from "react";
import { RiMessage3Fill } from "react-icons/ri";
import emailjs from '@emailjs/browser';

import toast, { Toaster } from "react-hot-toast";

export function ContactMeForm({ className, ...props }) {
  // const [result, setResult] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          toast.success("Message Submitted Successfully");
          setIsLoading(false)
           form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);

          toast.error("Something went wrong, Please Try Again");
          setIsLoading(false)
        },
      );
  };


  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", import.meta.env.VITE_EMAIL_API);

  //   console.log(formData);

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     // setResult("Form Submitted Successfully");
  //     toast.success("Message Submitted Successfully");
  //     setIsLoading(false);
  //     event.target.reset();
  //   } else {
  //     toast.error("Something went wrong, Please Try Again");

  //     console.log("Error", data);
  //     setIsLoading(false);
  //     // setResult(data.message);
  //   }
  // };

  return (
    <div className={cn("flex flex-col gap-6  ", className)} {...props}>
      <Card className={"border-0 bg-transparent "}>
        <CardHeader>
          {/* <CardTitle>Login to your account</CardTitle> */}
          <CardDescription>
            {/* Enter your email below to login to your account */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row justify-between items-end gap-3">
                <div className="grid gap-3 md:w-5/12 w-full">
                  <Label htmlFor="email">Name</Label>
                  <Input
                    id="name"
                    name="user_name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className={"bg-neutral-100/2 text-xs py-2"}
                  />
                </div>
                <div className="grid gap-3 md:w-7/12 w-full">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className={"bg-neutral-100/2 text-xs"}
                  />
                </div>
              </div>

              <div className="">
                <div className="grid gap-3 w-full">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here."
                    className={"bg-neutral-100/2 text-xs"}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex gap-1 justify-center items-center">
                      <div className="rotate-shake text-lg">
                        <RiMessage3Fill />
                      </div>
                      <div className="flex items-center gap-1">
                        Sending<span className="dots-animate">.</span>
                        <span className="dots-animate">.</span>
                        <span className="dots-animate">.</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-1 justify-center items-center">
                      <Send />
                      Send Message
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
