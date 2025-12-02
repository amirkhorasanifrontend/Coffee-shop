import React from "react";
import Navbar from "./../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { TbTrash } from "react-icons/tb";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import { LuTruck} from "react-icons/lu";

const ProductCard = ({ img, title, desc }) => {
  return (
    <div className="flex border-2 border-black/25 gap-3 rounded-2xl">
      <div className="flex w-1/2">
        <img className="m-3 rounded-2xl px-5 bg-creamdark" src={img} alt={title} />
      </div>

      <div className="m-4 px-4 relative w-full">
        <p className="text-3xl font-black text-initial text-brown">{title}</p>
        <p className="font-semibold text-green">Light . Gentle . Low caffeine</p>

        <p className="border-t-2 border-black/30 text-sm mt-3 pt-3 font-semibold text-creamdark2">
          {desc}
        </p>

        <div className="flex mt-4 gap-2">
          <section className="border-2 font-semibold text-black/55 border-green-950/35 px-2 py-1 rounded-xl w-35">
            <select>
              <option>250g</option>
              <option>500g</option>
              <option>750g</option>
              <option>1 kg</option>
            </select>
          </section>

          <section className="border-2 font-semibold text-black/55 border-green-950/35 px-2 py-1 rounded-xl w-60">
            <select>
              <option>Ground - French Press</option>
              <option>500g</option>
              <option>750g</option>
              <option>1 kg</option>
            </select>
          </section>
        </div>

        <div className="flex mt-5 gap-2">
          <button className="border-2 border-green-950/60 font-semibold text-green-950/60 px-4 py-1.5 rounded-3xl">
            View detail
          </button>
          <button className="border-2 bg-green text-creamlight px-22.5 py-1.5 rounded-3xl">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ShoppingBag() {
  const products = [
    {
      id: 1,
      img: "/public/IMG_20251125_232833.png",
      title: "Calm Blend",
      desc: "Soft and floral with notes of chamomile and almond. Perfect for slow mornings.",
    },
    {
      id: 2,
      img: "/public/item4.png",
      title: "Calm Blend",
      desc: "Soft and floral with notes of chamomile and almond. Perfect for slow mornings.",
    },
    {
      id: 3,
      img: "/public/item3.png",
      title: "Calm Blend",
      desc: "Soft and floral with notes of chamomile and almond. Perfect for slow mornings.",
    },
  ];

  return (
    <>
      <Navbar />

      <Breadcrumb
        links={[
          { id: 1, title: "Home", to: "/" },
          { id: 2, title: "Shopping Bag", to: "/shoppingbag" },
        ]}
      />

      <div className="flex justify-center">
        <div className="w-full relative max-w-6xl bg-creamdark rounded-2xl">
          <div className="m-15">
            <h1 className="text-5xl font-black text-initial text-brown">
              Build Your
              <br />
              Own Box
            </h1>

            <p className="text-creamdark2 font-semibold">
              Craft a ritual that fits your life. Choose your blends, select
              <br />
              your size, and set your delivery schedule. We'll handle the
              <br />
              rest - freshly roasted, thoughtfully delivered.
            </p>
          </div>

          <div className="w-1/3 m-5 top-0 right-0 absolute">
            <img className="rounded-2xl" src="/public/SNIFF+HERE!+(8).jpg" alt="box" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-start mt-6 gap-10">
        <div className="flex relative flex-col gap-5 rounded-2xl w-full max-w-2xl">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>

        <div className="p-3 border-4 border-green-950/5 rounded-2xl bg-creamdark w-full max-w-110">
            <div className="relative px-2 flex items-center">
                <p className="text-3xl font-black text-initial text-brown">Box Summary</p>
                <p className="absolute font-semibold right-2 text-creamdark2">3 items</p>
            </div>
        <div className="flex border-t-2 mt-2 pt-5 border-black/25 gap-3">
        <div className="flex w-38 h-30">
            <img className="rounded-2xl px-3 bg-creamlight" src="public/item6.png"/>
        </div>
        <div className="m-4 relative w-full">
            <TbTrash className="absolute text-xl text-creamdark2 right-0" />
            <p className="text-2xl font-semibold text-brown">Calm Belend</p>
            <p className="font-semibold text-sm text-creamdark2">250g . Ground - French Press</p>
            <div className=" flex items-center w-28 text-brown border-2 border-black/25 rounded-3xl mt-5 px-2 gap-6">
                <IoMdAdd />
                <p className="text-lg">1</p>
                <IoMdRemove />
            </div>
            <p className="absolute right-0 top-21 text-green font-bold">$22.00</p>
       </div>
    </div>

            <div className="flex border-t-2 mt-2 pt-5 border-black/25 gap-3">
        <div className="flex w-38 h-30">
            <img className="rounded-2xl px-3 bg-creamlight" src="public/item4.png"/>
        </div>
        <div className="m-4 relative w-full">
            <TbTrash className="absolute text-xl text-creamdark2 right-0" />
            <p className="text-2xl font-semibold text-brown">Calm Belend</p>
            <p className="font-semibold text-sm text-creamdark2">250g . Ground - French Press</p>
            <div className=" flex items-center w-28 text-brown border-2 border-black/25 rounded-3xl mt-5 px-2 gap-6">
                <IoMdAdd />
                <p className="text-lg">1</p>
                <IoMdRemove />
            </div>
            <p className="absolute right-0 top-21 text-green font-bold">$22.00</p>
       </div>
    </div>

            <div className="flex border-t-2 mt-2 pt-5 border-black/25 gap-3">
        <div className="flex w-38 h-30">
            <img className="rounded-2xl px-3 bg-creamlight" src="public/item3.png"/>
        </div>
        <div className="m-4 relative w-full">
            <TbTrash className="absolute text-xl text-creamdark2 right-0" />
            <p className="text-2xl font-semibold text-brown">Calm Belend</p>
            <p className="font-semibold text-sm text-creamdark2">250g . Ground - French Press</p>
            <div className=" flex items-center w-28 text-brown border-2 border-black/25 rounded-3xl mt-5 px-2 gap-6">
                <IoMdAdd />
                <p className="text-lg">1</p>
                <IoMdRemove />
            </div>
            <p className="absolute right-0 top-20.5 text-green font-bold">$22.00</p>
       </div>
    </div>

    <div className="border-t-2 border-black/20 pt-5">
                      <div className='flex rounded-xl w-full relative gap-2 py-2 px-2 border-3 border-black/25 mb-3'>
                        <IoMdAddCircleOutline className='text-2xl text-green'/>
                        <p className='font-semibold text-brown'>One time purchase :</p>
                        <p className='flex text-green font-semibold justify-end right-2 absolute'>$102.00</p>
                      </div>
                      <div className='flex bg-creamlight rounded-xl w-full relative gap-2 py-2 px-2 border-3 border-green-950/50 mb-3'>
                        <IoMdAddCircle className='text-2xl text-green'/>
                        <p className='font-semibold text-brown'>Subscribe :</p>
                        <p className='flex text-green font-semibold justify-end right-2 absolute'><del className="pr-2 text-black/35">$102.00</del>$48.00</p>
                      </div>
                    <div className="flex p-2 rounded-2xl mt-4 border-3 border-green-950/10" >
                                <LuTruck className="text-5xl mr-4 text-green" />
                                <p className="font-semibold text-brown">
                                  Enjoy free shipping<br />on every order
                                </p>
                    </div>
    </div>

    <button className="w-full my-6 bg-green py-2.5 text-creamlight font-semibold rounded-3xl">Continue to checkout</button>
        </div>
        </div>

      <Footer />
    </>
  );
}
