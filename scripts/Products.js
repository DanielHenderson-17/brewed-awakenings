import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener("click", (clickEvent) => {
    const productTarget = clickEvent.target
    if (productTarget.dataset.type === "product") {
        const productName = productTarget.textContent
        const productPrice = parseFloat(productTarget.dataset.price)
        window.alert(`${productName} costs \n$${productPrice}`)
    }
})

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product" data-price="${product.price}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}
