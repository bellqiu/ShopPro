package com.spshop.admin.client.businessui;

import com.google.gwt.core.client.GWT;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CaptionPanel;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.datepicker.client.DateBox;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.spshop.admin.client.AdminWorkspace;
import com.spshop.admin.client.PopWindow;
import com.spshop.model.Component;
import com.spshop.model.QueryCriteria;

public class QueryCondition extends Composite {
	
	private ComponentQuery  componentQuery;
	private Class type;

	private static QueryConditionUiBinder uiBinder = GWT
			.create(QueryConditionUiBinder.class);
	
	@UiField
	CaptionPanel caption;
	
	@UiField TextBox nameBox;
	@UiField DateBox start;
	@UiField DateBox end;
	@UiField Button search;

	interface QueryConditionUiBinder extends UiBinder<Widget, QueryCondition> {
	}

	public QueryCondition() {
		initWidget(uiBinder.createAndBindUi(this));
		DateTimeFormat dateFormat = DateTimeFormat.getFormat("yyyy/MM/dd");
	    start.setFormat(new DateBox.DefaultFormat(dateFormat));
	    end.setFormat(new DateBox.DefaultFormat(dateFormat));
	}

	public void setComponentQuery(ComponentQuery componentQuery) {
		this.componentQuery = componentQuery;
	}

	public ComponentQuery getComponentQuery() {
		return componentQuery;
	}
	
	public void setCaption(String caption){
		this.caption.setCaptionText(caption);
	}
	
	@UiHandler("search")
	void onSearchClick(ClickEvent event) {
		QueryCriteria criteria = new QueryCriteria();
		criteria.setType(type.getName());
		criteria.setStart(start.getValue());
		criteria.setEnd(end.getValue());
		criteria.setStartIndex(1);
		componentQuery.setQueryCriteria(criteria);
		componentQuery.search();
	}

	public void setType(Class type) {
		this.type = type;
	}

	public Class getType() {
		return type;
	}
	
}