
import React from 'react';
import "./Award.css"; 
  
const AwardComponent = () => {
  return (
    <div className="bg-white text-black">
      <header className="flex justify-between items-center p-4 border-b">
        <img
          src="./Netart-Test/asserts/logo.png"
          alt="C.R.I. Logo"
          className="h-12"
          width="120"
          height="50"
          style={{ aspectRatio: "120 / 50", objectFit: "cover" }}
        />
        <div>
          <h1 className="text-xl font-bold">C.R.I. FLUID SYSTEMS</h1>
          <p className="text-sm">Pumping trust. Worldwide.</p>
        </div>
      </header>
      <main className="p-4">
        <div className="split right ">
          <div className="centered">
            <h2 className="text-lg font-semibold mb-2">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h2>
            <ul className="list-disc pl-5 mb-4">
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <p className="mb-4">
              Government of India has awarded the{" "}
              <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
              Selvaraj, Joint Managing Director of C.R.I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &amp; Shri.
              Raj Kumar Singh, Honorable Minister of State.
            </p>

            <div className="imgg">
              <img
                src="./Netart-Test/asserts/2.png"
                alt="Award"
                className="mb-4"
                width="700"
                height="500"
                style={{ aspectRatio: "600 / 200", objectFit: "cover" }}
              />
            </div>
            <div className="split right">
              <img
                src="./Netart-Test/asserts/1.png"
                alt="Award"
                width="300"
                height="500"
                 style={{ aspectRatio: "600 / 200", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        <section className=" mb-4">
          <p className="text-sm">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
          <img
            src="./Netart-Test/asserts/3.png"
            alt="Products"
            className="my-4"
            width="1500"
            height="200"
            style={{ aspectRatio: "600 / 200", objectFit: "cover" }}
          />
          <p className="prod text-center">
            Valves - Pumps - Pipes - IoT Drives &amp; Controllers - Wires &amp;
            Cables - Solar Systems - Motors
          </p>
          <hr  color='red'/>
        </section>
        <section className="mb-4">
          <h3 className="text-md font-semibold mb-2 ">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </h3>
          <p className="text-xs mb-4">
            CHEMICALS &amp; PROCESS | POWER | WATER &amp; WASTE WATER | OILS
            &amp; GAS | PHARMA | SUGARS &amp; DISTILLERIES | PAPER &amp; PULP |
            MARINE &amp; DEFENCE | METAL &amp; MINING | FOOD &amp; BEVERAGE |
            PETROCHEMICAL &amp; REFINERIES | SOLAR | BUILDING | HVAC | FIRE
            FIGHTING | AGRICULTURE &amp; RESIDENTIAL
          </p>
          <hr />
        </section>
        <footer className="flex justify-between items-center p-4">
          <img
            className="tele"
            src="./Netart-Test/asserts/tele.png"
            alt="Toll free 1800 200 1234"
          />
          <img
            className="fb"
            src="./Netart-Test/asserts/fb.png"
            alt="www.facebook.com/cripumps"
          />
          <img
            src="./Netart-Test/asserts/weblogo.png"
            alt="www.crigroups.com"
            className="web"
          />
        </footer>
      </main>
    </div>
  );
};

export default AwardComponent;
