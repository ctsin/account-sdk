import { postman } from "./postman";
import { FormControlRender } from "./interface";
import { html, render } from "lit-html";

export const selectRender: FormControlRender = async (
  container,
  name = "region"
) => {
  const selectedIndex = {
    province: 0,
    city: 0,
    district: 0
  };

  const provinces = await postman("region").get();

  const province = () => html`
    <select on-click="${e => console.log(e)}" id="province-select">
      ${provinces.map(
        province => html`
          <option>${province.name}</option>
        `
      )}
    </select>
  `;

  const city = () => html`
    <select id="city-select">
      ${provinces[selectedIndex.province].city.map(
        city => html`
          <option>${city.name}</option>
        `
      )}
    </select>
  `;

  const district = () => html`
    <select id="district-select">
      ${provinces[selectedIndex.province].city[
        selectedIndex.district
      ].district.map(
        district => html`
          <option>${district.name}</option>
        `
      )}
    </select>
  `;

  const selectTags = () => html`
    ${province()}
    ${city()}
    ${district()}
  `;

  render(selectTags(), container);
};
