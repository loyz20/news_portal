"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ email: "", name: "", message: "" });
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulasi submit, real project bisa fetch/axios ke API
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setForm({ email: "", name: "", message: "" });
  }

  return (
    <main className="max-w-4xl mx-auto px-4 pt-24 pb-12">
      <h1 className="text-4xl font-bold text-center mb-10">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form */}
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block font-bold mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-bold mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-bold mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-200 hover:bg-gray-300 text-black font-bold rounded-lg py-2 transition"
          >
            Send
          </button>
          {success && <p className="text-green-600 font-semibold mt-2">Pesan terkirim!</p>}
        </form>

        {/* Kontak & Map */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-bold text-2xl mb-2">Address</h2>
            <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-100 mb-4 relative">
              <Image
                src="https://placehold.co/400x200/png"
                alt="Map"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-gray-700 text-sm">
              <b>Alamat:</b>
              <div>Jl. Kebangsaan No. 1, Jakarta 12345</div>
              <b>Telepon:</b>
              <div>(021) 123-4567</div>
              <b>Email:</b>
              <div>redaksi@newsportal.com</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
