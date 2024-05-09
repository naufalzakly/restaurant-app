import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button"; // Import Button from Material-UI
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";

import { collection, query, orderBy, getDocs } from "firebase/firestore";
import db from "../../firestore";

const Main = () => {
  const [restaurantItems, setRestaurantItems] = useState([]);

  // Function to fetch restaurant items from Firestore
  const fetchRestaurantItems = useCallback(async () => {
    let q = query(collection(db, "thumb_restaurant"), orderBy("nama"));
    const querySnapshot = await getDocs(q);
    const items = querySnapshot.docs.map((doc) => doc.data());
    setRestaurantItems(items);
  }, []);

  // Load restaurant items on component mount
  useEffect(() => {
    fetchRestaurantItems();
  }, [fetchRestaurantItems]);

  // Function to handle category filter

  return (
    <Container maxWidth="md">
      <div>
        <h1>Restaurants</h1>
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        {/* Render restaurant items */}
        <Grid container spacing={3}>
          {restaurantItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.img}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.nama}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Rating
                      defaultValue={item.rating}
                      name="size-medium"
                    ></Rating>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography size="small">
                    {item.category} - {item.harga}$
                  </Typography>
                  <Typography size="small">{item.status}</Typography>
                </CardActions>
                <CardActions>
                  <Button
                    component={Link}
                    to={`/detail-main`}
                    size="medium"
                    color="primary"
                  >
                    LEARN MORE
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Main;
