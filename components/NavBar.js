import Image from "next/image"


const NavBar = () => {
  return (
    <div className=" bg-base-color flex flex-row items-center justify-between h-55 py-5">

    <Image 
        src="/hamburger.png"
        alt="hamburger"
        width={50}
        height={50}
    />
  <div className="bg-white h-10 w-80 mr-4 text-black flex"
    placeholder="search"
    defaultValue="search"
  >
    <Image 
        src="/search-icon.png"
        width={20} height={5}
    />

  </div>
   
    </div>
  )
}

export default NavBar