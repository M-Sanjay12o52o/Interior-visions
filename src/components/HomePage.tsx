"use client"

import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';

const designers = [
    { name: 'Emma Thompson', specialty: 'Modern Minimalism', rating: 4.9 },
    { name: 'Michael Chen', specialty: 'Scandinavian Chic', rating: 4.8 },
    { name: 'Sophia Patel', specialty: 'Bohemian Eclectic', rating: 4.7 },
];

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-md">
                <nav className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-bold text-gray-800">Interior Visions</div>
                        <div className="space-x-4">
                            <Link href={"/"} className="text-gray-600 hover:text-gray-800">Home</Link>
                            <Link href={"/services"} className="text-gray-600 hover:text-gray-800">Services</Link>
                            <Link href={"/portfolio"} className="text-gray-600 hover:text-gray-800">Portfolio</Link>
                            <Link href={"/designers"} className="text-gray-600 hover:text-gray-800">Designers</Link>
                            <Link href={"/contact"} className="text-gray-600 hover:text-gray-800">Contact</Link>
                            <Link href={"/about"} className="text-gray-600 hover:text-gray-800">About</Link>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <section className="relative h-96">
                    <img src="/api/placeholder/1200/400" alt="Interior design showcase" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white mb-4">Transform Your Space</h1>
                            <p className="text-xl text-white mb-6">Discover the perfect design for your home</p>
                            <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
                                Get Started
                            </button>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-6 py-12">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Featured Designers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {designers.map((designer, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                <img src={`/api/placeholder/150/150?text=${designer.name.charAt(0)}`} alt={designer.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-center mb-2">{designer.name}</h3>
                                <p className="text-gray-600 text-center mb-2">{designer.specialty}</p>
                                <div className="flex justify-center items-center">
                                    <Star className="text-yellow-400 w-5 h-5" />
                                    <span className="ml-1 text-gray-600">{designer.rating}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-gray-200 py-12">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-semibold mb-4">Residential Design</h3>
                                <p className="text-gray-600 mb-4">Create your dream home with our expert residential design services.</p>
                                <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-semibold mb-4">Commercial Spaces</h3>
                                <p className="text-gray-600 mb-4">Transform your business environment with our commercial design expertise.</p>
                                <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-semibold mb-4">Consultation</h3>
                                <p className="text-gray-600 mb-4">Get professional advice and insights to kickstart your design project.</p>
                                <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Interior Visions</h3>
                            <p className="text-sm">Transforming spaces, inspiring lives.</p>
                        </div>
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                            <ul className="text-sm">
                                <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                                <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
                                <li><Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link></li>
                                <li><Link href="/designers" className="hover:text-gray-300">Designers</Link></li>
                                <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
                                <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                            <p className="text-sm">123 Design Street, Creativeville, ST 12345</p>
                            <p className="text-sm">Phone: (555) 123-4567</p>
                            <p className="text-sm">Email: info@interiorvisions.com</p>
                        </div>
                        <div className="w-full md:w-1/4">
                            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                            <div className="flex space-x-4">
                                <Link href="#" className="hover:text-gray-300">Facebook</Link>
                                <Link href="#" className="hover:text-gray-300">Instagram</Link>
                                <Link href="#" className="hover:text-gray-300">Pinterest</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
                        <p>&copy; 2024 Interior Visions. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;