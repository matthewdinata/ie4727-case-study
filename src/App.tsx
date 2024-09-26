import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Navbar component
const Navbar = () => (
  <nav className='bg-indigo-100 p-4 py-8'>
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold text-indigo-800'>
        JavaJam Coffee House
      </h1>
      <ul className='flex space-x-4 mt-2'>
        <li>
          <Link
            to='/'
            className='text-indigo-800 hover:underline'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/menu'
            className='text-indigo-800 hover:underline'
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to='/music'
            className='text-indigo-800 hover:underline'
          >
            Music
          </Link>
        </li>
        <li>
          <Link
            to='/jobs'
            className='text-indigo-800 hover:underline'
          >
            Jobs
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

// Footer component
const Footer = () => (
  <footer className='text-center mt-8 p-4 text-sm text-gray-600'>
    <p>Copyright © 2024 JavaJam Coffee House</p>
    <p>
      <a
        href='mailto:react@vite.com'
        className='text-indigo-700 hover:underline'
      >
        react@vite.com
      </a>
    </p>
  </footer>
);

// Import pages
import Jobs from './pages/Jobs';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Music from './pages/Music';

// Main App component
const App = () => {
  return (
    <Router>
      <div className='bg-indigo-50 bg-opacity-20 min-h-screen flex flex-col w-screen'>
        <div className='m-10 border-gray-600 border-2 rounded-xl overflow-hidden'>
          <Navbar />
          <main className='flex-grow'>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/menu'
                element={<Menu />}
              />
              <Route
                path='/music'
                element={<Music />}
              />
              <Route
                path='/jobs'
                element={<Jobs />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
