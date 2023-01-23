function reverseString(s) {
  try {
    s = s.split('').reverse().join('');
  }
  catch (e) {
    console.log('s.split is not a function');
  }
  console.log(s);
}

reverseString('mensagem');
reverseString(12345);
