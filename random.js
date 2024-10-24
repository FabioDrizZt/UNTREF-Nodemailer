function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}

console.log(getRandomIntInclusive(100_000_000,999_999_999))