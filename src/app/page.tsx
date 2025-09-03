'use client';

import { useColors } from '@/hooks/useColors';
import { 
  Header, 
  SearchBar, 
  ResultsInfo, 
  ColorGrid, 
  ColorModal,
  ScrollToTop
} from '@/components';

export default function Home() {
  const {
    searchTerm,
    selectedColor,
    filteredColors,
    handleSearchChange,
    handleColorClick,
    handleModalClose,
  } = useColors();

  return (
    <div className="min-h-screen bg-gray-50 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:24px_24px]">
      {/* Simple, clean content container */}
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Header />
          
          <div className="flex justify-center mb-12">
            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          </div>

          <ResultsInfo searchTerm={searchTerm} resultsCount={filteredColors.length} />

          <ColorGrid 
            colors={filteredColors} 
            onColorClick={handleColorClick} 
            searchTerm={searchTerm}
          />

          <ColorModal selectedColor={selectedColor} onClose={handleModalClose} />
          
          <ScrollToTop modalOpen={selectedColor !== null} />
        </div>
      </div>
    </div>
  );
}
