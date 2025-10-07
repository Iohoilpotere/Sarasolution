
import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-20 sm:py-28 bg-black/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-base font-semibold text-blue-500 tracking-wider uppercase">Contatti</h2>
                    <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Pronto a Iniziare?
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        Compila il modulo sottostante o utilizza i nostri contatti diretti. Il nostro team è pronto a rispondere a ogni tua domanda.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                         <div>
                            <h3 className="text-xl font-semibold text-lime-400">Sede Operativa</h3>
                            <p className="text-gray-300 mt-1">Via Roma 1, 00100 Roma, IT</p>
                        </div>
                         <div>
                            <h3 className="text-xl font-semibold text-lime-400">Email</h3>
                            <a href="mailto:info@saras.land" className="text-blue-400 hover:underline mt-1 block">info@saras.land</a>
                        </div>
                         <div>
                            <h3 className="text-xl font-semibold text-lime-400">Telefono</h3>
                            <a href="tel:+390123456789" className="text-blue-400 hover:underline mt-1 block">+39 012 345 6789</a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Nome</label>
                            <input type="text" name="name" id="name" required className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Il tuo nome" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" required className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="La tua email" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Messaggio</label>
                            <textarea name="message" id="message" rows={5} required className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Come possiamo aiutarti?"></textarea>
                        </div>
                        <div>
                             <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-lime-500 hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-lime-500 transition transform hover:scale-105">
                                Invia Messaggio
                             </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
