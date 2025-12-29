import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="">
            <div className="mx-auto">
                <div className="flex justify-end items-center h-16">
                    <div className="flex space-x-12">
                        <a href="#" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Accueil
                        </a>
                        <a href="#" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            À propos
                        </a>
                        <a href="#" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div >
        </nav >
    );
};

export default Navbar;
