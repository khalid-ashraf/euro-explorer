import CountriesList from "@/components/countriesList";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

const fetchCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/subregion/europe");
  const data = await response.json();
  return data;
};

export const Route = createFileRoute("/countries/")({
  component: RouteComponent,
  loader: fetchCountries,
});

function RouteComponent() {
  const [userInput, setUserInput] = useState<string>("");

  const countries = Route.useLoaderData();

  const filteredCountries = useMemo(
    () =>
      countries.filter((country: any) => {
        const matches = !userInput || country.name.common.toLowerCase().includes(userInput);
        return matches;
      }),
    [userInput]
  );

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-6'>Countries</h2>

      <form className='flex flex-col sm:flex-row gap-4 mb-6'>
        <input
          type='text'
          placeholder='Search by name...'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className='border border-gray-400 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500'
        />
      </form>

      <CountriesList countriesData={filteredCountries} />
    </div>
  );
}

