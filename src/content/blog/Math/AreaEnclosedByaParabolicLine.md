---
title: "1 / 6 公式, 抛物线と直線に囲まれた面積"
description: "useGraphPlot"
pubDate: "2026-01-30"
tags: "微積分"
---

<div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap;transform: scale(0.5); transform-origin: top center;">

  <!-- ===== 图 1：抛物线 × 直线 ===== -->
  <svg id="svg1" width="400" height="300" viewBox="-5 -5 10 10"
       style="border:1px solid #eee;border-radius:8px">
    <path id="curve1" stroke="#e74c3c" stroke-width="0.1" fill="none"/>
    <path id="line1"  stroke="#3498db" stroke-width="0.1" fill="none"/>
    <path id="area1"  fill="rgba(231,76,60,0.25)"/>
  </svg>

  <!-- ===== 图 2：抛物线 × 抛物线 ===== -->
  <svg id="svg2" width="400" height="300" viewBox="-5 -5 10 10"
       style="border:1px solid #eee;border-radius:8px">
    <path id="curve2" stroke="#e74c3c" stroke-width="0.1" fill="none"/>
    <path id="line2"  stroke="#3498db" stroke-width="0.1" fill="none"/>
    <path id="area2"  fill="rgba(231,76,60,0.25)"/>
  </svg>

</div>

<script>
/* ===== 交点计算（符号変化 + 二分法） ===== */
function intersections(f, g, xmin, xmax, step = 0.02) {
  const xs = [];
  let x0 = xmin;
  let y0 = f(x0) - g(x0);

  for (let x = xmin + step; x <= xmax; x += step) {
    const y = f(x) - g(x);
    if (y0 === 0 || y0 * y < 0) {
      let a = x - step, b = x;
      for (let i = 0; i < 30; i++) {
        const m = (a + b) / 2;
        if ((f(a) - g(a)) * (f(m) - g(m)) <= 0) b = m;
        else a = m;
      }
      xs.push((a + b) / 2);
    }
    x0 = x;
    y0 = y;
  }
  return xs;
}

/* ===== 描画関数 ===== */
function draw(svgId, curveId, lineId, areaId, f, g) {
  const xminView = -5, xmaxView = 5;

  /* 曲線 f */
  let p = "";
  for (let i = 0; i <= 120; i++) {
    const x = xminView + (xmaxView - xminView) * i / 120;
    p += (i ? "L " : "M ") + x + " " + f(x) + " ";
  }
  document.getElementById(curveId).setAttribute("d", p);

  /* 曲線 g */
  let l = "";
  for (let i = 0; i <= 120; i++) {
    const x = xminView + (xmaxView - xminView) * i / 120;
    l += (i ? "L " : "M ") + x + " " + g(x) + " ";
  }
  document.getElementById(lineId).setAttribute("d", l);

  /* 交点 & 面积 */
  const xs = intersections(f, g, xminView, xmaxView);
  if (xs.length >= 2) {
    let a = "";
    const N = 80;
    const x1 = xs[0], x2 = xs[1];

    for (let i = 0; i <= N; i++) {
      const x = x1 + (x2 - x1) * i / N;
      a += (i ? "L " : "M ") + x + " " + f(x) + " ";
    }
    for (let i = N; i >= 0; i--) {
      const x = x1 + (x2 - x1) * i / N;
      a += "L " + x + " " + g(x) + " ";
    }
    a += "Z";
    document.getElementById(areaId).setAttribute("d", a);

    const svg = document.getElementById(svgId);
    xs.forEach(x => {
      const c = document.createElementNS("http://www.w3.org/2000/svg","circle");
      c.setAttribute("cx", x);
      c.setAttribute("cy", f(x));
      c.setAttribute("r", 0.15);
      c.setAttribute("fill", "#2ecc71");
      svg.appendChild(c);
    });
  }
}

/* ===== 图 1：抛物线 × 直线 ===== */
(() => {
  const f = x => x * x - 2 * x - 3;
  const g = x => -(x - 1);
  draw("svg1", "curve1", "line1", "area1", f, g);
})();

/* ===== 图 2：抛物线 × 抛物线 ===== */
(() => {
  const f = x => x * x;          // 上に開く放物線
  const g = x => -x * x + 4;     // 下に開く放物線
  draw("svg2", "curve2", "line2", "area2", f, g);
})();
</script>

#### 1 / 6 公式（面積）

##### 1. 放物線と直線

α, β は交点（α < β），|a| を忘れない

$$
|a|\int_{\alpha}^{\beta}(x-\alpha)(x-\beta)\,dx
$$

$$
= |a|\left(-\frac{1}{6}(\beta-\alpha)^3\right)
$$

$$
= \frac{|a|}{6}\,|\beta-\alpha|^3
$$

##### 2. 2つの放物線  
$$
y=f(x),\quad y=g(x)
$$

交点を  
$$
x=\alpha,\ \beta\ (\alpha<\beta)
$$

とする。

---

$$
f(x)-g(x)=a(x-\alpha)(x-\beta)
$$

---

囲まれた面積

$$
S=\int_{\alpha}^{\beta}\{f(x)-g(x)\}\,dx
$$

$$
=|a|\int_{\alpha}^{\beta}(x-\alpha)(x-\beta)\,dx
$$

$$
=\frac{|a|}{6}\,|\beta-\alpha|^3
$$


