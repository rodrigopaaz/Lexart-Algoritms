function accelerateNeutron(matrix) {
    const size = matrix.length;
  
    for (let i = 0; i < size; i++) {
      if (i === 0) {
        matrix[i].fill("n");
      } else {
        matrix[i].fill(1);
      }
    }
  
    return matrix;
  }
  
  module.exports = {accelerateNeutron}