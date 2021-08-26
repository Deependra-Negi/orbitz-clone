import React from 'react'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const FilterCard = (props) => {
    const { label,onChange } = props;
    return (
      <FormControlLabel
        control={
          <Checkbox
           /*  checked={false} */
            onChange={onChange}
            name="checkedB"
            color="primary"
          />
        }
        label={label}
      />
    );
}

export default FilterCard
