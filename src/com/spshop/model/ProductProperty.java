package com.spshop.model;

public class ProductProperty extends Component{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2299775829083584745L;
	private String detail;
	private Image image;
	private Product product;
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public Image getImage() {
		return image;
	}
	public void setImage(Image image) {
		this.image = image;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public Product getProduct() {
		return product;
	}

}
