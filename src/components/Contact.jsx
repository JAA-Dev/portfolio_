import { userIntersectionObserver } from "../hooks/userIntersectionObserver";
import { Github, Phone, Mail, SendHorizonal, Instagram } from "lucide-react";

const Contact = () => {
  const hasAnimated = userIntersectionObserver();

  return (
    <section className="pt-16 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${
            hasAnimated.contact
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Get in Touch.
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start transition-all duration-1000 delay-300 ${
            hasAnimated.contact
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Form Section*/}
          <div className="order-1 md:order-2">
            <div className="bg-[#fafafa] dark:bg-[#1c1c1c] border border-gray-200 dark:border-white/10 p-8 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <form className="space-y-6">
                <h2 className="text-2xl text-center font-bold mt-2">
                  Let’s work together.
                </h2>
                <div>
                  <label className="block text-sm">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 focus:ring-2 focus:ring-[#233831]"
                  />
                </div>
                <div>
                  <label className="block text-sm">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 focus:ring-1 focus:ring-[#233831]"
                  />
                </div>
                <div>
                  <label className="block text-sm">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full p-2 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 focus:ring-1 focus:ring-[#233831]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-black hover:shadow-lg hover:bg-black/70 text-white p-2 rounded-lg font-semibold transition"
                >
                  Send Message <SendHorizonal size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Info section*/}
          <div className="order-2 md:order-1 text-gray-700 dark:text-gray-300 p-4">
            <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
            <p className="mb-6">
              Feel free to reach out anytime. I will get back to you as soon as
              possible.
            </p>

            <div className="space-y-4 text-sm md:text-lg">
              <p className="flex items-center gap-3">
                <Phone className="text-blue-600" /> 0948 878 5945
              </p>
              <p className="flex items-center gap-3">
                <Instagram className="text-pink-600" /> @jshuaa.jpg
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-red-600" /> augustineangeles2@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <Github className="text-black dark:text-white" /> github.com/JAA-Dev
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
