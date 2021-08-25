import React from 'react'
import Box from "@material-ui/core/Box";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
const Name = () => {
    return (
        <>
            <p>Search by property name</p>
      <Box display="flex" flexDirection="row" alignItems="center" border='1px solid black'>
        <SearchOutlinedIcon />
            <p style={{paddingLeft:'1rem'} }>e.g. Hotel Taj</p>
            </Box>
            </>
    );
}

export default Name
