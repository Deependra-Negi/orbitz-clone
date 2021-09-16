import React from 'react'
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  cont:{
    backgroundColor: "white",
    //padding:"5px 20px"
    width: "100%",
  },
  sort:{
    backgroundColor: "white",
    border: "1px solid #adadad",
    padding: "5px 20px",
    width: "250px",
    height: "50px"
  },
  select: {
    backgroundColor: "white",
  }
}));
const Sort = ({handleSort}) => {
  // console.log('props: ', props);
  const handleChange = (e)=> {
    const value= (e.target.value)
    handleSort(value)
  }

  const classes = useStyles();
  return (
      <MainCont>
        <Notice><p>What we are paid impacts our sort order</p><ErrorOutlineOutlinedIcon/></Notice>
        <Box className={classes.sort}>
          <FormControl className={classes.cont}>
            <InputLabel htmlFor="sort-category">Sort by</InputLabel>
          <NativeSelect
            className={classes.select}
              defaultValue="recommended"
            onChange={handleChange}
            variant="outlined"
              inputProps={{
                name: "sorts",
                id: "sort-category",
              }}>
              <option styles={{height:"190px"}} value="recommended">Recommended</option>
              <option styles={{height:"90px"}} value="price">Price</option>
              <option styles={{height:"90px"}} value="pricePick">Price + our Picks</option>
              <option styles={{height:"90px"}} value="deal">Deals</option>
              <option styles={{height:"90px"}} value="guestRating">Guest Rating + our picks</option>
              <option styles={{height:"90px"}} value="star">Star Rating</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </MainCont>
    );
}

export default Sort;

const MainCont = styled.div`
  display: flex;
  justify-content: space-between;
`
const Notice = styled.div`
display: flex;
margin-top: 10px;
padding-left: 30px;
p{
  font-size: 0.9rem;
  font-weight: bold;
  color: #1f1f1f;
  margin: 0;
  padding: 0;
  margin-right: 5px;
}
svg{
  width: 17px;
  margin-top: -2px;
}
`
