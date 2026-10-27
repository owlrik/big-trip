import AbstractView from '../framework/view/abstract-view.js';

const createFilterItemTemplate = ({ name, isActive }, isChecked) => {
  const getFilterName = (filterName) => `${filterName.charAt(0).toUpperCase()}${filterName.slice(1)}`;

  return `
    <div class="trip-filters__filter">
      <input
        id="filter-${name}"
        class="trip-filters__filter-input  visually-hidden"
        type="radio"
        name="trip-filter"
        value="${name}"
        ${(isChecked) ? 'checked' : ''}
        ${(isActive) ? '' : 'disabled'}
      >
      <label
        class="trip-filters__filter-label"
        for="filter-${name}"
      >
        ${getFilterName(name)}
      </label>
    </div>
  `;
};

const createFilterViewTemplate = (filters) => {
  const filterItems = filters
    .map((filter, index) => createFilterItemTemplate(filter, index === 0))
    .join('');

  return `
    <form class="trip-filters" action="#" method="get">
      ${filterItems}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `;
};

class FilterView extends AbstractView {
  #filters = null;

  constructor(filters) {
    super();

    this.#filters = filters;
  }

  get template() {
    return createFilterViewTemplate(this.#filters);
  }
}

export default FilterView;
