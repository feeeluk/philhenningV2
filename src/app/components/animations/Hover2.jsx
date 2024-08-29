'use client'

// npm i framer-motion
import { motion } from "framer-motion"

export function Hover2({children}){
    return(
        <motion.div whileHover={{scale: 1.02}}>
                {children}
        </motion.div>
    )
}