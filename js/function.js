// 工具按钮
let tool_spans = $(".tools div");
let tool_imgs = $(".tools div img");
// 工具显示区域
let tool_boxs = $(".tools_box");


function tools_swith(i) {
	for (let j = 0; j < tool_boxs.length; j++) {
		$(tool_boxs[j]).hide();
		$(tool_spans[j]).css('border-bottom', '2px solid transparent');
		$(tool_imgs[j]).css('opacity', 0)
	}
	$(tool_boxs[i]).show();
	$(tool_spans[i]).css('border-bottom', '2px solid #7e7e7e');

	$(tool_imgs[i]).css('opacity', 1)
}
tools_swith(0);



function keepOnlyNumbers(str) { // 只保留数字
	return str.replace(/[^0-9.]/g, '');
}

