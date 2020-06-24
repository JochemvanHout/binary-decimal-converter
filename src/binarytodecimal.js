export default function binarytodecimal(bin){

  console.log(`I'm the to decimal function! My value is: ${bin}`);
  

  let dec = 0
  const reverseBinary = bin.split('').reverse().join('');

  for(let i = 0; i < bin.length; i++){
    dec += reverseBinary.charAt(i) * Math.pow(2, i)
  }

  return dec

}
