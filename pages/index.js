
import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [date, setDate] = useState();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center p-4">
      <Head>
        <title>RaZe </title>
      </Head>
      <motion.h1 
        className="text-5xl font-extrabold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}>
        Welcome to the RAZE Empire
      </motion.h1>

      <motion.p 
        className="mb-12 text-xl text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}>
        Not just a design studio. A legacy in the making. Book your elite project now.
      </motion.p>

      <form action="https://formspree.io/f/mqapnpav" method="POST" className="space-y-4 w-full max-w-lg">
        <input name="name" placeholder="Your Name" required className="w-full p-2 rounded text-black" />
        <input name="email" type="email" placeholder="Your Email" required className="w-full p-2 rounded text-black" />
        <textarea name="message" placeholder="Tell us about your project..." required className="w-full p-2 rounded text-black" rows="4"></textarea>
        <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded">Submit</button>
      </form>

      <motion.footer 
        className="mt-12 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}>
        © 2025 RaZe Global. Designed for those who dare to build empires.
      </motion.footer>
    </div>
  );
}
