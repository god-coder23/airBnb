import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Languages, Check } from 'lucide-react';

const LanguageModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('language');
  const [translationEnabled, setTranslationEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!mounted) return null;

  const suggestedLanguages = [
    { name: 'English', region: 'United Kingdom' },
    { name: 'English', region: 'United States' },
    { name: 'हिन्दी', region: 'भारत' },
    { name: 'ಕನ್ನಡ', region: 'ಭಾರತ' },
    { name: 'मराठी', region: 'भारत' },
  ];

  const allLanguages = [
    { name: 'English', region: 'India', active: true },
    { name: 'Azərbaycan dili', region: 'Azərbaycan' },
    { name: 'Bahasa Indonesia', region: 'Indonesia' },
    { name: 'Bosanski', region: 'Bosna i Hercegovina' },
    { name: 'Català', region: 'Espanya' },
    { name: 'Čeština', region: 'Česká republika' },
    { name: 'Crnogorski', region: 'Crna Gora' },
    { name: 'Dansk', region: 'Danmark' },
    { name: 'Deutsch', region: 'Deutschland' },
    { name: 'Deutsch', region: 'Österreich' },
    { name: 'Deutsch', region: 'Schweiz' },
    { name: 'Deutsch', region: 'Luxemburg' },
    { name: 'Eesti', region: 'Eesti' },
    { name: 'English', region: 'Australia' },
    { name: 'English', region: 'Canada' },
    { name: 'English', region: 'Guyana' },
    { name: 'English', region: 'Ireland' },
    { name: 'English', region: 'New Zealand' },
    { name: 'English', region: 'Singapore' },
    { name: 'English', region: 'United Arab Emirates' },
  ];

  const allCurrencies = [
    { name: 'Indian rupee', symbol: 'INR - ₹', active: true },
    { name: 'United States dollar', symbol: 'USD - $' },
    { name: 'Australian dollar', symbol: 'AUD - $' },
    { name: 'Canadian dollar', symbol: 'CAD - $' },
    { name: 'Euro', symbol: 'EUR - €' },
    { name: 'British pound', symbol: 'GBP - £' },
    { name: 'New Zealand dollar', symbol: 'NZD - $' },
    { name: 'Swiss franc', symbol: 'CHF' },
    { name: 'Singapore dollar', symbol: 'SGD - $' },
    { name: 'Japanese yen', symbol: 'JPY - ¥' },
    { name: 'Chinese yuan', symbol: 'CNY - ￥' },
    { name: 'Emirati dirham', symbol: 'AED - د.إ' },
    { name: 'Mexican peso', symbol: 'MXN - $' },
    { name: 'Brazilian real', symbol: 'BRL - R$' },
    { name: 'South African rand', symbol: 'ZAR - R' },
  ];

  return createPortal(
    <div className="fixed inset-0 z-[10000] flex justify-center items-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-[1032px] max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 px-6 pt-5 pb-2">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors mb-4 -ml-2"
          >
            <X size={20} />
          </button>
          
          <div className="flex gap-6 border-b border-gray-200">
            <button 
              className={`pb-3 text-[15px] font-medium transition-colors relative ${activeTab === 'language' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('language')}
            >
              Language and region
              {activeTab === 'language' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </button>
            <button 
              className={`pb-3 text-[15px] font-medium transition-colors relative ${activeTab === 'currency' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('currency')}
            >
              Currency
              {activeTab === 'currency' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'language' && (
            <div className="flex flex-col gap-8 pb-10">
              
              {/* Translation Toggle Box */}
              <div className="bg-[#f7f7f7] rounded-xl p-5 flex justify-between items-center w-[48%]">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[15px]">Translation</span>
                    <Languages size={18} className="text-gray-600" />
                  </div>
                  <span className="text-[14px] text-gray-500">Automatically translate descriptions and reviews to English.</span>
                </div>
                <button 
                  onClick={() => setTranslationEnabled(!translationEnabled)}
                  className={`w-12 h-8 rounded-full transition-colors relative flex items-center px-1 ${translationEnabled ? 'bg-black' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform duration-200 ${translationEnabled ? 'translate-x-4' : 'translate-x-0'}`}>
                    {translationEnabled && <Check size={14} className="text-black" />}
                  </div>
                </button>
              </div>

              {/* Suggested Languages */}
              <div>
                <h2 className="text-[22px] font-medium mb-6">Suggested languages and regions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-2">
                  {suggestedLanguages.map((lang, idx) => (
                    <button key={idx} className="flex flex-col items-start p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-[14px] text-gray-800">{lang.name}</span>
                      <span className="text-[14px] text-gray-500">{lang.region}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* All Languages */}
              <div>
                <h2 className="text-[22px] font-medium mb-6">Choose a language and region</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-2">
                  {allLanguages.map((lang, idx) => (
                    <button 
                      key={idx} 
                      className={`flex flex-col items-start p-2 rounded-lg transition-colors border ${lang.active ? 'border-black hover:bg-gray-50' : 'border-transparent hover:bg-gray-100'}`}
                    >
                      <span className="text-[14px] text-gray-800">{lang.name}</span>
                      <span className="text-[14px] text-gray-500">{lang.region}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {activeTab === 'currency' && (
            <div className="flex flex-col gap-8 pb-10">
              <div>
                <h2 className="text-[22px] font-medium mb-6">Choose a currency</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-2">
                  {allCurrencies.map((currency, idx) => (
                    <button 
                      key={idx} 
                      className={`flex flex-col items-start p-2 rounded-lg transition-colors border ${currency.active ? 'border-black hover:bg-gray-50' : 'border-transparent hover:bg-gray-100'}`}
                    >
                      <span className="text-[14px] text-gray-800">{currency.name}</span>
                      <span className="text-[14px] text-gray-500">{currency.symbol}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>,
    document.body
  );
};

export default LanguageModal;
