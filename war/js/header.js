//���Բ˵�
jq('#dif_language').hover(function(){
	jq('#dif1').hide();
	jq('#dif2').show();
},function(){
	jq('#dif2').hide();
	jq('#dif1').show();
});


//�������������˵�,��¼�����������ң�������һ����ʾʱ����Ҫ�������˵�(�������ﳵ)��������
var $oldusermenuli='';
jq('#user_menu').children('ul').children('li:not([nosel])').mouseover(
	function(){
		var el=jq(this);
		el.children('.user_menu_hidd').hideTime('stop').hideTime(150,['show',[0,function(){
			el.addClass('current');
			if($oldusermenuli!='' && $oldusermenuli[0]!=el[0]){$oldusermenuli.removeClass('current').children('.user_menu_hidd').hideTime('stop').hide();}
			if(jq('#universalCart').is(':visible')){
				jq('#universalCart').hideTime('stop').hide();
			}
			$oldusermenuli=el;
		}]]);
	}).mouseout(function(){
		jq(this).children('.user_menu_hidd').hideTime('stop').hideTime(150,['hide',[0,function(){jq(this).parent().removeClass('current');$oldusermenuli='';}]]);
	}
);

// ** Pop function
var js_popup_timer = null;

jq('.js_popup').hover(
	function() {
		clearTimeout( js_popup_timer );
		
		var poper = jq( '#' + jq( this ).attr( 'rel' ) );
		
		if( poper.is( ':hidden' ) ) {
			poper.fadeIn( 200 );
		}
	},
	function() {
		var is_onpop = false, poper = jq( '#' + jq( this ).attr( 'rel' ) );
		
		// If mouseover the poper element
		poper.hover(
			function() { clearTimeout( js_popup_timer ); is_onpop = true; },
			function() {
				clearTimeout( js_popup_timer ); 
				
				js_popup_timer = setTimeout( function() {
					poper.fadeOut( 200, function() { js_popup_timer = null; } );
				}, 400 );
			}
		);
		
		js_popup_timer = setTimeout( function() {
			if( !is_onpop ) poper.fadeOut( 200, function() { js_popup_timer = null; } );
		}, 400 );
		
	}
);
// ** END pop function

//�����ͷ���Ա������ʾ
jq('#marqueebox1').w_roll({way:1,speed:50});
//�������Զ�ѡ��
jq('#textfield').w_nullInputState(head_SearchKeywordsNo.htmlToStr());
//jq(function(){jq('#textfield').w_autoComplete({url:'/index.php?action=ajax&menu=searchkeyword',nodeclick:function(a){jq('#formss').submit();},waittime:300});});
//�����ύ�жϹ���
jq('#textfield').next().bind('click',checksearch);
function checksearch(){
	if(jq.trim(jq('#textfield').val())=='' || jq('#textfield').val()==head_SearchKeywordsNo.htmlToStr()){
		return false;
	}
}
//�������������˵�
var $oldmainmenuli=jq('#main_menu').children('ul').children('li.nav_on');
//��굱ǰ���ڵĵ����˵���Ŀ
var curMenuItem;

var tChild = [];

jq('#main_menu').children('ul').children('li').hover(
	function(){
		var el = jq(this);
		var nl = el.find('a:first').text().toString();
		clearTimeout(tChild['hide'+nl]);
		tChild['show'+nl] = setTimeout(function(){
			if(!el.is('.first,.last')){
    			el.prev().addClass('nav_onprev');
    		}
			el.addClass('nav_on');
			el.children('.sub_menu').show();
		}, 200);
	},
	function(){
		var el = jq(this);
		var nl = el.find('a:first').text().toString();
		clearTimeout(tChild['show'+nl]);
		tChild['hide'+nl] = setTimeout(function(){
			el.removeClass('nav_on');
			el.prev().removeClass('nav_onprev');
			el.children('.sub_menu').hide();
		}, 200);
	}
);
/*jq('#main_menu').children('ul').children('li').hover(
	function(){
		var el=jq(this);
		curMenuItem=el;
		var dateO=new Date();
		el.data('timingStart',dateO.getSeconds()*1000+dateO.getMilliseconds());
		setTimeout(function(){//��ʱ150
		    var dateO=new Date(); 
		    var hoverDuration = dateO.getSeconds()*1000+dateO.getMilliseconds()-el.data('timingStart');		    
		    if(hoverDuration<140 || curMenuItem!=el)
		    {
		        return false;
		    }
    		if(!el.is('.first,.last')){
    			el.prev().addClass('nav_onprev');
    		}
    		el.addClass('nav_on').children('.sub_menu').hideTime('stop').show();
    		if($oldmainmenuli!='' && $oldmainmenuli[0]!=el[0]){$oldmainmenuli.removeClass('nav_on').children('.sub_menu').hideTime('stop').hide();$oldmainmenuli.prev().removeClass('nav_onprev');}
    		$oldmainmenuli=el;
		},150);
	},function(){
		var el=jq(this);
		var dateO=new Date();
		el.data('timingStart',dateO.getSeconds()*1000+dateO.getMilliseconds());
		if(el.children('.sub_menu').length>0){
			el.children('.sub_menu').hideTime(350,['slideUp',[{duration:100,easing:'easeInExpo',complete:function(){el.removeClass('nav_on');$oldmainmenuli='';el.prev().removeClass('nav_onprev');}}]]);
		}else{
			$oldmainmenuli='';
			el.removeClass('nav_on');
			el.prev().removeClass('nav_onprev');
		}
	}
);*/
//�����Ʒ���˵�
if(jq('#sortMenucilck').length>0){
	var $ts_menuD=jq('#TS_menuD');
	jq('#sortMenucilck').mouseover(function(){$ts_menuD.removeClass('TS_menu_hidd');});
	$ts_menuD.hover(function(){$ts_menuD.hideTime('stop');},function(){$ts_menuD.hideTime(500,['addClass',['TS_menu_hidd']]);});
}
var $ts_menu=jq('#TS_menu');
$ts_menu.children('li').w_hoverClass({css:'acitve'})
	.hover(function(){
		jq(this).children('div').show();
	},function(){
		jq(this).children('div').hide();
	});

