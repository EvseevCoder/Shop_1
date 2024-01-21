class Products {
  constructor() {
    this.classNameActive = "productsElement__btn_active";
    this.labelAdd = "Добавить в корзину";
    this.labelRemove = "Удалить из корзины";
  }

  handleSetLocationStorage(element, id) {
    const { pushProduct, products } = locatStorageUtil.putProducts(id);

    console.log(pushProduct);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
      console.log("Удалено");
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
      console.log("Добавлено");
    }
  }

  render() {
    const productsStore = locatStorageUtil.getProducts();
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, price, img }) => {
      let activeClass = "";
      let activetext = "";

      if (productsStore.indexOf(id) == -1) {
        activetext = this.labelAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activetext = this.labelRemove;
      }

      htmlCatalog += `
            
        <li class="productsElement">
            <span class="productsElement__name">${name}</span>
            <img class="productsElement__img" src="${img}"/>
            <span class="productsElement__price">⚡ ${price.toLocaleString()} RUB</span>
            <button class="productsElement__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activetext}</button>
        </li>

      `;
    });

    const html = `
        
            <ul class='productsContainer'>${htmlCatalog}</ul>

        `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

productsPage = new Products();

productsPage.render();
