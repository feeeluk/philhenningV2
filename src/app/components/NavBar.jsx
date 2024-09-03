import Link from "next/link"
import Image from "next/image"

export default function NavBar(){
    return(

        <div className="NavBar">

            <div className="Logo">
                <Image src="/main_logo.png" alt="main logo" width="643" height="127" />
            </div>

            <nav class="Link">
                <Link href="/">Home</Link>
                &nbsp;|&nbsp;

                <Link href="/projects">Projects</Link>
                &nbsp;|&nbsp;

                <a href="/CV.pdf" target="blank">CV</a>
                         
            </nav>
            
        </div>
    )
}