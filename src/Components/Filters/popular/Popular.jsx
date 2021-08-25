import React from 'react'
import Box from '@material-ui/core/Box';
import {v4 as uuid} from 'uuid'
import FilterCard from '../FilterCard';
const Popular = () => {
    const populars = ['pool','ocean view','breakfast included','hotel']
    return (
      <Box display="flex" flexDirection="column">
        {populars.map((item) => {
          return <FilterCard key={uuid()} label={item} />;
        })}
      </Box>
    );
}

export default Popular
