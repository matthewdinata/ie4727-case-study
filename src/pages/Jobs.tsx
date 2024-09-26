import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  startDate: string;
  experience: string;
};

const JobsPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitSuccess(true);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <motion.section
      className='mb-12'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='bg-indigo-50 bg-opacity-20'>
        <main className='container mx-auto mt-8 p-4'>
          <h2 className='text-2xl font-bold mb-4 text-indigo-900'>
            Jobs at JavaJam
          </h2>
          <p className='mb-4 text-indigo-900'>
            Want to work at JavaJam? Fill out the form below to start your
            application. Required fields are marked with an asterisk*
          </p>

          {submitSuccess ? (
            <div
              className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative'
              role='alert'
            >
              <strong className='font-bold'>Success!</strong>
              <span className='block sm:inline'>
                {' '}
                Your application has been submitted.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-4 flex flex-col text-indigo-900'
            >
              <div>
                <label
                  htmlFor='name'
                  className='block mb-1'
                >
                  *Name
                </label>
                <input
                  type='text'
                  id='name'
                  {...register('name', {
                    required: 'Name is required',
                    pattern: {
                      value: /^[A-Za-z][A-Za-z\s]*$/,
                      message: 'Name must only contain letters and spaces',
                    },
                  })}
                  className='w-full p-2 border rounded'
                />
                {errors.name && (
                  <span className='text-red-500 text-sm'>
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block mb-1'
                >
                  *Email
                </label>
                <input
                  type='email'
                  id='email'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className='w-full p-2 border rounded'
                />
                {errors.email && (
                  <span className='text-red-500 text-sm'>
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor='startDate'
                  className='block mb-1'
                >
                  *Start Date
                </label>
                <input
                  type='date'
                  id='startDate'
                  {...register('startDate', {
                    required: 'Start Date is required',
                    min: {
                      value: getTomorrowDate(),
                      message: 'Start Date must be from tomorrow onwards',
                    },
                  })}
                  className='w-full p-2 border rounded'
                />
                {errors.startDate && (
                  <span className='text-red-500 text-sm'>
                    {errors.startDate.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor='experience'
                  className='block mb-1'
                >
                  *Experience
                </label>
                <textarea
                  id='experience'
                  {...register('experience', {
                    required: 'Experience is required',
                  })}
                  className='w-full p-2 border rounded'
                  rows={4}
                ></textarea>
                {errors.experience && (
                  <span className='text-red-500 text-sm'>
                    {errors.experience.message}
                  </span>
                )}
              </div>

              <button
                type='submit'
                className='bg-indigo-800 text-white px-4 py-2 rounded hover:bg-indigo-700 ml-auto'
              >
                Apply Now
              </button>
            </form>
          )}
        </main>
      </div>
    </motion.section>
  );
};

export default JobsPage;
