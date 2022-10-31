import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/landing.css";
import { data } from "../DB/data.js";
import { createClient } from "pexels";
import { productData } from "../DB/data.js";

import { useState } from "react";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  title: {
    textAlign: "center",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Products() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Carousel
          showArrows={false}
          showStatus={false}
          autoPlay={true}
          useKeyboardArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={2000}
          swipeScrollTolerance={10}
          dynamicHeight={true}
          verticalSwipe={"standard"}
          width={"100%"}
        >
          <div>
            <img
              style={{
                background: "white",
                objectFit: "contain",
                height: "400px",
              }}
              src="https://images.unsplash.com/photo-1607528971899-2e89e6c0ec69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3Vyb3NlbCUyMHZlZ2V0YWJsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div>
            <img src="" />
          </div>
          <div>
            <img src="logo/logo3.jpg" />
          </div>
          <div>
            <img src="logo/logo5.jpg" />
          </div>
        </Carousel>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}

          <Grid container spacing={4}>
            {data.map((obj, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <a href={`/products/${obj.Varitey}`} className="pLink">
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={productData[Math.floor(Math.random() * 7)]}
                        title={`${
                          obj.Varitey[0].toUpperCase() +
                          obj.Varitey.substring(1)
                        }`}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h3"
                          className={classes.title}
                        >
                          {obj.Varitey[0].toUpperCase() +
                            obj.Varitey.substring(1)}
                        </Typography>
                        <div className="price all">
                          <span>
                            Catogery:{" "}
                            {obj.Catogery[0].toUpperCase() +
                              obj.Catogery.substring(1)}
                          </span>
                          <span>
                            Quantity: {obj.sku} {obj.Units}
                          </span>
                          <Button
                            variant="outlined"
                            href="/contacts"
                            style={{
                              marginTop: "25px",
                              display: "block",
                              //   width: "fit-content",
                              //   margin: "0 auto",
                            }}
                          >
                            Book Now
                          </Button>
                          {/* </span> */}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
