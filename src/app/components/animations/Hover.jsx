'use client'

// npm i framer-motion
import { motion } from "framer-motion"

export function Hover({children}){
    return(
        <motion.div whileHover={{scale: 1.15}}>
                {children}
        </motion.div>
    )
}