import en from './en.json';
import es from './es.json';

const translations: Record<string, Record<string, any>> = {
  en,
  es,
};

export function getTranslation(lang: string): Record<string, any> {
  return translations[lang] || translations.en;
}

export function t(key: string, lang: string = 'en'): any {
  const keys = key.split('.');
  let value = getTranslation(lang);
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return value;
}

export function tReplace(key: string, replacements: Record<string, string>, lang: string = 'en'): string {
  let text = t(key, lang);
  if (typeof text !== 'string') return key;
  for (const [placeholder, value] of Object.entries(replacements)) {
    text = text.replace(`{${placeholder}}`, value);
  }
  return text;
}

export const supportedLanguages = ['en', 'es'];
export const defaultLanguage = 'en';
