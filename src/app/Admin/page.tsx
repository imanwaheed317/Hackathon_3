import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { MdOutlineModeNight } from "react-icons/md";



export default function Page() {
  return (
    <div className="w-full flex flex-col md:flex-row">
 <div className="first hidden md:flex w-[25%] lg:w-[20%]">

 <div className="min-h-screen flex bg-gray-100">
  {/* Sidebar */}
  <aside className="w-64 bg-white p-6 border-r">
  <h2 className="text-lg font-bold mb-6">Main Menu</h2>
  <nav className="space-y-4">
    <Link href="#" className="block p-2 rounded text-gray-400 hover:bg-blue-100 hover:text-blue-700">Dashboard
    </Link>
    <Link href="#" className="block p-2 rounded text-gray-400 hover:bg-blue-100 hover:text-blue-700">Car Rent
    </Link>
    <Link href="#"className="block p-2 rounded text-gray-400 hover:bg-blue-100 hover:text-blue-700">Insight
    </Link>
    <Link href="#" className="block p-2 rounded text-gray-400 hover:bg-blue-100 hover:text-blue-700">Reimburse
    </Link>
    <Link href="#" className="block p-2 rounded text-gray-400 hover:bg-blue-100 hover:text-blue-700">Inbox
    </Link>
    <Link href="#" className="block p-2 rounded text-gray-400 hover:bg-blue-100 hover:text-blue-700">Calendar
    </Link>
  </nav>
  <div className="mt-12">
    <h2 className="text-lg font-bold mb-6">Preferences</h2>
    <nav className="space-y-4">
      <Link href="#" className="block p-2 rounded text-gray-400 hover:bg-blue-100 hover:text-blue-700">Settings
      </Link>
      <Link href="#"className="block p-2 rounded text-gray-400 hover:bg-blue-100 hover:text-blue-700">Help & Center
      </Link>
      <Link href="#"
        className="flex items-center gap-2 p-2 rounded text-gray-400 hover:bg-blue-100 hover:text-blue-700">
          <span>Dark Mode</span>
          <Image src="/Group 427320607.png" alt="Icon" height={22} width={24} />
          <MdOutlineModeNight size={18} />   
      </Link>
    </nav>
  </div>
  <div className="flex items-center gap-2 mt-12 text-gray-400 hover:bg-blue-100 hover:text-blue-700 p-2 rounded">
    <CiLogout size={24} />
    <button className="hover:text-blue-700">Log Out</button>
  </div>
</aside>
     </div>
     </div>
     <div className="hidden md:flex md:w-[75%] lg:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 gap-4">
  {/* Left Section (Horizontal Image) */}
  <div className="flex-1">
    <Image
      src={"/Details Rental.png"}
      alt="Details Rental"
      width={800} // Adjust according to your image dimensions
      height={400}
      className="w-full h-auto object-cover"
    />
  </div>

  {/* Right Section (2 Vertical Images) */}
  <div className="flex flex-col gap-4 flex-1">
    {/* Top Vertical Image */}
    <div className="flex-1">
      <Image
        src={"/Top 5.png"}
        alt="Top 5"
        width={400} // Adjust according to your image dimensions
        height={600}
        className="w-[600px] h-[460px] "
      />
    </div>

    {/* Bottom Vertical Image */}
    <div className="">
      <Image
        src={"/RecentTransaction.png"}
        alt="Recent Transaction"
        width={200} // Adjust according to your image dimensions
        height={600}
        className="w-[600px] h-[490px]"
      />
    </div>
  </div>
</div>



      <div className="small-screens md:hidden bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-6">
        <Image
          src={"/Detail Rental.png"}
          alt="Detail Rental"
          width={327}
          height={1272}
          className="w-full"
        />
        <Image
          src={"/Top 5.png"}
          alt="Top 5"
          width={327}
          height={508}
          className="w-full"
        />
        <Image
          src={"/Recent Transaction.png"}
          alt="Recent Transaction"
          width={327}
          height={352}
          className="w-full"
        />
      </div>
    </div>
  );
}
