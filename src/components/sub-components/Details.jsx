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
          flexDirection="column"
          alignItems="center"
          className="details"
        >
          <EditNoteIcon fontSize="large" sx={{ color: "white" }} />
          <h3>Fast Quote</h3>
          <h6 style={{ fontWeight: 600, color: "rgb(103, 131, 110)" }}>
            One call away we can provide easy consultation
          </h6>
        </Grid>
        <Grid
          container
          item
          xs={12}
          lg={4}
          flexDirection="column"
          alignItems="center"
          className="details"
        >
          <EmojiEventsIcon fontSize="large" sx={{ color: "white" }} />
          <h3>High Quality</h3>
          <h6 style={{ fontWeight: 600, color: "rgb(103, 131, 110)" }}>
            View our gallery
          </h6>
        </Grid>
        <Grid
          container
          item
          xs={12}
          lg={4}
          flexDirection="column"
          alignItems="center"
          className="details"
        >
          <HandymanIcon fontSize="large" sx={{ color: "white" }} />
          <h3>Over 1,000 jobs completed</h3>
          <h6 style={{ fontWeight: 600, color: "rgb(103, 131, 110)" }}>
            Proven history of business
          </h6>
        </Grid>
      </Grid>
    </>
  );
};
