"use client"

import Image from "next/image"
import { Hover } from "@/app/components/animations/Hover"

export default function ItemSkill({name, image}){

    function handleMouseOver(id){
        document.getElementById(`${name}`).style.visibility = "visible"
    }

    function handleMouseOut(id){
        document.getElementById(`${name}`).style.visibility = "hidden"
    }

    return(
        <Hover>

        {console.log("name: " + name)}
            <div className="Item" onMouseOver={() => {handleMouseOver({name})}} onMouseOut={() => {handleMouseOut({name})}} >
                <Image src={`/DevLogos/${image}`} width="70" height="70" alt="logo" />
                <div id={name} className="ItemAlt">{name}</div>
            </div>
         </Hover>
    )
}