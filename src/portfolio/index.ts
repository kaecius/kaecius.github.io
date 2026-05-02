import type { PortfolioData } from '../types';
import { portfolioData as enData } from './en';
import { portfolioData as esData } from './es';

const portfolios: Record<string, PortfolioData> = {
  en: enData,
  es: esData,
};

export function getPortfolioData(lang: string = 'en'): PortfolioData {
  return portfolios[lang] || portfolios.en;
}

export { enData, esData };
export type { PortfolioData };
