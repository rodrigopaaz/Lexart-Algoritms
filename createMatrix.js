function createMatrix(size, fillValue) {
    const newMatrix = [];
  
    for (let i = 0; i < size; i++) {
      const row = Array(size).fill(fillValue);
      newMatrix.push(row);
    }
  
    return newMatrix;
  }
  
  module.exports = {createMatrix}