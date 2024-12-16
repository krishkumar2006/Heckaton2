import Image from "next/image"
import acc from "../../../public/Image/acc.png"
import heart from "../../../public/Image/heart.png"
import search from "../../../public/Image/search.png"
import cart from "../../../public/Image/cart.png"
import singleseater from "../../../public/Image/single seater.png"
import table from "../../../public/Image/table.png"
import sofa from "../../../public/Image/sofa.png"
import img1 from "../../../public/Image/img1.png"
import img2 from "../../../public/Image/img2.png"
import img3 from "../../../public/Image/img3.png"
import img4 from "../../../public/Image/img4.png"
import asgaard from "../../../public/Image/asgaard.png"
import allinone from "../../../public/Image/allinone.png"
import Link from "next/link"




const Header = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="flex w-full h-[80px] md:h-[100px] bg-[#FBEBB5] justify-between items-center px-4 md:px-8 border-black border-2">
        <div className="text-lg font-bold">Logo</div>
        <ul className="flex space-x-4 md:space-x-8 text-sm md:text-base">
          <Link href="/"> Home</Link>
          <Link href="/shop"> Shop</Link>
          <Link href="/about"> About</Link>
          <Link href="/contact"> Contact</Link>
        </ul>
        <div className="flex space-x-4 md:space-x-8">
          <Image src={acc} alt="Account" className="w-5 h-5 md:w-7 md:h-7" />
          <Image src={heart} alt="Likes" className="w-5 h-5 md:w-7 md:h-7" />
          <Image src={search} alt="Search" className="w-5 h-5 md:w-7 md:h-7" />
          <Image src={cart} alt="Cart" className="w-5 h-5 md:w-7 md:h-7" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#FBEBB5] flex flex-col-reverse md:flex-row items-center px-4 md:px-12 py-8 md:h-[900px]">
        {/* Left Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-semibold text-gray-900 leading-snug">
            Rocket single <br /> seater
          </h1>
          <a
            href="#"
            className="mt-4 inline-block text-lg font-medium text-gray-700 hover:underline"
          >
            Shop Now
          </a>
        </div>
        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={singleseater}
            alt="Rocket Single Seater"
            className="rounded-lg shadow-sm mx-auto w-full h-auto md:max-w-md"
          />
        </div>
      </div>

      {/* Side Table Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4 py-8">
        {/* Product Cards */}
        {[table, sofa].map((img, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[90%] sm:w-[45%] lg:w-[30%]"
          >
            <Image
              src={img}
              alt={`Side Table ${index + 1}`}
              className="w-full h-[200px] md:h-[300px] object-cover"
            />
            <h1 className="text-xl font-bold text-gray-900 mt-4">Side Table</h1>
            <button className="text-sm text-gray-700 underline mt-2">
              View More
            </button>
          </div>
        ))}
      </div>

      {/* Top Picks Section */}
      <div className="w-full px-4 py-8">
        <div className="text-center font-semibold text-2xl md:text-4xl mb-4">
          Top pick for you
        </div>
        <p className="text-center text-sm md:text-lg px-4">
          Find a bright and ideal fit to suit your taste with our guest
          selection of suspension, floor, and lights.
        </p>
        <div className="flex flex-wrap justify-center gap-6 py-6">
          {[img1, img2, img3, img4].map((img, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[90%] sm:w-[45%] lg:w-[20%]"
            >
              <Image
                src={img}
                alt={`Top pick ${index + 1}`}
                className="w-full h-[200px] md:h-[300px] object-cover"
              />
              <h1 className="mt-4 font-semibold text-lg">Product Name</h1>
              <h1 className="text-3xl font-bold mt-2">Rs.25,000.00</h1>
              <hr className="w-full border-t-2 border-gray-400 mt-4" />
            </div>
          ))}
        </div>
      </div>

      {/* New Arrival Section */}
      <div className="w-full flex flex-wrap md:flex-nowrap items-center">
        <div className="w-full md:w-[50%]">
          <Image
            src={asgaard}
            alt="Asgaard Sofa"
            className="w-full h-[300px] md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-[50%] p-8 text-center md:text-left">
          <h1 className="text-xl md:text-2xl">New Arrival</h1>
          <h1 className="text-2xl md:text-4xl font-semibold">Asgaard Sofa</h1>
          <button className="mt-4 px-6 py-2 border-2 border-black hover:bg-black hover:text-white text-black">
            Order Now
          </button>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="bg-slate-400 text-center p-8">
        <h1 className="text-2xl md:text-4xl">Our Instagram</h1>
        <p>Follow our store for more</p>
        <button className="mt-4 px-4 py-2 border-2 border-white bg-slate-50 rounded-lg hover:border-black">
          Follow us
        </button>
      </div>
    </div>
  );
};

export default Header;
