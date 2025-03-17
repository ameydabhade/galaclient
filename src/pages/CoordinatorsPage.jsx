import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';

// Footer component moved outside the main component
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
            <img src="image.png" alt="Logo" />
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

const CoordinatorsPage = () => {
  const [openFAQ, setOpenFAQ] = useState('01');

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const coordinators = [
    { id: 1, name: 'PIYUSH SOMWANI', role: '', image: '/piyush.png' },
    { id: 2, name: 'NISHANT BHATT', role: '', image: '/nishant.png' },
    { id: 3, name: 'SARTHAK KUMAR', role: 'CC & Design Head', image: '/sarthak.png' },
    { id: 4, name: 'VIKRAM D', role: 'Event and Web Head', image: '/vikram.png' },
    { id: 5, name: 'SURYA', role: 'Event and Web Head', image: '/surya.png' },
    { id: 6, name: 'KHUSHI MATTA', role: 'PR & Design Head', image: '/khushi.png' },
    { id: 7, name: 'OM GUPTA', role: 'Operations Head', image: '/om.png' },
    { id: 9, name: 'ARJUN SHARMA', role: 'Media Head', image: '/arjun.png' },
    { id: 10, name: 'OMAS S', role: 'Event and PR Head', image: '/omas.png' },
    { id: 11, name: 'ARNAV S', role: 'Event and PR Head', image: '/arnav.png' },
    { id: 12, name: 'KHIZAR KHAN', role: 'Design Head', image: '/khizar.png' },
    { id: 13, name: 'SATYAM VIJAY PANDEY', role: 'Event and PR Head', image: '/satyam.png' },
  ];

  const faqs = [
    { 
      id: '01', 
      question: 'What is the Millionaire Elite Edition 2023?', 
      answer: "Millionaire Elite Edition 2023 is India's biggest entrepreneurship and investment event. It's a massive wealth-creation opportunity, it's a high-energy platform where aspiring entrepreneurs pitch their ideas and investment opportunities of up to 1 CR Crores in one day."
    },
    { 
      id: '02', 
      question: 'When and where is the event happening?',
      answer: "The event details will be announced soon. Stay tuned to our official channels for updates on date and venue."
    },
    { 
      id: '03', 
      question: 'What is "The Ten Minute Million"?',
      answer: "The Ten Minute Million (TTMM) is our flagship pitch event where entrepreneurs have ten minutes to present their ideas and potentially secure investment of up to 1 Crore."
    },
    { 
      id: '04', 
      question: 'What is the Investor Table?',
      answer: "The Investor Table is a panel of successful entrepreneurs and investors who evaluate the pitches and make investment decisions during the event."
    },
    { 
      id: '05', 
      question: 'What should I bring to the event?',
      answer: "Attendees should bring their event ticket, identification, business cards, and any promotional materials if they're presenting. Entrepreneurs pitching should bring their presentation materials."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-800 text-white">
      {/* Header */}
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
                background: "linear-gradient(to right, #9DE8EE, #FA7C0B, #9F8CED) border-box",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
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

      {/* Doubts Section */}
      <section className="bg-gradient-to-r from-[#7B0180] to-[#2E0075] p-8 text-center mx-4 md:mx-20 my-4 rounded-md">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Still Got Some Doubts?</h2>
        <p className="mb-6 text-white opacity-80 font-medium">We get it if you still have questions, we're here to help!</p>
        <button className="bg-transparent border border-white px-6 py-2 rounded-md hover:bg-white hover:text-purple-800 transition-colors">
          Reach Out To Us
        </button>
      </section>

      {/* Coordinators Section */}
      <section className="bg-gradient-to-r from-[#7B0180] to-[#2E0075] p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Coordinators</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20">
          {coordinators.map((coordinator) => (
            <div key={coordinator.id} className="border-2 p-4 rounded-lg flex flex-col items-center">
              <div className="w-full  mb-2">
                <img 
                  src={coordinator.image} 
                  alt={coordinator.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold">{coordinator.name}</h3>
              <p className="text-sm text-gray-300">{coordinator.role}</p>
              <button className="mt-2 hover:text-purple-300 transition-colors" aria-label={`Contact ${coordinator.name}`}>
                <Mail size={24} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="p-8 bg-black">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-white">FREQUENTLY ASKED</span>{' '}
          <span className="text-purple-500">QUESTIONS</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-t border-gray-700">
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openFAQ === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <div className="flex items-center">
                  <span className="text-gray-500 mr-4">{faq.id}</span>
                  <span>{faq.question}</span>
                </div>
                {openFAQ === faq.id ? (
                  <ChevronUp className="text-purple-500" />
                ) : (
                  <ChevronDown className="text-purple-500" />
                )}
              </button>
              {openFAQ === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="px-10 pb-4 text-gray-400">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CoordinatorsPage;