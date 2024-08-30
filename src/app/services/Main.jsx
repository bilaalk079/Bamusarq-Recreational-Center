import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Head from "next/head";
const Main = () => {
  return (
    <html>
      <head>
        <title>Bamusarq Recreational Center</title>
        <link rel="icon" href="/Gallery/favicon.ico" />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/> */}
      </head>
      <body className="dark:bg-gray-950">
        <main
          className="flex flex-col bg-white dark:bg-gray-950 text-green-700"
          id="hero"
        >
          <Header />
          <div
            id="services"
            className="h-auto sm:h-screen md:h-auto lg:h-auto sm:scroll-mt-28 lg:scroll-mt-28 p-1 bg-slate-950"
          >
            <h1 className="sm:text-5xl md:text-4xl lg:text-5xl text-3xl m-2 font-bold text-center my-5 text-green-500">
              Our Services
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-10 my-5 bg-slate-950">
              <Card
                title={"Gym Services"}
                img_src={"/recreation/gym_center/gym2(1).jpg"}
                img_alt={"gym alt"}
                width={300}
                height={300}
                className={
                  "bg-slate-700 p-8 border border-gray-800 rounded-3xl md:w-2/3 mx-auto h-auto my-3"
                }
                img_className={"rounded-2xl my-3 md:w-3/4 md:mx-auto"}
                text_style={
                  "text-3xl font-bold text-slate-100 text-center m-3 "
                }
              />
              <Card
                title={"Fun Services"}
                img_src={"/recreation/fun3.jpg"}
                img_alt={"fun-center alt"}
                width={300}
                height={300}
                className={
                  "bg-slate-700 p-5 border border-gray-800 rounded-3xl h-auto md:w-2/3 mx-auto my-3"
                }
                img_className={"rounded-2xl mx-0.5 md:mx-auto md:w-3/4 my-3"}
                text_style={"text-3xl font-bold text-slate-100 text-center m-3"}
              />
              <Card
                title={"Event Center"}
                img_src={"/recreation/event_center/event2(1).jpg"}
                img_alt={"event-center alt"}
                width={300}
                height={300}
                className={
                  "bg-slate-700 p-5 border border-gray-800 rounded-3xl h-auto md:w-2/3 mx-auto my-3"
                }
                img_className={"rounded-2xl mx-0.5 md:mx-auto md:w-3/4 my-3"}
                text_style={"text-3xl font-bold text-slate-100 text-center m-3"}
              />
              <Card
                title={"Restaurant"}
                img_src={"/Gallery/IMG-20240810-WA0043.jpg"}
                img_alt={"res alt"}
                width={300}
                height={300}
                className={
                  "bg-slate-700 p-5 border border-gray-800 rounded-3xl h-auto md:w-2/3 mx-auto my-3"
                }
                img_className={"rounded-2xl mx-0.5 md:mx-auto md:w-3/4 my-3"}
                text_style={"text-3xl font-bold text-slate-100 text-center m-3"}
              />
              <Card
                title={"Swimming Pool"}
                img_src={"/Gallery/IMG-20240810-WA0039.jpg"}
                img_alt={"res alt"}
                width={300}
                height={300}
                className={
                  "bg-slate-700 p-5 border border-gray-800 rounded-3xl h-auto md:w-2/3 mx-auto my-3"
                }
                img_className={"rounded-2xl mx-0.5 md:mx-auto md:w-3/4 my-3"}
                text_style={"text-3xl font-bold text-slate-100 text-center m-3"}
              />
            </div>
          </div>
          <hr className="mx-auto sm:mt-10 mb-5 w-1/2 my-5 bg-gray-950 p-0.5 " />
          <div className="w-full mx-auto p-2 bg-slate-50">
            <h1 className="text-center font-bold text-5xl p-5 underline">
              Gym Plans
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                id="Gym Services"
                className="rounded-3xl mx-3 my-3"
                style={{ backgroundColor: "#CD7F32" }} // Bronze color
              >
                <h1 className="sm:text-5xl md:text-4xl lg:text-5xl text-4xl mt-4 mb-1 font-bold ml-7 text-white underline">
                  Bronze
                </h1>
                <ul className="list-disc p-4 text-orange-800">
                  <li className="ml-5 text-xl p-1">Access to Playground</li>
                  <li className="ml-5 text-xl p-1">
                    Use of Calisthenic Equipment
                  </li>
                  <li className="ml-5 text-xl p-1">Use of Tyre Mountain</li>
                  <li className="ml-5 text-xl p-1">Use of Track</li>
                  <li className="ml-5 text-xl p-1">Table Tennis</li>
                </ul>
                <ul className="text-center text-xl text-orange-800 p-4 underline font-extrabold border-t-2 rounded-2xl border-inherit">
                  <li>Daily: 500NGN</li>
                  <li>Weekly: 2500NGN</li>
                  <li>Monthly: 9000NGN</li>
                </ul>
              </div>
              <div
                id="Gym Services"
                className="rounded-3xl mx-3 my-3"
                style={{ backgroundColor: "#C0C0C0" }} // Silver color
              >
                <h1 className="sm:text-5xl md:text-4xl lg:text-5xl text-4xl mt-4 mb-1 font-bold ml-7 text-white underline">
                  Silver Muscle
                </h1>
                <ul className="list-disc p-4 text-gray-600">
                  <li className="ml-5 text-xl p-1">All Privileges of Bronze</li>
                  <li className="ml-5 text-xl p-1">
                    Use of weight lifting station
                  </li>
                  <li className="ml-5 text-xl p-1">Use of Squat</li>
                  <li className="ml-5 text-xl p-1">Use of Cardio Rider</li>
                  <li className="ml-5 text-xl p-1">Use of Row Machine</li>
                </ul>
                <ul className="text-center text-xl text-gray-600 p-4 underline font-extrabold border-t-2 rounded-2xl border-inherit">
                  <li>Daily: 1500NGN</li>
                  <li>Weekly: 5000NGN</li>
                  <li>Monthly: 18000NGN</li>
                </ul>
              </div>
              <div
                id="Gym Services"
                className="rounded-3xl mx-3 my-3"
                style={{ backgroundColor: "#C0C0C0" }} // Silver color
              >
                <h1 className="sm:text-5xl md:text-4xl lg:text-5xl text-4xl mt-4 mb-1 font-bold ml-7 text-white underline">
                  Silver Fit
                </h1>
                <ul className="list-disc p-4 text-gray-600">
                  <li className="ml-5 text-xl p-1">All Privileges of Bronze</li>
                  <li className="ml-5 text-xl p-1">Use of TreadMill</li>
                  <li className="ml-5 text-xl p-1">Use of Spin Bike</li>
                  <li className="ml-5 text-xl p-1">Use of Waist Trimmer</li>
                </ul>
                <ul className="text-center text-xl text-gray-600 p-4 underline font-extrabold border-t-2 rounded-2xl border-inherit">
                  <li>Daily: 1500NGN</li>
                  <li>Weekly: 5000NGN</li>
                  <li>Monthly: 18000NGN</li>
                </ul>
              </div>
              <div
                id="Gym Services"
                className="rounded-3xl mx-3 my-3"
                style={{ backgroundColor: "#FFD700" }} // Gold color
              >
                <h1 className="sm:text-5xl md:text-4xl lg:text-5xl text-4xl mt-4 mb-1 font-bold ml-7 text-white underline">
                  Gold
                </h1>
                <ul className="list-disc p-4 text-amber-600">
                  <li className="ml-5 text-xl p-1">
                    All Privileges of Silver Muscle
                  </li>
                  <li className="ml-5 text-xl p-1">
                    All Privileges of Silver Fit
                  </li>
                  <li className="ml-5 text-xl p-1">Use of Vibrator</li>
                  <li className="ml-5 text-xl p-1">
                    Detoxification Once a Month
                  </li>
                </ul>
                <ul className="text-center text-xl text-amber-600 p-3 underline font-extrabold border-t-2 rounded-2xl border-inherit">
                  <li>Daily: 2000NGN</li>
                  <li>Weekly: 10000NGN</li>
                  <li>Monthly: 30000NGN</li>
                </ul>
              </div>
              <div
                id="Gym Services"
                className="rounded-3xl mx-3 my-3"
                style={{
                  background:
                    "linear-gradient(135deg, #4A90E2, #5DADE2, #85C1E9)",
                }}
              >
                <h1 className="sm:text-5xl md:text-4xl lg:text-5xl text-4xl font-bold ml-7 mt-4 mb-1 text-white underline">
                  Platinum
                </h1>
                <ul className="list-disc p-4 text-sky-800">
                  <li className="ml-5 text-xl p-1">All Privileges of Gold</li>
                  <li className="ml-5 text-xl p-1">
                    {" "}
                    Once a month Blood Circulation Massage
                  </li>
                  <li className="ml-5 text-xl p-1">Personal Yoga Sessions</li>
                  <li className="ml-5 text-xl p-1">Personal Trainee</li>
                </ul>
                <ul className="text-center text-xl text-sky-800 p-4 underline font-extrabold border-t-2 rounded-2xl border-inherit">
                  <li>Daily: 2000NGN</li>
                  <li>Weekly: 10000NGN</li>
                  <li>Monthly: 35000NGN</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="mx-auto sm:mt-10 mb-5 w-1/2 my-5 bg-gray-950 p-0.5 animate-ping" />
          <div className="bg-slate-950">
            <h1 className="text-center p-2 font-bold text-3xl underline">
              For More Inquiries:
            </h1>
            <p className="text-center text-xl font-bold">Tel: 08033909524</p>
            <a
              href="whatsapp://send?phone=2348033909524&text=Hello%2C%20World!"
              className="flex items-center justify-center text-xl font-bold"
            >
              <i className="fab fa-whatsapp text-green-500 mr-2"></i>
              WhatsApp: 08033909524
            </a>{" "}
          </div>

          <Footer />
        </main>
      </body>
    </html>
  );
};

export default Main;
