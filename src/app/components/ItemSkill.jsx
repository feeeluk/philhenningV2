import Image from "next/image"
import { Hover } from "@/app/components/animations/Hover"

export default function ItemSkill({name, image}){
    return(
        <Hover>
            <div className="Item">
                {/* <h5>{name}</h5> */}
                <Image src={`/DevLogos/${image}`} width="70" height="70" alt="logo" />
            </div>
        </Hover>
    )
}