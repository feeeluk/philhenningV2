import Image from "next/image"

export default function ItemDb({name, image}){
    return(
        <div className="Item">
            {/* <h5>{name}</h5> */}
            <Image src={`/DbLogos/${image}`} width="70" height="70" alt="logo" />
        </div>
    )
}