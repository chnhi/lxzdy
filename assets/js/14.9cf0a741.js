(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{284:function(t,e,a){"use strict";a.r(e);var v=a(14),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"英特尔cpu一览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#英特尔cpu一览"}},[t._v("#")]),t._v(" 英特尔CPU一览")]),t._v(" "),a("h2",{attrs:{id:"rocket-lake"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rocket-lake"}},[t._v("#")]),t._v(" Rocket Lake")]),t._v(" "),a("p",[t._v("同内存，4内存槽板子11代比10代低200~266mhz，开发用的就是2内存板子，2内存板子表现更强些。尽管低了200mhz，但是memtest的总测试速度是差不多的，实际效能相近。")]),t._v(" "),a("ul",[a("li",[t._v("推荐频率点3200,3333,3466,4000,4266,4533,4800,5066,5333,5600,5866。以下内容说明为什么这几个频率点是最好的。")])]),t._v(" "),a("p",[t._v("内存频率=QCLK Ratio(6-63) x BCLK(100Mhz) x Reference Clock(100 or 133)")]),t._v(" "),a("p",[t._v("DDR4-3600,Memory Freq =3600；Memory Clock = 1800；Memory Controler Clock(cpu imc :dram) 1800(gear1)/900(gear2)")]),t._v(" "),a("ul",[a("li",[t._v("MSI超频预设分频点是3600以上，XMP按照英特尔规格，超过cpu最大内存支持频率就分频，如i7 2933以上就分频。")]),t._v(" "),a("li",[t._v("AMD锐龙FCLK 频率同时是core die 和IO die之间的总线频率，而英特尔分频只影响内存控制器本身。")]),t._v(" "),a("li",[t._v("跑3600 gear1 sa电压要拉的非常高，因此3600,3733两个频率不是很推荐。")])]),t._v(" "),a("p",[t._v("gear1红色基本是跑不了的，gear2由于1：2分频，只支持双数，所以红色是不支持的。gear2当中，reference clock 133的频率由于ratio更低，更容易跑。ratio要尽可能低。因此，在一些频率上msi会更倾向于稍加一点外频，b560如果不能动外频，开启xmp会向下取频率。")]),t._v(" "),a("ul",[a("li",[t._v("非k处理器本身就不能跑100的 reference clock")]),t._v(" "),a("li",[t._v("Rocket Lake读写速度，3733分频与否有一定效能下降，4000开始分频与否没有显著效能差异。延迟，3733及以下大约有4-6ms的差异，4000以上大约是1-4ms的差异，5000以上1ms以内的差异。（分频与否效能差异测的是11代对比10代）")])]),t._v(" "),a("h2",{attrs:{id:"_11代rocket-lake-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11代rocket-lake-s"}},[t._v("#")]),t._v(" 11代Rocket Lake-S")]),t._v(" "),a("p",[t._v("Cypress Cove微架构其实就是把Ice Lake上的Sunny Cove用14nm工艺再现了出来，并不是Tiger Lake上的Willow Cove。")]),t._v(" "),a("p",[t._v("Core i9-11900K/KF默认内存Gear1与Gear2分频频率3200MHz，其他都是2933MHz。i9支持TVB和Adaptive Boost Technology。tvb只在70度以下加强睿频频率，5/6核睿频是4.9GHz，7/8核睿频是4.8GHz，大部分情况下全核负载最多只能到4.7g，开启abt之后，100度以下都能疯狂睿频，最高全核5.1。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("11代的ringbus采用的是双ring")])]),t._v(" "),a("li",[a("p",[t._v("11900体质比11700更好，11900全核5.3，11700，11600全核5.1。但实际上全核5g功耗就已经很大，全核5.1要1.44v，发热过大，360水冷都已经压不住。")])]),t._v(" "),a("li",[a("p",[t._v("TAT：增加内存copy效能，降低延迟。")])]),t._v(" "),a("li",[a("p",[t._v("ABT：进阶睿频，依旧还是会受到TVB的限制 n。TVB睿频单双核一档，三四核一档，5核及以上最低档，apt尝试把5核及以上设置为三四核同档。以11900为例，tvb单双核5.3，三四核5.1,五六核4.9,再高4.8。APT尝试5核及以上5.1。TVB通常电压在1.36上下，APT会把电压拉到接近1.5。")])]),t._v(" "),a("li",[a("p",[t._v("APT功能MSI BIOS里有enable和enable 251w ，251w是英特尔原厂规范，msi高端板子改成enable可以解锁功耗。只要散热压得住，能一路冲到三四百瓦，解锁251w之后温度会非常惊人。")])]),t._v(" "),a("li",[a("p",[t._v("11代引入 AVX control，在电压，频率全部是预设状态下，以offset形式在跑AVX运算的时候加压或降压，预设值128不加压也不降压。")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("型号")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("核心"),a("br"),t._v("/线程")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默频"),a("br"),t._v("(GHz)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("单核"),a("br"),t._v("睿频"),a("br"),t._v("(GHz)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("全核"),a("br"),t._v("睿频"),a("br"),t._v("(GHz)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("L3"),a("br"),t._v("(MB)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("GPU"),a("br"),t._v("EU")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("TDP"),a("br"),t._v("(W)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i9-11900K(F)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8/16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3.5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5.3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4.8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("125")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i9-11900(F)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8/16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5.2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4.7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("65")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i7-11700K(F)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8/16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3.6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4.6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32(-)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("125/95(可调)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i7-11700(F)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8/16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4.9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32(-)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("65")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i5-11600K")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6/12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3.9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4.9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4.6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("125")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i5-11600")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6/12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("65")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i5-11500")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6/12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4.5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("65")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i5-11400")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6/12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4.2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("24")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("65")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i9-11900T")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8/16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1.5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4.9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3.7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("35/25(可调)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i7-11700T")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8/16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4.6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3.6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("35/25(可调)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i5-11600T")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6/12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("35")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i5-11500T")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6/12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("35")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i5-11400T")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6/12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("24")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("35")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"vx_images/INTELCPU%E4%B8%80%E8%A7%88/image-20210331104917119.png",alt:"image-20210331104917119"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"vx_images/INTELCPU%E4%B8%80%E8%A7%88/image-20210331104944052.png",alt:"image-20210331104944052"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/16/b1KMiJnz9S7ogF6.jpg",alt:"11900K_11.jpg"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/16/faeRONZKk54B8uA.jpg",alt:"11900K_12.jpg"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/16/kR2u3vbqAaEyrHt.jpg",alt:"11900K_13.jpg"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"vx_images/INTELCPU%E4%B8%80%E8%A7%88/image-20210331105632407.png",alt:"image-20210331105632407"}})]),t._v(" "),a("h2",{attrs:{id:"rocket-lake-s-qs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rocket-lake-s-qs"}},[t._v("#")]),t._v(" Rocket Lake-S QS")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/18/LA3nUej4dDyB9xo.jpg",alt:"zG3o2wLMaVkA1K9.jpg"}})]),t._v(" "),a("h2",{attrs:{id:"_11代rocket-lake-s-es"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11代rocket-lake-s-es"}},[t._v("#")]),t._v(" 11代Rocket Lake-S ES")]),t._v(" "),a("p",[t._v("11代相对10代进行了架构大改，购买ES处理器要谨慎。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("QV1J")]),t._v("  i7-11700")])]),t._v(" "),a("p",[a("code",[t._v("8C16T")]),t._v(" "),a("code",[t._v("默频1.8单核4.4全核3.8")]),t._v(" "),a("code",[t._v("PL1:65W")]),t._v(" "),a("code",[t._v("PL2:224W")])]),t._v(" "),a("blockquote",[a("p",[t._v("不支持 PCIe 4.0 以及 XMP，内存频率只能保持在 2133MHz 附近。")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("QV1K")]),t._v("  i7-11700K "),a("code",[t._v("可超频")])])]),t._v(" "),a("p",[a("code",[t._v("8C16T")]),t._v(" "),a("code",[t._v("默频3.4单核4.3全核4.8")]),t._v(" "),a("code",[t._v("PL1:125W")]),t._v(" "),a("code",[t._v("PL2:250W")])]),t._v(" "),a("blockquote",[a("p",[t._v("支持 XMP，内存频率可以达到 4133MHz。")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("QVYE")]),t._v("  i9-11900")])]),t._v(" "),a("p",[a("code",[t._v("8C16T")]),t._v(" "),a("code",[t._v("默频1.8单核4.4全核3.8")]),t._v(" "),a("code",[t._v("PL1:65W")]),t._v(" "),a("code",[t._v("PL2:224W")])]),t._v(" "),a("blockquote",[a("p",[t._v("没有明显 Bug，支持 XMP、PCIe 4.0，内存频率 3200MHz")])]),t._v(" "),a("h2",{attrs:{id:"lga1151-es"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lga1151-es"}},[t._v("#")]),t._v(" LGA1151 ES")]),t._v(" "),a("ul",[a("li",[t._v("**QTJ2 **  i9-11900")])]),t._v(" "),a("p",[a("code",[t._v("6C12T")]),t._v(" "),a("code",[t._v("默频2.4单核4.3全核??")]),t._v(" "),a("code",[t._v("PL1:??W")]),t._v(" "),a("code",[t._v("PL2:???W")])]),t._v(" "),a("blockquote",[a("p",[t._v("i7-10750H魔改LGA1151，这种U除非特别便宜，否则不值得考虑。")])]),t._v(" "),a("h2",{attrs:{id:"lake-s家族"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lake-s家族"}},[t._v("#")]),t._v(" Lake-S家族")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("cpu代号（代数）")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("制程")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("cpu架构")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("gpu架构")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("插座")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("主板")]),t._v(" "),a("th",[t._v("ddr")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("最大核心数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Coffee Lake（9）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("14nm++")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SkyLake+")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Gen9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("LGA1151")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("300")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Comet Lake（10）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("14nm+++")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SkyLake+")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Gen9.5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("LGA1200")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("400")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Rocket Lake（11）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("14nm+++")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cypress Cove")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Gen12.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("LGA1200")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("500")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Alder Lake（12）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10nm Enhanced SuperFin")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Golden Cove"),a("br"),t._v("Gracemont")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Gen12.2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("LGA1700")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("600")]),t._v(" "),a("td",[t._v("4/5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("16 (8+8)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Raptor Lake-S(13)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10nm Enhanced SuperFin")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ocean Cove"),a("br"),t._v("Gracemont?")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("LGA1700")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Meteor Lake（14）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("7nm Enhanced SuperFin")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Redwood Cove  "),a("br"),t._v("Gracemont?")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("LGA1700")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("p",[t._v("据称Alder Lake（12）搭配的600系主板只有z690支持ddr5，其余600系主板将依旧支持ddr4。")]),t._v(" "),a("p",[t._v("Raptor Lake应该会对核心和缓存做一些改进，有可能在L2和L3缓存上有一些改良，以提高游戏性能，移动平台会加入对LPDDR5X内存的支持，并获得新的DLVR供电系统。")]),t._v(" "),a("p",[t._v("Raptor Lake-S与Alder Lake-S平台兼容，两者变化不大")]),t._v(" "),a("p",[t._v("Meteor Lake将使用新的总线结构取代原有的环形总线结构。")])])}),[],!1,null,null,null);e.default=_.exports}}]);