import { questionFloat, keyInSelect } from "readline-sync";

const units = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(1000, exponent);
}

function exec() {
  const value = questionFloat('Enter the value to be converted: ');
  const fromUnitChoiceIndex = keyInSelect(units, "Choose a number for the base unit: ");
  const toUnitChoiceIndex = keyInSelect(units, "Choose a number for the conversion unit: ");
  
  const fromUnitChoice = units[fromUnitChoiceIndex];
  const toUnitChoice = units[toUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log('Function canceled');
    return 0;
  }

  const converted = convert(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} it's the same as ${converted}${toUnitChoice}`;
  
  console.log(message);
}

exec();