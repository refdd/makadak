import {
    cylindersEnum,
    exteriorColorEnums,
    fuelTypeEnum,
    interiorColorEnums,
    kilometersEnum,
    makeEnum,
    modelEnum,
    transmisionEnum,
    yearsEnum
} from "@/lib/enums";

export const detailsFields = [
    {name: "make", label: "Make", options: makeEnum},
    {name: "model", label: "Model", options: modelEnum},
    {name: "km", label: "Kilometers", options: kilometersEnum},
    {name: "year", label: "Year", options: yearsEnum},
    {name: "fuelType", label: "Fuel Type", options: fuelTypeEnum},
    {name: "transmission", label: "Transmission", options: transmisionEnum},
    {name: "cylinders", label: "Cylinders", options: cylindersEnum},
];

export const extraInfoFields = [
    {name: "interiorColor", label: "Interior Color", options: interiorColorEnums},
    {name: "exteriorColor", label: "Exterior Color", options: exteriorColorEnums},
]

export const conditionEnum = [
    {value: 'Excellent', label: 'Excellent'},
    {value: 'good', label: 'Good'},
    {value: 'fair', label: 'Fair'}
]