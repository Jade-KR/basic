import { acquireReading } from "./6-9.js";

const reading = acquireReading();
const baseCharge = reading.baseCharge;

const taxableCharge = reading.taxableCharge;

console.log(taxableCharge);
