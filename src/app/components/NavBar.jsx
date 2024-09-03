import Link from "next/link"
import Image from "next/image"

export default function NavBar(){
    return(

        <div className="NavBar">

            <div className="Logo">
                <Image src="/main_logo.png" alt="main logo" width="642" height="135" />
            </div>

            <nav class="Link">
                <Link href="/">Home</Link>
                &nbsp;|&nbsp;

                <Link href="/projects">Projects</Link>
                &nbsp;|&nbsp;

                <a href="/CV.pdf" target="blank">CV</a>
                &nbsp;|&nbsp;
                
                <Link href="https://www.linkedin.com/in/philiphenning/" target="_blank">LinkedIn</Link>
                &nbsp;|&nbsp;  

                <Link href="https://github.com/feeeluk" target="_blank">Git Hub</Link>
                         
            </nav>
            
        </div>
    )
}