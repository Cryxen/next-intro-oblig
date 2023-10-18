import Link from "next/link"

const Navigation = () => {
return(
    <nav className="Navigation">
        <ul>
            <li><Link href="/">Hjem</Link></li>
            <li><Link href="/quiz">Quiz</Link></li>
            <li><Link href="/makequestion">Lag spørsmål</Link></li>
        </ul>
    </nav>
)
}
export default Navigation