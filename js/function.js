// JavaScript Document
/*jshint esversion: 6 */
/*
 *  Random-Required
 *  Copyright (C) coddec https://github.com/coddec
 *  Free to use/modify/improve/fork (credits/author information must not be removed or modified), no commercial use allowed at all.
 *  For commercial use or other matters, contact me at https://goo.gl/AKt4Vr
 */

$(document).ready(function () {
	"use strict";
	$('#chkbx_true_random').change(function () {
		enable_disable_reset_all_btn();
	});

	$('#chkbx_typ_num_0to9').change(function () {
		if (this.checked) {
			$('#chkbx_typ_num_2to9').prop('checked', false);
			$('#chkbx_typ_num_2to9').prop('disabled', true);
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		} else {
			$('#chkbx_typ_num_2to9').removeAttr('disabled');
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		}
	});

	$('#chkbx_typ_num_2to9').change(function () {
		if (this.checked) {
			$('#chkbx_typ_num_0to9').prop('checked', false);
			$('#chkbx_typ_num_0to9').prop('disabled', true);
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		} else {
			$('#chkbx_typ_num_0to9').removeAttr('disabled');
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		}
	});


	$('#chkbx_typ_cap_letter_A_Z').change(function () {
		if (this.checked) {
			$('#chkbx_typ_cap_letter_no_I_O').prop('checked', false);
			$('#chkbx_typ_cap_letter_no_I_O').prop('disabled', true);
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		} else {
			$('#chkbx_typ_cap_letter_no_I_O').removeAttr('disabled');
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		}
	});

	$('#chkbx_typ_cap_letter_no_I_O').change(function () {
		if (this.checked) {
			$('#chkbx_typ_cap_letter_A_Z').prop('checked', false);
			$('#chkbx_typ_cap_letter_A_Z').prop('disabled', true);
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		} else {
			$('#chkbx_typ_cap_letter_A_Z').removeAttr('disabled');
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		}
	});


	$('#chkbx_typ_sml_letter_a_z').change(function () {
		if (this.checked) {
			$('#chkbx_typ_sml_letter_no_i_o').prop('checked', false);
			$('#chkbx_typ_sml_letter_no_i_o').prop('disabled', true);
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		} else {
			$('#chkbx_typ_sml_letter_no_i_o').removeAttr('disabled');
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		}
	});

	$('#chkbx_typ_sml_letter_no_i_o').change(function () {
		if (this.checked) {
			$('#chkbx_typ_sml_letter_a_z').prop('checked', false);
			$('#chkbx_typ_sml_letter_a_z').prop('disabled', true);
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		} else {
			$('#chkbx_typ_sml_letter_a_z').removeAttr('disabled');
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		}
	});


	$('#chkbx_typ_symbol').change(function () {
		if (this.checked) {
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		} else {
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		}
	});


	$('#chkbx_typ_chinese').change(function () {
		if (this.checked) {
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		} else {
			enable_disable_reset_type();
			enable_disable_generate_btn();
			enable_disable_reset_all_btn();
			string_length_check();
		}
	});

	$('#txt_typ_custom_txt').on('change, keyup', function () {
		enable_disable_reset_type();
		enable_disable_generate_btn();
		enable_disable_reset_all_btn();
		string_length_check();
	});

	$('#chkbx_reuse_no').change(function () {
		string_length_check();
		enable_disable_reset_all_btn();
	});

	$('#num_output_string_length').on('change', function () {
		if ($(this).val() < 1) {
			$(this).val(1);
		}
		string_length_check();
		enable_disable_reset_all_btn();
	});

	$('#num_output_quantity').on('change', function () {
		if ($(this).val() < 1) {
			$(this).val(1);
		}
		enable_disable_reset_all_btn();
	});

	$('#txtarea_results').on('input, keyup', function () {
		enale_disable_copy_btn();
		enable_disable_reset_all_btn();
	});
});


