var SP = new Object();

(
	function(shop,jq){
		
		function updateHTML(item,data){
			 var rs = data;
			  if(rs.itemQTY){
				  jq("#"+item+" .item_qty").val(rs.itemQTY);
			  }
			  
			  if(rs.itemAmount){
				  jq("#"+item+" .item_amount").html(rs.itemAmount);
			  }
			  
			  if(rs.subTotal){
				  jq(".order_sub_total").html(rs.subTotal);
			  }
			  
			  if(rs.coupon){
				  jq(".order_coupon_total").html(rs.coupon);
			  }
			  
			  if(rs.grandTotal){
				  jq(".order_grand_total").html(rs.grandTotal);
			  }
			  
			  if(rs.couponFeedbackSuc){
				  jq("#coupon_code_noti").html(rs.couponFeedbackSuc);
			  }
			  
			  
			  if(rs.couponFeedbackErr){
				  jq("#coupon_code_noti").html(rs.couponFeedbackErr);
			  }
			  
			  if(rs.itemID){
				  jq("#"+rs.itemID).hide("normal");
				  jq("#"+rs.itemID).remove();
			  }
			  
			  if(rs.itemCount && "0"!=rs.itemCount){
				  jq("span.items_num").html("(" + rs.itemCount+")");
			  }else{
				  window.location=window.location.toString();
			  }
		}
		
		shop.increaseCartItem = function(item){
			if(item){
				jq.ajax({
					 url: "/uc/updateShoppingCart?action=increaseItemToCart&item="+item+"&v="+ Math.random(),
					 dataType:"json",
					  success: function(data){
						  updateHTML(item,data);
					  }
				});
			}
		};
		
		
		shop.decreaseCartItem = function(item){
			if(item){
				jq.ajax({
					 url: "/uc/updateShoppingCart?action=decreaseItemToCart&item="+item+"&v="+ Math.random(),
					 dataType:"json",
					  success: function(data){
						  updateHTML(item,data);
					  }
				});
			}
		};
		
		shop.removeCartItem = function(item){
			if(item){
				jq.ajax({
					 url: "/uc/updateShoppingCart?action=removeItemToCart&item="+item+"&v="+ Math.random(),
					 dataType:"json",
					  success: function(data){
						  updateHTML(item,data);
					  }
				});
			}
		};
		

		shop.applyCoupon = function(item){
			if(item){
				jq.ajax({
					 url: "/uc/updateShoppingCart?action=applyCoupon&couponID="+item+"&v="+ Math.random(),
					 dataType:"json",
					  success: function(data){
						  jq("#submit_coupon").ajLoad();
						  updateHTML(item,data);
						  jq("#submit_coupon").ajUnload();
					  }
				});
			}
		};
	}		

)(SP,jq);


(function(jq){
		jq.fn.ajLoad = function(){
			var el = jq(this);
			if(el && el.length > 0 ){
				el.next(".ajax_load").remove();
				el.after("<img src='/style/image/ajax_loader.gif' class='ajax_load'>");
			}
		};
	}
)(jq);

(
	function(jq){
		jq.fn.ajUnload = function(){
			var el = jq(this);
			if(el && el.length > 0 ){
				el.next(".ajax_load").remove();
			}
		};
	}
)(jq);

jq("#header_top").ready(function() {
	jq(".user_menu>ul>li").mouseenter(function(){
		jq(this).removeClass("current");
		jq(this).addClass("current");
		jq(this).children(".user_menu_hidd").show();
	});
	
	jq(".user_menu>ul>li").mouseleave(function(){
		jq(this).removeClass("current");
		jq(this).children(".user_menu_hidd").hide();
	});
});

jq("#main_menu").ready(function() {
	jq(".main_menu>ul>li").each(function(index,data){
		var left = jq(data).offset().left;
		var width = jq(data).width();
		var leftMargin = jq("#main_menu").offset().left;
		if((left - leftMargin)  > 516){
			jq(data).children(".sub_menu").offset({ top: 40, left: - (516 - width + 90) });
			
		}else if((left - leftMargin)  > 456){
			jq(data).children(".sub_menu").offset({ top: 40, left: - (456 - width + 90) });
		}
		
	});
	
	jq(".main_menu>ul>li").mouseenter(function(){
		jq(this).removeClass("nav_on");
		jq(this).addClass("nav_on");
		
		jq(this).children(".sub_menu").show();
		
	});
	
	jq(".main_menu>ul>li").mouseleave(function(){
		jq(this).removeClass("nav_on");
		jq(this).children(".sub_menu").hide();
	});
});



jq("#main_box").ready(function() {
	jq(this).find("input,select,textarea").each(function(idx,el){
		var target = jq(el);
		target.focus(function(){
			var name = target.attr("name");
			if(name){
				jq("#"+name+"_noti").html("");
			}
		});
		
		target.blur(function(){
			var name = target.attr("name");
			var validation = target.attr("validation");
			
			var value = target.val();
			
			if(value){
				value = (value + "").trim();
				 target.val(value);
			}
			
			if(name && validation){
				
				if(!value || value.length <1){
					jq("#"+name+"_noti").html("Missing required field");
				}
				
				if(!value || value.length > 200){
					jq("#"+name+"_noti").html("Missing required field");
				}
				
				if("is_email_exist" == validation){
					if(!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(value)){
						jq("#"+name+"_noti").html("Invalid email");
					}else{
						jq.ajax({
							 url: "/uc/checkUserEmail?RegEmail="+value+"&v="+ Math.random(),
							 dataType:"text",
							  success: function(data){
								  if("1"==data){
									  jq("#"+name+"_noti").html("Account exist");
								  }
							  }
						});
					}
				}
			}
		});
	});
	
	
	jq("#billingAddress_check_box").click(function(){
		var value = jq(this).attr('checked');
		if("checked" == value){
			jq("#billingAddress_content").hide();
			jq("#billingAddress_content_2").show();
		}else{
			jq("#billingAddress_content, #billingAddress_content_2").show();
			jq("#billingAddress_content_2").hide();
		}
	});
});







