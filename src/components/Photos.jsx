import { Floor } from "./sub-components/Floor";
import { Bathroom } from "./sub-components/Bathroom";
import { Misc } from "./sub-components/Misc";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, title, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{title}</Typography>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Photos = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="variant"
            indicatorColor="variant"
          >
            <Tab
              sx={{ color: "rgb(103, 131, 110)" }}
              label="Floor"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ color: "rgb(103, 131, 110)" }}
              label="Bathroom"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ color: "rgb(103, 131, 110)" }}
              label="Miscellaneous"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Floor title="Floor" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Bathroom title="Bathroom" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Misc title="Miscellaneous" />
        </CustomTabPanel>
      </Box>
    </Grid>
  );
};
