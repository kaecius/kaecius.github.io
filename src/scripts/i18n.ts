import en from '../i18n/en.json';
import es from '../i18n/es.json';

const translations: Record<string, Record<string, any>> = {
  en,
  es,
};

function getTranslation(lang: string): Record<string, any> {
  return translations[lang] || translations.en;
}

function t(key: string, lang: string): string {
  const keys = key.split('.');
  let value = getTranslation(lang);
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

function tReplace(key: string, replacements: Record<string, string>, lang: string): string {
  let text = t(key, lang);
  for (const [placeholder, value] of Object.entries(replacements)) {
    text = text.replace(`{${placeholder}}`, value);
  }
  return text;
}

function updatePageLanguage(lang: string) {
  document.documentElement.lang = lang;
  
  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      const translation = t(key, lang);
      if (translation !== key) {
        el.textContent = translation;
      }
    }
  });
  
  // Toggle language-specific content blocks
  document.querySelectorAll('.lang-en, .lang-es').forEach((el) => {
    const htmlEl = el as HTMLElement;
    if (lang === 'es') {
      if (htmlEl.classList.contains('lang-es')) {
        htmlEl.style.display = '';
      } else if (htmlEl.classList.contains('lang-en')) {
        htmlEl.style.display = 'none';
      }
    } else {
      if (htmlEl.classList.contains('lang-en')) {
        htmlEl.style.display = '';
      } else if (htmlEl.classList.contains('lang-es')) {
        htmlEl.style.display = 'none';
      }
    }
  });
}

function initI18n() {
  const STORAGE_KEY = 'portfolio-lang';
  const DEFAULT_LANG = 'en';
  
  function getStoredLang(): string {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    }
    return DEFAULT_LANG;
  }
  
  function setLang(lang: string) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
    updatePageLanguage(lang);
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }
  
  // Initialize
  const initialLang = getStoredLang();
  updatePageLanguage(initialLang);
  
  // Listen for langchange events
  document.addEventListener('langchange', ((e: CustomEvent) => {
    updatePageLanguage(e.detail);
  }) as EventListener);
  
  // Expose globally
  (window as any).i18n = { getStoredLang, setLang };
}

// Run immediately
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
