package com.spshop;

import java.util.Date;

import com.spshop.model.CutOff;
import com.spshop.service.factory.ServiceFactory;
import com.spshop.service.intf.CutOffService;

public class Testor{
	public static void main(String[] args) {
		//FeedBackService service = ServiceFactory.getService(FeedBackService.class);
		//FeedBack feedBack = new FeedBack();
		//feedBack.setContent("asdasdasd");
		//service.save(feedBack);
//		AddressBookService addressBookService = ServiceFactory.getService(AddressBookService.class);
//		AddressBook addressBook = new AddressBook();
//		addressBook.setAddress("Tom's address");
//		addressBookService.save(addressBook);
//		CategoryService categoryService = ServiceFactory.getService(CategoryService.class);
//		Category category = new Category();
//		categoryService.save(category);
//		CommentService commentService = ServiceFactory.getService(CommentService.class);
//		Comment comment = new Comment();
//		commentService.save(comment);
//		ConfigurationService configurationService = ServiceFactory.getService(ConfigurationService.class);
//		Configuration configuration = new Configuration();
//		configurationService.save(configuration);
//		CountryService countryService = ServiceFactory.getService(CountryService.class);
//		Country country = new Country();
//		countryService.save(country);
//		CouponService couponService = ServiceFactory.getService(CouponService.class);
//		Coupon coupon = new Coupon();
//		couponService.save(coupon);
		CutOffService cutOffService = ServiceFactory.getService(CutOffService.class);
		CutOff cutOff = new CutOff();
		cutOff.setCreateDate(new Date());
		cutOff.setName("tomtest");
		cutOff.setUpdateDate(new Date());
		cutOffService.save(cutOff);
		/*DeliverService deliverService = ServiceFactory.getService(DeliverService.class);
		Deliver deliver = new Deliver();
		deliverService.save(deliver);
		ImageService imageService = ServiceFactory.getService(ImageService.class);
		Image image = new Image();
		imageService.save(image);
		MarkPlaceService markPlaceService = ServiceFactory.getService(MarkPlaceService.class);
		MarkPlace markPlace = new MarkPlace();
		markPlaceService.save(markPlace);
		NewsletterService newsletterService = ServiceFactory.getService(NewsletterService.class);
		Newsletter newsletter = new Newsletter();
		newsletterService.save(newsletter);
		OrderService orderService = ServiceFactory.getService(OrderService.class);
		Order order = new Order();
		orderService.save(order);
		OrderItemService orderItemService = ServiceFactory.getService(OrderItemService.class);
		OrderItem orderItem = new OrderItem();
		orderItemService.save(orderItem);
		OrderStatusService orderStatusService = ServiceFactory.getService(OrderStatusService.class);
		OrderStatus orderStatus = new OrderStatus();
		orderStatusService.save(orderStatus);
		ProductService productService = ServiceFactory.getService(ProductService.class);
		Product product = new Product();
		productService.save(product);
		ProductOptionService productOptionService = ServiceFactory.getService(ProductOptionService.class);
		ProductOption productOption = new ProductOption();
		productOptionService.save(productOption);
		ProductOptionItemService productOptionItemService = ServiceFactory.getService(ProductOptionItemService.class);
		ProductOptionItem productOptionItem = new ProductOptionItem();
		productOptionItemService.save(productOptionItem);
		ProductPropertyService productpropertyService = ServiceFactory.getService(ProductPropertyService.class);
		ProductProperty productproperty = new ProductProperty();
		productpropertyService.save(productproperty);
		PromotionService promotionService = ServiceFactory.getService(PromotionService.class);
		Promotion promotion = new Promotion();
		promotionService.save(promotion);
		SearchHistoryService searchHistoryService = ServiceFactory.getService(SearchHistoryService.class);
		SearchHistory searchHistory = new SearchHistory();
		searchHistoryService.save(searchHistory);
		SiteService siteService = ServiceFactory.getService(SiteService.class);
		Site site = new Site();
		siteService.save(site);
		UserService userService = ServiceFactory.getService(UserService.class);
		User user = new User();
		userService.save(user);
		UserOptionService userOptionService = ServiceFactory.getService(UserOptionService.class);
		UserOption userOption = new UserOption();
		userOptionService.save(userOption);*/
	}
}