'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FormState } from '@/types';
import { MapPinIcon, PhoneIcon, ClockIcon, LinkIcon, ExternalLinkIcon } from 'lucide-react';

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  occasion: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div className="min-h-screen bg-chalk pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h1
            className="text-5xl sm:text-6xl font-bold text-graphite mb-3"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            Find Us.
          </h1>
          <p
            className="text-warmGrey text-base"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            Level 4, KLGCC Mall. Above the golf course. Always worth the trip.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <MapPinIcon size={18} className="text-champagne" />,
                  label: 'Address',
                  content: (
                    <p className="text-sm text-graphite" style={{ fontFamily: 'var(--font-jost)' }}>
                      4th Floor (The Grounds of Serai)<br />
                      KLGCC Mall, Lot 4F-03<br />
                      No.1, Jalan Bukit Kiara 1<br />
                      Bukit Kiara, 60000 Kuala Lumpur
                    </p>
                  ),
                },
                {
                  icon: <PhoneIcon size={18} className="text-champagne" />,
                  label: 'Phone',
                  content: (
                    <a
                      href="tel:+60320112695"
                      className="text-sm text-sageGreen hover:underline"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      +60 3-2011 2695
                    </a>
                  ),
                },
                {
                  icon: <ClockIcon size={18} className="text-champagne" />,
                  label: 'Hours',
                  content: (
                    <p className="text-sm text-graphite" style={{ fontFamily: 'var(--font-jost)' }}>
                      Daily: 10AM – 10PM
                    </p>
                  ),
                },
                {
                  icon: <LinkIcon size={18} className="text-champagne" />,
                  label: 'Instagram',
                  content: (
                    <a
                      href="https://instagram.com/superblonde.byseraigroup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-sageGreen hover:underline"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      @superblonde.byseraigroup
                    </a>
                  ),
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-creamCard rounded-2xl p-5 border-l-4 border-champagne flex gap-4"
                >
                  <div className="mt-0.5 flex-shrink-0">{card.icon}</div>
                  <div>
                    <p
                      className="text-xs tracking-widest text-warmGrey uppercase mb-1"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      {card.label}
                    </p>
                    {card.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Reserve button */}
            <a
              href="https://reservego.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-sageGreen text-white text-sm tracking-widest font-medium hover:bg-sageGreen/90 transition-colors w-full text-center"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Reserve a Table
              <ExternalLinkIcon size={14} />
            </a>

            {/* Getting here note */}
            <div className="bg-creamCard rounded-2xl p-5 text-sm text-warmGrey" style={{ fontFamily: 'var(--font-jost)' }}>
              <p className="font-medium text-graphite mb-2">Getting Here</p>
              <p>MRT to Semantan station → RM2 shuttle via Kummute app.</p>
              <p className="mt-1">Free parking available at KLGCC Mall.</p>
            </div>

            {/* Map placeholder */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/placeholder.jpg"
                alt="KLGCC Mall Level 4 map"
                className="w-full aspect-video object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-graphite/40 flex flex-col items-center justify-center gap-3 rounded-2xl">
                <MapPinIcon size={28} className="text-white" />
                <p
                  className="text-white text-sm font-medium text-center"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  KLGCC Mall, Level 4<br />Bukit Kiara, Kuala Lumpur
                </p>
                <a
                  href="https://maps.google.com/?q=KLGCC+Mall+Bukit+Kiara+Kuala+Lumpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sageGreen text-xs tracking-widest font-medium hover:text-white transition-colors underline underline-offset-2"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column — Enquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-creamCard rounded-3xl p-8">
              <h2
                className="text-2xl font-bold text-graphite mb-6"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                Send an Enquiry
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-sageGreen/10 border border-sageGreen/30 rounded-xl text-sageGreen text-sm font-medium" style={{ fontFamily: 'var(--font-jost)' }}>
                  Thank you! We&apos;ll be in touch shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest text-warmGrey mb-1.5 uppercase" style={{ fontFamily: 'var(--font-jost)' }}>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-linen bg-chalk text-graphite text-sm placeholder:text-warmGrey/60 focus:outline-none focus:border-sageGreen transition-colors"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest text-warmGrey mb-1.5 uppercase" style={{ fontFamily: 'var(--font-jost)' }}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-linen bg-chalk text-graphite text-sm placeholder:text-warmGrey/60 focus:outline-none focus:border-sageGreen transition-colors"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest text-warmGrey mb-1.5 uppercase" style={{ fontFamily: 'var(--font-jost)' }}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+60 1X XXX XXXX"
                    className="w-full px-4 py-3 rounded-xl border border-linen bg-chalk text-graphite text-sm placeholder:text-warmGrey/60 focus:outline-none focus:border-sageGreen transition-colors"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest text-warmGrey mb-1.5 uppercase" style={{ fontFamily: 'var(--font-jost)' }}>Date</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-linen bg-chalk text-graphite text-sm focus:outline-none focus:border-sageGreen transition-colors"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest text-warmGrey mb-1.5 uppercase" style={{ fontFamily: 'var(--font-jost)' }}>Time</label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-linen bg-chalk text-graphite text-sm focus:outline-none focus:border-sageGreen transition-colors appearance-none"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      <option value="">Select time</option>
                      {['10AM', '12PM', '2PM', '4PM', '6PM', '8PM'].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest text-warmGrey mb-1.5 uppercase" style={{ fontFamily: 'var(--font-jost)' }}>Guests</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-linen bg-chalk text-graphite text-sm focus:outline-none focus:border-sageGreen transition-colors appearance-none"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      <option value="">Select guests</option>
                      {['1–2', '3–4', '5–8', '9+'].map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest text-warmGrey mb-1.5 uppercase" style={{ fontFamily: 'var(--font-jost)' }}>Occasion</label>
                    <select
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-linen bg-chalk text-graphite text-sm focus:outline-none focus:border-sageGreen transition-colors appearance-none"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      <option value="">Select occasion</option>
                      {['Brunch', 'Lunch', 'Dinner', 'Birthday', 'Date Night', 'Corporate'].map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest text-warmGrey mb-1.5 uppercase" style={{ fontFamily: 'var(--font-jost)' }}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any special requests or dietary requirements?"
                    className="w-full px-4 py-3 rounded-xl border border-linen bg-chalk text-graphite text-sm placeholder:text-warmGrey/60 focus:outline-none focus:border-sageGreen transition-colors resize-none"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-sageGreen text-white text-sm tracking-widest font-medium hover:bg-sageGreen/90 transition-colors mt-2"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  SEND ENQUIRY
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
