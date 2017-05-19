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
		var oCombobox = new sap.m.ComboBox("selectID");
		var itemTemplate = new sap.ui.core.Item({
			text: "{vuelos>Carrid}",
			key: "{vuelos>Carrid}"
		});
		oCombobox.bindItems("vuelos>/FLISet",itemTemplate);
		
		
		var oTable = new sap.ui.table.Table("tableId", {
/*			columns:[
				new sap.ui.table.Column({

			label: "ID",
			visible: true,
			template: "vuelos>Carrid"
				}),
				
				new sap.ui.table.Column({

			label: "Name",
			visible: true,
			template: "vuelos>Connid"
					
				}),
				new sap.ui.table.Column({

			label: "Description",
			visible: true,
			template: "vuelos>Fldate"
			
		})
				
				
				],*/
			visibleRowCount: 350,	
			visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Interactive,
			editable: true,
			selectionBehavior: sap.ui.table.SelectionBehavior.Row,
			SelectionMode: sap.ui.table.SelectionMode.Single
		});
		
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
		
		/*var entries = oTable.getBinding("rows");*/


		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: [
				oCombobox,
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