"use client"
import { links } from "@lib/data"
import { motion } from "framer-motion"

export default ({}) => {
    return (
        <header className="w-full flex flex-col h-32 z-50">
            <motion.nav
                className="fixed self-center top-5 w-fit h-10 flex justify-evenly space-x-2 px-3 text-xs
                    rounded-full border-white border-opacity-40 bg-white shadow-md backdrop-blur-lg bg-opacity-30
                    sm:text-base sm:space-x-10 sm:px-10 sm:h-12"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                {links.map((link, i) => (
                    <a key={i} href={link.hash} className="self-center">
                        {link.name}
                    </a>
                ))}
            </motion.nav>
        </header>
    )
}
