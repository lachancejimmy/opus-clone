import React from 'react';
import { Menu, X, Video, Wand2, Layout, Subtitles, Share2 } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Enterprise', href: '#enterprise' },
    { name: 'Sign In', href: '#login' },
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Video className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ClipMaster</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors mt-4">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}