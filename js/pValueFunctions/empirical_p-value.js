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
    // 计算empirical_p_value
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

  //数组打乱函数
  function ArrayShuffle(a) {
    let array = a;
    let len = array.length;
    for (let i = len - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  //至少打乱1000次
  let n = 1005
  for (let i = 1; i <= n; i++) {
    arr1 = ArrayShuffle(arr1);
    arr2 = ArrayShuffle(arr2);

    let j = 0;
    for (const id in g1) {
      g1[id] = arr1[j];
      g2[id] = arr2[j];
      j++;
    }
    console.log(g1, g2);
    let dic = condition_specific_correlation(g1, g2, info);

    for (const key in dic) {
      ecal[key].add(dic[key].p);
    }
  }

  for (const key in ecal) {
    res[key] = ecal[key].getEp();
  }

  console.log(res);
  return res;
}
/*

test_g1 = {
  "Sample000001": 4.289573449168518,
  "Sample000002": 2.156959910956774,
  "Sample000003": 1.8869501881764998,
  "Sample000004": 2.318906182108072,
  "Sample000005": 2.465811143552942,
  "Sample000006": 1.5051048092641781,
  "Sample000007": 2.75919314481797,
  "Sample000008": 1.7106249236448405,
  "Sample000009": 1.4532493444350987,
  "Sample000010": 1.769476745548879
}

test_g2 = {
  "Sample000001": 10.16684708560372,
  "Sample000002": 3.9234101173157194,
  "Sample000003": 3.747947983666165,
  "Sample000004": 2.1689959495548172,
  "Sample000005": 0.739977486045571,
  "Sample000006": 4.017857649167104,
  "Sample000007": 4.208983813828824,
  "Sample000008": 1.9608674182944945,
  "Sample000009": 5.32833434202549,
  "Sample000010": 5.223105889336104
}

test_info = {
  "Sample000001": {"category": "Type1", "detail": "TBA"},
  "Sample000002": {"category": "Type1", "detail": "TBA"},
  "Sample000003": {"category": "Type1", "detail": "TBA"},
  "Sample000004": {"category": "Type1", "detail": "TBA"},
  "Sample000005": {"category": "Type1", "detail": "TBA"},
  "Sample000006": {"category": "Type2", "detail": "TBA"},
  "Sample000007": {"category": "Type2", "detail": "TBA"},
  "Sample000008": {"category": "Type2", "detail": "TBA"},
  "Sample000009": {"category": "Type2", "detail": "TBA"},
  "Sample000010": {"category": "Type2", "detail": "TBA"}
}

empirical_p_value(test_g1, test_g2, test_info);
*/
