import { postman } from "./postman";
import { FormControlRender } from "./interface";

export const selectRender: FormControlRender = async (
  container,
  name = "region"
) => {
  const provinces = await postman("region").get();

  const tlp = `
    <div class="region-select-wrapper">
      <select id="region-area-select">
        ${provinces
          .map(
            province => `
              <option>${province.name}</option>
            `
          )
          .join("")}
      </select>
    </div>
  `;

  container.innerHTML = tlp;
};
