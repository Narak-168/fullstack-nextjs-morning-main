import React from 'react'
export default function AboutPage() {
  return (
    <main className="p-8 space-y-10">
      <section>
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-gray-700">Hi, I’m Narak, a student developer passionate about building useful digital tools.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">📍 Our Location</h2>
        <p className="text-gray-700">Phnom Penh, Cambodia</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">📞 Contact Us</h2>
        <p className="text-gray-700">Email: example@gmail.com</p>
        <p className="text-gray-700">Phone: +855 123 456 789</p>
      </section>
    </main>
  );
}