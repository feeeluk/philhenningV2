import Link from "next/link"

export default function Footer(){
    return(
        <div className="Footer">
            
            <nav class="Link">

                <Link href="https://stackoverflow.com/users/23801067/phil" target="_blank">Stack Overflow</Link>
                &nbsp;|&nbsp;

                <Link href="https://miro.com/app/board/uXjVKmPtAGU=/?share_link_id=986521896410" target="_blank">Whiteboard</Link>
                &nbsp;|&nbsp;

                <Link href="https://1drv.ms/o/s!Ag9ZukAL9sZOog6eqf_5CXVrdJhz?e=QhPtT8" target="_blank">Notes</Link>
                         
            </nav>

        </div>
    )
}