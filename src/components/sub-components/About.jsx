import { Grid } from "@mui/material";

export const About = () => {
  return (
    <>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          p={5}
          pt={15}
          flexDirection="column"
          alignItems="center"
          className="details"
        >
          <span style={{ color: "rgb(103, 131, 110)" }}>About</span>
          <hr
            style={{ borderColor: "gray", width: "25%", marginTop: "25px" }}
          />
          <span className="about">
            At JBC Professional LLC., we are your trusted partner for all your
            tile flooring needs. With many years of experience, we have
            established ourselves as a leading residential and commercial
            flooring company in Florida. Why choose us? Quality Craftsmanship:
            We take pride in our exceptional installation services. Our skilled
            team ensures precision, attention to detail, and long-lasting
            results. Affordable Options: We offer a wide variety of affordable,
            elegant, and functional floor tiles, including ceramics, porcelain,
            luxury vinyl, and laminate. You don’t have to compromise quality for
            budget. Customer Satisfaction: Our commitment to excellent customer
            service sets us apart. We listen to your needs, provide personalized
            recommendations, and ensure your satisfaction. Environmentally
            Conscious: Tile is an eco-friendly choice. It’s non-toxic,
            energy-efficient, and resistant to allergens, mold, and bacteria.
          </span>
        </Grid>
      </Grid>
    </>
  );
};
