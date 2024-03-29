import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

const heights = [
  600, 500, 600, 500, 500, 400, 500, 400, 400, 600, 500, 400, 500, 400, 400,
  400, 400, 400, 400, 600, 500, 400, 600, 500, 400, 600, 500, 400, 600, 500,
  600, 500,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Photos = () => {
  const imageUrls = [
    "./img/samples/123_1.JPEG",
    "./img/samples/123_2.JPEG",
    "./img/samples/123_3.JPEG",
    "./img/samples/20220411_180109.jpg",
    "./img/samples/123_4.JPEG",
    "./img/samples/123_5.JPEG",
    "./img/samples/123_6.JPEG",
    "./img/samples/20220411_180102.jpg",
    "./img/samples/123_7.JPEG",
    "./img/samples/123_8.JPEG",
    "./img/samples/123_9.JPEG",
    "./img/samples/123_10.JPEG",
    "./img/samples/123_11.JPEG",
    "./img/samples/123_12.JPEG",
    "./img/samples/123_13.JPEG",
    "./img/samples/123_14.JPEG",
    "./img/samples/123_15.JPEG",
    "./img/samples/123_16.JPEG",
    "./img/samples/123_17.JPEG",
    "./img/samples/123_18.JPEG",
    "./img/samples/123_19.JPEG",
    "./img/samples/123_20.JPEG",
    "./img/samples/123_21.JPEG",
    "./img/samples/123_22.JPEG",
    "./img/samples/resspic1.jpeg",
    "./img/samples/commpic3.jpg",
    "./img/samples/commpic2.jpeg",
    "./img/samples/commpic1.jpeg",
    "./img/samples/20240124_112511.jpg",
    "./img/samples/20240124_112503.jpg",
    "./img/samples/20221105_112753.jpg",
    "./img/samples/20220411_180120.jpg",
  ];

  return (
    <>
      <Grid pt={5} px={2} mx={1} ml={2} gap={5} justifyContent="center">
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
          <span style={{ color: "rgb(103, 131, 110)" }}>Gallery</span>
          <hr
            style={{ borderColor: "gray", width: "25%", marginTop: "25px" }}
          />
        </Grid>
        <Box pt={4} sx={{ width: "auto", minHeight: 500 }}>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
            {imageUrls.map((imageUrl, index) => (
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
