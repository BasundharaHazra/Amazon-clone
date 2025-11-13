export const orders = JSON.parse(localStorage.getItem("orders")) || []; //when there's nothing in localStorage the default empty array will work

export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("orders", JSON.stringify(orders));
}
