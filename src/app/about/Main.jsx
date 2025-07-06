import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
const Main = () => {
     return (
          <html>
               <head>
                    <title>Bamusarq Recreational Center</title>
                    <link rel="icon" href="/favicon.ico" />
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
                                        src="https://res.cloudinary.com/duemcn7lm/image/upload/v1751805258/IMG-20240810-WA0023_dusey6.jpg"
                                        className="rounded-xl border-slate-900 p-1 mx-auto sm:m-5 md:m-8 lg:m-5 lg:mr-10"
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
                                   </div>
                              </div>
                         </div>
                         <div
                              className="h-auto sm:h-screen md:h-auto lg:h-auto md:scroll-mt-28 lg:scroll-mt-28 md:w-full md:mx-auto"
                              id="about"
                         >
                              <div className="flex-row-reverse sm:flex md:flex-col  md:mx-36 lg:flex-row-reverse lg:mx-auto w-5/6 mx-auto max-w-4xl">
                                   <Image
                                        src="https://res.cloudinary.com/duemcn7lm/image/upload/v1751805259/IMG-20240810-WA0056_1_tjhruv.jpg"
                                        className="rounded-xl border-slate-900 p-1 mx-auto sm:m-5 md:m-8 lg:m-5"
                                        width={400}
                                        height={400}
                                        alt="sss"
                                   />
                                   <div className="flex flex-col max-w-lg">
                                        <p className="sm:text-2xl md:text-xl lg:text-2xl text-xl my-8 mx-auto">
                                             The center is home to a fully equipped gym and an
                                             on-site restaurant, both designed to support your
                                             wellness journey from the inside out. Whether you're
                                             building strength, improving endurance, or enjoying a
                                             nutritious meal with friends, we’re here to help you
                                             thrive. We also host various fitness and wellness
                                             competitions throughout the year—events that inspire
                                             motivation, encourage community, and celebrate healthy
                                             living. For life’s big occasions, our event center
                                             serves as the perfect venue. From birthdays and
                                             weddings to corporate events, we provide a beautiful
                                             and functional space where memories are made.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <Footer />
                    </main>
               </body>
          </html>
     );
};

export default Main;
