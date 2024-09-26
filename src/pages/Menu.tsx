import React, { useState, useEffect } from 'react';
import { FaCoffee, FaMugHot, FaIceCream } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MenuPage: React.FC = () => {
  const [justJavaQty, setJustJavaQty] = useState(0);
  const [cafeAuLaitQty, setCafeAuLaitQty] = useState(0);
  const [cafeAuLaitSize, setCafeAuLaitSize] = useState<'single' | 'double'>(
    'single'
  );
  const [icedCappuccinoQty, setIcedCappuccinoQty] = useState(0);
  const [icedCappuccinoSize, setIcedCappuccinoSize] = useState<
    'single' | 'double'
  >('single');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const justJavaTotal = justJavaQty * 2;
    const cafeAuLaitTotal =
      cafeAuLaitQty * (cafeAuLaitSize === 'single' ? 2 : 3);
    const icedCappuccinoTotal =
      icedCappuccinoQty * (icedCappuccinoSize === 'single' ? 4.75 : 5.75);

    setTotalPrice(justJavaTotal + cafeAuLaitTotal + icedCappuccinoTotal);
  }, [
    justJavaQty,
    cafeAuLaitQty,
    cafeAuLaitSize,
    icedCappuccinoQty,
    icedCappuccinoSize,
  ]);

  const MenuItem = ({
    icon,
    name,
    description,
    price,
    quantity,
    setQuantity,
    size,
    setSize,
    getSubtotal,
  }: {
    icon: React.ReactNode;
    name: string;
    description: string;
    price: string;
    quantity: number;
    setQuantity: (qty: number) => void;
    size?: 'single' | 'double';
    setSize?: (size: 'single' | 'double') => void;
    getSubtotal: () => number;
  }) => (
    <div className='bg-white rounded-lg shadow-md p-6 pb-10 transition duration-300 hover:shadow-xl'>
      <div className='flex items-center mb-4'>
        <div className='text-indigo-600 text-3xl mr-4'>{icon}</div>
        <h3 className='text-2xl font-semibold text-indigo-800'>{name}</h3>
      </div>
      <p className='text-indigo-600 mb-4'>{description}</p>
      <div className='flex justify-between items-center mb-4'>
        <div>
          {price}
          {size && setSize && (
            <div className='mt-2'>
              <label className='inline-flex items-center mr-4'>
                <input
                  type='radio'
                  className='form-radio text-indigo-600'
                  name={`${name}Size`}
                  value='single'
                  checked={size === 'single'}
                  onChange={() => setSize('single')}
                />
                <span className='ml-2'>Single</span>
              </label>
              <label className='inline-flex items-center'>
                <input
                  type='radio'
                  className='form-radio text-indigo-600'
                  name={`${name}Size`}
                  value='double'
                  checked={size === 'double'}
                  onChange={() => setSize('double')}
                />
                <span className='ml-2'>Double</span>
              </label>
            </div>
          )}
        </div>
        <div className='flex items-center'>
          <button
            className='bg-indigo-500 text-white px-3 py-1 rounded-l hover:bg-indigo-600'
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
          >
            -
          </button>
          <input
            type='number'
            min='0'
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className='w-16 text-center border-t border-b border-indigo-500 py-1'
          />
          <button
            className='bg-indigo-500 text-white px-3 py-1 rounded-r hover:bg-indigo-600'
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className='text-right font-semibold text-indigo-800 absolute'>
        Subtotal: ${getSubtotal().toFixed(2)}
      </div>
    </div>
  );

  return (
    <motion.section
      className='mb-12'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='bg-indigo-50 p-8'>
        <h1 className='text-4xl font-bold text-indigo-800 mb-8 text-center'>
          Coffee at JavaJam
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
          <MenuItem
            icon={<FaCoffee />}
            name='Just Java'
            description='Regular house blend, decaffeinated coffee, or flavor of the day'
            price='Endless Cup $2.00'
            quantity={justJavaQty}
            setQuantity={setJustJavaQty}
            getSubtotal={() => justJavaQty * 2}
          />
          <MenuItem
            icon={<FaMugHot />}
            name='Cafe au Lait'
            description='House blended coffee infused into a smooth, steamed milk'
            price='Single $2.00 / Double $3.00'
            quantity={cafeAuLaitQty}
            setQuantity={setCafeAuLaitQty}
            size={cafeAuLaitSize}
            setSize={setCafeAuLaitSize}
            getSubtotal={() =>
              cafeAuLaitQty * (cafeAuLaitSize === 'single' ? 2 : 3)
            }
          />
          <MenuItem
            icon={<FaIceCream />}
            name='Iced Cappuccino'
            description='Sweetened Espresso Blended with icy-cold milk and served in a chilled glass'
            price='Single $4.75 / Double $5.75'
            quantity={icedCappuccinoQty}
            setQuantity={setIcedCappuccinoQty}
            size={icedCappuccinoSize}
            setSize={setIcedCappuccinoSize}
            getSubtotal={() =>
              icedCappuccinoQty *
              (icedCappuccinoSize === 'single' ? 4.75 : 5.75)
            }
          />
        </div>

        <div className='bg-white rounded-lg shadow-md p-6'>
          <div className='text-right text-3xl font-bold text-indigo-800'>
            Total: ${totalPrice.toFixed(2)}
          </div>
          <button className='mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300'>
            Place Order
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default MenuPage;
