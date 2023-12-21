export const getGenitive = (name: string): string => {
    return name.endsWith('s') ? name : `${name}s`;
  };
