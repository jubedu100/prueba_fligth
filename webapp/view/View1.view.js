sap.ui.jsview("prueba_flightprueba_flight.view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View1
	 */
	getControllerName: function() {
		return "prueba_flightprueba_flight.controller.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View1
	 */
	createContent: function(oController) {
		var oTable = new sap.ui.table.Table("tableId", {
			visibleRowCount: 5,
			editable: true,
			selectionBehavior: sap.ui.table.SelectionBehavior.Row,
			SelectionMode: sap.ui.table.SelectionMode.Single
		});
		
/*		var sEntity = "{vuelos>properties}";
		
		var properties = oTable.oMetadata._getEntityTypeByPath(sEntity);
		var oMetaModel = new sap.ui.model.json.JSONModel();
		oMetaModel.setData({
			columns:properties
		});*/
		
		

		oTable.addColumn(new sap.ui.table.Column({

			label: "ID",
			visible: true,
			template: "vuelos>Carrid"
			
		}));
		
	
		
		
		

		oTable.addColumn(new sap.ui.table.Column({

			label: "Name",
			visible: true,
			template: "vuelos>Connid"
			
		}));

		oTable.addColumn(new sap.ui.table.Column({

			label: "Description",
			visible: true,
			template: "vuelos>Fldate"
			
		}));

		oTable.bindRows("vuelos>/FLIGHTSet");


		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: [
				oTable
			]
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});