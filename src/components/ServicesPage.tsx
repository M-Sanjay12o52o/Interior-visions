import React from 'react';
import { ChevronRight, Home, Building2, Users, Palette, Calendar, DollarSign } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: 1,
        name: "Residential Design",
        icon: <Home className="w-12 h-12 text-indigo-600" />,
        description: "Transform your living spaces into personalized havens that reflect your style and meet your needs.",
        features: [
            "Custom furniture selection and arrangement",
            "Color scheme and material palette development",
            "Lighting design and fixture selection",
            "Space planning and layout optimization"
        ]
    },
    {
        id: 2,
        name: "Commercial Design",
        icon: <Building2 className="w-12 h-12 text-indigo-600" />,
        description: "Create functional and inspiring commercial spaces that boost productivity and leave a lasting impression on clients.",
        features: [
            "Office layout and workspace planning",
            "Branding integration in physical spaces",
            "Ergonomic furniture selection",
            "Commercial lighting and acoustics solutions"
        ]
    },
    {
        id: 3,
        name: "Consultation Services",
        icon: <Users className="w-12 h-12 text-indigo-600" />,
        description: "Get expert advice and guidance for your design projects, whether you're a DIY enthusiast or seeking professional input.",
        features: [
            "One-on-one design consultations",
            "Project feasibility assessments",
            "Design concept development",
            "Vendor and contractor recommendations"
        ]
    }
];

const process = [
    { id: 1, name: "Initial Consultation", description: "We discuss your vision, needs, and budget to establish project goals.", icon: <Users className="w-8 h-8 text-green-500" /> },
    { id: 2, name: "Concept Development", description: "Our team creates initial design concepts based on your requirements.", icon: <Palette className="w-8 h-8 text-green-500" /> },
    { id: 3, name: "Design Refinement", description: "We refine the chosen concept, incorporating your feedback.", icon: <ChevronRight className="w-8 h-8 text-green-500" /> },
    { id: 4, name: "Implementation", description: "We oversee the implementation of the design, coordinating with contractors.", icon: <Calendar className="w-8 h-8 text-green-500" /> },
    { id: 5, name: "Final Reveal", description: "We present the finished space and ensure your complete satisfaction.", icon: <Home className="w-8 h-8 text-green-500" /> }
];

const ServicesPage = () => {
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
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <div className="flex justify-center mb-4">{service.icon}</div>
                                <h2 className="text-2xl font-semibold mb-4 text-center">{service.name}</h2>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <ChevronRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-4">
                                <Link href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center justify-center">
                                    Learn More <ChevronRight className="w-5 h-5 ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Design Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {process.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-center">{step.name}</h3>
                                <p className="text-sm text-gray-600 text-center">{step.description}</p>
                                {index < process.length - 1 && (
                                    <ChevronRight className="w-8 h-8 text-gray-400 mt-4 hidden md:block" />
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-indigo-700 text-white rounded-lg p-8 mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-center">Ready to Transform Your Space?</h2>
                    <p className="text-center mb-8">Book a consultation with our expert designers and start your journey to a beautiful, functional space.</p>
                    <div className="flex justify-center">
                        <button className="bg-white text-indigo-700 font-bold py-2 px-6 rounded-full hover:bg-indigo-100 transition duration-300">
                            Book a Consultation
                        </button>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">How much does interior design cost?</h3>
                            <p className="text-gray-600">Our pricing varies based on the scope of the project. We offer flexible packages to suit different budgets and needs. Contact us for a personalized quote.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">How long does a typical project take?</h3>
                            <p className="text-gray-600">Project timelines can vary widely depending on the scale and complexity. A room refresh might take a few weeks, while a full home renovation could take several months.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Do you work with existing furniture and decor?</h3>
                            <p className="text-gray-600">Absolutely! We can incorporate your existing pieces into the new design or help you decide what to keep, replace, or refurbish.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Can you work within my budget?</h3>
                            <p className="text-gray-600">Yes, we pride ourselves on creating beautiful spaces within our clients' budgets. We'll work with you to prioritize spending and find creative solutions.</p>
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

export default ServicesPage;