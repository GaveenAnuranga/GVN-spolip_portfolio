import { Facebook, Instagram } from "lucide-react";

function Footer() {
  const footerLinks = [
    { title: "HOME", href: "#home" },
    { title: "SKILLS ", href: "#skills" },
    { title: "PORTFOLIO", href: "#portfolio" },
    { title: "CONTACT", href: "#contact" },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      url: "https://www.facebook.com/gaveen.anuranga.7", 
      label: "Facebook",
      hoverColor: "hover:text-blue-500 hover:shadow-blue-500/50"
    },

    { 
      icon: Instagram, 
      url: "https://www.instagram.com/gvn_anuranga?igsh=MW1zdmJoZHAxNzc4Yg==e", 
      label: "Instagram",
      hoverColor: "hover:text-pink-500 hover:shadow-pink-500/50"
    },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-gray-200 dark:bg-gray-800 py-8 lg:py-12 px-4 lg:px-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-8 w-full">
          {/* Logo and Contact Button */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center group">
              <div className="w-10 h-10 bg-yellow-400 rounded-md mr-3 group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300"></div>
              <div className="text-2xl font-bold">
                <span className="text-gray-900 dark:text-gray-100">GVN's</span>
                <span className="text-yellow-400">polio</span>
              </div>
            </a>
            
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="border-2 border-gray-400 dark:border-gray-600 hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30"
            >
              Contact Us
            </a>
          </div>

          <div className="w-30 lg:w-1 h-1 lg:h-30 bg-gray-400 dark:bg-gray-600 mb-6 hidden lg:block"></div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center lg:items-start">
            <nav className="flex flex-col space-y-4">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 text-lg font-medium transition-all duration-300 hover:translate-x-2"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="w-1 h-30 bg-gray-400 dark:bg-gray-600 mb-6 hidden lg:block"></div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center lg:items-center">
            <div className="flex flex-col space-y-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-300 transition-all duration-300 hover:shadow-lg ${social.hoverColor}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 GVN's. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;