interface ResultsInfoProps {
  searchTerm: string;
  resultsCount: number;
}

export const ResultsInfo = ({ searchTerm, resultsCount }: ResultsInfoProps) => {
  if (!searchTerm.trim()) {
    return (
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Paleta Completa de Colores
        </h2>
        <p className="text-gray-600">
          {resultsCount} colores disponibles para explorar
        </p>
      </div>
    );
  }

  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Resultados de Búsqueda
      </h2>
      <p className="text-gray-600">
        {resultsCount} color{resultsCount !== 1 ? 'es' : ''} encontrado{resultsCount !== 1 ? 's' : ''} para &quot;{searchTerm}&quot;
      </p>
    </div>
  );
};
