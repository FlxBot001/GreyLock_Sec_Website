import { contactDetails } from "../constants"; // Adjust the path as necessary
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submitted:", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="border-b border-neutral-800 min-h-[800px]">
      <div id="Contacts" className="container mx-auto px-6 py-12">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
          Get in Touch with Us
        </h1>
        <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-300">
          Whether you have questions, feedback, or need support, we&apos;re here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-10 ">
          {/* Contact Form */}
          <form
            className=" shadow-lg rounded-lg p-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Send Us a Message
            </h2>
            <div className="mb-4">
              <label className="block text-gray-600 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  errors.name
                    ? "border-green-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.name && (
                <p className="text-teal-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
                rows="5"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="min-w-80 py-3 mt-2 bg-green-600 text-white font-medium rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
            {success && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-6 flex flex-col justify-center">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                  {detail.icon} {detail.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
