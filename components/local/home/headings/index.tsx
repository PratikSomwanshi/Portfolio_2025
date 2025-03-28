"use client";
import { HyperText } from "@/components/magicui/hyper-text";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import React from "react";

function HeadingsLocal() {
    return (
        <>
            <HyperText
                animateOnHover={false}
                className="hidden 350:block
                 text:2xl 350:text-3xl 450:text-4xl font-medium absolute">
                Hellooo, I am
            </HyperText>
            <HyperText
                animateOnHover={false}
                className="absolute text:2xl font-semibold right-0 bottom-26 350:hidden">
                Hi, I am
            </HyperText>
            <LineShadowText
                className="text-[6rem] 350:text-[8rem] 450:text-[10rem] m-0 p-0"
                shadowColor="white">
                Pratik
            </LineShadowText>
        </>
    );
}

export default HeadingsLocal;
