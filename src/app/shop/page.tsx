import Image from "next/image"
export default function Home() {
  return (
    <main>
       {/*1st Section*/}
       <section>
       <div className="bg-[url('/shop-1.png')] h-80 bg-no-repeat">
          <div className="pt-32 md:pt-28 ">
                <div className="text-center">
                    <h1 className="text-2xl md:text-4xl font-semibold text-black">Shop</h1>
                    <p className="text-sm pt-3 md:pt-5 text-black-500">
                        <a href="/">Home</a> / <a href="/shop"> shop </a></p>
                </div>
            </div>
        </div>
        </section>

      {/* 2nd Section */}
      <section className="pt-3 md:pt-10 pb-3 md:pb-10 bg-yellow-50">
          <div className="grid grid-cols-2 gap-3 md:gap-10">
            <div className="flex gap-3 md:gap-5 px-3 md:px-10">
          <Image width={20} height={20} src="/shop-2.png" alt="icon" className="md:h-10"/>
          <p className="text-xs md:text-lg text-center">Filter</p>
          <Image width={20} height={20} src="/shop-3.png" alt="icon" className="md:h-10"/>
          <Image width={20} height={20} src="/shop-4.png" alt="icon" className="md:h-10"/>
         <p className="text-xs md:text-lg text-center font-bold"> | </p>
          <p className="text-xs md:text-base text-center font-medium">Showing 1-16 of 32 results</p>
          </div>

          <div className="grid grid-cols-4 gap-5 pt-2 md-pt-5 px-2 md:px-5 ">
            <p className="text-xs md:text-lg text-center font-medium">Show</p>
            <p className="text-xs md:text-lg text-center font-medium bg-white text-gray-500">16</p>
            <p className="text-xs md:text-lg text-center font-medium">Short by</p>
            <p className="text-xs md:text-lg text-center font-medium bg-white text-gray-500">Default</p>
          </div>
         </div>
      </section>

    {/* 3rd Section */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-10 md:pt-20 px-10 md:px-20">
        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-5.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-6.png" alt="deco" />  
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Leviosa <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000</p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-7.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Lolito <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br />Rp 7.000.000<span className="text-gray-400 line-through "> Rp 14.000.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-8.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Respira <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 5.00.000</p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-5.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-6.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-7.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-8.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-5.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-6.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-7.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-8.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-5.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-6.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-7.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-8.png" alt="deco" />
          <p className="text-xs md:text-sm pt-2 md:pt-5 font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

      
          <div className="flex gap-5  pt-3 md:pt-5 md:px-80 ml-32 content-center pb-3 md:pb-10">
             <button className="pt-1 md:pt-2 px-2 md:px-2 pb-1 md:pb-2 text-xs md:text-base text-center font-semibold  rounded-md bg-yellow-600 text-white bg-transparent hover:text-yellow-600 hover:bg-white hover:border-2 border-yellow-600">
                <a href="/shop">1</a>
             </button>
             <button className="pt-1 md:pt-2 px-2 md:px-2 pb-1 md:pb-2 text-xs md:text-base text-center font-semibold border-2 rounded-md border-yellow-600 text-yellow-600 bg-transparent hover:text-white hover:bg-yellow-600">
             <a href="/shop">2</a>
             </button>
             <button className="pt-1 md:pt-2 px-2 md:px-2 pb-1 md:pb-2 text-xs md:text-base text-center font-semibold border-2 rounded-md border-yellow-600 text-yellow-600 bg-transparent hover:text-yellow-600 hover:bg-white">
             <a href="/shop">3</a>
             </button>
            <button className="pt-1 md:pt-2 px-2 md:px-2 pb-1 md:pb-2 text-xs md:text-base text-center font-semibold border-2 rounded-md border-yellow-600 text-yellow-600 bg-transparent hover:text-yellow-600 hover:bg-white">
            <a href="/shop">4</a>
            </button>
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
  );
}