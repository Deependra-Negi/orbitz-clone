import React from 'react'
import Box from "@material-ui/core/Box";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
const Sort = () => {
    return (
      <Box>
        <FormControl >
          <InputLabel htmlFor="uncontrolled-native">Sort by</InputLabel>
          <NativeSelect
                    defaultValue={30}
                    
            inputProps={{ 
              name: "name",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>Recommended</option>
            <option value={20}>Price</option>
            <option value={30}>Price + our Picks</option>
            <option value={30}>Deals</option>
            <option value={20}>Guest Rating + our picks</option>
            <option value={30}>Star Rating</option>
          </NativeSelect>
          
        </FormControl>
      </Box>
    );
}

export default Sort
