import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 7,
    priceCents: 0,
  },
  {
    id: "2",
    deliveryDays: 3,
    priceCents: 499,
  },
  {
    id: "3",
    deliveryDays: 1,
    priceCents: 999,
  },
];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });
  return deliveryOption || deliveryOptions[0];
}

// function isWeekend(deliveryDate) {
//   const today = dayjs();
//   let weekendCount = 0;
//   const weekend = ["Saturday", "Sunday"];
//   for (let i = 0; i < deliveryDate + weekendCount; i++) {
//     const check = today.add(i, "days").format("dddd");
//     if (weekend.includes(check)) {
//       weekendCount++;
//     }
//   }
//   return weekendCount;
// }

// export function calculateDeliveryDate(deliveryOption) {
//   const today = dayjs();
//   const deliveryDate = deliveryOption.deliveryDays;
//   let addWeekend = 0;
//   addWeekend = isWeekend(deliveryDate);
//   const currentDeliveryDays = deliveryDate + Number(addWeekend);
//   const newDeliveryDate = today.add(currentDeliveryDays, "days");
//   const dateString = newDeliveryDate.format("dddd, MMMM D");

//   return dateString;
// }

function isWeekend(date) {
  const dayOfWeek = date.format("dddd");
  return dayOfWeek === "Saturday" || dayOfWeek === "Sunday";
}

export function calculateDeliveryDate(deliveryOption) {
  let remainingDays = deliveryOption.deliveryDays;
  let deliveryDate = dayjs();

  while (remainingDays > 0) {
    deliveryDate = deliveryDate.add(1, "day");

    if (!isWeekend(deliveryDate)) {
      remainingDays--;
    }
  }

  const dateString = deliveryDate.format("dddd, MMMM D");

  return dateString;
}