function enable_disable_reset_type() {
	"use strict";
	if ($('#chkbx_typ_num_0to9').prop('checked') || $('#chkbx_typ_num_2to9').prop('checked') || $('#chkbx_typ_cap_letter_A_Z').prop('checked') || $('#chkbx_typ_cap_letter_no_I_O').prop('checked') || $('#chkbx_typ_sml_letter_a_z').prop('checked') || $('#chkbx_typ_sml_letter_no_i_o').prop('checked') || $('#chkbx_typ_symbol').prop('checked') || $('#chkbx_typ_chinese').prop('checked') || $('#txt_typ_custom_txt').val().length > 0) {
		$('#btn_reset_type').removeAttr('disabled');
	} else {
		$('#btn_reset_type').prop('disabled', true);
	}
}


function enale_disable_copy_btn() {
	"use strict";
	if ($('#txtarea_results').val().length <= 0) {
		$('#btn_copy').prop('disabled', true);
	} else {
		$('#btn_copy').removeAttr('disabled');
	}
}

function enable_disable_generate_btn() {
	"use strict";
	if ($('#chkbx_typ_num_0to9').prop('checked') || $('#chkbx_typ_num_2to9').prop('checked') || $('#chkbx_typ_cap_letter_A_Z').prop('checked') || $('#chkbx_typ_cap_letter_no_I_O').prop('checked') || $('#chkbx_typ_sml_letter_a_z').prop('checked') || $('#chkbx_typ_sml_letter_no_i_o').prop('checked') || $('#chkbx_typ_symbol').prop('checked') || $('#chkbx_typ_chinese').prop('checked') || $('#txt_typ_custom_txt').val().length > 0) {
		$('#btn_generate').removeAttr('disabled');
	} else {
		$('#btn_generate').prop('disabled', true);
	}
}

function enable_disable_reset_all_btn() {
	"use strict";
	if ($('#chkbx_true_random').prop('checked') || $('#chkbx_typ_num_0to9').prop('checked') || $('#chkbx_typ_num_2to9').prop('checked') || $('#chkbx_typ_cap_letter_A_Z').prop('checked') || $('#chkbx_typ_cap_letter_no_I_O').prop('checked') || $('#chkbx_typ_sml_letter_a_z').prop('checked') || $('#chkbx_typ_sml_letter_no_i_o').prop('checked') || $('#chkbx_typ_symbol').prop('checked') || $('#chkbx_typ_chinese').prop('checked') || $('#txt_typ_custom_txt').val().length > 0 || $('#chkbx_reuse_no').prop('checked') || $('#num_output_string_length').val() > 1 || $('#num_output_quantity').val() > 1 || $('#txtarea_results').val().length > 0) {
		$('#btn_reset_all').removeAttr('disabled');
	} else {
		$('#btn_reset_all').prop('disabled', true);
	}
}


function reset_type() {
	"use strict";
	$('#chkbx_typ_num_0to9').prop('checked', false);
	$('#chkbx_typ_num_0to9').prop('disabled', false);
	$('#chkbx_typ_num_2to9').prop('checked', false);
	$('#chkbx_typ_num_2to9').prop('disabled', false);
	$('#chkbx_typ_cap_letter_A_Z').prop('checked', false);
	$('#chkbx_typ_cap_letter_A_Z').prop('disabled', false);
	$('#chkbx_typ_cap_letter_no_I_O').prop('checked', false);
	$('#chkbx_typ_cap_letter_no_I_O').prop('disabled', false);
	$('#chkbx_typ_sml_letter_a_z').prop('checked', false);
	$('#chkbx_typ_sml_letter_a_z').prop('disabled', false);
	$('#chkbx_typ_sml_letter_no_i_o').prop('checked', false);
	$('#chkbx_typ_sml_letter_no_i_o').prop('disabled', false);
	$('#chkbx_typ_symbol').prop('checked', false);
	$('#chkbx_typ_symbol').prop('disabled', false);
	$('#chkbx_typ_chinese').prop('checked', false);
	$('#chkbx_typ_chinese').prop('disabled', false);
	$('#txt_typ_custom_txt').prop('disabled', false);

	$('#num_typ_num_0to9').val(0);
	$('#num_typ_num_2to9').val(0);
	$('#num_typ_cap_letter_A_Z').val(0);
	$('#num_typ_cap_letter_no_I_O').val(0);
	$('#num_typ_sml_letter_a_z').val(0);
	$('#num_typ_sml_letter_no_i_o').val(0);
	$('#num_typ_symbol').val(0);
	$('#num_typ_chinese').val(0);
	$('#txt_typ_custom_txt').val('');


	$('#btn_reset_type').prop('disabled', true);
	$('#btn_generate').prop('disabled', true);
}

function reset_all() {
	"use strict";
	$('#chkbx_true_random').prop('checked', false);
	reset_type();
	$('#chkbx_reuse_no').prop('checked', false);
	$('#num_output_string_length').val(1);
	$('#num_output_quantity').val(1);
	$('#btn_reset_all').prop('disabled', true);
}

var str_0to9 = '0123456789';
var str_2to9 = '23456789';
var str_cap_AtoZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var str_cap_AtoZ_no_I_O = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
var str_sml_a_z = 'abcdefghijklmnopqrstuvwxyz';
var str_sml_a_z_no_i_o = 'abcdefghjklmnpqrstuvwxyz';
var str_symbol = '~!@#$%^&*()_+`-=[]{}|\'"<>?/.,\\';
var str_chinese = '一乙二十丁厂七卜人入八九几儿了力乃刀又三于干亏士工土才寸下大丈与万上小口巾山千乞川亿个勺久凡及夕丸么广亡门义之尸弓己已子卫也女飞刃习叉马乡丰王井开夫天无元专云扎艺木五支厅不太犬区历尤友匹车巨牙屯比互切瓦止少日中冈贝内水见午牛手毛气升长仁什片仆化仇币仍仅斤爪反介父从今凶分乏公仓月氏勿欠风丹匀乌凤勾文六方火为斗忆订计户认心尺引丑巴孔队办以允予劝双书幻玉刊示末未击打巧正扑扒功扔去甘世古节本术可丙左厉右石布龙平灭轧东卡北占业旧帅归且旦目叶甲申叮电号田由史只央兄叼叫另叨叹四生失禾丘付仗代仙们仪白仔他斥瓜乎丛令用甩印乐句匆册犯外处冬鸟务包饥主市立闪兰半汁汇头汉宁穴它讨写让礼训必议讯记永司尼民出辽奶奴加召皮边发孕圣对台矛纠母幼丝式刑动扛寺吉扣考托老执巩圾扩扫地扬场耳共芒亚芝朽朴机权过臣再协西压厌在有百存而页匠夸夺灰达列死成夹轨邪划迈毕至此贞师尘尖劣光当早吐吓虫曲团同吊吃因吸吗屿帆岁回岂刚则肉网年朱先丢舌竹迁乔伟传乒乓休伍伏优伐延件任伤价份华仰仿伙伪自血向似后行舟全会杀合兆企众爷伞创肌朵杂危旬旨负各名多争色壮冲冰庄庆亦刘齐交次衣产决充妄闭问闯羊并关米灯州汗污江池汤忙兴宇守宅字安讲军许论农讽设访寻那迅尽导异孙阵阳收阶阴防奸如妇好她妈戏羽观欢买红纤级约纪驰巡寿弄麦形进戒吞远违运扶抚坛技坏扰拒找批扯址走抄坝贡攻赤折抓扮抢孝均抛投坟抗坑坊抖护壳志扭块声把报却劫芽花芹芬苍芳严芦劳克苏杆杠杜材村杏极李杨求更束豆两丽医辰励否还歼来连步坚旱盯呈时吴助县里呆园旷围呀吨足邮男困吵串员听吩吹呜吧吼别岗帐财针钉告我乱利秃秀私每兵估体何但伸作伯伶佣低你住位伴身皂佛近彻役返余希坐谷妥含邻岔肝肚肠龟免狂犹角删条卵岛迎饭饮系言冻状亩况床库疗应冷这序辛弃冶忘闲间闷判灶灿弟汪沙汽沃泛沟没沈沉怀忧快完宋宏牢究穷灾良证启评补初社识诉诊词译君灵即层尿尾迟局改张忌际陆阿陈阻附妙妖妨努忍劲鸡驱纯纱纳纲驳纵纷纸纹纺驴纽奉玩环武青责现表规抹拢拔拣担坦押抽拐拖拍者顶拆拥抵拘势抱垃拉拦拌幸招坡披拨择抬其取苦若茂苹苗英范直茄茎茅林枝杯柜析板松枪构杰述枕丧或画卧事刺枣雨卖矿码厕奔奇奋态欧垄妻轰顷转斩轮软到非叔肯齿些虎虏肾贤尚旺具果味昆国昌畅明易昂典固忠咐呼鸣咏呢岸岩帖罗帜岭凯败贩购图钓制知垂牧物乖刮秆和季委佳侍供使例版侄侦侧凭侨佩货依的迫质欣征往爬彼径所舍金命斧爸采受乳贪念贫肤肺肢肿胀朋股肥服胁周昏鱼兔狐忽狗备饰饱饲变京享店夜庙府底剂郊废净盲放刻育闸闹郑券卷单炒炊炕炎炉沫浅法泄河沾泪油泊沿泡注泻泳泥沸波泼泽治怖性怕怜怪学宝宗定宜审宙官空帘实试郎诗肩房诚衬衫视话诞询该详建肃录隶居届刷屈弦承孟孤陕降限妹姑姐姓始驾参艰线练组细驶织终驻驼绍经贯奏春帮珍玻毒型挂封持项垮挎城挠政赴赵挡挺括拴拾挑指垫挣挤拼挖按挥挪某甚革荐巷带草茧茶荒茫荡荣故胡南药标枯柄栋相查柏柳柱柿栏树要咸威歪研砖厘厚砌砍面耐耍牵残殃轻鸦皆背战点临览竖省削尝是盼眨哄显哑冒映星昨畏趴胃贵界虹虾蚁思蚂虽品咽骂哗咱响哈咬咳哪炭峡罚贱贴骨钞钟钢钥钩卸缸拜看矩怎牲选适秒香种秋科重复竿段便俩贷顺修保促侮俭俗俘信皇泉鬼侵追俊盾待律很须叙剑逃食盆胆胜胞胖脉勉狭狮独狡狱狠贸怨急饶蚀饺饼弯将奖哀亭亮度迹庭疮疯疫疤姿亲音帝施闻阀阁差养美姜叛送类迷前首逆总炼炸炮烂剃洁洪洒浇浊洞测洗活派洽染济洋洲浑浓津恒恢恰恼恨举觉宣室宫宪突穿窃客冠语扁袄祖神祝误诱说诵垦退既屋昼费陡眉孩除险院娃姥姨姻娇怒架贺盈勇怠柔垒绑绒结绕骄绘给络骆绝绞统耕耗艳泰珠班素蚕顽盏匪捞栽捕振载赶起盐捎捏埋捉捆捐损都哲逝捡换挽热恐壶挨耻耽恭莲莫荷获晋恶真框桂档桐株桥桃格校核样根索哥速逗栗配翅辱唇夏础破原套逐烈殊顾轿较顿毙致柴桌虑监紧党晒眠晓鸭晃晌晕蚊哨哭恩唤啊唉罢峰圆贼贿钱钳钻铁铃铅缺氧特牺造乘敌秤租积秧秩称秘透笔笑笋债借值倚倾倒倘俱倡候俯倍倦健臭射躬息徒徐舰舱般航途拿爹爱颂翁脆脂胸胳脏胶脑狸狼逢留皱饿恋桨浆衰高席准座脊症病疾疼疲效离唐资凉站剖竞部旁旅畜阅羞瓶拳粉料益兼烤烘烦烧烛烟递涛浙涝酒涉消浩海涂浴浮流润浪浸涨烫涌悟悄悔悦害宽家宵宴宾窄容宰案请朗诸读扇袜袖袍被祥课谁调冤谅谈谊剥恳展剧屑弱陵陶陷陪娱娘通能难预桑绢绣验继球理捧堵描域掩捷排掉堆推掀授教掏掠培接控探据掘职基著勒黄萌萝菌菜萄菊萍菠营械梦梢梅检梳梯桶救副票戚爽聋袭盛雪辅辆虚雀堂常匙晨睁眯眼悬野啦晚啄距跃略蛇累唱患唯崖崭崇圈铜铲银甜梨犁移笨笼笛符第敏做袋悠偿偶偷您售停偏假得衔盘船斜盒鸽悉欲彩领脚脖脸脱象够猜猪猎猫猛馅馆凑减毫麻痒痕廊康庸鹿盗章竟商族旋望率着盖粘粗粒断剪兽清添淋淹渠渐混渔淘液淡深婆梁渗情惜惭悼惧惕惊惨惯寇寄宿窑密谋谎祸谜逮敢屠弹随蛋隆隐婚婶颈绩绪续骑绳维绵绸绿琴斑替款堪搭塔越趁趋超提堤博揭喜插揪搜煮援裁搁搂搅握揉斯期欺联散惹葬葛董葡敬葱落朝辜葵棒棋植森椅椒棵棍棉棚棕惠惑逼厨厦硬确雁殖裂雄暂雅辈悲紫辉敞赏掌晴暑最量喷晶喇遇喊景践跌跑遗蛙蛛蜓喝喂喘喉幅帽赌赔黑铸铺链销锁锄锅锈锋锐短智毯鹅剩稍程稀税筐等筑策筛筒答筋筝傲傅牌堡集焦傍储奥街惩御循艇舒番释禽腊脾腔鲁猾猴然馋装蛮就痛童阔善羡普粪尊道曾焰港湖渣湿温渴滑湾渡游滋溉愤慌惰愧愉慨割寒富窜窝窗遍裕裤裙谢谣谦属屡强粥疏隔隙絮嫂登缎缓编骗缘瑞魂肆摄摸填搏塌鼓摆携搬摇搞塘摊蒜勤鹊蓝墓幕蓬蓄蒙蒸献禁楚想槐榆楼概赖酬感碍碑碎碰碗碌雷零雾雹输督龄鉴睛睡睬鄙愚暖盟歇暗照跨跳跪路跟遣蛾蜂嗓置罪罩错锡锣锤锦键锯矮辞稠愁筹签简毁舅鼠催傻像躲微愈遥腰腥腹腾腿触解酱痰廉新韵意粮数煎塑慈煤煌满漠源滤滥滔溪溜滚滨粱滩慎誉塞谨福群殿辟障嫌嫁叠缝缠静碧璃墙撇嘉摧截誓境摘摔聚蔽慕暮蔑模榴榜榨歌遭酷酿酸磁愿需弊裳颗嗽蜻蜡蝇蜘赚锹锻舞稳算箩管僚鼻魄貌膜膊膀鲜疑馒裹敲豪膏遮腐瘦辣竭端旗精歉熄熔漆漂漫滴演漏慢寨赛察蜜谱嫩翠熊凳骡缩慧撕撒趣趟撑播撞撤增聪鞋蕉蔬横槽樱橡飘醋醉震霉瞒题暴瞎影踢踏踩踪蝶蝴嘱墨镇靠稻黎稿稼箱箭篇僵躺僻德艘膝膛熟摩颜毅糊遵潜潮懂额慰劈操燕薯薪薄颠橘整融醒餐嘴蹄器赠默镜赞篮邀衡膨雕磨凝辨辩糖糕燃澡激懒壁避缴戴擦鞠藏霜霞瞧蹈螺穗繁辫赢糟糠燥臂翼骤鞭覆蹦镰翻鹰警攀蹲颤瓣爆疆壤耀躁嚼嚷籍魔灌蠢霸露囊罐匕刁丐歹戈夭仑讥冗邓艾夯凸卢叭叽皿凹囚矢乍尔冯玄邦迂邢芋芍吏夷吁吕吆屹廷迄臼仲伦伊肋旭匈凫妆亥汛讳讶讹讼诀弛阱驮驯纫玖玛韧抠扼汞扳抡坎坞抑拟抒芙芜苇芥芯芭杖杉巫杈甫匣轩卤肖吱吠呕呐吟呛吻吭邑囤吮岖牡佑佃伺囱肛肘甸狈鸠彤灸刨庇吝庐闰兑灼沐沛汰沥沦汹沧沪忱诅诈罕屁坠妓姊妒纬玫卦坷坯拓坪坤拄拧拂拙拇拗茉昔苛苫苟苞茁苔枉枢枚枫杭郁矾奈奄殴歧卓昙哎咕呵咙呻咒咆咖帕账贬贮氛秉岳侠侥侣侈卑刽刹肴觅忿瓮肮肪狞庞疟疙疚卒氓炬沽沮泣泞泌沼怔怯宠宛衩祈诡帚屉弧弥陋陌函姆虱叁绅驹绊绎契贰玷玲珊拭拷拱挟垢垛拯荆茸茬荚茵茴荞荠荤荧荔栈柑栅柠枷勃柬砂泵砚鸥轴韭虐昧盹咧昵昭盅勋哆咪哟幽钙钝钠钦钧钮毡氢秕俏俄俐侯徊衍胚胧胎狰饵峦奕咨飒闺闽籽娄烁炫洼柒涎洛恃恍恬恤宦诫诬祠诲屏屎逊陨姚娜蚤骇耘耙秦匿埂捂捍袁捌挫挚捣捅埃耿聂荸莽莱莉莹莺梆栖桦栓桅桩贾酌砸砰砾殉逞哮唠哺剔蚌蚜畔蚣蚪蚓哩圃鸯唁哼唆峭唧峻赂赃钾铆氨秫笆俺赁倔殷耸舀豺豹颁胯胰脐脓逛卿鸵鸳馁凌凄衷郭斋疹紊瓷羔烙浦涡涣涤涧涕涩悍悯窍诺诽袒谆祟恕娩骏琐麸琉琅措捺捶赦埠捻掐掂掖掷掸掺勘聊娶菱菲萎菩萤乾萧萨菇彬梗梧梭曹酝酗厢硅硕奢盔匾颅彪眶晤曼晦冕啡畦趾啃蛆蚯蛉蛀唬啰唾啤啥啸崎逻崔崩婴赊铐铛铝铡铣铭矫秸秽笙笤偎傀躯兜衅徘徙舶舷舵敛翎脯逸凰猖祭烹庶庵痊阎阐眷焊焕鸿涯淑淌淮淆渊淫淳淤淀涮涵惦悴惋寂窒谍谐裆袱祷谒谓谚尉堕隅婉颇绰绷综绽缀巢琳琢琼揍堰揩揽揖彭揣搀搓壹搔葫募蒋蒂韩棱椰焚椎棺榔椭粟棘酣酥硝硫颊雳翘凿棠晰鼎喳遏晾畴跋跛蛔蜒蛤鹃喻啼喧嵌赋赎赐锉锌甥掰氮氯黍筏牍粤逾腌腋腕猩猬惫敦痘痢痪竣翔奠遂焙滞湘渤渺溃溅湃愕惶寓窖窘雇谤犀隘媒媚婿缅缆缔缕骚瑟鹉瑰搪聘斟靴靶蓖蒿蒲蓉楔椿楷榄楞楣酪碘硼碉辐辑频睹睦瞄嗜嗦暇畸跷跺蜈蜗蜕蛹嗅嗡嗤署蜀幌锚锥锨锭锰稚颓筷魁衙腻腮腺鹏肄猿颖煞雏馍馏禀痹廓痴靖誊漓溢溯溶滓溺寞窥窟寝褂裸谬媳嫉缚缤剿赘熬赫蔫摹蔓蔗蔼熙蔚兢榛榕酵碟碴碱碳辕辖雌墅嘁踊蝉嘀幔镀舔熏箍箕箫舆僧孵瘩瘟彰粹漱漩漾慷寡寥谭褐褪隧嫡缨撵撩撮撬擒墩撰鞍蕊蕴樊樟橄敷豌醇磕磅碾憋嘶嘲嘹蝠蝎蝌蝗蝙嘿幢镊镐稽篓膘鲤鲫褒瘪瘤瘫凛澎潭潦澳潘澈澜澄憔懊憎翩褥谴鹤憨履嬉豫缭撼擂擅蕾薛薇擎翰噩橱橙瓢蟥霍霎辙冀踱蹂蟆螃螟噪鹦黔穆篡篷篙篱儒膳鲸瘾瘸糙燎濒憾懈窿缰壕藐檬檐檩檀礁磷瞭瞬瞳瞪曙蹋蟋蟀嚎赡镣魏簇儡徽爵朦臊鳄糜癌懦豁臀藕藤瞻嚣鳍癞瀑襟璧戳攒孽蘑藻鳖蹭蹬簸簿蟹靡癣羹鬓攘蠕巍鳞糯譬霹躏髓蘸镶瓤矗';

function str_creator(num_0_9, num_2_9, cap_A_Z, cap_A_Z_no_I_O, sml_a_z, sml_a_z_no_i_o, symbol, chinese, custom_txt) {
	"use strict";
	var tmp = '';
	if (num_0_9 === true) {
		tmp += str_0to9;
	}
	if (num_2_9 === true) {
		tmp += str_2to9;
	}
	if (cap_A_Z === true) {
		tmp += str_cap_AtoZ;
	}
	if (cap_A_Z_no_I_O === true) {
		tmp += str_cap_AtoZ_no_I_O;
	}
	if (sml_a_z === true) {
		tmp += str_sml_a_z;
	}
	if (sml_a_z_no_i_o === true) {
		tmp += str_sml_a_z_no_i_o;
	}
	if (symbol === true) {
		tmp += str_symbol;
	}
	if (chinese === true) {
		tmp += str_chinese;
	}
	if (custom_txt === true) {
		tmp += $('#txt_typ_custom_txt').val();
	}
	return tmp;

}


function RdnIntInclusive(min, max) {
	"use strict";
	const myrandomBuffer = new Uint32Array(10);
	window.crypto.getRandomValues(myrandomBuffer);
	let myrandomNumber = myrandomBuffer[0] / (0xffffffff + 1);
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(myrandomNumber * (max - min + 1)) + min;
}


