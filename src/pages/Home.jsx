import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css'; // adjust path if needed
import { Link } from 'react-router-dom';


const testimonials = [
  {
    title: "Thank you ATOS",
    text: "I completed my SAP HCM certification from ATOS and got a job in ATOS Mumbai now. I am extremely happy that ATOS kept their words regarding placement after certification. Special thanks to Saurabh Palsule who helped me a lot till...",
    name: "Pratyay Bal",
    course: "SAP HCM",
    image: "/avatar.jpg"
  },
  {
    title: "Very Good",
    text: "It’s authentic place to do SAP Global Certification. Management is extremely supportive. They provide good job placement opportunities which are authentic and genuine. IT infrastructure is top class. Institute staff is supporting and always ready to help.",
    name: "Ranjeet Patil",
    course: "SAP MM",
    image: "/avatar.jpg"
  },
  {
    title: "Great Job!",
    text: "Atos SAP training center is well managed and equipped with knowledgeable staff and trainer, counsellors are good to suggest you right module as per experience and academics, after completion of course the institute is very good.",
    name: "Kishore Rane",
    course: "SAP SD",
    image: "/avatar.jpg"
  },
  {
    title: "Great Experience",
    text: "The training quality at Atos is outstanding. The trainers are experienced, and the support staff is always ready to help. The placement process was transparent and effective.",
    name: "Anjali Sharma",
    course: "SAP FICO",
    image: "/avatar.jpg"
  }
];

const testimonials2 = [
  {
    title: "SAP FICO Certification Training Course",
    description: "Financial Accounting in SAP S/4HANA training is for new...",
    image: "/sd.jpg",
    link: "/about"
  },
  {
    title: "SAP EWM Training & Certification Course",
    description: "Learn how to efficiently manage inventory in the Warehouse and fo...",
    image: "/fico.jpg",
    link: "/contact"
  },
  {
    title: "SAP MM Training & Certification Course",
    description: "Learn about sourcing and procurement in SAP S/4HANA, it’s...",
    image: "/evm.png",
    link: "/about"
  },
  {
    title: "SAP CO Training & Certification",
    description: "This program is aimed toward new consultants who want to obtain a...",
    image: "/mm.jpg",
    link: "/about"
  },
  {
    title: "SAP SD Training & Certification Course",
    description: "Obtain an overview and upskilling knowledge for SAP S/4HANA and...",
    image: "/co.jpg",
    link: "/about"
  },
];

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const groupedTestimonials2 = chunkArray(testimonials2, 4);

