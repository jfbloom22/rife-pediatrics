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

export const FAQPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <div id="home" className="relative py-24 md:py-32 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold uppercase">FAQ</h1>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.ul
            className="space-y-8"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.li
              className="bg-white rounded-lg shadow-md p-6"
              variants={fadeInDelay(0.1)}
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                How do I enroll my child?
              </h3>
              <p className="text-gray-700">
                Call Dr. Rife and she will be glad to arrange a time to discuss
                the details of membership and if this is a good fit for your
                family. If you decide to join, then an initial visit will be set
                up at the clinic. Once Dr. Rife has met you and your child you
                can sign up for telemedicine service.
              </p>
            </motion.li>

            <motion.li
              className="bg-white rounded-lg shadow-md p-6"
              variants={fadeInDelay(0.2)}
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                Why is Dr. Rife doing telemedicine?
              </h3>
              <p className="text-gray-700">
                Dr. Rife has moved to North Texas with her family. However, she
                has many patients as well as family in the Tomball area that she
                wants to continue to see. Telemedicine makes this possible. Dr.
                Rife will be seeing patients a few days EVERY month at her
                clinic in Tomball.
              </p>
            </motion.li>

            <motion.li
              className="bg-white rounded-lg shadow-md p-6"
              variants={fadeInDelay(0.3)}
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                What about vaccinations?
              </h3>
              <p className="text-gray-700 mb-4">
                Dr Rife is glad to discuss vaccines and help you decide what is
                best for your family. Most Vaccines can be ordered through a
                local pharmacy and given in clinic. There is no requirement for
                vaccines to be seen.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-3">
                Can I use my insurance?
              </h3>
              <p className="text-gray-700">
                Rife Pediatrics will not accept any insurance plan. You may be
                able to use your HSA account, but you should discuss this with
                your CPA. Dr. Rife may be able, in some instances, to give you a
                receipt to send to your insurance company and some will
                reimburse you.
              </p>
            </motion.li>

            <motion.li
              className="bg-white rounded-lg shadow-md p-6"
              variants={fadeInDelay(0.4)}
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                Why does Rife Pediatrics not accept insurance?
              </h3>
              <p className="text-gray-700">
                Billing insurance requires hiring 1-2 personnel to do this or
                outsourcing to a company. By not billing insurance we can keep
                our overhead low and pass the savings to you. Dr. Rife is able
                to focus more on patient care and much less on paperwork.
                Nationally, doctors spend over 50% of their time on paperwork
                and most of this is for insurance companies.
              </p>
            </motion.li>

            <motion.li
              className="bg-white rounded-lg shadow-md p-6"
              variants={fadeInDelay(0.5)}
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                What if my child's illness cannot be managed over telemedicine?
              </h3>
              <p className="text-gray-700">
                If Dr. Rife is not able to definitively handle your child's
                illness over video chat, she has a back up doctor who will meet
                you at the clinic to examine your child. Dr. Rife also has
                several connections around town that may help and is glad to
                call ahead to the Emergency room and keep in contact with you to
                help you navigate the health system.
              </p>
            </motion.li>

            <motion.li
              className="bg-white rounded-lg shadow-md p-6"
              variants={fadeInDelay(0.6)}
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                Do I have to sign up for the telemedicine service to be a
                patient?
              </h3>
              <p className="text-gray-700">
                No, new patient visits are $150 and each visit and subsequent
                visits are $90 whether over telemedicine or in person. During an
                office visit, there may be additional costs for any testing
                done. This will be discussed with you prior to testing.
              </p>
            </motion.li>

            <motion.li
              className="bg-white rounded-lg shadow-md p-6"
              variants={fadeInDelay(0.7)}
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                What about labs and xrays?
              </h3>
              <p className="text-gray-700">
                Dr. Rife can order labs and xrays and you can choose to use your
                insurance or pay the cash price to the lab. Dr. Rife has a list
                of prices for common xrays and labs she orders.
              </p>
            </motion.li>

            <motion.li
              className="bg-white rounded-lg shadow-md p-6"
              variants={fadeInDelay(0.8)}
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                What if my child has to go to the hospital?
              </h3>
              <p className="text-gray-700">
                Dr. Rife does not work for any hospital. Dr. Rife will
                communicate closely with hospital Doctors and staff to help
                coordinate care and will be available to answer your questions.
              </p>
            </motion.li>
          </motion.ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};
