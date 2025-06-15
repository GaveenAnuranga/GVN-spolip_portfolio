import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "Skills", href: "#skills" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full h-20 lg:h-24 bg-gray-100/95 dark:bg-gray-800/95 backdrop-blur-sm flex items-center justify-between px-4 lg:px-16 z-50 transition-colors duration-300">
      <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center group">
        <div className="w-7 h-7 bg-yellow-400 rounded-md mr-2 group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300"></div>
        <div className="text-lg lg:text-xl font-bold">
          <span className="text-gray-900 dark:text-gray-100">GVN's</span>
          <span className="text-yellow-400">polio</span>
        </div>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
            className="relative text-lg font-medium transition-all duration-300 hover:text-yellow-400 text-gray-600 dark:text-gray-400 group"
          >
            {link.title}
            <span className="absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 w-0 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
        </button>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
          className="bg-gray-600 hover:bg-yellow-400 hover:text-gray-900 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30"
        >
          Let's Talk
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center space-x-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-900 dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-100/95 dark:bg-gray-800/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 lg:hidden transition-colors duration-300">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-lg font-medium transition-all duration-300 hover:text-yellow-400 text-gray-600 dark:text-gray-400"
              >
                {link.title}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="bg-gray-600 hover:bg-yellow-400 hover:text-gray-900 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;