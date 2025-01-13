import { useEffect } from 'react';

interface AdBannerProps {
  adUnitId: string;
  format?: 'BANNER' | 'LARGE_BANNER' | 'MEDIUM_RECTANGLE';
}

export function AdBanner({ adUnitId, format = 'BANNER' }: AdBannerProps) {
  useEffect(() => {
    // This is a placeholder for AdMob initialization
    // You'll need to replace this with actual AdMob implementation
    console.log(`Ad banner initialized with unit ID: ${adUnitId}`);
  }, [adUnitId]);

  return (
    <div className="w-full flex justify-center bg-background p-2">
      <div className="ad-container">
        {/* Placeholder for AdMob banner */}
        {process.env.NODE_ENV === 'development' && (
          <div className="h-[50px] bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-sm text-gray-500">
            Ad Placeholder
          </div>
        )}
      </div>
    </div>
  );
}