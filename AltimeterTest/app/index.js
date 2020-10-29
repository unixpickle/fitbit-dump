import { Barometer } from "barometer";
import document from "document";

const PASCAL_TO_ATM = 9.86923e-6;

const pressureLabel = document.getElementById('pressure-reading');
const altitudeLabel = document.getElementById('altitude-reading');

pressureLabel.text = 'Loading...';

if (Barometer) {
   const barometer = new Barometer({ frequency: 1 });
   barometer.addEventListener("reading", () => {
     const atm = barometer.pressure * PASCAL_TO_ATM;
     const millibars = barometer.pressure * 0.01;
     const altitude = 145366.45 * (1 - Math.pow(millibars / 1013.25, 0.190284));
     pressureLabel.text = 'Atmospheres: ' + atm.toFixed(6);
     altitudeLabel.text = 'Altitude: ' + altitude.toFixed(3) + ' ft';
   });
   barometer.start();
} else {
  pressureLabel.text = 'No barometer on this device.';
}