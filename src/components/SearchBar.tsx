interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => (
  <section className="w-full max-w-lg mb-8" role="search" aria-label="Búsqueda de colores">
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-palette-dark-orange/20 to-palette-dark-violet/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      
      <div className="relative bg-primary-white/80 backdrop-blur-md rounded-2xl border border-primary-light-gray/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <label htmlFor="color-search" className="sr-only">
          Buscar colores por nombre
        </label>
        <input
          id="color-search"
          type="text"
          placeholder="Buscar color (ej: red, blue, green...)"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-6 py-4 text-lg bg-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-palette-dodger-blue/50 text-primary-black placeholder-primary-gray font-medium"
          aria-describedby="search-help"
          autoComplete="off"
          spellCheck="false"
        />
        
        <div 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-palette-dark-orange to-palette-dark-violet rounded-xl flex items-center justify-center shadow-lg">
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Clear button when there's text */}
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-primary-silver hover:bg-primary-dark-gray-alt rounded-full flex items-center justify-center transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-palette-dodger-blue/50"
            aria-label="Limpiar búsqueda"
            type="button"
          >
            <svg 
              className="w-3 h-3 text-primary-dark-gray" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      <p id="search-help" className="sr-only">
        Escriba el nombre de un color en inglés para filtrar los resultados
      </p>
    </div>
  </section>
);
