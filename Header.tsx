import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa";

export  default function Header(){
    return(
        <header className="header">
            <h1 className="logo">Watch World</h1>
            <nav>
             <Link href="/">Home</Link>
             <Link href="about">About</Link>
             <Link href="watches">Watches</Link>
             <Link href="contact">Contact</Link>
             <FaShoppingCart size={"20px"} />
            </nav>
            </header>
    )
}