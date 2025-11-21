import { Code2, Phone, Mail, MapPin } from "lucide-react";
import { FooterLogo } from "../assets/Assets";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <FooterLogo />
            </div>
            <p className="text-sm leading-relaxed text-stone-400">
              We design and build custom websites and software solutions that
              drive growth, engage users, and deliver real business results.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Mobile Apps",
                "UI/UX Design",
                "Web Development",
                "Software Development",
                "SEO Optimization",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-green-500 transition-colors duration-200 flex items-center gap-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Who We Are",
                "What We Do",
                "Learn With Us",
                "Connect With Us",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-green-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-green-500 shrink-0" />
                <span>+234 815 507 1646</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-green-500 shrink-0" />
                <span>hello@codenation.website</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-green-500 shrink-0 mt-0.5" />
                <span>Benin City, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
          <p>&copy; {currentYear} CodeNation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
