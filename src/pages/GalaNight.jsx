import React from "react";

const Header = () => (
  <header className="p-3 bg-[#313131] flex justify-between items-center mx-4 md:mx-20 lg:mx-40 rounded-2xl my-8">
    <div className="flex items-center">
      <img src="/image.png" alt="Logo" className="h-8 md:h-10 rounded-lg mx-4 md:mx-10" />
    </div>
    <nav className="hidden md:flex items-center gap-4 lg:gap-10">
      <button className="text-base lg:text-lg">TTMM</button>
      <button className="text-base lg:text-lg">Gala Night</button>
      <button className="text-base lg:text-lg">IE</button>
      <button className="text-base lg:text-lg">Contact Us</button>
      <button className="relative bg-transparent text-white px-2 md:px-4 py-1 text-sm md:text-lg font-medium">
        <button className="relative z-10">Join the waitlist</button>
        <span
          className="absolute inset-0 rounded-full border-2 border-transparent"
          style={{
            background:
              "linear-gradient(to right, #9DE8EE, #FA7C0B, #9F8CED) border-box",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </button>
    </nav>
    <div className="md:hidden">
      <button className="text-white text-2xl">☰</button>
    </div>
  </header>
);

const HeroSection = () => (
  <div className="h-screen bg-cover bg-center bg-no-repeat bg-[url('/bg.png')]">
    <section className="relative p-4 md:p-8 mx-4 md:mx-20 h-full flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img src="/GalaName.png" alt="Gala Name" className="w-full md:w-auto" />
          <p className="text-base md:text-lg mb-4 text-white">
            From 8 PM to 12 AM on April 6 at PJ Patel Stadium, get ready for a
            night like never before! Cocktails were nothing compared to their
            India's top elite singer band is all set to rock this stage. FOMO
            levels fire 🔥 if you miss this, you miss everything.
          </p>
          <button className="relative bg-transparent text-white px-6 md:px-10 py-3 md:py-4 text-lg md:text-xl mt-4">
            <span className="relative z-10">Get tickets</span>
            <span
              className="absolute inset-0 rounded-lg border-2 border-transparent"
              style={{
                background:
                  "linear-gradient(to right, #9DE8EE, #FA7C0B, #9F8CED) border-box",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
          </button>
        </div>
        <div className="w-full md:w-1/3">
          <img src="/presentedby.png" alt="Presented By" className="w-full" />
        </div>
      </div>
    </section>
  </div>
);

const CelebritySection = () => (
  <div className="px-4 md:px-0">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white flex justify-center">
      Shraddha Kapoor on Gala Night!
    </h2>
    <section className="bg-black text-center mx-2 md:m-14 border-2 md:border-4 border-white rounded-lg">
      <div className="bg-gray-900 p-4 md:p-6 rounded-lg flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <img
            src="/shraddha.png"
            alt="Shraddha Kapoor"
            className="rounded-lg w-full md:w-3/4"
          />
        </div>
        <div className="w-full md:w-2/3 text-left md:pl-6 text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            THE GALA NIGHT OF YOUR DREAMS — ASLI JANNAT YAHAN HAI
          </h3>
          <p className="text-lg md:text-xl font-bold mb-2">
            Celeb Night Bass Teaser hai... Yeh Mat Pura Blockbuster
          </p>
          <p className="text-lg md:text-xl font-bold mb-2">
            Jo Miss Kiya, FOMO Ka Regret Zindagi Bhar Sarjayega
          </p>
          <p className="text-sm md:text-md my-4 mb-2">
            We Know You Love Us - That's why gala night is here, Please Wait for
            reservation link - Aur Agar
          </p>
          <p className="text-sm md:text-md mb-2">
            On nahi liya kya, toh poore sirf website..See it's Online Box is
            October Sold in Boot
          </p>
          <p className="text-sm md:text-md mb-2">
            We Know You're So Happy - FOMO Deri Kar Ho Ram Ke Nar 1:21 Baje With
            Mic In, Not Kare...
          </p>
          <p className="text-sm md:text-md mb-2">
            Tickets will get Over, FOMO Mat Ho Kal Kharap, Sirf 35 Minutes,
            Regular Styles
          </p>
          <p className="text-sm md:text-md mt-4 font-bold">
            FOMO Mujhe BHi Ho Raha Hai... Chutti Bye - Shraddha Kapoor
          </p>
        </div>
      </div>
    </section>
  </div>
);

const PerformersTimeline = () => {
  return (
    <>
    <img src="/Timeline.png" alt="" />
    </>
  );
};

const TablePassPricing = () => {
  const passes = [
    {
      type: 'Silver',
      price: '2.5',
      color: 'bg-gray-300',
      features: [
        'Premium Access',
        'Networking with Elite Guest Seating',
        'Business Spotlight',
        'Top Hospitality',
        'Investor Pass - Cap 10Cr'
      ]
    },
    {
      type: 'Gold',
      price: '4.5',
      color: 'bg-yellow-400',
      features: [
        'VIP Access',
        'Power Networking Seating',
        'Luxury Hospitality',
        'Personal Elite Meet',
        'Business spotlight co-presented',
        'Investor Pass - Cap 15cr'
      ]
    },
    {
      type: 'Diamond',
      price: '7.5',
      color: 'bg-gradient-to-r from-blue-200 to-cyan-200',
      features: [
        'Ultra VIP Access',
        'Elite Power Networking Seating',
        'Ultimate Lux Hospitality',
        'Business Spotlight Presented',
        'Customized Elite Guest Choose',
        'Investor Pass - Cap 250r'
      ]
    }
  ];

  return (
    <div className="w-full  p-4 bg-white text-black">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-black">GRAB YOUR </span>
          <span className="text-purple-600">PASSES</span>
          <span className="text-black"> NOW</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {passes.map((pass) => (
          <div 
            key={pass.type} 
            className={`${pass.color} rounded-xl p-6 shadow-lg flex-1 max-w-md border border-gray-200`}
          >
            <h2 className="text-3xl font-bold">{pass.type} Table Pass</h2>
            <p className="text-2xl font-semibold mb-6">{pass.price} lakhs</p>
            
            <ul className="space-y-3 mb-8">
              {pass.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-1 flex-shrink-0">
                    <svg className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <circle cx="10" cy="10" r="8" strokeWidth="2" fill="currentColor" />
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" fill="white" />
                    </svg>
                  </div>
                  <span className="text-black">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition">
                Get tickets
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureList = ({ features }) => (
  <ul className="text-xs space-y-2 mb-6">
    {features.map((feature, idx) => (
      <li key={idx} className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
        {feature}
      </li>
    ))}
  </ul>
);

const PassCard = ({ type, price, color, buttonColor, features }) => (
  <div className={`bg-${color} rounded-lg p-4 w-full sm:w-64 mb-4 sm:mb-0`}>
    <h3 className="font-bold mb-1">{type} Table Pass</h3>
    <p className="font-bold mb-4">{price} lakhs</p>
    <FeatureList features={features} />
    <button
      className={`bg-${buttonColor} text-white w-full py-2 rounded text-sm`}
    >
      Buy tickets
    </button>
  </div>
);


const TicketSection = () => (
  <div className="w-full flex justify-center">
    <img src="/Ticket.png" alt="Event Ticket" className="w-full md:w-auto" />
  </div>
);

const FooterLink = ({ title, links }) => (
  <div className="mb-6 md:mb-0">
    <h4 className="text-md mb-2">{title}</h4>
    <ul className="text-sm gap-2 md:gap-4 flex flex-col text-gray-400">
      {links.map((link, idx) => (
        <li key={idx}>{link}</li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerLinks = [
    {
      title: "Home",
      links: ["About", "Gala Night", "TTMM", "Contact"],
    },
    {
      title: "Gala Night",
      links: ["Events", "Passes", "Artists"],
    },
    {
      title: "TTMM",
      links: ["About", "Brands", "Events"],
    },
    {
      title: "Contact Us",
      links: ["Support", "Email", "Phone", "FAQ"],
    },
  ];

  return (
    <footer className="bg-black p-8 mt-auto">
      <div className="flex justify-evenly w-full">
        <div>
          <div className="flex items-center mb-4">
    <img src="image.png" alt="" />
      
          </div>
          <div className="flex justify-evenly gap-60">
            {footerLinks.map((section, idx) => (
              <FooterLink
                key={idx}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-8 text-center">
        © 2025 All rights reserved
      </div>
    </footer>
  );
};



const GalaNightPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <CelebritySection />
      <PerformersTimeline />
      <TablePassPricing />
      <TicketSection />
      <Footer />
    </div>
  );
};

export default GalaNightPage;