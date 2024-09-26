import React from 'react';
import { FaMusic } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MusicEvent = ({
  month,
  artist,
  description,
  imageUrl,
}: {
  month: string;
  artist: string;
  description: string[];
  imageUrl: string;
}) => (
  <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
    <h3 className='text-2xl font-semibold text-indigo-800 mb-4 bg-indigo-100 p-2 rounded'>
      {month}
    </h3>
    <div className='flex flex-col md:flex-row'>
      <img
        src={imageUrl}
        alt={artist}
        className='w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6'
      />
      <div>
        <h4 className='text-xl font-semibold text-indigo-700 mb-2'>{artist}</h4>
        {description.map((line, index) => (
          <p
            key={index}
            className='text-indigo-600 mb-2'
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  </div>
);

const MusicPage: React.FC = () => {
  return (
    <motion.section
      className='mb-12'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='bg-indigo-50 min-h-screen p-8'>
        <h1 className='text-4xl font-bold text-indigo-800 mb-6 flex items-center justify-center'>
          <FaMusic className='mr-4' />
          Music at JavaJam
        </h1>

        <p className='text-lg text-indigo-700 mb-8 text-center'>
          The first Friday night each month at JavaJam is a special night. Join
          us from 8pm to 11pm for some banger music.
        </p>

        <div className='max-w-4xl mx-auto'>
          <MusicEvent
            month='JANUARY'
            artist='Melanie Morris'
            description={[
              'Melanie Morris entertains with her melodic folk style.',
              'CDs are now available.',
            ]}
            imageUrl='https://i.pravatar.cc/200'
          />

          <MusicEvent
            month='FEBRUARY'
            artist='Tahoe Greg'
            description={[
              'Tahoe Greg is back from his tour.',
              'New Songs.',
              'New Stories.',
              'CDs are now available.',
            ]}
            imageUrl='https://i.pravatar.cc/199'
          />
        </div>
      </div>
    </motion.section>
  );
};

export default MusicPage;
