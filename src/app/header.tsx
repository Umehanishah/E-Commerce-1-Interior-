import Link from "next/link"

function Header(){
    return(
        <header className="flex justify-between mt-3 md:mt-5 mb-3 md:mb-5 mx-10flex flex-col md:flex-row item-center w-full pt-10 pb-10 bg-white px-5 md:px-10">
          
        {/*Logo Section*/}
            <div className="mb-5 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-semibold text-black"> Furniro</h2>
            </div>
         {/*nav Section*/}
            <div>
                <nav className="w-full md:w-auto">
                    <ul className="flex flex-col md:flex-row gap-y-2 md:gap-x-1 mt-2 text-center font-semibold">
                        <li>
                            <Link href="/" className="block hover:bg-yellow-600 hover:text-white py-2 px-5 rounded-md"> Home </Link>
                        </li>
                        <li>
                        <Link href="/shop" className="block hover:bg-yellow-600 hover:text-white py-2 px-5 rounded-md"> Shop </Link>
                        </li>
                        <li>
                        <Link href="/blog" className="block hover:bg-yellow-600 hover:text-white py-2 px-5 rounded-md"> Blog </Link>
                        </li>
                        <li>
                        <Link href="/contact" className="block hover:bg-yellow-600 hover:text-white py-2 px-5 rounded-md"> Contact </Link>
                        </li>
                    </ul>
                </nav>
            </div>
         {/*icon Section*/}
        <div>
            
        </div>

        </header>
    )
}
export default Header