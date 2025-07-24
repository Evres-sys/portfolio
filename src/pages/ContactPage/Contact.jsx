import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xblkorno");

  if (state.succeeded) {
    return (
      <main className="min-h-screen px-6 pt-24">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-xl text-center">
          <h2 className="text-3xl font-bold text-green-600">Thank you!</h2>
          <p className="mt-4 text-gray-700">Your message has been sent.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 pt-24">
      <div
        className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-xl"
        data-aos="fade-up"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row text-gray-800">
            <input
              name="firstName"
              placeholder="First Name"
              required
              className="w-full rounded-lg border border-gray-300 p-3 transition focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              required
              className="w-full rounded-lg border border-gray-300 p-3 transition focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-lg border border-gray-300 p-3 transition focus:ring-2 focus:ring-indigo-400 focus:outline-none text-gray-800"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            name="message"
            placeholder="Your message..."
            required
            rows="5"
            className="w-full rounded-lg border border-gray-300 p-3 transition focus:ring-2 focus:ring-indigo-400 focus:outline-none text-gray-800"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
