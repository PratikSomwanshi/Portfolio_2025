"use client";
import { HyperText } from "@/components/magicui/hyper-text";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import React from "react";

function HeadingsLocal() {
    return (
        <>
            <HyperText
                animateOnHover={false}
                className="text-4xl font-medium absolute ">
                Hellooo, I am
            </HyperText>
            <LineShadowText
                className=" text-[10rem] m-0 p-0"
                shadowColor="white">
                Pratik
            </LineShadowText>
        </>
    );
}

export default HeadingsLocal;
