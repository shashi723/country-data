// Dynamic Country Page - pages/[country].tsx
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import { Country } from "../types/Country";
import CountryDetails from "../components/CountryDetails";

import countryData from "../data/country-data.json";
const countriesData = countryData.data.objects;

interface CountryPageProps {
  country: Country;
}

const CountryPage: React.FC<CountryPageProps> = ({ country }) => {
  return (
    <div>
      <CountryDetails country={country} />
    </div>
  );
};

export default CountryPage;




export const getStaticPaths: GetStaticPaths = async () => {
   
    const paths = countriesData.map((country) => ({
      params: { country: country.names.common.toLowerCase().replace(/\s+/g, "-") },
    }));
  
    return { paths, fallback: false };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {

    const country = countriesData.find((c) => c.names.common.toLowerCase().replace(/\s+/g, "-") === params?.country);
  
    if (!country) {
      return { notFound: true };
    }
  
    return {
      props: { country },
    };
}