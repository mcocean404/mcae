// 获取滚动区域长度
var TATArea_width = $('.nodeTxts').width()
var TATArea_overflowX = $('.timeAxis_area').width()
console.log(TATArea_overflowX)

// 获取滚动条的百分比值
var scrollPercentage = 0;
var scrollLeft = 0;
$('.timeAxis_area').scroll(function() {
	// 获取滚动容器的尺寸
	var containerHeight = $(this).width();
	var containerScrollHeight = $(this)[0].scrollWidth;

	// 获取滚动条的位置
	var scrollPosition = $('.timeAxis_area').scrollLeft();

	// 计算滚动条的百分比
	scrollPercentage = (scrollPosition / (containerScrollHeight - containerHeight));

	// 输出百分比
	// console.log('滚动条的百分比：' + scrollPercentage + '%');
	// 计算偏移量
	scrollLeft = (TATArea_width - TATArea_overflowX) * scrollPercentage
	// console.log("偏移量：" + scrollLeft)
});

// 时间轴事件
$('.timeAxis_area').click(function(event) {
	// 获取鼠标点击的坐标
	var mouseX = event.pageX;
	var mouseY = event.pageY;
	
	// 获取div元素的位置和尺寸
	var divX = $(this).offset().left;
	var divY = $(this).offset().top;
	var divWidth = $(this).width();
	
	// 计算鼠标点击距离的宽度
	var distance = Math.round(mouseX - divX + scrollLeft - 5, 4);
	
	// 输出距离
	$("#timeAxisMark").css('margin-left', distance + 'px')
	
	console.log("时间轴指针： " + distance)
});

$('.timeAxis_area').mousemove(function(event) {
	// 获取鼠标点击的坐标
	var mouseX = event.pageX;
	var mouseY = event.pageY;
	
	// 获取div元素的位置和尺寸
	var divX = $(this).offset().left;
	var divY = $(this).offset().top;
	var divWidth = $(this).width();
	
	// 计算鼠标点击距离的宽度
	var distance = Math.round(mouseX - divX + scrollLeft, 4);
	
	// 输出距离
	$("#timeAxisMove").css('margin-left', distance + 'px')
});

for (let i = 0; i < tool_boxs.length; i++) {
	$(tool_spans[i]).click(() => {
		console.log(i)
		tools_swith(i)
	})
}

$(window).resize(function() {
	// 获取浏览器窗口大小
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	// 更新结果
	console.log('浏览器窗口大小：' + windowWidth + ' x ' + windowHeight);

	TATArea_width = $('.nodeTxts').width()
	TATArea_overflowX = $('.timeAxis_area').width()


});



// 鼠标拖动时间轴节点效果
$('.timeAxis_area').mousedown(function(event) {
	
	$('.timeAxis_area').on('mousemove', mousemove_for_timeAxisMark);
	// 鼠标释放事件
	$('.timeAxis_area').mouseup(function() {
		// 移除鼠标移动事件
		$('.timeAxis_area').off('mousemove', mousemove_for_timeAxisMark);
	});

});

function mousemove_for_timeAxisMark(event) {
	// 获取鼠标点击的坐标
	var mouseX = event.pageX;
	var mouseY = event.pageY;

	// 获取div元素的位置和尺寸
	var divX = $(this).offset().left;
	var divY = $(this).offset().top;
	var divWidth = $(this).width();

	// 计算鼠标点击距离的宽度
	var distance = Math.round(mouseX - divX + scrollLeft - 5, 4);

	// 输出距离
	$("#timeAxisMark").css('margin-left', distance + 'px')
	
	console.log("时间轴指针： " + distance)
}

function mousemove_for_timeAxisMove(event) {
	// 获取鼠标点击的坐标
	var mouseX = event.pageX;
	var mouseY = event.pageY;
	
	// 获取div元素的位置和尺寸
	var divX = $(this).offset().left;
	var divY = $(this).offset().top;
	var divWidth = $(this).width();
	
	// 计算鼠标点击距离的宽度
	var distance = Math.round(mouseX - divX + scrollLeft, 4);
	
	// 输出距离
	$("#timeAxisMove").css('margin-left', distance + 'px')
}