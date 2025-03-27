"use client";
import { AuroraText } from "@/components/magicui/aurora-text";
import { HyperText } from "@/components/magicui/hyper-text";
import { Terminal, TypingAnimation } from "@/components/magicui/terminal";
import React from "react";
import { AnimatedSpan } from "../components/magicui/terminal";

function HomePage() {
    return (
        <div className="flex justify-center items-center h-screen gap-40">
            <div className="flex flex-col items-end">
                <HyperText
                    animateOnHover={false}
                    className="text-4xl font-medium">
                    Hellooo, I am
                </HyperText>
                <AuroraText className="text-[10rem] font-semibold">
                    Pratik
                </AuroraText>
            </div>
            <div>
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
                        <span>
                            ✔ Proficient in: Java, JavaScript, TypeScript
                        </span>
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
            </div>
        </div>
    );
}

export default HomePage;
