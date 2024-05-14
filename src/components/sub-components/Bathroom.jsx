/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

const heights = [
  600, 500, 600, 500, 500, 400, 500, 400, 400, 600, 500, 400, 500, 400, 400,
  400, 400, 400,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Bathroom = ({ title }) => {
  const bathroomPhotos = [
    "./img/samples/bathroom1.jpeg",
    "./img/samples/bathroom2.jpeg",
    "./img/samples/bathroom3.jpg",
    "./img/samples/bathroom4.jpg",
    "./img/samples/bathroom5.JPEG",
    "./img/samples/bathroom6.JPEG",
    "./img/samples/bathroom7.JPEG",
    "./img/samples/bathroom8.JPEG",
    "./img/samples/bathroom9.JPEG",
    "./img/samples/bathroom10.JPEG",
    "./img/samples/bathroom11.JPEG",
    "./img/samples/bathroom12.JPEG",
    "./img/samples/bathroom13.JPEG",
    "./img/samples/bathroom14.JPEG",
    "./img/samples/bathroom15.JPEG",
    "./img/samples/bathroom16.JPEG",
    "./img/samples/bathroom17.JPEG",
    "./img/samples/bathroom18.JPEG",
  ];

  return (
    <>
      <Grid pt={0} px={2} mx={1} ml={2} gap={5} justifyContent="center">
        <Grid
          item
          id="pictures"
          sx={{ textAlign: "left", color: "#black", fontSize: "24px" }}
        ></Grid>
        <Grid
          item
          sx={{
            textAlign: "center",
            color: "white",
            fontWeight: 500,
            fontSize: "40px",
            lineHeight: 1.5,
          }}
        >
          <span style={{ color: "rgb(103, 131, 110)" }}>{title}</span>
          <hr
            style={{ borderColor: "gray", width: "25%", marginTop: "25px" }}
          />
        </Grid>
        <Box pt={4} sx={{ width: "auto", minHeight: 500 }}>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
            {bathroomPhotos.map((imageUrl, index) => (
              <Item
                key={index}
                sx={{
                  height: heights[index],
                  padding: "0px",
                  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1);",
                }}
              >
                <img
                  className="catalogue"
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    borderRadius: "2px",
                  }}
                />
              </Item>
            ))}
          </Masonry>
        </Box>
      </Grid>
    </>
  );
};
