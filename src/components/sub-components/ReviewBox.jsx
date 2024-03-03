/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";

export const ReviewBox = (props) => {
  return (
    <Grid
      container
      item
      p={5}
      direction={{ xs: "column", sm: "column" }}
      style={{
        maxWidth: "400px",
        height: "400px",
        color: "gray",
        marginLeft: "3px",
        marginBottom: "15px",
        marginTop: "15px",
      }}
      className="review-container"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <img src="./img/svg/stars.svg"></img>
      <span
        style={{
          fontSize: "18px",
          fontWeight: 300,
          textAlign: "center",
        }}
      >
        {props.review}
      </span>
      <span
        style={{
          fontSize: "15px",
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        {props.name}
      </span>
      <span
        style={{
          fontSize: "15px",
          fontWeight: 300,
          textAlign: "center",
        }}
      >
        {props.date}
      </span>
    </Grid>
  );
};