function generate_crypto(input_string, out_length, out_quantity, only_once) {
	"use strict";
	var i = 0;
	var j = 0;
	var str_final_output = '';
	var tmp_str = '';
	var rdn_num = '';
	if (only_once !== true) {
		for (i = 0; i < out_quantity; i++) {
			for (j = 0; j < out_length; j++) {
				rdn_num = RdnIntInclusive(0, input_string.length - 1);
				tmp_str += input_string.charAt(rdn_num);
			}
			tmp_str += '\n';
		}
	} else {
		var my_input_string = input_string;
		var my_out_length = out_length;
		for (i = 0; i < out_quantity; i++) {
			my_input_string = input_string;
			my_out_length = out_length;
			for (j = my_out_length; j > 0; j--) {
				rdn_num = RdnIntInclusive(0, my_input_string.length - 1);
				tmp_str += my_input_string.charAt(rdn_num);
				my_input_string = my_input_string.slice(0, rdn_num) + my_input_string.slice(rdn_num + 1);
				my_out_length -= 1;
			}
			tmp_str += '\n';
		}
	}
	str_final_output = tmp_str;
	return str_final_output;
}


function string_length_check() {
	"use strict";
	var my_str = '';
	var my_str_length = '';
	my_str = str_creator($('#chkbx_typ_num_0to9').prop('checked'), $('#chkbx_typ_num_2to9').prop('checked'), $('#chkbx_typ_cap_letter_A_Z').prop('checked'), $('#chkbx_typ_cap_letter_no_I_O').prop('checked'), $('#chkbx_typ_sml_letter_a_z').prop('checked'), $('#chkbx_typ_sml_letter_no_i_o').prop('checked'), $('#chkbx_typ_symbol').prop('checked'), $('#chkbx_typ_chinese').prop('checked'), $('#txt_typ_custom_txt').val().length > 0);
	my_str_length = my_str.length;
	if ($('#chkbx_reuse_no').prop('checked') && my_str_length > 0) {
		if ($('#num_output_string_length').val() > my_str.length) {
			$('#num_output_string_length').val(my_str.length);
		}
	}

}




