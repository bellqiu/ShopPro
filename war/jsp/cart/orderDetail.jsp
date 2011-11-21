<%@ include file="../include.jsp" %>
<%@page import="com.spshop.utils.AllConstants"%>
<div id="container">

	<form action="/orders" method="post">
		<c:if test="${(empty defaultOrder)}">
			<c:if test="${not empty sessionScope.userInfo}">
				<select name="id" style="height: 25px">
					<ss:orders var="orders" userId="${userInfo.id}">
						<c:forEach items="${orders}" var="order">
							<option value="${order.name}">${order.name}</option>
						</c:forEach>
					</ss:orders>
				</select>
			</c:if>
			<c:if test="${empty sessionScope.userInfo}">
				<input type="text" name="id" >
			</c:if>
				<button class="button_orange" type="submit"
				onclick="location.href='<%= AllConstants.HTTP_PROTOCOL %>${pageForm.site.domain}'">GO</button>
		</c:if>
	</form>
	<c:if test="${(not empty param.id)}">
		<ss:order var="order" orderId="${param.id}">
			<c:set value="${order}" var="defaultOrder"></c:set>
		</ss:order>
	</c:if>
	<c:if test="${(not empty sessionScope.userInfo)&&(empty defaultOrder)}">
		<ss:orders var="orders" userId="${sessionScope.userInfo.id}">
				<c:forEach items="${orders}" var="order" end="1">
					<c:set value="${order}" var="defaultOrder"></c:set>
				</c:forEach>
		</ss:orders>
	</c:if>
	<div id="right_column">
		<p id="order_title">Total Price</p>
		<div id="check_box">
			<p>
				TOTAL: <span><c:out value="${defaultOrder.totalPrice}" /></span>
			</p>
		</div>
		<div id="check_box">
			<p>
				Status: <span><c:out value="${defaultOrder.status}" /></span>
			</p>
		</div>
		<div id="safe_box">
		</div>
	</div>
	<div id="left_column">
			<input name="act" id="act" type="hidden" value="edit">
			<div class="cart_box">
				<p class="cart_title">
					<strong>Order: ${defaultOrder.name }</strong>
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