// Country Type Definition - types/Country.ts
export interface Country {
    name: {
      common: string;
      official: string;
    };
    flags: {
      png: string;
      svg: string;
    };
    capital?: string[];
    population: number;
    region: string;
    currencies?: Record<string, { name: string; symbol: string }>;
    languages?: Record<string, string>;
    timezones: string[];
  }