import Link from "next/link"

const Navigation = () => {
return(
    <nav>
        <ul>
            <li><Link href="/"><customA>Hjem</customA></Link></li>
            <li><Link href="/quiz"><customA>Quiz</customA></Link></li>
        </ul>
    </nav>
)
}
export default Navigation