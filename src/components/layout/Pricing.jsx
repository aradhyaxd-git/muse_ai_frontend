import React from 'react';
import { motion } from 'framer-motion';

// --- Framer Motion Variants ---

// For the main container to fade in
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren", // Animate parent before children
      staggerChildren: 0.2 // Stagger card animations
    },
  },
};

// For individual pricing cards to fade in and lift slightly
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// --- Pricing Data ---
const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    billingCycle: "Always free",
    features: [
      "Title Generation",
      "Article Generation",
    ],
    isPremium: false,
  },
  {
    name: "Premium",
    price: "$16",
    billingCycle: "/month (Billed annually)",
    features: [
      "Title Generation",
      "Article Generation",
      "Generate Images",
      "Remove Background",
      "Remove Object",
      "Resume Review",
    ],
    isPremium: true,
  },
];

// --- PricingComponent ---
const Pricing = () => {
  return (
    <motion.section
      className="py-24 bg-gray-50 font-sans"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-slate-700 text-4xl md:text-[42px] font-semibold mb-3">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto text-lg leading-relaxed">
          Start for free and scale up as you grow. Find the perfect plan for
          your content creation needs.
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`
              relative flex flex-col items-center 
              bg-white rounded-xl shadow-lg border border-gray-100
              p-8 w-full max-w-sm
              transform cursor-pointer
              ${plan.isPremium ? 'border-indigo-500 border-2' : ''} // Optional: highlight premium
            `}
            variants={cardVariants} // Apply card entry animation
            whileHover={{
              y: -10, // Lift on hover
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)", // Deeper shadow
              transition: { duration: 0.3 }
            }}
          >
            {/* Hand Icon - Only on Free Plan for visual reference from image */}
            {plan.name === "Free" && (
              <motion.div
                className="absolute top-1/4 right-8 transform -translate-y-1/2"
                whileTap={{ scale: 0.9, rotate: -15 }} // Little tap animation
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* SVG for the hand icon */}
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                >
                  <path
                    d="M17 10C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10C11 11.6569 12.3431 13 14 13C15.6569 13 17 11.6569 17 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12V16.7143C19 17.6534 18.2534 18.4286 17.3333 18.4286H7C6.44772 18.4286 6 18.8763 6 19.4286C6 19.9808 6.44772 20.4286 7 20.4286H17.5C18.0523 20.4286 18.5 20.8763 18.5 21.4286C18.5 21.9808 18.0523 22.4286 17.5 22.4286H6.5C4.01472 22.4286 2 20.4138 2 17.9286V8.14286C2 5.01905 4.5 2 7.5 2C10.5 2 13 5.01905 13 8.14286V12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            )}

            {/* Plan Name */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {plan.name}
            </h3>

            {/* Price */}
            <p className="text-5xl font-bold text-slate-700 mb-1">
              {plan.price}
            </p>
            <p className="text-gray-500 text-sm mb-6">{plan.billingCycle}</p>

            {/* Features List */}
            <ul className="w-full text-left space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  {/* Checkmark SVG */}
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Subscribe Button */}
            <button
              className={`
                mt-auto w-full py-3 rounded-lg text-lg font-medium
                ${plan.isPremium
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-800 text-white hover:bg-gray-900'
                }
                transition-colors duration-300 ease-in-out
              `}
            >
              Subscribe
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Pricing;