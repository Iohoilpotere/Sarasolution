
import React, { useState } from 'react';

const ClientDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
    return (
        <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white">Bentornato, Cliente!</h2>
                <button onClick={onLogout} className="text-sm text-gray-400 hover:text-lime-400 transition">Logout</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1: Work Progress */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-lime-400">Stato Lavori</h3>
                    <p className="text-sm text-gray-300 mt-2">Ristrutturazione Appartamento - Via Garibaldi</p>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-3">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Completamento: 75%</p>
                </div>

                {/* Card 2: Documents */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-lime-400">Documenti Personali</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><a href="#" className="text-blue-400 hover:underline">Contratto_2024.pdf</a></li>
                        <li><a href="#" className="text-blue-400 hover:underline">Certificazione_Impianto.pdf</a></li>
                        <li><a href="#" className="text-blue-400 hover:underline">Manuale_Caldaia.pdf</a></li>
                    </ul>
                </div>
                
                {/* Card 3: Support */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-lime-400">Assistenza</h3>
                    <p className="text-sm text-gray-400 mt-2">Hai bisogno di aiuto o vuoi segnalare un problema?</p>
                    <button className="mt-3 bg-transparent border border-blue-500 text-blue-400 px-4 py-2 text-sm rounded-md hover:bg-blue-500 hover:text-white transition">Apri un Ticket</button>
                </div>
            </div>
        </div>
    );
};

const ClientArea: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) { // Mock login
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Inserisci email e password.');
    }
  };

  const handleLogout = () => {
      setIsLoggedIn(false);
      setEmail('');
      setPassword('');
  };

  return (
    <div className="py-20 min-h-[calc(100vh-10rem)] flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700">
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl font-extrabold text-white tracking-tight text-center">Area Clienti</h1>
              <p className="mt-2 text-center text-gray-400">Accedi per visualizzare i tuoi progetti e documenti.</p>
              <form onSubmit={handleLogin} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Indirizzo Email" />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Password" />
                </div>
                 {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-lime-500 hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-lime-500 transition">
                    Accedi
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <ClientDashboard onLogout={handleLogout}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientArea;
