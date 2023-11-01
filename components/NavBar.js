import Image from "next/image"


const NavBar = () => {
  return (
    <div className="w-full bg-rh-blue flex flex-row items-cente h-55 py-5">

        <Image 
            src="/hamburger.png"
            alt="hamburger"
            width={50}
            height={50}
        />

        <div className="flex flex-between pl-3">
            <div className="bg-[white] h-10 w-80 mr-4 text-black flex"
              placeholder="search"
              defaultValue="search"
            >
              <Image
                src="/search-icon.png"
                width={20} height={5}
              />

            </div>

        </div>
  
   
    </div>
  )
}

module.exports = NavBar;