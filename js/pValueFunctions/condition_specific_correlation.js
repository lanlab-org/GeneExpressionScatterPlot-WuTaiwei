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

  }

  console.log(dic);
  return dic
}
