import { Grid } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HandymanIcon from "@mui/icons-material/Handyman";

export const Details = () => {
  return (
    <>
      <Grid container p={8}>
        <Grid
          container
          item
          xs={12}
          lg={4}
          p={5}
          flexDirection="column"
          alignItems="center"
        >
          <HandymanIcon
            sx={{ fontSize: "80px", color: "white", paddingBottom: "10px" }}
          />
          <span className="details">Hundreds of jobs completed</span>{" "}
          <span
            className="details"
            style={{
              color: "rgb(103, 131, 110)",
              fontWeight: 400,
              paddingTop: "10px",
            }}
          >
            Proven history of business
          </span>{" "}
        </Grid>
        <Grid
          container
          item
          xs={12}
          lg={4}
          p={5}
          flexDirection="column"
          alignItems="center"
        >
          <EmojiEventsIcon
            sx={{ fontSize: "80px", color: "white", paddingBottom: "10px" }}
          />{" "}
          <span className="details">High Quality</span>{" "}
          <span
            className="details"
            style={{
              color: "rgb(103, 131, 110)",
              fontWeight: 400,
              paddingTop: "10px",
            }}
          >
            Quality is our expertise. View our{" "}
            <a
              style={{ color: "rgb(197, 166, 115)", textDecoration: "none" }}
              href="/gallery"
            >
              gallery
            </a>
          </span>
        </Grid>
        <Grid
          container
          item
          xs={12}
          lg={4}
          p={5}
          flexDirection="column"
          alignItems="center"
        >
          {" "}
          <EditNoteIcon
            sx={{
              fontSize: "80px",
              paddingLeft: "10px",
              color: "white",
              paddingBottom: "10px",
            }}
          />{" "}
          <span className="details">Fast Quote</span>{" "}
          <span
            className="details"
            style={{
              color: "rgb(103, 131, 110)",
              fontWeight: 400,
              paddingTop: "10px",
            }}
          >
            One call away we can provide an easy consultation
          </span>{" "}
        </Grid>
      </Grid>
    </>
  );
};
