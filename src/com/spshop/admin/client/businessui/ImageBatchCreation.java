package com.spshop.admin.client.businessui;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FileUpload;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.FormPanel.SubmitCompleteEvent;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.TabLayoutPanel;
import com.spshop.admin.client.PopWindow;

public class ImageBatchCreation extends Composite {

	private static ImageBatchCreationUiBinder uiBinder = GWT
			.create(ImageBatchCreationUiBinder.class);

	@UiField
	FileUpload imageZipFile;
	@UiField
	FormPanel formPanel;
	@UiField
	TabLayoutPanel tab;
	@UiField
	Button submit;
	@UiField
	FlowPanel small;

	interface ImageBatchCreationUiBinder extends
			UiBinder<TabLayoutPanel, ImageBatchCreation> {
	}

	public ImageBatchCreation() {
		initWidget(uiBinder.createAndBindUi(this));
		formPanel.setEncoding(FormPanel.ENCODING_MULTIPART);
	}

	@UiHandler("formPanel")
	void onFormPanelSubmitComplete(SubmitCompleteEvent event) {
		final ImageBatchCreation self = this;
		String rs = event.getResults();
		PopWindow window = new PopWindow();
		if ("".equals(rs)) {
			window.setText("Congratulation");
			window.setContent(new HTML("Upload Success"));
			window.setGlassEnabled(true);
			window.center();
		} else {
			window.setText("Error");
			window.setContent(new HTML(rs));
			window.setGlassEnabled(true);
			window.center();
		}
	}

	@UiHandler("submit")
	void onSubmitClick(ClickEvent event) {
		formPanel.submit();
	}

}