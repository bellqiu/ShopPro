<%@ include file="../include.jsp"%>
<div id="container">
	<button class="button_orange left" type="button"
		onclick="location.href='http://www.milanoo.com/'">Continue
		Shopping</button>
	<div id="right_column">
		<p id="order_title">Let me pay it now!</p>
		<div id="check_box">
			<p>
				TOTAL: <span><c:out
						value="${pageForm.pageProperties.orderDetail.totalPrice}" />
				</span>
			</p>

			<input type="button" value="PAY"
				onclick="javascript:window.location.href='pay.do'">

		</div>
		<div id="safe_box">
			<ul class="bankList">
				<li class=""><a target="_blank" 
					href="#"
					> <img val="bank1" class="bankIcon"
									src="../../css/bank1.jpg"
									>
				</a><input type="radio" ></li>
				<li class=""><a target="_blank" 
					href="#"
					> <img val="bank1" class="bankIcon"
									src="../../css/bank1.jpg"
									>
				</a><input type="radio" ></li>
			</ul>
		</div>
	</div>
	<div id="left_column">
		<form action="http://www.milanoo.com/shop/Cart.html" method="post"
			id="cart_form">
			<input name="act" id="act" type="hidden" value="edit">
			<div class="cart_box">
				<p class="cart_title">
					<strong>Shopping Cart</strong>
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
						<c:forEach items="${pageForm.pageProperties.orderDetail.items}"
							var="item" varStatus="itemIdx" step="1">
							<tr>
								<td><a
									href="${item.product.productUrl}?itemIndex=${itemIdx.index}"
									target="_blank"> <c:forEach items="${item.product.images}"
											var="image" varStatus="idx" step="1">
											<c:if test="${idx.index eq 0}">
												<img val="${image.iconUrl}" src="${image.iconUrl}"
													class="left MR10">
								</a> <span> <a
										href="${item.product.productUrl}?itemIndex=${itemIdx.index}"
										target="_blank"><strong>${item.product.title}</strong> </a>
								</span> </c:if>
						</c:forEach>
						</td>
						<td class="center red"><c:out value="${item.product.price}" />
						</td>
						<td class="center"><input name="ProductsId[2]" type="hidden"
							value="119012"> <input name="listid[]" type="hidden"
							value="2"> <c:out value="${item.quantity}" /></td>
						<td class="center red"><c:out value="${item.finalPrice}" /><br>
						</td>
						</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</form>

	</div>
</div>