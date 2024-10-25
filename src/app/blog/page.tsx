import Image from "next/image"
export default function Blog() {
  return (
    <main>
       {/*1st Section*/}
       <section>
       <div className="bg-[url('/shop-1.png')] h-80 bg-no-repeat">
          <div className="pt-32 md:pt-28 ">
                <div className="text-center">
                    <h1 className="text-2xl md:text-4xl font-semibold text-black">Blog</h1>
                    <p className="text-sm pt-3 md:pt-5 text-black-500">
                        <a href="/">Home</a> / <a href="/shop"> Blog </a></p>
                </div>
            </div>
        </div>
        </section>

      {/* 2nd Section */}
        <section>
          <div className="flex gap-3 md:gap-5 pt-5 md:pt-10 px-3 md:px-10">

          <div className="">
            <Image width={700} height={400} src="/blog-1.png" alt="Laptop" />
            <Image width={300} height={50} src="/blog-g.png" alt="Laptop" className="pt-5 md:pt-10"/>
            <h2 className="pt-5 md:pt-10 text-lg md:text-2xl font-semibold">Going all-in with millennial design</h2>
            <p className="pt-3 md:pt-5 pb-3 md:pb-5 text-xs md:text-sm font-normal text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Tenetur aspernatur dicta dolorum quibusdam!<br/> Sequi nostrum 
                  possimus numquam voluptate blanditiis unde cum nesciunt 
                  pariatur officia? Maxime vitae<br/> sed esse accusamus minima?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Tenetur aspernatur<br/> dicta dolorum quibusdam! Sequi nostrum 
                  possimus numquam voluptate blanditiis unde cum nesciunt 
                  pariatur officia?<br/> Maxime vitae sed esse accusamus minima?</p>
                <p className="pt-3 md:pt-5 pb-3 md:pb-5 text-xs md:text-sm font-semibold hover:underline">Read more</p>

          </div>

          <div className="">
        <form className="flex items-center max-w-sm mx-auto">   
            <div className="relative w-full">
              <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300
               text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..." required />
            </div>
            <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>

            <h2 className="text-sm md:text-base pt-2 md:pt-14 font-medium md:font-bold">Categories</h2>
            <div className="grid grid-cols-2 gap-10 gap-x-40">
            <p className="text-sm md:text-base pt-2 md:pt-5 font-extralight md:font-normal text-gray-400">Crafts</p>
            <p className="text-sm md:text-base pt-2 md:pt-5 font-extralight md:font-normal text-gray-400">2</p>

            <p className="text-sm md:text-base font-extralight md:font-normal text-gray-400">Design</p>
            <p className="text-sm md:text-base font-extralight md:font-normal text-gray-400">8</p>

            <p className="text-sm md:text-base font-extralight md:font-normal text-gray-400">Handmade</p>
            <p className="text-sm md:text-base font-extralight md:font-normal text-gray-400">7</p>

            <p className="text-sm md:text-base font-extralight md:font-normal text-gray-400">Interior</p>
            <p className="text-sm md:text-base font-extralight md:font-normal text-gray-400">1</p>

            <p className="text-sm md:text-base font-extralight md:font-normal text-gray-400">Wood</p>
            <p className="text-sm md:text-base font-extralight md:font-normal text-gray-400">6</p>
            </div>
          </div>

          </div>
        </section>


           {/* 3rd Section */}
            <section>
            <div className="flex gap-3 md:gap-5 pt-5 md:pt-10 px-3 md:px-10">

    <div className="">
      <Image width={700} height={400} src="/blog-2.png" alt="Laptop" />
      <Image width={300} height={50} src="/blog-g.png" alt="Laptop" className="pt-5 md:pt-10"/>
      <h2 className="pt-5 md:pt-10 text-lg md:text-2xl font-semibold">Exploring new ways of decorating</h2>
      <p className="pt-3 md:pt-5 pb-3 md:pb-5 text-xs md:text-sm font-normal text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Tenetur aspernatur dicta dolorum quibusdam!<br/> Sequi nostrum 
        possimus numquam voluptate blanditiis unde cum nesciunt 
        pariatur officia? Maxime vitae<br/> sed esse accusamus minima?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Tenetur aspernatur<br/> dicta dolorum quibusdam! Sequi nostrum 
        possimus numquam voluptate blanditiis unde cum nesciunt 
        pariatur officia?<br/> Maxime vitae sed esse accusamus minima?</p>
      <p className="pt-3 md:pt-5 pb-3 md:pb-5 text-xs md:text-sm font-semibold hover:underline">Read more</p>
          </div>

          <div className="">
          <h2 className="text-sm md:text-base pt-2 md:pt-14 font-semibold md:font-bold">Recent Posts</h2>
            
            <div className="flex pt-10 md:pt-10 h-20 md:h-40">
            <Image width={100} height={100} src="/blog-4.png" alt="" />
            <p className="text-xs md:text-base font-extralight md:font-normal px-3 md:px-5">Going all-in with<br/> Millennial design<br/>
            <span className="text-gray-400">03 Aug 2022</span></p>
            </div>

            <div className="flex pt-10 md:pt-10 h-20 md:h-40">
            <Image width={100} height={100} src="/blog-5.png" alt="" />
            <p className="text-xs md:text-base font-extralight md:font-normal px-3 md:px-5">Going all-in with<br/> Millennial design<br/>
            <span className="text-gray-400">03 Aug 2022</span></p>
            </div>

            <div className="flex pt-10 md:pt-10 h-20 md:h-40">
            <Image width={100} height={100} src="/blog-7.png" alt="" />
            <p className="text-xs md:text-base font-extralight md:font-normal px-3 md:px-5">Going all-in with<br/> Millennial design<br/>
            <span className="text-gray-400">03 Aug 2022</span></p>
            </div>
            
            <div className="flex pt-10 md:pt-10 h-20 md:h-40">
            <Image width={100} height={100} src="/blog-8.png" alt="" />
            <p className="text-xs md:text-base font-extralight md:font-normal px-3 md:px-5">Going all-in with<br/> Millennial design<br/>
            <span className="text-gray-400">03 Aug 2022</span></p>
            </div>

            <div className="flex pt-10 md:pt-10 h-20 md:h-40">
            <Image width={100} height={100} src="/blog-4.png" alt="" />
            <p className="text-xs md:text-base font-extralight md:font-normal px-3 md:px-5">Going all-in with<br/> Millennial design<br/>
            <span className="text-gray-400">03 Aug 2022</span></p>
            </div>
          
        </div>

      </div>
    </section>

           {/* 4th Section */}
           <section>
            <div className="flex gap-3 md:gap-5 pt-5 md:pt-10 px-3 md:px-10">

    <div className="">
      <Image width={700} height={400} src="/blog-3.png" alt="Laptop" />
      <Image width={300} height={50} src="/blog-g.png" alt="Laptop" className="pt-5 md:pt-10"/>
      <h2 className="pt-5 md:pt-10 text-lg md:text-2xl font-semibold">Exploring new ways of decorating</h2>
      <p className="pt-3 md:pt-5 pb-3 md:pb-5 text-xs md:text-sm font-normal text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Tenetur aspernatur dicta dolorum quibusdam!<br/> Sequi nostrum 
        possimus numquam voluptate blanditiis unde cum nesciunt 
        pariatur officia? Maxime vitae<br/> sed esse accusamus minima?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Tenetur aspernatur<br/> dicta dolorum quibusdam! Sequi nostrum 
        possimus numquam voluptate blanditiis unde cum nesciunt 
        pariatur officia?<br/> Maxime vitae sed esse accusamus minima?</p>
      <p className="pt-3 md:pt-5 pb-3 md:pb-5 text-xs md:text-sm font-semibold hover:underline">Read more</p>
          </div>
            </div>
            </section>


        {/* 5th Section */}
            <section>
            <div className="flex gap-5  pt-3 md:pt-5 md:px-80 ml-32 content-center pb-3 md:pb-10">
             <button className="pt-1 md:pt-2 px-2 md:px-4 pb-1 md:pb-2 text-xs md:text-base text-center font-semibold  rounded-md bg-yellow-600 text-white bg-transparent hover:text-yellow-600 hover:bg-white hover:border-2 border-yellow-600">
                <a href="/shop">1</a>
             </button>
             <button className="pt-1 md:pt-2 px-2 md:px-4 pb-1 md:pb-2 text-xs md:text-base text-center font-semibold rounded-md text-yellow-600 bg-amber-100 hover:text-white hover:bg-yellow-600">
             <a href="/shop">2</a>
             </button>
             <button className="pt-1 md:pt-2 px-2 md:px-4 pb-1 md:pb-2 text-xs md:text-base text-center font-semibold rounded-md border-yellow-600 text-yellow-600 bg-amber-100 hover:text-white hover:bg-yellow-600">
             <a href="/shop">3</a>
             </button>
            <button className="pt-1 md:pt-2 px-2 md:px-4 pb-1 md:pb-2 text-xs md:text-base text-center font-semibold rounded-md border-yellow-600 text-yellow-600 bg-amber-100 hover:text-white hover:bg-yellow-600">
            <a href="/shop">Next</a>
            </button>
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
  );
}