import { useMediaQuery } from 'react-responsive';


enum ViewportBoundary {
  mobile = 768,
}

export const Device = {
  mobile: `(max-width : ${ViewportBoundary.mobile - 1}px)`,
  desktop: `(min-width : ${ViewportBoundary.mobile}px)`,
};

export const useIsDesktop = () => {
  return useMediaQuery({ query: `(min-width : ${ViewportBoundary.mobile}px)` });
};

export const useIsMobile = () => {
  return useMediaQuery({ query: `(max-width : ${ViewportBoundary.mobile - 1}px)` });
};
