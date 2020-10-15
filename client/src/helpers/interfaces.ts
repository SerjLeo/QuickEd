import React from "react";

export interface StandardComponentProps {
    title?: string
    children: React.ReactNode
}

export interface IFormula {
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

export interface IFiltersProps {
    filters: Array<CheckboxFilter>,
    onFiltersSubmit: () => void
}

export interface ITestProps {
    test: {}
}
