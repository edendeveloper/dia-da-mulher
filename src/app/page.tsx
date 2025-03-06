'use client'

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3-teste.jpg",
  "/img4.jpg",
];

export default function WomensDayPage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-pink-700 mb-6">Feliz Dia da Mulher, Meu Amor! 💖</h1>
      
      {/* Player do Spotify */}
      <div className="mb-6">
        <iframe
          src="https://open.spotify.com/embed/track/1dGr1c8CrMLDpV6mPbImSI"
          width="300"
          height="80"
          allow="encrypted-media"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Carrossel de Fotos */}
      <div className="relative w-96 h-96 overflow-hidden rounded-lg shadow-lg flex items-center justify-center">
        <AnimatePresence>
          <motion.img
            key={current}
            src={images[current]}
            alt="Momentos Especiais"
            className="w-full h-full object-cover absolute"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft size={24} className="text-pink-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRight size={24} className="text-pink-600" />
        </button>
      </div>

      {/* Espaços para textos personalizados */}
      <div className="mt-6 w-full max-w-lg text-center">
        <p className="text-lg text-gray-700 italic">
          "U I A"
        </p>
        <p className="text-lg text-gray-700 italic mt-4">
          Hoje é dia de agradecer pela existência das mulheres, mas aqui, eu quero agradecer pela existência de uma em especifico, você.
        </p>
        <p className="text-lg text-gray-700 italic mt-4">
          Você é uma mulher incrível, que transformou minha vida de uma maneira que você sequer imagina, eu sou extremamente grato por você ter me escolhido.
        </p>
        <p className="text-lg text-gray-700 italic mt-4">
          - Seu amor.
        </p>
      </div>
    </div>
  );
}