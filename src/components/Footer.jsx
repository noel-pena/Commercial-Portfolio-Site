import { Grid } from "@mui/material";

export const Footer = () => {
  return (
    <Grid container p={5} flexDirection="column">
      <hr
        style={{
          borderColor: "gray",
          width: "100%",
          marginTop: "25px",
        }}
      />
      <footer style={{ color: "white", fontWeight: 300 }}>
        <Grid container item pt={5} xs={12} justifyContent="space-between">
          <span className="footer">Copyright © {new Date().getFullYear()}</span>
          <span className="footer">
            (407) 433-7831 | Jbcflooring@outlook.com | JBC Professional LLC.
          </span>
        </Grid>
      </footer>
    </Grid>
  );
};
