const main = async () => {
  const gamesContainer = document.querySelector('#features-container');
  const games = await fetch('public/json/games.json').then((x) => x.json());

  /**
   * *AF: Creates HTMLObjects with tag and classes specified
   * @param {string} tag - HTML tag name
   * @param {(string|string[])} className - HTML class name
   * @returns {HTMLElement}
   */
  const createElementWithClass = (tag, className) => {
    const element = document.createElement(tag);
    Array.isArray(className) // eslint-disable-line
      ? element.classList.add(...className)
      : element.classList.add(className);
    return element;
  };

  /**
   * *MF: Creates HTMLObject with game data information
   * @param {object} game - game data storage
   * @returns {HTMLElement}
   */
  const featureTemplate = (game) => {
    const article = createElementWithClass('article', [
      'flex',
      'gap-3',
      'items-start',
    ]);
    const divThumbnail = createElementWithClass('div', [
      'flex',
      'justify-end',
      'items-center',
    ]);
    const featureContainer = createElementWithClass(
      'div',
      'img-feature-container',
    );
    const img = createElementWithClass('img', 'img-feature');
    img.src = game.imgSource;
    img.setAttribute('alt', game.imgAlt);
    featureContainer.appendChild(img);
    divThumbnail.appendChild(featureContainer);
    article.appendChild(divThumbnail);
    const textContainer = createElementWithClass('div', ['pt-4', 'px-2']);
    const h3 = createElementWithClass('h3', [
      'text-primary-black',
      'text-xl',
      'font-bold',
    ]);
    h3.textContent = game.h3TextContent;
    textContainer.appendChild(h3);
    const h4 = createElementWithClass('h4', ['text-primary-orange', 'italic']);
    h4.textContent = game.h4TextContent;
    textContainer.appendChild(h4);
    const div = createElementWithClass('div', [
      'bg-primary-gray',
      'w-1/12',
      'h-0.5',
      'mt-1',
    ]);
    textContainer.appendChild(div);
    const p = createElementWithClass('p', ['text-sm', 'mt-3']);
    p.textContent = game.pTextContent;
    textContainer.appendChild(p);
    article.appendChild(textContainer);
    return article;
  };

  games.forEach((game) => {
    gamesContainer.appendChild(featureTemplate(game));
  });
};

main();
