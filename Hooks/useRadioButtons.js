import { useState } from "react";

export function useRadioButtons(elements, legend) {
  const [element, setElement] = useState();
  function handleInputRadioChange(event) {
    setElement(event.target.value);
  }
  return (
    <form>
      <fieldset>
        <legend>{legend || ""}</legend>
        {elements.map((option) => {
          return (
            <div key={option} style={{ textAlign: "left" }}>
              <input
                type="radio"
                id={option}
                name={legend}
                value={option}
                checked={element === option}
                onChange={handleInputRadioChange}
              />
              <label>{option}</label>
            </div>
          );
        })}
      </fieldset>
    </form>
  );
}
