import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className='mb-20 flex py-6 justify-between items-center'>
        <div className='flex flex-shrink-0 items-start'>
            <img className="mx-2 w-10" src={logo} alt='logo'/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaGithub/>
            <FaTwitterSquare/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar