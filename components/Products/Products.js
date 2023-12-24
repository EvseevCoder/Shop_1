class Products {

    render() {

        let htmlCatalog = ''

        CATALOG.forEach( ({id, name, price, img}) => {
            htmlCatalog += `
            
                <li class="productsElement">
                    <span class="productsElement__name">${name}</span>
                    <img class="productsElement__img" src="${img}"/>
                    <span class="productsElement__price">⚡ ${price.toLocaleString()} RUB</span>
                    <button class="productsElement__btn">Добавить в корзину</button>
                </li>

            `
        });


        const html = `
        
            <ul class='productsContainer'>${htmlCatalog}</ul>

        `

        ROOT_PRODUCTS.innerHTML = html

    }
}

productsPage = new Products()

productsPage.render()