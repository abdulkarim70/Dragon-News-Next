import Image from "next/image";
import Link from "next/link";
import Avatar from "@/assets/user.png";
import Navlink from "./Navlink";
const Navbar = () => {
    return (
        <div className="flex justify-between container mx-auto items-center py-4 mt-4">
            <div></div>
            <ul className="flex justify-between items-center gap-3 text-gray-700">
                <li><Navlink href={'/'} className={`text-red-500`}>Home</Navlink ></li>
                <li><Navlink href={'/about'}>About</Navlink></li>
                <li><Navlink href={'/career'}>Career</Navlink></li>
            
            </ul>
            <div className="flex gap-2 ">
                <Image src={Avatar} alt="user-image" width={60} height={60}></Image>
               <button className="btn btn-primary"> <Link href={'/login'}>Login</Link> </button>
            </div>
        </div>
    );
};

export default Navbar;