import { Grid } from "@mui/material";
import { ReviewBox } from "./sub-components/ReviewBox";

export const Review = () => {
  return (
    <Grid>
      <Grid
        container
        xs={12}
        p={5}
        pt={12}
        flexDirection="column"
        alignItems="center"
        className="details"
      >
        <span style={{ color: "rgb(103, 131, 110)" }}>Testimonies</span>
        <hr style={{ borderColor: "gray", width: "25%", marginTop: "25px" }} />
        <Grid container justifyContent="space-around" pb={10} pt={1}>
          <ReviewBox
            review="JBC Professionals did an amazing job with our floors, they moved everything in our house and did everything as promised."
            name="Cesar Martinez"
            date="August 5th, 2023"
          />
          <ReviewBox
            review="I've never seen such great work done by these guys. It's true that you get what you pay for with this crew."
            name="Richard Howard"
            date="October 10th, 2023"
          />
          <ReviewBox
            review="I watched cesar install my kitchen backsplash and I was impressed by the quality of service that was given. JBC professional definitely know what they are doing."
            name="Noel Pena"
            date="April 23rd, 2023"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
