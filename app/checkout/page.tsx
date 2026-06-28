'use client';

import { useState, FormEvent } from 'react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  MinusIcon,
  PlusIcon,
  XIcon,
  ShoppingBagIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';

type OrderType = 'dine-in' | 'takeaway';

interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  orderType: OrderType;
  tableNumber: string;
  specialRequests: string;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CheckoutPage() {
  const { items, updateQuantity, removeItem, totalItems, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutForm>({
    name: '',
    email: '',
    phone: '',
    orderType: 'dine-in',
    tableNumber: '',
    specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [orderRef] = useState(
    () => 'SB-' + Math.random().toString(36).slice(2, 7).toUpperCase()
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function setOrderType(type: OrderType) {
    setForm((prev) => ({ ...prev, orderType: type }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  }

  const serviceCharge = Math.round(totalPrice * 0.1);
  const grandTotal = totalPrice + serviceCharge;

  if (submitted) {
    return (
      <div className="min-h-screen bg-chalk pt-16 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-lg w-full text-center py-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-sageGreen/10 flex items-center justify-center">
              <CheckCircleIcon size={44} className="text-sageGreen" />
            </div>
          </motion.div>

          <h1
            className="text-4xl sm:text-5xl font-bold text-graphite mb-3"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            Order Received.
          </h1>
          <p
            className="text-warmGrey text-base mb-2"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            Thank you, {form.name || 'dear guest'}. Your order is with us.
          </p>
          <p
            className="text-champagne text-sm font-medium mb-10 tracking-widest"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            Order ref: {orderRef}
          </p>

          <div className="bg-creamCard rounded-2xl p-6 text-left mb-8 border border-linen">
            <p
              className="text-xs tracking-widest text-warmGrey uppercase mb-4"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              What happens next
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Our team will confirm your order shortly.',
                form.orderType === 'dine-in'
                  ? 'A server will be at your table soon.'
                  : 'Your order will be prepared for collection.',
                'For enquiries, call us at +60 3-2011 2695.',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full bg-sageGreen text-white text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-medium"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    {i + 1}
                  </span>
                  <p
                    className="text-sm text-graphite"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/menu"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-graphite text-graphite text-sm tracking-widest font-medium hover:bg-graphite hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Back to Menu
            </Link>
            <Link
              href="/"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-sageGreen text-white text-sm tracking-widest font-medium hover:bg-sageGreen/90 transition-colors"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-chalk pt-16 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-md w-full text-center py-20"
        >
          <ShoppingBagIcon size={52} className="text-linen mx-auto mb-6" />
          <h2
            className="text-3xl font-bold text-graphite mb-3"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            Your order is empty.
          </h2>
          <p
            className="text-warmGrey text-sm mb-8"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            Head back to the menu and add something delicious.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sageGreen text-white text-sm tracking-widest font-medium hover:bg-sageGreen/90 transition-colors"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            <ArrowLeftIcon size={15} />
            View Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-chalk pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-warmGrey text-sm hover:text-graphite transition-colors mb-5"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            <ArrowLeftIcon size={14} />
            Back to Menu
          </Link>
          <h1
            className="text-5xl sm:text-6xl font-bold text-graphite"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            Checkout.
          </h1>
          <p
            className="text-warmGrey mt-2 text-sm"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            {totalItems} {totalItems === 1 ? 'item' : 'items'} · RM{totalPrice} before service charge
          </p>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: form (3/5) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="lg:col-span-3 flex flex-col gap-8"
            >
              {/* Order type toggle */}
              <div className="bg-creamCard rounded-2xl p-6">
                <h2
                  className="text-lg font-bold text-graphite mb-4"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  How are you dining?
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {(['dine-in', 'takeaway'] as OrderType[]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setOrderType(type)}
                      className={`py-4 px-5 rounded-xl border-2 text-sm font-medium tracking-wide transition-all ${
                        form.orderType === type
                          ? 'border-sageGreen bg-sageGreen text-white shadow-sm'
                          : 'border-linen bg-chalk text-graphite hover:border-sageGreen/50'
                      }`}
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      {type === 'dine-in' ? '🍽 Dine In' : '🛍 Takeaway'}
                    </button>
                  ))}
                </div>

                <AnimatePresence>
                  {form.orderType === 'dine-in' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <label
                        className="block text-xs tracking-widest text-warmGrey mb-1.5 uppercase"
                        style={{ fontFamily: 'var(--font-jost)' }}
                      >
                        Table Number
                      </label>
                      <input
                        type="text"
                        name="tableNumber"
                        value={form.tableNumber}
                        onChange={handleChange}
                        placeholder="e.g. Table 12"
                        className="w-full px-4 py-3 rounded-xl border border-linen bg-chalk text-graphite text-sm placeholder:text-warmGrey/60 focus:outline-none focus:border-sageGreen transition-colors"
                        style={{ fontFamily: 'var(--font-jost)' }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact details */}
              <div className="bg-creamCard rounded-2xl p-6">
                <h2
                  className="text-lg font-bold text-graphite mb-4"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  Your Details
                </h2>
                <div className="flex flex-col gap-4">
                  <div>
                    <label
                      className="block text-xs tracking-widest text-warmGrey mb-1.5 uppercase"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-linen bg-chalk text-graphite text-sm placeholder:text-warmGrey/60 focus:outline-none focus:border-sageGreen transition-colors"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs tracking-widest text-warmGrey mb-1.5 uppercase"
                        style={{ fontFamily: 'var(--font-jost)' }}
                      >
                        Email *
                      </label>
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
                    <div>
                      <label
                        className="block text-xs tracking-widest text-warmGrey mb-1.5 uppercase"
                        style={{ fontFamily: 'var(--font-jost)' }}
                      >
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+60 1X XXX XXXX"
                        className="w-full px-4 py-3 rounded-xl border border-linen bg-chalk text-graphite text-sm placeholder:text-warmGrey/60 focus:outline-none focus:border-sageGreen transition-colors"
                        style={{ fontFamily: 'var(--font-jost)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Special requests */}
              <div className="bg-creamCard rounded-2xl p-6">
                <h2
                  className="text-lg font-bold text-graphite mb-4"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  Special Requests
                </h2>
                <textarea
                  name="specialRequests"
                  value={form.specialRequests}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Allergies, dietary requirements, or anything we should know…"
                  className="w-full px-4 py-3 rounded-xl border border-linen bg-chalk text-graphite text-sm placeholder:text-warmGrey/60 focus:outline-none focus:border-sageGreen transition-colors resize-none"
                  style={{ fontFamily: 'var(--font-jost)' }}
                />
              </div>

              {/* Payment note */}
              <div
                className="flex items-start gap-3 px-5 py-4 rounded-xl bg-champagne/10 border border-champagne/30"
              >
                <span className="text-champagne text-base mt-0.5">💳</span>
                <p
                  className="text-sm text-graphite/80 leading-relaxed"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  Payment is settled at the restaurant. We accept cash, card,
                  and e-wallets (Touch &apos;n Go, GrabPay, Boost).
                </p>
              </div>
            </motion.div>

            {/* Right: order summary (2/5) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              className="lg:col-span-2"
            >
              <div className="sticky top-24 bg-creamCard rounded-3xl p-7 border border-linen">
                <h2
                  className="text-xl font-bold text-graphite mb-6"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  Your Order
                </h2>

                {/* Item list */}
                <div className="flex flex-col gap-4 mb-6">
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center gap-3"
                      >
                        <img
                          src="/images/placeholder.jpg"
                          alt={item.name}
                          className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-sm font-semibold text-graphite truncate"
                            style={{ fontFamily: 'var(--font-fraunces)' }}
                          >
                            {item.name}
                          </p>
                          <div className="flex items-center gap-1.5 mt-1">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-5 h-5 rounded-full border border-sageGreen text-sageGreen flex items-center justify-center hover:bg-sageGreen hover:text-white transition-colors"
                            >
                              <MinusIcon size={10} />
                            </button>
                            <span
                              className="text-xs text-graphite font-medium w-3 text-center"
                              style={{ fontFamily: 'var(--font-jost)' }}
                            >
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-5 h-5 rounded-full border border-sageGreen text-sageGreen flex items-center justify-center hover:bg-sageGreen hover:text-white transition-colors"
                            >
                              <PlusIcon size={10} />
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <span
                            className="text-sm font-semibold text-champagne"
                            style={{ fontFamily: 'var(--font-jost)' }}
                          >
                            RM{typeof item.price === 'number' ? item.price * item.quantity : item.price}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-warmGrey hover:text-graphite transition-colors"
                            aria-label="Remove item"
                          >
                            <XIcon size={13} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Add more link */}
                <Link
                  href="/menu"
                  className="flex items-center gap-1.5 text-sageGreen text-xs font-medium tracking-wide hover:gap-2.5 transition-all mb-6"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  + Add more items
                  <ChevronRightIcon size={13} />
                </Link>

                {/* Totals */}
                <div className="border-t border-linen pt-5 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center">
                    <span
                      className="text-sm text-warmGrey"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      Subtotal
                    </span>
                    <span
                      className="text-sm text-graphite"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      RM{totalPrice}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className="text-sm text-warmGrey"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      Service charge (10%)
                    </span>
                    <span
                      className="text-sm text-graphite"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      RM{serviceCharge}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-linen mt-1">
                    <span
                      className="text-base font-bold text-graphite"
                      style={{ fontFamily: 'var(--font-fraunces)' }}
                    >
                      Total
                    </span>
                    <span
                      className="text-xl font-bold text-graphite"
                      style={{ fontFamily: 'var(--font-fraunces)' }}
                    >
                      RM{grandTotal}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-4 rounded-full bg-sageGreen text-white text-sm tracking-widest font-semibold hover:bg-sageGreen/90 active:scale-[0.98] transition-all shadow-sm"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  CONFIRM ORDER
                </button>
                <p
                  className="text-center text-xs text-warmGrey mt-3"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  Payment at the restaurant · No card required now
                </p>
              </div>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
}
