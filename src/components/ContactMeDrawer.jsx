"use client";

import React from "react";
// import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

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

import { FaLinkedin, FaGithub, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



export function ContactMe({ open, setOpen }) {


  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm pb-10">
          <DrawerHeader>
            {/* <DrawerTitle>Move Goal<
            /DrawerTitle> */}
            <div className="text-slate-600  flex justify-center items-center ">
              <ul className="flex justify-end items-center gap-2 text-2xl">
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
                    href="https://www.linkedin.com/in/ben-ryan-rinconada-323b25369"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li className="transition-transform duration-300 hover:scale-130 hover:-rotate-9">
                  <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="X"
                    href="https://www.linkedin.com/in/ben-ryan-rinconada-323b25369"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareXTwitter />
                  </a>
                </li>
              </ul>
              <Tooltip id="my-tooltip" />
            </div>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here
                <div className="w-full bg-red-500 h-[300px]">asdf</div>
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
          </div>
          {/* <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
