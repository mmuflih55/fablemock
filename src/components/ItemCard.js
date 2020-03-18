import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";

const ItemCard = ({ data }) => {
  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: 16
    },
    cardTitle: {
      fontWeight: "bold"
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between"
    },
    deliveryTime: {
      color: "blue",
      textDecoration: "underline",
      fontWeight: "bold"
    },
    title: {
      fontSize: 14
    },
    description: {
      textAlign: "left"
    },
    fscontainer: {
      color: "#106DC8",
      display: "flex"
    },
    dtcontainer: {
      display: "flex",
      justifyContent: "flex-end"
    },
    price: {
      color: "orange",
      fontWeight: "bold"
    }
  });
  const classes = useStyles();

  return (
    <Card>
      <Card className={classes.root}>
        <div className={classes.cardHeader}>
          <Typography className={classes.cardTitle} gutterBottom>
            {data.name}
          </Typography>
          <Typography className={classes.price}>
            Rp {data.price.toLocaleString("id")}
          </Typography>
        </div>
        <Typography component="p" className={classes.description}>
          {data.description.length > 114
            ? data.description.substr(114) + "..."
            : data.description}
        </Typography>
        <div className={classes.fscontainer}>
          {data.furniture_style.map((fs, i) => (
            <Typography key={i} component="span">
              {i < data.furniture_style.length - 1 ? fs + ", " : fs}
            </Typography>
          ))}
        </div>

        <div className={classes.dtcontainer}>
          <Typography component="a" className={classes.deliveryTime}>
            Delivery Days: {data.delivery_time}
          </Typography>
        </div>
      </Card>
    </Card>
  );
};

export default ItemCard;
