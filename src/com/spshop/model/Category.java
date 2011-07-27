package com.spshop.model;

import java.util.ArrayList;
import java.util.List;

public class Category  extends Component{

	/**
	 * 
	 */
	private static final long serialVersionUID = -4754872499051739634L;
	
	private String displayName;
	private Image icon;
	
	private List<Category> subCategories = new ArrayList<Category>();
	private Category parent;
	
	public Category() {
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

	public Image getIcon() {
		return icon;
	}

	public void setIcon(Image icon) {
		this.icon = icon;
	}

	public void setParent(Category parent) {
		this.parent = parent;
	}

	public Category getParent() {
		return parent;
	}

	/**
	 * @autogenerated by CodeHaggis (http://sourceforge.net/projects/haggis)
	 * clone
	 * @return Object
	 */
	public Category clone() {
		Category obj = null;
		obj = new Category();
		if (this.displayName != null) {
			/* Does not have a clone() method */
			obj.displayName = this.displayName;
		}
		if (this.icon != null) {
			obj.icon = (Image) this.icon.clone();
		}
		if (this.subCategories != null) {
			/* Does not have a clone() method */
			obj.subCategories = this.subCategories;
		}
		if (this.parent != null) {
			obj.parent = (Category) this.parent.clone();
		}
		return obj;
	}

}
