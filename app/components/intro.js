"use client"

//image
import Image from "next/image"
import { portrait, github, linkedin, resume } from "@src/images"

import { motion } from "framer-motion"

import Section from "./section"

export default () => {
    return (
        <Section>
            {/* portrait */}
            <motion.div
                className="flex flex-col justify-center mb-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
            >
                <Image src={portrait} alt="portrait of Jay" width={28} className="self-center h-28 w-28 object-cover rounded-full border-4 border-white" />
            </motion.div>

            <motion.div className="flex justify-center items-center gap-6 mb-10">
                {/* download cv */}
                <motion.a
                    href="/cv.pdf"
                    target="_blank"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.2 }}
                    className="py-1 px-3 w-fit rounded-full flex justify-center items-center gap-1 bg-white backdrop-blur-lg shadow-sm"
                >
                    Download CV
                    <Image src={resume} alt="click to download my CV" className="h-7 w-7 rounded-full" />
                </motion.a>

                {/* github */}
                <motion.a
                    href="https://github.com/kekitwasme"
                    target="_blank"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <Image src={github} alt="github icon" className="h-8 w-8 rounded-full" />
                </motion.a>

                {/* linkedin */}
                <motion.a
                    href="https://www.linkedin.com/in/jay-xie-11a732230/"
                    target="_blank"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <Image src={linkedin} alt="linkedin icon" className="h-8 w-8 rounded-full" />
                </motion.a>
            </motion.div>

            <motion.h1 className="w-fit max-w-xl text-center px-4 text-lg sm:text-xl lg:text-2xl" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                👋 hi, I'm a <span className="font-bold">full-stack</span> developer with 1 year of commercial experience. I love building
                <span className="font-bold"> functional web applications</span> with modern technologies.
            </motion.h1>
        </Section>
    )
}
