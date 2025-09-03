import { ColorShade } from '@/types/color';
import { ColorCard } from './ColorCard';

const getColorValue = (colorName: string): string => {
  const colorMap: { [key: string]: string } = {
    red: '#FF0000',
    blue: '#0000FF',
    green: '#008000',
    purple: '#800080',
    orange: '#FFA500',
    yellow: '#FFFF00',
    pink: '#FFC0CB',
    brown: '#8B4513',
    gray: '#808080',
    black: '#000000',
    white: '#FFFFFF',
    cyan: '#00FFFF',
  };
  return colorMap[colorName] || '#808080';
};

const getContrastColor = (colorName: string): string => {
  const lightColors = ['yellow', 'white', 'cyan'];
  return lightColors.includes(colorName) ? '#000000' : '#FFFFFF';
};

interface ColorGridProps {
  colors: ColorShade[];
  onColorClick: (color: ColorShade) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const ColorGrid = ({ colors, onColorClick, searchTerm, onSearchChange }: ColorGridProps) => {
  if (colors.length === 0) {
    return (
      <section className="text-center py-16" role="status" aria-live="polite">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No se encontraron colores</h3>
          <p className="text-gray-500 text-lg mb-4">No hay resultados para &quot;{searchTerm}&quot;</p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-6 max-w-md mx-auto">
          <p className="text-gray-600 font-medium mb-3">Intenta buscar con:</p>
          <div className="flex flex-wrap justify-center gap-2" role="list" aria-label="Sugerencias de búsqueda">
            {['red', 'blue', 'green', 'purple', 'orange', 'yellow', 'pink', 'brown', 'gray', 'black', 'white', 'cyan'].map((color) => (
              <button 
                key={color} 
                className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = getColorValue(color);
                  e.currentTarget.style.color = getContrastColor(color);
                  e.currentTarget.style.borderColor = getContrastColor(color);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#4b5563';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
                onClick={() => onSearchChange(color)}
                role="listitem"
                aria-label={`Buscar colores ${color}`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <main className="mb-8">
      <h2 className="sr-only">Cuadrícula de colores</h2>
      <div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-3 md:gap-4"
        role="grid"
        aria-label={`${colors.length} colores ${searchTerm ? `filtrados por &quot;${searchTerm}&quot;` : 'disponibles'}`}
      >
        {colors.map((color, index) => (
          <div 
            key={`${color.hex}-${index}`}
            className="animate-in fade-in zoom-in-95 duration-300"
            style={{ animationDelay: `${index * 50}ms` }}
            role="gridcell"
          >
            <ColorCard color={color} onColorClick={onColorClick} />
          </div>
        ))}
      </div>
    </main>
  );
};
