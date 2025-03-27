import React from "react";
import TerminalCardLocal from "@/components/local/home/terminal_card";
import HeadingsLocal from "@/components/local/home/headings";

function HomePage() {
    return (
        <div className="flex justify-center items-center h-screen gap-40 ">
            <div className="flex flex-col items-end transform translate-y-16">
                <HeadingsLocal />
            </div>
            <div className="transform translate-y-14">
                <TerminalCardLocal />
            </div>
        </div>
    );
}

export default HomePage;
