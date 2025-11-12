import React from "react";
// 1. Import Framer Motion
import { motion } from "framer-motion";

// 2. Define animation variants (better practice than defining inline)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger the animation of children by 0.2 seconds
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start invisible and 50px down
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // Use a spring animation for a bouncy feel
      stiffness: 100,
    },
  },
};

const Testimonial = () => {
  // 3. Updated data with Indian names and creator/tech roles
  const dummyTestimonialData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Rohan Joshi",
      title: "Digital Strategist, Zomato",
      content:
        "Muse.ai has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Priya Kumar",
      title: "Freelance YouTuber (Tech)",
      content:
        "Muse.ai has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: "Aisha Khan",
      title: "SEO Specialist, OYO",
      content:
        "Muse.ai has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 4,
    },
  ];

  // Star SVG component (no changes)
  const StarIcon = () => (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
        fill="#5044E5"
      />
    </svg>
  );

  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-slate-700 text-4xl md:text-[42px] font-semibold">
          Loved by Creators
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto mt-2">
          Don't just take our word for it. Here's what our users are saying.
        </p>
      </div>

      {/* 4. Use motion.div for the container */}
      <motion.div
        className="flex flex-wrap mt-10 justify-center gap-8"
        // Apply container variants
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {dummyTestimonialData.map((testimonial) => (
          // 5. Use motion.div for each card
          <motion.div
            key={testimonial.name} // Use a unique string like name
            className="p-8 max-w-xs w-full rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 cursor-pointer"
            // Apply card variants
            variants={cardVariants}
            // 6. Replace Tailwind hover with Framer Motion hover
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0px 15px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-gray-500 text-sm my-5">
              " {testimonial.content} "
            </p>
            <hr className="mb-5 border-gray-200" />
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                className="w-12 h-12 object-cover rounded-full"
                alt={testimonial.name}
              />
              <div className="text-sm text-gray-600">
                <h3 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonial;