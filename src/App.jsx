import React from "react"
import restaurants from "~/data/restaurants"
import { RestaurantsList } from '~/RestaurantsList'
import 'fontsource-roboto'
import { Checkbox, FormHelperText, FormControlLabel, FormGroup, FormControl, FormLabel, makeStyles, Typography, Container } from '@material-ui/core';



function isEverySelectedCuisineInRestaurant(selectedCuisines, restaurant) {
    return selectedCuisines.every(cuisine => restaurant.cuisine.indexOf(cuisine) !== -1)
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});


export function App() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        selectedCuisines: []
    });

    const allCuisinesFromData = restaurants.map((restaurant) => restaurant.cuisine).flat()
    const uniqueCuisines = [... new Set(allCuisinesFromData)]
    const sortedCuisines = uniqueCuisines.sort()
    const restaurantsWithSelectedCuisines = restaurants.filter(restaurant => isEverySelectedCuisineInRestaurant(state.selectedCuisines, restaurant))

    const handleChange = (event) => {
        const selectedCuisines = state.selectedCuisines;
        const index = state.selectedCuisines.indexOf(event.target.name);
        
        if (index === -1) {
            selectedCuisines.push(event.target.name)
        } else {
            selectedCuisines.splice(index)
        }
        
        setState({ selectedCuisines });
    };

    const isSelected = (cuisine) => state.selectedCuisines.indexOf(cuisine) !== -1;

    return (
        <Container maxWidth="sm">
            <Typography variant="h1">Cuisines</Typography>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Select Cuisines</FormLabel>
                <FormGroup>
                    {sortedCuisines.map(cuisine =>
                        <FormControlLabel
                            key = {cuisine}
                            control={<Checkbox checked={isSelected(cuisine)} onChange={handleChange} name={cuisine} />}
                            label={cuisine}
                        />
                    )}
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
            </FormControl>
            <Typography variant="h1">Restaurants</Typography>


            <RestaurantsList availableRestaurants={restaurantsWithSelectedCuisines} />
        </Container>
    );
}

