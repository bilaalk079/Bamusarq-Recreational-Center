import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
const Main = () => {
  return (
    <html>
      <head>
        <title>Bamusarq Recreational Center</title>
        <link rel="icon" href="/Gallery/favicon.ico" />
      </head>
      <body className="dark:bg-gray-950 bg-white">
        <main className="flex flex-col bg-white dark:bg-gray-950 text-green-700">
          <Header />
          <div
            className="h-auto sm:h-screen md:h-auto lg:h-auto md:scroll-mt-28 lg:scroll-mt-28 md:w-full md:mx-auto"
            id="about"
          >
            <h1 className="sm:text-5xl md:text-4xl lg:text-5xl text-3xl m-2 font-bold text-center text-green-500 underline">
              About us
            </h1>
            <div className="flex-row sm:flex md:flex-col md:mx-36 lg:flex-row lg:mx-auto w-5/6 mx-auto max-w-4xl">
              <Image
                src="/Gallery/IMG-20240810-WA0023.jpg"
                className="rounded-xl border-slate-900 p-1 mx-auto sm:m-5 md:m-8 lg:m-5 lg:mr-10"
                width={400}
                height={400}
                alt="sss"
              />
              <div className="flex flex-col max-w-lg">
                <p className="sm:text-2xl md:text-xl lg:text-2xl text-xl my-8 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  provident quis natus quia unde recusandae, eos similique ut
                  repellendus corporis ad eveniet, illo praesentium temporibus,
                  exercitationem repudiandae! Ex, maiores veritatis! Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Perspiciatis
                  quia accusantium illo, sit, voluptates cumque eaque
                  voluptatibus eum placeat necessitatibus reiciendis explicabo
                  soluta cupiditate laudantium doloremque! Nemo maiores esse
                  aliquid.
                </p>
              </div>
            </div>
          </div>
          <div
            className="h-auto sm:h-screen md:h-auto lg:h-auto md:scroll-mt-28 lg:scroll-mt-28 md:w-full md:mx-auto"
            id="about"
          >
            <div className="flex-row-reverse sm:flex md:flex-col  md:mx-36 lg:flex-row-reverse lg:mx-auto w-5/6 mx-auto max-w-4xl">
              <Image
                src="/Gallery/IMG-20240810-WA0056 (1).jpg"
                className="rounded-xl border-slate-900 p-1 mx-auto sm:m-5 md:m-8 lg:m-5"
                width={400}
                height={400}
                alt="sss"
              />
              <div className="flex flex-col max-w-lg">
                <p className="sm:text-2xl md:text-xl lg:text-2xl text-xl my-8 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  provident quis natus quia unde recusandae, eos similique ut
                  repellendus corporis ad eveniet, illo praesentium temporibus,
                  exercitationem repudiandae! Ex, maiores veritatis! Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Perspiciatis
                  quia accusantium illo, sit, voluptates cumque eaque
                  voluptatibus eum placeat necessitatibus reiciendis explicabo
                  soluta cupiditate laudantium doloremque! Nemo maiores esse
                  aliquid.
                </p>
              </div>
            </div>
          </div>
          <Footer/>
        </main>
      </body>
    </html>
  );
};

export default Main;
