

function Footer(){
    return(
        <footer className="w-full pt-3 md:pt-5 pb-3 md:pb-5  bg-white text-center">       
        <div className="w-full max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between sm:flex-wrap gap-1">
           
           {/* Logo Section */}
           <div className="grid grid-cols-4 gap-2 md:gap-5 pt-5">
           <div className="px-5 md:px-10">
                <h2 className="text-3xl md:text-4xl text-left font-semibold text-black"> Furniro.</h2>
                <p className="text-left text-gray-400 text-xs md:text-base pt-5 md:pt-10">400 University Drive suite 200 Coral Gables,<br/> Fl 33135 USA</p>
            </div>

          {/* Footer Links Section */}
            <div className="flex justify-center gap-6 mt-6 sm:mt-0">
            <ul className="flex-1 flex-col sm:flex-row text-left sm:gap-6 gap-3 items-center mb-6 text-sm font-medium text-gray-500 dark:text-gray-400 pt-7 md:pt-0">
                <li>
                    <a href="#" className="leading-5 md:leading-10 text-md md:text-lg font-semibold">Links</a>
                </li>
                <li>
                    <a href="/" className="hover:underline leading-5 md:leading-10 text-sm md:text-md md:font-semibold text-black">Home</a>
                </li>
                <li>
                    <a href="/shop" className="hover:underline leading-5 md:leading-10 text-sm md:text-md md:font-semibold text-black">Shop</a>
                </li>
                <li>
                    <a href="/blog" className="hover:underline leading-5 md:leading-10 text-sm md:text-md md:font-semibold text-black">Blog</a>
                </li>
                <li>
                    <a href="contact" className="hover:underline leading-5 md:leading-10 text-sm md:text-md md:font-semibold text-black">Contact</a>
                </li>
            </ul>
            </div>

            <div className="flex justify-center gap-6 mt-6 sm:mt-0">
            <ul className="flex-1 flex-col sm:flex-row text-left sm:gap-6 gap-3 items-center mb-6 text-sm font-medium text-gray-500 dark:text-gray-400  pt-7 md:pt-0">
                <li>
                    <a href="#" className="leading-5 md:leading-10 text-md md:text-lg font-semibold">Help</a>
                </li>
                <li>
                    <a href="#" className="hover:underline leading-5 md:leading-10 text-sm md:text-md md:font-semibold text-black">Payment Options</a>
                </li>
                <li>
                    <a href="#" className="hover:underline leading-5 md:leading-10 text-sm md:text-md fmd:font-semibold text-black">Returns</a>
                </li>
                <li>
                    <a href="#" className="hover:underline leading-5 md:leading-10 text-sm md:text-md md:font-semibold text-black">Privacy Policies</a>
                </li>
            </ul>
            </div>


            <div className="flex justify-center gap-6 mt-6 sm:mt-0">
            <ul className="flex-1 flex-col sm:flex-row text-left sm:gap-6 gap-3 items-center mb-6 text-sm font-medium text-gray-500 dark:text-gray-400  pt-7 md:pt-0">
                <li>
                    <a href="#" className="leading-5 md:leading-10 text-md md:text-lg font-semibold">Newsletter</a>
                </li>
                <li>
                    <a href="#" className="leading-5 md:leading-10 text-xs md:text-md font-normal text-gray-500 "><u>Enter Your Email Address</u></a>
                </li>
            </ul>
            </div>
        </div>

        
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center text-right dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Furniro.™</a>. All Rights Reserved.</span>
    </div>
       
    </div>
        </footer>


    )
}
export default Footer;