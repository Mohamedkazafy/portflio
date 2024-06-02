import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"
import {DiRedis} from "react-icons/di"
import {FaNodeJs} from "react-icons/fa"
import { motion } from "framer-motion"
const iconVariant = (duration) => ({
    initial: {y:-10},
    animate:{
        y : [10,-10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    }
})
const Tech = () => {
  return (
    <div className=' border-b border-neutral-900 pb-24'>
        <h2 className=' my-20 text-center text-4xl'>Technologies</h2>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:1,x:-100}}
        transition={{duration:1.5}}
        className=' flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariant(2.5)}
            initial="initial"
            animate="animate"
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className=' text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariant(3)}
            initial="initial"
            animate="animate"
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className=' text-7xl text-white'/>
            </motion.div>
            <motion.div 
            variants={iconVariant(5)}
            initial="initial"
            animate="animate"
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className=' text-7xl text-green-800'/>
            </motion.div>
            <motion.div
            variants={iconVariant(2)}
            initial="initial"
            animate="animate"
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <DiRedis className=' text-7xl text-violet-700'/>
            </motion.div>
            <motion.div 
            variants={iconVariant(6)}
            initial="initial"
            animate="animate"
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className=' text-7xl text-green-400'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Tech