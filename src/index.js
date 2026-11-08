export function supportMathFont() {
  let style = document.createElement("style")
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Math&display=swap');
  `
  document.body.prepend(style)
}


export const renderMath = {
  mathParent: function () {
    let mathParent = document.createElementNS("http://www.w3.org/1998/Math/MathML", "math");
    mathParent.style = `
      font-family: "STIX Two Math", serif;
      font-weight: 400;
      font-style: normal;
    `
    return mathParent;
  },
  number: function (number) {
    let element = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mn")
    element.textContent = `${number}`
    return element
  },
  operator: function (operator) {
    let element = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mo")
    element.textContent = `${operator}`
    return element
  },
  italic: function (character) {
    let element = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mi")
    element.textContent = `${character}`
    return element
  },
  fraction: function (arrayOfNumer, arrayOfDenom) {
    let frac = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mfrac")
    let numer = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mrow")
    let denom = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mrow")
    arrayOfNumer.forEach(char => {
      numer.append(char)
    });
    arrayOfDenom.forEach(char => {
      denom.append(char)
    });
    frac.append(numer, denom)
    return frac
  },
  sqrt: function (...characters) {
    let sqrt = document.createElementNS("http://www.w3.org/1998/Math/MathML", "msqrt")
    characters.forEach(char => {
      sqrt.append(char)
    })
    sqrt.style = `
      display: flex;
      align-items: center;
      justify-content: center;
    `
    return sqrt;
  }
}