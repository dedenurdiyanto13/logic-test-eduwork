function isKabisat() {
  let input = 2024;

  if (input % 4 == 0) {
    console.log(input, "kabisat");
  } else if (input % 4 != 0) {
    console.log(input, "no kabisat");
  }
}

isKabisat();