const Home = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [coursePageIndex, setCoursePageIndex] = useState(0);
  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const currentTestimonials = testimonials.slice(
    pageIndex * testimonialsPerPage,
    pageIndex * testimonialsPerPage + testimonialsPerPage
  );

  const [activeTab, setActiveTab] = useState('individuals');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'individuals':
        return (
          <>
            <h3 className="font-bold mb-2">Transform with SAP for better tomorrow</h3>
            <p className="mb-4 text-gray-700">SAP programs offered to individuals...</p>
            <h4 className="font-semibold mb-2">Our SAP Training programs are offered as</h4>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Classroom Training</li>
              <li>Online Training</li>
              <li>Self paced Learning with LH</li>
              <li>Custom batches for learning convenience</li>
            </ul>
          </>
        );
      case 'corporates':
        return (
          <>
            <h3 className="font-bold mb-2">Empower and Upskill your Team with Tailored SAP Trainings</h3>
            <p className="mb-4 text-gray-700">Eviden (Atos) offers tailored SAP training...</p>
            <h4 className="font-semibold mb-2">Our offerings to the Corporates</h4>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>SAP Business User Training</li>
              <li>Standard SAP Courses</li>
              <li>Customized SAP trainings (Technical / Non-technical)</li>
              <li>Learning Hubs & Certification Hubs</li>
            </ul>
          </>
        );
      case 'colleges':
        return (
          <>
            <h3 className="font-bold mb-2">Bridge the Academia-Industry Gap with SAP University Alliances</h3>
            <p className="mb-4 text-gray-700">Atos is thrilled to extend an exclusive partnership opportunity...</p>
            <h4 className="font-semibold mb-2">Why Partner with Atos?</h4>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Structured and organized training</li>
              <li>SAP defined curriculum and courseware</li>
              <li>Ensure the right mix of process, product and business function knowledge</li>
              <li>Blend theory with practical experience</li>
              <li>Access to SAP Learning Hub to facilitate continuous learning</li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
  className="relative w-full h-[500px] sm:h-[300px] md:h-[400px] text-white"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  style={{
    backgroundImage: 'url("/sappp.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 text-left">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">NEXTGEN</h1>
    <p className="text-xs sm:text-sm md:text-base">SAP ACADEMY</p>
  </div>

  <div className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center px-2 sm:px-4">
    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
      NextGen SAP Training & Education
    </h2>
    <p className="text-sm sm:text-lg md:text-2xl">
      Trusted partner for your Digital Journey
    </p>
  </div>

  <div className="hidden sm:block absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-teal-900 text-white py-2 px-4 rounded-l-md rotate-90 origin-top-right">
    Quick Connect
  </div>
</motion.div>


      {/* SAP Training Services Section */}
      <section className="bg-gray-100 py-10 px-4 sm:px-6 md:px-10 lg:px-16 relative z-0">
  <div className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg relative z-10 flex flex-col md:flex-row items-center gap-8">
    
    {/* Text Section */}
    <div className="flex-1 w-full">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center md:text-left">
        <span className="text-orange-500">SAP</span> Training Services
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
        {['individuals', 'corporates', 'colleges'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded text-sm sm:text-base ${
              activeTab === tab
                ? 'bg-teal-900 text-white'
                : 'border border-teal-900 text-teal-900'
            }`}
          >
            {tab === 'individuals' && 'Individuals'}
            {tab === 'corporates' && 'Corporates'}
            {tab === 'colleges' && 'Colleges/Universities'}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{renderTabContent()}</div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
        {/* <button className="border border-gray-600 px-4 py-2 rounded hover:bg-gray-200 text-sm sm:text-base">
          Download brochure
        </button> */}
        <button className="border border-gray-600 px-4 py-2 rounded hover:bg-gray-200 text-sm sm:text-base">
          Enquire now
        </button>
        <button className="border border-gray-600 px-4 py-2 rounded hover:bg-gray-200 text-sm sm:text-base">
          Email us
        </button>
      </div>
    </div>

    {/* Image Section */}
    <div className="relative w-full max-w-sm mx-auto mt-8">
  {/* Back blue rotated rectangle */}
  <div className="absolute inset-0 flex items-center justify-center z-0">
    <div className="w-[75%] h-[70%] bg-[#002B3F] rounded-[2rem] transform -rotate-[10deg] animate-spin-slow"></div>
  </div>

  {/* Front orange rotated rectangle */}
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <div className="w-[65%] h-[70%] bg-[#FF6D3F] rounded-[2rem] transform rotate-[-5deg] "></div>
  </div>

  {/* Foreground image - smaller and centered */}
  <div className="relative z-20 flex justify-center items-center">
    <img
      src="/girl.png"
      alt="SAP Training"
      className="w-[70%] object-contain"
    />
  </div>
</div>

  </div>
</section>


      {/* Why Choose SAP Education Services Section */}
      <section className="w-full bg-[#e9f0f8] py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:py-18 items-center gap-10 relative">
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <div className="absolute w-96 h-96 rounded-full"></div>
            <div className="absolute w-72 h-72 bg-[#033b4a] rounded-full z-0"></div>
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
  {/* Base circle */}
  <div className="absolute w-64 h-64 md:w-96 md:h-96 border border-gray-300 rounded-full"></div>
  
  {/* Background blob */}
  <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-[#033b4a] rounded-full z-0"></div>

  {/* Galaxy Ring */}
  <div className="galaxy-ring w-64 h-64 md:w-96 md:h-96"></div>

  {/* Spinning Dots */}
  <div className="dot-orbit w-64 h-64 md:w-96 md:h-96">
    <div className="dot" style={{ top: "0%", left: "50%", transform: "translate(-50%, -50%)" }}></div>
    <div className="dot" style={{ bottom: "0%", left: "50%", transform: "translate(-50%, 50%)" }}></div>
    <div className="dot" style={{ left: "0%", top: "50%", transform: "translate(-50%, -50%)" }}></div>
    <div className="dot" style={{ right: "0%", top: "50%", transform: "translate(50%, -50%)" }}></div>
  </div>

  {/* Main Image */}
  <img
    src="/girl2.png"
    alt="Eviden Student"
    className="relative z-10 w-44 md:w-64"
  />
</div>


          </div>

          <div className="w-full md:w-1/2 space-y-4 text-gray-800">
            <h2 className="text-3xl md:text-4xl mt-6 font-semibold">
              Why Choose SAP Education Services <br />
              <span className="text-orange-500">@Atos</span>?
            </h2>
            <ul className="space-y-3 pt-2 text-base">
              <li className="flex items-start gap-2">
                <span className="text-orange-500">✔</span> Exclusive Recruitment Partner for Atos
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">✔</span> High placement ratio
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">✔</span> First & leading SAP Education partner with 20+ years of legacy
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">✔</span> Consistent Awards for performance & excellence year by year by SAP
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">✔</span> 4 SAP Knowledge hubs in India
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">✔</span> Quality Driven – ISO 9001:2008 certified
              </li>
            </ul>
            <button className="mt-4 bg-[#033b4a] text-white px-6 py-2 rounded hover:bg-[#022d3a]">
              Know More
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <motion.div className="about-page px-6 py-10" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Success stories and <span className="text-orange-500">student feedbacks</span>
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={pageIndex}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {currentTestimonials.map((item, idx) => (
                <div key={idx} className="bg-white shadow-md p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.text}</p>
                  <div className="flex items-center space-x-4">
                  <img
  src={item.image || '/default-avatar.png'}
  alt={item.name}
  className="w-12 h-12 rounded-full object-cover"
/>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.course}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 space-x-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPageIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  pageIndex === i ? 'bg-orange-500 scale-125' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Courses Section */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Popular <span className="text-orange-500">Courses</span>
        </h2>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={coursePageIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {groupedTestimonials2[coursePageIndex].map((course, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{course.description}</p>
                    {/* <li><Link to="/about" className="hover:underline">About</Link></li> */}
                    <button className="mt-4 px-4 py-2 bg-slate-900 text-white text-sm rounded-md hover:bg-slate-700">
                      <Link to={course.link}>
                      Read More
                      </Link></button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 py-6 space-x-3">
            {groupedTestimonials2.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCoursePageIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === coursePageIndex ? 'bg-gray-900 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
