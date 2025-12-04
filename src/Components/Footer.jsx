import {
  Download,
  Gamepad2,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Star,
} from "lucide-react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <Container>
        <div className="py-12 px-3">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Gamepad2 className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Gamehub
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your ultimate destination for discovering and managing amazing
                games and apps. Join millions of gamers in exploring the best
                digital entertainment.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-1 text-purple-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm">4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-1 text-green-400">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">10M+ Downloads</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/games"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/apps"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    Apps
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center space-x-2"
                  >
                    <Gamepad2 className="w-4 h-4" />
                    <span>Action Games</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center space-x-2"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Mobile Apps</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    Puzzle Games
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    Social Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    Productivity
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">support@gamehub.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">123 Game Street, Digital City</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-6 mr-2">
                <h5 className="text-sm font-medium text-white mb-2">
                  Stay Updated
                </h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-md text-white text-sm focus:outline-none focus:border-purple-400"
                  />
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-r-md transition-colors duration-200 text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {/* twitter */}
            <a
              href="https://x.com/rirony98"
              className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
              aria-label="Twitter"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current text-gray-300 group-hover:text-white"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            {/* youtube */}
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current text-gray-300 group-hover:text-white"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            {/* facebook */}
            <a
              href="https://www.facebook.com/rirony9898/"
              className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
              aria-label="Facebook"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current text-gray-300 group-hover:text-white"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            {/* instagram */}
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current text-gray-300 group-hover:text-white"
              >
                <path d="M12.017 0c-6.351 0-11.5 5.149-11.5 11.5s5.149 11.5 11.5 11.5 11.5-5.149 11.5-11.5-5.149-11.5-11.5-11.5zm5.505 8.34c-.176.781-.533 1.312-1.052 1.828-.406.406-.89.664-1.438.816-.676.196-2.187.196-3.016 0-.646-.152-1.13-.41-1.536-.816-.519-.516-.876-1.047-1.052-1.828-.098-.434-.098-1.412 0-1.846.176-.781.533-1.312 1.052-1.828.406-.406.89-.664 1.438-.816.676-.196 2.187-.196 3.016 0 .646.152 1.13.41 1.536.816.519.516.876 1.047 1.052 1.828.098.434.098 1.412 0 1.846zm-3.505 6.16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0-4.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" />
              </svg>
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-8 px-2">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                Copyright © {new Date().getFullYear()} Gamehub. All rights
                reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
