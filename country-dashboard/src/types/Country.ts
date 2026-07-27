// Country Type Definition - types/Country.ts
export interface Country {
    names: {
      common: string;
      official: string;
    };
    flag?: {
      url_png: string;
      url_svg: string;
    };
    capitals?: {
      name: string;
    }[];
    population: number;
    region: string;
    currencies?: Record<string, { name: string; symbol: string }>;
    languages?: Record<string, string>;
    timezones: string[];
  }