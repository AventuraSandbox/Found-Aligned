import { useEffect, useRef } from 'react';
import { setTurnstileToken } from '@/lib/security';

interface TurnstileCaptchaProps {
  onVerify?: (token: string) => void;
  onError?: (error: string) => void;
}

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: any) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export default function TurnstileCaptcha({ onVerify, onError }: TurnstileCaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    
    if (!siteKey) {
      console.warn('Turnstile site key not found. CAPTCHA will be disabled.');
      return;
    }

    // Load Turnstile script if not already loaded
    if (!window.turnstile) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      
      script.onload = () => {
        renderCaptcha();
      };
    } else {
      renderCaptcha();
    }

    function renderCaptcha() {
      if (!containerRef.current || !window.turnstile) return;

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: 'light',
        callback: (token: string) => {
          setTurnstileToken(token);
          onVerify?.(token);
        },
        'expired-callback': () => {
          setTurnstileToken('');
          onError?.('CAPTCHA expired. Please try again.');
        },
        'error-callback': () => {
          setTurnstileToken('');
          onError?.('CAPTCHA error. Please try again.');
        },
      });
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    };
  }, [onVerify, onError]);

  return (
    <div className="flex justify-center">
      <div ref={containerRef} className="turnstile-container" />
    </div>
  );
}
