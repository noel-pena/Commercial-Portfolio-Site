import { Button, Grid } from "@mui/material";
import { SetModal } from "./SetModal";

export const Hero = () => {
  return (
    <Grid
      container
      pt={40}
      pb={40}
      sx={{
        backgroundImage: "url(/img/bathroom.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100%",
        maxWidth: "100%",
      }}
    >
      <Grid
        container
        item
        className="hero-a"
        xs={12}
        textAlign="left"
        pl={6}
        pb={1}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        We Do Tiling Right
      </Grid>
      <Grid
        container
        item
        className="hero-b"
        xs={12}
        textAlign="left"
        pl={7}
        pb={3}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        Let us tile your world with style
      </Grid>
      <Grid
        container
        item
        flexDirection="row"
        className="hero-b"
        xs={6}
        textAlign="left"
        pl={7}
        gap={2}
      >
        <SetModal className="hero-b">Contact</SetModal>
        <Button
          className="hero-b"
          sx={{
            color: "black",
            backgroundColor: "white",
            paddingLeft: "20px",
            paddingRight: "20px",
            height: "fit-content",
            width: "fit-content",
            fontSize: "20px",
            fontWeight: 300,
          }}
          href="/gallery"
        >
          Gallery
        </Button>
      </Grid>
    </Grid>
  );
};

export default Hero;
