import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
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
                            <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-6 py-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Us</h1>

                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
                    <p className="text-gray-600 mb-6">
                        At Interior Visions, we believe that every space has a unique story to tell. Founded in 2010, our mission has been to transform ordinary spaces into extraordinary experiences. With a team of passionate designers, we bring creativity, innovation, and attention to detail to every project we undertake.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Our journey started with a simple idea: to make beautiful and functional design accessible to everyone. Over the years, we have grown into a full-service interior design firm known for our commitment to excellence and our ability to create spaces that reflect the individuality of our clients.
                    </p>
                </section>

                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
                    <p className="text-gray-600 mb-6">
                        Our team is our greatest asset. Each member brings a wealth of experience and a unique perspective to the table, ensuring that we can tackle any design challenge with creativity and expertise.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <Image src="/api/placeholder/150/150?text=F" alt="Founder" className="w-24 h-24 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-center mb-2">Jane Doe</h3>
                            <p className="text-gray-600 text-center mb-2">Founder & CEO</p>
                            <p className="text-gray-600 text-center">Jane has over 20 years of experience in the design industry and a passion for creating beautiful, functional spaces.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <Image src="/api/placeholder/150/150?text=C" alt="Chief Designer" className="w-24 h-24 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-center mb-2">John Smith</h3>
                            <p className="text-gray-600 text-center mb-2">Chief Designer</p>
                            <p className="text-gray-600 text-center">John&apos;s innovative designs and attention to detail have won numerous awards and accolades.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <Image src="/api/placeholder/150/150?text=D" alt="Designer" className="w-24 h-24 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-center mb-2">Emily Johnson</h3>
                            <p className="text-gray-600 text-center mb-2">Senior Designer</p>
                            <p className="text-gray-600 text-center">Emily&apos;s designs are known for their elegance and sophistication, making her a favorite among clients.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Philosophy</h2>
                    <p className="text-gray-600 mb-6">
                        At Interior Visions, we believe that great design should not only be beautiful but also functional. Our philosophy is centered around understanding the unique needs and preferences of our clients and creating spaces that reflect their individuality.
                    </p>
                    <p className="text-gray-600 mb-6">
                        We are committed to sustainability and incorporate eco-friendly materials and practices into our designs whenever possible. Our goal is to create spaces that are not only aesthetically pleasing but also contribute to the well-being of our clients and the environment.
                    </p>
                </section>
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

export default AboutPage;
