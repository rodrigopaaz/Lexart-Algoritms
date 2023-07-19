function cyclotron(particle, matrix) {
    switch (particle) {
      case "e":
        matrix[0].fill(particle);
        for (let i = 1; i < matrix.length; i++) {
          matrix[i][matrix[i].length - 1] = particle;
        }
        break;
      case "p":
        matrix[0].fill(particle);
        for (let i = 1; i < matrix.length - 1; i++) {
          matrix[i][0] = particle;
          matrix[i][1] = 1;
        }
        matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1] = 1;
        break;
      default:
        break;
    }
    return matrix;
  }
  
  let matrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ];
  
  let result = cyclotron("e", matrix);
  console.log(result);
  