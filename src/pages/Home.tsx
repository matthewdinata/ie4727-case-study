import React from 'react';
import {
  FaCoffee,
  FaMusic,
  FaMicrophoneAlt,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <motion.section
      className='mb-12'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='bg-indigo-50 min-h-screen'>
        <main className='container mx-auto px-4 py-8'>
          <section className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold text-indigo-800 mb-4'>
              Follow the Winding Road to JavaJam
            </h1>
            <p className='text-xl text-indigo-600 italic'>
              Where coffee, community, and creativity converge
            </p>
          </section>

          <section className='grid md:grid-cols-2 gap-8 mb-12'>
            <div className='bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105'>
              <h2 className='text-2xl font-semibold text-indigo-700 mb-4 flex items-center'>
                <FaCoffee className='mr-2' /> Specialty Coffee and Tea
              </h2>
              <p className='text-indigo-800'>
                Indulge in our carefully crafted selection of specialty coffees
                and teas. Each cup is a journey of flavors, sourced from the
                finest beans and leaves around the world.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105'>
              <h2 className='text-2xl font-semibold text-indigo-700 mb-4'>
                Delightful Snacks
              </h2>
              <p className='text-indigo-800'>
                Complement your beverage with our delicious array of:
              </p>
              <ul className='list-disc list-inside text-indigo-600 mt-2'>
                <li>Freshly baked bagels</li>
                <li>Mouthwatering muffins</li>
                <li>Organic snacks</li>
              </ul>
            </div>
          </section>

          <section className='bg-indigo-100 rounded-lg shadow-lg p-8 mb-12'>
            <h2 className='text-3xl font-bold text-indigo-800 mb-6 text-center'>
              Immerse Yourself in Culture
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='flex items-start'>
                <FaMusic className='text-4xl text-indigo-600 mr-4 mt-1' />
                <div>
                  <h3 className='text-xl font-semibold text-indigo-700 mb-2'>
                    Music and Poetry Readings
                  </h3>
                  <p className='text-indigo-800'>
                    Experience the soulful performances of local artists and
                    poets.
                  </p>
                </div>
              </div>
              <div className='flex items-start'>
                <FaMicrophoneAlt className='text-4xl text-indigo-600 mr-4 mt-1' />
                <div>
                  <h3 className='text-xl font-semibold text-indigo-700 mb-2'>
                    Open Mic Night Every Friday
                  </h3>
                  <p className='text-indigo-800'>
                    Showcase your talent or enjoy the diverse performances of
                    our community.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className='text-center bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-bold text-indigo-800 mb-4'>
              Visit Us
            </h2>
            <p className='flex items-center justify-center text-indigo-600 mb-2'>
              <FaMapMarkerAlt className='mr-2' /> 54321 Route 42, Ellison Bay,
              WI 54210
            </p>
            <p className='flex items-center justify-center text-indigo-600'>
              <FaPhone className='mr-2' /> 888-555-5555
            </p>
          </section>
        </main>
      </div>
    </motion.section>
  );
};

export default HomePage;
