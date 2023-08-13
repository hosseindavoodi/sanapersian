"use client";

import { useMedia } from "./useMedia";

export const useDevice = () => {
  const isMobile = useMedia("(max-width: 819.98px)");
  const isTablet = useMedia("(min-width: 820px) and (max-width: 1200px)");

  switch (true) {
    case isMobile: {
      return "mobile";
    }
    case isTablet: {
      return "tablet";
    }
    default: {
      return "desktop";
    }
  }
};
