import { Button, Grid } from "@mui/material";

export const Hero = () => {
  return (
    <Grid
      container
      flexDirection="column"
      sx={{
        backgroundImage: "url(/img/bathroom.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "70vh",
        maxWidth: "100%",
      }}
    >
      <Grid item className="hero-a" xs={12} textAlign="left" pt={25} pl={4}>
        Tiling Done Right
      </Grid>
      <Grid item className="hero-b" xs={12} textAlign="left" pt={2} pl={5}>
        Let us tile your world with style
      </Grid>
      <Grid
        container
        item
        flexDirection="row"
        className="hero-b"
        xs={12}
        textAlign="left"
        pt={3}
        pl={5}
        gap={2}
      >
        <Button
          sx={{
            color: "black",
            backgroundColor: "white",
            paddingLeft: "20px",
            paddingRight: "20px",
            fontWeight: 300,
          }}
        >
          Contact
        </Button>
        <Button
          sx={{
            color: "black",
            backgroundColor: "white",
            paddingLeft: "20px",
            paddingRight: "20px",
            fontWeight: 300,
          }}
        >
          Gallery
        </Button>
      </Grid>
    </Grid>
  );
};
