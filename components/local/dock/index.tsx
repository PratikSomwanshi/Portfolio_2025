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
                    className="absolute top-0 910:top-10 left-[50%] transform -translate-x-1/2 bg-white">
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
                                <p>Contact</p>
                                <div className="absolute z-10 w-3 h-3 bg-gray-800 rotate-45 -bottom-1 left-1/2 -translate-x-1/2" />
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div>
    );
}

export default DockLocal;
