/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";

export const ServiceBox = (props) => {
  return (
    <Grid
      container
      item
      direction={{ xs: "column", sm: "column" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      style={{
        maxWidth: "300px",
        height: "300px",
        color: "white",
        marginLeft: "3px",
        marginBottom: "15px",
        marginTop: "15px",
      }}
      className="skill-container"
      alignItems="center"
      justifyContent="center"
    >
      <img
        src={props.svgIcon}
        style={{
          paddingBottom: "15px",
          height: "60px",
          color: "white",
          fontWeight: 400,
          textAlign: "center",
          lineHeight: 1.5,
        }}
      ></img>
      <span
        style={{
          fontSize: "20px",
          fontWeight: 400,
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        {props.service}
      </span>
      <span
        style={{
          fontSize: "15px",
          fontWeight: 300,
          textAlign: "center",
          lineHeight: 1.5,
          padding: "10px",
        }}
      >
        {props.description}
      </span>
    </Grid>
  );
};
