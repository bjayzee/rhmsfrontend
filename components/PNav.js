
import Image from "next/image"

const PNav = () => {
    return (
        <div className="text-center flex flex-row items-center justify-between p-3 mb-3">
            <Image
                src="/rhmstechlogo.png"
                alt="logo"
                width={41} height={40}
            />

            <div className="flex items-center gap-2 flex-row">
                <p className="p-0 font-bold">Login/Register</p>
                <Image
                    src="/cart.png"
                    alt=""
                    width={20}
                    height={21}
                />

            </div>

        </div>
    )
}

export default PNav