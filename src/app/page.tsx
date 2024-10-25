import Image from "next/image"
export default function Home() {
  return (
    <main>
       {/*1st Section*/}
       <div className="bg-[url('/home-1.png')] h-screen">
          <div className="flex flex-row justify-between">
                <div className="flex-1 ">
                </div>
          <div className="flex-1 pt-5 md:pt-20 px-5 md:px-40 mb-10 md:mb-0 ">
                <div className=" bg-amber-50 px-5 md:px-10 pb-2 md:pb-10 ">
                    <p className="text-sm pt-5 md:pt-20 text-black-500">New Arrival</p>
                    <h1 className="text-2xl md:text-5xl pt-3 md:pt-5  font-bold text-yellow-600">Discover Our<br/> New Collection</h1>
                    <p className="text-sm  pt-3 md:pt-5 text-black-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reiciendis
                    nobis accusantium distinctio ratione natus nulla sit quam suscipit? </p>
                  <div className=" pt-3 md:pt-5 ">
                    <button className="pt-1 md:pt-5 px-3 md:px-16 pb-1 md:pb-5 text-xs md:text-base text-center font-semibold text-white bg-yellow-600 hover:text-yellow-600 hover:bg-white">Buy Now</button>
                  </div>
               </div>
          </div>
        </div>
     </div>

      {/* 2nd Section */}
      <section>
        <div className="text-center pt-5 md:pt-10">
          <h1 className="font-bold text-3xl ">Browse The Range</h1>
          <p className="text-lg text-gray-600 pt-2">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="grid grid-cols-3 gap-5 pt-10 ms:pt-20 px-10 md:px-20">
          <Image width={500} height={500} src="/home-2.png" alt="cakes" />
        
          <Image width={500} height={500} src="/home-3.png" alt="cakes" />
          
          <Image width={500} height={500} src="/home-4.png" alt="cakes" />

          <p className="text-center font-semibold">Dining</p>
          <p className="text-center font-semibold">Living</p>
          <p className="text-center font-semibold">Bedroom</p>
          </div>
      </section>

    {/* 3rd Section */}
      <section>
        <div className="text-center pt-5 md:pt-10">
          <h1 className="font-bold text-3xl ">Our Products</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-10 ms:pt-20 px-10 md:px-20">
        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-5.png" alt="deco" />
          <p className="font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-6.png" alt="deco" />  
          <p className="font-semibold">Leviosa <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000</p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-7.png" alt="deco" />
          <p className="font-semibold">Lolito <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br />Rp 7.000.000<span className="text-gray-400 line-through "> Rp 14.000.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-8.png" alt="deco" />
          <p className="font-semibold">Respira <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 5.00.000</p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-5.png" alt="deco" />
          <p className="font-semibold">Syltherine <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000<span className="text-gray-400 line-through "> Rp 3.500.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-6.png" alt="deco" />  
          <p className="font-semibold">Leviosa <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 2.500.000</p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-7.png" alt="deco" />
          <p className="font-semibold">Lolito <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br />Rp 7.000.000<span className="text-gray-400 line-through "> Rp 14.000.000</span></p>
        </div>

        <div className="bg-gray-100 pt-2 md:pt-2 pb-3 md:pb-5 px-2 md:px-2">
          <Image width={500} height={500} src="/home-8.png" alt="deco" />
          <p className="font-semibold">Respira <br/><span className="font-medium text-gray-600">Stylish Cafe Chair</span><br/>Rp 5.00.000</p>
        </div>
</div>
          <div className="pt-3 md:pt-5 content-center pb-3 md:pb-10 px-48 md:px-96 md:mx-40">
             <button className="pt-1 md:pt-3 px-3 md:px-10 pb-1 md:pb-3 text-xs md:text-base text-center font-semibold border-2 border-yellow-600 text-yellow-600 bg-transparent hover:text-white hover:bg-yellow-600">Buy Now</button>
          </div>
     
      </section>

      {/* 4th Section */}
      <section>
        <div className="grid grid-cols-3 gap-5 pt-5 md:pt-10 px-10 md:px-20 pb-5 md:pb-10 bg-amber-50">
            <div className="pt-10 md:pt-20 ">
              <h2 className="text-lg md:text-2xl font-semibold">50+ Beautiful rooms inspiration</h2>
              <p className="text-sm md:text-sm">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
              <div className=" pt-3 md:pt-5 content-center">
              <button className="pt-1 md:pt-3 px-3 md:px-12 pb-1 md:pb-3 text-xs md:text-sm text-center font-semibold text-white bg-yellow-600 hover:text-yellow-600 hover:bg-transparent hover:border-2 border-yellow-600">Buy Now</button>
            </div>
            </div>
            <div className="pt-10 md:pt-5">
            <Image width={500} height={500} src="/home-5.png" alt="deco" />
           </div>
           <div className="pt-10 md:pt-5">
            <Image width={500} height={500} src="/home-6.png" alt="deco" />          
            </div>
          </div>
    
      </section>

      
      {/* 5th Section */}
      <section>
      <div className="text-center pt-20 md:pt-32">
          <p className="text-sm">Share your setuo with</p>
          <h1 className="font-bold text-3xl ">#FuniroFurniture</h1>
        </div>
        <div className="grid grid-cols-5 gap-3 pt-5 md:pt-10 pb-5 md:pb-10">
            <div className="-mt-20">
            <Image width={500} height={500} src="/home-17.png" alt="deco" />          
            </div>
            <div >
            <Image width={500} height={500} src="/home-5.png" alt="deco" />          
            </div>
            <div className="pt-10">
            <Image width={500} height={500} src="/home-15.png" alt="deco" />          
            </div>
            <div className="">
            <Image width={500} height={500} src="/home-16.png" alt="deco" />          
            </div>
            <div className="-mt-20">
            <Image width={500} height={500} src="/home-17.png" alt="deco" />          
            </div>
            <div className="-mt-24 md:-mt-10">
            <Image width={500} height={500} src="/home-18.png" alt="deco" />
            </div>
            <div className="-mt-16 md:-mt-24">
            <Image width={500} height={500} src="/home-19.png" alt="deco" />          
            </div>
            <div className="">
            </div>
            <div className="-mt-12 md:-mt-14">
            <Image width={500} height={500} src="/home-20.png" alt="deco" />          
            </div>
            <div className="-mt-24 md:-mt-10">
            <Image width={500} height={500} src="/home-21.png" alt="deco" />          
            </div>


        
            </div>
            <hr className=""/>
      </section>


    </main>
  );
}