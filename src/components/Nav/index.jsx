import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom'; 
import Logo from '../../assets/Logo.png';
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/page', current: true }, 
  { name: 'Feedback', href: '/page#main-content', current: true },
  { name: 'Fazer Pedido', href: '/pedido', current: true }, 
];

function Nav() {
  const scrollToMainContent = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.scrollIntoView({ block: 'start', inline: 'nearest', duration: '1s' }); 
  };

  return (
    <Disclosure as="nav" className="bg-primary-800 shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href} 
                        onClick={item.name === 'Feedback' ? scrollToMainContent : null} 
                        className={`
                          ${item.current ? 'bg-secondary-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
                          rounded-md px-3 py-2 text-sm font-medium
                        `}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-secondary-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href} 
                  onClick={item.name === 'Feedback' ? scrollToMainContent : null} 
                  className={`
                    ${item.current ? 'bg-secondary-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
                    block px-3 py-2 rounded-md text-base font-medium
                  `}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
