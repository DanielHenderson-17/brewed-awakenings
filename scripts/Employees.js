import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener("click", (clickEvent) => {
    const employeeTarget = clickEvent.target
    if (employeeTarget.dataset.type === "employee") {
        const employeeId = parseInt(employeeTarget.dataset.employeeid)
        const employeeOrders = orders.filter(order => order.employeeId === employeeId)
        const productsSold = employeeOrders.length
        window.alert(`${employeeTarget.textContent} has sold ${productsSold} products`)
    }
})

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-employeeid="${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}
