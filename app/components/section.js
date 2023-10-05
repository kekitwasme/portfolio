"use client"

import { motion } from "framer-motion"

export default ({ children, heading }) => {
    return (
        <motion.section
            className="flex flex-col justify-center items-center max-w-3xl px-6 md:text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, scale: 0.9 }}
            whileInView={{ scale: 1 }}
        >
            {heading && <h2 className="text-3xl font-medium capitalize mb-8">{heading}</h2>}

            {children}
        </motion.section>
    )
}
