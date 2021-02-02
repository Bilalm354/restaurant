import React from "react"
import { Button, Container, Typography } from '@material-ui/core';
import 'fontsource-roboto'
import restaurants from "~/data/restaurants"
import { RestaurantsList } from '~/components/RestaurantsList'
import { Selection } from '~/components/Selection'

export function App() {
    const emptyState = {
        selectedCuisines: [],
        veganFriendly: false,
        dogFriendly: false
    }

    const [state, setState] = React.useState(emptyState);

    const isEverySelectedCuisineInRestaurant = (selectedCuisines, restaurant) =>
        selectedCuisines.every(cuisine => restaurant.cuisine.indexOf(cuisine) !== -1)

    const handleSelectedCuisineChange = (event) => {
        const selectedCuisines = state.selectedCuisines;
        const index = state.selectedCuisines.indexOf(event.target.name);

        if (index === -1) {
            selectedCuisines.push(event.target.name)
        } else {
            selectedCuisines.splice(index)
        }

        setState({ ...state, selectedCuisines });
    };

    const handleToggle = (event) => {
        const name = event.target.name;

        setState({ ...state, [name]: !state[name] })
    }

    const isSelected = (cuisine) => state.selectedCuisines.indexOf(cuisine) !== -1;

    const allCuisinesFromData = restaurants.map((restaurant) => restaurant.cuisine).flat()
    const uniqueCuisines = [... new Set(allCuisinesFromData)]
    const sortedCuisines = uniqueCuisines.sort()
    const filteredRestaurants = restaurants.filter(restaurant =>
        isEverySelectedCuisineInRestaurant(state.selectedCuisines, restaurant)
        && (state.dogFriendly ? restaurant['dog-friendly'] : true)
        && (state.veganFriendly ? restaurant['vegan-options'] : true)
    )

    return (
        <Container maxWidth="sm">

            <Button onClick={() => setState(emptyState)}>Clear Filters</Button>

            <Container maxWidth="sm">
                <Typography variant="h3">Cuisine Selection</Typography>
                <Selection
                    handleChange={handleSelectedCuisineChange}
                    isSelected={isSelected}
                    sortedCuisines={sortedCuisines}
                    dogFriendly={state.dogFriendly}
                    veganFriendly={state.veganFriendly}
                    handleToggle={handleToggle}
                />
            </Container>
            <br />
            <Container maxWidth="sm">
                <Typography variant="h3">Restaurants</Typography>
                <RestaurantsList availableRestaurants={filteredRestaurants} />
            </Container>
        </Container>
    );
}

