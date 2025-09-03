import { useState } from 'react';
import { ColorShade } from '@/types/color';

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
        {/* Header */}
        <div className="flex justify-between items-start mb-4 md:mb-6">
          <div>
            <h3 id="modal-title" className="text-xl md:text-2xl font-bold text-primary-black mb-1">Detalles del Color</h3>
            <p id="modal-description" className="text-primary-gray text-sm">Información y valores del color</p>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-primary-white-smoke hover:bg-primary-light-gray transition-colors duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-palette-dodger-blue"
            aria-label="Cerrar modal de detalles del color"
          >
            <svg className="w-4 h-4 text-primary-dim-gray group-hover:text-primary-dark-gray transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Color Display */}
        <div className="relative mb-4 md:mb-6">
          <div 
            className="w-full h-24 md:h-32 rounded-2xl shadow-inner border-4 border-primary-white/50 relative overflow-hidden"
            style={{ backgroundColor: selectedColor.hex }}
          >
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/20" />
          </div>
        </div>
        
        {/* Color Information */}
        <div className="mb-4 md:mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div 
              className="bg-primary-white-smoke rounded-2xl p-4 cursor-pointer hover:bg-primary-gainsboro transition-colors duration-200 group"
              onClick={() => copyToClipboard(selectedColor.name, 'Nombre')}
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-primary-gray">Nombre</p>
                <svg className="w-4 h-4 text-primary-dark-gray-alt group-hover:text-primary-dim-gray transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-bold text-primary-black text-sm leading-tight">{selectedColor.name}</p>
            </div>

            <div 
              className="bg-primary-white-smoke rounded-2xl p-4 cursor-pointer hover:bg-primary-gainsboro transition-colors duration-200 group"
              onClick={() => copyToClipboard(selectedColor.hex, 'HEX')}
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-primary-gray">HEX</p>
                <svg className="w-4 h-4 text-primary-dark-gray-alt group-hover:text-primary-dim-gray transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-mono font-bold text-primary-black text-sm">{selectedColor.hex}</p>
            </div>
            
            <div 
              className="bg-primary-white-smoke rounded-2xl p-4 cursor-pointer hover:bg-primary-gainsboro transition-colors duration-200 group"
              onClick={() => copyToClipboard(selectedColor.rgb, 'RGB')}
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-primary-gray">RGB</p>
                <svg className="w-4 h-4 text-primary-dark-gray-alt group-hover:text-primary-dim-gray transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-mono font-bold text-primary-black text-xs leading-tight">{selectedColor.rgb}</p>
            </div>
          </div>
        </div>
        
        {/* Toast Notification */}
        {copiedText && (
          <div className="fixed top-4 right-4 z-[60] bg-primary-black text-primary-white px-4 py-2 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-palette-lime-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
