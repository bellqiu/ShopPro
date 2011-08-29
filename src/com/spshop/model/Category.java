package com.spshop.model;

import java.util.ArrayList;
import java.util.List;

public class Category  extends Component{

	/**
	 * 
	 */
	private static final long serialVersionUID = -4754872499051739634L;
	
	private String displayName;
	private Image specialOfferImage;
	private String url;
	private String relatedKeyword;
	private String pageTitle;
	private boolean specialOffer;
	private String marketContent;
	private boolean enable;
	private boolean displayMarketOnly;
	private String description;
	private int index;
	
	private List<Category> subCategories = new ArrayList<Category>();
	private Category parent;
	
	public Category() {
	}
	
	public Category(Category category) {
		super(category);
	}


	public List<Category> getSubCategories() {
		return subCategories;
	}

	public void setSubCategories(List<Category> subCategories) {
		this.subCategories = subCategories;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}


	public void setParent(Category parent) {
		this.parent = parent;
	}

	public Category getParent() {
		return parent;
	}
	
	public void setUrl(String url) {
		this.url = url;
	}

	public String getUrl() {
		return url;
	}

	public void setRelatedKeyword(String relatedKeyword) {
		this.relatedKeyword = relatedKeyword;
	}

	public String getRelatedKeyword() {
		return relatedKeyword;
	}

	public void setPageTitle(String pageTitle) {
		this.pageTitle = pageTitle;
	}

	public String getPageTitle() {
		return pageTitle;
	}


	public void setMarketContent(String marketContent) {
		this.marketContent = marketContent;
	}

	public String getMarketContent() {
		return marketContent;
	}

	public void setSpecialOfferImage(Image specialOfferImage) {
		this.specialOfferImage = specialOfferImage;
	}

	public Image getSpecialOfferImage() {
		return specialOfferImage;
	}

	public void setSpecialOffer(boolean specialOffer) {
		this.specialOffer = specialOffer;
	}

	public boolean isSpecialOffer() {
		return specialOffer;
	}

	/**
	 * @autogenerated by CodeHaggis (http://sourceforge.net/projects/haggis)
	 * clone
	 * @return Object
	 */
	public Category clone(boolean withParent) {
		Category obj = null;
		obj = new Category(this);
		if (this.displayName != null) {
			/* Does not have a clone() method */
			obj.displayName = this.displayName;
		}
		if (this.specialOfferImage != null) {
			obj.specialOfferImage = (Image) this.specialOfferImage.clone();
		}
		if (this.url != null) {
			/* Does not have a clone() method */
			obj.url = this.url;
		}
		if (this.relatedKeyword != null) {
			/* Does not have a clone() method */
			obj.relatedKeyword = this.relatedKeyword;
		}
		if (this.pageTitle != null) {
			/* Does not have a clone() method */
			obj.pageTitle = this.pageTitle;
		}
		
		if (this.description != null) {
			/* Does not have a clone() method */
			obj.description = this.description;
		}
		
		obj.specialOffer = this.specialOffer;
		obj.displayMarketOnly = this.displayMarketOnly;
		obj.enable = this.enable;
		obj.index = this.index;
		if (this.marketContent != null) {
			obj.marketContent=this.marketContent;
		}
		if (this.subCategories != null) {
			/* Does not have a clone() method */
			obj.subCategories = new ArrayList<Category>();
			if(null!=this.subCategories){
				for (Category c : this.subCategories) {
					Category s = c.clone(false);
					s.setParent(obj);
					obj.subCategories.add(s);
				}
			}
		}
		if (this.parent != null) {
			if (withParent&&this.parent != null) {
				obj.parent = (Category) this.parent.clone();
			}
		}
		return obj;
	}

	public Category clone() {
		return clone(true);
	}

	public boolean isEnable() {
		return enable;
	}

	public void setEnable(boolean enable) {
		this.enable = enable;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public void setDisplayMarketOnly(boolean displayMarketOnly) {
		this.displayMarketOnly = displayMarketOnly;
	}

	public boolean isDisplayMarketOnly() {
		return displayMarketOnly;
	}

}
