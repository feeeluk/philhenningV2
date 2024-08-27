import Image from "next/image"

export default function Project({name, type, language, db, description, image}){
    return(
        <>

            <div className="ProjectContainer">

                
                <div className="ProjectRow">
                    <div className="Name">{name}</div>
                </div>

                <div className="ProjectRow">

                    <div className="ProjectColumn1">
                        <div className="DetailContainer">   
                            <div className="DetailItem">Type: </div>
                            <div className="DetailInfo">{type}</div>
                        </div>
                        <div className="DetailContainer"> 
                            <div className="DetailItem">Language: </div>
                            <div className="DetailInfo">{language}</div>
                        </div>
                        <div className="DetailContainer">     
                            <div className="DetailItem">Db: </div>
                            <div className="DetailInfo">{db}</div>
                        </div> 


  

                    </div>

                    <div className="ProjectColumn2">
                        {description}
                    </div>

                    <div className="ProjectColumn3">
                        <Image
                            src={`/Projects/${image}`}
                            alt="snapshot of project"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }} // optional
                        />
                    </div>

                </div>
            </div>

        </>
    )
}