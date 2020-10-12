import React from 'react';

import {FormControl, FormLabel, FormGroup, FormControlLabel, Typography, makeStyles} from "@material-ui/core"
import {FiltersProps} from "../../interfaces";

const useStyles = makeStyles({
    filtersWrap: {
        width: "300px",
        position: "sticky",
        top: 50,
        display: "flex",
        alignItems: "flex-start"
    },
    filtersTitle: {
        marginBottom: 12
    },
    filterSubLabel: {
        marginBottom: 4
    },
    filterGroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    }
})

const Filters = ({filters}: FiltersProps): JSX.Element => {
    const classes = useStyles()
    return (
        <FormControl className={classes.filtersWrap}>
            <Typography variant="h5" className={classes.filtersTitle}>Фильтры</Typography>
            {filters.map(f => (<div key={f._id} className={classes.filterGroup}>
                <FormLabel className={classes.filterSubLabel}>{f.label}</FormLabel>
                <FormGroup>
                    {f.items.map(i => <FormControlLabel key={i._id} label={i.label} control={i.control}/>)}
                </FormGroup>
            </div>))}
        </FormControl>
    );
};

export default Filters;
