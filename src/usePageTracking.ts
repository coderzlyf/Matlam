import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-CBP5LJL6S6";

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: location.pathname,
    });
  }, [location]);
};