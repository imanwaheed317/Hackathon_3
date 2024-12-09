"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/component/ui/card";

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='w-full flex'>
      <div className='first hidden sm:flex w-[20%]'>


      <div className="w-[350px] h-[1350px] bg-white shadow-md p-4 overflow-y-auto ">
        {/* Section - Type */}
        <div className="mb-9 mt-5 ml-4">
          <h3 className="font-semibold text-gray-500 mb-6 text-[10px]">TYPE</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="sport" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
              <label htmlFor="sport" className="text-gray-800 font-semibold">Sport <span className="text-gray-400">(10)</span></label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="suv" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
              <label htmlFor="suv" className="text-gray-800 font-semibold">SUV <span className="text-gray-400">(12)</span></label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="mpv" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
              <label htmlFor="mpv" className="text-gray-800 font-semibold">MPV <span className="text-gray-400">(16)</span></label>
            </div>
            <div className="flex items-center space-x-2">
        <input type="checkbox" id="mpv" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
        <label htmlFor="mpv" className="text-gray-800 font-semibold">Sedan <span className='text-gray-400'>(20)</span></label>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="mpv" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
        <label htmlFor="mpv" className="text-gray-800 font-semibold">Cuope <span className='text-gray-400'>(14)</span></label>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="mpv" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
        <label htmlFor="mpv" className="text-gray-800 font-semibold">Hatchback <span className='text-gray-400'>(14)</span></label>
      </div>
          </div>
        </div>

        {/* Section - Capacity */}
        <div className="mb-6 ml-5">
          <h3 className="font-semibold text-gray-500 mb-6 text-[10px]">Capacity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="2person" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
              <label htmlFor="2person" className="text-gray-800">2 Person <span className="text-gray-400">(10)</span></label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="4person" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
              <label htmlFor="4person" className="text-gray-800">4 Person <span className="text-gray-400">(14)</span></label>
            </div>

            <div className="flex items-center space-x-2">
        <input type="checkbox" id="6person" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
        <label htmlFor="6person" className="text-gray-800">6 Person <span className='text-gray-400'>(12)</span></label>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="6person" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
        <label htmlFor="6person" className="text-gray-800">8 or More <span className='text-gray-400'>(16)</span></label>
      </div>
    </div>
          
        </div>

        {/* Section - Price */}
        <div className="ml-5 mb-4">
          <h3 className="font-semibold text-gray-500 mb-4 text-[10px]">Price</h3>
          <div className="flex flex-col space-y-2">
            <Image src="/per.png" alt="Price Range" width={280} height={12} />
          </div>
        </div>
      </div>


      </div>
      <div className='sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]'>
        <section className='w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between '>
          <Image
            src={"/Pick - Up.png"}
            alt=''
            width={582}
            height={132}
            className='w-[200px] md:w-[270px] lg:w-[582px]'
          />
          <Image
            src={"/Switch.png"}
            alt=''
            width={60}
            height={60}
            className='w-[80px]'
          />
          <Image
            src={"/Drop - Off.png"}
            alt=''
            width={582}
            height={132}
            className=' w-[200px] md:w-[270px] lg:w-[582px]'
          />
        </section>
        <section className='popular w-full flex flex-col gap-4'>
          <div className='sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {[
              { title: "Koenigsegg", image: "/car.png", desc: "Sport" },
              { title: "Nissan GT - R", image: "/car (1).png", desc: "Luxury" },
              { title: "Rolls-Royce", image: "/suv.png", desc: "Sport" },
              { title: "All New Rush", image: "/suv (4).png", desc: "Luxury" },
              { title: "CR - V", image: "/suv (4).png", desc: "Luxury" },
              { title: "ALLNEW TERIOS", image: "/suv.png", desc: "SUV" },
              {
                title: "MGZX Exclusive",
                image: "/suv (4).png",
                desc: "Luxury",
              },
              { title: "NEW MGZS", image: "/suv.png", desc: "SUV" },
            ].map((car, index) => (
              <Card
                key={index}
                className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'
              >
                <CardHeader>
                  <CardTitle className='w-full flex items-center justify-between'>
                    {car.title}{" "}
                    <Image src={"/heart.png"} alt='' width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{car.desc}</CardDescription>
                </CardHeader>
                <CardContent className='w-full flex md:flex-col items-center justify-center gap-4'>
                  <Image src={car.image} alt='' width={220} height={68} />
                  <Image
                    src={"/Spesification.png"}
                    alt=''
                    width={256}
                    height={24}
                    className='hidden md:flex'
                  />
                  <Image
                    src={"/Spesification (1).png"}
                    alt=''
                    width={256}
                    height={24}
                    className='md:hidden'
                  />
                </CardContent>
                <CardFooter className='w-full flex items-center justify-between'>
                  <p>
                    $99.00/<span className='text-gray-500'>day</span>
                  </p>
                  <Link href={"/details"}>
                    <button className='bg-[#3563e9] p-2 text-white rounded-md'>
                      Rent Now
                    </button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          {showMore && (
            <div className='sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
              {[
                { title: "MG ZX Exclusive", image: "/suv.png", desc: "SUV" },
                { title: "NEW MG ZS", image: "/suv (4).png", desc: "Sedan" },
                { title: "New MG ZX Excite", image: "/suv.png", desc: "Sport" },
                { title: "NEW MG ZS", image: "/suv (4).png", desc: "Sedan" },
              ].map((car, index) => (
                <Card
                  key={index}
                  className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'
                >
                  <CardHeader>
                    <CardTitle className='w-full flex items-center justify-between'>
                      {car.title}{" "}
                      <Image src={"/heart.png"} alt='' width={20} height={20} />
                    </CardTitle>
                    <CardDescription>{car.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className='w-full flex md:flex-col items-center justify-center gap-4'>
                    <Image src={car.image} alt='' width={220} height={68} />
                    <Image
                      src={"/Spesification.png"}
                      alt=''
                      width={256}
                      height={24}
                      className='hidden md:flex'
                    />
                    <Image
                      src={"/Spesification (1).png"}
                      alt=''
                      width={256}
                      height={24}
                      className='md:hidden'
                    />
                  </CardContent>
                  <CardFooter className='w-full flex items-center justify-between'>
                    <p>
                      $100.00/<span className='text-gray-500'>day</span>
                    </p>
                    <button className='bg-[#3563e9] p-2 text-white rounded-md'>
                      Rent Now
                    </button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section className='button w-full text-center'>
          <button
            onClick={toggleShowMore}
            className='bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5'
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}
