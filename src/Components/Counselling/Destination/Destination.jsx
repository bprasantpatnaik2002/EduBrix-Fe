import React from 'react'
import Card from './Card'

function Destination() {

  // flag code in countries will be used to get the flag image using a free api

  const countries = [
    {
      "name": "United States of America",
      "capital": "Washington, D.C.",
      "largeCities": ["New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville"],
      "areaSize": "9,833,520 km²",
      "language": "English",
      "population": "334,233,854",
      "currency": "United States dollar (USD)",
      "universities": "1,250",
      "internationalStudents": "1,057,190",
      "flagCode":"us",
      "fileId":"14GHjM7_JBcjEk6vhYuUlMTCAGNUrFdPS"
    },
    {
      "name": "United Kingdom",
      "capital": "London",
      "largeCities": ["Manchester", "Glasgow", "Newcastle", "Sheffield", "Liverpool", "Leeds", "Bristol", "Belfast"],
      "areaSize": "242,495 km²",
      "language": "English",
      "population": "67,736,802",
      "currency": "Pound sterling (GBP)",
      "universities": "111",
      "internationalStudents": "758,855",
      "flagCode":"gb",
      "fileId":"1A_IVVKD8dEnS0nnzpciEWufCqKWDyPyz"
    },
    {
      "name": "Australia",
      "capital": "Canberra",
      "largeCities": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
      "areaSize": "7,692,024 km²",
      "language": "English",
      "population": "26,473,055",
      "currency": "Australian dollar (AUD)",
      "universities": "43",
      "internationalStudents": "786,890",
      "flagCode":"au",
      "fileId":"1gnmajxPd5bGiRXy--Gjy9cx2CVlISKVJ"
    },
    {
      "name": "Ireland",
      "capital": "Dublin",
      "largeCities": ["Belfast", "Cork", "Derry", "Limerick", "Galway", "Craigavon", "Waterford", "Drogheda", "Dundalk"],
      "areaSize": "84,421 km²",
      "language": "English, Irish, Ulster Scots",
      "population": "5,056,935",
      "currency": "Euro (EUR)",
      "universities": "22",
      "internationalStudents": "35,140",
      "flagCode":"ie",
      "fileId":"1VbiAdOhMsBaE6ct4e45xlFEc4uR5TdRx"
    },
    {
      "name": "France",
      "capital": "Paris",
      "largeCities": ["Marseille", "Lyon", "Nice", "Nantes", "Montpellier", "Strasbourg", "Bordeaux"],
      "areaSize": "640,679 km²",
      "language": "French",
      "population": "64,756,584",
      "currency": "Euro (EUR)",
      "universities": "100",
      "internationalStudents": "400,000",
      "flagCode":"fr",
      "fileId":"1iNXNPmpot2yXXe-7QgN8xH6rA9ZnDAWw"
    },
    {
      "name": "Germany",
      "capital": "Berlin",
      "largeCities": ["Hamburg", "Munich", "Cologne", "Frankfurt am Main", "Stuttgart", "Düsseldorf", "Dortmund"],
      "areaSize": "357,022 km²",
      "language": "German",
      "population": "83,294,633",
      "currency": "Euro (EUR)",
      "universities": "380",
      "internationalStudents": "367,578",
      "flagCode":"de",
      "fileId":"19bFJ20X-FtBXhepQO0F4dqqUgefUnShT"
    },
    {
      "name": "Switzerland",
      "capital": "Bern",
      "largeCities": ["Zurich", "Geneva", "Basel"],
      "areaSize": "41,285 km²",
      "language": "German, French, Italian, Romansh",
      "population": "8,796,669",
      "currency": "Swiss franc (CHF)",
      "universities": "21",
      "internationalStudents": "74,440",
      "flagCode":"ch",
      "fileId":"1pBqedjpBxjYSswoUEOZpPg1zLhaKFs3_"
    },
    {
      "name": "Canada",
      "capital": "Ottawa",
      "largeCities": ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton"],
      "areaSize": "9,984,670 km²",
      "language": "English and French",
      "population": "38,781,291",
      "currency": "Canadian dollar (CAD)",
      "universities": "96",
      "internationalStudents": "1,040,985",
      "flagCode":"ca",
      "fileId":"1POCbEWLzvQsqMh1vjXm3_znpogF5yYQD"
    },
    {
      "name": "New Zealand",
      "capital": "Wellington",
      "largeCities": ["Auckland", "Christchurch", "Hamilton", "Tauranga", "Lower Hutt", "Dunedin", "Palmerston North", "Napier"],
      "areaSize": "268,021 km²",
      "language": "English, Māori, NZ Sign Language",
      "population": "5,223,100",
      "currency": "New Zealand dollar (NZD)",
      "universities": "8",
      "internationalStudents": "34,000",
      "flagCode":"nz",
      "fileId":"1qY0P79TuStnW0APe3t6puM9_DI4WGVjA"
    },
    {
      "name": "Italy",
      "capital": "Rome",
      "largeCities": ["Milan", "Naples", "Turin", "Palermo"],
      "areaSize": "301,340 km²",
      "language": "Italian, English",
      "population": "60,500,000",
      "currency": "Euro (EUR)",
      "universities": "112",
      "internationalStudents": "80,000",
      "flagCode":"it",
      "fileId":"12q4fpyyK1GMQqs0Vm1mnOJZd1i4NwZgE"
    },
    {
      "name": "Netherlands",
      "capital": "Amsterdam",
      "largeCities": ["Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Tilburg", "Groningen", "Almere Stad"],
      "areaSize": "41,865 km²",
      "language": "Dutch, English, Papiamentu, West Frisian",
      "population": "17,618,299",
      "currency": "Euro (EUR)",
      "universities": "55",
      "internationalStudents": "85,500",
      "flagCode":"nl",
      "fileId":"1URrBDdrENl_1QVLLKPdwAqs4I_yiQUlI"
    },
    {
      "name": "Sweden",
      "capital": "Stockholm",
      "largeCities": ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås", "Örebro", "Linköping", "Helsingborg"],
      "areaSize": "450,295 km²",
      "language": "Swedish, Sami, Tornedal Finnish",
      "population": "10,612,086",
      "currency": "Swedish krona (SEK)",
      "universities": "40",
      "internationalStudents": "40,000",
      "flagCode":"se",
      "fileId":"1fB9kgOR3-hJhZpzNPyyadleVi4yIIa-h"
    }
  ];

  function downloadFileUsingURL(fileId){
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`
    const fileName=url;
    const aTag=document.createElement("a");
    aTag.href=url;
    aTag.setAttribute("download",fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  
  return (
    <>
        <div id='destination' className="section-title">
          <h2>Destinations to Study Abroad</h2>
        </div>
        <p className='destination-para'>Discover Your Path—We'll Help You Find the Perfect Place to Study!</p>
        <div id='destination' className='countries'>
          {
            countries.map((country)=>(
                <div className='card'>
                <Card name={country.name} capital={country.capital} largeCities={[...country.largeCities]} areaSize={country.areaSize} language={country.language} population={country.population} currency={country.currency} universities={country.universities} students={country.internationalStudents} flagCode={country.flagCode}/>

                <button 
                  onClick={()=>{
                    downloadFileUsingURL(country.fileId)
                  }}
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </button>{" "}
              </div>
            ))
          }

        </div>
    </>
  )
}

export default Destination