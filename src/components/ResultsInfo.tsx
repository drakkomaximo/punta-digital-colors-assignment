interface ResultsInfoProps {
  searchTerm: string;
  resultsCount: number;
}

export const ResultsInfo = ({ searchTerm, resultsCount }: ResultsInfoProps) => (
  <div className="text-center mb-6">
    <p className="text-gray-600">
      {searchTerm 
        ? `Mostrando ${resultsCount} tonalidades para "${searchTerm}"` 
        : `Mostrando todas las ${resultsCount} tonalidades (5 por cada color)`
      }
    </p>
  </div>
);
