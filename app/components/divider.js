"use client"

import { motion } from "framer-motion"

export default () => {
    return <motion.div className="w-[1px] h-20 bg-gray-200 my-14 md:my-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }}></motion.div>
}
