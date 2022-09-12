// Problem ----> 1
// convert radian to degree.

function radianToDegree(radian) {
  if (typeof radian !== "number") {
    return "Please send number";
  } else {
    let degrees = 57.2958;
    let radianDegree = radian * degrees;
    let fixedTwo = radianDegree.toFixed(2);

    return fixedTwo;
  }
}

let result = radianToDegree(1);
console.log(result);

// Problem ----> 2
// check whether the given javascript file

function isJavaScriptFile(javaScript) {
  if (javaScript === "index.js") {
    return true;
  } else {
    return false;
  }
}

const result2 = isJavaScriptFile("index.js");
console.log(result2);

// Problem ----> 3
// calculate the total oil price
function oilPrice(diesel, petrol, octane) {
  if (
    typeof diesel !== "number" ||
    typeof petrol !== "number" ||
    typeof octane !== "number"
  ) {
    return "Please send number";
  } else {
    const oneLetterDiesel = 114;
    const oneLetterPetrol = 130;
    const oneLetterOctane = 135;

    let dieselTotalTaka = diesel * oneLetterDiesel;
    let petrolTotalTaka = petrol * oneLetterPetrol;
    let octaneTotalTaka = octane * oneLetterOctane;

    const totalPrice = dieselTotalTaka + petrolTotalTaka + octaneTotalTaka;

    return totalPrice;
  }
}

const result3 = oilPrice(2, 4, 7);

console.log(result3);

// Problem ----> 4
// public bus total costs

function publicBusFare(people) {
  if (typeof people !== "number") {
    return "Please send number";
  } else {
    const busSit = 50;
    const microBusSit = 11;
    const publicFare = 250;

    let busRemaining = people - busSit;
    let microBusRemaining = busRemaining - microBusSit;

    return microBusRemaining * publicFare;
  }
}

const result4 = publicBusFare(65);
console.log(result4);

// Problem ----> 5

function isBestFriend() {
  const friend_1 = {
    name: "Tom",
    friend: "Rock",
  };

  const friend_2 = {
    name: "Rock",
    friend: "Tom",
  };

  let name_1 = friend_1["name"];
  let name_2 = friend_2["name"];

  let friend_name_1 = friend_1["friend"];
  let friend_name_2 = friend_2["friend"];

  if (name_1 === friend_name_2 && name_2 === friend_name_1) {
    return true;
  } else {
    return false;
  }
}
const result5 = isBestFriend();

console.log(result5);
