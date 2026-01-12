import React from "react";
import "./Connect.css";

const Connect = () => {
  return (
    <div className="connect-page">
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="text-column">
              <span className="eyebrow">Get in Touch</span>
              <h1 className="main-heading">
                Let's Talk <br /> <span className="highlight">Innovation.</span>
              </h1>
              <p className="intro-text">
                Have a question about our trainings, or want to partner with us
                for enterprise solutions? We're just a message away.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="icon-box">
                    <svg
                      className="icon-svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="item-title">Email Us</h4>
                    <p className="item-subtitle">hello@codenation.academy</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-box">
                    <svg
                      className="icon-svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="item-title">Our HQ</h4>
                    <p className="item-subtitle">
                      Suite 12, Digital Plaza, Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                {["linkedin", "twitter", "github"].map((s) => (
                  <div key={s} className="social-icon">
                    {s[0]}
                  </div>
                ))}
              </div>
            </div>

            <div className="form-wrapper">
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select className="form-input">
                    <option>Admission Inquiry</option>
                    <option>Enterprise Solution</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    rows={4}
                    className="form-input"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                <button className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="map-section">
        <div className="map-overlay">
          <div className="map-card">
            <p className="map-label">
              <span className="ping-dot"></span>
              Code Nation Digital Hub
            </p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop"
          className="map-image"
          alt="Map View"
        />
      </section>
    </div>
  );
};

export default Connect;

// import { Mail, Phone, MapPin, Send } from "lucide-react";

// function Connect() {
//   return (
//     <div className="pt-0">
//       <section className="bg-white py-12 md:py-20 px-4">
//         <div className="container mx-auto">
//           <div className="text-center max-w-3xl mx-auto mb-25">
//             <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-4 block">
//               Get In Touch
//             </span>
//             <h1 className="text-5xl font-bold mb-6 text-dark-900">
//               Connect With Us
//             </h1>
//             <p className="text-xl text-gray-600">
//               Ready to start your next project? We're here to help you turn your
//               vision into reality.
//             </p>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
//             {/* Contact Info */}
//             <div className="w-full lg:w-1/3 space-y-8">
//               <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
//                 <h3 className="text-xl font-bold text-dark-900 mb-6">
//                   Contact Information
//                 </h3>
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
//                       <Phone size={20} />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500 font-medium uppercase mb-1">
//                         Phone
//                       </p>
//                       <p className="text-dark-900 font-semibold">
//                         +234 815 507 1646
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
//                       <Mail size={20} />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500 font-medium uppercase mb-1">
//                         Email
//                       </p>
//                       <p className="text-dark-900 font-semibold">
//                         hello@codenation.website
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
//                       <MapPin size={20} />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500 font-medium uppercase mb-1">
//                         Office
//                       </p>
//                       <p className="text-dark-900 font-semibold">
//                         Benin City, Nigeria
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Map Placeholder */}
//               <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
//                 <div className="absolute inset-0 flex items-center justify-center text-gray-400">
//                   <span className="flex items-center gap-2">
//                     <MapPin /> Map View
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Form */}
//             <div className="w-full lg:w-2/3 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
//               <h3 className="text-2xl font-bold text-dark-900 mb-8">
//                 Send us a Message
//               </h3>
//               <form className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-gray-700">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
//                       placeholder="John"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-gray-700">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
//                       placeholder="Doe"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-gray-700">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
//                     placeholder="john@example.com"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-gray-700">
//                     Subject
//                   </label>
//                   <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-gray-600">
//                     <option>General Inquiry</option>
//                     <option>Project Quote</option>
//                     <option>Partnership</option>
//                     <option>Careers</option>
//                   </select>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-gray-700">
//                     Message
//                   </label>
//                   <textarea
//                     rows={5}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
//                     placeholder="Tell us about your project..."
//                   ></textarea>
//                 </div>
//                 <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-green-600/30 flex items-center justify-center gap-2">
//                   <Send size={18} /> Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// export default Connect;
