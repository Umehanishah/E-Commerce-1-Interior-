import Image from "next/image"
export default function Home() {
  return (
    <main>
       {/*1st Section*/}
       <section>
       <div className="bg-[url('/shop-1.png')] h-80 bg-no-repeat">
          <div className="pt-32 md:pt-28 ">
                <div className="text-center">
                    <h1 className="text-2xl md:text-4xl font-semibold text-black">Contact</h1>
                    <p className="text-sm pt-3 md:pt-5 text-black-500">
                        <a href="/">Home</a> / <a href="/shop"> Contact </a></p>
                </div>
            </div>
        </div>
        </section>


        {/*2nd Section*/}
       <section>
            <div className="pt-3 md:pt-10 pb-3 md:pb-10 px-3 md:px-20 text-center">
                <h2 className="text-lg md:text-2xl font-medium md:font-bold">Get In Touch With Us</h2>
                <p className="text-xs md:text-base text-gray-500 pt-3 md:pt-5">Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Sapiente eveniet laboriosam <br/>
                    aliquid, harum, minima modi aperiam quam libero
                     id nulla eos eius omnis. </p>
            </div>

            <div className="flex gap-20 md:gap-40 px-5 md:px-20 pt-5 md:pt-10 pb-5 md:pb-10">
                <div className="">
                    <div className="">
                    <Image width={20} height={20} src="/icon-1.png" alt="icon" />
                    <h3 className="text-sm md:text-base font-medium md:font-semibold pt-3 md:pt-5">Address</h3>
                    <p className="text-xs md:text-sm font-thin md:font-light pt-1 md:pt-3">236 5th SE Avenue, New York NY10000, United States</p>
                    </div>

                    <div className="pt-3 md:pt-5">
                    <Image width={20} height={20} src="/icon-2.png" alt="icon" />
                    <h3 className="text-sm md:text-base font-medium md:font-semibold pt-3 md:pt-5">Phone</h3>
                    <p className="text-xs md:text-sm font-thin md:font-light pt-1 md:pt-3">Mobile: +(84) 546-6789 <br/> Hotline: +(84) 456-6789</p>
                    </div>

                    <div className="pt-3 md:pt-5">
                    <Image width={20} height={20} src="/icon-3.png" alt="icon" />
                    <h3 className="text-sm md:text-base font-medium md:font-semibold pt-3 md:pt-5">Working Time</h3>
                    <p className="text-xs md:text-sm font-thin md:font-light pt-1 md:pt-3">Monday-Friday: 9:00 - 22:00 <br/> Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>

                <div className="">
                    <div>
                <label for="email" className="block mb-2 md:mb-5 text-xs md:text-base font-medium md:font-semibold text-gray-900 dark:text-white">Your name</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 md:px-20 text-xs md:text-base rounded-md md:rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abc" required />
                </div>
                <div>
                <label for="email" className="block mb-2 md:mb-5 text-xs md:text-base font-medium md:font-semibold pt-3 md:pt-5 text-gray-900 dark:text-white">Email Address</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 md:px-20 text-xs md:text-base rounded-md md:rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abc@def.com" required />
                </div>
                <div>
                <label for="email" className="block mb-2 md:mb-5 text-xs md:text-base font-medium md:font-semibold pt-3 md:pt-5 text-gray-900 dark:text-white">Subject</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:px-20 md:text-base rounded-md md:rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="This is an optical" required />
                </div>
                <div>
                <label for="message" className="block mb-2 md:mb-5 text-xs md:text-base font-medium md:font-semibold pt-3 md:pt-5 text-gray-900 dark:text-white">Your message</label>
                <textarea id="message" rows="4" className="block p-2.5 w-full text-gray-900 bg-gray-50 text-xs md:text-base md:px-20 rounded-md md:rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                </div>
                <div className="pt-3 md:pt-5">
                <button className="bg-yellow-600 pt-2 md:pt-3 pb-2 md:pb-3 px-5 md:px-20 text-sm md:text-base rounded-md text-white hover:text-black hover:bg-white hover:border-2 hover:border-yellow-600">Submit</button>
                </div>
                </div>
            </div>

       </section>

            {/* 4th Section */}
            <section>
           <div className="grid grid-cols-4 gap-5 pt-10 md:pt-10 px-5 md:px-20 pb-10 md:pb-10 bg-amber-50">
            <div className="flex pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2 h-16">
            <Image width={40} height={10} src="/shop-5.png" alt="" />
            <div>
            <h2 className="text-xs md:text-lg font-semibold">High Quality</h2>
            <p className="text-xs md:text-sm">Creafted from top msterials</p>
            </div>
            </div>

            <div className="flex pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2 h-16 ">
            <Image width={40} height={10} src="/shop-6.png" alt="" />
            <div>
            <h2 className="text-xs md:text-lg font-semibold">Warrantly Protection</h2>
            <p className="text-xs md:text-sm">Over 2 years</p>
            </div>
            </div>

            <div className="flex pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2 h-16 ">
            <Image width={40} height={10} src="/shop-7.png" alt="" />
            <div>
            <h2 className="text-xs md:text-lg font-semibold">Free Shipping</h2>
            <p className="text-xs md:text-sm">Order over 150$</p>
            </div>
            </div>

            <div className="flex pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2 h-16 ">
            <Image width={40} height={10} src="/shop-8.png" alt="" />
            <div>
            <h2 className="text-xs md:text-lg font-semibold">24 /7 Support</h2>
            <p className="text-xs md:text-sm">Dedicated support</p>
            </div>
            </div>

            </div>
      </section>
   
</main>
  )
}