import { useState, useMemo, useCallback } from 'react';
import { ColorShade } from '@/types/color';
import { colorData } from '@/data/colors';

export const useColors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState<ColorShade | null>(null);

  const filteredColors = useMemo(() => {
    if (!searchTerm.trim()) return colorData;
    return colorData.filter(color => 
      color.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleColorClick = useCallback((color: ColorShade) => {
    setSelectedColor(color);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedColor(null);
  }, []);

  return {
    searchTerm,
    selectedColor,
    filteredColors,
    handleSearchChange,
    handleColorClick,
    handleModalClose,
  };
};