//���ﳵ
jq('#top_Cart').mouseover(function(){
	if(jq('#universalCart').is(':visible')){
		jq('#universalCart').hideTime('stop');
	}else{
		jq('#universalCart').hideTime('stop').hideTime(150,['show',[0,function(){
			getHeaderCart();
			if($oldusermenuli!=''){$oldusermenuli.removeClass('current').children('.user_menu_hidd').hideTime('stop').hide();$oldusermenuli='';}
		}]]);
	}
}).mouseout(function(){
	jq('#universalCart').hideTime('stop').hideTime(150,['fadeOut',[100]]);
});
function getHeaderCart(){
	jq.ajax({   
		type: "get", 
		cache:"false",  
		url: root_url+"index.php?action=ajax&menu_action=Cart_header&exit=1", 
		datatype: "html",		
		success: function(data) {
			jq("#universalCart").html(data);
		}
	}); 
}
//��Ա��¼��ajax����
function loginAjax(loginusername,loginuserpass,loginmethod,url){
	jq.ajax({
		cache:"false",
		url:url,
		type: "post", 
		data:"loginusername="+loginusername+"&loginuserpass="+loginuserpass+"&loginmethod="+loginmethod,
		success:function(data){
				if(data.substr(0,1)==1){
					jq("#base_unlogin_li").hide();
					jq("#hide_login_span").text(data.substr(1));
					jq("#hide_login_li").show();
				}else{
					jq("#warn_login_span").html("<br/><br/><font color=red>"+data.substr(1)+"</font>");
				}
		}
	});
	return false;
}
//���ﳵ��ɾ������
function headerCartDel(url){
	jq.ajax({
		cache:"false",
		url:url,
		success:function(data){
			if(data==1){
				getHeaderCart();
			}
		}
	});
}
//�����̶�����CSS3Ч��
if(!is_ie || is_ie=='9.0'){
	var isheadershadow=0;
	jq(window).scroll(headershadow);
}else{
if(is_ie=='6.0'){
	var isheadershadow=0;
	jq(window).scroll(headershadwoie6)
	}
}
function headershadwoie6(){
	if(jq(window).scrollTop()>0){
		if(isheadershadow==0){
			jq('#header_top').css({progid:"DXImageTransform.Microsoft.Shadow(color='#b7b9b6', Direction=135, Strength=3)",border:"solid 0px white",backgroundColor:"#fff"});
			isheadershadow=1;
		}
	}else{
		jq('#header_top').css({boxShadow:'none'});
		isheadershadow=0;
	}
}
function headershadow(){
	if(jq(window).scrollTop()>0){
		if(isheadershadow==0){
			jq('#header_top').css({boxShadow:'0px 0px 3px #666666'});
			isheadershadow=1;
		}
	}else{
		jq('#header_top').css({boxShadow:'none'});
		isheadershadow=0;
	}
}

//Ʒ����ĿЧ��
/*
jq('#box_brand>dd>a>span').css({left:66});
jq('#box_brand>dd>a').hover(function(){
	jq(this).children('img').stop(true).animate({left:-66},200,'easeOutExpo');
	jq(this).children('span').stop(true).animate({left:0},100,'easeOutExpo');
},function(){
	jq(this).children('img').stop(true).animate({left:0},100,'easeOutExpo');
	jq(this).children('span').stop(true).animate({left:66},200,'easeOutExpo');
});
*/
jq('#box_brand>dd').hover(function(){
	jq(this).addClass('box_brand_item');
	jq(this).children().children('img').hide();
	jq(this).children().children('span').show();
},function(){
	jq(this).removeClass('box_brand_item');
	jq(this).children().children('span').hide();
	jq(this).children().children('img').show();
});

















