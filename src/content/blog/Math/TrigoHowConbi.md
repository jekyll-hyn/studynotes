---
title: "三角関数の合成・変形条件まとめ"
description: "Math/TrigoHowConbi.md"
pubDate: "2026-01-20"
tags: "Math,三角関数"
---

##### 三角関数の合成・変形 条件一覧表（○×判定）
<span class="imt1">

 覚え方：  
- 係数が違ったら、角度はそろえる   
- 係数がそろっていれば、角度は違ってもよい（ただし同じ関数）
- 和公式（sin＋sin，cos＋cos）では、外に **2** が付き、角の中は **(A±B)/2** となる。

- 積公式（sin×sin，sin×cos，cos×cos）では、外に **1/2** が付き、角の中は **A±B** のまま変化しない。

</span>

---

> 以下は **「角度が同じか」「係数が同じか」だけを見て即判断するための表** です。

| 式の形                         | 角度が同じ | 係数が同じ | 使用できる公式                                         |
| :--------------------------- | :---: | :---: | :--------------------------------------------------------      |
| $a\sin x + b\cos x$           |   ○   |   ×   | $$a\sin x + b\cos x = \sqrt{a^2+b^2}\,\sin(x+\alpha)$$        |
| $\sin A + \sin B$             |   ×   |   ○   | $$\sin A + \sin B = 2\sin\frac{A+B}{2}\cos\frac{A-B}{2}$$     |
| $\sin A - \sin B$             |   ×   |   ○   | $$\sin A - \sin B = 2\cos\frac{A+B}{2}\sin\frac{A-B}{2}$$  |
| $\cos A + \cos B$           |   ×   |   ○   | $$\cos A + \cos B = 2\cos\frac{A+B}{2}\cos\frac{A-B}{2}$$       |
| $\cos A - \cos B$             |   ×   |   ○   |<span class="imt1"> $$\cos A - \cos B = -2\sin\frac{A+B}{2}\sin\frac{A-B}{2}$$ </span>|
| $\sin^2 x + \cos^2 x $        |   ○   |   ○   | $$\sin^2 x + \cos^2 x = 1$$                                   |
| $\sin x + \cos 2x$            |   ×   |   ×   | 直接使用できる合成公式なし                                        |
| $\sin A\cos B$                |      |      | $$\sin A\cos B = \frac12[\sin(A+B)+\sin(A-B)]$$            |
| $\cos A\cos B$               |      |      | $$\cos A\cos B = \frac12[\cos(A+B)+\cos(A-B)]$$            |
| $\sin A\sin B $               |      |      | <span class="imt1">$$\sin A\sin B = - \frac12[\cos(A+B)-\cos(A-B)]$$ </span>|
| $\sin A\cos B + \cos A\sin B$ |      |      | $$\sin(A+B)  =   \sin A\cos B + \cos A\sin B  $$              |    
| $\sin A\cos B - \cos A\sin B$ |      |     | $$\sin(A-B) = \sin A\cos B - \cos A\sin B $$                   |
| $\cos A\cos B - \sin A\sin B$ |      |      | $$\cos(A+B) = \cos A\cos B - \sin A\sin B$$               |
| $\cos A\cos B + \sin A\sin B$ |      |      | $$\cos(A-B) = \cos A\cos B + \sin A\sin B$$               |

---
##### 判定記号の意味

* ○：条件を満たす（使用可能）
* ×：条件を満たさない（使用不可）


