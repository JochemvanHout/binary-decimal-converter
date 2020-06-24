export default function convertDecToBin(dec){

  console.log(`I'm the to binary function! My value is: ${dec}`);

  let manipulatedDec = dec
  let x = 0
  let binary
  let lengthChecked = false

  while (manipulatedDec > 0){

    while (manipulatedDec >= Math.pow(2, x)) {
      x++;
    }

    // on the first iteration set binary to fill the array with the correct amount of 0's
    if(!lengthChecked){
      binary = new Array(x).fill(0)
      lengthChecked = true
    }

    // the iterator goes one cycle too far, so we have to remove one
    x--
    binary[x] = 1

    manipulatedDec = manipulatedDec - Math.pow(2, x)

    // Reset counter for next iteration
    x = 0

  }

  return binary.reverse().join("")
}
