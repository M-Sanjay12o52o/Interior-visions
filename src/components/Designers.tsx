import React from 'react';
import { Star, Award, Bookmark } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const designers = [
    {
        id: 1,
        name: "Emma Thompson",
        specialty: "Modern Minimalism",
        experience: "10 years",
        bio: "Emma specializes in creating sleek, minimalist spaces that maximize functionality without sacrificing style.",
        awards: ["Best Residential Design 2022", "Innovation in Sustainability 2021"],
        rating: 4.9
    },
    {
        id: 2,
        name: "Michael Chen",
        specialty: "Scandinavian Chic",
        experience: "8 years",
        bio: "Michael's designs blend Scandinavian simplicity with warm, inviting elements to create cozy yet stylish interiors.",
        awards: ["Rising Star in Design 2023", "Best Commercial Space 2022"],
        rating: 4.8
    },
    {
        id: 3,
        name: "Sophia Patel",
        specialty: "Bohemian Eclectic",
        experience: "12 years",
        bio: "Sophia is known for her bold, eclectic designs that incorporate global influences and vibrant color palettes.",
        awards: ["Designer of the Year 2021", "Best Use of Color 2020"],
        rating: 4.7
    },
    {
        id: 4,
        name: "Liam O'Connor",
        specialty: "Industrial Chic",
        experience: "7 years",
        bio: "Liam excels in transforming raw, industrial spaces into sophisticated and comfortable living areas.",
        awards: ["Best Loft Conversion 2022", "Innovative Use of Materials 2021"],
        rating: 4.8
    },
    {
        id: 5,
        name: "Zoe Martinez",
        specialty: "Sustainable Luxury",
        experience: "9 years",
        bio: "Zoe combines eco-friendly materials and practices with high-end design for sustainable yet luxurious interiors.",
        awards: ["Green Designer of the Year 2023", "Best Sustainable Home 2022"],
        rating: 4.9
    },
    {
        id: 6,
        name: "Akira Tanaka",
        specialty: "Japanese Zen",
        experience: "15 years",
        bio: "Akira's designs embody the principles of Zen, creating serene and balanced spaces inspired by Japanese aesthetics.",
        awards: ["Lifetime Achievement Award 2022", "Best Cultural Integration 2021"],
        rating: 4.9
    }
];

const DesignersPage = () => {
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
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Expert Designers</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {designers.map((designer) => (
                        <div key={designer.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <Image src={`/api/placeholder/200/200?text=${designer.name.charAt(0)}`} alt={designer.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                                <h2 className="text-2xl font-semibold mb-2 text-center">{designer.name}</h2>
                                <p className="text-indigo-600 font-medium mb-2 text-center">{designer.specialty}</p>
                                <div className="flex items-center justify-center mb-4">
                                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                                    <span className="font-semibold">{designer.rating}</span>
                                    <span className="text-gray-600 ml-1">({designer.experience} exp)</span>
                                </div>
                                <p className="text-gray-600 mb-4">{designer.bio}</p>
                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2 flex items-center">
                                        <Award className="w-5 h-5 text-indigo-600 mr-2" /> Awards
                                    </h3>
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        {designer.awards.map((award, index) => (
                                            <li key={index}>{award}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4">
                                <button className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
                                    <Bookmark className="w-5 h-5 mr-2" /> Book a Consultation
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-8 mt-12">
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

export default DesignersPage;