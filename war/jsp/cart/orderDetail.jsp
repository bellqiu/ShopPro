<%@ include file="../include.jsp" %>
<%@page import="com.spshop.utils.AllConstants"%>
<div id="container">
	<div id="right_column">
		<p id="order_title">Total Price</p>
		<div id="check_box">
			<p>
				TOTAL: <span><c:out value="${defaultOrder.totalPrice}" /></span>
			</p>
		</div>
		<div id="safe_box">
		<%-- 
			<p id="descript">Security of shopping on Milanoo is guaranteed!</p>
			<p>
				<a href="javascript:void(0);" target="_blank"><img
				src="#">
					src="http://www.mlo.me/image/default/shoppingOrder/PaypalVerify.gif">
					height="60">
				</a> <a href="javascript:void(0);" target="_blank"><img
					src="../../css/vers.jpg">
				</a>
			</p>
			--%>
		</div>
	</div>
	<div id="left_column">
			<input name="act" id="act" type="hidden" value="edit">
			<div class="cart_box">
				<p class="cart_title">
					<strong>Order: ${defaultOrder.id }</strong>
				</p>
				<table id="shopping_list" cellspacing="0">
					<thead>
						<tr id="shopping_list_title">
							<th id="title_first">items</th>
							<th>Item Price</th>
							<th>Qty</th>
							<th>Price</th>
							<th></th>
						</tr>

					</thead>
					<tbody>
					<c:forEach items="${defaultOrder.items}" var="item" >
						<tr>
						<c:forEach items="${item.product.images}" var="image" end="0">
							<td valign="top">
								<div style="float: left;">
								<input type="hidden" name="itemName" value="${item.name }">
								<a href="/${item.product.name}"
									target="_blank">
									<img src="${image.iconUrl}"
										class="left MR10">
										</a>
								</div>
								<div style="float: left;margin-left: 10px;width: 300px">
									<span>
										<a href="/${item.product.name}" 
											target="_blank"><strong>${item.product.title}</strong>
										</a>
									</span>
									<c:forEach items="${item.userOptions}" var="opt">
										<c:if test="${opt.name eq 'Color' }">
											<div style="padding: 3px">
												<span style="border-color:${opt.value};display:inline-block;border-style: solid;border-width: 9px;" class="select_daffodil"></span>
											</div>
										</c:if>
									</c:forEach>
								</div>
							</td>
						</c:forEach>
							<td class="center red"><c:out value="${item.finalPrice}"/></td>
							<td class="center">
								<span>${item.quantity}</span>
							</td>
							<td class="center red">
								<a class="link_remove showCartOptions">Show Detail</a><br>
								
								<div style="position: absolute;" class="cartOptionsDashboard">
									<c:forEach items="${item.userOptions}" var="opt">
										<div class="cartOptionsDashboard_Content"> 
											<c:choose>
											<c:when test="${opt.name eq 'Color' }">
												<span>${opt.name } :</span>
												<span style="border-color:${opt.value};display:inline-block;border-style: solid;border-width: 9px;" class="select_daffodil"></span>
											</c:when>
											<c:otherwise>
												<span>${opt.name } :</span>
												<span>${opt.value}</span>
											</c:otherwise>
											</c:choose>
										</div>
									</c:forEach>
								</div>
								<c:out value="${item.itemTotalPrice}"/>
							</td>
						</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
	</div>
</div>