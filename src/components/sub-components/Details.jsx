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
          className="details"
        >
          <HandymanIcon sx={{ fontSize: "80px" }} />
          <span>Over 1,000 jobs completed</span>
          <span style={{ color: "rgb(103, 131, 110)", fontWeight: 400 }}>
            Proven history of business
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
          className="details"
        >
          <EmojiEventsIcon sx={{ fontSize: "80px" }} />
          <span>High Quality</span>
          <span style={{ color: "rgb(103, 131, 110)", fontWeight: 400 }}>
            View our{" "}
            <a style={{ color: "rgb(197, 166, 115)" }} href="/gallery">
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
          className="details"
        >
          <EditNoteIcon sx={{ fontSize: "80px", paddingLeft: "10px" }} />
          <span>Fast Quote</span>
          <span style={{ color: "rgb(103, 131, 110)", fontWeight: 400 }}>
            One call away we can provide easy consultation
          </span>
        </Grid>
      </Grid>
    </>
  );
};
