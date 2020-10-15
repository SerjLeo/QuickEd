import React, {ChangeEvent} from 'react';
import Filters from "../components/shared/Filters";
import {CheckboxFilter} from "../helpers/interfaces";
import TestCard from "../components/test/TestCard";
import {Button, Checkbox} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    testPageWrap: {
        display: "flex"
    },
    testContainer: {
        width: "calc(100% - 350px)",
        display: "flex",
        alignItems: "center",
        padding: "20px 24px",
        border: "1px solid silver",
        marginLeft: 15,
        justifyContent: "center",
        borderRadius: 6
    }
})

function TestPage() {
    const [activeFilters, setActiveFilters] = React.useState(() => ({
        theme: {
            stereometry: true,
            planimetrics: true,
            trigonometry: true
        }
    }))

    const [activeTest, setActiveTest] = React.useState( (): any => null)

    const classes = useStyles()

    const generateTest = () => {
        setActiveTest({})
    }

    const handleChange = (event: ChangeEvent, checked: boolean = false): void => {
        const {target} = event
        const [prop, param] = (target as HTMLInputElement).name.split("_")
        if(prop === "theme") {
            setActiveFilters(prevState => ({
                ...prevState,
                theme: {
                    ...prevState.theme,
                    [param]: checked
                }
            }))
        }
    }

    const filters: Array<CheckboxFilter> = [
        {
            label: "По темам",
            prop: "theme",
            _id: 1,
            items: [
                {
                    _id: 1,
                    label: "Планиметрия",
                    control: <Checkbox checked={activeFilters["theme"]["planimetrics"]} name="theme_planimetrics" onChange={handleChange}/>
                },
                {
                    _id: 2,
                    label: "Стереометрия",
                    control: <Checkbox checked={activeFilters["theme"]["stereometry"]} name="theme_stereometry" onChange={handleChange}/>
                },
                {
                    _id: 3,
                    label: "Тригонометрия",
                    control: <Checkbox checked={activeFilters["theme"]["trigonometry"]} name="theme_trigonometry" onChange={handleChange}/>
                },
            ]
        }
    ]

    const applyFilters = () => {
        console.log(activeFilters)
    }
    return (
        <div className={classes.testPageWrap}>
            <Filters filters={filters} onFiltersSubmit={applyFilters}/>
            <div className={classes.testContainer}>
                {activeTest
                    ?<TestCard test={activeTest}/>
                    :<Button disableElevation color="primary" variant="contained" onClick={generateTest}>Начать тест</Button>
                }
            </div>
        </div>
    );
}

export default TestPage;
