export const getAssetPath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' 
      ? '/Portfolio_AryaRizal' 
      : '';
    return `${basePath}${path}`;
  };