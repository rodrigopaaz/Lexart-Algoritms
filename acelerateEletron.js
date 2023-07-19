function accelerateElectron(matrix) {
    const size = matrix.length;
  
    for (let i = 0; i < size; i++) {
      if (i === 0) {
        matrix[i].fill("e");
      } else {
        matrix[i][size - 1] = "e";
      }
    }
  
    return matrix;
  }

  module.exports = {accelerateElectron}