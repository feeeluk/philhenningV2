import Image from "next/image"
import Link from "next/link"

export default function Project({name, type, language, db, projectManagementTool, whiteBoardingTool, description, link, image}){
    return(
        <>

            <div className="ProjectContainer">

                
                <div className="ProjectRow">
                    <div className="Name"><h3>{name}</h3></div>
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
                        <div className="DetailContainer">     
                            <div className="DetailItem">Tools:</div>
                            <div className="DetailInfo">{projectManagementTool}{whiteBoardingTool}</div>
                        </div>

                    </div>

                    <div className="ProjectColumn2">
                        {description}
                    </div>

                    <div className="ProjectColumn3">
                        
                        <Link target="_blank" href={`${link}`}>
                            <Image
                                className="Image"
                                src={`/Projects/${image}`}
                                alt="snapshot of project"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} // optional
                            />
                        </Link>
                    </div>

                </div>
            </div>

        </>
    )
}