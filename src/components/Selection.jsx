import React from 'react'
import { Checkbox, FormControlLabel, FormGroup, FormControl, FormLabel, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});

export function Selection(props) {
    const classes = useStyles();

    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Select Cuisines</FormLabel>
            <FormGroup>
                {props.sortedCuisines.map(cuisine =>
                    <FormControlLabel
                        key={cuisine}
                        control={<Checkbox checked={props.isSelected(cuisine)} onChange={props.handleChange} name={cuisine} />}
                        label={cuisine}
                    />
                )}
            </FormGroup>
            <br />
            <FormLabel component="legend">Toggles</FormLabel>
            <FormGroup>
                <FormControlLabel
                    key={'veganFriendly'}
                    control={<Checkbox checked={props.veganFriendly} onChange={props.handleToggle} name="veganFriendly"/>}
                    label='Vegan Friendly'
                />
                <FormControlLabel
                    key={'dogFriendly'}
                    control={<Checkbox checked={props.dogFriendly} onChange={props.handleToggle} name="dogFriendly"/>}
                    label='Dog Friendly'
                />
                
            </FormGroup>
        </FormControl>
    )
}