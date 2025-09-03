import { ColorShade } from '@/types/color';
import { useState } from 'react';

interface ColorModalProps {
  selectedColor: ColorShade | null;
  onClose: () => void;
}

export const ColorModal = ({ selectedColor, onClose }: ColorModalProps) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!selectedColor) return null;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(`${type} copiado`);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <section 
        className="bg-white/95 backdrop-blur-md rounded-3xl p-4 md:p-8 max-w-sm md:max-w-md w-full mx-4 shadow-2xl transform animate-in zoom-in-95 slide-in-from-bottom-8 duration-300" 
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <div className="flex justify-between items-start mb-4 md:mb-6">
          <div>
            <h3 id="modal-title" className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Detalles del Color</h3>
            <p id="modal-description" className="text-gray-600 text-sm">Información y valores del color</p>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Cerrar modal de detalles del color"
          >
            <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="relative mb-4 md:mb-6">
          <div 
            className="w-full h-24 md:h-32 rounded-2xl shadow-inner border-4 border-white/50 relative overflow-hidden"
            style={{ backgroundColor: selectedColor.hex }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/20" />
          </div>
        </div>
        
        <div className="mb-4 md:mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div 
              className="bg-gray-100 rounded-2xl p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-200 group"
              onClick={() => copyToClipboard(selectedColor.name, 'Nombre')}
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-gray-600">Nombre</p>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-bold text-gray-900 text-sm leading-tight">{selectedColor.name}</p>
            </div>

            <div 
              className="bg-gray-100 rounded-2xl p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-200 group"
              onClick={() => copyToClipboard(selectedColor.hex, 'HEX')}
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-gray-600">HEX</p>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-mono font-bold text-gray-900 text-sm">{selectedColor.hex}</p>
            </div>
            
            <div 
              className="bg-gray-100 rounded-2xl p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-200 group"
              onClick={() => copyToClipboard(selectedColor.rgb, 'RGB')}
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-gray-600">RGB</p>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-mono font-bold text-gray-900 text-xs leading-tight">{selectedColor.rgb}</p>
            </div>
          </div>
        </div>
        
        {copiedText && (
          <div className="fixed top-4 right-4 z-[60] bg-black text-white px-4 py-2 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium">{copiedText}</span>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
