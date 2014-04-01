; // helper functions
(function($, window, document, undefined) {

	function lg(t) {
		console.log(t);
	}		

	function isObject(arg) {
		return Object.prototype.toString.call(arg) === '[object Object]';
	}

	function isArray(arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	}

	function forEach(array, action) {
		for (var i = 0; i < array.length; i++)
			action(array[i]);
	}

	function forEachIn(object, action) {
		for (var property in object) {
			if (object.hasOwnProperty(property))
				action(property, object[property]);
		}
	}

	function reduce(func, base, array) {
		forEach(array, function(element) {
			base = func(base, element);
		});
		return base;
	}

	function map(func, array) {
		var result = [];
		forEach(array, function(element) {
			result.push(func(element));
		});
		return result;
	}

	function extend(base) {
		var args = Array.prototype.slice.call(arguments, 1)
		forEach(args, function(obj) {
			forEachIn(obj, function(name, value) {
				base[name] = value;
			})
		})
		return base;
	}

	function concatenate(delim) {
		return Array.prototype.slice.call(arguments, 1).join(delim);
	}

	function isObject(arg) {
		return Object.prototype.toString.call(arg) === '[object Object]';
	}

	function isArray(arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	}

	if (!Array.prototype.isArray) {
		Array.isArray = function(arr) {
			return Object.prototype.toString.call(arr) === '[object Array]';
		}
	}

	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(obj, start) {
			for (var i = (start || 0), j = this.length; i < j; i++) {
				if (this[i] === obj) {
					return i;
				}
			}
			return -1;
		}
	}

	if (!Array.prototype.each) {
		Array.prototype.each = function(func) {
			for (var i = 0; i < this.length; i++)
				func(this[i]);
		}
	}

	if (!Array.prototype.has) {
		Array.prototype.has = function(expr) {
			for (var i = 0; i < this.length; i++) {
				if (expr === this[i])
					return true;
			}
			return false;
		}
	}

	if (!Array.prototype.unique) {
		Array.prototype.unique = function() {
			var arr = [];
			for (var i = 0; i < this.length; i++) {
				if (arr.has(this[i]) === false)
					arr.push(this[i]);
			}
			return arr;
		}
	}

	if (!Array.prototype.reduce) {
		Array.prototype.reduce = function(func, base) {
			this.each(function(val) {
				base = func(base, val)
			})
			return base;
		}
	}

	if (!Array.prototype.map) {
		Array.prototype.map = function(func) {
			var output = [];
			this.each(function(val) {
				output.push(func(val));
			})
			return output;
		}
	}

	if (!Array.prototype.sum) {
		Array.prototype.sum = function() {
			return this.reduce(function(b, v) {
				return b += parseFloat(v)
			}, 0)
		}
	}

	if (!Array.prototype.extend) {
		Array.prototype.extend = function(arr) {
			var self = this;
			arr.each(function(val) {
				self.push(val);
			})
			return this;
		}
	}

	if (!Array.prototype.slice)
		Array.prototype.slice = function(start, end) {
			if (start < 0)
				start = this.length + start; //'this' refers to the object to which the prototype is applied
			if (!end) {
				end = this.length + (end < 0 ? end : 0)
			}
			var output = [];
			for (var ct = 0, i = start; i < end; i++) {
				output[ct++] = this[i];
			}
			return output;
		}

})(jQuery, window, document);
; // bootstrap init
(function($, window, document, undefined) {

	var accordionDefaults = {
		parentSelector: '[rel="accordion"]',
		toggleSelector: '[data-toggle="collapse"]',
		fallback: 'children', // [children, headers, none]
		ns: '-collapse-',
	}

	var BSU = {
		tooltip: function() {
			$('body').tooltip({
				selector: '[rel="tooltip"],[data-toggle="tooltip"]',
				container: 'body'
			});
			return this;
		},
		popover: function() {
			$('body').popover({
				selector: '[data-toggle="popover"],[rel="popover"]',
				container: 'body'
			});
			return this;
		},
		panel: function() {
			$('.panel.panel-collapse,.panel[data-toggle="collapse"]').each(function() {

				var $this = $(this),
					$trigger = $(this).children('.panel-heading:first'),
					$toggle = ($trigger.attr('data-target') ? $(trigger.attr('data-target')) : $trigger.next())

				
				$trigger.click(function(e) {
					e.preventDefault()
					$toggle.stop().slideToggle(300, 'swing')
				})
			})
			return this
		},
		accordion: function(options) {

			var ops = $.extend(true, {}, accordionDefaults, options);

			$(ops.parentSelector).each(function() {

				var $this = $(this),
						id = $this.attr('id'),
						$toggles = $this.children(ops.toggleSelector) || $this.children(':even');

				$toggles.each(function(i) {
					$(this).attr({
						'data-toggle': 'collapse',
						'data-parent': '#' + id,
						'data-target': '#' + id + ops.ns + i
					})
							.next().attr({
						'class': 'collapse in',
						'id': id + ops.ns + i
					})
				});
			});
			return this;
		}
	};

	BSU.tooltip().popover().panel().accordion();

	var TAG = {
		tag: function(tag) { // tag [,data][,options]
			var args = arguments, options;
			switch (args.length) {
				case 1:
					break;
				case 2:
					options = isObject(args[1]) ? args[1] : {text: args[1]}
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



})(jQuery, window, document);


; // listify widget
(function($, window, document, undefined) {

	var LISTIFY_DEFAULTS = {
		check: '<input type="checkbox">',
		close: '<span class="close"><i class="fa fa-times"></i></span>'
	}

	$.widget('nth.listify', {
		options: {
			select: true,
			close: true,
			restore: true,
//            widgetEventPrefix: 'listify:'
		},
		_create: function() {

			var prepend = (this.options.select ? LISTIFY_DEFAULTS.check : '') + (this.options.close ? LISTIFY_DEFAULTS.close : '')

			this.element.addClass('list-group')
			this.items = this.element
					.addClass('list-group')
					.children()
					.addClass('list-group-item')
					.prepend(prepend)

			this._on(this.items, {
				'click input': function(event) {
					this._updateToggled()
					$(event.target).closest('.list-group-item').toggleClass('selected')
					event.stopPropogation()
				},
				'click .close': function(event) {
					event.preventDefault()
					$target = $(event.target).closest('.list-group-item')
					this._trigger(":removed", event, {
						text: $target.text()
					});
					$target.remove()
				},
				'click': function(event) {
					if (this.toggled) {
						$target = $(event.target).find('input[type="checkbox"]:first')
						$target.prop('checked', !$target.prop('checked'))
						$target.closest('.list-group-item').toggleClass('selected')

					}
					this._updateToggled()
				}
			})

		},
		_updateToggled: function() {
			this.toggled = this.items.has(':checked').length > 0
			this.element.toggleClass('editing', this.toggled)
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


