"use client";

import React from "react";
// import React, { useState } from "react";
import { Minus, Plus, Mail } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { CONTACT } from "@/constants";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";

import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaFacebookMessenger,
} from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactMeForm } from "./ContactMeForm";


export function ContactMe({ open, setOpen }) {
  return (
    <Drawer open={open} onOpenChange={setOpen} className={""}>
      
      <DrawerContent
        className={
          "container mx-auto w-11/12 md:w-8/12 lg:w-5/12 bg-[#121212] "
        }
      >

       
        <div className="mx-auto w-11/12 pb-10">
          <DrawerHeader>
            <DrawerTitle>
              <div className="text-neutral-600  flex justify-center items-center  ">
                <ul className="flex justify-end items-center gap-2 text-3xl">
                  <li className="transition-transform duration-300 hover:scale-130 hover:rotate-10">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Linkedin"
                      href="https://www.linkedin.com/in/ben-ryan-rinconada"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="transition-transform duration-300 hover:scale-130 hover:-rotate-9">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="GitHub"
                      href="https://github.com/BenRyan0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </li>

                  <li className="transition-transform duration-300 hover:scale-130 hover:rotate-9">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Facebook"
                      href="https://web.facebook.com/nebnyar69"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookSquare />
                    </a>
                  </li>
                  {/* <li className="transition-transform duration-300 hover:scale-130 hover:-rotate-9">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="X"
                      href="https://www.linkedin.com/in/ben-ryan-rinconada-323b25369"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareXTwitter />
                    </a>
                  </li> */}
                </ul>
                <Tooltip id="my-tooltip" />
              </div>
            </DrawerTitle>

            {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
          </DrawerHeader>
          <div className="">
            <Tabs
              defaultValue="account"
              className="w-full transition-all duration-500 "
            >
              <TabsList className={"w-full gap-2 "}>
                <TabsTrigger value="account">Quick Connect</TabsTrigger>
                <TabsTrigger value="password">Fill a form</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col justify-center items-start md:items-center"
                >
                  <div className="w-full  text-zinc-100 flex flex-col gap-2">
                    <div className="mt-3 grid md:grid-cols-2 gap-2">
                      <a
                        href="mailto:benryanrinconada5@gmail.com"
                        className="border-2 rounded-md border-neutral-800 h-[150px]"
                      >
                        <div className="p-4 flex gap-2 border-b-2 border-neutral-800 bg-gradient-to-r to-transparent from-purple-900/20">
                          <Mail color="#C27AFF" />
                          <h2 className="font-bold">Email</h2>
                        </div>
                        <div className="p-3 text-sm">
                          <h2 className="font-semibold">
                            benryanrinconada5@gmail.com
                          </h2>
                          <p className="mt-3 text-xs text-zinc-400">
                            Send me an email directly
                          </p>
                        </div>
                      </a>

                      <a
                        href="https://web.facebook.com/nebnyar69"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 rounded-md border-neutral-800 h-[150px]"
                      >
                        <div className="p-4 flex gap-2 border-b-2 border-neutral-800 gap-x-3  bg-gradient-to-r to-transparent from-blue-900/20 ">
                          <RiMessengerLine size={27} color="#4E9CFA" />
                          {/* <Mail color="#4E9CFA" /> */}
                          <h2 className="font-bold">Messenger</h2>
                        </div>
                        <div className="p-3 text-sm text-start ">
                          <h2 className="font-semibold ">Ben Ryan Rinconada</h2>
                          <p className="mt-3 text-xs text-zinc-400">
                            Chat with me directly
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="w-full mt-1 rounded-md border-neutral-800 border-2 py-3 text-xs text-center font-base text-green-200 bg-gradient-to-r to-transparent from-green-900/30 flex justify-center items-center">
                      <div className="relative inline-flex">
                        <div className="rounded-full bg-green-400 h-[8px] w-[8px] inline-block mr-2"></div>
                        <div className="absolute animate-ping rounded-full bg-green-400 h-[8px] w-[8px] mr-2"></div>
                      </div>
                      <h2>Currently Available for new opportunities</h2>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
              <TabsContent value="password">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full"
                >
                  <ContactMeForm className={"border-0 "} />
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
 
        </div>
      </DrawerContent>
    </Drawer>
  );
}
