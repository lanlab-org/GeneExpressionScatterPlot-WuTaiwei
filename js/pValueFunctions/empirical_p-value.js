function empirical_p_value(g1, g2, info) {
  arr1 = [];
  arr2 = [];
  ecal = [];
  res = [];

  function EpCalNode() {
    this.sum_p = 0;
    this.sum = 0;
    this.add = function (p) {
      this.sum_p += p
    };
    this.getEp = function () {
      return this.sum_p / this.sum;
    };
  }

  for (const id in info) {
    let key = info[id].category;
    ecal[key] = new EpCalNode();
    res[key] = 0;
  }

  for (const id in g1) {
    arr1.push(g1[id]);
    arr2.push(g2[id]);
  }

  function ArrayShuffle(a) {
    let array = a;
    let len = array.length;
    for (let i = len - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  console.log(res);
  return res;
}