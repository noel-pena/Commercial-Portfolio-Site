import { Grid } from "@mui/material";
import { SetModal } from "./sub-components/SetModal";

export const Hero = () => {
  return (
    <Grid
      container
      pt={30}
      pb={35}
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
        pl={6}
        pb={2}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        Let JBC Professional tile your world with style
      </Grid>
      <Grid
        container
        item
        flexDirection="row"
        xs={12}
        textAlign="left"
        pt={1}
        pl={6}
        gap={2}
      >
        <SetModal className="hero-b">Contact</SetModal>
        <a href="/gallery">
          <button className="button">Gallery</button>
        </a>
      </Grid>
    </Grid>
  );
};
