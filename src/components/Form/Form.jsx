import { NameInput } from "./NameInput/NameInput.jsx";
import { SeasonRadio } from "./SeasonRadio/SeasonRadio.jsx"
import { ActivitySelect } from "./ActivitySelect/ActivitySelect.jsx";
import { EcoCheck } from "./EcoCheck/EcoCheck.jsx";
import { ButtonSubmit } from "./Buttons/ButtonSubmit/ButtonSubmit.jsx"

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