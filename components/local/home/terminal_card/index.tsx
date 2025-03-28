"use client";
import { MagicCard } from "@/components/magicui/magic-card";
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/magicui/terminal";
import { Card } from "@/components/ui/card";
import React from "react";

function TerminalCardLocal() {
    return (
        <MagicCard className="p-1 rounded-xl" gradientColor={"#262626"}>
            <Terminal className="h-[18rem] w-[16rem] 300:w-[18rem] 350:w-[21rem] 400:w-[24rem]">
                <TypingAnimation className="text-muted-foreground">
                    &gt; whoami
                </TypingAnimation>

                <AnimatedSpan delay={1500} className="text-green-500">
                    <span>✔ I am a Computer Engineering graduate</span>
                </AnimatedSpan>

                <AnimatedSpan delay={2000} className="text-green-500">
                    <span>✔ CGPA: 8.19</span>
                </AnimatedSpan>

                <AnimatedSpan delay={2500} className="text-green-500">
                    <span>✔ From: Dr. D Y Patil SOET, Pune</span>
                </AnimatedSpan>

                <AnimatedSpan delay={3000} className="text-green-500">
                    <span>✔ Proficient in: Java, JavaScript, TypeScript</span>
                </AnimatedSpan>

                <AnimatedSpan delay={3500} className="text-green-500">
                    <span>✔ Frontend: React.js, Next.js, Redux</span>
                </AnimatedSpan>

                <AnimatedSpan delay={4000} className="text-green-500">
                    <span>✔ Backend: Spring Boot, Node.js, Express.js</span>
                </AnimatedSpan>

                <AnimatedSpan delay={4500} className="text-green-500">
                    <span>✔ Database: MySQL, MongoDB</span>
                </AnimatedSpan>

                <AnimatedSpan delay={5000} className="text-green-500">
                    <span>✔ Deployment: Docker, AWS</span>
                </AnimatedSpan>
            </Terminal>
        </MagicCard>
    );
}

export default TerminalCardLocal;
