import Link from "next/link"
import Image from "next/image"

export default function NavBar(){
    return(

        <div className="NavBar">

            <div className="Logo">
                <Image src="/main-logo.png" alt="main-logo" width="450" height="150" />
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
                &nbsp;|&nbsp;

                <Link href="https://stackoverflow.com/users/23801067/phil" target="_blank">Stack Overflow</Link>
                &nbsp;|&nbsp;

                <Link href="https://miro.com/app/board/uXjVKmPtAGU=/?share_link_id=986521896410" target="_blank">Whiteboard</Link>
                &nbsp;|&nbsp;

                <Link href="https://1drv.ms/o/s!Ag9ZukAL9sZOog6eqf_5CXVrdJhz?e=QhPtT8" target="_blank">Notes</Link>
                         
            </nav>
            
        </div>
    )
}