import React, { useEffect, useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react'

import './search.css';
import Cards from './Cards';

const Search = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  const handleInput = (e) => {
    setSearchItem(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className='container'>
      <div className='searchbox'>
     
        <input
          className='search'
          type='text'
          value={searchItem}
          onChange={handleInput}
          placeholder='Type to search'
        />
         <h1>Cards</h1>
        
      </div>
      <div className='bottom'>
      <SimpleGrid columns={2} spacing={10}>
          {filteredData.map((item) => (
            <Cards key={item.name} name={item.name} url={item.url} />
          ))}
     </SimpleGrid>
      </div>
    </div>
  );
};

export default Search;
