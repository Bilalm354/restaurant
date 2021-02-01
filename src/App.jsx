import React, { Component } from "react"
import restaurants from "~/data/restaurants"

const cuisines = restaurants.map((restaurant) => restaurant.cuisine).flat()
const checkboxes = cuisines.map((cuisine, index) => <li><label>{cuisine}<input type="checkbox" key={index} name={cuisine} /></label></li>)
const filteredRestaurants = restaurants.filter(restaurant => restaurant.name === "Mumtaz")
const list = filteredRestaurants.map((restaurant, index) => (
    <div key={index}>
        <h2>{restaurant.name}</h2>
        <p>Address: {restaurant.address}</p>
        <p>Cuisine: {restaurant.cuisine.toString()},</p>
        <p>Dog Friendly: {restaurant["dog-friendly"] ? "Yes" : "No"}</p>
        <p>Vegan Options: {restaurant["vegan-options"] ? "Yes" : "No"}</p>
        <p>Rating: {restaurant.rating}</p>
    </ div>
))

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCuisines: []
        }
    }

    render() {
        return (
            <div>
                {checkboxes}
                <h1>List</h1>
                {list}
            </div>
        );
    }
}
