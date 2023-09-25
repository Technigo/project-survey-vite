import { SeasonRadio } from "./SeasonRadio/SeasonRadio.jsx"
import { NameInput } from "./NameInput/NameInput.jsx";
import { EcoCheck } from "./EcoCheck/EcoCheck.jsx";
import { ActivitySelect } from "./ActivitySelect/ActivitySelect.jsx";
import { ButtonSubmit } from "./ButtonSubmit/ButtonSubmit.jsx"

import "./Form.css"

export const Form  = () => {

    return (
        <div>
          <NameInput />
          <SeasonRadio />
          <ActivitySelect />
          <EcoCheck />
          <ButtonSubmit />
      </div>
    )
}