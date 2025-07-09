"use client";
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full max-w-sm items-center">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage('');
          }}
          className="flex-1 border border-[#D4D4D4] bg-white p-2 text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-0"
          type="email"
          placeholder="Email Address*"
          required
        />
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white !uppercase"
        >
          Subscribe
        </button>
      </div>
      {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
    </form>
  );
}
