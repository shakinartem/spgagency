import { useEffect, useState } from "react";

const STORAGE_KEY = "spgsite-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem(STORAGE_KEY);
    setVisible(!accepted);
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-[1.75rem] border border-ember/25 bg-ink/95 p-4 shadow-panel backdrop-blur-lg sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm leading-6 text-sand/80">Мы используем cookies для корректной работы сайта.</p>
        <button type="button" className="btn-primary justify-center" onClick={handleAccept}>
          Понятно
        </button>
      </div>
    </div>
  );
}
