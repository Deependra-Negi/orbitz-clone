import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const FilterCard = (props) => {
  const { label, handleFilter, name } = props;
 
  const handleChange = (e) => {
    handleFilter(e);
  };
  return (<>
    <FormControlLabel
        control={
        <Checkbox
            onChange={handleChange}
            name={name}
            color="primary"
          />
        }
      label={<span style={{ fontSize: '14px' }}>{label}</span>}
        // label={label}
      />
      </>
    );
  
  };
  

export default FilterCard;
