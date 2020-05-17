function condition_specific_correlation(g1, g2, info) {

  let dic = [];
  let cal = [];

  function DicNode() {
    this.r = 0;
    this.p = 0;
    this.set = function (r, p) {
      this.r = r;
      this.p = p;
    };
  }

  function CalNode() {
    this.sum = 0;
    this.sum_x = 0;
    this.sum_y = 0;
    this.sum_xy = 0;
    this.sum_xx = 0;
    this.sum_yy = 0;
    this.add = function (x, y) {
      this.sum += 1;
      this.sum_x += x;
      this.sum_y += y;
      this.sum_xy += x * y;
      this.sum_xx += x * x;
      this.sum_yy += y * y;
    };

    // 计算相关系数
    this.calcR = function () {
      let r = this.sum * this.sum_xy - this.sum_x * this.sum_y;
      r /= Math.sqrt(this.sum * this.sum_xx - this.sum_x * this.sum_x);
      r /= Math.sqrt(this.sum * this.sum_yy - this.sum_y * this.sum_y);
      return r;
    };

    // 计算P-Value
    this.calcP = function (r) {
      let n = this.sum;
      if (n <= 2) return "lack of data";
      let df = n - 2;
      let tv = r * Math.sqrt((n - 2) / (1 - (r * r)));
      return p_value(tv, df);
    }
  }

  for (const item in info) {
    const key = info[item].category;
    dic[key] = new DicNode();
    cal[key] = new CalNode();
  }

  for (const id in g1) {
    const x = g1[id];
    const y = g2[id];
    const key = info[id].category;
    cal[key].add(x, y);
  }

  for (const key in cal) {
    let r = cal[key].calcR();
    let p = cal[key].calcP(r);
    dic[key].set(r, p);
  }

  console.log(dic);
  return dic
}
