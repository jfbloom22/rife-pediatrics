import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

// Import images - use relative paths instead of alias paths
import logoImage from "../assets/images/rifelogov2.png";
import babyImage from "../assets/images/_DSC6072.webp";
import rifeChildrenImage from "../assets/images/Rife4519.jpg";

// Animation variants
const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const fadeInDelay = (delay: number) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="mb-8 max-w-xs">
              <img
                src={logoImage}
                alt="Rife Pediatrics"
                className="w-full h-auto max-h-40"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <Link
                to="/register"
                className="px-8 py-3 bg-primary text-white rounded font-semibold hover:bg-primary/90 transition-colors"
              >
                Register
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn} className="text-left">
              <h5 className="text-2xl font-bold mb-4">
                <span className="text-primary">Direct</span> Primary Care
              </h5>
              <p className="text-xl font-semibold mb-4">Truly Personalized</p>
              <p className="text-base">
                Rife Pediatric and Family Care gives you virtual access to your
                doctor when you need it without the hassles of a regular medical
                practice. Get your questions answered and feel confident about
                your family's health.
              </p>
            </motion.div>
            <div className="hidden md:block relative">
              <div className="max-w-sm mx-auto">
                <motion.img
                  {...fadeIn}
                  src={babyImage}
                  alt="Baby with stethoscope"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <motion.div
                  {...fadeInDelay(0.3)}
                  className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary"
                ></motion.div>
                <motion.div
                  {...fadeInDelay(0.4)}
                  className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-primary"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto">
            <h5 className="text-2xl font-bold mb-4">
              why <span className="text-primary">choose</span> us
            </h5>
            <p className="text-xl font-semibold mb-4">
              It's like having a doctor in the family
            </p>
            <p className="text-base">
              Imagine <strong>contacting your doctor directly</strong> by
              phone/text/email to get your questions answered and have peace of
              mind about your family's health. Telemedicine visits over video
              from the comfort of your home. Real personalized care tailored to
              your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="grid grid-cols-1 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold mb-3">
                    Same Day Telemedicine Appointments
                  </h3>
                  <p>
                    Dr. Rife and Dr. Kohl will have time to spend with you and
                    to listen and determine the treatment that best fits your
                    family's needs
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold mb-3">Call 24/7</h3>
                  <p>
                    Having a personal doctor means you have the ability to
                    contact your child's doctor anytime to have urgent questions
                    answered
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="hidden md:block md:col-span-1 relative">
              <div className="max-w-sm mx-auto h-full flex items-center">
                <motion.img
                  {...fadeIn}
                  src={rifeChildrenImage}
                  alt="Rife Children"
                  className="rounded-lg shadow-lg w-full h-auto object-cover max-h-96"
                />
                <motion.div
                  {...fadeInDelay(0.3)}
                  className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary"
                ></motion.div>
                <motion.div
                  {...fadeInDelay(0.4)}
                  className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-primary"
                ></motion.div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="grid grid-cols-1 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold mb-3">Virtual Visits</h3>
                  <p>
                    With a membership you are never worrying about the cost when
                    your family is sick. Call in as often as you need to make
                    sure everyone is healthy
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold mb-3">
                    Free Prenatal Consultation
                  </h3>
                  <p>
                    Call to visit with the doctor and feel confident about how
                    to care for your new precious baby
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register Section */}
      <section id="register" className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Membership
          </motion.h3>
          <Link
            to="/register"
            className="px-8 py-3 bg-primary text-white rounded font-semibold hover:bg-primary/90 transition-colors"
          >
            Register
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="h-96 md:h-auto rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.0668511323897!2d-95.62726!3d30.0891116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86473a7f2d0e5555%3A0x5c2b8b95a5c86285!2s455%20School%20St%20%2330%2C%20Tomball%2C%20TX%2077375!5e0!3m2!1sen!2sus!4v1709911234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-center md:text-left">
                Contact
              </h3>
              <form
                action="https://formspree.io/f/mgejbpnv"
                method="post"
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="Name-4"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="Phone"
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="Email-2"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea
                    name="Message-2"
                    placeholder="Enter your message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <div>
                  <select
                    name="Location"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select location...</option>
                    <option value="Tomball">Tomball</option>
                    <option value="Linden">Linden</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  For health questions about your child, please call.
                </p>
              </form>

              <div className="mt-8">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://goo.gl/maps/96fFuZ8iTrivpPhJ7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      125 W Houston St, Linden, TX 75563
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://goo.gl/maps/UVwd5o2Ukzgjk2SE8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      455 School Street, Suite 30, Tomball, Tx 77375
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:281-729-4414"
                      className="flex items-center text-gray-700 hover:text-primary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      281-729-4414
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      FAX: 281-942-1220
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
