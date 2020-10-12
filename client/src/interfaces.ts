import React, {ReactComponentElement, ReactElement} from "react";

export interface StandardComponentProps {
    title?: string
    children: React.ReactNode
}

export interface Formula {
    id: number
    title: string
    subject: string
    answer: string
}

export interface CheckboxFilter {
    label: string
    prop: string
    _id: number
    items: Array<CheckboxFilterItem>
}

export interface CheckboxFilterItem {
    label: string
    _id: number
    control: JSX.Element
}

export interface FiltersProps {
    filters: Array<CheckboxFilter>
}
