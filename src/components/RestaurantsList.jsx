import React from "react";
import { Typography } from "@material-ui/core";

export const RestaurantsList = (props) => props.availableRestaurants.map((restaurant, index) => (
    <div key={index}>
        <Typography variant="h4" gutterBottom>{restaurant.name}</Typography>
        <Typography variant="body1" gutterBottom>Address: {restaurant.address}</Typography>
        <Typography variant="body1" gutterBottom>Cuisine: {restaurant.cuisine.join(', ')}</Typography>
        <Typography variant="body1" gutterBottom>Dog Friendly: {restaurant["dog-friendly"] ? "Yes" : "No"}</Typography>
        <Typography variant="body1" gutterBottom>Vegan Options: {restaurant["vegan-options"] ? "Yes" : "No"}</Typography>
        <Typography variant="body1" gutterBottom>Rating: {restaurant.rating}</Typography>
        <br />
    </ div>
))
