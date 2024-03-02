import { Grid } from "@mui/material";
import { ServiceBox } from "./sub-components/ServiceBox";

export const Services = () => {
  return (
    <>
      <Grid
        xs={12}
        lg={12}
        pt={5}
        pb={1}
        flexDirection="column"
        alignItems="center"
        className="details"
        id="services-section"
      >
        <span style={{ color: "rgb(103, 131, 110)" }}>Services</span>
        <hr style={{ borderColor: "gray", width: "25%", marginTop: "25px" }} />
      </Grid>
      <Grid container justifyContent="space-evenly">
        <ServiceBox
          svgIcon="./img/svg/floortiles.svg"
          service="Floor Tile Install"
          description="Our professional floor tile installation service brings beauty, functionality, and value to your home or business."
        />
        <ServiceBox
          svgIcon="./img/svg/shower.svg"
          service="Shower Tile Remodeling"
          description="Transform your daily bathing experience with these captivating tiles. From natural stone tiles to mosaic tiles. Contact us today for that dream shower."
        />
        <ServiceBox
          svgIcon="./img/svg/bathroom.svg"
          service="Bathroom Tile Remodeling"
          description="Luxurious Spa style, modern minimalism, vintage styling, you name it."
        />
        <ServiceBox
          svgIcon="./img/svg/kitchen.svg"
          service="Kitchen Backsplash"
          description="Whether you’re aiming for timeless elegance, modern flair, or a cozy vibe, there’s a backsplash option for every style and budget."
        />
      </Grid>
    </>
  );
};
