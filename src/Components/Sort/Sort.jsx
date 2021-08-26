import React from 'react'
import Box from "@material-ui/core/Box";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";

const Sort = ({handleSort}) => {
  // console.log('props: ', props);
  const handleChange = (e)=> {
    const value= (e.target.value)
    handleSort(value)
  }

    return (
      <Box>
        <FormControl>
          <InputLabel htmlFor="sort-category">Sort by</InputLabel>
          <NativeSelect
            defaultValue="recommended"
            onChange={handleChange}
            inputProps={{
              name: "sorts",
              id: "sort-category",
            }}
          >
            <option value="recommended">Recommended</option>
            <option value="price">Price</option>
            <option value="pricePick">Price + our Picks</option>
            <option value="deal">Deals</option>
            <option value="guestRating">Guest Rating + our picks</option>
            <option value="star">Star Rating</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
}

export default Sort
