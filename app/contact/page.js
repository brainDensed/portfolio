"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Slide, toast, ToastContainer } from "react-toastify";

const NEXT_PUBLIC_SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const NEXT_PUBLIC_TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const NEXT_PUBLIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(NEXT_PUBLIC_SERVICE_ID, NEXT_PUBLIC_TEMPLATE_ID, data, {
        publicKey: NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        (response) => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            draggable: false,
            transition: Slide,
            hideProgressBar: true,
            closeButton: true,
          });
        },
        (error) => {
          toast.error("Something went wrong. Please try again later.", {
            position: "top-right",
            autoClose: 5000,
            draggable: false,
            transition: Slide, // Use a valid transition
            hideProgressBar: true,
            closeButton: true,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center h-[100vh] w-full p-8 z-10"
    >
      <div className="relative glass p-6 rounded-md w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold dark:text-white mb-4">Contact</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("name", { required: true })}
              className="w-full p-2 border rounded glass border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#456572] focus:border-transparent"
            />
            {errors.name && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email", { required: true })}
              className="w-full p-2 border rounded glass border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#456572] focus:border-transparent"
            />
            {errors.email && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("message", { required: true })}
              className="w-full p-2 border rounded glass border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#456572] focus:border-transparent"
            />
            {errors.message && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          <motion.button
            type="submit"
            className="px-6 py-3 rounded-md glass text-white text-lg font-medium"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send
          </motion.button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 9999, marginTop: "4rem" }} // Adjust z-index and margin-top
      />
    </section>
  );
};

export default Contact;
