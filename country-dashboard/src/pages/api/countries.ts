// API Route - pages/api/countries.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Country } from "../../types/Country";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Failed to fetch country data");
    }
    const data: Country[] = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
