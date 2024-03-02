import { Link } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";

export const Header = () => {
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
            <Link
              className="nav-items"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: 300,
              }}
              to="services-section"
              smooth={true}
              duration={500}
            >
              Services
            </Link>
            <Link
              className="nav-items"
              style={{
                paddingLeft: "20px",
                textDecoration: "none",
                color: "white",
                fontWeight: 300,
              }}
              to="about-section"
              smooth={true}
              duration={500}
            >
              About
            </Link>
            <a
              href="/gallery"
              className="nav-items"
              style={{
                paddingLeft: "20px",
                textDecoration: "none",
                color: "white",
                fontWeight: 300,
              }}
            >
              Gallery
            </a>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
