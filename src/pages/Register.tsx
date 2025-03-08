import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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

export const RegisterPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <div id="home" className="relative py-24 md:py-32 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold uppercase">
            Membership & Pricing
          </h1>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-primary">
              Starting at $50/Mo
            </h2>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">New Patient Fees</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>$150</strong> cover all children in a household with
                    telemedicine membership sign up
                    <br />
                    <strong>$150</strong> per child without telemedicine sign up
                  </li>
                  <li>
                    <strong>$150</strong> per adult
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">Office Visit</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>$100</strong> per visit (telemedicine or in person)
                    per patient
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Telemedicine Membership
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>$65</strong> a month covers all children in a
                    household*
                    <br />
                    <strong>$50</strong> a month for first adult and{" "}
                    <strong>$45</strong> for each additional adult in the same
                    household
                    <br />
                    Unlimited telemedicine visits
                    <br />
                    Direct texting/calling access to your doctor
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  * ages 0-18 (and 19-24 if they are full-time students or
                  living at home)
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">Details</h4>
                <p className="text-base">
                  At our office, we are dedicated to providing quality,
                  personalized care for both pediatric and adult patients. For
                  more information, please review our{" "}
                  <a
                    href="/documents/Adult-and-Pediatric-Patient-Agreement-2024.pdf"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    Patient Agreement
                  </a>
                  .
                </p>
                <p className="text-base mt-4">
                  If you have more questions and want to discuss, please send a
                  message below and we will contact you.
                </p>
                <p className="text-base mt-4">
                  Dr. Rife & Dr. Kohl look forward to caring for you and your
                  family!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Forms Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Registration Form */}
            <motion.div
              {...fadeInDelay(0.1)}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-center mb-6 uppercase">
                Registration Form
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="number"
                      name="kids"
                      placeholder="Number of Kids"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>

            {/* More Information Form */}
            <motion.div
              {...fadeInDelay(0.2)}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-center mb-6">
                For more information
              </h3>
              <form
                action="https://formspree.io/f/xbjvepzy"
                method="post"
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="Phone"
                    placeholder="Phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="How-Many-Children"
                    placeholder="How Many Children"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="Hear-About"
                    placeholder="How did you hear about us?"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
                  >
                    Request a call
                  </button>
                </div>
              </form>
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
