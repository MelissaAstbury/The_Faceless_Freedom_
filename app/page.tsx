"use client";

import { useState, useEffect } from 'react';

export default function Page() {
  const quotes = [
    "You deserve a life that feels good. And you’re capable of building it.",
    "If you're craving more for your life… you’re already closer than you think.",
    "If this is possible for me, it’s possible for you too.",
    "We’re all just figuring it out — but trust me, you can do this."
  ];

  const [currentQuote, setCurrentQuote] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setOffset(-currentQuote * 100);
  }, [currentQuote]);

  return (
    <div className="min-h-screen bg-[#ffffff] text-gray-800 font-serif">
      {/* Top Banner */}
      <section className="w-full bg-[#f5e6e6] py-4 text-center shadow-sm">
        <h1 className="text-xl font-bold">✨ 10‑Day Freedom Challenge ✨</h1>
      </section>

      {/* Main Banner */}
      <section className="py-20 px-6 text-center bg-[#ffffff]">
        <h2 className="text-3xl md:text-5xl font-bold leading-snug max-w-3xl mx-auto">
          Escaping the 9–5 So I Can Be Present for the Moments That Actually Matter
        </h2>
        <div className="mt-8">
          <a href="https://partner.mightypreneur.com/getstarted?fpr=melissa73" className="inline-block bg-[#f5dede] text-gray-800 font-semibold px-8 py-4 rounded-2xl hover:bg-[#f7cfcf] transition-colors">
            Start Your Journey Today
          </a>
        </div>
      </section>

      {/* Quote Carousel */}
      <section className="relative overflow-hidden bg-[#f5e6e6] text-center" style={{height: '6rem'}}>
        <div className="absolute inset-0 flex transition-transform duration-500 items-center" style={{ transform: `translateX(-${currentQuote * 100}%)` }}>
          {quotes.map((quote, index) => (
            <div key={index} className="flex-shrink-0 w-full flex justify-center">
              <h3 className="text-2xl md:text-3xl italic font-semibold">{quote}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto grid gap-10 md:grid-cols-2 bg-[#ffffff]">
        <div className="p-6 bg-[#f5e6e6] rounded-2xl shadow-md border border-[#f5dede]">
          <h4 className="text-xl font-bold mb-2">🎭 Faceless</h4>
          <p>🙈 You don’t need to show your face to build something powerful and profitable.</p>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>🕵️‍♀️ Maintain your privacy and anonymity</li>
            <li>💡 Focus on content and value, not your image</li>
            <li>✅ Easy to start without pressure or camera confidence</li>
            <li>🌎 More relatable and universal for your audience</li>
          </ul>
        </div>

        <div className="p-6 bg-[#f5e6e6] rounded-2xl shadow-md border border-[#f5dede]">
          <h4 className="text-xl font-bold mb-2">🚀 Can Be Done On‑The‑Go</h4>
          <p>⏱️ Perfect for busy moms — build your income in the small pockets of your day.</p>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>🌍 Work from anywhere, anytime</li>
            <li>👩‍👧 Fits around your family schedule</li>
            <li>🕒 No strict office hours required</li>
            <li>💪 Small efforts add up to meaningful results</li>
          </ul>
        </div>

        <div className="p-6 bg-[#f5e6e6] rounded-2xl shadow-md border border-[#f5dede]">
          <h4 className="text-xl font-bold mb-2">🕊️ Freedom</h4>
          <p>✨ This is your story. Your pace. Your rules.</p>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>📅 Create a schedule that works for you</li>
            <li>🎯 Choose projects and priorities freely</li>
            <li>🙌 Work on your own terms without pressure</li>
            <li>🌟 Design a lifestyle aligned with your values</li>
          </ul>
        </div>

        <div className="p-6 bg-[#f5e6e6] rounded-2xl shadow-md border border-[#f5dede]">
          <h4 className="text-xl font-bold mb-2">🌱 Building Ourselves</h4>
          <p>Focus on creating a life that reflects your growth, your choices, and your family’s needs.</p>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>📈 Invest in your personal and professional growth</li>
            <li>✅ Make decisions that align with your values</li>
            <li>🏡 Create a lifestyle that supports your family and yourself</li>
            <li>💖 Prioritize your journey and development over external expectations</li>
          </ul>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center bg-[#ffffff]">
        <h2 className="text-3xl font-bold mb-6">My Story</h2>
        <p className="text-lg leading-relaxed">
          I want to start off by sharing something personal. In 2024, my entire world shifted when I had my daughter. Becoming a mom was the most beautiful chapter of my life — but as maternity leave went on, I felt this quiet countdown in the back of my mind. The thought of going back to work and leaving her at nursery broke me a little more each day.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Even though I loved the moments we had together, my mind couldn't rest. I kept thinking, <span className="italic">there has to be a better way… a way to be more present, more available, more me.</span> I wanted a life where my daughter got the best of me — not what was left after a long day at work.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          And then I came across the 10-Day Challenge. Something in me just said, "Why not?" So I jumped in. I can’t sit here and claim I’ve "made it" yet — I’m still at the beginning of my journey. But what I can say, with my whole heart, is that it was one of the best decisions I’ve made. Not because I’m at the finish line… but because, finally, I’m on a path that feels right.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          If you're reading this and feeling the same pull — that mix of fear, hope, and "surely there has to be more to life than this" — then maybe this journey is meant for you too.
        </p>
      </section>

      {/* Mini Testimonials / Mom Stories */}
      <section className="py-20 px-6 max-w-4xl mx-auto bg-[#ffffff] rounded-2xl text-center grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-[#f5e6e6] rounded-2xl shadow-md border border-[#f5dede]">
          <p>👩‍👧 "I used to worry about every bill — now I can work around nap times and still contribute to our income."</p>
        </div>
        <div className="p-6 bg-[#f5e6e6] rounded-2xl shadow-md border border-[#f5dede]">
          <p>💻 "Even with a busy schedule, small daily efforts have made a difference in our family finances."</p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 max-w-4xl mx-auto bg-[#ffffff] rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-6">Your Journey</h2>
        <div className="flex flex-col justify-center items-center text-lg space-y-4">
          <div>😔 Feeling Stuck</div>
          <div>⬇️</div>
          <div>➡️ Trying Small Steps</div>
          <div>⬇️</div>
          <div>💪 Building a Side Income</div>
          <div>⬇️</div>
          <div>🏡 More Freedom & Presence with Family</div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 px-6 bg-[#f5e6e6] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-6">Join the 10-Day Freedom Challenge and take the first step towards a life on your terms.</p>
        <a href="https://partner.mightypreneur.com/getstarted?fpr=melissa73" className="inline-block bg-[#ffffff] text-gray-800 font-semibold px-8 py-4 rounded-2xl transition-colors">
          Learn More Now
        </a>
      </section>
    </div>
  );
}