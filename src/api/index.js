import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const getData = async (country) => {
  let useUrl = url;
  if (country && country !== 'global') {
    useUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(useUrl);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const returnData = data.map((d) => ({
      confirmed: d.confirmed.total,
      deaths: d.deaths.total,
      date: d.reportDate,
    }));

    return returnData;
  } catch (error) {
    console.log(error);
  }
};

export const getCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    const returnCountries = countries.map((c) => c.name);
    return returnCountries;
  } catch (error) {
    console.log(error);
  }
};
