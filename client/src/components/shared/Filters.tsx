import React from 'react';

import {FormControl, FormLabel, FormGroup, FormControlLabel, Typography, makeStyles, Button} from "@material-ui/core"
import {IFiltersProps} from "../../helpers/interfaces";

const useStyles = makeStyles({
    filtersWrap: {
        position: "sticky",
        top: 50,
        display: "flex",
        alignItems: "flex-start",
        padding: "20px 24px",
        border: "1px solid silver",
        borderRadius: 6
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
    },
    filterActions: {
        display: "flex",
        marginTop: 15
    },
    submitBtn: {
        marginRight: 12
    }
})

const Filters = ({filters, onFiltersSubmit}: IFiltersProps): JSX.Element => {
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
            <div className={classes.filterActions}>
                <Button onClick={onFiltersSubmit} className={classes.submitBtn} color="primary"
                        variant="outlined">Применить</Button>
                <Button color="secondary" variant="outlined">Сбросить</Button>
            </div>
        </FormControl>
    );
};

export default Filters;
