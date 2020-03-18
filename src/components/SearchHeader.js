import React, { useContext } from "react";
import {
  Container,
  Select,
  MenuItem,
  TextField,
  Checkbox
} from "@material-ui/core";
import { ProductsContext } from "./../Context";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

import Grid from "@material-ui/core/Grid";

const Header = ({ furnitureStyle }) => {
  const con = useContext(ProductsContext);
  const useStyles = makeStyles({
    theme: {
      backgroundColor: "#106DC8",
      marginBottom: 12
    },
    title: {
      color: "#fff",
      textAlign: "left"
    },
    checkboxContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    },
    fstylesInput: {
      backgroundColor: "#fff",
      paddingLeft: 5
    },
    daysCount: {
      textAlign: "left",
      paddingLeft: 5,
      backgroundColor: "#fff",
      width: "100%"
    },
    container: {
      padding: "16px 0"
    }
  });
  const classes = useStyles();

  const GreenCheckBox = withStyles({
    root: {
      "&$checked": {
        color: "green"
      }
    },
    checked: {}
  })(props => <Checkbox color="default" {...props} />);

  const SerchTextField = withStyles({
    root: {
      width: "100%",
      color: "#fff",
      "& .MuiInput-input": {
        color: "#fff"
      },
      "& .MuiInput-underline": {
        borderBottomColor: "#fff"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#fff"
      },
      "&:hover .MuiInput-underline:before": {
        borderBottomColor: "#fff"
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: "#fff"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#fff"
        },
        "&:hover fieldset": {
          borderColor: "#fff"
        },
        "&.Mui-focused fieldset": {
          borderColor: "#fff"
        }
      }
    }
  })(TextField);

  const handleSearchChange = e => {
    if (e.keyCode === "13") {
      con.dispatch({ type: "SetSearch", val: e.target.value });
    }
  };
  const handleDaysCountChange = e => {
    con.dispatch({ type: "SetDeliveryDays", val: e.target.value });
  };
  const handleFurnitureStyleChange = (e, v) => {
    con.dispatch({ type: "SetFurnitureStyles", val: v });
  };

  return (
    <div className={classes.theme}>
      <Container>
        <Grid container className={classes.title} spacing={3}>
          <Grid item xs={12} md={6}>
            <SerchTextField
              className={classes.searchInput}
              //   value={state}
              onKeyDown={handleSearchChange}
              placeholder="Search Furniture, Press Enter to Search"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Autocomplete
              multiple
              onChange={handleFurnitureStyleChange}
              options={furnitureStyle}
              className={classes.fstylesInput}
              renderOption={(option, { selected }) => (
                <div className={classes.checkboxContainer}>
                  <div>{option}</div>
                  <GreenCheckBox
                    checked={selected}
                    className={classes.checkbox}
                  />
                </div>
              )}
              renderInput={params => (
                <TextField {...params} placeholder="Furniture Style" />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Select
              className={classes.daysCount}
              value={con.state.deliveryDays}
              onChange={handleDaysCountChange}
            >
              <MenuItem value="0">Delivery Time</MenuItem>
              <MenuItem value="7">1 Weeks</MenuItem>
              <MenuItem value="14">2 Weeks</MenuItem>
              <MenuItem value="30">1 Month</MenuItem>
              <MenuItem value="more">More...</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
