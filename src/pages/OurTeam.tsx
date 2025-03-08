import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Import images
import bethanyImage from "@/assets/images/LV1A3174.webp";
import danielImage from "@/assets/images/Daniel_012x.webp";
import nicoleImage from "@/assets/images/nicole-hoff.webp";
import guptaImage from "@/assets/images/dr-gupta.webp";

// Animation variants for consistent animations
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

export const OurTeamPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <div id="home" className="relative py-24 md:py-32 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-3xl md:text-4xl font-bold uppercase">
            OUR TEAM
          </div>
        </div>
      </div>

      {/* Choose Your Doc Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Choose Your Doc
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dr. Bethany Rife */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-left">
              <h4 className="text-xl font-bold mb-4">Dr. Bethany Rife</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Pediatric specialist offering both telemedicine and in-person
                  care in Tomball
                </li>
                <li>
                  Focuses on providing real medical care without insurance
                  interference
                </li>
                <li>Monthly in-person visits available in Tomball</li>
                <li>Faith-based approach to pediatric care</li>
              </ul>
            </div>

            {/* Dr. Daniel Kohl */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-left">
              <h4 className="text-xl font-bold mb-4">Dr. Daniel Kohl</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Holistic telemedicine care for pediatric and adult members
                </li>
                <li>
                  Virtual functional medicine consultations available for any
                  patients
                </li>
                <li>
                  Trained through the Institute for Functional Medicine and Mast
                  Cell 360 Mold Masters
                </li>
                <li>Bilingual (English/Spanish)</li>
                <li>
                  Special interest in nutrition, supplements, sports medicine,
                  and functional medicine
                </li>
              </ul>
            </div>

            {/* Nicole Hoff, PA */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-left">
              <h4 className="text-xl font-bold mb-4">Nicole Hoff, PA</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Primary care for adults and children of all ages</li>
                <li>Faith-based mental healthcare services</li>
                <li>Trauma-informed women's health care</li>
                <li>
                  Extensive background in maternal health and lactation (IBCLC
                  certified)
                </li>
                <li>
                  Integrates ACEs screening and mental health into primary care
                </li>
              </ul>
            </div>

            {/* Dr. Avani Gupta */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-left">
              <h4 className="text-xl font-bold mb-4">Dr. Avani Gupta</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Board Certified Family Physician offering osteopathic
                  manipulative treatment (OMT)
                </li>
                <li>
                  Specializes in disorders of the skin and musculoskeletal
                  system
                </li>
                <li>
                  Hands-on treatment including muscle energy, myofascial
                  release, and craniosacral modalities
                </li>
                <li>Focus on preventive care and whole-patient treatment</li>
                <li>Values patient autonomy and medical freedom</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Bethany Rife Bio */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Dr. Bethany Rife
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block relative">
              <motion.img
                {...fadeIn}
                src={bethanyImage}
                alt="Bethany Rife"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto h-auto object-cover"
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
            <motion.div {...fadeIn} className="text-left">
              <h5 className="text-2xl font-bold mb-4">Bio</h5>
              <p className="mb-4">
                Dr. Rife grew up in Tomball, Texas and attended Rosehill
                Christian and Tomball high schools. After completing a BS at
                Texas A&M she was admitted to UTMB at Galveston for medical
                school. Her pediatric residency was back at a Texas A&M program
                at Scott & White in Temple, Texas.
              </p>
              <p className="mb-4">
                When training was completed, Dr. Rife returned home to work with
                a local clinic for 7 years. Even with a great job, there were
                things in the medical system that got in the way of patient
                care. The insurance companies were running the show. Dr. Rife
                has decided the best way to offer real care to patients is to
                run her own show and Rife Pediatrics began in 2020.
              </p>
              <p className="mb-4">
                About the same time Dr. Rife and her family felt called to move
                to a farm in East Texas. Her husband is working hard to run a
                pasture raised meat chicken and beef production farm. Since Dr.
                Rife is living in East Texas, the practice has become a
                telemedicine clinic. Dr. Rife travels back to Tomball for a few
                days EVERY month to see patients and keep in touch with family
                in the area.
              </p>
              <p className="mb-4">
                With so many families in the Tomball area that Dr. Rife wants to
                continue to care for and help, she feels blessed to have this
                opportunity to provide real medical care for your children. Dr.
                Rife stays busy homeschooling 4 of her children while chasing
                her toddler around and helping on the farm. God has generously
                provided his guidance every step of the way. To God be the
                glory!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dr. Daniel Kohl Bio */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Dr. Daniel Kohl
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block relative">
              <motion.img
                {...fadeIn}
                src={danielImage}
                alt="Daniel Kohl"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto h-auto object-cover"
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
            <motion.div {...fadeIn} className="text-left md:order-first">
              <h5 className="text-2xl font-bold mb-4">Bio</h5>
              <p className="mb-4">
                Dr. Daniel Kohl was born and raised in Cedarville, a small
                college town in Ohio. He became interested in medicine while on
                several medical-mission trips to Philadelphia, India, Nepal, and
                Paraguay. He eagerly pursued a pre-medical education at
                Cedarville University, including minors in Bible and Spanish. In
                2016, Dr. Kohl earned his Bachelor of Science degree in
                molecular and cellular biology with highest honor.
              </p>
              <p className="mb-4">
                At Ohio University Heritage College of Osteopathic Medicine, Dr.
                Kohl learned a holistic approach to primary care. He served
                students and the community as president of the campus Christian
                Medical and Dental Association. He earned his Doctor of
                Osteopathic Medicine degree in 2020. Dr. Kohl trained at the
                Valley Baptist Family Practice Residency in Harlingen, Texas
                (2020-2023), serving as chief resident during his third year.
                His physician mentors exemplified excellent care for physical
                and spiritual needs, always respecting the choices of patients.
                Being fluent in Spanish, he enjoyed connecting with
                Spanish-speaking patients in the clinic, hospital, and community
                outreach near the Texas-Mexico border.
              </p>
              <p className="mb-4">
                Dr. Kohl's closest childhood friend, Kayla, became his wife in
                2016. After completing medical school in Ohio, they were
                convinced that Kayla's home state of Texas would be their new
                home. They love hiking, soccer, game nights, and homeschooling
                their three active sons. The Kohls enjoy worshiping and serving
                together with their local church.
              </p>
              <p className="mb-4">
                Dr. Kohl is thankful for the opportunity to join Rife Pediatric
                and Family Care, serving alongside like-minded, exceptional,
                caring doctors! He is grateful for the freedom to provide
                holistic patient-centered care without bureaucratic
                interference. As a family doctor, Dr. Kohl treats patients of
                all ages with a wide range of conditions; he has particular
                interest in nutrition, supplements, sports medicine, and
                functional medicine. He acquired a comprehensive mold illness
                protocol through his training with the MC360™️ Precision Mold
                Master Class. He became a diplomat of the American Board of
                Physician Specialties and member of the Institute of Functional
                Medicine. He is excited to support his patients in reaching new
                levels of health and vitality!
              </p>
              <p className="mb-4">
                Dr. Kohl settled in McAllen, Texas with his family 6 hours from
                Tomball. Though he no longer comes to the clinic, he continues
                to treat his patients holistically with virtual functional
                medicine.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nicole Hoff Bio */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Nicole Hoff, PA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block relative">
              <motion.img
                {...fadeIn}
                src={nicoleImage}
                alt="Nicole Hoff"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto h-auto object-cover"
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
            <motion.div {...fadeIn} className="text-left">
              <h5 className="text-2xl font-bold mb-4">Bio</h5>
              <p className="mb-4">
                Nicole Hoff is a Board-Certified Physician Assistant (PA) and a
                proud graduate of Yale University School of Medicine's PA
                Program (2023). Since August 2017, she has called The North
                Houston Area of Texas, home, where she lives with her family on
                their mini-farm. Her motto is: "Unapologetically changing the
                way healthcare is done. Your health is in your hands. I am here
                to help."
              </p>
              <p className="mb-4">
                Nicole's approach to healthcare is deeply personal and
                family-focused. "I want to have a family-friendly practice as
                well as a schedule that allows my kids to stop sharing their mom
                so much," Nicole shares. "But I also want to be able to pray for
                my patients and with my patients. I don't want insurance
                dictating the care I give, and I want to ensure my services are
                affordable. I believe in prescribing lavender oil, vitamin d,
                and sunshine, just as much as I do metformin, ibuprofen, and
                antibiotics. I also want to empower my patients to make their
                own healthcare decisions, recognizing that God is the great
                physician."
              </p>
              <p className="mb-4">
                Before becoming a PA, Nicole earned a Bachelor of Arts in
                Maternal and Child Health, specializing in lactation. For over
                15 years, she empowered families as a midwife assistant, doula,
                childbirth educator, and 10 years as an International Board
                Certified Lactation Consultant (IBCLC). Her time serving as a
                hospital chaplain ignited a passion for supporting those
                navigating major life transitions, from welcoming their first
                child to experiencing loss or facing barriers to care. Nicole's
                dedication to mental health care, especially for children and
                families, is at the core of her mission to provide affordable,
                accessible healthcare. In December 2023, Nicole completed her
                Doctorate of Medical Science from Shenandoah University. Her
                doctoral project focused on integrating Adverse Childhood
                Experiences (ACEs) screening into primary care as a standard of
                practice.
              </p>
              <p className="mb-4">
                Outside of work, Nicole cherishes time with her husband and four
                children (born in '03, '05, '10, '13). Together, they strive to
                "Know Him and make Him known." Whether in the North Houston area
                or her hometown community in the Rio Grande Valley, Nicole is
                passionate about making a difference.
              </p>
              <p className="mb-4">
                At Rife Pediatrics & Family Care, Nicole offers primary care for
                adults and children of all ages, faith-based mental healthcare
                services, and trauma-informed women's health care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dr. Avani Gupta Bio */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Dr. Avani Gupta
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn} className="text-left md:order-first">
              <h5 className="text-2xl font-bold mb-4">Bio</h5>
              <p className="mb-4">
                Dr. Gupta is a Board Certified Family Physician who values the
                importance of preventive care. She grew up in the Pacific
                Northwest and knew at an early age that her future path would be
                in medicine. After attending Vassar College with a Bachelors in
                Biology, she achieved her Masters in Pharmacology at Tulane
                University. From there, she completed her Osteopathic medical
                training with Honors at Western University in Pomona,
                California. She went on to complete her Family Medicine
                Residency at the Tufts University- Harvard Affiliate program in
                Boston where she was also selected as the Chief Resident. During
                residency, she took a special interest in disorders of the skin
                and the musculoskeletal system. After residency, Dr Gupta moved
                to Southern California where she practiced urgent care and
                family medicine. In 2023, Dr Gupta along with her husband and
                three children made the life-changing move to beautiful north
                Houston which has been a blessing for the whole family.
              </p>
              <p className="mb-4">
                As an osteopathic physician, Dr. Gupta strongly believes that it
                is important to treat the whole patient and not just their
                symptoms. Osteopathy is based on a deep understanding of how
                anatomy is related to function, and often OMT (osteopathic
                manipulative treatment) can help restore this imbalance. Dr
                Gupta provides this type of hands-on treatment when appropriate,
                including muscle energy, myofascial release, tender points,
                counterstrain, lymphatics, and craniosacral modalities.
              </p>
              <p className="mb-4">
                Dr Gupta values spending time with each patient in order to best
                understand their needs. She strongly believes in individual
                autonomy and medical freedom, and a patient's active involvement
                in making their personal medical decisions. Using both
                traditional medicine and osteopathic approaches, she looks
                forward to helping her patients live their best lives!
              </p>
            </motion.div>
            <div className="hidden md:block relative">
              <motion.img
                {...fadeIn}
                src={guptaImage}
                alt="Dr. Avani Gupta"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto h-auto object-cover"
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
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
