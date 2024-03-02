import { Photos } from "../components/sub-components/Photos";
import { Footer } from "../components/Footer";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";

const HeaderGallery = () => {
  return (
    <AppBar position="static" className="header">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/">
            <VerticalSplitIcon
              sx={{
                display: { md: "flex" },
                mr: 1,
                color: "rgb(103, 131, 110, 0.7)",
              }}
            />
          </a>
          <a
            href="/"
            style={{
              textDecoration: "none",
              textDecorationColor: "none",
              color: "white",
            }}
          >
            <Typography
              sx={{
                display: { xs: "none", md: "flex" },
              }}
              variant="h7"
              noWrap
            >
              JBC Professional LLC
              <span
                style={{
                  fontFamily: "serif",
                  fontWeight: 800,
                  letterSpacing: ".1rem",
                  color: "white",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationColor: "#64485C",
                    transition: "text-decoration-color 0.3s ease",
                  },
                }}
              >
                .
              </span>
            </Typography>
          </a>
          <div style={{ marginLeft: "auto" }}>
            <a
              href="/"
              className="nav-items"
              style={{
                paddingLeft: "20px",
                textDecoration: "none",
                color: "white",
                fontWeight: 300,
              }}
            >
              Home
            </a>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export const Gallery = () => {
  return (
    <>
      <HeaderGallery />
      <Photos />
      <Footer />
    </>
  );
};
