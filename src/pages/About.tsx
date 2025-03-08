import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

// Import images
import infantImage from "../assets/images/Rife4616.jpg";
import babyFeetImage from "../assets/images/Rife4626.jpg";

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

export const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <div id="home" className="relative py-24 md:py-32 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-3xl md:text-4xl font-bold uppercase">ABOUT</div>
        </div>
      </div>

      {/* Direct Primary Care Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Direct Primary Care
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block relative">
              <div className="max-w-sm mx-auto">
                <motion.img
                  {...fadeIn}
                  src={infantImage}
                  alt="Infant"
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

            <motion.div {...fadeIn} className="text-left">
              <h5 className="text-2xl font-bold mb-4">Back to the basics</h5>
              <p className="text-xl font-semibold mb-4">
                Direct Primary Care is
              </p>
              <p className="text-base mb-4">
                an innovative new way to deliver unlimited access to primary
                care for people of all ages and incomes outside of the
                entanglements of third party fee for service billing. With DPC,
                individuals pay the doctor a periodic fee directly for unlimited
                access to primary care and prevention services. This means no
                phone tree to get to the doctor, no waiting at appointments, no
                confusion about how much it will cost, no rushed visits.
              </p>
              <p className="text-base">
                It's just a doctor caring for patients the way they deserve to
                be cared for.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Telemedicine Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Telemedicine</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block relative">
              <div className="max-w-sm mx-auto">
                <motion.img
                  {...fadeIn}
                  src={babyFeetImage}
                  alt="Baby feet"
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

            <motion.div {...fadeIn} className="text-left md:order-first">
              <h5 className="text-2xl font-bold mb-4">
                Telemedicine can care for:
              </h5>
              <ul className="space-y-1 list-none">
                <li>Cough and cold</li>
                <li>Fever</li>
                <li>ADHD</li>
                <li>Depression</li>
                <li>Anxiety</li>
                <li>Allergies</li>
                <li>Cuts and abrasions</li>
                <li>Flu symptoms</li>
                <li>Sinus infections</li>
                <li>Insect bites</li>
                <li>Rash</li>
                <li>Vomiting and diarrhea</li>
                <li>Pink Eye</li>
                <li>Asthma</li>
                <li>Breathing problems</li>
                <li>Ear infections (with digital Otoscope)</li>
                <li>Musculoskeletal injuries</li>
                <li>Concussions</li>
                <li>And much more</li>
              </ul>
            </motion.div>
          </div>
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
