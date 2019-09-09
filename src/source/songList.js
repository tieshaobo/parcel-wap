

//import Song1 from './audio/李谷一 - 我和我的祖国.flac'
import Img1 from './songimg/1.jpg'
//2
//import Song2 from './audio/韦唯-爱我中华.mp3'
import Img2 from './songimg/2.png'
//3
//import Song3 from './audio/儿歌 - 让我们荡起双桨.flac'
import Img3 from './songimg/3.jpg'
//4
//import Song4 from './audio/陈柯宇 - 生僻字.flac'
import Img4 from './songimg/4.jpg'
//5
import Song5 from './audio/逃跑计划-夜空中最亮的星.mp3'
import Img5 from './songimg/5.jpg'
//6
import Song from './audio/李谷一 - 我和我的祖国.flac'
import Img from './songimg/1.jpg'
let songUrlList = [
    'http://pw99vrb4g.bkt.clouddn.com/%E6%9D%8E%E8%B0%B7%E4%B8%80%20-%20%E6%88%91%E5%92%8C%E6%88%91%E7%9A%84%E7%A5%96%E5%9B%BD.flac',
    'http://pw99vrb4g.bkt.clouddn.com/%E9%9F%A6%E5%94%AF-%E7%88%B1%E6%88%91%E4%B8%AD%E5%8D%8E.mp3',
    'http://pw99vrb4g.bkt.clouddn.com/%E5%84%BF%E6%AD%8C%20-%20%E8%AE%A9%E6%88%91%E4%BB%AC%E8%8D%A1%E8%B5%B7%E5%8F%8C%E6%A1%A8.flac',
    'http://pw99vrb4g.bkt.clouddn.com/%E9%99%88%E6%9F%AF%E5%AE%87%20-%20%E7%94%9F%E5%83%BB%E5%AD%97.flac',
    'http://pw99vrb4g.bkt.clouddn.com/%E9%80%83%E8%B7%91%E8%AE%A1%E5%88%92-%E5%A4%9C%E7%A9%BA%E4%B8%AD%E6%9C%80%E4%BA%AE%E7%9A%84%E6%98%9F.mp3',
]

let songNameList = [
    '我和我的祖国',
    '爱我中华',
    '让我们荡起双桨',
    '生僻字',
    '夜空中最亮的星',
    "龙的传人",
    "小小少年",
    "我都是追梦人",
    "我的未来不是梦",
    "大中国",
    "青春修炼手册",
    "追梦赤子心",
    "我相信",
    "少年中国说",
    "少年中国",
    "明天，你好",
    "东方之珠",
    "七子之歌",
    "飞云之下",
    "我爱你中国",
    "听妈妈的话",
    "同一首歌",
    "最美的太阳",
    "今天是你的生日",
    "男儿当自强",
    "我的中国心",
    "骄傲的少年",
    "隐形的翅膀",
    "红星歌",
    "歌声与微笑",
]
let singerList = [
    "李谷一",
    "韦唯",
    "刘慧芳",
    "陈柯宇",
    "逃跑计划",
    "王力宏",
    "海因切",
    "秦岚、江疏影、景甜、王俊凯、王源、易烊千玺、吴磊",
    "张雨生",
    "高枫",
    "TFBOYS",
    "GALA乐队",
    "杨培安",
    "张杰",
    "李宇春",
    "王源、王俊凯",
    "甄妮",
    "容韵琳",
    "韩红&林俊杰",
    "叶佩英",
    "周杰伦",
    "刘畅",
    "张杰",
    "董文华",
    "林子祥",
    "张明敏",
    "南征北战",
    "张韶涵",
    "傅庚辰",
    "上海小荧星儿童合唱团"
]

