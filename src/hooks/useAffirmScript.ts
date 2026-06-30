import { useEffect, useState } from "react";

export default function useAffirmScript(publicKey: string) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    // If already loaded globally, skip
    if (window.affirm) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = process.env.REACT_APP_AFFIRM_SCRIPT_URL || "https://cdn1-sandbox.affirm.com/js/v2/affirm.js";
    script.async = true;

    script.onload = () => {
      // Wait until affirm.ui.ready() to be safe
      window.affirm.ui.ready(() => {
        setLoaded(true);
      });
    };

    script.onerror = () => {
      setError("Failed to load Affirm script.");
    };

    document.body.appendChild(script);

    return () => {
      // cleanup if component unmounts before load
      script.onload = null;
      script.onerror = null;
    };
  }, []);

  return { loaded, error };
}