
import React, { useState } from 'react';
import { getServiceSuggestions } from '../services/geminiService';
import { Page, EstimatorFormData, GeminiSuggestion } from '../types';
import { ESTIMATOR_SERVICES } from '../constants';
import { CheckIcon } from './icons/CheckIcon';

interface EstimatorProps {
  setCurrentPage: (page: Page) => void;
}

const Estimator: React.FC<EstimatorProps> = ({ setCurrentPage }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<EstimatorFormData>({
    serviceType: [],
    projectDetails: '',
    name: '',
    email: '',
    phone: '',
  });
  const [geminiPrompt, setGeminiPrompt] = useState('');
  const [suggestions, setSuggestions] = useState<GeminiSuggestion | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const toggleService = (service: string) => {
    setFormData(prev => {
        const newServices = prev.serviceType.includes(service)
            ? prev.serviceType.filter(s => s !== service)
            : [...prev.serviceType, service];
        return { ...prev, serviceType: newServices };
    });
  };

  const fetchSuggestions = async () => {
    if (!geminiPrompt) return;
    setIsLoading(true);
    setSuggestions(null);
    const result = await getServiceSuggestions(geminiPrompt);
    setSuggestions(result);
    setIsLoading(false);
  };
  
  const applySuggestions = () => {
    if (suggestions) {
        setFormData(prev => ({ ...prev, serviceType: [...new Set([...prev.serviceType, ...suggestions.suggestedServices])] }));
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    handleNext(); // Move to confirmation step
  };
  
  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Di cosa hai bisogno?</h2>
            <p className="text-gray-400 mb-6">Seleziona uno o più servizi, oppure descrivi il tuo progetto e lascia che la nostra AI ti suggerisca le soluzioni migliori.</p>
            
            <div className="bg-gray-800/50 p-4 rounded-lg mb-6 border border-blue-500/30">
                <label htmlFor="gemini-prompt" className="block text-sm font-medium text-lime-400 mb-2">Descrivi il tuo progetto (Es: "Voglio rinnovare il mio appartamento e renderlo più efficiente")</label>
                <div className="flex gap-2">
                    <textarea id="gemini-prompt" rows={2} value={geminiPrompt} onChange={(e) => setGeminiPrompt(e.target.value)} className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" />
                    <button onClick={fetchSuggestions} disabled={isLoading} className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 disabled:bg-gray-500 transition">
                        {isLoading ? 'Analisi...' : 'Suggerisci'}
                    </button>
                </div>
                {suggestions && (
                    <div className="mt-4 p-4 bg-gray-700 rounded-md">
                        <p className="text-sm text-gray-300 mb-2">{suggestions.reasoning}</p>
                        <div className="flex flex-wrap gap-2">
                            {suggestions.suggestedServices.map(s => <span key={s} className="bg-lime-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">{s}</span>)}
                        </div>
                         <button onClick={applySuggestions} className="mt-3 text-sm text-lime-400 hover:underline">Applica Suggerimenti</button>
                    </div>
                )}
            </div>

            <h3 className="font-semibold text-white mb-4">Oppure seleziona manualmente i servizi:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {ESTIMATOR_SERVICES.map(service => (
                    <button key={service} onClick={() => toggleService(service)} className={`p-3 text-left rounded-md border-2 transition ${formData.serviceType.includes(service) ? 'bg-blue-600 border-blue-500 text-white' : 'bg-gray-700 border-gray-600 hover:border-blue-500'}`}>
                        {service}
                    </button>
                ))}
            </div>
          </div>
        );
      case 2:
        return (
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Dettagli del Progetto</h2>
              <p className="text-gray-400 mb-6">Fornisci maggiori informazioni per aiutarci a creare un preventivo accurato.</p>
              <textarea name="projectDetails" value={formData.projectDetails} onChange={handleInputChange} rows={6} placeholder="Descrivi qui le tue necessità, dimensioni, materiali preferiti, etc." className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" />
            </div>
        );
      case 3:
        return (
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Informazioni di Contatto</h2>
              <p className="text-gray-400 mb-6">Quasi fatto! Abbiamo solo bisogno di sapere come contattarti.</p>
              <div className="space-y-4">
                  <input type="text" name="name" placeholder="Nome e Cognome" value={formData.name} onChange={handleInputChange} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" required/>
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" required/>
                  <input type="tel" name="phone" placeholder="Telefono (opzionale)" value={formData.phone} onChange={handleInputChange} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" />
              </div>
            </div>
        );
      case 4:
          return (
              <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-lime-500 mb-4">
                      <CheckIcon />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Richiesta Inviata!</h2>
                  <p className="text-gray-300 mt-2">Grazie, {formData.name}. Abbiamo ricevuto la tua richiesta.</p>
                  <p className="text-gray-400 mt-1">Un nostro specialista ti contatterà al più presto all'indirizzo {formData.email}.</p>
                  <button onClick={() => setCurrentPage(Page.Home)} className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
                      Torna alla Home
                  </button>
              </div>
          )
      default:
        return null;
    }
  }
  
  const progressWidth = step > 3 ? '100%' : `${((step -1) / 3) * 100}%`;

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
            {step <= 3 && (
                <div className="mb-8">
                    <div className="bg-gray-700 rounded-full h-2">
                        <div className="bg-lime-500 rounded-full h-2" style={{width: progressWidth, transition: 'width 0.5s ease-in-out'}}></div>
                    </div>
                </div>
            )}
            
            <form onSubmit={handleSubmit}>
                <div className="min-h-[300px]">
                    {renderStep()}
                </div>
                {step <= 3 && (
                     <div className="mt-8 flex justify-between items-center">
                      <button type="button" onClick={handleBack} disabled={step === 1} className="text-gray-400 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed">
                        Indietro
                      </button>
                      {step < 3 ? (
                        <button type="button" onClick={handleNext} disabled={(step === 1 && formData.serviceType.length === 0)} className="bg-lime-500 text-gray-900 px-6 py-2 rounded-md font-bold hover:bg-lime-400 transition transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed">
                          Avanti
                        </button>
                      ) : (
                        <button type="submit" className="bg-lime-500 text-gray-900 px-6 py-2 rounded-md font-bold hover:bg-lime-400 transition transform hover:scale-105">
                          Invia Richiesta
                        </button>
                      )}
                    </div>
                )}
            </form>
        </div>
      </div>
    </div>
  );
};

export default Estimator;
