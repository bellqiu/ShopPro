package com.spshop.model;

public class Configuration extends Component{
	/**
	 * 
	 */
	private static final long serialVersionUID = -6830864436623220292L;
	private String value;
	private String strType;
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public ValueType getType() {
		if(null==strType){
			return null;
		}
		return ValueType.valueOf(strType.toUpperCase());
	}
	public void setType(ValueType type) {
		this.strType = type.getValue();
	}
	public void setStrType(String strType) {
		this.strType = strType;
	}
	public String getStrType() {
		return strType;
	}
}
