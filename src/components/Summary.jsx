/* eslint-disable react/prop-types */
import { FavoritePerson } from "./FavoritePerson.jsx"
import {  Celebrity } from "./Celebrity.jsx"
import { SelectPerson } from "./SelectPerson.jsx"
import { Activity } from "./Activity.jsx"
import { Name } from "./Name.jsx"
import { Country } from "./Country.jsx"
export const Summary = () => {
  return (
    <>
      <FavoritePerson />
      <Celebrity />
      <SelectPerson />
      <Activity />
      <Name />
      <Country />
      <div>Summary</div>
      </>
  )
}
