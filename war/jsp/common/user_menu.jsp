<%@page import="com.spshop.utils.AllConstants"%>
<%@ include file="../include.jsp"%>
<div class="user_menu" id="user_menu">
	<ul>
		<li>Help
			<div
				style="width: 150px; display: none; cursor: default; padding-top: 10px;"
				class="user_menu_hidd currency ">
				<!-- <a
					href="#"
					rel="nofollow" title="Submit a question">Submit a question </a> --> <a
					href="http://www.honeybuy.com/c/Help-Center"
					rel="nofollow" title="Help Center">Help Center</a>
			</div>
		</li>
		<li>
			<a href="/orders">Order</a>
		</li>
		<script type="text/javascript">
		if(""!="${pageForm.pageProperties.loginError}"){
			alert("Wrong User ID or Password!");
		}
		</script>
		<c:if test="${sessionScope.userInfo eq null}">
			<li id="base_unlogin_li" class="">Login
				<div style="width: 200px; cursor: default; display: none;"
					class="user_menu_hidd">
					<form method="post" action="/login">
						<div class="border_bot indexlogin">
							<dl>
								<dd>
									Username<br> <input type="text" autocomplete="off"
										name="loginEmail" id="loginEmail" class="loginuserpass">
								</dd>
								<dd>
									Password<br> <input type="password"
										name="loginPassword" class="loginuserpass">
								</dd>
								<dd class="Question_mark">
									Forgot your password?<br> <a
										href="recoveryPassword.jsp"
										class="underline" rel="nofollow">Click here</a>
								</dd>
								<dd>
									<input type="hidden" name="<%=AllConstants.ACTION %>" value="<%=AllConstants.LOGIN_ACTION %>">
									<input type="submit" value="Login"
										class="button_01"><span id="warn_login_span"></span>
								</dd>
							</dl>
						</div>
					</form>
					<div class="indexlogin">
						<p class="lineheight15 font_size11">Create account for
							benefits like faster checkout to make shopping honeybuy.com even
							easier.</p>
						<div class="hei5"></div>
						<input type="button" value="CREATE AN ACCOUNT" class="button_01"
							onclick="window.location.href='/createAccount';">
					</div>
				</div>
			</li>
		</c:if>
		<c:if test="${sessionScope.userInfo != null}">
			<li id="hide_login_li">
				<span id="hide_login_span">
					${sessionScope.userInfo.email}
				</span>.
				(<a href="/login?<%=AllConstants.ACTION %>=<%=AllConstants.LOGOUT_ACTION %>" title="Sign out">Sign out</a>)
				<div style="width: 100%; display: none; cursor: default;"
					class="user_menu_hidd">
					<div class="indexlogin">
						<dl>
							<dd class="dashborder">
								<a href="/orders" title="View Orders">View Orders</a>
							</dd>
							<dd class="dashborder">
								<a href="/editProfile" rel="nofollow" title="Account Settings">Account Settings</a>
							</dd>
							<!-- 
							<dd class="dashborder">
								<a href="#" rel="nofollow" title="My Favorites">My Favorites</a>
							</dd> 
							<dd class="dashborder">
								<a href="#" rel="nofollow" title="Manage Address Book">Manage Address Book</a>
							</dd>-->
						</dl>
					</div>
				</div>
			</li>
		</c:if>
	</ul>
</div>
