(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{294:function(t,a,v){"use strict";v.r(a);var _=v(14),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"内存超频"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存超频"}},[t._v("#")]),t._v(" 内存超频")]),t._v(" "),v("h2",{attrs:{id:"intel-lga1700"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#intel-lga1700"}},[t._v("#")]),t._v(" INTEL LGA1700")]),t._v(" "),v("p",[t._v("14代配B板非K处理器也可以调SA电压，但是要B0，既i9，i7阉割的。")]),t._v(" "),v("p",[t._v("DDR5，4内存插槽7200~7600是下限。2内存插槽，7600是下限。")]),t._v(" "),v("h2",{attrs:{id:"amd-am4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#amd-am4"}},[t._v("#")]),t._v(" AMD AM4")]),t._v(" "),v("p",[t._v("​\tryzen内存超频一定要保证flck频率:内存频率是1:2，这样才能获得最佳的性能。")]),t._v(" "),v("p",[t._v("通常3000系fclk在1800，5000系在2100左右，这是一个大部分U都能超到的频率，对应的内存频率甜蜜点是ddr4-3600和ddr4-4200。")]),t._v(" "),v("p",[t._v("​\t尽管原则上是尽可能放宽时序尽可能让频率跑到甜蜜点，但如果内存体质有限，频率确实上不去的话，适当的降低频率压时序也能提升性能。")]),t._v(" "),v("ul",[v("li",[t._v("分频的意义在于降低对imc体质的要求，压力完全来到内存体质，以至于可以降低性能来拉高频率。")])]),t._v(" "),v("p",[t._v("memtest最新的版本能显示测试速率，通过对比该速率可以确定soc电压是否偏低。")]),t._v(" "),v("h2",{attrs:{id:"入门调参顺序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#入门调参顺序"}},[t._v("#")]),t._v(" 入门调参顺序")]),t._v(" "),v("p",[t._v("  通常参考网友推荐，或微星主板memory try it定一个比较保守的值就差不多，超与不超是60分到90分，找频率极限可能是从90分到95分，压小参可能是95分到99分，却要花费大量时间测试是否稳定。")]),t._v(" "),v("p",[t._v("  以下调参顺序仅供参考。")]),t._v(" "),v("ul",[v("li",[t._v("amd平台最好先确认颗粒体质，好条子先找稳定的fclk频率。")]),t._v(" "),v("li",[t._v("温度在超频当中是不可忽视的影响因素，冬天稳定的频率小参到了夏天可能就不稳定了。")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("先确定内存耐压，调用XMP，但是电压尽可能拉高，1.5V起往上拉，跑memtest出错为止，要是1.5v就出错就往下拉，拉到不出错为止。找到内存的极限电压。")]),t._v(" "),v("blockquote",[v("p",[t._v("主板厂商一般会附赠软件，可以在windows下调内存电压。")])])]),t._v(" "),v("li",[v("p",[t._v("频率拉到期望频率，时序22-24-24-44，开启geardown mode。跑memtest看能不能过，不行的基本是颗粒或内存控制器不行，没必要挣扎直接降频率。")])]),t._v(" "),v("li",[v("p",[t._v("amd 锐龙平台还要确定fclk频率能不能稳住。5000系先设置SOC电压1.25V，VDDP1.2V，VDDG CCD1.1V，VDDG IOD 1.1。在windows里用aida64测内存效能，用主板附赠的软件一点一点往下调电压，调到内存效能变低了，就说明不能再低了。用testmem5测试fclk频率能不能稳住，放视频看会不会破音。这几个电压尽量找一个即稳定也更低的点，拉太高反而不稳定。")])]),t._v(" "),v("li",[v("p",[t._v("接着开始压小参，先拉tCL，别的先别动，tCL提升最大。找到tCL极限之后，再压别的小参。要注意压小参的时候还要参考aida64测试内存效能有没有提升，有时候压的太狠反而效能下降。")])]),t._v(" "),v("li",[v("p",[t._v("Ryzen DRAM Calculator可以帮助计算小参，一般算出来的都偏紧，要松一松。")])])]),t._v(" "),v("h2",{attrs:{id:"ddr5"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ddr5"}},[t._v("#")]),t._v(" ddr5")]),t._v(" "),v("p",[t._v("ddr5双面的两面都会有供电。为了走线更近。")]),t._v(" "),v("p",[t._v("ddr4 双面内存，一面是颗粒1~8，反面就是8~1。ddr5有一个mirror pin，swap pin，两面都是1~8。")]),t._v(" "),v("p",[t._v("ddr5 双面有一定改善。")])])}),[],!1,null,null,null);a.default=r.exports}}]);