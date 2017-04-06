def getIthBit(int, idx):
  return 1 if (int & (1 << idx)) != 0 else 0;

def setIthBit(int, idx):
  return (int | (1 << idx))

def clearIthBit(int, idx):
  return int & ~(1 << idx)

def clearRightmostBit(int):
  return int & (int - 1)

def getParity(int):
  parity = True
  while int > 0:
    int = int & (int - 1)
    parity = not parity
  return parity

def getHammingDistance(x, y):
  test = x ^ y
  count = 0
  while test is not 0:
    test = test & (test - 1)
    count += 1
  return count