export default  [
    {
        day:98,
        num:"1期",
        name: '我和我的祖国',
        artist: "李谷一",
        url:'http://pw99vrb4g.bkt.clouddn.com/%E6%9D%8E%E8%B0%B7%E4%B8%80%20-%20%E6%88%91%E5%92%8C%E6%88%91%E7%9A%84%E7%A5%96%E5%9B%BD.flac',
        cover:Img1,
        geci:`
        作词：张藜 作曲：秦咏诚 原唱：李谷一
        我和我的祖国  一刻也不能分割  
        无论我走到哪里  都流出一首赞歌
        我歌唱每一座高山  我歌唱每一条河  
        袅袅炊烟小小村落  路上一道辙 
        我最亲爱的祖国  我永远紧依着你的心窝
        你用你那母亲的脉搏和我诉说  
        我的祖国和我  像海和浪花一朵  
        浪是那海的赤子  海是那浪的依托  
        每当大海在微笑  我就是笑的漩涡  
        我分担着海的忧愁 分享海的欢乐  
        我最亲爱的祖国  你是大海永不干涸  
        永远给我碧浪清波  心中的歌  
        我最亲爱的祖国  你是大海永不干涸  
        永远给我碧浪清波 心中的歌
        我和我的祖国 一刻也不能分割
        无论我走到哪里 都流出一首赞歌
        `
    },
    {
        day:99,
        num:"2期",
        name: '爱我中华',
        artist: '韦唯',
        url:'http://pw99vrb4g.bkt.clouddn.com/%E9%9F%A6%E5%94%AF-%E7%88%B1%E6%88%91%E4%B8%AD%E5%8D%8E.mp3',
        cover:Img2,
        geci:`
        作词：乔羽张藜 作曲：徐沛东 原唱：韦唯
        爱我中华，爱我中华
        爱我中华，赛罗赛罗赛罗赛罗赛罗赛罗
        嘿，五十六个星座五十六支花
        五十六族兄弟姐妹是一家，五十六种语言汇成一句话
        爱我中华爱我中华爱我中华，嘿罗嘿罗嘿罗嘿罗嘿罗嘿罗
        爱我中华，五十六个星座五十六支花
        五十六族兄弟姐妹是一家，五十六种语言汇成一句话
        爱我中华爱我中华爱我中华，爱我中华
        健儿奋起步伐，爱我中华
        建设我们的国家，爱我中华
        中华英姿焕发，爱我中华
        五十六族兄弟姐妹，五十六种语言汇成一句话
        爱我中华，赛罗赛罗赛罗赛罗赛罗赛罗
        （五十六个星座五十六支花，五十六族兄弟姐妹是一家
        五十六种语言汇成一句话，爱我中华爱我中华）
        爱我中华，嘿罗嘿罗嘿罗嘿罗嘿罗嘿罗
        爱我中华，爱我中华
        健儿奋起步伐，爱我中华
        建设我们的国家，爱我中华
        中华雄姿英发，爱我中华
        五十六族兄弟姐妹，五十六种语言汇成一句话
        爱我中华，五十六个星座五十六支花
        五十六族兄弟姐妹是一家，五十六种语言汇成一句话
        爱我中华爱我中华爱我中华，嘿罗嘿罗嘿罗嘿罗嘿罗嘿罗
        爱我中华，五十六个星座五十六支花
        五十六族兄弟姐妹是一家，五十六种语言汇成一句话
        爱我中华爱我中华爱我中华，爱我中华
        健儿奋起步伐，爱我中华
        建设我们的国家，爱我中华
        中华雄姿英发，爱我中华
        五十六族兄弟姐妹，五十六种语言汇成一句话
        爱我中华，嘿
        `
    },
    {
        day:910,
        num:"3期",
        name:'让我们荡起双桨',
        artist: "刘慧芳",
        url:'http://pw99vrb4g.bkt.clouddn.com/%E5%84%BF%E6%AD%8C%20-%20%E8%AE%A9%E6%88%91%E4%BB%AC%E8%8D%A1%E8%B5%B7%E5%8F%8C%E6%A1%A8.flac',
        cover:Img3,
        geci:`作词：乔羽 作曲：刘炽 原唱：刘慧芳
        让我们荡起双桨   小船儿推开波浪   海面倒映着美丽的白塔
        四周环绕着绿树红墙    小船儿轻轻飘荡在水中
        迎面吹来了凉爽的风    红领巾迎着太阳   阳光洒在海面上
        水中鱼儿望着我们    悄悄地听我们愉快歌唱
        小船儿轻轻飘荡在水中   迎面吹来了凉爽的风
        做完了一天的功课    我们来尽情欢乐   我问你亲爱的伙伴
        谁给我们安排下幸福的生活   小船儿轻轻飘荡在水中
        迎面吹来了凉爽的风
        `
    },
    {
        day:911,
        num:"4期",
        name: '生僻字',
        artist: "陈柯宇",
        url:'http://pw99vrb4g.bkt.clouddn.com/%E9%99%88%E6%9F%AF%E5%AE%87%20-%20%E7%94%9F%E5%83%BB%E5%AD%97.flac',
        cover:Img4,
        geci:`作词：陈柯宇 作曲：陈柯宇 原唱：陈柯宇
        在武侠的世界里
        一壶酒一赞美
        一对视心相惜
        在武侠的世界里
        活出意义别让心失去本意
        在茫茫武侠世界中
        总有贵人提携相拥
        生性纯良却资质平庸
        传授一身绝世武功
        最长的路
        竟是套路
        飞檐走壁迷路
        茕茕孑立
        沆瀣一气
        龙行龘龘龙行龘龘
        龙龙
        犄角旮旯
        在武侠的世界里
        一壶酒一赞美
        一对视心相惜
        便成为好兄弟
        在武侠的世界里
        情谊怎容许被怀疑
        在武侠的世界里
        当讲不讲的话
        以为是心有灵犀却不堪一击
        在武侠的世界里
        顶天立地实属不易
        最长的路
        竟是套路
        飞檐走壁迷路
        茕茕孑立
        沆瀣一气
        龙行龘龘龙行龘龘
        龙龙
        犄角旮旯
        在武侠的世界里
        一壶酒一赞美
        一对视心相惜
        便成为好兄弟
        在武侠的世界里
        情谊怎容许被怀疑
        在武侠的世界里
        当讲不讲的话
        以为是心有灵犀却不堪一击
        在武侠的世界里
        顶天立地实属不易
        在武侠的世界里
        当讲不讲的话
        以为是心有灵犀却不堪一击
        在武侠的世界里
        顶天立地实属不易
        行走江湖牢记邪不压正
        笑看人生是梗处处皆是梗
        `
    },
    {
        day:912,
        num:"5期",
        name: '夜空中最亮的星',
        artist: "逃跑计划",
        url:'http://pw99vrb4g.bkt.clouddn.com/%E9%80%83%E8%B7%91%E8%AE%A1%E5%88%92-%E5%A4%9C%E7%A9%BA%E4%B8%AD%E6%9C%80%E4%BA%AE%E7%9A%84%E6%98%9F.mp3',
        cover:Img5,
        geci:`作词：逃跑计划 作曲：逃跑计划 原唱：逃跑计划
        夜空中最亮的星 能否听清
        那仰望的人
        心底的孤独和叹息
        oh夜空中最亮的星
        能否记起
        曾与我同行
        消失在风里的身影
        我祈祷拥有一颗透明的心灵
        和会流泪的眼睛
        给我再去相信的勇气
        oh越过谎言去拥抱你
        每当我找不到存在的意义
        每当我迷失在黑夜里
        oh~夜空中最亮的星
        请指引我靠近你
        夜空中最亮的星
        是否知道
        曾与我同行的身影
        如今在哪里
        oh夜空中最亮的星
        是否在意
        是等太阳升起
        还是意外先来临
        我宁愿所有痛苦都留在心里
        也不愿忘记你的眼睛
        给我再去相信的勇气
        oh越过谎言去拥抱你
        每当我找不到存在的意义
        每当我迷失在黑夜里
        oh~夜空中最亮的星
        oh请照亮我前行
        我祈祷拥有一颗透明的心灵
        和会流泪的眼睛
        给我再去相信的勇气
        oh越过谎言去拥抱你
        每当我找不到存在的意义
        每当我迷失在黑夜里
        oh~夜空中最亮的星
        请照亮我前行
        夜空中最亮的星
        能否听清
        那仰望的人
        心底的孤独和叹息
        `
    },
    {
        day:913,
        num:"6期",
        name: '龙的传人',
        artist: "王力宏",
        url:Song5,
        cover:Img5,
        geci:`作词：王力宏 作曲：王力宏 原唱：王力宏
        遥远的东方有一条江
        它的名字就叫长江
        遥远的东方有一条河
        它的名字就叫黄河
        古老的东方有一条龙
        它的名字就叫中国
        古老的东方有一群人
        他们全都是龙的传人
        巨龙脚底下我成长
        长成以后是龙的传人
        黑眼睛黑头发黄皮肤
        永永远远是龙的传人
        遥远的东方有一条江
        它的名字就叫长江
        遥远的东方有一条河
        它的名字就叫黄河
        它的名字就叫黄河
        虽不曾看见长江美
        梦里常神游长江水
        虽不曾听见黄河壮
        澎湃汹涌在梦里
        古老的东方有一条龙
        它的名字就叫中国
        古老的东方有一群人
        他们全都是龙的传人
        他们全都是龙的传人
        他们全都是
        Now here's a story that'll makes you cry
        Straight from Taiwan they came just a girl and a homeboy in love
        No money no speak no English
        Nobody gonna give'em the time of day in a city so cold
        They made a wishand then they had the strength to graduate with honor
        And borrowed 50 just to communicate a marriage
        Under GOD who never left their side game their children pride
        Raise ur voices high love will never die never die
        多年前宁静的一个夜
        我们全家人到了纽约
        野火呀烧不尽在心间
        每夜每天对家的思念
        每夜每天对家的思念
        别人土地上我成长
        长成以后是龙的传人
        巨龙巨龙你擦亮眼
        永永远远的擦亮眼
        巨龙巨龙你擦亮眼
        永永远远的擦亮眼
        巨龙巨龙你擦亮眼
        永永远远的擦亮眼
        巨龙巨龙你擦亮眼
        永永远远的擦亮眼
        巨龙巨龙你擦亮眼
        永永远远的擦亮眼
        巨龙巨龙你擦亮眼
        永永远远的擦亮眼
        巨龙巨龙你擦亮眼
        永永远远的擦亮眼
        `
    },
    {
        day:914,
        num:"7期",
        name: '小小少年',
        artist: '海因切',
        url:Song5,
        cover:Img5,
        geci:`作词：肖章译 作曲：肖白 原唱：海因切
        小小少年很少烦恼
        眼望四周阳光照
        小小少年很少烦恼
        但愿永远这样好
        一年一年时间飞跑
        小小少年在长高
        随着年岁由小变大
        他的烦恼增加了
        小小少年很少烦恼
        无忧无虑乐陶陶
        但有一天,风波突起
        忧虑烦恼都到了
        一年一年时间飞跑
        小小少年在长高
        随着年岁由小变大
        他的烦恼增加了
        小小少年很少烦恼
        眼望四周阳光照
        小小少年很少烦恼
        但愿永远这样好
        一年一年时间飞跑
        小小少年在长高
        随着年岁由小变大
        他的烦恼增加了
        小小少年很少烦恼
        无忧无虑乐陶陶
        但有一天风波突起
        忧虑烦恼都到了
        一年一年时间飞跑
        小小少年在长高
        随着年岁由小变大
        他的烦恼增加了
        啦...啦...
        `
    },
    {
        day:915,
        num:"8期",
        name: '我都是追梦人',
        artist: "秦岚、江疏影、景甜、王俊凯、王源、易烊千玺、吴磊",
        url:Song5,
        cover:Img5,
        geci:`作词：张益魁 作曲：谭小艳 原唱：谭小艳
        每个身影 同阳光奔跑
        我们挥洒汗水 回眸微笑
        一起努力 争做春天的骄傲
        懂得了梦想
        越追越有味道
        我们都是追梦人
        千山万水 奔向天地跑道
        你追我赶 风起云涌春潮
        海阔天空 敞开温暖怀抱
        我们都是追梦人
        在今天 勇敢向未来报到
        当明天 幸福向我们问好
        最美的风景是拥抱
        啦……啦……啦……
        每次奋斗 拼来了荣耀
        我们乘风破浪 举目高眺
        心中力量 不怕万万里路遥
        再高远的梦呀也追得到
        我们都是追梦人
        千山万水 奔向天地跑道
        你追我赶 风起云涌春潮
        海阔天空 敞开温暖怀抱
        我们都是追梦人
        在今天 勇敢向未来报到
        当明天 幸福向我们问好
        最美的风景是拥抱
        啦……啦……啦……
        我们都是追梦人
        千山万水 奔向天地跑道
        你追我赶 风起云涌春潮
        海阔天空 敞开温暖怀抱
        我们都是追梦人
        在今天 勇敢向未来报到
        当明天 幸福向我们问好
        最美的风景是拥抱
        啦……啦……啦……
        `
    },
    {
        day:916,
        num:"9期",
        name: '我的未来不是梦',
        artist: "张雨生",
        url:Song5,
        cover:Img5,
        geci:`作词：瓮孝良 作曲：陈家丽 原唱：张雨生
        你是不是像我在太阳下低头
        流着汗水默默辛苦地工作
        你是不是像我就算受了冷漠
        也不放弃自己想要的生活
        你是不是像我整天忙着追求
        追求一种意想不到的温柔
        你是不是像我曾经茫然失措
        一次一次徘徊在十字街头
        因为我不在乎别人怎么说
        我从来没有忘记我
        对自己的承诺对爱的执著
        我知道我的未来不是梦
        我认真地过每一分钟
        我的未来不是梦
        我的心跟着希望在动
        我的未来不是梦
        我认真地过每一分钟
        我的未来不是梦
        我的心跟着希望在动
        跟着希望在动
        你是不是像我整天忙着追求
        追求一种意想不到的温柔
        你是不是像我曾经茫然失措
        一次一次徘徊在十字街头
        因为我不在乎别人怎么说
        我从来没有忘记我
        对自己的承诺对爱的执著
        我知道我的未来不是梦
        我认真地过每一分钟
        我的未来不是梦
        我的心跟着希望在动
        我的未来不是梦
        我认真地过每一分钟
        我的未来不是梦
        我的心跟着希望在动
        跟着希望在动
        `
    },
    {
        day:917,
        num:"10期",
        name: '大中国',
        artist: "高枫",
        url:Song5,
        cover:Img5,
        geci:`作词：高枫 作曲：高枫 原唱：高枫
        我们都有一个家
        名字叫中国
        兄弟姐妹都很多
        景色也不错
        家里盘着两条龙
        是长江与黄河呀
        还有珠穆朗玛峰儿
        是最高山坡
        我们都有一个家
        名字叫中国
        兄弟姐妹都很多
        景色也不错
        看那一条长城万里
        在云中穿梭呀
        看那青藏高原
        比那天空还辽阔
        我们的大中国呀
        好大的一个家
        经过那个多少
        那个风吹和雨打
        我们的大中国呀
        好大的一个家
        永远那个永远
        那个我要伴随她
        中国 祝福你
        你永远在我心里
        中国 祝福你
        不用千言和万语 嘿
        我们都有一个家
        名字叫中国
        兄弟姐妹都很多
        景色也不错
        家里盘着两条龙
        是长江与黄河呀
        还有珠穆朗玛峰儿
        是最高山坡
        我们都有一个家
        名字叫中国
        兄弟姐妹都很多
        景色也不错
        看那一条长城万里
        在云中穿梭呀
        看那青藏高原
        比那天空还辽阔
        我们的大中国呀
        好大的一个家
        经过那个多少
        那个风吹和雨打
        我们的大中国呀
        好大的一个家
        永远那个永远
        那个我要伴随她
        中国 祝福你
        你永远在我心里
        中国 祝福你
        不用千言和万语
        中国 祝福你
        你永远在我心里
        中国 祝福你
        不用千言和万语
        `
    },
    {
        day:918,
        num:"11期",
        name: '青春修炼手册',
        artist: "TFBOYS",
        url:Song5,
        cover:Img5,
        geci:`作词：王韵韵 作曲：刘佳 原唱：TFBOYS
        凯：跟着我 左手
        右手 一个慢动作
        右手 左手 慢动作重播
        玺：这首歌 给你快乐
        你有没有爱上我
        源： 跟着我 鼻子
        眼睛 动一动耳朵
        装乖 耍帅 换不停风格
        合：青春有太多
        未知的猜测
        成长的烦恼算什么
        源：皮鞋擦亮 换上西装
        佩戴上一克拉的梦想
        玺：我的勇敢充满电量
        昂首到达每一个地方
        凯： 这世界 的太阳
        因为自信才能把我照亮
        这舞台 的中央
        合：有我才闪亮
        有我才能发着光
        合： 跟着我 左手 右手
        一个慢动作
        右手 左手慢动作重播
        这首歌 给你快乐
        你有没有爱上我
        跟着我 鼻子眼睛
        动一动耳朵
        装乖 耍帅 换不停风格
        青春有太多 未知的猜测
        成长的烦恼算什么
        源：经常会想 长大多好
        有些事情却只能想象
        玺：想说就说 想做就做
        为了明天的自己鼓掌
        凯：这世界 的太阳
        因为自信才能把我照亮
        这舞台 的中央
        合：有我才闪亮
        有我才能发着光
        合： 跟着我左手右手
        一个慢动作
        右手 左手 慢动作重播
        这首歌 给你快乐
        你有没有爱上我
        跟着我 鼻子 眼睛
        动一动耳朵
        装乖 耍帅 换不停风格
        青春有太多 未知的猜测
        成长的烦恼算什么
        向明天 对不起
        向前冲 不客气
        一路有你 充满斗志无限动力
        合：男子汉 没有什么输不起
        正太修炼成功的秘籍
        源： 跟着我左手右手
        一个慢动作
        玺： 右手左手慢动作重播
        凯： 这首歌 给你快乐
        你有没有爱上我
        合： 跟着我鼻子眼睛
        动一动耳朵
        装乖 耍帅 换不停风格
        青春有太多 未知的猜测
        成长的烦恼算什么
        `
    },
    {
        day:919,
        num:"12期",
        name: '追梦赤子心',
        artist: "GALA乐队",
        url:Song5,
        cover:Img5,
        geci:`作词：苏朵 作曲：甘虎 原唱：gala乐队
        充满鲜花的世界到底在哪里   如果它真的存在那么我一定会去
        我想在那里最高的山峰矗立   不在乎它是不是悬崖峭壁
        用力活着用力爱哪怕肝脑涂地  不求任何人满意只要对得起自己
        关于理想我从来没选择放弃    即使在灰头土脸的日子里
        也许我没有天分  但我有梦的天真  我将会去证明用我的一生
        也许我手比较笨  但我愿不停探寻  付出所有的青春不留遗憾
        向前跑 迎着冷眼和嘲笑    生命的广阔不历经磨难怎能感到
        命运它无法让我们跪地求饶   就算鲜血洒满了怀抱
        继续跑 带着赤子的骄傲   生命的闪耀不坚持到底怎能看到
        与其苟延残喘不如纵情燃烧吧  有一天会再发芽
        未来迷人绚烂总在向我召唤  哪怕只有痛苦作伴也要勇往直前
        我想在那里最蓝的大海扬帆    绝不管自己能不能回还
        失败后郁郁寡欢  那是懦夫的表现  只要一息尚存请握紧双拳
        在天色破晓之前 我们要更加勇敢  等待日出时最耀眼的瞬间
        向前跑 迎着冷眼和嘲笑   生命的广阔不历经磨难怎能感到
        命运它无法让我们跪地求饶  就算鲜血洒满了怀抱
        继续跑 带着赤子的骄傲  生命的闪耀不坚持到底怎能看到
        与其苟延残喘不如纵情燃烧  为了心中的美好  不妥协直到变老
        `
    },
    {
        day:920,
        num:"13期",
        name: '我相信',
        artist: "杨培安",
        url:Song5,
        cover:Img5,
        geci:`作词：刘虞瑞 作曲：陈国华 原唱：杨培安
        想飞上天 和太阳肩并肩
        世界等着我去改变
        想做的梦从不怕别人看见
        在这里我都能实现
        大声欢笑 让你我肩并肩
        何处不能欢乐无限
        抛开烦恼勇敢的大步向前
        我就站在舞台中间
        我相信我就是我 我相信明天
        我相信青春没有地平线
        在日落的海边 在热闹的大街
        都是我心中最美的乐园
        我相信自由自在 我相信希望
        我相信伸手就能碰到天
        有你在我身边 让生活更新鲜
        每一刻都精彩万分 I do believe
        想飞上天 和太阳肩并肩
        世界等着我去改变
        想做的梦从不怕别人看见
        在这里我都能实现
        大声欢笑 让你我肩并肩
        何处不能欢乐无限
        抛开烦恼勇敢的大步向前
        我就站在舞台中间
        我相信我就是我 我相信明天
        我相信青春没有地平线
        在日落的海边 在热闹的大街
        都是我心中最美的乐园
        我相信自由自在 我相信希望
        我相信伸手就能碰到天
        有你在我身边 让生活更新鲜
        每一刻都精彩万分 I do believe
        我相信（我就是我）
        我相信（自由自在）
        我相信（我相信 我相信）
        I do believe
        我相信我就是我 我相信明天
        我相信青春没有地平线
        在日落的海边 在热闹的大街
        都是我心中最美的乐园
        我相信自由自在 我相信希望
        我相信伸手就能碰到天
        有你在我身边 让生活更新鲜
        每一刻都精彩万分 I do believe
        `
    },
    {
        day:921,
        num:"14期",
        name: '少年中国说',
        artist:"张杰",
        url:Song5,
        cover:Img5,
        geci:`作词：梁启超、二水 作曲：许嵩 原唱：张杰
        合唱团：
        少年智则国智
        少年富则国富
        少年强则国强
        少年自由则国自由
        少年智则国智
        少年富则国富
        少年强则国强
        少年自由则国自由
        张杰：
        红日初升 其道大光
        河出伏流 一泻汪洋
        潜龙腾渊 鳞爪飞扬
        乳虎啸谷 百兽震惶
        少年自有 少年狂
        身似山河 挺脊梁
        敢将日月 再丈量
        今朝唯我 少年郎
        敢问天地 试锋芒
        披荆斩棘 谁能挡
        世人笑我 我自强
        不负年少
        合唱团：
        少年智则国智
        少年富则国富
        少年强则国强
        少年自由则国自由
        张杰：
        干将发硎 有作其芒
        天戴其苍 地履其黄
        纵有千古 横有八荒
        前途似海 来日方长
        少年自有 少年狂
        身似山河 挺脊梁
        敢将日月 再丈量
        今朝唯我 少年郎
        敢问天地 试锋芒
        披荆斩棘 谁能挡
        世人笑我 我自强
        不负年少
        合：
        少年自有 少年狂
        心似骄阳 万丈光
        千难万挡 我去闯
        今朝唯我 少年郎
        天高海阔 万里长
        华夏少年 意气扬
        发愤图强 做栋梁
        不负年少
        张杰：
        发愤图强 做栋梁
        不负年少
        `
    },
    {
        day:922,
        num:"15期",
        name: '少年中国',
        artist: "李宇春",
        url:Song5,
        cover:Img5,
        geci:`作词：冀楚忱 作曲：kent王健 原唱：李宇春
        萤火虫 用来偷玩的光
        头摇晃 才能背会文章
        跟晨风 绕过梅花桩
        你的箭马蹄也追不上
        打瞌睡 先生打我手掌
        柳树叶 放在唇边回响
        一滴墨 一朵梅花放
        牵着手 留下一缕芬芳
        在我们眼睛里看不见彼此都在长
        多年后 青梅竹马想起 还觉得一阵忧伤
        少年强那中国一定也很棒
        吸收五千年的磁场
        有传说中的神奇和积蓄的锋芒
        一根傲骨无法隐藏闪着智慧的力量
        少年强那中国一定也很棒
        散发五千年的磁场
        习惯了后发制人赢了还说承让
        载着无限梦想和希望像条龙一样飞翔
        那月亮 一层故乡的霜
        这边疆 草儿有点发黄
        一壶酒 还在胃里晃
        狼烟烫 温暖你的刀枪
        屋檐下 燕子做了新房
        拆开信 时间老了爹娘
        一条河 有人在梳妆
        小女孩 穿上谁家衣裳
        在我们眼睛里看不见彼此都在长
        年少的壮志雄心 至今还觉得豪情万丈
        少年强那中国一定也很棒
        吸收五千年的磁场
        有传说中的神奇和积蓄的锋芒
        一根傲骨无法隐藏闪着智慧的力量
        少年强那中国一定也很棒
        散发五千年的磁场
        习惯了后发制人赢了还说承让
        载着无限梦想和希望像条龙一样飞翔
        少年强那中国一定也很棒
        吸收五千年的磁场
        有传说中的神奇和积蓄的锋芒
        一根傲骨无法隐藏闪着智慧的力量
        少年强那中国一定也很棒
        散发五千年的磁场
        习惯了后发制人赢了还说承让
        载着无限梦想和希望像条龙一样飞翔
        `
    },
    {
        day:923,
        num:"16期",
        name: '明天，你好',
        artist: "王源、王俊凯",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:924,
        num:"17期",
        name: '东方之珠',
        artist: "甄妮",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:925,
        num:"18期",
        name: '七子之歌',
        artist: "容韵琳",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:926,
        num:"19期",
        name: '飞云之下',
        artist: "韩红&林俊杰",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:927,
        num:"20期",
        name: '我爱你中国',
        artist: "叶佩英",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:928,
        num:"21期",
        name: '听妈妈的话',
        artist: "周杰伦",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:929,
        num:"22期",
        name: '同一首歌',
        artist: "刘畅",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:930,
        num:"23期",
        name: '最美的太阳',
        artist: "张杰",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:101,
        num:"24期",
        name: '今天是你的生日',
        artist: "董文华",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:102,
        num:"25期",
        name: '男儿当自强',
        artist: "林子祥",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:103,
        num:"26期",
        name: '我的中国心',
        artist: "张明敏",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:104,
        num:"27期",
        name: '骄傲的少年',
        artist: "南征北战",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:105,
        num:"28期",
        name: '隐形的翅膀',
        artist: "张韶涵",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:106,
        num:"29期",
        name: '红星歌',
        artist: "傅庚辰",
        url:Song5,
        cover:Img5,
        geci:``
    },
    {
        day:107,
        num:"30期",
        name: '歌声与微笑',
        artist: "上海小荧星儿童合唱团",
        url:Song5,
        cover:Img5,
        geci:``
    }
    
]