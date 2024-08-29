"use client"

import Image from "next/image"
import { Hover } from "@/app/components/animations/Hover"

export default function ItemTool({name, image, description}){
    
    function handleMouseOver(id){
        document.getElementById(`${name}`).style.visibility = "visible"
    }

    function handleMouseOut(id){
        document.getElementById(`${name}`).style.visibility = "hidden"
    }

    return(
        <Hover>

            <div className="Item" onMouseOver={() => {handleMouseOver({name})}} onMouseOut={() => {handleMouseOut({name})}}>
                
                <Image src={`/ToolLogos/${image}`} width="70" height="70" alt="logo" />

                <div id={name} className="ItemAlt">
                    <h5>{name}</h5>
                    {description}                  
                </div>

            </div>
            
        </Hover>
    )
}