function change_generate_button() {
	"use strict";
	var d = $.Deferred();
	//$("#btn_generate").removeAttr("onClick");
	$("#div_progress_bar").show();
	$("#btn_generate").addClass("btn-lg");
	$("#div_btn_generate").html("Generating...");
	$('#span_btn_generate').addClass('fa fa-refresh fa-spin');
	$("#btn_generate").prop('disabled', true);
	d.resolve();
	return d.promise();
}

function change_generate_btn_back() {
	"use strict";
	var d = $.Deferred();
	//$("#btn_generate").attr('onClick','start_job()');
	$("#div_progress_bar").hide();
	$("#btn_generate").removeClass("btn-lg");
	$("#div_btn_generate").html("Generate");
	$('#span_btn_generate').removeClass();
	$("#btn_generate").removeAttr('disabled');
	d.resolve();
	return d.promise();
}

/*
function output_result_cryp() {
	"use strict";
	//change_generate_button();
	
// some length calculations
	var tmp_string = '';
	tmp_string = str_creator($('#chkbx_typ_num_0to9').prop('checked'), $('#chkbx_typ_num_2to9').prop('checked'), $('#chkbx_typ_cap_letter_A_Z').prop('checked'), $('#chkbx_typ_cap_letter_no_I_O').prop('checked'), $('#chkbx_typ_sml_letter_a_z').prop('checked'), $('#chkbx_typ_sml_letter_no_i_o').prop('checked'), $('#chkbx_typ_symbol').prop('checked'), $('#chkbx_typ_chinese').prop('checked'), $('#txt_typ_custom_txt').val().length > 0, 


	//$('#txtarea_results').val(generate());
	//var tmp_result = '';
	//generate(tmp_string, $('#num_output_string_length').val(), $('#num_output_quantity').val(), $('#chkbx_reuse_no').prop('checked'))
	//	.then(x => $('#txtarea_results').val(x));
	//$('#txtarea_results').val(tmp_result);
		
	$('#txtarea_results').val(generate(tmp_string, $('#num_output_string_length').val(), $('#num_output_quantity').val(), $('#chkbx_reuse_no').prop('checked')));
	
}
*/

