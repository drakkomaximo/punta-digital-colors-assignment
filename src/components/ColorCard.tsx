import { ColorShade } from '@/types/color';

interface ColorCardProps {
  color: ColorShade;
  onColorClick: (color: ColorShade) => void;
}

export const ColorCard = ({ color, onColorClick }: ColorCardProps) => (
  <article
    role="button"
    tabIndex={0}
    onClick={() => onColorClick(color)}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onColorClick(color);
      }
    }}
    className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-palette-dodger-blue focus:ring-offset-2"
    aria-label={`Color ${color.name}, código ${color.hex}, ${color.rgb}. Haz clic para ver detalles.`}
  >
    {/* Color background with gradient overlay for depth */}
    <div 
      className="w-full aspect-square relative"
      style={{ backgroundColor: color.hex }}
      role="presentation"
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      
      {/* Floating tooltip on hover */}
      <div 
        className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0"
        aria-hidden="true"
      >
        <p className="text-xs font-medium truncate">{color.name}</p>
        <p className="text-xs opacity-80 font-mono">{color.hex}</p>
      </div>

      {/* Click indicator */}
      <div 
        className="absolute top-2 right-2 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 group-focus:scale-100"
        aria-hidden="true"
      >
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>

    {/* Ripple effect on click */}
    <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-active:scale-100 transition-transform duration-150 ease-out" aria-hidden="true" />
  </article>
);
