export const Header = () => (
  <header className="text-center mb-12 relative" role="banner">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4" aria-hidden="true">
      <div className="w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
    </div>
    
    <div className="relative">
      <section className="mb-6">
        <div className="inline-flex items-center gap-2 sm:gap-3 mb-4">
          <div 
            className="hidden sm:flex w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300"
            aria-hidden="true"
          >
            <span className="text-xl sm:text-2xl" role="img" aria-label="Paleta de colores">🎨</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Explorador de Colores
          </h1>
        </div>
        
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mb-4" aria-hidden="true" />
        
        <p className="text-gray-600 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
          Descubre, explora y copia los colores perfectos para tus proyectos
        </p>
      </section>

      <section aria-labelledby="features-heading">
        <h2 id="features-heading" className="sr-only">Características principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8 px-4" role="list">
          <article 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:bg-white/90 hover:border-green-500/50 transition-all duration-300 group"
            role="listitem"
          >
            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300 text-sm sm:text-base">
              60 Tonalidades
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Explora una amplia gama de colores organizados por categorías
            </p>
          </article>

          <article 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:bg-white/90 hover:border-blue-500/50 transition-all duration-300 group"
            role="listitem"
          >
            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300 text-sm sm:text-base">
              Búsqueda Rápida
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Encuentra colores específicos escribiendo su nombre en inglés
            </p>
          </article>

          <article 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:bg-white/90 hover:border-purple-500/50 transition-all duration-300 group"
            role="listitem"
          >
            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300 text-sm sm:text-base">
              Copiar Códigos
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Haz clic en cualquier color para copiar su código HEX y RGB
            </p>
          </article>
        </div>
      </section>
    </div>
  </header>
);
