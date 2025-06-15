
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight, Star, Mail, Phone, MapPin, Send, User, MessageSquare, ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

import pp from '../image/ppp.PNG';
import ppj from '../image/ppj.PNG';
import bot from '../image/bot.png';
import tution from '../image/tution.jpeg';

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSending, setIsSending] = useState(false);

  const categories = ["All", "Web", "Embedded system"];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic input validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (formData.message.length > 1000) {
      toast.error("Message is too long. Please keep it under 1000 characters.");
      return;
    }
    if (formData.name.trim().length < 2) {
      toast.error("Please enter a valid name (at least 2 characters).");
      return;
    }
    if (formData.subject.trim().length < 3) {
      toast.error("Please enter a valid subject (at least 3 characters).");
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast.success("Thank you for your message! I'll get back to you soon.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          toast.error("Failed to send the message. Please try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  const services = [
    { title: "UI/UX Designer", icon: "🎨" },
    { title: "Web Developer", icon: "💻" },
    { title: "System Developer", icon: "⚙" },
    { title: "AI Enthusiast", icon: "🤖" },
    { title: "Embedded Systems & IoT Development", icon: "🧩" },
  ];

  const skillCards = [
    { title: "UI/UX Designing" },
    { title: "Web Development" },
    { title: "CI/CD Pipelines" },
    { title: "Infrastructure as Code" },
    { title: "Configuration Management" },
    { title: "Version Control (Git/GitHub)" },
    { title: "Embedded Systems" },
    { title: "IoT" },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Part time job management system",
      category: "Web",
      image: ppj,
      description: "I design and develop intuitive, user-friendly interfaces for the Part-Time Job Management System. The platform includes clean, responsive layouts for job seekers and employers, making it easy to post, browse, and apply for part-time opportunities. From dynamic dashboards to application tracking and messaging features, every screen is optimized for clarity and performance to ensure a smooth and professional user experience across devices.",
      technologies: ["react", "node js", "firebase"],
      liveUrl: "#",
      githubUrl: "https://github.com/KJRMalshan/test.git"
    },
    {
      id: 2,
      title: "ZapBot - The fast line follow robot",
      category: "Embedded system",
      image: bot,
      description: "I designed and developed a high-speed line-following robot for the DEXTRON Line Following Robot Competition, organized by the Institute of Technology, University of Moratuwa. The robot was engineered for precision and speed, using IR sensors, PID control algorithms, and efficient motor control to navigate complex tracks smoothly. Built with optimized hardware and embedded programming, it was tailored for competitive performance, showcasing my skills in robotics, electronics, and real-time automation.",
      technologies: ["C++", "PID"],
      liveUrl: "https://www.linkedin.com/posts/ndt-dextron_dextron2024-ndtroboticclub-ndtstudentunion-ugcPost-7268854128922054656-A_pF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3dpiABbr9OjSg3HSWewWV6r-9wMMNsPWc",
      githubUrl: "https://github.com/GaveenAnuranga/fastLineFollow.git"
    },
    {
      id: 3,
      title: "Tuition class management system",
      category: "Web",
      image: tution,
      description: "I create efficient and user-friendly Tuition Management Systems that simplify class scheduling, fee tracking, and student management for smooth and organized educational operations.",
      technologies: ["react", "node js", "mongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
  ];

  const filteredPortfolioItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "gvn.020601@gmail.com",
      link: "mailto:gvn.020601@gmail.com",
      hoverColor: "hover:text-blue-400 hover:shadow-blue-400/50"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+94 786979104",
      link: "tel:+94786979104",
      hoverColor: "hover:text-green-400 hover:shadow-green-400/50"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Diyagama, Homagama, Sri Lanka",
      link: "https://maps.app.goo.gl/mVfX6M314oPMXLUD8",
      hoverColor: "hover:text-red-400 hover:shadow-red-400/50"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <ToastContainer />
      <Header />
      {/* Hero Section */}
      <section id="home" className="px-4 lg:px-16 py-12 lg:py-20 pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">HEY, I'M </span>
                <span className="text-yellow-400">Gaveen</span>
                <span className="text-gray-900 dark:text-white">, A<br />Innovative DevOps Engineer.</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg leading-relaxed max-w-2xl">
                Hello, I'm Gaveen Anuranga, a DevOps Engineer from Sri Lanka. I have about one year of experience in building and optimizing CI/CD pipelines, automating infrastructure, and ensuring system reliability. I've earned certifications from Google and have hands-on experience deploying, monitoring, and improving web applications and cloud-based systems independently.
              </p>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center bg-gray-600 hover:bg-yellow-400 hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 group"
              >
                Contact Me
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            <div className="relative flex justify-center lg:justify-end top-0">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-yellow-400 rounded-3xl rotate-45 dark:opacity-20 opacity-70 hover:rotate-0 transition-transform duration-500"></div>
                <div className="absolute inset-4 bg-gray-200 dark:bg-gray-800 rounded-3xl rotate-0 border-4 border-gray-900 dark:border-white hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500"></div>
                <div className="relative top-6 left-12 lg:top-1 lg:left-8"><img src={pp} alt="Profile" className=" lg:w-80 w-56" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <div className="w-full bg-yellow-400 dark:bg-black py-6 overflow-hidden">
        <div className="flex items-center justify-center space-x-8 lg:space-x-16 animate-pulse">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-3 whitespace-nowrap">
              <span className="text-2xl">{service.icon}</span>
              <span className="text-lg lg:text-xl font-medium text-black dark:text-white">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="px-4 lg:px-16 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-2xl mb-12">
            Here are the skills I have earned.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {skillCards.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-6 lg:p-8 h-24 lg:h-28 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 hover:scale-105 cursor-pointer group"
              >
                <span className="text-lg lg:text-xl font-medium text-gray-900 dark:text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        </section>
        <section id="portfolio" className="px-4 lg:px-16 py-12 lg:py-20 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">My </span>
              <span className="text-yellow-400">Portfolio</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore my latest projects and creative works. Each project represents a unique challenge and solution, showcasing my skills in design, development, and creative problem-solving.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/30"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-yellow-400"
                }`}
                aria-selected={selectedCategory === category}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolioItems.length > 0 ? (
              filteredPortfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-4">
                        <a
                          href={item.liveUrl}
                          className="p-2 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-500 transition-colors duration-300"
                          title="View Live"
                        >
                          <Eye className="w-5 h-5" />
                        </a>
                        <a
                          href={item.githubUrl}
                          className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300"
                          title="View Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-yellow-400 font-medium">
                        {item.category}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-600 dark:text-gray-400">
                No projects found for this category.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 lg:px-16 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Get In </span>
              <span className="text-yellow-400">Touch</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together. I'm always excited to work on new challenges and help businesses grow through great design.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                  Feel free to reach out through any of the following methods. I typically respond within 24 hours.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={`flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:shadow-lg ${info.hoverColor} group`}
                  >
                    <div className="flex-shrink-0">
                      <info.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-current transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-current transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-current transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Why Work With Me?
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span>1+ years of professional experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span>Fast turnaround times</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span>Unlimited revisions</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400/50 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400/50 transition-all duration-300"
                        placeholder="g.email@gmail.com"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400/50 transition-all duration-300"
                    placeholder="Project Discussion"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400/50 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isSending ? "bg-yellow-400/50 text-gray-900 cursor-not-allowed" : "bg-yellow-400 hover:bg-yellow-500 text-gray-900 hover:shadow-lg hover:shadow-yellow-400/50"
                  }`}
                >
                  {isSending ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
