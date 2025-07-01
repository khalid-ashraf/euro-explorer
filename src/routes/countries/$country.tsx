import { createFileRoute } from "@tanstack/react-router";

const fetchCountry = async (country: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
  const data = await response.json();
  return data;
};

export const Route = createFileRoute("/countries/$country")({
  component: CountryPage,
  loader: async ({ params }) => {
    return fetchCountry(params.country);
  },
});

function CountryPage() {
  const countryData = Route.useLoaderData();
  const country = {
    name: countryData[0]?.name.common || "N/A",
    officialName: countryData[0]?.name.official || "N/A",
    subregion: countryData[0]?.subregion || "N/A",
    capital: countryData[0]?.capital || "N/A",
    population: countryData[0]?.population || "N/A",
    flagUrl: countryData[0]?.flags.png || "N/A",
    flagAlt: countryData[0]?.flags.alt || `${countryData[0]?.name.common}'s flag`,
  };
  return (
    <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-bold text-gray-900'>{country.name}</h2>

        <div className='space-y-2 text-gray-700'>
          <p>
            <span className='font-semibold'>Official Name:</span> {country.officialName}
          </p>

          <p>
            <span className='font-semibold'>Capital:</span> {country.capital}
          </p>

          <p>
            <span className='font-semibold'>Subregion:</span> {country.subregion}
          </p>

          <p>
            <span className='font-semibold'>Population:</span> {country.population.toLocaleString()}
          </p>
        </div>
      </div>

      {country.flagUrl && (
        <div className='flex justify-center items-center'>
          <img
            src={country.flagUrl}
            className='w-56 h-auto border rounded shadow-lg'
            alt={country.flagAlt}
          />
        </div>
      )}
    </div>
  );
}

