"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Book, Contact, FolderKanban, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

function DockLocal() {
    return (
        <div>
            <TooltipProvider>
                <Dock
                    direction="middle"
                    className="absolute top-10 left-[50%] transform -translate-x-1/2 bg-white">
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="/" aria-label="GitHub" className="">
                                    <Github color="black" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-800 text-white px-3 py-2 rounded-md shadow-md relative">
                                <p>GitHub</p>
                                <div className="absolute z-10 w-3 h-3 bg-gray-800 rotate-45 -bottom-1 left-1/2 -translate-x-1/2" />
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>

                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="/" aria-label="GitHub" className="">
                                    <Linkedin color="black" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-800 text-white px-3 py-2 rounded-md shadow-md relative">
                                <p>LinkedIn</p>
                                <div className="absolute z-10 w-3 h-3 bg-gray-800 rotate-45 -bottom-1 left-1/2 -translate-x-1/2" />
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                    <Separator orientation="vertical" className="h-full" />
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="/" aria-label="GitHub" className="">
                                    <Book color="black" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-800 text-white px-3 py-2 rounded-md shadow-md relative">
                                <p>About</p>
                                <div className="absolute z-10 w-3 h-3 bg-gray-800 rotate-45 -bottom-1 left-1/2 -translate-x-1/2" />
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="/" aria-label="GitHub" className="">
                                    <FolderKanban color="black" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-800 text-white px-3 py-2 rounded-md shadow-md relative">
                                <p>Projects</p>
                                <div className="absolute z-10 w-3 h-3 bg-gray-800 rotate-45 -bottom-1 left-1/2 -translate-x-1/2" />
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="/" aria-label="GitHub" className="">
                                    <Contact color="black" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-800 text-white px-3 py-2 rounded-md shadow-md relative">
                                <p>LinkedIn</p>
                                <div className="absolute z-10 w-3 h-3 bg-gray-800 rotate-45 -bottom-1 left-1/2 -translate-x-1/2" />
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div>
    );
}

const Icons = {
    gitHub: (props: any) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562v-40.823c-14.558 3.188-31.514 1.58-45.043-4.43-19.926-8.579-34.568-28.134-41.508-52.702-8.653-30.62-2.662-63.774 12.422-87.709-23.09-5.694-47.22-12.89-63.658-26.994C4.29 124.838 0 102.426 0 77.333 0 48.383 9.727 27.6 29.417 17.437c4.367-2.255 9.434-4.07 14.937-5.178 14.19-2.897 28.473 2.5 37.532 14.44 9.059 11.94 12.152 28.61 8.571 44.232C117.109 68.44 152.24 55 187.634 55c37.25 0 73.03 14.92 100.074 38.794 9.065-15.25 20.28-32.843 35.11-46.857 8.202-7.885 21.015-7.89 29.917-1.033 8.902 6.856 12.303 19.68 8.791 30.63-2.03 6.436-5.86 12.257-9.823 17.812 15.798 3.147 33.37 5.615 46.635 14.662 13.265 9.048 18.186 25.126 14.99 40.494-3.2 15.375-13.965 26.933-29.37 32.083z"
            />
        </svg>
    ),
    linkedIn: (props: any) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.042-1.854-3.042-1.854 0-2.137 1.45-2.137 2.949v5.662h-3.555V9h3.415v1.561h.048c.477-.901 1.64-1.85 3.377-1.85 3.609 0 4.276 2.374 4.276 5.458v6.283zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.071 0-1.144.926-2.07 2.07-2.07s2.072.926 2.072 2.07c0 1.143-.928 2.071-2.072 2.071zM6.118 20.452H2.446v-11.45h3.672v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.226.792 24 1.771 24h20.451c.981 0 1.777-.774 1.777-1.728V1.729C24 .774 23.206 0 22.225 0z" />
        </svg>
    ),
    about: (props: any) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3a1.5 1.5 0 11-1.5 1.5A1.5 1.5 0 0112 5zm0 14a7 7 0 01-5.9-3.05c.05-2 3.9-3.1 5.9-3.1s5.85 1.1 5.9 3.1A7 7 0 0112 19z" />
        </svg>
    ),
    projects: (props: any) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM4 4h16v5H4V4zm0 7h16v9H4v-9zm2 3h3v1H6v-1zm0 2h5v1H6v-1zm8-2h4v1h-4v-1zm0 2h4v1h-4v-1z" />
        </svg>
    ),
    contact: (props: any) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM4 4h16v5H4V4zm0 7h16v9H4v-9zm2 3h3v1H6v-1zm0 2h5v1H6v-1zm8-2h4v1h-4v-1zm0 2h4v1h-4v-1z" />
        </svg>
    ),
};

export default DockLocal;
