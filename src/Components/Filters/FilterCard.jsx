import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const FilterCard = (props) => {
  const { filter, label, handleFilter, name } = props;
 
  


 
  // console.log('filter card: ',typeof(status))
  const handleChange = (e) => {
    // console.log('in card: ',e.target.checked)

    handleFilter(e);
    // console.log(e.target.name);
    // console.log(e.target.checked);
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
