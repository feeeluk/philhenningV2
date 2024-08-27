import Image from "next/image"

export default function ItemAgile({name, image}){
    return(
        <div className="Item">
            {/* <h5>{name}</h5> */}
            <Image src={`/AgileLogos/${image}`} width="70" height="70" alt="logo" />
        </div>
    )
}