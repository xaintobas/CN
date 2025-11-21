import { Mail, Phone, MapPin, Send } from "lucide-react";

function Connect() {
  return (
    <div className="pt-0">
      <section className="bg-white py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-25">
            <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-5xl font-bold mb-6 text-dark-900">
              Connect With Us
            </h1>
            <p className="text-xl text-gray-600">
              Ready to start your next project? We're here to help you turn your
              vision into reality.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold text-dark-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase mb-1">
                        Phone
                      </p>
                      <p className="text-dark-900 font-semibold">
                        +234 815 507 1646
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase mb-1">
                        Email
                      </p>
                      <p className="text-dark-900 font-semibold">
                        hello@codenation.website
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase mb-1">
                        Office
                      </p>
                      <p className="text-dark-900 font-semibold">
                        Benin City, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="flex items-center gap-2">
                    <MapPin /> Map View
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-2/3 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-dark-900 mb-8">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-gray-600">
                    <option>General Inquiry</option>
                    <option>Project Quote</option>
                    <option>Partnership</option>
                    <option>Careers</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-green-600/30 flex items-center justify-center gap-2">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Connect;
