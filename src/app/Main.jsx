import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import Card from "@/components/Card";
import "../styles/styles.css";
import Link from "next/link";
import ImageCard from "@/components/imageCard";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
const Main = () => {
     return (
          <html>
               <head>
                    <title>Bamusarq Recreational Center</title>
                    <link rel="icon" href="/Gallery/favicon.ico" />
               </head>
               <body className="dark:bg-gray-950">
                    <main
                         className="flex flex-col bg-white dark:bg-gray-950 text-green-700"
                         id="hero"
                    >
                         <Header />
                         <div id="hero" className="sm:h-screen md:h-auto lg:h-auto scroll-mt-28">
                              <Carousel />
                         </div>
                         <hr className="mx-auto sm:mt-10 mb-5 w-1/2 -mt-20 bg-gray-950 p-0.5 lg:animate-bounce" />
                         <div
                              className="h-auto sm:h-screen md:h-auto lg:h-auto md:scroll-mt-28 lg:scroll-mt-28 md:w-full md:mx-auto"
                              id="about"
                         >
                              <h1 className="sm:text-5xl md:text-4xl lg:text-5xl text-3xl m-2 font-bold text-center text-green-500 underline">
                                   About us
                              </h1>
                              <div className="flex-row sm:flex md:flex-col md:mx-36 lg:flex-row lg:mx-auto w-5/6 mx-auto max-w-4xl">
                                   <Image
                                        src="https://res.cloudinary.com/duemcn7lm/image/upload/v1751805258/IMG-20240810-WA0023_dusey6.jpg"
                                        className="rounded-xl border-slate-900 p-1 mx-auto sm:m-5 md:m-8 lg:m-5"
                                        width={400}
                                        height={400}
                                        alt="sss"
                                   />
                                   <div className="flex flex-col max-w-lg">
                                        <p className="sm:text-2xl md:text-xl lg:text-2xl text-xl my-8 mx-auto">
                                             At Bamusarq Recreational & Wellness Center, we believe
                                             in creating a space where wellness meets community, and
                                             health is not just a goal—but a lifestyle. Our mission
                                             is to provide a welcoming and vibrant environment where
                                             individuals and families can engage in physical
                                             activity, enjoy wholesome meals, celebrate life’s
                                             special moments, and simply have fun. Our vision is to
                                             become a leading hub for wellness, recreation, and
                                             connection in the community—a place where people of all
                                             ages feel inspired to live healthier, happier lives.
                                        </p>
                                        <Button content={"Learn More"} href={"/about"} />
                                   </div>
                              </div>
                         </div>
                         <hr className="mx-auto sm:mt-10 mb-5 w-1/2 -mt-0 bg-gray-950 p-0.5  animate-ping" />
                         <div
                              id="services"
                              className="h-auto sm:h-screen md:h-auto lg:h-auto sm:scroll-mt-28 lg:scroll-mt-28 p-1 bg-slate-950"
                         >
                              <h1 className="sm:text-5xl md:text-4xl lg:text-5xl text-3xl m-2 font-bold text-center mt-2 text-green-500 underline">
                                   Our Services
                              </h1>
                              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6 mx-3 my-16">
                                   <Card
                                        title={"Gym Services"}
                                        img_src={
                                             "https://res.cloudinary.com/duemcn7lm/image/upload/v1751806130/gym2_1_aga62i.jpg"
                                        }
                                        img_alt={"gym alt"}
                                        width={250}
                                        height={250}
                                        className={
                                             "bg-slate-700 p-8 border border-gray-800 rounded-3xl w-auto mx-auto h-auto"
                                        }
                                        img_className={"rounded-2xl my-3 md:w-3/4 md:mx-auto"}
                                        text_style={
                                             "text-3xl font-bold text-slate-100 text-center m-3 "
                                        }
                                   />
                                   <Card
                                        title={"Fun Services"}
                                        img_src={
                                             "https://res.cloudinary.com/duemcn7lm/image/upload/v1751805996/fun3_hx1xty.jpg"
                                        }
                                        img_alt={"fun-center alt"}
                                        width={250}
                                        height={250}
                                        className={
                                             "bg-slate-700 p-5 border border-gray-800 rounded-3xl h-auto w-auto mx-auto"
                                        }
                                        img_className={
                                             "rounded-2xl mx-0.5 md:mx-auto md:w-3/4 my-3"
                                        }
                                        text_style={
                                             "text-3xl font-bold text-slate-100 text-center m-3"
                                        }
                                   />
                                   <Card
                                        title={"Event Center"}
                                        img_src={
                                             "https://res.cloudinary.com/duemcn7lm/image/upload/v1751806197/event2_1_shmpas.jpg"
                                        }
                                        img_alt={"event-center alt"}
                                        width={250}
                                        height={250}
                                        className={
                                             "bg-slate-700 p-5 border border-gray-800 rounded-3xl h-auto w-auto mx-auto"
                                        }
                                        img_className={
                                             "rounded-2xl mx-0.5 md:mx-auto md:w-3/4 my-3"
                                        }
                                        text_style={
                                             "text-3xl font-bold text-slate-100 text-center m-3"
                                        }
                                   />
                                   <Card
                                        title={"Restaurant"}
                                        img_src={
                                             "https://res.cloudinary.com/duemcn7lm/image/upload/v1751805371/IMG-20240810-WA0043_vptjro.jpg"
                                        }
                                        img_alt={"res alt"}
                                        width={250}
                                        height={250}
                                        className={
                                             "bg-slate-700 p-5 border border-gray-800 rounded-3xl h-auto w-auto mx-auto"
                                        }
                                        img_className={
                                             "rounded-2xl mx-0.5 md:mx-auto md:w-3/4 my-3"
                                        }
                                        text_style={
                                             "text-3xl font-bold text-slate-100 text-center m-3"
                                        }
                                   />
                              </div>
                              <Button content={"View All Our Services"} href={"/services"} />
                         </div>
                         <hr className="mx-auto mt-6 sm:mt-5 w-1/2 mb-5 bg-gray-950 p-0.5 animate-ping" />
                         <div id="gallery" className="bg-white min-h-screen scroll-mt-28 ">
                              <h1 className="sm:text-5xl md:text-4xl lg:text-5xl text-3xl m-5 font-bold text-center underline ">
                                   Gallery
                              </h1>
                              <div className="flex flex-col sm:grid-cols-3 max-w-7xl ml-10 sm:mx-auto sm:grid mb-5">
                                   <ImageCard
                                        img_src={
                                             "https://res.cloudinary.com/duemcn7lm/image/upload/v1751805379/IMG-20240810-WA0045_fcwmiu.jpg"
                                        }
                                        width={500}
                                        height={500}
                                        img_className={"rounded-2xl w-2/3 mx-auto my-12"}
                                        className={"bg-slate-950 m-6 p-0.5 rounded-3xl w-3/4 h-84"}
                                   />
                                   <ImageCard
                                        img_src={
                                             "https://res.cloudinary.com/duemcn7lm/image/upload/v1751805383/IMG-20240810-WA0048_lls2ys.jpg"
                                        }
                                        width={500}
                                        height={500}
                                        img_className={"rounded-2xl w-2/3 mx-auto my-12"}
                                        className={"bg-slate-950 m-6 p-0.5 rounded-3xl w-3/4 h-84"}
                                   />
                                   <ImageCard
                                        img_src={
                                             "https://res.cloudinary.com/duemcn7lm/image/upload/v1751805384/IMG-20240810-WA0051_m21pds.jpg"
                                        }
                                        width={500}
                                        height={500}
                                        img_className={"rounded-2xl w-2/3 mx-auto my-12"}
                                        className={"bg-slate-950 m-6 p-0.5 rounded-3xl w-3/4 h-84"}
                                   />
                                   <ImageCard
                                        img_src={
                                             "https://res.cloudinary.com/duemcn7lm/image/upload/v1751805368/IMG-20240810-WA0037_mqzwu9.jpg"
                                        }
                                        width={500}
                                        height={500}
                                        img_className={"rounded-2xl w-2/3 mx-auto my-12"}
                                        className={"bg-slate-950 m-6 p-0.5 rounded-3xl w-3/4 h-84"}
                                   />
                                   <ImageCard
                                        img_src={
                                             "https://res.cloudinary.com/duemcn7lm/image/upload/v1751805384/IMG-20240810-WA0049_hq25u7.jpg"
                                        }
                                        width={500}
                                        height={500}
                                        img_className={"rounded-2xl w-2/3 mx-auto my-12"}
                                        className={"bg-slate-950 m-6 p-0.5 rounded-3xl w-3/4 h-84"}
                                   />
                                   <ImageCard
                                        img_src={
                                             "https://res.cloudinary.com/duemcn7lm/image/upload/v1751805264/IMG-20240810-WA0033_lrucs9.jpg"
                                        }
                                        width={500}
                                        height={500}
                                        img_className={"rounded-2xl w-2/3 mx-auto my-12"}
                                        className={"bg-slate-950 m-6 p-0.5 rounded-3xl w-3/4 h-84"}
                                   />
                              </div>
                              <Button content={"View Full Gallery"} href={"/gallery"} />
                         </div>
                         <hr className="mx-auto mt-5 sm:mt-5 w-1/2 mb-3 bg-gray-950 p-0.5 animate-ping" />

                         <Footer />
                    </main>
               </body>
          </html>
     );
};

export default Main;
