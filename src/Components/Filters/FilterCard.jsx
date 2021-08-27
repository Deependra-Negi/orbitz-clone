import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const FilterCard = (props) => {
  const { filter, label, handleFilter, name } = props;


 
  
  const handleChange = (e) => {
  

    handleFilter(e);
  
  };
 
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={filter.name}
            onChange={handleChange}
            name={name}
            color="primary"
          />
        }
        label={label}
      />
    );
  
  };
  

export default FilterCard;
