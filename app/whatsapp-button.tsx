"use client";

const GROUP_URL = "https://chat.whatsapp.com/E9sBSuJxDsGDc7Ea4dr0MI";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function WhatsAppButton() {
  // O link abre em nova aba pelo próprio navegador (sem bloqueio de pop-up);
  // a página atual continua aberta, então o evento Contact termina de enviar.
  const handleClick = () => {
    window.fbq?.("track", "Contact");
  };

  return (
    <a
      href={GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="cta"
      onClick={handleClick}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="cta-icon">
        <path
          fill="currentColor"
          d="M16.003 3C8.832 3 3 8.83 3 16c0 2.292.6 4.53 1.74 6.5L3 29l6.68-1.71A12.95 12.95 0 0 0 16.003 29C23.17 29 29 23.17 29 16S23.17 3 16.003 3Zm0 23.62c-2.01 0-3.98-.54-5.7-1.56l-.41-.24-3.96 1.02 1.06-3.86-.27-.42A10.6 10.6 0 0 1 5.38 16c0-5.86 4.77-10.62 10.63-10.62 5.85 0 10.61 4.76 10.61 10.62 0 5.85-4.76 10.62-10.62 10.62Zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.57 1.14 3.08 1.3 3.29.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z"
        />
      </svg>
      Entrar no grupo VIP
    </a>
  );
}
