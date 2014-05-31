; // bootstrap init
(function($, window, document, undefined) {

	// http://coveroverflow.com/a/11381730/989439
	function mobilecheck() {
		var check = false;
		(function(a) {
			if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
				check = true
		})(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	}


//	var accordionDefaults = {
//		parentSelector: '[rel="accordion"]',
//		toggleSelector: '[data-toggle="collapse"]',
//		fallback: 'children', // [children, headers, none]
//		ns: '-collapse-',
//	}
//
//	var BSU = {
//		tooltip: function() {
//			$('body').tooltip({
//				selector: '[rel="tooltip"],[data-toggle="tooltip"]',
//				container: 'body'
//			});
//			return this;
//		},
//		popover: function() {
//			$('body').popover({
//				selector: '[data-toggle="popover"],[rel="popover"]',
//				container: 'body'
//			});
//			return this;
//		},
//		panel: function() {
//			$('.panel.panel-collapse,.panel[data-toggle="collapse"]').each(function() {
//
//				var $this = $(this),
//						$trigger = $(this).children('.panel-heading:first'),
//						$toggle = ($trigger.attr('data-target') ? $(trigger.attr('data-target')) : $trigger.next())
//
//
//				$trigger.click(function(e) {
//					e.preventDefault()
//					$toggle.stop().slideToggle(300, 'swing')
//				})
//			})
//			return this
//		},
//		accordion: function(options) {
//
//			var ops = $.extend(true, {}, accordionDefaults, options);
//
//			$(ops.parentSelector).each(function() {
//
//				var $this = $(this),
//						id = $this.attr('id'),
//						$toggles = $this.children(ops.toggleSelector) || $this.children(':even');
//
//				$toggles.each(function(i) {
//					$(this).attr({
//						'data-toggle': 'collapse',
//						'data-parent': '#' + id,
//						'data-target': '#' + id + ops.ns + i
//					})
//							.next().attr({
//						'class': 'collapse in',
//						'id': id + ops.ns + i
//					})
//				});
//			});
//			return this;
//		}
//	};
//
//	BSU
//			.tooltip()
//			.popover()
//			.panel()
//			.accordion();


	// for modal overlay
	$('body')
			.tooltip({
				selector: '[data-toggle="tooltip"],[rel="tooltip"]',
				container: 'body'
			})
			.popover({
				selector: '[data-toggle="popover"],[rel="popover"]',
				container: 'body'
			})
			.append('<div class="nh-backdrop">')



	var KEY = {
		TAB: 9,
		ENTER: 13,
		ESC: 27,
		SPACE: 32,
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40,
		SHIFT: 16,
		CTRL: 17,
		ALT: 18,
		PAGE_UP: 33,
		PAGE_DOWN: 34,
		HOME: 36,
		END: 35,
		BACKSPACE: 8,
		DELETE: 46,
		isArrow: function(k) {
			k = k.which ? k.which : k;
			switch (k) {
				case KEY.LEFT:
				case KEY.RIGHT:
				case KEY.UP:
				case KEY.DOWN:
					return true;
			}
			return false;
		},
		isControl: function(e) {
			var k = e.which;
			switch (k) {
				case KEY.SHIFT:
				case KEY.CTRL:
				case KEY.ALT:
					return true;
			}

			if (e.metaKey)
				return true;

			return false;
		},
		isFunctionKey: function(k) {
			k = k.which ? k.which : k;
			return k >= 112 && k <= 123;
		}
	}

	var TAG = {
		tag: function(tag) { // tag [,data][,options]
			var args = arguments, options;
			switch (args.length) {
				case 1:
					break;
				case 2:
					options = isObject(args[1]) ? args[1] : {text: args[1]};
					break;
				case 3:
					options = $.extend({}, args[2], (isObject(args[1]) ? args[1] : {text: args[1]}));
					break;
				case 0:
					return;
			}
			return $('<' + tag + '/>', options);
		},
		append: function($to, tag) { // $to, tag [,data][,options]
			var data = arguments[2],
					options = arguments[3]

			typeof $to == 'string' && ($to = this.tag($to)); // check if $to is not a jQuery object
			return $to.append(this.tag(tag, data, options))
		},
		appendAll: function($to, tag, dataset) { // $to, tag ,dataset [,options]
			var options = arguments[3], me = this

			typeof $to == 'string' && ($to = this.tag($to));
			$(dataset).each(function(i, data) {
				me.append($to, tag, data, options)
			});
			return $to
		},
		tableRow: function(data) { // data [,options]
			var options = arguments[1]
			return this.appendAll('tr', 'td', data, options)
		},
		tableHeaders: function(data) { // data [,options]
			var options = arguments[1],
					$row = this.appendAll('tr', 'th', data, options)
			return this.tag('thead').append($row)
		},
		table: function(headers, body) { // headers, body [,options]
			var options = arguments[2],
					me = this,
					$table = this.tag('table', options),
					$tbody = this.tag('tbody').appendTo($table)

			headers !== undefined && ($table.prepend(this.tableHeaders(headers)))
			$(body).each(function(i, row) {
				me.appendAll('tr', 'td', row).appendTo($tbody)
			})
			return $table
		},
		icon: function(i) {
			return this.tag('i', {class: 'fa fa-' + i})
		},
		option: function(text) {
			return this.tag('option', {text: text, value: text})
		},
		select: function() { // [$select] [,dataset]
			var $select, dataset, me = this

			if (arguments.length == 1) {
				$select = this.tag('select')
				dataset = arguments[0]
			} else {
				$select = $(arguments[0])
				dataset = arguments[1]
			}

			if (!$.isArray(dataset)) {
				for (var key in dataset) {
					var $group = this.tag('optgroup', {label: key})
					$(dataset[key]).each(function(i, data) {
						$group.append(me.option(data))
					})
					$group.appendTo($select)
				}
			} else {
				$(dataset).each(function(i, data) {
					me.option(data).appendTo($select)
				})
			}
			return $select
		},
		radio: function(options) { // name,inx,value,text,delim,inline
			options.delim == undefined && (options.delim = '-');
			return this.tag('label', {class: (options.inline ? 'radio-inline' : '')}).text(options.text).prepend($('<input>', {type: 'radio', name: options.name, id: options.name + options.delim + options.inx, value: options.value}))
		},
		radios: function(options) { //container, name, dataset, delim, options, inline
			var me = this

			$(options.dataset).each(function(i, e) {
				!isObject(e) && (e = {'value': e, 'text': e});
				me.radio({name: options.name, inx: i + 1, value: e.value, text: e.text, delim: options.delim, inline: options.inline}).appendTo(options.container)
			})
			return options.container
		}
	}



// This product includes color specifications and designs developed by Cynthia Brewer (http://colorbrewer.org/).
// JavaScript specs as packaged in the D3 library (d3js.org). Please see license at http://colorbrewer.org/export/LICENSE.txt

	var miscColors = {
		bloomberg: ['#A041CF', '#00C1C1', '#0B6DFF']
	}
	var colorbrewer = {
		// YlGnBu, RdPu, YlOrRd, OrRd, Blues, RdYlBu, Spectral, RdYlGn

		YlGnBu: {
			3: ["#edf8b1", "#7fcdbb", "#2c7fb8"],
			4: ["#ffffcc", "#a1dab4", "#41b6c4", "#225ea8"],
			5: ["#ffffcc", "#a1dab4", "#41b6c4", "#2c7fb8", "#253494"],
			6: ["#ffffcc", "#c7e9b4", "#7fcdbb", "#41b6c4", "#2c7fb8", "#253494"],
			7: ["#ffffcc", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#0c2c84"],
			8: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#0c2c84"],
			9: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"]
		}, RdPu: {
			3: ["#fde0dd", "#fa9fb5", "#c51b8a"],
			4: ["#feebe2", "#fbb4b9", "#f768a1", "#ae017e"],
			5: ["#feebe2", "#fbb4b9", "#f768a1", "#c51b8a", "#7a0177"],
			6: ["#feebe2", "#fcc5c0", "#fa9fb5", "#f768a1", "#c51b8a", "#7a0177"],
			7: ["#feebe2", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177"],
			8: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177"],
			9: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"]
		}, Spectral: {
			3: ["#fc8d59", "#ffffbf", "#99d594"],
			4: ["#d7191c", "#fdae61", "#abdda4", "#2b83ba"],
			5: ["#d7191c", "#fdae61", "#ffffbf", "#abdda4", "#2b83ba"],
			6: ["#d53e4f", "#fc8d59", "#fee08b", "#e6f598", "#99d594", "#3288bd"],
			7: ["#d53e4f", "#fc8d59", "#fee08b", "#ffffbf", "#e6f598", "#99d594", "#3288bd"],
			8: ["#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#e6f598", "#abdda4", "#66c2a5", "#3288bd"],
			9: ["#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd"],
			10: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
			11: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"]
		}, OrRd: {
			3: ["#fee8c8", "#fdbb84", "#e34a33"],
			4: ["#fef0d9", "#fdcc8a", "#fc8d59", "#d7301f"],
			5: ["#fef0d9", "#fdcc8a", "#fc8d59", "#e34a33", "#b30000"],
			6: ["#fef0d9", "#fdd49e", "#fdbb84", "#fc8d59", "#e34a33", "#b30000"],
			7: ["#fef0d9", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#990000"],
			8: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#990000"],
			9: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"]
		}, YlOrRd: {
			3: ["#ffeda0", "#feb24c", "#f03b20"],
			4: ["#ffffb2", "#fecc5c", "#fd8d3c", "#e31a1c"],
			5: ["#ffffb2", "#fecc5c", "#fd8d3c", "#f03b20", "#bd0026"],
			6: ["#ffffb2", "#fed976", "#feb24c", "#fd8d3c", "#f03b20", "#bd0026"],
			7: ["#ffffb2", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#b10026"],
			8: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#b10026"],
			9: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"]
		}, RdYlBu: {
			3: ["#fc8d59", "#ffffbf", "#91bfdb"],
			4: ["#d7191c", "#fdae61", "#abd9e9", "#2c7bb6"],
			5: ["#d7191c", "#fdae61", "#ffffbf", "#abd9e9", "#2c7bb6"],
			6: ["#d73027", "#fc8d59", "#fee090", "#e0f3f8", "#91bfdb", "#4575b4"],
			7: ["#d73027", "#fc8d59", "#fee090", "#ffffbf", "#e0f3f8", "#91bfdb", "#4575b4"],
			8: ["#d73027", "#f46d43", "#fdae61", "#fee090", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4"],
			9: ["#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4"],
			10: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
			11: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"]
		}, Blues: {
			3: ["#deebf7", "#9ecae1", "#3182bd"],
			4: ["#eff3ff", "#bdd7e7", "#6baed6", "#2171b5"],
			5: ["#eff3ff", "#bdd7e7", "#6baed6", "#3182bd", "#08519c"],
			6: ["#eff3ff", "#c6dbef", "#9ecae1", "#6baed6", "#3182bd", "#08519c"],
			7: ["#eff3ff", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#084594"],
			8: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#084594"],
			9: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"]
		}, RdYlGn: {
			3: ["#fc8d59", "#ffffbf", "#91cf60"],
			4: ["#d7191c", "#fdae61", "#a6d96a", "#1a9641"],
			5: ["#d7191c", "#fdae61", "#ffffbf", "#a6d96a", "#1a9641"],
			6: ["#d73027", "#fc8d59", "#fee08b", "#d9ef8b", "#91cf60", "#1a9850"],
			7: ["#d73027", "#fc8d59", "#fee08b", "#ffffbf", "#d9ef8b", "#91cf60", "#1a9850"],
			8: ["#d73027", "#f46d43", "#fdae61", "#fee08b", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850"],
			9: ["#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850"],
			10: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
			11: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"]
		}
	}

})(jQuery, window, document);


; // accordion widget
(function($, window, document, undefined) {

	function buildAccordionPanel(options){
		
		var $panel = $('<div class="panel panel-default">')	

		if(options.header){
			var $header = $('<div class="panel-heading"><div class="panel-title">'+options.header+'</div></div>')
			if(options.icon){
				$('<i>',{'class':'icon fa fa-'+options.icon}).prependTo($header)
			}
			$panel.append($header)	
		}
		if(options.body){
			var $body = $('<div class="panel-body">')
			$body.html(options.body).appendTo($panel)
		}
		if(options.footer){
			$('<div class="panel-footer">').html(options.footer).appendTo($panel)
		}
		if(options.collapse && options.id){
			var id = options.element+'-'+options.headerClass+'-'+options.id
			$header.attr({
				'data-toggle': 'collapse',
				'href': '#'+id
			})
			if(options.accordion){
				$header.attr('data-parent','#'+options.element)
			}
			$body.attr('id',id).addClass('collapse'+(options.id === options.open ? ' in' : ''))
		}

		return $panel
	}

	$.widget('nh.accordion',{
		
		options: {
			data: null,
			headerClass: 'collapse',
			open: 1,
			collapse: true,
			accordion: true
		},
		
		_create: function(){

			var me = this

			this.element.addClass('nh-accordion')
			this.id = this.element.attr('id')
			
			$.each(this.options.data,function(i,o){
				buildAccordionPanel({
					header: o.header,
					body: o.body,
					icon: o.icon,
					id: i + 1,
					element: me.id,
					headerClass: me.options.headerClass,
					accordion: me.options.accordion,
					collapse: me.options.collapse,
					open: me.options.open,
				}).appendTo(me.element)
			})

		},

		_destroy: function(){
			this.element.empty().removeClass('nh-accordion')
		},
	})

})(jQuery, window, document);

; // listify widget
(function($, window, document, undefined) {

	var LISTIFY_DEFAULTS = {
		check: '<input type="checkbox">',
		close: '<span class="close"><i class="fa fa-times"></i></span>'
	}

	$.widget('nh.listify', {
		options: {
			selectable: true,
			close: true,
			restore: true,
		},
		_create: function() {

			var prepend = (this.options.select ? LISTIFY_DEFAULTS.check : '') + (this.options.close ? LISTIFY_DEFAULTS.close : '')

			//this.element.addClass('list-group nh-listify')
			this.items = this.element
					.addClass('list-group nh-listify')
					.children()
					.addClass('list-group-item')
					.prepend(prepend)

			this._initEvents();

		},
		_initEvents: function() {
			this._on(this.items, {
				'click input': function(event) {
					if (this._isToggled()) {
						event.preventDefault();
					}
					//this._updateToggled()
					//$(event.target).closest('.list-group-item').toggleClass('selected')
					//event.stopPropogation()
				},
				'click .close': function(event) {
					event.preventDefault()
					$target = $(event.target).closest('.list-group-item')
					this._trigger("removed", event, {
						text: $target.text()
					});
					$target.remove()
				},
				'click': function(event) {
					$target = $(event.target)
//					if (this._isToggled) {
//						$target = $(event.target).find('input[type=checkbox]:first')
//						$target.prop('checked', !$target.prop('checked'))
//						$target.closest('.list-group-item').toggleClass('selected')
//
//					}
//					this._updateToggled()
				}
			})
		},
		_updateToggled: function() {
			this.toggled = this.items.has(':checked').length
			this.element.toggleClass('editing', this.toggled)
		},
		_isToggled: function() {
			return this.element.has(':checked').length
		},
		_destroy: function() {
			this.element.removeClass('list-group')
			this.items.removeClass('list-group-item').find('input,span').remove()
		}


	})

})(jQuery, window, document);

; // progressbar widget
(function($, window, document, undefined) {

	function createBars(widget) {
		var cls = 'bar-item',
				data = widget.options.data,
				colors = widget.options.colors,
				total = data.sum(),
				pctCursor = 0

		widget._container.empty();
		$.each(data, function(inx, el) {
			var pctVal = el / total * 100
			var bar = $('<div class="' + cls + '"></div>')
					.css({
						backgroundColor: widget.options.colors[inx],
						width: pctVal + '%',
						left: pctCursor + '%'
					})
					.text(el)
			widget._container.append(bar)
			pctCursor += pctVal
		})

	}

	$.widget("nth.progressbar", {
		options: {
			colors: null,
			data: null,
			captions: null,
			format: null, // ['currency','number','percent'],
			barClass: 'bar-item'
		},
		widgetEventPrefix: 'progressbar:',
		_create: function() {

			this.element.addClass("progressbar");
			this._container = $('<div class="bar-wrapper"></div>')
					.appendTo(this.element);
			this._setOptions({
				'data': this.options.data,
				'colors': this.options.colors
			});
			this.refresh()

			this._on(this._bars, {
				click: function(event) {
					var $el = $(event.currentTarget)
					alert($el.text())
				}
			})
		},
		_setOption: function(key, value) {
			this._super(key, value)
		},
		_setOptions: function(options) {
			this._super(options);
		},
		refresh: function() {
			var self = this
			createBars(self)
			this._bars = this._container.find('.'.this.options.barClass)
			//this._trigger('refresh', null, this.options.data)
		},
		destroy: function() {
			this.element.removeClass('progressbar');
			this.element.empty();
			this._super();
		},
	})

})(jQuery);


