// Dynamic Country Page - pages/[country].tsx
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import { Country } from "../types/Country";
import CountryDetails from "../components/CountryDetails";

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
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries: Country[] = await res.json();
  
    const paths = countries.map((country) => ({
      params: { country: country.name.common.toLowerCase().replace(/\s+/g, "-") },
    }));
  
    return { paths, fallback: false };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries: Country[] = await res.json();
  
    const country = countries.find((c) => c.name.common.toLowerCase().replace(/\s+/g, "-") === params?.country);
  
    if (!country) {
      return { notFound: true };
    }
  
    return {
      props: { country },
    };
}