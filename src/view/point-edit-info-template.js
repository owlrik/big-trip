const createPointEditInfoTemplate = ({ description = '', pictures = [] }) => {
  if (!description && !pictures.length) {
    return '';
  }

  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      ${(description) ? `
        <p class="event__destination-description">${description}</p>
      ` : ''}

      ${(pictures && pictures.length) ? `
        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${pictures.map(({ src, description: alt }) => `
              <img class="event__photo" src="${src}" alt="${alt}">
            `).join('')}
          </div>
        </div>
      ` : ''}
    </section>
  `;
};

export { createPointEditInfoTemplate };
