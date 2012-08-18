<%@page import="com.spshop.utils.Constants"%>
<%@ include file="../include.jsp" %>
<div id="contain_change">
	<div class="line1"></div>
	<div class="hei5"></div>

	<div class="hei10"></div>
	<div class="B_Categories Gallery_pic" style="background: none repeat scroll 0 0 #FBF9F7; border: 1px solid #D1D1D1;">
		<ul>
		<c:forEach items="${pageForm.pageProperties.subCategoryProducts }" var="subProducts">
		<span class="red font_size16" style="margin-bottom:5px; padding-top:8px; display:inline-block; width:100%; background:url('/css/Promotions_tab.gif') repeat-x scroll 0 0 transparent; height:39px;text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);">
			<a href="<%=Constants.HTTP_PROTOCOL %>${pageForm.site.domain}/<%=Constants.CATEGORY_URL %>/${subProducts.value[0].categories[0].name}" style="font-weight:bold; margin-left: 15px;">${subProducts.key}</a>
		</span>
		<div>
		<ss:cal imgSize="LARGE_SIZE" prodList="${subProducts.value}" width="225" paddingSize="paddingSize" heightVal="heightValue">
		<c:forEach items="${subProducts.value}" var="product">
			<li class="goods_list box_shadow">
				<div class="goods_picture" style="height: ${heightValue}px;">
						<a onclick="redirect('<%=Constants.HTTP_PROTOCOL %>${pageForm.site.domain}/${product.name}')"
							href="<%=Constants.HTTP_PROTOCOL %>${pageForm.site.domain}/${product.name}" title="">
							<c:if test='${product.images[0].strSizeType eq "PRODUCT_SQUARE"}'>
								<img style="padding-top:${paddingSize}px;"
								alt="${product.title}"
								src="<%=Constants.HTTP_PROTOCOL %>${pageForm.site.domain}${product.images[0].largerUrl}"> 
							</c:if>
							<c:if test='${product.images[0].strSizeType eq "PRODUCT_NORMAL"}'>
								<img
								alt="${product.title}"
								src="<%=Constants.HTTP_PROTOCOL %>${pageForm.site.domain}${product.images[0].largerUrl}"> 
							</c:if>
						</a>
				</div> 
				<strong class="goods_name"> 
					<a	title="${product.title}"
						href="<%=Constants.HTTP_PROTOCOL %>${pageForm.site.domain}/${product.name}">
						${product.title}
					</a>
				</strong>
				<div class="Reference_Price">
				<div style="bottom: 5px; color: red; float: left; text-align: left;">
						<c:if test="${product.actualPrice ne product.price }">
						<p style="color: #FFBE41; font-size: 18px; font-weight: bold; margin-bottom: -5px;">Save</p>
						<p style="color: #E50001; font-size: 28px;">
							<fmt:formatNumber type="number" value="${(1 - product.actualPrice / product.price) * 100}" maxFractionDigits="0"/>%
						</p>
						</c:if>
				</div>
					${currency }<del>
					<fmt:formatNumber value="${product.price * currencies[currency]}" currencyCode="${currency }" maxFractionDigits="2"></fmt:formatNumber>
					</del> 
					<span class="red fontbold"><fmt:formatNumber value="${product.actualPrice * currencies[currency]}" currencyCode="${currency }" maxFractionDigits="2"></fmt:formatNumber></span> 
				</div>
				<div class="list_stars">
					<span class="Reference_Price"> 
						<!-- TODO Rate -->
					</span>
				</div>
			</li>
		</c:forEach>
		</ss:cal>
		</div>
		<div class="hei10"></div>
		</c:forEach>
		<ss:cal imgSize="LARGE_SIZE" prodList="${pageForm.pageProperties.restProducts}" width="225" paddingSize="paddingSize" heightVal="heightValue">
		<c:forEach items="${pageForm.pageProperties.restProducts}" var="product">
			<li class="goods_list box_shadow">
				<div class="goods_picture" style="height: ${heightValue}px;">
						<a onclick="redirect('<%=Constants.HTTP_PROTOCOL %>${pageForm.site.domain}/${product.name}')"
							href="<%=Constants.HTTP_PROTOCOL %>${pageForm.site.domain}/${product.name}" title="">
							<c:if test='${product.images[0].strSizeType eq "PRODUCT_SQUARE"}'>
								<img style="padding-top:${paddingSize}px;"
								alt="${product.title}"
								src="<%=Constants.HTTP_PROTOCOL %>${pageForm.site.domain}${product.images[0].largerUrl}"> 
							</c:if>
							<c:if test='${product.images[0].strSizeType eq "PRODUCT_NORMAL"}'>
								<img
								alt="${product.title}"
								src="<%=Constants.HTTP_PROTOCOL %>${pageForm.site.domain}${product.images[0].largerUrl}"> 
							</c:if>
						</a>
				</div> 
				<strong class="goods_name"> 
					<a	title="${product.title}"
						href="<%=Constants.HTTP_PROTOCOL %>${pageForm.site.domain}/${product.name}">
						${product.title}
					</a>
				</strong>
				<span class="Reference_Price"> 
					${currency }<del>
					<fmt:formatNumber value="${product.price * currencies[currency]}" currencyCode="${currency }" maxFractionDigits="2"></fmt:formatNumber>
					</del> 
					<span class="red fontbold"><fmt:formatNumber value="${product.actualPrice * currencies[currency]}" currencyCode="${currency }" maxFractionDigits="2"></fmt:formatNumber></span> 
				</span>
				<div class="list_stars">
					<span class="Reference_Price"> 
						<!-- TODO Rate -->
					</span>
				</div>
			</li>
		</c:forEach>
		</ss:cal>
		</ul>
		<div class="hei20"></div>
	</div>
	
	<div class="line1"></div>
</div>