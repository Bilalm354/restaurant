import React, { Component } from "react"
import restaurants from "~/data/restaurants"
import 'fontsource-roboto'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const cuisines = restaurants.map((restaurant) => restaurant.cuisine).flat()
const checkboxes = cuisines.map((cuisine, index) => <li key={index}><label>{cuisine}<input type="checkbox" name={cuisine} /></label></li>)
const filteredRestaurants = restaurants.filter(restaurant => restaurant.name === "Mumtaz")
const list = filteredRestaurants.map((restaurant, index) => (
    <div key={index}>
        <Typography variant="h4" gutterBottom>{restaurant.name}</Typography>
        <Typography variant="body1" gutterBottom>Address: {restaurant.address}</Typography>
        <Typography variant="body1" gutterBottom>Cuisine: {restaurant.cuisine.join(', ')}</Typography>
        <Typography variant="body1" gutterBottom>Dog Friendly: {restaurant["dog-friendly"] ? "Yes" : "No"}</Typography>
        <Typography variant="body1" gutterBottom>Vegan Options: {restaurant["vegan-options"] ? "Yes" : "No"}</Typography>
        <Typography variant="body1" gutterBottom>Rating: {restaurant.rating}</Typography>
    </ div>
))

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});


export function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {checkboxes}
            <Typography variant="h1">Restaurants</Typography>
            {list}
        </div>
    );
}

