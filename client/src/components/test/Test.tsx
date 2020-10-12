import React, {ChangeEvent} from 'react';
import Filters from "../shared/Filters";
import {CheckboxFilter} from "../../interfaces";
import {Checkbox} from "@material-ui/core"

function Test() {
    const [activeFilters, setActiveFilters] = React.useState(() => ({
        theme: {
            stereometry: true,
            planimetrics: true,
            trigonometry: true
        }
    }))

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
    return (
        <div>
            <Filters filters={filters}/>
            Test component
        </div>
    );
}

export default Test;
