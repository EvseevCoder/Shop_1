class LocatStorageUtil {
    constructor() {
        this.keyName = 'products'
    }

    getProducts() {
        const productsLovalStorage = localStorage.getItem(this.keyName)
        if (productsLovalStorage != null) {
            return JSON.parse(productsLovalStorage)
        }

        
    }

    putProducts(id) {
        let products = this.getProducts()
        const index = products.indexOf(id)
        let pushProduct = false

        if (index == -1) {
            products.push(id)
            this.putProducts = true
        } else {
            products.splice(index, 1)
        }

        products.push(id)
        localStorage.setItem(this.keyName, JSON.stringify(products))

        return {
            pushProduct,
            products
        }
    }
}

const locatStorageUtil = new LocatStorageUtil();
let a = locatStorageUtil.getProducts()

console.log(a)

locatStorageUtil.putProducts('el3')
locatStorageUtil.putProducts('el4')


console.log(a)