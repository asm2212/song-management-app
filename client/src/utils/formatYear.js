export const formatYear = (year) => {
    if (!year) return 'Unknown';
    return new Date(year).getFullYear();
  };