var glb_result = '';
var myWorker = new Worker('js/generator.js');

function output_result() {
	"use strict";
	var d = $.Deferred();
	$('#txtarea_results').val('');
	$('#txtarea_results').trigger('keyup');
	change_generate_button();

	var tmp_string = '';
	tmp_string = str_creator($('#chkbx_typ_num_0to9').prop('checked'), $('#chkbx_typ_num_2to9').prop('checked'), $('#chkbx_typ_cap_letter_A_Z').prop('checked'), $('#chkbx_typ_cap_letter_no_I_O').prop('checked'), $('#chkbx_typ_sml_letter_a_z').prop('checked'), $('#chkbx_typ_sml_letter_no_i_o').prop('checked'), $('#chkbx_typ_symbol').prop('checked'), $('#chkbx_typ_chinese').prop('checked'), $('#txt_typ_custom_txt').val().length > 0);


	if ($('#chkbx_true_random').prop('checked')) {
		glb_result = generate_crypto(tmp_string, $('#num_output_string_length').val(), $('#num_output_quantity').val(), $('#chkbx_reuse_no').prop('checked'));
		d.resolve();
	} else {
		if (window.Worker) {
			myWorker.postMessage([tmp_string, $('#num_output_string_length').val(), $('#num_output_quantity').val(), $('#chkbx_reuse_no').prop('checked')]);
			//console.log('Message posted to worker');
			myWorker.onmessage = function (e) {
				var tmp_result = e.data;
				//console.log('Message received from worker');
				//console.log(tmp_result);
				glb_result = tmp_result;
				//$('#txtarea_results').val(tmp_result);			
				d.resolve();
			};

		}
	}
	return d.promise();
}

function display_result() {
	"use strict";
	var d = $.Deferred();
	$('#txtarea_results').val(glb_result);
	$('#txtarea_results').trigger('keyup');
	d.resolve();
	return d.promise();
}


function start_job() {
	"use strict";
	change_generate_button().pipe(output_result).pipe(display_result).pipe(change_generate_btn_back);
}

function copy_result() {
	"use strict";
	$('#txtarea_results').select();
	document.execCommand("Copy");
	window.getSelection().removeAllRanges();
	alert('Copied!');
}