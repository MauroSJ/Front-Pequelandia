import React from "react";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import bodyImage from "../../../assets/bodysinfondo.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Heart from "@mui/icons-material/FavoriteBorder";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

const ProductCard = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
  ];

  return (
    <>
      <Grid
        container
        sx={{
          border: "solid 4px blue",
          padding: "15px",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={1}
          lg={1}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            border: "solid 2px red",
            height: "399px",
          }}
        >
          <ImageList sx={{ width: 75 }} cols={1}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          lg={7}
          sx={{
            marginBottom: { xs: "10px", md: 0 },
            marginX: { xs: "0", md: "10px" },
            border: "solid 2px red",
            height: "auto",
          }}
        >
          <img style={{ width: "100%" }} src={bodyImage} alt="body" />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          lg={3}
          sx={{
            marginTop: { xs: "0", md: "50px" },
            border: "solid 2px red",
            padding: "30px",
          }}
        >
          <Box
            display={"flex"}
            sx={{ justifyContent: "space-between", marginBottom: "10px" }}
          >
            <Typography variant="h6" display={"flex"} alignItems={"start"}>
              Body Mio Mia
            </Typography>
            <Button sx={{ padding: "0" }}>
              <Heart />
            </Button>
          </Box>
          <Typography
            variant="h5"
            display={"flex"}
            sx={{
              justifyContent: { xs: "start", md: "center" },
              paddingTop: { lg: "20px" },
              marginBottom: "10px",
            }}
          >
            $2900
          </Typography>
          <Typography
            textAlign={"start"}
            sx={{ padding: { lg: "40px 0px 40px 0px" } }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            consequuntur nihil officiis consectetur eaque, temporibus deserunt.
            Praesentium, quas vero. Et.
          </Typography>
          <Box
            display={"flex"}
            marginTop={"20px"}
            sx={{ flexDirection: { xs: "column", md: "column", lg: "row" } }}
          >
            <Button
              variant="outlined"
              sx={{
                marginRight: { xs: "none", md: "5px" },
                marginBottom: { xs: "5px", md: "5px", lg: "auto" },
              }}
            >
              Agregar al carrito
            </Button>
            <Button variant="contained">Comprar</Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ border: "solid 2px red", height: "304px", marginTop: "10px" }}
        >
          <Typography
            variant="h6"
            textAlign={"start"}
            marginTop={"10px"}
            sx={{
              marginX: { xs: "0", md: "10px" },
              padding: { xs: "5px", md: "0px" },
              fontSize: { xs: "1rem", md: "unset" },
            }}
          >
            Opiniones del producto
          </Typography>
          <TextareaAutosize
            style={{ width: "75%", height: "75%", margin: "10px 0px 10px 0px" }}
            placeholder="Escribe tu opinión..."
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductCard;
