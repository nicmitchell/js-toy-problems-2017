const getIthBit = function(int, idx) {
  return ((int & (1 << idx)) !== 0) ? 1 : 0;
};

const setIthBit = function(int, idx) {
  return (int | (1 << idx));
};

const clearIthBit = function(int, idx) {
  return int & ~(1 << idx);
};

const clearRightmostBit = function(int) {
  return int & (int - 1);
};

const getParity = function(int) {
  let parity = true;
  while (int) {
    int = int & (int - 1);
    parity = !parity;
  }
  return parity;
};

const getHammingDistance = function(x, y) {
  let test = x ^ y;
  let count = 0;
  while (test) {
    test = test & (test - 1);
    count++;
  }
  return count;
}

console.log(getIthBit(8, 2))