const { accelerateElectron } = require("./acelerateEletron");
const { accelerateNeutron } = require("./acelerateNeutron");
const { accelerateProton } = require("./acelerateProton");
const { createMatrix } = require("./createMatrix");

  function cyclotron(particle, matrix) {
    const size = matrix.length;
  
    switch (particle) {
      case "e":
        return accelerateElectron(createMatrix(size, 1));
      case "p":
        return accelerateProton(createMatrix(size, 1));
      case "n":
        return accelerateNeutron(createMatrix(size, 1));
      default:
        return matrix;
    }
  }
  
  let matrix = createMatrix(4, 1);
  let result = cyclotron("p", matrix);
  console.log(result);

  matrix = createMatrix(6, 1);
  result = cyclotron("e", matrix);
  console.log(result);
  
  
  matrix = createMatrix(6, 1);
  result = cyclotron("p", matrix);
  console.log(result);
  
  matrix = createMatrix(4, 1);
  result = cyclotron("n", matrix);
  console.log(result);
  