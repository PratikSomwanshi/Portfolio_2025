"use client";
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/magicui/terminal";
import React from "react";

function TerminalCardLocal() {
    return (
        <Terminal className="h-[18rem]">
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
    );
}

export default TerminalCardLocal;
