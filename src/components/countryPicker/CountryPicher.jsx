import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';

import style from './CountryPicker.module.css';
import { getCountries } from '../../api';

const CountryPicher = ({ countryPick }) => {
  const [countries, setCountries] = useState();

  const getCountriesData = async () => {
    const res = await getCountries();
    setCountries(res);
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <FormControl className={style.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => countryPick(e.target.value)}
      >
        <option value="global">Global</option>
        {countries &&
          countries.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicher;
