import { pointNames } from '../mock/const.js';

const createPointDestinationTemplate = ({ type, destination }) => `
    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${type}
      </label>
      <input
        class="event__input  event__input--destination"
        id="event-destination-1"
        type="text"
        name="event-destination"
        value="${destination.name}"
        list="destination-list-1"
      >
      <datalist id="destination-list-1">
        ${pointNames.map((pointName) => `
          <option value="${pointName}"></option>
        `).join('')}
      </datalist>
    </div>
  `;

export { createPointDestinationTemplate };
