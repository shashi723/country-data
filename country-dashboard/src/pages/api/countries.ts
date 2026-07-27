// pages/api/countries.ts
import type { NextApiRequest, NextApiResponse } from 'next';
// Import your local JSON file here
import useCountries  from '../../hooks/useCountries';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {countries,
    loading,
    error,}= useCountries();
  // Get query parameters (default to page 1, 10 items per page)
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // Slice the JSON data for the requested page

  const paginatedCountries = countries.slice(startIndex, endIndex);
  const hasMore = endIndex < countries.length;

  res.status(200).json({
    data: paginatedCountries,
    hasMore,
  });
}
