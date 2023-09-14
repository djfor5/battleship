import { Ship } from "./ship.js";

test("Standard test", () => {
  expect(new Ship(2)).toEqual({
    length: 2,
    hitNumber: 0,
    isSunk: false,
  });
});

test("Hit method", () => {
  const testShip = new Ship(2);
  testShip.hit();
  expect(testShip.hitNumber).toEqual(1);
});

test("checkIfSunk updates isSunk", () => {
  const testShip = new Ship(1);
  testShip.hit();
  expect(testShip.isSunk).toEqual(true);
});
