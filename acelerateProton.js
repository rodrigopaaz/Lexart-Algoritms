function accelerateProton(matrix) {
    const size = matrix.length;
    let lastOneRow = -1;
    let lastOneCol = -1;
    let lastProtonRow = -1;
    let lastProtonCol = -1;
  
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
          matrix[i][j] = "p";
          lastProtonRow = i;
          lastProtonCol = j;
        } else if ((i === 1 || i === size - 2) && (j === 1 || j === size - 2)) {
          matrix[i][j] = 1;
          lastOneRow = i;
          lastOneCol = j;
        }
      }
    }
  
    const lastElement = matrix[size - 1][size - 1];
    const secondLastElement = matrix[size - 1][size - 2];
  
    if (lastElement === 1) {
      matrix[size - 1][size - 1] = "p";
      lastOneRow = size - 1;
      lastOneCol = size - 1;
    } else if (lastElement === "p" && secondLastElement === 1) {
      matrix[size - 1][size - 1] = 1;
      matrix[size - 1][size - 2] = "p";
      lastOneRow = size - 1;
      lastOneCol = size - 2;
    }
  
    if (lastOneRow !== -1 && lastOneCol !== -1) {
      matrix[lastOneRow][lastOneCol] = "p";
    }
  
    if (lastProtonRow !== -1 && lastProtonCol !== -1) {
      matrix[lastProtonRow][lastProtonCol] = "1";
    }
  
    return { matrix };
  }

  module.exports = {accelerateProton}