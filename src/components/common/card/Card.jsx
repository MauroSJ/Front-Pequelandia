import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import bodyImage from "../../../assets/bodysinfondo.png";

const Shopcard = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345, height: 345 }}>
        <Box>
          <CardActionArea sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              height="140"
              image={bodyImage}
              alt="green iguana"
              sx={{ height: "200px", width: "auto" }}
            />
          </CardActionArea>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: "12px",
            }}
          >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Box>

        <CardContent>
          <Button sx={{ padding: "0" }}>Lizard</Button>
          <Typography variant="body2" color="text.secondary">
            <span>$300</span>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Shopcard;
