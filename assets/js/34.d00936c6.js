(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{305:function(e,t,r){"use strict";r.r(t);var a=r(14),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"windows-nas"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-nas"}},[e._v("#")]),e._v(" Windows Nas")]),e._v(" "),r("h2",{attrs:{id:"参考链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[e._v("#")]),e._v(" 参考链接")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.chiphell.com/thread-1903476-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("24盘位家庭虚拟化机架式服务器"),r("OutboundLink")],1),e._v("  ；"),r("a",{attrs:{href:"https://koolshare.cn/forum.php?mod=viewthread&tid=173537&page=1&extra=#pid2125701",target:"_blank",rel:"noopener noreferrer"}},[e._v("【大型终极版教程】ESXI+LEDE+DSM+WIN10"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("显卡解码支持："),r("a",{attrs:{href:"https://bluesky-soft.com/en/dxvac/deviceInfo/decoder/amd.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AMD GPU"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://bluesky-soft.com/en/dxvac/deviceInfo/decoder/intel.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel GPU"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://bluesky-soft.com/en/dxvac/deviceInfo/decoder/nvidia.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("NVIDIA GPU"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"windows能行么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows能行么"}},[e._v("#")]),e._v(" windows能行么？")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/681227299",target:"_blank",rel:"noopener noreferrer"}},[e._v("D1581运行windows nas，hyper-v运行truenas记录。"),r("OutboundLink")],1),e._v("+长江存储白片用于数据存储。")]),e._v(" "),r("p",[e._v("“实践是检验真理的唯一标准”，任何看似稳定的系统，无非是测试团队或用户踩过坑。windows占有率领先，反而认为其极不稳定，是完全没有道理的。")]),e._v(" "),r("h3",{attrs:{id:"其他系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他系统"}},[e._v("#")]),e._v(" 其他系统")]),e._v(" "),r("p",[e._v("1、OMV，PVE，TrueNas等，其实就是在debian基础上运行webui。")]),e._v(" "),r("p",[e._v("OMV尽量只通过webui调整设置，修改配置文件可能导致报错。")]),e._v(" "),r("p",[e._v("但凡需要跑win虚拟机，我会倾向于ESXi，或win主机。只要有win虚拟机运行，PVE主机就会积极睿频最大频率，功耗暴增。")]),e._v(" "),r("p",[e._v("2、群晖优势在于开箱即用，不需要折腾。smart出现异常会自动下线并报警。")]),e._v(" "),r("blockquote",[r("p",[e._v("威联通要跑quts hero，能格式化成zfs的机型，才提供了擦洗（scrub）功能。")])]),e._v(" "),r("p",[e._v("3、斐讯n1等arm方案装armbian，这些方案的sata基本是usb转sata。nfs速度还行，samba速度很慢，在10mb/s到60mb/s之间波动。")]),e._v(" "),r("h3",{attrs:{id:"我为什么用windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我为什么用windows"}},[e._v("#")]),e._v(" 我为什么用windows")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("安卓模拟器有公司优化；linux下跑安卓没有公司优化适配国内手游，硬件开销大，挂机稳定性较差。")])]),e._v(" "),r("li",[r("p",[e._v("比特彗星多线程支持好，性能好很多；长效种子，ed2k插件死马当活马医。linux下除了transmission就是libtorrent，在国内更适合pt。")])])]),e._v(" "),r("blockquote",[r("p",[e._v("docker部署qbittorrent-EE，增加了对吸血迅雷的屏蔽，也可以考虑用于BT。")])]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("smb分享相对linux下的开源实现samba，cpu占用率低得多，速度也快，多线程优化好。相对linux下nfs分享，有更高的4k性能。")])]),e._v(" "),r("blockquote",[r("p",[e._v("如果客户端是性能羸弱的安卓或linux设备，nfs分享能跑出更高的连续读写速度。")])]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("随便插张显卡搭配madvr直接做播放器。")])]),e._v(" "),r("h2",{attrs:{id:"文件系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文件系统"}},[e._v("#")]),e._v(" 文件系统")]),e._v(" "),r("p",[e._v("机械硬盘raid并不适合家用，社群有大量讨论。")]),e._v(" "),r("ul",[r("li",[e._v("bt下载数据我用snap raid。")]),e._v(" "),r("li",[e._v("其他文件我用hyper-v运行truenas搭配zfs镜像定期擦洗。")])]),e._v(" "),r("h3",{attrs:{id:"refs完整性流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#refs完整性流"}},[e._v("#")]),e._v(" ReFS完整性流")]),e._v(" "),r("blockquote",[r("p",[e._v("ReFS还处于开发中，稳定性没有得到充分验证，"),r("a",{attrs:{href:"https://chnhi.github.io/lxzdy/ccc/%E6%97%A0%E7%BA%BF%E8%B7%AF%E7%94%B1%E5%99%A8/%E9%BB%91%E7%BE%A4%E6%99%96zfs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("可以考虑Hyper-V运行TrueNAS+ZFS文件系统。"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("ReFS可选功能，"),r("a",{attrs:{href:"https://learn.microsoft.com/zh-cn/windows-server/storage/refs/integrity-streams",target:"_blank",rel:"noopener noreferrer"}},[e._v("完整性流，开启"),r("OutboundLink")],1),e._v("后可以运行完整性清理器（linux叫擦洗scrub），校验文件好坏，避免固态硬盘的"),r("a",{attrs:{href:"https://chnhi.github.io/lxzdy/ccc/%E6%97%A0%E7%BA%BF%E8%B7%AF%E7%94%B1%E5%99%A8/%E9%BB%91%E7%BE%A4%E6%99%96zfs.html#%E6%96%87%E4%BB%B6%E9%9D%99%E9%BB%98%E6%8D%9F%E5%9D%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("数据静默损坏"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("p",[e._v("NTFS定期用7zip对整个磁盘计算CRC32也一样能实现固态硬盘的冷数据纠错预热，但毕竟没有校验。")]),e._v(" "),r("blockquote",[r("p",[e._v("群晖使用LVM软RAID+魔改单盘BTRFS，群晖认为这样的方案足以商用。")]),e._v(" "),r("p",[e._v("那么windows存储空间-镜像+ReFS开启可选功能，完整性流可能也足够安全？")])]),e._v(" "),r("blockquote",[r("p",[e._v("微软对完整性流的介绍中提到：ReFS 和存储空间可以共同自动地更正损坏的元数据和数据。")]),e._v(" "),r("p",[e._v("只有存储空间-镜像是可以搭配ReFS完整性校验并修复，镜像卷等不行。")])]),e._v(" "),r("p",[e._v("由于还在开发中，不同版本的windows使用的ReFS版本不同，被新版本系统升级过的ReFS，老版本是不能识别的。")]),e._v(" "),r("p",[e._v("存储空间一旦出现故障想要恢复非常麻烦，且需要手动回收空间。"),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22604396",target:"_blank",rel:"noopener noreferrer"}},[e._v("Joe Chen：Win10和Win Server 2016存储池存储空间相关"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"snap-raid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#snap-raid"}},[e._v("#")]),e._v(" snap raid")]),e._v(" "),r("p",[e._v("类似于有校验的快照，就是修改文件不方便。")]),e._v(" "),r("ol",[r("li",[e._v("硬盘容量可以不同，只要保证校验盘容量最大")]),e._v(" "),r("li",[e._v("随时加盘")]),e._v(" "),r("li",[e._v("就算坏了太多盘也不影响好盘的数据")]),e._v(" "),r("li",[e._v("成本低，不要阵列卡或者ecc")]),e._v(" "),r("li",[e._v("读写速度是单盘的速度，不需要读写整个阵列的硬盘")])]),e._v(" "),r("p",[e._v("缺点是每次修改了文件都必须要运行一下程序，以防万一可以把磁盘设置成只读。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("diskpart\nlist vol //列出磁盘\nselect vol 0 //选中要操作的盘\natt vol set readonly  //设置只读\n\natt vol clear readonly //清除只读\n")])])]),r("h2",{attrs:{id:"hyper-v"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hyper-v"}},[e._v("#")]),e._v(" hyper-v")]),e._v(" "),r("p",[e._v("优势是支持动态内存，主机关机的时候可以向虚拟机发送关机命令，而不是建立快照或强制关闭。")]),e._v(" "),r("p",[e._v("虚拟机出错偶尔只能强制重启主机。")]),e._v(" "),r("p",[e._v("主机一旦启用hyper-v，主机的网络流量也要走虚拟交换机，对延迟敏感的应用影响较大。")]),e._v(" "),r("h4",{attrs:{id:"hyper-v调度器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hyper-v调度器"}},[e._v("#")]),e._v(" hyper-v调度器")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://learn.microsoft.com/zh-cn/windows-server/virtualization/hyper-v/manage/manage-hyper-v-scheduler-types",target:"_blank",rel:"noopener noreferrer"}},[e._v("微软：管理调度器"),r("OutboundLink")],1),e._v(" ；"),r("a",{attrs:{href:"https://learn.microsoft.com/zh-cn/windows-server/virtualization/hyper-v/manage/about-hyper-v-scheduler-type-selection?source=recommendations",target:"_blank",rel:"noopener noreferrer"}},[e._v("微软：调度器类型介绍"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("win10 1803之后的win10或11默认使用root调度器，虚拟机是主机下一个进程，任务管理器能看到，可以设置cpu相关性，开启超线程的情况下vcpu尽量设置至少4个，有可能调度到任意核心，运气不好2个vcpu调度到同一个物理核心，不过一般应该不会。总vcpu设置2倍逻辑核心数也没事。")]),e._v(" "),r("p",[e._v("server2016版本默认是classic，2019开始就是core。")]),e._v(" "),r("p",[e._v("classic下总vcpu设置2倍逻辑核心数也没事，core调度器分配给某个虚拟机的核心就不会再运行其他虚拟机的任务，开启超线程的情况下会通知虚拟机开启超线程，如果虚拟机系统禁用超线程，那么超线程出来的那个逻辑核心就会被闲置。")]),e._v(" "),r("p",[e._v("无论是clssic还是core，只能通过hyper-v管理器来管理cpu。")]),e._v(" "),r("h4",{attrs:{id:"半虚拟化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#半虚拟化"}},[e._v("#")]),e._v(" "),r("strong",[e._v("半虚拟化")])]),e._v(" "),r("p",[e._v('hyper-v运行linux虚拟机不用任何设置，一般默认就已经是"半虚拟化"。微软开发的Linux Integration Services，在linux上一般默认开启。但是性能比vmware的半虚拟化接口要差一点。')]),e._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2024/02/15/P8xKwejC6OI7bmA.png",alt:"屏幕截图 2024-02-08 013911.png"}})]),e._v(" "),r("p",[e._v("据我测试windows下两块RTL8125b互连，iperf3发送64iB小包，小包转发性能为9.85kpps，如果用hyper-v半虚拟化接口，恐怕小包转发性能最多也就9kpps左右了。")]),e._v(" "),r("h3",{attrs:{id:"hyper-v磁盘直通"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hyper-v磁盘直通"}},[e._v("#")]),e._v(" hyper-v磁盘直通：")]),e._v(" "),r("ul",[r("li",[e._v("RDM磁盘直通（Raw Device Mapping），整个物理磁盘可以由虚拟机格式化，但是磁盘控制器还是由host主机管理，既smart信息在host主机下读取。读写还是用的半虚拟化接口。")]),e._v(" "),r("li",[e._v("sata控制器或nvme控制器作为pci设备直通到虚拟机下，smart信息在虚拟机内读取。")])]),e._v(" "),r("p",[e._v("windows主机下监控smart信息可以用hdd sentinel软件。windows主机virtualbox一般只能用半虚拟化接口virtio，好像没有pci直通。")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("hyper-v提供pci直通，"),r("a",{attrs:{href:"https://github.com/chanket/DDA",target:"_blank",rel:"noopener noreferrer"}},[e._v("gui小工具"),r("OutboundLink")],1),e._v("。")])]),e._v(" "),r("li",[r("p",[e._v("**windows下想要RDM磁盘直通，**需要先在windows主机上的“磁盘管理”（win+q搜索磁盘管理）右键准备直通的磁盘，脱机，之后在vmware或hyper-v的虚拟磁盘设置中就可以直接选择该磁盘。")])])]),e._v(" "),r("h4",{attrs:{id:"virtualbox需要命令行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox需要命令行"}},[e._v("#")]),e._v(" virtualbox需要命令行：")]),e._v(" "),r("p",[e._v("查看要直通的硬盘的DeviceID：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('wmic diskdrive list brief\n或：\n"C:\\Program Files\\Oracle\\VirtualBox\\VBoxManage.exe" list hostdrives\n')])])]),r("p",[e._v("在windows主机上的“磁盘管理”（win+q搜索磁盘管理）右键准备直通的磁盘，脱机。")]),e._v(" "),r("p",[e._v("win+q搜索cmd，右键，管理员身份运行。根据上文查到的ID修改后文的-rawdisk")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('"C:\\Program Files\\Oracle\\VirtualBox\\VBoxManage.exe" internalcommands createrawvmdk -filename "D:\\是中国人就买长江存储.vmdk" -rawdisk \\.\\PhysicalDrive0\n')])])]),r("p",[e._v("只需要在virtualbox磁盘配置中虚拟磁盘选择生成的vmdk文件就是直通该磁盘，控制器接口可以改成virtio，网络接口也可以改成virtio。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('--partitions 1,2 参数可以指定特定分区。\n查看某个磁盘的分区号：\n"C:\\Program Files\\Oracle\\VirtualBox\\VBoxManage.exe" internalcommands  listpartitions -rawdisk \\\\.\\PhysicalDrive0\n')])])]),r("h3",{attrs:{id:"hyper-v安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hyper-v安装"}},[e._v("#")]),e._v(" hyper-v安装")]),e._v(" "),r("p",[e._v("启用hyper-v，win+q搜索“启用或关闭Windows功能”，启用Hyper-V即可。")]),e._v(" "),r("p",[e._v("默认就会生成虚拟交换机，默认是NAT，桥接需要在虚拟交换机管理器中新建一个“外部”交换机，虚拟机可以被路由器分配一个IP。")]),e._v(" "),r("blockquote",[r("p",[e._v("主机网络流量也都是从虚拟交换机走，停用虚拟交换机会导致主机断网，要从Hyper-v管理器删除。")])]),e._v(" "),r("p",[e._v("虚拟机设置中默认会启用安全启动，我一般关闭。")]),e._v(" "),r("p",[e._v("虚拟机设置中-网络适配器，按加号列出的高级功能下默认是动态MAC，我一般启动一次虚拟机后改成静态mac。")]),e._v(" "),r("p",[e._v("自动停止操作我倾向于改为关闭来宾操作系统，既主机关机时会向虚拟机也发送关机信号。")]),e._v(" "),r("h4",{attrs:{id:"truenas"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#truenas"}},[e._v("#")]),e._v(" "),r("strong",[e._v("truenas")])]),e._v(" "),r("p",[e._v("hyper-v网卡设置桥接，关闭安全启动，网卡设置为静态mac，禁用检查点，自动停止操作改为关闭来宾操作系统。")]),e._v(" "),r("p",[e._v("scsi控制器中添加DVD驱动器，挂载truenas的安装iso文件。再添加两个硬盘驱动器，新建两个32g虚拟磁盘即可启动安装。最小16g。建两个虚拟磁盘，truenas安装时会自动建立zfs镜像池。")]),e._v(" "),r("h2",{attrs:{id:"windows-nas设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-nas设置"}},[e._v("#")]),e._v(" windows nas设置")]),e._v(" "),r("p",[r("strong",[e._v("文件分享：")])]),e._v(" "),r("ul",[r("li",[e._v("登录的账户有密码，其他设备查看文件的时候直接登录该账户。")]),e._v(" "),r("li",[e._v("设置-以太网，设置为专有网络。")]),e._v(" "),r("li",[e._v("右键要分享的文件，共享-共享，一路下一步")])]),e._v(" "),r("p",[r("strong",[e._v("远程连接")])]),e._v(" "),r("p",[e._v("在设置中搜索远程桌面，开启。其他电脑运行mstsc即可启动远程桌面软件连接，单击显示选项后即可保存连接快捷方式。")]),e._v(" "),r("p",[r("strong",[e._v("本地不登录直接启动")])]),e._v(" "),r("p",[e._v("运行netplwiz，取消勾选“要使用本计算机，用户必须输入用户名和密码(E)”确认后输入账户密码即可。")]),e._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("微软屎吃撑，新版本这个选项神秘消失，运行regedit后找到\nHKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\PasswordLess\\Device\n双击DevicePasswordLessBuildVersion改成0。\n")])])]),r("h3",{attrs:{id:"samba校验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#samba校验"}},[e._v("#")]),e._v(" "),r("strong",[e._v("samba校验")])]),e._v(" "),r("p",[e._v("samba开启加密可以避免网络波动引起文件损坏，手机应用往往支持的SMB版本较老，有可能打不开。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//docs.microsoft.com/en-us/windows-server/storage/file-server/smb-security",target:"_blank",rel:"noopener noreferrer"}},[e._v("微软官方文档"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("管理员模式运行powershell：\n在整个文件共享服务器当中开启加密\nSet-SmbServerConfiguration –EncryptData $true\n\n对特定共享开启加密:\nSet-SmbShare –Name &lt;sharename> -EncryptData $true\n")])])]),r("h4",{attrs:{id:"文件操作后校验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文件操作后校验"}},[e._v("#")]),e._v(" 文件操作后校验")]),e._v(" "),r("p",[e._v("文件操作尽可能使用fastcopy并开启每次文件操作后校验，或用teracopy软件，速度慢一点但与资源管理器的ui结合更好。")]),e._v(" "),r("h4",{attrs:{id:"samba文件分享聚合"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#samba文件分享聚合"}},[e._v("#")]),e._v(" samba文件分享聚合")]),e._v(" "),r("p",[e._v("多盘场景下，群晖等可以聚合多个目录在同一个smb子目录下，Windows：")]),e._v(" "),r("ul",[r("li",[e._v("商业软件StableBit Drivepool实现类似JBOD")]),e._v(" "),r("li",[e._v("windows挂载磁盘到文件夹而不是分配盘符")]),e._v(" "),r("li",[e._v("创建链接，只要分享d:\\share文件夹")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('mklink /j  "d:\\share\\e" "e:"\n')])])]),r("h2",{attrs:{id:"硬链搭配刮削"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#硬链搭配刮削"}},[e._v("#")]),e._v(" 硬链搭配刮削")]),e._v(" "),r("p",[e._v("下载到的资源偶尔会自带nfo，为了防止被刮削器修改后导致做种出现问题，用如下脚本把E:\\t下的文件夹和常见视频文件或字幕文件硬链到E:\\t2文件夹下。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('@echo off\nset workingDir=E:\\t\nset link=E:\\t2\nmkdir "%link%"\nXCOPY /T "%workingDir%" "%link%"\nsetlocal enabledelayedexpansion\nfor /r "%workingDir%" %%i in (*.mkv,*.mp4,*.m2ts,*.clpi,*.mpls,*.rmvb,*.srt,*.ass,*.iso) do ( \nset "dirnoname=%%~dpi"\necho next\necho !dirnoname!%%~nxi\nmklink /h "%link%!dirnoname:%workingDir%=!%%~nxi" "%%i" \n)\n')])])]),r("p",[e._v("mklink /j或/d指向文件的位置。而/h硬链是同一个文件出现在不同位置。软链不能用于刮削，硬链可以用于刮削。硬链缺点是只能链在同一个硬盘。")]),e._v(" "),r("h2",{attrs:{id:"primo-cache缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#primo-cache缓存"}},[e._v("#")]),e._v(" primo cache缓存")]),e._v(" "),r("p",[e._v("威联通建议缓存至少达到10%，最好有20%。既10t硬盘至少1t缓存，最好2t，不然命中率会很低。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//bbs.itzmx.com/thread-100953-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("primo cache4.1"),r("OutboundLink")],1),e._v("，只缓读不缓写，不开一级缓存（内存），bt软件本身就有缓存，做种24小时后，空闲内存基本都被windows用作缓存。")]),e._v(" "),r("p",[e._v("pt可能同时下载的人少，缓存命中率非常低，基本一直在10%以内。")]),e._v(" "),r("p",[e._v("bt做种2t，500g缓存。命中率在60%~90%之间波动，测试2天，上传量60多个g，用光缓存盘500g。用光后平均每天更新100g的缓存，但是每天上传量也就25g左右。")]),e._v(" "),r("h2",{attrs:{id:"防止自动更新后自动重启"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#防止自动更新后自动重启"}},[e._v("#")]),e._v(" "),r("strong",[e._v("防止自动更新后自动重启")])]),e._v(" "),r("p",[e._v("事件查看器中，重启原因代码：0x80020010。")]),e._v(" "),r("p",[e._v("微硬真的是无法无天，组策略也是摆设，设置了也白设置，除非"),r("a",{attrs:{href:"https://bbs.pcbeta.com/viewthread-1913968-1-2.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("停用windows更新服务。"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("如果不想停用windows更新，可以把自动重启的二进制文件删掉：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("C:\\Windows\\System32\\Tasks\\Microsoft\\Windows\\UpdateOrchestrator\nReboot_AC\nReboot_Battery\n备份两个文件，新建两个同名文件夹，设置成只读。\n")])])]),r("h2",{attrs:{id:"windows无显卡启动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows无显卡启动"}},[e._v("#")]),e._v(" windows无显卡启动")]),e._v(" "),r("ul",[r("li",[e._v("装AMYUNI发布的usb虚拟显示器驱动。")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.amyuni.com/forum/viewtopic.php?t=3030",target:"_blank",rel:"noopener noreferrer"}},[e._v("发布链接"),r("OutboundLink")],1),e._v("，"),r("a",{attrs:{href:"https://www.amyuni.com/downloads/usbmmidd_v2.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载链接"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("p",[e._v("解压后管理员运行usbmmidd.bat。")]),e._v(" "),r("p",[e._v("想要添加更多虚拟显示器，管理员运行cmd：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("deviceinstaller64 enableidd 1\n")])])]),r("ul",[r("li",[e._v("利用parsec的虚拟显示器驱动的"),r("a",{attrs:{href:"https://github.com/nomi-san/parsec-vdd",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("parsec-vdd")]),r("OutboundLink")],1),e._v(" 。")])]),e._v(" "),r("h2",{attrs:{id:"搭配ups停电关机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#搭配ups停电关机"}},[e._v("#")]),e._v(" 搭配ups停电关机")]),e._v(" "),r("ul",[r("li",[e._v("APC ups有一个小工具apcupsd")]),e._v(" "),r("li",[e._v("APC bk650等型号可以用apcPCPE软件")]),e._v(" "),r("li",[e._v("UPS停电自动关机助手，ping路由器，不通就关机")]),e._v(" "),r("li",[e._v("脚本")])]),e._v(" "),r("ol",[r("li",[e._v("APC bk650，山特TG-BOX，长的像超大号排插，apc这款有替换电池卖，两款都能控制nas。价格在500左右，续航可能就几十分钟。铅酸电池。")]),e._v(" "),r("li",[e._v("雷迪司H1000M是最便宜能控制nas的ups。铅酸电池。")]),e._v(" "),r("li",[e._v("绿巨能1000VA/600W，雷迪司D650/360W，这两款都是入门级产品，200以内就能买到，雷迪司这款用的锂电池，绿巨能用的铅酸电池。没有控制功能。")]),e._v(" "),r("li",[e._v("山克 3000VA 1800W，后备式续航最猛的一款，停电了也要nas接着运行就选这款。")]),e._v(" "),r("li",[e._v("有些产品用的12v电瓶，铅酸用个两年基本就要换了，可以买12v锂电瓶换上去，锂电瓶寿命长一些。正因为换电瓶就行，二手的便宜好货自己换电池也就几十块。")]),e._v(" "),r("li",[e._v("标称容量虽然很大，但是本身转换效率80%，电源转换效率可能也在80%再加上铅酸电池衰减很快，对他们的续航能力不要抱有太大的期望。注意铅酸电池长时间亏电会腐蚀铅板，导致报废。")]),e._v(" "),r("li",[e._v("后备式的ups通常在断电后有10ms的切换时间，输出通常是方波，而不是正弦波，方波不适合带电机，对于电脑通常没什么影响。除非电源主电容相对负载太小否则断电的10ms对于家用没什么影响，没有必要买在线式。")]),e._v(" "),r("li",[e._v("如果非要买在线式，注意在线式的噪音一般都会更大些，而且因为都是针对政企市场，一般对nas支持度不高。山克 SC1K最便宜大牌，华为UPS2000-A-1KTTS便宜大腕，apc山特这种大牌就不说了。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);