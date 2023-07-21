let = timeNode = $(".time_node");

let time = 0;

let node = `<div id="node"></div>`
let intNode = `<div id="intNode"></div>`

//  时间轴标识信息
for (let i = 0; i <= 210; i++) {
	$(timeNode).append(node)
	if (i % 10 == 0) {
		$(timeNode).append(intNode)
		
		$(".nodeTxts").append(`<div id="nodeTxt">00:00:${Math.round((i/10), 0)}:00</div>`)
	}
}


// 粒子对象填充
for (let i = 0; i <= 100; i++) {
	$(".right_box ul").append(`<li>对象 ${i}</li>`)
}

let lis = $(".right_box ul li");

for (let i = 0; i < lis.length; i++) {
	$(lis[i]).click(() => {
		console.log("点击添加" , i)
	});
}

particle_obj = 
[
	["粒子 1", 4],
	['粒子 2', 5],
	['粒子 3', 6]
]



