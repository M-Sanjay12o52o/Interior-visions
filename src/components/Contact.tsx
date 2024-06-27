import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
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
                            <Link href={"/about"} className="text-gray-600 hover:text-gray-800">About</Link>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-6 py-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">We&apos;d love to hear from you! Whether you have a question about our services, want to book a consultation, or just want to say hello, feel free to reach out to us.</p>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                            <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h2>
                    <p className="text-gray-600 mb-4">123 Design Street, Creativeville, ST 12345</p>
                    <p className="text-gray-600 mb-4">Phone: (555) 123-4567</p>
                    <p className="text-gray-600 mb-4">Email: info@interiorvisions.com</p>
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

export default ContactPage;
