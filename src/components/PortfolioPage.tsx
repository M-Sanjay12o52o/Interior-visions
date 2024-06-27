"use client"

import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Link from 'next/link';

const projects = [
    { id: 1, name: "Modern Loft Renovation", type: "Residential", date: "2023-11-15", description: "A spacious loft transformed into a minimalist haven." },
    { id: 2, name: "Eco-Friendly Office Space", type: "Commercial", date: "2023-09-22", description: "Sustainable design for a tech startup's headquarters." },
    { id: 3, name: "Coastal Retreat", type: "Residential", date: "2023-07-03", description: "Beach house with panoramic ocean views and natural textures." },
    { id: 4, name: "Boutique Hotel Lobby", type: "Commercial", date: "2023-05-18", description: "Luxurious and welcoming entrance for a boutique hotel." },
    { id: 5, name: "Urban Apartment Makeover", type: "Residential", date: "2023-03-30", description: "Small space transformed with smart storage solutions." },
    { id: 6, name: "Corporate Boardroom", type: "Commercial", date: "2023-01-12", description: "Elegant and tech-integrated meeting space for executives." },
    { id: 7, name: "Rustic Farmhouse Kitchen", type: "Residential", date: "2022-11-25", description: "Country charm meets modern functionality in this kitchen renovation." },
    { id: 8, name: "Innovative Co-working Space", type: "Commercial", date: "2022-09-08", description: "Flexible and inspiring workspace for freelancers and startups." },
    { id: 9, name: "Zen Garden Retreat", type: "Residential", date: "2022-07-20", description: "Tranquil outdoor space with Japanese-inspired elements." },
    { id: 10, name: "Upscale Restaurant Interior", type: "Commercial", date: "2022-05-03", description: "Sophisticated dining environment with custom lighting fixtures." },
    { id: 11, name: "Mid-Century Modern Living Room", type: "Residential", date: "2022-03-15", description: "Retro-inspired space with iconic furniture pieces." },
    { id: 12, name: "Contemporary Art Gallery", type: "Commercial", date: "2022-01-27", description: "Minimalist space designed to showcase modern artworks." },
    { id: 13, name: "Luxury Penthouse Suite", type: "Residential", date: "2021-11-09", description: "High-end urban living with panoramic city views." },
    { id: 14, name: "Wellness Center & Spa", type: "Commercial", date: "2021-09-22", description: "Calming and rejuvenating space for holistic treatments." },
    { id: 15, name: "Scandinavian-Inspired Bedroom", type: "Residential", date: "2021-07-05", description: "Cozy and functional bedroom with clean lines and natural materials." },
    { id: 16, name: "Tech Startup Office", type: "Commercial", date: "2021-05-18", description: "Playful and collaborative workspace for a young tech company." },
    { id: 17, name: "Industrial Chic Loft", type: "Residential", date: "2021-03-30", description: "Former warehouse converted into a stylish living space." },
    { id: 18, name: "Sustainable Cafe Design", type: "Commercial", date: "2021-01-12", description: "Eco-friendly coffee shop with reclaimed materials and green wall." },
];

const PortfolioPage = () => {
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProjects = projects.filter(project =>
        (filter === 'All' || project.type === filter) &&
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-md">
                <nav className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-bold text-gray-800">Interior Visions</div>
                        <div className="space-x-4">
                            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                            <Link href="/services" className="text-gray-600 hover:text-gray-800">Services</Link>
                            <Link href="/portfolio" className="text-gray-600 hover:text-gray-800">Portfolio</Link>
                            <Link href="/designers" className="text-gray-600 hover:text-gray-800">Designers</Link>
                            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Portfolio</h1>

                <div className="flex justify-between items-center mb-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search projects"
                            className="pl-10 pr-4 py-2 border rounded-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Filter className="text-gray-400" />
                        <select
                            className="border rounded-full px-4 py-2"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option>All</option>
                            <option>Residential</option>
                            <option>Commercial</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={`/api/placeholder/400/300?text=${encodeURIComponent(project.name)}`}
                                alt={project.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">{project.type}</span>
                                    <span className="text-sm text-gray-500">{new Date(project.date).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
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
                                <li><Link href={"/about"} className="hover:text-gray-300">About</Link></li>
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

export default PortfolioPage;