// Type aliases - it is allow defingin types with a custom name

type carYear = number;
type carType = string;
type carModel = string;

type Car = {
  year: carYear;
  type: carType;
  model: carModel;
};

const newCar: Car = {
  year: 2005,
  type: 'Toyota',
  model: 'Corolla'
};

// Interfaces - its are similar to type aliases, except they only apply to object types.
interface Rectangule {
  height: number,
  weight: number,
}
const newRectangle: Rectangule = {
  height: 20,
  weight: 10
}

// Extending interfaces
interface Coloredrectangle extends Rectangule {
  color: string
}
const coloredRectangle: Coloredrectangle = {
  height: 40,
  weight: 30,
  color: 'light-blue'
}
