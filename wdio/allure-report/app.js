!function(e) {
  var t={}; function __webpack_require__(n) {
    if (t[n]) return t[n].exports; var r=t[n]={i: n, l: !1, exports: {}}; return e[n].call(r.exports, r, r.exports, __webpack_require__), r.l=!0, r.exports;
  }__webpack_require__.m=e, __webpack_require__.c=t, __webpack_require__.d=function(e, t, n) {
    __webpack_require__.o(e, t)||Object.defineProperty(e, t, {enumerable: !0, get: n});
  }, __webpack_require__.r=function(e) {
    'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0});
  }, __webpack_require__.t=function(e, t) {
    if (1&t&&(e=__webpack_require__(e)), 8&t) return e; if (4&t&&'object'==typeof e&&e&&e.__esModule) return e; var n=Object.create(null); if (__webpack_require__.r(n), Object.defineProperty(n, 'default', {enumerable: !0, value: e}), 2&t&&'string'!=typeof e) {
      for (var r in e) {
        __webpack_require__.d(n, r, function(t) {
          return e[t];
        }.bind(null, r));
      }
    } return n;
  }, __webpack_require__.n=function(e) {
    var t=e&&e.__esModule?function() {
      return e.default;
    }:function() {
      return e;
    }; return __webpack_require__.d(t, 'a', t), t;
  }, __webpack_require__.o=function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, __webpack_require__.p='/', __webpack_require__(__webpack_require__.s=227);
}([function(e, t) {
  function _getPrototypeOf(t) {
    return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e) {
      return e.__proto__||Object.getPrototypeOf(e);
    }, e.exports.__esModule=!0, e.exports.default=e.exports, _getPrototypeOf(t);
  }e.exports=_getPrototypeOf, e.exports.__esModule=!0, e.exports.default=e.exports;
}, function(e, t, n) {
  'use strict'; n.d(t, 'a', (function() {
    return behavior;
  })), n.d(t, 'b', (function() {
    return className;
  })), n.d(t, 'e', (function() {
    return regions;
  })), n.d(t, 'd', (function() {
    return options;
  })); var r=n(7); var a=n.n(r); var i=n(59); function behavior(e) {
    var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; return function(n) {
      var r=n.prototype; r.behaviors=Object.assign(a()({}, e, t), r.behaviors);
    };
  } function className(e) {
    return function(t) {
      t.prototype.className=e;
    };
  } function regions(e) {
    return function(t) {
      t.prototype.regions=Object.assign(e, t.regions);
    };
  } function options(e) {
    return function(t) {
      t.prototype.options=Object.assign(e, t.options);
    };
  }n.d(t, 'c', (function() {
    return i.on;
  }));
}, function(e, t) {
  e.exports=function(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  }, e.exports.__esModule=!0, e.exports.default=e.exports;
}, function(e, t) {
  function _defineProperties(e, t) {
    for (var n=0; n<t.length; n++) {
      var r=t[n]; r.enumerable=r.enumerable||!1, r.configurable=!0, 'value'in r&&(r.writable=!0), Object.defineProperty(e, r.key, r);
    }
  }e.exports=function(e, t, n) {
    return t&&_defineProperties(e.prototype, t), n&&_defineProperties(e, n), Object.defineProperty(e, 'prototype', {writable: !1}), e;
  }, e.exports.__esModule=!0, e.exports.default=e.exports;
}, function(e, t, n) {
  var r=n(143); e.exports=function(e, t) {
    if ('function'!=typeof t&&null!==t) throw new TypeError('Super expression must either be null or a function'); e.prototype=Object.create(t&&t.prototype, {constructor: {value: e, writable: !0, configurable: !0}}), Object.defineProperty(e, 'prototype', {writable: !1}), t&&r(e, t);
  }, e.exports.__esModule=!0, e.exports.default=e.exports;
}, function(e, t, n) {
  var r=n(144).default; var a=n(9); e.exports=function(e, t) {
    if (t&&('object'===r(t)||'function'==typeof t)) return t; if (void 0!==t) throw new TypeError('Derived constructors may only return object or undefined'); return a(e);
  }, e.exports.__esModule=!0, e.exports.default=e.exports;
}, function(e, t, n) {
  'use strict'; n.r(t); var r=n(45); var a=n.n(r); t.default=function() {
    for (var e=arguments.length, t=new Array(e), n=0; n<e; n++)t[n]=arguments[n]; var r=t.pop(); return a.a.apply(void 0, t.concat([r.hash]));
  };
}, function(e, t) {
  e.exports=function(e, t, n) {
    return t in e?Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}):e[t]=n, e;
  }, e.exports.__esModule=!0, e.exports.default=e.exports;
}, function(e, t, n) {
  'use strict'; n.r(t), n.d(t, 'default', (function() {
    return translate;
  })); var r=n(21); function translate(e, t) {
    return r.c.t(e, t?t.hash:{});
  }
}, function(e, t) {
  e.exports=function(e) {
    if (void 0===e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); return e;
  }, e.exports.__esModule=!0, e.exports.default=e.exports;
}, function(e, t, n) {
  e.exports=function(e, t, n) {
    'use strict'; e='default'in e?e.default:e, t='default'in t?t.default:t, n='default'in n?n.default:n; var proxy=function(e) {
      return function(t) {
        for (var n=arguments.length, r=Array(n>1?n-1:0), a=1; a<n; a++)r[a-1]=arguments[a]; return e.apply(t, r);
      };
    }; var r=e.Model.extend; var a=function deprecate(e, n) {
      t.isObject(e)&&(e=e.prev+' is going to be removed in the future. Please use '+e.next+' instead.'+(e.url?' See: '+e.url:'')), H.DEV_MODE&&(void 0!==n&&n||deprecate._cache[e]||(deprecate._warn('Deprecation warning: '+e), deprecate._cache[e]=!0));
    }; a._console='undefined'!=typeof console?console:{}, a._warn=function() {
      var e=a._console.warn||a._console.log||t.noop; return e.apply(a._console, arguments);
    }, a._cache={}; var isNodeAttached=function(e) {
      return document.documentElement.contains(e&&e.parentNode);
    }; var mergeOptions=function(e, n) {
      var r=this; e&&t.each(n, (function(t) {
        var n=e[t]; void 0!==n&&(r[t]=n);
      }));
    }; var getOption=function(e) {
      if (e) return this.options&&void 0!==this.options[e]?this.options[e]:this[e];
    }; var normalizeMethods=function(e) {
      var n=this; return t.reduce(e, (function(e, r, a) {
        return t.isFunction(r)||(r=n[r]), r&&(e[a]=r), e;
      }), {});
    }; var i=/(^|:)(\w)/gi; function getEventName(e, t, n) {
      return n.toUpperCase();
    } var o=t.memoize((function(e) {
      return 'on'+e.replace(i, getEventName);
    })); function triggerMethod$1(e) {
      for (var n=arguments.length, r=Array(n>1?n-1:0), a=1; a<n; a++)r[a-1]=arguments[a]; var i=o(e); var s=getOption.call(this, i); var l=void 0; return t.isFunction(s)&&(l=s.apply(this, r)), this.trigger.apply(this, arguments), l;
    } function triggerMethodOn(e) {
      for (var n=arguments.length, r=Array(n>1?n-1:0), a=1; a<n; a++)r[a-1]=arguments[a]; return t.isFunction(e.triggerMethod)?e.triggerMethod.apply(e, r):triggerMethod$1.apply(e, r);
    } function triggerMethodChildren(e, n, r) {
      e._getImmediateChildren&&t.each(e._getImmediateChildren(), (function(e) {
        r(e)&&triggerMethodOn(e, n, e);
      }));
    } function shouldTriggerAttach(e) {
      return !e._isAttached;
    } function shouldAttach(e) {
      return !!shouldTriggerAttach(e)&&(e._isAttached=!0, !0);
    } function shouldTriggerDetach(e) {
      return e._isAttached;
    } function shouldDetach(e) {
      return !!shouldTriggerDetach(e)&&(e._isAttached=!1, !0);
    } function triggerDOMRefresh(e) {
      e._isAttached&&e._isRendered&&triggerMethodOn(e, 'dom:refresh', e);
    } function triggerDOMRemove(e) {
      e._isAttached&&e._isRendered&&triggerMethodOn(e, 'dom:remove', e);
    } function handleBeforeAttach() {
      triggerMethodChildren(this, 'before:attach', shouldTriggerAttach);
    } function handleAttach() {
      triggerMethodChildren(this, 'attach', shouldAttach), triggerDOMRefresh(this);
    } function handleBeforeDetach() {
      triggerMethodChildren(this, 'before:detach', shouldTriggerDetach), triggerDOMRemove(this);
    } function handleDetach() {
      triggerMethodChildren(this, 'detach', shouldDetach);
    } function handleBeforeRender() {
      triggerDOMRemove(this);
    } function handleRender() {
      triggerDOMRefresh(this);
    } function monitorViewEvents(e) {
      e._areViewEventsMonitored||(e._areViewEventsMonitored=!0, e.on({'before:attach': handleBeforeAttach, 'attach': handleAttach, 'before:detach': handleBeforeDetach, 'detach': handleDetach, 'before:render': handleBeforeRender, 'render': handleRender}));
    } var s=['description', 'fileName', 'lineNumber', 'name', 'message', 'number']; var l=r.call(Error, {urlRoot: 'http://marionettejs.com/docs/v3.3.1/', constructor: function(e, n) {
t.isObject(e)?e=(n=e).message:n||(n={}); var r=Error.call(this, e); t.extend(this, t.pick(r, s), t.pick(n, s)), this.captureStackTrace(), n.url&&(this.url=this.urlRoot+n.url);
    }, captureStackTrace: function() {
      Error.captureStackTrace&&Error.captureStackTrace(this, l);
    }, toString: function() {
      return this.name+': '+this.message+(this.url?' See: '+this.url:'');
    }}); function iterateEvents(e, n, r, a) {
      if (n&&r) {
        if (!t.isObject(r)) throw new l({message: 'Bindings must be an object.', url: 'marionette.functions.html#marionettebindevents'}); t.each(r, (function(r, i) {
t.isString(r)?function(e, n, r, a, i) {
  var o=a.split(/\s+/); t.each(o, (function(t) {
    var a=e[t]; if (!a) throw new l('Method "'+t+'" was configured as an event handler, but does not exist.'); e[i](n, r, a);
  }));
}(e, n, i, r, a):e[a](n, i, r);
        }));
      }
    } function bindEvents(e, t) {
      return iterateEvents(this, e, t, 'listenTo'), this;
    } function unbindEvents(e, t) {
      return iterateEvents(this, e, t, 'stopListening'), this;
    } function iterateReplies(e, n, r, a) {
      if (n&&r) {
        if (!t.isObject(r)) throw new l({message: 'Bindings must be an object.', url: 'marionette.functions.html#marionettebindrequests'}); var i=normalizeMethods.call(e, r); n[a](i, e);
      }
    } function bindRequests(e, t) {
      return iterateReplies(this, e, t, 'reply'), this;
    } function unbindRequests(e, t) {
      return iterateReplies(this, e, t, 'stopReplying'), this;
    }l.extend=r; var u={normalizeMethods: normalizeMethods, _setOptions: function() {
      for (var e=arguments.length, n=Array(e), r=0; r<e; r++)n[r]=arguments[r]; this.options=t.extend.apply(t, [{}, t.result(this, 'options')].concat(n));
    }, mergeOptions: mergeOptions, getOption: getOption, bindEvents: bindEvents, unbindEvents: unbindEvents}; var c={_initRadio: function() {
      var e=t.result(this, 'channelName'); if (e) {
        if (!n) throw new l({name: 'BackboneRadioMissing', message: 'The dependency "backbone.radio" is missing.'}); var r=this._channel=n.channel(e); var a=t.result(this, 'radioEvents'); this.bindEvents(r, a); var i=t.result(this, 'radioRequests'); this.bindRequests(r, i), this.on('destroy', this._destroyRadio);
      }
    }, _destroyRadio: function() {
      this._channel.stopReplying(null, null, this);
    }, getChannel: function() {
      return this._channel;
    }, bindEvents: bindEvents, unbindEvents: unbindEvents, bindRequests: bindRequests, unbindRequests: unbindRequests}; var h=['channelName', 'radioEvents', 'radioRequests']; var MarionetteObject=function(e) {
      this._setOptions(e), this.mergeOptions(e, h), this.cid=t.uniqueId(this.cidPrefix), this._initRadio(), this.initialize.apply(this, arguments);
    }; MarionetteObject.extend=r, t.extend(MarionetteObject.prototype, e.Events, u, c, {cidPrefix: 'mno', _isDestroyed: !1, isDestroyed: function() {
      return this._isDestroyed;
    }, initialize: function() {}, destroy: function() {
      if (this._isDestroyed) return this; for (var e=arguments.length, t=Array(e), n=0; n<e; n++)t[n]=arguments[n]; return this.triggerMethod.apply(this, ['before:destroy', this].concat(t)), this._isDestroyed=!0, this.triggerMethod.apply(this, ['destroy', this].concat(t)), this.stopListening(), this;
    }, triggerMethod: triggerMethod$1}); var f={createBuffer: function() {
      return document.createDocumentFragment();
    }, appendChildren: function(t, n) {
      e.$(t).append(n);
    }, beforeEl: function(t, n) {
      e.$(t).before(n);
    }, replaceEl: function(e, t) {
      if (e!==t) {
        var n=t.parentNode; n&&n.replaceChild(e, t);
      }
    }, detachContents: function(t) {
      e.$(t).contents().detach();
    }, setInnerContent: function(t, n) {
      e.$(t).html(n);
    }, detachEl: function(t) {
      e.$(t).detach();
    }, removeEl: function(t) {
      e.$(t).remove();
    }, findEls: function(t, n) {
      return e.$(t, n);
    }}; var TemplateCache=function(e) {
      this.templateId=e;
    }; t.extend(TemplateCache, {templateCaches: {}, get: function(e, t) {
      var n=this.templateCaches[e]; return n||(n=new TemplateCache(e), this.templateCaches[e]=n), n.load(t);
    }, clear: function() {
      for (var e=void 0, t=arguments.length, n=Array(t), r=0; r<t; r++)n[r]=arguments[r]; var a=n.length; if (a>0) for (e=0; e<a; e++) delete this.templateCaches[n[e]]; else this.templateCaches={};
    }}), t.extend(TemplateCache.prototype, f, {load: function(e) {
      if (this.compiledTemplate) return this.compiledTemplate; var t=this.loadTemplate(this.templateId, e); return this.compiledTemplate=this.compileTemplate(t, e), this.compiledTemplate;
    }, loadTemplate: function(e, t) {
      var n=this.findEls(e); if (!n.length) throw new l({name: 'NoTemplateError', message: 'Could not find template: "'+e+'"'}); return n.html();
    }, compileTemplate: function(e, n) {
      return t.template(e, n);
    }}); var d=t.invokeMap||t.invoke; function parseBehaviors(e, n) {
      return t.chain(n).map((function(n, r) {
        var a=function(e, n) {
          return e.behaviorClass?e.behaviorClass:t.isFunction(e)?e:t.isFunction(H.Behaviors.behaviorsLookup)?H.Behaviors.behaviorsLookup(e, n)[n]:H.Behaviors.behaviorsLookup[n];
        }(n, r); var i=new a(n===a?{}:n, e); var o=parseBehaviors(e, t.result(i, 'behaviors')); return [i].concat(o);
      })).flatten().value();
    } var p={_initBehaviors: function() {
      this._behaviors=this._getBehaviors();
    }, _getBehaviors: function() {
      var e=t.result(this, 'behaviors'); return t.isObject(e)?parseBehaviors(this, e):{};
    }, _getBehaviorTriggers: function() {
      var e=d(this._behaviors, 'getTriggers'); return t.reduce(e, (function(e, n) {
        return t.extend(e, n);
      }), {});
    }, _getBehaviorEvents: function() {
      var e=d(this._behaviors, 'getEvents'); return t.reduce(e, (function(e, n) {
        return t.extend(e, n);
      }), {});
    }, _proxyBehaviorViewProperties: function() {
      d(this._behaviors, 'proxyViewProperties');
    }, _delegateBehaviorEntityEvents: function() {
      d(this._behaviors, 'delegateEntityEvents');
    }, _undelegateBehaviorEntityEvents: function() {
      d(this._behaviors, 'undelegateEntityEvents');
    }, _destroyBehaviors: function() {
      for (var e=arguments.length, t=Array(e), n=0; n<e; n++)t[n]=arguments[n]; d.apply(void 0, [this._behaviors, 'destroy'].concat(t));
    }, _removeBehavior: function(e) {
      this._isDestroyed||(this._behaviors=t.without(this._behaviors, e));
    }, _bindBehaviorUIElements: function() {
      d(this._behaviors, 'bindUIElements');
    }, _unbindBehaviorUIElements: function() {
      d(this._behaviors, 'unbindUIElements');
    }, _triggerEventOnBehaviors: function() {
      for (var e=this._behaviors, t=0, n=e&&e.length; t<n; t++)triggerMethod$1.apply(e[t], arguments);
    }}; var m={_delegateEntityEvents: function(e, n) {
      this._undelegateEntityEvents(e, n); var r=t.result(this, 'modelEvents'); bindEvents.call(this, e, r); var a=t.result(this, 'collectionEvents'); bindEvents.call(this, n, a);
    }, _undelegateEntityEvents: function(e, n) {
      var r=t.result(this, 'modelEvents'); unbindEvents.call(this, e, r); var a=t.result(this, 'collectionEvents'); unbindEvents.call(this, n, a);
    }}; var g=/^(\S+)\s*(.*)$/; var getUniqueEventName=function(e) {
      var n=e.match(g); return function(e, n) {
        return [e+t.uniqueId('.evt'), n].join(' ');
      }(n[1], n[2]);
    }; var v={childViewEventPrefix: !0, triggersStopPropagation: !0, triggersPreventDefault: !0}; function isEnabled(e) {
      return !!v[e];
    } var y={_getViewTriggers: function(e, n) {
      return t.reduce(n, (function(n, r, a) {
        return n[a=getUniqueEventName(a)]=function(e, n) {
          t.isString(n)&&(n={event: n}); var r=n.event; var a=!!n.preventDefault; isEnabled('triggersPreventDefault')&&(a=!1!==n.preventDefault); var i=!!n.stopPropagation; return isEnabled('triggersStopPropagation')&&(i=!1!==n.stopPropagation), function(t) {
            a&&t.preventDefault(), i&&t.stopPropagation(), e.triggerMethod(r, e, t);
          };
        }(e, r), n;
      }), {});
    }}; var _normalizeUIString=function(e, t) {
      return e.replace(/@ui\.[a-zA-Z-_$0-9]*/g, (function(e) {
        return t[e.slice(4)];
      }));
    }; var b={normalizeUIKeys: function(e) {
      return function(e, n) {
        return t.reduce(e, (function(e, t, r) {
          return e[_normalizeUIString(r, n)]=t, e;
        }), {});
      }(e, this._getUIBindings());
    }, normalizeUIString: function(e) {
      var t=this._getUIBindings(); return _normalizeUIString(e, t);
    }, normalizeUIValues: function(e, n) {
      return function _normalizeUIValues(e, n, r) {
        return t.each(e, (function(a, i) {
t.isString(a)?e[i]=_normalizeUIString(a, n):t.isObject(a)&&t.isArray(r)&&(t.extend(a, _normalizeUIValues(t.pick(a, r), n)), t.each(r, (function(e) {
  var r=a[e]; t.isString(r)&&(a[e]=_normalizeUIString(r, n));
})));
        })), e;
      }(e, this._getUIBindings(), n);
    }, _getUIBindings: function() {
      var e=t.result(this, '_uiBindings'); var n=t.result(this, 'ui'); return e||n;
    }, _bindUIElements: function() {
      var e=this; if (this.ui) {
        this._uiBindings||(this._uiBindings=this.ui); var n=t.result(this, '_uiBindings'); this._ui={}, t.each(n, (function(t, n) {
          e._ui[n]=e.$(t);
        })), this.ui=this._ui;
      }
    }, _unbindUIElements: function() {
      var e=this; this.ui&&this._uiBindings&&(t.each(this.ui, (function(t, n) {
        delete e.ui[n];
      })), this.ui=this._uiBindings, delete this._uiBindings, delete this._ui);
    }, _getUI: function(e) {
      return this._ui[e];
    }}; var w={supportsRenderLifecycle: !0, supportsDestroyLifecycle: !0, _isDestroyed: !1, isDestroyed: function() {
      return !!this._isDestroyed;
    }, _isRendered: !1, isRendered: function() {
      return !!this._isRendered;
    }, _isAttached: !1, isAttached: function() {
      return !!this._isAttached;
    }, delegateEvents: function(n) {
      this._proxyBehaviorViewProperties(), this._buildEventProxies(); var r=this._getEvents(n); void 0===n&&(this.events=r); var a=t.extend({}, this._getBehaviorEvents(), r, this._getBehaviorTriggers(), this.getTriggers()); return e.View.prototype.delegateEvents.call(this, a), this;
    }, _getEvents: function(e) {
      var n=e||this.events; return t.isFunction(n)?this.normalizeUIKeys(n.call(this)):this.normalizeUIKeys(n);
    }, getTriggers: function() {
      if (this.triggers) {
        var e=this.normalizeUIKeys(t.result(this, 'triggers')); return this._getViewTriggers(this, e);
      }
    }, delegateEntityEvents: function() {
      return this._delegateEntityEvents(this.model, this.collection), this._delegateBehaviorEntityEvents(), this;
    }, undelegateEntityEvents: function() {
      return this._undelegateEntityEvents(this.model, this.collection), this._undelegateBehaviorEntityEvents(), this;
    }, destroy: function() {
      if (this._isDestroyed) return this; for (var e=!!this._isAttached, t=arguments.length, n=Array(t), r=0; r<t; r++)n[r]=arguments[r]; return this.triggerMethod.apply(this, ['before:destroy', this].concat(n)), e&&this.triggerMethod('before:detach', this), this.unbindUIElements(), this.removeEl(this.el), e&&(this._isAttached=!1, this.triggerMethod('detach', this)), this._removeChildren(), this._isDestroyed=!0, this._isRendered=!1, this._destroyBehaviors.apply(this, n), this.triggerMethod.apply(this, ['destroy', this].concat(n)), this.stopListening(), this;
    }, bindUIElements: function() {
      return this._bindUIElements(), this._bindBehaviorUIElements(), this;
    }, unbindUIElements: function() {
      return this._unbindUIElements(), this._unbindBehaviorUIElements(), this;
    }, getUI: function(e) {
      return this._getUI(e);
    }, childViewEventPrefix: function() {
      return !!isEnabled('childViewEventPrefix')&&'childview';
    }, triggerMethod: function() {
      var e=triggerMethod$1.apply(this, arguments); return this._triggerEventOnBehaviors.apply(this, arguments), e;
    }, _buildEventProxies: function() {
      this._childViewEvents=t.result(this, 'childViewEvents'), this._childViewTriggers=t.result(this, 'childViewTriggers');
    }, _proxyChildViewEvents: function(e) {
      this.listenTo(e, 'all', this._childViewEventHandler);
    }, _childViewEventHandler: function(e) {
      for (var n=this.normalizeMethods(this._childViewEvents), r=arguments.length, a=Array(r>1?r-1:0), i=1; i<r; i++)a[i-1]=arguments[i]; void 0!==n&&t.isFunction(n[e])&&n[e].apply(this, a); var o=this._childViewTriggers; o&&t.isString(o[e])&&this.triggerMethod.apply(this, [o[e]].concat(a)); var s=t.result(this, 'childViewEventPrefix'); if (!1!==s) {
        var l=s+':'+e; this.triggerMethod.apply(this, [l].concat(a));
      }
    }}; function destroyBackboneView(e) {
      e.supportsDestroyLifecycle||triggerMethodOn(e, 'before:destroy', e); var t=!!e._isAttached; t&&triggerMethodOn(e, 'before:detach', e), e.remove(), t&&(e._isAttached=!1, triggerMethodOn(e, 'detach', e)), e._isDestroyed=!0, e.supportsDestroyLifecycle||triggerMethodOn(e, 'destroy', e);
    }t.extend(w, f, p, u, m, y, b); var x=['allowMissingEl', 'parentEl', 'replaceElement']; var k=MarionetteObject.extend({cidPrefix: 'mnr', replaceElement: !1, _isReplaced: !1, _isSwappingView: !1, constructor: function(t) {
      if (this._setOptions(t), this.mergeOptions(t, x), this._initEl=this.el=this.getOption('el'), this.el=this.el instanceof e.$?this.el[0]:this.el, !this.el) throw new l({name: 'NoElError', message: 'An "el" must be specified for a region.'}); this.$el=this.getEl(this.el), MarionetteObject.call(this, t);
    }, show: function(e, t) {
      if (this._ensureElement(t)) return (e=this._getView(e, t))===this.currentView||(this._isSwappingView=!!this.currentView, this.triggerMethod('before:show', this, e, t), e._isAttached||this.empty(t), this._setupChildView(e), this._renderView(e), this._attachView(e, t), this.currentView=e, this.triggerMethod('show', this, e, t), this._isSwappingView=!1), this;
    }, _setupChildView: function(e) {
      monitorViewEvents(e), this._proxyChildViewEvents(e), e.on('destroy', this._empty, this);
    }, _proxyChildViewEvents: function(e) {
      var t=this._parentView; t&&t._proxyChildViewEvents(e);
    }, _renderView: function(e) {
      e._isRendered||(e.supportsRenderLifecycle||triggerMethodOn(e, 'before:render', e), e.render(), e.supportsRenderLifecycle||(e._isRendered=!0, triggerMethodOn(e, 'render', e)));
    }, _attachView: function(e) {
      var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; var r=!e._isAttached&&isNodeAttached(this.el); var a=void 0===n.replaceElement?!!t.result(this, 'replaceElement'):!!n.replaceElement; r&&triggerMethodOn(e, 'before:attach', e), a?this._replaceEl(e):this.attachHtml(e), r&&(e._isAttached=!0, triggerMethodOn(e, 'attach', e));
    }, _ensureElement: function() {
      var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; if (t.isObject(this.el)||(this.$el=this.getEl(this.el), this.el=this.$el[0]), !this.$el||0===this.$el.length) {
        var n=void 0===e.allowMissingEl?!!t.result(this, 'allowMissingEl'):!!e.allowMissingEl; if (n) return !1; throw new l('An "el" must exist in DOM for this region '+this.cid);
      } return !0;
    }, _getView: function(t) {
      if (!t) throw new l({name: 'ViewNotValid', message: 'The view passed is undefined and therefore invalid. You must pass a view instance to show.'}); if (t._isDestroyed) throw new l({name: 'ViewDestroyedError', message: 'View (cid: "'+t.cid+'") has already been destroyed and cannot be used.'}); if (t instanceof e.View) return t; var n=this._getViewOptions(t); return new T(n);
    }, _getViewOptions: function(e) {
      return t.isFunction(e)?{template: e}:t.isObject(e)?e:{template: function() {
        return e;
      }};
    }, getEl: function(e) {
      return this.findEls(e, t.result(this, 'parentEl'));
    }, _replaceEl: function(e) {
      this._restoreEl(), e.on('before:destroy', this._restoreEl, this), this.replaceEl(e.el, this.el), this._isReplaced=!0;
    }, _restoreEl: function() {
      if (this._isReplaced) {
        var e=this.currentView; e&&(this._detachView(e), this._isReplaced=!1);
      }
    }, isReplaced: function() {
      return !!this._isReplaced;
    }, isSwappingView: function() {
      return !!this._isSwappingView;
    }, attachHtml: function(e) {
      this.appendChildren(this.el, e.el);
    }, empty: function() {
      var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{allowMissingEl: !0}; var t=this.currentView; if (!t) return this._ensureElement(e)&&this.detachHtml(), this; var n=!e.preventDestroy; return n||a('The preventDestroy option is deprecated. Use Region#detachView'), this._empty(t, n), this;
    }, _empty: function(e, t) {
      e.off('destroy', this._empty, this), this.triggerMethod('before:empty', this, e), this._restoreEl(), delete this.currentView, e._isDestroyed||(t?this.removeView(e):this._detachView(e), this._stopChildViewEvents(e)), this.triggerMethod('empty', this, e);
    }, _stopChildViewEvents: function(e) {
      this._parentView&&this._parentView.stopListening(e);
    }, destroyView: function(e) {
      return e._isDestroyed||(e.destroy?e.destroy():destroyBackboneView(e)), e;
    }, removeView: function(e) {
      this.destroyView(e);
    }, detachView: function() {
      var e=this.currentView; if (e) return this._empty(e), e;
    }, _detachView: function(e) {
      var t=!!e._isAttached; var n=this._isReplaced; t&&triggerMethodOn(e, 'before:detach', e), n?this.replaceEl(this.el, e.el):this.detachHtml(), t&&(e._isAttached=!1, triggerMethodOn(e, 'detach', e));
    }, detachHtml: function() {
      this.detachContents(this.el);
    }, hasView: function() {
      return !!this.currentView;
    }, reset: function(e) {
      return this.empty(e), this.$el&&(this.el=this._initEl), delete this.$el, this;
    }, destroy: function(e) {
      return this._isDestroyed?this:(this.reset(e), this._name&&this._parentView._removeReferences(this._name), delete this._parentView, delete this._name, MarionetteObject.prototype.destroy.apply(this, arguments));
    }}); t.extend(k.prototype, f); var buildRegion=function(e, n) {
      return e instanceof k?e:function(e, n) {
        var r=t.extend({}, n); if (t.isString(e)) return t.extend(r, {el: e}), buildRegionFromObject(r); if (t.isFunction(e)) return t.extend(r, {regionClass: e}), buildRegionFromObject(r); if (t.isObject(e)) return e.selector&&a('The selector option on a Region definition object is deprecated. Use el to pass a selector string'), t.extend(r, {el: e.selector}, e), buildRegionFromObject(r); throw new l({message: 'Improper region configuration type.', url: 'marionette.region.html#region-configuration-types'});
      }(e, n);
    }; function buildRegionFromObject(e) {
      return new(0, e.regionClass)(t.omit(e, 'regionClass'));
    } var C={regionClass: k, _initRegions: function() {
      this.regions=this.regions||{}, this._regions={}, this.addRegions(t.result(this, 'regions'));
    }, _reInitRegions: function() {
      d(this._regions, 'reset');
    }, addRegion: function(e, t) {
      var n={}; return n[e]=t, this.addRegions(n)[e];
    }, addRegions: function(e) {
      if (!t.isEmpty(e)) return e=this.normalizeUIValues(e, ['selector', 'el']), this.regions=t.extend({}, this.regions, e), this._addRegions(e);
    }, _addRegions: function(e) {
      var n=this; var r={regionClass: this.regionClass, parentEl: t.partial(t.result, this, 'el')}; return t.reduce(e, (function(e, t, a) {
        return e[a]=buildRegion(t, r), n._addRegion(e[a], a), e;
      }), {});
    }, _addRegion: function(e, t) {
      this.triggerMethod('before:add:region', this, t, e), e._parentView=this, e._name=t, this._regions[t]=e, this.triggerMethod('add:region', this, t, e);
    }, removeRegion: function(e) {
      var t=this._regions[e]; return this._removeRegion(t, e), t;
    }, removeRegions: function() {
      var e=this._getRegions(); return t.each(this._regions, t.bind(this._removeRegion, this)), e;
    }, _removeRegion: function(e, t) {
      this.triggerMethod('before:remove:region', this, t, e), e.destroy(), this.triggerMethod('remove:region', this, t, e);
    }, _removeReferences: function(e) {
      delete this.regions[e], delete this._regions[e];
    }, emptyRegions: function() {
      var e=this.getRegions(); return d(e, 'empty'), e;
    }, hasRegion: function(e) {
      return !!this.getRegion(e);
    }, getRegion: function(e) {
      return this._isRendered||this.render(), this._regions[e];
    }, _getRegions: function() {
      return t.clone(this._regions);
    }, getRegions: function() {
      return this._isRendered||this.render(), this._getRegions();
    }, showChildView: function(e, t) {
      for (var n=this.getRegion(e), r=arguments.length, a=Array(r>2?r-2:0), i=2; i<r; i++)a[i-2]=arguments[i]; return n.show.apply(n, [t].concat(a));
    }, detachChildView: function(e) {
      return this.getRegion(e).detachView();
    }, getChildView: function(e) {
      return this.getRegion(e).currentView;
    }}; var S={render: function(e, n) {
      if (!e) throw new l({name: 'TemplateNotFoundError', message: 'Cannot render the template since its false, null or undefined.'}); return (t.isFunction(e)?e:TemplateCache.get(e))(n);
    }}; var O=['behaviors', 'childViewEventPrefix', 'childViewEvents', 'childViewTriggers', 'collectionEvents', 'events', 'modelEvents', 'regionClass', 'regions', 'template', 'templateContext', 'triggers', 'ui']; var T=e.View.extend({constructor: function(n) {
      this.render=t.bind(this.render, this), this._setOptions(n), this.mergeOptions(n, O), monitorViewEvents(this), this._initBehaviors(), this._initRegions(); var r=Array.prototype.slice.call(arguments); r[0]=this.options, e.View.prototype.constructor.apply(this, r), this.delegateEntityEvents(), this._triggerEventOnBehaviors('initialize', this);
    }, serializeData: function() {
      return this.model||this.collection?this.model?this.serializeModel():{items: this.serializeCollection()}:{};
    }, serializeModel: function() {
      return this.model?t.clone(this.model.attributes):{};
    }, serializeCollection: function() {
      return this.collection?this.collection.map((function(e) {
        return t.clone(e.attributes);
      })):{};
    }, setElement: function() {
      var t=!!this.el; return e.View.prototype.setElement.apply(this, arguments), t&&(this._isRendered=!!this.$el.length, this._isAttached=isNodeAttached(this.el)), this._isRendered&&this.bindUIElements(), this;
    }, render: function() {
      return this._isDestroyed||(this.triggerMethod('before:render', this), this._isRendered&&this._reInitRegions(), this._renderTemplate(), this.bindUIElements(), this._isRendered=!0, this.triggerMethod('render', this)), this;
    }, _renderTemplate: function() {
      var e=this.getTemplate(); if (!1!==e) {
        var t=this.mixinTemplateContext(this.serializeData()); var n=this._renderHtml(e, t); this.attachElContent(n);
      } else a('template:false is deprecated.  Use _.noop.');
    }, _renderHtml: function(e, t) {
      return S.render(e, t, this);
    }, getTemplate: function() {
      return this.template;
    }, mixinTemplateContext: function() {
      var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; var n=t.result(this, 'templateContext'); return t.extend(e, n);
    }, attachElContent: function(e) {
      return this.setInnerContent(this.el, e), this;
    }, _removeChildren: function() {
      this.removeRegions();
    }, _getImmediateChildren: function() {
      return t.chain(this._getRegions()).map('currentView').compact().value();
    }}, {setRenderer: function(e) {
      this.prototype._renderHtml=e;
    }}); t.extend(T.prototype, w, C); var E=['forEach', 'each', 'map', 'find', 'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke', 'toArray', 'first', 'initial', 'rest', 'last', 'without', 'isEmpty', 'pluck', 'reduce', 'partition']; var emulateCollection=function(e, n) {
      t.each(E, (function(r) {
        e[r]=function() {
          var e=t.values(t.result(this, n)); var a=[e].concat(t.toArray(arguments)); return t[r].apply(t, a);
        };
      }));
    }; var Container=function(e) {
      this._views={}, this._indexByModel={}, this._indexByCustom={}, this._updateLength(), t.each(e, t.bind(this.add, this));
    }; emulateCollection(Container.prototype, '_views'), t.extend(Container.prototype, {add: function(e, t) {
      return this._add(e, t)._updateLength();
    }, _add: function(e, t) {
      var n=e.cid; return this._views[n]=e, e.model&&(this._indexByModel[e.model.cid]=n), t&&(this._indexByCustom[t]=n), this;
    }, findByModel: function(e) {
      return this.findByModelCid(e.cid);
    }, findByModelCid: function(e) {
      var t=this._indexByModel[e]; return this.findByCid(t);
    }, findByCustom: function(e) {
      var t=this._indexByCustom[e]; return this.findByCid(t);
    }, findByIndex: function(e) {
      return t.values(this._views)[e];
    }, findByCid: function(e) {
      return this._views[e];
    }, remove: function(e) {
      return this._remove(e)._updateLength();
    }, _remove: function(e) {
      var n=e.cid; return e.model&&delete this._indexByModel[e.model.cid], t.some(this._indexByCustom, t.bind((function(e, t) {
        if (e===n) return delete this._indexByCustom[t], !0;
      }), this)), delete this._views[n], this;
    }, _updateLength: function() {
      return this.length=t.size(this._views), this;
    }}); var R=['behaviors', 'childView', 'childViewEventPrefix', 'childViewEvents', 'childViewOptions', 'childViewTriggers', 'collectionEvents', 'events', 'filter', 'emptyView', 'emptyViewOptions', 'modelEvents', 'reorderOnSort', 'sort', 'triggers', 'ui', 'viewComparator']; var P=e.View.extend({sort: !0, constructor: function(n) {
      this.render=t.bind(this.render, this), this._setOptions(n), this.mergeOptions(n, R), monitorViewEvents(this), this._initBehaviors(), this.once('render', this._initialEvents), this._initChildViewStorage(), this._bufferedChildren=[]; var r=Array.prototype.slice.call(arguments); r[0]=this.options, e.View.prototype.constructor.apply(this, r), this.delegateEntityEvents(), this._triggerEventOnBehaviors('initialize', this);
    }, _startBuffering: function() {
      this._isBuffering=!0;
    }, _endBuffering: function() {
      var e=this._isAttached?this._getImmediateChildren():[]; this._isBuffering=!1, t.each(e, (function(e) {
        triggerMethodOn(e, 'before:attach', e);
      })), this.attachBuffer(this, this._createBuffer()), t.each(e, (function(e) {
        e._isAttached=!0, triggerMethodOn(e, 'attach', e);
      })), this._bufferedChildren=[];
    }, _getImmediateChildren: function() {
      return t.values(this.children._views);
    }, _initialEvents: function() {
      this.collection&&(this.listenTo(this.collection, 'add', this._onCollectionAdd), this.listenTo(this.collection, 'update', this._onCollectionUpdate), this.listenTo(this.collection, 'reset', this.render), this.sort&&this.listenTo(this.collection, 'sort', this._sortViews));
    }, _onCollectionAdd: function(e, n, r) {
      var a=void 0!==r.at&&(r.index||n.indexOf(e)); (this.filter||!1===a)&&(a=t.indexOf(this._filteredSortedModels(a), e)), this._shouldAddChild(e, a)&&(this._destroyEmptyView(), this._addChild(e, a));
    }, _onCollectionUpdate: function(e, t) {
      var n=t.changes; this._removeChildModels(n.removed);
    }, _removeChildModels: function(e) {
      var t=this._getRemovedViews(e); t.length&&(this.children._updateLength(), this._updateIndices(t, !1), this.isEmpty()&&this._showEmptyView());
    }, _getRemovedViews: function(e) {
      var n=this; return t.reduce(e, (function(e, t) {
        var r=t&&n.children.findByModel(t); return !r||r._isDestroyed||(n._removeChildView(r), e.push(r)), e;
      }), []);
    }, _removeChildView: function(e) {
      this.triggerMethod('before:remove:child', this, e), this.children._remove(e), e.destroy?e.destroy():destroyBackboneView(e), this.stopListening(e), this.triggerMethod('remove:child', this, e);
    }, setElement: function() {
      var t=!!this.el; return e.View.prototype.setElement.apply(this, arguments), t&&(this._isAttached=isNodeAttached(this.el)), this;
    }, render: function() {
      return this._isDestroyed||(this.triggerMethod('before:render', this), this._renderChildren(), this._isRendered=!0, this.triggerMethod('render', this)), this;
    }, setFilter: function(e) {
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; var n=t.preventRender; var r=this._isRendered&&!this._isDestroyed; var a=this.filter!==e; var i=r&&a&&!n; if (i) {
        var o=this._filteredSortedModels(); this.filter=e; var s=this._filteredSortedModels(); this._applyModelDeltas(s, o);
      } else this.filter=e; return this;
    }, removeFilter: function(e) {
      return this.setFilter(null, e);
    }, _applyModelDeltas: function(e, n) {
      var r=this; var a={}; t.each(e, (function(e, t) {
        !r.children.findByModel(e)&&r._onCollectionAdd(e, r.collection, {at: t}), a[e.cid]=!0;
      })); var i=t.filter(n, (function(e) {
        return !a[e.cid]&&r.children.findByModel(e);
      })); this._removeChildModels(i);
    }, reorder: function() {
      var e=this.children; var n=this._filteredSortedModels(); if (!n.length&&this._showingEmptyView) return this; if (t.some(n, (function(t) {
        return !e.findByModel(t);
      }))) this.render(); else {
        var r=[]; var a=e.reduce((function(e, a) {
          var i=t.indexOf(n, a.model); return -1===i?(r.push(a.model), e):(a._index=i, e[i]=a.el, e);
        }), new Array(n.length)); this.triggerMethod('before:reorder', this), this._appendReorderedChildren(a), this._removeChildModels(r), this.triggerMethod('reorder', this);
      } return this;
    }, resortView: function() {
      return this.reorderOnSort?this.reorder():this._renderChildren(), this;
    }, _sortViews: function() {
      var e=this; var n=this._filteredSortedModels(); t.find(n, (function(t, n) {
        var r=e.children.findByModel(t); return !r||r._index!==n;
      }))&&this.resortView();
    }, _emptyViewIndex: -1, _appendReorderedChildren: function(e) {
      this.appendChildren(this.el, e);
    }, _renderChildren: function() {
      this._isRendered&&(this._destroyEmptyView(), this._destroyChildren()); var e=this._filteredSortedModels(); this.isEmpty({processedModels: e})?this._showEmptyView():(this.triggerMethod('before:render:children', this), this._startBuffering(), this._showCollection(e), this._endBuffering(), this.triggerMethod('render:children', this));
    }, _createView: function(e, t) {
      var n=this._getChildView(e); var r=this._getChildViewOptions(e, t); return this.buildChildView(e, n, r);
    }, _setupChildView: function(e, t) {
      monitorViewEvents(e), this._proxyChildViewEvents(e), this.sort&&(e._index=t);
    }, _showCollection: function(e) {
      t.each(e, t.bind(this._addChild, this)), this.children._updateLength();
    }, _filteredSortedModels: function(e) {
      if (!this.collection||!this.collection.length) return []; var t=this.getViewComparator(); var n=this.collection.models; if (e=Math.min(Math.max(e, 0), n.length-1), t) {
        var r=void 0; e&&(r=n[e], n=n.slice(0, e).concat(n.slice(e+1))), n=this._sortModelsBy(n, t), r&&n.splice(e, 0, r);
      } return n=this._filterModels(n);
    }, getViewComparator: function() {
      return this.viewComparator;
    }, _filterModels: function(e) {
      var n=this; return this.filter&&(e=t.filter(e, (function(e, t) {
        return n._shouldAddChild(e, t);
      }))), e;
    }, _sortModelsBy: function(e, n) {
      return 'string'==typeof n?t.sortBy(e, (function(e) {
        return e.get(n);
      })):1===n.length?t.sortBy(e, t.bind(n, this)):t.clone(e).sort(t.bind(n, this));
    }, _showEmptyView: function() {
      var n=this._getEmptyView(); if (n&&!this._showingEmptyView) {
        this._showingEmptyView=!0; var r=new e.Model; var a=this.emptyViewOptions||this.childViewOptions; t.isFunction(a)&&(a=a.call(this, r, this._emptyViewIndex)); var i=this.buildChildView(r, n, a); this.triggerMethod('before:render:empty', this, i), this.addChildView(i, 0), this.triggerMethod('render:empty', this, i);
      }
    }, _destroyEmptyView: function() {
      this._showingEmptyView&&(this.triggerMethod('before:remove:empty', this), this._destroyChildren(), delete this._showingEmptyView, this.triggerMethod('remove:empty', this));
    }, _getEmptyView: function() {
      var e=this.emptyView; if (e) return this._getView(e);
    }, _getChildView: function(e) {
      var t=this.childView; if (!t) throw new l({name: 'NoChildViewError', message: 'A "childView" must be specified'}); if (!(t=this._getView(t, e))) throw new l({name: 'InvalidChildViewError', message: '"childView" must be a view class or a function that returns a view class'}); return t;
    }, _getView: function(n, r) {
      return n.prototype instanceof e.View||n===e.View?n:t.isFunction(n)?n.call(this, r):void 0;
    }, _addChild: function(e, t) {
      var n=this._createView(e, t); return this.addChildView(n, t), n;
    }, _getChildViewOptions: function(e, n) {
      return t.isFunction(this.childViewOptions)?this.childViewOptions(e, n):this.childViewOptions;
    }, addChildView: function(e, t) {
      return this.triggerMethod('before:add:child', this, e), this._setupChildView(e, t), this._isBuffering?this.children._add(e):(this._updateIndices(e, !0), this.children.add(e)), this._renderView(e), this._attachView(e, t), this.triggerMethod('add:child', this, e), e;
    }, _updateIndices: function(e, n) {
      if (this.sort) {
        if (n) {
          var r=t.isArray(e)?t.max(e, '_index'):e; t.isObject(r)&&this.children.each((function(e) {
            e._index>=r._index&&(e._index+=1);
          }));
        } else {
          t.each(t.sortBy(this.children._views, '_index'), (function(e, t) {
            e._index=t;
          }));
        }
      }
    }, _renderView: function(e) {
      e._isRendered||(e.supportsRenderLifecycle||triggerMethodOn(e, 'before:render', e), e.render(), e.supportsRenderLifecycle||(e._isRendered=!0, triggerMethodOn(e, 'render', e)));
    }, _attachView: function(e, t) {
      var n=!e._isAttached&&!this._isBuffering&&this._isAttached; n&&triggerMethodOn(e, 'before:attach', e), this.attachHtml(this, e, t), n&&(e._isAttached=!0, triggerMethodOn(e, 'attach', e));
    }, buildChildView: function(e, n, r) {
      return new n(t.extend({model: e}, r));
    }, removeChildView: function(e) {
      return !e||e._isDestroyed||(this._removeChildView(e), this.children._updateLength(), this._updateIndices(e, !1)), e;
    }, isEmpty: function(e) {
      var n=void 0; return t.result(e, 'processedModels')?n=e.processedModels:(n=this.collection?this.collection.models:[], n=this._filterModels(n)), 0===n.length;
    }, attachBuffer: function(e, t) {
      this.appendChildren(e.el, t);
    }, _createBuffer: function() {
      var e=this; var n=this.createBuffer(); return t.each(this._bufferedChildren, (function(t) {
        e.appendChildren(n, t.el);
      })), n;
    }, attachHtml: function(e, t, n) {
e._isBuffering?e._bufferedChildren.splice(n, 0, t):e._insertBefore(t, n)||e._insertAfter(t);
    }, _insertBefore: function(e, t) {
      var n=void 0; return this.sort&&t<this.children.length-1&&(n=this.children.find((function(e) {
        return e._index===t+1;
      }))), !!n&&(this.beforeEl(n.el, e.el), !0);
    }, _insertAfter: function(e) {
      this.appendChildren(this.el, e.el);
    }, _initChildViewStorage: function() {
      this.children=new Container;
    }, _removeChildren: function() {
      this._destroyChildren();
    }, _destroyChildren: function(e) {
      this.children.length&&(this.triggerMethod('before:destroy:children', this), this.children.each(t.bind(this._removeChildView, this)), this.children._updateLength(), this.triggerMethod('destroy:children', this));
    }, _shouldAddChild: function(e, n) {
      var r=this.filter; return !t.isFunction(r)||r.call(this, e, n, this.collection);
    }}); t.extend(P.prototype, w); var Container$1=function() {
      this._init();
    }; function stringComparator(e, t) {
      return t.model&&t.model.get(e);
    }emulateCollection(Container$1.prototype, '_views'), t.extend(Container$1.prototype, {_init: function() {
      this._views=[], this._viewsByCid={}, this._indexByModel={}, this._updateLength();
    }, _add: function(e) {
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._views.length; var n=e.cid; this._viewsByCid[n]=e, e.model&&(this._indexByModel[e.model.cid]=n), this._views.splice(t, 0, e), this._updateLength();
    }, _sort: function(e) {
      return 'string'==typeof e?(e=t.partial(stringComparator, e), this._sortBy(e)):1===e.length?this._sortBy(e):this._views.sort(e);
    }, _sortBy: function(e) {
      var n=t.sortBy(this._views, e); return this._set(n), n;
    }, _set: function(e) {
      this._views.length=0, this._views.push.apply(this._views, e.slice(0)), this._updateLength();
    }, findByModel: function(e) {
      return this.findByModelCid(e.cid);
    }, findByModelCid: function(e) {
      var t=this._indexByModel[e]; return this.findByCid(t);
    }, findByIndex: function(e) {
      return this._views[e];
    }, findIndexByView: function(e) {
      return this._views.indexOf(e);
    }, findByCid: function(e) {
      return this._viewsByCid[e];
    }, _remove: function(e) {
      if (this._viewsByCid[e.cid]) {
        e.model&&delete this._indexByModel[e.model.cid], delete this._viewsByCid[e.cid]; var t=this.findIndexByView(e); this._views.splice(t, 1), this._updateLength();
      }
    }, _updateLength: function() {
      this.length=this._views.length;
    }}); var M=['behaviors', 'childView', 'childViewEventPrefix', 'childViewEvents', 'childViewOptions', 'childViewTriggers', 'collectionEvents', 'emptyView', 'emptyViewOptions', 'events', 'modelEvents', 'sortWithCollection', 'triggers', 'ui', 'viewComparator', 'viewFilter']; var A=e.View.extend({sortWithCollection: !0, constructor: function(t) {
      this._setOptions(t), this.mergeOptions(t, M), monitorViewEvents(this), this.once('render', this._initialEvents), this._initChildViewStorage(), this._initBehaviors(); var n=Array.prototype.slice.call(arguments); n[0]=this.options, e.View.prototype.constructor.apply(this, n), this._initEmptyRegion(), this.delegateEntityEvents(), this._triggerEventOnBehaviors('initialize', this);
    }, _initChildViewStorage: function() {
      this.children=new Container$1;
    }, _initEmptyRegion: function() {
      this.emptyRegion=new k({el: this.el}), this.emptyRegion._parentView=this;
    }, _initialEvents: function() {
      this.listenTo(this.collection, {sort: this._onCollectionSort, reset: this._onCollectionReset, update: this._onCollectionUpdate});
    }, _onCollectionSort: function() {
      var e=this; this.sortWithCollection&&this.collection.length===this.children.length&&(this.collection.some((function(t) {
        return !e.children.findByModel(t);
      }))||this.sort());
    }, _onCollectionReset: function() {
      this.render();
    }, _onCollectionUpdate: function(e, t) {
      var n=t.changes; var r=this._removeChildModels(n.removed); this._addChildModels(n.added), this._detachChildren(r), this._showChildren(), this._removeChildViews(r);
    }, _removeChildModels: function(e) {
      return t.map(e, t.bind(this._removeChildModel, this));
    }, _removeChildModel: function(e) {
      var t=this.children.findByModel(e); return this._removeChild(t), t;
    }, _removeChild: function(e) {
      this.triggerMethod('before:remove:child', this, e), this.children._remove(e), this.triggerMethod('remove:child', this, e);
    }, _addChildModels: function(e) {
      return t.map(e, t.bind(this._addChildModel, this));
    }, _addChildModel: function(e) {
      var t=this._createChildView(e); return this._addChild(t), t;
    }, _createChildView: function(e) {
      var t=this._getChildView(e); var n=this._getChildViewOptions(e); return this.buildChildView(e, t, n);
    }, _addChild: function(e, t) {
      this.triggerMethod('before:add:child', this, e), this._setupChildView(e), this.children._add(e, t), this.triggerMethod('add:child', this, e);
    }, _getChildView: function(e) {
      var t=this.childView; if (!t) throw new l({name: 'NoChildViewError', message: 'A "childView" must be specified'}); if (!(t=this._getView(t, e))) throw new l({name: 'InvalidChildViewError', message: '"childView" must be a view class or a function that returns a view class'}); return t;
    }, _getView: function(n, r) {
      return n.prototype instanceof e.View||n===e.View?n:t.isFunction(n)?n.call(this, r):void 0;
    }, _getChildViewOptions: function(e) {
      return t.isFunction(this.childViewOptions)?this.childViewOptions(e):this.childViewOptions;
    }, buildChildView: function(e, n, r) {
      return new n(t.extend({model: e}, r));
    }, _setupChildView: function(e) {
      monitorViewEvents(e), e.on('destroy', this.removeChildView, this), this._proxyChildViewEvents(e);
    }, _getImmediateChildren: function() {
      return this.children._views;
    }, setElement: function() {
      var t=!!this.el; return e.View.prototype.setElement.apply(this, arguments), t&&(this._isAttached=isNodeAttached(this.el)), this;
    }, render: function() {
      return this._isDestroyed||(this.triggerMethod('before:render', this), this._destroyChildren(), this.children._init(), this.collection&&this._addChildModels(this.collection.models), this._showChildren(), this._isRendered=!0, this.triggerMethod('render', this)), this;
    }, sort: function() {
      return this._isDestroyed?this:this.children.length?(this._showChildren(), this):this;
    }, _showChildren: function() {
this.isEmpty()?this._showEmptyView():(this._sortChildren(), this.filter());
    }, isEmpty: function(e) {
      return e||!this.children.length;
    }, _showEmptyView: function() {
      var e=this._getEmptyView(); if (e) {
        var t=this._getEmptyViewOptions(); this.emptyRegion.show(new e(t));
      }
    }, _getEmptyView: function() {
      var e=this.emptyView; if (e) return this._getView(e);
    }, _destroyEmptyView: function() {
      this.emptyRegion.hasView()&&this.emptyRegion.empty();
    }, _getEmptyViewOptions: function() {
      var e=this.emptyViewOptions||this.childViewOptions; return t.isFunction(e)?e.call(this):e;
    }, _sortChildren: function() {
      this.triggerMethod('before:sort', this); var e=this.getComparator(); t.isFunction(e)&&(e=e.bind(this)), this.children._sort(e), this.triggerMethod('sort', this);
    }, setComparator: function(e) {
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; var n=t.preventRender; var r=this.viewComparator!==e; var a=r&&!n; return this.viewComparator=e, a&&this.sort(), this;
    }, removeComparator: function(e) {
      return this.setComparator(null, e);
    }, getComparator: function() {
      return this.viewComparator||this._viewComparator;
    }, _viewComparator: function(e) {
      if (this.collection) return this.collection.indexOf(e.model);
    }, filter: function() {
      if (this._isDestroyed) return this; if (!this.children.length) return this; var e=this._filterChildren(); return this._renderChildren(e), this;
    }, _filterChildren: function() {
      var e=this._getFilter(); if (!e) return this.children._views; this.triggerMethod('before:filter', this); var n=this.children.partition(t.bind(e, this)); return this._detachChildren(n[1]), this.triggerMethod('filter', this), n[0];
    }, _getFilter: function() {
      var e=this.getFilter(); if (!e) return !1; if (t.isFunction(e)) return e; if (t.isObject(e)) {
        var n=t.matches(e); return function(e) {
          return n(e.model&&e.model.attributes);
        };
      } if (t.isString(e)) {
        return function(t) {
          return t.model&&t.model.get(e);
        };
      } throw new l({name: 'InvalidViewFilterError', message: '"viewFilter" must be a function, predicate object literal, a string indicating a model attribute, or falsy'});
    }, getFilter: function() {
      return this.viewFilter;
    }, setFilter: function(e) {
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; var n=t.preventRender; var r=this.viewFilter!==e; var a=r&&!n; return this.viewFilter=e, a&&this.filter(), this;
    }, removeFilter: function(e) {
      return this.setFilter(null, e);
    }, _detachChildren: function(e) {
      t.each(e, t.bind(this._detachChildView, this));
    }, _detachChildView: function(e) {
      var t=!!e._isAttached; t&&triggerMethodOn(e, 'before:detach', e), this.detachHtml(e), t&&(e._isAttached=!1, triggerMethodOn(e, 'detach', e));
    }, detachHtml: function(e) {
      this.detachEl(e.el);
    }, _renderChildren: function(e) {
      if (this.isEmpty(!e.length)) this._showEmptyView(); else {
        this._destroyEmptyView(), this.triggerMethod('before:render:children', this, e); var t=this._getBuffer(e); this._attachChildren(t, e), this.triggerMethod('render:children', this, e);
      }
    }, _attachChildren: function(e, n) {
      n=this._isAttached?n:[], t.each(n, (function(e) {
        e._isAttached||triggerMethodOn(e, 'before:attach', e);
      })), this.attachHtml(this, e), t.each(n, (function(e) {
        e._isAttached||(e._isAttached=!0, triggerMethodOn(e, 'attach', e));
      }));
    }, _getBuffer: function(e) {
      var n=this; var r=this.createBuffer(); return t.each(e, (function(e) {
        n._renderChildView(e), n.appendChildren(r, e.el);
      })), r;
    }, _renderChildView: function(e) {
      e._isRendered||(e.supportsRenderLifecycle||triggerMethodOn(e, 'before:render', e), e.render(), e.supportsRenderLifecycle||(e._isRendered=!0, triggerMethodOn(e, 'render', e)));
    }, attachHtml: function(e, t) {
      this.appendChildren(e.el, t);
    }, addChildView: function(e, t) {
      return !e||e._isDestroyed||(this._addChild(e, t), this._showChildren()), e;
    }, detachChildView: function(e) {
      return this.removeChildView(e, {shouldDetach: !0}), e;
    }, removeChildView: function(e, t) {
      return e?(this._removeChildView(e, t), this._removeChild(e), this.isEmpty()&&this._showEmptyView(), e):e;
    }, _removeChildViews: function(e) {
      t.each(e, t.bind(this._removeChildView, this));
    }, _removeChildView: function(e) {
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; var n=t.shouldDetach; e.off('destroy', this.removeChildView, this), n?this._detachChildView(e):this._destroyChildView(e), this.stopListening(e);
    }, _destroyChildView: function(e) {
      e._isDestroyed||(e.destroy?e.destroy():destroyBackboneView(e));
    }, _removeChildren: function() {
      this._destroyChildren(), this.emptyRegion.destroy();
    }, _destroyChildren: function() {
      this.children&&this.children.length&&(this.triggerMethod('before:destroy:children', this), this.children.each(t.bind(this._removeChildView, this)), this.triggerMethod('destroy:children', this));
    }}); t.extend(A.prototype, w); var j=['childViewContainer', 'template', 'templateContext']; var N=P.extend({constructor: function(e) {
      a('CompositeView is deprecated. Convert to View at your earliest convenience'), this.mergeOptions(e, j), P.prototype.constructor.apply(this, arguments);
    }, _initialEvents: function() {
      this.collection&&(this.listenTo(this.collection, 'add', this._onCollectionAdd), this.listenTo(this.collection, 'update', this._onCollectionUpdate), this.listenTo(this.collection, 'reset', this.renderChildren), this.sort&&this.listenTo(this.collection, 'sort', this._sortViews));
    }, _getChildView: function(e) {
      var t=this.childView; if (!t) return this.constructor; if (!(t=this._getView(t, e))) throw new l({name: 'InvalidChildViewError', message: '"childView" must be a view class or a function that returns a view class'}); return t;
    }, serializeData: function() {
      return this.serializeModel();
    }, render: function() {
      return this._isDestroyed||(this._isRendering=!0, this.resetChildViewContainer(), this.triggerMethod('before:render', this), this._renderTemplate(), this.bindUIElements(), this.renderChildren(), this._isRendering=!1, this._isRendered=!0, this.triggerMethod('render', this)), this;
    }, renderChildren: function() {
      (this._isRendered||this._isRendering)&&P.prototype._renderChildren.call(this);
    }, attachBuffer: function(e, t) {
      var n=this.getChildViewContainer(e); this.appendChildren(n, t);
    }, _insertAfter: function(e) {
      var t=this.getChildViewContainer(this, e); this.appendChildren(t, e.el);
    }, _appendReorderedChildren: function(e) {
      var t=this.getChildViewContainer(this); this.appendChildren(t, e);
    }, getChildViewContainer: function(e, n) {
      if (e.$childViewContainer) return e.$childViewContainer; var r=void 0; if (e.childViewContainer) {
        var a=t.result(e, 'childViewContainer'); if ((r='@'===a.charAt(0)&&e.ui?e.ui[a.substr(4)]:this.findEls(a, e.$el)).length<=0) throw new l({name: 'ChildViewContainerMissingError', message: 'The specified "childViewContainer" was not found: '+e.childViewContainer});
      } else r=e.$el; return e.$childViewContainer=r, r;
    }, resetChildViewContainer: function() {
      this.$childViewContainer&&(this.$childViewContainer=void 0);
    }}); var D=t.pick(T.prototype, 'serializeModel', 'getTemplate', '_renderTemplate', '_renderHtml', 'mixinTemplateContext', 'attachElContent'); t.extend(N.prototype, D); var V=['collectionEvents', 'events', 'modelEvents', 'triggers', 'ui']; var L=MarionetteObject.extend({cidPrefix: 'mnb', constructor: function(e, n) {
      this.view=n, this.defaults&&a('Behavior defaults are deprecated. For similar functionality set options on the Behavior class.'), this.defaults=t.clone(t.result(this, 'defaults', {})), this._setOptions(this.defaults, e), this.mergeOptions(this.options, V), this.ui=t.extend({}, t.result(this, 'ui'), t.result(n, 'ui')), MarionetteObject.apply(this, arguments);
    }, $: function() {
      return this.view.$.apply(this.view, arguments);
    }, destroy: function() {
      return this.stopListening(), this.view._removeBehavior(this), this;
    }, proxyViewProperties: function() {
      return this.$el=this.view.$el, this.el=this.view.el, this;
    }, bindUIElements: function() {
      return this._bindUIElements(), this;
    }, unbindUIElements: function() {
      return this._unbindUIElements(), this;
    }, getUI: function(e) {
      return this._getUI(e);
    }, delegateEntityEvents: function() {
      return this._delegateEntityEvents(this.view.model, this.view.collection), this;
    }, undelegateEntityEvents: function() {
      return this._undelegateEntityEvents(this.view.model, this.view.collection), this;
    }, getEvents: function() {
      var e=this; var n=this.normalizeUIKeys(t.result(this, 'events')); return t.reduce(n, (function(n, r, a) {
        if (t.isFunction(r)||(r=e[r]), r) return n[a=getUniqueEventName(a)]=t.bind(r, e), n;
      }), {});
    }, getTriggers: function() {
      if (this.triggers) {
        var e=this.normalizeUIKeys(t.result(this, 'triggers')); return this._getViewTriggers(this.view, e);
      }
    }}); t.extend(L.prototype, m, y, b); var B=['region', 'regionClass']; var I=MarionetteObject.extend({cidPrefix: 'mna', constructor: function(e) {
      this._setOptions(e), this.mergeOptions(e, B), this._initRegion(), MarionetteObject.prototype.constructor.apply(this, arguments);
    }, regionClass: k, _initRegion: function() {
      var e=this.region; if (e) {
        var t={regionClass: this.regionClass}; this._region=buildRegion(e, t);
      }
    }, getRegion: function() {
      return this._region;
    }, showView: function(e) {
      for (var t=this.getRegion(), n=arguments.length, r=Array(n>1?n-1:0), a=1; a<n; a++)r[a-1]=arguments[a]; return t.show.apply(t, [e].concat(r));
    }, getView: function() {
      return this.getRegion().currentView;
    }, start: function(e) {
      return this.triggerMethod('before:start', this, e), this.triggerMethod('start', this, e), this;
    }}); var z=['appRoutes', 'controller']; var F=e.Router.extend({constructor: function(t) {
      this._setOptions(t), this.mergeOptions(t, z), e.Router.apply(this, arguments); var n=this.appRoutes; var r=this._getController(); this.processAppRoutes(r, n), this.on('route', this._processOnRoute, this);
    }, appRoute: function(e, t) {
      var n=this._getController(); return this._addAppRoute(n, e, t), this;
    }, _processOnRoute: function(e, n) {
      if (t.isFunction(this.onRoute)) {
        var r=t.invert(this.appRoutes)[e]; this.onRoute(e, r, n);
      }
    }, processAppRoutes: function(e, n) {
      var r=this; if (!n) return this; var a=t.keys(n).reverse(); return t.each(a, (function(t) {
        r._addAppRoute(e, t, n[t]);
      })), this;
    }, _getController: function() {
      return this.controller;
    }, _addAppRoute: function(e, n, r) {
      var a=e[r]; if (!a) throw new l('Method "'+r+'" was not found on the controller'); this.route(n, r, t.bind(a, e));
    }, triggerMethod: triggerMethod$1}); t.extend(F.prototype, u); var U=e.Marionette; var H=e.Marionette={}; return H.noConflict=function() {
      return e.Marionette=U, this;
    }, H.bindEvents=proxy(bindEvents), H.unbindEvents=proxy(unbindEvents), H.bindRequests=proxy(bindRequests), H.unbindRequests=proxy(unbindRequests), H.mergeOptions=proxy(mergeOptions), H.getOption=proxy(getOption), H.normalizeMethods=proxy(normalizeMethods), H.extend=r, H.isNodeAttached=isNodeAttached, H.deprecate=a, H.triggerMethod=proxy(triggerMethod$1), H.triggerMethodOn=triggerMethodOn, H.isEnabled=isEnabled, H.setEnabled=function(e, t) {
      return v[e]=t;
    }, H.monitorViewEvents=monitorViewEvents, H.Behaviors={}, H.Behaviors.behaviorsLookup=function() {
      throw new l({message: 'You must define where your behaviors are stored.', url: 'marionette.behaviors.md#behaviorslookup'});
    }, H.Application=I, H.AppRouter=F, H.Renderer=S, H.TemplateCache=TemplateCache, H.View=T, H.CollectionView=P, H.NextCollectionView=A, H.CompositeView=N, H.Behavior=L, H.Region=k, H.Error=l, H.Object=MarionetteObject, H.DEV_MODE=!1, H.FEATURES=v, H.VERSION='3.3.1', H;
  }(n(13), n(14), n(142));
}, function(e, t, n) {
  e.exports=n(18).default;
}, function(e, t) {
  e.exports=function(e, t, n, r, a) {
    var i={}; return Object.keys(r).forEach((function(e) {
      i[e]=r[e];
    })), i.enumerable=!!i.enumerable, i.configurable=!!i.configurable, ('value'in i||i.initializer)&&(i.writable=!0), i=n.slice().reverse().reduce((function(n, r) {
      return r(e, t, n)||n;
    }), i), a&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(a):void 0, i.initializer=void 0), void 0===i.initializer&&(Object.defineProperty(e, t, i), i=null), i;
  }, e.exports.__esModule=!0, e.exports.default=e.exports;
}, function(e, t, n) {
  (function(r) {
    var a; var i; var o; o='object'==typeof self&&self.self===self&&self||'object'==typeof r&&r.global===r&&r, a=[n(14), n(15), t], void 0===(i=function(e, t, n) {
      o.Backbone=function(e, t, n, r) {
        var a=e.Backbone; var i=Array.prototype.slice; t.VERSION='1.3.3', t.$=r, t.noConflict=function() {
          return e.Backbone=a, this;
        }, t.emulateHTTP=!1, t.emulateJSON=!1; var addUnderscoreMethods=function(e, t, r) {
          n.each(t, (function(t, a) {
            n[a]&&(e.prototype[a]=function(e, t, r) {
              switch (e) {
                case 1: return function() {
                  return n[t](this[r]);
                }; case 2: return function(e) {
                  return n[t](this[r], e);
                }; case 3: return function(e, a) {
                  return n[t](this[r], cb(e, this), a);
                }; case 4: return function(e, a, i) {
                  return n[t](this[r], cb(e, this), a, i);
                }; default: return function() {
                  var e=i.call(arguments); return e.unshift(this[r]), n[t].apply(n, e);
                };
              }
            }(t, a, r));
          }));
        }; var cb=function(e, t) {
          return n.isFunction(e)?e:n.isObject(e)&&!t._isModel(e)?modelMatcher(e):n.isString(e)?function(t) {
            return t.get(e);
          }:e;
        }; var modelMatcher=function(e) {
          var t=n.matches(e); return function(e) {
            return t(e.attributes);
          };
        }; var o=t.Events={}; var s=/\s+/; var eventsApi=function(e, t, r, a, i) {
          var o; var l=0; if (r&&'object'==typeof r) {
            void 0!==a&&'context'in i&&void 0===i.context&&(i.context=a); for (o=n.keys(r); l<o.length; l++)t=eventsApi(e, t, o[l], r[o[l]], i);
          } else if (r&&s.test(r)) for (o=r.split(s); l<o.length; l++)t=e(t, o[l], a, i); else t=e(t, r, a, i); return t;
        }; o.on=function(e, t, n) {
          return internalOn(this, e, t, n);
        }; var internalOn=function(e, t, n, r, a) {
          return e._events=eventsApi(onApi, e._events||{}, t, n, {context: r, ctx: e, listening: a}), a&&((e._listeners||(e._listeners={}))[a.id]=a), e;
        }; o.listenTo=function(e, t, r) {
          if (!e) return this; var a=e._listenId||(e._listenId=n.uniqueId('l')); var i=this._listeningTo||(this._listeningTo={}); var o=i[a]; if (!o) {
            var s=this._listenId||(this._listenId=n.uniqueId('l')); o=i[a]={obj: e, objId: a, id: s, listeningTo: i, count: 0};
          } return internalOn(e, t, r, this, o), this;
        }; var onApi=function(e, t, n, r) {
          if (n) {
            var a=e[t]||(e[t]=[]); var i=r.context; var o=r.ctx; var s=r.listening; s&&s.count++, a.push({callback: n, context: i, ctx: i||o, listening: s});
          } return e;
        }; o.off=function(e, t, n) {
          return this._events?(this._events=eventsApi(offApi, this._events, e, t, {context: n, listeners: this._listeners}), this):this;
        }, o.stopListening=function(e, t, r) {
          var a=this._listeningTo; if (!a) return this; for (var i=e?[e._listenId]:n.keys(a), o=0; o<i.length; o++) {
            var s=a[i[o]]; if (!s) break; s.obj.off(t, r, this);
          } return this;
        }; var offApi=function(e, t, r, a) {
          if (e) {
            var i; var o=0; var s=a.context; var l=a.listeners; if (t||r||s) {
              for (var u=t?[t]:n.keys(e); o<u.length; o++) {
                var c=e[t=u[o]]; if (!c) break; for (var h=[], f=0; f<c.length; f++) {
                  var d=c[f]; r&&r!==d.callback&&r!==d.callback._callback||s&&s!==d.context?h.push(d):(i=d.listening)&&0==--i.count&&(delete l[i.id], delete i.listeningTo[i.objId]);
                }h.length?e[t]=h:delete e[t];
              } return e;
            } for (var p=n.keys(l); o<p.length; o++) delete l[(i=l[p[o]]).id], delete i.listeningTo[i.objId];
          }
        }; o.once=function(e, t, r) {
          var a=eventsApi(onceMap, {}, e, t, n.bind(this.off, this)); return 'string'==typeof e&&null==r&&(t=void 0), this.on(a, t, r);
        }, o.listenToOnce=function(e, t, r) {
          var a=eventsApi(onceMap, {}, t, r, n.bind(this.stopListening, this, e)); return this.listenTo(e, a);
        }; var onceMap=function(e, t, r, a) {
          if (r) {
            var i=e[t]=n.once((function() {
              a(t, i), r.apply(this, arguments);
            })); i._callback=r;
          } return e;
        }; o.trigger=function(e) {
          if (!this._events) return this; for (var t=Math.max(0, arguments.length-1), n=Array(t), r=0; r<t; r++)n[r]=arguments[r+1]; return eventsApi(triggerApi, this._events, e, void 0, n), this;
        }; var triggerApi=function(e, t, n, r) {
          if (e) {
            var a=e[t]; var i=e.all; a&&i&&(i=i.slice()), a&&triggerEvents(a, r), i&&triggerEvents(i, [t].concat(r));
          } return e;
        }; var triggerEvents=function(e, t) {
          var n; var r=-1; var a=e.length; var i=t[0]; var o=t[1]; var s=t[2]; switch (t.length) {
            case 0: for (;++r<a;)(n=e[r]).callback.call(n.ctx); return; case 1: for (;++r<a;)(n=e[r]).callback.call(n.ctx, i); return; case 2: for (;++r<a;)(n=e[r]).callback.call(n.ctx, i, o); return; case 3: for (;++r<a;)(n=e[r]).callback.call(n.ctx, i, o, s); return; default: for (;++r<a;)(n=e[r]).callback.apply(n.ctx, t); return;
          }
        }; o.bind=o.on, o.unbind=o.off, n.extend(t, o); var l=t.Model=function(e, t) {
          var r=e||{}; t||(t={}), this.cid=n.uniqueId(this.cidPrefix), this.attributes={}, t.collection&&(this.collection=t.collection), t.parse&&(r=this.parse(r, t)||{}); var a=n.result(this, 'defaults'); r=n.defaults(n.extend({}, a, r), a), this.set(r, t), this.changed={}, this.initialize.apply(this, arguments);
        }; n.extend(l.prototype, o, {changed: null, validationError: null, idAttribute: 'id', cidPrefix: 'c', initialize: function() {}, toJSON: function(e) {
          return n.clone(this.attributes);
        }, sync: function() {
          return t.sync.apply(this, arguments);
        }, get: function(e) {
          return this.attributes[e];
        }, escape: function(e) {
          return n.escape(this.get(e));
        }, has: function(e) {
          return null!=this.get(e);
        }, matches: function(e) {
          return !!n.iteratee(e, this)(this.attributes);
        }, set: function(e, t, r) {
          if (null==e) return this; var a; if ('object'==typeof e?(a=e, r=t):(a={})[e]=t, r||(r={}), !this._validate(a, r)) return !1; var i=r.unset; var o=r.silent; var s=[]; var l=this._changing; this._changing=!0, l||(this._previousAttributes=n.clone(this.attributes), this.changed={}); var u=this.attributes; var c=this.changed; var h=this._previousAttributes; for (var f in a)t=a[f], n.isEqual(u[f], t)||s.push(f), n.isEqual(h[f], t)?delete c[f]:c[f]=t, i?delete u[f]:u[f]=t; if (this.idAttribute in a&&(this.id=this.get(this.idAttribute)), !o) {
            s.length&&(this._pending=r); for (var d=0; d<s.length; d++) this.trigger('change:'+s[d], this, u[s[d]], r);
          } if (l) return this; if (!o) for (;this._pending;)r=this._pending, this._pending=!1, this.trigger('change', this, r); return this._pending=!1, this._changing=!1, this;
        }, unset: function(e, t) {
          return this.set(e, void 0, n.extend({}, t, {unset: !0}));
        }, clear: function(e) {
          var t={}; for (var r in this.attributes)t[r]=void 0; return this.set(t, n.extend({}, e, {unset: !0}));
        }, hasChanged: function(e) {
          return null==e?!n.isEmpty(this.changed):n.has(this.changed, e);
        }, changedAttributes: function(e) {
          if (!e) return !!this.hasChanged()&&n.clone(this.changed); var t=this._changing?this._previousAttributes:this.attributes; var r={}; for (var a in e) {
            var i=e[a]; n.isEqual(t[a], i)||(r[a]=i);
          } return !!n.size(r)&&r;
        }, previous: function(e) {
          return null!=e&&this._previousAttributes?this._previousAttributes[e]:null;
        }, previousAttributes: function() {
          return n.clone(this._previousAttributes);
        }, fetch: function(e) {
          e=n.extend({parse: !0}, e); var t=this; var r=e.success; return e.success=function(n) {
            var a=e.parse?t.parse(n, e):n; if (!t.set(a, e)) return !1; r&&r.call(e.context, t, n, e), t.trigger('sync', t, n, e);
          }, wrapError(this, e), this.sync('read', this, e);
        }, save: function(e, t, r) {
          var a; null==e||'object'==typeof e?(a=e, r=t):(a={})[e]=t; var i=(r=n.extend({validate: !0, parse: !0}, r)).wait; if (a&&!i) {
            if (!this.set(a, r)) return !1;
          } else if (!this._validate(a, r)) return !1; var o=this; var s=r.success; var l=this.attributes; r.success=function(e) {
            o.attributes=l; var t=r.parse?o.parse(e, r):e; if (i&&(t=n.extend({}, a, t)), t&&!o.set(t, r)) return !1; s&&s.call(r.context, o, e, r), o.trigger('sync', o, e, r);
          }, wrapError(this, r), a&&i&&(this.attributes=n.extend({}, l, a)); var u=this.isNew()?'create':r.patch?'patch':'update'; 'patch'!==u||r.attrs||(r.attrs=a); var c=this.sync(u, this, r); return this.attributes=l, c;
        }, destroy: function(e) {
          e=e?n.clone(e):{}; var t=this; var r=e.success; var a=e.wait; var destroy=function() {
            t.stopListening(), t.trigger('destroy', t, t.collection, e);
          }; e.success=function(n) {
            a&&destroy(), r&&r.call(e.context, t, n, e), t.isNew()||t.trigger('sync', t, n, e);
          }; var i=!1; return this.isNew()?n.defer(e.success):(wrapError(this, e), i=this.sync('delete', this, e)), a||destroy(), i;
        }, url: function() {
          var e=n.result(this, 'urlRoot')||n.result(this.collection, 'url')||urlError(); if (this.isNew()) return e; var t=this.get(this.idAttribute); return e.replace(/[^\/]$/, '$&/')+encodeURIComponent(t);
        }, parse: function(e, t) {
          return e;
        }, clone: function() {
          return new this.constructor(this.attributes);
        }, isNew: function() {
          return !this.has(this.idAttribute);
        }, isValid: function(e) {
          return this._validate({}, n.extend({}, e, {validate: !0}));
        }, _validate: function(e, t) {
          if (!t.validate||!this.validate) return !0; e=n.extend({}, this.attributes, e); var r=this.validationError=this.validate(e, t)||null; return !r||(this.trigger('invalid', this, r, n.extend(t, {validationError: r})), !1);
        }}), addUnderscoreMethods(l, {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1}, 'attributes'); var u=t.Collection=function(e, t) {
          t||(t={}), t.model&&(this.model=t.model), void 0!==t.comparator&&(this.comparator=t.comparator), this._reset(), this.initialize.apply(this, arguments), e&&this.reset(e, n.extend({silent: !0}, t));
        }; var c={add: !0, remove: !0, merge: !0}; var h={add: !0, remove: !1}; var splice=function(e, t, n) {
          n=Math.min(Math.max(n, 0), e.length); var r; var a=Array(e.length-n); var i=t.length; for (r=0; r<a.length; r++)a[r]=e[r+n]; for (r=0; r<i; r++)e[r+n]=t[r]; for (r=0; r<a.length; r++)e[r+i+n]=a[r];
        }; n.extend(u.prototype, o, {model: l, initialize: function() {}, toJSON: function(e) {
          return this.map((function(t) {
            return t.toJSON(e);
          }));
        }, sync: function() {
          return t.sync.apply(this, arguments);
        }, add: function(e, t) {
          return this.set(e, n.extend({merge: !1}, t, h));
        }, remove: function(e, t) {
          t=n.extend({}, t); var r=!n.isArray(e); e=r?[e]:e.slice(); var a=this._removeModels(e, t); return !t.silent&&a.length&&(t.changes={added: [], merged: [], removed: a}, this.trigger('update', this, t)), r?a[0]:a;
        }, set: function(e, t) {
          if (null!=e) {
            (t=n.extend({}, c, t)).parse&&!this._isModel(e)&&(e=this.parse(e, t)||[]); var r=!n.isArray(e); e=r?[e]:e.slice(); var a=t.at; null!=a&&(a=+a), a>this.length&&(a=this.length), a<0&&(a+=this.length+1); var i; var o; var s=[]; var l=[]; var u=[]; var h=[]; var f={}; var d=t.add; var p=t.merge; var m=t.remove; var g=!1; var v=this.comparator&&null==a&&!1!==t.sort; var y=n.isString(this.comparator)?this.comparator:null; for (o=0; o<e.length; o++) {
              i=e[o]; var b=this.get(i); if (b) {
                if (p&&i!==b) {
                  var w=this._isModel(i)?i.attributes:i; t.parse&&(w=b.parse(w, t)), b.set(w, t), u.push(b), v&&!g&&(g=b.hasChanged(y));
                }f[b.cid]||(f[b.cid]=!0, s.push(b)), e[o]=b;
              } else d&&(i=e[o]=this._prepareModel(i, t))&&(l.push(i), this._addReference(i, t), f[i.cid]=!0, s.push(i));
            } if (m) {
              for (o=0; o<this.length; o++)f[(i=this.models[o]).cid]||h.push(i); h.length&&this._removeModels(h, t);
            } var x=!1; var k=!v&&d&&m; if (s.length&&k?(x=this.length!==s.length||n.some(this.models, (function(e, t) {
              return e!==s[t];
            })), this.models.length=0, splice(this.models, s, 0), this.length=this.models.length):l.length&&(v&&(g=!0), splice(this.models, l, null==a?this.length:a), this.length=this.models.length), g&&this.sort({silent: !0}), !t.silent) {
              for (o=0; o<l.length; o++)null!=a&&(t.index=a+o), (i=l[o]).trigger('add', i, this, t); (g||x)&&this.trigger('sort', this, t), (l.length||h.length||u.length)&&(t.changes={added: l, removed: h, merged: u}, this.trigger('update', this, t));
            } return r?e[0]:e;
          }
        }, reset: function(e, t) {
          t=t?n.clone(t):{}; for (var r=0; r<this.models.length; r++) this._removeReference(this.models[r], t); return t.previousModels=this.models, this._reset(), e=this.add(e, n.extend({silent: !0}, t)), t.silent||this.trigger('reset', this, t), e;
        }, push: function(e, t) {
          return this.add(e, n.extend({at: this.length}, t));
        }, pop: function(e) {
          var t=this.at(this.length-1); return this.remove(t, e);
        }, unshift: function(e, t) {
          return this.add(e, n.extend({at: 0}, t));
        }, shift: function(e) {
          var t=this.at(0); return this.remove(t, e);
        }, slice: function() {
          return i.apply(this.models, arguments);
        }, get: function(e) {
          if (null!=e) return this._byId[e]||this._byId[this.modelId(e.attributes||e)]||e.cid&&this._byId[e.cid];
        }, has: function(e) {
          return null!=this.get(e);
        }, at: function(e) {
          return e<0&&(e+=this.length), this.models[e];
        }, where: function(e, t) {
          return this[t?'find':'filter'](e);
        }, findWhere: function(e) {
          return this.where(e, !0);
        }, sort: function(e) {
          var t=this.comparator; if (!t) throw new Error('Cannot sort a set without a comparator'); e||(e={}); var r=t.length; return n.isFunction(t)&&(t=n.bind(t, this)), 1===r||n.isString(t)?this.models=this.sortBy(t):this.models.sort(t), e.silent||this.trigger('sort', this, e), this;
        }, pluck: function(e) {
          return this.map(e+'');
        }, fetch: function(e) {
          var t=(e=n.extend({parse: !0}, e)).success; var r=this; return e.success=function(n) {
            var a=e.reset?'reset':'set'; r[a](n, e), t&&t.call(e.context, r, n, e), r.trigger('sync', r, n, e);
          }, wrapError(this, e), this.sync('read', this, e);
        }, create: function(e, t) {
          var r=(t=t?n.clone(t):{}).wait; if (!(e=this._prepareModel(e, t))) return !1; r||this.add(e, t); var a=this; var i=t.success; return t.success=function(e, t, n) {
            r&&a.add(e, n), i&&i.call(n.context, e, t, n);
          }, e.save(null, t), e;
        }, parse: function(e, t) {
          return e;
        }, clone: function() {
          return new this.constructor(this.models, {model: this.model, comparator: this.comparator});
        }, modelId: function(e) {
          return e[this.model.prototype.idAttribute||'id'];
        }, _reset: function() {
          this.length=0, this.models=[], this._byId={};
        }, _prepareModel: function(e, t) {
          if (this._isModel(e)) return e.collection||(e.collection=this), e; (t=t?n.clone(t):{}).collection=this; var r=new this.model(e, t); return r.validationError?(this.trigger('invalid', this, r.validationError, t), !1):r;
        }, _removeModels: function(e, t) {
          for (var n=[], r=0; r<e.length; r++) {
            var a=this.get(e[r]); if (a) {
              var i=this.indexOf(a); this.models.splice(i, 1), this.length--, delete this._byId[a.cid]; var o=this.modelId(a.attributes); null!=o&&delete this._byId[o], t.silent||(t.index=i, a.trigger('remove', a, this, t)), n.push(a), this._removeReference(a, t);
            }
          } return n;
        }, _isModel: function(e) {
          return e instanceof l;
        }, _addReference: function(e, t) {
          this._byId[e.cid]=e; var n=this.modelId(e.attributes); null!=n&&(this._byId[n]=e), e.on('all', this._onModelEvent, this);
        }, _removeReference: function(e, t) {
          delete this._byId[e.cid]; var n=this.modelId(e.attributes); null!=n&&delete this._byId[n], this===e.collection&&delete e.collection, e.off('all', this._onModelEvent, this);
        }, _onModelEvent: function(e, t, n, r) {
          if (t) {
            if (('add'===e||'remove'===e)&&n!==this) return; if ('destroy'===e&&this.remove(t, r), 'change'===e) {
              var a=this.modelId(t.previousAttributes()); var i=this.modelId(t.attributes); a!==i&&(null!=a&&delete this._byId[a], null!=i&&(this._byId[i]=t));
            }
          } this.trigger.apply(this, arguments);
        }}), addUnderscoreMethods(u, {forEach: 3, each: 3, map: 3, collect: 3, reduce: 0, foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3, select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3, contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3, head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3, without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3, isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3, sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3}, 'models'); var f=t.View=function(e) {
          this.cid=n.uniqueId('view'), n.extend(this, n.pick(e, p)), this._ensureElement(), this.initialize.apply(this, arguments);
        }; var d=/^(\S+)\s*(.*)$/; var p=['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events']; n.extend(f.prototype, o, {tagName: 'div', $: function(e) {
          return this.$el.find(e);
        }, initialize: function() {}, render: function() {
          return this;
        }, remove: function() {
          return this._removeElement(), this.stopListening(), this;
        }, _removeElement: function() {
          this.$el.remove();
        }, setElement: function(e) {
          return this.undelegateEvents(), this._setElement(e), this.delegateEvents(), this;
        }, _setElement: function(e) {
          this.$el=e instanceof t.$?e:t.$(e), this.el=this.$el[0];
        }, delegateEvents: function(e) {
          if (e||(e=n.result(this, 'events')), !e) return this; for (var t in this.undelegateEvents(), e) {
            var r=e[t]; if (n.isFunction(r)||(r=this[r]), r) {
              var a=t.match(d); this.delegate(a[1], a[2], n.bind(r, this));
            }
          } return this;
        }, delegate: function(e, t, n) {
          return this.$el.on(e+'.delegateEvents'+this.cid, t, n), this;
        }, undelegateEvents: function() {
          return this.$el&&this.$el.off('.delegateEvents'+this.cid), this;
        }, undelegate: function(e, t, n) {
          return this.$el.off(e+'.delegateEvents'+this.cid, t, n), this;
        }, _createElement: function(e) {
          return document.createElement(e);
        }, _ensureElement: function() {
          if (this.el) this.setElement(n.result(this, 'el')); else {
            var e=n.extend({}, n.result(this, 'attributes')); this.id&&(e.id=n.result(this, 'id')), this.className&&(e.class=n.result(this, 'className')), this.setElement(this._createElement(n.result(this, 'tagName'))), this._setAttributes(e);
          }
        }, _setAttributes: function(e) {
          this.$el.attr(e);
        }}), t.sync=function(e, r, a) {
          var i=m[e]; n.defaults(a||(a={}), {emulateHTTP: t.emulateHTTP, emulateJSON: t.emulateJSON}); var o={type: i, dataType: 'json'}; if (a.url||(o.url=n.result(r, 'url')||urlError()), null!=a.data||!r||'create'!==e&&'update'!==e&&'patch'!==e||(o.contentType='application/json', o.data=JSON.stringify(a.attrs||r.toJSON(a))), a.emulateJSON&&(o.contentType='application/x-www-form-urlencoded', o.data=o.data?{model: o.data}:{}), a.emulateHTTP&&('PUT'===i||'DELETE'===i||'PATCH'===i)) {
            o.type='POST', a.emulateJSON&&(o.data._method=i); var s=a.beforeSend; a.beforeSend=function(e) {
              if (e.setRequestHeader('X-HTTP-Method-Override', i), s) return s.apply(this, arguments);
            };
          }'GET'===o.type||a.emulateJSON||(o.processData=!1); var l=a.error; a.error=function(e, t, n) {
            a.textStatus=t, a.errorThrown=n, l&&l.call(a.context, e, t, n);
          }; var u=a.xhr=t.ajax(n.extend(o, a)); return r.trigger('request', r, u, a), u;
        }; var m={create: 'POST', update: 'PUT', patch: 'PATCH', delete: 'DELETE', read: 'GET'}; t.ajax=function() {
          return t.$.ajax.apply(t.$, arguments);
        }; var g=t.Router=function(e) {
          e||(e={}), e.routes&&(this.routes=e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
        }; var v=/\((.*?)\)/g; var y=/(\(\?)?:\w+/g; var b=/\*\w+/g; var w=/[\-{}\[\]+?.,\\\^$|#\s]/g; n.extend(g.prototype, o, {initialize: function() {}, route: function(e, r, a) {
          n.isRegExp(e)||(e=this._routeToRegExp(e)), n.isFunction(r)&&(a=r, r=''), a||(a=this[r]); var i=this; return t.history.route(e, (function(n) {
            var o=i._extractParameters(e, n); !1!==i.execute(a, o, r)&&(i.trigger.apply(i, ['route:'+r].concat(o)), i.trigger('route', r, o), t.history.trigger('route', i, r, o));
          })), this;
        }, execute: function(e, t, n) {
          e&&e.apply(this, t);
        }, navigate: function(e, n) {
          return t.history.navigate(e, n), this;
        }, _bindRoutes: function() {
          if (this.routes) {
            this.routes=n.result(this, 'routes'); for (var e, t=n.keys(this.routes); null!=(e=t.pop());) this.route(e, this.routes[e]);
          }
        }, _routeToRegExp: function(e) {
          return e=e.replace(w, '\\$&').replace(v, '(?:$1)?').replace(y, (function(e, t) {
            return t?e:'([^/?]+)';
          })).replace(b, '([^?]*?)'), new RegExp('^'+e+'(?:\\?([\\s\\S]*))?$');
        }, _extractParameters: function(e, t) {
          var r=e.exec(t).slice(1); return n.map(r, (function(e, t) {
            return t===r.length-1?e||null:e?decodeURIComponent(e):null;
          }));
        }}); var x=t.History=function() {
          this.handlers=[], this.checkUrl=n.bind(this.checkUrl, this), 'undefined'!=typeof window&&(this.location=window.location, this.history=window.history);
        }; var k=/^[#\/]|\s+$/g; var C=/^\/+|\/+$/g; var S=/#.*$/; x.started=!1, n.extend(x.prototype, o, {interval: 50, atRoot: function() {
          return this.location.pathname.replace(/[^\/]$/, '$&/')===this.root&&!this.getSearch();
        }, matchRoot: function() {
          return this.decodeFragment(this.location.pathname).slice(0, this.root.length-1)+'/'===this.root;
        }, decodeFragment: function(e) {
          return decodeURI(e.replace(/%25/g, '%2525'));
        }, getSearch: function() {
          var e=this.location.href.replace(/#.*/, '').match(/\?.+/); return e?e[0]:'';
        }, getHash: function(e) {
          var t=(e||this).location.href.match(/#(.*)$/); return t?t[1]:'';
        }, getPath: function() {
          var e=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1); return '/'===e.charAt(0)?e.slice(1):e;
        }, getFragment: function(e) {
          return null==e&&(e=this._usePushState||!this._wantsHashChange?this.getPath():this.getHash()), e.replace(k, '');
        }, start: function(e) {
          if (x.started) throw new Error('Backbone.history has already been started'); if (x.started=!0, this.options=n.extend({root: '/'}, this.options, e), this.root=this.options.root, this._wantsHashChange=!1!==this.options.hashChange, this._hasHashChange='onhashchange'in window&&(void 0===document.documentMode||document.documentMode>7), this._useHashChange=this._wantsHashChange&&this._hasHashChange, this._wantsPushState=!!this.options.pushState, this._hasPushState=!(!this.history||!this.history.pushState), this._usePushState=this._wantsPushState&&this._hasPushState, this.fragment=this.getFragment(), this.root=('/'+this.root+'/').replace(C, '/'), this._wantsHashChange&&this._wantsPushState) {
            if (!this._hasPushState&&!this.atRoot()) {
              var t=this.root.slice(0, -1)||'/'; return this.location.replace(t+'#'+this.getPath()), !0;
            } this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(), {replace: !0});
          } if (!this._hasHashChange&&this._wantsHashChange&&!this._usePushState) {
            this.iframe=document.createElement('iframe'), this.iframe.src='javascript:0', this.iframe.style.display='none', this.iframe.tabIndex=-1; var r=document.body; var a=r.insertBefore(this.iframe, r.firstChild).contentWindow; a.document.open(), a.document.close(), a.location.hash='#'+this.fragment;
          } var i=window.addEventListener||function(e, t) {
            return attachEvent('on'+e, t);
          }; if (this._usePushState?i('popstate', this.checkUrl, !1):this._useHashChange&&!this.iframe?i('hashchange', this.checkUrl, !1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl();
        }, stop: function() {
          var e=window.removeEventListener||function(e, t) {
            return detachEvent('on'+e, t);
          }; this._usePushState?e('popstate', this.checkUrl, !1):this._useHashChange&&!this.iframe&&e('hashchange', this.checkUrl, !1), this.iframe&&(document.body.removeChild(this.iframe), this.iframe=null), this._checkUrlInterval&&clearInterval(this._checkUrlInterval), x.started=!1;
        }, route: function(e, t) {
          this.handlers.unshift({route: e, callback: t});
        }, checkUrl: function(e) {
          var t=this.getFragment(); if (t===this.fragment&&this.iframe&&(t=this.getHash(this.iframe.contentWindow)), t===this.fragment) return !1; this.iframe&&this.navigate(t), this.loadUrl();
        }, loadUrl: function(e) {
          return !!this.matchRoot()&&(e=this.fragment=this.getFragment(e), n.some(this.handlers, (function(t) {
            if (t.route.test(e)) return t.callback(e), !0;
          })));
        }, navigate: function(e, t) {
          if (!x.started) return !1; t&&!0!==t||(t={trigger: !!t}), e=this.getFragment(e||''); var n=this.root; ''!==e&&'?'!==e.charAt(0)||(n=n.slice(0, -1)||'/'); var r=n+e; if (e=this.decodeFragment(e.replace(S, '')), this.fragment!==e) {
            if (this.fragment=e, this._usePushState) this.history[t.replace?'replaceState':'pushState']({}, document.title, r); else {
              if (!this._wantsHashChange) return this.location.assign(r); if (this._updateHash(this.location, e, t.replace), this.iframe&&e!==this.getHash(this.iframe.contentWindow)) {
                var a=this.iframe.contentWindow; t.replace||(a.document.open(), a.document.close()), this._updateHash(a.location, e, t.replace);
              }
            } return t.trigger?this.loadUrl(e):void 0;
          }
        }, _updateHash: function(e, t, n) {
          if (n) {
            var r=e.href.replace(/(javascript:|#).*$/, ''); e.replace(r+'#'+t);
          } else e.hash='#'+t;
        }}), t.history=new x, l.extend=u.extend=g.extend=f.extend=x.extend=function(e, t) {
          var r; var a=this; return r=e&&n.has(e, 'constructor')?e.constructor:function() {
            return a.apply(this, arguments);
          }, n.extend(r, a, t), r.prototype=n.create(a.prototype, e), r.prototype.constructor=r, r.__super__=a.prototype, r;
        }; var urlError=function() {
          throw new Error('A "url" property or function must be specified');
        }; var wrapError=function(e, t) {
          var n=t.error; t.error=function(r) {
            n&&n.call(t.context, e, r, t), e.trigger('error', e, r, t);
          };
        }; return t;
      }(o, n, e, t);
    }.apply(t, a))||(e.exports=i);
  }).call(this, n(41));
}, function(e, t, n) {
  var r; (function() {
    var n=this; var a=n._; var i=Array.prototype; var o=Object.prototype; var s=Function.prototype; var l=i.push; var u=i.slice; var c=o.toString; var h=o.hasOwnProperty; var f=Array.isArray; var d=Object.keys; var p=s.bind; var m=Object.create; var Ctor=function() {}; var _=function(e) {
      return e instanceof _?e:this instanceof _?void(this._wrapped=e):new _(e);
    }; e.exports&&(t=e.exports=_), t._=_, _.VERSION='1.8.3'; var optimizeCb=function(e, t, n) {
      if (void 0===t) return e; switch (null==n?3:n) {
        case 1: return function(n) {
          return e.call(t, n);
        }; case 2: return function(n, r) {
          return e.call(t, n, r);
        }; case 3: return function(n, r, a) {
          return e.call(t, n, r, a);
        }; case 4: return function(n, r, a, i) {
          return e.call(t, n, r, a, i);
        };
      } return function() {
        return e.apply(t, arguments);
      };
    }; var cb=function(e, t, n) {
      return null==e?_.identity:_.isFunction(e)?optimizeCb(e, t, n):_.isObject(e)?_.matcher(e):_.property(e);
    }; _.iteratee=function(e, t) {
      return cb(e, t, 1/0);
    }; var createAssigner=function(e, t) {
      return function(n) {
        var r=arguments.length; if (r<2||null==n) return n; for (var a=1; a<r; a++) {
          for (var i=arguments[a], o=e(i), s=o.length, l=0; l<s; l++) {
            var u=o[l]; t&&void 0!==n[u]||(n[u]=i[u]);
          }
        } return n;
      };
    }; var baseCreate=function(e) {
      if (!_.isObject(e)) return {}; if (m) return m(e); Ctor.prototype=e; var t=new Ctor; return Ctor.prototype=null, t;
    }; var property=function(e) {
      return function(t) {
        return null==t?void 0:t[e];
      };
    }; var g=Math.pow(2, 53)-1; var v=property('length'); var isArrayLike=function(e) {
      var t=v(e); return 'number'==typeof t&&t>=0&&t<=g;
    }; function createReduce(e) {
      function iterator(t, n, r, a, i, o) {
        for (;i>=0&&i<o; i+=e) {
          var s=a?a[i]:i; r=n(r, t[s], s, t);
        } return r;
      } return function(t, n, r, a) {
        n=optimizeCb(n, a, 4); var i=!isArrayLike(t)&&_.keys(t); var o=(i||t).length; var s=e>0?0:o-1; return arguments.length<3&&(r=t[i?i[s]:s], s+=e), iterator(t, n, r, i, s, o);
      };
    }_.each=_.forEach=function(e, t, n) {
      var r; var a; if (t=optimizeCb(t, n), isArrayLike(e)) for (r=0, a=e.length; r<a; r++)t(e[r], r, e); else {
        var i=_.keys(e); for (r=0, a=i.length; r<a; r++)t(e[i[r]], i[r], e);
      } return e;
    }, _.map=_.collect=function(e, t, n) {
      t=cb(t, n); for (var r=!isArrayLike(e)&&_.keys(e), a=(r||e).length, i=Array(a), o=0; o<a; o++) {
        var s=r?r[o]:o; i[o]=t(e[s], s, e);
      } return i;
    }, _.reduce=_.foldl=_.inject=createReduce(1), _.reduceRight=_.foldr=createReduce(-1), _.find=_.detect=function(e, t, n) {
      var r; if (void 0!==(r=isArrayLike(e)?_.findIndex(e, t, n):_.findKey(e, t, n))&&-1!==r) return e[r];
    }, _.filter=_.select=function(e, t, n) {
      var r=[]; return t=cb(t, n), _.each(e, (function(e, n, a) {
        t(e, n, a)&&r.push(e);
      })), r;
    }, _.reject=function(e, t, n) {
      return _.filter(e, _.negate(cb(t)), n);
    }, _.every=_.all=function(e, t, n) {
      t=cb(t, n); for (var r=!isArrayLike(e)&&_.keys(e), a=(r||e).length, i=0; i<a; i++) {
        var o=r?r[i]:i; if (!t(e[o], o, e)) return !1;
      } return !0;
    }, _.some=_.any=function(e, t, n) {
      t=cb(t, n); for (var r=!isArrayLike(e)&&_.keys(e), a=(r||e).length, i=0; i<a; i++) {
        var o=r?r[i]:i; if (t(e[o], o, e)) return !0;
      } return !1;
    }, _.contains=_.includes=_.include=function(e, t, n, r) {
      return isArrayLike(e)||(e=_.values(e)), ('number'!=typeof n||r)&&(n=0), _.indexOf(e, t, n)>=0;
    }, _.invoke=function(e, t) {
      var n=u.call(arguments, 2); var r=_.isFunction(t); return _.map(e, (function(e) {
        var a=r?t:e[t]; return null==a?a:a.apply(e, n);
      }));
    }, _.pluck=function(e, t) {
      return _.map(e, _.property(t));
    }, _.where=function(e, t) {
      return _.filter(e, _.matcher(t));
    }, _.findWhere=function(e, t) {
      return _.find(e, _.matcher(t));
    }, _.max=function(e, t, n) {
      var r; var a; var i=-1/0; var o=-1/0; if (null==t&&null!=e) for (var s=0, l=(e=isArrayLike(e)?e:_.values(e)).length; s<l; s++)(r=e[s])>i&&(i=r); else {
        t=cb(t, n), _.each(e, (function(e, n, r) {
          ((a=t(e, n, r))>o||a===-1/0&&i===-1/0)&&(i=e, o=a);
        }));
      } return i;
    }, _.min=function(e, t, n) {
      var r; var a; var i=1/0; var o=1/0; if (null==t&&null!=e) for (var s=0, l=(e=isArrayLike(e)?e:_.values(e)).length; s<l; s++)(r=e[s])<i&&(i=r); else {
        t=cb(t, n), _.each(e, (function(e, n, r) {
          ((a=t(e, n, r))<o||a===1/0&&i===1/0)&&(i=e, o=a);
        }));
      } return i;
    }, _.shuffle=function(e) {
      for (var t, n=isArrayLike(e)?e:_.values(e), r=n.length, a=Array(r), i=0; i<r; i++)(t=_.random(0, i))!==i&&(a[i]=a[t]), a[t]=n[i]; return a;
    }, _.sample=function(e, t, n) {
      return null==t||n?(isArrayLike(e)||(e=_.values(e)), e[_.random(e.length-1)]):_.shuffle(e).slice(0, Math.max(0, t));
    }, _.sortBy=function(e, t, n) {
      return t=cb(t, n), _.pluck(_.map(e, (function(e, n, r) {
        return {value: e, index: n, criteria: t(e, n, r)};
      })).sort((function(e, t) {
        var n=e.criteria; var r=t.criteria; if (n!==r) {
          if (n>r||void 0===n) return 1; if (n<r||void 0===r) return -1;
        } return e.index-t.index;
      })), 'value');
    }; var group=function(e) {
      return function(t, n, r) {
        var a={}; return n=cb(n, r), _.each(t, (function(r, i) {
          var o=n(r, i, t); e(a, r, o);
        })), a;
      };
    }; _.groupBy=group((function(e, t, n) {
_.has(e, n)?e[n].push(t):e[n]=[t];
    })), _.indexBy=group((function(e, t, n) {
      e[n]=t;
    })), _.countBy=group((function(e, t, n) {
_.has(e, n)?e[n]++:e[n]=1;
    })), _.toArray=function(e) {
      return e?_.isArray(e)?u.call(e):isArrayLike(e)?_.map(e, _.identity):_.values(e):[];
    }, _.size=function(e) {
      return null==e?0:isArrayLike(e)?e.length:_.keys(e).length;
    }, _.partition=function(e, t, n) {
      t=cb(t, n); var r=[]; var a=[]; return _.each(e, (function(e, n, i) {
        (t(e, n, i)?r:a).push(e);
      })), [r, a];
    }, _.first=_.head=_.take=function(e, t, n) {
      if (null!=e) return null==t||n?e[0]:_.initial(e, e.length-t);
    }, _.initial=function(e, t, n) {
      return u.call(e, 0, Math.max(0, e.length-(null==t||n?1:t)));
    }, _.last=function(e, t, n) {
      if (null!=e) return null==t||n?e[e.length-1]:_.rest(e, Math.max(0, e.length-t));
    }, _.rest=_.tail=_.drop=function(e, t, n) {
      return u.call(e, null==t||n?1:t);
    }, _.compact=function(e) {
      return _.filter(e, _.identity);
    }; var flatten=function(e, t, n, r) {
      for (var a=[], i=0, o=r||0, s=v(e); o<s; o++) {
        var l=e[o]; if (isArrayLike(l)&&(_.isArray(l)||_.isArguments(l))) {
          t||(l=flatten(l, t, n)); var u=0; var c=l.length; for (a.length+=c; u<c;)a[i++]=l[u++];
        } else n||(a[i++]=l);
      } return a;
    }; function createPredicateIndexFinder(e) {
      return function(t, n, r) {
        n=cb(n, r); for (var a=v(t), i=e>0?0:a-1; i>=0&&i<a; i+=e) if (n(t[i], i, t)) return i; return -1;
      };
    } function createIndexFinder(e, t, n) {
      return function(r, a, i) {
        var o=0; var s=v(r); if ('number'==typeof i)e>0?o=i>=0?i:Math.max(i+s, o):s=i>=0?Math.min(i+1, s):i+s+1; else if (n&&i&&s) return r[i=n(r, a)]===a?i:-1; if (a!=a) return (i=t(u.call(r, o, s), _.isNaN))>=0?i+o:-1; for (i=e>0?o:s-1; i>=0&&i<s; i+=e) if (r[i]===a) return i; return -1;
      };
    }_.flatten=function(e, t) {
      return flatten(e, t, !1);
    }, _.without=function(e) {
      return _.difference(e, u.call(arguments, 1));
    }, _.uniq=_.unique=function(e, t, n, r) {
      _.isBoolean(t)||(r=n, n=t, t=!1), null!=n&&(n=cb(n, r)); for (var a=[], i=[], o=0, s=v(e); o<s; o++) {
        var l=e[o]; var u=n?n(l, o, e):l; t?(o&&i===u||a.push(l), i=u):n?_.contains(i, u)||(i.push(u), a.push(l)):_.contains(a, l)||a.push(l);
      } return a;
    }, _.union=function() {
      return _.uniq(flatten(arguments, !0, !0));
    }, _.intersection=function(e) {
      for (var t=[], n=arguments.length, r=0, a=v(e); r<a; r++) {
        var i=e[r]; if (!_.contains(t, i)) {
          for (var o=1; o<n&&_.contains(arguments[o], i); o++);o===n&&t.push(i);
        }
      } return t;
    }, _.difference=function(e) {
      var t=flatten(arguments, !0, !0, 1); return _.filter(e, (function(e) {
        return !_.contains(t, e);
      }));
    }, _.zip=function() {
      return _.unzip(arguments);
    }, _.unzip=function(e) {
      for (var t=e&&_.max(e, v).length||0, n=Array(t), r=0; r<t; r++)n[r]=_.pluck(e, r); return n;
    }, _.object=function(e, t) {
      for (var n={}, r=0, a=v(e); r<a; r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1]; return n;
    }, _.findIndex=createPredicateIndexFinder(1), _.findLastIndex=createPredicateIndexFinder(-1), _.sortedIndex=function(e, t, n, r) {
      for (var a=(n=cb(n, r, 1))(t), i=0, o=v(e); i<o;) {
        var s=Math.floor((i+o)/2); n(e[s])<a?i=s+1:o=s;
      } return i;
    }, _.indexOf=createIndexFinder(1, _.findIndex, _.sortedIndex), _.lastIndexOf=createIndexFinder(-1, _.findLastIndex), _.range=function(e, t, n) {
      null==t&&(t=e||0, e=0), n=n||1; for (var r=Math.max(Math.ceil((t-e)/n), 0), a=Array(r), i=0; i<r; i++, e+=n)a[i]=e; return a;
    }; var executeBound=function(e, t, n, r, a) {
      if (!(r instanceof t)) return e.apply(n, a); var i=baseCreate(e.prototype); var o=e.apply(i, a); return _.isObject(o)?o:i;
    }; _.bind=function(e, t) {
      if (p&&e.bind===p) return p.apply(e, u.call(arguments, 1)); if (!_.isFunction(e)) throw new TypeError('Bind must be called on a function'); var n=u.call(arguments, 2); var bound=function() {
        return executeBound(e, bound, t, this, n.concat(u.call(arguments)));
      }; return bound;
    }, _.partial=function(e) {
      var t=u.call(arguments, 1); var bound=function() {
        for (var n=0, r=t.length, a=Array(r), i=0; i<r; i++)a[i]=t[i]===_?arguments[n++]:t[i]; for (;n<arguments.length;)a.push(arguments[n++]); return executeBound(e, bound, this, this, a);
      }; return bound;
    }, _.bindAll=function(e) {
      var t; var n; var r=arguments.length; if (r<=1) throw new Error('bindAll must be passed function names'); for (t=1; t<r; t++)e[n=arguments[t]]=_.bind(e[n], e); return e;
    }, _.memoize=function(e, t) {
      var memoize=function(n) {
        var r=memoize.cache; var a=''+(t?t.apply(this, arguments):n); return _.has(r, a)||(r[a]=e.apply(this, arguments)), r[a];
      }; return memoize.cache={}, memoize;
    }, _.delay=function(e, t) {
      var n=u.call(arguments, 2); return setTimeout((function() {
        return e.apply(null, n);
      }), t);
    }, _.defer=_.partial(_.delay, _, 1), _.throttle=function(e, t, n) {
      var r; var a; var i; var o=null; var s=0; n||(n={}); var later=function() {
        s=!1===n.leading?0:_.now(), o=null, i=e.apply(r, a), o||(r=a=null);
      }; return function() {
        var l=_.now(); s||!1!==n.leading||(s=l); var u=t-(l-s); return r=this, a=arguments, u<=0||u>t?(o&&(clearTimeout(o), o=null), s=l, i=e.apply(r, a), o||(r=a=null)):o||!1===n.trailing||(o=setTimeout(later, u)), i;
      };
    }, _.debounce=function(e, t, n) {
      var r; var a; var i; var o; var s; var later=function() {
        var l=_.now()-o; l<t&&l>=0?r=setTimeout(later, t-l):(r=null, n||(s=e.apply(i, a), r||(i=a=null)));
      }; return function() {
        i=this, a=arguments, o=_.now(); var l=n&&!r; return r||(r=setTimeout(later, t)), l&&(s=e.apply(i, a), i=a=null), s;
      };
    }, _.wrap=function(e, t) {
      return _.partial(t, e);
    }, _.negate=function(e) {
      return function() {
        return !e.apply(this, arguments);
      };
    }, _.compose=function() {
      var e=arguments; var t=e.length-1; return function() {
        for (var n=t, r=e[t].apply(this, arguments); n--;)r=e[n].call(this, r); return r;
      };
    }, _.after=function(e, t) {
      return function() {
        if (--e<1) return t.apply(this, arguments);
      };
    }, _.before=function(e, t) {
      var n; return function() {
        return --e>0&&(n=t.apply(this, arguments)), e<=1&&(t=null), n;
      };
    }, _.once=_.partial(_.before, 2); var y=!{toString: null}.propertyIsEnumerable('toString'); var b=['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; function collectNonEnumProps(e, t) {
      var n=b.length; var r=e.constructor; var a=_.isFunction(r)&&r.prototype||o; var i='constructor'; for (_.has(e, i)&&!_.contains(t, i)&&t.push(i); n--;)(i=b[n])in e&&e[i]!==a[i]&&!_.contains(t, i)&&t.push(i);
    }_.keys=function(e) {
      if (!_.isObject(e)) return []; if (d) return d(e); var t=[]; for (var n in e)_.has(e, n)&&t.push(n); return y&&collectNonEnumProps(e, t), t;
    }, _.allKeys=function(e) {
      if (!_.isObject(e)) return []; var t=[]; for (var n in e)t.push(n); return y&&collectNonEnumProps(e, t), t;
    }, _.values=function(e) {
      for (var t=_.keys(e), n=t.length, r=Array(n), a=0; a<n; a++)r[a]=e[t[a]]; return r;
    }, _.mapObject=function(e, t, n) {
      t=cb(t, n); for (var r, a=_.keys(e), i=a.length, o={}, s=0; s<i; s++)o[r=a[s]]=t(e[r], r, e); return o;
    }, _.pairs=function(e) {
      for (var t=_.keys(e), n=t.length, r=Array(n), a=0; a<n; a++)r[a]=[t[a], e[t[a]]]; return r;
    }, _.invert=function(e) {
      for (var t={}, n=_.keys(e), r=0, a=n.length; r<a; r++)t[e[n[r]]]=n[r]; return t;
    }, _.functions=_.methods=function(e) {
      var t=[]; for (var n in e)_.isFunction(e[n])&&t.push(n); return t.sort();
    }, _.extend=createAssigner(_.allKeys), _.extendOwn=_.assign=createAssigner(_.keys), _.findKey=function(e, t, n) {
      t=cb(t, n); for (var r, a=_.keys(e), i=0, o=a.length; i<o; i++) if (t(e[r=a[i]], r, e)) return r;
    }, _.pick=function(e, t, n) {
      var r; var a; var i={}; var o=e; if (null==o) return i; _.isFunction(t)?(a=_.allKeys(o), r=optimizeCb(t, n)):(a=flatten(arguments, !1, !1, 1), r=function(e, t, n) {
        return t in n;
      }, o=Object(o)); for (var s=0, l=a.length; s<l; s++) {
        var u=a[s]; var c=o[u]; r(c, u, o)&&(i[u]=c);
      } return i;
    }, _.omit=function(e, t, n) {
      if (_.isFunction(t))t=_.negate(t); else {
        var r=_.map(flatten(arguments, !1, !1, 1), String); t=function(e, t) {
          return !_.contains(r, t);
        };
      } return _.pick(e, t, n);
    }, _.defaults=createAssigner(_.allKeys, !0), _.create=function(e, t) {
      var n=baseCreate(e); return t&&_.extendOwn(n, t), n;
    }, _.clone=function(e) {
      return _.isObject(e)?_.isArray(e)?e.slice():_.extend({}, e):e;
    }, _.tap=function(e, t) {
      return t(e), e;
    }, _.isMatch=function(e, t) {
      var n=_.keys(t); var r=n.length; if (null==e) return !r; for (var a=Object(e), i=0; i<r; i++) {
        var o=n[i]; if (t[o]!==a[o]||!(o in a)) return !1;
      } return !0;
    }; var eq=function(e, t, n, r) {
      if (e===t) return 0!==e||1/e==1/t; if (null==e||null==t) return e===t; e instanceof _&&(e=e._wrapped), t instanceof _&&(t=t._wrapped); var a=c.call(e); if (a!==c.call(t)) return !1; switch (a) {
        case '[object RegExp]': case '[object String]': return ''+e==''+t; case '[object Number]': return +e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t; case '[object Date]': case '[object Boolean]': return +e==+t;
      } var i='[object Array]'===a; if (!i) {
        if ('object'!=typeof e||'object'!=typeof t) return !1; var o=e.constructor; var s=t.constructor; if (o!==s&&!(_.isFunction(o)&&o instanceof o&&_.isFunction(s)&&s instanceof s)&&'constructor'in e&&'constructor'in t) return !1;
      }r=r||[]; for (var l=(n=n||[]).length; l--;) if (n[l]===e) return r[l]===t; if (n.push(e), r.push(t), i) {
        if ((l=e.length)!==t.length) return !1; for (;l--;) if (!eq(e[l], t[l], n, r)) return !1;
      } else {
        var u; var h=_.keys(e); if (l=h.length, _.keys(t).length!==l) return !1; for (;l--;) if (u=h[l], !_.has(t, u)||!eq(e[u], t[u], n, r)) return !1;
      } return n.pop(), r.pop(), !0;
    }; _.isEqual=function(e, t) {
      return eq(e, t);
    }, _.isEmpty=function(e) {
      return null==e||(isArrayLike(e)&&(_.isArray(e)||_.isString(e)||_.isArguments(e))?0===e.length:0===_.keys(e).length);
    }, _.isElement=function(e) {
      return !(!e||1!==e.nodeType);
    }, _.isArray=f||function(e) {
      return '[object Array]'===c.call(e);
    }, _.isObject=function(e) {
      var t=typeof e; return 'function'===t||'object'===t&&!!e;
    }, _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], (function(e) {
      _['is'+e]=function(t) {
        return c.call(t)==='[object '+e+']';
      };
    })), _.isArguments(arguments)||(_.isArguments=function(e) {
      return _.has(e, 'callee');
    }), 'object'!=typeof Int8Array&&(_.isFunction=function(e) {
      return 'function'==typeof e||!1;
    }), _.isFinite=function(e) {
      return isFinite(e)&&!isNaN(parseFloat(e));
    }, _.isNaN=function(e) {
      return _.isNumber(e)&&e!==+e;
    }, _.isBoolean=function(e) {
      return !0===e||!1===e||'[object Boolean]'===c.call(e);
    }, _.isNull=function(e) {
      return null===e;
    }, _.isUndefined=function(e) {
      return void 0===e;
    }, _.has=function(e, t) {
      return null!=e&&h.call(e, t);
    }, _.noConflict=function() {
      return n._=a, this;
    }, _.identity=function(e) {
      return e;
    }, _.constant=function(e) {
      return function() {
        return e;
      };
    }, _.noop=function() {}, _.property=property, _.propertyOf=function(e) {
      return null==e?function() {}:function(t) {
        return e[t];
      };
    }, _.matcher=_.matches=function(e) {
      return e=_.extendOwn({}, e), function(t) {
        return _.isMatch(t, e);
      };
    }, _.times=function(e, t, n) {
      var r=Array(Math.max(0, e)); t=optimizeCb(t, n, 1); for (var a=0; a<e; a++)r[a]=t(a); return r;
    }, _.random=function(e, t) {
      return null==t&&(t=e, e=0), e+Math.floor(Math.random()*(t-e+1));
    }, _.now=Date.now||function() {
      return (new Date).getTime();
    }; var w={'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#x27;', '`': '&#x60;'}; var x=_.invert(w); var createEscaper=function(e) {
      var escaper=function(t) {
        return e[t];
      }; var t='(?:'+_.keys(e).join('|')+')'; var n=RegExp(t); var r=RegExp(t, 'g'); return function(e) {
        return e=null==e?'':''+e, n.test(e)?e.replace(r, escaper):e;
      };
    }; _.escape=createEscaper(w), _.unescape=createEscaper(x), _.result=function(e, t, n) {
      var r=null==e?void 0:e[t]; return void 0===r&&(r=n), _.isFunction(r)?r.call(e):r;
    }; var k=0; _.uniqueId=function(e) {
      var t=++k+''; return e?e+t:t;
    }, _.templateSettings={evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g}; var C=/(.)^/; var S={'\'': '\'', '\\': '\\', '\r': 'r', '\n': 'n', '\u2028': 'u2028', '\u2029': 'u2029'}; var O=/\\|'|\r|\n|\u2028|\u2029/g; var escapeChar=function(e) {
      return '\\'+S[e];
    }; _.template=function(e, t, n) {
      !t&&n&&(t=n), t=_.defaults({}, t, _.templateSettings); var r=RegExp([(t.escape||C).source, (t.interpolate||C).source, (t.evaluate||C).source].join('|')+'|$', 'g'); var a=0; var i='__p+=\''; e.replace(r, (function(t, n, r, o, s) {
        return i+=e.slice(a, s).replace(O, escapeChar), a=s+t.length, n?i+='\'+\n((__t=('+n+'))==null?\'\':_.escape(__t))+\n\'':r?i+='\'+\n((__t=('+r+'))==null?\'\':__t)+\n\'':o&&(i+='\';\n'+o+'\n__p+=\''), t;
      })), i+='\';\n', t.variable||(i='with(obj||{}){\n'+i+'}\n'), i='var __t,__p=\'\',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,\'\');};\n'+i+'return __p;\n'; try {
        var o=new Function(t.variable||'obj', '_', i);
      } catch (e) {
        throw e.source=i, e;
      } var template=function(e) {
        return o.call(this, e, _);
      }; var s=t.variable||'obj'; return template.source='function('+s+'){\n'+i+'}', template;
    }, _.chain=function(e) {
      var t=_(e); return t._chain=!0, t;
    }; var result=function(e, t) {
      return e._chain?_(t).chain():t;
    }; _.mixin=function(e) {
      _.each(_.functions(e), (function(t) {
        var n=_[t]=e[t]; _.prototype[t]=function() {
          var e=[this._wrapped]; return l.apply(e, arguments), result(this, n.apply(_, e));
        };
      }));
    }, _.mixin(_), _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], (function(e) {
      var t=i[e]; _.prototype[e]=function() {
        var n=this._wrapped; return t.apply(n, arguments), 'shift'!==e&&'splice'!==e||0!==n.length||delete n[0], result(this, n);
      };
    })), _.each(['concat', 'join', 'slice'], (function(e) {
      var t=i[e]; _.prototype[e]=function() {
        return result(this, t.apply(this._wrapped, arguments));
      };
    })), _.prototype.value=function() {
      return this._wrapped;
    }, _.prototype.valueOf=_.prototype.toJSON=_.prototype.value, _.prototype.toString=function() {
      return ''+this._wrapped;
    }, void 0===(r=function() {
      return _;
    }.apply(t, []))||(e.exports=r);
  }).call(this);
}, function(e, t, n) {
  var r;
  /* !
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */!function(t, n) {
    'use strict'; 'object'==typeof e.exports?e.exports=t.document?n(t, !0):function(e) {
      if (!e.document) throw new Error('jQuery requires a window with a document'); return n(e);
    }:n(t);
  }('undefined'!=typeof window?window:this, (function(n, a) {
    'use strict'; var i=[]; var o=Object.getPrototypeOf; var s=i.slice; var l=i.flat?function(e) {
      return i.flat.call(e);
    }:function(e) {
      return i.concat.apply([], e);
    }; var u=i.push; var c=i.indexOf; var h={}; var f=h.toString; var d=h.hasOwnProperty; var p=d.toString; var m=p.call(Object); var g={}; var isFunction=function(e) {
      return 'function'==typeof e&&'number'!=typeof e.nodeType&&'function'!=typeof e.item;
    }; var isWindow=function(e) {
      return null!=e&&e===e.window;
    }; var v=n.document; var y={type: !0, src: !0, nonce: !0, noModule: !0}; function DOMEval(e, t, n) {
      var r; var a; var i=(n=n||v).createElement('script'); if (i.text=e, t) for (r in y)(a=t[r]||t.getAttribute&&t.getAttribute(r))&&i.setAttribute(r, a); n.head.appendChild(i).parentNode.removeChild(i);
    } function toType(e) {
      return null==e?e+'':'object'==typeof e||'function'==typeof e?h[f.call(e)]||'object':typeof e;
    } var jQuery=function(e, t) {
      return new jQuery.fn.init(e, t);
    }; function isArrayLike(e) {
      var t=!!e&&'length'in e&&e.length; var n=toType(e); return !isFunction(e)&&!isWindow(e)&&('array'===n||0===t||'number'==typeof t&&t>0&&t-1 in e);
    }jQuery.fn=jQuery.prototype={jquery: '3.6.1', constructor: jQuery, length: 0, toArray: function() {
      return s.call(this);
    }, get: function(e) {
      return null==e?s.call(this):e<0?this[e+this.length]:this[e];
    }, pushStack: function(e) {
      var t=jQuery.merge(this.constructor(), e); return t.prevObject=this, t;
    }, each: function(e) {
      return jQuery.each(this, e);
    }, map: function(e) {
      return this.pushStack(jQuery.map(this, (function(t, n) {
        return e.call(t, n, t);
      })));
    }, slice: function() {
      return this.pushStack(s.apply(this, arguments));
    }, first: function() {
      return this.eq(0);
    }, last: function() {
      return this.eq(-1);
    }, even: function() {
      return this.pushStack(jQuery.grep(this, (function(e, t) {
        return (t+1)%2;
      })));
    }, odd: function() {
      return this.pushStack(jQuery.grep(this, (function(e, t) {
        return t%2;
      })));
    }, eq: function(e) {
      var t=this.length; var n=+e+(e<0?t:0); return this.pushStack(n>=0&&n<t?[this[n]]:[]);
    }, end: function() {
      return this.prevObject||this.constructor();
    }, push: u, sort: i.sort, splice: i.splice}, jQuery.extend=jQuery.fn.extend=function() {
      var e; var t; var n; var r; var a; var i; var o=arguments[0]||{}; var s=1; var l=arguments.length; var u=!1; for ('boolean'==typeof o&&(u=o, o=arguments[s]||{}, s++), 'object'==typeof o||isFunction(o)||(o={}), s===l&&(o=this, s--); s<l; s++) if (null!=(e=arguments[s])) for (t in e)r=e[t], '__proto__'!==t&&o!==r&&(u&&r&&(jQuery.isPlainObject(r)||(a=Array.isArray(r)))?(n=o[t], i=a&&!Array.isArray(n)?[]:a||jQuery.isPlainObject(n)?n:{}, a=!1, o[t]=jQuery.extend(u, i, r)):void 0!==r&&(o[t]=r)); return o;
    }, jQuery.extend({expando: 'jQuery'+('3.6.1'+Math.random()).replace(/\D/g, ''), isReady: !0, error: function(e) {
      throw new Error(e);
    }, noop: function() {}, isPlainObject: function(e) {
      var t; var n; return !(!e||'[object Object]'!==f.call(e))&&(!(t=o(e))||'function'==typeof(n=d.call(t, 'constructor')&&t.constructor)&&p.call(n)===m);
    }, isEmptyObject: function(e) {
      var t; for (t in e) return !1; return !0;
    }, globalEval: function(e, t, n) {
      DOMEval(e, {nonce: t&&t.nonce}, n);
    }, each: function(e, t) {
      var n; var r=0; if (isArrayLike(e)) for (n=e.length; r<n&&!1!==t.call(e[r], r, e[r]); r++);else for (r in e) if (!1===t.call(e[r], r, e[r])) break; return e;
    }, makeArray: function(e, t) {
      var n=t||[]; return null!=e&&(isArrayLike(Object(e))?jQuery.merge(n, 'string'==typeof e?[e]:e):u.call(n, e)), n;
    }, inArray: function(e, t, n) {
      return null==t?-1:c.call(t, e, n);
    }, merge: function(e, t) {
      for (var n=+t.length, r=0, a=e.length; r<n; r++)e[a++]=t[r]; return e.length=a, e;
    }, grep: function(e, t, n) {
      for (var r=[], a=0, i=e.length, o=!n; a<i; a++)!t(e[a], a)!==o&&r.push(e[a]); return r;
    }, map: function(e, t, n) {
      var r; var a; var i=0; var o=[]; if (isArrayLike(e)) for (r=e.length; i<r; i++)null!=(a=t(e[i], i, n))&&o.push(a); else for (i in e)null!=(a=t(e[i], i, n))&&o.push(a); return l(o);
    }, guid: 1, support: g}), 'function'==typeof Symbol&&(jQuery.fn[Symbol.iterator]=i[Symbol.iterator]), jQuery.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), (function(e, t) {
      h['[object '+t+']']=t.toLowerCase();
    })); var b=
/* !
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
function(e) {
  var t; var n; var r; var a; var i; var o; var s; var l; var u; var c; var h; var f; var d; var p; var m; var g; var v; var y; var b; var w='sizzle'+1*new Date; var x=e.document; var k=0; var C=0; var S=createCache(); var O=createCache(); var T=createCache(); var E=createCache(); var sortOrder=function(e, t) {
    return e===t&&(h=!0), 0;
  }; var R={}.hasOwnProperty; var P=[]; var M=P.pop; var A=P.push; var j=P.push; var N=P.slice; var indexOf=function(e, t) {
    for (var n=0, r=e.length; n<r; n++) if (e[n]===t) return n; return -1;
  }; var D='checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped'; var V='[\\x20\\t\\r\\n\\f]'; var L='(?:\\\\[\\da-fA-F]{1,6}'+V+'?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+'; var B='\\['+V+'*('+L+')(?:'+V+'*([*^$|!~]?=)'+V+'*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|('+L+'))|)'+V+'*\\]'; var I=':('+L+')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|'+B+')*)|.*)\\)|)'; var z=new RegExp(V+'+', 'g'); var F=new RegExp('^'+V+'+|((?:^|[^\\\\])(?:\\\\.)*)'+V+'+$', 'g'); var U=new RegExp('^'+V+'*,'+V+'*'); var H=new RegExp('^'+V+'*([>+~]|'+V+')'+V+'*'); var q=new RegExp(V+'|>'); var W=new RegExp(I); var $=new RegExp('^'+L+'$'); var G={ID: new RegExp('^#('+L+')'), CLASS: new RegExp('^\\.('+L+')'), TAG: new RegExp('^('+L+'|[*])'), ATTR: new RegExp('^'+B), PSEUDO: new RegExp('^'+I), CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\('+V+'*(even|odd|(([+-]|)(\\d*)n|)'+V+'*(?:([+-]|)'+V+'*(\\d+)|))'+V+'*\\)|)', 'i'), bool: new RegExp('^(?:'+D+')$', 'i'), needsContext: new RegExp('^'+V+'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\('+V+'*((?:-\\d)?\\d*)'+V+'*\\)|)(?=[^-]|$)', 'i')}; var Y=/HTML$/i; var K=/^(?:input|select|textarea|button)$/i; var X=/^h\d$/i; var Z=/^[^{]+\{\s*\[native \w/; var J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/; var Q=/[+~]/; var ee=new RegExp('\\\\[\\da-fA-F]{1,6}'+V+'?|\\\\([^\\r\\n\\f])', 'g'); var funescape=function(e, t) {
    var n='0x'+e.slice(1)-65536; return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296, 1023&n|56320));
  }; var te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g; var fcssescape=function(e, t) {
    return t?'\0'===e?'�':e.slice(0, -1)+'\\'+e.charCodeAt(e.length-1).toString(16)+' ':'\\'+e;
  }; var unloadHandler=function() {
    f();
  }; var ne=addCombinator((function(e) {
    return !0===e.disabled&&'fieldset'===e.nodeName.toLowerCase();
  }), {dir: 'parentNode', next: 'legend'}); try {
    j.apply(P=N.call(x.childNodes), x.childNodes), P[x.childNodes.length].nodeType;
  } catch (e) {
    j={apply: P.length?function(e, t) {
      A.apply(e, N.call(t));
    }:function(e, t) {
      for (var n=e.length, r=0; e[n++]=t[r++];);e.length=n-1;
    }};
  } function Sizzle(e, t, r, a) {
    var i; var s; var u; var c; var h; var p; var v; var y=t&&t.ownerDocument; var x=t?t.nodeType:9; if (r=r||[], 'string'!=typeof e||!e||1!==x&&9!==x&&11!==x) return r; if (!a&&(f(t), t=t||d, m)) {
      if (11!==x&&(h=J.exec(e))) {
        if (i=h[1]) {
          if (9===x) {
            if (!(u=t.getElementById(i))) return r; if (u.id===i) return r.push(u), r;
          } else if (y&&(u=y.getElementById(i))&&b(t, u)&&u.id===i) return r.push(u), r;
        } else {
          if (h[2]) return j.apply(r, t.getElementsByTagName(e)), r; if ((i=h[3])&&n.getElementsByClassName&&t.getElementsByClassName) return j.apply(r, t.getElementsByClassName(i)), r;
        }
      } if (n.qsa&&!E[e+' ']&&(!g||!g.test(e))&&(1!==x||'object'!==t.nodeName.toLowerCase())) {
        if (v=e, y=t, 1===x&&(q.test(e)||H.test(e))) {
          for ((y=Q.test(e)&&testContext(t.parentNode)||t)===t&&n.scope||((c=t.getAttribute('id'))?c=c.replace(te, fcssescape):t.setAttribute('id', c=w)), s=(p=o(e)).length; s--;)p[s]=(c?'#'+c:':scope')+' '+toSelector(p[s]); v=p.join(',');
        } try {
          return j.apply(r, y.querySelectorAll(v)), r;
        } catch (t) {
          E(e, !0);
        } finally {
          c===w&&t.removeAttribute('id');
        }
      }
    } return l(e.replace(F, '$1'), t, r, a);
  } function createCache() {
    var e=[]; return function cache(t, n) {
      return e.push(t+' ')>r.cacheLength&&delete cache[e.shift()], cache[t+' ']=n;
    };
  } function markFunction(e) {
    return e[w]=!0, e;
  } function assert(e) {
    var t=d.createElement('fieldset'); try {
      return !!e(t);
    } catch (e) {
      return !1;
    } finally {
      t.parentNode&&t.parentNode.removeChild(t), t=null;
    }
  } function addHandle(e, t) {
    for (var n=e.split('|'), a=n.length; a--;)r.attrHandle[n[a]]=t;
  } function siblingCheck(e, t) {
    var n=t&&e; var r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex; if (r) return r; if (n) for (;n=n.nextSibling;) if (n===t) return -1; return e?1:-1;
  } function createInputPseudo(e) {
    return function(t) {
      return 'input'===t.nodeName.toLowerCase()&&t.type===e;
    };
  } function createButtonPseudo(e) {
    return function(t) {
      var n=t.nodeName.toLowerCase(); return ('input'===n||'button'===n)&&t.type===e;
    };
  } function createDisabledPseudo(e) {
    return function(t) {
      return 'form'in t?t.parentNode&&!1===t.disabled?'label'in t?'label'in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ne(t)===e:t.disabled===e:'label'in t&&t.disabled===e;
    };
  } function createPositionalPseudo(e) {
    return markFunction((function(t) {
      return t=+t, markFunction((function(n, r) {
        for (var a, i=e([], n.length, t), o=i.length; o--;)n[a=i[o]]&&(n[a]=!(r[a]=n[a]));
      }));
    }));
  } function testContext(e) {
    return e&&void 0!==e.getElementsByTagName&&e;
  } for (t in n=Sizzle.support={}, i=Sizzle.isXML=function(e) {
    var t=e&&e.namespaceURI; var n=e&&(e.ownerDocument||e).documentElement; return !Y.test(t||n&&n.nodeName||'HTML');
  }, f=Sizzle.setDocument=function(e) {
    var t; var a; var o=e?e.ownerDocument||e:x; return o!=d&&9===o.nodeType&&o.documentElement?(p=(d=o).documentElement, m=!i(d), x!=d&&(a=d.defaultView)&&a.top!==a&&(a.addEventListener?a.addEventListener('unload', unloadHandler, !1):a.attachEvent&&a.attachEvent('onunload', unloadHandler)), n.scope=assert((function(e) {
      return p.appendChild(e).appendChild(d.createElement('div')), void 0!==e.querySelectorAll&&!e.querySelectorAll(':scope fieldset div').length;
    })), n.attributes=assert((function(e) {
      return e.className='i', !e.getAttribute('className');
    })), n.getElementsByTagName=assert((function(e) {
      return e.appendChild(d.createComment('')), !e.getElementsByTagName('*').length;
    })), n.getElementsByClassName=Z.test(d.getElementsByClassName), n.getById=assert((function(e) {
      return p.appendChild(e).id=w, !d.getElementsByName||!d.getElementsByName(w).length;
    })), n.getById?(r.filter.ID=function(e) {
      var t=e.replace(ee, funescape); return function(e) {
        return e.getAttribute('id')===t;
      };
    }, r.find.ID=function(e, t) {
      if (void 0!==t.getElementById&&m) {
        var n=t.getElementById(e); return n?[n]:[];
      }
    }):(r.filter.ID=function(e) {
      var t=e.replace(ee, funescape); return function(e) {
        var n=void 0!==e.getAttributeNode&&e.getAttributeNode('id'); return n&&n.value===t;
      };
    }, r.find.ID=function(e, t) {
      if (void 0!==t.getElementById&&m) {
        var n; var r; var a; var i=t.getElementById(e); if (i) {
          if ((n=i.getAttributeNode('id'))&&n.value===e) return [i]; for (a=t.getElementsByName(e), r=0; i=a[r++];) if ((n=i.getAttributeNode('id'))&&n.value===e) return [i];
        } return [];
      }
    }), r.find.TAG=n.getElementsByTagName?function(e, t) {
      return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0;
    }:function(e, t) {
      var n; var r=[]; var a=0; var i=t.getElementsByTagName(e); if ('*'===e) {
        for (;n=i[a++];)1===n.nodeType&&r.push(n); return r;
      } return i;
    }, r.find.CLASS=n.getElementsByClassName&&function(e, t) {
      if (void 0!==t.getElementsByClassName&&m) return t.getElementsByClassName(e);
    }, v=[], g=[], (n.qsa=Z.test(d.querySelectorAll))&&(assert((function(e) {
      var t; p.appendChild(e).innerHTML='<a id=\''+w+'\'></a><select id=\''+w+'-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowcapture^=\'\']').length&&g.push('[*^$]='+V+'*(?:\'\'|"")'), e.querySelectorAll('[selected]').length||g.push('\\['+V+'*(?:value|'+D+')'), e.querySelectorAll('[id~='+w+'-]').length||g.push('~='), (t=d.createElement('input')).setAttribute('name', ''), e.appendChild(t), e.querySelectorAll('[name=\'\']').length||g.push('\\['+V+'*name'+V+'*='+V+'*(?:\'\'|"")'), e.querySelectorAll(':checked').length||g.push(':checked'), e.querySelectorAll('a#'+w+'+*').length||g.push('.#.+[+~]'), e.querySelectorAll('\\\f'), g.push('[\\r\\n\\f]');
    })), assert((function(e) {
      e.innerHTML='<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>'; var t=d.createElement('input'); t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length&&g.push('name'+V+'*[*^$|!~]?='), 2!==e.querySelectorAll(':enabled').length&&g.push(':enabled', ':disabled'), p.appendChild(e).disabled=!0, 2!==e.querySelectorAll(':disabled').length&&g.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), g.push(',.*:');
    }))), (n.matchesSelector=Z.test(y=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&assert((function(e) {
      n.disconnectedMatch=y.call(e, '*'), y.call(e, '[s!=\'\']:x'), v.push('!=', I);
    })), g=g.length&&new RegExp(g.join('|')), v=v.length&&new RegExp(v.join('|')), t=Z.test(p.compareDocumentPosition), b=t||Z.test(p.contains)?function(e, t) {
      var n=9===e.nodeType?e.documentElement:e; var r=t&&t.parentNode; return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)));
    }:function(e, t) {
      if (t) for (;t=t.parentNode;) if (t===e) return !0; return !1;
    }, sortOrder=t?function(e, t) {
      if (e===t) return h=!0, 0; var r=!e.compareDocumentPosition-!t.compareDocumentPosition; return r||(1&(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==d||e.ownerDocument==x&&b(x, e)?-1:t==d||t.ownerDocument==x&&b(x, t)?1:c?indexOf(c, e)-indexOf(c, t):0:4&r?-1:1);
    }:function(e, t) {
      if (e===t) return h=!0, 0; var n; var r=0; var a=e.parentNode; var i=t.parentNode; var o=[e]; var s=[t]; if (!a||!i) return e==d?-1:t==d?1:a?-1:i?1:c?indexOf(c, e)-indexOf(c, t):0; if (a===i) return siblingCheck(e, t); for (n=e; n=n.parentNode;)o.unshift(n); for (n=t; n=n.parentNode;)s.unshift(n); for (;o[r]===s[r];)r++; return r?siblingCheck(o[r], s[r]):o[r]==x?-1:s[r]==x?1:0;
    }, d):d;
  }, Sizzle.matches=function(e, t) {
    return Sizzle(e, null, null, t);
  }, Sizzle.matchesSelector=function(e, t) {
    if (f(e), n.matchesSelector&&m&&!E[t+' ']&&(!v||!v.test(t))&&(!g||!g.test(t))) {
      try {
        var r=y.call(e, t); if (r||n.disconnectedMatch||e.document&&11!==e.document.nodeType) return r;
      } catch (e) {
        E(t, !0);
      }
    } return Sizzle(t, d, null, [e]).length>0;
  }, Sizzle.contains=function(e, t) {
    return (e.ownerDocument||e)!=d&&f(e), b(e, t);
  }, Sizzle.attr=function(e, t) {
    (e.ownerDocument||e)!=d&&f(e); var a=r.attrHandle[t.toLowerCase()]; var i=a&&R.call(r.attrHandle, t.toLowerCase())?a(e, t, !m):void 0; return void 0!==i?i:n.attributes||!m?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null;
  }, Sizzle.escape=function(e) {
    return (e+'').replace(te, fcssescape);
  }, Sizzle.error=function(e) {
    throw new Error('Syntax error, unrecognized expression: '+e);
  }, Sizzle.uniqueSort=function(e) {
    var t; var r=[]; var a=0; var i=0; if (h=!n.detectDuplicates, c=!n.sortStable&&e.slice(0), e.sort(sortOrder), h) {
      for (;t=e[i++];)t===e[i]&&(a=r.push(i)); for (;a--;)e.splice(r[a], 1);
    } return c=null, e;
  }, a=Sizzle.getText=function(e) {
    var t; var n=''; var r=0; var i=e.nodeType; if (i) {
      if (1===i||9===i||11===i) {
        if ('string'==typeof e.textContent) return e.textContent; for (e=e.firstChild; e; e=e.nextSibling)n+=a(e);
      } else if (3===i||4===i) return e.nodeValue;
    } else for (;t=e[r++];)n+=a(t); return n;
  }, (r=Sizzle.selectors={cacheLength: 50, createPseudo: markFunction, match: G, attrHandle: {}, find: {}, relative: {'>': {dir: 'parentNode', first: !0}, ' ': {dir: 'parentNode'}, '+': {dir: 'previousSibling', first: !0}, '~': {dir: 'previousSibling'}}, preFilter: {ATTR: function(e) {
    return e[1]=e[1].replace(ee, funescape), e[3]=(e[3]||e[4]||e[5]||'').replace(ee, funescape), '~='===e[2]&&(e[3]=' '+e[3]+' '), e.slice(0, 4);
  }, CHILD: function(e) {
    return e[1]=e[1].toLowerCase(), 'nth'===e[1].slice(0, 3)?(e[3]||Sizzle.error(e[0]), e[4]=+(e[4]?e[5]+(e[6]||1):2*('even'===e[3]||'odd'===e[3])), e[5]=+(e[7]+e[8]||'odd'===e[3])):e[3]&&Sizzle.error(e[0]), e;
  }, PSEUDO: function(e) {
    var t; var n=!e[6]&&e[2]; return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||'':n&&W.test(n)&&(t=o(n, !0))&&(t=n.indexOf(')', n.length-t)-n.length)&&(e[0]=e[0].slice(0, t), e[2]=n.slice(0, t)), e.slice(0, 3));
  }}, filter: {TAG: function(e) {
    var t=e.replace(ee, funescape).toLowerCase(); return '*'===e?function() {
      return !0;
    }:function(e) {
      return e.nodeName&&e.nodeName.toLowerCase()===t;
    };
  }, CLASS: function(e) {
    var t=S[e+' ']; return t||(t=new RegExp('(^|'+V+')'+e+'('+V+'|$)'))&&S(e, (function(e) {
      return t.test('string'==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute('class')||'');
    }));
  }, ATTR: function(e, t, n) {
    return function(r) {
      var a=Sizzle.attr(r, e); return null==a?'!='===t:!t||(a+='', '='===t?a===n:'!='===t?a!==n:'^='===t?n&&0===a.indexOf(n):'*='===t?n&&a.indexOf(n)>-1:'$='===t?n&&a.slice(-n.length)===n:'~='===t?(' '+a.replace(z, ' ')+' ').indexOf(n)>-1:'|='===t&&(a===n||a.slice(0, n.length+1)===n+'-'));
    };
  }, CHILD: function(e, t, n, r, a) {
    var i='nth'!==e.slice(0, 3); var o='last'!==e.slice(-4); var s='of-type'===t; return 1===r&&0===a?function(e) {
      return !!e.parentNode;
    }:function(t, n, l) {
      var u; var c; var h; var f; var d; var p; var m=i!==o?'nextSibling':'previousSibling'; var g=t.parentNode; var v=s&&t.nodeName.toLowerCase(); var y=!l&&!s; var b=!1; if (g) {
        if (i) {
          for (;m;) {
            for (f=t; f=f[m];) if (s?f.nodeName.toLowerCase()===v:1===f.nodeType) return !1; p=m='only'===e&&!p&&'nextSibling';
          } return !0;
        } if (p=[o?g.firstChild:g.lastChild], o&&y) {
          for (b=(d=(u=(c=(h=(f=g)[w]||(f[w]={}))[f.uniqueID]||(h[f.uniqueID]={}))[e]||[])[0]===k&&u[1])&&u[2], f=d&&g.childNodes[d]; f=++d&&f&&f[m]||(b=d=0)||p.pop();) {
            if (1===f.nodeType&&++b&&f===t) {
              c[e]=[k, d, b]; break;
            }
          }
        } else if (y&&(b=d=(u=(c=(h=(f=t)[w]||(f[w]={}))[f.uniqueID]||(h[f.uniqueID]={}))[e]||[])[0]===k&&u[1]), !1===b) for (;(f=++d&&f&&f[m]||(b=d=0)||p.pop())&&((s?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++b||(y&&((c=(h=f[w]||(f[w]={}))[f.uniqueID]||(h[f.uniqueID]={}))[e]=[k, b]), f!==t)););return (b-=a)===r||b%r==0&&b/r>=0;
      }
    };
  }, PSEUDO: function(e, t) {
    var n; var a=r.pseudos[e]||r.setFilters[e.toLowerCase()]||Sizzle.error('unsupported pseudo: '+e); return a[w]?a(t):a.length>1?(n=[e, e, '', t], r.setFilters.hasOwnProperty(e.toLowerCase())?markFunction((function(e, n) {
      for (var r, i=a(e, t), o=i.length; o--;)e[r=indexOf(e, i[o])]=!(n[r]=i[o]);
    })):function(e) {
      return a(e, 0, n);
    }):a;
  }}, pseudos: {not: markFunction((function(e) {
    var t=[]; var n=[]; var r=s(e.replace(F, '$1')); return r[w]?markFunction((function(e, t, n, a) {
      for (var i, o=r(e, null, a, []), s=e.length; s--;)(i=o[s])&&(e[s]=!(t[s]=i));
    })):function(e, a, i) {
      return t[0]=e, r(t, null, i, n), t[0]=null, !n.pop();
    };
  })), has: markFunction((function(e) {
    return function(t) {
      return Sizzle(e, t).length>0;
    };
  })), contains: markFunction((function(e) {
    return e=e.replace(ee, funescape), function(t) {
      return (t.textContent||a(t)).indexOf(e)>-1;
    };
  })), lang: markFunction((function(e) {
    return $.test(e||'')||Sizzle.error('unsupported lang: '+e), e=e.replace(ee, funescape).toLowerCase(), function(t) {
      var n; do {
        if (n=m?t.lang:t.getAttribute('xml:lang')||t.getAttribute('lang')) return (n=n.toLowerCase())===e||0===n.indexOf(e+'-');
      } while ((t=t.parentNode)&&1===t.nodeType); return !1;
    };
  })), target: function(t) {
    var n=e.location&&e.location.hash; return n&&n.slice(1)===t.id;
  }, root: function(e) {
    return e===p;
  }, focus: function(e) {
    return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex);
  }, enabled: createDisabledPseudo(!1), disabled: createDisabledPseudo(!0), checked: function(e) {
    var t=e.nodeName.toLowerCase(); return 'input'===t&&!!e.checked||'option'===t&&!!e.selected;
  }, selected: function(e) {
    return e.parentNode&&e.parentNode.selectedIndex, !0===e.selected;
  }, empty: function(e) {
    for (e=e.firstChild; e; e=e.nextSibling) if (e.nodeType<6) return !1; return !0;
  }, parent: function(e) {
    return !r.pseudos.empty(e);
  }, header: function(e) {
    return X.test(e.nodeName);
  }, input: function(e) {
    return K.test(e.nodeName);
  }, button: function(e) {
    var t=e.nodeName.toLowerCase(); return 'input'===t&&'button'===e.type||'button'===t;
  }, text: function(e) {
    var t; return 'input'===e.nodeName.toLowerCase()&&'text'===e.type&&(null==(t=e.getAttribute('type'))||'text'===t.toLowerCase());
  }, first: createPositionalPseudo((function() {
    return [0];
  })), last: createPositionalPseudo((function(e, t) {
    return [t-1];
  })), eq: createPositionalPseudo((function(e, t, n) {
    return [n<0?n+t:n];
  })), even: createPositionalPseudo((function(e, t) {
    for (var n=0; n<t; n+=2)e.push(n); return e;
  })), odd: createPositionalPseudo((function(e, t) {
    for (var n=1; n<t; n+=2)e.push(n); return e;
  })), lt: createPositionalPseudo((function(e, t, n) {
    for (var r=n<0?n+t:n>t?t:n; --r>=0;)e.push(r); return e;
  })), gt: createPositionalPseudo((function(e, t, n) {
    for (var r=n<0?n+t:n; ++r<t;)e.push(r); return e;
  }))}}).pseudos.nth=r.pseudos.eq, {radio: !0, checkbox: !0, file: !0, password: !0, image: !0})r.pseudos[t]=createInputPseudo(t); for (t in {submit: !0, reset: !0})r.pseudos[t]=createButtonPseudo(t); function setFilters() {} function toSelector(e) {
    for (var t=0, n=e.length, r=''; t<n; t++)r+=e[t].value; return r;
  } function addCombinator(e, t, n) {
    var r=t.dir; var a=t.next; var i=a||r; var o=n&&'parentNode'===i; var s=C++; return t.first?function(t, n, a) {
      for (;t=t[r];) if (1===t.nodeType||o) return e(t, n, a); return !1;
    }:function(t, n, l) {
      var u; var c; var h; var f=[k, s]; if (l) {
        for (;t=t[r];) if ((1===t.nodeType||o)&&e(t, n, l)) return !0;
      } else {
        for (;t=t[r];) {
          if (1===t.nodeType||o) {
            if (c=(h=t[w]||(t[w]={}))[t.uniqueID]||(h[t.uniqueID]={}), a&&a===t.nodeName.toLowerCase())t=t[r]||t; else {
              if ((u=c[i])&&u[0]===k&&u[1]===s) return f[2]=u[2]; if (c[i]=f, f[2]=e(t, n, l)) return !0;
            }
          }
        }
      } return !1;
    };
  } function elementMatcher(e) {
    return e.length>1?function(t, n, r) {
      for (var a=e.length; a--;) if (!e[a](t, n, r)) return !1; return !0;
    }:e[0];
  } function condense(e, t, n, r, a) {
    for (var i, o=[], s=0, l=e.length, u=null!=t; s<l; s++)(i=e[s])&&(n&&!n(i, r, a)||(o.push(i), u&&t.push(s))); return o;
  } function setMatcher(e, t, n, r, a, i) {
    return r&&!r[w]&&(r=setMatcher(r)), a&&!a[w]&&(a=setMatcher(a, i)), markFunction((function(i, o, s, l) {
      var u; var c; var h; var f=[]; var d=[]; var p=o.length; var m=i||function(e, t, n) {
        for (var r=0, a=t.length; r<a; r++)Sizzle(e, t[r], n); return n;
      }(t||'*', s.nodeType?[s]:s, []); var g=!e||!i&&t?m:condense(m, f, e, s, l); var v=n?a||(i?e:p||r)?[]:o:g; if (n&&n(g, v, s, l), r) for (u=condense(v, d), r(u, [], s, l), c=u.length; c--;)(h=u[c])&&(v[d[c]]=!(g[d[c]]=h)); if (i) {
        if (a||e) {
          if (a) {
            for (u=[], c=v.length; c--;)(h=v[c])&&u.push(g[c]=h); a(null, v=[], u, l);
          } for (c=v.length; c--;)(h=v[c])&&(u=a?indexOf(i, h):f[c])>-1&&(i[u]=!(o[u]=h));
        }
      } else v=condense(v===o?v.splice(p, v.length):v), a?a(null, o, v, l):j.apply(o, v);
    }));
  } function matcherFromTokens(e) {
    for (var t, n, a, i=e.length, o=r.relative[e[0].type], s=o||r.relative[' '], l=o?1:0, c=addCombinator((function(e) {
        return e===t;
      }), s, !0), h=addCombinator((function(e) {
        return indexOf(t, e)>-1;
      }), s, !0), f=[function(e, n, r) {
        var a=!o&&(r||n!==u)||((t=n).nodeType?c(e, n, r):h(e, n, r)); return t=null, a;
      }]; l<i; l++) {
      if (n=r.relative[e[l].type])f=[addCombinator(elementMatcher(f), n)]; else {
        if ((n=r.filter[e[l].type].apply(null, e[l].matches))[w]) {
          for (a=++l; a<i&&!r.relative[e[a].type]; a++);return setMatcher(l>1&&elementMatcher(f), l>1&&toSelector(e.slice(0, l-1).concat({value: ' '===e[l-2].type?'*':''})).replace(F, '$1'), n, l<a&&matcherFromTokens(e.slice(l, a)), a<i&&matcherFromTokens(e=e.slice(a)), a<i&&toSelector(e));
        }f.push(n);
      }
    } return elementMatcher(f);
  } return setFilters.prototype=r.filters=r.pseudos, r.setFilters=new setFilters, o=Sizzle.tokenize=function(e, t) {
    var n; var a; var i; var o; var s; var l; var u; var c=O[e+' ']; if (c) return t?0:c.slice(0); for (s=e, l=[], u=r.preFilter; s;) {
      for (o in n&&!(a=U.exec(s))||(a&&(s=s.slice(a[0].length)||s), l.push(i=[])), n=!1, (a=H.exec(s))&&(n=a.shift(), i.push({value: n, type: a[0].replace(F, ' ')}), s=s.slice(n.length)), r.filter)!(a=G[o].exec(s))||u[o]&&!(a=u[o](a))||(n=a.shift(), i.push({value: n, type: o, matches: a}), s=s.slice(n.length)); if (!n) break;
    } return t?s.length:s?Sizzle.error(e):O(e, l).slice(0);
  }, s=Sizzle.compile=function(e, t) {
    var n; var a=[]; var i=[]; var s=T[e+' ']; if (!s) {
      for (t||(t=o(e)), n=t.length; n--;)(s=matcherFromTokens(t[n]))[w]?a.push(s):i.push(s); (s=T(e, function(e, t) {
        var n=t.length>0; var a=e.length>0; var superMatcher=function(i, o, s, l, c) {
          var h; var p; var g; var v=0; var y='0'; var b=i&&[]; var w=[]; var x=u; var C=i||a&&r.find.TAG('*', c); var S=k+=null==x?1:Math.random()||.1; var O=C.length; for (c&&(u=o==d||o||c); y!==O&&null!=(h=C[y]); y++) {
            if (a&&h) {
              for (p=0, o||h.ownerDocument==d||(f(h), s=!m); g=e[p++];) {
                if (g(h, o||d, s)) {
                  l.push(h); break;
                }
              }c&&(k=S);
            }n&&((h=!g&&h)&&v--, i&&b.push(h));
          } if (v+=y, n&&y!==v) {
            for (p=0; g=t[p++];)g(b, w, o, s); if (i) {
              if (v>0) for (;y--;)b[y]||w[y]||(w[y]=M.call(l)); w=condense(w);
            }j.apply(l, w), c&&!i&&w.length>0&&v+t.length>1&&Sizzle.uniqueSort(l);
          } return c&&(k=S, u=x), b;
        }; return n?markFunction(superMatcher):superMatcher;
      }(i, a))).selector=e;
    } return s;
  }, l=Sizzle.select=function(e, t, n, a) {
    var i; var l; var u; var c; var h; var f='function'==typeof e&&e; var d=!a&&o(e=f.selector||e); if (n=n||[], 1===d.length) {
      if ((l=d[0]=d[0].slice(0)).length>2&&'ID'===(u=l[0]).type&&9===t.nodeType&&m&&r.relative[l[1].type]) {
        if (!(t=(r.find.ID(u.matches[0].replace(ee, funescape), t)||[])[0])) return n; f&&(t=t.parentNode), e=e.slice(l.shift().value.length);
      } for (i=G.needsContext.test(e)?0:l.length; i--&&(u=l[i], !r.relative[c=u.type]);) {
        if ((h=r.find[c])&&(a=h(u.matches[0].replace(ee, funescape), Q.test(l[0].type)&&testContext(t.parentNode)||t))) {
          if (l.splice(i, 1), !(e=a.length&&toSelector(l))) return j.apply(n, a), n; break;
        }
      }
    } return (f||s(e, d))(a, t, !m, n, !t||Q.test(e)&&testContext(t.parentNode)||t), n;
  }, n.sortStable=w.split('').sort(sortOrder).join('')===w, n.detectDuplicates=!!h, f(), n.sortDetached=assert((function(e) {
    return 1&e.compareDocumentPosition(d.createElement('fieldset'));
  })), assert((function(e) {
    return e.innerHTML='<a href=\'#\'></a>', '#'===e.firstChild.getAttribute('href');
  }))||addHandle('type|href|height|width', (function(e, t, n) {
    if (!n) return e.getAttribute(t, 'type'===t.toLowerCase()?1:2);
  })), n.attributes&&assert((function(e) {
    return e.innerHTML='<input/>', e.firstChild.setAttribute('value', ''), ''===e.firstChild.getAttribute('value');
  }))||addHandle('value', (function(e, t, n) {
    if (!n&&'input'===e.nodeName.toLowerCase()) return e.defaultValue;
  })), assert((function(e) {
    return null==e.getAttribute('disabled');
  }))||addHandle(D, (function(e, t, n) {
    var r; if (!n) return !0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null;
  })), Sizzle;
}(n); jQuery.find=b, jQuery.expr=b.selectors, jQuery.expr[':']=jQuery.expr.pseudos, jQuery.uniqueSort=jQuery.unique=b.uniqueSort, jQuery.text=b.getText, jQuery.isXMLDoc=b.isXML, jQuery.contains=b.contains, jQuery.escapeSelector=b.escape; var dir=function(e, t, n) {
      for (var r=[], a=void 0!==n; (e=e[t])&&9!==e.nodeType;) {
        if (1===e.nodeType) {
          if (a&&jQuery(e).is(n)) break; r.push(e);
        }
      } return r;
    }; var siblings=function(e, t) {
      for (var n=[]; e; e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e); return n;
    }; var w=jQuery.expr.match.needsContext; function nodeName(e, t) {
      return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase();
    } var x=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function winnow(e, t, n) {
      return isFunction(t)?jQuery.grep(e, (function(e, r) {
        return !!t.call(e, r, e)!==n;
      })):t.nodeType?jQuery.grep(e, (function(e) {
        return e===t!==n;
      })):'string'!=typeof t?jQuery.grep(e, (function(e) {
        return c.call(t, e)>-1!==n;
      })):jQuery.filter(t, e, n);
    }jQuery.filter=function(e, t, n) {
      var r=t[0]; return n&&(e=':not('+e+')'), 1===t.length&&1===r.nodeType?jQuery.find.matchesSelector(r, e)?[r]:[]:jQuery.find.matches(e, jQuery.grep(t, (function(e) {
        return 1===e.nodeType;
      })));
    }, jQuery.fn.extend({find: function(e) {
      var t; var n; var r=this.length; var a=this; if ('string'!=typeof e) {
        return this.pushStack(jQuery(e).filter((function() {
          for (t=0; t<r; t++) if (jQuery.contains(a[t], this)) return !0;
        })));
      } for (n=this.pushStack([]), t=0; t<r; t++)jQuery.find(e, a[t], n); return r>1?jQuery.uniqueSort(n):n;
    }, filter: function(e) {
      return this.pushStack(winnow(this, e||[], !1));
    }, not: function(e) {
      return this.pushStack(winnow(this, e||[], !0));
    }, is: function(e) {
      return !!winnow(this, 'string'==typeof e&&w.test(e)?jQuery(e):e||[], !1).length;
    }}); var k; var C=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (jQuery.fn.init=function(e, t, n) {
      var r; var a; if (!e) return this; if (n=n||k, 'string'==typeof e) {
        if (!(r='<'===e[0]&&'>'===e[e.length-1]&&e.length>=3?[null, e, null]:C.exec(e))||!r[1]&&t) return !t||t.jquery?(t||n).find(e):this.constructor(t).find(e); if (r[1]) {
          if (t=t instanceof jQuery?t[0]:t, jQuery.merge(this, jQuery.parseHTML(r[1], t&&t.nodeType?t.ownerDocument||t:v, !0)), x.test(r[1])&&jQuery.isPlainObject(t)) for (r in t)isFunction(this[r])?this[r](t[r]):this.attr(r, t[r]); return this;
        } return (a=v.getElementById(r[2]))&&(this[0]=a, this.length=1), this;
      } return e.nodeType?(this[0]=e, this.length=1, this):isFunction(e)?void 0!==n.ready?n.ready(e):e(jQuery):jQuery.makeArray(e, this);
    }).prototype=jQuery.fn, k=jQuery(v); var S=/^(?:parents|prev(?:Until|All))/; var O={children: !0, contents: !0, next: !0, prev: !0}; function sibling(e, t) {
      for (;(e=e[t])&&1!==e.nodeType;);return e;
    }jQuery.fn.extend({has: function(e) {
      var t=jQuery(e, this); var n=t.length; return this.filter((function() {
        for (var e=0; e<n; e++) if (jQuery.contains(this, t[e])) return !0;
      }));
    }, closest: function(e, t) {
      var n; var r=0; var a=this.length; var i=[]; var o='string'!=typeof e&&jQuery(e); if (!w.test(e)) {
        for (;r<a; r++) {
          for (n=this[r]; n&&n!==t; n=n.parentNode) {
            if (n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&jQuery.find.matchesSelector(n, e))) {
              i.push(n); break;
            }
          }
        }
      } return this.pushStack(i.length>1?jQuery.uniqueSort(i):i);
    }, index: function(e) {
      return e?'string'==typeof e?c.call(jQuery(e), this[0]):c.call(this, e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;
    }, add: function(e, t) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(e, t))));
    }, addBack: function(e) {
      return this.add(null==e?this.prevObject:this.prevObject.filter(e));
    }}), jQuery.each({parent: function(e) {
      var t=e.parentNode; return t&&11!==t.nodeType?t:null;
    }, parents: function(e) {
      return dir(e, 'parentNode');
    }, parentsUntil: function(e, t, n) {
      return dir(e, 'parentNode', n);
    }, next: function(e) {
      return sibling(e, 'nextSibling');
    }, prev: function(e) {
      return sibling(e, 'previousSibling');
    }, nextAll: function(e) {
      return dir(e, 'nextSibling');
    }, prevAll: function(e) {
      return dir(e, 'previousSibling');
    }, nextUntil: function(e, t, n) {
      return dir(e, 'nextSibling', n);
    }, prevUntil: function(e, t, n) {
      return dir(e, 'previousSibling', n);
    }, siblings: function(e) {
      return siblings((e.parentNode||{}).firstChild, e);
    }, children: function(e) {
      return siblings(e.firstChild);
    }, contents: function(e) {
      return null!=e.contentDocument&&o(e.contentDocument)?e.contentDocument:(nodeName(e, 'template')&&(e=e.content||e), jQuery.merge([], e.childNodes));
    }}, (function(e, t) {
      jQuery.fn[e]=function(n, r) {
        var a=jQuery.map(this, t, n); return 'Until'!==e.slice(-5)&&(r=n), r&&'string'==typeof r&&(a=jQuery.filter(r, a)), this.length>1&&(O[e]||jQuery.uniqueSort(a), S.test(e)&&a.reverse()), this.pushStack(a);
      };
    })); var T=/[^\x20\t\r\n\f]+/g; function Identity(e) {
      return e;
    } function Thrower(e) {
      throw e;
    } function adoptValue(e, t, n, r) {
      var a; try {
e&&isFunction(a=e.promise)?a.call(e).done(t).fail(n):e&&isFunction(a=e.then)?a.call(e, t, n):t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }jQuery.Callbacks=function(e) {
      e='string'==typeof e?function(e) {
        var t={}; return jQuery.each(e.match(T)||[], (function(e, n) {
          t[n]=!0;
        })), t;
      }(e):jQuery.extend({}, e); var t; var n; var r; var a; var i=[]; var o=[]; var s=-1; var fire=function() {
        for (a=a||e.once, r=t=!0; o.length; s=-1) for (n=o.shift(); ++s<i.length;)!1===i[s].apply(n[0], n[1])&&e.stopOnFalse&&(s=i.length, n=!1); e.memory||(n=!1), t=!1, a&&(i=n?[]:'');
      }; var l={add: function() {
        return i&&(n&&!t&&(s=i.length-1, o.push(n)), function add(t) {
          jQuery.each(t, (function(t, n) {
isFunction(n)?e.unique&&l.has(n)||i.push(n):n&&n.length&&'string'!==toType(n)&&add(n);
          }));
        }(arguments), n&&!t&&fire()), this;
      }, remove: function() {
        return jQuery.each(arguments, (function(e, t) {
          for (var n; (n=jQuery.inArray(t, i, n))>-1;)i.splice(n, 1), n<=s&&s--;
        })), this;
      }, has: function(e) {
        return e?jQuery.inArray(e, i)>-1:i.length>0;
      }, empty: function() {
        return i&&(i=[]), this;
      }, disable: function() {
        return a=o=[], i=n='', this;
      }, disabled: function() {
        return !i;
      }, lock: function() {
        return a=o=[], n||t||(i=n=''), this;
      }, locked: function() {
        return !!a;
      }, fireWith: function(e, n) {
        return a||(n=[e, (n=n||[]).slice?n.slice():n], o.push(n), t||fire()), this;
      }, fire: function() {
        return l.fireWith(this, arguments), this;
      }, fired: function() {
        return !!r;
      }}; return l;
    }, jQuery.extend({Deferred: function(e) {
      var t=[['notify', 'progress', jQuery.Callbacks('memory'), jQuery.Callbacks('memory'), 2], ['resolve', 'done', jQuery.Callbacks('once memory'), jQuery.Callbacks('once memory'), 0, 'resolved'], ['reject', 'fail', jQuery.Callbacks('once memory'), jQuery.Callbacks('once memory'), 1, 'rejected']]; var r='pending'; var a={state: function() {
        return r;
      }, always: function() {
        return i.done(arguments).fail(arguments), this;
      }, catch: function(e) {
        return a.then(null, e);
      }, pipe: function() {
        var e=arguments; return jQuery.Deferred((function(n) {
          jQuery.each(t, (function(t, r) {
            var a=isFunction(e[r[4]])&&e[r[4]]; i[r[1]]((function() {
              var e=a&&a.apply(this, arguments); e&&isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+'With'](this, a?[e]:arguments);
            }));
          })), e=null;
        })).promise();
      }, then: function(e, r, a) {
        var i=0; function resolve(e, t, r, a) {
          return function() {
            var o=this; var s=arguments; var mightThrow=function() {
              var n; var l; if (!(e<i)) {
                if ((n=r.apply(o, s))===t.promise()) throw new TypeError('Thenable self-resolution'); l=n&&('object'==typeof n||'function'==typeof n)&&n.then, isFunction(l)?a?l.call(n, resolve(i, t, Identity, a), resolve(i, t, Thrower, a)):(i++, l.call(n, resolve(i, t, Identity, a), resolve(i, t, Thrower, a), resolve(i, t, Identity, t.notifyWith))):(r!==Identity&&(o=void 0, s=[n]), (a||t.resolveWith)(o, s));
              }
            }; var l=a?mightThrow:function() {
              try {
                mightThrow();
              } catch (n) {
                jQuery.Deferred.exceptionHook&&jQuery.Deferred.exceptionHook(n, l.stackTrace), e+1>=i&&(r!==Thrower&&(o=void 0, s=[n]), t.rejectWith(o, s));
              }
            }; e?l():(jQuery.Deferred.getStackHook&&(l.stackTrace=jQuery.Deferred.getStackHook()), n.setTimeout(l));
          };
        } return jQuery.Deferred((function(n) {
          t[0][3].add(resolve(0, n, isFunction(a)?a:Identity, n.notifyWith)), t[1][3].add(resolve(0, n, isFunction(e)?e:Identity)), t[2][3].add(resolve(0, n, isFunction(r)?r:Thrower));
        })).promise();
      }, promise: function(e) {
        return null!=e?jQuery.extend(e, a):a;
      }}; var i={}; return jQuery.each(t, (function(e, n) {
        var o=n[2]; var s=n[5]; a[n[1]]=o.add, s&&o.add((function() {
          r=s;
        }), t[3-e][2].disable, t[3-e][3].disable, t[0][2].lock, t[0][3].lock), o.add(n[3].fire), i[n[0]]=function() {
          return i[n[0]+'With'](this===i?void 0:this, arguments), this;
        }, i[n[0]+'With']=o.fireWith;
      })), a.promise(i), e&&e.call(i, i), i;
    }, when: function(e) {
      var t=arguments.length; var n=t; var r=Array(n); var a=s.call(arguments); var i=jQuery.Deferred(); var updateFunc=function(e) {
        return function(n) {
          r[e]=this, a[e]=arguments.length>1?s.call(arguments):n, --t||i.resolveWith(r, a);
        };
      }; if (t<=1&&(adoptValue(e, i.done(updateFunc(n)).resolve, i.reject, !t), 'pending'===i.state()||isFunction(a[n]&&a[n].then))) return i.then(); for (;n--;)adoptValue(a[n], updateFunc(n), i.reject); return i.promise();
    }}); var E=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; jQuery.Deferred.exceptionHook=function(e, t) {
      n.console&&n.console.warn&&e&&E.test(e.name)&&n.console.warn('jQuery.Deferred exception: '+e.message, e.stack, t);
    }, jQuery.readyException=function(e) {
      n.setTimeout((function() {
        throw e;
      }));
    }; var R=jQuery.Deferred(); function completed() {
      v.removeEventListener('DOMContentLoaded', completed), n.removeEventListener('load', completed), jQuery.ready();
    }jQuery.fn.ready=function(e) {
      return R.then(e).catch((function(e) {
        jQuery.readyException(e);
      })), this;
    }, jQuery.extend({isReady: !1, readyWait: 1, ready: function(e) {
      (!0===e?--jQuery.readyWait:jQuery.isReady)||(jQuery.isReady=!0, !0!==e&&--jQuery.readyWait>0||R.resolveWith(v, [jQuery]));
    }}), jQuery.ready.then=R.then, 'complete'===v.readyState||'loading'!==v.readyState&&!v.documentElement.doScroll?n.setTimeout(jQuery.ready):(v.addEventListener('DOMContentLoaded', completed), n.addEventListener('load', completed)); var access=function(e, t, n, r, a, i, o) {
      var s=0; var l=e.length; var u=null==n; if ('object'===toType(n)) for (s in a=!0, n)access(e, t, s, n[s], !0, i, o); else if (void 0!==r&&(a=!0, isFunction(r)||(o=!0), u&&(o?(t.call(e, r), t=null):(u=t, t=function(e, t, n) {
        return u.call(jQuery(e), n);
      })), t)) for (;s<l; s++)t(e[s], n, o?r:r.call(e[s], s, t(e[s], n))); return a?e:u?t.call(e):l?t(e[0], n):i;
    }; var P=/^-ms-/; var M=/-([a-z])/g; function fcamelCase(e, t) {
      return t.toUpperCase();
    } function camelCase(e) {
      return e.replace(P, 'ms-').replace(M, fcamelCase);
    } var acceptData=function(e) {
      return 1===e.nodeType||9===e.nodeType||!+e.nodeType;
    }; function Data() {
      this.expando=jQuery.expando+Data.uid++;
    }Data.uid=1, Data.prototype={cache: function(e) {
      var t=e[this.expando]; return t||(t={}, acceptData(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e, this.expando, {value: t, configurable: !0}))), t;
    }, set: function(e, t, n) {
      var r; var a=this.cache(e); if ('string'==typeof t)a[camelCase(t)]=n; else for (r in t)a[camelCase(r)]=t[r]; return a;
    }, get: function(e, t) {
      return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][camelCase(t)];
    }, access: function(e, t, n) {
      return void 0===t||t&&'string'==typeof t&&void 0===n?this.get(e, t):(this.set(e, t, n), void 0!==n?n:t);
    }, remove: function(e, t) {
      var n; var r=e[this.expando]; if (void 0!==r) {
        if (void 0!==t) {
          n=(t=Array.isArray(t)?t.map(camelCase):(t=camelCase(t))in r?[t]:t.match(T)||[]).length; for (;n--;) delete r[t[n]];
        }(void 0===t||jQuery.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando]);
      }
    }, hasData: function(e) {
      var t=e[this.expando]; return void 0!==t&&!jQuery.isEmptyObject(t);
    }}; var A=new Data; var j=new Data; var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/; var D=/[A-Z]/g; function dataAttr(e, t, n) {
      var r; if (void 0===n&&1===e.nodeType) {
        if (r='data-'+t.replace(D, '-$&').toLowerCase(), 'string'==typeof(n=e.getAttribute(r))) {
          try {
            n=function(e) {
              return 'true'===e||'false'!==e&&('null'===e?null:e===+e+''?+e:N.test(e)?JSON.parse(e):e);
            }(n);
          } catch (e) {}j.set(e, t, n);
        } else n=void 0;
      } return n;
    }jQuery.extend({hasData: function(e) {
      return j.hasData(e)||A.hasData(e);
    }, data: function(e, t, n) {
      return j.access(e, t, n);
    }, removeData: function(e, t) {
      j.remove(e, t);
    }, _data: function(e, t, n) {
      return A.access(e, t, n);
    }, _removeData: function(e, t) {
      A.remove(e, t);
    }}), jQuery.fn.extend({data: function(e, t) {
      var n; var r; var a; var i=this[0]; var o=i&&i.attributes; if (void 0===e) {
        if (this.length&&(a=j.get(i), 1===i.nodeType&&!A.get(i, 'hasDataAttrs'))) {
          for (n=o.length; n--;)o[n]&&0===(r=o[n].name).indexOf('data-')&&(r=camelCase(r.slice(5)), dataAttr(i, r, a[r])); A.set(i, 'hasDataAttrs', !0);
        } return a;
      } return 'object'==typeof e?this.each((function() {
        j.set(this, e);
      })):access(this, (function(t) {
        var n; if (i&&void 0===t) return void 0!==(n=j.get(i, e))||void 0!==(n=dataAttr(i, e))?n:void 0; this.each((function() {
          j.set(this, e, t);
        }));
      }), null, t, arguments.length>1, null, !0);
    }, removeData: function(e) {
      return this.each((function() {
        j.remove(this, e);
      }));
    }}), jQuery.extend({queue: function(e, t, n) {
      var r; if (e) return t=(t||'fx')+'queue', r=A.get(e, t), n&&(!r||Array.isArray(n)?r=A.access(e, t, jQuery.makeArray(n)):r.push(n)), r||[];
    }, dequeue: function(e, t) {
      t=t||'fx'; var n=jQuery.queue(e, t); var r=n.length; var a=n.shift(); var i=jQuery._queueHooks(e, t); 'inprogress'===a&&(a=n.shift(), r--), a&&('fx'===t&&n.unshift('inprogress'), delete i.stop, a.call(e, (function() {
        jQuery.dequeue(e, t);
      }), i)), !r&&i&&i.empty.fire();
    }, _queueHooks: function(e, t) {
      var n=t+'queueHooks'; return A.get(e, n)||A.access(e, n, {empty: jQuery.Callbacks('once memory').add((function() {
        A.remove(e, [t+'queue', n]);
      }))});
    }}), jQuery.fn.extend({queue: function(e, t) {
      var n=2; return 'string'!=typeof e&&(t=e, e='fx', n--), arguments.length<n?jQuery.queue(this[0], e):void 0===t?this:this.each((function() {
        var n=jQuery.queue(this, e, t); jQuery._queueHooks(this, e), 'fx'===e&&'inprogress'!==n[0]&&jQuery.dequeue(this, e);
      }));
    }, dequeue: function(e) {
      return this.each((function() {
        jQuery.dequeue(this, e);
      }));
    }, clearQueue: function(e) {
      return this.queue(e||'fx', []);
    }, promise: function(e, t) {
      var n; var r=1; var a=jQuery.Deferred(); var i=this; var o=this.length; var resolve=function() {
        --r||a.resolveWith(i, [i]);
      }; for ('string'!=typeof e&&(t=e, e=void 0), e=e||'fx'; o--;)(n=A.get(i[o], e+'queueHooks'))&&n.empty&&(r++, n.empty.add(resolve)); return resolve(), a.promise(t);
    }}); var V=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source; var L=new RegExp('^(?:([+-])=|)('+V+')([a-z%]*)$', 'i'); var B=['Top', 'Right', 'Bottom', 'Left']; var I=v.documentElement; var isAttached=function(e) {
      return jQuery.contains(e.ownerDocument, e);
    }; var z={composed: !0}; I.getRootNode&&(isAttached=function(e) {
      return jQuery.contains(e.ownerDocument, e)||e.getRootNode(z)===e.ownerDocument;
    }); var isHiddenWithinTree=function(e, t) {
      return 'none'===(e=t||e).style.display||''===e.style.display&&isAttached(e)&&'none'===jQuery.css(e, 'display');
    }; function adjustCSS(e, t, n, r) {
      var a; var i; var o=20; var s=r?function() {
        return r.cur();
      }:function() {
        return jQuery.css(e, t, '');
      }; var l=s(); var u=n&&n[3]||(jQuery.cssNumber[t]?'':'px'); var c=e.nodeType&&(jQuery.cssNumber[t]||'px'!==u&&+l)&&L.exec(jQuery.css(e, t)); if (c&&c[3]!==u) {
        for (l/=2, u=u||c[3], c=+l||1; o--;)jQuery.style(e, t, c+u), (1-i)*(1-(i=s()/l||.5))<=0&&(o=0), c/=i; c*=2, jQuery.style(e, t, c+u), n=n||[];
      } return n&&(c=+c||+l||0, a=n[1]?c+(n[1]+1)*n[2]:+n[2], r&&(r.unit=u, r.start=c, r.end=a)), a;
    } var F={}; function getDefaultDisplay(e) {
      var t; var n=e.ownerDocument; var r=e.nodeName; var a=F[r]; return a||(t=n.body.appendChild(n.createElement(r)), a=jQuery.css(t, 'display'), t.parentNode.removeChild(t), 'none'===a&&(a='block'), F[r]=a, a);
    } function showHide(e, t) {
      for (var n, r, a=[], i=0, o=e.length; i<o; i++)(r=e[i]).style&&(n=r.style.display, t?('none'===n&&(a[i]=A.get(r, 'display')||null, a[i]||(r.style.display='')), ''===r.style.display&&isHiddenWithinTree(r)&&(a[i]=getDefaultDisplay(r))):'none'!==n&&(a[i]='none', A.set(r, 'display', n))); for (i=0; i<o; i++)null!=a[i]&&(e[i].style.display=a[i]); return e;
    }jQuery.fn.extend({show: function() {
      return showHide(this, !0);
    }, hide: function() {
      return showHide(this);
    }, toggle: function(e) {
      return 'boolean'==typeof e?e?this.show():this.hide():this.each((function() {
isHiddenWithinTree(this)?jQuery(this).show():jQuery(this).hide();
      }));
    }}); var U; var H; var q=/^(?:checkbox|radio)$/i; var W=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i; var $=/^$|^module$|\/(?:java|ecma)script/i; U=v.createDocumentFragment().appendChild(v.createElement('div')), (H=v.createElement('input')).setAttribute('type', 'radio'), H.setAttribute('checked', 'checked'), H.setAttribute('name', 't'), U.appendChild(H), g.checkClone=U.cloneNode(!0).cloneNode(!0).lastChild.checked, U.innerHTML='<textarea>x</textarea>', g.noCloneChecked=!!U.cloneNode(!0).lastChild.defaultValue, U.innerHTML='<option></option>', g.option=!!U.lastChild; var G={thead: [1, '<table>', '</table>'], col: [2, '<table><colgroup>', '</colgroup></table>'], tr: [2, '<table><tbody>', '</tbody></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], _default: [0, '', '']}; function getAll(e, t) {
      var n; return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||'*'):void 0!==e.querySelectorAll?e.querySelectorAll(t||'*'):[], void 0===t||t&&nodeName(e, t)?jQuery.merge([e], n):n;
    } function setGlobalEval(e, t) {
      for (var n=0, r=e.length; n<r; n++)A.set(e[n], 'globalEval', !t||A.get(t[n], 'globalEval'));
    }G.tbody=G.tfoot=G.colgroup=G.caption=G.thead, G.th=G.td, g.option||(G.optgroup=G.option=[1, '<select multiple=\'multiple\'>', '</select>']); var Y=/<|&#?\w+;/; function buildFragment(e, t, n, r, a) {
      for (var i, o, s, l, u, c, h=t.createDocumentFragment(), f=[], d=0, p=e.length; d<p; d++) {
        if ((i=e[d])||0===i) {
          if ('object'===toType(i))jQuery.merge(f, i.nodeType?[i]:i); else if (Y.test(i)) {
            for (o=o||h.appendChild(t.createElement('div')), s=(W.exec(i)||['', ''])[1].toLowerCase(), l=G[s]||G._default, o.innerHTML=l[1]+jQuery.htmlPrefilter(i)+l[2], c=l[0]; c--;)o=o.lastChild; jQuery.merge(f, o.childNodes), (o=h.firstChild).textContent='';
          } else f.push(t.createTextNode(i));
        }
      } for (h.textContent='', d=0; i=f[d++];) if (r&&jQuery.inArray(i, r)>-1)a&&a.push(i); else if (u=isAttached(i), o=getAll(h.appendChild(i), 'script'), u&&setGlobalEval(o), n) for (c=0; i=o[c++];)$.test(i.type||'')&&n.push(i); return h;
    } var K=/^([^.]*)(?:\.(.+)|)/; function returnTrue() {
      return !0;
    } function returnFalse() {
      return !1;
    } function expectSync(e, t) {
      return e===function() {
        try {
          return v.activeElement;
        } catch (e) {}
      }()==('focus'===t);
    } function on(e, t, n, r, a, i) {
      var o; var s; if ('object'==typeof t) {
        for (s in 'string'!=typeof n&&(r=r||n, n=void 0), t)on(e, s, n, r, t[s], i); return e;
      } if (null==r&&null==a?(a=n, r=n=void 0):null==a&&('string'==typeof n?(a=r, r=void 0):(a=r, r=n, n=void 0)), !1===a)a=returnFalse; else if (!a) return e; return 1===i&&(o=a, (a=function(e) {
        return jQuery().off(e), o.apply(this, arguments);
      }).guid=o.guid||(o.guid=jQuery.guid++)), e.each((function() {
        jQuery.event.add(this, t, a, r, n);
      }));
    } function leverageNative(e, t, n) {
n?(A.set(e, t, !1), jQuery.event.add(e, t, {namespace: !1, handler: function(e) {
  var r; var a; var i=A.get(this, t); if (1&e.isTrigger&&this[t]) {
    if (i.length)(jQuery.event.special[t]||{}).delegateType&&e.stopPropagation(); else if (i=s.call(arguments), A.set(this, t, i), r=n(this, t), this[t](), i!==(a=A.get(this, t))||r?A.set(this, t, !1):a={}, i!==a) return e.stopImmediatePropagation(), e.preventDefault(), a&&a.value;
  } else i.length&&(A.set(this, t, {value: jQuery.event.trigger(jQuery.extend(i[0], jQuery.Event.prototype), i.slice(1), this)}), e.stopImmediatePropagation());
}})):void 0===A.get(e, t)&&jQuery.event.add(e, t, returnTrue);
    }jQuery.event={global: {}, add: function(e, t, n, r, a) {
      var i; var o; var s; var l; var u; var c; var h; var f; var d; var p; var m; var g=A.get(e); if (acceptData(e)) {
        for (n.handler&&(n=(i=n).handler, a=i.selector), a&&jQuery.find.matchesSelector(I, a), n.guid||(n.guid=jQuery.guid++), (l=g.events)||(l=g.events=Object.create(null)), (o=g.handle)||(o=g.handle=function(t) {
          return void 0!==jQuery&&jQuery.event.triggered!==t.type?jQuery.event.dispatch.apply(e, arguments):void 0;
        }), u=(t=(t||'').match(T)||['']).length; u--;)d=m=(s=K.exec(t[u])||[])[1], p=(s[2]||'').split('.').sort(), d&&(h=jQuery.event.special[d]||{}, d=(a?h.delegateType:h.bindType)||d, h=jQuery.event.special[d]||{}, c=jQuery.extend({type: d, origType: m, data: r, handler: n, guid: n.guid, selector: a, needsContext: a&&jQuery.expr.match.needsContext.test(a), namespace: p.join('.')}, i), (f=l[d])||((f=l[d]=[]).delegateCount=0, h.setup&&!1!==h.setup.call(e, r, p, o)||e.addEventListener&&e.addEventListener(d, o)), h.add&&(h.add.call(e, c), c.handler.guid||(c.handler.guid=n.guid)), a?f.splice(f.delegateCount++, 0, c):f.push(c), jQuery.event.global[d]=!0);
      }
    }, remove: function(e, t, n, r, a) {
      var i; var o; var s; var l; var u; var c; var h; var f; var d; var p; var m; var g=A.hasData(e)&&A.get(e); if (g&&(l=g.events)) {
        for (u=(t=(t||'').match(T)||['']).length; u--;) {
          if (d=m=(s=K.exec(t[u])||[])[1], p=(s[2]||'').split('.').sort(), d) {
            for (h=jQuery.event.special[d]||{}, f=l[d=(r?h.delegateType:h.bindType)||d]||[], s=s[2]&&new RegExp('(^|\\.)'+p.join('\\.(?:.*\\.|)')+'(\\.|$)'), o=i=f.length; i--;)c=f[i], !a&&m!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&('**'!==r||!c.selector)||(f.splice(i, 1), c.selector&&f.delegateCount--, h.remove&&h.remove.call(e, c)); o&&!f.length&&(h.teardown&&!1!==h.teardown.call(e, p, g.handle)||jQuery.removeEvent(e, d, g.handle), delete l[d]);
          } else for (d in l)jQuery.event.remove(e, d+t[u], n, r, !0);
        } jQuery.isEmptyObject(l)&&A.remove(e, 'handle events');
      }
    }, dispatch: function(e) {
      var t; var n; var r; var a; var i; var o; var s=new Array(arguments.length); var l=jQuery.event.fix(e); var u=(A.get(this, 'events')||Object.create(null))[l.type]||[]; var c=jQuery.event.special[l.type]||{}; for (s[0]=l, t=1; t<arguments.length; t++)s[t]=arguments[t]; if (l.delegateTarget=this, !c.preDispatch||!1!==c.preDispatch.call(this, l)) {
        for (o=jQuery.event.handlers.call(this, l, u), t=0; (a=o[t++])&&!l.isPropagationStopped();) for (l.currentTarget=a.elem, n=0; (i=a.handlers[n++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==i.namespace&&!l.rnamespace.test(i.namespace)||(l.handleObj=i, l.data=i.data, void 0!==(r=((jQuery.event.special[i.origType]||{}).handle||i.handler).apply(a.elem, s))&&!1===(l.result=r)&&(l.preventDefault(), l.stopPropagation())); return c.postDispatch&&c.postDispatch.call(this, l), l.result;
      }
    }, handlers: function(e, t) {
      var n; var r; var a; var i; var o; var s=[]; var l=t.delegateCount; var u=e.target; if (l&&u.nodeType&&!('click'===e.type&&e.button>=1)) {
        for (;u!==this; u=u.parentNode||this) {
          if (1===u.nodeType&&('click'!==e.type||!0!==u.disabled)) {
            for (i=[], o={}, n=0; n<l; n++) void 0===o[a=(r=t[n]).selector+' ']&&(o[a]=r.needsContext?jQuery(a, this).index(u)>-1:jQuery.find(a, this, null, [u]).length), o[a]&&i.push(r); i.length&&s.push({elem: u, handlers: i});
          }
        }
      } return u=this, l<t.length&&s.push({elem: u, handlers: t.slice(l)}), s;
    }, addProp: function(e, t) {
      Object.defineProperty(jQuery.Event.prototype, e, {enumerable: !0, configurable: !0, get: isFunction(t)?function() {
        if (this.originalEvent) return t(this.originalEvent);
      }:function() {
        if (this.originalEvent) return this.originalEvent[e];
      }, set: function(t) {
        Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t});
      }});
    }, fix: function(e) {
      return e[jQuery.expando]?e:new jQuery.Event(e);
    }, special: {load: {noBubble: !0}, click: {setup: function(e) {
      var t=this||e; return q.test(t.type)&&t.click&&nodeName(t, 'input')&&leverageNative(t, 'click', returnTrue), !1;
    }, trigger: function(e) {
      var t=this||e; return q.test(t.type)&&t.click&&nodeName(t, 'input')&&leverageNative(t, 'click'), !0;
    }, _default: function(e) {
      var t=e.target; return q.test(t.type)&&t.click&&nodeName(t, 'input')&&A.get(t, 'click')||nodeName(t, 'a');
    }}, beforeunload: {postDispatch: function(e) {
      void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result);
    }}}}, jQuery.removeEvent=function(e, t, n) {
      e.removeEventListener&&e.removeEventListener(t, n);
    }, jQuery.Event=function(e, t) {
      if (!(this instanceof jQuery.Event)) return new jQuery.Event(e, t); e&&e.type?(this.originalEvent=e, this.type=e.type, this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?returnTrue:returnFalse, this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target, this.currentTarget=e.currentTarget, this.relatedTarget=e.relatedTarget):this.type=e, t&&jQuery.extend(this, t), this.timeStamp=e&&e.timeStamp||Date.now(), this[jQuery.expando]=!0;
    }, jQuery.Event.prototype={constructor: jQuery.Event, isDefaultPrevented: returnFalse, isPropagationStopped: returnFalse, isImmediatePropagationStopped: returnFalse, isSimulated: !1, preventDefault: function() {
      var e=this.originalEvent; this.isDefaultPrevented=returnTrue, e&&!this.isSimulated&&e.preventDefault();
    }, stopPropagation: function() {
      var e=this.originalEvent; this.isPropagationStopped=returnTrue, e&&!this.isSimulated&&e.stopPropagation();
    }, stopImmediatePropagation: function() {
      var e=this.originalEvent; this.isImmediatePropagationStopped=returnTrue, e&&!this.isSimulated&&e.stopImmediatePropagation(), this.stopPropagation();
    }}, jQuery.each({altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0}, jQuery.event.addProp), jQuery.each({focus: 'focusin', blur: 'focusout'}, (function(e, t) {
      jQuery.event.special[e]={setup: function() {
        return leverageNative(this, e, expectSync), !1;
      }, trigger: function() {
        return leverageNative(this, e), !0;
      }, _default: function(t) {
        return A.get(t.target, e);
      }, delegateType: t};
    })), jQuery.each({mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout'}, (function(e, t) {
      jQuery.event.special[e]={delegateType: t, bindType: t, handle: function(e) {
        var n; var r=this; var a=e.relatedTarget; var i=e.handleObj; return a&&(a===r||jQuery.contains(r, a))||(e.type=i.origType, n=i.handler.apply(this, arguments), e.type=t), n;
      }};
    })), jQuery.fn.extend({on: function(e, t, n, r) {
      return on(this, e, t, n, r);
    }, one: function(e, t, n, r) {
      return on(this, e, t, n, r, 1);
    }, off: function(e, t, n) {
      var r; var a; if (e&&e.preventDefault&&e.handleObj) return r=e.handleObj, jQuery(e.delegateTarget).off(r.namespace?r.origType+'.'+r.namespace:r.origType, r.selector, r.handler), this; if ('object'==typeof e) {
        for (a in e) this.off(a, t, e[a]); return this;
      } return !1!==t&&'function'!=typeof t||(n=t, t=void 0), !1===n&&(n=returnFalse), this.each((function() {
        jQuery.event.remove(this, e, n, t);
      }));
    }}); var X=/<script|<style|<link/i; var Z=/checked\s*(?:[^=]|=\s*.checked.)/i; var J=/^\s*<!\[CDATA\[|\]\]>\s*$/g; function manipulationTarget(e, t) {
      return nodeName(e, 'table')&&nodeName(11!==t.nodeType?t:t.firstChild, 'tr')&&jQuery(e).children('tbody')[0]||e;
    } function disableScript(e) {
      return e.type=(null!==e.getAttribute('type'))+'/'+e.type, e;
    } function restoreScript(e) {
      return 'true/'===(e.type||'').slice(0, 5)?e.type=e.type.slice(5):e.removeAttribute('type'), e;
    } function cloneCopyEvent(e, t) {
      var n; var r; var a; var i; var o; var s; if (1===t.nodeType) {
        if (A.hasData(e)&&(s=A.get(e).events)) for (a in A.remove(t, 'handle events'), s) for (n=0, r=s[a].length; n<r; n++)jQuery.event.add(t, a, s[a][n]); j.hasData(e)&&(i=j.access(e), o=jQuery.extend({}, i), j.set(t, o));
      }
    } function fixInput(e, t) {
      var n=t.nodeName.toLowerCase(); 'input'===n&&q.test(e.type)?t.checked=e.checked:'input'!==n&&'textarea'!==n||(t.defaultValue=e.defaultValue);
    } function domManip(e, t, n, r) {
      t=l(t); var a; var i; var o; var s; var u; var c; var h=0; var f=e.length; var d=f-1; var p=t[0]; var m=isFunction(p); if (m||f>1&&'string'==typeof p&&!g.checkClone&&Z.test(p)) {
        return e.each((function(a) {
          var i=e.eq(a); m&&(t[0]=p.call(this, a, i.html())), domManip(i, t, n, r);
        }));
      } if (f&&(i=(a=buildFragment(t, e[0].ownerDocument, !1, e, r)).firstChild, 1===a.childNodes.length&&(a=i), i||r)) {
        for (s=(o=jQuery.map(getAll(a, 'script'), disableScript)).length; h<f; h++)u=a, h!==d&&(u=jQuery.clone(u, !0, !0), s&&jQuery.merge(o, getAll(u, 'script'))), n.call(e[h], u, h); if (s) for (c=o[o.length-1].ownerDocument, jQuery.map(o, restoreScript), h=0; h<s; h++)u=o[h], $.test(u.type||'')&&!A.access(u, 'globalEval')&&jQuery.contains(c, u)&&(u.src&&'module'!==(u.type||'').toLowerCase()?jQuery._evalUrl&&!u.noModule&&jQuery._evalUrl(u.src, {nonce: u.nonce||u.getAttribute('nonce')}, c):DOMEval(u.textContent.replace(J, ''), u, c));
      } return e;
    } function remove(e, t, n) {
      for (var r, a=t?jQuery.filter(t, e):e, i=0; null!=(r=a[i]); i++)n||1!==r.nodeType||jQuery.cleanData(getAll(r)), r.parentNode&&(n&&isAttached(r)&&setGlobalEval(getAll(r, 'script')), r.parentNode.removeChild(r)); return e;
    }jQuery.extend({htmlPrefilter: function(e) {
      return e;
    }, clone: function(e, t, n) {
      var r; var a; var i; var o; var s=e.cloneNode(!0); var l=isAttached(e); if (!(g.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||jQuery.isXMLDoc(e))) for (o=getAll(s), r=0, a=(i=getAll(e)).length; r<a; r++)fixInput(i[r], o[r]); if (t) if (n) for (i=i||getAll(e), o=o||getAll(s), r=0, a=i.length; r<a; r++)cloneCopyEvent(i[r], o[r]); else cloneCopyEvent(e, s); return (o=getAll(s, 'script')).length>0&&setGlobalEval(o, !l&&getAll(e, 'script')), s;
    }, cleanData: function(e) {
      for (var t, n, r, a=jQuery.event.special, i=0; void 0!==(n=e[i]); i++) {
        if (acceptData(n)) {
          if (t=n[A.expando]) {
            if (t.events) for (r in t.events)a[r]?jQuery.event.remove(n, r):jQuery.removeEvent(n, r, t.handle); n[A.expando]=void 0;
          }n[j.expando]&&(n[j.expando]=void 0);
        }
      }
    }}), jQuery.fn.extend({detach: function(e) {
      return remove(this, e, !0);
    }, remove: function(e) {
      return remove(this, e);
    }, text: function(e) {
      return access(this, (function(e) {
        return void 0===e?jQuery.text(this):this.empty().each((function() {
          1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e);
        }));
      }), null, e, arguments.length);
    }, append: function() {
      return domManip(this, arguments, (function(e) {
        1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||manipulationTarget(this, e).appendChild(e);
      }));
    }, prepend: function() {
      return domManip(this, arguments, (function(e) {
        if (1===this.nodeType||11===this.nodeType||9===this.nodeType) {
          var t=manipulationTarget(this, e); t.insertBefore(e, t.firstChild);
        }
      }));
    }, before: function() {
      return domManip(this, arguments, (function(e) {
        this.parentNode&&this.parentNode.insertBefore(e, this);
      }));
    }, after: function() {
      return domManip(this, arguments, (function(e) {
        this.parentNode&&this.parentNode.insertBefore(e, this.nextSibling);
      }));
    }, empty: function() {
      for (var e, t=0; null!=(e=this[t]); t++)1===e.nodeType&&(jQuery.cleanData(getAll(e, !1)), e.textContent=''); return this;
    }, clone: function(e, t) {
      return e=null!=e&&e, t=null==t?e:t, this.map((function() {
        return jQuery.clone(this, e, t);
      }));
    }, html: function(e) {
      return access(this, (function(e) {
        var t=this[0]||{}; var n=0; var r=this.length; if (void 0===e&&1===t.nodeType) return t.innerHTML; if ('string'==typeof e&&!X.test(e)&&!G[(W.exec(e)||['', ''])[1].toLowerCase()]) {
          e=jQuery.htmlPrefilter(e); try {
            for (;n<r; n++)1===(t=this[n]||{}).nodeType&&(jQuery.cleanData(getAll(t, !1)), t.innerHTML=e); t=0;
          } catch (e) {}
        }t&&this.empty().append(e);
      }), null, e, arguments.length);
    }, replaceWith: function() {
      var e=[]; return domManip(this, arguments, (function(t) {
        var n=this.parentNode; jQuery.inArray(this, e)<0&&(jQuery.cleanData(getAll(this)), n&&n.replaceChild(t, this));
      }), e);
    }}), jQuery.each({appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith'}, (function(e, t) {
      jQuery.fn[e]=function(e) {
        for (var n, r=[], a=jQuery(e), i=a.length-1, o=0; o<=i; o++)n=o===i?this:this.clone(!0), jQuery(a[o])[t](n), u.apply(r, n.get()); return this.pushStack(r);
      };
    })); var Q=new RegExp('^('+V+')(?!px)[a-z%]+$', 'i'); var ee=/^--/; var getStyles=function(e) {
      var t=e.ownerDocument.defaultView; return t&&t.opener||(t=n), t.getComputedStyle(e);
    }; var swap=function(e, t, n) {
      var r; var a; var i={}; for (a in t)i[a]=e.style[a], e.style[a]=t[a]; for (a in r=n.call(e), t)e.style[a]=i[a]; return r;
    }; var te=new RegExp(B.join('|'), 'i'); var ne=new RegExp('^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$', 'g'); function curCSS(e, t, n) {
      var r; var a; var i; var o; var s=ee.test(t); var l=e.style; return (n=n||getStyles(e))&&(o=n.getPropertyValue(t)||n[t], s&&(o=o.replace(ne, '$1')), ''!==o||isAttached(e)||(o=jQuery.style(e, t)), !g.pixelBoxStyles()&&Q.test(o)&&te.test(t)&&(r=l.width, a=l.minWidth, i=l.maxWidth, l.minWidth=l.maxWidth=l.width=o, o=n.width, l.width=r, l.minWidth=a, l.maxWidth=i)), void 0!==o?o+'':o;
    } function addGetHookIf(e, t) {
      return {get: function() {
        if (!e()) return (this.get=t).apply(this, arguments); delete this.get;
      }};
    }!function() {
      function computeStyleTests() {
        if (l) {
          s.style.cssText='position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0', l.style.cssText='position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%', I.appendChild(s).appendChild(l); var i=n.getComputedStyle(l); e='1%'!==i.top, o=12===roundPixelMeasures(i.marginLeft), l.style.right='60%', a=36===roundPixelMeasures(i.right), t=36===roundPixelMeasures(i.width), l.style.position='absolute', r=12===roundPixelMeasures(l.offsetWidth/3), I.removeChild(s), l=null;
        }
      } function roundPixelMeasures(e) {
        return Math.round(parseFloat(e));
      } var e; var t; var r; var a; var i; var o; var s=v.createElement('div'); var l=v.createElement('div'); l.style&&(l.style.backgroundClip='content-box', l.cloneNode(!0).style.backgroundClip='', g.clearCloneStyle='content-box'===l.style.backgroundClip, jQuery.extend(g, {boxSizingReliable: function() {
        return computeStyleTests(), t;
      }, pixelBoxStyles: function() {
        return computeStyleTests(), a;
      }, pixelPosition: function() {
        return computeStyleTests(), e;
      }, reliableMarginLeft: function() {
        return computeStyleTests(), o;
      }, scrollboxSize: function() {
        return computeStyleTests(), r;
      }, reliableTrDimensions: function() {
        var e; var t; var r; var a; return null==i&&(e=v.createElement('table'), t=v.createElement('tr'), r=v.createElement('div'), e.style.cssText='position:absolute;left:-11111px;border-collapse:separate', t.style.cssText='border:1px solid', t.style.height='1px', r.style.height='9px', r.style.display='block', I.appendChild(e).appendChild(t).appendChild(r), a=n.getComputedStyle(t), i=parseInt(a.height, 10)+parseInt(a.borderTopWidth, 10)+parseInt(a.borderBottomWidth, 10)===t.offsetHeight, I.removeChild(e)), i;
      }}));
    }(); var re=['Webkit', 'Moz', 'ms']; var ae=v.createElement('div').style; var ie={}; function finalPropName(e) {
      var t=jQuery.cssProps[e]||ie[e]; return t||(e in ae?e:ie[e]=function(e) {
        for (var t=e[0].toUpperCase()+e.slice(1), n=re.length; n--;) if ((e=re[n]+t)in ae) return e;
      }(e)||e);
    } var oe=/^(none|table(?!-c[ea]).+)/; var se={position: 'absolute', visibility: 'hidden', display: 'block'}; var le={letterSpacing: '0', fontWeight: '400'}; function setPositiveNumber(e, t, n) {
      var r=L.exec(t); return r?Math.max(0, r[2]-(n||0))+(r[3]||'px'):t;
    } function boxModelAdjustment(e, t, n, r, a, i) {
      var o='width'===t?1:0; var s=0; var l=0; if (n===(r?'border':'content')) return 0; for (;o<4; o+=2)'margin'===n&&(l+=jQuery.css(e, n+B[o], !0, a)), r?('content'===n&&(l-=jQuery.css(e, 'padding'+B[o], !0, a)), 'margin'!==n&&(l-=jQuery.css(e, 'border'+B[o]+'Width', !0, a))):(l+=jQuery.css(e, 'padding'+B[o], !0, a), 'padding'!==n?l+=jQuery.css(e, 'border'+B[o]+'Width', !0, a):s+=jQuery.css(e, 'border'+B[o]+'Width', !0, a)); return !r&&i>=0&&(l+=Math.max(0, Math.ceil(e['offset'+t[0].toUpperCase()+t.slice(1)]-i-l-s-.5))||0), l;
    } function getWidthOrHeight(e, t, n) {
      var r=getStyles(e); var a=(!g.boxSizingReliable()||n)&&'border-box'===jQuery.css(e, 'boxSizing', !1, r); var i=a; var o=curCSS(e, t, r); var s='offset'+t[0].toUpperCase()+t.slice(1); if (Q.test(o)) {
        if (!n) return o; o='auto';
      } return (!g.boxSizingReliable()&&a||!g.reliableTrDimensions()&&nodeName(e, 'tr')||'auto'===o||!parseFloat(o)&&'inline'===jQuery.css(e, 'display', !1, r))&&e.getClientRects().length&&(a='border-box'===jQuery.css(e, 'boxSizing', !1, r), (i=s in e)&&(o=e[s])), (o=parseFloat(o)||0)+boxModelAdjustment(e, t, n||(a?'border':'content'), i, r, o)+'px';
    } function Tween(e, t, n, r, a) {
      return new Tween.prototype.init(e, t, n, r, a);
    }jQuery.extend({cssHooks: {opacity: {get: function(e, t) {
      if (t) {
        var n=curCSS(e, 'opacity'); return ''===n?'1':n;
      }
    }}}, cssNumber: {animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {}, style: function(e, t, n, r) {
      if (e&&3!==e.nodeType&&8!==e.nodeType&&e.style) {
        var a; var i; var o; var s=camelCase(t); var l=ee.test(t); var u=e.style; if (l||(t=finalPropName(s)), o=jQuery.cssHooks[t]||jQuery.cssHooks[s], void 0===n) return o&&'get'in o&&void 0!==(a=o.get(e, !1, r))?a:u[t]; 'string'===(i=typeof n)&&(a=L.exec(n))&&a[1]&&(n=adjustCSS(e, t, a), i='number'), null!=n&&n==n&&('number'!==i||l||(n+=a&&a[3]||(jQuery.cssNumber[s]?'':'px')), g.clearCloneStyle||''!==n||0!==t.indexOf('background')||(u[t]='inherit'), o&&'set'in o&&void 0===(n=o.set(e, n, r))||(l?u.setProperty(t, n):u[t]=n));
      }
    }, css: function(e, t, n, r) {
      var a; var i; var o; var s=camelCase(t); return ee.test(t)||(t=finalPropName(s)), (o=jQuery.cssHooks[t]||jQuery.cssHooks[s])&&'get'in o&&(a=o.get(e, !0, n)), void 0===a&&(a=curCSS(e, t, r)), 'normal'===a&&t in le&&(a=le[t]), ''===n||n?(i=parseFloat(a), !0===n||isFinite(i)?i||0:a):a;
    }}), jQuery.each(['height', 'width'], (function(e, t) {
      jQuery.cssHooks[t]={get: function(e, n, r) {
        if (n) {
          return !oe.test(jQuery.css(e, 'display'))||e.getClientRects().length&&e.getBoundingClientRect().width?getWidthOrHeight(e, t, r):swap(e, se, (function() {
            return getWidthOrHeight(e, t, r);
          }));
        }
      }, set: function(e, n, r) {
        var a; var i=getStyles(e); var o=!g.scrollboxSize()&&'absolute'===i.position; var s=(o||r)&&'border-box'===jQuery.css(e, 'boxSizing', !1, i); var l=r?boxModelAdjustment(e, t, r, s, i):0; return s&&o&&(l-=Math.ceil(e['offset'+t[0].toUpperCase()+t.slice(1)]-parseFloat(i[t])-boxModelAdjustment(e, t, 'border', !1, i)-.5)), l&&(a=L.exec(n))&&'px'!==(a[3]||'px')&&(e.style[t]=n, n=jQuery.css(e, t)), setPositiveNumber(0, n, l);
      }};
    })), jQuery.cssHooks.marginLeft=addGetHookIf(g.reliableMarginLeft, (function(e, t) {
      if (t) {
        return (parseFloat(curCSS(e, 'marginLeft'))||e.getBoundingClientRect().left-swap(e, {marginLeft: 0}, (function() {
          return e.getBoundingClientRect().left;
        })))+'px';
      }
    })), jQuery.each({margin: '', padding: '', border: 'Width'}, (function(e, t) {
      jQuery.cssHooks[e+t]={expand: function(n) {
        for (var r=0, a={}, i='string'==typeof n?n.split(' '):[n]; r<4; r++)a[e+B[r]+t]=i[r]||i[r-2]||i[0]; return a;
      }}, 'margin'!==e&&(jQuery.cssHooks[e+t].set=setPositiveNumber);
    })), jQuery.fn.extend({css: function(e, t) {
      return access(this, (function(e, t, n) {
        var r; var a; var i={}; var o=0; if (Array.isArray(t)) {
          for (r=getStyles(e), a=t.length; o<a; o++)i[t[o]]=jQuery.css(e, t[o], !1, r); return i;
        } return void 0!==n?jQuery.style(e, t, n):jQuery.css(e, t);
      }), e, t, arguments.length>1);
    }}), jQuery.Tween=Tween, Tween.prototype={constructor: Tween, init: function(e, t, n, r, a, i) {
      this.elem=e, this.prop=n, this.easing=a||jQuery.easing._default, this.options=t, this.start=this.now=this.cur(), this.end=r, this.unit=i||(jQuery.cssNumber[n]?'':'px');
    }, cur: function() {
      var e=Tween.propHooks[this.prop]; return e&&e.get?e.get(this):Tween.propHooks._default.get(this);
    }, run: function(e) {
      var t; var n=Tween.propHooks[this.prop]; return this.options.duration?this.pos=t=jQuery.easing[this.easing](e, this.options.duration*e, 0, 1, this.options.duration):this.pos=t=e, this.now=(this.end-this.start)*t+this.start, this.options.step&&this.options.step.call(this.elem, this.now, this), n&&n.set?n.set(this):Tween.propHooks._default.set(this), this;
    }}, Tween.prototype.init.prototype=Tween.prototype, Tween.propHooks={_default: {get: function(e) {
      var t; return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=jQuery.css(e.elem, e.prop, ''))&&'auto'!==t?t:0;
    }, set: function(e) {
jQuery.fx.step[e.prop]?jQuery.fx.step[e.prop](e):1!==e.elem.nodeType||!jQuery.cssHooks[e.prop]&&null==e.elem.style[finalPropName(e.prop)]?e.elem[e.prop]=e.now:jQuery.style(e.elem, e.prop, e.now+e.unit);
    }}}, Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set: function(e) {
      e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now);
    }}, jQuery.easing={linear: function(e) {
      return e;
    }, swing: function(e) {
      return.5-Math.cos(e*Math.PI)/2;
    }, _default: 'swing'}, jQuery.fx=Tween.prototype.init, jQuery.fx.step={}; var ue; var ce; var he=/^(?:toggle|show|hide)$/; var fe=/queueHooks$/; function schedule() {
      ce&&(!1===v.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(schedule):n.setTimeout(schedule, jQuery.fx.interval), jQuery.fx.tick());
    } function createFxNow() {
      return n.setTimeout((function() {
        ue=void 0;
      })), ue=Date.now();
    } function genFx(e, t) {
      var n; var r=0; var a={height: e}; for (t=t?1:0; r<4; r+=2-t)a['margin'+(n=B[r])]=a['padding'+n]=e; return t&&(a.opacity=a.width=e), a;
    } function createTween(e, t, n) {
      for (var r, a=(Animation.tweeners[t]||[]).concat(Animation.tweeners['*']), i=0, o=a.length; i<o; i++) if (r=a[i].call(n, t, e)) return r;
    } function Animation(e, t, n) {
      var r; var a; var i=0; var o=Animation.prefilters.length; var s=jQuery.Deferred().always((function() {
        delete tick.elem;
      })); var tick=function() {
        if (a) return !1; for (var t=ue||createFxNow(), n=Math.max(0, l.startTime+l.duration-t), r=1-(n/l.duration||0), i=0, o=l.tweens.length; i<o; i++)l.tweens[i].run(r); return s.notifyWith(e, [l, r, n]), r<1&&o?n:(o||s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
      }; var l=s.promise({elem: e, props: jQuery.extend({}, t), opts: jQuery.extend(!0, {specialEasing: {}, easing: jQuery.easing._default}, n), originalProperties: t, originalOptions: n, startTime: ue||createFxNow(), duration: n.duration, tweens: [], createTween: function(t, n) {
        var r=jQuery.Tween(e, l.opts, t, n, l.opts.specialEasing[t]||l.opts.easing); return l.tweens.push(r), r;
      }, stop: function(t) {
        var n=0; var r=t?l.tweens.length:0; if (a) return this; for (a=!0; n<r; n++)l.tweens[n].run(1); return t?(s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])):s.rejectWith(e, [l, t]), this;
      }}); var u=l.props; for (!function(e, t) {
        var n; var r; var a; var i; var o; for (n in e) if (a=t[r=camelCase(n)], i=e[n], Array.isArray(i)&&(a=i[1], i=e[n]=i[0]), n!==r&&(e[r]=i, delete e[n]), (o=jQuery.cssHooks[r])&&'expand'in o) for (n in i=o.expand(i), delete e[r], i)n in e||(e[n]=i[n], t[n]=a); else t[r]=a;
      }(u, l.opts.specialEasing); i<o; i++) if (r=Animation.prefilters[i].call(l, e, u, l.opts)) return isFunction(r.stop)&&(jQuery._queueHooks(l.elem, l.opts.queue).stop=r.stop.bind(r)), r; return jQuery.map(u, createTween, l), isFunction(l.opts.start)&&l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), jQuery.fx.timer(jQuery.extend(tick, {elem: e, anim: l, queue: l.opts.queue})), l;
    }jQuery.Animation=jQuery.extend(Animation, {tweeners: {'*': [function(e, t) {
      var n=this.createTween(e, t); return adjustCSS(n.elem, e, L.exec(t), n), n;
    }]}, tweener: function(e, t) {
isFunction(e)?(t=e, e=['*']):e=e.match(T); for (var n, r=0, a=e.length; r<a; r++)n=e[r], Animation.tweeners[n]=Animation.tweeners[n]||[], Animation.tweeners[n].unshift(t);
    }, prefilters: [function(e, t, n) {
      var r; var a; var i; var o; var s; var l; var u; var c; var h='width'in t||'height'in t; var f=this; var d={}; var p=e.style; var m=e.nodeType&&isHiddenWithinTree(e); var g=A.get(e, 'fxshow'); for (r in n.queue||(null==(o=jQuery._queueHooks(e, 'fx')).unqueued&&(o.unqueued=0, s=o.empty.fire, o.empty.fire=function() {
        o.unqueued||s();
      }), o.unqueued++, f.always((function() {
        f.always((function() {
          o.unqueued--, jQuery.queue(e, 'fx').length||o.empty.fire();
        }));
      }))), t) {
        if (a=t[r], he.test(a)) {
          if (delete t[r], i=i||'toggle'===a, a===(m?'hide':'show')) {
            if ('show'!==a||!g||void 0===g[r]) continue; m=!0;
          }d[r]=g&&g[r]||jQuery.style(e, r);
        }
      } if ((l=!jQuery.isEmptyObject(t))||!jQuery.isEmptyObject(d)) {
        for (r in h&&1===e.nodeType&&(n.overflow=[p.overflow, p.overflowX, p.overflowY], null==(u=g&&g.display)&&(u=A.get(e, 'display')), 'none'===(c=jQuery.css(e, 'display'))&&(u?c=u:(showHide([e], !0), u=e.style.display||u, c=jQuery.css(e, 'display'), showHide([e]))), ('inline'===c||'inline-block'===c&&null!=u)&&'none'===jQuery.css(e, 'float')&&(l||(f.done((function() {
          p.display=u;
        })), null==u&&(c=p.display, u='none'===c?'':c)), p.display='inline-block')), n.overflow&&(p.overflow='hidden', f.always((function() {
          p.overflow=n.overflow[0], p.overflowX=n.overflow[1], p.overflowY=n.overflow[2];
        }))), l=!1, d) {
          l||(g?'hidden'in g&&(m=g.hidden):g=A.access(e, 'fxshow', {display: u}), i&&(g.hidden=!m), m&&showHide([e], !0), f.done((function() {
            for (r in m||showHide([e]), A.remove(e, 'fxshow'), d)jQuery.style(e, r, d[r]);
          }))), l=createTween(m?g[r]:0, r, f), r in g||(g[r]=l.start, m&&(l.end=l.start, l.start=0));
        }
      }
    }], prefilter: function(e, t) {
t?Animation.prefilters.unshift(e):Animation.prefilters.push(e);
    }}), jQuery.speed=function(e, t, n) {
      var r=e&&'object'==typeof e?jQuery.extend({}, e):{complete: n||!n&&t||isFunction(e)&&e, duration: e, easing: n&&t||t&&!isFunction(t)&&t}; return jQuery.fx.off?r.duration=0:'number'!=typeof r.duration&&(r.duration in jQuery.fx.speeds?r.duration=jQuery.fx.speeds[r.duration]:r.duration=jQuery.fx.speeds._default), null!=r.queue&&!0!==r.queue||(r.queue='fx'), r.old=r.complete, r.complete=function() {
        isFunction(r.old)&&r.old.call(this), r.queue&&jQuery.dequeue(this, r.queue);
      }, r;
    }, jQuery.fn.extend({fadeTo: function(e, t, n, r) {
      return this.filter(isHiddenWithinTree).css('opacity', 0).show().end().animate({opacity: t}, e, n, r);
    }, animate: function(e, t, n, r) {
      var a=jQuery.isEmptyObject(e); var i=jQuery.speed(t, n, r); var doAnimation=function() {
        var t=Animation(this, jQuery.extend({}, e), i); (a||A.get(this, 'finish'))&&t.stop(!0);
      }; return doAnimation.finish=doAnimation, a||!1===i.queue?this.each(doAnimation):this.queue(i.queue, doAnimation);
    }, stop: function(e, t, n) {
      var stopQueue=function(e) {
        var t=e.stop; delete e.stop, t(n);
      }; return 'string'!=typeof e&&(n=t, t=e, e=void 0), t&&this.queue(e||'fx', []), this.each((function() {
        var t=!0; var r=null!=e&&e+'queueHooks'; var a=jQuery.timers; var i=A.get(this); if (r)i[r]&&i[r].stop&&stopQueue(i[r]); else for (r in i)i[r]&&i[r].stop&&fe.test(r)&&stopQueue(i[r]); for (r=a.length; r--;)a[r].elem!==this||null!=e&&a[r].queue!==e||(a[r].anim.stop(n), t=!1, a.splice(r, 1)); !t&&n||jQuery.dequeue(this, e);
      }));
    }, finish: function(e) {
      return !1!==e&&(e=e||'fx'), this.each((function() {
        var t; var n=A.get(this); var r=n[e+'queue']; var a=n[e+'queueHooks']; var i=jQuery.timers; var o=r?r.length:0; for (n.finish=!0, jQuery.queue(this, e, []), a&&a.stop&&a.stop.call(this, !0), t=i.length; t--;)i[t].elem===this&&i[t].queue===e&&(i[t].anim.stop(!0), i.splice(t, 1)); for (t=0; t<o; t++)r[t]&&r[t].finish&&r[t].finish.call(this); delete n.finish;
      }));
    }}), jQuery.each(['toggle', 'show', 'hide'], (function(e, t) {
      var n=jQuery.fn[t]; jQuery.fn[t]=function(e, r, a) {
        return null==e||'boolean'==typeof e?n.apply(this, arguments):this.animate(genFx(t, !0), e, r, a);
      };
    })), jQuery.each({slideDown: genFx('show'), slideUp: genFx('hide'), slideToggle: genFx('toggle'), fadeIn: {opacity: 'show'}, fadeOut: {opacity: 'hide'}, fadeToggle: {opacity: 'toggle'}}, (function(e, t) {
      jQuery.fn[e]=function(e, n, r) {
        return this.animate(t, e, n, r);
      };
    })), jQuery.timers=[], jQuery.fx.tick=function() {
      var e; var t=0; var n=jQuery.timers; for (ue=Date.now(); t<n.length; t++)(e=n[t])()||n[t]!==e||n.splice(t--, 1); n.length||jQuery.fx.stop(), ue=void 0;
    }, jQuery.fx.timer=function(e) {
      jQuery.timers.push(e), jQuery.fx.start();
    }, jQuery.fx.interval=13, jQuery.fx.start=function() {
      ce||(ce=!0, schedule());
    }, jQuery.fx.stop=function() {
      ce=null;
    }, jQuery.fx.speeds={slow: 600, fast: 200, _default: 400}, jQuery.fn.delay=function(e, t) {
      return e=jQuery.fx&&jQuery.fx.speeds[e]||e, t=t||'fx', this.queue(t, (function(t, r) {
        var a=n.setTimeout(t, e); r.stop=function() {
          n.clearTimeout(a);
        };
      }));
    }, function() {
      var e=v.createElement('input'); var t=v.createElement('select').appendChild(v.createElement('option')); e.type='checkbox', g.checkOn=''!==e.value, g.optSelected=t.selected, (e=v.createElement('input')).value='t', e.type='radio', g.radioValue='t'===e.value;
    }(); var de; var pe=jQuery.expr.attrHandle; jQuery.fn.extend({attr: function(e, t) {
      return access(this, jQuery.attr, e, t, arguments.length>1);
    }, removeAttr: function(e) {
      return this.each((function() {
        jQuery.removeAttr(this, e);
      }));
    }}), jQuery.extend({attr: function(e, t, n) {
      var r; var a; var i=e.nodeType; if (3!==i&&8!==i&&2!==i) return void 0===e.getAttribute?jQuery.prop(e, t, n):(1===i&&jQuery.isXMLDoc(e)||(a=jQuery.attrHooks[t.toLowerCase()]||(jQuery.expr.match.bool.test(t)?de:void 0)), void 0!==n?null===n?void jQuery.removeAttr(e, t):a&&'set'in a&&void 0!==(r=a.set(e, n, t))?r:(e.setAttribute(t, n+''), n):a&&'get'in a&&null!==(r=a.get(e, t))?r:null==(r=jQuery.find.attr(e, t))?void 0:r);
    }, attrHooks: {type: {set: function(e, t) {
      if (!g.radioValue&&'radio'===t&&nodeName(e, 'input')) {
        var n=e.value; return e.setAttribute('type', t), n&&(e.value=n), t;
      }
    }}}, removeAttr: function(e, t) {
      var n; var r=0; var a=t&&t.match(T); if (a&&1===e.nodeType) for (;n=a[r++];)e.removeAttribute(n);
    }}), de={set: function(e, t, n) {
      return !1===t?jQuery.removeAttr(e, n):e.setAttribute(n, n), n;
    }}, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), (function(e, t) {
      var n=pe[t]||jQuery.find.attr; pe[t]=function(e, t, r) {
        var a; var i; var o=t.toLowerCase(); return r||(i=pe[o], pe[o]=a, a=null!=n(e, t, r)?o:null, pe[o]=i), a;
      };
    })); var me=/^(?:input|select|textarea|button)$/i; var ge=/^(?:a|area)$/i; function stripAndCollapse(e) {
      return (e.match(T)||[]).join(' ');
    } function getClass(e) {
      return e.getAttribute&&e.getAttribute('class')||'';
    } function classesToArray(e) {
      return Array.isArray(e)?e:'string'==typeof e&&e.match(T)||[];
    }jQuery.fn.extend({prop: function(e, t) {
      return access(this, jQuery.prop, e, t, arguments.length>1);
    }, removeProp: function(e) {
      return this.each((function() {
        delete this[jQuery.propFix[e]||e];
      }));
    }}), jQuery.extend({prop: function(e, t, n) {
      var r; var a; var i=e.nodeType; if (3!==i&&8!==i&&2!==i) return 1===i&&jQuery.isXMLDoc(e)||(t=jQuery.propFix[t]||t, a=jQuery.propHooks[t]), void 0!==n?a&&'set'in a&&void 0!==(r=a.set(e, n, t))?r:e[t]=n:a&&'get'in a&&null!==(r=a.get(e, t))?r:e[t];
    }, propHooks: {tabIndex: {get: function(e) {
      var t=jQuery.find.attr(e, 'tabindex'); return t?parseInt(t, 10):me.test(e.nodeName)||ge.test(e.nodeName)&&e.href?0:-1;
    }}}, propFix: {for: 'htmlFor', class: 'className'}}), g.optSelected||(jQuery.propHooks.selected={get: function(e) {
      var t=e.parentNode; return t&&t.parentNode&&t.parentNode.selectedIndex, null;
    }, set: function(e) {
      var t=e.parentNode; t&&(t.selectedIndex, t.parentNode&&t.parentNode.selectedIndex);
    }}), jQuery.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], (function() {
      jQuery.propFix[this.toLowerCase()]=this;
    })), jQuery.fn.extend({addClass: function(e) {
      var t; var n; var r; var a; var i; var o; return isFunction(e)?this.each((function(t) {
        jQuery(this).addClass(e.call(this, t, getClass(this)));
      })):(t=classesToArray(e)).length?this.each((function() {
        if (r=getClass(this), n=1===this.nodeType&&' '+stripAndCollapse(r)+' ') {
          for (i=0; i<t.length; i++)a=t[i], n.indexOf(' '+a+' ')<0&&(n+=a+' '); o=stripAndCollapse(n), r!==o&&this.setAttribute('class', o);
        }
      })):this;
    }, removeClass: function(e) {
      var t; var n; var r; var a; var i; var o; return isFunction(e)?this.each((function(t) {
        jQuery(this).removeClass(e.call(this, t, getClass(this)));
      })):arguments.length?(t=classesToArray(e)).length?this.each((function() {
        if (r=getClass(this), n=1===this.nodeType&&' '+stripAndCollapse(r)+' ') {
          for (i=0; i<t.length; i++) for (a=t[i]; n.indexOf(' '+a+' ')>-1;)n=n.replace(' '+a+' ', ' '); o=stripAndCollapse(n), r!==o&&this.setAttribute('class', o);
        }
      })):this:this.attr('class', '');
    }, toggleClass: function(e, t) {
      var n; var r; var a; var i; var o=typeof e; var s='string'===o||Array.isArray(e); return isFunction(e)?this.each((function(n) {
        jQuery(this).toggleClass(e.call(this, n, getClass(this), t), t);
      })):'boolean'==typeof t&&s?t?this.addClass(e):this.removeClass(e):(n=classesToArray(e), this.each((function() {
        if (s) for (i=jQuery(this), a=0; a<n.length; a++)r=n[a], i.hasClass(r)?i.removeClass(r):i.addClass(r); else void 0!==e&&'boolean'!==o||((r=getClass(this))&&A.set(this, '__className__', r), this.setAttribute&&this.setAttribute('class', r||!1===e?'':A.get(this, '__className__')||''));
      })));
    }, hasClass: function(e) {
      var t; var n; var r=0; for (t=' '+e+' '; n=this[r++];) if (1===n.nodeType&&(' '+stripAndCollapse(getClass(n))+' ').indexOf(t)>-1) return !0; return !1;
    }}); var ve=/\r/g; jQuery.fn.extend({val: function(e) {
      var t; var n; var r; var a=this[0]; return arguments.length?(r=isFunction(e), this.each((function(n) {
        var a; 1===this.nodeType&&(null==(a=r?e.call(this, n, jQuery(this).val()):e)?a='':'number'==typeof a?a+='':Array.isArray(a)&&(a=jQuery.map(a, (function(e) {
          return null==e?'':e+'';
        }))), (t=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()])&&'set'in t&&void 0!==t.set(this, a, 'value')||(this.value=a));
      }))):a?(t=jQuery.valHooks[a.type]||jQuery.valHooks[a.nodeName.toLowerCase()])&&'get'in t&&void 0!==(n=t.get(a, 'value'))?n:'string'==typeof(n=a.value)?n.replace(ve, ''):null==n?'':n:void 0;
    }}), jQuery.extend({valHooks: {option: {get: function(e) {
      var t=jQuery.find.attr(e, 'value'); return null!=t?t:stripAndCollapse(jQuery.text(e));
    }}, select: {get: function(e) {
      var t; var n; var r; var a=e.options; var i=e.selectedIndex; var o='select-one'===e.type; var s=o?null:[]; var l=o?i+1:a.length; for (r=i<0?l:o?i:0; r<l; r++) {
        if (((n=a[r]).selected||r===i)&&!n.disabled&&(!n.parentNode.disabled||!nodeName(n.parentNode, 'optgroup'))) {
          if (t=jQuery(n).val(), o) return t; s.push(t);
        }
      } return s;
    }, set: function(e, t) {
      for (var n, r, a=e.options, i=jQuery.makeArray(t), o=a.length; o--;)((r=a[o]).selected=jQuery.inArray(jQuery.valHooks.option.get(r), i)>-1)&&(n=!0); return n||(e.selectedIndex=-1), i;
    }}}}), jQuery.each(['radio', 'checkbox'], (function() {
      jQuery.valHooks[this]={set: function(e, t) {
        if (Array.isArray(t)) return e.checked=jQuery.inArray(jQuery(e).val(), t)>-1;
      }}, g.checkOn||(jQuery.valHooks[this].get=function(e) {
        return null===e.getAttribute('value')?'on':e.value;
      });
    })), g.focusin='onfocusin'in n; var ye=/^(?:focusinfocus|focusoutblur)$/; var stopPropagationCallback=function(e) {
      e.stopPropagation();
    }; jQuery.extend(jQuery.event, {trigger: function(e, t, r, a) {
      var i; var o; var s; var l; var u; var c; var h; var f; var p=[r||v]; var m=d.call(e, 'type')?e.type:e; var g=d.call(e, 'namespace')?e.namespace.split('.'):[]; if (o=f=s=r=r||v, 3!==r.nodeType&&8!==r.nodeType&&!ye.test(m+jQuery.event.triggered)&&(m.indexOf('.')>-1&&(g=m.split('.'), m=g.shift(), g.sort()), u=m.indexOf(':')<0&&'on'+m, (e=e[jQuery.expando]?e:new jQuery.Event(m, 'object'==typeof e&&e)).isTrigger=a?2:3, e.namespace=g.join('.'), e.rnamespace=e.namespace?new RegExp('(^|\\.)'+g.join('\\.(?:.*\\.|)')+'(\\.|$)'):null, e.result=void 0, e.target||(e.target=r), t=null==t?[e]:jQuery.makeArray(t, [e]), h=jQuery.event.special[m]||{}, a||!h.trigger||!1!==h.trigger.apply(r, t))) {
        if (!a&&!h.noBubble&&!isWindow(r)) {
          for (l=h.delegateType||m, ye.test(l+m)||(o=o.parentNode); o; o=o.parentNode)p.push(o), s=o; s===(r.ownerDocument||v)&&p.push(s.defaultView||s.parentWindow||n);
        } for (i=0; (o=p[i++])&&!e.isPropagationStopped();)f=o, e.type=i>1?l:h.bindType||m, (c=(A.get(o, 'events')||Object.create(null))[e.type]&&A.get(o, 'handle'))&&c.apply(o, t), (c=u&&o[u])&&c.apply&&acceptData(o)&&(e.result=c.apply(o, t), !1===e.result&&e.preventDefault()); return e.type=m, a||e.isDefaultPrevented()||h._default&&!1!==h._default.apply(p.pop(), t)||!acceptData(r)||u&&isFunction(r[m])&&!isWindow(r)&&((s=r[u])&&(r[u]=null), jQuery.event.triggered=m, e.isPropagationStopped()&&f.addEventListener(m, stopPropagationCallback), r[m](), e.isPropagationStopped()&&f.removeEventListener(m, stopPropagationCallback), jQuery.event.triggered=void 0, s&&(r[u]=s)), e.result;
      }
    }, simulate: function(e, t, n) {
      var r=jQuery.extend(new jQuery.Event, n, {type: e, isSimulated: !0}); jQuery.event.trigger(r, null, t);
    }}), jQuery.fn.extend({trigger: function(e, t) {
      return this.each((function() {
        jQuery.event.trigger(e, t, this);
      }));
    }, triggerHandler: function(e, t) {
      var n=this[0]; if (n) return jQuery.event.trigger(e, t, n, !0);
    }}), g.focusin||jQuery.each({focus: 'focusin', blur: 'focusout'}, (function(e, t) {
      var handler=function(e) {
        jQuery.event.simulate(t, e.target, jQuery.event.fix(e));
      }; jQuery.event.special[t]={setup: function() {
        var n=this.ownerDocument||this.document||this; var r=A.access(n, t); r||n.addEventListener(e, handler, !0), A.access(n, t, (r||0)+1);
      }, teardown: function() {
        var n=this.ownerDocument||this.document||this; var r=A.access(n, t)-1; r?A.access(n, t, r):(n.removeEventListener(e, handler, !0), A.remove(n, t));
      }};
    })); var be=n.location; var _e={guid: Date.now()}; var we=/\?/; jQuery.parseXML=function(e) {
      var t; var r; if (!e||'string'!=typeof e) return null; try {
        t=(new n.DOMParser).parseFromString(e, 'text/xml');
      } catch (e) {} return r=t&&t.getElementsByTagName('parsererror')[0], t&&!r||jQuery.error('Invalid XML: '+(r?jQuery.map(r.childNodes, (function(e) {
        return e.textContent;
      })).join('\n'):e)), t;
    }; var xe=/\[\]$/; var ke=/\r?\n/g; var Ce=/^(?:submit|button|image|reset|file)$/i; var Se=/^(?:input|select|textarea|keygen)/i; function buildParams(e, t, n, r) {
      var a; if (Array.isArray(t)) {
        jQuery.each(t, (function(t, a) {
n||xe.test(e)?r(e, a):buildParams(e+'['+('object'==typeof a&&null!=a?t:'')+']', a, n, r);
        }));
      } else if (n||'object'!==toType(t))r(e, t); else for (a in t)buildParams(e+'['+a+']', t[a], n, r);
    }jQuery.param=function(e, t) {
      var n; var r=[]; var add=function(e, t) {
        var n=isFunction(t)?t():t; r[r.length]=encodeURIComponent(e)+'='+encodeURIComponent(null==n?'':n);
      }; if (null==e) return ''; if (Array.isArray(e)||e.jquery&&!jQuery.isPlainObject(e)) {
        jQuery.each(e, (function() {
          add(this.name, this.value);
        }));
      } else for (n in e)buildParams(n, e[n], t, add); return r.join('&');
    }, jQuery.fn.extend({serialize: function() {
      return jQuery.param(this.serializeArray());
    }, serializeArray: function() {
      return this.map((function() {
        var e=jQuery.prop(this, 'elements'); return e?jQuery.makeArray(e):this;
      })).filter((function() {
        var e=this.type; return this.name&&!jQuery(this).is(':disabled')&&Se.test(this.nodeName)&&!Ce.test(e)&&(this.checked||!q.test(e));
      })).map((function(e, t) {
        var n=jQuery(this).val(); return null==n?null:Array.isArray(n)?jQuery.map(n, (function(e) {
          return {name: t.name, value: e.replace(ke, '\r\n')};
        })):{name: t.name, value: n.replace(ke, '\r\n')};
      })).get();
    }}); var Oe=/%20/g; var Te=/#.*$/; var Ee=/([?&])_=[^&]*/; var Re=/^(.*?):[ \t]*([^\r\n]*)$/gm; var Pe=/^(?:GET|HEAD)$/; var Me=/^\/\//; var Ae={}; var je={}; var Ne='*/'.concat('*'); var De=v.createElement('a'); function addToPrefiltersOrTransports(e) {
      return function(t, n) {
        'string'!=typeof t&&(n=t, t='*'); var r; var a=0; var i=t.toLowerCase().match(T)||[]; if (isFunction(n)) for (;r=i[a++];)'+'===r[0]?(r=r.slice(1)||'*', (e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n);
      };
    } function inspectPrefiltersOrTransports(e, t, n, r) {
      var a={}; var i=e===je; function inspect(o) {
        var s; return a[o]=!0, jQuery.each(e[o]||[], (function(e, o) {
          var l=o(t, n, r); return 'string'!=typeof l||i||a[l]?i?!(s=l):void 0:(t.dataTypes.unshift(l), inspect(l), !1);
        })), s;
      } return inspect(t.dataTypes[0])||!a['*']&&inspect('*');
    } function ajaxExtend(e, t) {
      var n; var r; var a=jQuery.ajaxSettings.flatOptions||{}; for (n in t) void 0!==t[n]&&((a[n]?e:r||(r={}))[n]=t[n]); return r&&jQuery.extend(!0, e, r), e;
    }De.href=be.href, jQuery.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: be.href, type: 'GET', isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(be.protocol), global: !0, processData: !0, async: !0, contentType: 'application/x-www-form-urlencoded; charset=UTF-8', accepts: {'*': Ne, 'text': 'text/plain', 'html': 'text/html', 'xml': 'application/xml, text/xml', 'json': 'application/json, text/javascript'}, contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/}, responseFields: {xml: 'responseXML', text: 'responseText', json: 'responseJSON'}, converters: {'* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': jQuery.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function(e, t) {
      return t?ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t):ajaxExtend(jQuery.ajaxSettings, e);
    }, ajaxPrefilter: addToPrefiltersOrTransports(Ae), ajaxTransport: addToPrefiltersOrTransports(je), ajax: function(e, t) {
      'object'==typeof e&&(t=e, e=void 0), t=t||{}; var r; var a; var i; var o; var s; var l; var u; var c; var h; var f; var d=jQuery.ajaxSetup({}, t); var p=d.context||d; var m=d.context&&(p.nodeType||p.jquery)?jQuery(p):jQuery.event; var g=jQuery.Deferred(); var y=jQuery.Callbacks('once memory'); var b=d.statusCode||{}; var w={}; var x={}; var k='canceled'; var C={readyState: 0, getResponseHeader: function(e) {
        var t; if (u) {
          if (!o) for (o={}; t=Re.exec(i);)o[t[1].toLowerCase()+' ']=(o[t[1].toLowerCase()+' ']||[]).concat(t[2]); t=o[e.toLowerCase()+' '];
        } return null==t?null:t.join(', ');
      }, getAllResponseHeaders: function() {
        return u?i:null;
      }, setRequestHeader: function(e, t) {
        return null==u&&(e=x[e.toLowerCase()]=x[e.toLowerCase()]||e, w[e]=t), this;
      }, overrideMimeType: function(e) {
        return null==u&&(d.mimeType=e), this;
      }, statusCode: function(e) {
        var t; if (e) if (u)C.always(e[C.status]); else for (t in e)b[t]=[b[t], e[t]]; return this;
      }, abort: function(e) {
        var t=e||k; return r&&r.abort(t), done(0, t), this;
      }}; if (g.promise(C), d.url=((e||d.url||be.href)+'').replace(Me, be.protocol+'//'), d.type=t.method||t.type||d.method||d.type, d.dataTypes=(d.dataType||'*').toLowerCase().match(T)||[''], null==d.crossDomain) {
        l=v.createElement('a'); try {
          l.href=d.url, l.href=l.href, d.crossDomain=De.protocol+'//'+De.host!=l.protocol+'//'+l.host;
        } catch (e) {
          d.crossDomain=!0;
        }
      } if (d.data&&d.processData&&'string'!=typeof d.data&&(d.data=jQuery.param(d.data, d.traditional)), inspectPrefiltersOrTransports(Ae, d, t, C), u) return C; for (h in (c=jQuery.event&&d.global)&&0==jQuery.active++&&jQuery.event.trigger('ajaxStart'), d.type=d.type.toUpperCase(), d.hasContent=!Pe.test(d.type), a=d.url.replace(Te, ''), d.hasContent?d.data&&d.processData&&0===(d.contentType||'').indexOf('application/x-www-form-urlencoded')&&(d.data=d.data.replace(Oe, '+')):(f=d.url.slice(a.length), d.data&&(d.processData||'string'==typeof d.data)&&(a+=(we.test(a)?'&':'?')+d.data, delete d.data), !1===d.cache&&(a=a.replace(Ee, '$1'), f=(we.test(a)?'&':'?')+'_='+_e.guid+++f), d.url=a+f), d.ifModified&&(jQuery.lastModified[a]&&C.setRequestHeader('If-Modified-Since', jQuery.lastModified[a]), jQuery.etag[a]&&C.setRequestHeader('If-None-Match', jQuery.etag[a])), (d.data&&d.hasContent&&!1!==d.contentType||t.contentType)&&C.setRequestHeader('Content-Type', d.contentType), C.setRequestHeader('Accept', d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+('*'!==d.dataTypes[0]?', '+Ne+'; q=0.01':''):d.accepts['*']), d.headers)C.setRequestHeader(h, d.headers[h]); if (d.beforeSend&&(!1===d.beforeSend.call(p, C, d)||u)) return C.abort(); if (k='abort', y.add(d.complete), C.done(d.success), C.fail(d.error), r=inspectPrefiltersOrTransports(je, d, t, C)) {
        if (C.readyState=1, c&&m.trigger('ajaxSend', [C, d]), u) return C; d.async&&d.timeout>0&&(s=n.setTimeout((function() {
          C.abort('timeout');
        }), d.timeout)); try {
          u=!1, r.send(w, done);
        } catch (e) {
          if (u) throw e; done(-1, e);
        }
      } else done(-1, 'No Transport'); function done(e, t, o, l) {
        var h; var f; var v; var w; var x; var k=t; u||(u=!0, s&&n.clearTimeout(s), r=void 0, i=l||'', C.readyState=e>0?4:0, h=e>=200&&e<300||304===e, o&&(w=function(e, t, n) {
          for (var r, a, i, o, s=e.contents, l=e.dataTypes; '*'===l[0];)l.shift(), void 0===r&&(r=e.mimeType||t.getResponseHeader('Content-Type')); if (r) {
            for (a in s) {
              if (s[a]&&s[a].test(r)) {
                l.unshift(a); break;
              }
            }
          } if (l[0]in n)i=l[0]; else {
            for (a in n) {
              if (!l[0]||e.converters[a+' '+l[0]]) {
                i=a; break;
              }o||(o=a);
            }i=i||o;
          } if (i) return i!==l[0]&&l.unshift(i), n[i];
        }(d, C, o)), !h&&jQuery.inArray('script', d.dataTypes)>-1&&jQuery.inArray('json', d.dataTypes)<0&&(d.converters['text script']=function() {}), w=function(e, t, n, r) {
          var a; var i; var o; var s; var l; var u={}; var c=e.dataTypes.slice(); if (c[1]) for (o in e.converters)u[o.toLowerCase()]=e.converters[o]; for (i=c.shift(); i;) {
            if (e.responseFields[i]&&(n[e.responseFields[i]]=t), !l&&r&&e.dataFilter&&(t=e.dataFilter(t, e.dataType)), l=i, i=c.shift()) {
              if ('*'===i)i=l; else if ('*'!==l&&l!==i) {
                if (!(o=u[l+' '+i]||u['* '+i])) {
                  for (a in u) {
                    if ((s=a.split(' '))[1]===i&&(o=u[l+' '+s[0]]||u['* '+s[0]])) {
!0===o?o=u[a]:!0!==u[a]&&(i=s[0], c.unshift(s[1])); break;
                    }
                  }
                } if (!0!==o) {
                  if (o&&e.throws)t=o(t); else {
                    try {
                      t=o(t);
                    } catch (e) {
                      return {state: 'parsererror', error: o?e:'No conversion from '+l+' to '+i};
                    }
                  }
                }
              }
            }
          } return {state: 'success', data: t};
        }(d, w, C, h), h?(d.ifModified&&((x=C.getResponseHeader('Last-Modified'))&&(jQuery.lastModified[a]=x), (x=C.getResponseHeader('etag'))&&(jQuery.etag[a]=x)), 204===e||'HEAD'===d.type?k='nocontent':304===e?k='notmodified':(k=w.state, f=w.data, h=!(v=w.error))):(v=k, !e&&k||(k='error', e<0&&(e=0))), C.status=e, C.statusText=(t||k)+'', h?g.resolveWith(p, [f, k, C]):g.rejectWith(p, [C, k, v]), C.statusCode(b), b=void 0, c&&m.trigger(h?'ajaxSuccess':'ajaxError', [C, d, h?f:v]), y.fireWith(p, [C, k]), c&&(m.trigger('ajaxComplete', [C, d]), --jQuery.active||jQuery.event.trigger('ajaxStop')));
      } return C;
    }, getJSON: function(e, t, n) {
      return jQuery.get(e, t, n, 'json');
    }, getScript: function(e, t) {
      return jQuery.get(e, void 0, t, 'script');
    }}), jQuery.each(['get', 'post'], (function(e, t) {
      jQuery[t]=function(e, n, r, a) {
        return isFunction(n)&&(a=a||r, r=n, n=void 0), jQuery.ajax(jQuery.extend({url: e, type: t, dataType: a, data: n, success: r}, jQuery.isPlainObject(e)&&e));
      };
    })), jQuery.ajaxPrefilter((function(e) {
      var t; for (t in e.headers)'content-type'===t.toLowerCase()&&(e.contentType=e.headers[t]||'');
    })), jQuery._evalUrl=function(e, t, n) {
      return jQuery.ajax({url: e, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, converters: {'text script': function() {}}, dataFilter: function(e) {
        jQuery.globalEval(e, t, n);
      }});
    }, jQuery.fn.extend({wrapAll: function(e) {
      var t; return this[0]&&(isFunction(e)&&(e=e.call(this[0])), t=jQuery(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode&&t.insertBefore(this[0]), t.map((function() {
        for (var e=this; e.firstElementChild;)e=e.firstElementChild; return e;
      })).append(this)), this;
    }, wrapInner: function(e) {
      return isFunction(e)?this.each((function(t) {
        jQuery(this).wrapInner(e.call(this, t));
      })):this.each((function() {
        var t=jQuery(this); var n=t.contents(); n.length?n.wrapAll(e):t.append(e);
      }));
    }, wrap: function(e) {
      var t=isFunction(e); return this.each((function(n) {
        jQuery(this).wrapAll(t?e.call(this, n):e);
      }));
    }, unwrap: function(e) {
      return this.parent(e).not('body').each((function() {
        jQuery(this).replaceWith(this.childNodes);
      })), this;
    }}), jQuery.expr.pseudos.hidden=function(e) {
      return !jQuery.expr.pseudos.visible(e);
    }, jQuery.expr.pseudos.visible=function(e) {
      return !!(e.offsetWidth||e.offsetHeight||e.getClientRects().length);
    }, jQuery.ajaxSettings.xhr=function() {
      try {
        return new n.XMLHttpRequest;
      } catch (e) {}
    }; var Ve={0: 200, 1223: 204}; var Le=jQuery.ajaxSettings.xhr(); g.cors=!!Le&&'withCredentials'in Le, g.ajax=Le=!!Le, jQuery.ajaxTransport((function(e) {
      var t; var r; if (g.cors||Le&&!e.crossDomain) {
        return {send: function(a, i) {
          var o; var s=e.xhr(); if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields)s[o]=e.xhrFields[o]; for (o in e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType), e.crossDomain||a['X-Requested-With']||(a['X-Requested-With']='XMLHttpRequest'), a)s.setRequestHeader(o, a[o]); t=function(e) {
            return function() {
              t&&(t=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null, 'abort'===e?s.abort():'error'===e?'number'!=typeof s.status?i(0, 'error'):i(s.status, s.statusText):i(Ve[s.status]||s.status, s.statusText, 'text'!==(s.responseType||'text')||'string'!=typeof s.responseText?{binary: s.response}:{text: s.responseText}, s.getAllResponseHeaders()));
            };
          }, s.onload=t(), r=s.onerror=s.ontimeout=t('error'), void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function() {
            4===s.readyState&&n.setTimeout((function() {
              t&&r();
            }));
          }, t=t('abort'); try {
            s.send(e.hasContent&&e.data||null);
          } catch (e) {
            if (t) throw e;
          }
        }, abort: function() {
          t&&t();
        }};
      }
    })), jQuery.ajaxPrefilter((function(e) {
      e.crossDomain&&(e.contents.script=!1);
    })), jQuery.ajaxSetup({accepts: {script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'}, contents: {script: /\b(?:java|ecma)script\b/}, converters: {'text script': function(e) {
      return jQuery.globalEval(e), e;
    }}}), jQuery.ajaxPrefilter('script', (function(e) {
      void 0===e.cache&&(e.cache=!1), e.crossDomain&&(e.type='GET');
    })), jQuery.ajaxTransport('script', (function(e) {
      var t; var n; if (e.crossDomain||e.scriptAttrs) {
        return {send: function(r, a) {
          t=jQuery('<script>').attr(e.scriptAttrs||{}).prop({charset: e.scriptCharset, src: e.url}).on('load error', n=function(e) {
            t.remove(), n=null, e&&a('error'===e.type?404:200, e.type);
          }), v.head.appendChild(t[0]);
        }, abort: function() {
          n&&n();
        }};
      }
    })); var Be; var Ie=[]; var ze=/(=)\?(?=&|$)|\?\?/; jQuery.ajaxSetup({jsonp: 'callback', jsonpCallback: function() {
      var e=Ie.pop()||jQuery.expando+'_'+_e.guid++; return this[e]=!0, e;
    }}), jQuery.ajaxPrefilter('json jsonp', (function(e, t, r) {
      var a; var i; var o; var s=!1!==e.jsonp&&(ze.test(e.url)?'url':'string'==typeof e.data&&0===(e.contentType||'').indexOf('application/x-www-form-urlencoded')&&ze.test(e.data)&&'data'); if (s||'jsonp'===e.dataTypes[0]) {
        return a=e.jsonpCallback=isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback, s?e[s]=e[s].replace(ze, '$1'+a):!1!==e.jsonp&&(e.url+=(we.test(e.url)?'&':'?')+e.jsonp+'='+a), e.converters['script json']=function() {
          return o||jQuery.error(a+' was not called'), o[0];
        }, e.dataTypes[0]='json', i=n[a], n[a]=function() {
          o=arguments;
        }, r.always((function() {
void 0===i?jQuery(n).removeProp(a):n[a]=i, e[a]&&(e.jsonpCallback=t.jsonpCallback, Ie.push(a)), o&&isFunction(i)&&i(o[0]), o=i=void 0;
        })), 'script';
      }
    })), g.createHTMLDocument=((Be=v.implementation.createHTMLDocument('').body).innerHTML='<form></form><form></form>', 2===Be.childNodes.length), jQuery.parseHTML=function(e, t, n) {
      return 'string'!=typeof e?[]:('boolean'==typeof t&&(n=t, t=!1), t||(g.createHTMLDocument?((r=(t=v.implementation.createHTMLDocument('')).createElement('base')).href=v.location.href, t.head.appendChild(r)):t=v), i=!n&&[], (a=x.exec(e))?[t.createElement(a[1])]:(a=buildFragment([e], t, i), i&&i.length&&jQuery(i).remove(), jQuery.merge([], a.childNodes))); var r; var a; var i;
    }, jQuery.fn.load=function(e, t, n) {
      var r; var a; var i; var o=this; var s=e.indexOf(' '); return s>-1&&(r=stripAndCollapse(e.slice(s)), e=e.slice(0, s)), isFunction(t)?(n=t, t=void 0):t&&'object'==typeof t&&(a='POST'), o.length>0&&jQuery.ajax({url: e, type: a||'GET', dataType: 'html', data: t}).done((function(e) {
        i=arguments, o.html(r?jQuery('<div>').append(jQuery.parseHTML(e)).find(r):e);
      })).always(n&&function(e, t) {
        o.each((function() {
          n.apply(this, i||[e.responseText, t, e]);
        }));
      }), this;
    }, jQuery.expr.pseudos.animated=function(e) {
      return jQuery.grep(jQuery.timers, (function(t) {
        return e===t.elem;
      })).length;
    }, jQuery.offset={setOffset: function(e, t, n) {
      var r; var a; var i; var o; var s; var l; var u=jQuery.css(e, 'position'); var c=jQuery(e); var h={}; 'static'===u&&(e.style.position='relative'), s=c.offset(), i=jQuery.css(e, 'top'), l=jQuery.css(e, 'left'), ('absolute'===u||'fixed'===u)&&(i+l).indexOf('auto')>-1?(o=(r=c.position()).top, a=r.left):(o=parseFloat(i)||0, a=parseFloat(l)||0), isFunction(t)&&(t=t.call(e, n, jQuery.extend({}, s))), null!=t.top&&(h.top=t.top-s.top+o), null!=t.left&&(h.left=t.left-s.left+a), 'using'in t?t.using.call(e, h):c.css(h);
    }}, jQuery.fn.extend({offset: function(e) {
      if (arguments.length) {
        return void 0===e?this:this.each((function(t) {
          jQuery.offset.setOffset(this, e, t);
        }));
      } var t; var n; var r=this[0]; return r?r.getClientRects().length?(t=r.getBoundingClientRect(), n=r.ownerDocument.defaultView, {top: t.top+n.pageYOffset, left: t.left+n.pageXOffset}):{top: 0, left: 0}:void 0;
    }, position: function() {
      if (this[0]) {
        var e; var t; var n; var r=this[0]; var a={top: 0, left: 0}; if ('fixed'===jQuery.css(r, 'position'))t=r.getBoundingClientRect(); else {
          for (t=this.offset(), n=r.ownerDocument, e=r.offsetParent||n.documentElement; e&&(e===n.body||e===n.documentElement)&&'static'===jQuery.css(e, 'position');)e=e.parentNode; e&&e!==r&&1===e.nodeType&&((a=jQuery(e).offset()).top+=jQuery.css(e, 'borderTopWidth', !0), a.left+=jQuery.css(e, 'borderLeftWidth', !0));
        } return {top: t.top-a.top-jQuery.css(r, 'marginTop', !0), left: t.left-a.left-jQuery.css(r, 'marginLeft', !0)};
      }
    }, offsetParent: function() {
      return this.map((function() {
        for (var e=this.offsetParent; e&&'static'===jQuery.css(e, 'position');)e=e.offsetParent; return e||I;
      }));
    }}), jQuery.each({scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset'}, (function(e, t) {
      var n='pageYOffset'===t; jQuery.fn[e]=function(r) {
        return access(this, (function(e, r, a) {
          var i; if (isWindow(e)?i=e:9===e.nodeType&&(i=e.defaultView), void 0===a) return i?i[t]:e[r]; i?i.scrollTo(n?i.pageXOffset:a, n?a:i.pageYOffset):e[r]=a;
        }), e, r, arguments.length);
      };
    })), jQuery.each(['top', 'left'], (function(e, t) {
      jQuery.cssHooks[t]=addGetHookIf(g.pixelPosition, (function(e, n) {
        if (n) return n=curCSS(e, t), Q.test(n)?jQuery(e).position()[t]+'px':n;
      }));
    })), jQuery.each({Height: 'height', Width: 'width'}, (function(e, t) {
      jQuery.each({'padding': 'inner'+e, 'content': t, '': 'outer'+e}, (function(n, r) {
        jQuery.fn[r]=function(a, i) {
          var o=arguments.length&&(n||'boolean'!=typeof a); var s=n||(!0===a||!0===i?'margin':'border'); return access(this, (function(t, n, a) {
            var i; return isWindow(t)?0===r.indexOf('outer')?t['inner'+e]:t.document.documentElement['client'+e]:9===t.nodeType?(i=t.documentElement, Math.max(t.body['scroll'+e], i['scroll'+e], t.body['offset'+e], i['offset'+e], i['client'+e])):void 0===a?jQuery.css(t, n, s):jQuery.style(t, n, a, s);
          }), t, o?a:void 0, o);
        };
      }));
    })), jQuery.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], (function(e, t) {
      jQuery.fn[t]=function(e) {
        return this.on(t, e);
      };
    })), jQuery.fn.extend({bind: function(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function(e, t) {
      return this.off(e, null, t);
    }, delegate: function(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function(e, t, n) {
      return 1===arguments.length?this.off(e, '**'):this.off(t, e||'**', n);
    }, hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t||e);
    }}), jQuery.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), (function(e, t) {
      jQuery.fn[t]=function(e, n) {
        return arguments.length>0?this.on(t, null, e, n):this.trigger(t);
      };
    })); var Fe=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g; jQuery.proxy=function(e, t) {
      var n; var r; var a; if ('string'==typeof t&&(n=e[t], t=e, e=n), isFunction(e)) {
        return r=s.call(arguments, 2), (a=function() {
          return e.apply(t||this, r.concat(s.call(arguments)));
        }).guid=e.guid=e.guid||jQuery.guid++, a;
      }
    }, jQuery.holdReady=function(e) {
e?jQuery.readyWait++:jQuery.ready(!0);
    }, jQuery.isArray=Array.isArray, jQuery.parseJSON=JSON.parse, jQuery.nodeName=nodeName, jQuery.isFunction=isFunction, jQuery.isWindow=isWindow, jQuery.camelCase=camelCase, jQuery.type=toType, jQuery.now=Date.now, jQuery.isNumeric=function(e) {
      var t=jQuery.type(e); return ('number'===t||'string'===t)&&!isNaN(e-parseFloat(e));
    }, jQuery.trim=function(e) {
      return null==e?'':(e+'').replace(Fe, '$1');
    }, void 0===(r=function() {
      return jQuery;
    }.apply(t, []))||(e.exports=r); var Ue=n.jQuery; var He=n.$; return jQuery.noConflict=function(e) {
      return n.$===jQuery&&(n.$=He), e&&n.jQuery===jQuery&&(n.jQuery=Ue), jQuery;
    }, void 0===a&&(n.jQuery=n.$=jQuery), jQuery;
  }));
}, function(e, t, n) {
  'use strict'; var r=n(2); var a=n.n(r); var i=n(3); var o=n.n(i); var s=n(9); var l=n.n(s); var u=n(4); var c=n.n(u); var h=n(5); var f=n.n(h); var d=n(0); var p=n.n(d); var m=n(7); var g=n.n(m); var v=n(49); var y=n.n(v); var b=n(13); var w=n(14); function _createSuper(e) {
    var t=function() {
      if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
      } catch (e) {
        return !1;
      }
    }(); return function() {
      var n; var r=p()(e); if (t) {
        var a=p()(this).constructor; n=Reflect.construct(r, arguments, a);
      } else n=r.apply(this, arguments); return f()(this, n);
    };
  } var x=function(e) {
    c()(AppRouter, e); var t=_createSuper(AppRouter); function AppRouter() {
      var e; return a()(this, AppRouter), e=t.call(this, {routes: {'testresult/:uid(/)(:tabName)': 'testresultPage', '*default': 'notFound'}}), g()(l()(e), 'currentUrl', null), e.on('route', e.onRouteChange, l()(e)), e;
    } return o()(AppRouter, [{key: 'onRouteChange', value: function() {
      this.previousUrl=this.currentUrl, this.currentUrl=this.getCurrentUrl();
    }}, {key: 'getCurrentUrl', value: function() {
      return b.history.getFragment();
    }}, {key: 'reload', value: function() {
      b.history.loadUrl(this.getCurrentUrl());
    }}, {key: 'to', value: function(e, t, n) {
      t=Object(w.omit)(t, (function(e) {
        return null===e;
      })); var r=y.a.format({pathname: e, query: t}); return this.toUrl(r, n);
    }}, {key: 'toUrl', value: function(e, t) {
      return this.navigate(e, Object.assign({trigger: !0}, t));
    }}, {key: 'setSearch', value: function(e) {
      var t=y.a.parse(this.getCurrentUrl()).pathname; return this.to(t, e);
    }}, {key: 'getUrlParams', value: function() {
      var e=y.a.parse(this.getCurrentUrl(), !0); return e?e.query:{};
    }}]), AppRouter;
  }(b.Router); t.a=new x;
}, function(e, t, n) {
  var r=n(170); function _get() {
    return 'undefined'!=typeof Reflect&&Reflect.get?(e.exports=_get=Reflect.get.bind(), e.exports.__esModule=!0, e.exports.default=e.exports):(e.exports=_get=function(e, t, n) {
      var a=r(e, t); if (a) {
        var i=Object.getOwnPropertyDescriptor(a, t); return i.get?i.get.call(arguments.length<3?e:n):i.value;
      }
    }, e.exports.__esModule=!0, e.exports.default=e.exports), _get.apply(this, arguments);
  }e.exports=_get, e.exports.__esModule=!0, e.exports.default=e.exports;
}, function(e, t, n) {
  'use strict'; function _interopRequireDefault(e) {
    return e&&e.__esModule?e:{default: e};
  } function _interopRequireWildcard(e) {
    if (e&&e.__esModule) return e; var t={}; if (null!=e) for (var n in e)Object.prototype.hasOwnProperty.call(e, n)&&(t[n]=e[n]); return t.default=e, t;
  }t.__esModule=!0; var r=_interopRequireWildcard(n(74)); var a=_interopRequireDefault(n(157)); var i=_interopRequireDefault(n(36)); var o=_interopRequireWildcard(n(30)); var s=_interopRequireWildcard(n(158)); var l=_interopRequireDefault(n(160)); function create() {
    var e=new r.HandlebarsEnvironment; return o.extend(e, r), e.SafeString=a.default, e.Exception=i.default, e.Utils=o, e.escapeExpression=o.escapeExpression, e.VM=s, e.template=function(t) {
      return s.template(t, e);
    }, e;
  } var u=create(); u.create=create, l.default(u), u.default=u, t.default=u, e.exports=t.default;
},, function(e, t, n) {
    'use strict'; n.d(t, 'a', (function() {
      return r;
    })); var r=['failed', 'broken', 'passed', 'skipped', 'unknown'];
  }, function(e, t, n) {
    'use strict'; n.d(t, 'a', (function() {
      return R;
    })), n.d(t, 'd', (function() {
      return initTranslations;
    })), n.d(t, 'b', (function() {
      return addTranslation;
    })); var r=Object.assign||function(e) {
      for (var t=1; t<arguments.length; t++) {
        var n=arguments[t]; for (var r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
      } return e;
    }; function _classCallCheck(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    } var a={type: 'logger', log: function(e) {
      this.output('log', e);
    }, warn: function(e) {
      this.output('warn', e);
    }, error: function(e) {
      this.output('error', e);
    }, output: function(e, t) {
      var n; console&&console[e]&&(n=console)[e].apply(n, function(e) {
        if (Array.isArray(e)) {
          for (var t=0, n=Array(e.length); t<e.length; t++)n[t]=e[t]; return n;
        } return Array.from(e);
      }(t));
    }}; var i=new(function() {
      function Logger(e) {
        var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; _classCallCheck(this, Logger), this.init(e, t);
      } return Logger.prototype.init=function(e) {
        var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; this.prefix=t.prefix||'i18next:', this.logger=e||a, this.options=t, this.debug=t.debug;
      }, Logger.prototype.setDebug=function(e) {
        this.debug=e;
      }, Logger.prototype.log=function() {
        for (var e=arguments.length, t=Array(e), n=0; n<e; n++)t[n]=arguments[n]; return this.forward(t, 'log', '', !0);
      }, Logger.prototype.warn=function() {
        for (var e=arguments.length, t=Array(e), n=0; n<e; n++)t[n]=arguments[n]; return this.forward(t, 'warn', '', !0);
      }, Logger.prototype.error=function() {
        for (var e=arguments.length, t=Array(e), n=0; n<e; n++)t[n]=arguments[n]; return this.forward(t, 'error', '');
      }, Logger.prototype.deprecate=function() {
        for (var e=arguments.length, t=Array(e), n=0; n<e; n++)t[n]=arguments[n]; return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
      }, Logger.prototype.forward=function(e, t, n, r) {
        return r&&!this.debug?null:('string'==typeof e[0]&&(e[0]=''+n+this.prefix+' '+e[0]), this.logger[t](e));
      }, Logger.prototype.create=function(e) {
        return new Logger(this.logger, r({prefix: this.prefix+':'+e+':'}, this.options));
      }, Logger;
    }()); var o=function() {
      function EventEmitter() {
        !function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, EventEmitter), this.observers={};
      } return EventEmitter.prototype.on=function(e, t) {
        var n=this; e.split(' ').forEach((function(e) {
          n.observers[e]=n.observers[e]||[], n.observers[e].push(t);
        }));
      }, EventEmitter.prototype.off=function(e, t) {
        var n=this; this.observers[e]&&this.observers[e].forEach((function() {
          if (t) {
            var r=n.observers[e].indexOf(t); r>-1&&n.observers[e].splice(r, 1);
          } else delete n.observers[e];
        }));
      }, EventEmitter.prototype.emit=function(e) {
        for (var t=arguments.length, n=Array(t>1?t-1:0), r=1; r<t; r++)n[r-1]=arguments[r]; if (this.observers[e]) {
          var a=[].concat(this.observers[e]); a.forEach((function(e) {
            e.apply(void 0, n);
          }));
        } if (this.observers['*']) {
          var i=[].concat(this.observers['*']); i.forEach((function(t) {
            var r; t.apply(t, (r=[e]).concat.apply(r, n));
          }));
        }
      }, EventEmitter;
    }(); function makeString(e) {
      return null==e?'':''+e;
    } function utils_copy(e, t, n) {
      e.forEach((function(e) {
        t[e]&&(n[e]=t[e]);
      }));
    } function getLastOfPath(e, t, n) {
      function cleanKey(e) {
        return e&&e.indexOf('###')>-1?e.replace(/###/g, '.'):e;
      } function canNotTraverseDeeper() {
        return !e||'string'==typeof e;
      } for (var r='string'!=typeof t?[].concat(t):t.split('.'); r.length>1;) {
        if (canNotTraverseDeeper()) return {}; var a=cleanKey(r.shift()); !e[a]&&n&&(e[a]=new n), e=e[a];
      } return canNotTraverseDeeper()?{}:{obj: e, k: cleanKey(r.shift())};
    } function setPath(e, t, n) {
      var r=getLastOfPath(e, t, Object); r.obj[r.k]=n;
    } function getPath(e, t) {
      var n=getLastOfPath(e, t); var r=n.obj; var a=n.k; if (r) return r[a];
    } function regexEscape(e) {
      return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    } var s={'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;', '/': '&#x2F;'}; function utils_escape(e) {
      return 'string'==typeof e?e.replace(/[&<>"'\/]/g, (function(e) {
        return s[e];
      })):e;
    } var l=Object.assign||function(e) {
      for (var t=1; t<arguments.length; t++) {
        var n=arguments[t]; for (var r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
      } return e;
    }; function ResourceStore_classCallCheck(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    } function _possibleConstructorReturn(e, t) {
      if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); return !t||'object'!=typeof t&&'function'!=typeof t?e:t;
    } function _inherits(e, t) {
      if ('function'!=typeof t&&null!==t) throw new TypeError('Super expression must either be null or a function, not '+typeof t); e.prototype=Object.create(t&&t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t&&(Object.setPrototypeOf?Object.setPrototypeOf(e, t):function(e, t) {
        for (var n=Object.getOwnPropertyNames(t), r=0; r<n.length; r++) {
          var a=n[r]; var i=Object.getOwnPropertyDescriptor(t, a); i&&i.configurable&&void 0===e[a]&&Object.defineProperty(e, a, i);
        }
      }(e, t));
    } var u=function(e) {
      function ResourceStore() {
        var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns: ['translation'], defaultNS: 'translation'}; ResourceStore_classCallCheck(this, ResourceStore); var r=_possibleConstructorReturn(this, e.call(this)); return r.data=t, r.options=n, r;
      } return _inherits(ResourceStore, e), ResourceStore.prototype.addNamespaces=function(e) {
        this.options.ns.indexOf(e)<0&&this.options.ns.push(e);
      }, ResourceStore.prototype.removeNamespaces=function(e) {
        var t=this.options.ns.indexOf(e); t>-1&&this.options.ns.splice(t, 1);
      }, ResourceStore.prototype.getResource=function(e, t, n) {
        var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}; var a=r.keySeparator||this.options.keySeparator; void 0===a&&(a='.'); var i=[e, t]; return n&&'string'!=typeof n&&(i=i.concat(n)), n&&'string'==typeof n&&(i=i.concat(a?n.split(a):n)), e.indexOf('.')>-1&&(i=e.split('.')), getPath(this.data, i);
      }, ResourceStore.prototype.addResource=function(e, t, n, r) {
        var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent: !1}; var i=this.options.keySeparator; void 0===i&&(i='.'); var o=[e, t]; n&&(o=o.concat(i?n.split(i):n)), e.indexOf('.')>-1&&(r=t, t=(o=e.split('.'))[1]), this.addNamespaces(t), setPath(this.data, o, r), a.silent||this.emit('added', e, t, n, r);
      }, ResourceStore.prototype.addResources=function(e, t, n) {
        for (var r in n)'string'==typeof n[r]&&this.addResource(e, t, r, n[r], {silent: !0}); this.emit('added', e, t, n);
      }, ResourceStore.prototype.addResourceBundle=function(e, t, n, r, a) {
        var i=[e, t]; e.indexOf('.')>-1&&(r=n, n=t, t=(i=e.split('.'))[1]), this.addNamespaces(t); var o=getPath(this.data, i)||{}; r?function deepExtend(e, t, n) {
          for (var r in t)r in e?'string'==typeof e[r]||e[r]instanceof String||'string'==typeof t[r]||t[r]instanceof String?n&&(e[r]=t[r]):deepExtend(e[r], t[r], n):e[r]=t[r]; return e;
        }(o, n, a):o=l({}, o, n), setPath(this.data, i, o), this.emit('added', e, t, n);
      }, ResourceStore.prototype.removeResourceBundle=function(e, t) {
        this.hasResourceBundle(e, t)&&delete this.data[e][t], this.removeNamespaces(t), this.emit('removed', e, t);
      }, ResourceStore.prototype.hasResourceBundle=function(e, t) {
        return void 0!==this.getResource(e, t);
      }, ResourceStore.prototype.getResourceBundle=function(e, t) {
        return t||(t=this.options.defaultNS), 'v1'===this.options.compatibilityAPI?l({}, this.getResource(e, t)):this.getResource(e, t);
      }, ResourceStore.prototype.toJSON=function() {
        return this.data;
      }, ResourceStore;
    }(o); var c={processors: {}, addPostProcessor: function(e) {
      this.processors[e.name]=e;
    }, handle: function(e, t, n, r, a) {
      var i=this; return e.forEach((function(e) {
        i.processors[e]&&(t=i.processors[e].process(t, n, r, a));
      })), t;
    }}; function convertInterpolation(e) {
      return e.interpolation={unescapeSuffix: 'HTML'}, e.interpolation.prefix=e.interpolationPrefix||'__', e.interpolation.suffix=e.interpolationSuffix||'__', e.interpolation.escapeValue=e.escapeInterpolation||!1, e.interpolation.nestingPrefix=e.reusePrefix||'$t(', e.interpolation.nestingSuffix=e.reuseSuffix||')', e;
    } function convertTOptions(e) {
      return (e.interpolationPrefix||e.interpolationSuffix||void 0!==e.escapeInterpolation)&&(e=convertInterpolation(e)), e.nsSeparator=e.nsseparator, e.keySeparator=e.keyseparator, e.returnObjects=e.returnObjectTrees, e;
    } var h=Object.assign||function(e) {
      for (var t=1; t<arguments.length; t++) {
        var n=arguments[t]; for (var r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
      } return e;
    }; var f='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e) {
      return typeof e;
    }:function(e) {
      return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e;
    }; function Translator_classCallCheck(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    } function Translator_possibleConstructorReturn(e, t) {
      if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); return !t||'object'!=typeof t&&'function'!=typeof t?e:t;
    } function Translator_inherits(e, t) {
      if ('function'!=typeof t&&null!==t) throw new TypeError('Super expression must either be null or a function, not '+typeof t); e.prototype=Object.create(t&&t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t&&(Object.setPrototypeOf?Object.setPrototypeOf(e, t):function(e, t) {
        for (var n=Object.getOwnPropertyNames(t), r=0; r<n.length; r++) {
          var a=n[r]; var i=Object.getOwnPropertyDescriptor(t, a); i&&i.configurable&&void 0===e[a]&&Object.defineProperty(e, a, i);
        }
      }(e, t));
    } var d=function(e) {
      function Translator(t) {
        var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; Translator_classCallCheck(this, Translator); var r=Translator_possibleConstructorReturn(this, e.call(this)); return utils_copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector'], t, r), r.options=n, r.logger=i.create('translator'), r;
      } return Translator_inherits(Translator, e), Translator.prototype.changeLanguage=function(e) {
        e&&(this.language=e);
      }, Translator.prototype.exists=function(e) {
        var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation: {}}; return 'v1'===this.options.compatibilityAPI&&(t=convertTOptions(t)), void 0!==this.resolve(e, t);
      }, Translator.prototype.extractFromKey=function(e, t) {
        var n=t.nsSeparator||this.options.nsSeparator; void 0===n&&(n=':'); var r=t.keySeparator||this.options.keySeparator||'.'; var a=t.ns||this.options.defaultNS; if (n&&e.indexOf(n)>-1) {
          var i=e.split(n); (n!==r||n===r&&this.options.ns.indexOf(i[0])>-1)&&(a=i.shift()), e=i.join(r);
        } return 'string'==typeof a&&(a=[a]), {key: e, namespaces: a};
      }, Translator.prototype.translate=function(e) {
        var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; if ('object'!==(void 0===t?'undefined':f(t))?t=this.options.overloadTranslationOptionHandler(arguments):'v1'===this.options.compatibilityAPI&&(t=convertTOptions(t)), null==e||''===e) return ''; 'number'==typeof e&&(e=String(e)), 'string'==typeof e&&(e=[e]); var n=t.keySeparator||this.options.keySeparator||'.'; var r=this.extractFromKey(e[e.length-1], t); var a=r.key; var i=r.namespaces; var o=i[i.length-1]; var s=t.lng||this.language; var l=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode; if (s&&'cimode'===s.toLowerCase()) {
          if (l) {
            var u=t.nsSeparator||this.options.nsSeparator; return o+u+a;
          } return a;
        } var c=this.resolve(e, t); var d=Object.prototype.toString.apply(c); var p=['[object Number]', '[object Function]', '[object RegExp]']; var m=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays; if (c&&'string'!=typeof c&&p.indexOf(d)<0&&(!m||'[object Array]'!==d)) {
          if (!t.returnObjects&&!this.options.returnObjects) return this.logger.warn('accessing an object - but returnObjects options is not enabled!'), this.options.returnedObjectHandler?this.options.returnedObjectHandler(a, c, t):'key \''+a+' ('+this.language+')\' returned an object instead of string.'; if (t.keySeparator||this.options.keySeparator) {
            var g='[object Array]'===d?[]:{}; for (var v in c)Object.prototype.hasOwnProperty.call(c, v)&&(g[v]=this.translate(''+a+n+v, h({}, t, {joinArrays: !1, ns: i}))); c=g;
          }
        } else if (m&&'[object Array]'===d)(c=c.join(m))&&(c=this.extendTranslation(c, a, t)); else {
          var y=!1; var b=!1; if (this.isValidLookup(c)||void 0===t.defaultValue||(y=!0, c=t.defaultValue), this.isValidLookup(c)||(b=!0, c=a), b||y) {
            this.logger.log('missingKey', s, o, a, c); var w=[]; var x=this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng||this.language); if ('fallback'===this.options.saveMissingTo&&x&&x[0]) for (var k=0; k<x.length; k++)w.push(x[k]); else 'all'===this.options.saveMissingTo?w=this.languageUtils.toResolveHierarchy(t.lng||this.language):w.push(t.lng||this.language); this.options.saveMissing&&(this.options.missingKeyHandler?this.options.missingKeyHandler(w, o, a, c):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(w, o, a, c)), this.emit('missingKey', w, o, a, c);
          }c=this.extendTranslation(c, a, t), b&&c===a&&this.options.appendNamespaceToMissingKey&&(c=o+':'+a), b&&this.options.parseMissingKeyHandler&&(c=this.options.parseMissingKeyHandler(c));
        } return c;
      }, Translator.prototype.extendTranslation=function(e, t, n) {
        var r=this; n.interpolation&&this.interpolator.init(h({}, n, {interpolation: h({}, this.options.interpolation, n.interpolation)})); var a=n.replace&&'string'!=typeof n.replace?n.replace:n; this.options.interpolation.defaultVariables&&(a=h({}, this.options.interpolation.defaultVariables, a)), e=this.interpolator.interpolate(e, a, n.lng||this.language), !1!==n.nest&&(e=this.interpolator.nest(e, (function() {
          return r.translate.apply(r, arguments);
        }), n)), n.interpolation&&this.interpolator.reset(); var i=n.postProcess||this.options.postProcess; var o='string'==typeof i?[i]:i; return void 0!==e&&o&&o.length&&!1!==n.applyPostProcessor&&(e=c.handle(o, e, t, n, this)), e;
      }, Translator.prototype.resolve=function(e) {
        var t=this; var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; var r=void 0; return 'string'==typeof e&&(e=[e]), e.forEach((function(e) {
          if (!t.isValidLookup(r)) {
            var a=t.extractFromKey(e, n); var i=a.key; var o=a.namespaces; t.options.fallbackNS&&(o=o.concat(t.options.fallbackNS)); var s=void 0!==n.count&&'string'!=typeof n.count; var l=void 0!==n.context&&'string'==typeof n.context&&''!==n.context; var u=n.lngs?n.lngs:t.languageUtils.toResolveHierarchy(n.lng||t.language); o.forEach((function(e) {
              t.isValidLookup(r)||u.forEach((function(a) {
                if (!t.isValidLookup(r)) {
                  var o=i; var u=[o]; var c=void 0; s&&(c=t.pluralResolver.getSuffix(a, n.count)), s&&l&&u.push(o+c), l&&u.push(o+=''+t.options.contextSeparator+n.context), s&&u.push(o+=c); for (var h=void 0; h=u.pop();)t.isValidLookup(r)||(r=t.getResource(a, e, h, n));
                }
              }));
            }));
          }
        })), r;
      }, Translator.prototype.isValidLookup=function(e) {
        return !(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&''===e);
      }, Translator.prototype.getResource=function(e, t, n) {
        var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}; return this.resourceStore.getResource(e, t, n, r);
      }, Translator;
    }(o); function capitalize(e) {
      return e.charAt(0).toUpperCase()+e.slice(1);
    } var p=function() {
      function LanguageUtil(e) {
        !function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, LanguageUtil), this.options=e, this.whitelist=this.options.whitelist||!1, this.logger=i.create('languageUtils');
      } return LanguageUtil.prototype.getScriptPartFromCode=function(e) {
        if (!e||e.indexOf('-')<0) return null; var t=e.split('-'); return 2===t.length?null:(t.pop(), this.formatLanguageCode(t.join('-')));
      }, LanguageUtil.prototype.getLanguagePartFromCode=function(e) {
        if (!e||e.indexOf('-')<0) return e; var t=e.split('-'); return this.formatLanguageCode(t[0]);
      }, LanguageUtil.prototype.formatLanguageCode=function(e) {
        if ('string'==typeof e&&e.indexOf('-')>-1) {
          var t=['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab']; var n=e.split('-'); return this.options.lowerCaseLng?n=n.map((function(e) {
            return e.toLowerCase();
          })):2===n.length?(n[0]=n[0].toLowerCase(), n[1]=n[1].toUpperCase(), t.indexOf(n[1].toLowerCase())>-1&&(n[1]=capitalize(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(), 2===n[1].length&&(n[1]=n[1].toUpperCase()), 'sgn'!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()), t.indexOf(n[1].toLowerCase())>-1&&(n[1]=capitalize(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase())>-1&&(n[2]=capitalize(n[2].toLowerCase()))), n.join('-');
        } return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e;
      }, LanguageUtil.prototype.isWhitelisted=function(e) {
        return ('languageOnly'===this.options.load||this.options.nonExplicitWhitelist)&&(e=this.getLanguagePartFromCode(e)), !this.whitelist||!this.whitelist.length||this.whitelist.indexOf(e)>-1;
      }, LanguageUtil.prototype.getFallbackCodes=function(e, t) {
        if (!e) return []; if ('string'==typeof e&&(e=[e]), '[object Array]'===Object.prototype.toString.apply(e)) return e; if (!t) return e.default||[]; var n=e[t]; return n||(n=e[this.getScriptPartFromCode(t)]), n||(n=e[this.formatLanguageCode(t)]), n||(n=e.default), n||[];
      }, LanguageUtil.prototype.toResolveHierarchy=function(e, t) {
        var n=this; var r=this.getFallbackCodes(t||this.options.fallbackLng||[], e); var a=[]; var addCode=function(e) {
          e&&(n.isWhitelisted(e)?a.push(e):n.logger.warn('rejecting non-whitelisted language code: '+e));
        }; return 'string'==typeof e&&e.indexOf('-')>-1?('languageOnly'!==this.options.load&&addCode(this.formatLanguageCode(e)), 'languageOnly'!==this.options.load&&'currentOnly'!==this.options.load&&addCode(this.getScriptPartFromCode(e)), 'currentOnly'!==this.options.load&&addCode(this.getLanguagePartFromCode(e))):'string'==typeof e&&addCode(this.formatLanguageCode(e)), r.forEach((function(e) {
          a.indexOf(e)<0&&addCode(n.formatLanguageCode(e));
        })), a;
      }, LanguageUtil;
    }(); function PluralResolver_classCallCheck(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    } var m=[{lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'tg', 'ti', 'tr', 'uz', 'wa'], nr: [1, 2], fc: 1}, {lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'es_ar', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'he', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt', 'pt_br', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'], nr: [1, 2], fc: 2}, {lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'], nr: [1], fc: 3}, {lngs: ['be', 'bs', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4}, {lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5}, {lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6}, {lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7}, {lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8}, {lngs: ['fr'], nr: [1, 2], fc: 9}, {lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10}, {lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11}, {lngs: ['is'], nr: [1, 2], fc: 12}, {lngs: ['jv'], nr: [0, 1], fc: 13}, {lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14}, {lngs: ['lt'], nr: [1, 2, 10], fc: 15}, {lngs: ['lv'], nr: [1, 2, 0], fc: 16}, {lngs: ['mk'], nr: [1, 2], fc: 17}, {lngs: ['mnk'], nr: [0, 1, 2], fc: 18}, {lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19}, {lngs: ['or'], nr: [2, 1], fc: 2}, {lngs: ['ro'], nr: [1, 2, 20], fc: 20}, {lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21}]; var g={1: function(e) {
      return Number(e>1);
    }, 2: function(e) {
      return Number(1!=e);
    }, 3: function(e) {
      return 0;
    }, 4: function(e) {
      return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2);
    }, 5: function(e) {
      return Number(0===e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5);
    }, 6: function(e) {
      return Number(1==e?0:e>=2&&e<=4?1:2);
    }, 7: function(e) {
      return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2);
    }, 8: function(e) {
      return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3);
    }, 9: function(e) {
      return Number(e>=2);
    }, 10: function(e) {
      return Number(1==e?0:2==e?1:e<7?2:e<11?3:4);
    }, 11: function(e) {
      return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3);
    }, 12: function(e) {
      return Number(e%10!=1||e%100==11);
    }, 13: function(e) {
      return Number(0!==e);
    }, 14: function(e) {
      return Number(1==e?0:2==e?1:3==e?2:3);
    }, 15: function(e) {
      return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2);
    }, 16: function(e) {
      return Number(e%10==1&&e%100!=11?0:0!==e?1:2);
    }, 17: function(e) {
      return Number(1==e||e%10==1?0:1);
    }, 18: function(e) {
      return Number(0==e?0:1==e?1:2);
    }, 19: function(e) {
      return Number(1==e?0:0===e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3);
    }, 20: function(e) {
      return Number(1==e?0:0===e||e%100>0&&e%100<20?1:2);
    }, 21: function(e) {
      return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0);
    }}; function createRules() {
      var e={}; return m.forEach((function(t) {
        t.lngs.forEach((function(n) {
          e[n]={numbers: t.nr, plurals: g[t.fc]};
        }));
      })), e;
    } var v=function() {
      function PluralResolver(e) {
        var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; PluralResolver_classCallCheck(this, PluralResolver), this.languageUtils=e, this.options=t, this.logger=i.create('pluralResolver'), this.rules=createRules();
      } return PluralResolver.prototype.addRule=function(e, t) {
        this.rules[e]=t;
      }, PluralResolver.prototype.getRule=function(e) {
        return this.rules[this.languageUtils.getLanguagePartFromCode(e)];
      }, PluralResolver.prototype.needsPlural=function(e) {
        var t=this.getRule(e); return t&&t.numbers.length>1;
      }, PluralResolver.prototype.getSuffix=function(e, t) {
        var n=this; var r=this.getRule(e); if (r) {
          if (1===r.numbers.length) return ''; var a=r.noAbs?r.plurals(t):r.plurals(Math.abs(t)); var i=r.numbers[a]; this.options.simplifyPluralSuffix&&2===r.numbers.length&&1===r.numbers[0]&&(2===i?i='plural':1===i&&(i='')); var returnSuffix=function() {
            return n.options.prepend&&i.toString()?n.options.prepend+i.toString():i.toString();
          }; return 'v1'===this.options.compatibilityJSON?1===i?'':'number'==typeof i?'_plural_'+i.toString():returnSuffix():'v2'===this.options.compatibilityJSON||2===r.numbers.length&&1===r.numbers[0]||2===r.numbers.length&&1===r.numbers[0]?returnSuffix():this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString();
        } return this.logger.warn('no plural rule found for: '+e), '';
      }, PluralResolver;
    }(); var y=Object.assign||function(e) {
      for (var t=1; t<arguments.length; t++) {
        var n=arguments[t]; for (var r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
      } return e;
    }; function Interpolator_classCallCheck(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    } var b=function() {
      function Interpolator() {
        var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; Interpolator_classCallCheck(this, Interpolator), this.logger=i.create('interpolator'), this.init(e, !0);
      } return Interpolator.prototype.init=function() {
        var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; var t=arguments[1]; t&&(this.options=e, this.format=e.interpolation&&e.interpolation.format||function(e) {
          return e;
        }, this.escape=e.interpolation&&e.interpolation.escape||utils_escape), e.interpolation||(e.interpolation={escapeValue: !0}); var n=e.interpolation; this.escapeValue=void 0===n.escapeValue||n.escapeValue, this.prefix=n.prefix?regexEscape(n.prefix):n.prefixEscaped||'{{', this.suffix=n.suffix?regexEscape(n.suffix):n.suffixEscaped||'}}', this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||',', this.unescapePrefix=n.unescapeSuffix?'':n.unescapePrefix||'-', this.unescapeSuffix=this.unescapePrefix?'':n.unescapeSuffix||'', this.nestingPrefix=n.nestingPrefix?regexEscape(n.nestingPrefix):n.nestingPrefixEscaped||regexEscape('$t('), this.nestingSuffix=n.nestingSuffix?regexEscape(n.nestingSuffix):n.nestingSuffixEscaped||regexEscape(')'), this.resetRegExp();
      }, Interpolator.prototype.reset=function() {
        this.options&&this.init(this.options);
      }, Interpolator.prototype.resetRegExp=function() {
        var e=this.prefix+'(.+?)'+this.suffix; this.regexp=new RegExp(e, 'g'); var t=''+this.prefix+this.unescapePrefix+'(.+?)'+this.unescapeSuffix+this.suffix; this.regexpUnescape=new RegExp(t, 'g'); var n=this.nestingPrefix+'(.+?)'+this.nestingSuffix; this.nestingRegexp=new RegExp(n, 'g');
      }, Interpolator.prototype.interpolate=function(e, t, n) {
        var r=this; var a=void 0; var i=void 0; function regexSafe(e) {
          return e.replace(/\$/g, '$$$$');
        } var handleFormat=function(e) {
          if (e.indexOf(r.formatSeparator)<0) return getPath(t, e); var a=e.split(r.formatSeparator); var i=a.shift().trim(); var o=a.join(r.formatSeparator).trim(); return r.format(getPath(t, i), o, n);
        }; for (this.resetRegExp(); a=this.regexpUnescape.exec(e);)i=handleFormat(a[1].trim()), e=e.replace(a[0], i), this.regexpUnescape.lastIndex=0; for (;a=this.regexp.exec(e);)'string'!=typeof(i=handleFormat(a[1].trim()))&&(i=makeString(i)), i||(this.logger.warn('missed to pass in variable '+a[1]+' for interpolating '+e), i=''), i=this.escapeValue?regexSafe(this.escape(i)):regexSafe(i), e=e.replace(a[0], i), this.regexp.lastIndex=0; return e;
      }, Interpolator.prototype.nest=function(e, t) {
        var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}; var r=void 0; var a=void 0; var i=y({}, n); function handleHasOptions(e) {
          if (e.indexOf(',')<0) return e; var t=e.split(','); e=t.shift(); var n=t.join(','); n=(n=this.interpolate(n, i)).replace(/'/g, '"'); try {
            i=JSON.parse(n);
          } catch (t) {
            this.logger.error('failed parsing options string in nesting for key '+e, t);
          } return e;
        } for (i.applyPostProcessor=!1; r=this.nestingRegexp.exec(e);) {
          if ((a=t(handleHasOptions.call(this, r[1].trim()), i))&&r[0]===e&&'string'!=typeof a) return a; 'string'!=typeof a&&(a=makeString(a)), a||(this.logger.warn('missed to resolve '+r[1]+' for nesting '+e), a=''), e=e.replace(r[0], a), this.regexp.lastIndex=0;
        } return e;
      }, Interpolator;
    }(); var w=Object.assign||function(e) {
      for (var t=1; t<arguments.length; t++) {
        var n=arguments[t]; for (var r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
      } return e;
    }; var _slicedToArray=function(e, t) {
      if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) {
        return function(e, t) {
          var n=[]; var r=!0; var a=!1; var i=void 0; try {
            for (var o, s=e[Symbol.iterator](); !(r=(o=s.next()).done)&&(n.push(o.value), !t||n.length!==t); r=!0);
          } catch (e) {
            a=!0, i=e;
          } finally {
            try {
              !r&&s.return&&s.return();
            } finally {
              if (a) throw i;
            }
          } return n;
        }(e, t);
      } throw new TypeError('Invalid attempt to destructure non-iterable instance');
    }; function BackendConnector_classCallCheck(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    } function BackendConnector_possibleConstructorReturn(e, t) {
      if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); return !t||'object'!=typeof t&&'function'!=typeof t?e:t;
    } function BackendConnector_inherits(e, t) {
      if ('function'!=typeof t&&null!==t) throw new TypeError('Super expression must either be null or a function, not '+typeof t); e.prototype=Object.create(t&&t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t&&(Object.setPrototypeOf?Object.setPrototypeOf(e, t):function(e, t) {
        for (var n=Object.getOwnPropertyNames(t), r=0; r<n.length; r++) {
          var a=n[r]; var i=Object.getOwnPropertyDescriptor(t, a); i&&i.configurable&&void 0===e[a]&&Object.defineProperty(e, a, i);
        }
      }(e, t));
    } var x=function(e) {
      function Connector(t, n, r) {
        var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}; BackendConnector_classCallCheck(this, Connector); var o=BackendConnector_possibleConstructorReturn(this, e.call(this)); return o.backend=t, o.store=n, o.services=r, o.options=a, o.logger=i.create('backendConnector'), o.state={}, o.queue=[], o.backend&&o.backend.init&&o.backend.init(r, a.backend, a), o;
      } return BackendConnector_inherits(Connector, e), Connector.prototype.queueLoad=function(e, t, n) {
        var r=this; var a=[]; var i=[]; var o=[]; var s=[]; return e.forEach((function(e) {
          var n=!0; t.forEach((function(t) {
            var o=e+'|'+t; r.store.hasResourceBundle(e, t)?r.state[o]=2:r.state[o]<0||(1===r.state[o]?i.indexOf(o)<0&&i.push(o):(r.state[o]=1, n=!1, i.indexOf(o)<0&&i.push(o), a.indexOf(o)<0&&a.push(o), s.indexOf(t)<0&&s.push(t)));
          })), n||o.push(e);
        })), (a.length||i.length)&&this.queue.push({pending: i, loaded: {}, errors: [], callback: n}), {toLoad: a, pending: i, toLoadLanguages: o, toLoadNamespaces: s};
      }, Connector.prototype.loaded=function(e, t, n) {
        var r=this; var a=e.split('|'); var i=_slicedToArray(a, 2); var o=i[0]; var s=i[1]; t&&this.emit('failedLoading', o, s, t), n&&this.store.addResourceBundle(o, s, n), this.state[e]=t?-1:2, this.queue.forEach((function(n) {
          var a; var i; var l; var u; var c; var h; a=n.loaded, i=s, u=getLastOfPath(a, [o], Object), c=u.obj, h=u.k, c[h]=c[h]||[], l&&(c[h]=c[h].concat(i)), l||c[h].push(i), function(e, t) {
            for (var n=e.indexOf(t); -1!==n;)e.splice(n, 1), n=e.indexOf(t);
          }(n.pending, e), t&&n.errors.push(t), 0!==n.pending.length||n.done||(r.emit('loaded', n.loaded), n.done=!0, n.errors.length?n.callback(n.errors):n.callback());
        })), this.queue=this.queue.filter((function(e) {
          return !e.done;
        }));
      }, Connector.prototype.read=function(e, t, n) {
        var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0; var a=this; var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:250; var o=arguments[5]; return e.length?this.backend[n](e, t, (function(s, l) {
s&&l&&r<5?setTimeout((function() {
  a.read.call(a, e, t, n, r+1, 2*i, o);
}), i):o(s, l);
        })):o(null, {});
      }, Connector.prototype.load=function(e, t, n) {
        var r=this; if (!this.backend) return this.logger.warn('No backend was added via i18next.use. Will not load resources.'), n&&n(); var a=w({}, this.backend.options, this.options.backend); 'string'==typeof e&&(e=this.services.languageUtils.toResolveHierarchy(e)), 'string'==typeof t&&(t=[t]); var i=this.queueLoad(e, t, n); if (!i.toLoad.length) return i.pending.length||n(), null; a.allowMultiLoading&&this.backend.readMulti?this.read(i.toLoadLanguages, i.toLoadNamespaces, 'readMulti', null, null, (function(e, t) {
          e&&r.logger.warn('loading namespaces '+i.toLoadNamespaces.join(', ')+' for languages '+i.toLoadLanguages.join(', ')+' via multiloading failed', e), !e&&t&&r.logger.log('successfully loaded namespaces '+i.toLoadNamespaces.join(', ')+' for languages '+i.toLoadLanguages.join(', ')+' via multiloading', t), i.toLoad.forEach((function(n) {
            var a=n.split('|'); var i=_slicedToArray(a, 2); var o=i[0]; var s=i[1]; var l=getPath(t, [o, s]); if (l)r.loaded(n, e, l); else {
              var u='loading namespace '+s+' for language '+o+' via multiloading failed'; r.loaded(n, u), r.logger.error(u);
            }
          }));
        })):i.toLoad.forEach((function(e) {
          r.loadOne(e);
        }));
      }, Connector.prototype.reload=function(e, t) {
        var n=this; this.backend||this.logger.warn('No backend was added via i18next.use. Will not load resources.'); var r=w({}, this.backend.options, this.options.backend); 'string'==typeof e&&(e=this.services.languageUtils.toResolveHierarchy(e)), 'string'==typeof t&&(t=[t]), r.allowMultiLoading&&this.backend.readMulti?this.read(e, t, 'readMulti', null, null, (function(r, a) {
          r&&n.logger.warn('reloading namespaces '+t.join(', ')+' for languages '+e.join(', ')+' via multiloading failed', r), !r&&a&&n.logger.log('successfully reloaded namespaces '+t.join(', ')+' for languages '+e.join(', ')+' via multiloading', a), e.forEach((function(e) {
            t.forEach((function(t) {
              var i=getPath(a, [e, t]); if (i)n.loaded(e+'|'+t, r, i); else {
                var o='reloading namespace '+t+' for language '+e+' via multiloading failed'; n.loaded(e+'|'+t, o), n.logger.error(o);
              }
            }));
          }));
        })):e.forEach((function(e) {
          t.forEach((function(t) {
            n.loadOne(e+'|'+t, 're');
          }));
        }));
      }, Connector.prototype.loadOne=function(e) {
        var t=this; var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:''; var r=e.split('|'); var a=_slicedToArray(r, 2); var i=a[0]; var o=a[1]; this.read(i, o, 'read', null, null, (function(r, a) {
          r&&t.logger.warn(n+'loading namespace '+o+' for language '+i+' failed', r), !r&&a&&t.logger.log(n+'loaded namespace '+o+' for language '+i, a), t.loaded(e, r, a);
        }));
      }, Connector.prototype.saveMissing=function(e, t, n, r) {
        this.backend&&this.backend.create&&this.backend.create(e, t, n, r), e&&e[0]&&this.store.addResource(e[0], t, n, r);
      }, Connector;
    }(o); var k=Object.assign||function(e) {
      for (var t=1; t<arguments.length; t++) {
        var n=arguments[t]; for (var r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
      } return e;
    }; function CacheConnector_classCallCheck(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    } function CacheConnector_possibleConstructorReturn(e, t) {
      if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); return !t||'object'!=typeof t&&'function'!=typeof t?e:t;
    } function CacheConnector_inherits(e, t) {
      if ('function'!=typeof t&&null!==t) throw new TypeError('Super expression must either be null or a function, not '+typeof t); e.prototype=Object.create(t&&t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t&&(Object.setPrototypeOf?Object.setPrototypeOf(e, t):function(e, t) {
        for (var n=Object.getOwnPropertyNames(t), r=0; r<n.length; r++) {
          var a=n[r]; var i=Object.getOwnPropertyDescriptor(t, a); i&&i.configurable&&void 0===e[a]&&Object.defineProperty(e, a, i);
        }
      }(e, t));
    } var C=function(e) {
      function Connector(t, n, r) {
        var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}; CacheConnector_classCallCheck(this, Connector); var o=CacheConnector_possibleConstructorReturn(this, e.call(this)); return o.cache=t, o.store=n, o.services=r, o.options=a, o.logger=i.create('cacheConnector'), o.cache&&o.cache.init&&o.cache.init(r, a.cache, a), o;
      } return CacheConnector_inherits(Connector, e), Connector.prototype.load=function(e, t, n) {
        var r=this; if (!this.cache) return n&&n(); var a=k({}, this.cache.options, this.options.cache); var i='string'==typeof e?this.services.languageUtils.toResolveHierarchy(e):e; a.enabled?this.cache.load(i, (function(e, t) {
          if (e&&r.logger.error('loading languages '+i.join(', ')+' from cache failed', e), t) {
            for (var a in t) {
              if (Object.prototype.hasOwnProperty.call(t, a)) {
                for (var o in t[a]) {
                  if (Object.prototype.hasOwnProperty.call(t[a], o)&&'i18nStamp'!==o) {
                    var s=t[a][o]; s&&r.store.addResourceBundle(a, o, s);
                  }
                }
              }
            }
          }n&&n();
        })):n&&n();
      }, Connector.prototype.save=function() {
        this.cache&&this.options.cache&&this.options.cache.enabled&&this.cache.save(this.store.data);
      }, Connector;
    }(o); function transformOptions(e) {
      return 'string'==typeof e.ns&&(e.ns=[e.ns]), 'string'==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]), 'string'==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]), e.whitelist&&e.whitelist.indexOf('cimode')<0&&e.whitelist.push('cimode'), e;
    } var S=Object.assign||function(e) {
      for (var t=1; t<arguments.length; t++) {
        var n=arguments[t]; for (var r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
      } return e;
    }; function i18next_classCallCheck(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    } function i18next_possibleConstructorReturn(e, t) {
      if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); return !t||'object'!=typeof t&&'function'!=typeof t?e:t;
    } function i18next_inherits(e, t) {
      if ('function'!=typeof t&&null!==t) throw new TypeError('Super expression must either be null or a function, not '+typeof t); e.prototype=Object.create(t&&t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t&&(Object.setPrototypeOf?Object.setPrototypeOf(e, t):function(e, t) {
        for (var n=Object.getOwnPropertyNames(t), r=0; r<n.length; r++) {
          var a=n[r]; var i=Object.getOwnPropertyDescriptor(t, a); i&&i.configurable&&void 0===e[a]&&Object.defineProperty(e, a, i);
        }
      }(e, t));
    } function noop() {} var O=new(function(e) {
      function I18n() {
        var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; var n=arguments[1]; i18next_classCallCheck(this, I18n); var r=i18next_possibleConstructorReturn(this, e.call(this)); if (r.options=transformOptions(t), r.services={}, r.logger=i, r.modules={external: []}, n&&!r.isInitialized&&!t.isClone) {
          var a; if (!r.options.initImmediate) return a=r.init(t, n), i18next_possibleConstructorReturn(r, a); setTimeout((function() {
            r.init(t, n);
          }), 0);
        } return r;
      } return i18next_inherits(I18n, e), I18n.prototype.init=function(e, t) {
        var n=this; function createClassOnDemand(e) {
          return e?'function'==typeof e?new e:e:null;
        } if ('function'==typeof e&&(t=e, e={}), e||(e={}), 'v1'===e.compatibilityAPI?this.options=S({}, {debug: !1, initImmediate: !0, ns: ['translation'], defaultNS: ['translation'], fallbackLng: ['dev'], fallbackNS: !1, whitelist: !1, nonExplicitWhitelist: !1, load: 'all', preload: !1, simplifyPluralSuffix: !0, keySeparator: '.', nsSeparator: ':', pluralSeparator: '_', contextSeparator: '_', saveMissing: !1, saveMissingTo: 'fallback', missingKeyHandler: !1, postProcess: !1, returnNull: !0, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: function() {}, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: function(e) {
          return {defaultValue: e[1]};
        }, interpolation: {escapeValue: !0, format: function(e, t, n) {
          return e;
        }, prefix: '{{', suffix: '}}', formatSeparator: ',', unescapePrefix: '-', nestingPrefix: '$t(', nestingSuffix: ')', defaultVariables: void 0}}, transformOptions(function(e) {
          return e.resStore&&(e.resources=e.resStore), e.ns&&e.ns.defaultNs?(e.defaultNS=e.ns.defaultNs, e.ns=e.ns.namespaces):e.defaultNS=e.ns||'translation', e.fallbackToDefaultNS&&e.defaultNS&&(e.fallbackNS=e.defaultNS), e.saveMissing=e.sendMissing, e.saveMissingTo=e.sendMissingTo||'current', e.returnNull=!e.fallbackOnNull, e.returnEmptyString=!e.fallbackOnEmpty, e.returnObjects=e.returnObjectTrees, e.joinArrays='\n', e.returnedObjectHandler=e.objectTreeKeyHandler, e.parseMissingKeyHandler=e.parseMissingKey, e.appendNamespaceToMissingKey=!0, e.nsSeparator=e.nsseparator||':', e.keySeparator=e.keyseparator||'.', 'sprintf'===e.shortcutFunction&&(e.overloadTranslationOptionHandler=function(e) {
            for (var t=[], n=1; n<e.length; n++)t.push(e[n]); return {postProcess: 'sprintf', sprintf: t};
          }), e.whitelist=e.lngWhitelist, e.preload=e.preload, 'current'===e.load&&(e.load='currentOnly'), 'unspecific'===e.load&&(e.load='languageOnly'), e.backend=e.backend||{}, e.backend.loadPath=e.resGetPath||'locales/__lng__/__ns__.json', e.backend.addPath=e.resPostPath||'locales/add/__lng__/__ns__', e.backend.allowMultiLoading=e.dynamicLoad, e.cache=e.cache||{}, e.cache.prefix='res_', e.cache.expirationTime=6048e5, e.cache.enabled=e.useLocalStorage, (e=convertInterpolation(e)).defaultVariables&&(e.interpolation.defaultVariables=e.defaultVariables), e;
        }(e)), {}):'v1'===e.compatibilityJSON?this.options=S({}, {debug: !1, initImmediate: !0, ns: ['translation'], defaultNS: ['translation'], fallbackLng: ['dev'], fallbackNS: !1, whitelist: !1, nonExplicitWhitelist: !1, load: 'all', preload: !1, simplifyPluralSuffix: !0, keySeparator: '.', nsSeparator: ':', pluralSeparator: '_', contextSeparator: '_', saveMissing: !1, saveMissingTo: 'fallback', missingKeyHandler: !1, postProcess: !1, returnNull: !0, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: function() {}, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: function(e) {
          return {defaultValue: e[1]};
        }, interpolation: {escapeValue: !0, format: function(e, t, n) {
          return e;
        }, prefix: '{{', suffix: '}}', formatSeparator: ',', unescapePrefix: '-', nestingPrefix: '$t(', nestingSuffix: ')', defaultVariables: void 0}}, transformOptions(function(e) {
          return (e=convertInterpolation(e)).joinArrays='\n', e;
        }(e)), {}):this.options=S({}, {debug: !1, initImmediate: !0, ns: ['translation'], defaultNS: ['translation'], fallbackLng: ['dev'], fallbackNS: !1, whitelist: !1, nonExplicitWhitelist: !1, load: 'all', preload: !1, simplifyPluralSuffix: !0, keySeparator: '.', nsSeparator: ':', pluralSeparator: '_', contextSeparator: '_', saveMissing: !1, saveMissingTo: 'fallback', missingKeyHandler: !1, postProcess: !1, returnNull: !0, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: function() {}, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: function(e) {
          return {defaultValue: e[1]};
        }, interpolation: {escapeValue: !0, format: function(e, t, n) {
          return e;
        }, prefix: '{{', suffix: '}}', formatSeparator: ',', unescapePrefix: '-', nestingPrefix: '$t(', nestingSuffix: ')', defaultVariables: void 0}}, this.options, transformOptions(e)), this.format=this.options.interpolation.format, t||(t=noop), !this.options.isClone) {
this.modules.logger?i.init(createClassOnDemand(this.modules.logger), this.options):i.init(null, this.options); var r=new p(this.options); this.store=new u(this.options.resources, this.options); var a=this.services; a.logger=i, a.resourceStore=this.store, a.resourceStore.on('added removed', (function(e, t) {
  a.cacheConnector.save();
})), a.languageUtils=r, a.pluralResolver=new v(r, {prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix}), a.interpolator=new b(this.options), a.backendConnector=new x(createClassOnDemand(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on('*', (function(e) {
  for (var t=arguments.length, r=Array(t>1?t-1:0), a=1; a<t; a++)r[a-1]=arguments[a]; n.emit.apply(n, [e].concat(r));
})), a.backendConnector.on('loaded', (function(e) {
  a.cacheConnector.save();
})), a.cacheConnector=new C(createClassOnDemand(this.modules.cache), a.resourceStore, a, this.options), a.cacheConnector.on('*', (function(e) {
  for (var t=arguments.length, r=Array(t>1?t-1:0), a=1; a<t; a++)r[a-1]=arguments[a]; n.emit.apply(n, [e].concat(r));
})), this.modules.languageDetector&&(a.languageDetector=createClassOnDemand(this.modules.languageDetector), a.languageDetector.init(a, this.options.detection, this.options)), this.translator=new d(this.services, this.options), this.translator.on('*', (function(e) {
  for (var t=arguments.length, r=Array(t>1?t-1:0), a=1; a<t; a++)r[a-1]=arguments[a]; n.emit.apply(n, [e].concat(r));
})), this.modules.external.forEach((function(e) {
  e.init&&e.init(n);
}));
        } var o; ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle'].forEach((function(e) {
          n[e]=function() {
            var t; return (t=n.store)[e].apply(t, arguments);
          };
        })), 'v1'===this.options.compatibilityAPI&&((o=this).lng=function() {
          return i.deprecate('i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup.'), o.services.languageUtils.toResolveHierarchy(o.language)[0];
        }, o.preload=function(e, t) {
          i.deprecate('i18next.preload() can be replaced with i18next.loadLanguages()'), o.loadLanguages(e, t);
        }, o.setLng=function(e, t, n) {
          return i.deprecate('i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace.'), 'function'==typeof t&&(n=t, t={}), t||(t={}), !0===t.fixLng&&n?n(null, o.getFixedT(e)):o.changeLanguage(e, n);
        }, o.addPostProcessor=function(e, t) {
          i.deprecate('i18next.addPostProcessor() can be replaced by i18next.use({ type: \'postProcessor\', name: \'name\', process: fc })'), o.use({type: 'postProcessor', name: e, process: t});
        }); var load=function() {
          n.changeLanguage(n.options.lng, (function(e, r) {
            n.isInitialized=!0, n.logger.log('initialized', n.options), n.emit('initialized', n.options), t(e, r);
          }));
        }; return this.options.resources||!this.options.initImmediate?load():setTimeout(load, 0), this;
      }, I18n.prototype.loadResources=function() {
        var e=this; var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:noop; if (this.options.resources)t(null); else {
          if (this.language&&'cimode'===this.language.toLowerCase()) return t(); var n=[]; var append=function(t) {
            t&&e.services.languageUtils.toResolveHierarchy(t).forEach((function(e) {
              n.indexOf(e)<0&&n.push(e);
            }));
          }; if (this.language)append(this.language); else {
            var r=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng); r.forEach((function(e) {
              return append(e);
            }));
          } this.options.preload&&this.options.preload.forEach((function(e) {
            return append(e);
          })), this.services.cacheConnector.load(n, this.options.ns, (function() {
            e.services.backendConnector.load(n, e.options.ns, t);
          }));
        }
      }, I18n.prototype.reloadResources=function(e, t) {
        e||(e=this.languages), t||(t=this.options.ns), this.services.backendConnector.reload(e, t);
      }, I18n.prototype.use=function(e) {
        return 'backend'===e.type&&(this.modules.backend=e), 'cache'===e.type&&(this.modules.cache=e), ('logger'===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e), 'languageDetector'===e.type&&(this.modules.languageDetector=e), 'postProcessor'===e.type&&c.addPostProcessor(e), '3rdParty'===e.type&&this.modules.external.push(e), this;
      }, I18n.prototype.changeLanguage=function(e, t) {
        var n=this; var setLng=function(e) {
          e&&(n.language=e, n.languages=n.services.languageUtils.toResolveHierarchy(e), n.translator.changeLanguage(e), n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage(e)), n.loadResources((function(r) {
            !function(e, r) {
              r&&(n.emit('languageChanged', r), n.logger.log('languageChanged', r)), t&&t(e, (function() {
                return n.t.apply(n, arguments);
              }));
            }(r, e);
          }));
        }; e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(setLng):setLng(e):setLng(this.services.languageDetector.detect());
      }, I18n.prototype.getFixedT=function(e, t) {
        var n=this; var r=function fixedT(e) {
          var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; var r=S({}, t); return r.lng=r.lng||fixedT.lng, r.lngs=r.lngs||fixedT.lngs, r.ns=r.ns||fixedT.ns, n.t(e, r);
        }; return 'string'==typeof e?r.lng=e:r.lngs=e, r.ns=t, r;
      }, I18n.prototype.t=function() {
        var e; return this.translator&&(e=this.translator).translate.apply(e, arguments);
      }, I18n.prototype.exists=function() {
        var e; return this.translator&&(e=this.translator).exists.apply(e, arguments);
      }, I18n.prototype.setDefaultNamespace=function(e) {
        this.options.defaultNS=e;
      }, I18n.prototype.loadNamespaces=function(e, t) {
        var n=this; if (!this.options.ns) return t&&t(); 'string'==typeof e&&(e=[e]), e.forEach((function(e) {
          n.options.ns.indexOf(e)<0&&n.options.ns.push(e);
        })), this.loadResources(t);
      }, I18n.prototype.loadLanguages=function(e, t) {
        'string'==typeof e&&(e=[e]); var n=this.options.preload||[]; var r=e.filter((function(e) {
          return n.indexOf(e)<0;
        })); if (!r.length) return t(); this.options.preload=n.concat(r), this.loadResources(t);
      }, I18n.prototype.dir=function(e) {
        if (e||(e=this.languages&&this.languages.length>0?this.languages[0]:this.language), !e) return 'rtl'; return ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'].indexOf(this.services.languageUtils.getLanguagePartFromCode(e))>=0?'rtl':'ltr';
      }, I18n.prototype.createInstance=function() {
        var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; var t=arguments[1]; return new I18n(e, t);
      }, I18n.prototype.cloneInstance=function() {
        var e=this; var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:noop; var r=S({}, this.options, t, {isClone: !0}); var a=new I18n(r, n); var i=['store', 'services', 'language']; return i.forEach((function(t) {
          a[t]=e[t];
        })), a.translator=new d(a.services, a.options), a.translator.on('*', (function(e) {
          for (var t=arguments.length, n=Array(t>1?t-1:0), r=1; r<t; r++)n[r-1]=arguments[r]; a.emit.apply(a, [e].concat(n));
        })), a.init(r, n), a;
      }, I18n;
    }(o)); var T=O; var E=(O.changeLanguage.bind(O), O.cloneInstance.bind(O), O.createInstance.bind(O), O.dir.bind(O), O.exists.bind(O), O.getFixedT.bind(O), O.init.bind(O), O.loadLanguages.bind(O), O.loadNamespaces.bind(O), O.loadResources.bind(O), O.off.bind(O), O.on.bind(O), O.setDefaultNamespace.bind(O), O.t.bind(O), O.use.bind(O), n(27)); var R=[{id: 'en', title: 'English'}, {id: 'ru', title: 'Русский'}, {id: 'zh', title: '中文'}, {id: 'de', title: 'Deutsch'}, {id: 'nl', title: 'Nederlands'}, {id: 'he', title: 'Hebrew'}, {id: 'br', title: 'Brazil'}, {id: 'pl', title: 'Polski'}, {id: 'ja', title: '日本語'}, {id: 'es', title: 'Español'}, {id: 'kr', title: '한국어'}, {id: 'fr', title: 'Français'}, {id: 'az', title: 'Azərbaycanca'}]; function initTranslations() {
      return new Promise((function(e, t) {
        T.init({lng: E.a.get('language'), interpolation: {escapeValue: !1}, fallbackLng: 'en'}, (function(n) {
          return n?t(n):e();
        }));
      }));
    } function addTranslation(e, t) {
      T.on('initialized', (function() {
        T.services.resourceStore.addResourceBundle(e, T.options.ns[0], t, !0, !0);
      }));
    }R.map((function(e) {
      return e.id;
    })).forEach((function(e) {
      return addTranslation(e, n(146)('./'.concat(e)));
    })); t.c=T;
  }, function(e, t, n) {
    'use strict'; n.r(t); var r=n(18); var a=n(8); var i={flaky: {className: 'fa fa-bomb', tooltip: 'marks.flaky'}, newFailed: {className: 'fa fa-times-circle', tooltip: 'marks.newFailed'}, newBroken: {className: 'fa fa-exclamation-circle', tooltip: 'marks.newBroken'}, newPassed: {className: 'fa fa-check-circle', tooltip: 'marks.newPassed'}, retriesStatusChange: {className: 'fa fa-refresh', tooltip: 'marks.retriesStatusChange'}, failed: {className: 'fa fa-times-circle fa-fw text_status_failed', tooltip: 'status.failed'}, broken: {className: 'fa fa-exclamation-circle fa-fw text_status_broken', tooltip: 'status.broken'}, passed: {className: 'fa fa-check-circle fa-fw text_status_passed', tooltip: 'status.passed'}, skipped: {className: 'fa fa-minus-circle fa-fw text_status_skipped', tooltip: 'status.skipped'}, unknown: {className: 'fa fa-question-circle fa-fw text_status_unknown', tooltip: 'status.unknown'}}; t.default=function(e, t) {
      var n=t.hash; var o=n.extraClasses; var s=void 0===o?'':o; var l=n.noTooltip; var u=void 0!==l&&l; var c=i[e]; return c?new r.SafeString('<span class="'.concat(c.className, ' ').concat(s, '" ').concat(u?'':'data-tooltip="'.concat(Object(a.default)(c.tooltip), '"'), '></span>')):'';
    };
  }, function(e, t, n) {
    'use strict'; n.r(t); var r=n(14); var a=n(42); var i=n.n(a); var o=[{suffix: 'd', method: function(e) {
      return Math.floor(e.valueOf()/864e5);
    }}, {suffix: 'h', method: 'getUTCHours'}, {suffix: 'm', method: 'getUTCMinutes'}, {suffix: 's', method: 'getUTCSeconds'}, {pad: 3, suffix: 'ms', method: 'getUTCMilliseconds'}]; t.default=function(e, t) {
      if (0===e) return '0s'; if (!e) return 'Unknown'; var n=new Date(e); return 'number'!=typeof t&&(t=2), o.map((function(e) {
        var t=e.method; var a=e.suffix; var i=e.pad; return {value: Object(r.isFunction)(t)?t(n):n[t](), suffix: a, pad: i};
      })).reduce((function(e, t) {
        var n=e.hasValue; var r=e.out; return n=n||t.value>0, (t.value>0||n&&'ms'!==t.suffix)&&r.push(t), {hasValue: n, out: r};
      }), {hasValue: !1, out: []}).out.map((function(e, t) {
        return (0===t?e.value:i()(e.value, e.pad||2, '0'))+e.suffix;
      })).slice(0, t).join(' ');
    };
  }, function(e, t, n) {
    'use strict'; var r=n(2); var a=n.n(r); var i=n(3); var o=n.n(i); var s=n(7); var l=n.n(s); var u=n(43); var c=n(4); var h=n.n(c); var f=n(5); var d=n.n(f); var p=n(0); var m=n.n(p); var g=n(13); function _createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=m()(e); if (t) {
          var a=m()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return d()(this, n);
      };
    } var v=function(e) {
      h()(WidgetsModel, e); var t=_createSuper(WidgetsModel); function WidgetsModel() {
        return a()(this, WidgetsModel), t.apply(this, arguments);
      } return o()(WidgetsModel, [{key: 'initialize', value: function(e, t) {
        this.options=t;
      }}, {key: 'url', value: function() {
        return 'widgets/'.concat(this.options.name, '.json');
      }}, {key: 'parse', value: function(e) {
        return Array.isArray(e)?{items: e}:e;
      }}, {key: 'getWidgetData', value: function(e) {
        var t=this.get(e); return new g.Model(Array.isArray(t)?{items: t}:t);
      }}]), WidgetsModel;
    }(g.Model); var y=n(8); var b=n(16); var w=n(21); var x=function() {
      function AllurePluginsRegistry() {
        a()(this, AllurePluginsRegistry), l()(this, 'tabs', []), l()(this, 'testResultTabs', []), l()(this, 'attachmentViews', {}), l()(this, 'testResultBlocks', {tag: [], before: [], after: []}), l()(this, 'widgets', {});
      } return o()(AllurePluginsRegistry, [{key: 'addTab', value: function(e) {
        var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; var n=t.title; var r=t.icon; var a=t.route; var i=t.onEnter; var o=void 0===i?u.b:i; n=n||e, this.tabs.push({tabName: e, title: n, icon: r}), b.a.route(a, e), b.a.on('route:'.concat(e), Object(u.c)(o));
      }}, {key: 'addWidget', value: function(e, t, n) {
        var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:v; this.widgets[e]||(this.widgets[e]={}), this.widgets[e][t]={widget: n, model: r};
      }}, {key: 'addTranslation', value: function(e, t) {
        Object(w.b)(e, t);
      }}, {key: 'translate', value: function(e, t) {
        return Object(y.default)(e, t);
      }}, {key: 'addTestResultBlock', value: function(e, t) {
        var n=t.position; this.testResultBlocks[n].push(e);
      }}, {key: 'addAttachmentViewer', value: function(e, t) {
        var n=t.View; var r=t.icon; var a=void 0===r?'fa fa-file-o':r; this.attachmentViews[e]={View: n, icon: a};
      }}, {key: 'addTestResultTab', value: function(e, t, n) {
        this.testResultTabs.push({id: e, name: t, View: n});
      }}]), AllurePluginsRegistry;
    }(); t.a=new x;
  }, function(e, t, n) {
    'use strict'; var r; var a; var i=n(2); var o=n.n(i); var s=n(3); var l=n.n(s); var u=n(4); var c=n.n(u); var h=n(5); var f=n.n(h); var d=n(0); var p=n.n(d); var m=n(7); var g=n.n(m); var v=(n(145), n(1)); var y=n(45); var b=n.n(y); var w=n(13); var x=n(15); var k=n.n(x); var C=n(14); function _createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=p()(e); if (t) {
          var a=p()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return f()(this, n);
      };
    } var S={'top': function(e, t, n) {
      var r=e.top; var a=e.left; var i=e.width; var o=t.offset; return {top: r-n.height-o, left: a+i/2-n.width/2};
    }, 'center': function(e, t, n) {
      var r=e.top; var a=e.left; return {top: r+e.height/2, left: a+e.width/2-n.width/2};
    }, 'right': function(e, t, n) {
      var r=e.top; var a=e.left; var i=e.height; var o=e.width; var s=t.offset; return {top: r+i/2-n.height/2, left: a+o+s};
    }, 'left': function(e, t, n) {
      var r=e.top; var a=e.left; var i=e.height; var o=t.offset; return {top: r+i/2-n.height/2, left: a-o-n.width};
    }, 'bottom': function(e, t, n) {
      var r=e.top; var a=e.left; var i=e.height; var o=e.width; return {top: r+i+t.offset, left: a+o/2-n.width/2};
    }, 'bottom-left': function(e, t, n) {
      var r=e.top; var a=e.left; var i=e.height; var o=e.width; return {top: r+i+t.offset, left: a+o-n.width};
    }}; var O=Object(v.b)('tooltip')((a=function(e) {
      c()(TooltipView, e); var t=_createSuper(TooltipView); function TooltipView() {
        return o()(this, TooltipView), t.apply(this, arguments);
      } return l()(TooltipView, [{key: 'initialize', value: function(e) {
        this.options=e, Object(C.defaults)(this.options, {offset: 10});
      }}, {key: 'render', value: function() {
        this.constructor.container.append(this.$el);
      }}, {key: 'isVisible', value: function() {
        return this.$el.is(':visible');
      }}, {key: 'setContent', value: function(e) {
        this.$el.html(e);
      }}, {key: 'show', value: function(e, t) {
        var n=this.options.position; this.setContent(e), this.$el.addClass(b()(this.className, {position: n})), this.render(), 'rtl'===document.dir&&'right'===n?this.$el.css(S.left(t[0].getBoundingClientRect(), {offset: this.options.offset}, this.$el[0].getBoundingClientRect())):'rtl'===document.dir&&'left'===n?this.$el.css(S.right(t[0].getBoundingClientRect(), {offset: this.options.offset}, this.$el[0].getBoundingClientRect())):this.$el.css(S[n](t[0].getBoundingClientRect(), {offset: this.options.offset}, this.$el[0].getBoundingClientRect()));
      }}, {key: 'hide', value: function() {
        this.$el.remove();
      }}]), TooltipView;
    }(w.View), g()(a, 'container', k()(document.body)), r=a))||r; t.a=O;
  }, function(e, t, n) {
    'use strict'; var r; var a; var i; var o; var s=n(2); var l=n.n(s); var u=n(3); var c=n.n(u); var h=n(9); var f=n.n(h); var d=n(4); var p=n.n(d); var m=n(5); var g=n.n(m); var v=n(0); var y=n.n(v); var b=n(7); var w=n.n(b); var x=(n(162), n(10)); var k=n(33); var C=n(12); var S=n.n(C); var O=(n(163), n(18)); var T=n(14); var E=n(1); var R=n(16); var P=n(24); var M=n(27); var A=n(21); var j=n(17); var N=n.n(j); var D=(n(171), n(39)); var V=n(15); var L=n.n(V); var B=n(87); var I=n.n(B); function _createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=y()(e); if (t) {
          var a=y()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return g()(this, n);
      };
    } var z; var F; var U; var H; var q; var W; var $; var G; var Y=(r=Object(E.b)('language-select popover'), a=Object(E.c)('click .language-select__item'), r((o=function(e) {
      p()(LanguageSelectView, e); var t=_createSuper(LanguageSelectView); function LanguageSelectView() {
        return l()(this, LanguageSelectView), t.apply(this, arguments);
      } return c()(LanguageSelectView, [{key: 'initialize', value: function() {
        N()(y()(LanguageSelectView.prototype), 'initialize', this).call(this, {position: 'right'});
      }}, {key: 'setContent', value: function() {
        this.$el.html(I()({languages: A.a, currentLang: M.a.getLanguage()}));
      }}, {key: 'show', value: function(e) {
        var t=this; N()(y()(LanguageSelectView.prototype), 'show', this).call(this, null, e), this.delegateEvents(), setTimeout((function() {
          L()(document).one('click', (function() {
            return t.hide();
          }));
        }));
      }}, {key: 'onLanguageClick', value: function(e) {
        var t=this.$(e.currentTarget).data('id'); M.a.setLanguage(t), A.c.changeLanguage(t);
      }}]), LanguageSelectView;
    }(D.a), S()(o.prototype, 'onLanguageClick', [a], Object.getOwnPropertyDescriptor(o.prototype, 'onLanguageClick'), o.prototype), i=o))||i); var K=n(25); var X=n(88); var Z=n.n(X); function SideNavView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=y()(e); if (t) {
          var a=y()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return g()(this, n);
      };
    } var J; var Q=(z=Object(E.b)('side-nav'), F=Object(E.c)('mouseenter [data-tooltip]'), U=Object(E.c)('mouseleave [data-tooltip]'), H=Object(E.c)('click .side-nav__collapse'), q=Object(E.c)('click .side-nav__language'), W=Object(E.c)('click .side-nav__language-small'), z((G=function(e) {
      p()(SideNavView, e); var t=SideNavView_createSuper(SideNavView); function SideNavView() {
        var e; l()(this, SideNavView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), w()(f()(e), 'template', Z.a), e;
      } return c()(SideNavView, [{key: 'initialize', value: function() {
        var e=this; this.tabs=P.a.tabs.map((function(t) {
          var n=t.tabName; return {tabName: n, icon: t.icon, title: t.title, active: e.isTabActive(n)};
        })), this.tooltip=new K.a({position: 'right'}), this.langSelect=new Y;
      }}, {key: 'onRender', value: function() {
        this.$el.toggleClass('side-nav_collapsed', M.a.isSidebarCollapsed());
      }}, {key: 'onDestroy', value: function() {
        this.tooltip.hide();
      }}, {key: 'serializeData', value: function() {
        return {language: Object(T.findWhere)(A.a, {id: M.a.getLanguage()}), tabs: this.tabs};
      }}, {key: 'isTabActive', value: function(e) {
        var t=R.a.getCurrentUrl(); return e?0===t.indexOf(e):t===e;
      }}, {key: 'onSidelinkHover', value: function(e) {
        if (this.$el.hasClass('side-nav_collapsed')) {
          var t=this.$(e.currentTarget); this.tooltip.show(Object(O.escapeExpression)(t.data('tooltip')), t);
        }
      }}, {key: 'onSidelinkLeave', value: function() {
        this.tooltip.hide();
      }}, {key: 'onCollapseClick', value: function() {
        this.$el.toggleClass('side-nav_collapsed'), M.a.setSidebarCollapsed(this.$el.hasClass('side-nav_collapsed')), this.tooltip.hide();
      }}, {key: 'onLanguageClick', value: function(e) {
this.langSelect.isVisible()?this.langSelect.hide():this.langSelect.show(this.$(e.currentTarget)), this.tooltip.hide();
      }}]), SideNavView;
    }(x.View), S()(G.prototype, 'onSidelinkHover', [F], Object.getOwnPropertyDescriptor(G.prototype, 'onSidelinkHover'), G.prototype), S()(G.prototype, 'onSidelinkLeave', [U], Object.getOwnPropertyDescriptor(G.prototype, 'onSidelinkLeave'), G.prototype), S()(G.prototype, 'onCollapseClick', [H], Object.getOwnPropertyDescriptor(G.prototype, 'onCollapseClick'), G.prototype), S()(G.prototype, 'onLanguageClick', [q, W], Object.getOwnPropertyDescriptor(G.prototype, 'onLanguageClick'), G.prototype), $=G))||$); var ee=n(8); var te=n(89); var ne=n.n(te); function AppLayout_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=y()(e); if (t) {
          var a=y()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return g()(this, n);
      };
    } var re=Object(E.b)('app')(J=Object(E.e)({content: '.app__content', nav: '.app__nav'})(J=function(e) {
      p()(AppLayout, e); var t=AppLayout_createSuper(AppLayout); function AppLayout() {
        var e; l()(this, AppLayout); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), w()(f()(e), 'template', ne.a), e;
      } return c()(AppLayout, [{key: 'initialize', value: function() {}}, {key: 'onRender', value: function() {
        var e=this; this.showChildView('nav', new Q); var t=this.loadData(); t?t.then((function() {
          e.showChildView('content', e.getContentView()), e.onViewReady();
        })).catch((function() {
          e.showChildView('content', new k.a({code: 404, message: Object(ee.default)('errors.notFound')}));
        })):this.showChildView('content', this.getContentView());
      }}, {key: 'onViewReady', value: function() {}}, {key: 'loadData', value: function() {}}, {key: 'getContentView', value: function() {
        throw new Error('attempt to call abstract method');
      }}, {key: 'shouldKeepState', value: function() {
        return !0;
      }}]), AppLayout;
    }(x.View))||J)||J; t.a=re;
  }, function(e, t, n) {
    'use strict'; var r=n(35); var a=Object(r.a)(); t.a=a;
  }, function(e, t, n) {
    'use strict'; n.r(t), t.default=function(e, t) {
      return e===t;
    };
  },, function(e, t, n) {
    'use strict'; t.__esModule=!0, t.extend=extend, t.indexOf=function(e, t) {
      for (var n=0, r=e.length; n<r; n++) if (e[n]===t) return n; return -1;
    }, t.escapeExpression=function(e) {
      if ('string'!=typeof e) {
        if (e&&e.toHTML) return e.toHTML(); if (null==e) return ''; if (!e) return e+''; e=''+e;
      } if (!i.test(e)) return e; return e.replace(a, escapeChar);
    }, t.isEmpty=function(e) {
      return !e&&0!==e||!(!s(e)||0!==e.length);
    }, t.createFrame=function(e) {
      var t=extend({}, e); return t._parent=e, t;
    }, t.blockParams=function(e, t) {
      return e.path=t, e;
    }, t.appendContextPath=function(e, t) {
      return (e?e+'.':'')+t;
    }; var r={'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#x27;', '`': '&#x60;', '=': '&#x3D;'}; var a=/[&<>"'`=]/g; var i=/[&<>"'`=]/; function escapeChar(e) {
      return r[e];
    } function extend(e) {
      for (var t=1; t<arguments.length; t++) for (var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t], n)&&(e[n]=arguments[t][n]); return e;
    } var o=Object.prototype.toString; t.toString=o; var isFunction=function(e) {
      return 'function'==typeof e;
    }; isFunction(/x/)&&(t.isFunction=isFunction=function(e) {
      return 'function'==typeof e&&'[object Function]'===o.call(e);
    }), t.isFunction=isFunction; var s=Array.isArray||function(e) {
      return !(!e||'object'!=typeof e)&&'[object Array]'===o.call(e);
    }; t.isArray=s;
  }, function(e, t, n) {
    'use strict'; function makeArray(e) {
      return Array.isArray(e)?e:e?[e]:[];
    }n.d(t, 'a', (function() {
      return makeArray;
    }));
  }, function(e, t, n) {
    'use strict'; n.r(t); var r=n(42); var a=n.n(r); t.default=function(e, t) {
      return e?(e instanceof Date||(e=new Date(e)), 'boolean'!=typeof t&&(t=!1), [e.getHours(), a()(e.getMinutes(), 2, '0'), a()(e.getSeconds(), 2, '0')+(t?'.'.concat(e.getMilliseconds()):'')].join(':')):'unknown';
    };
  }, function(e, t, n) {
    'use strict'; var r; var a=n(2); var i=n.n(a); var o=n(3); var s=n.n(o); var l=n(9); var u=n.n(l); var c=n(4); var h=n.n(c); var f=n(5); var d=n.n(f); var p=n(0); var m=n.n(p); var g=n(7); var v=n.n(g); var y=(n(161), n(10)); var b=n(1); var w=n(86); var x=n.n(w); function _createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=m()(e); if (t) {
          var a=m()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return d()(this, n);
      };
    } var k=Object(b.b)('error-splash')(r=function(e) {
      h()(ErrorSplashView, e); var t=_createSuper(ErrorSplashView); function ErrorSplashView() {
        var e; i()(this, ErrorSplashView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), v()(u()(e), 'template', x.a), e;
      } return s()(ErrorSplashView, [{key: 'serializeData', value: function() {
        return {cls: this.className, code: this.options.code, message: this.options.message};
      }}]), ErrorSplashView;
    }(y.View))||r; t.a=k;
  }, function(e, t) {
    e.exports=function(e, t) {
      return t||(t=e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}));
    }, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t, n) {
    'use strict'; n.d(t, 'a', (function() {
      return getGlobalSettings;
    })), n.d(t, 'b', (function() {
      return getSettingsForPlugin;
    })), n.d(t, 'c', (function() {
      return getSettingsForTreePlugin;
    })), n.d(t, 'd', (function() {
      return getSettingsForWidgetGridPlugin;
    })); var r=n(2); var a=n.n(r); var i=n(3); var o=n.n(i); var s=n(4); var l=n.n(s); var u=n(5); var c=n.n(u); var h=n(0); var f=n.n(h); function _createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=f()(e); if (t) {
          var a=f()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return c()(this, n);
      };
    } var d=function(e) {
      l()(LocalStorageModel, e); var t=_createSuper(LocalStorageModel); function LocalStorageModel() {
        return a()(this, LocalStorageModel), t.apply(this, arguments);
      } return o()(LocalStorageModel, [{key: 'storageKey', value: function() {
        return 'ALLURE_REPORT_SETTINGS';
      }}, {key: 'fetch', value: function() {
        var e=this; return new Promise((function(t) {
          var n=window.localStorage.getItem(e.storageKey()); n&&e.set(JSON.parse(n)), t();
        }));
      }}, {key: 'save', value: function(e, t) {
        this.set(e, t); var n=this.toJSON(); window.localStorage.setItem(this.storageKey(), JSON.stringify(n));
      }}]), LocalStorageModel;
    }(n(13).Model); var p={language: 'en', sidebarCollapsed: !1, sideBySidePosition: [50, 50]}; var m={visibleStatuses: {failed: !0, broken: !0, skipped: !0, unknown: !0, passed: !0}, visibleMarks: {flaky: !1, newFailed: !1, newPassed: !1, newBroken: !1, retriesStatusChange: !1}, showGroupInfo: !1, treeSorting: {ascending: !0, sorter: 'sorter.name'}}; var g={widgets: [[], []]}; function getGlobalSettings() {
      var e=new(d.extend({defaults: function() {
        return p;
      }, getLanguage: function() {
        return this.get('language');
      }, setLanguage: function(e) {
        return this.save('language', e);
      }, isSidebarCollapsed: function() {
        return this.get('sidebarCollapsed');
      }, setSidebarCollapsed: function(e) {
        return this.save('sidebarCollapsed', e);
      }, getSideBySidePosition: function() {
        return this.get('sideBySidePosition');
      }, setSideBySidePosition: function(e) {
        return this.save('sideBySidePosition', e);
      }})); return e.fetch(), e;
    } function getSettingsForPlugin(e) {
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; var n=d.extend({storageKey: function() {
        return 'ALLURE_REPORT_SETTINGS_'.concat(e.toUpperCase());
      }, defaults: function() {
        return t;
      }}); var r=new n; return r.fetch(), r;
    } function getSettingsForWidgetGridPlugin(e) {
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g; var n=d.extend({storageKey: function() {
        return 'ALLURE_REPORT_SETTINGS_'.concat(e.toUpperCase());
      }, defaults: function() {
        return t;
      }, getWidgetsArrangement: function() {
        return this.get('widgets');
      }, setWidgetsArrangement: function(e) {
        this.save('widgets', e);
      }}); var r=new n; return r.fetch(), r;
    } function getSettingsForTreePlugin(e) {
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m; var n=d.extend({storageKey: function() {
        return 'ALLURE_REPORT_SETTINGS_'.concat(e.toUpperCase());
      }, defaults: function() {
        return t;
      }, getVisibleStatuses: function() {
        return this.get('visibleStatuses');
      }, setVisibleStatuses: function(e) {
        return this.save('visibleStatuses', e);
      }, getVisibleMarks: function() {
        return this.get('visibleMarks');
      }, setVisibleMarks: function(e) {
        return this.save('visibleMarks', e);
      }, getTreeSorting: function() {
        return this.get('treeSorting');
      }, setTreeSorting: function(e) {
        this.save('treeSorting', e);
      }, isShowGroupInfo: function() {
        return this.get('showGroupInfo');
      }, setShowGroupInfo: function(e) {
        this.save('showGroupInfo', e);
      }}); var r=new n; return r.fetch(), r;
    }
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0; var r=['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack']; function Exception(e, t) {
      var n=t&&t.loc; var a=void 0; var i=void 0; var o=void 0; var s=void 0; n&&(a=n.start.line, i=n.end.line, o=n.start.column, s=n.end.column, e+=' - '+a+':'+o); for (var l=Error.prototype.constructor.call(this, e), u=0; u<r.length; u++) this[r[u]]=l[r[u]]; Error.captureStackTrace&&Error.captureStackTrace(this, Exception); try {
        n&&(this.lineNumber=a, this.endLineNumber=i, Object.defineProperty?(Object.defineProperty(this, 'column', {value: o, enumerable: !0}), Object.defineProperty(this, 'endColumn', {value: s, enumerable: !0})):(this.column=o, this.endColumn=s));
      } catch (e) {}
    }Exception.prototype=new Error, t.default=Exception, e.exports=t.default;
  }, function(e, t) {
    function deepFreeze(e) {
      return e instanceof Map?e.clear=e.delete=e.set=function() {
        throw new Error('map is read-only');
      }:e instanceof Set&&(e.add=e.clear=e.delete=function() {
        throw new Error('set is read-only');
      }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((function(t) {
        var n=e[t]; 'object'!=typeof n||Object.isFrozen(n)||deepFreeze(n);
      })), e;
    } var n=deepFreeze; var r=deepFreeze; n.default=r; class a {
      constructor(e) {
        void 0===e.data&&(e.data={}), this.data=e.data, this.isMatchIgnored=!1;
      }ignoreMatch() {
        this.isMatchIgnored=!0;
      }
    } function escapeHTML(e) {
      return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
    } function inherit(e, ...t) {
      const n=Object.create(null); for (const t in e)n[t]=e[t]; return t.forEach((function(e) {
        for (const t in e)n[t]=e[t];
      })), n;
    } const emitsWrappingTags=(e)=>!!e.kind; class i {
      constructor(e, t) {
        this.buffer='', this.classPrefix=t.classPrefix, e.walk(this);
      }addText(e) {
        this.buffer+=escapeHTML(e);
      }openNode(e) {
        if (!emitsWrappingTags(e)) return; let t=e.kind; e.sublanguage||(t=`${this.classPrefix}${t}`), this.span(t);
      }closeNode(e) {
        emitsWrappingTags(e)&&(this.buffer+='</span>');
      }value() {
        return this.buffer;
      }span(e) {
        this.buffer+=`<span class="${e}">`;
      }
    } class o {
      constructor() {
        this.rootNode={children: []}, this.stack=[this.rootNode];
      } get top() {
        return this.stack[this.stack.length-1];
      } get root() {
        return this.rootNode;
      }add(e) {
        this.top.children.push(e);
      }openNode(e) {
        const t={kind: e, children: []}; this.add(t), this.stack.push(t);
      }closeNode() {
        if (this.stack.length>1) return this.stack.pop();
      }closeAllNodes() {
        for (;this.closeNode(););
      }toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
      }walk(e) {
        return this.constructor._walk(e, this.rootNode);
      } static _walk(e, t) {
        return 'string'==typeof t?e.addText(t):t.children&&(e.openNode(t), t.children.forEach((t)=>this._walk(e, t)), e.closeNode(t)), e;
      } static _collapse(e) {
        'string'!=typeof e&&e.children&&(e.children.every((e)=>'string'==typeof e)?e.children=[e.children.join('')]:e.children.forEach((e)=>{
          o._collapse(e);
        }));
      }
    } class s extends o {
      constructor(e) {
        super(), this.options=e;
      }addKeyword(e, t) {
        ''!==e&&(this.openNode(t), this.addText(e), this.closeNode());
      }addText(e) {
        ''!==e&&this.add(e);
      }addSublanguage(e, t) {
        const n=e.root; n.kind=t, n.sublanguage=!0, this.add(n);
      }toHTML() {
        return new i(this, this.options).value();
      }finalize() {
        return !0;
      }
    } function source(e) {
      return e?'string'==typeof e?e:e.source:null;
    } const l=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./; const u='(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; const c={begin: '\\\\[\\s\\S]', relevance: 0}; const h={className: 'string', begin: '\'', end: '\'', illegal: '\\n', contains: [c]}; const f={className: 'string', begin: '"', end: '"', illegal: '\\n', contains: [c]}; const d={begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/}; const COMMENT=function(e, t, n={}) {
      const r=inherit({className: 'comment', begin: e, end: t, contains: []}, n); return r.contains.push(d), r.contains.push({className: 'doctag', begin: '(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):', relevance: 0}), r;
    }; const p=COMMENT('//', '$'); const m=COMMENT('/\\*', '\\*/'); const g=COMMENT('#', '$'); const v={className: 'number', begin: '\\b\\d+(\\.\\d+)?', relevance: 0}; const y={className: 'number', begin: u, relevance: 0}; const b={className: 'number', begin: '\\b(0b[01]+)', relevance: 0}; const w={className: 'number', begin: '\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?', relevance: 0}; const x={begin: /(?=\/[^/\n]*\/)/, contains: [{className: 'regexp', begin: /\//, end: /\/[gimuy]*/, illegal: /\n/, contains: [c, {begin: /\[/, end: /\]/, relevance: 0, contains: [c]}]}]}; const k={className: 'title', begin: '[a-zA-Z]\\w*', relevance: 0}; const C={className: 'title', begin: '[a-zA-Z_]\\w*', relevance: 0}; const S={begin: '\\.\\s*[a-zA-Z_]\\w*', relevance: 0}; var O=Object.freeze({__proto__: null, MATCH_NOTHING_RE: /\b\B/, IDENT_RE: '[a-zA-Z]\\w*', UNDERSCORE_IDENT_RE: '[a-zA-Z_]\\w*', NUMBER_RE: '\\b\\d+(\\.\\d+)?', C_NUMBER_RE: u, BINARY_NUMBER_RE: '\\b(0b[01]+)', RE_STARTERS_RE: '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~', SHEBANG: (e={})=>{
      const t=/^#![ ]*\//; return e.binary&&(e.begin=function(...e) {
        return e.map((e)=>source(e)).join('');
      }(t, /.*\b/, e.binary, /\b.*/)), inherit({'className': 'meta', 'begin': t, 'end': /$/, 'relevance': 0, 'on:begin': (e, t)=>{
        0!==e.index&&t.ignoreMatch();
      }}, e);
    }, BACKSLASH_ESCAPE: c, APOS_STRING_MODE: h, QUOTE_STRING_MODE: f, PHRASAL_WORDS_MODE: d, COMMENT: COMMENT, C_LINE_COMMENT_MODE: p, C_BLOCK_COMMENT_MODE: m, HASH_COMMENT_MODE: g, NUMBER_MODE: v, C_NUMBER_MODE: y, BINARY_NUMBER_MODE: b, CSS_NUMBER_MODE: w, REGEXP_MODE: x, TITLE_MODE: k, UNDERSCORE_TITLE_MODE: C, METHOD_GUARD: S, END_SAME_AS_BEGIN: function(e) {
      return Object.assign(e, {'on:begin': (e, t)=>{
        t.data._beginMatch=e[1];
      }, 'on:end': (e, t)=>{
        t.data._beginMatch!==e[1]&&t.ignoreMatch();
      }});
    }}); function skipIfhasPrecedingDot(e, t) {
      '.'===e.input[e.index-1]&&t.ignoreMatch();
    } function beginKeywords(e, t) {
      t&&e.beginKeywords&&(e.begin='\\b('+e.beginKeywords.split(' ').join('|')+')(?!\\.)(?=\\b|\\s)', e.__beforeBegin=skipIfhasPrecedingDot, e.keywords=e.keywords||e.beginKeywords, delete e.beginKeywords, void 0===e.relevance&&(e.relevance=0));
    } function compileIllegal(e, t) {
      Array.isArray(e.illegal)&&(e.illegal=function(...e) {
        return '('+e.map((e)=>source(e)).join('|')+')';
      }(...e.illegal));
    } function compileMatch(e, t) {
      if (e.match) {
        if (e.begin||e.end) throw new Error('begin & end are not supported with match'); e.begin=e.match, delete e.match;
      }
    } function compileRelevance(e, t) {
      void 0===e.relevance&&(e.relevance=1);
    } const T=['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value']; function scoreForKeyword(e, t) {
      return t?Number(t):function(e) {
        return T.includes(e.toLowerCase());
      }(e)?0:1;
    } function compileLanguage(e, {plugins: t}) {
      function langRe(t, n) {
        return new RegExp(source(t), 'm'+(e.case_insensitive?'i':'')+(n?'g':''));
      } class n {
        constructor() {
          this.matchIndexes={}, this.regexes=[], this.matchAt=1, this.position=0;
        }addRule(e, t) {
          t.position=this.position++, this.matchIndexes[this.matchAt]=t, this.regexes.push([t, e]), this.matchAt+=function(e) {
            return new RegExp(e.toString()+'|').exec('').length-1;
          }(e)+1;
        }compile() {
          0===this.regexes.length&&(this.exec=()=>null); const e=this.regexes.map((e)=>e[1]); this.matcherRe=langRe(function(e, t='|') {
            let n=0; return e.map((e)=>{
              n+=1; const t=n; let r=source(e); let a=''; for (;r.length>0;) {
                const e=l.exec(r); if (!e) {
                  a+=r; break;
                }a+=r.substring(0, e.index), r=r.substring(e.index+e[0].length), '\\'===e[0][0]&&e[1]?a+='\\'+String(Number(e[1])+t):(a+=e[0], '('===e[0]&&n++);
              } return a;
            }).map((e)=>`(${e})`).join(t);
          }(e), !0), this.lastIndex=0;
        }exec(e) {
          this.matcherRe.lastIndex=this.lastIndex; const t=this.matcherRe.exec(e); if (!t) return null; const n=t.findIndex((e, t)=>t>0&&void 0!==e); const r=this.matchIndexes[n]; return t.splice(0, n), Object.assign(t, r);
        }
      } class r {
        constructor() {
          this.rules=[], this.multiRegexes=[], this.count=0, this.lastIndex=0, this.regexIndex=0;
        }getMatcher(e) {
          if (this.multiRegexes[e]) return this.multiRegexes[e]; const t=new n; return this.rules.slice(e).forEach(([e, n])=>t.addRule(e, n)), t.compile(), this.multiRegexes[e]=t, t;
        }resumingScanAtSamePosition() {
          return 0!==this.regexIndex;
        }considerAll() {
          this.regexIndex=0;
        }addRule(e, t) {
          this.rules.push([e, t]), 'begin'===t.type&&this.count++;
        }exec(e) {
          const t=this.getMatcher(this.regexIndex); t.lastIndex=this.lastIndex; let n=t.exec(e); if (this.resumingScanAtSamePosition()) {
            if (n&&n.index===this.lastIndex);else {
              const t=this.getMatcher(0); t.lastIndex=this.lastIndex+1, n=t.exec(e);
            }
          } return n&&(this.regexIndex+=n.position+1, this.regexIndex===this.count&&this.considerAll()), n;
        }
      } if (e.compilerExtensions||(e.compilerExtensions=[]), e.contains&&e.contains.includes('self')) throw new Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.'); return e.classNameAliases=inherit(e.classNameAliases||{}), function compileMode(t, n) {
        const a=t; if (t.isCompiled) return a; [compileMatch].forEach((e)=>e(t, n)), e.compilerExtensions.forEach((e)=>e(t, n)), t.__beforeBegin=null, [beginKeywords, compileIllegal, compileRelevance].forEach((e)=>e(t, n)), t.isCompiled=!0; let i=null; if ('object'==typeof t.keywords&&(i=t.keywords.$pattern, delete t.keywords.$pattern), t.keywords&&(t.keywords=function compileKeywords(e, t, n='keyword') {
          const r={}; return 'string'==typeof e?compileList(n, e.split(' ')):Array.isArray(e)?compileList(n, e):Object.keys(e).forEach((function(n) {
            Object.assign(r, compileKeywords(e[n], t, n));
          })), r; function compileList(e, n) {
            t&&(n=n.map((e)=>e.toLowerCase())), n.forEach((function(t) {
              const n=t.split('|'); r[n[0]]=[e, scoreForKeyword(n[0], n[1])];
            }));
          }
        }(t.keywords, e.case_insensitive)), t.lexemes&&i) throw new Error('ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) '); return i=i||t.lexemes||/\w+/, a.keywordPatternRe=langRe(i, !0), n&&(t.begin||(t.begin=/\B|\b/), a.beginRe=langRe(t.begin), t.endSameAsBegin&&(t.end=t.begin), t.end||t.endsWithParent||(t.end=/\B|\b/), t.end&&(a.endRe=langRe(t.end)), a.terminatorEnd=source(t.end)||'', t.endsWithParent&&n.terminatorEnd&&(a.terminatorEnd+=(t.end?'|':'')+n.terminatorEnd)), t.illegal&&(a.illegalRe=langRe(t.illegal)), t.contains||(t.contains=[]), t.contains=[].concat(...t.contains.map((function(e) {
          return function(e) {
            e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t) {
              return inherit(e, {variants: null}, t);
            }))); if (e.cachedVariants) return e.cachedVariants; if (function dependencyOnParent(e) {
              return !!e&&(e.endsWithParent||dependencyOnParent(e.starts));
            }(e)) return inherit(e, {starts: e.starts?inherit(e.starts):null}); if (Object.isFrozen(e)) return inherit(e); return e;
          }('self'===e?t:e);
        }))), t.contains.forEach((function(e) {
          compileMode(e, a);
        })), t.starts&&compileMode(t.starts, n), a.matcher=function(e) {
          const t=new r; return e.contains.forEach((e)=>t.addRule(e.begin, {rule: e, type: 'begin'})), e.terminatorEnd&&t.addRule(e.terminatorEnd, {type: 'end'}), e.illegal&&t.addRule(e.illegal, {type: 'illegal'}), t;
        }(a), a;
      }(e);
    } function BuildVuePlugin(e) {
      const t={props: ['language', 'code', 'autodetect'], data: function() {
        return {detectedLanguage: '', unknownLanguage: !1};
      }, computed: {className() {
        return this.unknownLanguage?'':'hljs '+this.detectedLanguage;
      }, highlighted() {
        if (!this.autoDetect&&!e.getLanguage(this.language)) return console.warn(`The language "${this.language}" you specified could not be found.`), this.unknownLanguage=!0, escapeHTML(this.code); let t={}; return this.autoDetect?(t=e.highlightAuto(this.code), this.detectedLanguage=t.language):(t=e.highlight(this.language, this.code, this.ignoreIllegals), this.detectedLanguage=this.language), t.value;
      }, autoDetect() {
        return !this.language||(e=this.autodetect, Boolean(e||''===e)); var e;
      }, ignoreIllegals: ()=>!0}, render(e) {
        return e('pre', {}, [e('code', {class: this.className, domProps: {innerHTML: this.highlighted}})]);
      }}; return {Component: t, VuePlugin: {install(e) {
        e.component('highlightjs', t);
      }}};
    } const E={'after:highlightElement': ({el: e, result: t, text: n})=>{
      const r=nodeStream(e); if (!r.length) return; const a=document.createElement('div'); a.innerHTML=t.value, t.value=function(e, t, n) {
        let r=0; let a=''; const i=[]; function selectStream() {
          return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:'start'===t[0].event?e:t:e.length?e:t;
        } function open(e) {
          a+='<'+tag(e)+[].map.call(e.attributes, (function(e) {
            return ' '+e.nodeName+'="'+escapeHTML(e.value)+'"';
          })).join('')+'>';
        } function close(e) {
          a+='</'+tag(e)+'>';
        } function render(e) {
          ('start'===e.event?open:close)(e.node);
        } for (;e.length||t.length;) {
          let t=selectStream(); if (a+=escapeHTML(n.substring(r, t[0].offset)), r=t[0].offset, t===e) {
            i.reverse().forEach(close); do {
              render(t.splice(0, 1)[0]), t=selectStream();
            } while (t===e&&t.length&&t[0].offset===r); i.reverse().forEach(open);
          } else 'start'===t[0].event?i.push(t[0].node):i.pop(), render(t.splice(0, 1)[0]);
        } return a+escapeHTML(n.substr(r));
      }(r, nodeStream(a), n);
    }}; function tag(e) {
      return e.nodeName.toLowerCase();
    } function nodeStream(e) {
      const t=[]; return function _nodeStream(e, n) {
        for (let r=e.firstChild; r; r=r.nextSibling)3===r.nodeType?n+=r.nodeValue.length:1===r.nodeType&&(t.push({event: 'start', offset: n, node: r}), n=_nodeStream(r, n), tag(r).match(/br|hr|img|input/)||t.push({event: 'stop', offset: n, node: r})); return n;
      }(e, 0), t;
    } const R={}; const error=(e)=>{
      console.error(e);
    }; const warn=(e, ...t)=>{
      console.log('WARN: '+e, ...t);
    }; const deprecated=(e, t)=>{
      R[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`), R[`${e}/${t}`]=!0);
    }; const P=escapeHTML; const M=inherit; const A=Symbol('nomatch'); var j=function(e) {
      const t=Object.create(null); const r=Object.create(null); const i=[]; let o=!0; const l=/(^(<[^>]+>|\t|)+|\n)/gm; const u='Could not find the language \'{}\', did you forget to load/include a language module?'; const c={disableAutodetect: !0, name: 'Plain text', contains: []}; let h={noHighlightRe: /^(no-?highlight)$/i, languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i, classPrefix: 'hljs-', tabReplace: null, useBR: !1, languages: null, __emitter: s}; function shouldNotHighlight(e) {
        return h.noHighlightRe.test(e);
      } function highlight(e, t, n, r) {
        let a=''; let i=''; 'object'==typeof t?(a=e, n=t.ignoreIllegals, i=t.language, r=void 0):(deprecated('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'), deprecated('10.7.0', 'Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277'), i=e, a=t); const o={code: a, language: i}; fire('before:highlight', o); const s=o.result?o.result:_highlight(o.language, o.code, n, r); return s.code=o.code, fire('after:highlight', s), s;
      } function _highlight(e, n, r, s) {
        function keywordData(e, t) {
          const n=c.case_insensitive?t[0].toLowerCase():t[0]; return Object.prototype.hasOwnProperty.call(e.keywords, n)&&e.keywords[n];
        } function processBuffer() {
null!=p.subLanguage?function() {
  if (''===v) return; let e=null; if ('string'==typeof p.subLanguage) {
    if (!t[p.subLanguage]) return void g.addText(v); e=_highlight(p.subLanguage, v, !0, m[p.subLanguage]), m[p.subLanguage]=e.top;
  } else e=highlightAuto(v, p.subLanguage.length?p.subLanguage:null); p.relevance>0&&(y+=e.relevance), g.addSublanguage(e.emitter, e.language);
}():function() {
  if (!p.keywords) return void g.addText(v); let e=0; p.keywordPatternRe.lastIndex=0; let t=p.keywordPatternRe.exec(v); let n=''; for (;t;) {
    n+=v.substring(e, t.index); const r=keywordData(p, t); if (r) {
      const [e, a]=r; if (g.addText(n), n='', y+=a, e.startsWith('_'))n+=t[0]; else {
        const n=c.classNameAliases[e]||e; g.addKeyword(t[0], n);
      }
    } else n+=t[0]; e=p.keywordPatternRe.lastIndex, t=p.keywordPatternRe.exec(v);
  }n+=v.substr(e), g.addText(n);
}(), v='';
        } function startNewMode(e) {
          return e.className&&g.openNode(c.classNameAliases[e.className]||e.className), p=Object.create(e, {parent: {value: p}}), p;
        } function doIgnore(e) {
          return 0===p.matcher.regexIndex?(v+=e[0], 1):(x=!0, 0);
        } function doBeginMatch(e) {
          const t=e[0]; const n=e.rule; const r=new a(n); const i=[n.__beforeBegin, n['on:begin']]; for (const n of i) if (n&&(n(e, r), r.isMatchIgnored)) return doIgnore(t); return n&&n.endSameAsBegin&&(n.endRe=new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm')), n.skip?v+=t:(n.excludeBegin&&(v+=t), processBuffer(), n.returnBegin||n.excludeBegin||(v=t)), startNewMode(n), n.returnBegin?0:t.length;
        } function doEndMatch(e) {
          const t=e[0]; const r=n.substr(e.index); const i=function endOfMode(e, t, n) {
            let r=function(e, t) {
              const n=e&&e.exec(t); return n&&0===n.index;
            }(e.endRe, n); if (r) {
              if (e['on:end']) {
                const n=new a(e); e['on:end'](t, n), n.isMatchIgnored&&(r=!1);
              } if (r) {
                for (;e.endsParent&&e.parent;)e=e.parent; return e;
              }
            } if (e.endsWithParent) return endOfMode(e.parent, t, n);
          }(p, e, r); if (!i) return A; const o=p; o.skip?v+=t:(o.returnEnd||o.excludeEnd||(v+=t), processBuffer(), o.excludeEnd&&(v=t)); do {
            p.className&&g.closeNode(), p.skip||p.subLanguage||(y+=p.relevance), p=p.parent;
          } while (p!==i.parent); return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe), startNewMode(i.starts)), o.returnEnd?0:t.length;
        } let l={}; function processLexeme(t, a) {
          const i=a&&a[0]; if (v+=t, null==i) return processBuffer(), 0; if ('begin'===l.type&&'end'===a.type&&l.index===a.index&&''===i) {
            if (v+=n.slice(a.index, a.index+1), !o) {
              const t=new Error('0 width match regex'); throw t.languageName=e, t.badRule=l.rule, t;
            } return 1;
          } if (l=a, 'begin'===a.type) return doBeginMatch(a); if ('illegal'===a.type&&!r) {
            const e=new Error('Illegal lexeme "'+i+'" for mode "'+(p.className||'<unnamed>')+'"'); throw e.mode=p, e;
          } if ('end'===a.type) {
            const e=doEndMatch(a); if (e!==A) return e;
          } if ('illegal'===a.type&&''===i) return 1; if (w>1e5&&w>3*a.index) {
            throw new Error('potential infinite loop, way more iterations than matches');
          } return v+=i, i.length;
        } const c=getLanguage(e); if (!c) throw error(u.replace('{}', e)), new Error('Unknown language: "'+e+'"'); const f=compileLanguage(c, {plugins: i}); let d=''; let p=s||f; const m={}; const g=new h.__emitter(h); !function() {
          const e=[]; for (let t=p; t!==c; t=t.parent)t.className&&e.unshift(t.className); e.forEach((e)=>g.openNode(e));
        }(); let v=''; let y=0; let b=0; let w=0; let x=!1; try {
          for (p.matcher.considerAll(); ;) {
            w++, x?x=!1:p.matcher.considerAll(), p.matcher.lastIndex=b; const e=p.matcher.exec(n); if (!e) break; const t=processLexeme(n.substring(b, e.index), e); b=e.index+t;
          } return processLexeme(n.substr(b)), g.closeAllNodes(), g.finalize(), d=g.toHTML(), {relevance: Math.floor(y), value: d, language: e, illegal: !1, emitter: g, top: p};
        } catch (t) {
          if (t.message&&t.message.includes('Illegal')) return {illegal: !0, illegalBy: {msg: t.message, context: n.slice(b-100, b+100), mode: t.mode}, sofar: d, relevance: 0, value: P(n), emitter: g}; if (o) return {illegal: !1, relevance: 0, value: P(n), emitter: g, language: e, top: p, errorRaised: t}; throw t;
        }
      } function highlightAuto(e, n) {
        n=n||h.languages||Object.keys(t); const r=function(e) {
          const t={relevance: 0, emitter: new h.__emitter(h), value: P(e), illegal: !1, top: c}; return t.emitter.addText(e), t;
        }(e); const a=n.filter(getLanguage).filter(autoDetection).map((t)=>_highlight(t, e, !1)); a.unshift(r); const i=a.sort((e, t)=>{
          if (e.relevance!==t.relevance) return t.relevance-e.relevance; if (e.language&&t.language) {
            if (getLanguage(e.language).supersetOf===t.language) return 1; if (getLanguage(t.language).supersetOf===e.language) return -1;
          } return 0;
        }); const [o, s]=i; const l=o; return l.second_best=s, l;
      } const f={'before:highlightElement': ({el: e})=>{
        h.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g, '').replace(/<br[ /]*>/g, '\n'));
      }, 'after:highlightElement': ({result: e})=>{
        h.useBR&&(e.value=e.value.replace(/\n/g, '<br>'));
      }}; const d=/^(<[^>]+>|\t)+/gm; const p={'after:highlightElement': ({result: e})=>{
        h.tabReplace&&(e.value=e.value.replace(d, (e)=>e.replace(/\t/g, h.tabReplace)));
      }}; function highlightElement(e) {
        let t=null; const n=function(e) {
          let t=e.className+' '; t+=e.parentNode?e.parentNode.className:''; const n=h.languageDetectRe.exec(t); if (n) {
            const t=getLanguage(n[1]); return t||(warn(u.replace('{}', n[1])), warn('Falling back to no-highlight mode for this block.', e)), t?n[1]:'no-highlight';
          } return t.split(/\s+/).find((e)=>shouldNotHighlight(e)||getLanguage(e));
        }(e); if (shouldNotHighlight(n)) return; fire('before:highlightElement', {el: e, language: n}), t=e; const a=t.textContent; const i=n?highlight(a, {language: n, ignoreIllegals: !0}):highlightAuto(a); fire('after:highlightElement', {el: e, result: i, text: a}), e.innerHTML=i.value, function(e, t, n) {
          const a=t?r[t]:n; e.classList.add('hljs'), a&&e.classList.add(a);
        }(e, n, i.language), e.result={language: i.language, re: i.relevance, relavance: i.relevance}, i.second_best&&(e.second_best={language: i.second_best.language, re: i.second_best.relevance, relavance: i.second_best.relevance});
      } const initHighlighting=()=>{
        if (initHighlighting.called) return; initHighlighting.called=!0, deprecated('10.6.0', 'initHighlighting() is deprecated.  Use highlightAll() instead.'); document.querySelectorAll('pre code').forEach(highlightElement);
      }; let m=!1; function highlightAll() {
        if ('loading'===document.readyState) return void(m=!0); document.querySelectorAll('pre code').forEach(highlightElement);
      } function getLanguage(e) {
        return e=(e||'').toLowerCase(), t[e]||t[r[e]];
      } function registerAliases(e, {languageName: t}) {
        'string'==typeof e&&(e=[e]), e.forEach((e)=>{
          r[e.toLowerCase()]=t;
        });
      } function autoDetection(e) {
        const t=getLanguage(e); return t&&!t.disableAutodetect;
      } function fire(e, t) {
        const n=e; i.forEach((function(e) {
          e[n]&&e[n](t);
        }));
      }'undefined'!=typeof window&&window.addEventListener&&window.addEventListener('DOMContentLoaded', (function() {
        m&&highlightAll();
      }), !1), Object.assign(e, {highlight: highlight, highlightAuto: highlightAuto, highlightAll: highlightAll, fixMarkup: function(e) {
        return deprecated('10.2.0', 'fixMarkup will be removed entirely in v11.0'), deprecated('10.2.0', 'Please see https://github.com/highlightjs/highlight.js/issues/2534'), t=e, h.tabReplace||h.useBR?t.replace(l, (e)=>'\n'===e?h.useBR?'<br>':e:h.tabReplace?e.replace(/\t/g, h.tabReplace):e):t; var t;
      }, highlightElement: highlightElement, highlightBlock: function(e) {
        return deprecated('10.7.0', 'highlightBlock will be removed entirely in v12.0'), deprecated('10.7.0', 'Please use highlightElement now.'), highlightElement(e);
      }, configure: function(e) {
        e.useBR&&(deprecated('10.3.0', '\'useBR\' will be removed entirely in v11.0'), deprecated('10.3.0', 'Please see https://github.com/highlightjs/highlight.js/issues/2559')), h=M(h, e);
      }, initHighlighting: initHighlighting, initHighlightingOnLoad: function() {
        deprecated('10.6.0', 'initHighlightingOnLoad() is deprecated.  Use highlightAll() instead.'), m=!0;
      }, registerLanguage: function(n, r) {
        let a=null; try {
          a=r(e);
        } catch (e) {
          if (error('Language definition for \'{}\' could not be registered.'.replace('{}', n)), !o) throw e; error(e), a=c;
        }a.name||(a.name=n), t[n]=a, a.rawDefinition=r.bind(null, e), a.aliases&&registerAliases(a.aliases, {languageName: n});
      }, unregisterLanguage: function(e) {
        delete t[e]; for (const t of Object.keys(r))r[t]===e&&delete r[t];
      }, listLanguages: function() {
        return Object.keys(t);
      }, getLanguage: getLanguage, registerAliases: registerAliases, requireLanguage: function(e) {
        deprecated('10.4.0', 'requireLanguage will be removed entirely in v11.'), deprecated('10.4.0', 'Please see https://github.com/highlightjs/highlight.js/pull/2844'); const t=getLanguage(e); if (t) return t; throw new Error('The \'{}\' language is required, but not loaded.'.replace('{}', e));
      }, autoDetection: autoDetection, inherit: M, addPlugin: function(e) {
        !function(e) {
          e['before:highlightBlock']&&!e['before:highlightElement']&&(e['before:highlightElement']=(t)=>{
            e['before:highlightBlock'](Object.assign({block: t.el}, t));
          }), e['after:highlightBlock']&&!e['after:highlightElement']&&(e['after:highlightElement']=(t)=>{
            e['after:highlightBlock'](Object.assign({block: t.el}, t));
          });
        }(e), i.push(e);
      }, vuePlugin: BuildVuePlugin(e).VuePlugin}), e.debugMode=function() {
        o=!1;
      }, e.safeMode=function() {
        o=!0;
      }, e.versionString='10.7.3'; for (const e in O)'object'==typeof O[e]&&n(O[e]); return Object.assign(e, O), e.addPlugin(f), e.addPlugin(E), e.addPlugin(p), e;
    }({}); e.exports=j;
  }, function(e, t, n) {
    'use strict'; n.r(t); var r=n(21); t.default=function(e) {
      return e?(e instanceof Date||(e=new Date(e)), new Intl.DateTimeFormat(r.c.language).format(e)):'unknown';
    };
  }, function(e, t, n) {
    'use strict'; var r; var a=n(3); var i=n.n(a); var o=n(2); var s=n.n(o); var l=n(4); var u=n.n(l); var c=n(5); var h=n.n(c); var f=n(0); var d=n.n(f); var p=(n(172), n(1)); var m=n(25); function _createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=d()(e); if (t) {
          var a=d()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return h()(this, n);
      };
    } var g=Object(p.b)('popover')(r=function(e) {
      u()(PopoverView, e); var t=_createSuper(PopoverView); function PopoverView() {
        return s()(this, PopoverView), t.apply(this, arguments);
      } return i()(PopoverView);
    }(m.a))||r; t.a=g;
  },, function(e, t) {
    var n; n=function() {
      return this;
    }(); try {
      n=n||new Function('return this')();
    } catch (e) {
      'object'==typeof window&&(n=window);
    }e.exports=n;
  }, function(e, t, n) {
    var r=n(178); var a=n(179); e.exports=function(e, t, n, i) {
      e=r(e), t=~~t; var o=0; switch (n?n.length>1&&(n=n.charAt(0)):n=' ', i) {
        case 'right': return o=t-e.length, e+a(n, o); case 'both': return o=t-e.length, a(n, Math.ceil(o/2))+e+a(n, Math.floor(o/2)); default: return o=t-e.length, a(n, o)+e;
      }
    };
  }, function(e, t, n) {
    'use strict'; n.d(t, 'c', (function() {
      return showView;
    })), n.d(t, 'b', (function() {
      return app_notFound;
    })), n.d(t, 'a', (function() {
      return W;
    })); var r={}; n.r(r), n.d(r, 'LoadBehavior', (function() {
      return A;
    })), n.d(r, 'TooltipBehavior', (function() {
      return N;
    })), n.d(r, 'ClipboardBehavior', (function() {
      return E;
    })); n(140), n(141); var a; var i; var o; var s; var l=n(13); var u=n(10); var c=n(2); var h=n.n(c); var f=n(3); var d=n.n(f); var p=n(4); var m=n.n(p); var g=n(5); var v=n.n(g); var y=n(0); var b=n.n(y); var w=n(12); var x=n.n(w); var k=n(25); var C=n(1); var S=n(8); var O=n(85); var T=n.n(O); function _createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var E=(a=Object(C.c)('mouseenter [data-copy]'), i=Object(C.c)('mouseleave [data-copy]'), o=Object(C.c)('click [data-copy]'), s=function(e) {
      m()(ClipboardBehavior, e); var t=_createSuper(ClipboardBehavior); function ClipboardBehavior() {
        return h()(this, ClipboardBehavior), t.apply(this, arguments);
      } return d()(ClipboardBehavior, [{key: 'initialize', value: function() {
        this.tooltip=new k.a({position: 'left'});
      }}, {key: 'onTipHover', value: function(e) {
        var t=this.$(e.currentTarget); this.tooltip.show(Object(S.default)('controls.clipboard'), t);
      }}, {key: 'onTipLeave', value: function() {
        this.tooltip.hide();
      }}, {key: 'onCopyableClick', value: function(e) {
        var t=this.$(e.currentTarget); T()(t.data('copy'))?this.tooltip.show(Object(S.default)('controls.clipboardSuccess'), t):this.tooltip.show(Object(S.default)('controls.clipboardError'), t);
      }}]), ClipboardBehavior;
    }(u.Behavior), x()(s.prototype, 'onTipHover', [a], Object.getOwnPropertyDescriptor(s.prototype, 'onTipHover'), s.prototype), x()(s.prototype, 'onTipLeave', [i], Object.getOwnPropertyDescriptor(s.prototype, 'onTipLeave'), s.prototype), x()(s.prototype, 'onCopyableClick', [o], Object.getOwnPropertyDescriptor(s.prototype, 'onCopyableClick'), s.prototype), s); function LoadBehavior_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var R; var P; var M; var A=function(e) {
      m()(LoadBehavior, e); var t=LoadBehavior_createSuper(LoadBehavior); function LoadBehavior() {
        return h()(this, LoadBehavior), t.apply(this, arguments);
      } return d()(LoadBehavior, [{key: 'initialize', value: function() {
        var e=this; var t=this.view.render.bind(this.view); this.loaded=!1, this.view.render=function() {
e.loaded?t():e.view.loadData().then((function() {
  e.loaded=!0, t();
}));
        };
      }}]), LoadBehavior;
    }(u.Behavior); var j=n(18); function TooltipBehavior_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var N=(R=Object(C.c)('mouseenter [data-tooltip]'), P=Object(C.c)('mouseleave [data-tooltip]'), M=function(e) {
      m()(TooltipBehavior, e); var t=TooltipBehavior_createSuper(TooltipBehavior); function TooltipBehavior() {
        return h()(this, TooltipBehavior), t.apply(this, arguments);
      } return d()(TooltipBehavior, [{key: 'initialize', value: function() {
        this.tooltip=new k.a(this.options);
      }}, {key: 'onDestroy', value: function() {
        this.tooltip.hide();
      }}, {key: 'onTipHover', value: function(e) {
        var t=this.$(e.currentTarget); this.tooltip.show(Object(j.escapeExpression)(t.data('tooltip')), t);
      }}, {key: 'onTipLeave', value: function() {
        this.tooltip.hide();
      }}]), TooltipBehavior;
    }(u.Behavior), x()(M.prototype, 'onTipHover', [R], Object.getOwnPropertyDescriptor(M.prototype, 'onTipHover'), M.prototype), x()(M.prototype, 'onTipLeave', [P], Object.getOwnPropertyDescriptor(M.prototype, 'onTipLeave'), M.prototype), M); var D=n(33); var V=n(26); function ErrorLayout_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var L=function(e) {
      m()(ErrorLayout, e); var t=ErrorLayout_createSuper(ErrorLayout); function ErrorLayout() {
        return h()(this, ErrorLayout), t.apply(this, arguments);
      } return d()(ErrorLayout, [{key: 'getContentView', value: function() {
        var e=this.options; var t=e.code; var n=e.message; return new D.a({code: t, message: n});
      }}]), ErrorLayout;
    }(V.a); var B=n(17); var I=n.n(B); var z=n(47); var F=n(46); var U=n(16); function TestResultLayout_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var H=function(e) {
      m()(TestResultLayout, e); var t=TestResultLayout_createSuper(TestResultLayout); function TestResultLayout() {
        return h()(this, TestResultLayout), t.apply(this, arguments);
      } return d()(TestResultLayout, [{key: 'initialize', value: function(e) {
        var t=e.uid; I()(b()(TestResultLayout.prototype), 'initialize', this).call(this), this.uid=t, this.model=new F.a({uid: t}), this.routeState=new l.Model;
      }}, {key: 'loadData', value: function() {
        return this.model.fetch();
      }}, {key: 'getContentView', value: function() {
        var e='#testresult/'.concat(this.uid); return new z.a({baseUrl: e, model: this.model, routeState: this.routeState});
      }}, {key: 'onViewReady', value: function() {
        var e=this.options; var t=e.uid; var n=e.tabName; this.onRouteUpdate(t, n);
      }}, {key: 'onRouteUpdate', value: function(e, t) {
        this.routeState.set('testResultTab', t); var n=U.a.getUrlParams().attachment; n?this.routeState.set('attachment', n):this.routeState.unset('attachment');
      }}, {key: 'shouldKeepState', value: function(e) {
        return this.uid===e;
      }}]), TestResultLayout;
    }(V.a); var q=n(21); 'function'==typeof window.requestAnimationFrame&&(window.requestAnimationFrame=window.requestAnimationFrame.bind(window)), u.Behaviors.behaviorsLookup=r; var rootPath=function(e) {
      return e.split('/')[0];
    }; var app_noTabChange=function() {
      return rootPath(U.a.getCurrentUrl())===rootPath(U.a.currentUrl);
    }; var showView=function(e) {
      return function() {
        var t=W.getView(); t&&app_noTabChange()&&t.shouldKeepState.apply(t, arguments)?t.onRouteUpdate.apply(t, arguments):W.showView(e.apply(void 0, arguments));
      };
    }; var app_notFound=function() {
      return new L({code: 404, message: Object(S.default)('errors.notFound')});
    }; var W=new u.Application({region: '#content'}); W.on('start', (function() {
      Object(q.d)().then((function() {
        l.history.start(), document.dir=q.c.dir(), q.c.on('languageChanged', (function() {
          W.getRegion().reset(), U.a.reload(), document.dir=q.c.dir();
        }));
      })), U.a.on('route:notFound', showView(app_notFound)), U.a.on('route:testresultPage', showView((function(e, t) {
        return new H({uid: e, tabName: t});
      })));
    }));
  }, function(e, t, n) {
    var r=n(214); var a=n(215); var i=n(82); var o=n(216); e.exports=function(e) {
      return r(e)||a(e)||i(e)||o();
    }, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t, n) {
    !function(t, n) {
      'use strict'; e.exports=function() {
        function BemFormatter(e) {
          if (!(this instanceof BemFormatter)) return createBemFormatter(e); e=e||{}, this.tailSpace=e.tailSpace||'', this.elementSeparator=e.elementSeparator||'__', this.modSeparator=e.modSeparator||'_', this.modValueSeparator=e.modValueSeparator||'_', this.classSeparator=e.classSeparator||' ', this.isFullModifier=void 0===e.isFullModifier||e.isFullModifier, this.isFullBoolValue=void 0!==e.isFullBoolValue&&e.isFullBoolValue;
        } function withMixin(e, t, n) {
          return this.bind.apply(this, [null].concat(Array.prototype.slice.call(arguments)));
        } function createBemFormatter(e) {
          var t=new BemFormatter(e); var n=t.stringify.bind(t); return n.with=n.lock=withMixin, n;
        }BemFormatter.prototype={_stringifyModifier: function(e, t, n) {
          var r=''; return void 0===n?r:this.isFullBoolValue||!1!==n?(r+=this.classSeparator+e+this.modSeparator+t, (this.isFullBoolValue||!0!==n)&&(r+=this.modValueSeparator+String(n)), r):r;
        }, _stringifyModifiers: function(e, t) {
          var n=''; for (var r in this.isFullModifier||(e=''), t)t.hasOwnProperty(r)&&(n+=this._stringifyModifier(e, r, t[r])); return n;
        }, stringify: function(e, t, n) {
          var r=String(e); return t&&'object'==typeof t&&void 0===n&&(n=t, t=null), t&&(r+=this.elementSeparator+String(t)), n&&(r+=this._stringifyModifiers(r, n)), r+this.tailSpace;
        }}; var e=createBemFormatter(); return e.B=BemFormatter, e;
      }();
    }();
  }, function(e, t, n) {
    'use strict'; n.d(t, 'a', (function() {
      return g;
    })); var r=n(2); var a=n.n(r); var i=n(3); var o=n.n(i); var s=n(4); var l=n.n(s); var u=n(5); var c=n.n(u); var h=n(0); var f=n.n(h); var d=n(13); var p=n(14); var m=n(31); function _createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=f()(e); if (t) {
          var a=f()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return c()(this, n);
      };
    } var g=function(e) {
      l()(TestResultModel, e); var t=_createSuper(TestResultModel); function TestResultModel() {
        return a()(this, TestResultModel), t.apply(this, arguments);
      } return o()(TestResultModel, [{key: 'idAttribute', get: function() {
        return 'uid';
      }}, {key: 'parse', value: function(e) {
        return this.allAttachments=Object(m.a)(e.beforeStages).concat(Object(m.a)(e.testStage)).concat(Object(m.a)(e.afterStages)).reduce((function(e, t) {
          return e.concat(function collectAttachments(e) {
            var t=e.steps; var n=e.attachments; return Object(m.a)(t).reduce((function(e, t) {
              return e.concat(collectAttachments(t));
            }), []).concat(Object(m.a)(n));
          }(t));
        }), []), e;
      }}, {key: 'getAttachment', value: function(e) {
        return Object(p.findWhere)(this.allAttachments, {uid: e.toString()});
      }}, {key: 'url', value: function() {
        return 'data/test-cases/'.concat(this.id, '.json');
      }}]), TestResultModel;
    }(d.Model);
  }, function(e, t, n) {
    'use strict'; var r=n(2); var a=n.n(r); var i=n(3); var o=n.n(i); var s=n(9); var l=n.n(s); var u=n(4); var c=n.n(u); var h=n(5); var f=n.n(h); var d=n(0); var p=n.n(d); var m=n(7); var g=n.n(m); var v=n(12); var y=n.n(v); var b=(n(173), n(10)); var w=n(14); var x=n(1); var k=n(8); var C=n(24); var S=(n(174), n(15)); var O=n.n(S); var T=n(16); var E=n(48); var R=n(37); var P=n.n(R); var M=n(90); var A=n.n(M); var j=n(91); var N=n.n(j); var D=n(92); var V=n.n(D); var L=n(93); var B=n.n(L); var I=n(94); var z=n.n(I); P.a.registerLanguage('xml', z.a), P.a.registerLanguage('bash', A.a), P.a.registerLanguage('markdown', B.a), P.a.registerLanguage('diff', N.a), P.a.registerLanguage('json', V.a); var F; var U; var H; var q; var W; var $; var G=P.a; var Y=n(95); var K=n.n(Y); function _createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=p()(e); if (t) {
          var a=p()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return f()(this, n);
      };
    } var X; var Z; var J; var Q; var ee; var te; var ne; var re=(F=Object(x.b)('attachment'), U=Object(x.a)('TooltipBehavior', {position: 'bottom'}), H=Object(x.e)({customView: '.attachment__custom-view'}), q=Object(x.c)('click .attachment__media-container'), F(W=U(W=H(($=function(e) {
      c()(AttachmentView, e); var t=_createSuper(AttachmentView); function AttachmentView() {
        var e; a()(this, AttachmentView); for (var n=arguments.length, r=new Array(n), i=0; i<n; i++)r[i]=arguments[i]; return e=t.call.apply(t, [this].concat(r)), g()(l()(e), 'template', K.a), e;
      } return o()(AttachmentView, [{key: 'initialize', value: function() {
        this.fullScreen=!!this.options.fullScreen, this.attachment=this.options.attachment, this.attachmentInfo=Object(E.a)(this.attachment.type), this.sourceUrl='data/attachments/'.concat(this.attachment.source);
      }}, {key: 'onRender', value: function() {
        if ('custom'===this.attachmentInfo.type) this.showChildView('customView', new this.attachmentInfo.View({sourceUrl: this.sourceUrl, attachment: this.attachment})); else if (this.needsFetch()&&!this.content) this.loadContent().then(this.render); else if ('code'===this.attachmentInfo.type) {
          var e=this.$('.attachment__code'); e.addClass('language-'.concat(this.attachment.type.split('/').pop())), G.highlightBlock(e[0]);
        }
      }}, {key: 'onDestroy', value: function() {
        T.a.setSearch({attachment: null});
      }}, {key: 'onImageClick', value: function(e) {
this.$(e.currentTarget).hasClass('attachment__media-container_fullscreen')?this.onDestroy():T.a.setSearch({attachment: this.attachment.uid});
      }}, {key: 'loadContent', value: function() {
        var e=this; return O.a.ajax(this.sourceUrl, {dataType: 'text'}).then((function(t) {
          var n=e.attachmentInfo.parser; e.content=n(t);
        }));
      }}, {key: 'needsFetch', value: function() {
        return 'parser'in this.attachmentInfo;
      }}, {key: 'serializeData', value: function() {
        return {type: this.attachmentInfo.type, content: this.content, sourceUrl: this.sourceUrl, attachment: this.attachment, fullScreen: this.fullScreen};
      }}]), AttachmentView;
    }(b.View), y()($.prototype, 'onImageClick', [q], Object.getOwnPropertyDescriptor($.prototype, 'onImageClick'), $.prototype), W=$))||W)||W)||W); var ae=n(33); var ie=(n(175), n(96)); var oe=n.n(ie); function ModalView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=p()(e); if (t) {
          var a=p()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return f()(this, n);
      };
    } var se; var le; var ue; var ce; var he; var fe; var de; var pe; var me=(X=Object(x.b)('modal'), Z=Object(x.e)({content: '.modal__content'}), J=Object(x.c)('click .modal__content'), Q=Object(x.c)('click .modal__background, .modal__close'), X(ee=Z((ne=function(e) {
      c()(ModalView, e); var t=ModalView_createSuper(ModalView); function ModalView() {
        var e; a()(this, ModalView); for (var n=arguments.length, r=new Array(n), i=0; i<n; i++)r[i]=arguments[i]; return e=t.call.apply(t, [this].concat(r)), g()(l()(e), 'template', oe.a), e;
      } return o()(ModalView, [{key: 'show', value: function() {
        this.constructor.container.append(this.$el), this.showChildView('content', this.options.childView), O()('#content').toggleClass('blur', !0);
      }}, {key: 'onDestroy', value: function() {
        O()('#content').toggleClass('blur', !1);
      }}, {key: 'onKeepOpen', value: function(e) {
        e.stopPropagation();
      }}, {key: 'onClose', value: function() {
        this.destroy();
      }}, {key: 'serializeData', value: function() {
        return {cls: this.className, title: this.options.title};
      }}]), ModalView;
    }(b.View), g()(ne, 'container', O()(document.body)), te=ne, y()(te.prototype, 'onKeepOpen', [J], Object.getOwnPropertyDescriptor(te.prototype, 'onKeepOpen'), te.prototype), y()(te.prototype, 'onClose', [Q], Object.getOwnPropertyDescriptor(te.prototype, 'onClose'), te.prototype), ee=te))||ee)||ee); var ge=(n(176), n(13)); var ve=(n(177), n(31)); var ye=n(97); var be=n.n(ye); function TestResultExecutionView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=p()(e); if (t) {
          var a=p()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return f()(this, n);
      };
    } var _e; var we=(se=Object(x.b)('test-result-execution'), le=Object(x.c)('click .step__title_hasContent'), ue=Object(x.c)('click .attachment-row'), ce=Object(x.c)('click .attachment-row__fullscreen'), he=Object(x.c)('click .attachment-row__link'), fe=Object(x.c)('click .parameters-table__cell'), se((pe=function(e) {
      c()(TestResultExecutionView, e); var t=TestResultExecutionView_createSuper(TestResultExecutionView); function TestResultExecutionView() {
        var e; a()(this, TestResultExecutionView); for (var n=arguments.length, r=new Array(n), i=0; i<n; i++)r[i]=arguments[i]; return e=t.call.apply(t, [this].concat(r)), g()(l()(e), 'template', be.a), e;
      } return o()(TestResultExecutionView, [{key: 'initialize', value: function() {
        this.state=new ge.Model, this.routeState=this.options.routeState, this.listenTo(this.state, 'change:attachment', this.highlightSelectedAttachment, this);
      }}, {key: 'onRender', value: function() {
        var e=this.routeState.get('attachment'); e&&this.highlightSelectedAttachment(e);
      }}, {key: 'highlightSelectedAttachment', value: function(e) {
        this.$('.attachment-row').removeClass('attachment-row_selected'); var t=this.$('.attachment-row[data-uid="'.concat(e, '"]')); t.addClass('attachment-row_selected'), t.parents('.step').addClass('step_expanded');
      }}, {key: 'serializeData', value: function() {
        var e=Object(ve.a)(this.model.get('beforeStages')); var t=Object(ve.a)(this.model.get('testStage')); var n=Object(ve.a)(this.model.get('afterStages')); return {hasContent: e.length+t.length+n.length>0, before: e, test: t, after: n, baseUrl: this.options.baseUrl};
      }}, {key: 'onStepClick', value: function(e) {
        this.$(e.currentTarget).parent().toggleClass('step_expanded');
      }}, {key: 'onAttachmentClick', value: function(e) {
        var t=O()(e.currentTarget).data('uid'); var n='attachment__'.concat(t); O()(e.currentTarget).hasClass('attachment-row_selected')&&this.getRegion(n)?this.getRegion(n).destroy():(this.addRegion(n, {el: this.$('.'.concat(n))}), this.getRegion(n).show(new re({attachment: this.model.getAttachment(t)}))), this.$(e.currentTarget).toggleClass('attachment-row_selected');
      }}, {key: 'onAttachmnetFullScrennClick', value: function(e) {
        var t=O()(e.currentTarget).closest('.attachment-row').data('uid'); T.a.setSearch({attachment: t}), e.stopPropagation();
      }}, {key: 'onAttachmentFileClick', value: function(e) {
        e.stopPropagation();
      }}, {key: 'onParameterClick', value: function(e) {
        this.$(e.target).siblings().addBack().toggleClass('line-ellipsis');
      }}]), TestResultExecutionView;
    }(b.View), y()(pe.prototype, 'onStepClick', [le], Object.getOwnPropertyDescriptor(pe.prototype, 'onStepClick'), pe.prototype), y()(pe.prototype, 'onAttachmentClick', [ue], Object.getOwnPropertyDescriptor(pe.prototype, 'onAttachmentClick'), pe.prototype), y()(pe.prototype, 'onAttachmnetFullScrennClick', [ce], Object.getOwnPropertyDescriptor(pe.prototype, 'onAttachmnetFullScrennClick'), pe.prototype), y()(pe.prototype, 'onAttachmentFileClick', [he], Object.getOwnPropertyDescriptor(pe.prototype, 'onAttachmentFileClick'), pe.prototype), y()(pe.prototype, 'onParameterClick', [fe], Object.getOwnPropertyDescriptor(pe.prototype, 'onParameterClick'), pe.prototype), de=pe))||de); var xe=n(99); var ke=n.n(xe); function TestResultOverviewView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=p()(e); if (t) {
          var a=p()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return f()(this, n);
      };
    } var Ce; var Se; var Oe; var Te; var Ee; var Re; var Pe; var Me=Object(x.b)('test-result-overview')(_e=Object(x.e)({execution: '.test-result-overview__execution'})(_e=function(e) {
      c()(TestResultOverviewView, e); var t=TestResultOverviewView_createSuper(TestResultOverviewView); function TestResultOverviewView() {
        var e; a()(this, TestResultOverviewView); for (var n=arguments.length, r=new Array(n), i=0; i<n; i++)r[i]=arguments[i]; return e=t.call.apply(t, [this].concat(r)), g()(l()(e), 'template', ke.a), e;
      } return o()(TestResultOverviewView, [{key: 'initialize', value: function() {
        this.blocks=[];
      }}, {key: 'onRender', value: function() {
        this.showBlock(this.$('.test-result-overview__tags'), C.a.testResultBlocks.tag), this.showBlock(this.$('.test-result-overview__before'), C.a.testResultBlocks.before), this.showChildView('execution', new we(this.options)), this.showBlock(this.$('.test-result-overview__after'), C.a.testResultBlocks.after);
      }}, {key: 'onDestroy', value: function() {
        this.blocks.forEach((function(e) {
          return e.destroy();
        }));
      }}, {key: 'showBlock', value: function(e, t) {
        var n=this; t.forEach((function(t) {
          var r=new t({model: n.model}); r.$el.appendTo(e), n.blocks.push(r), r.render();
        }));
      }}, {key: 'templateContext', value: function() {
        return {cls: this.className};
      }}]), TestResultOverviewView;
    }(b.View))||_e)||_e; var Ae=n(100); var je=n.n(Ae); function TestResultView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=p()(e); if (t) {
          var a=p()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return f()(this, n);
      };
    } var Ne=[{id: '', name: 'testResult.overview.name', View: Me}]; var De=(Ce=Object(x.b)('test-result'), Se=Object(x.a)('TooltipBehavior', {position: 'left'}), Oe=Object(x.a)('ClipboardBehavior'), Te=Object(x.e)({content: '.test-result__content'}), Ee=Object(x.c)('click .status-details__trace-toggle'), Ce(Re=Se(Re=Oe(Re=Te((Pe=function(e) {
      c()(TestResultView, e); var t=TestResultView_createSuper(TestResultView); function TestResultView() {
        var e; a()(this, TestResultView); for (var n=arguments.length, r=new Array(n), i=0; i<n; i++)r[i]=arguments[i]; return e=t.call.apply(t, [this].concat(r)), g()(l()(e), 'template', je.a), e;
      } return o()(TestResultView, [{key: 'initialize', value: function(e) {
        var t=this; var n=e.routeState; this.routeState=n, this.tabs=Ne.concat(C.a.testResultTabs), this.tabName=this.routeState.get('testResultTab')||'', this.listenTo(this.routeState, 'change:testResultTab', (function(e, n) {
          return t.onTabChange(n);
        })), this.listenTo(this.routeState, 'change:attachment', (function(e, n) {
          return t.onShowAttachment(n);
        }));
      }}, {key: 'onRender', value: function() {
        var e=Object(w.findWhere)(this.tabs, {id: this.tabName}); this.showChildView('content', e?new e.View(this.options):new ae.a({code: 404, message: 'Tab "'.concat(this.tabName, '" not found')})); var t=this.routeState.get('attachment'); t&&this.onShowAttachment(t);
      }}, {key: 'onTabChange', value: function(e) {
        this.tabName=e||'', this.render();
      }}, {key: 'onShowAttachment', value: function(e) {
        if (!e&&this.modalView&&this.modalView.destroy(), e) {
          var t=this.model.getAttachment(e); this.modalView=new me({childView: t?new re({attachment: t, fullScreen: !0}):new ae.a({code: 404, message: Object(k.default)('errors.missedAttachment')}), title: t?t.name||t.source:Object(k.default)('errors.notFound')}), this.modalView.show();
        }
      }}, {key: 'templateContext', value: function() {
        var e=this; var t=this.options.baseUrl; return {cls: this.className, statusName: 'status.'.concat(this.model.get('status')), links: this.tabs.map((function(n) {
          return {href: ''.concat(t, '/').concat(n.id), name: n.name, active: n.id===e.tabName};
        }))};
      }}, {key: 'onStacktraceClick', value: function(e) {
        this.$(e.currentTarget).closest('.status-details').toggleClass('status-details__expanded');
      }}]), TestResultView;
    }(b.View), y()(Pe.prototype, 'onStacktraceClick', [Ee], Object.getOwnPropertyDescriptor(Pe.prototype, 'onStacktraceClick'), Pe.prototype), Re=Pe))||Re)||Re)||Re)||Re); t.a=De;
  }, function(e, t, n) {
    'use strict'; n.d(t, 'a', (function() {
      return typeByMime;
    })); var r=n(7); var a=n.n(r); var i={}; var o={}; function objectConverter(e) {
      return new Function('d', 'return {'+e.map((function(e, t) {
        return JSON.stringify(e)+': d['+t+'] || ""';
      })).join(',')+'}');
    } function inferColumns(e) {
      var t=Object.create(null); var n=[]; return e.forEach((function(e) {
        for (var r in e)r in t||n.push(t[r]=r);
      })), n;
    } function pad(e, t) {
      var n=e+''; var r=n.length; return r<t?new Array(t-r+1).join(0)+n:n;
    } function formatDate(e) {
      var t; var n=e.getUTCHours(); var r=e.getUTCMinutes(); var a=e.getUTCSeconds(); var i=e.getUTCMilliseconds(); return isNaN(e)?'Invalid Date':((t=e.getUTCFullYear())<0?'-'+pad(-t, 6):t>9999?'+'+pad(t, 6):pad(t, 4))+'-'+pad(e.getUTCMonth()+1, 2)+'-'+pad(e.getUTCDate(), 2)+(i?'T'+pad(n, 2)+':'+pad(r, 2)+':'+pad(a, 2)+'.'+pad(i, 3)+'Z':a?'T'+pad(n, 2)+':'+pad(r, 2)+':'+pad(a, 2)+'Z':r||n?'T'+pad(n, 2)+':'+pad(r, 2)+'Z':'');
    } var dsv=function(e) {
      var t=new RegExp('["'+e+'\n\r]'); var n=e.charCodeAt(0); function parseRows(e, t) {
        var r; var a=[]; var s=e.length; var l=0; var u=0; var c=s<=0; var h=!1; function token() {
          if (c) return o; if (h) return h=!1, i; var t; var r; var a=l; if (34===e.charCodeAt(a)) {
            for (;l++<s&&34!==e.charCodeAt(l)||34===e.charCodeAt(++l););return (t=l)>=s?c=!0:10===(r=e.charCodeAt(l++))?h=!0:13===r&&(h=!0, 10===e.charCodeAt(l)&&++l), e.slice(a+1, t-1).replace(/""/g, '"');
          } for (;l<s;) {
            if (10===(r=e.charCodeAt(t=l++)))h=!0; else if (13===r)h=!0, 10===e.charCodeAt(l)&&++l; else if (r!==n) continue; return e.slice(a, t);
          } return c=!0, e.slice(a, s);
        } for (10===e.charCodeAt(s-1)&&--s, 13===e.charCodeAt(s-1)&&--s; (r=token())!==o;) {
          for (var f=[]; r!==i&&r!==o;)f.push(r), r=token(); t&&null==(f=t(f, u++))||a.push(f);
        } return a;
      } function preformatBody(t, n) {
        return t.map((function(t) {
          return n.map((function(e) {
            return formatValue(t[e]);
          })).join(e);
        }));
      } function formatRow(t) {
        return t.map(formatValue).join(e);
      } function formatValue(e) {
        return null==e?'':e instanceof Date?formatDate(e):t.test(e+='')?'"'+e.replace(/"/g, '""')+'"':e;
      } return {parse: function(e, t) {
        var n; var r; var a=parseRows(e, (function(e, a) {
          if (n) return n(e, a-1); r=e, n=t?function(e, t) {
            var n=objectConverter(e); return function(r, a) {
              return t(n(r), a, e);
            };
          }(e, t):objectConverter(e);
        })); return a.columns=r||[], a;
      }, parseRows: parseRows, format: function(t, n) {
        return null==n&&(n=inferColumns(t)), [n.map(formatValue).join(e)].concat(preformatBody(t, n)).join('\n');
      }, formatBody: function(e, t) {
        return null==t&&(t=inferColumns(e)), preformatBody(e, t).join('\n');
      }, formatRows: function(e) {
        return e.map(formatRow).join('\n');
      }, formatRow: formatRow, formatValue: formatValue};
    }; var s=dsv(','); var l=(s.parse, s.parseRows); var u=(s.format, s.formatBody, s.formatRows, s.formatRow, s.formatValue, dsv('\t')); var c=(u.parse, u.parseRows); var h=(u.format, u.formatBody, u.formatRows, u.formatRow, u.formatValue, n(24)); function ownKeys(e, t) {
      var n=Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r=Object.getOwnPropertySymbols(e); t&&(r=r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), n.push.apply(n, r);
      } return n;
    } function typeByMime(e) {
      if (h.a.attachmentViews[e]) {
        return function(e) {
          for (var t=1; t<arguments.length; t++) {
            var n=null!=arguments[t]?arguments[t]:{}; t%2?ownKeys(Object(n), !0).forEach((function(t) {
              a()(e, t, n[t]);
            })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
          } return e;
        }({type: 'custom'}, h.a.attachmentViews[e]);
      } switch (e) {
        case 'image/bmp': case 'image/gif': case 'image/tiff': case 'image/jpeg': case 'image/jpg': case 'image/png': case 'image/*': return {type: 'image', icon: 'fa fa-file-image-o'}; case 'text/xml': case 'application/xml': case 'application/json': case 'text/json': case 'text/yaml': case 'application/yaml': case 'application/x-yaml': case 'text/x-yaml': return {type: 'code', icon: 'fa fa-file-code-o', parser: function(e) {
          return e;
        }}; case 'text/plain': case 'text/*': return {type: 'text', icon: 'fa fa-file-text-o', parser: function(e) {
          return e;
        }}; case 'text/html': return {type: 'html', icon: 'fa fa-file-code-o'}; case 'text/csv': return {type: 'table', icon: 'fa fa-table', parser: function(e) {
          return l(e);
        }}; case 'text/tab-separated-values': return {type: 'table', icon: 'fa fa-table', parser: function(e) {
          return c(e);
        }}; case 'image/svg+xml': return {type: 'svg', icon: 'fa fa-file-image-o'}; case 'video/mp4': case 'video/ogg': case 'video/webm': return {type: 'video', icon: 'fa fa-file-video-o'}; case 'text/uri-list': return {type: 'uri', icon: 'fa fa-list-alt', parser: function(e) {
          return e.split('\n').map((function(e) {
            return e.trim();
          })).filter((function(e) {
            return e.length>0;
          })).map((function(e) {
            return {comment: 0===e.indexOf('#'), text: e};
          }));
        }}; case 'application/x-tar': case 'application/x-gtar': case 'application/x-bzip2': case 'application/gzip': case 'application/zip': return {type: 'archive', icon: 'fa fa-file-archive-o'}; default: return {type: null, icon: 'fa fa-file-o'};
      }
    }
  }, function(e, t, n) {
    'use strict'; var r=n(164); var a=n(166); function Url() {
      this.protocol=null, this.slashes=null, this.auth=null, this.host=null, this.port=null, this.hostname=null, this.hash=null, this.search=null, this.query=null, this.pathname=null, this.path=null, this.href=null;
    }t.parse=urlParse, t.resolve=function(e, t) {
      return urlParse(e, !1, !0).resolve(t);
    }, t.resolveObject=function(e, t) {
      return e?urlParse(e, !1, !0).resolveObject(t):t;
    }, t.format=function(e) {
      a.isString(e)&&(e=urlParse(e)); return e instanceof Url?e.format():Url.prototype.format.call(e);
    }, t.Url=Url; var i=/^([a-z0-9.+-]+:)/i; var o=/:[0-9]*$/; var s=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/; var l=['{', '}', '|', '\\', '^', '`'].concat(['<', '>', '"', '`', ' ', '\r', '\n', '\t']); var u=['\''].concat(l); var c=['%', '/', '?', ';', '#'].concat(u); var h=['/', '?', '#']; var f=/^[+a-z0-9A-Z_-]{0,63}$/; var d=/^([+a-z0-9A-Z_-]{0,63})(.*)$/; var p={'javascript': !0, 'javascript:': !0}; var m={'javascript': !0, 'javascript:': !0}; var g={'http': !0, 'https': !0, 'ftp': !0, 'gopher': !0, 'file': !0, 'http:': !0, 'https:': !0, 'ftp:': !0, 'gopher:': !0, 'file:': !0}; var v=n(167); function urlParse(e, t, n) {
      if (e&&a.isObject(e)&&e instanceof Url) return e; var r=new Url; return r.parse(e, t, n), r;
    }Url.prototype.parse=function(e, t, n) {
      if (!a.isString(e)) throw new TypeError('Parameter \'url\' must be a string, not '+typeof e); var o=e.indexOf('?'); var l=-1!==o&&o<e.indexOf('#')?'?':'#'; var y=e.split(l); y[0]=y[0].replace(/\\/g, '/'); var b=e=y.join(l); if (b=b.trim(), !n&&1===e.split('#').length) {
        var w=s.exec(b); if (w) return this.path=b, this.href=b, this.pathname=w[1], w[2]?(this.search=w[2], this.query=t?v.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search='', this.query={}), this;
      } var x=i.exec(b); if (x) {
        var k=(x=x[0]).toLowerCase(); this.protocol=k, b=b.substr(x.length);
      } if (n||x||b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var C='//'===b.substr(0, 2); !C||x&&m[x]||(b=b.substr(2), this.slashes=!0);
      } if (!m[x]&&(C||x&&!g[x])) {
        for (var S, O, T=-1, E=0; E<h.length; E++) {
          -1!==(R=b.indexOf(h[E]))&&(-1===T||R<T)&&(T=R);
        }-1!==(O=-1===T?b.lastIndexOf('@'):b.lastIndexOf('@', T))&&(S=b.slice(0, O), b=b.slice(O+1), this.auth=decodeURIComponent(S)), T=-1; for (E=0; E<c.length; E++) {
          var R; -1!==(R=b.indexOf(c[E]))&&(-1===T||R<T)&&(T=R);
        }-1===T&&(T=b.length), this.host=b.slice(0, T), b=b.slice(T), this.parseHost(), this.hostname=this.hostname||''; var P='['===this.hostname[0]&&']'===this.hostname[this.hostname.length-1]; if (!P) {
          for (var M=this.hostname.split(/\./), A=(E=0, M.length); E<A; E++) {
            var j=M[E]; if (j&&!j.match(f)) {
              for (var N='', D=0, V=j.length; D<V; D++)j.charCodeAt(D)>127?N+='x':N+=j[D]; if (!N.match(f)) {
                var L=M.slice(0, E); var B=M.slice(E+1); var I=j.match(d); I&&(L.push(I[1]), B.unshift(I[2])), B.length&&(b='/'+B.join('.')+b), this.hostname=L.join('.'); break;
              }
            }
          }
        } this.hostname.length>255?this.hostname='':this.hostname=this.hostname.toLowerCase(), P||(this.hostname=r.toASCII(this.hostname)); var z=this.port?':'+this.port:''; var F=this.hostname||''; this.host=F+z, this.href+=this.host, P&&(this.hostname=this.hostname.substr(1, this.hostname.length-2), '/'!==b[0]&&(b='/'+b));
      } if (!p[k]) {
        for (E=0, A=u.length; E<A; E++) {
          var U=u[E]; if (-1!==b.indexOf(U)) {
            var H=encodeURIComponent(U); H===U&&(H=escape(U)), b=b.split(U).join(H);
          }
        }
      } var q=b.indexOf('#'); -1!==q&&(this.hash=b.substr(q), b=b.slice(0, q)); var W=b.indexOf('?'); if (-1!==W?(this.search=b.substr(W), this.query=b.substr(W+1), t&&(this.query=v.parse(this.query)), b=b.slice(0, W)):t&&(this.search='', this.query={}), b&&(this.pathname=b), g[k]&&this.hostname&&!this.pathname&&(this.pathname='/'), this.pathname||this.search) {
        z=this.pathname||''; var $=this.search||''; this.path=z+$;
      } return this.href=this.format(), this;
    }, Url.prototype.format=function() {
      var e=this.auth||''; e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i, ':'), e+='@'); var t=this.protocol||''; var n=this.pathname||''; var r=this.hash||''; var i=!1; var o=''; this.host?i=e+this.host:this.hostname&&(i=e+(-1===this.hostname.indexOf(':')?this.hostname:'['+this.hostname+']'), this.port&&(i+=':'+this.port)), this.query&&a.isObject(this.query)&&Object.keys(this.query).length&&(o=v.stringify(this.query)); var s=this.search||o&&'?'+o||''; return t&&':'!==t.substr(-1)&&(t+=':'), this.slashes||(!t||g[t])&&!1!==i?(i='//'+(i||''), n&&'/'!==n.charAt(0)&&(n='/'+n)):i||(i=''), r&&'#'!==r.charAt(0)&&(r='#'+r), s&&'?'!==s.charAt(0)&&(s='?'+s), t+i+(n=n.replace(/[?#]/g, (function(e) {
        return encodeURIComponent(e);
      })))+(s=s.replace('#', '%23'))+r;
    }, Url.prototype.resolve=function(e) {
      return this.resolveObject(urlParse(e, !1, !0)).format();
    }, Url.prototype.resolveObject=function(e) {
      if (a.isString(e)) {
        var t=new Url; t.parse(e, !1, !0), e=t;
      } for (var n=new Url, r=Object.keys(this), i=0; i<r.length; i++) {
        var o=r[i]; n[o]=this[o];
      } if (n.hash=e.hash, ''===e.href) return n.href=n.format(), n; if (e.slashes&&!e.protocol) {
        for (var s=Object.keys(e), l=0; l<s.length; l++) {
          var u=s[l]; 'protocol'!==u&&(n[u]=e[u]);
        } return g[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname='/'), n.href=n.format(), n;
      } if (e.protocol&&e.protocol!==n.protocol) {
        if (!g[e.protocol]) {
          for (var c=Object.keys(e), h=0; h<c.length; h++) {
            var f=c[h]; n[f]=e[f];
          } return n.href=n.format(), n;
        } if (n.protocol=e.protocol, e.host||m[e.protocol])n.pathname=e.pathname; else {
          for (var d=(e.pathname||'').split('/'); d.length&&!(e.host=d.shift()););e.host||(e.host=''), e.hostname||(e.hostname=''), ''!==d[0]&&d.unshift(''), d.length<2&&d.unshift(''), n.pathname=d.join('/');
        } if (n.search=e.search, n.query=e.query, n.host=e.host||'', n.auth=e.auth, n.hostname=e.hostname||e.host, n.port=e.port, n.pathname||n.search) {
          var p=n.pathname||''; var v=n.search||''; n.path=p+v;
        } return n.slashes=n.slashes||e.slashes, n.href=n.format(), n;
      } var y=n.pathname&&'/'===n.pathname.charAt(0); var b=e.host||e.pathname&&'/'===e.pathname.charAt(0); var w=b||y||n.host&&e.pathname; var x=w; var k=n.pathname&&n.pathname.split('/')||[]; var C=(d=e.pathname&&e.pathname.split('/')||[], n.protocol&&!g[n.protocol]); if (C&&(n.hostname='', n.port=null, n.host&&(''===k[0]?k[0]=n.host:k.unshift(n.host)), n.host='', e.protocol&&(e.hostname=null, e.port=null, e.host&&(''===d[0]?d[0]=e.host:d.unshift(e.host)), e.host=null), w=w&&(''===d[0]||''===k[0])), b)n.host=e.host||''===e.host?e.host:n.host, n.hostname=e.hostname||''===e.hostname?e.hostname:n.hostname, n.search=e.search, n.query=e.query, k=d; else if (d.length)k||(k=[]), k.pop(), k=k.concat(d), n.search=e.search, n.query=e.query; else if (!a.isNullOrUndefined(e.search)) {
        if (C)n.hostname=n.host=k.shift(), (R=!!(n.host&&n.host.indexOf('@')>0)&&n.host.split('@'))&&(n.auth=R.shift(), n.host=n.hostname=R.shift()); return n.search=e.search, n.query=e.query, a.isNull(n.pathname)&&a.isNull(n.search)||(n.path=(n.pathname?n.pathname:'')+(n.search?n.search:'')), n.href=n.format(), n;
      } if (!k.length) return n.pathname=null, n.search?n.path='/'+n.search:n.path=null, n.href=n.format(), n; for (var S=k.slice(-1)[0], O=(n.host||e.host||k.length>1)&&('.'===S||'..'===S)||''===S, T=0, E=k.length; E>=0; E--)'.'===(S=k[E])?k.splice(E, 1):'..'===S?(k.splice(E, 1), T++):T&&(k.splice(E, 1), T--); if (!w&&!x) for (;T--; T)k.unshift('..'); !w||''===k[0]||k[0]&&'/'===k[0].charAt(0)||k.unshift(''), O&&'/'!==k.join('/').substr(-1)&&k.push(''); var R; var P=''===k[0]||k[0]&&'/'===k[0].charAt(0); C&&(n.hostname=n.host=P?'':k.length?k.shift():'', (R=!!(n.host&&n.host.indexOf('@')>0)&&n.host.split('@'))&&(n.auth=R.shift(), n.host=n.hostname=R.shift())); return (w=w||n.host&&k.length)&&!P&&k.unshift(''), k.length?n.pathname=k.join('/'):(n.pathname=null, n.path=null), a.isNull(n.pathname)&&a.isNull(n.search)||(n.path=(n.pathname?n.pathname:'')+(n.search?n.search:'')), n.auth=e.auth||n.auth, n.slashes=n.slashes||e.slashes, n.href=n.format(), n;
    }, Url.prototype.parseHost=function() {
      var e=this.host; var t=o.exec(e); t&&(':'!==(t=t[0])&&(this.port=t.substr(1)), e=e.substr(0, e.length-t.length)), e&&(this.hostname=e);
    };
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i, o, s) {
      var l; var u=null!=t?t:e.nullContext||{}; var c=e.escapeExpression; var h=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="'+c(__default(n(6)).call(u, 'step', {name: 'b', hash: {expanded: null!=t?h(t, 'expanded'):t}, data: i, loc: {start: {line: 2, column: 16}, end: {line: 2, column: 46}}}))+'">\n        <div class="'+c(__default(n(6)).call(u, 'step', 'title', {name: 'b', hash: {stage: !0, hasContent: !0}, data: i, loc: {start: {line: 3, column: 20}, end: {line: 3, column: 67}}}))+'">\n            <span class="step__arrow block__arrow">'+c(__default(n(51)).call(u, {name: 'angle', hash: {}, data: i, loc: {start: {line: 4, column: 51}, end: {line: 4, column: 60}}}))+'</span>\n            '+c(e.lambda(null!=t?h(t, 'name'):t, t))+'\n        </div>\n        <div class="'+c(__default(n(6)).call(u, 'step', 'content', {name: 'b', hash: {}, data: i, loc: {start: {line: 7, column: 20}, end: {line: 7, column: 42}}}))+'">\n'+(null!=(l=h(r, 'each').call(u, null!=t?h(t, 'stages'):t, {name: 'each', hash: {}, fn: e.program(2, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 8, column: 12}, end: {line: 40, column: 21}}}))?l:'')+'        </div>\n    </div>\n';
    }, 2: function(e, t, n, r, a, i, o) {
      var s; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(s=l(n, 'if').call(null!=t?t:e.nullContext||{}, null!=t?l(t, 'name'):t, {name: 'if', hash: {}, fn: e.program(3, a, 0, i, o), inverse: e.program(12, a, 0, i, o), data: a, loc: {start: {line: 9, column: 16}, end: {line: 39, column: 23}}}))?s:'';
    }, 3: function(e, t, r, a, i, o, s) {
      var l; var u=null!=t?t:e.nullContext||{}; var c=e.escapeExpression; var h=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                    <div class="'+c(__default(n(6)).call(u, 'step', {name: 'b', hash: {}, data: i, loc: {start: {line: 10, column: 32}, end: {line: 10, column: 44}}}))+'">\n                        <div class="'+c(__default(n(6)).call(u, 'step', 'title', {name: 'b', hash: {stage: !0, hasContent: null!=t?h(t, 'hasContent'):t}, data: i, loc: {start: {line: 11, column: 36}, end: {line: 11, column: 89}}}))+'">\n'+(null!=(l=h(r, 'if').call(u, null!=t?h(t, 'hasContent'):t, {name: 'if', hash: {}, fn: e.program(4, i, 0, o, s), inverse: e.program(6, i, 0, o, s), data: i, loc: {start: {line: 12, column: 28}, end: {line: 16, column: 35}}}))?l:'')+'                            '+c(e.lambda(null!=t?h(t, 'name'):t, t))+'\n'+(null!=(l=e.invokePartial(n(78), t, {name: '../../blocks/step-stats/step-stats', hash: {baseUrl: null!=s[2]?h(s[2], 'baseUrl'):s[2]}, data: i, indent: '                            ', helpers: r, partials: a, decorators: e.decorators}))?l:'')+'                        </div>\n                        <div class="'+c(__default(n(6)).call(u, 'step', 'content', {name: 'b', hash: {}, data: i, loc: {start: {line: 20, column: 36}, end: {line: 20, column: 58}}}))+'">\n'+(null!=(l=e.invokePartial(n(79), t, {name: '../../blocks/parameters-table/parameters-table', hash: {parameters: null!=t?h(t, 'parameters'):t}, data: i, indent: '                            ', helpers: r, partials: a, decorators: e.decorators}))?l:'')+(null!=(l=e.invokePartial(n(52), t, {name: 'steps-list', hash: {baseUrl: null!=s[1]?h(s[1], 'baseUrl'):s[1], steps: null!=t?h(t, 'steps'):t}, data: i, helpers: r, partials: a, decorators: e.decorators}))?l:'')+(null!=(l=h(r, 'each').call(u, null!=t?h(t, 'attachments'):t, {name: 'each', hash: {}, fn: e.program(8, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 23, column: 28}, end: {line: 25, column: 37}}}))?l:'')+(null!=(l=h(r, 'if').call(u, null!=t?h(t, 'shouldDisplayMessage'):t, {name: 'if', hash: {}, fn: e.program(10, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 26, column: 28}, end: {line: 28, column: 35}}}))?l:'')+'                        </div>\n                    </div>\n';
    }, 4: function(e, t, r, a, i) {
      var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                                <span class="step__arrow block__arrow">'+e.escapeExpression(__default(n(80)).call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'status'):t, {name: 'arrow', hash: {}, data: i, loc: {start: {line: 13, column: 71}, end: {line: 13, column: 87}}}))+'</span>\n';
    }, 6: function(e, t, r, a, i) {
      var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                                <span class="step__status">'+e.escapeExpression(__default(n(22)).call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'status'):t, {name: 'allure-icon', hash: {}, data: i, loc: {start: {line: 15, column: 59}, end: {line: 15, column: 81}}}))+'</span>\n';
    }, 8: function(e, t, r, a, i, o, s) {
      var l; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(l=e.invokePartial(n(53), t, {name: '../../blocks/attachment-row/attachment-row', hash: {baseUrl: null!=s[2]?u(s[2], 'baseUrl'):s[2]}, data: i, indent: '                                ', helpers: r, partials: a, decorators: e.decorators}))?l:'';
    }, 10: function(e, t, r, a, i) {
      var o; return null!=(o=e.invokePartial(n(54), t, {name: '../../blocks/status-details/status-details', data: i, helpers: r, partials: a, decorators: e.decorators}))?o:'';
    }, 12: function(e, t, r, a, i, o, s) {
      var l; var u=null!=t?t:e.nullContext||{}; var c=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return (null!=(l=e.invokePartial(n(52), t, {name: 'steps-list', hash: {baseUrl: null!=s[1]?c(s[1], 'baseUrl'):s[1], steps: null!=t?c(t, 'steps'):t}, data: i, helpers: r, partials: a, decorators: e.decorators}))?l:'')+(null!=(l=c(r, 'each').call(u, null!=t?c(t, 'attachments'):t, {name: 'each', hash: {}, fn: e.program(13, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 33, column: 20}, end: {line: 35, column: 29}}}))?l:'')+(null!=(l=c(r, 'if').call(u, null!=t?c(t, 'shouldDisplayMessage'):t, {name: 'if', hash: {}, fn: e.program(10, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 36, column: 20}, end: {line: 38, column: 27}}}))?l:'');
    }, 13: function(e, t, r, a, i, o, s) {
      var l; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(l=e.invokePartial(n(53), t, {name: '../../blocks/attachment-row/attachment-row', hash: {baseUrl: null!=s[2]?u(s[2], 'baseUrl'):s[2]}, data: i, indent: '                        ', helpers: r, partials: a, decorators: e.decorators}))?l:'';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a, i, o) {
      var s; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(s=l(n, 'if').call(null!=t?t:e.nullContext||{}, null!=t?l(t, 'stages'):t, {name: 'if', hash: {}, fn: e.program(1, a, 0, i, o), inverse: e.noop, data: a, loc: {start: {line: 1, column: 0}, end: {line: 43, column: 7}}}))?s:'';
    }, usePartial: !0, useData: !0, useDepths: !0});
  }, function(e, t, n) {
    'use strict'; n.r(t); var r=n(18); t.default=function() {
      return new r.SafeString('<span class="angle fa fa-angle-right fa-fw fa-lg"></span>');
    };
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i, o, s) {
      var l; var u=null!=t?t:e.nullContext||{}; var c=e.escapeExpression; var h=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="step">\n        <div class="'+c(__default(n(6)).call(u, 'step', 'title', {name: 'b', hash: {hasContent: null!=t?h(t, 'hasContent'):t}, data: i, loc: {start: {line: 3, column: 20}, end: {line: 3, column: 62}}}))+' long-line">\n'+(null!=(l=h(r, 'if').call(u, null!=t?h(t, 'hasContent'):t, {name: 'if', hash: {}, fn: e.program(2, i, 0, o, s), inverse: e.program(4, i, 0, o, s), data: i, loc: {start: {line: 4, column: 12}, end: {line: 8, column: 19}}}))?l:'')+'            <div class="step__name">'+c(__default(n(180)).call(u, null!=t?h(t, 'name'):t, {name: 'text-with-links', hash: {}, data: i, loc: {start: {line: 9, column: 36}, end: {line: 9, column: 60}}}))+'</div>\n'+(null!=(l=e.invokePartial(n(78), t, {name: '../../blocks/step-stats/step-stats', hash: {baseUrl: null!=s[2]?h(s[2], 'baseUrl'):s[2]}, data: i, indent: '            ', helpers: r, partials: a, decorators: e.decorators}))?l:'')+'        </div>\n        <div class="step__content">\n'+(null!=(l=e.invokePartial(n(79), t, {name: '../../blocks/parameters-table/parameters-table', hash: {parameters: null!=t?h(t, 'parameters'):t}, data: i, indent: '            ', helpers: r, partials: a, decorators: e.decorators}))?l:'')+(null!=(l=e.invokePartial(n(52), t, {name: 'steps-list', hash: {baseUrl: null!=s[1]?h(s[1], 'baseUrl'):s[1], steps: null!=t?h(t, 'steps'):t}, data: i, helpers: r, partials: a, decorators: e.decorators}))?l:'')+(null!=(l=h(r, 'each').call(u, null!=t?h(t, 'attachments'):t, {name: 'each', hash: {}, fn: e.program(6, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 15, column: 12}, end: {line: 17, column: 21}}}))?l:'')+(null!=(l=h(r, 'if').call(u, null!=t?h(t, 'shouldDisplayMessage'):t, {name: 'if', hash: {}, fn: e.program(8, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 18, column: 12}, end: {line: 20, column: 19}}}))?l:'')+'        </div>\n    </div>\n';
    }, 2: function(e, t, r, a, i) {
      var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                <span class="step__arrow block__arrow">'+e.escapeExpression(__default(n(80)).call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'status'):t, {name: 'arrow', hash: {}, data: i, loc: {start: {line: 5, column: 55}, end: {line: 5, column: 71}}}))+'</span>\n';
    }, 4: function(e, t, r, a, i) {
      var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                <span class="step__status">'+e.escapeExpression(__default(n(22)).call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'status'):t, {name: 'allure-icon', hash: {}, data: i, loc: {start: {line: 7, column: 43}, end: {line: 7, column: 65}}}))+'</span>\n';
    }, 6: function(e, t, r, a, i, o, s) {
      var l; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(l=e.invokePartial(n(53), t, {name: '../../blocks/attachment-row/attachment-row', hash: {baseUrl: null!=s[2]?u(s[2], 'baseUrl'):s[2]}, data: i, indent: '                ', helpers: r, partials: a, decorators: e.decorators}))?l:'';
    }, 8: function(e, t, r, a, i) {
      var o; return null!=(o=e.invokePartial(n(54), t, {name: '../../blocks/status-details/status-details', data: i, helpers: r, partials: a, decorators: e.decorators}))?o:'';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a, i, o) {
      var s; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(s=l(n, 'each').call(null!=t?t:e.nullContext||{}, null!=t?l(t, 'steps'):t, {name: 'each', hash: {}, fn: e.program(1, a, 0, i, o), inverse: e.noop, data: a, loc: {start: {line: 1, column: 0}, end: {line: 23, column: 9}}}))?s:'';
    }, usePartial: !0, useData: !0, useDepths: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, n, r, a) {
      var i=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                '+e.escapeExpression(e.lambda(null!=t?i(t, 'name'):t, t))+'\n';
    }, 3: function(e, t, n, r, a) {
      var i=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                '+e.escapeExpression(e.lambda(null!=t?i(t, 'source'):t, t))+'\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=e.lambda; var l=e.escapeExpression; var u=null!=t?t:e.nullContext||{}; var c=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div>\n    <div class="attachment-row" data-uid="'+l(s(null!=t?c(t, 'uid'):t, t))+'">\n        <span class="attachment-row__arrow block__arrow">'+l(__default(n(51)).call(u, {name: 'angle', hash: {}, data: i, loc: {start: {line: 3, column: 57}, end: {line: 3, column: 66}}}))+'</span>\n        <div class="attachment-row__icon">\n            <span class="'+l(__default(n(181)).call(u, null!=t?c(t, 'type'):t, {name: 'fileicon', hash: {}, data: i, loc: {start: {line: 5, column: 25}, end: {line: 5, column: 42}}}))+'" data-tooltip="'+l(s(null!=t?c(t, 'type'):t, t))+'"></span>\n        </div>\n        <div class="attachment-row__name long-line">\n'+(null!=(o=c(r, 'if').call(u, null!=t?c(t, 'name'):t, {name: 'if', hash: {}, fn: e.program(1, i, 0), inverse: e.program(3, i, 0), data: i, loc: {start: {line: 8, column: 12}, end: {line: 12, column: 19}}}))?o:'')+'        </div>\n        <div class="attachment-row__control attachment-row__link">\n            <a class="link" href="data/attachments/'+l(s(null!=t?c(t, 'source'):t, t))+'" target="_blank"\n               data-tooltip="Open attachment in new tab">\n                <span class="fa fa-save"></span> '+l(__default(n(182)).call(u, null!=t?c(t, 'size'):t, {name: 'filesize', hash: {}, data: i, loc: {start: {line: 17, column: 49}, end: {line: 17, column: 66}}}))+'\n            </a>\n        </div>\n        <div class="attachment-row__control attachment-row__fullscreen">\n            <a class="link">\n                <span class="fa fa-arrows-alt"></span>\n            </a>\n        </div>\n    </div>\n    <div class="attachment-row__preview">\n        <div class="attachment-row__content '+l(__default(n(6)).call(u, 'attachment', null!=t?c(t, 'uid'):t, {name: 'b', hash: {}, data: i, loc: {start: {line: 27, column: 44}, end: {line: 27, column: 67}}}))+'"></div>\n    </div>\n</div>';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <div class="'+l(__default(n(6)).call(s, 'status-details', 'trace-toggle', {name: 'b', hash: {status: null!=t?u(t, 'status'):t}, data: i, loc: {start: {line: 4, column: 24}, end: {line: 4, column: 75}}}))+' clickable" data-tooltip="'+l(__default(n(8)).call(s, 'testResult.status.trace', {name: 't', hash: {}, data: i, loc: {start: {line: 4, column: 101}, end: {line: 4, column: 132}}}))+'">\n                <pre class="status-details__message"><code>'+l(e.lambda(null!=t?u(t, 'statusMessage'):t, t))+'</code></pre>\n            </div>\n\n            <pre class="'+l(__default(n(6)).call(s, 'status-details', 'trace', {name: 'b', hash: {}, data: i, loc: {start: {line: 8, column: 24}, end: {line: 8, column: 54}}}))+'"><code>'+(null!=(o=u(r, 'if').call(s, null!=t?u(t, 'statusTrace'):t, {name: 'if', hash: {}, fn: e.program(2, i, 0), inverse: e.program(4, i, 0), data: i, loc: {start: {line: 8, column: 62}, end: {line: 8, column: 142}}}))?o:'')+'</code></pre>\n';
    }, 2: function(e, t, n, r, a) {
      var i=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return e.escapeExpression(e.lambda(null!=t?i(t, 'statusTrace'):t, t));
    }, 4: function(e, t, r, a, i) {
      return e.escapeExpression(__default(n(8)).call(null!=t?t:e.nullContext||{}, 'testResult.status.empty', {name: 't', hash: {}, data: i, loc: {start: {line: 8, column: 104}, end: {line: 8, column: 135}}}));
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="'+e.escapeExpression(__default(n(6)).call(s, 'status-details', {name: 'b', hash: {status: null!=t?l(t, 'status'):t}, data: i, loc: {start: {line: 1, column: 12}, end: {line: 1, column: 48}}}))+'">\n    <div class="status-details__content">\n'+(null!=(o=l(r, 'if').call(s, null!=t?l(t, 'statusMessage'):t, {name: 'if', hash: {}, fn: e.program(1, i, 0), inverse: e.noop, data: i, loc: {start: {line: 3, column: 8}, end: {line: 9, column: 15}}}))?o:'')+'    </div>\n</div>\n';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o=e.lambda; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <span class="node__time" data-tooltip="'+s(o(null!=t?l(t, 'tooltip'):t, t))+'">\n        '+s(o(null!=t?l(t, 'name'):t, t))+':\n        <b>'+s(__default(n(23)).call(null!=t?t:e.nullContext||{}, null!=t?l(t, 'value'):t, {name: 'duration', hash: {}, data: i, loc: {start: {line: 4, column: 11}, end: {line: 4, column: 29}}}))+'</b>\n    </span>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(o=l(r, 'if').call(s, __default(n(204)).call(s, null!=t?l(t, 'value'):t, {name: 'is-def', hash: {}, data: i, loc: {start: {line: 1, column: 6}, end: {line: 1, column: 20}}}), {name: 'if', hash: {}, fn: e.program(1, i, 0), inverse: e.noop, data: i, loc: {start: {line: 1, column: 0}, end: {line: 6, column: 7}}}))?o:'';
    }, useData: !0});
  },,,, function(e, t, n) {
    !function(e, t, n) {
      'use strict'; t='default'in t?t.default:t, n='default'in n?n.default:n, e.on=function(e) {
        return function(n, r, a) {
          if (n.events&&!t.has(n, 'events')&&(n.events=t.clone(n.events)), n.events||(n.events={}), t.isFunction(n.events)) throw new Error('The on decorator is not compatible with an events method'); if (!e) throw new Error('The on decorator requires an eventName argument'); return n.events[e]=r, a;
        };
      }, e.tagName=function(e) {
        return function(t) {
          t.prototype.tagName=e;
        };
      }, e.model=function(e) {
        return function(t) {
          if (!(e.prototype instanceof n.Model)) throw new Error('The model decorator takes either a single argument that should be an instance of Backbone.Model'); t.prototype.model=e;
        };
      }, e.comparator=function(e) {
        return function(n) {
          if (!t.isString(e)) throw new Error('The comparator decorator takes either a single argument that should be a string'); n.prototype.comparator=e;
        };
      }, e.defaults=function() {
        for (var e=arguments.length, n=Array(e), r=0; r<e; r++)n[r]=arguments[r]; return function(e) {
          var r=e.prototype.defaults||{}; var a=n[0]; var i=n[1]; if (t.isObject(a))t.extend(r, a); else {
            if (!t.isString(a)||t.isUndefined(i)) throw new Error('The defaults decorator takes either a single object as an argument or a key and value'); r[a]=i;
          }e.prototype.defaults=r;
        };
      }, e.route=function(e) {
        return function(n, r, a) {
          if (n.routes||(n.routes={}), t.isFunction(n.routes)) throw new Error('The route decorator is not compatible with a route method'); if (!e) throw new Error('The route decorator requires an route string argument'); return n.routes[e]=r, a;
        };
      }, e.onModel=function(e) {
        return function(n, r, a) {
          if (n.modelEvents||(n.modelEvents={}), t.isFunction(n.modelEvents)) throw new Error('The onModel decorator is not compatible with a modelEvents method'); if (!e) throw new Error('The onModel decorator requires an eventName argument'); return n.modelEvents[e]=r, a;
        };
      }, e.onCollection=function(e) {
        return function(n, r, a) {
          if (n.collectionEvents||(n.collectionEvents={}), t.isFunction(n.collectionEvents)) throw new Error('The onCollection decorator is not compatible with a collectionEvents method'); if (!e) throw new Error('The onCollection decorator requires an eventName argument'); return n.collectionEvents[e]=r, a;
        };
      }, e.template=function(e) {
        return function(t) {
          t.prototype.template=e;
        };
      }, e.childView=function(e) {
        return function(t) {
          t.prototype.childView=e;
        };
      }, e.childViewContainer=function(e) {
        return function(t) {
          t.prototype.childViewContainer=e;
        };
      }, e.ui=function() {
        for (var e=arguments.length, n=Array(e), r=0; r<e; r++)n[r]=arguments[r]; return function(e) {
          var r=e.prototype.ui||{}; var a=n[0]; var i=n[1]; if (t.isObject(a))t.extend(r, n[0]); else {
            if (!t.isString(a)||!t.isString(i)) throw new Error('The ui decorator takes either a single object as an argument or a key and value string'); r[a]=i;
          }e.prototype.ui=r;
        };
      }, e.useSuper=function(e, n, r) {
        var a=Object.getPrototypeOf(e)[n]; if (!t.isFunction(a)) throw new Error('The useSuper method requires the parent class to implement this function somewhere on its prototype chain'); return r.value=function() {
          for (var e=arguments.length, t=Array(e), n=0; n<e; n++)t[n]=arguments[n]; a.apply(this, t);
        }, r;
      }, e.localStorage=function(e) {
        return function(r) {
          if (!n.LocalStorage) throw new Error('The localStorage decorator requires Backbone.LocalStorage to have been loaded before use'); if (!t.isString(e)) throw new Error('The localStorage decorator requires a single string argument which will serve as the localStorage key'); r.prototype.localStorage=new n.LocalStorage(e);
        };
      }, e.replyRadio=function(e, n) {
        return function(r, a, i) {
          if (r.radioRequests||(r.radioRequests={}), t.isFunction(r.radioRequests)) throw new Error('The replyRadio decorator is not compatible with a radioRequests method'); if (!t.isString(e)||!t.isString(n)) throw new Error('The replyRadio decorator requires 2 arguments, a channel and a request string.'); return r.radioRequests[e+' '+n]=a, i;
        };
      };
    }(t, n(14), n(13));
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"Göstəriləcək heç nə yoxdur","name":"Test müddəti"},"severity":{"name":"Testlərin əhəmiyyəti"},"status":{"name":"Testlərin statusu"},"trend":{"empty":"Göstəriləcək heç nə yoxdur"}},"component":{"markToggle":{"hideCases":"{{mark}} nəticəni gizlədin","showCases":"{{mark}} nəticəni göstərin"},"statusToggle":{"hideCases":"{{status}} statuslu test nəticələrini gizlədin","showCases":"{{status}} statuslu test nəticələrini gizlədin"},"tree":{"download":"CSV endirin","empty":"Məlumat yoxdur","filter":"Status","filter-marks":"Teqlər","filtered":{"shown":"{{count}} göstərilir","total":"{{count}} test nəticəsi","total_plural":"{{count}} test nəticəsi"},"groups":"Qruplar haqqında məlumatları göstərin","time":{"max":{"name":"Maks","tooltip":"Qrupdakı ən uzun testin müddəti"},"sum":{"name":"Cəm","tooltip":"Qrupdakı test müddətlərinin cəmi"},"total":{"name":"Toplam","tooltip":"İlk test başlayandan sonuncu bitənə qədər olan vaxt"}},"unknown":"<Boş>"},"widgetStatus":{"showAll":"Hamısını göstər","total":"Toplam {{count}} element","total_plural":"Toplam {{count}} element"}},"controls":{"backto":"Geri","clipboard":"Mübadilə buferinə kopyala","clipboardError":"Mübadilə buferinə kopyalamaq mümkün olmadı. Bu özəllik browseriniz tərəfindən dəstəklənmir","clipboardSuccess":"Uğurla kopyalandı","collapse":"Aç","expand":"Genişlət","fullscreen":"Tam ekran","language":"Dili dəyişin"},"errors":{"missedAttachment":"Qoşma tapılmadı","notFound":"Tapılmadı"},"marks":{"flaky":"Qeyri-sabit","newBroken":"Yeni qırılmış","newFailed":"Yeni uğursuz","newPassed":"Yeni keçmiş","retriesStatusChange":"Yenidən cəhd etdikdən sonra status dəyişib"},"sorter":{"duration":"müddət","name":"ad","order":"sıra","status":"status"},"status":{"broken":"Qırılmış","failed":"Uğursuz","passed":"Keçmiş","skipped":"Buraxılmış","unknown":"Qeyri müəyyən"},"tab":{"categories":{"name":"Kateqoriyalar"},"graph":{"name":"Qraflar"},"overview":{"name":"Ümumibaxış"},"suites":{"name":"Test dəsti"},"timeline":{"name":"Zaman şkalası","selected":"Müddəti {{duration}} çox olan {{count}} test ({{percent}}%) seçildi","selected_plural":"Müddəti {{duration}} çox olan {{count}} test ({{percent}}%) seçildi"}},"testResult":{"categories":{"name":"Kateqoriyalar"},"description":{"name":"Açıqlama"},"duration":{"name":"Müddət"},"execution":{"body":"Test gövdəsi","downloadAttachment":{"tooltip":"Qoşmanı yeni tabda açın"},"name":"İcra","setup":"Hazırlanma","teardown":"Sonlandırma"},"history":{"empty":"Tarix məlumatı tapılmadı.","name":"Tarix","statistic":"Toplam:{{total}}, Keçmiş:{{passed}} ","successRate":"Uğur faizi","time":"{{date}} at {{time}}"},"links":{"name":"Linklər"},"overview":{"name":"Ümumibaxış"},"owner":{"name":"Sahibi"},"parameters":{"name":"Parameterlər"},"retries":{"empty":"Testlərin yenidən çalışdırılması ilə bağlı məlumat yoxdur","name":"Yenidən Cəhdlər","time":"{{date}} at {{time}}"},"severity":{"name":"Əhəmiyyəti"},"stats":{"count":{"attachments":"{{count}} qoşma","attachments_plural":"{{count}} qoşma","parameters":"{{count}} parameter","parameters_plural":"{{count}} parameter","steps":"{{count}} alt addım","steps_plural":"{{count}} alt addım"}},"status":{"empty":"Boş status detalları","trace":"Trace-i göstər"}},"widget":{"categories":{"name":"Kateqoriyalar"},"categoriesTrend":{"name":"Kateqoriyalar trendi"},"durationTrend":{"name":"Müddət trendi"},"environment":{"empty":"Mühit dəyişənləri haqqında məlumat yoxdur","name":"Mühit","showAll":"Hamısını göstər"},"executors":{"empty":"Testin icrası sistemi haqqında məlumat yoxdur","name":"Test icraçıları","unknown":"Bilinməyən"},"launches":{"empty":"Başlamalar haqqında məlumat yoxdur","name":"Başlamalar"},"retryTrend":{"name":"Yenidən cəhdlər trendi"},"suites":{"name":"Dəstlər"},"summary":{"aggregatedName":"Ümumi hesabat","launches":"Başlama","launches_plural":"Başlamalar","testResults":"test nəticəsi","testResults_plural":"test nəticələri"},"trend":{"name":"Trend"}}}');
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"Não há nada para mostrar","name":"Duração"},"severity":{"name":"Severidade"},"status":{"name":"Situação"},"trend":{"empty":"Não há nada para mostrar"}},"component":{"statusToggle":{"hideCases":"Ocultar resultados dos testes com situação {{status}}","showCases":"Mostrar resultados dos testes com situação {{status}}"},"tree":{"download":"Download CSV","empty":"Não há itens","filter":"Filtrar por situação","filtered":{"shown":"mostrar {{count}}","total":"resultado do teste {{count}}","total_plural":"resultados dos testes {{count}}"},"groups":"Alternar informações do grupo","time":{"max":{"name":"Max","tooltip":"Teste mais demorado"},"sum":{"name":"Soma","tooltip":"Soma da duração de todos os testes"},"total":{"name":"Total","tooltip":"Duração de inicio do primeiro teste até o ultimo teste finalizar"}},"unknown":"Grupo vazio"},"widgetStatus":{"showAll":"Mostrar tudo","total":"total de item {{count}}","total_plural":"total de itens {{count}}"}},"controls":{"backto":"Voltar para","clipboard":"Copiar para área de transferência","clipboardError":"Não é possível copiar o valor para área de transferência. Parece que está funcionalidade não é suportada pelo seu browser","clipboardSuccess":"Copiado com sucesso","collapse":"Reduzir","expand":"Expandir","fullscreen":"Tela cheia","language":"Mudar a linguagem"},"errors":{"missedAttachment":"Anexo não encontrado","notFound":"Não encontrado"},"marks":{"flaky":"Inconsistente","newBroken":"Novo quebrado","newFailed":"Novo falhou","newPassed":"Novo passou","retriesStatusChange":"Status alterado após nova tentativa"},"sorter":{"duration":"duração","name":"nome","order":"ordem","status":"situação"},"status":{"broken":"Quebrado","failed":"Falhou","passed":"Passou","skipped":"Ignorado","unknown":"Desconhecido"},"tab":{"categories":{"name":"Categorias"},"graph":{"name":"Gráficos"},"overview":{"name":"Visão geral"},"suites":{"name":"Suítes"},"timeline":{"name":"Linha do tempo","selected":"Selecionado {{count}} teste ({{percent}}%) com duração acima de {{duration}}","selected_plural":"Selecionados {{count}} testes ({{percent}}%) com duração acima de {{duration}}"}},"testResult":{"categories":{"name":"Categorias"},"description":{"name":"Descrição"},"duration":{"name":"Duração"},"execution":{"body":"Corpo do teste","name":"Execução","setup":"Pré-execução","teardown":"Pós-execução"},"history":{"name":"Histórico","successRate":"Taxa de sucesso"},"links":{"name":"Links"},"overview":{"name":"Visão geral"},"owner":{"name":"Proprietário"},"parameters":{"name":"Parâmetros"},"retries":{"empty":"Não há informação disponível sobre as tentativas de testes.","name":"Tentativas"},"severity":{"name":"Severidade"},"stats":{"count":{"attachments":"{{count}} anexo","attachments_plural":"{{count}} anexos","parameters":"{{count}} parâmetro","parameters_plural":"{{count}} parâmetros","steps":"{{count}} sub-passo","steps_plural":"{{count}} sub-passos"}},"status":{"empty":"Detalhes da situação vazio.","trace":"Mostrar trace"}},"widget":{"categories":{"name":"Categorias"},"categoriesTrend":{"name":"Tendência das categorias"},"durationTrend":{"name":"Tendência das durações"},"environment":{"empty":"Não há variáveis de ambiente.","name":"Ambiente","showAll":"Mostrar tudo"},"executors":{"empty":"Não há informação sobre os executores dos testes.","name":"Executores","unknown":"Desconhecido"},"launches":{"empty":"Não há informações sobre execuções","name":"Execuções"},"retryTrend":{"name":"Tendência das tentativas"},"suites":{"name":"Suítes"},"summary":{"aggregatedName":"Relatório agregado","launches":"execução","launches_plural":"execuções","testResults":"caso de teste","testResults_plural":"casos de teste"},"trend":{"name":"Tendência"}}}');
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"Hier gibt es nichts zu zeigen","name":"Dauer"},"severity":{"name":"Ausmaß"},"status":{"name":"Status"},"trend":{"empty":"Hier gibt es nichts zu zeigen"}},"component":{"statusToggle":{"hideCases":"Verstecke Testergebnisse mit Status {{status}}","showCases":"Zeige Testergebnisse mit Status {{status}}"},"tree":{"download":"CSV herunterladen","empty":"Keine Einträge verfügbar","filter":"Filtere Testfälle nach Status","filtered":{"shown":"{{count}} angezeigt","total":"{{count}} Testergebnis","total_plural":"{{count}} Testergebnisse"},"groups":"Gruppeninformationen an- / ausschalten","time":{"max":{"name":"Max","tooltip":"Längste Testdauer"},"sum":{"name":"Summe","tooltip":"Summe aller Testdauern"},"total":{"name":"Gesamt","tooltip":"Dauer vom Start des ersten bis zum Ende des letzten Tests"}},"unknown":"<Leer>"},"widgetStatus":{"showAll":"Zeige alle","total":"{{count}} Eintrag insgesamt","total_plural":"{{count}} Einträge insgesamt"}},"controls":{"backto":"Zurück zu","clipboard":"In Zwischenablage kopieren","clipboardError":"Wert konnte nicht in Zwischenablage kopiert werden. Ihr Browser scheint dieses Feature nicht zu unterstützen","clipboardSuccess":"Erfolgreich in Zwischenablage kopiert","collapse":"Verkleinern","expand":"Vergrößern","fullscreen":"Vollbild","language":"Sprache ändern"},"errors":{"missedAttachment":"Anhang nicht gefunden","notFound":"Nicht gefunden"},"marks":{"flaky":"Instabil","newBroken":"Neu defekt","newFailed":"Neu fehlgeschlagen","newPassed":"Neu erfolgreich","retriesStatusChange":"Status nach erneutem Versuch geändert"},"sorter":{"duration":"Dauer","name":"Name","order":"Reihenfolge","status":"Status"},"status":{"broken":"Defekt","failed":"Fehlgeschlagen","passed":"Erfolgreich","skipped":"Übersprungen","unknown":"Unbekannt"},"tab":{"categories":{"name":"Kategorien"},"graph":{"name":"Grafiken"},"overview":{"name":"Übersicht"},"suites":{"name":"Suiten"},"timeline":{"name":"Zeitstrahl","selected":"{{count}} Test ausgewählt ({{percent}}%) mit einer Dauer von über {{duration}}","selected_plural":"{{count}} Tests ausgewählt ({{percent}}%) mit einer Dauer von über {{duration}}"}},"testResult":{"categories":{"name":"Kategorien"},"description":{"name":"Beschreibung"},"duration":{"name":"Dauer"},"execution":{"body":"Test","name":"Durchführung","setup":"Vorbereitung","teardown":"Aufräumung"},"history":{"name":"Historie","successRate":"Erfolgsrate"},"links":{"name":"Links"},"overview":{"name":"Übersicht"},"owner":{"name":"Besitzer"},"parameters":{"name":"Parameter"},"retries":{"empty":"Keine Informationen zu Wiederholungen verfügbar","name":"Wiederholungen"},"severity":{"name":"Ausmaß"},"stats":{"count":{"attachments":"{{count}} Anhang","attachments_plural":"{{count}} Anhänge","parameters":"{{count}} Parameter","parameters_plural":"{{count}} Parameter","steps":"{{count}} Unterschritt","steps_plural":"{{count}} Unterschritte"}},"status":{"empty":"Keine Status Details","trace":"Zeige Stracktrace"}},"widget":{"categories":{"name":"Kategorien"},"categoriesTrend":{"name":"Kategorien Trend"},"durationTrend":{"name":"Dauer Trend"},"environment":{"empty":"Keine Umgebungsvariablen verfügbar","name":"Umgebung","showAll":"Zeige alle"},"executors":{"empty":"Keine Informationen zu Testdurchführern verfügbar","name":"Durchführer","unknown":"Unbekannt"},"launches":{"empty":"Keine Informationen zu Durchläufen verfügbar","name":"Durchläufe"},"retryTrend":{"name":"Wiederholungen Trend"},"suites":{"name":"Suiten"},"summary":{"aggregatedName":"Aggregierter Report","launches":"Durchlauf","launches_plural":"Durchläufe","testResults":"Testfall","testResults_plural":"Testfälle"},"trend":{"name":"Trend"}}}');
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"There is nothing to show","name":"Duration"},"severity":{"name":"Severity"},"status":{"name":"Status"},"trend":{"empty":"There is nothing to show"}},"component":{"markToggle":{"hideCases":"Hide {{mark}} test results","showCases":"Show {{mark}} test results"},"statusToggle":{"hideCases":"Hide test results with {{status}} status","showCases":"Show test results with {{status}} status"},"tree":{"download":"Download CSV","empty":"There are no items","filter":"Status","filter-marks":"Marks","filtered":{"shown":"{{count}} shown","total":"{{count}} test result","total_plural":"{{count}} test results"},"groups":"Toggle groups info","time":{"max":{"name":"Max","tooltip":"Longest test duration"},"sum":{"name":"Sum","tooltip":"Sum of all tests durations"},"total":{"name":"Total","tooltip":"Duration from first test started to last test finished"}},"unknown":"<Empty>"},"widgetStatus":{"showAll":"Show all","total":"{{count}} item total","total_plural":"{{count}} items total"}},"controls":{"backto":"Back to","clipboard":"Copy to clipboard","clipboardError":"Can not copy value to clipboard. Seems like this feature is not supported for your browser","clipboardSuccess":"Successfully copied","collapse":"Collapse","expand":"Expand","fullscreen":"Full screen","language":"Change language"},"errors":{"missedAttachment":"Attachment not found","notFound":"Not found"},"marks":{"flaky":"Flaky","newBroken":"New broken","newFailed":"New failed","newPassed":"New passed","retriesStatusChange":"Status changed after retry"},"sorter":{"duration":"duration","name":"name","order":"order","status":"status"},"status":{"broken":"Broken","failed":"Failed","passed":"Passed","skipped":"Skipped","unknown":"Unknown"},"tab":{"categories":{"name":"Categories"},"graph":{"name":"Graphs"},"overview":{"name":"Overview"},"suites":{"name":"Suites"},"timeline":{"name":"Timeline","selected":"Selected {{count}} test ({{percent}}%) with duration above {{duration}}","selected_plural":"Selected {{count}} tests ({{percent}}%) with duration above {{duration}}"}},"testResult":{"categories":{"name":"Categories"},"description":{"name":"Description"},"duration":{"name":"Duration"},"execution":{"body":"Test body","downloadAttachment":{"tooltip":"Open attachment in new tab"},"name":"Execution","setup":"Set up","teardown":"Tear down"},"history":{"empty":"No history information available.","name":"History","statistic":"{{passed}} of {{total}}","successRate":"Success rate","time":"{{date}} at {{time}}"},"links":{"name":"Links"},"overview":{"name":"Overview"},"owner":{"name":"Owner"},"parameters":{"name":"Parameters"},"retries":{"empty":"There is no information available about test retries","name":"Retries","time":"{{date}} at {{time}}"},"severity":{"name":"Severity"},"stats":{"count":{"attachments":"{{count}} attachment","attachments_plural":"{{count}} attachments","parameters":"{{count}} parameter","parameters_plural":"{{count}} parameters","steps":"{{count}} sub-step","steps_plural":"{{count}} sub-steps"}},"status":{"empty":"Empty status details","trace":"Show trace"}},"widget":{"categories":{"name":"Categories"},"categoriesTrend":{"name":"Categories trend"},"durationTrend":{"name":"Duration trend"},"environment":{"empty":"There are no environment variables","name":"Environment","showAll":"Show all"},"executors":{"empty":"There is no information about tests executors","name":"Executors","unknown":"Unknown"},"launches":{"empty":"There is no information about launches","name":"Launches"},"retryTrend":{"name":"Retries trend"},"suites":{"name":"Suites"},"summary":{"aggregatedName":"Aggregated report","launches":"launch","launches_plural":"launches","testResults":"test case","testResults_plural":"test cases"},"trend":{"name":"Trend"}}}');
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"No hay nada para mostrar","name":"Duración"},"severity":{"name":"Severidad"},"status":{"name":"Estado"},"trend":{"empty":"No hay nada para mostrar"}},"component":{"markToggle":{"hideCases":"Ocultar {{mark}} resultados de prueba","showCases":"Mostrar {{mark}} resultados de prueba"},"statusToggle":{"hideCases":"Ocultar resultados de pruebas con estado {{status}}","showCases":"Mostrar resultados de pruebas con estado {{status}}"},"tree":{"download":"Descargar CSV","empty":"No hay ítems","filter":"Estado","unknown":"<Vacío>","filtered":{"shown":"{{count}} mostrados","total":"{{count}} resultado","total_plural":"{{count}} resultados"},"groups":"Alternar información del grupo","time":{"max":{"name":"Max","tooltip":"Prueba con mayor duración"},"sum":{"name":"Suma","tooltip":"Suma de todas las pruebas"},"total":{"name":"Total","tooltip":"Duración desde el primer test iniciado hasta el último finalizado"}}},"widgetStatus":{"showAll":"Mostrar todo","total":"total de ítems {{count}}","total_plural":"total de ítems {{count}}"}},"controls":{"backto":"Volver a","clipboard":"Copiar a portapapeles","clipboardError":"No es posible utilizar el portapapeles. Parece ser que esta funcionalidad no es soportada por tu navegador","clipboardSuccess":"Copiado exitosamente","collapse":"Colapsar","expand":"Expandir","fullscreen":"Pantalla completa","language":"Cambiar lenguaje"},"errors":{"missedAttachment":"Adjunto no encontrado","notFound":"No encontrado"},"marks":{"flaky":"Inestable","newBroken":"Nuevo roto","newFailed":"Nuevo fallido","newPassed":"Nuevo pasado","retriesStatusChange":"El estado cambió después de reintentar"},"sorter":{"duration":"duración","name":"nombre","order":"orden","status":"estado"},"status":{"broken":"Roto","failed":"Fallido","passed":"Exitoso","skipped":"Ignorado","unknown":"Desconocido"},"tab":{"categories":{"name":"Categorías"},"graph":{"name":"Gráficos"},"overview":{"name":"Visión General"},"suites":{"name":"Suites"},"timeline":{"name":"Línea de Tiempo","selected":"Selecionada {{count}} prueba ({{percent}}%) con duración arriba de {{duration}}","selected_plural":"Selecionadas {{count}} pruebas ({{percent}}%) con duración arriba de {{duration}}"}},"testResult":{"categories":{"name":"Categorías"},"description":{"name":"Descripción"},"duration":{"name":"Duración"},"execution":{"body":"Contenido de la prueba","name":"Ejecución","setup":"Pre-ejecución","teardown":"Post-ejecución"},"history":{"name":"Histórico","successRate":"Tasa de éxito"},"links":{"name":"Links"},"overview":{"name":"Visión general"},"owner":{"name":"Propietario"},"parameters":{"name":"Parámetros"},"retries":{"empty":"No hay información disponible sobre los reintentos de la prueba","name":"Reintentos"},"severity":{"name":"Severidad"},"stats":{"count":{"attachments":"{{count}} adjunto","attachments_plural":"{{count}} adjuntos","parameters":"{{count}} parámetro","parameters_plural":"{{count}} parámetros","steps":"{{count}} sub-paso","steps_plural":"{{count}} sub-pasos"}},"status":{"empty":"Detalles de estado no existente","trace":"Mostrar trace"}},"widget":{"categories":{"name":"Categorías"},"categoriesTrend":{"name":"Tendencia de categorías"},"durationTrend":{"name":"Tendencia de duraciones"},"environment":{"empty":"No hay variables de ambiente definidas","name":"Ambiente","showAll":"Mostrar todo"},"executors":{"empty":"No hay información sobre los ejecutores de pruebas","name":"Ejecutores","unknown":"Desconocido"},"launches":{"empty":"No hay información sobre ejecutores","name":"Ejecutores"},"retryTrend":{"name":"Tendencia de reintentos"},"suites":{"name":"Suites"},"summary":{"aggregatedName":"Reporte agregado","launches":"ejecución","launches_plural":"ejecuciones","testResults":"caso de prueba","testResults_plural":"casos de prueba"},"trend":{"name":"Tendencia"}}}');
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"Il n\'y a rien à montrer","name":"Durée"},"severity":{"name":"Sévérité"},"status":{"name":"Statut"},"trend":{"empty":"Il n\'y a rien à montrer"}},"component":{"markToggle":{"hideCases":"Cacher les résultats de test marqués {{mark}}","showCases":"Montrer les résultats de test marqués {{mark}}"},"statusToggle":{"hideCases":"Cacher les résultats de test avec le statut {{status}}","showCases":"Montrer les résultats de test avec le statut {{status}}"},"tree":{"download":"Télécharger le fichier CSV","empty":"Il n\'y a aucun article","filter":"Statut","filter-marks":"Marques","filtered":{"shown":"{{count}} montré","total":"{{count}} résultat de test","total_plural":"{{count}} résultats de test"},"groups":"Basculer les informations des groupes","time":{"max":{"name":"Maximum","tooltip":"Durée la plus longue"},"sum":{"name":"Somme","tooltip":"Somme de toutes les durées"},"total":{"name":"Total","tooltip":"Durée depuis le premier test démarré jusqu\'au dernier test terminé"}},"unknown":"<Vide>"},"widgetStatus":{"showAll":"Montrer tout","total":"{{count}} article au total","total_plural":"{{count}} articles au total"}},"controls":{"backto":"Retour vers","clipboard":"Copier dans le presse-papier","clipboardError":"Impossible de copier vers le presse-papier. Cette fonction ne semble pas être supportée par votre navigateur","clipboardSuccess":"Copié avec succès","collapse":"Plier","expand":"Déplier","fullscreen":"Plein écran","language":"Changer de langue"},"errors":{"missedAttachment":"Pièce jointe non trouvée","notFound":"Non trouvé"},"marks":{"flaky":"Instable","newBroken":"Cassé (nouveau)","newFailed":"Échoué (nouveau)","newPassed":"Réussi (nouveau)","retriesStatusChange":"L\'état a changé après une nouvelle tentative"},"sorter":{"duration":"durée","name":"nom","order":"ordre","status":"statut"},"status":{"broken":"Cassé","failed":"Échoué","passed":"Passé","skipped":"Ignoré","unknown":"Inconnu"},"tab":{"categories":{"name":"Catégories"},"graph":{"name":"Graphiques"},"overview":{"name":"Aperçu"},"suites":{"name":"Suites"},"timeline":{"name":"Chronologie","selected":"{{count}} test sélectionné ({{percent}}%) avec une durée supérieure à {{duration}}","selected_plural":"{{count}} tests sélectionnés ({{percent}}%) avec une durée supérieure à {{duration}}"}},"testResult":{"categories":{"name":"Catégories"},"description":{"name":"Description"},"duration":{"name":"Durée"},"execution":{"body":"Contenu du test","downloadAttachment":{"tooltip":"Ouvrir la pièce jointe dans un nouvel onglet"},"name":"Exécution","setup":"Pré exécution","teardown":"Post exécution"},"history":{"empty":"Aucune information à propos de l\'historique.","name":"Historique","statistic":"{{passed}} sur {{total}}","successRate":"Taux de succès","time":"{{date}} à {{time}}"},"links":{"name":"Liens"},"overview":{"name":"Aperçu"},"owner":{"name":"Propriétaire"},"parameters":{"name":"Paramètres"},"retries":{"empty":"Aucune information à propos des tentatives","name":"Tentatives","time":"{{date}} à {{time}}"},"severity":{"name":"Sévérité"},"stats":{"count":{"attachments":"{{count}} pièce jointe","attachments_plural":"{{count}} pièces jointes","parameters":"{{count}} paramètre","parameters_plural":"{{count}} paramètres","steps":"{{count}} sous-étape","steps_plural":"{{count}} sous-étapes"}},"status":{"empty":"Détails du statut vide","trace":"Afficher la trace"}},"widget":{"categories":{"name":"Catégories"},"categoriesTrend":{"name":"Tendance des catégories"},"durationTrend":{"name":"Tendance de la durée"},"environment":{"empty":"Aucune variable d\'environnement","name":"Environnement","showAll":"Afficher tout"},"executors":{"empty":"Aucune information à propos des exécuteurs des tests","name":"Exécuteurs","unknown":"Inconnu"},"launches":{"empty":"Aucune information à propos des lancements","name":"Lancements"},"retryTrend":{"name":"Tendance des tentatives"},"suites":{"name":"Suites"},"summary":{"aggregatedName":"Rapport agrégé","launches":"lancement","launches_plural":"lancements","testResults":"cas de test","testResults_plural":"cas de test"},"trend":{"name":"Tendance"}}}');
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"אין דבר להציג","name":"זמן ריצה"},"severity":{"name":"חומרה"},"status":{"name":"סטטוס"},"trend":{"empty":"אין דבר להציג"}},"component":{"statusToggle":{"hideCases":"הסתר תוצאות ריצה עם הסטטוס {{status}}","showCases":"הצג תוצאות ריצה עם הסטטוס {{status}}"},"tree":{"download":"הורד קובץ CSV","empty":"לא קיימים פריטים","filter":"מיין מקרי בדיקה על ידי סטטוס","filtered":{"shown":"מופיעים {{count}}","total":"תוצאת ריצה {{count}}","total_plural":"{{count}} תוצאות ריצה"},"groups":"הצג/הסתר את המידע על הקבוצות","time":{"max":{"name":"מקסימלי","tooltip":"זמן הריצה הכי ארוך"},"sum":{"name":"סכום","tooltip":"סכום כל זמני תוצאות הריצה"},"total":{"name":"סך הכול","tooltip":"משך זמן הריצה מתחילת ריצת מקרה הבדיקה הראשון עד סיום ריצת מקרה הבדיקה האחרון"}},"unknown":"רֵיק"},"widgetStatus":{"showAll":"הצג את כל הפריטים","total":"סך הכול פריט {{count}}","total_plural":"סך הכול {{count}} פריטים"}},"controls":{"backto":"חזור ל","clipboard":"העתק אל מגש המערכת","clipboardError":"לא ניתן להעתיק את הערך אל מגש המערכת. נראה שהתכונה הזאת לא נתמכת על ידי הדפדפן שלך","clipboardSuccess":"הועתק בהצלחה","collapse":"כווץ","expand":"הרחב","fullscreen":"מסך מלא","language":"שנה שפה"},"errors":{"missedAttachment":"התוכן המצורף לא נמצא","notFound":"לא נמצא"},"marks":{"flaky":"לא יציב","newBroken":"חדש שבור","newFailed":"חדש נכשל","newPassed":"חדש עבר","retriesStatusChange":"הסטטוס השתנה לאחר ניסיון חוזר"},"sorter":{"duration":"זמן ריצה","name":"שם מקרה הבדיקה","order":"סדר","status":"סטטוס"},"status":{"broken":"שבור","failed":"נכשל","passed":"עבר","skipped":"דולג","unknown":"לא ידוע"},"tab":{"categories":{"name":"קטגוריות"},"graph":{"name":"גרפים"},"overview":{"name":"סקירה כללית"},"suites":{"name":"קבוצות מקרי בדיקה"},"timeline":{"name":"ציר זמן","selected":"נבחר מקרה בדיקה {{count}} ({{percent}}%) עם זמן ריצה מעל {{duration}}","selected_plural":"נבחרו {{count}} מקרי בדיקה ({{percent}}%) עם זמן ריצה מעל {{duration}}"}},"testResult":{"categories":{"name":"קטגוריות"},"description":{"name":"תיאור"},"duration":{"name":"זמן ריצה"},"execution":{"body":"תוכן מקרה הבדיקה","name":"הרצה","setup":"הכנת הריצה","teardown":"סיום הריצה"},"history":{"name":"היסטוריה","successRate":"שיעור הצלחה"},"links":{"name":"קישורים"},"overview":{"name":"סקירה כללית"},"owner":{"name":"האחראי למקרה הבדיקה"},"parameters":{"name":"פרמטרים"},"retries":{"empty":"אין מידע זמין על ניסיונות ריצה חוזרים","name":"ניסיונות ריצה חוזרים"},"severity":{"name":"חומרה"},"stats":{"count":{"attachments":"תוכן מצורף {{count}}","attachments_plural":"{{count}} תכנים מצורפים","parameters":"פרמטר {{count}}","parameters_plural":"{{count}} פרמטרים","steps":"צעד משנה {{count}}","steps_plural":"{{count}} צעדי משנה"}},"status":{"empty":"לא קיימים פרטים על מצב מקרה הבדיקה","trace":"הצג מידע נוסף"}},"widget":{"categories":{"name":"קטגוריות"},"categoriesTrend":{"name":"מגמת ריצה על קטגוריות"},"durationTrend":{"name":"מגמת זמן ריצה"},"environment":{"empty":"לא קיימים משתני סביבה","name":"משתני סביבה","showAll":"הצג את כל משתני הסביבה"},"executors":{"empty":"לא קיים מידע על כלי הרצת מקרי הבדיקה","name":"כלי הרצה","unknown":"לא ידוע"},"launches":{"empty":"לא קיים מידע על חבילות הרצה","name":"חבילות הרצה"},"retryTrend":{"name":"מגמת חזרות על ריצה"},"suites":{"name":"קבוצות מקרי בדיקה"},"summary":{"aggregatedName":"דוח","launches":"חבילת הרצה","launches_plural":"חבילות הרצה","testResults":"תוצאת בדיקה","testResults_plural":"תוצאות בדיקה"},"trend":{"name":"מגמת ריצות"}}}');
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"何も表示するものがありません","name":"期間"},"severity":{"name":"重大度"},"status":{"name":"ステータス"},"trend":{"empty":"何も表示するものがありません"}},"component":{"markToggle":{"hideCases":"{{mark}} 件のテスト結果を隠す","showCases":"{{mark}} 件のテスト結果を表示"},"statusToggle":{"hideCases":"ステータスが {{status}} のテスト結果を隠す","showCases":"ステータスが {{status}} のテスト結果を表示"},"tree":{"download":"CSVをダウンロード","empty":"何もありません","filter":"ステータス","filter-marks":"マーク","filtered":{"shown":"{{count}} 件を表示","total":"{{count}} 件のテスト結果","total_plural":"{{count}} 件のテスト結果"},"groups":"グループ情報を表示・非表示","time":{"max":{"name":"最長","tooltip":"一番長い実行期間"},"sum":{"name":"合計","tooltip":"全てのテスト実行期間の合計"},"total":{"name":"全体","tooltip":"最初のテストが始まってから最後のテストが終わるまでの期間"}},"unknown":"空ける"},"widgetStatus":{"showAll":"全て表示","total":"計 {{count}} 件","total_plural":"計 {{count}} 件"}},"controls":{"backto":"戻る","clipboard":"クリップボードにコピー","clipboardError":"クリップボードにコピーできませんでした。ブラウザがサポートしていないようです。","clipboardSuccess":"コピーされました","collapse":"折り畳む","expand":"拡大","fullscreen":"フルスクリーン","language":"言語を変更"},"errors":{"missedAttachment":"添付ファイルは見つかりませんでした","notFound":"見つかりませんでした"},"marks":{"flaky":"不安定","newBroken":"新しく壊れた","newFailed":"新しい失敗","newPassed":"新しい成功","retriesStatusChange":"再試行後にステータスが変更されました"},"sorter":{"duration":"期間","name":"名前","order":"順序","status":"ステータス"},"status":{"broken":"故障","failed":"失敗","passed":"成功","skipped":"スキップ","unknown":"不明"},"tab":{"categories":{"name":"カテゴリー"},"graph":{"name":"グラフ"},"overview":{"name":"概要"},"suites":{"name":"スイート"},"timeline":{"name":"タイムライン","selected":"{{duration}} の期間で選択された {{count}} 件のテスト ({{percent}}%)","selected_plural":"{{duration}} の期間で選択された {{count}} 件のテスト ({{percent}}%)"}},"testResult":{"categories":{"name":"カテゴリー"},"description":{"name":"説明"},"duration":{"name":"期間"},"execution":{"body":"テスト本体","name":"実行","setup":"セットアップ作業","teardown":"仕上げ作業"},"history":{"name":"履歴","successRate":"成功率"},"links":{"name":"リンク"},"overview":{"name":"概要"},"owner":{"name":"オーナー"},"parameters":{"name":"パラメータ"},"retries":{"empty":"テストの再実行に関する情報がありません","name":"再実行"},"severity":{"name":"重大度"},"stats":{"count":{"attachments":"{{count}} 添付ファイル","attachments_plural":"{{count}} 添付ファイル","parameters":"{{count}} パラメータ","parameters_plural":"{{count}} パラメータ","steps":"{{count}} サブステップ","steps_plural":"{{count}} サブステップ"}},"status":{"empty":"ステータスに関する詳細はありません","trace":"トレースを表示"}},"widget":{"categories":{"name":"カテゴリー"},"categoriesTrend":{"name":"カテゴリーの傾向"},"durationTrend":{"name":"期間の傾向"},"environment":{"empty":"環境変数がありません","name":"環境","showAll":"全て表示する"},"executors":{"empty":"テスト実行者に関する情報はありません","name":"実行者","unknown":"不明"},"launches":{"empty":"開始に関する情報はありません","name":"開始"},"retryTrend":{"name":"再実行の傾向"},"suites":{"name":"スイート"},"summary":{"aggregatedName":"集計レポート","launches":"開始","launches_plural":"開始","testResults":"テストケース","testResults_plural":"テストケース"},"trend":{"name":"傾向"}}}');
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"정보가 없습니다.","name":"시간"},"severity":{"name":"중요도"},"status":{"name":"상태"},"trend":{"empty":"정보가 없습니다."}},"component":{"markToggle":{"hideCases":"{{mark}} 감추기","showCases":"{{mark}} 보기"},"statusToggle":{"hideCases":"{{status}} 상태의 테스트 결과 감추기","showCases":"{{status}} 상태의 테스트 결과 보기"},"tree":{"download":"CSV 다운로드","empty":"내용이 없습니다.","filter":"상태","filter-marks":"마크","filtered":{"shown":"{{count}} 개 표시","total":"{{count}} 개의 테스트 결과","total_plural":"{{count}} 개의 테스트 결과"},"groups":"그룹 정보 표시","time":{"max":{"name":"최대","tooltip":"가장 긴 테스트 소요시간"},"sum":{"name":"합계","tooltip":"테스트 소요시간 총 합"},"total":{"name":"전체","tooltip":"첫번째 테스트부터 마지막 테스트까지의 소요시간"}},"unknown":"없는"},"widgetStatus":{"showAll":"전체보기","total":"총 {{count}} 개","total_plural":"총 {{count}} 개"}},"controls":{"backto":"돌아가기","clipboard":"클립보드에 복사","clipboardError":"클립보드에 복사가 되지 않습니다. 브러우저에 지원되지 않는 기능입니다.","clipboardSuccess":"성공적으로 복사되었습니다.","collapse":"접기","expand":"펼치기","fullscreen":"전체화면","language":"언어 변경"},"errors":{"missedAttachment":"첨부파일을 찾을 수 없습니다.","notFound":"찾을 수 없음"},"marks":{"flaky":"불안정함","newBroken":"새로운 깨진","newFailed":"새로 실패함","newPassed":"새로운 통과","retriesStatusChange":"새재시도 후 상태가 변경됨"},"sorter":{"duration":"소요시간","name":"이름","order":"순서","status":"상태"},"status":{"broken":"고장","failed":"실패","passed":"통과","skipped":"건너뜀","unknown":"알수없음"},"tab":{"categories":{"name":"카테고리"},"graph":{"name":"그래프"},"overview":{"name":"요약"},"suites":{"name":"스위트"},"timeline":{"name":"타임라인","selected":"{{duration}} 이상의 시간이 소요된 {{count}} 개 테스트 ({{percent}}%)","selected_plural":"{{duration}} 이상의 시간이 소요된 {{count}} 개 테스트 ({{percent}}%)"}},"testResult":{"categories":{"name":"카테고리"},"description":{"name":"설명"},"duration":{"name":"시간"},"execution":{"body":"테스트 내용","name":"실행","setup":"준비 작업","teardown":"종료 작업"},"history":{"name":"히스토리","successRate":"성공률"},"links":{"name":"링크"},"overview":{"name":"요약"},"owner":{"name":"소유자"},"parameters":{"name":"패러미터"},"retries":{"empty":"테스트 재시도에 대한 정보가 없습니다.","name":"재시도"},"severity":{"name":"중요도"},"stats":{"count":{"attachments":"첨부파일 {{count}} 개","attachments_plural":"첨부파일 {{count}} 개","parameters":"패러미터 {{count}} 개","parameters_plural":"패러미터 {{count}} 개","steps":"하위 스텝 {{count}} 개","steps_plural":"하위 스텝 {{count}} 개"}},"status":{"empty":"상태 정보가 없습니다.","trace":"추적 정보 보기"}},"widget":{"categories":{"name":"카테고리"},"categoriesTrend":{"name":"카테고리 트렌드"},"durationTrend":{"name":"소요시간 트렌드"},"environment":{"empty":"환경변수가 없습니다.","name":"환경","showAll":"전체 보기"},"executors":{"empty":"실행 정보가 없습니다.","name":"실행 주체","unknown":"알 수 없음"},"launches":{"empty":"시작정보가 없습니다.","name":"시작"},"retryTrend":{"name":"재시도 트렌드"},"suites":{"name":"스위트"},"summary":{"aggregatedName":"전체 리포트","launches":"시작","launches_plural":"시작","testResults":"테스트 케이스","testResults_plural":"테스트 케이스"},"trend":{"name":"트렌드"}}}');
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"Er is niets te tonen","name":"Duur"},"severity":{"name":"Ernst"},"status":{"name":"Status"},"trend":{"empty":"Er is niets te tonen"}},"component":{"markToggle":{"hideCases":"Verberg testresultaten gemarkeerd als ‘{{mark}}’","showCases":"Toon testresultaten gemarkeerd als ‘{{mark}}’"},"statusToggle":{"hideCases":"Verberg testresultaten met status ‘{{status}}’","showCases":"Toon testresultaten met status ‘{{status}}’"},"tree":{"download":"Download CSV","empty":"Er zijn geen items","filter":"Status","filter-marks":"Markeringen","filtered":{"shown":"{{count}} getoond","total":"{{count}} testresultaat","total_plural":"{{count}} testresultaten"},"groups":"Groepsinformatie tonen/verbergen","time":{"max":{"name":"Langste","tooltip":"Duur van de langste test"},"sum":{"name":"Som","tooltip":"Opgetelde duur van alle tests"},"total":{"name":"Totaal","tooltip":"Doorloop van eerste test gestart tot laatste test beëindigd"}},"unknown":"<Leeg>"},"widgetStatus":{"showAll":"Toon alle","total":"{{count}} item in totaal","total_plural":"{{count}} items in totaal"}},"controls":{"backto":"Terug naar","clipboard":"Kopieer naar klembord","clipboardError":"Kan niet kopiëren naar klembord. De browser lijkt deze functionaliteit niet te ondersteunen.","clipboardSuccess":"Gekopieerd naar klembord","collapse":"Inklappen","expand":"Uitklappen","fullscreen":"Volledig scherm","language":"Taal wijzigen"},"errors":{"missedAttachment":"Bijlage niet gevonden","notFound":"Niet gevonden"},"marks":{"flaky":"Instabiel","newBroken":"Nieuw gebroken","newFailed":"Nieuw gefaald","newPassed":"Nieuw geslaagd","retriesStatusChange":"Status gewijzigd na opnieuw proberen"},"sorter":{"duration":"duur","name":"naam","order":"volgorde","status":"status"},"status":{"broken":"Defect","failed":"Gefaald","passed":"Succes","skipped":"Overgeslagen","unknown":"Onbekend"},"tab":{"categories":{"name":"Categorieën"},"graph":{"name":"Grafieken"},"overview":{"name":"Overzicht"},"suites":{"name":"Suites"},"timeline":{"name":"Tijdlijn","selected":"{{count}} test ({{percent}}%) geselecteerd met een duur van meer dan {{duration}}","selected_plural":"{{count}} tests ({{percent}}%) geselecteerd met een duur van meer dan {{duration}}"}},"testResult":{"categories":{"name":"Categorieën"},"description":{"name":"Omschrijving"},"duration":{"name":"Duur"},"execution":{"body":"Test body","downloadAttachment":{"tooltip":"Bijlage in een nieuw tabblad openen"},"name":"Uitvoering","setup":"Set up","teardown":"Tear down"},"history":{"empty":"Geen historische gegevens beschikbaar.","name":"Geschiedenis","statistic":"{{passed}} van {{total}}","successRate":"Slagingsratio","time":"{{date}} om {{time}}"},"links":{"name":"Links"},"overview":{"name":"Overzicht"},"owner":{"name":"Eigenaar"},"parameters":{"name":"Parameters"},"retries":{"empty":"Geen informatie beschikbaar.","name":"Pogingen","time":"{{date}} om {{time}}"},"severity":{"name":"Ernst"},"stats":{"count":{"attachments":"{{count}} bijlage","attachments_plural":"{{count}} bijlagen","parameters":"{{count}} parameter","parameters_plural":"{{count}} parameters","steps":"{{count}} substap","steps_plural":"{{count}} substappen"}},"status":{"empty":"Lege statusdetails","trace":"Toon trace"}},"widget":{"categories":{"name":"Categorieën"},"categoriesTrend":{"name":"Trend categorieën"},"durationTrend":{"name":"Trend duur"},"environment":{"empty":"Er zijn geen omgevingsvariabelen","name":"Omgeving","showAll":"Toon alles"},"executors":{"empty":"Er is geen informatie over testuitvoerders","name":"Uitvoerders","unknown":"Onbekend"},"launches":{"empty":"Er is geen informatie over starts","name":"Start"},"retryTrend":{"name":"Trend nieuwe pogingen"},"suites":{"name":"Suites"},"summary":{"aggregatedName":"Geaggregeerd rapport","launches":"start","launches_plural":"starts","testResults":"testgeval","testResults_plural":"testgevallen"},"trend":{"name":"Trend"}}}');
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"Brak czegokolwiek do pokazania","name":"Czas trwania"},"severity":{"name":"Ważność"},"status":{"name":"Status"},"trend":{"empty":"Brak czegokolwiek do pokazania"}},"component":{"statusToggle":{"hideCases":"Ukryj rezultaty testów ze statusem {{status}}","showCases":"Pokaż rezultaty testów ze statusem {{status}}"},"tree":{"download":"Pobierz CSV","empty":"Brak elementów","filter":"Filtrowanie według statusu","filter-marks":"Filtrowanie według oznaczenia","filtered":{"shown_0":"{{count}} pokazany","shown_1":"{{count}} pokazane","shown_2":"{{count}} pokazanych","total_0":"{{count}} rezultat testu","total_1":"{{count}} rezultaty testów","total_2":"{{count}} rezultatów testów"},"groups":"Przełącz informacje o grupach","time":{"max":{"name":"Najdłuższy","tooltip":"Najdłuższy czas trwania"},"sum":{"name":"Suma","tooltip":"Suma czasów trwania wszystkich testów"},"total":{"name":"Całkowity","tooltip":"Czas od uruchomienia pierwszego testu do zakończenia ostatniego testu"}},"unknown":"<Pusty>"},"widgetStatus":{"showAll":"Pokaż wszystko","total_0":"Razem {{count}} pozycja","total_1":"Razem {{count}} pozycje","total_2":"Razem {{count}} pozycji"}},"controls":{"backto":"Powrót do","clipboard":"Zapisz do schowka","clipboardError":"Nie można skopiować do schowka. Najprawdopodobniej twoja przeglądarka nie obsługuje tej funkcji","clipboardSuccess":"Skopiowano pomyślnie","collapse":"Zwiń","expand":"Rozwiń","fullscreen":"Pełny ekran","language":"Zmień język"},"errors":{"missedAttachment":"Nie znaleziono załącznika","notFound":"Nie znaleziono"},"marks":{"flaky":"Niestabilny","newBroken":"Nowy uszkodzony","newFailed":"Nowy nieudany","newPassed":"Nowy udany","retriesStatusChange":"Status zmieniony po ponownej próbie"},"sorter":{"duration":"czas trwania","name":"nazwa","order":"kolejność","status":"status"},"status":{"broken":"Uszkodzony","failed":"Nieudany","passed":"Pomyślny","skipped":"Pominięty","unknown":"Nieznany"},"tab":{"categories":{"name":"Kategorie"},"graph":{"name":"Wykresy"},"overview":{"name":"Podsumowanie"},"suites":{"name":"Zestawy"},"timeline":{"name":"Oś czasowa","selected_0":"{{count}} wybrany test ({{percent}}%) z czasem trwania powyżej {{duration}}","selected_1":"{{count}} wybrane testy ({{percent}}%) z czasem trwania powyżej {{duration}}","selected_2":"{{count}} wybranych testów ({{percent}}%) z czasem trwania powyżej {{duration}}"}},"testResult":{"categories":{"name":"Kategorie"},"description":{"name":"Opis"},"duration":{"name":"Czas trwania"},"execution":{"body":"Ciało testu","name":"Wykonanie","setup":"Przygotowanie","teardown":"Zakończenie"},"history":{"name":"Historia","successRate":"Współczynnik powodzenia"},"links":{"name":"Odnośniki"},"overview":{"name":"Podsumowanie"},"owner":{"name":"Właściciel"},"parameters":{"name":"Parametery"},"retries":{"empty":"Brak dostępnych informacji o powtórzeniach testów","name":"Powtórzenia"},"severity":{"name":"Ważność"},"stats":{"count":{"attachments_0":"{{count}} załącznik","attachments_1":"{{count}} załączniki","attachments_2":"{{count}} załączników","parameters_0":"{{count}} parametr","parameters_1":"{{count}} parametry","parameters_2":"{{count}} parametrów","steps":"{{count}} podetap","steps_plural":"{{count}} podetapy"}},"status":{"empty":"Puste szczegóły statusu","trace":"Pokaż ślady"}},"widget":{"categories":{"name":"Kategorie"},"categoriesTrend":{"name":"Trend kategorii"},"durationTrend":{"name":"Trend czasu trwania"},"environment":{"empty":"Brak zmiennych środowiskowych","name":"Środowisko","showAll":"Pokaż wszystkie"},"executors":{"empty":"Brak informacji o wykonawcach testów","name":"Wykonawcy","unknown":"Nieznany"},"launches":{"empty":"Brak informacji o uruchomieniach","name":"Uruchomienia"},"retryTrend":{"name":"Trend powtórzeń"},"suites":{"name":"Zestawy"},"summary":{"aggregatedName":"Raport zbiorczy","launches_0":"uruchomienie","launches_1":"uruchomienia","launches_3":"uruchomień","testResults_0":"przypadek testowy","testResults_1":"przypadki testowe","testResults_3":"przypadków testowych"},"trend":{"name":"Trend"}}}');
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"Нет данных","name":"Длительность тестов"},"severity":{"name":"Важность тестов"},"status":{"name":"Статусы тестов"},"trend":{"empty":"Нет данных"}},"component":{"markToggle":{"hideCases":"Скрыть {{mark}} результаты","showCases":"Показать {{mark}} результаты"},"statusToggle":{"hideCases":"Скрыть результаты со статусом \\"{{status}}\\"","showCases":"Показать результаты со статусом \\"{{status}}\\""},"tree":{"empty":"Нет данных","filter":"Статусы","filter-marks":"Метки","filtered":{"shown_0":"{{count}} показан","shown_1":"{{count}} показано","shown_2":"{{count}} показано","total_0":"всего {{count}} тест","total_1":"всего {{count}} теста","total_2":"всего {{count}} тестов"},"groups":"Показывать информацию о группах","time":{"max":{"name":"Самый долгий","tooltip":"Длительность самого долгого теста в группе"},"sum":{"name":"Суммарно","tooltip":"Сумма длительностей всех тестов в группе"},"total":{"name":"Итого","tooltip":"Время с начала первого теста до конца последнего"}},"unknown":"<Пусто>"},"widgetStatus":{"showAll":"Показать все","total_0":"Всего {{count}} элемент","total_1":"Всего {{count}} элемента","total_2":"Всего {{count}} элементов"}},"controls":{"backto":"Вернуться на","clipboard":"Скопировать в буфер обмена","clipboardError":"Ошибка. Скорее всего ваш браузер не поддерживает данную функциональность","clipboardSuccess":"Значение успешно скопировано","collapse":"Свернуть","expand":"Развернуть","fullscreen":"На весь экран","language":"Сменить язык"},"errors":{"missedAttachment":"Вложение не найдено","notFound":"Не найдено"},"marks":{"flaky":"Нестабильный","newBroken":"Новый сломанный","newFailed":"Новый упавший","newPassed":"Новый пройденный","retriesStatusChange":"Изменение статуса в перезапуске"},"sorter":{"duration":"длительность","name":"имя","order":"порядок","status":"статус"},"status":{"broken":"Сломалось","failed":"Не прошло","passed":"Прошло","skipped":"Пропущено","unknown":"Неизвестно"},"tab":{"categories":{"name":"Категории"},"graph":{"name":"Графики"},"overview":{"name":"Обзор"},"suites":{"name":"Тест сюиты"},"timeline":{"name":"Временная шкала","selected_0":"Выбран {{count}} тест ({{percent}}%) с длительностью выше {{duration}}","selected_1":"Выбрано {{count}} теста ({{percent}}%) с длительностью выше {{duration}}","selected_2":"Выбрано {{count}} тестов ({{percent}}%) с длительностью выше {{duration}}"}},"testResult":{"categories":{"name":"Категории"},"description":{"name":"Описание"},"duration":{"name":"Длительность"},"execution":{"body":"Тело теста","name":"Выполнение","setup":"Подготовка","teardown":"Завершение"},"history":{"name":"История","successRate":"Success rate"},"links":{"name":"Ссылки"},"overview":{"name":"Обзор"},"owner":{"name":"Ответственный"},"parameters":{"name":"Параметры"},"retries":{"empty":"Нет информации о перезапусках теста","name":"Перезапуски"},"severity":{"name":"Важность"},"stats":{"count":{"attachments_0":"{{count}} вложение","attachments_1":"{{count}} вложения","attachments_2":"{{count}} вложений","parameters_0":"{{count}} параметр","parameters_1":"{{count}} параметра","parameters_2":"{{count}} параметров","steps_0":"{{count}} вложенный шаг","steps_1":"{{count}} вложенных шага","steps_2":"{{count}} вложенных шагов"}},"status":{"empty":"Дополнительная информация о статусе отсутствует","trace":"Показать трейс"}},"widget":{"categories":{"name":"Категории"},"environment":{"empty":"Отсутствует информация про окружение","name":"Окружение","showAll":"Показать все"},"executors":{"empty":"Данные о системе выполнения тестов отсутствуют","name":"Система выполнения тестов","unknown":"Неизвестно"},"launches":{"empty":"Отсутствует информация про запуски","name":"Запуски тестов"},"suites":{"name":"Тест сюиты"},"summary":{"aggregatedName":"Агрегированый отчет","launches_0":"запуск тестов","launches_1":"запуска тестов","launches_2":"запусков тестов","testResults_0":"тестовый сценарий","testResults_1":"тестовых сценария","testResults_2":"тестовых сценариев"},"trend":{"name":"Тренд"}}}');
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"Gösterilecek bir şey yok","name":"Süre"},"severity":{"name":"Önem Derecesi"},"status":{"name":"Durum"},"trend":{"empty":"Gösterilecek bir şey yok"}},"component":{"markToggle":{"hideCases":"{{mark}} test sonuçlarını gizle","showCases":"{{mark}} test sonuçlarını göster"},"statusToggle":{"hideCases":"{{status}} durumlu test sonuçlarını gizle","showCases":"{{status}} durumlu test sonuçlarını göster"},"tree":{"download":"CSV indir","empty":"Öğe yok","filter":"Durum","filter-marks":"İşaretler","filtered":{"shown":"{{count}} gösteriliyor","total":"{{count}} test sonucu","total_plural":"{{count}} test sonucu"},"groups":"Grup bilgisini aç/kapat","time":{"max":{"name":"Maks.","tooltip":"En uzun test süresi"},"sum":{"name":"Toplam","tooltip":"Tüm test sürelerinin toplamı"},"total":{"name":"Toplam Süre","tooltip":"İlk testin başlangıcından son testin bitişine kadar geçen süre"}},"unknown":"<Boş>"},"widgetStatus":{"showAll":"Hepsini Göster","total":"{{count}} öğe toplam","total_plural":"{{count}} öğe toplam"}},"controls":{"backto":"Geri Dön","clipboard":"Panoya Kopyala","clipboardError":"Değer panoya kopyalanamadı. Tarayıcınız tarafından desteklenmediği görünüyor.","clipboardSuccess":"Başarıyla kopyalandı","collapse":"Daralt","expand":"Genişlet","fullscreen":"Tam Ekran","language":"Dili Değiştir"},"errors":{"missedAttachment":"Ek dosya bulunamadı","notFound":"Bulunamadı"},"marks":{"flaky":"Kararsız","newBroken":"Yeni Bozuk","newFailed":"Yeni Başarısız","newPassed":"Yeni Başarılı","retriesStatusChange":"Yeniden deneme sonrası durum değişikliği"},"sorter":{"duration":"süre","name":"ad","order":"sıralama","status":"durum"},"status":{"broken":"Kırık","failed":"Başarısız","passed":"Başarılı","skipped":"Atlandı","unknown":"Bilinmeyen"},"tab":{"categories":{"name":"Kategoriler"},"graph":{"name":"Grafikler"},"overview":{"name":"Genel Bakış"},"suites":{"name":"Test Suitleri"},"timeline":{"name":"Zaman Çizelgesi","selected":"{{duration}} süreden fazla süren {{count}} test (%{{percent}}) seçildi","selected_plural":"{{duration}} süreden fazla süren {{count}} test (%{{percent}}) seçildi"}},"testResult":{"categories":{"name":"Kategoriler"},"description":{"name":"Açıklama"},"duration":{"name":"Süre"},"execution":{"body":"Test gövdesi","downloadAttachment":{"tooltip":"Eki yeni bir sekmede aç"},"name":"Çalıştırma","setup":"Kurulum","teardown":"Kaldırma"},"history":{"empty":"Geçmiş bilgisi yok.","name":"Geçmiş","statistic":"{{total}}\'nin {{passed}} geçti","successRate":"Başarı oranı","time":"{{time}} tarihinde, {{date}}"},"links":{"name":"Bağlantılar"},"overview":{"name":"Genel Bakış"},"owner":{"name":"Sahip"},"parameters":{"name":"Parametreler"},"retries":{"empty":"Test yeniden deneme hakkında bilgi yok","name":"Yeniden Denemeler","time":"{{time}} tarihinde, {{date}}"},"severity":{"name":"Önem"},"stats":{"count":{"attachments":"{{count}} eklenti","attachments_plural":"{{count}} eklenti","parameters":"{{count}} parametre","parameters_plural":"{{count}} parametre","steps":"{{count}} alt adım","steps_plural":"{{count}} alt adım"}},"status":{"empty":"Boş durum ayrıntıları","trace":"İzlemeyi göster"}},"widget":{"categories":{"name":"Kategoriler"},"categoriesTrend":{"name":"Kategoriler trendi"},"durationTrend":{"name":"Süre trendi"},"environment":{"empty":"Herhangi bir çevresel değişken yok","name":"Çevre","showAll":"Hepsini göster"},"executors":{"empty":"Test yürütücüleri hakkında bilgi yok","name":"Yürütücüler","unknown":"Bilinmiyor"},"launches":{"empty":"Başlatma hakkında bilgi yok","name":"Başlatmalar"},"retryTrend":{"name":"Tekrar trendi"},"suites":{"name":"Suitler"},"summary":{"aggregatedName":"Toplu rapor","launches":"başlatma","launches_plural":"başlatmalar","testResults":"test durumu","testResults_plural":"test durumları"},"trend":{"name":"Trend"}}}');
  }, function(e) {
    e.exports=JSON.parse('{"chart":{"duration":{"empty":"没有信息","name":"耗时"},"severity":{"name":"优先级"},"status":{"name":"状态"},"trend":{"empty":"没有信息"}},"component":{"statusToggle":{"hideCases":"隐藏{{status}}状态的用例","showCases":"显示{{status}}状态的用例"},"tree":{"empty":"没有记录","filter":"通过用例状态过滤","filtered":{"shown":"显示{{count}}个","total":"共{{count}}个用例","total_plural":"共{{count}}个用例"},"groups":"开关测试套信息","time":{"max":{"name":"最长","tooltip":"好使最长的用例"},"sum":{"name":"合并","tooltip":"所有用例耗时之和"},"total":{"name":"整体","tooltip":"从首个用例的开始时间到最后一个用例的结束时间"}},"unknown":"空小组"},"widgetStatus":{"showAll":"显示所有","total":"总共{{count}}项","total_plural":"总共{{count}}项"}},"controls":{"backto":"返回","clipboard":"复制到剪贴板","collapse":"折叠","expand":"展开","fullscreen":"全屏","language":"切换地区语言"},"errors":{"missedAttachment":"没有找到附件","notFound":"没有找到"},"marks":{"flaky":"不稳定","newBroken":"新的故障","newFailed":"新的失败","newPassed":"新的通过","retriesStatusChange":"重试后状态改变"},"sorter":{"duration":"用时","name":"名称","status":"状态"},"status":{"broken":"故障","failed":"失败","passed":"通过","skipped":"跳过","unknown":"未知"},"tab":{"categories":{"name":"类别"},"graph":{"name":"图表"},"overview":{"name":"总览"},"suites":{"name":"测试套"},"timeline":{"name":"时间刻度","selected":"{{count}}个测试用例({{percent}}%)执行时间超过{{duration}}","selected_plural":"{{count}}个测试用例({{percent}}%)执行时间超过{{duration}}"}},"testResult":{"categories":{"name":"类别"},"description":{"name":"描述"},"duration":{"name":"耗时"},"execution":{"body":"测试步骤","name":"执行","setup":"前置","teardown":"后置"},"history":{"name":"历史","successRate":"成功率"},"links":{"name":"链接"},"overview":{"name":"总览"},"owner":{"name":"作者"},"parameters":{"name":"参数"},"retries":{"name":"重试次数"},"severity":{"name":"优先级"},"stats":{"count":{"attachments":"{{count}}个附件","attachments_plural":"{{count}}个附件","parameters":"{{count}}个参数","parameters_plural":"{{count}}个参数","steps":"{{count}}个步骤","steps_plural":"{{count}}个步骤"}},"status":{"empty":"状态详情为空","trace":"展示堆栈"}},"widget":{"categories":{"name":"类别"},"environment":{"empty":"没有环境变量","name":"环境","showAll":"显示所有"},"executors":{"empty":"没有运行器的信息","name":"运行器","unknown":"未知"},"launches":{"empty":"没有用例启动执行的信息","name":"启动"},"suites":{"name":"测试套"},"summary":{"aggregatedName":"汇总报告","launches":"启动","launches_plural":"启动","testResults":"测试用例","testResults_plural":"测试用例"},"trend":{"name":"趋势"}}}');
  }, function(e, t, n) {
    'use strict'; function _interopRequireDefault(e) {
      return e&&e.__esModule?e:{default: e};
    }t.__esModule=!0, t.HandlebarsEnvironment=HandlebarsEnvironment; var r=n(30); var a=_interopRequireDefault(n(36)); var i=n(75); var o=n(154); var s=_interopRequireDefault(n(76)); var l=n(77); t.VERSION='4.7.7'; t.COMPILER_REVISION=8; t.LAST_COMPATIBLE_COMPILER_REVISION=7; t.REVISION_CHANGES={1: '<= 1.0.rc.2', 2: '== 1.0.0-rc.3', 3: '== 1.0.0-rc.4', 4: '== 1.x.x', 5: '== 2.0.0-alpha.x', 6: '>= 2.0.0-beta.1', 7: '>= 4.0.0 <4.3.0', 8: '>= 4.3.0'}; function HandlebarsEnvironment(e, t, n) {
      this.helpers=e||{}, this.partials=t||{}, this.decorators=n||{}, i.registerDefaultHelpers(this), o.registerDefaultDecorators(this);
    }HandlebarsEnvironment.prototype={constructor: HandlebarsEnvironment, logger: s.default, log: s.default.log, registerHelper: function(e, t) {
      if ('[object Object]'===r.toString.call(e)) {
        if (t) throw new a.default('Arg not supported with multiple helpers'); r.extend(this.helpers, e);
      } else this.helpers[e]=t;
    }, unregisterHelper: function(e) {
      delete this.helpers[e];
    }, registerPartial: function(e, t) {
      if ('[object Object]'===r.toString.call(e))r.extend(this.partials, e); else {
        if (void 0===t) throw new a.default('Attempting to register a partial called "'+e+'" as undefined'); this.partials[e]=t;
      }
    }, unregisterPartial: function(e) {
      delete this.partials[e];
    }, registerDecorator: function(e, t) {
      if ('[object Object]'===r.toString.call(e)) {
        if (t) throw new a.default('Arg not supported with multiple decorators'); r.extend(this.decorators, e);
      } else this.decorators[e]=t;
    }, unregisterDecorator: function(e) {
      delete this.decorators[e];
    }, resetLoggedPropertyAccesses: function() {
      l.resetLoggedProperties();
    }}; var u=s.default.log; t.log=u, t.createFrame=r.createFrame, t.logger=s.default;
  }, function(e, t, n) {
    'use strict'; function _interopRequireDefault(e) {
      return e&&e.__esModule?e:{default: e};
    }t.__esModule=!0, t.registerDefaultHelpers=function(e) {
      r.default(e), a.default(e), i.default(e), o.default(e), s.default(e), l.default(e), u.default(e);
    }, t.moveHelperToHooks=function(e, t, n) {
      e.helpers[t]&&(e.hooks[t]=e.helpers[t], n||delete e.helpers[t]);
    }; var r=_interopRequireDefault(n(147)); var a=_interopRequireDefault(n(148)); var i=_interopRequireDefault(n(149)); var o=_interopRequireDefault(n(150)); var s=_interopRequireDefault(n(151)); var l=_interopRequireDefault(n(152)); var u=_interopRequireDefault(n(153));
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0; var r=n(30); var a={methodMap: ['debug', 'info', 'warn', 'error'], level: 'info', lookupLevel: function(e) {
      if ('string'==typeof e) {
        var t=r.indexOf(a.methodMap, e.toLowerCase()); e=t>=0?t:parseInt(e, 10);
      } return e;
    }, log: function(e) {
      if (e=a.lookupLevel(e), 'undefined'!=typeof console&&a.lookupLevel(a.level)<=e) {
        var t=a.methodMap[e]; console[t]||(t='log'); for (var n=arguments.length, r=Array(n>1?n-1:0), i=1; i<n; i++)r[i-1]=arguments[i]; console[t].apply(console, r);
      }
    }}; t.default=a, e.exports=t.default;
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0, t.createProtoAccessControl=function(e) {
      var t=Object.create(null); t.constructor=!1, t.__defineGetter__=!1, t.__defineSetter__=!1, t.__lookupGetter__=!1; var n=Object.create(null); return n.__proto__=!1, {properties: {whitelist: r.createNewLookupObject(n, e.allowedProtoProperties), defaultValue: e.allowProtoPropertiesByDefault}, methods: {whitelist: r.createNewLookupObject(t, e.allowedProtoMethods), defaultValue: e.allowProtoMethodsByDefault}};
    }, t.resultIsAllowed=function(e, t, n) {
      return checkWhiteList('function'==typeof e?t.methods:t.properties, n);
    }, t.resetLoggedProperties=function() {
      Object.keys(i).forEach((function(e) {
        delete i[e];
      }));
    }; var r=n(156); var a=function(e) {
      if (e&&e.__esModule) return e; var t={}; if (null!=e) for (var n in e)Object.prototype.hasOwnProperty.call(e, n)&&(t[n]=e[n]); return t.default=e, t;
    }(n(76)); var i=Object.create(null); function checkWhiteList(e, t) {
      return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e) {
        !0!==i[e]&&(i[e]=!0, a.log('error', 'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'));
      }(t), !1);
    }
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return e.escapeExpression(__default(n(8)).call(null!=t?t:e.nullContext||{}, 'testResult.stats.count.parameters', {name: 't', hash: {count: null!=(o=null!=t?s(t, 'parameters'):t)?s(o, 'length'):o}, data: i, loc: {start: {line: 4, column: 12}, end: {line: 4, column: 79}}}))+'<span class="step-stats__info_separator">,&nbsp;</span>';
    }, 3: function(e, t, r, a, i) {
      var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return e.escapeExpression(__default(n(8)).call(null!=t?t:e.nullContext||{}, 'testResult.stats.count.steps', {name: 't', hash: {count: null!=t?o(t, 'stepsCount'):t}, data: i, loc: {start: {line: 8, column: 12}, end: {line: 8, column: 67}}}))+'<span class="step-stats__info_separator">,&nbsp;</span>';
    }, 5: function(e, t, r, a, i) {
      var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return e.escapeExpression(__default(n(8)).call(null!=t?t:e.nullContext||{}, 'testResult.stats.count.attachments', {name: 't', hash: {count: null!=t?o(t, 'attachmentsCount'):t}, data: i, loc: {start: {line: 12, column: 12}, end: {line: 12, column: 79}}}))+'<span class="step-stats__info_separator">,&nbsp;</span>';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<span class="step-stats__info">\n    <span>'+(null!=(o=u(r, 'if').call(s, null!=(o=null!=t?u(t, 'parameters'):t)?u(o, 'length'):o, {name: 'if', hash: {}, fn: e.program(1, i, 0), inverse: e.noop, data: i, loc: {start: {line: 3, column: 9}, end: {line: 6, column: 18}}}))?o:'')+(null!=(o=u(r, 'if').call(s, null!=t?u(t, 'stepsCount'):t, {name: 'if', hash: {}, fn: e.program(3, i, 0), inverse: e.noop, data: i, loc: {start: {line: 7, column: 9}, end: {line: 10, column: 17}}}))?o:'')+(null!=(o=u(r, 'if').call(s, null!=t?u(t, 'attachmentsCount'):t, {name: 'if', hash: {}, fn: e.program(5, i, 0), inverse: e.noop, data: i, loc: {start: {line: 11, column: 8}, end: {line: 14, column: 17}}}))?o:'')+'</span>\n    <span class="step-stats__info_time" data-tooltip="'+l(__default(n(38)).call(s, null!=(o=null!=t?u(t, 'time'):t)?u(o, 'start'):o, {name: 'date', hash: {}, data: i, loc: {start: {line: 16, column: 54}, end: {line: 16, column: 73}}}))+' '+l(__default(n(32)).call(s, null!=(o=null!=t?u(t, 'time'):t)?u(o, 'start'):o, !0, {name: 'time', hash: {}, data: i, loc: {start: {line: 16, column: 74}, end: {line: 16, column: 98}}}))+'&nbsp;&ndash;&nbsp;'+l(__default(n(32)).call(s, null!=(o=null!=t?u(t, 'time'):t)?u(o, 'stop'):o, !0, {name: 'time', hash: {}, data: i, loc: {start: {line: 16, column: 117}, end: {line: 16, column: 140}}}))+'">'+l(__default(n(23)).call(s, null!=(o=null!=t?u(t, 'time'):t)?u(o, 'duration'):o, {name: 'duration', hash: {}, data: i, loc: {start: {line: 16, column: 142}, end: {line: 16, column: 168}}}))+'</span>\n</span>\n';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="parameters-table">\n'+(null!=(i=o(n, 'each').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'parameters'):t, {name: 'each', hash: {}, fn: e.program(2, a, 0), inverse: e.noop, data: a, loc: {start: {line: 3, column: 8}, end: {line: 8, column: 17}}}))?i:'')+'    </div>\n';
    }, 2: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lambda; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <div class="'+s(__default(n(6)).call(o, 'parameters-table', 'row', {name: 'b', hash: {}, data: i, loc: {start: {line: 4, column: 24}, end: {line: 4, column: 54}}}))+'">\n                <div class="'+s(__default(n(6)).call(o, 'parameters-table', 'cell', {name: 'b', hash: {name: !0}, data: i, loc: {start: {line: 5, column: 28}, end: {line: 5, column: 69}}}))+' line-ellipsis">'+s(l(null!=t?u(t, 'name'):t, t))+'</div>\n                <div class="'+s(__default(n(6)).call(o, 'parameters-table', 'cell', {name: 'b', hash: {value: !0}, data: i, loc: {start: {line: 6, column: 28}, end: {line: 6, column: 70}}}))+' line-ellipsis">'+s(l(null!=t?u(t, 'value'):t, t))+'</div>\n            </div>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(i=o(n, 'if').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'parameters'):t, {name: 'if', hash: {}, fn: e.program(1, a, 0), inverse: e.noop, data: a, loc: {start: {line: 1, column: 0}, end: {line: 10, column: 7}}}))?i:'';
    }, useData: !0});
  }, function(e, t, n) {
    'use strict'; n.r(t); var r=n(18); t.default=function() {
      var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:'unknown'; return new r.SafeString('<span class="fa fa-chevron-right fa-fw text_status_'.concat(e, '"></span>'));
    };
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i, o, s) {
      var l; var u=e.escapeExpression; var c=null!=t?t:e.nullContext||{}; var h=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="node">\n        <div class="node__title long-line" data-uid="'+u(e.lambda(null!=t?h(t, 'uid'):t, t))+'">\n            <span class="node__arrow block__arrow">'+u(__default(n(51)).call(c, {name: 'angle', hash: {}, data: i, loc: {start: {line: 4, column: 51}, end: {line: 4, column: 60}}}))+'</span>\n'+(null!=(l=h(r, 'if').call(c, null!=t?h(t, 'name'):t, {name: 'if', hash: {}, fn: e.program(2, i, 0, o, s), inverse: e.program(4, i, 0, o, s), data: i, loc: {start: {line: 5, column: 12}, end: {line: 11, column: 19}}}))?l:'')+'            <div class="tree__strut">&nbsp</div>\n            <span class="node__stats">\n                '+u(__default(n(203)).call(c, null!=t?h(t, 'statistic'):t, {name: 'statistic-bar', hash: {}, data: i, loc: {start: {line: 14, column: 16}, end: {line: 14, column: 43}}}))+'\n            </span>\n        </div>\n\n        <div class="node__children">\n'+(null!=(l=h(r, 'if').call(c, null!=t?h(t, 'showGroupInfo'):t, {name: 'if', hash: {}, fn: e.program(6, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 19, column: 12}, end: {line: 28, column: 19}}}))?l:'')+(null!=(l=h(r, 'each').call(c, null!=t?h(t, 'children'):t, {name: 'each', hash: {}, fn: e.program(8, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 29, column: 12}, end: {line: 31, column: 21}}}))?l:'')+'        </div>\n    </div>\n';
    }, 2: function(e, t, n, r, a) {
      var i=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                <div class="node__name">\n                    '+e.escapeExpression(e.lambda(null!=t?i(t, 'name'):t, t))+'\n                </div>\n';
    }, 4: function(e, t, r, a, i) {
      return '                <span class="node__unknown">'+e.escapeExpression(__default(n(8)).call(null!=t?t:e.nullContext||{}, 'component.tree.unknown', {name: 't', hash: {}, data: i, loc: {start: {line: 10, column: 44}, end: {line: 10, column: 74}}}))+'</span>\n';
    }, 6: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                <div class="node">\n                    <div class="node__info long-line" data-uid="'+e.escapeExpression(e.lambda(null!=t?l(t, 'uid'):t, t))+'">\n                        <span class="fa fa-clock-o"></span>\n'+(null!=(o=e.invokePartial(n(55), t, {name: 'tree-time', hash: {tooltip: __default(n(8)).call(s, 'component.tree.time.total.tooltip', {name: 't', hash: {}, data: i, loc: {start: {line: 23, column: 108}, end: {line: 23, column: 147}}}), name: __default(n(8)).call(s, 'component.tree.time.total.name', {name: 't', hash: {}, data: i, loc: {start: {line: 23, column: 63}, end: {line: 23, column: 99}}}), value: null!=(o=null!=t?l(t, 'time'):t)?l(o, 'duration'):o}, data: i, indent: '                        ', helpers: r, partials: a, decorators: e.decorators}))?o:'')+(null!=(o=e.invokePartial(n(55), t, {name: 'tree-time', hash: {tooltip: __default(n(8)).call(s, 'component.tree.time.max.tooltip', {name: 't', hash: {}, data: i, loc: {start: {line: 24, column: 109}, end: {line: 24, column: 146}}}), name: __default(n(8)).call(s, 'component.tree.time.max.name', {name: 't', hash: {}, data: i, loc: {start: {line: 24, column: 66}, end: {line: 24, column: 100}}}), value: null!=(o=null!=t?l(t, 'time'):t)?l(o, 'maxDuration'):o}, data: i, indent: '                        ', helpers: r, partials: a, decorators: e.decorators}))?o:'')+(null!=(o=e.invokePartial(n(55), t, {name: 'tree-time', hash: {tooltip: __default(n(8)).call(s, 'component.tree.time.sum.tooltip', {name: 't', hash: {}, data: i, loc: {start: {line: 25, column: 109}, end: {line: 25, column: 146}}}), name: __default(n(8)).call(s, 'component.tree.time.sum.name', {name: 't', hash: {}, data: i, loc: {start: {line: 25, column: 66}, end: {line: 25, column: 100}}}), value: null!=(o=null!=t?l(t, 'time'):t)?l(o, 'sumDuration'):o}, data: i, indent: '                        ', helpers: r, partials: a, decorators: e.decorators}))?o:'')+'                    </div>\n                </div>\n';
    }, 8: function(e, t, r, a, i, o, s) {
      var l; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(l=e.invokePartial(n(81), t, {name: 'tree-group', hash: {testResultTab: null!=s[1]?u(s[1], 'testResultTab'):s[1], tabName: null!=s[1]?u(s[1], 'tabName'):s[1], showGroupInfo: null!=s[1]?u(s[1], 'showGroupInfo'):s[1], baseUrl: null!=s[1]?u(s[1], 'baseUrl'):s[1]}, data: i, helpers: r, partials: a, decorators: e.decorators}))?l:'';
    }, 10: function(e, t, r, a, i) {
      var o; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(o=e.invokePartial(n(205), t, {name: 'tree-leaf', hash: {testResultTab: null!=t?s(t, 'testResultTab'):t, baseUrl: null!=t?s(t, 'baseUrl'):t}, data: i, helpers: r, partials: a, decorators: e.decorators}))?o:'';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a, i, o) {
      var s; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(s=l(n, 'if').call(null!=t?t:e.nullContext||{}, null!=t?l(t, 'children'):t, {name: 'if', hash: {}, fn: e.program(1, a, 0, i, o), inverse: e.program(10, a, 0, i, o), data: a, loc: {start: {line: 1, column: 0}, end: {line: 36, column: 7}}}))?s:'';
    }, usePartial: !0, useData: !0, useDepths: !0});
  }, function(e, t, n) {
    var r=n(83); e.exports=function(e, t) {
      if (e) {
        if ('string'==typeof e) return r(e, t); var n=Object.prototype.toString.call(e).slice(8, -1); return 'Object'===n&&e.constructor&&(n=e.constructor.name), 'Map'===n||'Set'===n?Array.from(e):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e, t):void 0;
      }
    }, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t) {
    e.exports=function(e, t) {
      (null==t||t>e.length)&&(t=e.length); for (var n=0, r=new Array(t); n<t; n++)r[n]=e[n]; return r;
    }, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t, n) {
    'use strict'; n.r(t); var r=n(18); var a=/^(\w)+:\/\/.*/; t.default=function(e) {
      return a.test(e)?new r.SafeString('<a href="'.concat(e, '"  class="link" target="_blank">').concat(e, '</a>')):e;
    };
  }, function(e, t, n) {
    'use strict'; e.exports=function(e) {
      var t=document.createElement('textarea'); t.value=e, t.setAttribute('readonly', ''), t.style.contain='strict', t.style.position='absolute', t.style.left='-9999px', t.style.fontSize='12pt'; var n=getSelection(); var r=!1; n.rangeCount>0&&(r=n.getRangeAt(0)), document.body.appendChild(t), t.select(); var a=!1; try {
        a=document.execCommand('copy');
      } catch (e) {} return document.body.removeChild(t), r&&(n.removeAllRanges(), n.addRange(r)), a;
    };
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o=e.lambda; var s=e.escapeExpression; var l=null!=t?t:e.nullContext||{}; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="'+s(o(null!=t?u(t, 'cls'):t, t))+'">\n    <h1 class="'+s(__default(n(6)).call(l, null!=t?u(t, 'cls'):t, 'title', {name: 'b', hash: {}, data: i, loc: {start: {line: 2, column: 15}, end: {line: 2, column: 32}}}))+'">'+s(o(null!=t?u(t, 'code'):t, t))+'</h1>\n    <p class="'+s(__default(n(6)).call(l, null!=t?u(t, 'cls'):t, 'message', {name: 'b', hash: {}, data: i, loc: {start: {line: 3, column: 14}, end: {line: 3, column: 33}}}))+'">'+s(o(null!=t?u(t, 'message'):t, t))+'</p>\n</div>';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i, o, s) {
      var l=null!=t?t:e.nullContext||{}; var u=e.escapeExpression; var c=e.lambda; var h=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <li class="'+u(__default(n(6)).call(l, 'language-select', 'item', {name: 'b', hash: {active: __default(n(28)).call(l, null!=t?h(t, 'id'):t, null!=s[1]?h(s[1], 'currentLang'):s[1], {name: 'eq', hash: {}, data: i, loc: {start: {line: 3, column: 55}, end: {line: 3, column: 77}}})}, data: i, loc: {start: {line: 3, column: 19}, end: {line: 3, column: 79}}}))+'" data-id="'+u(c(null!=t?h(t, 'id'):t, t))+'">'+u(c(null!=t?h(t, 'title'):t, t))+'</li>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i, o, s) {
      var l; var u=null!=t?t:e.nullContext||{}; var c=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<ul class="'+e.escapeExpression(__default(n(6)).call(u, 'language-select', 'menu', {name: 'b', hash: {}, data: i, loc: {start: {line: 1, column: 11}, end: {line: 1, column: 41}}}))+'">\n'+(null!=(l=c(r, 'each').call(u, null!=t?c(t, 'languages'):t, {name: 'each', hash: {}, fn: e.program(1, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 2, column: 4}, end: {line: 4, column: 13}}}))?l:'')+'</ul>\n';
    }, useData: !0, useDepths: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lambda; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <li class="'+s(__default(n(6)).call(o, 'side-nav', 'item', {name: 'b', hash: {}, data: i, loc: {start: {line: 8, column: 19}, end: {line: 8, column: 42}}}))+'" data-tooltip="'+s(__default(n(8)).call(o, null!=t?u(t, 'title'):t, {name: 't', hash: {}, data: i, loc: {start: {line: 8, column: 58}, end: {line: 8, column: 69}}}))+'">\n            <a href="#'+s(l(null!=t?u(t, 'tabName'):t, t))+'" class="'+s(__default(n(6)).call(o, 'side-nav', 'link', {name: 'b', hash: {active: null!=t?u(t, 'active'):t}, data: i, loc: {start: {line: 9, column: 42}, end: {line: 9, column: 79}}}))+'">\n                <span class="'+s(__default(n(6)).call(o, 'side-nav', 'icon', {name: 'b', hash: {}, data: i, loc: {start: {line: 10, column: 29}, end: {line: 10, column: 52}}}))+' '+s(l(null!=t?u(t, 'icon'):t, t))+'"></span>\n                <div class="'+s(__default(n(6)).call(o, 'side-nav', 'text', {name: 'b', hash: {}, data: i, loc: {start: {line: 11, column: 28}, end: {line: 11, column: 51}}}))+'">'+s(__default(n(8)).call(o, null!=t?u(t, 'title'):t, {name: 't', hash: {}, data: i, loc: {start: {line: 11, column: 53}, end: {line: 11, column: 64}}}))+'</div>\n            </a>\n        </li>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="'+l(__default(n(6)).call(s, 'side-nav', 'head', {name: 'b', hash: {}, data: i, loc: {start: {line: 1, column: 12}, end: {line: 1, column: 35}}}))+'">\n    <a href="." class="'+l(__default(n(6)).call(s, 'side-nav', 'brand', {name: 'b', hash: {}, data: i, loc: {start: {line: 2, column: 23}, end: {line: 2, column: 47}}}))+'">\n        <span class="'+l(__default(n(6)).call(s, 'side-nav', 'brand-text', {name: 'b', hash: {}, data: i, loc: {start: {line: 3, column: 21}, end: {line: 3, column: 50}}}))+'">Allure</span>\n    </a>\n</div>\n<ul class="'+l(__default(n(6)).call(s, 'side-nav', 'menu', {name: 'b', hash: {}, data: i, loc: {start: {line: 6, column: 11}, end: {line: 6, column: 34}}}))+'">\n'+(null!=(o=u(r, 'each').call(s, null!=t?u(t, 'tabs'):t, {name: 'each', hash: {}, fn: e.program(1, i, 0), inverse: e.noop, data: i, loc: {start: {line: 7, column: 4}, end: {line: 14, column: 13}}}))?o:'')+'</ul>\n<div class="'+l(__default(n(6)).call(s, 'side-nav', 'strut', {name: 'b', hash: {}, data: i, loc: {start: {line: 16, column: 12}, end: {line: 16, column: 36}}}))+'"></div>\n<div class="'+l(__default(n(6)).call(s, 'side-nav', 'footer', {name: 'b', hash: {}, data: i, loc: {start: {line: 17, column: 12}, end: {line: 17, column: 37}}}))+'">\n    <div class="'+l(__default(n(6)).call(s, 'side-nav', 'item', {name: 'b', hash: {}, data: i, loc: {start: {line: 18, column: 16}, end: {line: 18, column: 39}}}))+'" data-tooltip="'+l(__default(n(8)).call(s, 'controls.language', {name: 't', hash: {}, data: i, loc: {start: {line: 18, column: 55}, end: {line: 18, column: 80}}}))+'">\n        <button class="'+l(__default(n(6)).call(s, 'button', {name: 'b', hash: {}, data: i, loc: {start: {line: 19, column: 23}, end: {line: 19, column: 37}}}))+' '+l(__default(n(6)).call(s, 'button', {name: 'b', hash: {inverse: !0}, data: i, loc: {start: {line: 19, column: 38}, end: {line: 19, column: 65}}}))+' '+l(__default(n(6)).call(s, 'side-nav', 'language-small', {name: 'b', hash: {lang: null!=(o=null!=t?u(t, 'language'):t)?u(o, 'id'):o}, data: i, loc: {start: {line: 19, column: 66}, end: {line: 19, column: 116}}}))+'">\n            '+l(e.lambda(null!=(o=null!=t?u(t, 'language'):t)?u(o, 'id'):o, t))+'\n        </button>\n    </div>\n\n    <div class="'+l(__default(n(6)).call(s, 'side-nav', 'item', {name: 'b', hash: {}, data: i, loc: {start: {line: 24, column: 16}, end: {line: 24, column: 39}}}))+' " data-tooltip="'+l(__default(n(8)).call(s, 'controls.expand', {name: 't', hash: {}, data: i, loc: {start: {line: 24, column: 56}, end: {line: 24, column: 79}}}))+'">\n        <div class="'+l(__default(n(6)).call(s, 'side-nav', 'collapse', {name: 'b', hash: {}, data: i, loc: {start: {line: 25, column: 20}, end: {line: 25, column: 47}}}))+'">\n            <span class="'+l(__default(n(6)).call(s, 'side-nav', 'icon', {name: 'b', hash: {}, data: i, loc: {start: {line: 26, column: 25}, end: {line: 26, column: 48}}}))+' fa fa-angle-left"></span>\n            <span class="'+l(__default(n(6)).call(s, 'side-nav', 'text', {name: 'b', hash: {}, data: i, loc: {start: {line: 27, column: 25}, end: {line: 27, column: 48}}}))+'">'+l(__default(n(8)).call(s, 'controls.collapse', {name: 't', hash: {}, data: i, loc: {start: {line: 27, column: 50}, end: {line: 27, column: 75}}}))+'</span>\n        </div>\n    </div>\n</div>\n';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; return '<div class="'+s(__default(n(6)).call(o, 'app', 'nav', {name: 'b', hash: {}, data: i, loc: {start: {line: 1, column: 12}, end: {line: 1, column: 29}}}))+'"></div>\n<div class="'+s(__default(n(6)).call(o, 'app', 'content', {name: 'b', hash: {}, data: i, loc: {start: {line: 2, column: 12}, end: {line: 2, column: 33}}}))+'"></div>\n';
    }, useData: !0});
  }, function(e, t) {
    function concat(...e) {
      return e.map((e)=>{
        return (t=e)?'string'==typeof t?t:t.source:null; var t;
      }).join('');
    }e.exports=function(e) {
      const t={}; const n={begin: /\$\{/, end: /\}/, contains: ['self', {begin: /:-/, contains: [t]}]}; Object.assign(t, {className: 'variable', variants: [{begin: concat(/\$[\w\d#@][\w\d_]*/, '(?![\\w\\d])(?![$])')}, n]}); const r={className: 'subst', begin: /\$\(/, end: /\)/, contains: [e.BACKSLASH_ESCAPE]}; const a={begin: /<<-?\s*(?=\w+)/, starts: {contains: [e.END_SAME_AS_BEGIN({begin: /(\w+)/, end: /(\w+)/, className: 'string'})]}}; const i={className: 'string', begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, t, r]}; r.contains.push(i); const o={begin: /\$\(\(/, end: /\)\)/, contains: [{begin: /\d+#[0-9a-f]+/, className: 'number'}, e.NUMBER_MODE, t]}; const s=e.SHEBANG({binary: `(${['fish', 'bash', 'zsh', 'sh', 'csh', 'ksh', 'tcsh', 'dash', 'scsh'].join('|')})`, relevance: 10}); const l={className: 'function', begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/, returnBegin: !0, contains: [e.inherit(e.TITLE_MODE, {begin: /\w[\w\d_]*/})], relevance: 0}; return {name: 'Bash', aliases: ['sh', 'zsh'], keywords: {$pattern: /\b[a-z._-]+\b/, keyword: 'if then else elif fi for while in do done case esac function', literal: 'true false', built_in: 'break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp'}, contains: [s, e.SHEBANG(), l, o, e.HASH_COMMENT_MODE, a, i, {className: '', begin: /\\"/}, {className: 'string', begin: /'/, end: /'/}, t]};
    };
  }, function(e, t) {
    e.exports=function(e) {
      return {name: 'Diff', aliases: ['patch'], contains: [{className: 'meta', relevance: 10, variants: [{begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/}, {begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/}, {begin: /^--- +\d+,\d+ +----$/}]}, {className: 'comment', variants: [{begin: /Index: /, end: /$/}, {begin: /^index/, end: /$/}, {begin: /={3,}/, end: /$/}, {begin: /^-{3}/, end: /$/}, {begin: /^\*{3} /, end: /$/}, {begin: /^\+{3}/, end: /$/}, {begin: /^\*{15}$/}, {begin: /^diff --git/, end: /$/}]}, {className: 'addition', begin: /^\+/, end: /$/}, {className: 'deletion', begin: /^-/, end: /$/}, {className: 'addition', begin: /^!/, end: /$/}]};
    };
  }, function(e, t) {
    e.exports=function(e) {
      const t={literal: 'true false null'}; const n=[e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]; const r=[e.QUOTE_STRING_MODE, e.C_NUMBER_MODE]; const a={end: ',', endsWithParent: !0, excludeEnd: !0, contains: r, keywords: t}; const i={begin: /\{/, end: /\}/, contains: [{className: 'attr', begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE], illegal: '\\n'}, e.inherit(a, {begin: /:/})].concat(n), illegal: '\\S'}; const o={begin: '\\[', end: '\\]', contains: [e.inherit(a)], illegal: '\\S'}; return r.push(i, o), n.forEach((function(e) {
        r.push(e);
      })), {name: 'JSON', contains: r, keywords: t, illegal: '\\S'};
    };
  }, function(e, t) {
    function concat(...e) {
      return e.map((e)=>{
        return (t=e)?'string'==typeof t?t:t.source:null; var t;
      }).join('');
    }e.exports=function(e) {
      const t={begin: /<\/?[A-Za-z_]/, end: '>', subLanguage: 'xml', relevance: 0}; const n={variants: [{begin: /\[.+?\]\[.*?\]/, relevance: 0}, {begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/, relevance: 2}, {begin: concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/), relevance: 2}, {begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1}, {begin: /\[.+?\]\(.*?\)/, relevance: 0}], returnBegin: !0, contains: [{className: 'string', relevance: 0, begin: '\\[', end: '\\]', excludeBegin: !0, returnEnd: !0}, {className: 'link', relevance: 0, begin: '\\]\\(', end: '\\)', excludeBegin: !0, excludeEnd: !0}, {className: 'symbol', relevance: 0, begin: '\\]\\[', end: '\\]', excludeBegin: !0, excludeEnd: !0}]}; const r={className: 'strong', contains: [], variants: [{begin: /_{2}/, end: /_{2}/}, {begin: /\*{2}/, end: /\*{2}/}]}; const a={className: 'emphasis', contains: [], variants: [{begin: /\*(?!\*)/, end: /\*/}, {begin: /_(?!_)/, end: /_/, relevance: 0}]}; r.contains.push(a), a.contains.push(r); let i=[t, n]; return r.contains=r.contains.concat(i), a.contains=a.contains.concat(i), i=i.concat(r, a), {name: 'Markdown', aliases: ['md', 'mkdown', 'mkd'], contains: [{className: 'section', variants: [{begin: '^#{1,6}', end: '$', contains: i}, {begin: '(?=^.+?\\n[=-]{2,}$)', contains: [{begin: '^[=-]*$'}, {begin: '^', end: '\\n', contains: i}]}]}, t, {className: 'bullet', begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)', end: '\\s+', excludeEnd: !0}, r, a, {className: 'quote', begin: '^>\\s+', contains: i, end: '$'}, {className: 'code', variants: [{begin: '(`{3,})[^`](.|\\n)*?\\1`*[ ]*'}, {begin: '(~{3,})[^~](.|\\n)*?\\1~*[ ]*'}, {begin: '```', end: '```+[ ]*$'}, {begin: '~~~', end: '~~~+[ ]*$'}, {begin: '`.+?`'}, {begin: '(?=^( {4}|\\t))', contains: [{begin: '^( {4}|\\t)', end: '(\\n)$'}], relevance: 0}]}, {begin: '^[-\\*]{3,}', end: '$'}, n, {begin: /^\[[^\n]+\]:/, returnBegin: !0, contains: [{className: 'symbol', begin: /\[/, end: /\]/, excludeBegin: !0, excludeEnd: !0}, {className: 'link', begin: /:\s*/, end: /$/, excludeBegin: !0}]}]};
    };
  }, function(e, t) {
    function source(e) {
      return e?'string'==typeof e?e:e.source:null;
    } function lookahead(e) {
      return concat('(?=', e, ')');
    } function concat(...e) {
      return e.map((e)=>source(e)).join('');
    } function either(...e) {
      return '('+e.map((e)=>source(e)).join('|')+')';
    }e.exports=function(e) {
      const t=concat(/[A-Z_]/, concat('(', /[A-Z0-9_.-]*:/, ')?'), /[A-Z0-9_.-]*/); const n={className: 'symbol', begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/}; const r={begin: /\s/, contains: [{className: 'meta-keyword', begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/}]}; const a=e.inherit(r, {begin: /\(/, end: /\)/}); const i=e.inherit(e.APOS_STRING_MODE, {className: 'meta-string'}); const o=e.inherit(e.QUOTE_STRING_MODE, {className: 'meta-string'}); const s={endsWithParent: !0, illegal: /</, relevance: 0, contains: [{className: 'attr', begin: /[A-Za-z0-9._:-]+/, relevance: 0}, {begin: /=\s*/, relevance: 0, contains: [{className: 'string', endsParent: !0, variants: [{begin: /"/, end: /"/, contains: [n]}, {begin: /'/, end: /'/, contains: [n]}, {begin: /[^\s"'=<>`]+/}]}]}]}; return {name: 'HTML, XML', aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'], case_insensitive: !0, contains: [{className: 'meta', begin: /<![a-z]/, end: />/, relevance: 10, contains: [r, o, i, a, {begin: /\[/, end: /\]/, contains: [{className: 'meta', begin: /<![a-z]/, end: />/, contains: [r, a, o, i]}]}]}, e.COMMENT(/<!--/, /-->/, {relevance: 10}), {begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10}, n, {className: 'meta', begin: /<\?xml/, end: /\?>/, relevance: 10}, {className: 'tag', begin: /<style(?=\s|>)/, end: />/, keywords: {name: 'style'}, contains: [s], starts: {end: /<\/style>/, returnEnd: !0, subLanguage: ['css', 'xml']}}, {className: 'tag', begin: /<script(?=\s|>)/, end: />/, keywords: {name: 'script'}, contains: [s], starts: {end: /<\/script>/, returnEnd: !0, subLanguage: ['javascript', 'handlebars', 'xml']}}, {className: 'tag', begin: /<>|<\/>/}, {className: 'tag', begin: concat(/</, lookahead(concat(t, either(/\/>/, />/, /\s/)))), end: /\/?>/, contains: [{className: 'name', begin: t, relevance: 0, starts: s}]}, {className: 'tag', begin: concat(/<\//, lookahead(concat(t, />/))), contains: [{className: 'name', begin: t, relevance: 0}, {begin: />/, relevance: 0, endsParent: !0}]}]};
    };
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, n, r, a) {
      return '    <div class="attachment__custom-view"></div>\n';
    }, 3: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(o=l(r, 'if').call(s, __default(n(28)).call(s, null!=t?l(t, 'type'):t, 'code', {name: 'eq', hash: {}, data: i, loc: {start: {line: 3, column: 10}, end: {line: 3, column: 26}}}), {name: 'if', hash: {}, fn: e.program(4, i, 0), inverse: e.program(6, i, 0), data: i, loc: {start: {line: 3, column: 0}, end: {line: 58, column: 0}}}))?o:'';
    }, 4: function(e, t, r, a, i) {
      var o=e.escapeExpression; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="'+o(__default(n(6)).call(null!=t?t:e.nullContext||{}, 'attachment__text-container', {name: 'b', hash: {fullscreen: null!=t?s(t, 'fullScreen'):t}, data: i, loc: {start: {line: 4, column: 16}, end: {line: 4, column: 72}}}))+'">\n        <pre class="attachment__code">'+o(e.lambda(null!=t?s(t, 'content'):t, t))+'</pre>\n    </div>\n';
    }, 6: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(o=l(r, 'if').call(s, __default(n(28)).call(s, null!=t?l(t, 'type'):t, 'text', {name: 'eq', hash: {}, data: i, loc: {start: {line: 7, column: 10}, end: {line: 7, column: 26}}}), {name: 'if', hash: {}, fn: e.program(7, i, 0), inverse: e.program(9, i, 0), data: i, loc: {start: {line: 7, column: 0}, end: {line: 58, column: 0}}}))?o:'';
    }, 7: function(e, t, r, a, i) {
      var o=e.escapeExpression; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="'+o(__default(n(6)).call(null!=t?t:e.nullContext||{}, 'attachment__text-container', {name: 'b', hash: {fullscreen: null!=t?s(t, 'fullScreen'):t}, data: i, loc: {start: {line: 8, column: 16}, end: {line: 8, column: 72}}}))+'">\n        <pre class="attachment__text">'+o(e.lambda(null!=t?s(t, 'content'):t, t))+'</pre>\n    </div>\n';
    }, 9: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(o=l(r, 'if').call(s, __default(n(28)).call(s, null!=t?l(t, 'type'):t, 'table', {name: 'eq', hash: {}, data: i, loc: {start: {line: 11, column: 10}, end: {line: 11, column: 27}}}), {name: 'if', hash: {}, fn: e.program(10, i, 0), inverse: e.program(14, i, 0), data: i, loc: {start: {line: 11, column: 0}, end: {line: 58, column: 0}}}))?o:'';
    }, 10: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="'+e.escapeExpression(__default(n(6)).call(s, 'attachment__table-container', {name: 'b', hash: {fullscreen: null!=t?l(t, 'fullScreen'):t}, data: i, loc: {start: {line: 12, column: 16}, end: {line: 12, column: 73}}}))+'">\n        <table class="table attachment__table">\n            <tbody>\n'+(null!=(o=l(r, 'each').call(s, null!=t?l(t, 'content'):t, {name: 'each', hash: {}, fn: e.program(11, i, 0), inverse: e.noop, data: i, loc: {start: {line: 15, column: 12}, end: {line: 21, column: 21}}}))?o:'')+'            </tbody>\n        </table>\n    </div>\n';
    }, 11: function(e, t, n, r, a) {
      var i; return '                <tr>\n'+(null!=(i=(e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      })(n, 'each').call(null!=t?t:e.nullContext||{}, t, {name: 'each', hash: {}, fn: e.program(12, a, 0), inverse: e.noop, data: a, loc: {start: {line: 17, column: 20}, end: {line: 19, column: 29}}}))?i:'')+'                </tr>\n';
    }, 12: function(e, t, n, r, a) {
      return '                        <td>'+e.escapeExpression(e.lambda(t, t))+'</td>\n';
    }, 14: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(o=l(r, 'if').call(s, __default(n(28)).call(s, null!=t?l(t, 'type'):t, 'image', {name: 'eq', hash: {}, data: i, loc: {start: {line: 25, column: 10}, end: {line: 25, column: 27}}}), {name: 'if', hash: {}, fn: e.program(15, i, 0), inverse: e.program(17, i, 0), data: i, loc: {start: {line: 25, column: 0}, end: {line: 58, column: 0}}}))?o:'';
    }, 15: function(e, t, r, a, i) {
      var o=e.escapeExpression; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="'+o(__default(n(6)).call(null!=t?t:e.nullContext||{}, 'attachment__media-container', {name: 'b', hash: {fullscreen: null!=t?s(t, 'fullScreen'):t}, data: i, loc: {start: {line: 26, column: 16}, end: {line: 26, column: 73}}}))+'"><img class="attachment__media" src="'+o(e.lambda(null!=t?s(t, 'sourceUrl'):t, t))+'"/>\n    </div>\n';
    }, 17: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(o=l(r, 'if').call(s, __default(n(28)).call(s, null!=t?l(t, 'type'):t, 'svg', {name: 'eq', hash: {}, data: i, loc: {start: {line: 28, column: 10}, end: {line: 28, column: 25}}}), {name: 'if', hash: {}, fn: e.program(18, i, 0), inverse: e.program(20, i, 0), data: i, loc: {start: {line: 28, column: 0}, end: {line: 58, column: 0}}}))?o:'';
    }, 18: function(e, t, n, r, a) {
      var i=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <object class="attachment__embed" type="image/svg+xml" data="'+e.escapeExpression(e.lambda(null!=t?i(t, 'sourceUrl'):t, t))+'">\n        Your browser does not support SVG\n    </object>\n';
    }, 20: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(o=l(r, 'if').call(s, __default(n(28)).call(s, null!=t?l(t, 'type'):t, 'video', {name: 'eq', hash: {}, data: i, loc: {start: {line: 32, column: 10}, end: {line: 32, column: 27}}}), {name: 'if', hash: {}, fn: e.program(21, i, 0), inverse: e.program(23, i, 0), data: i, loc: {start: {line: 32, column: 0}, end: {line: 58, column: 0}}}))?o:'';
    }, 21: function(e, t, n, r, a) {
      var i; var o=e.lambda; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="attachment__media-container">\n        <video class="attachment__media" controls>\n            <source src="'+s(o(null!=t?l(t, 'sourceUrl'):t, t))+'" type="'+s(o(null!=(i=null!=t?l(t, 'attachment'):t)?l(i, 'type'):i, t))+'">\n            Your browser does not support video tag\n        </video>\n    </div>\n';
    }, 23: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(o=l(r, 'if').call(s, __default(n(28)).call(s, null!=t?l(t, 'type'):t, 'uri', {name: 'eq', hash: {}, data: i, loc: {start: {line: 39, column: 10}, end: {line: 39, column: 25}}}), {name: 'if', hash: {}, fn: e.program(24, i, 0), inverse: e.program(30, i, 0), data: i, loc: {start: {line: 39, column: 0}, end: {line: 58, column: 0}}}))?o:'';
    }, 24: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="'+e.escapeExpression(__default(n(6)).call(s, 'attachment__text-container', {name: 'b', hash: {fullscreen: null!=t?l(t, 'fullScreen'):t}, data: i, loc: {start: {line: 40, column: 16}, end: {line: 40, column: 72}}}))+'">\n'+(null!=(o=l(r, 'each').call(s, null!=t?l(t, 'content'):t, {name: 'each', hash: {}, fn: e.program(25, i, 0), inverse: e.noop, data: i, loc: {start: {line: 41, column: 8}, end: {line: 49, column: 17}}}))?o:'')+'    </div>\n';
    }, 25: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <p class="'+e.escapeExpression(__default(n(6)).call(s, 'attachment', 'url', {name: 'b', hash: {comment: null!=t?l(t, 'comment'):t}, data: i, loc: {start: {line: 42, column: 22}, end: {line: 42, column: 62}}}))+'">\n'+(null!=(o=l(r, 'if').call(s, null!=t?l(t, 'comment'):t, {name: 'if', hash: {}, fn: e.program(26, i, 0), inverse: e.program(28, i, 0), data: i, loc: {start: {line: 43, column: 16}, end: {line: 47, column: 23}}}))?o:'')+'            </p>\n';
    }, 26: function(e, t, n, r, a) {
      var i=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                    '+e.escapeExpression(e.lambda(null!=t?i(t, 'text'):t, t))+'\n';
    }, 28: function(e, t, n, r, a) {
      var i=e.lambda; var o=e.escapeExpression; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                    <a href="'+o(i(null!=t?s(t, 'text'):t, t))+'" target="_blank" class="link">'+o(i(null!=t?s(t, 'text'):t, t))+'</a>\n';
    }, 30: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(o=l(r, 'if').call(s, __default(n(28)).call(s, null!=t?l(t, 'type'):t, 'html', {name: 'eq', hash: {}, data: i, loc: {start: {line: 51, column: 10}, end: {line: 51, column: 26}}}), {name: 'if', hash: {}, fn: e.program(31, i, 0), inverse: e.program(33, i, 0), data: i, loc: {start: {line: 51, column: 0}, end: {line: 58, column: 0}}}))?o:'';
    }, 31: function(e, t, r, a, i) {
      var o=e.escapeExpression; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <iframe class="'+o(__default(n(6)).call(null!=t?t:e.nullContext||{}, 'attachment__iframe', {name: 'b', hash: {fullscreen: null!=t?s(t, 'fullScreen'):t}, data: i, loc: {start: {line: 52, column: 23}, end: {line: 52, column: 71}}}))+'" frameborder="0" src="'+o(e.lambda(null!=t?s(t, 'sourceUrl'):t, t))+'"></iframe>\n';
    }, 33: function(e, t, r, a, i) {
      var o=e.escapeExpression; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="'+o(__default(n(6)).call(null!=t?t:e.nullContext||{}, 'attachment__text-container', {name: 'b', hash: {fullscreen: null!=t?s(t, 'fullScreen'):t}, data: i, loc: {start: {line: 54, column: 16}, end: {line: 54, column: 72}}}))+'">\n        <span class="fa fa-download"></span>\n        <a class="link" href="'+o(e.lambda(null!=t?s(t, 'sourceUrl'):t, t))+'" download>Click to download attachment</a>\n    </div>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(o=l(r, 'if').call(s, __default(n(28)).call(s, null!=t?l(t, 'type'):t, 'custom', {name: 'eq', hash: {}, data: i, loc: {start: {line: 1, column: 6}, end: {line: 1, column: 24}}}), {name: 'if', hash: {}, fn: e.program(1, i, 0), inverse: e.program(3, i, 0), data: i, loc: {start: {line: 1, column: 0}, end: {line: 58, column: 7}}}))?o:'';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="modal__background">\n    <div class="modal__window">\n        <h2 class="'+s(__default(n(6)).call(o, null!=t?l(t, 'cls'):t, 'title', {name: 'b', hash: {}, data: i, loc: {start: {line: 3, column: 19}, end: {line: 3, column: 36}}}))+'">\n            <span>'+s(e.lambda(null!=t?l(t, 'title'):t, t))+'</span>\n            <span class="'+s(__default(n(6)).call(o, null!=t?l(t, 'cls'):t, 'close', {name: 'b', hash: {}, data: i, loc: {start: {line: 5, column: 25}, end: {line: 5, column: 42}}}))+' fa fa-close" data-tooltip="Close"></span>\n        </h2>\n        <div class="modal__content"></div>\n        <br>\n    </div>\n\n</div>\n';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="execution__content">'+(null!=(o=e.invokePartial(n(50), t, {name: 'stages-block', hash: {expanded: !1, baseUrl: null!=t?l(t, 'baseUrl'):t, name: __default(n(8)).call(s, 'testResult.execution.setup', {name: 't', hash: {}, data: i, loc: {start: {line: 5, column: 45}, end: {line: 5, column: 77}}}), stages: null!=t?l(t, 'before'):t}, data: i, helpers: r, partials: a, decorators: e.decorators}))?o:'')+(null!=(o=e.invokePartial(n(50), t, {name: 'stages-block', hash: {expanded: !0, baseUrl: null!=t?l(t, 'baseUrl'):t, name: __default(n(8)).call(s, 'testResult.execution.body', {name: 't', hash: {}, data: i, loc: {start: {line: 6, column: 43}, end: {line: 6, column: 74}}}), stages: null!=t?l(t, 'test'):t}, data: i, helpers: r, partials: a, decorators: e.decorators}))?o:'')+(null!=(o=e.invokePartial(n(50), t, {name: 'stages-block', hash: {expanded: !1, baseUrl: null!=t?l(t, 'baseUrl'):t, name: __default(n(8)).call(s, 'testResult.execution.teardown', {name: 't', hash: {}, data: i, loc: {start: {line: 7, column: 44}, end: {line: 7, column: 79}}}), stages: null!=t?l(t, 'after'):t}, data: i, helpers: r, partials: a, decorators: e.decorators}))?o:'')+'    </div>\n';
    }, 3: function(e, t, r, a, i) {
      return '    <div class="'+e.escapeExpression(__default(n(6)).call(null!=t?t:e.nullContext||{}, 'pane', 'section', {name: 'b', hash: {}, data: i, loc: {start: {line: 10, column: 16}, end: {line: 10, column: 38}}}))+'">\n        No information about test execution is available.\n    </div>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<h3 class="test-result-execution__title">'+e.escapeExpression(__default(n(8)).call(s, 'testResult.execution.name', {name: 't', hash: {}, data: i, loc: {start: {line: 1, column: 41}, end: {line: 1, column: 74}}}))+'</h3>\n\n'+(null!=(o=l(r, 'if').call(s, null!=t?l(t, 'hasContent'):t, {name: 'if', hash: {}, fn: e.program(1, i, 0), inverse: e.program(3, i, 0), data: i, loc: {start: {line: 3, column: 0}, end: {line: 13, column: 7}}}))?o:'');
    }, usePartial: !0, useData: !0});
  }, function(e, t, n) {
    'use strict'; (function(t) {
    /**
 * filesize
 *
 * @copyright 2018 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 3.6.1
 */
      !function(t) {
        var n=/^(b|B)$/; var r={iec: {bits: ['b', 'Kib', 'Mib', 'Gib', 'Tib', 'Pib', 'Eib', 'Zib', 'Yib'], bytes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']}, jedec: {bits: ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'], bytes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']}}; var a={iec: ['', 'kibi', 'mebi', 'gibi', 'tebi', 'pebi', 'exbi', 'zebi', 'yobi'], jedec: ['', 'kilo', 'mega', 'giga', 'tera', 'peta', 'exa', 'zetta', 'yotta']}; function filesize(e) {
          var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}; var i=[]; var o=0; var s=void 0; var l=void 0; var u=void 0; var c=void 0; var h=void 0; var f=void 0; var d=void 0; var p=void 0; var m=void 0; var g=void 0; var v=void 0; var y=void 0; var b=void 0; var w=void 0; var x=void 0; if (isNaN(e)) throw new Error('Invalid arguments'); return u=!0===t.bits, v=!0===t.unix, l=t.base||2, g=void 0!==t.round?t.round:v?1:2, y=void 0!==t.separator&&t.separator||'', b=void 0!==t.spacer?t.spacer:v?'':' ', x=t.symbols||t.suffixes||{}, w=2===l&&t.standard||'jedec', m=t.output||'string', h=!0===t.fullform, f=t.fullforms instanceof Array?t.fullforms:[], s=void 0!==t.exponent?t.exponent:-1, c=l>2?1e3:1024, (d=(p=Number(e))<0)&&(p=-p), (-1===s||isNaN(s))&&(s=Math.floor(Math.log(p)/Math.log(c)))<0&&(s=0), s>8&&(s=8), 0===p?(i[0]=0, i[1]=v?'':r[w][u?'bits':'bytes'][s]):(o=p/(2===l?Math.pow(2, 10*s):Math.pow(1e3, s)), u&&(o*=8)>=c&&s<8&&(o/=c, s++), i[0]=Number(o.toFixed(s>0?g:0)), i[1]=10===l&&1===s?u?'kb':'kB':r[w][u?'bits':'bytes'][s], v&&(i[1]='jedec'===w?i[1].charAt(0):s>0?i[1].replace(/B$/, ''):i[1], n.test(i[1])&&(i[0]=Math.floor(i[0]), i[1]=''))), d&&(i[0]=-i[0]), i[1]=x[i[1]]||i[1], 'array'===m?i:'exponent'===m?s:'object'===m?{value: i[0], suffix: i[1], symbol: i[1]}:(h&&(i[1]=f[s]?f[s]:a[w][s]+(u?'bit':'byte')+(1===i[0]?'':'s')), y.length>0&&(i[0]=i[0].toString().replace('.', y)), i.join(b));
        }filesize.partial=function(e) {
          return function(t) {
            return filesize(t, e);
          };
        }, e.exports=filesize;
      }('undefined'!=typeof window&&window);
    }).call(this, n(41));
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="'+l(__default(n(6)).call(s, 'alert', 'wide', {name: 'b', hash: {status: null!=t?u(t, 'status'):t}, data: i, loc: {start: {line: 1, column: 12}, end: {line: 1, column: 46}}}))+'">'+(null!=(o=e.invokePartial(n(54), t, {name: '../../blocks/status-details/status-details', data: i, helpers: r, partials: a, decorators: e.decorators}))?o:'')+'</div>\n\n<div class="'+l(__default(n(6)).call(s, null!=t?u(t, 'cls'):t, 'tags', {name: 'b', hash: {}, data: i, loc: {start: {line: 5, column: 12}, end: {line: 5, column: 28}}}))+'"></div>\n<div class="'+l(__default(n(6)).call(s, null!=t?u(t, 'cls'):t, 'before', {name: 'b', hash: {}, data: i, loc: {start: {line: 6, column: 12}, end: {line: 6, column: 30}}}))+'"></div>\n<div class="'+l(__default(n(6)).call(s, null!=t?u(t, 'cls'):t, 'execution', {name: 'b', hash: {}, data: i, loc: {start: {line: 7, column: 12}, end: {line: 7, column: 33}}}))+'"></div>\n<div class="'+l(__default(n(6)).call(s, null!=t?u(t, 'cls'):t, 'after', {name: 'b', hash: {}, data: i, loc: {start: {line: 8, column: 12}, end: {line: 8, column: 29}}}))+'"></div>';
    }, usePartial: !0, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="pane__subtitle long-line line-ellipsis">\n'+(null!=(o=e.invokePartial(n(183), t, {name: '../../blocks/clipboard-copy/clipboard-copy', hash: {value: null!=t?s(t, 'fullName'):t}, data: i, indent: '        ', helpers: r, partials: a, decorators: e.decorators}))?o:'')+'        <span class="fullname__body">'+e.escapeExpression(e.lambda(null!=t?s(t, 'fullName'):t, t))+'</span>\n    </div>\n';
    }, 3: function(e, t, r, a, i) {
      return '            '+e.escapeExpression(__default(n(22)).call(null!=t?t:e.nullContext||{}, 'flaky', {name: 'allure-icon', hash: {}, data: i, loc: {start: {line: 13, column: 12}, end: {line: 13, column: 35}}}))+'\n';
    }, 5: function(e, t, r, a, i) {
      return '            '+e.escapeExpression(__default(n(22)).call(null!=t?t:e.nullContext||{}, 'newFailed', {name: 'allure-icon', hash: {}, data: i, loc: {start: {line: 16, column: 12}, end: {line: 16, column: 39}}}))+'\n';
    }, 7: function(e, t, r, a, i) {
      return '            '+e.escapeExpression(__default(n(22)).call(null!=t?t:e.nullContext||{}, 'newPassed', {name: 'allure-icon', hash: {}, data: i, loc: {start: {line: 19, column: 12}, end: {line: 19, column: 39}}}))+'\n';
    }, 9: function(e, t, r, a, i) {
      return '            '+e.escapeExpression(__default(n(22)).call(null!=t?t:e.nullContext||{}, 'newBroken', {name: 'allure-icon', hash: {}, data: i, loc: {start: {line: 22, column: 12}, end: {line: 22, column: 39}}}))+'\n';
    }, 11: function(e, t, r, a, i) {
      return '            '+e.escapeExpression(__default(n(22)).call(null!=t?t:e.nullContext||{}, 'retriesStatusChange', {name: 'allure-icon', hash: {}, data: i, loc: {start: {line: 25, column: 12}, end: {line: 25, column: 49}}}))+'\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.escapeExpression; var u=e.lambda; var c=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return (null!=(o=c(r, 'if').call(s, null!=t?c(t, 'fullName'):t, {name: 'if', hash: {}, fn: e.program(1, i, 0), inverse: e.noop, data: i, loc: {start: {line: 1, column: 0}, end: {line: 6, column: 7}}}))?o:'')+'<h2 class="'+l(__default(n(6)).call(s, 'pane', 'title', {name: 'b', hash: {borderless: !0}, data: i, loc: {start: {line: 7, column: 11}, end: {line: 7, column: 47}}}))+'">\n    <div class="'+l(__default(n(6)).call(s, null!=t?c(t, 'cls'):t, 'status', {name: 'b', hash: {}, data: i, loc: {start: {line: 8, column: 16}, end: {line: 8, column: 34}}}))+'">\n        <span class="label label_status_'+l(u(null!=t?c(t, 'status'):t, t))+'">'+l(__default(n(8)).call(s, null!=t?c(t, 'statusName'):t, {name: 't', hash: {}, data: i, loc: {start: {line: 9, column: 52}, end: {line: 9, column: 68}}}))+'</span>\n    </div>\n    <div class="'+l(__default(n(6)).call(s, null!=t?c(t, 'cls'):t, 'name', {name: 'b', hash: {}, data: i, loc: {start: {line: 11, column: 16}, end: {line: 11, column: 32}}}))+'">\n'+(null!=(o=c(r, 'if').call(s, null!=t?c(t, 'flaky'):t, {name: 'if', hash: {}, fn: e.program(3, i, 0), inverse: e.noop, data: i, loc: {start: {line: 12, column: 8}, end: {line: 14, column: 15}}}))?o:'')+(null!=(o=c(r, 'if').call(s, null!=t?c(t, 'newFailed'):t, {name: 'if', hash: {}, fn: e.program(5, i, 0), inverse: e.noop, data: i, loc: {start: {line: 15, column: 8}, end: {line: 17, column: 15}}}))?o:'')+(null!=(o=c(r, 'if').call(s, null!=t?c(t, 'newPassed'):t, {name: 'if', hash: {}, fn: e.program(7, i, 0), inverse: e.noop, data: i, loc: {start: {line: 18, column: 8}, end: {line: 20, column: 15}}}))?o:'')+(null!=(o=c(r, 'if').call(s, null!=t?c(t, 'newBroken'):t, {name: 'if', hash: {}, fn: e.program(9, i, 0), inverse: e.noop, data: i, loc: {start: {line: 21, column: 8}, end: {line: 23, column: 15}}}))?o:'')+(null!=(o=c(r, 'if').call(s, null!=t?c(t, 'retriesStatusChange'):t, {name: 'if', hash: {}, fn: e.program(11, i, 0), inverse: e.noop, data: i, loc: {start: {line: 24, column: 8}, end: {line: 26, column: 15}}}))?o:'')+'        <span class="long-line">'+l(u(null!=t?c(t, 'name'):t, t))+'</span>\n    </div>\n</h2>\n\n'+(null!=(o=e.invokePartial(n(184), t, {name: '../../blocks/tabs/tabs', data: i, helpers: r, partials: a, decorators: e.decorators}))?o:'')+'<div class="'+l(__default(n(6)).call(s, null!=t?c(t, 'cls'):t, 'content', {name: 'b', hash: {}, data: i, loc: {start: {line: 32, column: 12}, end: {line: 32, column: 31}}}))+'"></div>\n';
    }, usePartial: !0, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=null!=t?t:e.nullContext||{}; var s=e.hooks.helperMissing; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<svg class="chart__svg">\n    <g class="chart__plot" transform="translate('+l('function'==typeof(i=null!=(i=u(n, 'PAD_LEFT')||(null!=t?u(t, 'PAD_LEFT'):t))?i:s)?i.call(o, {name: 'PAD_LEFT', hash: {}, data: a, loc: {start: {line: 2, column: 48}, end: {line: 2, column: 60}}}):i)+', '+l('function'==typeof(i=null!=(i=u(n, 'PAD_TOP')||(null!=t?u(t, 'PAD_TOP'):t))?i:s)?i.call(o, {name: 'PAD_TOP', hash: {}, data: a, loc: {start: {line: 2, column: 62}, end: {line: 2, column: 73}}}):i)+')"></g>\n    <g class="chart__axis chart__axis_x"></g>\n    <g class="chart__axis chart__axis_y"></g>\n</svg>';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({1: function(e, t, n, r, a) {
      var i; var o=null!=t?t:e.nullContext||{}; var s=e.hooks.helperMissing; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <div class="trend__tooltip_label">\n            <span class="label" style="background-color: '+l('function'==typeof(i=null!=(i=u(n, 'color')||(null!=t?u(t, 'color'):t))?i:s)?i.call(o, {name: 'color', hash: {}, data: a, loc: {start: {line: 5, column: 57}, end: {line: 5, column: 66}}}):i)+'">'+l('function'==typeof(i=null!=(i=u(n, 'num')||(null!=t?u(t, 'num'):t))?i:s)?i.call(o, {name: 'num', hash: {}, data: a, loc: {start: {line: 5, column: 68}, end: {line: 5, column: 75}}}):i)+'</span>\n            <span class="trend__tooltip_name">'+l('function'==typeof(i=null!=(i=u(n, 'key')||(null!=t?u(t, 'key'):t))?i:s)?i.call(o, {name: 'key', hash: {}, data: a, loc: {start: {line: 6, column: 46}, end: {line: 6, column: 53}}}):i)+'</span>\n        </div>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return e.escapeExpression('function'==typeof(o=null!=(o=l(n, 'name')||(null!=t?l(t, 'name'):t))?o:e.hooks.helperMissing)?o.call(s, {name: 'name', hash: {}, data: a, loc: {start: {line: 1, column: 0}, end: {line: 1, column: 8}}}):o)+'\n<div class="trend__tooltip">\n'+(null!=(i=l(n, 'each').call(s, null!=t?l(t, 'data'):t, {name: 'each', hash: {}, fn: e.program(1, a, 0), inverse: e.noop, data: a, loc: {start: {line: 3, column: 4}, end: {line: 8, column: 13}}}))?i:'')+'</div>\n';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i, o, s) {
      var l=e.lambda; var u=e.escapeExpression; var c=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <'+u(l(null!=s[1]?c(s[1], 'rowTag'):s[1], t))+' class="table__row" href="#'+u(l(null!=s[1]?c(s[1], 'baseUrl'):s[1], t))+'/'+u(l(null!=t?c(t, 'uid'):t, t))+'">\n            <div class="table__col">'+u(l(null!=t?c(t, 'name'):t, t))+'</div>\n            <div class="table__col">\n                '+u(__default(n(193)).call(null!=t?t:e.nullContext||{}, null!=t?c(t, 'statistic'):t, {name: 'status-bar', hash: {}, data: i, loc: {start: {line: 10, column: 16}, end: {line: 10, column: 40}}}))+'\n            </div>\n        </'+u(l(null!=s[1]?c(s[1], 'rowTag'):s[1], t))+'>\n';
    }, 3: function(e, t, r, a, i) {
      var o=e.escapeExpression; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <a class="table__row" href="#'+o(e.lambda(null!=t?s(t, 'baseUrl'):t, t))+'">\n            <div class="table__col table__col_center">\n                '+o(__default(n(8)).call(null!=t?t:e.nullContext||{}, 'component.widgetStatus.showAll', {name: 't', hash: {}, data: i, loc: {start: {line: 17, column: 16}, end: {line: 17, column: 54}}}))+'\n            </div>\n        </a>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i, o, s) {
      var l; var u=null!=t?t:e.nullContext||{}; var c=e.escapeExpression; var h=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<h2 class="widget__title">\n    '+c(__default(n(8)).call(u, null!=t?h(t, 'title'):t, {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 15}}}))+'\n    <span class="widget__subtitle">'+c(__default(n(8)).call(u, 'component.widgetStatus.total', {name: 't', hash: {count: null!=t?h(t, 'total'):t}, data: i, loc: {start: {line: 3, column: 35}, end: {line: 3, column: 83}}}))+'</span>\n</h2>\n<div class="table table_hover widget__table">\n'+(null!=(l=h(r, 'each').call(u, null!=t?h(t, 'items'):t, {name: 'each', hash: {}, fn: e.program(1, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 6, column: 4}, end: {line: 13, column: 13}}}))?l:'')+(null!=(l=h(r, 'if').call(u, null!=t?h(t, 'showAll'):t, {name: 'if', hash: {}, fn: e.program(3, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 14, column: 4}, end: {line: 20, column: 11}}}))?l:'')+'</div>\n';
    }, useData: !0, useDepths: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=e.lambda; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="'+l(s(null!=t?u(t, 'cls'):t, t))+'">\n    <p class="'+l((o=n(6), o&&(o.__esModule?o.default:o)).call(null!=t?t:e.nullContext||{}, null!=t?u(t, 'cls'):t, 'message', {name: 'b', hash: {}, data: i, loc: {start: {line: 2, column: 14}, end: {line: 2, column: 33}}}))+'">'+l(s(null!=t?u(t, 'message'):t, t))+'</p>\n</div>';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      return '<div class="side-by-side__left"></div>\n<div class="side-by-side__right"></div>';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <div class="'+e.escapeExpression(__default(n(6)).call(s, 'marks-toggle', 'item', {name: 'b', hash: {}, data: i, loc: {start: {line: 4, column: 20}, end: {line: 4, column: 47}}}))+'">\n'+(null!=(o=l(r, 'if').call(s, null!=t?l(t, 'active'):t, {name: 'if', hash: {}, fn: e.program(2, i, 0), inverse: e.program(4, i, 0), data: i, loc: {start: {line: 5, column: 8}, end: {line: 11, column: 15}}}))?o:'')+'        </div>\n';
    }, 2: function(e, t, r, a, i) {
      var o=e.lambda; var s=e.escapeExpression; var l=null!=t?t:e.nullContext||{}; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <span class="y-label-mark y-label_mark_'+s(o(null!=t?u(t, 'mark'):t, t))+'" data-mark="'+s(o(null!=t?u(t, 'mark'):t, t))+'"\n                    data-tooltip="'+s(__default(n(8)).call(l, 'component.markToggle.hideCases', {name: 't', hash: {mark: null!=t?u(t, 'markName'):t}, data: i, loc: {start: {line: 7, column: 34}, end: {line: 7, column: 86}}}))+'">'+s(__default(n(22)).call(l, null!=t?u(t, 'mark'):t, {name: 'allure-icon', hash: {noTooltip: !0}, data: i, loc: {start: {line: 7, column: 88}, end: {line: 7, column: 123}}}))+'</span>\n';
    }, 4: function(e, t, r, a, i) {
      var o=e.lambda; var s=e.escapeExpression; var l=null!=t?t:e.nullContext||{}; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <span class="n-label-mark n-label_mark_'+s(o(null!=t?u(t, 'mark'):t, t))+'" data-mark="'+s(o(null!=t?u(t, 'mark'):t, t))+'"\n                    data-tooltip="'+s(__default(n(8)).call(l, 'component.markToggle.showCases', {name: 't', hash: {mark: null!=t?u(t, 'markName'):t}, data: i, loc: {start: {line: 10, column: 34}, end: {line: 10, column: 86}}}))+'">'+s(__default(n(22)).call(l, null!=t?u(t, 'mark'):t, {name: 'allure-icon', hash: {noTooltip: !0}, data: i, loc: {start: {line: 10, column: 88}, end: {line: 10, column: 123}}}))+'</span>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="'+l(__default(n(6)).call(s, 'marks-toggle', 'items', {name: 'b', hash: {}, data: i, loc: {start: {line: 1, column: 12}, end: {line: 1, column: 40}}}))+'">\n    '+l(__default(n(8)).call(s, 'component.tree.filter-marks', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 39}}}))+':\n'+(null!=(o=u(r, 'each').call(s, null!=t?u(t, 'marks'):t, {name: 'each', hash: {}, fn: e.program(1, i, 0), inverse: e.noop, data: i, loc: {start: {line: 3, column: 4}, end: {line: 13, column: 13}}}))?o:'')+'</div>\n';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      return '<div class="search__container">\n    <input class="search__input"\n           type="text" />\n</div>\n';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lambda; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="'+s(__default(n(6)).call(o, 'sorter', 'item', {name: 'b', hash: {}, data: i, loc: {start: {line: 3, column: 16}, end: {line: 3, column: 37}}}))+'" data-name="'+s(l(null!=t?u(t, 'name'):t, t))+'" data-asc='+s(l(null!=t?u(t, 'asc'):t, t))+'>\n        <span class="'+s(__default(n(6)).call(o, 'sorter', {name: 'b', hash: {enabled: __default(n(200)).call(o, null!=t?u(t, 'asc'):t, null!=t?u(t, 'desc'):t, {name: 'or', hash: {}, data: i, loc: {start: {line: 4, column: 42}, end: {line: 4, column: 55}}})}, data: i, loc: {start: {line: 4, column: 21}, end: {line: 4, column: 57}}}))+' '+s(__default(n(6)).call(o, 'sorter', 'name', {name: 'b', hash: {}, data: i, loc: {start: {line: 4, column: 58}, end: {line: 4, column: 79}}}))+'">'+s(__default(n(8)).call(o, null!=t?u(t, 'name'):t, {name: 't', hash: {}, data: i, loc: {start: {line: 4, column: 81}, end: {line: 4, column: 91}}}))+'</span>\n        <span class="fa-stack '+s(__default(n(6)).call(o, 'sorter', 'icon', {name: 'b', hash: {}, data: i, loc: {start: {line: 5, column: 30}, end: {line: 5, column: 51}}}))+'">\n            <i class="fa fa-sort-asc fa-stack-1x '+s(__default(n(6)).call(o, 'sorter', {name: 'b', hash: {enabled: null!=t?u(t, 'asc'):t}, data: i, loc: {start: {line: 6, column: 49}, end: {line: 6, column: 75}}}))+'"></i>\n            <i class="fa fa-sort-desc fa-stack-1x '+s(__default(n(6)).call(o, 'sorter', {name: 'b', hash: {enabled: null!=t?u(t, 'desc'):t}, data: i, loc: {start: {line: 7, column: 50}, end: {line: 7, column: 77}}}))+'"></i>\n        </span>\n    </div>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="sorter">\n'+(null!=(i=o(n, 'each').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'sorters'):t, {name: 'each', hash: {}, fn: e.program(1, a, 0), inverse: e.noop, data: a, loc: {start: {line: 2, column: 0}, end: {line: 10, column: 9}}}))?i:'')+'</div>\n';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <div class="'+e.escapeExpression(__default(n(6)).call(s, 'status-toggle', 'item', {name: 'b', hash: {}, data: i, loc: {start: {line: 4, column: 20}, end: {line: 4, column: 48}}}))+'">\n'+(null!=(o=l(r, 'if').call(s, null!=t?l(t, 'active'):t, {name: 'if', hash: {}, fn: e.program(2, i, 0), inverse: e.program(4, i, 0), data: i, loc: {start: {line: 5, column: 8}, end: {line: 11, column: 15}}}))?o:'')+'        </div>\n';
    }, 2: function(e, t, r, a, i) {
      var o=e.lambda; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <span class="y-label y-label_status_'+s(o(null!=t?l(t, 'status'):t, t))+'" data-status="'+s(o(null!=t?l(t, 'status'):t, t))+'"\n                    data-tooltip="'+s(__default(n(8)).call(null!=t?t:e.nullContext||{}, 'component.statusToggle.hideCases', {name: 't', hash: {status: null!=t?l(t, 'statusName'):t}, data: i, loc: {start: {line: 7, column: 34}, end: {line: 7, column: 92}}}))+'">'+s(o(null!=t?l(t, 'count'):t, t))+'</span>\n';
    }, 4: function(e, t, r, a, i) {
      var o=e.lambda; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <span class="n-label n-label_status_'+s(o(null!=t?l(t, 'status'):t, t))+'" data-status="'+s(o(null!=t?l(t, 'status'):t, t))+'"\n                    data-tooltip="'+s(__default(n(8)).call(null!=t?t:e.nullContext||{}, 'component.statusToggle.showCases', {name: 't', hash: {status: null!=t?l(t, 'statusName'):t}, data: i, loc: {start: {line: 10, column: 34}, end: {line: 10, column: 92}}}))+'">'+s(o(null!=t?l(t, 'count'):t, t))+'</span>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="'+l(__default(n(6)).call(s, 'status-toggle', 'items', {name: 'b', hash: {}, data: i, loc: {start: {line: 1, column: 12}, end: {line: 1, column: 41}}}))+'">\n    '+l(__default(n(8)).call(s, 'component.tree.filter', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 33}}}))+':\n'+(null!=(o=u(r, 'each').call(s, null!=t?u(t, 'statuses'):t, {name: 'each', hash: {}, fn: e.program(1, i, 0), inverse: e.noop, data: i, loc: {start: {line: 3, column: 4}, end: {line: 13, column: 13}}}))?o:'')+'</div>';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, n, r, a, i, o) {
      var s; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(s=l(n, 'each').call(null!=t?t:e.nullContext||{}, null!=t?l(t, 'items'):t, {name: 'each', hash: {}, fn: e.program(2, a, 0, i, o), inverse: e.noop, data: a, loc: {start: {line: 3, column: 8}, end: {line: 5, column: 17}}}))?s:'';
    }, 2: function(e, t, r, a, i, o, s) {
      var l; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(l=e.invokePartial(n(81), t, {name: 'tree-group', hash: {testResultTab: null!=s[1]?u(s[1], 'testResultTab'):s[1], tabName: null!=s[1]?u(s[1], 'tabName'):s[1], showGroupInfo: null!=s[1]?u(s[1], 'showGroupInfo'):s[1], baseUrl: null!=s[1]?u(s[1], 'baseUrl'):s[1]}, data: i, helpers: r, partials: a, decorators: e.decorators}))?l:'';
    }, 4: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '           <div class="'+s(__default(n(6)).call(o, null!=t?l(t, 'cls'):t, 'empty', {name: 'b', hash: {}, data: i, loc: {start: {line: 7, column: 23}, end: {line: 7, column: 40}}}))+'">'+s(__default(n(8)).call(o, 'component.tree.empty', {name: 't', hash: {}, data: i, loc: {start: {line: 7, column: 42}, end: {line: 7, column: 70}}}))+'</div>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i, o, s) {
      var l; var u=null!=t?t:e.nullContext||{}; var c=e.escapeExpression; var h=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="'+c(__default(n(6)).call(u, null!=t?h(t, 'cls'):t, 'content', {name: 'b', hash: {}, data: i, loc: {start: {line: 1, column: 12}, end: {line: 1, column: 31}}}))+'" data-uid="'+c(e.lambda(null!=t?h(t, 'uid'):t, t))+'">\n'+(null!=(l=h(r, 'if').call(u, null!=t?h(t, 'items'):t, {name: 'if', hash: {}, fn: e.program(1, i, 0, o, s), inverse: e.program(4, i, 0, o, s), data: i, loc: {start: {line: 2, column: 4}, end: {line: 8, column: 11}}}))?l:'')+'</div>\n';
    }, usePartial: !0, useData: !0, useDepths: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <span class="'+s(__default(n(6)).call(o, 'pane', 'subtitle', {name: 'b', hash: {}, data: i, loc: {start: {line: 4, column: 21}, end: {line: 4, column: 44}}}))+'">\n        '+s(__default(n(8)).call(o, 'component.tree.filtered.total', {name: 't', hash: {count: null!=t?l(t, 'totalCases'):t}, data: i, loc: {start: {line: 5, column: 8}, end: {line: 5, column: 62}}}))+',\n            '+s(__default(n(8)).call(o, 'component.tree.filtered.shown', {name: 't', hash: {count: null!=t?l(t, 'shownCases'):t}, data: i, loc: {start: {line: 6, column: 12}, end: {line: 6, column: 66}}}))+'\n    </span>\n';
    }, 3: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <a class="fa fa-download '+s(__default(n(6)).call(o, null!=t?l(t, 'cls'):t, 'control', {name: 'b', hash: {}, data: i, loc: {start: {line: 13, column: 37}, end: {line: 13, column: 56}}}))+' '+s(__default(n(6)).call(o, null!=t?l(t, 'cls'):t, 'download', {name: 'b', hash: {}, data: i, loc: {start: {line: 13, column: 57}, end: {line: 13, column: 77}}}))+'" data-tooltip="'+s(__default(n(8)).call(o, 'component.tree.download', {name: 't', hash: {}, data: i, loc: {start: {line: 13, column: 93}, end: {line: 13, column: 124}}}))+'"\n               href="'+s(e.lambda(null!=t?l(t, 'csvUrl'):t, t))+'" download></a>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="'+l(__default(n(6)).call(s, 'pane', 'title', {name: 'b', hash: {borderless: !0}, data: i, loc: {start: {line: 1, column: 12}, end: {line: 1, column: 48}}}))+'">\n    <span class="'+l(__default(n(6)).call(s, 'pane', 'title-text', {name: 'b', hash: {}, data: i, loc: {start: {line: 2, column: 17}, end: {line: 2, column: 42}}}))+'">'+l(__default(n(8)).call(s, null!=t?u(t, 'tabName'):t, {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 44}, end: {line: 2, column: 57}}}))+'</span>\n'+(null!=(o=u(r, 'if').call(s, null!=t?u(t, 'filtered'):t, {name: 'if', hash: {}, fn: e.program(1, i, 0), inverse: e.noop, data: i, loc: {start: {line: 3, column: 4}, end: {line: 8, column: 11}}}))?o:'')+'    <div class="'+l(__default(n(6)).call(s, 'pane', 'search', {name: 'b', hash: {}, data: i, loc: {start: {line: 9, column: 16}, end: {line: 9, column: 37}}}))+'"></div>\n    <span class="pane__controls">\n        <a class="fa fa-info-circle '+l(__default(n(6)).call(s, null!=t?u(t, 'cls'):t, 'control', {name: 'b', hash: {}, data: i, loc: {start: {line: 11, column: 36}, end: {line: 11, column: 55}}}))+' '+l(__default(n(6)).call(s, null!=t?u(t, 'cls'):t, 'info', {name: 'b', hash: {}, data: i, loc: {start: {line: 11, column: 56}, end: {line: 11, column: 72}}}))+'" data-tooltip="'+l(__default(n(8)).call(s, 'component.tree.groups', {name: 't', hash: {}, data: i, loc: {start: {line: 11, column: 88}, end: {line: 11, column: 117}}}))+'"></a>\n'+(null!=(o=u(r, 'if').call(s, null!=t?u(t, 'csvUrl'):t, {name: 'if', hash: {}, fn: e.program(3, i, 0), inverse: e.noop, data: i, loc: {start: {line: 12, column: 8}, end: {line: 15, column: 15}}}))?o:'')+'    </span>\n</div>\n\n<div class="'+l(__default(n(6)).call(s, null!=t?u(t, 'cls'):t, 'ctrl', {name: 'b', hash: {}, data: i, loc: {start: {line: 19, column: 12}, end: {line: 19, column: 28}}}))+'">\n    <div class="'+l(__default(n(6)).call(s, null!=t?u(t, 'cls'):t, 'sorter', {name: 'b', hash: {}, data: i, loc: {start: {line: 20, column: 16}, end: {line: 20, column: 34}}}))+'"></div>\n    <div class="'+l(__default(n(6)).call(s, null!=t?u(t, 'cls'):t, 'strut', {name: 'b', hash: {}, data: i, loc: {start: {line: 21, column: 16}, end: {line: 21, column: 33}}}))+'"></div>\n    <div class="'+l(__default(n(6)).call(s, null!=t?u(t, 'cls'):t, 'filter', {name: 'b', hash: {}, data: i, loc: {start: {line: 22, column: 16}, end: {line: 22, column: 34}}}))+'"></div>\n    <div class="'+l(__default(n(6)).call(s, null!=t?u(t, 'cls'):t, 'filter-marks', {name: 'b', hash: {}, data: i, loc: {start: {line: 23, column: 16}, end: {line: 23, column: 40}}}))+'"></div>\n</div>\n\n<div class="'+l(__default(n(6)).call(s, null!=t?u(t, 'cls'):t, 'content', {name: 'b', hash: {}, data: i, loc: {start: {line: 26, column: 12}, end: {line: 26, column: 31}}}))+'" ></div>';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(206); var a=n(207); var i=n(82); var o=n(208); e.exports=function(e, t) {
      return r(e)||a(e, t)||i(e, t)||o();
    }, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=null!=t?t:e.nullContext||{}; var s=e.hooks.helperMissing; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="loader__mask">\n    <div class="loader">\n        '+l('function'==typeof(i=null!=(i=u(n, 'spinner')||(null!=t?u(t, 'spinner'):t))?i:s)?i.call(o, {name: 'spinner', hash: {}, data: a, loc: {start: {line: 3, column: 8}, end: {line: 3, column: 19}}}):i)+'\n        <p class="loader__text">'+l('function'==typeof(i=null!=(i=u(n, 'text')||(null!=t?u(t, 'text'):t))?i:s)?i.call(o, {name: 'text', hash: {}, data: a, loc: {start: {line: 4, column: 32}, end: {line: 4, column: 40}}}):i)+'</p>\n    </div>\n</div>\n';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=null!=t?t:e.nullContext||{}; var s=e.hooks.helperMissing; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="timeline__body">\n    <div class=\'timeline__chart\'>\n        <svg class="timeline__chart_svg">\n            <g transform="translate('+l('function'==typeof(i=null!=(i=u(n, 'PADDING')||(null!=t?u(t, 'PADDING'):t))?i:s)?i.call(o, {name: 'PADDING', hash: {}, data: a, loc: {start: {line: 4, column: 36}, end: {line: 4, column: 47}}}):i)+', 15)">\n                <g class="timeline__slider"/>\n                <g class="timeline__plot" transform="translate(0, '+l('function'==typeof(i=null!=(i=u(n, 'PADDING')||(null!=t?u(t, 'PADDING'):t))?i:s)?i.call(o, {name: 'PADDING', hash: {}, data: a, loc: {start: {line: 6, column: 66}, end: {line: 6, column: 77}}}):i)+')">\n                    <g class="timeline__chart__axis timeline__chart__axis_x"/>\n                </g>\n            </g>\n        </svg>\n    </div>\n    <div class=\'timeline__brush\'>\n        <svg class="timeline__brush_svg">\n            <g class="timeline__brush__axis timeline__brush__axis_x"/>\n        </svg>\n    </div>\n</div>';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      return '<h2 class="widget__title">\n    '+e.escapeExpression((o=n(8), o&&(o.__esModule?o.default:o)).call(null!=t?t:e.nullContext||{}, 'chart.status.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 29}}}))+'\n</h2>\n<div class="status-widget__content chart__body"></div>\n'; var o;
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      return '<h2 class="widget__title">\n    '+e.escapeExpression((o=n(8), o&&(o.__esModule?o.default:o)).call(null!=t?t:e.nullContext||{}, 'chart.severity.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 31}}}))+'\n</h2>\n<div class="severity-widget__content chart__body"></div>'; var o;
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      return '<h2 class="widget__title">\n    '+e.escapeExpression((o=n(8), o&&(o.__esModule?o.default:o)).call(null!=t?t:e.nullContext||{}, 'chart.duration.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 31}}}))+'\n</h2>\n<div class="duration-widget__content chart__body"></div>'; var o;
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      return '<h2 class="widget__title">\n    '+e.escapeExpression((o=n(8), o&&(o.__esModule?o.default:o)).call(null!=t?t:e.nullContext||{}, 'widget.durationTrend.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 37}}}))+'\n</h2>\n<div class="duration-trend__chart"></div>\n'; var o;
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      return '<h2 class="widget__title">\n    '+e.escapeExpression((o=n(8), o&&(o.__esModule?o.default:o)).call(null!=t?t:e.nullContext||{}, 'widget.retryTrend.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 34}}}))+'\n</h2>\n<div class="retry-trend__chart"></div>\n'; var o;
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      return '<h2 class="widget__title">\n    '+e.escapeExpression((o=n(8), o&&(o.__esModule?o.default:o)).call(null!=t?t:e.nullContext||{}, 'widget.categoriesTrend.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 39}}}))+'\n</h2>\n<div class="categories-trend__chart"></div>\n'; var o;
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                '+s(__default(n(8)).call(o, 'widget.summary.aggregatedName', {name: 't', hash: {}, data: i, loc: {start: {line: 5, column: 16}, end: {line: 5, column: 53}}}))+'\n                <span class="'+s(__default(n(6)).call(o, 'widget', 'subtitle', {name: 'b', hash: {}, data: i, loc: {start: {line: 6, column: 29}, end: {line: 6, column: 54}}}))+'">'+s(e.lambda(null!=t?l(t, 'launchesCount'):t, t))+' '+s(__default(n(8)).call(o, 'widget.summary.launches', {name: 't', hash: {count: null!=t?l(t, 'launchesCount'):t}, data: i, loc: {start: {line: 6, column: 74}, end: {line: 6, column: 125}}}))+'</span>\n';
    }, 3: function(e, t, r, a, i) {
      var o; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                '+s(e.lambda(null!=t?l(t, 'reportName'):t, t))+' '+s(__default(n(38)).call(null!=t?t:e.nullContext||{}, null!=(o=null!=t?l(t, 'time'):t)?l(o, 'stop'):o, {name: 'date', hash: {}, data: i, loc: {start: {line: 8, column: 31}, end: {line: 8, column: 49}}}))+'\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="'+l(__default(n(6)).call(s, 'widget', 'flex-line', {name: 'b', hash: {}, data: i, loc: {start: {line: 1, column: 12}, end: {line: 1, column: 38}}}))+'">\n    <div class="'+l(__default(n(6)).call(s, 'widget', 'column', {name: 'b', hash: {}, data: i, loc: {start: {line: 2, column: 16}, end: {line: 2, column: 39}}}))+'">\n        <h2 class="'+l(__default(n(6)).call(s, 'widget', 'title', {name: 'b', hash: {}, data: i, loc: {start: {line: 3, column: 19}, end: {line: 3, column: 41}}}))+'">\n'+(null!=(o=u(r, 'if').call(s, null!=t?u(t, 'isAggregated'):t, {name: 'if', hash: {}, fn: e.program(1, i, 0), inverse: e.program(3, i, 0), data: i, loc: {start: {line: 4, column: 12}, end: {line: 9, column: 19}}}))?o:'')+'            <div class="'+l(__default(n(6)).call(s, 'widget', 'subtitle', {name: 'b', hash: {}, data: i, loc: {start: {line: 10, column: 24}, end: {line: 10, column: 49}}}))+'">\n                '+l(__default(n(32)).call(s, null!=(o=null!=t?u(t, 'time'):t)?u(o, 'start'):o, {name: 'time', hash: {}, data: i, loc: {start: {line: 11, column: 16}, end: {line: 11, column: 35}}}))+' - '+l(__default(n(32)).call(s, null!=(o=null!=t?u(t, 'time'):t)?u(o, 'stop'):o, {name: 'time', hash: {}, data: i, loc: {start: {line: 11, column: 38}, end: {line: 11, column: 56}}}))+' ('+l(__default(n(23)).call(s, null!=(o=null!=t?u(t, 'time'):t)?u(o, 'duration'):o, 2, {name: 'duration', hash: {}, data: i, loc: {start: {line: 11, column: 58}, end: {line: 11, column: 86}}}))+')\n            </div>\n        </h2>\n        <div class="'+l(__default(n(6)).call(s, 'summary-widget', 'stats', {name: 'b', hash: {}, data: i, loc: {start: {line: 14, column: 20}, end: {line: 14, column: 50}}}))+' splash">\n            <div class="'+l(__default(n(6)).call(s, 'splash', 'title', {name: 'b', hash: {}, data: i, loc: {start: {line: 15, column: 24}, end: {line: 15, column: 46}}}))+'">'+l(e.lambda(null!=(o=null!=t?u(t, 'statistic'):t)?u(o, 'total'):o, t))+'</div>\n            <div class="'+l(__default(n(6)).call(s, 'splash', 'subtitle', {name: 'b', hash: {}, data: i, loc: {start: {line: 16, column: 24}, end: {line: 16, column: 49}}}))+'">'+l(__default(n(8)).call(s, 'widget.summary.testResults', {name: 't', hash: {count: null!=(o=null!=t?u(t, 'statistic'):t)?u(o, 'total'):o}, data: i, loc: {start: {line: 16, column: 51}, end: {line: 16, column: 107}}}))+'</div>\n        </div>\n    </div>\n    <div class="'+l(__default(n(6)).call(s, 'widget', 'column', {name: 'b', hash: {}, data: i, loc: {start: {line: 19, column: 16}, end: {line: 19, column: 39}}}))+' '+l(__default(n(6)).call(s, 'summary-widget', 'chart', {name: 'b', hash: {}, data: i, loc: {start: {line: 19, column: 40}, end: {line: 19, column: 70}}}))+'"></div>\n</div>\n';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      return '<h2 class="widget__title">\n    '+e.escapeExpression((o=n(8), o&&(o.__esModule?o.default:o)).call(null!=t?t:e.nullContext||{}, 'widget.trend.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 29}}}))+'\n</h2>\n<div class="history-trend__chart"></div>\n'; var o;
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, n, r, a) {
      var i; var o=null!=t?t:e.nullContext||{}; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <div class="table  table_hover widget__table">\n'+(null!=(i=s(n, 'each').call(o, null!=t?s(t, 'items'):t, {name: 'each', hash: {}, fn: e.program(2, a, 0), inverse: e.noop, data: a, loc: {start: {line: 6, column: 4}, end: {line: 17, column: 13}}}))?i:'')+(null!=(i=s(n, 'if').call(o, null!=t?s(t, 'overLimit'):t, {name: 'if', hash: {}, fn: e.program(6, a, 0), inverse: e.noop, data: a, loc: {start: {line: 18, column: 4}, end: {line: 22, column: 11}}}))?i:'')+'    </div>\n\n';
    }, 2: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <div class="'+l(__default(n(6)).call(s, 'table', 'row', {name: 'b', hash: {}, data: i, loc: {start: {line: 7, column: 20}, end: {line: 7, column: 39}}}))+'" disabled>\n            <div class="'+l(__default(n(6)).call(s, 'table', 'col', {name: 'b', hash: {}, data: i, loc: {start: {line: 8, column: 24}, end: {line: 8, column: 43}}}))+' long-line">\n                '+l(e.lambda(null!=t?u(t, 'name'):t, t))+'\n            </div>\n            <div class="'+l(__default(n(6)).call(s, 'table', 'col', {name: 'b', hash: {}, data: i, loc: {start: {line: 11, column: 24}, end: {line: 11, column: 43}}}))+' long-line">\n'+(null!=(o=u(r, 'each').call(s, null!=t?u(t, 'values'):t, {name: 'each', hash: {}, fn: e.program(3, i, 0), inverse: e.noop, data: i, loc: {start: {line: 12, column: 16}, end: {line: 14, column: 25}}}))?o:'')+'            </div>\n        </div>\n';
    }, 3: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                    '+e.escapeExpression(__default(n(84)).call(s, t, {name: 'linky', hash: {}, data: i, loc: {start: {line: 13, column: 20}, end: {line: 13, column: 34}}}))+(null!=(o=l(r, 'unless').call(s, i&&l(i, 'last'), {name: 'unless', hash: {}, fn: e.program(4, i, 0), inverse: e.noop, data: i, loc: {start: {line: 13, column: 34}, end: {line: 13, column: 67}}}))?o:'')+'\n';
    }, 4: function(e, t, n, r, a) {
      return ',<br>';
    }, 6: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; return '        <a class="'+s(__default(n(6)).call(o, 'table', 'row', {name: 'b', hash: {}, data: i, loc: {start: {line: 19, column: 18}, end: {line: 19, column: 37}}}))+' clickable environment-widget__expand">\n            <div class="'+s(__default(n(6)).call(o, 'table', 'col', {name: 'b', hash: {center: !0}, data: i, loc: {start: {line: 20, column: 24}, end: {line: 20, column: 55}}}))+'">'+s(__default(n(8)).call(o, 'widget.environment.showAll', {name: 't', hash: {}, data: i, loc: {start: {line: 20, column: 57}, end: {line: 20, column: 91}}}))+'</div>\n        </a>\n';
    }, 8: function(e, t, r, a, i) {
      return '    <div class="widget__noitems">'+e.escapeExpression(__default(n(8)).call(null!=t?t:e.nullContext||{}, 'widget.environment.empty', {name: 't', hash: {}, data: i, loc: {start: {line: 26, column: 33}, end: {line: 26, column: 65}}}))+'</div>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<h2 class="widget__title">\n    '+e.escapeExpression(__default(n(8)).call(s, 'widget.environment.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 35}}}))+'\n</h2>\n'+(null!=(o=l(r, 'if').call(s, null!=t?l(t, 'items'):t, {name: 'if', hash: {}, fn: e.program(1, i, 0), inverse: e.program(8, i, 0), data: i, loc: {start: {line: 4, column: 0}, end: {line: 27, column: 7}}}))?o:'');
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(i=o(n, 'each').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'items'):t, {name: 'each', hash: {}, fn: e.program(2, a, 0), inverse: e.noop, data: a, loc: {start: {line: 6, column: 4}, end: {line: 30, column: 13}}}))?i:'';
    }, 2: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.escapeExpression; var u=e.lambda; var c=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <span class="table__row">\n        <div class="'+l(__default(n(6)).call(s, 'table', 'col', {name: 'b', hash: {}, data: i, loc: {start: {line: 8, column: 20}, end: {line: 8, column: 39}}}))+' executor">\n            <span class="executor-icon executor-icon__'+l(u(null!=t?c(t, 'type'):t, t))+'">&nbsp;</span>\n            '+l(u(null!=t?c(t, 'name'):t, t))+'\n        </div>\n'+(null!=(o=c(r, 'if').call(s, null!=t?c(t, 'buildName'):t, {name: 'if', hash: {}, fn: e.program(3, i, 0), inverse: e.program(8, i, 0), data: i, loc: {start: {line: 12, column: 8}, end: {line: 28, column: 15}}}))?o:'')+'    </span>\n';
    }, 3: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <div class="'+e.escapeExpression(__default(n(6)).call(s, 'table', 'col', {name: 'b', hash: {right: !0}, data: i, loc: {start: {line: 13, column: 24}, end: {line: 13, column: 54}}}))+' executor">\n'+(null!=(o=l(r, 'if').call(s, null!=t?l(t, 'buildUrl'):t, {name: 'if', hash: {}, fn: e.program(4, i, 0), inverse: e.program(6, i, 0), data: i, loc: {start: {line: 14, column: 16}, end: {line: 21, column: 23}}}))?o:'')+'\n            </div>\n';
    }, 4: function(e, t, n, r, a) {
      var i=e.lambda; var o=e.escapeExpression; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                    <a class="link" href="'+o(i(null!=t?s(t, 'buildUrl'):t, t))+'">\n                        '+o(i(null!=t?s(t, 'buildName'):t, t))+'\n                        <span class="fa fa-external-link"></span>\n                    </a>\n';
    }, 6: function(e, t, n, r, a) {
      var i=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                    '+e.escapeExpression(e.lambda(null!=t?i(t, 'buildName'):t, t))+'\n';
    }, 8: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; return '            <div class="'+s(__default(n(6)).call(o, 'table', 'col', {name: 'b', hash: {right: !0}, data: i, loc: {start: {line: 25, column: 24}, end: {line: 25, column: 54}}}))+'">\n                '+s(__default(n(8)).call(o, 'widget.executors.unknown', {name: 't', hash: {}, data: i, loc: {start: {line: 26, column: 16}, end: {line: 26, column: 48}}}))+'\n            </div>\n';
    }, 10: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; return '    <div class="table__row">\n        <div class="'+s(__default(n(6)).call(o, 'table', 'col', {name: 'b', hash: {center: !0}, data: i, loc: {start: {line: 33, column: 20}, end: {line: 33, column: 51}}}))+'">\n            '+s(__default(n(8)).call(o, 'widget.executors.empty', {name: 't', hash: {}, data: i, loc: {start: {line: 34, column: 12}, end: {line: 34, column: 42}}}))+'\n        </div>\n    </div>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<h2 class="widget__title">\n    '+e.escapeExpression(__default(n(8)).call(s, 'widget.executors.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 33}}}))+'\n</h2>\n<div class="table table_hover widget__table">\n'+(null!=(o=l(r, 'if').call(s, null!=t?l(t, 'items'):t, {name: 'if', hash: {}, fn: e.program(1, i, 0), inverse: e.program(10, i, 0), data: i, loc: {start: {line: 5, column: 0}, end: {line: 37, column: 7}}}))?o:'')+'</div>\n';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o; var s; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <h3 class="pane__section-title">'+e.escapeExpression((s=n(8), s&&(s.__esModule?s.default:s)).call(null!=t?t:e.nullContext||{}, 'testResult.description.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 36}, end: {line: 2, column: 71}}}))+'</h3>\n    <div class="description__text">'+(null!=(o=e.lambda(null!=t?l(t, 'descriptionHtml'):t, t))?o:'')+'</div>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(i=o(n, 'if').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'descriptionHtml'):t, {name: 'if', hash: {}, fn: e.program(1, a, 0), inverse: e.noop, data: a, loc: {start: {line: 1, column: 0}, end: {line: 4, column: 7}}}))?i:'';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({1: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    Tags: '+(null!=(i=o(n, 'each').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'tags'):t, {name: 'each', hash: {}, fn: e.program(2, a, 0), inverse: e.noop, data: a, loc: {start: {line: 2, column: 10}, end: {line: 4, column: 13}}}))?i:'');
    }, 2: function(e, t, n, r, a) {
      var i; return '\n        <span class="label label__info">'+(null!=(i=(e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      })(n, 'if').call(null!=t?t:e.nullContext||{}, t, {name: 'if', hash: {}, fn: e.program(3, a, 0), inverse: e.program(5, a, 0), data: a, loc: {start: {line: 3, column: 40}, end: {line: 3, column: 79}}}))?i:'')+'</span>\n';
    }, 3: function(e, t, n, r, a) {
      return e.escapeExpression(e.lambda(t, t));
    }, 5: function(e, t, n, r, a) {
      return 'null';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(i=o(n, 'if').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'tags'):t, {name: 'if', hash: {}, fn: e.program(1, a, 0), inverse: e.noop, data: a, loc: {start: {line: 1, column: 0}, end: {line: 5, column: 7}}}))?i:'';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o; var s; var l=null!=t?t:e.nullContext||{}; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    '+e.escapeExpression((s=n(8), s&&(s.__esModule?s.default:s)).call(l, 'testResult.categories.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 38}}}))+':\n'+(null!=(o=u(r, 'each').call(l, null!=t?u(t, 'categories'):t, {name: 'each', hash: {}, fn: e.program(2, i, 0), inverse: e.noop, data: i, loc: {start: {line: 3, column: 4}, end: {line: 5, column: 13}}}))?o:'');
    }, 2: function(e, t, n, r, a) {
      var i=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <span>'+e.escapeExpression(e.lambda(null!=t?i(t, 'name'):t, t))+' </span>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(i=o(n, 'if').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'categories'):t, {name: 'if', hash: {}, fn: e.program(1, a, 0), inverse: e.noop, data: a, loc: {start: {line: 1, column: 0}, end: {line: 6, column: 7}}}))?i:'';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i, o, s) {
      var l; var u=null!=t?t:e.nullContext||{}; var c=e.escapeExpression; var h=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <div class="'+c(__default(n(6)).call(u, null!=t?h(t, 'cls'):t, 'success-rate', {name: 'b', hash: {}, data: i, loc: {start: {line: 3, column: 20}, end: {line: 3, column: 44}}}))+'">\n            '+c(__default(n(8)).call(u, 'testResult.history.successRate', {name: 't', hash: {}, data: i, loc: {start: {line: 4, column: 12}, end: {line: 4, column: 50}}}))+' '+c(e.lambda(null!=t?h(t, 'successRate'):t, t))+'\n'+(null!=(l=h(r, 'if').call(u, null!=(l=null!=(l=null!=t?h(t, 'history'):t)?h(l, 'statistic'):l)?h(l, 'total'):l, {name: 'if', hash: {}, fn: e.program(2, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 5, column: 12}, end: {line: 7, column: 19}}}))?l:'')+'        </div>\n'+(null!=(l=h(r, 'each').call(u, null!=(l=null!=t?h(t, 'history'):t)?h(l, 'items'):l, {name: 'each', hash: {}, fn: e.program(4, i, 0, o, s), inverse: e.noop, data: i, loc: {start: {line: 9, column: 8}, end: {line: 23, column: 17}}}))?l:'');
    }, 2: function(e, t, r, a, i) {
      var o; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                ('+e.escapeExpression(__default(n(8)).call(null!=t?t:e.nullContext||{}, 'testResult.history.statistic', {name: 't', hash: {total: null!=(o=null!=(o=null!=t?s(t, 'history'):t)?s(o, 'statistic'):o)?s(o, 'total'):o, passed: null!=(o=null!=(o=null!=t?s(t, 'history'):t)?s(o, 'statistic'):o)?s(o, 'passed'):o}, data: i, loc: {start: {line: 6, column: 17}, end: {line: 6, column: 115}}}))+')\n';
    }, 4: function(e, t, n, r, a, i, o) {
      var s; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(s=l(n, 'if').call(null!=t?t:e.nullContext||{}, null!=t?l(t, 'reportUrl'):t, {name: 'if', hash: {}, fn: e.program(5, a, 0, i, o), inverse: e.program(7, a, 0, i, o), data: a, loc: {start: {line: 10, column: 12}, end: {line: 22, column: 19}}}))?s:'';
    }, 5: function(e, t, r, a, i, o, s) {
      var l; var u=null!=t?t:e.nullContext||{}; var c=e.escapeExpression; var h=e.lambda; var f=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                <div class="'+c(__default(n(6)).call(u, null!=s[1]?f(s[1], 'cls'):s[1], 'row', {name: 'b', hash: {}, data: i, loc: {start: {line: 11, column: 28}, end: {line: 11, column: 46}}}))+'">\n                    <a class="link" href="'+c(h(null!=t?f(t, 'reportUrl'):t, t))+'" target="_blank">\n                        <span class="label label_status_'+c(h(null!=t?f(t, 'status'):t, t))+'">'+c(h(null!=t?f(t, 'status'):t, t))+'</span>\n                        <span>'+c(__default(n(8)).call(u, 'testResult.history.time', {name: 't', hash: {time: __default(n(32)).call(u, null!=(l=null!=t?f(t, 'time'):t)?f(l, 'start'):l, {name: 'time', hash: {}, data: i, loc: {start: {line: 14, column: 88}, end: {line: 14, column: 105}}}), date: __default(n(38)).call(u, null!=(l=null!=t?f(t, 'time'):t)?f(l, 'start'):l, {name: 'date', hash: {}, data: i, loc: {start: {line: 14, column: 65}, end: {line: 14, column: 82}}})}, data: i, loc: {start: {line: 14, column: 30}, end: {line: 14, column: 107}}}))+'</span>\n                    </a>\n                </div>\n';
    }, 7: function(e, t, r, a, i) {
      var o; var s=e.lambda; var l=e.escapeExpression; var u=null!=t?t:e.nullContext||{}; var c=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                <div>\n                    <span class="label label_status_'+l(s(null!=t?c(t, 'status'):t, t))+'">'+l(s(null!=t?c(t, 'status'):t, t))+'</span>\n                    <span>'+l(__default(n(8)).call(u, 'testResult.history.time', {name: 't', hash: {time: __default(n(32)).call(u, null!=(o=null!=t?c(t, 'time'):t)?c(o, 'start'):o, {name: 'time', hash: {}, data: i, loc: {start: {line: 20, column: 84}, end: {line: 20, column: 101}}}), date: __default(n(38)).call(u, null!=(o=null!=t?c(t, 'time'):t)?c(o, 'start'):o, {name: 'date', hash: {}, data: i, loc: {start: {line: 20, column: 61}, end: {line: 20, column: 78}}})}, data: i, loc: {start: {line: 20, column: 26}, end: {line: 20, column: 103}}}))+'</span>\n                </div>\n';
    }, 9: function(e, t, r, a, i) {
      return '        '+e.escapeExpression(__default(n(8)).call(null!=t?t:e.nullContext||{}, 'testResult.history.empty', {name: 't', hash: {}, data: i, loc: {start: {line: 25, column: 8}, end: {line: 25, column: 40}}}))+'\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i, o, s) {
      var l; var u=null!=t?t:e.nullContext||{}; var c=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="'+e.escapeExpression(__default(n(6)).call(u, 'pane', 'section', {name: 'b', hash: {}, data: i, loc: {start: {line: 1, column: 12}, end: {line: 1, column: 34}}}))+'">\n'+(null!=(l=c(r, 'if').call(u, null!=t?c(t, 'history'):t, {name: 'if', hash: {}, fn: e.program(1, i, 0, o, s), inverse: e.program(9, i, 0, o, s), data: i, loc: {start: {line: 2, column: 4}, end: {line: 26, column: 11}}}))?l:'')+'</div>';
    }, useData: !0, useDepths: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(i=o(n, 'each').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'retries'):t, {name: 'each', hash: {}, fn: e.program(2, a, 0), inverse: e.noop, data: a, loc: {start: {line: 3, column: 8}, end: {line: 9, column: 17}}}))?i:'';
    }, 2: function(e, t, r, a, i) {
      var o; var s=e.lambda; var l=e.escapeExpression; var u=null!=t?t:e.nullContext||{}; var c=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <a class="link" href="#/testresult/'+l(s(null!=t?c(t, 'uid'):t, t))+'">\n                <span class="label label_status_'+l(s(null!=t?c(t, 'status'):t, t))+'">'+l(s(null!=t?c(t, 'status'):t, t))+'</span>\n                <span>'+l(__default(n(8)).call(u, 'testResult.retries.time', {name: 't', hash: {date: __default(n(32)).call(u, null!=(o=null!=t?c(t, 'time'):t)?c(o, 'start'):o, {name: 'time', hash: {}, data: i, loc: {start: {line: 6, column: 80}, end: {line: 6, column: 97}}}), time: __default(n(38)).call(u, null!=(o=null!=t?c(t, 'time'):t)?c(o, 'start'):o, {name: 'date', hash: {}, data: i, loc: {start: {line: 6, column: 57}, end: {line: 6, column: 74}}})}, data: i, loc: {start: {line: 6, column: 22}, end: {line: 6, column: 99}}}))+'</span>\n                <pre class="preformated-text"><code>'+l(s(null!=t?c(t, 'statusDetails'):t, t))+'</code></pre>\n            </a>\n';
    }, 4: function(e, t, r, a, i) {
      return '        '+e.escapeExpression(__default(n(8)).call(null!=t?t:e.nullContext||{}, 'testResult.retries.empty', {name: 't', hash: {}, data: i, loc: {start: {line: 11, column: 8}, end: {line: 11, column: 40}}}))+'\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<div class="'+e.escapeExpression(__default(n(6)).call(s, 'pane', 'section', {name: 'b', hash: {}, data: i, loc: {start: {line: 1, column: 12}, end: {line: 1, column: 34}}}))+'">\n'+(null!=(o=l(r, 'if').call(s, null!=t?l(t, 'retries'):t, {name: 'if', hash: {}, fn: e.program(1, i, 0), inverse: e.program(4, i, 0), data: i, loc: {start: {line: 2, column: 4}, end: {line: 12, column: 11}}}))?o:'')+'</div>';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <h3 class="pane__section-title">'+s((o=n(8), o&&(o.__esModule?o.default:o)).call(null!=t?t:e.nullContext||{}, 'testResult.owner.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 36}, end: {line: 2, column: 65}}}))+'</h3>\n    <div>'+s(e.lambda(null!=t?l(t, 'owner'):t, t))+'</div>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(i=o(n, 'if').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'owner'):t, {name: 'if', hash: {}, fn: e.program(1, a, 0), inverse: e.noop, data: a, loc: {start: {line: 1, column: 0}, end: {line: 4, column: 7}}}))?i:'';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <span data-tooltip="'+l(__default(n(38)).call(s, null!=(o=null!=t?u(t, 'time'):t)?u(o, 'start'):o, {name: 'date', hash: {}, data: i, loc: {start: {line: 2, column: 24}, end: {line: 2, column: 43}}}))+' '+l(__default(n(32)).call(s, null!=(o=null!=t?u(t, 'time'):t)?u(o, 'start'):o, {name: 'time', hash: {}, data: i, loc: {start: {line: 2, column: 44}, end: {line: 2, column: 63}}}))+'&nbsp;&ndash;&nbsp;'+l(__default(n(32)).call(s, null!=(o=null!=t?u(t, 'time'):t)?u(o, 'stop'):o, {name: 'time', hash: {}, data: i, loc: {start: {line: 2, column: 82}, end: {line: 2, column: 100}}}))+'">\n        '+l(__default(n(8)).call(s, 'testResult.duration.name', {name: 't', hash: {}, data: i, loc: {start: {line: 3, column: 8}, end: {line: 3, column: 40}}}))+':\n        <span class="fa fa-clock-o"></span>\n        '+l(__default(n(23)).call(s, null!=(o=null!=t?u(t, 'time'):t)?u(o, 'duration'):o, 2, {name: 'duration', hash: {}, data: i, loc: {start: {line: 5, column: 8}, end: {line: 5, column: 36}}}))+'\n    </span>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(i=o(n, 'if').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'time'):t, {name: 'if', hash: {}, fn: e.program(1, a, 0), inverse: e.noop, data: a, loc: {start: {line: 1, column: 0}, end: {line: 7, column: 7}}}))?i:'';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<h3>'+e.escapeExpression(__default(n(8)).call(s, 'testResult.parameters.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 4}, end: {line: 2, column: 38}}}))+'</h3>\n'+(null!=(o=l(r, 'each').call(s, null!=t?l(t, 'parameters'):t, {name: 'each', hash: {}, fn: e.program(2, i, 0), inverse: e.noop, data: i, loc: {start: {line: 3, column: 4}, end: {line: 12, column: 13}}}))?o:'');
    }, 2: function(e, t, n, r, a) {
      var i; var o=null!=t?t:e.nullContext||{}; var s=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <div class="environment long-line line-ellipsis">\n            <span class="environment__key">'+(null!=(i=s(n, 'if').call(o, null!=t?s(t, 'name'):t, {name: 'if', hash: {}, fn: e.program(3, a, 0), inverse: e.program(5, a, 0), data: a, loc: {start: {line: 5, column: 43}, end: {line: 5, column: 90}}}))?i:'')+'</span>:\n'+(null!=(i=s(n, 'if').call(o, null!=t?s(t, 'value'):t, {name: 'if', hash: {}, fn: e.program(7, a, 0), inverse: e.program(9, a, 0), data: a, loc: {start: {line: 6, column: 12}, end: {line: 10, column: 19}}}))?i:'')+'        </div>\n';
    }, 3: function(e, t, n, r, a) {
      var i=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return e.escapeExpression(e.lambda(null!=t?i(t, 'name'):t, t));
    }, 5: function(e, t, n, r, a) {
      return '&lt;null&gt;';
    }, 7: function(e, t, r, a, i) {
      var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '                <span>'+e.escapeExpression(__default(n(84)).call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'value'):t, {name: 'linky', hash: {}, data: i, loc: {start: {line: 7, column: 22}, end: {line: 7, column: 37}}}))+'</span>\n';
    }, 9: function(e, t, n, r, a) {
      return '                null\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(i=o(n, 'if').call(null!=t?t:e.nullContext||{}, null!=(i=null!=t?o(t, 'parameters'):t)?o(i, 'length'):i, {name: 'if', hash: {}, fn: e.program(1, a, 0), inverse: e.noop, data: a, loc: {start: {line: 1, column: 0}, end: {line: 13, column: 7}}}))?i:'';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '    <h3 class="pane__section-title">'+e.escapeExpression(__default(n(8)).call(s, 'testResult.links.name', {name: 't', hash: {}, data: i, loc: {start: {line: 2, column: 36}, end: {line: 2, column: 65}}}))+'</h3>\n'+(null!=(o=l(r, 'each').call(s, null!=t?l(t, 'links'):t, {name: 'each', hash: {}, fn: e.program(2, i, 0), inverse: e.noop, data: i, loc: {start: {line: 3, column: 4}, end: {line: 13, column: 13}}}))?o:'');
    }, 2: function(e, t, r, a, i) {
      var o; var s=null!=t?t:e.nullContext||{}; var l=e.escapeExpression; var u=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <span class="testresult-link">\n'+(null!=(o=u(r, 'if').call(s, __default(n(28)).call(s, null!=t?u(t, 'type'):t, 'issue', {name: 'eq', hash: {}, data: i, loc: {start: {line: 5, column: 14}, end: {line: 5, column: 31}}}), {name: 'if', hash: {}, fn: e.program(3, i, 0), inverse: e.noop, data: i, loc: {start: {line: 5, column: 8}, end: {line: 7, column: 15}}}))?o:'')+(null!=(o=u(r, 'if').call(s, __default(n(28)).call(s, null!=t?u(t, 'type'):t, 'tms', {name: 'eq', hash: {}, data: i, loc: {start: {line: 8, column: 14}, end: {line: 8, column: 29}}}), {name: 'if', hash: {}, fn: e.program(5, i, 0), inverse: e.noop, data: i, loc: {start: {line: 8, column: 8}, end: {line: 10, column: 15}}}))?o:'')+'        <a class="link" href="'+l(e.lambda(null!=t?u(t, 'url'):t, t))+'" target="_blank">'+l(__default(n(226)).call(s, null!=t?u(t, 'name'):t, null!=t?u(t, 'url'):t, 'link', {name: 'default', hash: {}, data: i, loc: {start: {line: 11, column: 55}, end: {line: 11, column: 82}}}))+'</a>\n    </span>\n';
    }, 3: function(e, t, n, r, a) {
      return '            <span class="fa fa-bug"></span>\n';
    }, 5: function(e, t, n, r, a) {
      return '            <span class="fa fa-database"></span>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return null!=(i=o(n, 'if').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'links'):t, {name: 'if', hash: {}, fn: e.program(1, a, 0), inverse: e.noop, data: a, loc: {start: {line: 1, column: 0}, end: {line: 14, column: 7}}}))?i:'';
    }, useData: !0});
  },,,,,,, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    e.exports=function(e, t) {
      'use strict'; e='default'in e?e.default:e, t='default'in t?t.default:t; var n='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e) {
        return typeof e;
      }:function(e) {
        return e&&'function'==typeof Symbol&&e.constructor===Symbol?'symbol':typeof e;
      }; var r=t.Radio; var a=t.Radio={}; a.VERSION='2.0.0', a.noConflict=function() {
        return t.Radio=r, this;
      }, a.DEBUG=!1, a._debugText=function(e, t, n) {
        return e+(n?' on the '+n+' channel':'')+': "'+t+'"';
      }, a.debugLog=function(e, t, n) {
        a.DEBUG&&console&&console.warn&&console.warn(a._debugText(e, t, n));
      }; var i=/\s+/; function removeHandler(e, t, n, r) {
        var a=e[t]; if (!(n&&n!==a.callback&&n!==a.callback._callback||r&&r!==a.context)) return delete e[t], !0;
      }a._eventsApi=function(t, r, a, o) {
        if (!a) return !1; var s={}; if ('object'===(void 0===a?'undefined':n(a))) {
          for (var l in a) {
            var u=t[r].apply(t, [l, a[l]].concat(o)); i.test(l)?e.extend(s, u):s[l]=u;
          } return s;
        } if (i.test(a)) {
          for (var c=a.split(i), h=0, f=c.length; h<f; h++)s[c[h]]=t[r].apply(t, [c[h]].concat(o)); return s;
        } return !1;
      }, a._callHandler=function(e, t, n) {
        var r=n[0]; var a=n[1]; var i=n[2]; switch (n.length) {
          case 0: return e.call(t); case 1: return e.call(t, r); case 2: return e.call(t, r, a); case 3: return e.call(t, r, a, i); default: return e.apply(t, n);
        }
      }; var o; var s; var l={}; function _partial(t) {
        return l[t]||(l[t]=e.bind(a.log, a, t));
      } function makeCallback(t) {
        return e.isFunction(t)?t:function() {
          return t;
        };
      }e.extend(a, {log: function(t, n) {
        if ('undefined'!=typeof console) {
          var r=e.toArray(arguments).slice(2); console.log('['+t+'] "'+n+'"', r);
        }
      }, tuneIn: function(e) {
        var t=a.channel(e); return t._tunedIn=!0, t.on('all', _partial(e)), this;
      }, tuneOut: function(e) {
        var t=a.channel(e); return t._tunedIn=!1, t.off('all', _partial(e)), delete l[e], this;
      }}), a.Requests={request: function(t) {
        var n=e.toArray(arguments).slice(1); var r=a._eventsApi(this, 'request', t, n); if (r) return r; var i=this.channelName; var o=this._requests; if (i&&this._tunedIn&&a.log.apply(this, [i, t].concat(n)), o&&(o[t]||o.default)) {
          var s=o[t]||o.default; return n=o[t]?n:arguments, a._callHandler(s.callback, s.context, n);
        }a.debugLog('An unhandled request was fired', t, i);
      }, reply: function(e, t, n) {
        return a._eventsApi(this, 'reply', e, [t, n])||(this._requests||(this._requests={}), this._requests[e]&&a.debugLog('A request was overwritten', e, this.channelName), this._requests[e]={callback: makeCallback(t), context: n||this}), this;
      }, replyOnce: function(t, n, r) {
        if (a._eventsApi(this, 'replyOnce', t, [n, r])) return this; var i=this; var o=e.once((function() {
          return i.stopReplying(t), makeCallback(n).apply(this, arguments);
        })); return this.reply(t, o, r);
      }, stopReplying: function(t, n, r) {
        return a._eventsApi(this, 'stopReplying', t)||(t||n||r?function(t, n, r, a) {
          t||(t={}); for (var i=n?[n]:e.keys(t), o=!1, s=0, l=i.length; s<l; s++)t[n=i[s]]&&removeHandler(t, n, r, a)&&(o=!0); return o;
        }(this._requests, t, n, r)||a.debugLog('Attempted to remove the unregistered request', t, this.channelName):delete this._requests), this;
      }}, a._channels={}, a.channel=function(e) {
        if (!e) throw new Error('You must provide a name for the channel.'); return a._channels[e]?a._channels[e]:a._channels[e]=new a.Channel(e);
      }, a.Channel=function(e) {
        this.channelName=e;
      }, e.extend(a.Channel.prototype, t.Events, a.Requests, {reset: function() {
        return this.off(), this.stopListening(), this.stopReplying(), this;
      }}); var u=[t.Events, a.Requests]; return e.each(u, (function(t) {
        e.each(t, (function(t, n) {
          a[n]=function(t) {
            return s=e.toArray(arguments).slice(1), (o=this.channel(t))[n].apply(o, s);
          };
        }));
      })), a.reset=function(t) {
        var n=t?[this._channels[t]]:this._channels; e.each(n, (function(e) {
          e.reset();
        }));
      }, a;
    }(n(14), n(13));
  }, function(e, t) {
    function _setPrototypeOf(t, n) {
      return e.exports=_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e, t) {
        return e.__proto__=t, e;
      }, e.exports.__esModule=!0, e.exports.default=e.exports, _setPrototypeOf(t, n);
    }e.exports=_setPrototypeOf, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t) {
    function _typeof(t) {
      return e.exports=_typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e) {
        return typeof e;
      }:function(e) {
        return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e;
      }, e.exports.__esModule=!0, e.exports.default=e.exports, _typeof(t);
    }e.exports=_typeof, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t, n) {}, function(e, t, n) {
    var r={'./az': 60, './az.json': 60, './br': 61, './br.json': 61, './de': 62, './de.json': 62, './en': 63, './en.json': 63, './es': 64, './es.json': 64, './fr': 65, './fr.json': 65, './he': 66, './he.json': 66, './ja': 67, './ja.json': 67, './kr': 68, './kr.json': 68, './nl': 69, './nl.json': 69, './pl': 70, './pl.json': 70, './ru': 71, './ru.json': 71, './tr': 72, './tr.json': 72, './zh': 73, './zh.json': 73}; function webpackContext(e) {
      var t=webpackContextResolve(e); return n(t);
    } function webpackContextResolve(e) {
      if (!n.o(r, e)) {
        var t=new Error('Cannot find module \''+e+'\''); throw t.code='MODULE_NOT_FOUND', t;
      } return r[e];
    }webpackContext.keys=function() {
      return Object.keys(r);
    }, webpackContext.resolve=webpackContextResolve, e.exports=webpackContext, webpackContext.id=146;
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0; var r=n(30); t.default=function(e) {
      e.registerHelper('blockHelperMissing', (function(t, n) {
        var a=n.inverse; var i=n.fn; if (!0===t) return i(this); if (!1===t||null==t) return a(this); if (r.isArray(t)) return t.length>0?(n.ids&&(n.ids=[n.name]), e.helpers.each(t, n)):a(this); if (n.data&&n.ids) {
          var o=r.createFrame(n.data); o.contextPath=r.appendContextPath(n.data.contextPath, n.name), n={data: o};
        } return i(t, n);
      }));
    }, e.exports=t.default;
  }, function(e, t, n) {
    'use strict'; (function(r) {
      t.__esModule=!0; var a; var i=n(30); var o=n(36); var s=(a=o)&&a.__esModule?a:{default: a}; t.default=function(e) {
        e.registerHelper('each', (function(e, t) {
          if (!t) throw new s.default('Must pass iterator to #each'); var n; var a=t.fn; var o=t.inverse; var l=0; var u=''; var c=void 0; var h=void 0; function execIteration(t, n, r) {
            c&&(c.key=t, c.index=n, c.first=0===n, c.last=!!r, h&&(c.contextPath=h+t)), u+=a(e[t], {data: c, blockParams: i.blockParams([e[t], t], [h+t, null])});
          } if (t.data&&t.ids&&(h=i.appendContextPath(t.data.contextPath, t.ids[0])+'.'), i.isFunction(e)&&(e=e.call(this)), t.data&&(c=i.createFrame(t.data)), e&&'object'==typeof e) {
            if (i.isArray(e)) for (var f=e.length; l<f; l++)l in e&&execIteration(l, l, l===e.length-1); else if (r.Symbol&&e[r.Symbol.iterator]) {
              for (var d=[], p=e[r.Symbol.iterator](), m=p.next(); !m.done; m=p.next())d.push(m.value); for (f=(e=d).length; l<f; l++)execIteration(l, l, l===e.length-1);
            } else {
              n=void 0, Object.keys(e).forEach((function(e) {
                void 0!==n&&execIteration(n, l-1), n=e, l++;
              })), void 0!==n&&execIteration(n, l-1, !0);
            }
          } return 0===l&&(u=o(this)), u;
        }));
      }, e.exports=t.default;
    }).call(this, n(41));
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0; var r; var a=n(36); var i=(r=a)&&r.__esModule?r:{default: r}; t.default=function(e) {
      e.registerHelper('helperMissing', (function() {
        if (1!==arguments.length) throw new i.default('Missing helper: "'+arguments[arguments.length-1].name+'"');
      }));
    }, e.exports=t.default;
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0; var r; var a=n(30); var i=n(36); var o=(r=i)&&r.__esModule?r:{default: r}; t.default=function(e) {
      e.registerHelper('if', (function(e, t) {
        if (2!=arguments.length) throw new o.default('#if requires exactly one argument'); return a.isFunction(e)&&(e=e.call(this)), !t.hash.includeZero&&!e||a.isEmpty(e)?t.inverse(this):t.fn(this);
      })), e.registerHelper('unless', (function(t, n) {
        if (2!=arguments.length) throw new o.default('#unless requires exactly one argument'); return e.helpers.if.call(this, t, {fn: n.inverse, inverse: n.fn, hash: n.hash});
      }));
    }, e.exports=t.default;
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0, t.default=function(e) {
      e.registerHelper('log', (function() {
        for (var t=[void 0], n=arguments[arguments.length-1], r=0; r<arguments.length-1; r++)t.push(arguments[r]); var a=1; null!=n.hash.level?a=n.hash.level:n.data&&null!=n.data.level&&(a=n.data.level), t[0]=a, e.log.apply(e, t);
      }));
    }, e.exports=t.default;
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0, t.default=function(e) {
      e.registerHelper('lookup', (function(e, t, n) {
        return e?n.lookupProperty(e, t):e;
      }));
    }, e.exports=t.default;
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0; var r; var a=n(30); var i=n(36); var o=(r=i)&&r.__esModule?r:{default: r}; t.default=function(e) {
      e.registerHelper('with', (function(e, t) {
        if (2!=arguments.length) throw new o.default('#with requires exactly one argument'); a.isFunction(e)&&(e=e.call(this)); var n=t.fn; if (a.isEmpty(e)) return t.inverse(this); var r=t.data; return t.data&&t.ids&&((r=a.createFrame(t.data)).contextPath=a.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {data: r, blockParams: a.blockParams([e], [r&&r.contextPath])});
      }));
    }, e.exports=t.default;
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0, t.registerDefaultDecorators=function(e) {
      i.default(e);
    }; var r; var a=n(155); var i=(r=a)&&r.__esModule?r:{default: r};
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0; var r=n(30); t.default=function(e) {
      e.registerDecorator('inline', (function(e, t, n, a) {
        var i=e; return t.partials||(t.partials={}, i=function(a, i) {
          var o=n.partials; n.partials=r.extend({}, o, t.partials); var s=e(a, i); return n.partials=o, s;
        }), t.partials[a.args[0]]=a.fn, i;
      }));
    }, e.exports=t.default;
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0, t.createNewLookupObject=function() {
      for (var e=arguments.length, t=Array(e), n=0; n<e; n++)t[n]=arguments[n]; return r.extend.apply(void 0, [Object.create(null)].concat(t));
    }; var r=n(30);
  }, function(e, t, n) {
    'use strict'; function SafeString(e) {
      this.string=e;
    }t.__esModule=!0, SafeString.prototype.toString=SafeString.prototype.toHTML=function() {
      return ''+this.string;
    }, t.default=SafeString, e.exports=t.default;
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0, t.checkRevision=function(e) {
      var t=e&&e[0]||1; var n=s.COMPILER_REVISION; if (t>=s.LAST_COMPATIBLE_COMPILER_REVISION&&t<=s.COMPILER_REVISION) return; if (t<s.LAST_COMPATIBLE_COMPILER_REVISION) {
        var r=s.REVISION_CHANGES[n]; var a=s.REVISION_CHANGES[t]; throw new o.default('Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ('+r+') or downgrade your runtime to an older version ('+a+').');
      } throw new o.default('Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ('+e[1]+').');
    }, t.template=function(e, t) {
      if (!t) throw new o.default('No environment passed to template'); if (!e||!e.main) throw new o.default('Unknown template object: '+typeof e); e.main.decorator=e.main_d, t.VM.checkRevision(e.compiler); var n=e.compiler&&7===e.compiler[0]; var r={strict: function(e, t, n) {
        if (!e||!(t in e)) throw new o.default('"'+t+'" not defined in '+e, {loc: n}); return r.lookupProperty(e, t);
      }, lookupProperty: function(e, t) {
        var n=e[t]; return null==n||Object.prototype.hasOwnProperty.call(e, t)||c.resultIsAllowed(n, r.protoAccessControl, t)?n:void 0;
      }, lookup: function(e, t) {
        for (var n=e.length, a=0; a<n; a++) {
          if (null!=(e[a]&&r.lookupProperty(e[a], t))) return e[a][t];
        }
      }, lambda: function(e, t) {
        return 'function'==typeof e?e.call(t):e;
      }, escapeExpression: a.escapeExpression, invokePartial: function(n, r, i) {
        i.hash&&(r=a.extend({}, r, i.hash), i.ids&&(i.ids[0]=!0)), n=t.VM.resolvePartial.call(this, n, r, i); var s=a.extend({}, i, {hooks: this.hooks, protoAccessControl: this.protoAccessControl}); var l=t.VM.invokePartial.call(this, n, r, s); if (null==l&&t.compile&&(i.partials[i.name]=t.compile(n, e.compilerOptions, t), l=i.partials[i.name](r, s)), null!=l) {
          if (i.indent) {
            for (var u=l.split('\n'), c=0, h=u.length; c<h&&(u[c]||c+1!==h); c++)u[c]=i.indent+u[c]; l=u.join('\n');
          } return l;
        } throw new o.default('The partial '+i.name+' could not be compiled when running in runtime-only mode');
      }, fn: function(t) {
        var n=e[t]; return n.decorator=e[t+'_d'], n;
      }, programs: [], program: function(e, t, n, r, a) {
        var i=this.programs[e]; var o=this.fn(e); return t||a||r||n?i=wrapProgram(this, e, o, t, n, r, a):i||(i=this.programs[e]=wrapProgram(this, e, o)), i;
      }, data: function(e, t) {
        for (;e&&t--;)e=e._parent; return e;
      }, mergeIfNeeded: function(e, t) {
        var n=e||t; return e&&t&&e!==t&&(n=a.extend({}, t, e)), n;
      }, nullContext: Object.seal({}), noop: t.VM.noop, compilerInfo: e.compiler}; function ret(t) {
        var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1]; var a=n.data; ret._setup(n), !n.partial&&e.useData&&(a=initData(t, a)); var i=void 0; var o=e.useBlockParams?[]:void 0; function main(t) {
          return ''+e.main(r, t, r.helpers, r.partials, a, o, i);
        } return e.useDepths&&(i=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]), (main=executeDecorators(e.main, main, r, n.depths||[], a, o))(t, n);
      } return ret.isTop=!0, ret._setup=function(i) {
        if (i.partial)r.protoAccessControl=i.protoAccessControl, r.helpers=i.helpers, r.partials=i.partials, r.decorators=i.decorators, r.hooks=i.hooks; else {
          var o=a.extend({}, t.helpers, i.helpers); !function(e, t) {
            Object.keys(e).forEach((function(n) {
              var r=e[n]; e[n]=function(e, t) {
                var n=t.lookupProperty; return u.wrapHelper(e, (function(e) {
                  return a.extend({lookupProperty: n}, e);
                }));
              }(r, t);
            }));
          }(o, r), r.helpers=o, e.usePartial&&(r.partials=r.mergeIfNeeded(i.partials, t.partials)), (e.usePartial||e.useDecorators)&&(r.decorators=a.extend({}, t.decorators, i.decorators)), r.hooks={}, r.protoAccessControl=c.createProtoAccessControl(i); var s=i.allowCallsToHelperMissing||n; l.moveHelperToHooks(r, 'helperMissing', s), l.moveHelperToHooks(r, 'blockHelperMissing', s);
        }
      }, ret._child=function(t, n, a, i) {
        if (e.useBlockParams&&!a) throw new o.default('must pass block params'); if (e.useDepths&&!i) throw new o.default('must pass parent depths'); return wrapProgram(r, t, e[t], n, 0, a, i);
      }, ret;
    }, t.wrapProgram=wrapProgram, t.resolvePartial=function(e, t, n) {
e?e.call||n.name||(n.name=e, e=n.partials[e]):e='@partial-block'===n.name?n.data['partial-block']:n.partials[n.name]; return e;
    }, t.invokePartial=function(e, t, n) {
      var r=n.data&&n.data['partial-block']; n.partial=!0, n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath); var i=void 0; n.fn&&n.fn!==noop&&function() {
        n.data=s.createFrame(n.data); var e=n.fn; i=n.data['partial-block']=function(t) {
          var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1]; return n.data=s.createFrame(n.data), n.data['partial-block']=r, e(t, n);
        }, e.partials&&(n.partials=a.extend({}, n.partials, e.partials));
      }(); void 0===e&&i&&(e=i); if (void 0===e) throw new o.default('The partial '+n.name+' could not be found'); if (e instanceof Function) return e(t, n);
    }, t.noop=noop; var r; var a=function(e) {
      if (e&&e.__esModule) return e; var t={}; if (null!=e) for (var n in e)Object.prototype.hasOwnProperty.call(e, n)&&(t[n]=e[n]); return t.default=e, t;
    }(n(30)); var i=n(36); var o=(r=i)&&r.__esModule?r:{default: r}; var s=n(74); var l=n(75); var u=n(159); var c=n(77); function wrapProgram(e, t, n, r, a, i, o) {
      function prog(t) {
        var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1]; var s=o; return !o||t==o[0]||t===e.nullContext&&null===o[0]||(s=[t].concat(o)), n(e, t, e.helpers, e.partials, a.data||r, i&&[a.blockParams].concat(i), s);
      } return (prog=executeDecorators(n, prog, e, o, r, i)).program=t, prog.depth=o?o.length:0, prog.blockParams=a||0, prog;
    } function noop() {
      return '';
    } function initData(e, t) {
      return t&&'root'in t||((t=t?s.createFrame(t):{}).root=e), t;
    } function executeDecorators(e, t, n, r, i, o) {
      if (e.decorator) {
        var s={}; t=e.decorator(t, s, n, r&&r[0], i, o, r), a.extend(t, s);
      } return t;
    }
  }, function(e, t, n) {
    'use strict'; t.__esModule=!0, t.wrapHelper=function(e, t) {
      if ('function'!=typeof e) return e; return function() {
        var n=arguments[arguments.length-1]; return arguments[arguments.length-1]=t(n), e.apply(this, arguments);
      };
    };
  }, function(e, t, n) {
    'use strict'; (function(n) {
      t.__esModule=!0, t.default=function(e) {
        var t=void 0!==n?n:window; var r=t.Handlebars; e.noConflict=function() {
          return t.Handlebars===e&&(t.Handlebars=r), e;
        };
      }, e.exports=t.default;
    }).call(this, n(41));
  }, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    (function(e, r) {
      var a; /* ! https://mths.be/punycode v1.4.1 by @mathias */!function(i) {
        t&&t.nodeType, e&&e.nodeType; var o='object'==typeof r&&r; o.global!==o&&o.window!==o&&o.self; var s; var l=2147483647; var u=/^xn--/; var c=/[^\x20-\x7E]/; var h=/[\x2E\u3002\uFF0E\uFF61]/g; var f={'overflow': 'Overflow: input needs wider integers to process', 'not-basic': 'Illegal input >= 0x80 (not a basic code point)', 'invalid-input': 'Invalid input'}; var d=Math.floor; var p=String.fromCharCode; function error(e) {
          throw new RangeError(f[e]);
        } function map(e, t) {
          for (var n=e.length, r=[]; n--;)r[n]=t(e[n]); return r;
        } function mapDomain(e, t) {
          var n=e.split('@'); var r=''; return n.length>1&&(r=n[0]+'@', e=n[1]), r+map((e=e.replace(h, '.')).split('.'), t).join('.');
        } function ucs2decode(e) {
          for (var t, n, r=[], a=0, i=e.length; a<i;)(t=e.charCodeAt(a++))>=55296&&t<=56319&&a<i?56320==(64512&(n=e.charCodeAt(a++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t), a--):r.push(t); return r;
        } function ucs2encode(e) {
          return map(e, (function(e) {
            var t=''; return e>65535&&(t+=p((e-=65536)>>>10&1023|55296), e=56320|1023&e), t+=p(e);
          })).join('');
        } function digitToBasic(e, t) {
          return e+22+75*(e<26)-((0!=t)<<5);
        } function adapt(e, t, n) {
          var r=0; for (e=n?d(e/700):e>>1, e+=d(e/t); e>455; r+=36)e=d(e/35); return d(r+36*e/(e+38));
        } function decode(e) {
          var t; var n; var r; var a; var i; var o; var s; var u; var c; var h; var f; var p=[]; var m=e.length; var g=0; var v=128; var y=72; for ((n=e.lastIndexOf('-'))<0&&(n=0), r=0; r<n; ++r)e.charCodeAt(r)>=128&&error('not-basic'), p.push(e.charCodeAt(r)); for (a=n>0?n+1:0; a<m;) {
            for (i=g, o=1, s=36; a>=m&&error('invalid-input'), ((u=(f=e.charCodeAt(a++))-48<10?f-22:f-65<26?f-65:f-97<26?f-97:36)>=36||u>d((l-g)/o))&&error('overflow'), g+=u*o, !(u<(c=s<=y?1:s>=y+26?26:s-y)); s+=36)o>d(l/(h=36-c))&&error('overflow'), o*=h; y=adapt(g-i, t=p.length+1, 0==i), d(g/t)>l-v&&error('overflow'), v+=d(g/t), g%=t, p.splice(g++, 0, v);
          } return ucs2encode(p);
        } function encode(e) {
          var t; var n; var r; var a; var i; var o; var s; var u; var c; var h; var f; var m; var g; var v; var y; var b=[]; for (m=(e=ucs2decode(e)).length, t=128, n=0, i=72, o=0; o<m; ++o)(f=e[o])<128&&b.push(p(f)); for (r=a=b.length, a&&b.push('-'); r<m;) {
            for (s=l, o=0; o<m; ++o)(f=e[o])>=t&&f<s&&(s=f); for (s-t>d((l-n)/(g=r+1))&&error('overflow'), n+=(s-t)*g, t=s, o=0; o<m; ++o) {
              if ((f=e[o])<t&&++n>l&&error('overflow'), f==t) {
                for (u=n, c=36; !(u<(h=c<=i?1:c>=i+26?26:c-i)); c+=36)y=u-h, v=36-h, b.push(p(digitToBasic(h+y%v, 0))), u=d(y/v); b.push(p(digitToBasic(u, 0))), i=adapt(n, g, r==a), n=0, ++r;
              }
            }++n, ++t;
          } return b.join('');
        }s={version: '1.4.1', ucs2: {decode: ucs2decode, encode: ucs2encode}, decode: decode, encode: encode, toASCII: function(e) {
          return mapDomain(e, (function(e) {
            return c.test(e)?'xn--'+encode(e):e;
          }));
        }, toUnicode: function(e) {
          return mapDomain(e, (function(e) {
            return u.test(e)?decode(e.slice(4).toLowerCase()):e;
          }));
        }}, void 0===(a=function() {
          return s;
        }.call(t, n, t, e))||(e.exports=a);
      }();
    }).call(this, n(165)(e), n(41));
  }, function(e, t) {
    e.exports=function(e) {
      return e.webpackPolyfill||(e.deprecate=function() {}, e.paths=[], e.children||(e.children=[]), Object.defineProperty(e, 'loaded', {enumerable: !0, get: function() {
        return e.l;
      }}), Object.defineProperty(e, 'id', {enumerable: !0, get: function() {
        return e.i;
      }}), e.webpackPolyfill=1), e;
    };
  }, function(e, t, n) {
    'use strict'; e.exports={isString: function(e) {
      return 'string'==typeof e;
    }, isObject: function(e) {
      return 'object'==typeof e&&null!==e;
    }, isNull: function(e) {
      return null===e;
    }, isNullOrUndefined: function(e) {
      return null==e;
    }};
  }, function(e, t, n) {
    'use strict'; t.decode=t.parse=n(168), t.encode=t.stringify=n(169);
  }, function(e, t, n) {
    'use strict'; function hasOwnProperty(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }e.exports=function(e, t, n, a) {
      t=t||'&', n=n||'='; var i={}; if ('string'!=typeof e||0===e.length) return i; var o=/\+/g; e=e.split(t); var s=1e3; a&&'number'==typeof a.maxKeys&&(s=a.maxKeys); var l=e.length; s>0&&l>s&&(l=s); for (var u=0; u<l; ++u) {
        var c; var h; var f; var d; var p=e[u].replace(o, '%20'); var m=p.indexOf(n); m>=0?(c=p.substr(0, m), h=p.substr(m+1)):(c=p, h=''), f=decodeURIComponent(c), d=decodeURIComponent(h), hasOwnProperty(i, f)?r(i[f])?i[f].push(d):i[f]=[i[f], d]:i[f]=d;
      } return i;
    }; var r=Array.isArray||function(e) {
      return '[object Array]'===Object.prototype.toString.call(e);
    };
  }, function(e, t, n) {
    'use strict'; var stringifyPrimitive=function(e) {
      switch (typeof e) {
        case 'string': return e; case 'boolean': return e?'true':'false'; case 'number': return isFinite(e)?e:''; default: return '';
      }
    }; e.exports=function(e, t, n, i) {
      return t=t||'&', n=n||'=', null===e&&(e=void 0), 'object'==typeof e?map(a(e), (function(a) {
        var i=encodeURIComponent(stringifyPrimitive(a))+n; return r(e[a])?map(e[a], (function(e) {
          return i+encodeURIComponent(stringifyPrimitive(e));
        })).join(t):i+encodeURIComponent(stringifyPrimitive(e[a]));
      })).join(t):i?encodeURIComponent(stringifyPrimitive(i))+n+encodeURIComponent(stringifyPrimitive(e)):'';
    }; var r=Array.isArray||function(e) {
      return '[object Array]'===Object.prototype.toString.call(e);
    }; function map(e, t) {
      if (e.map) return e.map(t); for (var n=[], r=0; r<e.length; r++)n.push(t(e[r], r)); return n;
    } var a=Object.keys||function(e) {
      var t=[]; for (var n in e)Object.prototype.hasOwnProperty.call(e, n)&&t.push(n); return t;
    };
  }, function(e, t, n) {
    var r=n(0); e.exports=function(e, t) {
      for (;!Object.prototype.hasOwnProperty.call(e, t)&&null!==(e=r(e)););return e;
    }, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t) {
    e.exports=function(e) {
      return null==e?'':''+e;
    };
  }, function(e, t) {
    e.exports=function(e, t) {
      if (t<1) return ''; for (var n=''; t>0;)1&t&&(n+=e), t>>=1, e+=e; return n;
    };
  }, function(e, t, n) {
    'use strict'; n.r(t); var r=n(18); var a=/((?:(https?:\/\/|ftp:\/\/)|(?:(?:[0-9]{1,3}\.){3}[0-9]{1,3}|www\.?))\S+?)(\s|"|'|\)|]|$)/gm; t.default=function(e) {
      var t; return void 0!==e&&e.match(a)?new r.SafeString((t=e, t.replace(/[\u00A0-\u9999<>&]/gim, (function(e) {
        return '&#'.concat(e.charCodeAt(0), ';');
      }))).replace(a, (function(e, t, n, r) {
        return '&nbsp;<a class="link" target="_blank" href="'.concat(n?t:'https://'.concat(t), '">').concat(t, '</a>').concat(r, ' ');
      }))):e;
    };
  }, function(e, t, n) {
    'use strict'; n.r(t); var r=n(48); t.default=function(e) {
      return Object(r.a)(e).icon;
    };
  }, function(e, t, n) {
    'use strict'; n.r(t); var r=n(98); var a=n.n(r); t.default=function(e) {
      return a()(e, {base: 2, round: 1});
    };
  }, function(e, t, n) {
    var r=n(11); e.exports=(r.default||r).template({compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<span class="fa fa-files-o fullname__copy" data-copy="'+e.escapeExpression('function'==typeof(i=null!=(i=o(n, 'value')||(null!=t?o(t, 'value'):t))?i:e.hooks.helperMissing)?i.call(null!=t?t:e.nullContext||{}, {name: 'value', hash: {}, data: a, loc: {start: {line: 1, column: 54}, end: {line: 1, column: 63}}}):i)+'"></span>';
    }, useData: !0});
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '        <li class="'+s(__default(n(6)).call(o, 'tab', {name: 'b', hash: {active: null!=t?l(t, 'active'):t}, data: i, loc: {start: {line: 3, column: 19}, end: {line: 3, column: 44}}}))+'"><a class="link link__no-decoration" href="'+s(e.lambda(null!=t?l(t, 'href'):t, t))+'">'+s(__default(n(8)).call(o, null!=t?l(t, 'name'):t, {name: 't', hash: {}, data: i, loc: {start: {line: 3, column: 98}, end: {line: 3, column: 108}}}))+'</a></li>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<ul class="tabs">\n'+(null!=(i=o(n, 'each').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'links'):t, {name: 'each', hash: {}, fn: e.program(1, a, 0), inverse: e.noop, data: a, loc: {start: {line: 2, column: 4}, end: {line: 4, column: 13}}}))?i:'')+'</ul>';
    }, useData: !0});
  }, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    'use strict'; n.r(t), n.d(t, 'default', (function() {
      return statusBar;
    })); var r=n(18); var a=n(20); function statusBar(e) {
      var t=a.a.map((function(t) {
        var n=void 0===e[t]?0:e[t]; return 0===n?'':'<div class="bar__fill bar__fill_status_'.concat(t, '" style="flex-grow: ').concat(n, '">').concat(n, '</div>');
      })).join(''); return new r.SafeString('<div class="bar">'.concat(t, '</div>'));
    }
  }, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    'use strict'; n.r(t), t.default=function(e, t) {
      return !(!e&&!t);
    };
  }, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    'use strict'; n.r(t); var r=n(18); var a=n(20); t.default=function(e) {
      var t=a.a.map((function(t) {
        var n=e&&void 0!==e[t]?e[t]:0; return 0===n?'':'<span class="label label_status_'.concat(t, '">').concat(n, '</span> ');
      })).join(''); return new r.SafeString(''.concat(t));
    };
  }, function(e, t, n) {
    'use strict'; function isDef(e) {
      return e||'number'==typeof e;
    }n.r(t), n.d(t, 'default', (function() {
      return isDef;
    }));
  }, function(e, t, n) {
    var r=n(11); function __default(e) {
      return e&&(e.__esModule?e.default:e);
    }e.exports=(r.default||r).template({1: function(e, t, n, r, a) {
      var i; var o=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <div class="node__parameters long-line line-ellipsis">\n                <span>&nbsp</span>\n'+(null!=(i=o(n, 'each').call(null!=t?t:e.nullContext||{}, null!=t?o(t, 'parameters'):t, {name: 'each', hash: {}, fn: e.program(2, a, 0), inverse: e.noop, data: a, loc: {start: {line: 13, column: 16}, end: {line: 20, column: 25}}}))?i:'')+'            </div>\n';
    }, 2: function(e, t, n, r, a) {
      var i; return (null!=(i=(e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      })(n, 'if').call(null!=t?t:e.nullContext||{}, t, {name: 'if', hash: {}, fn: e.program(3, a, 0), inverse: e.program(5, a, 0), data: a, loc: {start: {line: 14, column: 20}, end: {line: 18, column: 29}}}))?i:'')+'<span class="node__parameters_separator">,</span>\n';
    }, 3: function(e, t, n, r, a) {
      return '                        '+e.escapeExpression(e.lambda(t, t));
    }, 5: function(e, t, n, r, a) {
      return '                        null';
    }, 7: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <div class="'+s(__default(n(6)).call(o, 'node', 'mark', {name: 'b', hash: {shown: null!=t?l(t, 'flaky'):t}, data: i, loc: {start: {line: 25, column: 24}, end: {line: 25, column: 55}}}))+'">\n                '+s(__default(n(22)).call(o, 'flaky', {name: 'allure-icon', hash: {}, data: i, loc: {start: {line: 26, column: 16}, end: {line: 26, column: 39}}}))+'\n            </div>\n';
    }, 9: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <div class="'+s(__default(n(6)).call(o, 'node', 'mark', {name: 'b', hash: {shown: null!=t?l(t, 'newFailed'):t}, data: i, loc: {start: {line: 30, column: 24}, end: {line: 30, column: 59}}}))+'">\n                '+s(__default(n(22)).call(o, 'newFailed', {name: 'allure-icon', hash: {}, data: i, loc: {start: {line: 31, column: 16}, end: {line: 31, column: 43}}}))+'\n            </div>\n';
    }, 11: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <div class="'+s(__default(n(6)).call(o, 'node', 'mark', {name: 'b', hash: {shown: null!=t?l(t, 'newBroken'):t}, data: i, loc: {start: {line: 35, column: 24}, end: {line: 35, column: 59}}}))+'">\n                '+s(__default(n(22)).call(o, 'newBroken', {name: 'allure-icon', hash: {}, data: i, loc: {start: {line: 36, column: 16}, end: {line: 36, column: 43}}}))+'\n            </div>\n';
    }, 13: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <div class="'+s(__default(n(6)).call(o, 'node', 'mark', {name: 'b', hash: {shown: null!=t?l(t, 'newPassed'):t}, data: i, loc: {start: {line: 40, column: 24}, end: {line: 40, column: 59}}}))+'">\n                '+s(__default(n(22)).call(o, 'newPassed', {name: 'allure-icon', hash: {}, data: i, loc: {start: {line: 41, column: 16}, end: {line: 41, column: 43}}}))+'\n            </div>\n';
    }, 15: function(e, t, r, a, i) {
      var o=null!=t?t:e.nullContext||{}; var s=e.escapeExpression; var l=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '            <div class="'+s(__default(n(6)).call(o, 'node', 'mark', {name: 'b', hash: {shown: null!=t?l(t, 'retriesStatusChange'):t}, data: i, loc: {start: {line: 45, column: 24}, end: {line: 45, column: 69}}}))+'">\n                '+s(__default(n(22)).call(o, 'retriesStatusChange', {name: 'allure-icon', hash: {}, data: i, loc: {start: {line: 46, column: 16}, end: {line: 46, column: 53}}}))+'\n            </div>\n';
    }, compiler: [8, '>= 4.3.0'], main: function(e, t, r, a, i) {
      var o; var s=e.lambda; var l=e.escapeExpression; var u=null!=t?t:e.nullContext||{}; var c=e.lookupProperty||function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }; return '<a class="node node__leaf" href="#'+l(s(null!=t?c(t, 'baseUrl'):t, t))+'/'+l(s(null!=t?c(t, 'parentUid'):t, t))+'/'+l(s(null!=t?c(t, 'uid'):t, t))+'/'+l(s(null!=t?c(t, 'testResultTab'):t, t))+'">\n    <div class="node__title" data-uid="'+l(s(null!=t?c(t, 'uid'):t, t))+'" data-parentUid="'+l(s(null!=t?c(t, 'parentUid'):t, t))+'">\n        <div class="node__anchor">\n            '+l(__default(n(22)).call(u, null!=t?c(t, 'status'):t, {name: 'allure-icon', hash: {extraClasses: 'fa-lg'}, data: i, loc: {start: {line: 4, column: 12}, end: {line: 4, column: 55}}}))+'\n        </div>\n        <div class="node__order">#'+l(s(null!=t?c(t, 'order'):t, t))+'</div>\n        <div class="node__name">\n            '+l(s(null!=t?c(t, 'name'):t, t))+'\n        </div>\n'+(null!=(o=c(r, 'if').call(u, null!=t?c(t, 'parameters'):t, {name: 'if', hash: {}, fn: e.program(1, i, 0), inverse: e.noop, data: i, loc: {start: {line: 10, column: 8}, end: {line: 22, column: 15}}}))?o:'')+'        <div class="tree__strut">&nbsp</div>\n'+(null!=(o=c(r, 'if').call(u, null!=t?c(t, 'flaky'):t, {name: 'if', hash: {}, fn: e.program(7, i, 0), inverse: e.noop, data: i, loc: {start: {line: 24, column: 8}, end: {line: 28, column: 15}}}))?o:'')+(null!=(o=c(r, 'if').call(u, null!=t?c(t, 'newFailed'):t, {name: 'if', hash: {}, fn: e.program(9, i, 0), inverse: e.noop, data: i, loc: {start: {line: 29, column: 8}, end: {line: 33, column: 15}}}))?o:'')+(null!=(o=c(r, 'if').call(u, null!=t?c(t, 'newBroken'):t, {name: 'if', hash: {}, fn: e.program(11, i, 0), inverse: e.noop, data: i, loc: {start: {line: 34, column: 8}, end: {line: 38, column: 15}}}))?o:'')+(null!=(o=c(r, 'if').call(u, null!=t?c(t, 'newPassed'):t, {name: 'if', hash: {}, fn: e.program(13, i, 0), inverse: e.noop, data: i, loc: {start: {line: 39, column: 8}, end: {line: 43, column: 15}}}))?o:'')+(null!=(o=c(r, 'if').call(u, null!=t?c(t, 'retriesStatusChange'):t, {name: 'if', hash: {}, fn: e.program(15, i, 0), inverse: e.noop, data: i, loc: {start: {line: 44, column: 8}, end: {line: 48, column: 15}}}))?o:'')+'        <div class="node__stats">'+l(__default(n(23)).call(u, null!=(o=null!=t?c(t, 'time'):t)?c(o, 'duration'):o, {name: 'duration', hash: {}, data: i, loc: {start: {line: 50, column: 12}, end: {line: 50, column: 40}}}))+'</div>\n    </div>\n</a>\n';
    }, useData: !0});
  }, function(e, t) {
    e.exports=function(e) {
      if (Array.isArray(e)) return e;
    }, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t) {
    e.exports=function(e, t) {
      var n=null==e?null:'undefined'!=typeof Symbol&&e[Symbol.iterator]||e['@@iterator']; if (null!=n) {
        var r; var a; var i=[]; var o=!0; var s=!1; try {
          for (n=n.call(e); !(o=(r=n.next()).done)&&(i.push(r.value), !t||i.length!==t); o=!0);
        } catch (e) {
          s=!0, a=e;
        } finally {
          try {
            o||null==n.return||n.return();
          } finally {
            if (s) throw a;
          }
        } return i;
      }
    }, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t) {
    e.exports=function() {
      throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t, n) {}, function(e, t, n) {}, function(e, t) {
    allure.api.addTab('categories', {title: 'tab.categories.name', icon: 'fa fa-flag', route: 'categories(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)', onEnter: function(e, t, n) {
      return new allure.components.TreeLayout({testGroup: e, testResult: t, testResultTab: n, tabName: 'tab.categories.name', baseUrl: 'categories', url: 'data/categories.json', csvUrl: 'data/categories.csv'});
    }});
  }, function(e, t) {
    allure.api.addTab('suites', {title: 'tab.suites.name', icon: 'fa fa-briefcase', route: 'suites(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)', onEnter: function(e, t, n) {
      return new allure.components.TreeLayout({testGroup: e, testResult: t, testResultTab: n, tabName: 'tab.suites.name', baseUrl: 'suites', url: 'data/suites.json', csvUrl: 'data/suites.csv'});
    }});
  }, function(e, t, n) {}, function(e, t, n) {
    var r=n(83); e.exports=function(e) {
      if (Array.isArray(e)) return r(e);
    }, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t) {
    e.exports=function(e) {
      if ('undefined'!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e['@@iterator']) return Array.from(e);
    }, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t) {
    e.exports=function() {
      throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, e.exports.__esModule=!0, e.exports.default=e.exports;
  }, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    'use strict'; n.r(t), t.default=function() {
      for (var e=arguments.length, t=new Array(e), n=0; n<e; n++)t[n]=arguments[n]; t.pop(); for (var r=0, a=t; r<a.length; r++) {
        var i=a[r]; if (i) return i;
      }
    };
  }, function(e, t, n) {
    'use strict'; n.r(t); var r=n(15); var a=n.n(r); var i=n(43); var o=(n.p, n(185), n(186), n(187), n(188), n(189), n(190), n(2)); var s=n.n(o); var l=n(3); var u=n.n(l); var c=n(9); var h=n.n(c); var f=n(17); var d=n.n(f); var p=n(4); var m=n.n(p); var g=n(5); var v=n.n(g); var y=n(0); var b=n.n(y); var w=n(7); var x=n.n(w); var k=(n(191), function(e, t) {
      return e<t?-1:e>t?1:e>=t?0:NaN;
    }); var bisector=function(e) {
      var t; return 1===e.length&&(t=e, e=function(e, n) {
        return k(t(e), n);
      }), {left: function(t, n, r, a) {
        for (null==r&&(r=0), null==a&&(a=t.length); r<a;) {
          var i=r+a>>>1; e(t[i], n)<0?r=i+1:a=i;
        } return r;
      }, right: function(t, n, r, a) {
        for (null==r&&(r=0), null==a&&(a=t.length); r<a;) {
          var i=r+a>>>1; e(t[i], n)>0?a=i:r=i+1;
        } return r;
      }};
    }; var C=bisector(k); var S=C.right; var O=(C.left, S); var src_extent=function(e, t) {
      var n; var r; var a; var i=e.length; var o=-1; if (null==t) {
        for (;++o<i;) if (null!=(n=e[o])&&n>=n) for (r=a=n; ++o<i;)null!=(n=e[o])&&(r>n&&(r=n), a<n&&(a=n));
      } else for (;++o<i;) if (null!=(n=t(e[o], o, e))&&n>=n) for (r=a=n; ++o<i;)null!=(n=t(e[o], o, e))&&(r>n&&(r=n), a<n&&(a=n)); return [r, a];
    }; var T=Array.prototype; var E=T.slice; var R=(T.map, function(e) {
      return function() {
        return e;
      };
    }); var identity=function(e) {
      return e;
    }; var src_range=function(e, t, n) {
      e=+e, t=+t, n=(a=arguments.length)<2?(t=e, e=0, 1):a<3?1:+n; for (var r=-1, a=0|Math.max(0, Math.ceil((t-e)/n)), i=new Array(a); ++r<a;)i[r]=e+r*n; return i;
    }; var P=Math.sqrt(50); var M=Math.sqrt(10); var A=Math.sqrt(2); var ticks=function(e, t, n) {
      var r; var a; var i; var o; var s=-1; if (n=+n, (e=+e)===(t=+t)&&n>0) return [e]; if ((r=t<e)&&(a=e, e=t, t=a), 0===(o=tickIncrement(e, t, n))||!isFinite(o)) return []; if (o>0) for (e=Math.ceil(e/o), t=Math.floor(t/o), i=new Array(a=Math.ceil(t-e+1)); ++s<a;)i[s]=(e+s)*o; else for (e=Math.floor(e*o), t=Math.ceil(t*o), i=new Array(a=Math.ceil(e-t+1)); ++s<a;)i[s]=(e-s)/o; return r&&i.reverse(), i;
    }; function tickIncrement(e, t, n) {
      var r=(t-e)/Math.max(0, n); var a=Math.floor(Math.log(r)/Math.LN10); var i=r/Math.pow(10, a); return a>=0?(i>=P?10:i>=M?5:i>=A?2:1)*Math.pow(10, a):-Math.pow(10, -a)/(i>=P?10:i>=M?5:i>=A?2:1);
    } function tickStep(e, t, n) {
      var r=Math.abs(t-e)/Math.max(0, n); var a=Math.pow(10, Math.floor(Math.log(r)/Math.LN10)); var i=r/a; return i>=P?a*=10:i>=M?a*=5:i>=A&&(a*=2), t<e?-a:a;
    } var sturges=function(e) {
      return Math.ceil(Math.log(e.length)/Math.LN2)+1;
    }; var src_max=function(e, t) {
      var n; var r; var a=e.length; var i=-1; if (null==t) {
        for (;++i<a;) if (null!=(n=e[i])&&n>=n) for (r=n; ++i<a;)null!=(n=e[i])&&n>r&&(r=n);
      } else for (;++i<a;) if (null!=(n=t(e[i], i, e))&&n>=n) for (r=n; ++i<a;)null!=(n=t(e[i], i, e))&&n>r&&(r=n); return r;
    }; function Map() {} function map_map(e, t) {
      var n=new Map; if (e instanceof Map) {
        e.each((function(e, t) {
          n.set(t, e);
        }));
      } else if (Array.isArray(e)) {
        var r; var a=-1; var i=e.length; if (null==t) for (;++a<i;)n.set(a, e[a]); else for (;++a<i;)n.set(t(r=e[a], a, e), r);
      } else if (e) for (var o in e)n.set(o, e[o]); return n;
    }Map.prototype=map_map.prototype={constructor: Map, has: function(e) {
      return '$'+e in this;
    }, get: function(e) {
      return this['$'+e];
    }, set: function(e, t) {
      return this['$'+e]=t, this;
    }, remove: function(e) {
      var t='$'+e; return t in this&&delete this[t];
    }, clear: function() {
      for (var e in this)'$'===e[0]&&delete this[e];
    }, keys: function() {
      var e=[]; for (var t in this)'$'===t[0]&&e.push(t.slice(1)); return e;
    }, values: function() {
      var e=[]; for (var t in this)'$'===t[0]&&e.push(this[t]); return e;
    }, entries: function() {
      var e=[]; for (var t in this)'$'===t[0]&&e.push({key: t.slice(1), value: this[t]}); return e;
    }, size: function() {
      var e=0; for (var t in this)'$'===t[0]&&++e; return e;
    }, empty: function() {
      for (var e in this) if ('$'===e[0]) return !1; return !0;
    }, each: function(e) {
      for (var t in this)'$'===t[0]&&e(this[t], t.slice(1), this);
    }}; var j=map_map; function Set() {} var N=j.prototype; function set(e, t) {
      var n=new Set; if (e instanceof Set) {
        e.each((function(e) {
          n.add(e);
        }));
      } else if (e) {
        var r=-1; var a=e.length; if (null==t) for (;++r<a;)n.add(e[r]); else for (;++r<a;)n.add(t(e[r], r, e));
      } return n;
    }Set.prototype=set.prototype={constructor: Set, has: N.has, add: function(e) {
      return this['$'+(e+='')]=e, this;
    }, remove: N.remove, clear: N.clear, values: N.keys, size: N.size, empty: N.empty, each: N.each}; var D=Array.prototype; var V=D.map; var L=D.slice; var B={name: 'implicit'}; function ordinal(e) {
      var t=j(); var n=[]; var r=B; function scale(a) {
        var i=a+''; var o=t.get(i); if (!o) {
          if (r!==B) return r; t.set(i, o=n.push(a));
        } return e[(o-1)%e.length];
      } return e=null==e?[]:L.call(e), scale.domain=function(e) {
        if (!arguments.length) return n.slice(); n=[], t=j(); for (var r, a, i=-1, o=e.length; ++i<o;)t.has(a=(r=e[i])+'')||t.set(a, n.push(r)); return scale;
      }, scale.range=function(t) {
        return arguments.length?(e=L.call(t), scale):e.slice();
      }, scale.unknown=function(e) {
        return arguments.length?(r=e, scale):r;
      }, scale.copy=function() {
        return ordinal().domain(n).range(e).unknown(r);
      }, scale;
    } function band() {
      var e; var t; var n=ordinal().unknown(void 0); var r=n.domain; var a=n.range; var i=[0, 1]; var o=!1; var s=0; var l=0; var u=.5; function rescale() {
        var n=r().length; var c=i[1]<i[0]; var h=i[c-0]; var f=i[1-c]; e=(f-h)/Math.max(1, n-s+2*l), o&&(e=Math.floor(e)), h+=(f-h-e*(n-s))*u, t=e*(1-s), o&&(h=Math.round(h), t=Math.round(t)); var d=src_range(n).map((function(t) {
          return h+e*t;
        })); return a(c?d.reverse():d);
      } return delete n.unknown, n.domain=function(e) {
        return arguments.length?(r(e), rescale()):r();
      }, n.range=function(e) {
        return arguments.length?(i=[+e[0], +e[1]], rescale()):i.slice();
      }, n.rangeRound=function(e) {
        return i=[+e[0], +e[1]], o=!0, rescale();
      }, n.bandwidth=function() {
        return t;
      }, n.step=function() {
        return e;
      }, n.round=function(e) {
        return arguments.length?(o=!!e, rescale()):o;
      }, n.padding=function(e) {
        return arguments.length?(s=l=Math.max(0, Math.min(1, e)), rescale()):s;
      }, n.paddingInner=function(e) {
        return arguments.length?(s=Math.max(0, Math.min(1, e)), rescale()):s;
      }, n.paddingOuter=function(e) {
        return arguments.length?(l=Math.max(0, Math.min(1, e)), rescale()):l;
      }, n.align=function(e) {
        return arguments.length?(u=Math.max(0, Math.min(1, e)), rescale()):u;
      }, n.copy=function() {
        return band().domain(r()).range(i).round(o).paddingInner(s).paddingOuter(l).align(u);
      }, rescale();
    } function band_point() {
      return function pointish(e) {
        var t=e.copy; return e.padding=e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy=function() {
          return pointish(t());
        }, e;
      }(band().paddingInner(1));
    } var src_number=function(e, t) {
      return e=+e, t=+t, function(n) {
        return e*(1-n)+t*n;
      };
    }; var define=function(e, t, n) {
      e.prototype=t.prototype=n, n.constructor=e;
    }; function extend(e, t) {
      var n=Object.create(e.prototype); for (var r in t)n[r]=t[r]; return n;
    } function Color() {} var I='\\s*([+-]?\\d+)\\s*'; var z='\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*'; var F='\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*'; var U=/^#([0-9a-f]{3,8})$/; var H=new RegExp('^rgb\\('+[I, I, I]+'\\)$'); var q=new RegExp('^rgb\\('+[F, F, F]+'\\)$'); var W=new RegExp('^rgba\\('+[I, I, I, z]+'\\)$'); var $=new RegExp('^rgba\\('+[F, F, F, z]+'\\)$'); var G=new RegExp('^hsl\\('+[z, F, F]+'\\)$'); var Y=new RegExp('^hsla\\('+[z, F, F, z]+'\\)$'); var K={aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074}; function color_formatHex() {
      return this.rgb().formatHex();
    } function color_formatRgb() {
      return this.rgb().formatRgb();
    } function color_color(e) {
      var t; var n; return e=(e+'').trim().toLowerCase(), (t=U.exec(e))?(n=t[1].length, t=parseInt(t[1], 16), 6===n?rgbn(t):3===n?new Rgb(t>>8&15|t>>4&240, t>>4&15|240&t, (15&t)<<4|15&t, 1):8===n?rgba(t>>24&255, t>>16&255, t>>8&255, (255&t)/255):4===n?rgba(t>>12&15|t>>8&240, t>>8&15|t>>4&240, t>>4&15|240&t, ((15&t)<<4|15&t)/255):null):(t=H.exec(e))?new Rgb(t[1], t[2], t[3], 1):(t=q.exec(e))?new Rgb(255*t[1]/100, 255*t[2]/100, 255*t[3]/100, 1):(t=W.exec(e))?rgba(t[1], t[2], t[3], t[4]):(t=$.exec(e))?rgba(255*t[1]/100, 255*t[2]/100, 255*t[3]/100, t[4]):(t=G.exec(e))?hsla(t[1], t[2]/100, t[3]/100, 1):(t=Y.exec(e))?hsla(t[1], t[2]/100, t[3]/100, t[4]):K.hasOwnProperty(e)?rgbn(K[e]):'transparent'===e?new Rgb(NaN, NaN, NaN, 0):null;
    } function rgbn(e) {
      return new Rgb(e>>16&255, e>>8&255, 255&e, 1);
    } function rgba(e, t, n, r) {
      return r<=0&&(e=t=n=NaN), new Rgb(e, t, n, r);
    } function rgbConvert(e) {
      return e instanceof Color||(e=color_color(e)), e?new Rgb((e=e.rgb()).r, e.g, e.b, e.opacity):new Rgb;
    } function color_rgb(e, t, n, r) {
      return 1===arguments.length?rgbConvert(e):new Rgb(e, t, n, null==r?1:r);
    } function Rgb(e, t, n, r) {
      this.r=+e, this.g=+t, this.b=+n, this.opacity=+r;
    } function rgb_formatHex() {
      return '#'+hex(this.r)+hex(this.g)+hex(this.b);
    } function rgb_formatRgb() {
      var e=this.opacity; return (1===(e=isNaN(e)?1:Math.max(0, Math.min(1, e)))?'rgb(':'rgba(')+Math.max(0, Math.min(255, Math.round(this.r)||0))+', '+Math.max(0, Math.min(255, Math.round(this.g)||0))+', '+Math.max(0, Math.min(255, Math.round(this.b)||0))+(1===e?')':', '+e+')');
    } function hex(e) {
      return ((e=Math.max(0, Math.min(255, Math.round(e)||0)))<16?'0':'')+e.toString(16);
    } function hsla(e, t, n, r) {
      return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN), new Hsl(e, t, n, r);
    } function hslConvert(e) {
      if (e instanceof Hsl) return new Hsl(e.h, e.s, e.l, e.opacity); if (e instanceof Color||(e=color_color(e)), !e) return new Hsl; if (e instanceof Hsl) return e; var t=(e=e.rgb()).r/255; var n=e.g/255; var r=e.b/255; var a=Math.min(t, n, r); var i=Math.max(t, n, r); var o=NaN; var s=i-a; var l=(i+a)/2; return s?(o=t===i?(n-r)/s+6*(n<r):n===i?(r-t)/s+2:(t-n)/s+4, s/=l<.5?i+a:2-i-a, o*=60):s=l>0&&l<1?0:o, new Hsl(o, s, l, e.opacity);
    } function Hsl(e, t, n, r) {
      this.h=+e, this.s=+t, this.l=+n, this.opacity=+r;
    } function hsl2rgb(e, t, n) {
      return 255*(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t);
    } function basis(e, t, n, r, a) {
      var i=e*e; var o=i*e; return ((1-3*e+3*i-o)*t+(4-6*i+3*o)*n+(1+3*e+3*i-3*o)*r+o*a)/6;
    }define(Color, color_color, {copy: function(e) {
      return Object.assign(new this.constructor, this, e);
    }, displayable: function() {
      return this.rgb().displayable();
    }, hex: color_formatHex, formatHex: color_formatHex, formatHsl: function() {
      return hslConvert(this).formatHsl();
    }, formatRgb: color_formatRgb, toString: color_formatRgb}), define(Rgb, color_rgb, extend(Color, {brighter: function(e) {
      return e=null==e?1/.7:Math.pow(1/.7, e), new Rgb(this.r*e, this.g*e, this.b*e, this.opacity);
    }, darker: function(e) {
      return e=null==e?.7:Math.pow(.7, e), new Rgb(this.r*e, this.g*e, this.b*e, this.opacity);
    }, rgb: function() {
      return this;
    }, displayable: function() {
      return -.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1;
    }, hex: rgb_formatHex, formatHex: rgb_formatHex, formatRgb: rgb_formatRgb, toString: rgb_formatRgb})), define(Hsl, (function(e, t, n, r) {
      return 1===arguments.length?hslConvert(e):new Hsl(e, t, n, null==r?1:r);
    }), extend(Color, {brighter: function(e) {
      return e=null==e?1/.7:Math.pow(1/.7, e), new Hsl(this.h, this.s, this.l*e, this.opacity);
    }, darker: function(e) {
      return e=null==e?.7:Math.pow(.7, e), new Hsl(this.h, this.s, this.l*e, this.opacity);
    }, rgb: function() {
      var e=this.h%360+360*(this.h<0); var t=isNaN(e)||isNaN(this.s)?0:this.s; var n=this.l; var r=n+(n<.5?n:1-n)*t; var a=2*n-r; return new Rgb(hsl2rgb(e>=240?e-240:e+120, a, r), hsl2rgb(e, a, r), hsl2rgb(e<120?e+240:e-120, a, r), this.opacity);
    }, displayable: function() {
      return (0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1;
    }, formatHsl: function() {
      var e=this.opacity; return (1===(e=isNaN(e)?1:Math.max(0, Math.min(1, e)))?'hsl(':'hsla(')+(this.h||0)+', '+100*(this.s||0)+'%, '+100*(this.l||0)+'%'+(1===e?')':', '+e+')');
    }})); var src_constant=function(e) {
      return function() {
        return e;
      };
    }; function linear(e, t) {
      return function(n) {
        return e+n*t;
      };
    } function gamma(e) {
      return 1==(e=+e)?nogamma:function(t, n) {
        return n-t?function(e, t, n) {
          return e=Math.pow(e, n), t=Math.pow(t, n)-e, n=1/n, function(r) {
            return Math.pow(e+r*t, n);
          };
        }(t, n, e):src_constant(isNaN(t)?n:t);
      };
    } function nogamma(e, t) {
      var n=t-e; return n?linear(e, n):src_constant(isNaN(e)?t:e);
    } var X=function rgbGamma(e) {
      var t=gamma(e); function rgb(e, n) {
        var r=t((e=color_rgb(e)).r, (n=color_rgb(n)).r); var a=t(e.g, n.g); var i=t(e.b, n.b); var o=nogamma(e.opacity, n.opacity); return function(t) {
          return e.r=r(t), e.g=a(t), e.b=i(t), e.opacity=o(t), e+'';
        };
      } return rgb.gamma=rgbGamma, rgb;
    }(1); function rgbSpline(e) {
      return function(t) {
        var n; var r; var a=t.length; var i=new Array(a); var o=new Array(a); var s=new Array(a); for (n=0; n<a; ++n)r=color_rgb(t[n]), i[n]=r.r||0, o[n]=r.g||0, s[n]=r.b||0; return i=e(i), o=e(o), s=e(s), r.opacity=1, function(e) {
          return r.r=i(e), r.g=o(e), r.b=s(e), r+'';
        };
      };
    } var Z=rgbSpline((function(e) {
      var t=e.length-1; return function(n) {
        var r=n<=0?n=0:n>=1?(n=1, t-1):Math.floor(n*t); var a=e[r]; var i=e[r+1]; var o=r>0?e[r-1]:2*a-i; var s=r<t-1?e[r+2]:2*i-a; return basis((n-r/t)*t, o, a, i, s);
      };
    })); var J=(rgbSpline((function(e) {
      var t=e.length; return function(n) {
        var r=Math.floor(((n%=1)<0?++n:n)*t); var a=e[(r+t-1)%t]; var i=e[r%t]; var o=e[(r+1)%t]; var s=e[(r+2)%t]; return basis((n-r/t)*t, a, i, o, s);
      };
    })), function(e, t) {
      t||(t=[]); var n; var r=e?Math.min(t.length, e.length):0; var a=t.slice(); return function(i) {
        for (n=0; n<r; ++n)a[n]=e[n]*(1-i)+t[n]*i; return a;
      };
    }); function isNumberArray(e) {
      return ArrayBuffer.isView(e)&&!(e instanceof DataView);
    } function genericArray(e, t) {
      var n; var r=t?t.length:0; var a=e?Math.min(r, e.length):0; var i=new Array(a); var o=new Array(r); for (n=0; n<a; ++n)i[n]=src_value(e[n], t[n]); for (;n<r; ++n)o[n]=t[n]; return function(e) {
        for (n=0; n<a; ++n)o[n]=i[n](e); return o;
      };
    } var src_date=function(e, t) {
      var n=new Date; return e=+e, t=+t, function(r) {
        return n.setTime(e*(1-r)+t*r), n;
      };
    }; var object=function(e, t) {
      var n; var r={}; var a={}; for (n in null!==e&&'object'==typeof e||(e={}), null!==t&&'object'==typeof t||(t={}), t)n in e?r[n]=src_value(e[n], t[n]):a[n]=t[n]; return function(e) {
        for (n in r)a[n]=r[n](e); return a;
      };
    }; var Q=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g; var ee=new RegExp(Q.source, 'g'); var src_string=function(e, t) {
      var n; var r; var a; var i=Q.lastIndex=ee.lastIndex=0; var o=-1; var s=[]; var l=[]; for (e+='', t+=''; (n=Q.exec(e))&&(r=ee.exec(t));)(a=r.index)>i&&(a=t.slice(i, a), s[o]?s[o]+=a:s[++o]=a), (n=n[0])===(r=r[0])?s[o]?s[o]+=r:s[++o]=r:(s[++o]=null, l.push({i: o, x: src_number(n, r)})), i=ee.lastIndex; return i<t.length&&(a=t.slice(i), s[o]?s[o]+=a:s[++o]=a), s.length<2?l[0]?function(e) {
        return function(t) {
          return e(t)+'';
        };
      }(l[0].x):function(e) {
        return function() {
          return e;
        };
      }(t):(t=l.length, function(e) {
        for (var n, r=0; r<t; ++r)s[(n=l[r]).i]=n.x(e); return s.join('');
      });
    }; var src_value=function(e, t) {
      var n; var r=typeof t; return null==t||'boolean'===r?src_constant(t):('number'===r?src_number:'string'===r?(n=color_color(t))?(t=n, X):src_string:t instanceof color_color?X:t instanceof Date?src_date:isNumberArray(t)?J:Array.isArray(t)?genericArray:'function'!=typeof t.valueOf&&'function'!=typeof t.toString||isNaN(t)?object:src_number)(e, t);
    }; var src_round=function(e, t) {
      return e=+e, t=+t, function(n) {
        return Math.round(e*(1-n)+t*n);
      };
    }; var d3_scale_src_constant=function(e) {
      return function() {
        return e;
      };
    }; var d3_scale_src_number=function(e) {
      return +e;
    }; var te=[0, 1]; function deinterpolateLinear(e, t) {
      return (t-=e=+e)?function(n) {
        return (n-e)/t;
      }:d3_scale_src_constant(t);
    } function bimap(e, t, n, r) {
      var a=e[0]; var i=e[1]; var o=t[0]; var s=t[1]; return i<a?(a=n(i, a), o=r(s, o)):(a=n(a, i), o=r(o, s)), function(e) {
        return o(a(e));
      };
    } function polymap(e, t, n, r) {
      var a=Math.min(e.length, t.length)-1; var i=new Array(a); var o=new Array(a); var s=-1; for (e[a]<e[0]&&(e=e.slice().reverse(), t=t.slice().reverse()); ++s<a;)i[s]=n(e[s], e[s+1]), o[s]=r(t[s], t[s+1]); return function(t) {
        var n=O(e, t, 1, a)-1; return o[n](i[n](t));
      };
    } function copy(e, t) {
      return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp());
    } function continuous(e, t) {
      var n; var r; var a; var i=te; var o=te; var s=src_value; var l=!1; function rescale() {
        return n=Math.min(i.length, o.length)>2?polymap:bimap, r=a=null, scale;
      } function scale(t) {
        return (r||(r=n(i, o, l?function(e) {
          return function(t, n) {
            var r=e(t=+t, n=+n); return function(e) {
              return e<=t?0:e>=n?1:r(e);
            };
          };
        }(e):e, s)))(+t);
      } return scale.invert=function(e) {
        return (a||(a=n(o, i, deinterpolateLinear, l?function(e) {
          return function(t, n) {
            var r=e(t=+t, n=+n); return function(e) {
              return e<=0?t:e>=1?n:r(e);
            };
          };
        }(t):t)))(+e);
      }, scale.domain=function(e) {
        return arguments.length?(i=V.call(e, d3_scale_src_number), rescale()):i.slice();
      }, scale.range=function(e) {
        return arguments.length?(o=L.call(e), rescale()):o.slice();
      }, scale.rangeRound=function(e) {
        return o=L.call(e), s=src_round, rescale();
      }, scale.clamp=function(e) {
        return arguments.length?(l=!!e, rescale()):l;
      }, scale.interpolate=function(e) {
        return arguments.length?(s=e, rescale()):s;
      }, rescale();
    } var ne=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i; function formatSpecifier(e) {
      if (!(t=ne.exec(e))) throw new Error('invalid format: '+e); var t; return new FormatSpecifier({fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8]&&t[8].slice(1), trim: t[9], type: t[10]});
    } function FormatSpecifier(e) {
      this.fill=void 0===e.fill?' ':e.fill+'', this.align=void 0===e.align?'>':e.align+'', this.sign=void 0===e.sign?'-':e.sign+'', this.symbol=void 0===e.symbol?'':e.symbol+'', this.zero=!!e.zero, this.width=void 0===e.width?void 0:+e.width, this.comma=!!e.comma, this.precision=void 0===e.precision?void 0:+e.precision, this.trim=!!e.trim, this.type=void 0===e.type?'':e.type+'';
    }formatSpecifier.prototype=FormatSpecifier.prototype, FormatSpecifier.prototype.toString=function() {
      return this.fill+this.align+this.sign+this.symbol+(this.zero?'0':'')+(void 0===this.width?'':Math.max(1, 0|this.width))+(this.comma?',':'')+(void 0===this.precision?'':'.'+Math.max(0, 0|this.precision))+(this.trim?'~':'')+this.type;
    }; function formatDecimalParts(e, t) {
      if ((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf('e'))<0) return null; var n; var r=e.slice(0, n); return [r.length>1?r[0]+r.slice(2):r, +e.slice(n+1)];
    } var re; var ae; var ie; var oe; var src_exponent=function(e) {
      return (e=formatDecimalParts(Math.abs(e)))?e[1]:NaN;
    }; var formatRounded=function(e, t) {
      var n=formatDecimalParts(e, t); if (!n) return e+''; var r=n[0]; var a=n[1]; return a<0?'0.'+new Array(-a).join('0')+r:r.length>a+1?r.slice(0, a+1)+'.'+r.slice(a+1):r+new Array(a-r.length+2).join('0');
    }; var se={'%': function(e, t) {
      return (100*e).toFixed(t);
    }, 'b': function(e) {
      return Math.round(e).toString(2);
    }, 'c': function(e) {
      return e+'';
    }, 'd': function(e) {
      return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString('en').replace(/,/g, ''):e.toString(10);
    }, 'e': function(e, t) {
      return e.toExponential(t);
    }, 'f': function(e, t) {
      return e.toFixed(t);
    }, 'g': function(e, t) {
      return e.toPrecision(t);
    }, 'o': function(e) {
      return Math.round(e).toString(8);
    }, 'p': function(e, t) {
      return formatRounded(100*e, t);
    }, 'r': formatRounded, 's': function(e, t) {
      var n=formatDecimalParts(e, t); if (!n) return e+''; var r=n[0]; var a=n[1]; var i=a-(re=3*Math.max(-8, Math.min(8, Math.floor(a/3))))+1; var o=r.length; return i===o?r:i>o?r+new Array(i-o+1).join('0'):i>0?r.slice(0, i)+'.'+r.slice(i):'0.'+new Array(1-i).join('0')+formatDecimalParts(e, Math.max(0, t+i-1))[0];
    }, 'X': function(e) {
      return Math.round(e).toString(16).toUpperCase();
    }, 'x': function(e) {
      return Math.round(e).toString(16);
    }}; var src_identity=function(e) {
      return e;
    }; var le=Array.prototype.map; var ue=['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']; ae=function(e) {
      var t; var n; var r=void 0===e.grouping||void 0===e.thousands?src_identity:(t=le.call(e.grouping, Number), n=e.thousands+'', function(e, r) {
        for (var a=e.length, i=[], o=0, s=t[0], l=0; a>0&&s>0&&(l+s+1>r&&(s=Math.max(1, r-l)), i.push(e.substring(a-=s, a+s)), !((l+=s+1)>r));)s=t[o=(o+1)%t.length]; return i.reverse().join(n);
      }); var a=void 0===e.currency?'':e.currency[0]+''; var i=void 0===e.currency?'':e.currency[1]+''; var o=void 0===e.decimal?'.':e.decimal+''; var s=void 0===e.numerals?src_identity:function(e) {
        return function(t) {
          return t.replace(/[0-9]/g, (function(t) {
            return e[+t];
          }));
        };
      }(le.call(e.numerals, String)); var l=void 0===e.percent?'%':e.percent+''; var u=void 0===e.minus?'-':e.minus+''; var c=void 0===e.nan?'NaN':e.nan+''; function newFormat(e) {
        var t=(e=formatSpecifier(e)).fill; var n=e.align; var h=e.sign; var f=e.symbol; var d=e.zero; var p=e.width; var m=e.comma; var g=e.precision; var v=e.trim; var y=e.type; 'n'===y?(m=!0, y='g'):se[y]||(void 0===g&&(g=12), v=!0, y='g'), (d||'0'===t&&'='===n)&&(d=!0, t='0', n='='); var b='$'===f?a:'#'===f&&/[boxX]/.test(y)?'0'+y.toLowerCase():''; var w='$'===f?i:/[%p]/.test(y)?l:''; var x=se[y]; var k=/[defgprs%]/.test(y); function format(e) {
          var a; var i; var l; var f=b; var C=w; if ('c'===y)C=x(e)+C, e=''; else {
            var S=(e=+e)<0||1/e<0; if (e=isNaN(e)?c:x(Math.abs(e), g), v&&(e=function(e) {
              e:for (var t, n=e.length, r=1, a=-1; r<n; ++r) {
                switch (e[r]) {
                  case '.': a=t=r; break; case '0': 0===a&&(a=r), t=r; break; default: if (!+e[r]) break e; a>0&&(a=0);
                }
              } return a>0?e.slice(0, a)+e.slice(t+1):e;
            }(e)), S&&0==+e&&'+'!==h&&(S=!1), f=(S?'('===h?h:u:'-'===h||'('===h?'':h)+f, C=('s'===y?ue[8+re/3]:'')+C+(S&&'('===h?')':''), k) {
              for (a=-1, i=e.length; ++a<i;) {
                if (48>(l=e.charCodeAt(a))||l>57) {
                  C=(46===l?o+e.slice(a+1):e.slice(a))+C, e=e.slice(0, a); break;
                }
              }
            }
          }m&&!d&&(e=r(e, 1/0)); var O=f.length+e.length+C.length; var T=O<p?new Array(p-O+1).join(t):''; switch (m&&d&&(e=r(T+e, T.length?p-C.length:1/0), T=''), n) {
            case '<': e=f+e+C+T; break; case '=': e=f+T+e+C; break; case '^': e=T.slice(0, O=T.length>>1)+f+e+C+T.slice(O); break; default: e=T+f+e+C;
          } return s(e);
        } return g=void 0===g?6:/[gprs]/.test(y)?Math.max(1, Math.min(21, g)):Math.max(0, Math.min(20, g)), format.toString=function() {
          return e+'';
        }, format;
      } return {format: newFormat, formatPrefix: function(e, t) {
        var n=newFormat(((e=formatSpecifier(e)).type='f', e)); var r=3*Math.max(-8, Math.min(8, Math.floor(src_exponent(t)/3))); var a=Math.pow(10, -r); var i=ue[8+r/3]; return function(e) {
          return n(a*e)+i;
        };
      }};
    }({decimal: '.', thousands: ',', grouping: [3], currency: ['$', ''], minus: '-'}), ie=ae.format, oe=ae.formatPrefix; var src_tickFormat=function(e, t, n) {
      var r; var a=e[0]; var i=e[e.length-1]; var o=tickStep(a, i, null==t?10:t); switch ((n=formatSpecifier(null==n?',f':n)).type) {
        case 's': var s=Math.max(Math.abs(a), Math.abs(i)); return null!=n.precision||isNaN(r=function(e, t) {
          return Math.max(0, 3*Math.max(-8, Math.min(8, Math.floor(src_exponent(t)/3)))-src_exponent(Math.abs(e)));
        }(o, s))||(n.precision=r), oe(n, s); case '': case 'e': case 'g': case 'p': case 'r': null!=n.precision||isNaN(r=function(e, t) {
          return e=Math.abs(e), t=Math.abs(t)-e, Math.max(0, src_exponent(t)-src_exponent(e))+1;
        }(o, Math.max(Math.abs(a), Math.abs(i))))||(n.precision=r-('e'===n.type)); break; case 'f': case '%': null!=n.precision||isNaN(r=function(e) {
          return Math.max(0, -src_exponent(Math.abs(e)));
        }(o))||(n.precision=r-2*('%'===n.type));
      } return ie(n);
    }; function linearish(e) {
      var t=e.domain; return e.ticks=function(e) {
        var n=t(); return ticks(n[0], n[n.length-1], null==e?10:e);
      }, e.tickFormat=function(e, n) {
        return src_tickFormat(t(), e, n);
      }, e.nice=function(n) {
        null==n&&(n=10); var r; var a=t(); var i=0; var o=a.length-1; var s=a[i]; var l=a[o]; return l<s&&(r=s, s=l, l=r, r=i, i=o, o=r), (r=tickIncrement(s, l, n))>0?r=tickIncrement(s=Math.floor(s/r)*r, l=Math.ceil(l/r)*r, n):r<0&&(r=tickIncrement(s=Math.ceil(s*r)/r, l=Math.floor(l*r)/r, n)), r>0?(a[i]=Math.floor(s/r)*r, a[o]=Math.ceil(l/r)*r, t(a)):r<0&&(a[i]=Math.ceil(s*r)/r, a[o]=Math.floor(l*r)/r, t(a)), e;
      }, e;
    } function linear_linear() {
      var e=continuous(deinterpolateLinear, src_number); return e.copy=function() {
        return copy(e, linear_linear());
      }, linearish(e);
    } function raise(e, t) {
      return e<0?-Math.pow(-e, t):Math.pow(e, t);
    } function sqrt() {
      return function pow() {
        var e=1; var t=continuous((function(t, n) {
          return (n=raise(n, e)-(t=raise(t, e)))?function(r) {
            return (raise(r, e)-t)/n;
          }:d3_scale_src_constant(n);
        }), (function(t, n) {
          return n=raise(n, e)-(t=raise(t, e)), function(r) {
            return raise(t+n*r, 1/e);
          };
        })); var n=t.domain; return t.exponent=function(t) {
          return arguments.length?(e=+t, n(n())):e;
        }, t.copy=function() {
          return copy(t, pow().exponent(e));
        }, linearish(t);
      }().exponent(.5);
    } var ce=new Date; var he=new Date; function newInterval(e, t, n, r) {
      function interval(t) {
        return e(t=0===arguments.length?new Date:new Date(+t)), t;
      } return interval.floor=function(t) {
        return e(t=new Date(+t)), t;
      }, interval.ceil=function(n) {
        return e(n=new Date(n-1)), t(n, 1), e(n), n;
      }, interval.round=function(e) {
        var t=interval(e); var n=interval.ceil(e); return e-t<n-e?t:n;
      }, interval.offset=function(e, n) {
        return t(e=new Date(+e), null==n?1:Math.floor(n)), e;
      }, interval.range=function(n, r, a) {
        var i; var o=[]; if (n=interval.ceil(n), a=null==a?1:Math.floor(a), !(n<r&&a>0)) return o; do {
          o.push(i=new Date(+n)), t(n, a), e(n);
        } while (i<n&&n<r); return o;
      }, interval.filter=function(n) {
        return newInterval((function(t) {
          if (t>=t) for (;e(t), !n(t);)t.setTime(t-1);
        }), (function(e, r) {
          if (e>=e) if (r<0) for (;++r<=0;) for (;t(e, -1), !n(e););else for (;--r>=0;) for (;t(e, 1), !n(e););
        }));
      }, n&&(interval.count=function(t, r) {
        return ce.setTime(+t), he.setTime(+r), e(ce), e(he), Math.floor(n(ce, he));
      }, interval.every=function(e) {
        return e=Math.floor(e), isFinite(e)&&e>0?e>1?interval.filter(r?function(t) {
          return r(t)%e==0;
        }:function(t) {
          return interval.count(0, t)%e==0;
        }):interval:null;
      }), interval;
    } var fe=newInterval((function(e) {
      e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
    }), (function(e, t) {
      e.setFullYear(e.getFullYear()+t);
    }), (function(e, t) {
      return t.getFullYear()-e.getFullYear();
    }), (function(e) {
      return e.getFullYear();
    })); fe.every=function(e) {
      return isFinite(e=Math.floor(e))&&e>0?newInterval((function(t) {
        t.setFullYear(Math.floor(t.getFullYear()/e)*e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
      }), (function(t, n) {
        t.setFullYear(t.getFullYear()+n*e);
      })):null;
    }; var de=fe; var pe=(fe.range, newInterval((function(e) {
      e.setDate(1), e.setHours(0, 0, 0, 0);
    }), (function(e, t) {
      e.setMonth(e.getMonth()+t);
    }), (function(e, t) {
      return t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear());
    }), (function(e) {
      return e.getMonth();
    }))); pe.range; function weekday(e) {
      return newInterval((function(t) {
        t.setDate(t.getDate()-(t.getDay()+7-e)%7), t.setHours(0, 0, 0, 0);
      }), (function(e, t) {
        e.setDate(e.getDate()+7*t);
      }), (function(e, t) {
        return (t-e-6e4*(t.getTimezoneOffset()-e.getTimezoneOffset()))/6048e5;
      }));
    } var me=weekday(0); var ge=weekday(1); var ve=weekday(2); var ye=weekday(3); var be=weekday(4); var _e=weekday(5); var we=weekday(6); var xe=(me.range, ge.range, ve.range, ye.range, be.range, _e.range, we.range, newInterval((function(e) {
      e.setHours(0, 0, 0, 0);
    }), (function(e, t) {
      e.setDate(e.getDate()+t);
    }), (function(e, t) {
      return (t-e-6e4*(t.getTimezoneOffset()-e.getTimezoneOffset()))/864e5;
    }), (function(e) {
      return e.getDate()-1;
    }))); var ke=xe; var Ce=(xe.range, newInterval((function(e) {
      e.setTime(e-e.getMilliseconds()-1e3*e.getSeconds()-6e4*e.getMinutes());
    }), (function(e, t) {
      e.setTime(+e+36e5*t);
    }), (function(e, t) {
      return (t-e)/36e5;
    }), (function(e) {
      return e.getHours();
    }))); var Se=(Ce.range, newInterval((function(e) {
      e.setTime(e-e.getMilliseconds()-1e3*e.getSeconds());
    }), (function(e, t) {
      e.setTime(+e+6e4*t);
    }), (function(e, t) {
      return (t-e)/6e4;
    }), (function(e) {
      return e.getMinutes();
    }))); var Oe=(Se.range, newInterval((function(e) {
      e.setTime(e-e.getMilliseconds());
    }), (function(e, t) {
      e.setTime(+e+1e3*t);
    }), (function(e, t) {
      return (t-e)/1e3;
    }), (function(e) {
      return e.getUTCSeconds();
    }))); var Te=(Oe.range, newInterval((function() {}), (function(e, t) {
      e.setTime(+e+t);
    }), (function(e, t) {
      return t-e;
    }))); Te.every=function(e) {
      return e=Math.floor(e), isFinite(e)&&e>0?e>1?newInterval((function(t) {
        t.setTime(Math.floor(t/e)*e);
      }), (function(t, n) {
        t.setTime(+t+n*e);
      }), (function(t, n) {
        return (n-t)/e;
      })):Te:null;
    }; Te.range; function utcWeekday(e) {
      return newInterval((function(t) {
        t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7), t.setUTCHours(0, 0, 0, 0);
      }), (function(e, t) {
        e.setUTCDate(e.getUTCDate()+7*t);
      }), (function(e, t) {
        return (t-e)/6048e5;
      }));
    } var Ee=utcWeekday(0); var Re=utcWeekday(1); var Pe=utcWeekday(2); var Me=utcWeekday(3); var Ae=utcWeekday(4); var je=utcWeekday(5); var Ne=utcWeekday(6); var De=(Ee.range, Re.range, Pe.range, Me.range, Ae.range, je.range, Ne.range, newInterval((function(e) {
      e.setUTCHours(0, 0, 0, 0);
    }), (function(e, t) {
      e.setUTCDate(e.getUTCDate()+t);
    }), (function(e, t) {
      return (t-e)/864e5;
    }), (function(e) {
      return e.getUTCDate()-1;
    }))); var Ve=De; var Le=(De.range, newInterval((function(e) {
      e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
    }), (function(e, t) {
      e.setUTCFullYear(e.getUTCFullYear()+t);
    }), (function(e, t) {
      return t.getUTCFullYear()-e.getUTCFullYear();
    }), (function(e) {
      return e.getUTCFullYear();
    }))); Le.every=function(e) {
      return isFinite(e=Math.floor(e))&&e>0?newInterval((function(t) {
        t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
      }), (function(t, n) {
        t.setUTCFullYear(t.getUTCFullYear()+n*e);
      })):null;
    }; var Be=Le; Le.range; function localDate(e) {
      if (0<=e.y&&e.y<100) {
        var t=new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L); return t.setFullYear(e.y), t;
      } return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
    } function utcDate(e) {
      if (0<=e.y&&e.y<100) {
        var t=new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L)); return t.setUTCFullYear(e.y), t;
      } return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
    } function newDate(e, t, n) {
      return {y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0};
    } var Ie; var ze={'-': '', '_': ' ', '0': '0'}; var Fe=/^\s*\d+/; var Ue=/^%/; var He=/[\\^$*+?|[\]().{}]/g; function pad(e, t, n) {
      var r=e<0?'-':''; var a=(r?-e:e)+''; var i=a.length; return r+(i<n?new Array(n-i+1).join(t)+a:a);
    } function requote(e) {
      return e.replace(He, '\\$&');
    } function formatRe(e) {
      return new RegExp('^(?:'+e.map(requote).join('|')+')', 'i');
    } function formatLookup(e) {
      for (var t={}, n=-1, r=e.length; ++n<r;)t[e[n].toLowerCase()]=n; return t;
    } function parseWeekdayNumberSunday(e, t, n) {
      var r=Fe.exec(t.slice(n, n+1)); return r?(e.w=+r[0], n+r[0].length):-1;
    } function parseWeekdayNumberMonday(e, t, n) {
      var r=Fe.exec(t.slice(n, n+1)); return r?(e.u=+r[0], n+r[0].length):-1;
    } function parseWeekNumberSunday(e, t, n) {
      var r=Fe.exec(t.slice(n, n+2)); return r?(e.U=+r[0], n+r[0].length):-1;
    } function parseWeekNumberISO(e, t, n) {
      var r=Fe.exec(t.slice(n, n+2)); return r?(e.V=+r[0], n+r[0].length):-1;
    } function parseWeekNumberMonday(e, t, n) {
      var r=Fe.exec(t.slice(n, n+2)); return r?(e.W=+r[0], n+r[0].length):-1;
    } function parseFullYear(e, t, n) {
      var r=Fe.exec(t.slice(n, n+4)); return r?(e.y=+r[0], n+r[0].length):-1;
    } function parseYear(e, t, n) {
      var r=Fe.exec(t.slice(n, n+2)); return r?(e.y=+r[0]+(+r[0]>68?1900:2e3), n+r[0].length):-1;
    } function parseZone(e, t, n) {
      var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n+6)); return r?(e.Z=r[1]?0:-(r[2]+(r[3]||'00')), n+r[0].length):-1;
    } function parseQuarter(e, t, n) {
      var r=Fe.exec(t.slice(n, n+1)); return r?(e.q=3*r[0]-3, n+r[0].length):-1;
    } function parseMonthNumber(e, t, n) {
      var r=Fe.exec(t.slice(n, n+2)); return r?(e.m=r[0]-1, n+r[0].length):-1;
    } function parseDayOfMonth(e, t, n) {
      var r=Fe.exec(t.slice(n, n+2)); return r?(e.d=+r[0], n+r[0].length):-1;
    } function parseDayOfYear(e, t, n) {
      var r=Fe.exec(t.slice(n, n+3)); return r?(e.m=0, e.d=+r[0], n+r[0].length):-1;
    } function parseHour24(e, t, n) {
      var r=Fe.exec(t.slice(n, n+2)); return r?(e.H=+r[0], n+r[0].length):-1;
    } function parseMinutes(e, t, n) {
      var r=Fe.exec(t.slice(n, n+2)); return r?(e.M=+r[0], n+r[0].length):-1;
    } function parseSeconds(e, t, n) {
      var r=Fe.exec(t.slice(n, n+2)); return r?(e.S=+r[0], n+r[0].length):-1;
    } function parseMilliseconds(e, t, n) {
      var r=Fe.exec(t.slice(n, n+3)); return r?(e.L=+r[0], n+r[0].length):-1;
    } function parseMicroseconds(e, t, n) {
      var r=Fe.exec(t.slice(n, n+6)); return r?(e.L=Math.floor(r[0]/1e3), n+r[0].length):-1;
    } function parseLiteralPercent(e, t, n) {
      var r=Ue.exec(t.slice(n, n+1)); return r?n+r[0].length:-1;
    } function parseUnixTimestamp(e, t, n) {
      var r=Fe.exec(t.slice(n)); return r?(e.Q=+r[0], n+r[0].length):-1;
    } function parseUnixTimestampSeconds(e, t, n) {
      var r=Fe.exec(t.slice(n)); return r?(e.s=+r[0], n+r[0].length):-1;
    } function formatDayOfMonth(e, t) {
      return pad(e.getDate(), t, 2);
    } function formatHour24(e, t) {
      return pad(e.getHours(), t, 2);
    } function formatHour12(e, t) {
      return pad(e.getHours()%12||12, t, 2);
    } function formatDayOfYear(e, t) {
      return pad(1+ke.count(de(e), e), t, 3);
    } function formatMilliseconds(e, t) {
      return pad(e.getMilliseconds(), t, 3);
    } function formatMicroseconds(e, t) {
      return formatMilliseconds(e, t)+'000';
    } function formatMonthNumber(e, t) {
      return pad(e.getMonth()+1, t, 2);
    } function formatMinutes(e, t) {
      return pad(e.getMinutes(), t, 2);
    } function formatSeconds(e, t) {
      return pad(e.getSeconds(), t, 2);
    } function formatWeekdayNumberMonday(e) {
      var t=e.getDay(); return 0===t?7:t;
    } function formatWeekNumberSunday(e, t) {
      return pad(me.count(de(e)-1, e), t, 2);
    } function dISO(e) {
      var t=e.getDay(); return t>=4||0===t?be(e):be.ceil(e);
    } function formatWeekNumberISO(e, t) {
      return e=dISO(e), pad(be.count(de(e), e)+(4===de(e).getDay()), t, 2);
    } function formatWeekdayNumberSunday(e) {
      return e.getDay();
    } function formatWeekNumberMonday(e, t) {
      return pad(ge.count(de(e)-1, e), t, 2);
    } function locale_formatYear(e, t) {
      return pad(e.getFullYear()%100, t, 2);
    } function formatYearISO(e, t) {
      return pad((e=dISO(e)).getFullYear()%100, t, 2);
    } function formatFullYear(e, t) {
      return pad(e.getFullYear()%1e4, t, 4);
    } function formatFullYearISO(e, t) {
      var n=e.getDay(); return pad((e=n>=4||0===n?be(e):be.ceil(e)).getFullYear()%1e4, t, 4);
    } function formatZone(e) {
      var t=e.getTimezoneOffset(); return (t>0?'-':(t*=-1, '+'))+pad(t/60|0, '0', 2)+pad(t%60, '0', 2);
    } function formatUTCDayOfMonth(e, t) {
      return pad(e.getUTCDate(), t, 2);
    } function formatUTCHour24(e, t) {
      return pad(e.getUTCHours(), t, 2);
    } function formatUTCHour12(e, t) {
      return pad(e.getUTCHours()%12||12, t, 2);
    } function formatUTCDayOfYear(e, t) {
      return pad(1+Ve.count(Be(e), e), t, 3);
    } function formatUTCMilliseconds(e, t) {
      return pad(e.getUTCMilliseconds(), t, 3);
    } function formatUTCMicroseconds(e, t) {
      return formatUTCMilliseconds(e, t)+'000';
    } function formatUTCMonthNumber(e, t) {
      return pad(e.getUTCMonth()+1, t, 2);
    } function formatUTCMinutes(e, t) {
      return pad(e.getUTCMinutes(), t, 2);
    } function formatUTCSeconds(e, t) {
      return pad(e.getUTCSeconds(), t, 2);
    } function formatUTCWeekdayNumberMonday(e) {
      var t=e.getUTCDay(); return 0===t?7:t;
    } function formatUTCWeekNumberSunday(e, t) {
      return pad(Ee.count(Be(e)-1, e), t, 2);
    } function UTCdISO(e) {
      var t=e.getUTCDay(); return t>=4||0===t?Ae(e):Ae.ceil(e);
    } function formatUTCWeekNumberISO(e, t) {
      return e=UTCdISO(e), pad(Ae.count(Be(e), e)+(4===Be(e).getUTCDay()), t, 2);
    } function formatUTCWeekdayNumberSunday(e) {
      return e.getUTCDay();
    } function formatUTCWeekNumberMonday(e, t) {
      return pad(Re.count(Be(e)-1, e), t, 2);
    } function formatUTCYear(e, t) {
      return pad(e.getUTCFullYear()%100, t, 2);
    } function formatUTCYearISO(e, t) {
      return pad((e=UTCdISO(e)).getUTCFullYear()%100, t, 2);
    } function formatUTCFullYear(e, t) {
      return pad(e.getUTCFullYear()%1e4, t, 4);
    } function formatUTCFullYearISO(e, t) {
      var n=e.getUTCDay(); return pad((e=n>=4||0===n?Ae(e):Ae.ceil(e)).getUTCFullYear()%1e4, t, 4);
    } function formatUTCZone() {
      return '+0000';
    } function formatLiteralPercent() {
      return '%';
    } function formatUnixTimestamp(e) {
      return +e;
    } function formatUnixTimestampSeconds(e) {
      return Math.floor(+e/1e3);
    }!function(e) {
      Ie=function(e) {
        var t=e.dateTime; var n=e.date; var r=e.time; var a=e.periods; var i=e.days; var o=e.shortDays; var s=e.months; var l=e.shortMonths; var u=formatRe(a); var c=formatLookup(a); var h=formatRe(i); var f=formatLookup(i); var d=formatRe(o); var p=formatLookup(o); var m=formatRe(s); var g=formatLookup(s); var v=formatRe(l); var y=formatLookup(l); var b={'a': function(e) {
          return o[e.getDay()];
        }, 'A': function(e) {
          return i[e.getDay()];
        }, 'b': function(e) {
          return l[e.getMonth()];
        }, 'B': function(e) {
          return s[e.getMonth()];
        }, 'c': null, 'd': formatDayOfMonth, 'e': formatDayOfMonth, 'f': formatMicroseconds, 'g': formatYearISO, 'G': formatFullYearISO, 'H': formatHour24, 'I': formatHour12, 'j': formatDayOfYear, 'L': formatMilliseconds, 'm': formatMonthNumber, 'M': formatMinutes, 'p': function(e) {
          return a[+(e.getHours()>=12)];
        }, 'q': function(e) {
          return 1+~~(e.getMonth()/3);
        }, 'Q': formatUnixTimestamp, 's': formatUnixTimestampSeconds, 'S': formatSeconds, 'u': formatWeekdayNumberMonday, 'U': formatWeekNumberSunday, 'V': formatWeekNumberISO, 'w': formatWeekdayNumberSunday, 'W': formatWeekNumberMonday, 'x': null, 'X': null, 'y': locale_formatYear, 'Y': formatFullYear, 'Z': formatZone, '%': formatLiteralPercent}; var w={'a': function(e) {
          return o[e.getUTCDay()];
        }, 'A': function(e) {
          return i[e.getUTCDay()];
        }, 'b': function(e) {
          return l[e.getUTCMonth()];
        }, 'B': function(e) {
          return s[e.getUTCMonth()];
        }, 'c': null, 'd': formatUTCDayOfMonth, 'e': formatUTCDayOfMonth, 'f': formatUTCMicroseconds, 'g': formatUTCYearISO, 'G': formatUTCFullYearISO, 'H': formatUTCHour24, 'I': formatUTCHour12, 'j': formatUTCDayOfYear, 'L': formatUTCMilliseconds, 'm': formatUTCMonthNumber, 'M': formatUTCMinutes, 'p': function(e) {
          return a[+(e.getUTCHours()>=12)];
        }, 'q': function(e) {
          return 1+~~(e.getUTCMonth()/3);
        }, 'Q': formatUnixTimestamp, 's': formatUnixTimestampSeconds, 'S': formatUTCSeconds, 'u': formatUTCWeekdayNumberMonday, 'U': formatUTCWeekNumberSunday, 'V': formatUTCWeekNumberISO, 'w': formatUTCWeekdayNumberSunday, 'W': formatUTCWeekNumberMonday, 'x': null, 'X': null, 'y': formatUTCYear, 'Y': formatUTCFullYear, 'Z': formatUTCZone, '%': formatLiteralPercent}; var x={'a': function(e, t, n) {
          var r=d.exec(t.slice(n)); return r?(e.w=p[r[0].toLowerCase()], n+r[0].length):-1;
        }, 'A': function(e, t, n) {
          var r=h.exec(t.slice(n)); return r?(e.w=f[r[0].toLowerCase()], n+r[0].length):-1;
        }, 'b': function(e, t, n) {
          var r=v.exec(t.slice(n)); return r?(e.m=y[r[0].toLowerCase()], n+r[0].length):-1;
        }, 'B': function(e, t, n) {
          var r=m.exec(t.slice(n)); return r?(e.m=g[r[0].toLowerCase()], n+r[0].length):-1;
        }, 'c': function(e, n, r) {
          return parseSpecifier(e, t, n, r);
        }, 'd': parseDayOfMonth, 'e': parseDayOfMonth, 'f': parseMicroseconds, 'g': parseYear, 'G': parseFullYear, 'H': parseHour24, 'I': parseHour24, 'j': parseDayOfYear, 'L': parseMilliseconds, 'm': parseMonthNumber, 'M': parseMinutes, 'p': function(e, t, n) {
          var r=u.exec(t.slice(n)); return r?(e.p=c[r[0].toLowerCase()], n+r[0].length):-1;
        }, 'q': parseQuarter, 'Q': parseUnixTimestamp, 's': parseUnixTimestampSeconds, 'S': parseSeconds, 'u': parseWeekdayNumberMonday, 'U': parseWeekNumberSunday, 'V': parseWeekNumberISO, 'w': parseWeekdayNumberSunday, 'W': parseWeekNumberMonday, 'x': function(e, t, r) {
          return parseSpecifier(e, n, t, r);
        }, 'X': function(e, t, n) {
          return parseSpecifier(e, r, t, n);
        }, 'y': parseYear, 'Y': parseFullYear, 'Z': parseZone, '%': parseLiteralPercent}; function newFormat(e, t) {
          return function(n) {
            var r; var a; var i; var o=[]; var s=-1; var l=0; var u=e.length; for (n instanceof Date||(n=new Date(+n)); ++s<u;)37===e.charCodeAt(s)&&(o.push(e.slice(l, s)), null!=(a=ze[r=e.charAt(++s)])?r=e.charAt(++s):a='e'===r?' ':'0', (i=t[r])&&(r=i(n, a)), o.push(r), l=s+1); return o.push(e.slice(l, s)), o.join('');
          };
        } function newParse(e, t) {
          return function(n) {
            var r; var a; var i=newDate(1900, void 0, 1); if (parseSpecifier(i, e, n+='', 0)!=n.length) return null; if ('Q'in i) return new Date(i.Q); if ('s'in i) return new Date(1e3*i.s+('L'in i?i.L:0)); if (t&&!('Z'in i)&&(i.Z=0), 'p'in i&&(i.H=i.H%12+12*i.p), void 0===i.m&&(i.m='q'in i?i.q:0), 'V'in i) {
              if (i.V<1||i.V>53) return null; 'w'in i||(i.w=1), 'Z'in i?(a=(r=utcDate(newDate(i.y, 0, 1))).getUTCDay(), r=a>4||0===a?Re.ceil(r):Re(r), r=Ve.offset(r, 7*(i.V-1)), i.y=r.getUTCFullYear(), i.m=r.getUTCMonth(), i.d=r.getUTCDate()+(i.w+6)%7):(a=(r=localDate(newDate(i.y, 0, 1))).getDay(), r=a>4||0===a?ge.ceil(r):ge(r), r=ke.offset(r, 7*(i.V-1)), i.y=r.getFullYear(), i.m=r.getMonth(), i.d=r.getDate()+(i.w+6)%7);
            } else ('W'in i||'U'in i)&&('w'in i||(i.w='u'in i?i.u%7:'W'in i?1:0), a='Z'in i?utcDate(newDate(i.y, 0, 1)).getUTCDay():localDate(newDate(i.y, 0, 1)).getDay(), i.m=0, i.d='W'in i?(i.w+6)%7+7*i.W-(a+5)%7:i.w+7*i.U-(a+6)%7); return 'Z'in i?(i.H+=i.Z/100|0, i.M+=i.Z%100, utcDate(i)):localDate(i);
          };
        } function parseSpecifier(e, t, n, r) {
          for (var a, i, o=0, s=t.length, l=n.length; o<s;) {
            if (r>=l) return -1; if (37===(a=t.charCodeAt(o++))) {
              if (a=t.charAt(o++), !(i=x[a in ze?t.charAt(o++):a])||(r=i(e, n, r))<0) return -1;
            } else if (a!=n.charCodeAt(r++)) return -1;
          } return r;
        } return b.x=newFormat(n, b), b.X=newFormat(r, b), b.c=newFormat(t, b), w.x=newFormat(n, w), w.X=newFormat(r, w), w.c=newFormat(t, w), {format: function(e) {
          var t=newFormat(e+='', b); return t.toString=function() {
            return e;
          }, t;
        }, parse: function(e) {
          var t=newParse(e+='', !1); return t.toString=function() {
            return e;
          }, t;
        }, utcFormat: function(e) {
          var t=newFormat(e+='', w); return t.toString=function() {
            return e;
          }, t;
        }, utcParse: function(e) {
          var t=newParse(e+='', !0); return t.toString=function() {
            return e;
          }, t;
        }};
      }(e), Ie.format, Ie.parse, Ie.utcFormat, Ie.utcParse;
    }({dateTime: '%x, %X', date: '%-m/%-d/%Y', time: '%-I:%M:%S %p', periods: ['AM', 'PM'], days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}); var qe=newInterval((function(e) {
      e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
    }), (function(e, t) {
      e.setUTCMonth(e.getUTCMonth()+t);
    }), (function(e, t) {
      return t.getUTCMonth()-e.getUTCMonth()+12*(t.getUTCFullYear()-e.getUTCFullYear());
    }), (function(e) {
      return e.getUTCMonth();
    })); var We=(qe.range, newInterval((function(e) {
      e.setUTCMinutes(0, 0, 0);
    }), (function(e, t) {
      e.setTime(+e+36e5*t);
    }), (function(e, t) {
      return (t-e)/36e5;
    }), (function(e) {
      return e.getUTCHours();
    }))); var $e=(We.range, newInterval((function(e) {
      e.setUTCSeconds(0, 0);
    }), (function(e, t) {
      e.setTime(+e+6e4*t);
    }), (function(e, t) {
      return (t-e)/6e4;
    }), (function(e) {
      return e.getUTCMinutes();
    }))); var Ge=($e.range, function(e) {
      return e.match(/.{6}/g).map((function(e) {
        return '#'+e;
      }));
    }); var Ye=(Ge('1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf'), Ge('393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6'), Ge('3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9'), Ge('1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5')); var Ke=Math.PI/180; var Xe=180/Math.PI; var Ze=-.14861; var Je=1.78277; var Qe=-.29227; var et=-1.7884503806; var tt=1.97294*Je; var nt=Je*Qe- -.90649*Ze; function cubehelixConvert(e) {
      if (e instanceof Cubehelix) return new Cubehelix(e.h, e.s, e.l, e.opacity); e instanceof Rgb||(e=rgbConvert(e)); var t=e.r/255; var n=e.g/255; var r=e.b/255; var a=(nt*r+et*t-tt*n)/(nt+et-tt); var i=r-a; var o=(1.97294*(n-a)-Qe*i)/-.90649; var s=Math.sqrt(o*o+i*i)/(1.97294*a*(1-a)); var l=s?Math.atan2(o, i)*Xe-120:NaN; return new Cubehelix(l<0?l+360:l, s, a, e.opacity);
    } function cubehelix_cubehelix(e, t, n, r) {
      return 1===arguments.length?cubehelixConvert(e):new Cubehelix(e, t, n, null==r?1:r);
    } function Cubehelix(e, t, n, r) {
      this.h=+e, this.s=+t, this.l=+n, this.opacity=+r;
    } function src_cubehelix_cubehelix(e) {
      return function cubehelixGamma(t) {
        function cubehelix(n, r) {
          var a=e((n=cubehelix_cubehelix(n)).h, (r=cubehelix_cubehelix(r)).h); var i=nogamma(n.s, r.s); var o=nogamma(n.l, r.l); var s=nogamma(n.opacity, r.opacity); return function(e) {
            return n.h=a(e), n.s=i(e), n.l=o(Math.pow(e, t)), n.opacity=s(e), n+'';
          };
        } return t=+t, cubehelix.gamma=cubehelixGamma, cubehelix;
      }(1);
    }define(Cubehelix, cubehelix_cubehelix, extend(Color, {brighter: function(e) {
      return e=null==e?1/.7:Math.pow(1/.7, e), new Cubehelix(this.h, this.s, this.l*e, this.opacity);
    }, darker: function(e) {
      return e=null==e?.7:Math.pow(.7, e), new Cubehelix(this.h, this.s, this.l*e, this.opacity);
    }, rgb: function() {
      var e=isNaN(this.h)?0:(this.h+120)*Ke; var t=+this.l; var n=isNaN(this.s)?0:this.s*t*(1-t); var r=Math.cos(e); var a=Math.sin(e); return new Rgb(255*(t+n*(Ze*r+Je*a)), 255*(t+n*(Qe*r+-.90649*a)), 255*(t+n*(1.97294*r)), this.opacity);
    }})); src_cubehelix_cubehelix((function(e, t) {
      var n=t-e; return n?linear(e, n>180||n<-180?n-360*Math.round(n/360):n):src_constant(isNaN(e)?t:e);
    })); var rt=src_cubehelix_cubehelix(nogamma); rt(cubehelix_cubehelix(300, .5, 0), cubehelix_cubehelix(-240, .5, 1)), rt(cubehelix_cubehelix(-100, .75, .35), cubehelix_cubehelix(80, 1.5, .8)), rt(cubehelix_cubehelix(260, .75, .35), cubehelix_cubehelix(80, 1.5, .8)), cubehelix_cubehelix(); function ramp(e) {
      var t=e.length; return function(n) {
        return e[Math.max(0, Math.min(t-1, Math.floor(n*t)))];
      };
    }ramp(Ge('44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725')), ramp(Ge('00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf')), ramp(Ge('00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4')), ramp(Ge('0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921')); var at=Array.prototype.slice; var d3_shape_src_constant=function(e) {
      return function() {
        return e;
      };
    }; var none=function(e, t) {
      if ((a=e.length)>1) for (var n, r, a, i=1, o=e[t[0]], s=o.length; i<a; ++i) for (r=o, o=e[t[i]], n=0; n<s; ++n)o[n][1]+=o[n][0]=isNaN(r[n][1])?r[n][0]:r[n][1];
    }; var order_none=function(e) {
      for (var t=e.length, n=new Array(t); --t>=0;)n[t]=t; return n;
    }; function stackValue(e, t) {
      return e[t];
    } var it=Math.PI; var ot=2*it; var st=ot-1e-6; function Path() {
      this._x0=this._y0=this._x1=this._y1=null, this._='';
    } function path_path() {
      return new Path;
    }Path.prototype=path_path.prototype={constructor: Path, moveTo: function(e, t) {
      this._+='M'+(this._x0=this._x1=+e)+','+(this._y0=this._y1=+t);
    }, closePath: function() {
      null!==this._x1&&(this._x1=this._x0, this._y1=this._y0, this._+='Z');
    }, lineTo: function(e, t) {
      this._+='L'+(this._x1=+e)+','+(this._y1=+t);
    }, quadraticCurveTo: function(e, t, n, r) {
      this._+='Q'+ +e+','+ +t+','+(this._x1=+n)+','+(this._y1=+r);
    }, bezierCurveTo: function(e, t, n, r, a, i) {
      this._+='C'+ +e+','+ +t+','+ +n+','+ +r+','+(this._x1=+a)+','+(this._y1=+i);
    }, arcTo: function(e, t, n, r, a) {
      e=+e, t=+t, n=+n, r=+r, a=+a; var i=this._x1; var o=this._y1; var s=n-e; var l=r-t; var u=i-e; var c=o-t; var h=u*u+c*c; if (a<0) throw new Error('negative radius: '+a); if (null===this._x1) this._+='M'+(this._x1=e)+','+(this._y1=t); else if (h>1e-6) {
        if (Math.abs(c*s-l*u)>1e-6&&a) {
          var f=n-i; var d=r-o; var p=s*s+l*l; var m=f*f+d*d; var g=Math.sqrt(p); var v=Math.sqrt(h); var y=a*Math.tan((it-Math.acos((p+h-m)/(2*g*v)))/2); var b=y/v; var w=y/g; Math.abs(b-1)>1e-6&&(this._+='L'+(e+b*u)+','+(t+b*c)), this._+='A'+a+','+a+',0,0,'+ +(c*f>u*d)+','+(this._x1=e+w*s)+','+(this._y1=t+w*l);
        } else this._+='L'+(this._x1=e)+','+(this._y1=t);
      } else;
    }, arc: function(e, t, n, r, a, i) {
      e=+e, t=+t, i=!!i; var o=(n=+n)*Math.cos(r); var s=n*Math.sin(r); var l=e+o; var u=t+s; var c=1^i; var h=i?r-a:a-r; if (n<0) throw new Error('negative radius: '+n); null===this._x1?this._+='M'+l+','+u:(Math.abs(this._x1-l)>1e-6||Math.abs(this._y1-u)>1e-6)&&(this._+='L'+l+','+u), n&&(h<0&&(h=h%ot+ot), h>st?this._+='A'+n+','+n+',0,1,'+c+','+(e-o)+','+(t-s)+'A'+n+','+n+',0,1,'+c+','+(this._x1=l)+','+(this._y1=u):h>1e-6&&(this._+='A'+n+','+n+',0,'+ +(h>=it)+','+c+','+(this._x1=e+n*Math.cos(a))+','+(this._y1=t+n*Math.sin(a))));
    }, rect: function(e, t, n, r) {
      this._+='M'+(this._x0=this._x1=+e)+','+(this._y0=this._y1=+t)+'h'+ +n+'v'+ +r+'h'+-n+'Z';
    }, toString: function() {
      return this._;
    }}; var lt=path_path; function Linear(e) {
      this._context=e;
    }Linear.prototype={areaStart: function() {
      this._line=0;
    }, areaEnd: function() {
      this._line=NaN;
    }, lineStart: function() {
      this._point=0;
    }, lineEnd: function() {
      (this._line||0!==this._line&&1===this._point)&&this._context.closePath(), this._line=1-this._line;
    }, point: function(e, t) {
      switch (e=+e, t=+t, this._point) {
        case 0: this._point=1, this._line?this._context.lineTo(e, t):this._context.moveTo(e, t); break; case 1: this._point=2; default: this._context.lineTo(e, t);
      }
    }}; var curve_linear=function(e) {
      return new Linear(e);
    }; function point_x(e) {
      return e[0];
    } function point_y(e) {
      return e[1];
    } var src_line=function() {
      var e=point_x; var t=point_y; var n=d3_shape_src_constant(!0); var r=null; var a=curve_linear; var i=null; function line(o) {
        var s; var l; var u; var c=o.length; var h=!1; for (null==r&&(i=a(u=lt())), s=0; s<=c; ++s)!(s<c&&n(l=o[s], s, o))===h&&((h=!h)?i.lineStart():i.lineEnd()), h&&i.point(+e(l, s, o), +t(l, s, o)); if (u) return i=null, u+''||null;
      } return line.x=function(t) {
        return arguments.length?(e='function'==typeof t?t:d3_shape_src_constant(+t), line):e;
      }, line.y=function(e) {
        return arguments.length?(t='function'==typeof e?e:d3_shape_src_constant(+e), line):t;
      }, line.defined=function(e) {
        return arguments.length?(n='function'==typeof e?e:d3_shape_src_constant(!!e), line):n;
      }, line.curve=function(e) {
        return arguments.length?(a=e, null!=r&&(i=a(r)), line):a;
      }, line.context=function(e) {
        return arguments.length?(null==e?r=i=null:i=a(r=e), line):r;
      }, line;
    }; var ut=(n(192), n(13)); var ct=Array.prototype.slice; var d3_axis_src_identity=function(e) {
      return e;
    }; function translateX(e) {
      return 'translate('+(e+.5)+',0)';
    } function translateY(e) {
      return 'translate(0,'+(e+.5)+')';
    } function axis_number(e) {
      return function(t) {
        return +e(t);
      };
    } function center(e) {
      var t=Math.max(0, e.bandwidth()-1)/2; return e.round()&&(t=Math.round(t)), function(n) {
        return +e(n)+t;
      };
    } function entering() {
      return !this.__axis;
    } function axis_axis(e, t) {
      var n=[]; var r=null; var a=null; var i=6; var o=6; var s=3; var l=1===e||4===e?-1:1; var u=4===e||2===e?'x':'y'; var c=1===e||3===e?translateX:translateY; function axis(h) {
        var f=null==r?t.ticks?t.ticks.apply(t, n):t.domain():r; var d=null==a?t.tickFormat?t.tickFormat.apply(t, n):d3_axis_src_identity:a; var p=Math.max(i, 0)+s; var m=t.range(); var g=+m[0]+.5; var v=+m[m.length-1]+.5; var y=(t.bandwidth?center:axis_number)(t.copy()); var b=h.selection?h.selection():h; var w=b.selectAll('.domain').data([null]); var x=b.selectAll('.tick').data(f, t).order(); var k=x.exit(); var C=x.enter().append('g').attr('class', 'tick'); var S=x.select('line'); var O=x.select('text'); w=w.merge(w.enter().insert('path', '.tick').attr('class', 'domain').attr('stroke', 'currentColor')), x=x.merge(C), S=S.merge(C.append('line').attr('stroke', 'currentColor').attr(u+'2', l*i)), O=O.merge(C.append('text').attr('fill', 'currentColor').attr(u, l*p).attr('dy', 1===e?'0em':3===e?'0.71em':'0.32em')), h!==b&&(w=w.transition(h), x=x.transition(h), S=S.transition(h), O=O.transition(h), k=k.transition(h).attr('opacity', 1e-6).attr('transform', (function(e) {
          return isFinite(e=y(e))?c(e):this.getAttribute('transform');
        })), C.attr('opacity', 1e-6).attr('transform', (function(e) {
          var t=this.parentNode.__axis; return c(t&&isFinite(t=t(e))?t:y(e));
        }))), k.remove(), w.attr('d', 4===e||2==e?o?'M'+l*o+','+g+'H0.5V'+v+'H'+l*o:'M0.5,'+g+'V'+v:o?'M'+g+','+l*o+'V0.5H'+v+'V'+l*o:'M'+g+',0.5H'+v), x.attr('opacity', 1).attr('transform', (function(e) {
          return c(y(e));
        })), S.attr(u+'2', l*i), O.attr(u, l*p).text(d), b.filter(entering).attr('fill', 'none').attr('font-size', 10).attr('font-family', 'sans-serif').attr('text-anchor', 2===e?'start':4===e?'end':'middle'), b.each((function() {
          this.__axis=y;
        }));
      } return axis.scale=function(e) {
        return arguments.length?(t=e, axis):t;
      }, axis.ticks=function() {
        return n=ct.call(arguments), axis;
      }, axis.tickArguments=function(e) {
        return arguments.length?(n=null==e?[]:ct.call(e), axis):n.slice();
      }, axis.tickValues=function(e) {
        return arguments.length?(r=null==e?null:ct.call(e), axis):r&&r.slice();
      }, axis.tickFormat=function(e) {
        return arguments.length?(a=e, axis):a;
      }, axis.tickSize=function(e) {
        return arguments.length?(i=o=+e, axis):i;
      }, axis.tickSizeInner=function(e) {
        return arguments.length?(i=+e, axis):i;
      }, axis.tickSizeOuter=function(e) {
        return arguments.length?(o=+e, axis):o;
      }, axis.tickPadding=function(e) {
        return arguments.length?(s=+e, axis):s;
      }, axis;
    } function axisBottom(e) {
      return axis_axis(3, e);
    } function selector_none() {} var src_selector=function(e) {
      return null==e?selector_none:function() {
        return this.querySelector(e);
      };
    }; function selectorAll_empty() {
      return [];
    } var selectorAll=function(e) {
      return null==e?selectorAll_empty:function() {
        return this.querySelectorAll(e);
      };
    }; var matcher=function(e) {
      return function() {
        return this.matches(e);
      };
    }; var sparse=function(e) {
      return new Array(e.length);
    }; function EnterNode(e, t) {
      this.ownerDocument=e.ownerDocument, this.namespaceURI=e.namespaceURI, this._next=null, this._parent=e, this.__data__=t;
    }EnterNode.prototype={constructor: EnterNode, appendChild: function(e) {
      return this._parent.insertBefore(e, this._next);
    }, insertBefore: function(e, t) {
      return this._parent.insertBefore(e, t);
    }, querySelector: function(e) {
      return this._parent.querySelector(e);
    }, querySelectorAll: function(e) {
      return this._parent.querySelectorAll(e);
    }}; function bindIndex(e, t, n, r, a, i) {
      for (var o, s=0, l=t.length, u=i.length; s<u; ++s)(o=t[s])?(o.__data__=i[s], r[s]=o):n[s]=new EnterNode(e, i[s]); for (;s<l; ++s)(o=t[s])&&(a[s]=o);
    } function bindKey(e, t, n, r, a, i, o) {
      var s; var l; var u; var c={}; var h=t.length; var f=i.length; var d=new Array(h); for (s=0; s<h; ++s)(l=t[s])&&(d[s]=u='$'+o.call(l, l.__data__, s, t), u in c?a[s]=l:c[u]=l); for (s=0; s<f; ++s)(l=c[u='$'+o.call(e, i[s], s, i)])?(r[s]=l, l.__data__=i[s], c[u]=null):n[s]=new EnterNode(e, i[s]); for (s=0; s<h; ++s)(l=t[s])&&c[d[s]]===l&&(a[s]=l);
    } function sort_ascending(e, t) {
      return e<t?-1:e>t?1:e>=t?0:NaN;
    } var ht='http://www.w3.org/1999/xhtml'; var ft={svg: 'http://www.w3.org/2000/svg', xhtml: ht, xlink: 'http://www.w3.org/1999/xlink', xml: 'http://www.w3.org/XML/1998/namespace', xmlns: 'http://www.w3.org/2000/xmlns/'}; var namespace=function(e) {
      var t=e+=''; var n=t.indexOf(':'); return n>=0&&'xmlns'!==(t=e.slice(0, n))&&(e=e.slice(n+1)), ft.hasOwnProperty(t)?{space: ft[t], local: e}:e;
    }; function attrRemove(e) {
      return function() {
        this.removeAttribute(e);
      };
    } function attrRemoveNS(e) {
      return function() {
        this.removeAttributeNS(e.space, e.local);
      };
    } function attrConstant(e, t) {
      return function() {
        this.setAttribute(e, t);
      };
    } function attrConstantNS(e, t) {
      return function() {
        this.setAttributeNS(e.space, e.local, t);
      };
    } function attrFunction(e, t) {
      return function() {
        var n=t.apply(this, arguments); null==n?this.removeAttribute(e):this.setAttribute(e, n);
      };
    } function attrFunctionNS(e, t) {
      return function() {
        var n=t.apply(this, arguments); null==n?this.removeAttributeNS(e.space, e.local):this.setAttributeNS(e.space, e.local, n);
      };
    } var src_window=function(e) {
      return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView;
    }; function styleRemove(e) {
      return function() {
        this.style.removeProperty(e);
      };
    } function styleConstant(e, t, n) {
      return function() {
        this.style.setProperty(e, t, n);
      };
    } function styleFunction(e, t, n) {
      return function() {
        var r=t.apply(this, arguments); null==r?this.style.removeProperty(e):this.style.setProperty(e, r, n);
      };
    } function styleValue(e, t) {
      return e.style.getPropertyValue(t)||src_window(e).getComputedStyle(e, null).getPropertyValue(t);
    } function propertyRemove(e) {
      return function() {
        delete this[e];
      };
    } function propertyConstant(e, t) {
      return function() {
        this[e]=t;
      };
    } function propertyFunction(e, t) {
      return function() {
        var n=t.apply(this, arguments); null==n?delete this[e]:this[e]=n;
      };
    } function classArray(e) {
      return e.trim().split(/^|\s+/);
    } function classList(e) {
      return e.classList||new ClassList(e);
    } function ClassList(e) {
      this._node=e, this._names=classArray(e.getAttribute('class')||'');
    } function classedAdd(e, t) {
      for (var n=classList(e), r=-1, a=t.length; ++r<a;)n.add(t[r]);
    } function classedRemove(e, t) {
      for (var n=classList(e), r=-1, a=t.length; ++r<a;)n.remove(t[r]);
    } function classedTrue(e) {
      return function() {
        classedAdd(this, e);
      };
    } function classedFalse(e) {
      return function() {
        classedRemove(this, e);
      };
    } function classedFunction(e, t) {
      return function() {
        (t.apply(this, arguments)?classedAdd:classedRemove)(this, e);
      };
    }ClassList.prototype={add: function(e) {
      this._names.indexOf(e)<0&&(this._names.push(e), this._node.setAttribute('class', this._names.join(' ')));
    }, remove: function(e) {
      var t=this._names.indexOf(e); t>=0&&(this._names.splice(t, 1), this._node.setAttribute('class', this._names.join(' ')));
    }, contains: function(e) {
      return this._names.indexOf(e)>=0;
    }}; function textRemove() {
      this.textContent='';
    } function textConstant(e) {
      return function() {
        this.textContent=e;
      };
    } function textFunction(e) {
      return function() {
        var t=e.apply(this, arguments); this.textContent=null==t?'':t;
      };
    } function htmlRemove() {
      this.innerHTML='';
    } function htmlConstant(e) {
      return function() {
        this.innerHTML=e;
      };
    } function htmlFunction(e) {
      return function() {
        var t=e.apply(this, arguments); this.innerHTML=null==t?'':t;
      };
    } function raise_raise() {
      this.nextSibling&&this.parentNode.appendChild(this);
    } function lower() {
      this.previousSibling&&this.parentNode.insertBefore(this, this.parentNode.firstChild);
    } function creatorInherit(e) {
      return function() {
        var t=this.ownerDocument; var n=this.namespaceURI; return n===ht&&t.documentElement.namespaceURI===ht?t.createElement(e):t.createElementNS(n, e);
      };
    } function creatorFixed(e) {
      return function() {
        return this.ownerDocument.createElementNS(e.space, e.local);
      };
    } var creator=function(e) {
      var t=namespace(e); return (t.local?creatorFixed:creatorInherit)(t);
    }; function constantNull() {
      return null;
    } function remove_remove() {
      var e=this.parentNode; e&&e.removeChild(this);
    } function selection_cloneShallow() {
      var e=this.cloneNode(!1); var t=this.parentNode; return t?t.insertBefore(e, this.nextSibling):e;
    } function selection_cloneDeep() {
      var e=this.cloneNode(!0); var t=this.parentNode; return t?t.insertBefore(e, this.nextSibling):e;
    } var dt={}; var pt=null; 'undefined'!=typeof document&&('onmouseenter'in document.documentElement||(dt={mouseenter: 'mouseover', mouseleave: 'mouseout'})); function filterContextListener(e, t, n) {
      return e=contextListener(e, t, n), function(t) {
        var n=t.relatedTarget; n&&(n===this||8&n.compareDocumentPosition(this))||e.call(this, t);
      };
    } function contextListener(e, t, n) {
      return function(r) {
        var a=pt; pt=r; try {
          e.call(this, this.__data__, t, n);
        } finally {
          pt=a;
        }
      };
    } function parseTypenames(e) {
      return e.trim().split(/^|\s+/).map((function(e) {
        var t=''; var n=e.indexOf('.'); return n>=0&&(t=e.slice(n+1), e=e.slice(0, n)), {type: e, name: t};
      }));
    } function onRemove(e) {
      return function() {
        var t=this.__on; if (t) {
          for (var n, r=0, a=-1, i=t.length; r<i; ++r)n=t[r], e.type&&n.type!==e.type||n.name!==e.name?t[++a]=n:this.removeEventListener(n.type, n.listener, n.capture); ++a?t.length=a:delete this.__on;
        }
      };
    } function onAdd(e, t, n) {
      var r=dt.hasOwnProperty(e.type)?filterContextListener:contextListener; return function(a, i, o) {
        var s; var l=this.__on; var u=r(t, i, o); if (l) for (var c=0, h=l.length; c<h; ++c) if ((s=l[c]).type===e.type&&s.name===e.name) return this.removeEventListener(s.type, s.listener, s.capture), this.addEventListener(s.type, s.listener=u, s.capture=n), void(s.value=t); this.addEventListener(e.type, u, n), s={type: e.type, name: e.name, value: t, listener: u, capture: n}, l?l.push(s):this.__on=[s];
      };
    } function customEvent(e, t, n, r) {
      var a=pt; e.sourceEvent=pt, pt=e; try {
        return t.apply(n, r);
      } finally {
        pt=a;
      }
    } function dispatchEvent(e, t, n) {
      var r=src_window(e); var a=r.CustomEvent; 'function'==typeof a?a=new a(t, n):(a=r.document.createEvent('Event'), n?(a.initEvent(t, n.bubbles, n.cancelable), a.detail=n.detail):a.initEvent(t, !1, !1)), e.dispatchEvent(a);
    } function dispatchConstant(e, t) {
      return function() {
        return dispatchEvent(this, e, t);
      };
    } function dispatchFunction(e, t) {
      return function() {
        return dispatchEvent(this, e, t.apply(this, arguments));
      };
    } var mt=[null]; function Selection(e, t) {
      this._groups=e, this._parents=t;
    } function selection_selection() {
      return new Selection([[document.documentElement]], mt);
    }Selection.prototype=selection_selection.prototype={constructor: Selection, select: function(e) {
      'function'!=typeof e&&(e=src_selector(e)); for (var t=this._groups, n=t.length, r=new Array(n), a=0; a<n; ++a) for (var i, o, s=t[a], l=s.length, u=r[a]=new Array(l), c=0; c<l; ++c)(i=s[c])&&(o=e.call(i, i.__data__, c, s))&&('__data__'in i&&(o.__data__=i.__data__), u[c]=o); return new Selection(r, this._parents);
    }, selectAll: function(e) {
      'function'!=typeof e&&(e=selectorAll(e)); for (var t=this._groups, n=t.length, r=[], a=[], i=0; i<n; ++i) for (var o, s=t[i], l=s.length, u=0; u<l; ++u)(o=s[u])&&(r.push(e.call(o, o.__data__, u, s)), a.push(o)); return new Selection(r, a);
    }, filter: function(e) {
      'function'!=typeof e&&(e=matcher(e)); for (var t=this._groups, n=t.length, r=new Array(n), a=0; a<n; ++a) for (var i, o=t[a], s=o.length, l=r[a]=[], u=0; u<s; ++u)(i=o[u])&&e.call(i, i.__data__, u, o)&&l.push(i); return new Selection(r, this._parents);
    }, data: function(e, t) {
      if (!e) {
        return p=new Array(this.size()), c=-1, this.each((function(e) {
          p[++c]=e;
        })), p;
      } var n; var r=t?bindKey:bindIndex; var a=this._parents; var i=this._groups; 'function'!=typeof e&&(n=e, e=function() {
        return n;
      }); for (var o=i.length, s=new Array(o), l=new Array(o), u=new Array(o), c=0; c<o; ++c) {
        var h=a[c]; var f=i[c]; var d=f.length; var p=e.call(h, h&&h.__data__, c, a); var m=p.length; var g=l[c]=new Array(m); var v=s[c]=new Array(m); r(h, f, g, v, u[c]=new Array(d), p, t); for (var y, b, w=0, x=0; w<m; ++w) {
          if (y=g[w]) {
            for (w>=x&&(x=w+1); !(b=v[x])&&++x<m;);y._next=b||null;
          }
        }
      } return (s=new Selection(s, a))._enter=l, s._exit=u, s;
    }, enter: function() {
      return new Selection(this._enter||this._groups.map(sparse), this._parents);
    }, exit: function() {
      return new Selection(this._exit||this._groups.map(sparse), this._parents);
    }, join: function(e, t, n) {
      var r=this.enter(); var a=this; var i=this.exit(); return r='function'==typeof e?e(r):r.append(e+''), null!=t&&(a=t(a)), null==n?i.remove():n(i), r&&a?r.merge(a).order():a;
    }, merge: function(e) {
      for (var t=this._groups, n=e._groups, r=t.length, a=n.length, i=Math.min(r, a), o=new Array(r), s=0; s<i; ++s) for (var l, u=t[s], c=n[s], h=u.length, f=o[s]=new Array(h), d=0; d<h; ++d)(l=u[d]||c[d])&&(f[d]=l); for (;s<r; ++s)o[s]=t[s]; return new Selection(o, this._parents);
    }, order: function() {
      for (var e=this._groups, t=-1, n=e.length; ++t<n;) for (var r, a=e[t], i=a.length-1, o=a[i]; --i>=0;)(r=a[i])&&(o&&4^r.compareDocumentPosition(o)&&o.parentNode.insertBefore(r, o), o=r); return this;
    }, sort: function(e) {
      function compareNode(t, n) {
        return t&&n?e(t.__data__, n.__data__):!t-!n;
      }e||(e=sort_ascending); for (var t=this._groups, n=t.length, r=new Array(n), a=0; a<n; ++a) {
        for (var i, o=t[a], s=o.length, l=r[a]=new Array(s), u=0; u<s; ++u)(i=o[u])&&(l[u]=i); l.sort(compareNode);
      } return new Selection(r, this._parents).order();
    }, call: function() {
      var e=arguments[0]; return arguments[0]=this, e.apply(null, arguments), this;
    }, nodes: function() {
      var e=new Array(this.size()); var t=-1; return this.each((function() {
        e[++t]=this;
      })), e;
    }, node: function() {
      for (var e=this._groups, t=0, n=e.length; t<n; ++t) {
        for (var r=e[t], a=0, i=r.length; a<i; ++a) {
          var o=r[a]; if (o) return o;
        }
      } return null;
    }, size: function() {
      var e=0; return this.each((function() {
        ++e;
      })), e;
    }, empty: function() {
      return !this.node();
    }, each: function(e) {
      for (var t=this._groups, n=0, r=t.length; n<r; ++n) for (var a, i=t[n], o=0, s=i.length; o<s; ++o)(a=i[o])&&e.call(a, a.__data__, o, i); return this;
    }, attr: function(e, t) {
      var n=namespace(e); if (arguments.length<2) {
        var r=this.node(); return n.local?r.getAttributeNS(n.space, n.local):r.getAttribute(n);
      } return this.each((null==t?n.local?attrRemoveNS:attrRemove:'function'==typeof t?n.local?attrFunctionNS:attrFunction:n.local?attrConstantNS:attrConstant)(n, t));
    }, style: function(e, t, n) {
      return arguments.length>1?this.each((null==t?styleRemove:'function'==typeof t?styleFunction:styleConstant)(e, t, null==n?'':n)):styleValue(this.node(), e);
    }, property: function(e, t) {
      return arguments.length>1?this.each((null==t?propertyRemove:'function'==typeof t?propertyFunction:propertyConstant)(e, t)):this.node()[e];
    }, classed: function(e, t) {
      var n=classArray(e+''); if (arguments.length<2) {
        for (var r=classList(this.node()), a=-1, i=n.length; ++a<i;) if (!r.contains(n[a])) return !1; return !0;
      } return this.each(('function'==typeof t?classedFunction:t?classedTrue:classedFalse)(n, t));
    }, text: function(e) {
      return arguments.length?this.each(null==e?textRemove:('function'==typeof e?textFunction:textConstant)(e)):this.node().textContent;
    }, html: function(e) {
      return arguments.length?this.each(null==e?htmlRemove:('function'==typeof e?htmlFunction:htmlConstant)(e)):this.node().innerHTML;
    }, raise: function() {
      return this.each(raise_raise);
    }, lower: function() {
      return this.each(lower);
    }, append: function(e) {
      var t='function'==typeof e?e:creator(e); return this.select((function() {
        return this.appendChild(t.apply(this, arguments));
      }));
    }, insert: function(e, t) {
      var n='function'==typeof e?e:creator(e); var r=null==t?constantNull:'function'==typeof t?t:src_selector(t); return this.select((function() {
        return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments)||null);
      }));
    }, remove: function() {
      return this.each(remove_remove);
    }, clone: function(e) {
      return this.select(e?selection_cloneDeep:selection_cloneShallow);
    }, datum: function(e) {
      return arguments.length?this.property('__data__', e):this.node().__data__;
    }, on: function(e, t, n) {
      var r; var a; var i=parseTypenames(e+''); var o=i.length; if (!(arguments.length<2)) {
        for (s=t?onAdd:onRemove, null==n&&(n=!1), r=0; r<o; ++r) this.each(s(i[r], t, n)); return this;
      } var s=this.node().__on; if (s) for (var l, u=0, c=s.length; u<c; ++u) for (r=0, l=s[u]; r<o; ++r) if ((a=i[r]).type===l.type&&a.name===l.name) return l.value;
    }, dispatch: function(e, t) {
      return this.each(('function'==typeof t?dispatchFunction:dispatchConstant)(e, t));
    }}; var gt=selection_selection; var src_select=function(e) {
      return 'string'==typeof e?new Selection([[document.querySelector(e)]], [document.documentElement]):new Selection([[e]], mt);
    }; var vt=n(101); var yt=n.n(vt); function _createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var bt=function(e) {
      m()(BaseChartView, e); var t=_createSuper(BaseChartView); function BaseChartView(e) {
        var n; return s()(this, BaseChartView), n=t.call(this, e), x()(h()(n), 'PAD_LEFT', 50), x()(h()(n), 'PAD_RIGHT', 15), x()(h()(n), 'PAD_TOP', 10), x()(h()(n), 'PAD_BOTTOM', 30), n.options=e, n.firstRender=!0, n;
      } return u()(BaseChartView, [{key: 'onRender', value: function() {
        src_select(window).on('resize.'.concat(this.cid), this.onAttach.bind(this));
      }}, {key: 'onDestroy', value: function() {
        src_select(window).on('resize.'.concat(this.cid), null);
      }}, {key: 'onAttach', value: function() {
        this.firstRender=!1;
      }}, {key: 'setupViewport', value: function() {
        this.width=Math.floor(this.$el.outerWidth())-this.PAD_LEFT-this.PAD_RIGHT, this.height=Math.floor(this.$el.outerHeight())-this.PAD_BOTTOM-this.PAD_TOP, this.$el.html(yt()(this)), this.svg=src_select(this.$el[0]).select('.chart__svg'), this.plot=this.svg.select('.chart__plot');
      }}, {key: 'makeLeftAxis', value: function(e) {
        var t; var n=axis_axis(4, t); return this.makeAxis(n, this.svg.select('.chart__axis_y'), e, {left: this.PAD_LEFT, top: this.PAD_TOP});
      }}, {key: 'makeBottomAxis', value: function(e) {
        var t=axisBottom(); return this.makeAxis(t, this.svg.select('.chart__axis_x'), e, {left: this.PAD_LEFT, top: this.PAD_TOP+this.height});
      }}, {key: 'makeAxis', value: function(e, t, n) {
        var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}; var a=r.left; var i=void 0===a?0:a; var o=r.top; var s=void 0===o?0:o; return Object.keys(n).forEach((function(t) {
          return e[t](n[t]);
        })), t.call(e).attrs({transform: 'translate('.concat(i, ',').concat(s, ')')}), e;
      }}, {key: 'getTooltipContent', value: function() {}}, {key: 'onItemOver', value: function(e) {
        this.showTooltip(e, pt.target);
      }}, {key: 'showTooltip', value: function(e, t) {
        this.tooltip.show(this.getTooltipContent(e), this.$(t));
      }}, {key: 'hideTooltip', value: function() {
        this.tooltip.hide();
      }}, {key: 'bindTooltip', value: function(e) {
        e.on('mouseenter', this.onItemOver.bind(this)).on('mouseleave', this.hideTooltip.bind(this));
      }}]), BaseChartView;
    }(ut.View); var _t=n(25); var wt=n(8); var xt=n(102); var kt=n.n(xt); function ownKeys(e, t) {
      var n=Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r=Object.getOwnPropertySymbols(e); t&&(r=r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), n.push.apply(n, r);
      } return n;
    } function _objectSpread(e) {
      for (var t=1; t<arguments.length; t++) {
        var n=null!=arguments[t]?arguments[t]:{}; t%2?ownKeys(Object(n), !0).forEach((function(t) {
          x()(e, t, n[t]);
        })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }));
      } return e;
    } function TrendChartView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Ct=function(e) {
      m()(TrendChartView, e); var t=TrendChartView_createSuper(TrendChartView); function TrendChartView() {
        var e; s()(this, TrendChartView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'PAD_BOTTOM', 50), e;
      } return u()(TrendChartView, [{key: 'initialize', value: function(e) {
        this.x=band_point(), this.y=linear_linear(), this.tooltip=new _t.a({position: 'top'}), this.keys=e.keys||this.model.keys(), this.stack=function() {
          var e=d3_shape_src_constant([]); var t=order_none; var n=none; var r=stackValue; function stack(a) {
            var i; var o; var s=e.apply(this, arguments); var l=a.length; var u=s.length; var c=new Array(u); for (i=0; i<u; ++i) {
              for (var h, f=s[i], d=c[i]=new Array(l), p=0; p<l; ++p)d[p]=h=[0, +r(a[p], f, p, a)], h.data=a[p]; d.key=f;
            } for (i=0, o=t(c); i<u; ++i)c[o[i]].index=i; return n(c, o), c;
          } return stack.keys=function(t) {
            return arguments.length?(e='function'==typeof t?t:d3_shape_src_constant(at.call(t)), stack):e;
          }, stack.value=function(e) {
            return arguments.length?(r='function'==typeof e?e:d3_shape_src_constant(+e), stack):r;
          }, stack.order=function(e) {
            return arguments.length?(t=null==e?order_none:'function'==typeof e?e:d3_shape_src_constant(at.call(e)), stack):t;
          }, stack.offset=function(e) {
            return arguments.length?(n=null==e?none:e, stack):n;
          }, stack;
        }().keys(this.keys).value((function(e, t) {
          return e.data[t]||0;
        })), this.color=e.colors||ordinal(Ye), e.notStacked&&this.stack.offset((function() {})), this.yTickFormat=e.yTickFormat||function(e) {
          return e;
        };
      }}, {key: 'onAttach', value: function() {
        var e=this.model.toJSON(); e&&e.length>1?this.doShow(e):this.$el.html('<div class="widget__noitems">'.concat(Object(wt.default)('chart.trend.empty'), '</div>')), d()(b()(TrendChartView.prototype), 'onAttach', this).call(this);
      }}, {key: 'doShow', value: function(e) {
        this.setupViewport(), this.x.range([0, this.width]), this.y.range([this.height, 0]), this.x.domain(e.map((function(e) {
          return e.id;
        }))), this.y.domain([0, src_max(e, (function(e) {
          return e.total;
        }))]).nice(); var t=this.stack(e); this.makeBottomAxis({scale: this.x, tickFormat: function(t, n) {
          return e[n].name;
        }}), this.makeLeftAxis({scale: this.y, tickFormat: this.yTickFormat}), 'rtl'===document.dir?this.svg.selectAll('.chart__axis_x').selectAll('text').style('text-anchor', 'start'):this.svg.selectAll('.chart__axis_x').selectAll('text').style('text-anchor', 'end'), this.svg.selectAll('.chart__axis_x').selectAll('text').attr('dx', '-.8em').attr('dy', '-.6em').attr('transform', 'rotate(-90)'), this.options.hideAreas||this.showAreas(t), this.options.hideLines||this.showLines(t), this.options.hidePoints||this.showPoints(t), this.showSlices(e);
      }}, {key: 'showAreas', value: function(e) {
        var t=this; var n=function() {
          var e=point_x; var t=null; var n=d3_shape_src_constant(0); var r=point_y; var a=d3_shape_src_constant(!0); var i=null; var o=curve_linear; var s=null; function area(l) {
            var u; var c; var h; var f; var d; var p=l.length; var m=!1; var g=new Array(p); var v=new Array(p); for (null==i&&(s=o(d=lt())), u=0; u<=p; ++u) {
              if (!(u<p&&a(f=l[u], u, l))===m) {
                if (m=!m)c=u, s.areaStart(), s.lineStart(); else {
                  for (s.lineEnd(), s.lineStart(), h=u-1; h>=c; --h)s.point(g[h], v[h]); s.lineEnd(), s.areaEnd();
                }
              }m&&(g[u]=+e(f, u, l), v[u]=+n(f, u, l), s.point(t?+t(f, u, l):g[u], r?+r(f, u, l):v[u]));
            } if (d) return s=null, d+''||null;
          } function arealine() {
            return src_line().defined(a).curve(o).context(i);
          } return area.x=function(n) {
            return arguments.length?(e='function'==typeof n?n:d3_shape_src_constant(+n), t=null, area):e;
          }, area.x0=function(t) {
            return arguments.length?(e='function'==typeof t?t:d3_shape_src_constant(+t), area):e;
          }, area.x1=function(e) {
            return arguments.length?(t=null==e?null:'function'==typeof e?e:d3_shape_src_constant(+e), area):t;
          }, area.y=function(e) {
            return arguments.length?(n='function'==typeof e?e:d3_shape_src_constant(+e), r=null, area):n;
          }, area.y0=function(e) {
            return arguments.length?(n='function'==typeof e?e:d3_shape_src_constant(+e), area):n;
          }, area.y1=function(e) {
            return arguments.length?(r=null==e?null:'function'==typeof e?e:d3_shape_src_constant(+e), area):r;
          }, area.lineX0=area.lineY0=function() {
            return arealine().x(e).y(n);
          }, area.lineY1=function() {
            return arealine().x(e).y(r);
          }, area.lineX1=function() {
            return arealine().x(t).y(n);
          }, area.defined=function(e) {
            return arguments.length?(a='function'==typeof e?e:d3_shape_src_constant(!!e), area):a;
          }, area.curve=function(e) {
            return arguments.length?(o=e, null!=i&&(s=o(i)), area):o;
          }, area.context=function(e) {
            return arguments.length?(null==e?i=s=null:s=o(i=e), area):i;
          }, area;
        }().x((function(e) {
          return t.x(e.data.id);
        })).y0((function(e) {
          return t.y(e[0]);
        })).y1((function(e) {
          return t.y(e[1]);
        })); this.plot.selectAll('.trend__area').data(e).enter().append('path').attr('class', 'trend__area').attr('d', n).style('fill', (function(e) {
          return t.color(e.key);
        })).style('opacity', .85);
      }}, {key: 'showLines', value: function(e) {
        var t=this; var n=src_line().x((function(e) {
          return t.x(e.data.id);
        })).y((function(e) {
          return t.y(e[1]);
        })); this.plot.selectAll('.trend__line').data(e).enter().append('path').attr('class', '.trend__line').attr('d', n).style('stroke-width', 2).style('stroke', (function(e) {
          return t.color(e.key);
        }));
      }}, {key: 'showPoints', value: function(e) {
        var t=this; this.plot.selectAll('.trend_points').data(e).enter().append('g').attr('class', '.trend_point').style('fill', (function(e) {
          return t.color(e.key);
        })).selectAll('.trend_point').data((function(e) {
          return e;
        })).enter().append('circle').attr('r', 2).attr('cx', (function(e) {
          return t.x(e.data.id);
        })).attr('cy', (function(e) {
          return t.y(e[1]);
        })).attr('class', 'trend_point');
      }}, {key: 'showSlices', value: function(e) {
        var t=this; this.plot.selectAll('.slice').data(e).enter().append('g').attr('class', 'slice'), this.plot.selectAll('.slice').filter((function(e) {
          return e.reportUrl;
        })).append('a').attr('class', 'edge').filter((function(e) {
          return e.reportUrl;
        })).attr('xlink:href', (function(e) {
          return e.reportUrl;
        })), this.plot.selectAll('.slice').filter((function(e) {
          return !e.reportUrl;
        })).append('g').attr('class', 'edge'), this.plot.selectAll('.edge').append('line').attr('id', (function(e) {
          return e.id;
        })).attr('x1', (function(e) {
          return t.x(e.id);
        })).attr('y1', (function(e) {
          return t.y(e.total);
        })).attr('x2', (function(e) {
          return t.x(e.id);
        })).attr('y2', this.y(0)).attr('stroke', 'white').attr('stroke-width', 1).attr('class', 'report-line'), this.plot.selectAll('.edge').append('rect').style('opacity', 0).attr('class', 'report-edge').attr('x', (function(e, n) {
          return n>0?t.x(e.id)-t.x.step()/2:0;
        })).attr('y', 0).attr('height', this.height).attr('width', (function(e, n) {
          return 0===n||t.x(e.id)===t.width?t.x.step()/2:t.x.step();
        })).on('mouseover', (function(e) {
          var n=t.plot.append('circle').attr('class', 'anchor').attr('cx', ''.concat(t.x(e.id))).attr('cy', ''.concat(t.y(e.total/2))); t.showTooltip(e, n.node());
        })).on('mouseout', (function() {
          t.plot.selectAll('.anchor').remove(), t.hideTooltip();
        }));
      }}, {key: 'getTooltipContent', value: function(e) {
        var t=this; var n=_objectSpread(_objectSpread({}, e), {}, {data: this.keys.map((function(n) {
          return {key: n, num: t.yTickFormat(e.data[n]), color: t.color(n)};
        })).filter((function(e) {
          return !!e.num;
        })).reverse()}); return kt()(n);
      }}]), TrendChartView;
    }(bt); var St=n(10); var Ot=n(103); var Tt=n.n(Ot); function WidgetStatusView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Et=function(e) {
      m()(WidgetStatusView, e); var t=WidgetStatusView_createSuper(WidgetStatusView); function WidgetStatusView() {
        var e; s()(this, WidgetStatusView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', Tt.a), e;
      } return u()(WidgetStatusView, [{key: 'serializeData', value: function() {
        var e=void 0===this.showLinks||this.showLinks; var t=void 0===this.showAll||this.showAll; return Object.assign(d()(b()(WidgetStatusView.prototype), 'serializeData', this).call(this), {rowTag: e?'a':'span', title: this.title, showAll: t, baseUrl: this.baseUrl});
      }}]), WidgetStatusView;
    }(St.View); var Rt=n(14); function TrendCollection_ownKeys(e, t) {
      var n=Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r=Object.getOwnPropertySymbols(e); t&&(r=r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), n.push.apply(n, r);
      } return n;
    } function TrendCollection_objectSpread(e) {
      for (var t=1; t<arguments.length; t++) {
        var n=null!=arguments[t]?arguments[t]:{}; t%2?TrendCollection_ownKeys(Object(n), !0).forEach((function(t) {
          x()(e, t, n[t]);
        })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):TrendCollection_ownKeys(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }));
      } return e;
    } function TrendCollection_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Pt; var Mt=function(e) {
      m()(TrendCollection, e); var t=TrendCollection_createSuper(TrendCollection); function TrendCollection() {
        return s()(this, TrendCollection), t.apply(this, arguments);
      } return u()(TrendCollection, [{key: 'initialize', value: function(e, t) {
        this.options=t;
      }}, {key: 'url', value: function() {
        return 'widgets/'.concat(this.options.name, '.json');
      }}, {key: 'parse', value: function(e) {
        return e.reverse().map((function(e, t) {
          return TrendCollection_objectSpread(TrendCollection_objectSpread({}, e), {}, {id: t, name: e.buildOrder?'#'.concat(e.buildOrder):'', total: Object(Rt.values)(Object(Rt.omit)(e.data, 'total')).reduce((function(e, t) {
            return e+t;
          }), 0), data: Object(Rt.omit)(e.data, 'total')});
        }));
      }}, {key: 'keys', value: function() {
        return Object(Rt.uniq)(Object(Rt.flatten)(this.map((function(e) {
          return Object(Rt.keys)(e.get('data'));
        }))));
      }}, {key: 'sortedKeysByLastValue', value: function() {
        var e=this.keys(); var t=this.last().get('data'); return e.sort((function(e, n) {
          return (t[n]||0)-(t[e]||0);
        }));
      }}]), TrendCollection;
    }(ut.Collection); var At=n(26); var jt=n(46); var Nt=n(1); var Dt=(n(194), n(104)); var Vt=n.n(Dt); function EmptyView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Lt; var Bt=Object(Nt.b)('empty-view')(Pt=function(e) {
      m()(EmptyView, e); var t=EmptyView_createSuper(EmptyView); function EmptyView() {
        var e; s()(this, EmptyView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', Vt.a), e;
      } return u()(EmptyView, [{key: 'serializeData', value: function() {
        return {cls: this.className, message: this.options.message};
      }}]), EmptyView;
    }(St.View))||Pt; var It=n(33); var zt=(n(195), 'undefined'!=typeof window?window:null); var Ft=null===zt; var Ut=Ft?void 0:zt.document; var NOOP=function() {
      return !1;
    }; var Ht=Ft?'calc':['', '-webkit-', '-moz-', '-o-'].filter((function(e) {
      var t=Ut.createElement('div'); return t.style.cssText='width:'+e+'calc(9px)', !!t.style.length;
    })).shift()+'calc'; var isString=function(e) {
      return 'string'==typeof e||e instanceof String;
    }; var elementOrSelector=function(e) {
      if (isString(e)) {
        var t=Ut.querySelector(e); if (!t) throw new Error('Selector '+e+' did not match a DOM element'); return t;
      } return e;
    }; var getOption=function(e, t, n) {
      var r=e[t]; return void 0!==r?r:n;
    }; var getGutterSize=function(e, t, n, r) {
      if (t) {
        if ('end'===r) return 0; if ('center'===r) return e/2;
      } else if (n) {
        if ('start'===r) return 0; if ('center'===r) return e/2;
      } return e;
    }; var defaultGutterFn=function(e, t) {
      var n=Ut.createElement('div'); return n.className='gutter gutter-'+t, n;
    }; var defaultElementStyleFn=function(e, t, n) {
      var r={}; return isString(t)?r[e]=t:r[e]=Ht+'('+t+'% - '+n+'px)', r;
    }; var defaultGutterStyleFn=function(e, t) {
      var n; return (n={})[e]=t+'px', n;
    }; var split_es=function(e, t) {
      if (void 0===t&&(t={}), Ft) return {}; var n; var r; var a; var i; var o; var s; var l=e; Array.from&&(l=Array.from(l)); var u=elementOrSelector(l[0]).parentNode; var c=getComputedStyle?getComputedStyle(u):null; var h=c?c.flexDirection:null; var f=getOption(t, 'sizes')||l.map((function() {
        return 100/l.length;
      })); var d=getOption(t, 'minSize', 100); var p=Array.isArray(d)?d:l.map((function() {
        return d;
      })); var m=getOption(t, 'maxSize', 1/0); var g=Array.isArray(m)?m:l.map((function() {
        return m;
      })); var v=getOption(t, 'expandToMin', !1); var y=getOption(t, 'gutterSize', 10); var b=getOption(t, 'gutterAlign', 'center'); var w=getOption(t, 'snapOffset', 30); var x=Array.isArray(w)?w:l.map((function() {
        return w;
      })); var k=getOption(t, 'dragInterval', 1); var C=getOption(t, 'direction', 'horizontal'); var S=getOption(t, 'cursor', 'horizontal'===C?'col-resize':'row-resize'); var O=getOption(t, 'gutter', defaultGutterFn); var T=getOption(t, 'elementStyle', defaultElementStyleFn); var E=getOption(t, 'gutterStyle', defaultGutterStyleFn); function setElementSize(e, t, r, a) {
        var i=T(n, t, r, a); Object.keys(i).forEach((function(t) {
          e.style[t]=i[t];
        }));
      } function getSizes() {
        return s.map((function(e) {
          return e.size;
        }));
      } function getMousePosition(e) {
        return 'touches'in e?e.touches[0][r]:e[r];
      } function adjust(e) {
        var t=s[this.a]; var n=s[this.b]; var r=t.size+n.size; t.size=e/this.size*r, n.size=r-e/this.size*r, setElementSize(t.element, t.size, this._b, t.i), setElementSize(n.element, n.size, this._c, n.i);
      } function drag(e) {
        var n; var r=s[this.a]; var a=s[this.b]; this.dragging&&(n=getMousePosition(e)-this.start+(this._b-this.dragOffset), k>1&&(n=Math.round(n/k)*k), n<=r.minSize+r.snapOffset+this._b?n=r.minSize+this._b:n>=this.size-(a.minSize+a.snapOffset+this._c)&&(n=this.size-(a.minSize+this._c)), n>=r.maxSize-r.snapOffset+this._b?n=r.maxSize+this._b:n<=this.size-(a.maxSize-a.snapOffset+this._c)&&(n=this.size-(a.maxSize+this._c)), adjust.call(this, n), getOption(t, 'onDrag', NOOP)(getSizes()));
      } function calculateSizes() {
        var e=s[this.a].element; var t=s[this.b].element; var r=e.getBoundingClientRect(); var o=t.getBoundingClientRect(); this.size=r[n]+o[n]+this._b+this._c, this.start=r[a], this.end=r[i];
      } function trimToMin(e) {
        var t=function(e) {
          if (!getComputedStyle) return null; var t=getComputedStyle(e); if (!t) return null; var n=e[o]; return 0===n?null:n-='horizontal'===C?parseFloat(t.paddingLeft)+parseFloat(t.paddingRight):parseFloat(t.paddingTop)+parseFloat(t.paddingBottom);
        }(u); if (null===t) return e; if (p.reduce((function(e, t) {
          return e+t;
        }), 0)>t) return e; var n=0; var r=[]; var a=e.map((function(a, i) {
          var o=t*a/100; var s=getGutterSize(y, 0===i, i===e.length-1, b); var l=p[i]+s; return o<l?(n+=l-o, r.push(0), l):(r.push(o-l), o);
        })); return 0===n?e:a.map((function(e, a) {
          var i=e; if (n>0&&r[a]-n>0) {
            var o=Math.min(n, r[a]-n); n-=o, i=e-o;
          } return i/t*100;
        }));
      } function stopDragging() {
        var e=s[this.a].element; var n=s[this.b].element; this.dragging&&getOption(t, 'onDragEnd', NOOP)(getSizes()), this.dragging=!1, zt.removeEventListener('mouseup', this.stop), zt.removeEventListener('touchend', this.stop), zt.removeEventListener('touchcancel', this.stop), zt.removeEventListener('mousemove', this.move), zt.removeEventListener('touchmove', this.move), this.stop=null, this.move=null, e.removeEventListener('selectstart', NOOP), e.removeEventListener('dragstart', NOOP), n.removeEventListener('selectstart', NOOP), n.removeEventListener('dragstart', NOOP), e.style.userSelect='', e.style.webkitUserSelect='', e.style.MozUserSelect='', e.style.pointerEvents='', n.style.userSelect='', n.style.webkitUserSelect='', n.style.MozUserSelect='', n.style.pointerEvents='', this.gutter.style.cursor='', this.parent.style.cursor='', Ut.body.style.cursor='';
      } function startDragging(e) {
        if (!('button'in e)||0===e.button) {
          var n=s[this.a].element; var r=s[this.b].element; this.dragging||getOption(t, 'onDragStart', NOOP)(getSizes()), e.preventDefault(), this.dragging=!0, this.move=drag.bind(this), this.stop=stopDragging.bind(this), zt.addEventListener('mouseup', this.stop), zt.addEventListener('touchend', this.stop), zt.addEventListener('touchcancel', this.stop), zt.addEventListener('mousemove', this.move), zt.addEventListener('touchmove', this.move), n.addEventListener('selectstart', NOOP), n.addEventListener('dragstart', NOOP), r.addEventListener('selectstart', NOOP), r.addEventListener('dragstart', NOOP), n.style.userSelect='none', n.style.webkitUserSelect='none', n.style.MozUserSelect='none', n.style.pointerEvents='none', r.style.userSelect='none', r.style.webkitUserSelect='none', r.style.MozUserSelect='none', r.style.pointerEvents='none', this.gutter.style.cursor=S, this.parent.style.cursor=S, Ut.body.style.cursor=S, calculateSizes.call(this), this.dragOffset=getMousePosition(e)-this.end;
        }
      }'horizontal'===C?(n='width', r='clientX', a='left', i='right', o='clientWidth'):'vertical'===C&&(n='height', r='clientY', a='top', i='bottom', o='clientHeight'), f=trimToMin(f); var R=[]; function adjustToMin(e) {
        var t=e.i===R.length; var n=t?R[e.i-1]:R[e.i]; calculateSizes.call(n); var r=t?n.size-e.minSize-n._c:e.minSize+n._b; adjust.call(n, r);
      } return (s=l.map((function(e, t) {
        var r; var a={element: elementOrSelector(e), size: f[t], minSize: p[t], maxSize: g[t], snapOffset: x[t], i: t}; if (t>0&&((r={a: t-1, b: t, dragging: !1, direction: C, parent: u})._b=getGutterSize(y, t-1==0, !1, b), r._c=getGutterSize(y, !1, t===l.length-1, b), 'row-reverse'===h||'column-reverse'===h)) {
          var i=r.a; r.a=r.b, r.b=i;
        } if (t>0) {
          var o=O(t, C, a.element); !function(e, t, r) {
            var a=E(n, t, r); Object.keys(a).forEach((function(t) {
              e.style[t]=a[t];
            }));
          }(o, y, t), r._a=startDragging.bind(r), o.addEventListener('mousedown', r._a), o.addEventListener('touchstart', r._a), u.insertBefore(o, a.element), r.gutter=o;
        } return setElementSize(a.element, a.size, getGutterSize(y, 0===t, t===l.length-1, b), t), t>0&&R.push(r), a;
      }))).forEach((function(e) {
        var t=e.element.getBoundingClientRect()[n]; t<e.minSize&&(v?adjustToMin(e):e.minSize=t);
      })), {setSizes: function(e) {
        var t=trimToMin(e); t.forEach((function(e, n) {
          if (n>0) {
            var r=R[n-1]; var a=s[r.a]; var i=s[r.b]; a.size=t[n-1], i.size=e, setElementSize(a.element, a.size, r._b, a.i), setElementSize(i.element, i.size, r._c, i.i);
          }
        }));
      }, getSizes: getSizes, collapse: function(e) {
        adjustToMin(s[e]);
      }, destroy: function(e, t) {
        R.forEach((function(r) {
          if (!0!==t?r.parent.removeChild(r.gutter):(r.gutter.removeEventListener('mousedown', r._a), r.gutter.removeEventListener('touchstart', r._a)), !0!==e) {
            var a=T(n, r.a.size, r._b); Object.keys(a).forEach((function(e) {
              s[r.a].element.style[e]='', s[r.b].element.style[e]='';
            }));
          }
        }));
      }, parent: u, pairs: R};
    }; var qt=n(27); var Wt=n(105); var $t=n.n(Wt); function SideBySideView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Gt; var Yt; var Kt; var Xt; var Zt=Object(Nt.b)('side-by-side')(Lt=Object(Nt.e)({left: '.side-by-side__left', right: '.side-by-side__right'})(Lt=function(e) {
      m()(SideBySideView, e); var t=SideBySideView_createSuper(SideBySideView); function SideBySideView() {
        var e; s()(this, SideBySideView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', $t.a), e;
      } return u()(SideBySideView, [{key: 'onAttach', value: function() {
        var e=split_es(['.side-by-side__left', '.side-by-side__right'], {gutterSize: 7, sizes: qt.a.getSideBySidePosition(), onDragEnd: function() {
          qt.a.setSideBySidePosition(e.getSizes());
        }});
      }}, {key: 'onRender', value: function() {
        var e=this.options; var t=e.left; var n=e.right; this.showChildView('left', t), this.showChildView('right', n);
      }}, {key: 'templateContext', value: function() {
        return {cls: 'side-by-side'};
      }}]), SideBySideView;
    }(St.View))||Lt)||Lt; var Jt=n(47); var Qt=n(12); var en=n.n(Qt); var tn=(n(196), n(35)); var nn=(n(197), ['flaky', 'newFailed', 'newPassed', 'newBroken', 'retriesStatusChange']); var rn=n(106); var an=n.n(rn); function MarksToggleView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var sn; var ln; var un; var cn; var hn=(Gt=Object(Nt.b)('marks-toggle'), Yt=Object(Nt.c)('click .y-label-mark, .n-label-mark'), Gt((Xt=function(e) {
      m()(MarksToggleView, e); var t=MarksToggleView_createSuper(MarksToggleView); function MarksToggleView() {
        var e; s()(this, MarksToggleView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', an.a), e;
      } return u()(MarksToggleView, [{key: 'initialize', value: function(e) {
        var t=e.settings; this.settings=t, this.listenTo(t, 'change', this.render);
      }}, {key: 'serializeData', value: function() {
        var e=this; var t=this.settings.getVisibleMarks(); return {marks: nn.map((function(n) {
          return {mark: n, markName: Object(wt.default)('marks.'.concat(n), {}), active: !!t[n], count: e.statistic?e.statistic[status.toLowerCase()]:0};
        }))};
      }}, {key: 'onToggleMark', value: function(e) {
        var t=this.$(e.currentTarget); var n=t.data('mark'); var r=t.hasClass('n-label-mark'); var a=this.settings.getVisibleMarks(); this.settings.setVisibleMarks(Object.assign({}, a, x()({}, n, r)));
      }}]), MarksToggleView;
    }(St.View), en()(Xt.prototype, 'onToggleMark', [Yt], Object.getOwnPropertyDescriptor(Xt.prototype, 'onToggleMark'), Xt.prototype), Kt=Xt))||Kt); var fn=(n(198), n(107)); var dn=n.n(fn); function NodeSearchView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var pn; var mn; var gn; var vn; var yn=(sn=Object(Nt.b)('search'), ln=Object(Nt.c)('input input'), sn((cn=function(e) {
      m()(NodeSearchView, e); var t=NodeSearchView_createSuper(NodeSearchView); function NodeSearchView() {
        var e; s()(this, NodeSearchView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', dn.a), e;
      } return u()(NodeSearchView, [{key: 'initialize', value: function(e) {
        var t=e.state; this.state=t;
      }}, {key: 'onRender', value: function() {
        this.$('input').val(this.state.get('searchQuery'));
      }}, {key: 'onChangeSorting', value: function(e) {
        this.state.set('searchQuery', e.target.value);
      }}, {key: 'close', value: function() {
        this.state.set('searchQuery', '');
      }}]), NodeSearchView;
    }(St.View), en()(cn.prototype, 'onChangeSorting', [ln], Object.getOwnPropertyDescriptor(cn.prototype, 'onChangeSorting'), cn.prototype), un=cn))||un); var bn=(n(199), n(108)); var _n=n.n(bn); function NodeSorterView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var wn; var xn; var kn; var Cn; var Sn=['sorter.order', 'sorter.name', 'sorter.duration', 'sorter.status']; var On=(pn=Object(Nt.b)('sorter'), mn=Object(Nt.c)('click .sorter__item'), pn((vn=function(e) {
      m()(NodeSorterView, e); var t=NodeSorterView_createSuper(NodeSorterView); function NodeSorterView() {
        var e; s()(this, NodeSorterView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', _n.a), e;
      } return u()(NodeSorterView, [{key: 'initialize', value: function(e) {
        var t=e.settings; this.settings=t;
      }}, {key: 'onChangeSorting', value: function(e) {
        var t=this.$(e.currentTarget); this.settings.setTreeSorting({sorter: t.data('name'), ascending: !t.data('asc')}); var n=t.data('asc'); this.$('.sorter_enabled').toggleClass('sorter_enabled'), t.data('asc', !n), t.find('.sorter__name').toggleClass('sorter_enabled'), t.find(n?'.fa-sort-asc':'.fa-sort-desc').toggleClass('sorter_enabled');
      }}, {key: 'serializeData', value: function() {
        var e=this.settings.getTreeSorting(); return {sorters: Sn.map((function(t) {
          return {name: t, asc: e.sorter===t&&e.ascending, desc: e.sorter===t&&!e.ascending};
        }))};
      }}]), NodeSorterView;
    }(St.View), en()(vn.prototype, 'onChangeSorting', [mn], Object.getOwnPropertyDescriptor(vn.prototype, 'onChangeSorting'), vn.prototype), gn=vn))||gn); var Tn=(n(201), n(20)); var En=n(109); var Rn=n.n(En); function StatusToggleView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Pn=(wn=Object(Nt.b)('status-toggle'), xn=Object(Nt.c)('click .y-label, .n-label'), wn((Cn=function(e) {
      m()(StatusToggleView, e); var t=StatusToggleView_createSuper(StatusToggleView); function StatusToggleView() {
        var e; s()(this, StatusToggleView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', Rn.a), e;
      } return u()(StatusToggleView, [{key: 'initialize', value: function(e) {
        var t=e.settings; var n=e.statistic; this.settings=t, this.statistic=n, this.listenTo(t, 'change', this.render);
      }}, {key: 'serializeData', value: function() {
        var e=this; var t=this.settings.getVisibleStatuses(); return {statuses: Tn.a.map((function(n) {
          return {status: n, statusName: Object(wt.default)('status.'.concat(n), {}), active: !!t[n], count: e.statistic?e.statistic[n.toLowerCase()]:0};
        }))};
      }}, {key: 'onToggleStatus', value: function(e) {
        var t=this.$(e.currentTarget); var n=t.data('status'); var r=t.hasClass('n-label'); var a=this.settings.getVisibleStatuses(); this.settings.setVisibleStatuses(Object.assign({}, a, x()({}, n, r)));
      }}]), StatusToggleView;
    }(St.View), en()(Cn.prototype, 'onToggleStatus', [xn], Object.getOwnPropertyDescriptor(Cn.prototype, 'onToggleStatus'), Cn.prototype), kn=Cn))||kn); n(202); function byOrder(e, t) {
      return e.order<t.order?-1:1;
    } function byName(e, t) {
      return String(e.name).toLowerCase()<String(t.name).toLowerCase()?-1:1;
    } function byDuration(e, t) {
      return e.time&&e.time.duration&&t.time&&t.time.duration&&e.time.duration<t.time.duration?-1:1;
    } function byMaxDuration(e, t) {
      return e.time&&e.time.maxDuration&&t.time&&t.time.maxDuration&&e.time.maxDuration<t.time.maxDuration?-1:1;
    } function byNodeStatus(e, t) {
      return Tn.a.indexOf(e.status)>Tn.a.indexOf(t.status)?-1:1;
    } function byGroupStatuses(e, t) {
      return Tn.a.reduce((function(n, r) {
        return e.statistic[r]!==t.statistic[r]&&0===n?e.statistic[r]-t.statistic[r]:n;
      }), 0);
    } function comparator_compare(e, t, n, r, a) {
      return e.children&&!t.children?-1:!e.children&&t.children?1:e.children&&t.children?a*r(e, t):e.children||t.children?0:a*n(e, t);
    } function getComparator(e) {
      var t=e.sorter; var n=e.ascending?1:-1; switch (t) {
        case 'sorter.order': return function(e, t) {
          return comparator_compare(e, t, byOrder, byName, n);
        }; case 'sorter.name': return function(e, t) {
          return comparator_compare(e, t, byName, byName, n);
        }; case 'sorter.duration': return function(e, t) {
          return comparator_compare(e, t, byDuration, byMaxDuration, n);
        }; case 'sorter.status': return function(e, t) {
          return comparator_compare(e, t, byNodeStatus, byGroupStatuses, n);
        }; default: return 0;
      }
    } function byCriteria(e) {
      return e&&e.startsWith('tag:')?function byTags(e) {
        var t=(e=e&&e.toLowerCase().trim()||'').split(/\s*,\s*/).filter((function(e) {
          return e;
        })); return function(n) {
          var r=Array.isArray(n.tags)?n.tags.filter((function(e) {
            return e;
          })).map((function(e) {
            return e.toLowerCase().trim();
          })):[]; return !e||t.every((function(e) {
            return r.indexOf(e)>-1;
          }))||n.children&&n.children.some(byTags(e));
        };
      }(e.substring(4)):function byText(e) {
        return e=e&&e.toLowerCase()||'', function(t) {
          return !e||t.name.toLowerCase().indexOf(e)>-1||t.children&&t.children.some(byText(e));
        };
      }(e);
    } var Mn=n(16); function hotkeys_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var An; var jn; var Nn; var Dn; var Vn; var Ln={27: 'esc', 37: 'left', 38: 'up', 39: 'right', 40: 'down'}; var Bn=new(function(e) {
      m()(HotkeysService, e); var t=hotkeys_createSuper(HotkeysService); function HotkeysService() {
        return s()(this, HotkeysService), t.apply(this, arguments);
      } return u()(HotkeysService, [{key: 'initialize', value: function() {
        a()(document).on('keydown', this.keyHandler.bind(this));
      }}, {key: 'keyHandler', value: function(e) {
        var t=Ln[e.keyCode]; t&&this.trigger('key:'.concat(t), e);
      }}]), HotkeysService;
    }(St.Object)); var In=n(110); var zn=n.n(In); function TreeView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Fn; var Un; var Hn; var qn; var Wn; var $n; var Gn=(An=Object(Nt.b)('tree'), jn=Object(Nt.a)('TooltipBehavior', {position: 'bottom'}), Nn=Object(Nt.c)('click .node__title'), An(Dn=jn((Vn=function(e) {
      m()(TreeView, e); var t=TreeView_createSuper(TreeView); function TreeView() {
        var e; s()(this, TreeView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', zn.a), x()(h()(e), 'cachedQuery', ''), e;
      } return u()(TreeView, [{key: 'initialize', value: function(e) {
        var t=e.routeState; var n=e.state; var r=e.tabName; var a=e.baseUrl; var i=e.settings; this.state=n, this.routeState=t, this.baseUrl=a, this.tabName=r, this.setState(), this.listenTo(this.routeState, 'change:treeNode', this.selectNode), this.listenTo(this.routeState, 'change:testResultTab', this.render), this.settings=i, this.listenTo(this.settings, 'change', this.render), this.listenTo(this.state, 'change', this.handleStateChange), this.listenTo(Bn, 'key:up', this.onKeyUp, this), this.listenTo(Bn, 'key:down', this.onKeyDown, this), this.listenTo(Bn, 'key:esc', this.onKeyBack, this), this.listenTo(Bn, 'key:left', this.onKeyBack, this);
      }}, {key: 'applyFilters', value: function() {
        var e; var t; var n=this.settings.getVisibleStatuses(); var r=this.settings.getVisibleMarks(); var a=function() {
          for (var e=arguments.length, t=new Array(e), n=0; n<e; n++)t[n]=arguments[n]; return function(e) {
            var n=!0; return t.forEach((function(t) {
              n=n&&t(e);
            })), n;
          };
        }(byCriteria(this.state.get('searchQuery')), (t=n, function(e) {
          return e.children?e.children.length>0:t[e.status];
        }), (e=r, function(t) {
          return t.children?t.children.length>0:nn.map((function(n) {
            return !e[n]||t[n];
          })).reduce((function(e, t) {
            return e&&t;
          }), !0);
        })); var i=getComparator(this.settings.getTreeSorting()); this.collection.applyFilterAndSorting(a, i);
      }}, {key: 'setState', value: function() {
        var e=this.routeState.get('treeNode'); if (e&&e.testResult) {
          var t=e.testResult; this.state.set(t, !0);
        } if (e&&e.testGroup) {
          var n=e.testGroup; this.state.set(n, !0);
        }
      }}, {key: 'onBeforeRender', value: function() {
        this.applyFilters();
      }}, {key: 'handleStateChange', value: function() {
        var e=this.state.get('searchQuery'); e!==this.cachedQuery&&(this.cachedQuery=e, this.render());
      }}, {key: 'onRender', value: function() {
        var e=this; this.selectNode(), this.state.get('searchQuery')?this.$('.node__title').each((function(t, n) {
          e.$(n).parent().addClass('node__expanded');
        })):this.restoreState();
      }}, {key: 'selectNode', value: function() {
        var e=this.routeState.previous('treeNode'); this.toggleNode(e, !1); var t=this.routeState.get('treeNode'); this.toggleNode(t, !0), this.restoreState();
      }}, {key: 'toggleNode', value: function(e) {
        var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]; if (e) {
          var n=this.findElement(e); n.toggleClass('node__title_active', t), this.changeState(e.testResult), this.changeState(e.testGroup);
        }
      }}, {key: 'changeState', value: function(e) {
        var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]; t?this.state.set(e, !0):this.state.unset(e);
      }}, {key: 'restoreState', value: function() {
        var e=this; this.$('[data-uid]').each((function(t, n) {
          var r=e.$(n); var a=r.data('uid'); r.toggleClass('node__expanded', e.state.has(a));
        })), this.$('.node__title_active').parents('.node').toggleClass('node__expanded', !0), this.$('.node').parents('.node__expanded').length>0?this.$('.node__expanded').parents('div.node.node__expanded').toggleClass('node__expanded', !0):this.$('.node__expanded').parents('.node').toggleClass('node__expanded', !0);
      }}, {key: 'findElement', value: function(e) {
        return e.testResult?this.$('[data-uid=\''.concat(e.testResult, '\'][data-parentUid=\'').concat(e.testGroup, '\']')):this.$('[data-uid=\''.concat(e.testGroup, '\']'));
      }}, {key: 'onNodeClick', value: function(e) {
        var t=this.$(e.currentTarget); var n=t.data('uid'); this.changeState(n, !this.state.has(n)), t.parent().toggleClass('node__expanded');
      }}, {key: 'onKeyUp', value: function(e) {
        e.preventDefault(); var t=this.routeState.get('treeNode'); t&&t.testResult?this.selectTestResult(this.collection.getPreviousTestResult(t.testResult)):this.selectTestResult(this.collection.getLastTestResult());
      }}, {key: 'onKeyDown', value: function(e) {
        e.preventDefault(); var t=this.routeState.get('treeNode'); t&&t.testResult?this.selectTestResult(this.collection.getNextTestResult(t.testResult)):this.selectTestResult(this.collection.getFirstTestResult());
      }}, {key: 'onKeyBack', value: function(e) {
        e.preventDefault(); var t=this.routeState.get('treeNode'); t&&(t.testGroup&&t.testResult?this.routeState.get('attachment')?Mn.a.setSearch({attachment: null}):Mn.a.toUrl(''.concat(this.baseUrl, '/').concat(t.testGroup)):t.testGroup&&Mn.a.toUrl(''.concat(this.baseUrl)));
      }}, {key: 'selectTestResult', value: function(e) {
        if (e) {
          var t=this.routeState.get('testResultTab')||''; Mn.a.toUrl(''.concat(this.baseUrl, '/').concat(e.parentUid, '/').concat(e.uid, '/').concat(t), {replace: !0});
        }
      }}, {key: 'templateContext', value: function() {
        return {cls: this.className, baseUrl: this.baseUrl, showGroupInfo: this.settings.isShowGroupInfo(), time: this.collection.time, statistic: this.collection.statistic, uid: this.collection.uid, tabName: this.tabName, items: this.collection.toJSON(), testResultTab: this.routeState.get('testResultTab')||''};
      }}]), TreeView;
    }(St.View), en()(Vn.prototype, 'onNodeClick', [Nn], Object.getOwnPropertyDescriptor(Vn.prototype, 'onNodeClick'), Vn.prototype), Dn=Vn))||Dn)||Dn); var Yn=n(111); var Kn=n.n(Yn); function TreeViewContainer_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Xn; var Zn=(Fn=Object(Nt.b)('tree'), Un=Object(Nt.a)('TooltipBehavior', {position: 'bottom'}), Hn=Object(Nt.e)({search: '.pane__search', sorter: '.tree__sorter', filter: '.tree__filter', filterMarks: '.tree__filter-marks', content: '.tree__content'}), qn=Object(Nt.c)('click .tree__info'), Fn(Wn=Un(Wn=Hn(($n=function(e) {
      m()(TreeViewContainer, e); var t=TreeViewContainer_createSuper(TreeViewContainer); function TreeViewContainer() {
        var e; s()(this, TreeViewContainer); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', Kn.a), e;
      } return u()(TreeViewContainer, [{key: 'initialize', value: function(e) {
        var t=e.routeState; var n=e.state; var r=void 0===n?new ut.Model:n; var a=e.tabName; var i=e.baseUrl; var o=e.csvUrl; var s=void 0===o?null:o; var l=e.settings; var u=void 0===l?Object(tn.c)(i):l; this.state=r, this.routeState=t, this.baseUrl=i, this.csvUrl=s, this.tabName=a, this.listenTo(this.routeState, 'change:testResultTab', this.render), this.settings=u;
      }}, {key: 'onInfoClick', value: function() {
        var e=this.settings.isShowGroupInfo(); this.settings.setShowGroupInfo(!e);
      }}, {key: 'onRender', value: function() {
        this.showChildView('content', new Gn({state: this.state, routeState: this.routeState, tabName: this.tabName, baseUrl: this.baseUrl, settings: this.settings, collection: this.collection})), this.showChildView('search', new yn({state: this.state})), this.showChildView('sorter', new On({settings: this.settings})), this.showChildView('filter', new Pn({settings: this.settings, statistic: this.collection.statistic})), this.showChildView('filterMarks', new hn({settings: this.settings}));
      }}, {key: 'templateContext', value: function() {
        return {cls: this.className, showGroupInfo: this.settings.isShowGroupInfo(), tabName: this.tabName, shownCases: 0, totalCases: 0, filtered: !1, csvUrl: this.csvUrl};
      }}]), TreeViewContainer;
    }(St.View), en()($n.prototype, 'onInfoClick', [qn], Object.getOwnPropertyDescriptor($n.prototype, 'onInfoClick'), $n.prototype), Wn=$n))||Wn)||Wn)||Wn); function TestResultTreeView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Jn=Object(Nt.b)('side-by-side')(Xn=function(e) {
      m()(TestResultTreeView, e); var t=TestResultTreeView_createSuper(TestResultTreeView); function TestResultTreeView() {
        return s()(this, TestResultTreeView), t.apply(this, arguments);
      } return u()(TestResultTreeView, [{key: 'initialize', value: function(e) {
        var t=this; var n=e.tree; var r=e.routeState; var a=e.csvUrl; d()(b()(TestResultTreeView.prototype), 'initialize', this).call(this), this.csvUrl=a, this.tree=n, this.routeState=r, this.listenTo(this.routeState, 'change:treeNode', (function(e, n) {
          return t.showLeaf(n);
        }));
      }}, {key: 'showLeaf', value: function(e) {
        var t=this; if (e&&e.testResult) {
          var n='#'.concat(this.options.baseUrl, '/').concat(e.testGroup, '/').concat(e.testResult); var r=new jt.a({uid: e.testResult}); r.fetch({success: function() {
            return t.showChildView('right', new Jt.a({baseUrl: n, model: r, routeState: t.routeState}));
          }, error: function() {
            return t.showChildView('right', new It.a({code: 404, message: 'Test result with uid "'.concat(e.testResult, '" not found')}));
          }});
        } else this.showChildView('right', new Bt({message: 'No item selected'}));
      }}, {key: 'onRender', value: function() {
        var e=this.options; var t=e.tabName; var n=e.baseUrl; var r=new Zn({collection: this.tree, routeState: this.routeState, treeSorters: [], tabName: t, baseUrl: n, csvUrl: this.csvUrl}); this.showChildView('left', r);
      }}, {key: 'templateContext', value: function() {
        return {cls: 'testresult-tree'};
      }}]), TestResultTreeView;
    }(Zt))||Xn; function TreeCollection_ownKeys(e, t) {
      var n=Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r=Object.getOwnPropertySymbols(e); t&&(r=r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), n.push.apply(n, r);
      } return n;
    } function TreeCollection_objectSpread(e) {
      for (var t=1; t<arguments.length; t++) {
        var n=null!=arguments[t]?arguments[t]:{}; t%2?TreeCollection_ownKeys(Object(n), !0).forEach((function(t) {
          x()(e, t, n[t]);
        })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):TreeCollection_ownKeys(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }));
      } return e;
    } function TreeCollection_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } function updateTime(e, t, n, r) {
      t&&t[n]&&(e[n]=r(e[n], t[n]));
    } var Qn=function(e) {
      m()(TreeCollection, e); var t=TreeCollection_createSuper(TreeCollection); function TreeCollection() {
        return s()(this, TreeCollection), t.apply(this, arguments);
      } return u()(TreeCollection, [{key: 'initialize', value: function(e, t) {
        var n=t.url; this.url=n;
      }}, {key: 'findLeaf', value: function(e, t) {
        return Object(Rt.findWhere)(this.allResults, {parentUid: e, uid: t});
      }}, {key: 'getFlattenTestResults', value: function(e) {
        var t=this; return Object(Rt.flatten)(e.map((function(e) {
          return e.children?t.getFlattenTestResults(e.children):e;
        })));
      }}, {key: 'parse', value: function(e) {
        var t=e.uid; var n=e.children||[]; return this.uid=t, this.allResults=this.getFlattenTestResults(n), this.allNodes=n, this.time=this.calculateTime(this.allResults), this.statistic=this.calculateStatistic(this.allResults), n;
      }}, {key: 'applyFilterAndSorting', value: function(e, t) {
        var n=this.getFilteredAndSortedChildren(this.allNodes, e, t); this.reset(n), this.testResults=this.getFlattenTestResults(n);
      }}, {key: 'getFilteredAndSortedChildren', value: function(e, t, n) {
        var r=this; return this.calculateOrder(e).map((function(e) {
          if (e.children) {
            var a=r.getFilteredAndSortedChildren(e.children, t, n); return TreeCollection_objectSpread(TreeCollection_objectSpread({}, e), {}, {children: a, statistic: r.calculateStatistic(a), time: r.calculateTime(a)});
          } return e;
        })).filter(t).sort(n);
      }}, {key: 'getFirstTestResult', value: function() {
        if (this.testResults.length>0) return this.testResults[0];
      }}, {key: 'getLastTestResult', value: function() {
        if (this.testResults.length>0) return this.testResults[this.testResults.length-1];
      }}, {key: 'getNextTestResult', value: function(e) {
        var t=this.testResults.findIndex((function(t) {
          return t.uid===e;
        })); if (t<this.testResults.length-1) return this.testResults[t+1];
      }}, {key: 'getPreviousTestResult', value: function(e) {
        var t=this.testResults.findIndex((function(t) {
          return t.uid===e;
        })); if (t>0) return this.testResults[t-1];
      }}, {key: 'calculateOrder', value: function(e) {
        var t=this; var n=0; return e.forEach((function(e) {
e.children?t.calculateOrder(e.children):e.order=++n;
        })), e;
      }}, {key: 'calculateStatistic', value: function(e) {
        var t={}; return Tn.a.forEach((function(e) {
          t[e]=0;
        })), e.forEach((function(e) {
e.children?Tn.a.forEach((function(n) {
  t[n]+=e.statistic?e.statistic[n]:0;
})):t[e.status]++;
        })), t;
      }}, {key: 'calculateTime', value: function(e) {
        var t={maxDuration: Number.MIN_VALUE, minDuration: Number.MAX_VALUE, sumDuration: 0, duration: 0, start: Number.MAX_VALUE, stop: Number.MIN_VALUE}; return e.forEach((function(e) {
e.children?(updateTime(t, e.time, 'maxDuration', Math.max), updateTime(t, e.time, 'minDuration', Math.min), updateTime(t, e.time, 'sumDuration', (function(e, t) {
  return e+t;
}))):e.time&&isFinite(e.time.duration)&&(t.maxDuration=Math.max(t.maxDuration, e.time.duration), t.minDuration=Math.min(t.minDuration, e.time.duration), t.sumDuration=t.sumDuration+e.time.duration), updateTime(t, e.time, 'start', Math.min), updateTime(t, e.time, 'stop', Math.max), t.duration=t.stop-t.start;
        })), t;
      }}]), TreeCollection;
    }(ut.Collection); function TreeLayout_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var er=function(e) {
      m()(TreeLayout, e); var t=TreeLayout_createSuper(TreeLayout); function TreeLayout() {
        return s()(this, TreeLayout), t.apply(this, arguments);
      } return u()(TreeLayout, [{key: 'initialize', value: function(e) {
        var t=e.url; d()(b()(TreeLayout.prototype), 'initialize', this).call(this), this.tree=new Qn([], {url: t}), this.routeState=new ut.Model;
      }}, {key: 'loadData', value: function() {
        return this.tree.fetch();
      }}, {key: 'getContentView', value: function() {
        var e=this.options; var t=e.baseUrl; var n=e.tabName; var r=e.csvUrl; return new Jn({tree: this.tree, routeState: this.routeState, tabName: n, baseUrl: t, csvUrl: r});
      }}, {key: 'onViewReady', value: function() {
        var e=this.options; var t=e.testGroup; var n=e.testResult; var r=e.testResultTab; this.onRouteUpdate(t, n, r);
      }}, {key: 'onRouteUpdate', value: function(e, t, n) {
        this.routeState.set('treeNode', {testGroup: e, testResult: t}), this.routeState.set('testResultTab', n); var r=Mn.a.getUrlParams().attachment; r?this.routeState.set('attachment', r):this.routeState.unset('attachment');
      }}]), TreeLayout;
    }(At.a); var tr=n(24); window.allure={api: tr.a, getPluginSettings: function(e, t) {
      return Object(tn.b)(e, t);
    }, settings: qt.a, components: {AppLayout: At.a, TreeLayout: er, WidgetStatusView: Et, TrendChartView: Ct}, collections: {TrendCollection: Mt}}; var nr=n(112); var rr=n.n(nr); n(209);
    /** !
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
    function sortable_esm_ownKeys(e, t) {
      var n=Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r=Object.getOwnPropertySymbols(e); t&&(r=r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), n.push.apply(n, r);
      } return n;
    } function _objectSpread2(e) {
      for (var t=1; t<arguments.length; t++) {
        var n=null!=arguments[t]?arguments[t]:{}; t%2?sortable_esm_ownKeys(Object(n), !0).forEach((function(t) {
          _defineProperty(e, t, n[t]);
        })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):sortable_esm_ownKeys(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }));
      } return e;
    } function _typeof(e) {
      return (_typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e) {
        return typeof e;
      }:function(e) {
        return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e;
      })(e);
    } function _defineProperty(e, t, n) {
      return t in e?Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}):e[t]=n, e;
    } function _extends() {
      return (_extends=Object.assign||function(e) {
        for (var t=1; t<arguments.length; t++) {
          var n=arguments[t]; for (var r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
        } return e;
      }).apply(this, arguments);
    } function _objectWithoutProperties(e, t) {
      if (null==e) return {}; var n; var r; var a=function(e, t) {
        if (null==e) return {}; var n; var r; var a={}; var i=Object.keys(e); for (r=0; r<i.length; r++)n=i[r], t.indexOf(n)>=0||(a[n]=e[n]); return a;
      }(e, t); if (Object.getOwnPropertySymbols) {
        var i=Object.getOwnPropertySymbols(e); for (r=0; r<i.length; r++)n=i[r], t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e, n)&&(a[n]=e[n]);
      } return a;
    } function userAgent(e) {
      if ('undefined'!=typeof window&&window.navigator) return !!navigator.userAgent.match(e);
    } var ar=userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i); var ir=userAgent(/Edge/i); var or=userAgent(/firefox/i); var sr=userAgent(/safari/i)&&!userAgent(/chrome/i)&&!userAgent(/android/i); var lr=userAgent(/iP(ad|od|hone)/i); var ur=userAgent(/chrome/i)&&userAgent(/android/i); var cr={capture: !1, passive: !1}; function sortable_esm_on(e, t, n) {
      e.addEventListener(t, n, !ar&&cr);
    } function off(e, t, n) {
      e.removeEventListener(t, n, !ar&&cr);
    } function matches(e, t) {
      if (t) {
        if ('>'===t[0]&&(t=t.substring(1)), e) {
          try {
            if (e.matches) return e.matches(t); if (e.msMatchesSelector) return e.msMatchesSelector(t); if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
          } catch (e) {
            return !1;
          }
        } return !1;
      }
    } function getParentOrHost(e) {
      return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode;
    } function closest(e, t, n, r) {
      if (e) {
        n=n||document; do {
          if (null!=t&&('>'===t[0]?e.parentNode===n&&matches(e, t):matches(e, t))||r&&e===n) return e; if (e===n) break;
        } while (e=getParentOrHost(e));
      } return null;
    } var hr; var fr=/\s+/g; function toggleClass(e, t, n) {
      if (e&&t) {
        if (e.classList)e.classList[n?'add':'remove'](t); else {
          var r=(' '+e.className+' ').replace(fr, ' ').replace(' '+t+' ', ' '); e.className=(r+(n?' '+t:'')).replace(fr, ' ');
        }
      }
    } function css(e, t, n) {
      var r=e&&e.style; if (r) {
        if (void 0===n) return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e, ''):e.currentStyle&&(n=e.currentStyle), void 0===t?n:n[t]; t in r||-1!==t.indexOf('webkit')||(t='-webkit-'+t), r[t]=n+('string'==typeof n?'':'px');
      }
    } function sortable_esm_matrix(e, t) {
      var n=''; if ('string'==typeof e)n=e; else {
        do {
          var r=css(e, 'transform'); r&&'none'!==r&&(n=r+' '+n);
        } while (!t&&(e=e.parentNode));
      } var a=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix; return a&&new a(n);
    } function find(e, t, n) {
      if (e) {
        var r=e.getElementsByTagName(t); var a=0; var i=r.length; if (n) for (;a<i; a++)n(r[a], a); return r;
      } return [];
    } function getWindowScrollingElement() {
      var e=document.scrollingElement; return e||document.documentElement;
    } function getRect(e, t, n, r, a) {
      if (e.getBoundingClientRect||e===window) {
        var i; var o; var s; var l; var u; var c; var h; if (e!==window&&e.parentNode&&e!==getWindowScrollingElement()?(o=(i=e.getBoundingClientRect()).top, s=i.left, l=i.bottom, u=i.right, c=i.height, h=i.width):(o=0, s=0, l=window.innerHeight, u=window.innerWidth, c=window.innerHeight, h=window.innerWidth), (t||n)&&e!==window&&(a=a||e.parentNode, !ar)) {
          do {
            if (a&&a.getBoundingClientRect&&('none'!==css(a, 'transform')||n&&'static'!==css(a, 'position'))) {
              var f=a.getBoundingClientRect(); o-=f.top+parseInt(css(a, 'border-top-width')), s-=f.left+parseInt(css(a, 'border-left-width')), l=o+i.height, u=s+i.width; break;
            }
          } while (a=a.parentNode);
        } if (r&&e!==window) {
          var d=sortable_esm_matrix(a||e); var p=d&&d.a; var m=d&&d.d; d&&(l=(o/=m)+(c/=m), u=(s/=p)+(h/=p));
        } return {top: o, left: s, bottom: l, right: u, width: h, height: c};
      }
    } function isScrolledPast(e, t, n) {
      for (var r=getParentAutoScrollElement(e, !0), a=getRect(e)[t]; r;) {
        var i=getRect(r)[n]; if (!('top'===n||'left'===n?a>=i:a<=i)) return r; if (r===getWindowScrollingElement()) break; r=getParentAutoScrollElement(r, !1);
      } return !1;
    } function getChild(e, t, n, r) {
      for (var a=0, i=0, o=e.children; i<o.length;) {
        if ('none'!==o[i].style.display&&o[i]!==Sortable.ghost&&(r||o[i]!==Sortable.dragged)&&closest(o[i], n.draggable, e, !1)) {
          if (a===t) return o[i]; a++;
        }i++;
      } return null;
    } function lastChild(e, t) {
      for (var n=e.lastElementChild; n&&(n===Sortable.ghost||'none'===css(n, 'display')||t&&!matches(n, t));)n=n.previousElementSibling; return n||null;
    } function sortable_esm_index(e, t) {
      var n=0; if (!e||!e.parentNode) return -1; for (;e=e.previousElementSibling;)'TEMPLATE'===e.nodeName.toUpperCase()||e===Sortable.clone||t&&!matches(e, t)||n++; return n;
    } function getRelativeScrollOffset(e) {
      var t=0; var n=0; var r=getWindowScrollingElement(); if (e) {
        do {
          var a=sortable_esm_matrix(e); var i=a.a; var o=a.d; t+=e.scrollLeft*i, n+=e.scrollTop*o;
        } while (e!==r&&(e=e.parentNode));
      } return [t, n];
    } function getParentAutoScrollElement(e, t) {
      if (!e||!e.getBoundingClientRect) return getWindowScrollingElement(); var n=e; var r=!1; do {
        if (n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight) {
          var a=css(n); if (n.clientWidth<n.scrollWidth&&('auto'==a.overflowX||'scroll'==a.overflowX)||n.clientHeight<n.scrollHeight&&('auto'==a.overflowY||'scroll'==a.overflowY)) {
            if (!n.getBoundingClientRect||n===document.body) return getWindowScrollingElement(); if (r||t) return n; r=!0;
          }
        }
      } while (n=n.parentNode); return getWindowScrollingElement();
    } function isRectEqual(e, t) {
      return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width);
    } function throttle(e, t) {
      return function() {
        if (!hr) {
          var n=arguments; var r=this; 1===n.length?e.call(r, n[0]):e.apply(r, n), hr=setTimeout((function() {
            hr=void 0;
          }), t);
        }
      };
    } function scrollBy(e, t, n) {
      e.scrollLeft+=t, e.scrollTop+=n;
    } function sortable_esm_clone(e) {
      var t=window.Polymer; var n=window.jQuery||window.Zepto; return t&&t.dom?t.dom(e).cloneNode(!0):n?n(e).clone(!0)[0]:e.cloneNode(!0);
    } var dr='Sortable'+(new Date).getTime(); function AnimationStateManager() {
      var e; var t=[]; return {captureAnimationState: function() {
        (t=[], this.options.animation)&&[].slice.call(this.el.children).forEach((function(e) {
          if ('none'!==css(e, 'display')&&e!==Sortable.ghost) {
            t.push({target: e, rect: getRect(e)}); var n=_objectSpread2({}, t[t.length-1].rect); if (e.thisAnimationDuration) {
              var r=sortable_esm_matrix(e, !0); r&&(n.top-=r.f, n.left-=r.e);
            }e.fromRect=n;
          }
        }));
      }, addAnimationState: function(e) {
        t.push(e);
      }, removeAnimationState: function(e) {
        t.splice(function(e, t) {
          for (var n in e) if (e.hasOwnProperty(n)) for (var r in t) if (t.hasOwnProperty(r)&&t[r]===e[n][r]) return Number(n); return -1;
        }(t, {target: e}), 1);
      }, animateAll: function(n) {
        var r=this; if (!this.options.animation) return clearTimeout(e), void('function'==typeof n&&n()); var a=!1; var i=0; t.forEach((function(e) {
          var t=0; var n=e.target; var o=n.fromRect; var s=getRect(n); var l=n.prevFromRect; var u=n.prevToRect; var c=e.rect; var h=sortable_esm_matrix(n, !0); h&&(s.top-=h.f, s.left-=h.e), n.toRect=s, n.thisAnimationDuration&&isRectEqual(l, s)&&!isRectEqual(o, s)&&(c.top-s.top)/(c.left-s.left)==(o.top-s.top)/(o.left-s.left)&&(t=function(e, t, n, r) {
            return Math.sqrt(Math.pow(t.top-e.top, 2)+Math.pow(t.left-e.left, 2))/Math.sqrt(Math.pow(t.top-n.top, 2)+Math.pow(t.left-n.left, 2))*r.animation;
          }(c, l, u, r.options)), isRectEqual(s, o)||(n.prevFromRect=o, n.prevToRect=s, t||(t=r.options.animation), r.animate(n, c, s, t)), t&&(a=!0, i=Math.max(i, t), clearTimeout(n.animationResetTimer), n.animationResetTimer=setTimeout((function() {
            n.animationTime=0, n.prevFromRect=null, n.fromRect=null, n.prevToRect=null, n.thisAnimationDuration=null;
          }), t), n.thisAnimationDuration=t);
        })), clearTimeout(e), a?e=setTimeout((function() {
          'function'==typeof n&&n();
        }), i):'function'==typeof n&&n(), t=[];
      }, animate: function(e, t, n, r) {
        if (r) {
          css(e, 'transition', ''), css(e, 'transform', ''); var a=sortable_esm_matrix(this.el); var i=a&&a.a; var o=a&&a.d; var s=(t.left-n.left)/(i||1); var l=(t.top-n.top)/(o||1); e.animatingX=!!s, e.animatingY=!!l, css(e, 'transform', 'translate3d('+s+'px,'+l+'px,0)'), this.forRepaintDummy=function(e) {
            return e.offsetWidth;
          }(e), css(e, 'transition', 'transform '+r+'ms'+(this.options.easing?' '+this.options.easing:'')), css(e, 'transform', 'translate3d(0,0,0)'), 'number'==typeof e.animated&&clearTimeout(e.animated), e.animated=setTimeout((function() {
            css(e, 'transition', ''), css(e, 'transform', ''), e.animated=!1, e.animatingX=!1, e.animatingY=!1;
          }), r);
        }
      }};
    } var pr=[]; var mr={initializeByDefault: !0}; var gr={mount: function(e) {
      for (var t in mr)mr.hasOwnProperty(t)&&!(t in e)&&(e[t]=mr[t]); pr.forEach((function(t) {
        if (t.pluginName===e.pluginName) throw 'Sortable: Cannot mount plugin '.concat(e.pluginName, ' more than once');
      })), pr.push(e);
    }, pluginEvent: function(e, t, n) {
      var r=this; this.eventCanceled=!1, n.cancel=function() {
        r.eventCanceled=!0;
      }; var a=e+'Global'; pr.forEach((function(r) {
        t[r.pluginName]&&(t[r.pluginName][a]&&t[r.pluginName][a](_objectSpread2({sortable: t}, n)), t.options[r.pluginName]&&t[r.pluginName][e]&&t[r.pluginName][e](_objectSpread2({sortable: t}, n)));
      }));
    }, initializePlugins: function(e, t, n, r) {
      for (var a in pr.forEach((function(r) {
        var a=r.pluginName; if (e.options[a]||r.initializeByDefault) {
          var i=new r(e, t, e.options); i.sortable=e, i.options=e.options, e[a]=i, _extends(n, i.defaults);
        }
      })), e.options) {
        if (e.options.hasOwnProperty(a)) {
          var i=this.modifyOption(e, a, e.options[a]); void 0!==i&&(e.options[a]=i);
        }
      }
    }, getEventProperties: function(e, t) {
      var n={}; return pr.forEach((function(r) {
        'function'==typeof r.eventProperties&&_extends(n, r.eventProperties.call(t[r.pluginName], e));
      })), n;
    }, modifyOption: function(e, t, n) {
      var r; return pr.forEach((function(a) {
        e[a.pluginName]&&a.optionListeners&&'function'==typeof a.optionListeners[t]&&(r=a.optionListeners[t].call(e[a.pluginName], n));
      })), r;
    }}; function sortable_esm_dispatchEvent(e) {
      var t=e.sortable; var n=e.rootEl; var r=e.name; var a=e.targetEl; var i=e.cloneEl; var o=e.toEl; var s=e.fromEl; var l=e.oldIndex; var u=e.newIndex; var c=e.oldDraggableIndex; var h=e.newDraggableIndex; var f=e.originalEvent; var d=e.putSortable; var p=e.extraEventProperties; if (t=t||n&&n[dr]) {
        var m; var g=t.options; var v='on'+r.charAt(0).toUpperCase()+r.substr(1); !window.CustomEvent||ar||ir?(m=document.createEvent('Event')).initEvent(r, !0, !0):m=new CustomEvent(r, {bubbles: !0, cancelable: !0}), m.to=o||n, m.from=s||n, m.item=a||n, m.clone=i, m.oldIndex=l, m.newIndex=u, m.oldDraggableIndex=c, m.newDraggableIndex=h, m.originalEvent=f, m.pullMode=d?d.lastPutMode:void 0; var y=_objectSpread2(_objectSpread2({}, p), gr.getEventProperties(r, t)); for (var b in y)m[b]=y[b]; n&&n.dispatchEvent(m), g[v]&&g[v].call(t, m);
      }
    } var vr=['evt']; var pluginEvent=function(e, t) {
      var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}; var r=n.evt; var a=_objectWithoutProperties(n, vr); gr.pluginEvent.bind(Sortable)(e, t, _objectSpread2({dragEl: yr, parentEl: br, ghostEl: _r, rootEl: wr, nextEl: xr, lastDownEl: kr, cloneEl: Cr, cloneHidden: Sr, dragStarted: Br, putSortable: Mr, activeSortable: Sortable.active, originalEvent: r, oldIndex: Or, oldDraggableIndex: Er, newIndex: Tr, newDraggableIndex: Rr, hideGhostForTarget: _hideGhostForTarget, unhideGhostForTarget: _unhideGhostForTarget, cloneNowHidden: function() {
        Sr=!0;
      }, cloneNowShown: function() {
        Sr=!1;
      }, dispatchSortableEvent: function(e) {
        _dispatchEvent({sortable: t, name: e, originalEvent: r});
      }}, a));
    }; function _dispatchEvent(e) {
      sortable_esm_dispatchEvent(_objectSpread2({putSortable: Mr, cloneEl: Cr, targetEl: yr, rootEl: wr, oldIndex: Or, oldDraggableIndex: Er, newIndex: Tr, newDraggableIndex: Rr}, e));
    } var yr; var br; var _r; var wr; var xr; var kr; var Cr; var Sr; var Or; var Tr; var Er; var Rr; var Pr; var Mr; var Ar; var jr; var Nr; var Dr; var Vr; var Lr; var Br; var Ir; var zr; var Fr; var Ur; var Hr=!1; var qr=!1; var Wr=[]; var $r=!1; var Gr=!1; var Yr=[]; var Kr=!1; var Xr=[]; var Zr='undefined'!=typeof document; var Jr=lr; var Qr=ir||ar?'cssFloat':'float'; var ea=Zr&&!ur&&!lr&&'draggable'in document.createElement('div'); var ta=function() {
      if (Zr) {
        if (ar) return !1; var e=document.createElement('x'); return e.style.cssText='pointer-events:auto', 'auto'===e.style.pointerEvents;
      }
    }(); var _detectDirection=function(e, t) {
      var n=css(e); var r=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth); var a=getChild(e, 0, t); var i=getChild(e, 1, t); var o=a&&css(a); var s=i&&css(i); var l=o&&parseInt(o.marginLeft)+parseInt(o.marginRight)+getRect(a).width; var u=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+getRect(i).width; if ('flex'===n.display) return 'column'===n.flexDirection||'column-reverse'===n.flexDirection?'vertical':'horizontal'; if ('grid'===n.display) return n.gridTemplateColumns.split(' ').length<=1?'vertical':'horizontal'; if (a&&o.float&&'none'!==o.float) {
        var c='left'===o.float?'left':'right'; return !i||'both'!==s.clear&&s.clear!==c?'horizontal':'vertical';
      } return a&&('block'===o.display||'flex'===o.display||'table'===o.display||'grid'===o.display||l>=r&&'none'===n[Qr]||i&&'none'===n[Qr]&&l+u>r)?'vertical':'horizontal';
    }; var _prepareGroup=function(e) {
      function toFn(e, t) {
        return function(n, r, a, i) {
          var o=n.options.group.name&&r.options.group.name&&n.options.group.name===r.options.group.name; if (null==e&&(t||o)) return !0; if (null==e||!1===e) return !1; if (t&&'clone'===e) return e; if ('function'==typeof e) return toFn(e(n, r, a, i), t)(n, r, a, i); var s=(t?n:r).options.group.name; return !0===e||'string'==typeof e&&e===s||e.join&&e.indexOf(s)>-1;
        };
      } var t={}; var n=e.group; n&&'object'==_typeof(n)||(n={name: n}), t.name=n.name, t.checkPull=toFn(n.pull, !0), t.checkPut=toFn(n.put), t.revertClone=n.revertClone, e.group=t;
    }; var _hideGhostForTarget=function() {
      !ta&&_r&&css(_r, 'display', 'none');
    }; var _unhideGhostForTarget=function() {
      !ta&&_r&&css(_r, 'display', '');
    }; Zr&&!ur&&document.addEventListener('click', (function(e) {
      if (qr) return e.preventDefault(), e.stopPropagation&&e.stopPropagation(), e.stopImmediatePropagation&&e.stopImmediatePropagation(), qr=!1, !1;
    }), !0); var nearestEmptyInsertDetectEvent=function(e) {
      if (yr) {
        e=e.touches?e.touches[0]:e; var t=(a=e.clientX, i=e.clientY, Wr.some((function(e) {
          var t=e[dr].options.emptyInsertThreshold; if (t&&!lastChild(e)) {
            var n=getRect(e); var r=a>=n.left-t&&a<=n.right+t; var s=i>=n.top-t&&i<=n.bottom+t; return r&&s?o=e:void 0;
          }
        })), o); if (t) {
          var n={}; for (var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]); n.target=n.rootEl=t, n.preventDefault=void 0, n.stopPropagation=void 0, t[dr]._onDragOver(n);
        }
      } var a; var i; var o;
    }; var _checkOutsideTargetEl=function(e) {
      yr&&yr.parentNode[dr]._isOutsideThisEl(e.target);
    }; function Sortable(e, t) {
      if (!e||!e.nodeType||1!==e.nodeType) throw 'Sortable: `el` must be an HTMLElement, not '.concat({}.toString.call(e)); this.el=e, this.options=t=_extends({}, t), e[dr]=this; var n={group: null, sort: !0, disabled: !1, store: null, handle: null, draggable: /^[uo]l$/i.test(e.nodeName)?'>li':'>*', swapThreshold: 1, invertSwap: !1, invertedSwapThreshold: null, removeCloneOnHide: !0, direction: function() {
        return _detectDirection(e, this.options);
      }, ghostClass: 'sortable-ghost', chosenClass: 'sortable-chosen', dragClass: 'sortable-drag', ignore: 'a, img', filter: null, preventOnFilter: !0, animation: 0, easing: null, setData: function(e, t) {
        e.setData('Text', t.textContent);
      }, dropBubble: !1, dragoverBubble: !1, dataIdAttr: 'data-id', delay: 0, delayOnTouchOnly: !1, touchStartThreshold: (Number.parseInt?Number:window).parseInt(window.devicePixelRatio, 10)||1, forceFallback: !1, fallbackClass: 'sortable-fallback', fallbackOnBody: !1, fallbackTolerance: 0, fallbackOffset: {x: 0, y: 0}, supportPointer: !1!==Sortable.supportPointer&&'PointerEvent'in window&&!sr, emptyInsertThreshold: 5}; for (var r in gr.initializePlugins(this, e, n), n)!(r in t)&&(t[r]=n[r]); for (var a in _prepareGroup(t), this)'_'===a.charAt(0)&&'function'==typeof this[a]&&(this[a]=this[a].bind(this)); this.nativeDraggable=!t.forceFallback&&ea, this.nativeDraggable&&(this.options.touchStartThreshold=1), t.supportPointer?sortable_esm_on(e, 'pointerdown', this._onTapStart):(sortable_esm_on(e, 'mousedown', this._onTapStart), sortable_esm_on(e, 'touchstart', this._onTapStart)), this.nativeDraggable&&(sortable_esm_on(e, 'dragover', this), sortable_esm_on(e, 'dragenter', this)), Wr.push(this.el), t.store&&t.store.get&&this.sort(t.store.get(this)||[]), _extends(this, AnimationStateManager());
    } function _onMove(e, t, n, r, a, i, o, s) {
      var l; var u; var c=e[dr]; var h=c.options.onMove; return !window.CustomEvent||ar||ir?(l=document.createEvent('Event')).initEvent('move', !0, !0):l=new CustomEvent('move', {bubbles: !0, cancelable: !0}), l.to=t, l.from=e, l.dragged=n, l.draggedRect=r, l.related=a||t, l.relatedRect=i||getRect(t), l.willInsertAfter=s, l.originalEvent=o, e.dispatchEvent(l), h&&(u=h.call(c, l, o)), u;
    } function _disableDraggable(e) {
      e.draggable=!1;
    } function _unsilent() {
      Kr=!1;
    } function _generateId(e) {
      for (var t=e.tagName+e.className+e.src+e.href+e.textContent, n=t.length, r=0; n--;)r+=t.charCodeAt(n); return r.toString(36);
    } function _nextTick(e) {
      return setTimeout(e, 0);
    } function _cancelNextTick(e) {
      return clearTimeout(e);
    }Sortable.prototype={constructor: Sortable, _isOutsideThisEl: function(e) {
      this.el.contains(e)||e===this.el||(Ir=null);
    }, _getDirection: function(e, t) {
      return 'function'==typeof this.options.direction?this.options.direction.call(this, e, t, yr):this.options.direction;
    }, _onTapStart: function(e) {
      if (e.cancelable) {
        var t=this; var n=this.el; var r=this.options; var a=r.preventOnFilter; var i=e.type; var o=e.touches&&e.touches[0]||e.pointerType&&'touch'===e.pointerType&&e; var s=(o||e).target; var l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s; var u=r.filter; if (function(e) {
          Xr.length=0; var t=e.getElementsByTagName('input'); var n=t.length; for (;n--;) {
            var r=t[n]; r.checked&&Xr.push(r);
          }
        }(n), !yr&&!(/mousedown|pointerdown/.test(i)&&0!==e.button||r.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!sr||!s||'SELECT'!==s.tagName.toUpperCase())&&!((s=closest(s, r.draggable, n, !1))&&s.animated||kr===s)) {
          if (Or=sortable_esm_index(s), Er=sortable_esm_index(s, r.draggable), 'function'==typeof u) {
            if (u.call(this, e, s, this)) return _dispatchEvent({sortable: t, rootEl: l, name: 'filter', targetEl: s, toEl: n, fromEl: n}), pluginEvent('filter', t, {evt: e}), void(a&&e.cancelable&&e.preventDefault());
          } else if (u&&(u=u.split(',').some((function(r) {
            if (r=closest(l, r.trim(), n, !1)) return _dispatchEvent({sortable: t, rootEl: r, name: 'filter', targetEl: s, fromEl: n, toEl: n}), pluginEvent('filter', t, {evt: e}), !0;
          })))) return void(a&&e.cancelable&&e.preventDefault()); r.handle&&!closest(l, r.handle, n, !1)||this._prepareDragStart(e, o, s);
        }
      }
    }, _prepareDragStart: function(e, t, n) {
      var r; var a=this; var i=a.el; var o=a.options; var s=i.ownerDocument; if (n&&!yr&&n.parentNode===i) {
        var l=getRect(n); if (wr=i, br=(yr=n).parentNode, xr=yr.nextSibling, kr=n, Pr=o.group, Sortable.dragged=yr, Ar={target: yr, clientX: (t||e).clientX, clientY: (t||e).clientY}, Vr=Ar.clientX-l.left, Lr=Ar.clientY-l.top, this._lastX=(t||e).clientX, this._lastY=(t||e).clientY, yr.style['will-change']='all', r=function() {
          pluginEvent('delayEnded', a, {evt: e}), Sortable.eventCanceled?a._onDrop():(a._disableDelayedDragEvents(), !or&&a.nativeDraggable&&(yr.draggable=!0), a._triggerDragStart(e, t), _dispatchEvent({sortable: a, name: 'choose', originalEvent: e}), toggleClass(yr, o.chosenClass, !0));
        }, o.ignore.split(',').forEach((function(e) {
          find(yr, e.trim(), _disableDraggable);
        })), sortable_esm_on(s, 'dragover', nearestEmptyInsertDetectEvent), sortable_esm_on(s, 'mousemove', nearestEmptyInsertDetectEvent), sortable_esm_on(s, 'touchmove', nearestEmptyInsertDetectEvent), sortable_esm_on(s, 'mouseup', a._onDrop), sortable_esm_on(s, 'touchend', a._onDrop), sortable_esm_on(s, 'touchcancel', a._onDrop), or&&this.nativeDraggable&&(this.options.touchStartThreshold=4, yr.draggable=!0), pluginEvent('delayStart', this, {evt: e}), !o.delay||o.delayOnTouchOnly&&!t||this.nativeDraggable&&(ir||ar))r(); else {
          if (Sortable.eventCanceled) return void this._onDrop(); sortable_esm_on(s, 'mouseup', a._disableDelayedDrag), sortable_esm_on(s, 'touchend', a._disableDelayedDrag), sortable_esm_on(s, 'touchcancel', a._disableDelayedDrag), sortable_esm_on(s, 'mousemove', a._delayedDragTouchMoveHandler), sortable_esm_on(s, 'touchmove', a._delayedDragTouchMoveHandler), o.supportPointer&&sortable_esm_on(s, 'pointermove', a._delayedDragTouchMoveHandler), a._dragStartTimer=setTimeout(r, o.delay);
        }
      }
    }, _delayedDragTouchMoveHandler: function(e) {
      var t=e.touches?e.touches[0]:e; Math.max(Math.abs(t.clientX-this._lastX), Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag();
    }, _disableDelayedDrag: function() {
      yr&&_disableDraggable(yr), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
    }, _disableDelayedDragEvents: function() {
      var e=this.el.ownerDocument; off(e, 'mouseup', this._disableDelayedDrag), off(e, 'touchend', this._disableDelayedDrag), off(e, 'touchcancel', this._disableDelayedDrag), off(e, 'mousemove', this._delayedDragTouchMoveHandler), off(e, 'touchmove', this._delayedDragTouchMoveHandler), off(e, 'pointermove', this._delayedDragTouchMoveHandler);
    }, _triggerDragStart: function(e, t) {
      t=t||'touch'==e.pointerType&&e, !this.nativeDraggable||t?this.options.supportPointer?sortable_esm_on(document, 'pointermove', this._onTouchMove):sortable_esm_on(document, t?'touchmove':'mousemove', this._onTouchMove):(sortable_esm_on(yr, 'dragend', this), sortable_esm_on(wr, 'dragstart', this._onDragStart)); try {
document.selection?_nextTick((function() {
  document.selection.empty();
})):window.getSelection().removeAllRanges();
      } catch (e) {}
    }, _dragStarted: function(e, t) {
      if (Hr=!1, wr&&yr) {
        pluginEvent('dragStarted', this, {evt: t}), this.nativeDraggable&&sortable_esm_on(document, 'dragover', _checkOutsideTargetEl); var n=this.options; !e&&toggleClass(yr, n.dragClass, !1), toggleClass(yr, n.ghostClass, !0), Sortable.active=this, e&&this._appendGhost(), _dispatchEvent({sortable: this, name: 'start', originalEvent: t});
      } else this._nulling();
    }, _emulateDragOver: function() {
      if (jr) {
        this._lastX=jr.clientX, this._lastY=jr.clientY, _hideGhostForTarget(); for (var e=document.elementFromPoint(jr.clientX, jr.clientY), t=e; e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(jr.clientX, jr.clientY))!==t;)t=e; if (yr.parentNode[dr]._isOutsideThisEl(e), t) {
          do {
            if (t[dr]) {
              if (t[dr]._onDragOver({clientX: jr.clientX, clientY: jr.clientY, target: e, rootEl: t})&&!this.options.dragoverBubble) break;
            }e=t;
          } while (t=t.parentNode);
        } _unhideGhostForTarget();
      }
    }, _onTouchMove: function(e) {
      if (Ar) {
        var t=this.options; var n=t.fallbackTolerance; var r=t.fallbackOffset; var a=e.touches?e.touches[0]:e; var i=_r&&sortable_esm_matrix(_r, !0); var o=_r&&i&&i.a; var s=_r&&i&&i.d; var l=Jr&&Ur&&getRelativeScrollOffset(Ur); var u=(a.clientX-Ar.clientX+r.x)/(o||1)+(l?l[0]-Yr[0]:0)/(o||1); var c=(a.clientY-Ar.clientY+r.y)/(s||1)+(l?l[1]-Yr[1]:0)/(s||1); if (!Sortable.active&&!Hr) {
          if (n&&Math.max(Math.abs(a.clientX-this._lastX), Math.abs(a.clientY-this._lastY))<n) return; this._onDragStart(e, !0);
        } if (_r) {
i?(i.e+=u-(Nr||0), i.f+=c-(Dr||0)):i={a: 1, b: 0, c: 0, d: 1, e: u, f: c}; var h='matrix('.concat(i.a, ',').concat(i.b, ',').concat(i.c, ',').concat(i.d, ',').concat(i.e, ',').concat(i.f, ')'); css(_r, 'webkitTransform', h), css(_r, 'mozTransform', h), css(_r, 'msTransform', h), css(_r, 'transform', h), Nr=u, Dr=c, jr=a;
        }e.cancelable&&e.preventDefault();
      }
    }, _appendGhost: function() {
      if (!_r) {
        var e=this.options.fallbackOnBody?document.body:wr; var t=getRect(yr, !0, Jr, !0, e); var n=this.options; if (Jr) {
          for (Ur=e; 'static'===css(Ur, 'position')&&'none'===css(Ur, 'transform')&&Ur!==document;)Ur=Ur.parentNode; Ur!==document.body&&Ur!==document.documentElement?(Ur===document&&(Ur=getWindowScrollingElement()), t.top+=Ur.scrollTop, t.left+=Ur.scrollLeft):Ur=getWindowScrollingElement(), Yr=getRelativeScrollOffset(Ur);
        }toggleClass(_r=yr.cloneNode(!0), n.ghostClass, !1), toggleClass(_r, n.fallbackClass, !0), toggleClass(_r, n.dragClass, !0), css(_r, 'transition', ''), css(_r, 'transform', ''), css(_r, 'box-sizing', 'border-box'), css(_r, 'margin', 0), css(_r, 'top', t.top), css(_r, 'left', t.left), css(_r, 'width', t.width), css(_r, 'height', t.height), css(_r, 'opacity', '0.8'), css(_r, 'position', Jr?'absolute':'fixed'), css(_r, 'zIndex', '100000'), css(_r, 'pointerEvents', 'none'), Sortable.ghost=_r, e.appendChild(_r), css(_r, 'transform-origin', Vr/parseInt(_r.style.width)*100+'% '+Lr/parseInt(_r.style.height)*100+'%');
      }
    }, _onDragStart: function(e, t) {
      var n=this; var r=e.dataTransfer; var a=n.options; pluginEvent('dragStart', this, {evt: e}), Sortable.eventCanceled?this._onDrop():(pluginEvent('setupClone', this), Sortable.eventCanceled||((Cr=sortable_esm_clone(yr)).removeAttribute('id'), Cr.draggable=!1, Cr.style['will-change']='', this._hideClone(), toggleClass(Cr, this.options.chosenClass, !1), Sortable.clone=Cr), n.cloneId=_nextTick((function() {
        pluginEvent('clone', n), Sortable.eventCanceled||(n.options.removeCloneOnHide||wr.insertBefore(Cr, yr), n._hideClone(), _dispatchEvent({sortable: n, name: 'clone'}));
      })), !t&&toggleClass(yr, a.dragClass, !0), t?(qr=!0, n._loopId=setInterval(n._emulateDragOver, 50)):(off(document, 'mouseup', n._onDrop), off(document, 'touchend', n._onDrop), off(document, 'touchcancel', n._onDrop), r&&(r.effectAllowed='move', a.setData&&a.setData.call(n, r, yr)), sortable_esm_on(document, 'drop', n), css(yr, 'transform', 'translateZ(0)')), Hr=!0, n._dragStartId=_nextTick(n._dragStarted.bind(n, t, e)), sortable_esm_on(document, 'selectstart', n), Br=!0, sr&&css(document.body, 'user-select', 'none'));
    }, _onDragOver: function(e) {
      var t; var n; var r; var a; var i=this.el; var o=e.target; var s=this.options; var l=s.group; var u=Sortable.active; var c=Pr===l; var h=s.sort; var f=Mr||u; var d=this; var p=!1; if (!Kr) {
        if (void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(), o=closest(o, s.draggable, i, !0), dragOverEvent('dragOver'), Sortable.eventCanceled) return p; if (yr.contains(e.target)||o.animated&&o.animatingX&&o.animatingY||d._ignoreWhileAnimating===o) return completed(!1); if (qr=!1, u&&!s.disabled&&(c?h||(r=br!==wr):Mr===this||(this.lastPutMode=Pr.checkPull(this, u, yr, e))&&l.checkPut(this, u, yr, e))) {
          if (a='vertical'===this._getDirection(e, o), t=getRect(yr), dragOverEvent('dragOverValid'), Sortable.eventCanceled) return p; if (r) return br=wr, capture(), this._hideClone(), dragOverEvent('revert'), Sortable.eventCanceled||(xr?wr.insertBefore(yr, xr):wr.appendChild(yr)), completed(!0); var m=lastChild(i, s.draggable); if (!m||function(e, t, n) {
            var r=getRect(lastChild(n.el, n.options.draggable)); return t?e.clientX>r.right+10||e.clientX<=r.right&&e.clientY>r.bottom&&e.clientX>=r.left:e.clientX>r.right&&e.clientY>r.top||e.clientX<=r.right&&e.clientY>r.bottom+10;
          }(e, a, this)&&!m.animated) {
            if (m===yr) return completed(!1); if (m&&i===e.target&&(o=m), o&&(n=getRect(o)), !1!==_onMove(wr, i, yr, t, o, n, e, !!o)) return capture(), m&&m.nextSibling?i.insertBefore(yr, m.nextSibling):i.appendChild(yr), br=i, changed(), completed(!0);
          } else if (m&&function(e, t, n) {
            var r=getRect(getChild(n.el, 0, n.options, !0)); return t?e.clientX<r.left-10||e.clientY<r.top&&e.clientX<r.right:e.clientY<r.top-10||e.clientY<r.bottom&&e.clientX<r.left;
          }(e, a, this)) {
            var g=getChild(i, 0, s, !0); if (g===yr) return completed(!1); if (n=getRect(o=g), !1!==_onMove(wr, i, yr, t, o, n, e, !1)) return capture(), i.insertBefore(yr, g), br=i, changed(), completed(!0);
          } else if (o.parentNode===i) {
            n=getRect(o); var v; var y; var b; var w=yr.parentNode!==i; var x=!function(e, t, n) {
              var r=n?e.left:e.top; var a=n?e.right:e.bottom; var i=n?e.width:e.height; var o=n?t.left:t.top; var s=n?t.right:t.bottom; var l=n?t.width:t.height; return r===o||a===s||r+i/2===o+l/2;
            }(yr.animated&&yr.toRect||t, o.animated&&o.toRect||n, a); var k=a?'top':'left'; var C=isScrolledPast(o, 'top', 'top')||isScrolledPast(yr, 'top', 'top'); var S=C?C.scrollTop:void 0; if (Ir!==o&&(y=n[k], $r=!1, Gr=!x&&s.invertSwap||w), 0!==(v=function(e, t, n, r, a, i, o, s) {
              var l=r?e.clientY:e.clientX; var u=r?n.height:n.width; var c=r?n.top:n.left; var h=r?n.bottom:n.right; var f=!1; if (!o) {
                if (s&&Fr<u*a) {
                  if (!$r&&(1===zr?l>c+u*i/2:l<h-u*i/2)&&($r=!0), $r)f=!0; else if (1===zr?l<c+Fr:l>h-Fr) return -zr;
                } else if (l>c+u*(1-a)/2&&l<h-u*(1-a)/2) {
                  return function(e) {
                    return sortable_esm_index(yr)<sortable_esm_index(e)?1:-1;
                  }(t);
                }
              } if ((f=f||o)&&(l<c+u*i/2||l>h-u*i/2)) return l>c+u/2?1:-1; return 0;
            }(e, o, n, a, x?1:s.swapThreshold, null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold, Gr, Ir===o))) {
              var O=sortable_esm_index(yr); do {
                O-=v, b=br.children[O];
              } while (b&&('none'===css(b, 'display')||b===_r));
            } if (0===v||b===o) return completed(!1); Ir=o, zr=v; var T=o.nextElementSibling; var E=!1; var R=_onMove(wr, i, yr, t, o, n, e, E=1===v); if (!1!==R) return 1!==R&&-1!==R||(E=1===R), Kr=!0, setTimeout(_unsilent, 30), capture(), E&&!T?i.appendChild(yr):o.parentNode.insertBefore(yr, E?T:o), C&&scrollBy(C, 0, S-C.scrollTop), br=yr.parentNode, void 0===y||Gr||(Fr=Math.abs(y-getRect(o)[k])), changed(), completed(!0);
          } if (i.contains(yr)) return completed(!1);
        } return !1;
      } function dragOverEvent(s, l) {
        pluginEvent(s, d, _objectSpread2({evt: e, isOwner: c, axis: a?'vertical':'horizontal', revert: r, dragRect: t, targetRect: n, canSort: h, fromSortable: f, target: o, completed: completed, onMove: function(n, r) {
          return _onMove(wr, i, yr, t, n, getRect(n), e, r);
        }, changed: changed}, l));
      } function capture() {
        dragOverEvent('dragOverAnimationCapture'), d.captureAnimationState(), d!==f&&f.captureAnimationState();
      } function completed(t) {
        return dragOverEvent('dragOverCompleted', {insertion: t}), t&&(c?u._hideClone():u._showClone(d), d!==f&&(toggleClass(yr, Mr?Mr.options.ghostClass:u.options.ghostClass, !1), toggleClass(yr, s.ghostClass, !0)), Mr!==d&&d!==Sortable.active?Mr=d:d===Sortable.active&&Mr&&(Mr=null), f===d&&(d._ignoreWhileAnimating=o), d.animateAll((function() {
          dragOverEvent('dragOverAnimationComplete'), d._ignoreWhileAnimating=null;
        })), d!==f&&(f.animateAll(), f._ignoreWhileAnimating=null)), (o===yr&&!yr.animated||o===i&&!o.animated)&&(Ir=null), s.dragoverBubble||e.rootEl||o===document||(yr.parentNode[dr]._isOutsideThisEl(e.target), !t&&nearestEmptyInsertDetectEvent(e)), !s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(), p=!0;
      } function changed() {
        Tr=sortable_esm_index(yr), Rr=sortable_esm_index(yr, s.draggable), _dispatchEvent({sortable: d, name: 'change', toEl: i, newIndex: Tr, newDraggableIndex: Rr, originalEvent: e});
      }
    }, _ignoreWhileAnimating: null, _offMoveEvents: function() {
      off(document, 'mousemove', this._onTouchMove), off(document, 'touchmove', this._onTouchMove), off(document, 'pointermove', this._onTouchMove), off(document, 'dragover', nearestEmptyInsertDetectEvent), off(document, 'mousemove', nearestEmptyInsertDetectEvent), off(document, 'touchmove', nearestEmptyInsertDetectEvent);
    }, _offUpEvents: function() {
      var e=this.el.ownerDocument; off(e, 'mouseup', this._onDrop), off(e, 'touchend', this._onDrop), off(e, 'pointerup', this._onDrop), off(e, 'touchcancel', this._onDrop), off(document, 'selectstart', this);
    }, _onDrop: function(e) {
      var t=this.el; var n=this.options; Tr=sortable_esm_index(yr), Rr=sortable_esm_index(yr, n.draggable), pluginEvent('drop', this, {evt: e}), br=yr&&yr.parentNode, Tr=sortable_esm_index(yr), Rr=sortable_esm_index(yr, n.draggable), Sortable.eventCanceled||(Hr=!1, Gr=!1, $r=!1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), _cancelNextTick(this.cloneId), _cancelNextTick(this._dragStartId), this.nativeDraggable&&(off(document, 'drop', this), off(t, 'dragstart', this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), sr&&css(document.body, 'user-select', ''), css(yr, 'transform', ''), e&&(Br&&(e.cancelable&&e.preventDefault(), !n.dropBubble&&e.stopPropagation()), _r&&_r.parentNode&&_r.parentNode.removeChild(_r), (wr===br||Mr&&'clone'!==Mr.lastPutMode)&&Cr&&Cr.parentNode&&Cr.parentNode.removeChild(Cr), yr&&(this.nativeDraggable&&off(yr, 'dragend', this), _disableDraggable(yr), yr.style['will-change']='', Br&&!Hr&&toggleClass(yr, Mr?Mr.options.ghostClass:this.options.ghostClass, !1), toggleClass(yr, this.options.chosenClass, !1), _dispatchEvent({sortable: this, name: 'unchoose', toEl: br, newIndex: null, newDraggableIndex: null, originalEvent: e}), wr!==br?(Tr>=0&&(_dispatchEvent({rootEl: br, name: 'add', toEl: br, fromEl: wr, originalEvent: e}), _dispatchEvent({sortable: this, name: 'remove', toEl: br, originalEvent: e}), _dispatchEvent({rootEl: br, name: 'sort', toEl: br, fromEl: wr, originalEvent: e}), _dispatchEvent({sortable: this, name: 'sort', toEl: br, originalEvent: e})), Mr&&Mr.save()):Tr!==Or&&Tr>=0&&(_dispatchEvent({sortable: this, name: 'update', toEl: br, originalEvent: e}), _dispatchEvent({sortable: this, name: 'sort', toEl: br, originalEvent: e})), Sortable.active&&(null!=Tr&&-1!==Tr||(Tr=Or, Rr=Er), _dispatchEvent({sortable: this, name: 'end', toEl: br, originalEvent: e}), this.save())))), this._nulling();
    }, _nulling: function() {
      pluginEvent('nulling', this), wr=yr=br=_r=xr=Cr=kr=Sr=Ar=jr=Br=Tr=Rr=Or=Er=Ir=zr=Mr=Pr=Sortable.dragged=Sortable.ghost=Sortable.clone=Sortable.active=null, Xr.forEach((function(e) {
        e.checked=!0;
      })), Xr.length=Nr=Dr=0;
    }, handleEvent: function(e) {
      switch (e.type) {
        case 'drop': case 'dragend': this._onDrop(e); break; case 'dragenter': case 'dragover': yr&&(this._onDragOver(e), function(e) {
          e.dataTransfer&&(e.dataTransfer.dropEffect='move'); e.cancelable&&e.preventDefault();
        }(e)); break; case 'selectstart': e.preventDefault();
      }
    }, toArray: function() {
      for (var e, t=[], n=this.el.children, r=0, a=n.length, i=this.options; r<a; r++)closest(e=n[r], i.draggable, this.el, !1)&&t.push(e.getAttribute(i.dataIdAttr)||_generateId(e)); return t;
    }, sort: function(e, t) {
      var n={}; var r=this.el; this.toArray().forEach((function(e, t) {
        var a=r.children[t]; closest(a, this.options.draggable, r, !1)&&(n[e]=a);
      }), this), t&&this.captureAnimationState(), e.forEach((function(e) {
        n[e]&&(r.removeChild(n[e]), r.appendChild(n[e]));
      })), t&&this.animateAll();
    }, save: function() {
      var e=this.options.store; e&&e.set&&e.set(this);
    }, closest: function(e, t) {
      return closest(e, t||this.options.draggable, this.el, !1);
    }, option: function(e, t) {
      var n=this.options; if (void 0===t) return n[e]; var r=gr.modifyOption(this, e, t); n[e]=void 0!==r?r:t, 'group'===e&&_prepareGroup(n);
    }, destroy: function() {
      pluginEvent('destroy', this); var e=this.el; e[dr]=null, off(e, 'mousedown', this._onTapStart), off(e, 'touchstart', this._onTapStart), off(e, 'pointerdown', this._onTapStart), this.nativeDraggable&&(off(e, 'dragover', this), off(e, 'dragenter', this)), Array.prototype.forEach.call(e.querySelectorAll('[draggable]'), (function(e) {
        e.removeAttribute('draggable');
      })), this._onDrop(), this._disableDelayedDragEvents(), Wr.splice(Wr.indexOf(this.el), 1), this.el=e=null;
    }, _hideClone: function() {
      if (!Sr) {
        if (pluginEvent('hideClone', this), Sortable.eventCanceled) return; css(Cr, 'display', 'none'), this.options.removeCloneOnHide&&Cr.parentNode&&Cr.parentNode.removeChild(Cr), Sr=!0;
      }
    }, _showClone: function(e) {
      if ('clone'===e.lastPutMode) {
        if (Sr) {
          if (pluginEvent('showClone', this), Sortable.eventCanceled) return; yr.parentNode!=wr||this.options.group.revertClone?xr?wr.insertBefore(Cr, xr):wr.appendChild(Cr):wr.insertBefore(Cr, yr), this.options.group.revertClone&&this.animate(yr, Cr), css(Cr, 'display', ''), Sr=!1;
        }
      } else this._hideClone();
    }}, Zr&&sortable_esm_on(document, 'touchmove', (function(e) {
      (Sortable.active||Hr)&&e.cancelable&&e.preventDefault();
    })), Sortable.utils={on: sortable_esm_on, off: off, css: css, find: find, is: function(e, t) {
      return !!closest(e, t, e, !1);
    }, extend: function(e, t) {
      if (e&&t) for (var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]); return e;
    }, throttle: throttle, closest: closest, toggleClass: toggleClass, clone: sortable_esm_clone, index: sortable_esm_index, nextTick: _nextTick, cancelNextTick: _cancelNextTick, detectDirection: _detectDirection, getChild: getChild}, Sortable.get=function(e) {
      return e[dr];
    }, Sortable.mount=function() {
      for (var e=arguments.length, t=new Array(e), n=0; n<e; n++)t[n]=arguments[n]; t[0].constructor===Array&&(t=t[0]), t.forEach((function(e) {
        if (!e.prototype||!e.prototype.constructor) throw 'Sortable: Mounted plugin must be a constructor function, not '.concat({}.toString.call(e)); e.utils&&(Sortable.utils=_objectSpread2(_objectSpread2({}, Sortable.utils), e.utils)), gr.mount(e);
      }));
    }, Sortable.create=function(e, t) {
      return new Sortable(e, t);
    }, Sortable.version='1.15.0'; var na; var ra; var aa; var ia; var oa; var sa; var la=[]; var ua=!1; function clearAutoScrolls() {
      la.forEach((function(e) {
        clearInterval(e.pid);
      })), la=[];
    } function clearPointerElemChangedInterval() {
      clearInterval(sa);
    } var ca=throttle((function(e, t, n, r) {
      if (t.scroll) {
        var a; var i=(e.touches?e.touches[0]:e).clientX; var o=(e.touches?e.touches[0]:e).clientY; var s=t.scrollSensitivity; var l=t.scrollSpeed; var u=getWindowScrollingElement(); var c=!1; ra!==n&&(ra=n, clearAutoScrolls(), na=t.scroll, a=t.scrollFn, !0===na&&(na=getParentAutoScrollElement(n, !0))); var h=0; var f=na; do {
          var d=f; var p=getRect(d); var m=p.top; var g=p.bottom; var v=p.left; var y=p.right; var b=p.width; var w=p.height; var x=void 0; var k=void 0; var C=d.scrollWidth; var S=d.scrollHeight; var O=css(d); var T=d.scrollLeft; var E=d.scrollTop; d===u?(x=b<C&&('auto'===O.overflowX||'scroll'===O.overflowX||'visible'===O.overflowX), k=w<S&&('auto'===O.overflowY||'scroll'===O.overflowY||'visible'===O.overflowY)):(x=b<C&&('auto'===O.overflowX||'scroll'===O.overflowX), k=w<S&&('auto'===O.overflowY||'scroll'===O.overflowY)); var R=x&&(Math.abs(y-i)<=s&&T+b<C)-(Math.abs(v-i)<=s&&!!T); var P=k&&(Math.abs(g-o)<=s&&E+w<S)-(Math.abs(m-o)<=s&&!!E); if (!la[h]) for (var M=0; M<=h; M++)la[M]||(la[M]={}); la[h].vx==R&&la[h].vy==P&&la[h].el===d||(la[h].el=d, la[h].vx=R, la[h].vy=P, clearInterval(la[h].pid), 0==R&&0==P||(c=!0, la[h].pid=setInterval(function() {
            r&&0===this.layer&&Sortable.active._onTouchMove(oa); var t=la[this.layer].vy?la[this.layer].vy*l:0; var n=la[this.layer].vx?la[this.layer].vx*l:0; 'function'==typeof a&&'continue'!==a.call(Sortable.dragged.parentNode[dr], n, t, e, oa, la[this.layer].el)||scrollBy(la[this.layer].el, n, t);
          }.bind({layer: h}), 24))), h++;
        } while (t.bubbleScroll&&f!==u&&(f=getParentAutoScrollElement(f, !1))); ua=c;
      }
    }), 30); var drop=function(e) {
      var t=e.originalEvent; var n=e.putSortable; var r=e.dragEl; var a=e.activeSortable; var i=e.dispatchSortableEvent; var o=e.hideGhostForTarget; var s=e.unhideGhostForTarget; if (t) {
        var l=n||a; o(); var u=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t; var c=document.elementFromPoint(u.clientX, u.clientY); s(), l&&!l.el.contains(c)&&(i('spill'), this.onSpill({dragEl: r, putSortable: n}));
      }
    }; function Revert() {} function Remove() {}Revert.prototype={startIndex: null, dragStart: function(e) {
      var t=e.oldDraggableIndex; this.startIndex=t;
    }, onSpill: function(e) {
      var t=e.dragEl; var n=e.putSortable; this.sortable.captureAnimationState(), n&&n.captureAnimationState(); var r=getChild(this.sortable.el, this.startIndex, this.options); r?this.sortable.el.insertBefore(t, r):this.sortable.el.appendChild(t), this.sortable.animateAll(), n&&n.animateAll();
    }, drop: drop}, _extends(Revert, {pluginName: 'revertOnSpill'}), Remove.prototype={onSpill: function(e) {
      var t=e.dragEl; var n=e.putSortable||this.sortable; n.captureAnimationState(), t.parentNode&&t.parentNode.removeChild(t), n.animateAll();
    }, drop: drop}, _extends(Remove, {pluginName: 'removeOnSpill'}); Sortable.mount(new function() {
      function AutoScroll() {
        for (var e in this.defaults={scroll: !0, forceAutoScrollFallback: !1, scrollSensitivity: 30, scrollSpeed: 10, bubbleScroll: !0}, this)'_'===e.charAt(0)&&'function'==typeof this[e]&&(this[e]=this[e].bind(this));
      } return AutoScroll.prototype={dragStarted: function(e) {
        var t=e.originalEvent; this.sortable.nativeDraggable?sortable_esm_on(document, 'dragover', this._handleAutoScroll):this.options.supportPointer?sortable_esm_on(document, 'pointermove', this._handleFallbackAutoScroll):t.touches?sortable_esm_on(document, 'touchmove', this._handleFallbackAutoScroll):sortable_esm_on(document, 'mousemove', this._handleFallbackAutoScroll);
      }, dragOverCompleted: function(e) {
        var t=e.originalEvent; this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t);
      }, drop: function() {
this.sortable.nativeDraggable?off(document, 'dragover', this._handleAutoScroll):(off(document, 'pointermove', this._handleFallbackAutoScroll), off(document, 'touchmove', this._handleFallbackAutoScroll), off(document, 'mousemove', this._handleFallbackAutoScroll)), clearPointerElemChangedInterval(), clearAutoScrolls(), clearTimeout(hr), hr=void 0;
      }, nulling: function() {
        oa=ra=na=ua=sa=aa=ia=null, la.length=0;
      }, _handleFallbackAutoScroll: function(e) {
        this._handleAutoScroll(e, !0);
      }, _handleAutoScroll: function(e, t) {
        var n=this; var r=(e.touches?e.touches[0]:e).clientX; var a=(e.touches?e.touches[0]:e).clientY; var i=document.elementFromPoint(r, a); if (oa=e, t||this.options.forceAutoScrollFallback||ir||ar||sr) {
          ca(e, this.options, i, t); var o=getParentAutoScrollElement(i, !0); !ua||sa&&r===aa&&a===ia||(sa&&clearPointerElemChangedInterval(), sa=setInterval((function() {
            var i=getParentAutoScrollElement(document.elementFromPoint(r, a), !0); i!==o&&(o=i, clearAutoScrolls()), ca(e, n.options, i, t);
          }), 10), aa=r, ia=a);
        } else {
          if (!this.options.bubbleScroll||getParentAutoScrollElement(i, !0)===getWindowScrollingElement()) return void clearAutoScrolls(); ca(e, this.options, getParentAutoScrollElement(i, !1), !1);
        }
      }}, _extends(AutoScroll, {pluginName: 'scroll', initializeByDefault: !0});
    }), Sortable.mount(Remove, Revert); var ha; var fa=Sortable; var da=(n(210), n(113)); var pa=n.n(da); function LoaderView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var ma; var ga=Object(Nt.d)({text: 'Loading...'})(ha=function(e) {
      m()(LoaderView, e); var t=LoaderView_createSuper(LoaderView); function LoaderView() {
        var e; s()(this, LoaderView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', pa.a), e;
      } return u()(LoaderView, [{key: 'initialize', value: function(e) {
        this.options=e;
      }}, {key: 'serializeData', value: function() {
        return this.options;
      }}]), LoaderView;
    }(St.View))||ha; function WidgetsGridView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var va=Object(Nt.b)('widgets-grid')(ma=function(e) {
      m()(WidgetsGridView, e); var t=WidgetsGridView_createSuper(WidgetsGridView); function WidgetsGridView() {
        var e; s()(this, WidgetsGridView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', (function() {
          return '';
        })), e;
      } return u()(WidgetsGridView, [{key: 'initialize', value: function() {
        this.widgets=tr.a.widgets[this.options.tabName], this.settings=this.options.settings||Object(tn.d)(this.options.tabName);
      }}, {key: 'onRender', value: function() {
        var e=this; this.getWidgetsArrangement().map((function(t) {
          return t.map((function(t) {
            return [t, e.widgets[t].widget, e.widgets[t].model];
          }));
        })).forEach((function(t) {
          var n=a()('<div class="widgets-grid__col"></div>'); e.$el.append(n), t.forEach((function(t) {
            var r=rr()(t, 3); var a=r[0]; var i=r[1]; var o=r[2]; e.addWidget(n, a, i, o);
          }));
        })), this.$('.widgets-grid__col').each((function(t, n) {
          return new fa(n, {group: 'widgets', ghostClass: 'widget_ghost', handle: '.widget__handle', onEnd: e.saveWidgetsArrangement.bind(e)});
        }));
      }}, {key: 'getWidgetsArrangement', value: function() {
        var e=this; var t=this.settings.getWidgetsArrangement().map((function(t) {
          return t.filter((function(t) {
            return e.widgets[t];
          }));
        })); return Object.keys(this.widgets).forEach((function(e) {
          t.every((function(t) {
            return -1===t.indexOf(e);
          }))&&t.reduce((function(e, t) {
            return t.length<e.length?t:e;
          })).push(e);
        })), t;
      }}, {key: 'saveWidgetsArrangement', value: function() {
        this.settings.setWidgetsArrangement(this.$('.widgets-grid__col').toArray().map((function(e) {
          return a()(e).find('.widget').toArray().map((function(e) {
            return a()(e).data('id');
          }));
        })));
      }}, {key: 'addWidget', value: function(e, t, n, r) {
        var i=a()('<div class="widget island" data-id="'.concat(t, '">\n    <div class="widget__handle">\n        <span class="draggable-icon"></span>\n    </div>\n    <div class="widget__body"></div>\n</div>')); e.append(i), this.addRegion(t, {el: i.find('.widget__body')}); var o=new r({}, {name: t}); !function(e, t, n, r) {
          var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function() {}; e.showChildView(t, new ga), n.fetch().then((function() {
            e.showChildView(t, r), a();
          }));
        }(this, t, o, new n({model: o}));
      }}]), WidgetsGridView;
    }(St.View))||ma; function OverviewLayout_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var ya=function(e) {
      m()(OverviewLayout, e); var t=OverviewLayout_createSuper(OverviewLayout); function OverviewLayout() {
        return s()(this, OverviewLayout), t.apply(this, arguments);
      } return u()(OverviewLayout, [{key: 'getContentView', value: function() {
        return new va({tabName: 'widgets'});
      }}]), OverviewLayout;
    }(At.a); allure.api.addTab('', {title: 'tab.overview.name', icon: 'fa fa-home', route: '', onEnter: function() {
      return new ya({tabName: 'tab.overview.name'});
    }}); n(211), n(212); function GraphCollection_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var ba=function(e) {
      m()(GraphCollection, e); var t=GraphCollection_createSuper(GraphCollection); function GraphCollection() {
        var e; s()(this, GraphCollection); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'url', 'widgets/status-chart.json'), e;
      } return u()(GraphCollection);
    }(ut.Collection); function GraphLayout_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var _a=function(e) {
      m()(GraphLayout, e); var t=GraphLayout_createSuper(GraphLayout); function GraphLayout() {
        return s()(this, GraphLayout), t.apply(this, arguments);
      } return u()(GraphLayout, [{key: 'initialize', value: function() {
        this.collection=new ba;
      }}, {key: 'loadData', value: function() {
        return this.collection.fetch();
      }}, {key: 'getContentView', value: function() {
        return new va({model: this.collection, tabName: 'graph'});
      }}]), GraphLayout;
    }(At.a); allure.api.addTab('graph', {title: 'tab.graph.name', icon: 'fa fa-bar-chart', route: 'graph', onEnter: function() {
      return new _a;
    }}); var wa=n(34); var xa=n.n(wa); var ka=(n(213), {value: function() {}}); function dispatch_dispatch() {
      for (var e, t=0, n=arguments.length, r={}; t<n; ++t) {
        if (!(e=arguments[t]+'')||e in r||/[\s.]/.test(e)) throw new Error('illegal type: '+e); r[e]=[];
      } return new Dispatch(r);
    } function Dispatch(e) {
      this._=e;
    } function dispatch_parseTypenames(e, t) {
      return e.trim().split(/^|\s+/).map((function(e) {
        var n=''; var r=e.indexOf('.'); if (r>=0&&(n=e.slice(r+1), e=e.slice(0, r)), e&&!t.hasOwnProperty(e)) throw new Error('unknown type: '+e); return {type: e, name: n};
      }));
    } function dispatch_get(e, t) {
      for (var n, r=0, a=e.length; r<a; ++r) if ((n=e[r]).name===t) return n.value;
    } function dispatch_set(e, t, n) {
      for (var r=0, a=e.length; r<a; ++r) {
        if (e[r].name===t) {
          e[r]=ka, e=e.slice(0, r).concat(e.slice(r+1)); break;
        }
      } return null!=n&&e.push({name: t, value: n}), e;
    }Dispatch.prototype=dispatch_dispatch.prototype={constructor: Dispatch, on: function(e, t) {
      var n; var r=this._; var a=dispatch_parseTypenames(e+'', r); var i=-1; var o=a.length; if (!(arguments.length<2)) {
        if (null!=t&&'function'!=typeof t) throw new Error('invalid callback: '+t); for (;++i<o;) if (n=(e=a[i]).type)r[n]=dispatch_set(r[n], e.name, t); else if (null==t) for (n in r)r[n]=dispatch_set(r[n], e.name, null); return this;
      } for (;++i<o;) if ((n=(e=a[i]).type)&&(n=dispatch_get(r[n], e.name))) return n;
    }, copy: function() {
      var e={}; var t=this._; for (var n in t)e[n]=t[n].slice(); return new Dispatch(e);
    }, call: function(e, t) {
      if ((n=arguments.length-2)>0) for (var n, r, a=new Array(n), i=0; i<n; ++i)a[i]=arguments[i+2]; if (!this._.hasOwnProperty(e)) throw new Error('unknown type: '+e); for (i=0, n=(r=this._[e]).length; i<n; ++i)r[i].value.apply(t, a);
    }, apply: function(e, t, n) {
      if (!this._.hasOwnProperty(e)) throw new Error('unknown type: '+e); for (var r=this._[e], a=0, i=r.length; a<i; ++a)r[a].value.apply(t, n);
    }}; var Ca=dispatch_dispatch; function nopropagation() {
      pt.stopImmediatePropagation();
    } var noevent=function() {
      pt.preventDefault(), pt.stopImmediatePropagation();
    }; var nodrag=function(e) {
      var t=e.document.documentElement; var n=src_select(e).on('dragstart.drag', noevent, !0); 'onselectstart'in t?n.on('selectstart.drag', noevent, !0):(t.__noselect=t.style.MozUserSelect, t.style.MozUserSelect='none');
    }; function yesdrag(e, t) {
      var n=e.document.documentElement; var r=src_select(e).on('dragstart.drag', null); t&&(r.on('click.drag', noevent, !0), setTimeout((function() {
        r.on('click.drag', null);
      }), 0)), 'onselectstart'in n?r.on('selectstart.drag', null):(n.style.MozUserSelect=n.__noselect, delete n.__noselect);
    } var Sa; var Oa; var sourceEvent=function() {
      for (var e, t=pt; e=t.sourceEvent;)t=e; return t;
    }; var src_point=function(e, t) {
      var n=e.ownerSVGElement||e; if (n.createSVGPoint) {
        var r=n.createSVGPoint(); return r.x=t.clientX, r.y=t.clientY, [(r=r.matrixTransform(e.getScreenCTM().inverse())).x, r.y];
      } var a=e.getBoundingClientRect(); return [t.clientX-a.left-e.clientLeft, t.clientY-a.top-e.clientTop];
    }; var src_touch=function(e, t, n) {
      arguments.length<3&&(n=t, t=sourceEvent().changedTouches); for (var r, a=0, i=t?t.length:0; a<i; ++a) if ((r=t[a]).identifier===n) return src_point(e, r); return null;
    }; var mouse=function(e) {
      var t=sourceEvent(); return t.changedTouches&&(t=t.changedTouches[0]), src_point(e, t);
    }; var Ta=0; var Ea=0; var Ra=0; var Pa=0; var Ma=0; var Aa=0; var ja='object'==typeof performance&&performance.now?performance:Date; var Na='object'==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e) {
      setTimeout(e, 17);
    }; function now() {
      return Ma||(Na(clearNow), Ma=ja.now()+Aa);
    } function clearNow() {
      Ma=0;
    } function Timer() {
      this._call=this._time=this._next=null;
    } function timer(e, t, n) {
      var r=new Timer; return r.restart(e, t, n), r;
    } function wake() {
      Ma=(Pa=ja.now())+Aa, Ta=Ea=0; try {
        !function() {
          now(), ++Ta; for (var e, t=Sa; t;)(e=Ma-t._time)>=0&&t._call.call(null, e), t=t._next; --Ta;
        }();
      } finally {
        Ta=0, function() {
          var e; var t; var n=Sa; var r=1/0; for (;n;)n._call?(r>n._time&&(r=n._time), e=n, n=n._next):(t=n._next, n._next=null, n=e?e._next=t:Sa=t); Oa=e, sleep(r);
        }(), Ma=0;
      }
    } function poke() {
      var e=ja.now(); var t=e-Pa; t>1e3&&(Aa-=t, Pa=e);
    } function sleep(e) {
      Ta||(Ea&&(Ea=clearTimeout(Ea)), e-Ma>24?(e<1/0&&(Ea=setTimeout(wake, e-ja.now()-Aa)), Ra&&(Ra=clearInterval(Ra))):(Ra||(Pa=ja.now(), Ra=setInterval(poke, 1e3)), Ta=1, Na(wake)));
    }Timer.prototype=timer.prototype={constructor: Timer, restart: function(e, t, n) {
      if ('function'!=typeof e) throw new TypeError('callback is not a function'); n=(null==n?now():+n)+(null==t?0:+t), this._next||Oa===this||(Oa?Oa._next=this:Sa=this, Oa=this), this._call=e, this._time=n, sleep();
    }, stop: function() {
      this._call&&(this._call=null, this._time=1/0, sleep());
    }}; var src_timeout=function(e, t, n) {
      var r=new Timer; return t=null==t?0:+t, r.restart((function(n) {
        r.stop(), e(n+t);
      }), t, n), r;
    }; var Da=Ca('start', 'end', 'cancel', 'interrupt'); var Va=[]; var transition_schedule=function(e, t, n, r, a, i) {
      var o=e.__transition; if (o) {
        if (n in o) return;
      } else e.__transition={}; !function(e, t, n) {
        var r; var a=e.__transition; function start(i) {
          var o; var s; var l; var u; if (1!==n.state) return stop(); for (o in a) {
            if ((u=a[o]).name===n.name) {
              if (3===u.state) return src_timeout(start); 4===u.state?(u.state=6, u.timer.stop(), u.on.call('interrupt', e, e.__data__, u.index, u.group), delete a[o]):+o<t&&(u.state=6, u.timer.stop(), u.on.call('cancel', e, e.__data__, u.index, u.group), delete a[o]);
            }
          } if (src_timeout((function() {
            3===n.state&&(n.state=4, n.timer.restart(tick, n.delay, n.time), tick(i));
          })), n.state=2, n.on.call('start', e, e.__data__, n.index, n.group), 2===n.state) {
            for (n.state=3, r=new Array(l=n.tween.length), o=0, s=-1; o<l; ++o)(u=n.tween[o].value.call(e, e.__data__, n.index, n.group))&&(r[++s]=u); r.length=s+1;
          }
        } function tick(t) {
          for (var a=t<n.duration?n.ease.call(null, t/n.duration):(n.timer.restart(stop), n.state=5, 1), i=-1, o=r.length; ++i<o;)r[i].call(e, a); 5===n.state&&(n.on.call('end', e, e.__data__, n.index, n.group), stop());
        } function stop() {
          for (var r in n.state=6, n.timer.stop(), delete a[t], a) return; delete e.__transition;
        }a[t]=n, n.timer=timer((function(e) {
          n.state=1, n.timer.restart(start, n.delay, n.time), n.delay<=e&&start(e-n.delay);
        }), 0, n.time);
      }(e, n, {name: t, index: r, group: a, on: Da, tween: Va, time: i.time, delay: i.delay, duration: i.duration, ease: i.ease, timer: null, state: 0});
    }; function init(e, t) {
      var n=schedule_get(e, t); if (n.state>0) throw new Error('too late; already scheduled'); return n;
    } function schedule_set(e, t) {
      var n=schedule_get(e, t); if (n.state>3) throw new Error('too late; already running'); return n;
    } function schedule_get(e, t) {
      var n=e.__transition; if (!n||!(n=n[t])) throw new Error('transition not found'); return n;
    } var La; var Ba; var Ia; var za; var interrupt=function(e, t) {
      var n; var r; var a; var i=e.__transition; var o=!0; if (i) {
        for (a in t=null==t?null:t+'', i)(n=i[a]).name===t?(r=n.state>2&&n.state<5, n.state=6, n.timer.stop(), n.on.call(r?'interrupt':'cancel', e, e.__data__, n.index, n.group), delete i[a]):o=!1; o&&delete e.__transition;
      }
    }; var Fa=180/Math.PI; var Ua={translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1}; var decompose=function(e, t, n, r, a, i) {
      var o; var s; var l; return (o=Math.sqrt(e*e+t*t))&&(e/=o, t/=o), (l=e*n+t*r)&&(n-=e*l, r-=t*l), (s=Math.sqrt(n*n+r*r))&&(n/=s, r/=s, l/=s), e*r<t*n&&(e=-e, t=-t, l=-l, o=-o), {translateX: a, translateY: i, rotate: Math.atan2(t, e)*Fa, skewX: Math.atan(l)*Fa, scaleX: o, scaleY: s};
    }; function interpolateTransform(e, t, n, r) {
      function pop(e) {
        return e.length?e.pop()+' ':'';
      } return function(a, i) {
        var o=[]; var s=[]; return a=e(a), i=e(i), function(e, r, a, i, o, s) {
          if (e!==a||r!==i) {
            var l=o.push('translate(', null, t, null, n); s.push({i: l-4, x: src_number(e, a)}, {i: l-2, x: src_number(r, i)});
          } else (a||i)&&o.push('translate('+a+t+i+n);
        }(a.translateX, a.translateY, i.translateX, i.translateY, o, s), function(e, t, n, a) {
e!==t?(e-t>180?t+=360:t-e>180&&(e+=360), a.push({i: n.push(pop(n)+'rotate(', null, r)-2, x: src_number(e, t)})):t&&n.push(pop(n)+'rotate('+t+r);
        }(a.rotate, i.rotate, o, s), function(e, t, n, a) {
e!==t?a.push({i: n.push(pop(n)+'skewX(', null, r)-2, x: src_number(e, t)}):t&&n.push(pop(n)+'skewX('+t+r);
        }(a.skewX, i.skewX, o, s), function(e, t, n, r, a, i) {
          if (e!==n||t!==r) {
            var o=a.push(pop(a)+'scale(', null, ',', null, ')'); i.push({i: o-4, x: src_number(e, n)}, {i: o-2, x: src_number(t, r)});
          } else 1===n&&1===r||a.push(pop(a)+'scale('+n+','+r+')');
        }(a.scaleX, a.scaleY, i.scaleX, i.scaleY, o, s), a=i=null, function(e) {
          for (var t, n=-1, r=s.length; ++n<r;)o[(t=s[n]).i]=t.x(e); return o.join('');
        };
      };
    } var Ha=interpolateTransform((function(e) {
      return 'none'===e?Ua:(La||(La=document.createElement('DIV'), Ba=document.documentElement, Ia=document.defaultView), La.style.transform=e, e=Ia.getComputedStyle(Ba.appendChild(La), null).getPropertyValue('transform'), Ba.removeChild(La), e=e.slice(7, -1).split(','), decompose(+e[0], +e[1], +e[2], +e[3], +e[4], +e[5]));
    }), 'px, ', 'px)', 'deg)'); var qa=interpolateTransform((function(e) {
      return null==e?Ua:(za||(za=document.createElementNS('http://www.w3.org/2000/svg', 'g')), za.setAttribute('transform', e), (e=za.transform.baseVal.consolidate())?(e=e.matrix, decompose(e.a, e.b, e.c, e.d, e.e, e.f)):Ua);
    }), ', ', ')', ')'); function tweenRemove(e, t) {
      var n; var r; return function() {
        var a=schedule_set(this, e); var i=a.tween; if (i!==n) {
          for (var o=0, s=(r=n=i).length; o<s; ++o) {
            if (r[o].name===t) {
              (r=r.slice()).splice(o, 1); break;
            }
          }
        }a.tween=r;
      };
    } function tweenFunction(e, t, n) {
      var r; var a; if ('function'!=typeof n) throw new Error; return function() {
        var i=schedule_set(this, e); var o=i.tween; if (o!==r) {
          a=(r=o).slice(); for (var s={name: t, value: n}, l=0, u=a.length; l<u; ++l) {
            if (a[l].name===t) {
              a[l]=s; break;
            }
          }l===u&&a.push(s);
        }i.tween=a;
      };
    } function tweenValue(e, t, n) {
      var r=e._id; return e.each((function() {
        var e=schedule_set(this, r); (e.value||(e.value={}))[t]=n.apply(this, arguments);
      })), function(e) {
        return schedule_get(e, r).value[t];
      };
    } var transition_interpolate=function(e, t) {
      var n; return ('number'==typeof t?src_number:t instanceof color_color?X:(n=color_color(t))?(t=n, X):src_string)(e, t);
    }; function attr_attrRemove(e) {
      return function() {
        this.removeAttribute(e);
      };
    } function attr_attrRemoveNS(e) {
      return function() {
        this.removeAttributeNS(e.space, e.local);
      };
    } function attr_attrConstant(e, t, n) {
      var r; var a; var i=n+''; return function() {
        var o=this.getAttribute(e); return o===i?null:o===r?a:a=t(r=o, n);
      };
    } function attr_attrConstantNS(e, t, n) {
      var r; var a; var i=n+''; return function() {
        var o=this.getAttributeNS(e.space, e.local); return o===i?null:o===r?a:a=t(r=o, n);
      };
    } function attr_attrFunction(e, t, n) {
      var r; var a; var i; return function() {
        var o; var s; var l=n(this); if (null!=l) return (o=this.getAttribute(e))===(s=l+'')?null:o===r&&s===a?i:(a=s, i=t(r=o, l)); this.removeAttribute(e);
      };
    } function attr_attrFunctionNS(e, t, n) {
      var r; var a; var i; return function() {
        var o; var s; var l=n(this); if (null!=l) return (o=this.getAttributeNS(e.space, e.local))===(s=l+'')?null:o===r&&s===a?i:(a=s, i=t(r=o, l)); this.removeAttributeNS(e.space, e.local);
      };
    } function attrInterpolate(e, t) {
      return function(n) {
        this.setAttribute(e, t.call(this, n));
      };
    } function attrInterpolateNS(e, t) {
      return function(n) {
        this.setAttributeNS(e.space, e.local, t.call(this, n));
      };
    } function attrTweenNS(e, t) {
      var n; var r; function tween() {
        var a=t.apply(this, arguments); return a!==r&&(n=(r=a)&&attrInterpolateNS(e, a)), n;
      } return tween._value=t, tween;
    } function attrTween(e, t) {
      var n; var r; function tween() {
        var a=t.apply(this, arguments); return a!==r&&(n=(r=a)&&attrInterpolate(e, a)), n;
      } return tween._value=t, tween;
    } function delayFunction(e, t) {
      return function() {
        init(this, e).delay=+t.apply(this, arguments);
      };
    } function delayConstant(e, t) {
      return t=+t, function() {
        init(this, e).delay=t;
      };
    } function durationFunction(e, t) {
      return function() {
        schedule_set(this, e).duration=+t.apply(this, arguments);
      };
    } function durationConstant(e, t) {
      return t=+t, function() {
        schedule_set(this, e).duration=t;
      };
    } function easeConstant(e, t) {
      if ('function'!=typeof t) throw new Error; return function() {
        schedule_set(this, e).ease=t;
      };
    } function onFunction(e, t, n) {
      var r; var a; var i=function(e) {
        return (e+'').trim().split(/^|\s+/).every((function(e) {
          var t=e.indexOf('.'); return t>=0&&(e=e.slice(0, t)), !e||'start'===e;
        }));
      }(t)?init:schedule_set; return function() {
        var o=i(this, e); var s=o.on; s!==r&&(a=(r=s).copy()).on(t, n), o.on=a;
      };
    } var Wa=gt.prototype.constructor; function style_styleRemove(e) {
      return function() {
        this.style.removeProperty(e);
      };
    } function styleInterpolate(e, t, n) {
      return function(r) {
        this.style.setProperty(e, t.call(this, r), n);
      };
    } function styleTween(e, t, n) {
      var r; var a; function tween() {
        var i=t.apply(this, arguments); return i!==a&&(r=(a=i)&&styleInterpolate(e, i, n)), r;
      } return tween._value=t, tween;
    } function textInterpolate(e) {
      return function(t) {
        this.textContent=e.call(this, t);
      };
    } function textTween(e) {
      var t; var n; function tween() {
        var r=e.apply(this, arguments); return r!==n&&(t=(n=r)&&textInterpolate(r)), t;
      } return tween._value=e, tween;
    } var $a=0; function Transition(e, t, n, r) {
      this._groups=e, this._parents=t, this._name=n, this._id=r;
    } function src_transition_transition(e) {
      return gt().transition(e);
    } function newId() {
      return ++$a;
    } var Ga=gt.prototype; Transition.prototype=src_transition_transition.prototype={constructor: Transition, select: function(e) {
      var t=this._name; var n=this._id; 'function'!=typeof e&&(e=src_selector(e)); for (var r=this._groups, a=r.length, i=new Array(a), o=0; o<a; ++o) for (var s, l, u=r[o], c=u.length, h=i[o]=new Array(c), f=0; f<c; ++f)(s=u[f])&&(l=e.call(s, s.__data__, f, u))&&('__data__'in s&&(l.__data__=s.__data__), h[f]=l, transition_schedule(h[f], t, n, f, h, schedule_get(s, n))); return new Transition(i, this._parents, t, n);
    }, selectAll: function(e) {
      var t=this._name; var n=this._id; 'function'!=typeof e&&(e=selectorAll(e)); for (var r=this._groups, a=r.length, i=[], o=[], s=0; s<a; ++s) {
        for (var l, u=r[s], c=u.length, h=0; h<c; ++h) {
          if (l=u[h]) {
            for (var f, d=e.call(l, l.__data__, h, u), p=schedule_get(l, n), m=0, g=d.length; m<g; ++m)(f=d[m])&&transition_schedule(f, t, n, m, d, p); i.push(d), o.push(l);
          }
        }
      } return new Transition(i, o, t, n);
    }, filter: function(e) {
      'function'!=typeof e&&(e=matcher(e)); for (var t=this._groups, n=t.length, r=new Array(n), a=0; a<n; ++a) for (var i, o=t[a], s=o.length, l=r[a]=[], u=0; u<s; ++u)(i=o[u])&&e.call(i, i.__data__, u, o)&&l.push(i); return new Transition(r, this._parents, this._name, this._id);
    }, merge: function(e) {
      if (e._id!==this._id) throw new Error; for (var t=this._groups, n=e._groups, r=t.length, a=n.length, i=Math.min(r, a), o=new Array(r), s=0; s<i; ++s) for (var l, u=t[s], c=n[s], h=u.length, f=o[s]=new Array(h), d=0; d<h; ++d)(l=u[d]||c[d])&&(f[d]=l); for (;s<r; ++s)o[s]=t[s]; return new Transition(o, this._parents, this._name, this._id);
    }, selection: function() {
      return new Wa(this._groups, this._parents);
    }, transition: function() {
      for (var e=this._name, t=this._id, n=newId(), r=this._groups, a=r.length, i=0; i<a; ++i) {
        for (var o, s=r[i], l=s.length, u=0; u<l; ++u) {
          if (o=s[u]) {
            var c=schedule_get(o, t); transition_schedule(o, e, n, u, s, {time: c.time+c.delay+c.duration, delay: 0, duration: c.duration, ease: c.ease});
          }
        }
      } return new Transition(r, this._parents, e, n);
    }, call: Ga.call, nodes: Ga.nodes, node: Ga.node, size: Ga.size, empty: Ga.empty, each: Ga.each, on: function(e, t) {
      var n=this._id; return arguments.length<2?schedule_get(this.node(), n).on.on(e):this.each(onFunction(n, e, t));
    }, attr: function(e, t) {
      var n=namespace(e); var r='transform'===n?qa:transition_interpolate; return this.attrTween(e, 'function'==typeof t?(n.local?attr_attrFunctionNS:attr_attrFunction)(n, r, tweenValue(this, 'attr.'+e, t)):null==t?(n.local?attr_attrRemoveNS:attr_attrRemove)(n):(n.local?attr_attrConstantNS:attr_attrConstant)(n, r, t));
    }, attrTween: function(e, t) {
      var n='attr.'+e; if (arguments.length<2) return (n=this.tween(n))&&n._value; if (null==t) return this.tween(n, null); if ('function'!=typeof t) throw new Error; var r=namespace(e); return this.tween(n, (r.local?attrTweenNS:attrTween)(r, t));
    }, style: function(e, t, n) {
      var r='transform'==(e+='')?Ha:transition_interpolate; return null==t?this.styleTween(e, function(e, t) {
        var n; var r; var a; return function() {
          var i=styleValue(this, e); var o=(this.style.removeProperty(e), styleValue(this, e)); return i===o?null:i===n&&o===r?a:a=t(n=i, r=o);
        };
      }(e, r)).on('end.style.'+e, style_styleRemove(e)):'function'==typeof t?this.styleTween(e, function(e, t, n) {
        var r; var a; var i; return function() {
          var o=styleValue(this, e); var s=n(this); var l=s+''; return null==s&&(this.style.removeProperty(e), l=s=styleValue(this, e)), o===l?null:o===r&&l===a?i:(a=l, i=t(r=o, s));
        };
      }(e, r, tweenValue(this, 'style.'+e, t))).each(function(e, t) {
        var n; var r; var a; var i; var o='style.'+t; var s='end.'+o; return function() {
          var l=schedule_set(this, e); var u=l.on; var c=null==l.value[o]?i||(i=style_styleRemove(t)):void 0; u===n&&a===c||(r=(n=u).copy()).on(s, a=c), l.on=r;
        };
      }(this._id, e)):this.styleTween(e, function(e, t, n) {
        var r; var a; var i=n+''; return function() {
          var o=styleValue(this, e); return o===i?null:o===r?a:a=t(r=o, n);
        };
      }(e, r, t), n).on('end.style.'+e, null);
    }, styleTween: function(e, t, n) {
      var r='style.'+(e+=''); if (arguments.length<2) return (r=this.tween(r))&&r._value; if (null==t) return this.tween(r, null); if ('function'!=typeof t) throw new Error; return this.tween(r, styleTween(e, t, null==n?'':n));
    }, text: function(e) {
      return this.tween('text', 'function'==typeof e?function(e) {
        return function() {
          var t=e(this); this.textContent=null==t?'':t;
        };
      }(tweenValue(this, 'text', e)):function(e) {
        return function() {
          this.textContent=e;
        };
      }(null==e?'':e+''));
    }, textTween: function(e) {
      var t='text'; if (arguments.length<1) return (t=this.tween(t))&&t._value; if (null==e) return this.tween(t, null); if ('function'!=typeof e) throw new Error; return this.tween(t, textTween(e));
    }, remove: function() {
      return this.on('end.remove', (e=this._id, function() {
        var t=this.parentNode; for (var n in this.__transition) if (+n!==e) return; t&&t.removeChild(this);
      })); var e;
    }, tween: function(e, t) {
      var n=this._id; if (e+='', arguments.length<2) {
        for (var r, a=schedule_get(this.node(), n).tween, i=0, o=a.length; i<o; ++i) if ((r=a[i]).name===e) return r.value; return null;
      } return this.each((null==t?tweenRemove:tweenFunction)(n, e, t));
    }, delay: function(e) {
      var t=this._id; return arguments.length?this.each(('function'==typeof e?delayFunction:delayConstant)(t, e)):schedule_get(this.node(), t).delay;
    }, duration: function(e) {
      var t=this._id; return arguments.length?this.each(('function'==typeof e?durationFunction:durationConstant)(t, e)):schedule_get(this.node(), t).duration;
    }, ease: function(e) {
      var t=this._id; return arguments.length?this.each(easeConstant(t, e)):schedule_get(this.node(), t).ease;
    }, end: function() {
      var e; var t; var n=this; var r=n._id; var a=n.size(); return new Promise((function(i, o) {
        var s={value: o}; var l={value: function() {
          0==--a&&i();
        }}; n.each((function() {
          var n=schedule_set(this, r); var a=n.on; a!==e&&((t=(e=a).copy())._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), n.on=t;
        }));
      }));
    }}; var Ya={time: null, delay: 0, duration: 250, ease: function(e) {
      return ((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2;
    }}; function transition_inherit(e, t) {
      for (var n; !(n=e.__transition)||!(n=n[t]);) if (!(e=e.parentNode)) return Ya.time=now(), Ya; return n;
    }gt.prototype.interrupt=function(e) {
      return this.each((function() {
        interrupt(this, e);
      }));
    }, gt.prototype.transition=function(e) {
      var t; var n; e instanceof Transition?(t=e._id, e=e._name):(t=newId(), (n=Ya).time=now(), e=null==e?null:e+''); for (var r=this._groups, a=r.length, i=0; i<a; ++i) for (var o, s=r[i], l=s.length, u=0; u<l; ++u)(o=s[u])&&transition_schedule(o, e, t, u, s, n||transition_inherit(o, t)); return new Transition(r, this._parents, e, t);
    }; var d3_brush_src_constant=function(e) {
      return function() {
        return e;
      };
    }; var src_event=function(e, t, n) {
      this.target=e, this.type=t, this.selection=n;
    }; function noevent_nopropagation() {
      pt.stopImmediatePropagation();
    } var src_noevent=function() {
      pt.preventDefault(), pt.stopImmediatePropagation();
    }; var Ka={name: 'drag'}; var Xa={name: 'space'}; var Za={name: 'handle'}; var Ja={name: 'center'}; function number1(e) {
      return [+e[0], +e[1]];
    } function number2(e) {
      return [number1(e[0]), number1(e[1])];
    } function toucher(e) {
      return function(t) {
        return src_touch(t, pt.touches, e);
      };
    } var Qa={name: 'x', handles: ['w', 'e'].map(brush_type), input: function(e, t) {
      return null==e?null:[[+e[0], t[0][1]], [+e[1], t[1][1]]];
    }, output: function(e) {
      return e&&[e[0][0], e[1][0]];
    }}; var ei={name: 'y', handles: ['n', 's'].map(brush_type), input: function(e, t) {
      return null==e?null:[[t[0][0], +e[0]], [t[1][0], +e[1]]];
    }, output: function(e) {
      return e&&[e[0][1], e[1][1]];
    }}; var ti=(['n', 'w', 'e', 's', 'nw', 'ne', 'sw', 'se'].map(brush_type), {overlay: 'crosshair', selection: 'move', n: 'ns-resize', e: 'ew-resize', s: 'ns-resize', w: 'ew-resize', nw: 'nwse-resize', ne: 'nesw-resize', se: 'nwse-resize', sw: 'nesw-resize'}); var ni={e: 'w', w: 'e', nw: 'ne', ne: 'nw', se: 'sw', sw: 'se'}; var ri={n: 's', s: 'n', nw: 'sw', ne: 'se', se: 'ne', sw: 'nw'}; var ai={overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1}; var ii={overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1}; function brush_type(e) {
      return {type: e};
    } function defaultFilter() {
      return !pt.ctrlKey&&!pt.button;
    } function defaultExtent() {
      var e=this.ownerSVGElement||this; return e.hasAttribute('viewBox')?[[(e=e.viewBox.baseVal).x, e.y], [e.x+e.width, e.y+e.height]]:[[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
    } function defaultTouchable() {
      return navigator.maxTouchPoints||'ontouchstart'in this;
    } function local(e) {
      for (;!e.__brush;) if (!(e=e.parentNode)) return; return e.__brush;
    } function brush_empty(e) {
      return e[0][0]===e[1][0]||e[0][1]===e[1][1];
    } function brush_brush(e) {
      var t; var n=defaultExtent; var r=defaultFilter; var a=defaultTouchable; var i=!0; var o=Ca('start', 'brush', 'end'); var s=6; function brush(t) {
        var n=t.property('__brush', initialize).selectAll('.overlay').data([brush_type('overlay')]); n.enter().append('rect').attr('class', 'overlay').attr('pointer-events', 'all').attr('cursor', ti.overlay).merge(n).each((function() {
          var e=local(this).extent; src_select(this).attr('x', e[0][0]).attr('y', e[0][1]).attr('width', e[1][0]-e[0][0]).attr('height', e[1][1]-e[0][1]);
        })), t.selectAll('.selection').data([brush_type('selection')]).enter().append('rect').attr('class', 'selection').attr('cursor', ti.selection).attr('fill', '#777').attr('fill-opacity', .3).attr('stroke', '#fff').attr('shape-rendering', 'crispEdges'); var r=t.selectAll('.handle').data(e.handles, (function(e) {
          return e.type;
        })); r.exit().remove(), r.enter().append('rect').attr('class', (function(e) {
          return 'handle handle--'+e.type;
        })).attr('cursor', (function(e) {
          return ti[e.type];
        })), t.each(redraw).attr('fill', 'none').attr('pointer-events', 'all').on('mousedown.brush', started).filter(a).on('touchstart.brush', started).on('touchmove.brush', touchmoved).on('touchend.brush touchcancel.brush', touchended).style('touch-action', 'none').style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
      } function redraw() {
        var e=src_select(this); var t=local(this).selection; t?(e.selectAll('.selection').style('display', null).attr('x', t[0][0]).attr('y', t[0][1]).attr('width', t[1][0]-t[0][0]).attr('height', t[1][1]-t[0][1]), e.selectAll('.handle').style('display', null).attr('x', (function(e) {
          return 'e'===e.type[e.type.length-1]?t[1][0]-s/2:t[0][0]-s/2;
        })).attr('y', (function(e) {
          return 's'===e.type[0]?t[1][1]-s/2:t[0][1]-s/2;
        })).attr('width', (function(e) {
          return 'n'===e.type||'s'===e.type?t[1][0]-t[0][0]+s:s;
        })).attr('height', (function(e) {
          return 'e'===e.type||'w'===e.type?t[1][1]-t[0][1]+s:s;
        }))):e.selectAll('.selection,.handle').style('display', 'none').attr('x', null).attr('y', null).attr('width', null).attr('height', null);
      } function emitter(e, t, n) {
        var r=e.__brush.emitter; return !r||n&&r.clean?new Emitter(e, t, n):r;
      } function Emitter(e, t, n) {
        this.that=e, this.args=t, this.state=e.__brush, this.active=0, this.clean=n;
      } function started() {
        if ((!t||pt.touches)&&r.apply(this, arguments)) {
          var n; var a; var o; var s; var l; var u; var c; var h; var f; var d; var p; var m=this; var g=pt.target.__data__.type; var v='selection'===(i&&pt.metaKey?g='overlay':g)?Ka:i&&pt.altKey?Ja:Za; var y=e===ei?null:ai[g]; var b=e===Qa?null:ii[g]; var w=local(m); var x=w.extent; var k=w.selection; var C=x[0][0]; var S=x[0][1]; var O=x[1][0]; var T=x[1][1]; var E=0; var R=0; var P=y&&b&&i&&pt.shiftKey; var M=pt.touches?toucher(pt.changedTouches[0].identifier):mouse; var A=M(m); var j=A; var N=emitter(m, arguments, !0).beforestart(); 'overlay'===g?(k&&(f=!0), w.selection=k=[[n=e===ei?C:A[0], o=e===Qa?S:A[1]], [l=e===ei?O:n, c=e===Qa?T:o]]):(n=k[0][0], o=k[0][1], l=k[1][0], c=k[1][1]), a=n, s=o, u=l, h=c; var D=src_select(m).attr('pointer-events', 'none'); var V=D.selectAll('.overlay').attr('cursor', ti[g]); if (pt.touches)N.moved=moved, N.ended=ended; else {
            var L=src_select(pt.view).on('mousemove.brush', moved, !0).on('mouseup.brush', ended, !0); i&&L.on('keydown.brush', keydowned, !0).on('keyup.brush', keyupped, !0), nodrag(pt.view);
          }noevent_nopropagation(), interrupt(m), redraw.call(m), N.start();
        } function moved() {
          var e=M(m); !P||d||p||(Math.abs(e[0]-j[0])>Math.abs(e[1]-j[1])?p=!0:d=!0), j=e, f=!0, src_noevent(), move();
        } function move() {
          var e; switch (E=j[0]-A[0], R=j[1]-A[1], v) {
            case Xa: case Ka: y&&(E=Math.max(C-n, Math.min(O-l, E)), a=n+E, u=l+E), b&&(R=Math.max(S-o, Math.min(T-c, R)), s=o+R, h=c+R); break; case Za: y<0?(E=Math.max(C-n, Math.min(O-n, E)), a=n+E, u=l):y>0&&(E=Math.max(C-l, Math.min(O-l, E)), a=n, u=l+E), b<0?(R=Math.max(S-o, Math.min(T-o, R)), s=o+R, h=c):b>0&&(R=Math.max(S-c, Math.min(T-c, R)), s=o, h=c+R); break; case Ja: y&&(a=Math.max(C, Math.min(O, n-E*y)), u=Math.max(C, Math.min(O, l+E*y))), b&&(s=Math.max(S, Math.min(T, o-R*b)), h=Math.max(S, Math.min(T, c+R*b)));
          }u<a&&(y*=-1, e=n, n=l, l=e, e=a, a=u, u=e, g in ni&&V.attr('cursor', ti[g=ni[g]])), h<s&&(b*=-1, e=o, o=c, c=e, e=s, s=h, h=e, g in ri&&V.attr('cursor', ti[g=ri[g]])), w.selection&&(k=w.selection), d&&(a=k[0][0], u=k[1][0]), p&&(s=k[0][1], h=k[1][1]), k[0][0]===a&&k[0][1]===s&&k[1][0]===u&&k[1][1]===h||(w.selection=[[a, s], [u, h]], redraw.call(m), N.brush());
        } function ended() {
          if (noevent_nopropagation(), pt.touches) {
            if (pt.touches.length) return; t&&clearTimeout(t), t=setTimeout((function() {
              t=null;
            }), 500);
          } else yesdrag(pt.view, f), L.on('keydown.brush keyup.brush mousemove.brush mouseup.brush', null); D.attr('pointer-events', 'all'), V.attr('cursor', ti.overlay), w.selection&&(k=w.selection), brush_empty(k)&&(w.selection=null, redraw.call(m)), N.end();
        } function keydowned() {
          switch (pt.keyCode) {
            case 16: P=y&&b; break; case 18: v===Za&&(y&&(l=u-E*y, n=a+E*y), b&&(c=h-R*b, o=s+R*b), v=Ja, move()); break; case 32: v!==Za&&v!==Ja||(y<0?l=u-E:y>0&&(n=a-E), b<0?c=h-R:b>0&&(o=s-R), v=Xa, V.attr('cursor', ti.selection), move()); break; default: return;
          }src_noevent();
        } function keyupped() {
          switch (pt.keyCode) {
            case 16: P&&(d=p=P=!1, move()); break; case 18: v===Ja&&(y<0?l=u:y>0&&(n=a), b<0?c=h:b>0&&(o=s), v=Za, move()); break; case 32: v===Xa&&(pt.altKey?(y&&(l=u-E*y, n=a+E*y), b&&(c=h-R*b, o=s+R*b), v=Ja):(y<0?l=u:y>0&&(n=a), b<0?c=h:b>0&&(o=s), v=Za), V.attr('cursor', ti[g]), move()); break; default: return;
          }src_noevent();
        }
      } function touchmoved() {
        emitter(this, arguments).moved();
      } function touchended() {
        emitter(this, arguments).ended();
      } function initialize() {
        var t=this.__brush||{selection: null}; return t.extent=number2(n.apply(this, arguments)), t.dim=e, t;
      } return brush.move=function(t, n) {
t.selection?t.on('start.brush', (function() {
  emitter(this, arguments).beforestart().start();
})).on('interrupt.brush end.brush', (function() {
  emitter(this, arguments).end();
})).tween('brush', (function() {
  var t=this; var r=t.__brush; var a=emitter(t, arguments); var i=r.selection; var o=e.input('function'==typeof n?n.apply(this, arguments):n, r.extent); var s=src_value(i, o); function tween(e) {
    r.selection=1===e&&null===o?null:s(e), redraw.call(t), a.brush();
  } return null!==i&&null!==o?tween:tween(1);
})):t.each((function() {
  var t=this; var r=arguments; var a=t.__brush; var i=e.input('function'==typeof n?n.apply(t, r):n, a.extent); var o=emitter(t, r).beforestart(); interrupt(t), a.selection=null===i?null:i, redraw.call(t), o.start().brush().end();
}));
      }, brush.clear=function(e) {
        brush.move(e, null);
      }, Emitter.prototype={beforestart: function() {
        return 1==++this.active&&(this.state.emitter=this, this.starting=!0), this;
      }, start: function() {
        return this.starting?(this.starting=!1, this.emit('start')):this.emit('brush'), this;
      }, brush: function() {
        return this.emit('brush'), this;
      }, end: function() {
        return 0==--this.active&&(delete this.state.emitter, this.emit('end')), this;
      }, emit: function(t) {
        customEvent(new src_event(brush, t, e.output(this.state.selection)), o.apply, o, [t, this.that, this.args]);
      }}, brush.extent=function(e) {
        return arguments.length?(n='function'==typeof e?e:d3_brush_src_constant(number2(e)), brush):n;
      }, brush.filter=function(e) {
        return arguments.length?(r='function'==typeof e?e:d3_brush_src_constant(!!e), brush):r;
      }, brush.touchable=function(e) {
        return arguments.length?(a='function'==typeof e?e:d3_brush_src_constant(!!e), brush):a;
      }, brush.handleSize=function(e) {
        return arguments.length?(s=+e, brush):s;
      }, brush.keyModifiers=function(e) {
        return arguments.length?(i=!!e, brush):i;
      }, brush.on=function() {
        var e=o.on.apply(o, arguments); return e===o?brush:e;
      }, brush;
    } var d3_drag_src_constant=function(e) {
      return function() {
        return e;
      };
    }; function DragEvent(e, t, n, r, a, i, o, s, l, u) {
      this.target=e, this.type=t, this.subject=n, this.identifier=r, this.active=a, this.x=i, this.y=o, this.dx=s, this.dy=l, this._=u;
    } function drag_defaultFilter() {
      return !pt.ctrlKey&&!pt.button;
    } function defaultContainer() {
      return this.parentNode;
    } function defaultSubject(e) {
      return null==e?{x: pt.x, y: pt.y}:e;
    } function drag_defaultTouchable() {
      return navigator.maxTouchPoints||'ontouchstart'in this;
    }DragEvent.prototype.on=function() {
      var e=this._.on.apply(this._, arguments); return e===this._?this:e;
    }; var oi=n(23); function attrsFunction(e, t) {
      return e.each((function() {
        var e=t.apply(this, arguments); var n=src_select(this); for (var r in e)n.attr(r, e[r]);
      }));
    } function attrsObject(e, t) {
      for (var n in t)e.attr(n, t[n]); return e;
    } function stylesFunction(e, t, n) {
      return e.each((function() {
        var e=t.apply(this, arguments); var r=src_select(this); for (var a in e)r.style(a, e[a], n);
      }));
    } function stylesObject(e, t, n) {
      for (var r in t)e.style(r, t[r], n); return e;
    } function propertiesFunction(e, t) {
      return e.each((function() {
        var e=t.apply(this, arguments); var n=src_select(this); for (var r in e)n.property(r, e[r]);
      }));
    } function propertiesObject(e, t) {
      for (var n in t)e.property(n, t[n]); return e;
    } function attrs_attrsFunction(e, t) {
      return e.each((function() {
        var n=t.apply(this, arguments); var r=src_select(this).transition(e); for (var a in n)r.attr(a, n[a]);
      }));
    } function attrs_attrsObject(e, t) {
      for (var n in t)e.attr(n, t[n]); return e;
    } function styles_stylesFunction(e, t, n) {
      return e.each((function() {
        var r=t.apply(this, arguments); var a=src_select(this).transition(e); for (var i in r)a.style(i, r[i], n);
      }));
    } function styles_stylesObject(e, t, n) {
      for (var r in t)e.style(r, t[r], n); return e;
    }gt.prototype.attrs=function(e) {
      return ('function'==typeof e?attrsFunction:attrsObject)(this, e);
    }, gt.prototype.styles=function(e, t) {
      return ('function'==typeof e?stylesFunction:stylesObject)(this, e, null==t?'':t);
    }, gt.prototype.properties=function(e) {
      return ('function'==typeof e?propertiesFunction:propertiesObject)(this, e);
    }, src_transition_transition.prototype.attrs=function(e) {
      return ('function'==typeof e?attrs_attrsFunction:attrs_attrsObject)(this, e);
    }, src_transition_transition.prototype.styles=function(e, t) {
      return ('function'==typeof e?styles_stylesFunction:styles_stylesObject)(this, e, null==t?'':t);
    }; var si=n(18); function escape_escape(e) {
      for (var t=arguments.length, n=new Array(t>1?t-1:0), r=1; r<t; r++)n[r-1]=arguments[r]; return e.reduce((function(e, t, r) {
        return e+Object(si.escapeExpression)(n[r-1])+t;
      }));
    } var li; var ui; var ci=n(114); var hi=n.n(ci); function TimelineView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var fi=Object(Nt.b)('timeline')(li=function(e) {
      m()(TimelineView, e); var t=TimelineView_createSuper(TimelineView); function TimelineView() {
        return s()(this, TimelineView), t.apply(this, arguments);
      } return u()(TimelineView, [{key: 'initialize', value: function() {
        var e=this; this.chartX=linear_linear(), this.brushX=linear_linear(), this.sorter=getComparator({sorter: 'sorter.name', ascending: !0}), this.brush=brush_brush(Qa).on('start brush end', this.onBrushChange.bind(this)), this.tooltip=new _t.a({position: 'bottom'}), this.collection.applyFilterAndSorting((function() {
          return 1;
        }), this.sorter), this.minDuration=this.collection.time.minDuration, this.maxDuration=this.collection.time.maxDuration, this.selectedDuration=this.minDuration, this.data=this.collection.toJSON(), this.total=this.collection.allResults.length, this.timeOffset=function(t) {
          return t-e.collection.time.start;
        };
      }}, {key: 'onAttach', value: function() {
        this.doShow();
      }}, {key: 'setupViewport', value: function() {
        this.$el.html(hi()({PADDING: 30})), this.svgChart=src_select(this.$el[0]).select('.timeline__chart_svg'), this.svgBrush=src_select(this.$el[0]).select('.timeline__brush_svg'), this.slider=this.svgChart.select('.timeline__slider');
      }}, {key: 'setupSlider', value: function() {
        var e=this; var t=linear_linear().range([0, this.width]).domain([this.minDuration, this.maxDuration]).clamp(!0); this.slider.append('line').attrs({class: 'timeline__slider_track', x1: t.range()[0], x2: t.range()[1]}), this.handle=this.slider.insert('circle').attrs({class: 'timeline__slider_handle', cx: t(this.selectedDuration), r: 8}).call(function() {
          var e; var t; var n; var r; var a=drag_defaultFilter; var i=defaultContainer; var o=defaultSubject; var s=drag_defaultTouchable; var l={}; var u=Ca('start', 'drag', 'end'); var c=0; var h=0; function drag(e) {
            e.on('mousedown.drag', mousedowned).filter(s).on('touchstart.drag', touchstarted).on('touchmove.drag', touchmoved).on('touchend.drag touchcancel.drag', touchended).style('touch-action', 'none').style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
          } function mousedowned() {
            if (!r&&a.apply(this, arguments)) {
              var o=beforestart('mouse', i.apply(this, arguments), mouse, this, arguments); o&&(src_select(pt.view).on('mousemove.drag', mousemoved, !0).on('mouseup.drag', mouseupped, !0), nodrag(pt.view), nopropagation(), n=!1, e=pt.clientX, t=pt.clientY, o('start'));
            }
          } function mousemoved() {
            if (noevent(), !n) {
              var r=pt.clientX-e; var a=pt.clientY-t; n=r*r+a*a>h;
            }l.mouse('drag');
          } function mouseupped() {
            src_select(pt.view).on('mousemove.drag mouseup.drag', null), yesdrag(pt.view, n), noevent(), l.mouse('end');
          } function touchstarted() {
            if (a.apply(this, arguments)) {
              var e; var t; var n=pt.changedTouches; var r=i.apply(this, arguments); var o=n.length; for (e=0; e<o; ++e)(t=beforestart(n[e].identifier, r, src_touch, this, arguments))&&(nopropagation(), t('start'));
            }
          } function touchmoved() {
            var e; var t; var n=pt.changedTouches; var r=n.length; for (e=0; e<r; ++e)(t=l[n[e].identifier])&&(noevent(), t('drag'));
          } function touchended() {
            var e; var t; var n=pt.changedTouches; var a=n.length; for (r&&clearTimeout(r), r=setTimeout((function() {
              r=null;
            }), 500), e=0; e<a; ++e)(t=l[n[e].identifier])&&(nopropagation(), t('end'));
          } function beforestart(e, t, n, r, a) {
            var i; var s; var h; var f=n(t, e); var d=u.copy(); if (customEvent(new DragEvent(drag, 'beforestart', i, e, c, f[0], f[1], 0, 0, d), (function() {
              return null!=(pt.subject=i=o.apply(r, a))&&(s=i.x-f[0]||0, h=i.y-f[1]||0, !0);
            }))) {
              return function gesture(o) {
                var u; var p=f; switch (o) {
                  case 'start': l[e]=gesture, u=c++; break; case 'end': delete l[e], --c; case 'drag': f=n(t, e), u=c;
                }customEvent(new DragEvent(drag, o, i, e, u, f[0]+s, f[1]+h, f[0]-p[0], f[1]-p[1], d), d.apply, d, [o, r, a]);
              };
            }
          } return drag.filter=function(e) {
            return arguments.length?(a='function'==typeof e?e:d3_drag_src_constant(!!e), drag):a;
          }, drag.container=function(e) {
            return arguments.length?(i='function'==typeof e?e:d3_drag_src_constant(e), drag):i;
          }, drag.subject=function(e) {
            return arguments.length?(o='function'==typeof e?e:d3_drag_src_constant(e), drag):o;
          }, drag.touchable=function(e) {
            return arguments.length?(s='function'==typeof e?e:d3_drag_src_constant(!!e), drag):s;
          }, drag.on=function() {
            var e=u.on.apply(u, arguments); return e===u?drag:e;
          }, drag.clickDistance=function(e) {
            return arguments.length?(h=(e=+e)*e, drag):Math.sqrt(h);
          }, drag;
        }().on('drag', (function() {
          e.selectedDuration=t.invert(pt.x), e.handle.attr('cx', t(e.selectedDuration));
        })).on('end', (function() {
          var n; var r; var a=(n=e.selectedDuration, r=e.maxDuration, function(e) {
            return e.children?e.children.length>0:n<=e.time.duration&&e.time.duration<=r;
          }); e.collection.applyFilterAndSorting(a, e.sorter), e.data=e.collection.toJSON(), e.doShow(), e.handle.attr('cx', t(e.selectedDuration));
        }))); var n=this.collection.testResults.length; var r={count: n, percent: (100*n/this.total).toFixed(2), duration: Object(oi.default)(this.selectedDuration)}; this.slider.insert('g').append('text').attr('transform', 'translate('.concat(this.width/2, ', 20)')).attr('class', 'timeline__slider_text').text(Object(wt.default)('tab.timeline.selected', {hash: r})), this.slider.insert('g').attr('class', 'timeline__slider_text').attr('transform', 'translate(0, '.concat(20, ')')).selectAll('text').data(t.domain()).enter().append('text').attr('x', t).text((function(e) {
          return Object(oi.default)(e, 1);
        }));
      }}, {key: 'doShow', value: function() {
        var e=this; this.width=this.$el.width()>60?this.$el.width()-60:this.$el.width(); var t=[this.collection.time.start, this.collection.time.stop]; this.chartX.domain(t).range([0, this.width]), this.brushX.domain(t).range([0, this.width]), this.setupViewport(), this.setupSlider(); var n=10; var r=this.svgChart.select('.timeline__plot'); n+=this.drawTestGroups(this.data, n, r, !0), src_select(this.$el[0]).select('.timeline__brush').style('top', (function() {
          return ''.concat(Math.min(e.$el.height()-20, n+30), 'px');
        })), this.xChartAxis=this.makeAxis(axisBottom(), this.svgChart.select('.timeline__chart__axis_x'), {scale: this.chartX, tickFormat: function() {
          return '';
        }, tickSizeOuter: 0, tickSizeInner: n}), this.xBrushAxis=this.makeAxis(axisBottom(), this.svgBrush.select('.timeline__brush__axis_x'), {scale: this.chartX, tickFormat: function(t) {
          return Object(oi.default)(t-e.collection.time.start, 2);
        }, tickSizeOuter: 0}, {top: 24, left: 30}), this.brush.extent([[0, 0], [this.width, 20]]), this.svgBrush.append('g').attrs({transform: 'translate('.concat(30, ', ').concat(2, ')'), class: 'brush'}).call(this.brush).call(this.brush.move, this.chartX.range()), this.firstRender&&this.svgBrush.select('.brush').transition().duration(300).call(this.brush.move, [1/16*this.width, 15/16*this.width]).transition().duration(500).call(this.brush.move, this.chartX.range()), this.svgChart.attr('height', (function() {
          return 30+n+20;
        })), d()(b()(TimelineView.prototype), 'onRender', this).call(this);
      }}, {key: 'drawTestGroups', value: function(e, t, n, r) {
        var a=this; return e.filter((function(e) {
          return e.children;
        })).forEach((function(e) {
          var i=0; var o=n.append('g').attrs({class: 'timeline__group', transform: 'translate(0, '.concat(t, ')')}); if (r) {
            var s=o.append('text').datum(e).text((function(e) {
              return e.name;
            })).attr('class', 'timeline__group_title'); a.bindTooltip(s), t+=i=22;
          }t+=a.drawTestGroups(e.children, i, o, !1);
        })), t+=this.drawTestResults(e.filter((function(e) {
          return !e.children;
        })), n, t);
      }}, {key: 'drawTestResults', value: function(e, t) {
        var n=this; if (e.length) {
          var r=t.selectAll('.timeline__item').data(e).enter().append('a').attr('xlink:href', (function(e) {
            return '#testresult/'.concat(e.uid);
          })).append('rect').attrs({class: function(e) {
            return 'timeline__item chart__fill_status_'.concat(e.status);
          }, x: function(e) {
            return n.chartX(e.time.start);
          }, width: function(e) {
            return n.chartX(e.time.start+e.time.duration);
          }, rx: 2, ry: 2, height: 20}); return this.bindTooltip(r), r.on('click', this.hideTooltip.bind(this)), 22;
        } return 0;
      }}, {key: 'onBrushChange', value: function() {
        var e=this; var t=pt.selection; var start=function(t) {
          return Math.max(0, Math.min(e.chartX(t.time.start), e.width));
        }; t&&(this.chartX.domain(t.map(this.brushX.invert, this.brushX)), this.svgChart.selectAll('.timeline__item').attrs({x: function(e) {
          return start(e);
        }, width: function(t) {
          return function(t) {
            return Math.max(0, Math.min(e.chartX(t.time.stop), e.width));
          }(t)-start(t);
        }}), this.svgBrush.select('.timeline__brush__axis_x').call(this.xBrushAxis), this.svgChart.select('.timeline__chart__axis_x').call(this.xChartAxis)), this.svgBrush.selectAll('.handle').attrs({y: 0, height: 20});
      }}, {key: 'getTooltipContent', value: function(e) {
        return escape_escape(ui||(ui=xa()(['', '<br>\n            ', ' — ', ''])), e.name, Object(oi.default)(this.timeOffset(e.time.start)), Object(oi.default)(this.timeOffset(e.time.stop)));
      }}]), TimelineView;
    }(bt))||li; function TimelineLayout_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var di=function(e) {
      m()(TimelineLayout, e); var t=TimelineLayout_createSuper(TimelineLayout); function TimelineLayout() {
        return s()(this, TimelineLayout), t.apply(this, arguments);
      } return u()(TimelineLayout, [{key: 'initialize', value: function(e) {
        var t=e.url; d()(b()(TimelineLayout.prototype), 'initialize', this).call(this), this.items=new Qn([], {url: t});
      }}, {key: 'loadData', value: function() {
        return this.items.fetch();
      }}, {key: 'getContentView', value: function() {
        return new fi({collection: this.items});
      }}]), TimelineLayout;
    }(At.a); function tab_timeline_ownKeys(e, t) {
      var n=Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r=Object.getOwnPropertySymbols(e); t&&(r=r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), n.push.apply(n, r);
      } return n;
    } function tab_timeline_objectSpread(e) {
      for (var t=1; t<arguments.length; t++) {
        var n=null!=arguments[t]?arguments[t]:{}; t%2?tab_timeline_ownKeys(Object(n), !0).forEach((function(t) {
          x()(e, t, n[t]);
        })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):tab_timeline_ownKeys(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }));
      } return e;
    }allure.api.addTab('timeline', {title: 'tab.timeline.name', icon: 'fa fa-clock-o', route: 'timeline', onEnter: function() {
      for (var e=arguments.length, t=new Array(e), n=0; n<e; n++)t[n]=arguments[n]; return new di(tab_timeline_objectSpread(tab_timeline_objectSpread({}, t), {}, {url: 'data/timeline.json'}));
    }}); var pi=Math.abs; var mi=Math.atan2; var gi=Math.cos; var vi=Math.max; var yi=Math.min; var bi=Math.sin; var _i=Math.sqrt; var wi=Math.PI; var xi=wi/2; var ki=2*wi; function acos(e) {
      return e>1?0:e<-1?wi:Math.acos(e);
    } function asin(e) {
      return e>=1?xi:e<=-1?-xi:Math.asin(e);
    } function arcInnerRadius(e) {
      return e.innerRadius;
    } function arcOuterRadius(e) {
      return e.outerRadius;
    } function arcStartAngle(e) {
      return e.startAngle;
    } function arcEndAngle(e) {
      return e.endAngle;
    } function arcPadAngle(e) {
      return e&&e.padAngle;
    } function intersect(e, t, n, r, a, i, o, s) {
      var l=n-e; var u=r-t; var c=o-a; var h=s-i; var f=h*l-c*u; if (!(f*f<1e-12)) return [e+(f=(c*(t-i)-h*(e-a))/f)*l, t+f*u];
    } function cornerTangents(e, t, n, r, a, i, o) {
      var s=e-n; var l=t-r; var u=(o?i:-i)/_i(s*s+l*l); var c=u*l; var h=-u*s; var f=e+c; var d=t+h; var p=n+c; var m=r+h; var g=(f+p)/2; var v=(d+m)/2; var y=p-f; var b=m-d; var w=y*y+b*b; var x=a-i; var k=f*m-p*d; var C=(b<0?-1:1)*_i(vi(0, x*x*w-k*k)); var S=(k*b-y*C)/w; var O=(-k*y-b*C)/w; var T=(k*b+y*C)/w; var E=(-k*y+b*C)/w; var R=S-g; var P=O-v; var M=T-g; var A=E-v; return R*R+P*P>M*M+A*A&&(S=T, O=E), {cx: S, cy: O, x01: -c, y01: -h, x11: S*(a/x-1), y11: O*(a/x-1)};
    } var Ci; var Si; var Oi; var Ti; var src_descending=function(e, t) {
      return t<e?-1:t>e?1:t>=e?0:NaN;
    }; var d3_shape_src_identity=function(e) {
      return e;
    }; function PieChartView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Ei; var Ri=(Ci=Object(Nt.c)('mouseleave .chart__legend-row'), Si=Object(Nt.c)('mouseenter .chart__legend-row'), Oi=function(e) {
      m()(PieChartView, e); var t=PieChartView_createSuper(PieChartView); function PieChartView() {
        return s()(this, PieChartView), t.apply(this, arguments);
      } return u()(PieChartView, [{key: 'initialize', value: function(e) {
        this.options=e, this.model=this.options.model, this.showLegend=this.options&&this.options.showLegend||!1, this.arc=function() {
          var e=arcInnerRadius; var t=arcOuterRadius; var n=d3_shape_src_constant(0); var r=null; var a=arcStartAngle; var i=arcEndAngle; var o=arcPadAngle; var s=null; function arc() {
            var l; var u; var c=+e.apply(this, arguments); var h=+t.apply(this, arguments); var f=a.apply(this, arguments)-xi; var d=i.apply(this, arguments)-xi; var p=pi(d-f); var m=d>f; if (s||(s=l=lt()), h<c&&(u=h, h=c, c=u), h>1e-12) {
              if (p>ki-1e-12)s.moveTo(h*gi(f), h*bi(f)), s.arc(0, 0, h, f, d, !m), c>1e-12&&(s.moveTo(c*gi(d), c*bi(d)), s.arc(0, 0, c, d, f, m)); else {
                var g; var v; var y=f; var b=d; var w=f; var x=d; var k=p; var C=p; var S=o.apply(this, arguments)/2; var O=S>1e-12&&(r?+r.apply(this, arguments):_i(c*c+h*h)); var T=yi(pi(h-c)/2, +n.apply(this, arguments)); var E=T; var R=T; if (O>1e-12) {
                  var P=asin(O/c*bi(S)); var M=asin(O/h*bi(S)); (k-=2*P)>1e-12?(w+=P*=m?1:-1, x-=P):(k=0, w=x=(f+d)/2), (C-=2*M)>1e-12?(y+=M*=m?1:-1, b-=M):(C=0, y=b=(f+d)/2);
                } var A=h*gi(y); var j=h*bi(y); var N=c*gi(x); var D=c*bi(x); if (T>1e-12) {
                  var V; var L=h*gi(b); var B=h*bi(b); var I=c*gi(w); var z=c*bi(w); if (p<wi&&(V=intersect(A, j, I, z, L, B, N, D))) {
                    var F=A-V[0]; var U=j-V[1]; var H=L-V[0]; var q=B-V[1]; var W=1/bi(acos((F*H+U*q)/(_i(F*F+U*U)*_i(H*H+q*q)))/2); var $=_i(V[0]*V[0]+V[1]*V[1]); E=yi(T, (c-$)/(W-1)), R=yi(T, (h-$)/(W+1));
                  }
                }C>1e-12?R>1e-12?(g=cornerTangents(I, z, A, j, h, R, m), v=cornerTangents(L, B, N, D, h, R, m), s.moveTo(g.cx+g.x01, g.cy+g.y01), R<T?s.arc(g.cx, g.cy, R, mi(g.y01, g.x01), mi(v.y01, v.x01), !m):(s.arc(g.cx, g.cy, R, mi(g.y01, g.x01), mi(g.y11, g.x11), !m), s.arc(0, 0, h, mi(g.cy+g.y11, g.cx+g.x11), mi(v.cy+v.y11, v.cx+v.x11), !m), s.arc(v.cx, v.cy, R, mi(v.y11, v.x11), mi(v.y01, v.x01), !m))):(s.moveTo(A, j), s.arc(0, 0, h, y, b, !m)):s.moveTo(A, j), c>1e-12&&k>1e-12?E>1e-12?(g=cornerTangents(N, D, L, B, c, -E, m), v=cornerTangents(A, j, I, z, c, -E, m), s.lineTo(g.cx+g.x01, g.cy+g.y01), E<T?s.arc(g.cx, g.cy, E, mi(g.y01, g.x01), mi(v.y01, v.x01), !m):(s.arc(g.cx, g.cy, E, mi(g.y01, g.x01), mi(g.y11, g.x11), !m), s.arc(0, 0, c, mi(g.cy+g.y11, g.cx+g.x11), mi(v.cy+v.y11, v.cx+v.x11), m), s.arc(v.cx, v.cy, E, mi(v.y11, v.x11), mi(v.y01, v.x01), !m))):s.arc(0, 0, c, x, w, m):s.lineTo(N, D);
              }
            } else s.moveTo(0, 0); if (s.closePath(), l) return s=null, l+''||null;
          } return arc.centroid=function() {
            var n=(+e.apply(this, arguments)+ +t.apply(this, arguments))/2; var r=(+a.apply(this, arguments)+ +i.apply(this, arguments))/2-wi/2; return [gi(r)*n, bi(r)*n];
          }, arc.innerRadius=function(t) {
            return arguments.length?(e='function'==typeof t?t:d3_shape_src_constant(+t), arc):e;
          }, arc.outerRadius=function(e) {
            return arguments.length?(t='function'==typeof e?e:d3_shape_src_constant(+e), arc):t;
          }, arc.cornerRadius=function(e) {
            return arguments.length?(n='function'==typeof e?e:d3_shape_src_constant(+e), arc):n;
          }, arc.padRadius=function(e) {
            return arguments.length?(r=null==e?null:'function'==typeof e?e:d3_shape_src_constant(+e), arc):r;
          }, arc.startAngle=function(e) {
            return arguments.length?(a='function'==typeof e?e:d3_shape_src_constant(+e), arc):a;
          }, arc.endAngle=function(e) {
            return arguments.length?(i='function'==typeof e?e:d3_shape_src_constant(+e), arc):i;
          }, arc.padAngle=function(e) {
            return arguments.length?(o='function'==typeof e?e:d3_shape_src_constant(+e), arc):o;
          }, arc.context=function(e) {
            return arguments.length?(s=null==e?null:e, arc):s;
          }, arc;
        }(), this.pie=function() {
          var e=d3_shape_src_identity; var t=src_descending; var n=null; var r=d3_shape_src_constant(0); var a=d3_shape_src_constant(ki); var i=d3_shape_src_constant(0); function pie(o) {
            var s; var l; var u; var c; var h; var f=o.length; var d=0; var p=new Array(f); var m=new Array(f); var g=+r.apply(this, arguments); var v=Math.min(ki, Math.max(-ki, a.apply(this, arguments)-g)); var y=Math.min(Math.abs(v)/f, i.apply(this, arguments)); var b=y*(v<0?-1:1); for (s=0; s<f; ++s)(h=m[p[s]=s]=+e(o[s], s, o))>0&&(d+=h); for (null!=t?p.sort((function(e, n) {
              return t(m[e], m[n]);
            })):null!=n&&p.sort((function(e, t) {
              return n(o[e], o[t]);
            })), s=0, u=d?(v-f*b)/d:0; s<f; ++s, g=c)l=p[s], c=g+((h=m[l])>0?h*u:0)+b, m[l]={data: o[l], index: s, value: h, startAngle: g, endAngle: c, padAngle: y}; return m;
          } return pie.value=function(t) {
            return arguments.length?(e='function'==typeof t?t:d3_shape_src_constant(+t), pie):e;
          }, pie.sortValues=function(e) {
            return arguments.length?(t=e, n=null, pie):t;
          }, pie.sort=function(e) {
            return arguments.length?(n=e, t=null, pie):n;
          }, pie.startAngle=function(e) {
            return arguments.length?(r='function'==typeof e?e:d3_shape_src_constant(+e), pie):r;
          }, pie.endAngle=function(e) {
            return arguments.length?(a='function'==typeof e?e:d3_shape_src_constant(+e), pie):a;
          }, pie.padAngle=function(e) {
            return arguments.length?(i='function'==typeof e?e:d3_shape_src_constant(+e), pie):i;
          }, pie;
        }().sort(null).value((function(e) {
          return e.value;
        })), this.tooltip=new _t.a({position: 'center'}), this.getChartData();
      }}, {key: 'getChartData', value: function() {
        this.statistic=this.model.get('statistic'); var e=this.statistic.total; var t=Object(Rt.omit)(this.statistic, 'total'); this.data=Object.keys(t).map((function(n) {
          return {name: n.toUpperCase(), value: t[n], part: t[n]/e};
        })).filter((function(e) {
          return e.value;
        }));
      }}, {key: 'setupViewport', value: function() {
        return d()(b()(PieChartView.prototype), 'setupViewport', this).call(this), this.showLegend&&this.$el.append(this.getLegendTpl()), this.svg;
      }}, {key: 'onAttach', value: function() {
        var e=this; var t=this.data; var n=this.$el.outerWidth(); var r=this.$el.outerHeight(); var a=Math.min(n, r)/2-10; var i=r/2; var o=n/2; this.showLegend&&(o-=70), this.arc.innerRadius(.8*a).outerRadius(a), this.svg=this.setupViewport(); var s=this.svg.select('.chart__plot').attrs({transform: 'translate('.concat(o, ',').concat(i, ')')}).selectAll('.chart__arc').data(this.pie(t)).enter().append('path').attr('class', (function(e) {
          return 'chart__arc chart__fill_status_'.concat(e.data.name.toLowerCase());
        })); this.bindTooltip(s), this.svg.select('.chart__plot').append('text').classed('chart__caption', !0).attrs({dy: '0.4em'}).styles({'font-size': ''.concat(a/3, 'px')}).text(this.getChartTitle()), this.firstRender?s.transition().duration(750).attrTween('d', (function(t) {
          var n=src_value(0, t.startAngle); var r=src_value(0, t.endAngle); return function(t) {
            return e.arc({startAngle: n(t), endAngle: r(t)});
          };
        })):s.attr('d', (function(t) {
          return e.arc(t);
        })), d()(b()(PieChartView.prototype), 'onAttach', this).call(this);
      }}, {key: 'formatNumber', value: function(e) {
        return (Math.floor(100*e)/100).toString();
      }}, {key: 'getChartTitle', value: function() {
        var e=this.statistic; var t=e.passed; var n=e.total; return ''.concat(this.formatNumber((t||0)/n*100), '%');
      }}, {key: 'getTooltipContent', value: function(e) {
        var t=e.data; var n=t.value||0; var r=t.part||0; var a=t.name.toLowerCase(); var i=Object(wt.default)('status.'.concat(a), {}); return escape_escape(Ti||(Ti=xa()(['\n            ', ' tests (', '%)<br>\n            ', '\n        '])), n, this.formatNumber(100*r), i);
      }}, {key: 'getLegendTpl', value: function() {
        return '<div class="chart__legend">\n    '.concat(Tn.a.map((function(e) {
          return '<div class="chart__legend-row" data-status="'.concat(e, '">\n<span class="chart__legend-icon chart__legend-icon_status_').concat(e, '"></span> ').concat(Object(wt.default)('status.'.concat(e)), '</div>');
        })).join(''), '\n</div>');
      }}, {key: 'onLegendOut', value: function() {
        this.hideTooltip();
      }}, {key: 'onLegendHover', value: function(e) {
        var t=this.$(e.currentTarget).data('status'); var n=this.$('.chart__fill_status_'.concat(t))[0]; var r=src_select(n).datum(); this.showTooltip(r, n);
      }}]), PieChartView;
    }(bt), en()(Oi.prototype, 'onLegendOut', [Ci], Object.getOwnPropertyDescriptor(Oi.prototype, 'onLegendOut'), Oi.prototype), en()(Oi.prototype, 'onLegendHover', [Si], Object.getOwnPropertyDescriptor(Oi.prototype, 'onLegendHover'), Oi.prototype), Oi); var Pi=n(115); var Mi=n.n(Pi); function StatusWidgetView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Ai=Object(Nt.b)('status-widget')(Ei=Object(Nt.e)({chart: '.status-widget__content'})(Ei=function(e) {
      m()(StatusWidgetView, e); var t=StatusWidgetView_createSuper(StatusWidgetView); function StatusWidgetView() {
        var e; s()(this, StatusWidgetView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', Mi.a), e;
      } return u()(StatusWidgetView, [{key: 'onRender', value: function() {
        this.showChildView('chart', new Ri({model: this.getStatusChartData(), showLegend: !0}));
      }}, {key: 'getStatusChartData', value: function() {
        this.items=this.model.get('items'); var e=this.items.reduce((function(e, t) {
          return e[t.status.toLowerCase()]++, e;
        }), {total: this.items.length, failed: 0, broken: 0, skipped: 0, passed: 0, unknown: 0}); return new ut.Model({statistic: e});
      }}]), StatusWidgetView;
    }(St.View))||Ei)||Ei; allure.api.addWidget('graph', 'status-chart', Ai); var ji; var Ni=n(39); function SeverityChartView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Di; var Vi=['blocker', 'critical', 'normal', 'minor', 'trivial']; var Li=function(e) {
      m()(SeverityChartView, e); var t=SeverityChartView_createSuper(SeverityChartView); function SeverityChartView() {
        return s()(this, SeverityChartView), t.apply(this, arguments);
      } return u()(SeverityChartView, [{key: 'initialize', value: function() {
        this.x=band().domain(Vi), this.y=sqrt(), this.status=band().domain(Tn.a), this.tooltip=new Ni.a({position: 'right'}), this.collection=this.model, this.getChartData();
      }}, {key: 'getChartData', value: function() {
        var e=this; this.data=Vi.map((function(t) {
          return Tn.a.map((function(n) {
            var r=e.collection.filter((function(e) {
              return e.status===n&&e.severity===t;
            })); return {value: r.length, testResults: r, severity: t, status: n};
          }));
        }));
      }}, {key: 'onAttach', value: function() {
        var e=this; var t=this.data; this.setupViewport(), this.x.range([0, this.width]), this.y.range([this.height, 0], 1), this.y.domain([0, src_max(t, (function(e) {
          return src_max(e, (function(e) {
            return e.value;
          }));
        }))]).nice(), this.status.rangeRound([0, this.x.step()]), this.makeBottomAxis({tickFormat: function(e) {
          return e.toLowerCase();
        }, scale: this.x}), this.svg.selectAll('.tick').select('line').attr('transform', 'translate('.concat(this.x.step()/2, ' , 0)')), this.makeLeftAxis({scale: this.y, ticks: Math.min(10, this.y.domain()[1])}); var n=this.svg.select('.chart__plot').selectAll('.chart__group').data(t).enter().append('g').attr('transform', (function(t) {
          return 'translate('.concat(e.x(t[0].severity), ',0)');
        })).selectAll('.bar').data((function(e) {
          return e;
        })).enter().append('rect'); n.attrs({x: function(t) {
          return e.status(t.status);
        }, y: this.height, height: 0, width: this.status.step(), class: function(e) {
          return 'chart__bar chart__fill_status_'.concat(e.status);
        }}), this.bindTooltip(n), this.firstRender&&(n=n.transition().duration(500)), n.attrs({y: function(t) {
          return e.y(t.value);
        }, height: function(t) {
          return e.height-e.y(t.value);
        }}), d()(b()(SeverityChartView.prototype), 'onAttach', this).call(this);
      }}, {key: 'getTooltipContent', value: function(e) {
        var t=e.value; var n=e.severity; var r=e.status; var a=e.testResults; var i=a.slice(0, 10); var o=a.length-i.length; return '<b>'.concat(t, ' ').concat(n.toLowerCase(), ' test cases ').concat(r.toLowerCase(), '</b><br>\n            <ul class="popover__list">\n                ').concat(i.map((function(e) {
          return escape_escape(ji||(ji=xa()(['<li>', '</li>'])), e.name);
        })).join(''), '\n            </ul>\n            ').concat(o?'...and '.concat(o, ' more'):'', '\n        ');
      }}]), SeverityChartView;
    }(bt); var Bi=n(116); var Ii=n.n(Bi); function SeverityWidgetView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var zi; var Fi=Object(Nt.b)('severity-widget')(Di=Object(Nt.e)({chart: '.severity-widget__content'})(Di=function(e) {
      m()(SeverityWidgetView, e); var t=SeverityWidgetView_createSuper(SeverityWidgetView); function SeverityWidgetView() {
        var e; s()(this, SeverityWidgetView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', Ii.a), e;
      } return u()(SeverityWidgetView, [{key: 'onRender', value: function() {
        this.showChildView('chart', new Li({model: this.model.get('items')}));
      }}]), SeverityWidgetView;
    }(St.View))||Di)||Di; function DurationChartView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    }allure.api.addWidget('graph', 'severity', Fi); var Ui; var Hi=function(e) {
      m()(DurationChart, e); var t=DurationChartView_createSuper(DurationChart); function DurationChart() {
        return s()(this, DurationChart), t.apply(this, arguments);
      } return u()(DurationChart, [{key: 'initialize', value: function() {
        this.collection=this.model, this.getChartData();
      }}, {key: 'getChartData', value: function() {
        this.data=this.collection.map((function(e) {
          return {value: e.time.duration, name: e.name};
        })).filter((function(e) {
          return null!==e.value;
        }));
      }}, {key: 'onAttach', value: function() {
this.data&&this.data.length?this.doShow():this.$el.html('<div class="widget__noitems">'.concat(Object(wt.default)('chart.duration.empty'), '</div>')), d()(b()(DurationChart.prototype), 'onAttach', this).call(this);
      }}, {key: 'doShow', value: function() {
        var e=this; this.x=linear_linear(), this.y=sqrt(), this.tooltip=new Ni.a({position: 'right'}), this.setupViewport(), this.x.range([0, this.width]), this.y.range([this.height, 0], 1); var t=src_max(this.data, (function(e) {
          return e.value;
        })); this.x.domain([0, Math.max(t, 10)]).nice(); var n=function() {
          var e=identity; var t=src_extent; var n=sturges; function histogram(r) {
            var a; var i; var o=r.length; var s=new Array(o); for (a=0; a<o; ++a)s[a]=e(r[a], a, r); var l=t(s); var u=l[0]; var c=l[1]; var h=n(s, u, c); Array.isArray(h)||(h=tickStep(u, c, h), h=src_range(Math.ceil(u/h)*h, c, h)); for (var f=h.length; h[0]<=u;)h.shift(), --f; for (;h[f-1]>c;)h.pop(), --f; var d; var p=new Array(f+1); for (a=0; a<=f; ++a)(d=p[a]=[]).x0=a>0?h[a-1]:u, d.x1=a<f?h[a]:c; for (a=0; a<o; ++a)u<=(i=s[a])&&i<=c&&p[O(h, i, 0, f)].push(r[a]); return p;
          } return histogram.value=function(t) {
            return arguments.length?(e='function'==typeof t?t:R(t), histogram):e;
          }, histogram.domain=function(e) {
            return arguments.length?(t='function'==typeof e?e:R([e[0], e[1]]), histogram):t;
          }, histogram.thresholds=function(e) {
            return arguments.length?(n='function'==typeof e?e:Array.isArray(e)?R(E.call(e)):R(e), histogram):n;
          }, histogram;
        }().value((function(e) {
          return e.value;
        })).domain(this.x.domain()).thresholds(this.x.ticks())(this.data).map((function(e) {
          return {x0: e.x0, x1: e.x1, y: e.length, testResults: e};
        })); var r=src_max(n, (function(e) {
          return e.y;
        })); this.y.domain([0, r]).nice(), this.makeBottomAxis({scale: this.x, tickFormat: function(e) {
          return Object(oi.default)(e, 1);
        }}), this.makeLeftAxis({scale: this.y, ticks: Math.min(10, r)}); var a=this.plot.selectAll('.chart__bar').data(n).enter().append('rect').classed('chart__bar', !0); this.bindTooltip(a), a.attrs({x: function(t) {
          return e.x(t.x0)+2;
        }, y: this.height, width: function(t) {
          return Math.max(e.x(t.x1)-e.x(t.x0)-2, 0);
        }, height: 0}), this.firstRender&&(a=a.transition().duration(500)), a.attrs({y: function(t) {
          return e.y(t.y);
        }, height: function(t) {
          return e.height-e.y(t.y);
        }});
      }}, {key: 'getTooltipContent', value: function(e) {
        var t=e.testResults; var n=t.slice(0, 10); var r=t.length-n.length; return '<b>'.concat(t.length, ' test cases</b><br>\n            <ul class="popover__list">\n                ').concat(n.map((function(e) {
          return escape_escape(zi||(zi=xa()(['<li>', '</li>'])), e.name);
        })).join(''), '\n            </ul>\n            ').concat(r?'...and '.concat(r, ' more'):'', '\n        ');
      }}]), DurationChart;
    }(bt); var qi=n(117); var Wi=n.n(qi); function DurationWidgetView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var $i=Object(Nt.b)('duration-widget')(Ui=Object(Nt.e)({chart: '.duration-widget__content'})(Ui=function(e) {
      m()(DurationWidgetView, e); var t=DurationWidgetView_createSuper(DurationWidgetView); function DurationWidgetView() {
        var e; s()(this, DurationWidgetView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', Wi.a), e;
      } return u()(DurationWidgetView, [{key: 'onRender', value: function() {
        this.showChildView('chart', new Hi({model: this.model.get('items')}));
      }}]), DurationWidgetView;
    }(St.View))||Ui)||Ui; allure.api.addWidget('graph', 'duration', $i); var Gi; var Yi=n(44); var Ki=n.n(Yi); var Xi=(n(217), n(118)); var Zi=n.n(Xi); function DurationTrendWidgetView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Ji=Object(Nt.e)({chart: '.duration-trend__chart'})(Gi=Object(Nt.b)('duration-trend')(Gi=function(e) {
      m()(DurationTrendWidgetView, e); var t=DurationTrendWidgetView_createSuper(DurationTrendWidgetView); function DurationTrendWidgetView() {
        var e; s()(this, DurationTrendWidgetView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', Zi.a), e;
      } return u()(DurationTrendWidgetView, [{key: 'onRender', value: function() {
        var e=this.model.map((function(e) {
          return e.get('data').duration;
        })); var t=Math.min.apply(Math, Ki()([function(e) {
          return e>=0;
        }, function(e) {
          return e<=0;
        }].map((function(t) {
          return e.reduce((function(n, r, a) {
            return t(r-e[a-1])?a:n;
          }), Object(Rt.last)(e));
        })))); var n=Math.max.apply(Math, Ki()(e))-Math.min.apply(Math, Ki()(e)); var r=e[t]-Object(Rt.last)(e); var a=linear_linear().domain([0, Math.max(n, .25*Math.max.apply(Math, Ki()(e)))]); a.range(r>0?['#c4cac6', '#31a354']:['#cdc5c4', '#e34a33']).interpolate(X); var i=ordinal().range([a(Math.abs(r))]); this.showChildView('chart', new Ct({model: this.model, hidePoints: !0, hideLines: !0, colors: i, keys: ['duration'], yTickFormat: function(e) {
          return Object(oi.default)(e, 2);
        }}));
      }}]), DurationTrendWidgetView;
    }(St.View))||Gi)||Gi; allure.api.addWidget('graph', 'duration-trend', Ji, Mt); n(218); var Qi; var eo; var to=new Array(3).concat('ffeda0feb24cf03b20', 'ffffb2fecc5cfd8d3ce31a1c', 'ffffb2fecc5cfd8d3cf03b20bd0026', 'ffffb2fed976feb24cfd8d3cf03b20bd0026', 'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026', 'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026', 'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026').map((function(e) {
      for (var t=e.length/6|0, n=new Array(t), r=0; r<t;)n[r]='#'+e.slice(6*r, 6*++r); return n;
    })); var no=Z((Qi=to)[Qi.length-1]); var ro=n(119); var ao=n.n(ro); function RetryTrendWidgetView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var io=Object(Nt.e)({chart: '.retry-trend__chart'})(eo=Object(Nt.b)('retry-trend')(eo=function(e) {
      m()(RetryTrendWidgetView, e); var t=RetryTrendWidgetView_createSuper(RetryTrendWidgetView); function RetryTrendWidgetView() {
        var e; s()(this, RetryTrendWidgetView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', ao.a), e;
      } return u()(RetryTrendWidgetView, [{key: 'onRender', value: function() {
        var e=this.model.last().get('data'); var t=e.retry; var n=e.run; var r=Math.min(.3+Math.min(t, n)/n, 1); var a=ordinal(['#4682b4', no(r)]); this.showChildView('chart', new Ct({model: this.model, keys: ['run', 'retry'], colors: a, hideLines: !0, hidePoints: !0}));
      }}]), RetryTrendWidgetView;
    }(St.View))||eo)||eo; allure.api.addWidget('graph', 'retry-trend', io, Mt); n(219); var oo; var so=n(120); var lo=n.n(so); function CategoriesTrendWidgetView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var uo=Object(Nt.e)({chart: '.categories-trend__chart'})(oo=Object(Nt.b)('categories-trend')(oo=function(e) {
      m()(CategoriesTrendWidgetView, e); var t=CategoriesTrendWidgetView_createSuper(CategoriesTrendWidgetView); function CategoriesTrendWidgetView() {
        var e; s()(this, CategoriesTrendWidgetView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', lo.a), e;
      } return u()(CategoriesTrendWidgetView, [{key: 'onRender', value: function() {
        var e=this.model.sortedKeysByLastValue(); var t=ordinal(Object(Rt.range)(0, 1, 1/e.length).map((function(e) {
          return no(1-e);
        }))); this.showChildView('chart', new Ct({model: this.model, keys: e, colors: t, hideLines: !0, hidePoints: !0}));
      }}]), CategoriesTrendWidgetView;
    }(St.View))||oo)||oo; allure.api.addWidget('graph', 'categories-trend', uo, Mt); n(220); var co; var ho=n(121); var fo=n.n(ho); function SummaryWidgetView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var po=Object(Nt.e)({chart: '.summary-widget__chart'})(co=function(e) {
      m()(SummaryWidgetView, e); var t=SummaryWidgetView_createSuper(SummaryWidgetView); function SummaryWidgetView() {
        var e; s()(this, SummaryWidgetView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', fo.a), e;
      } return u()(SummaryWidgetView, [{key: 'onRender', value: function() {
        this.showChildView('chart', new Ri({model: this.model, showLegend: !1}));
      }}, {key: 'serializeData', value: function() {
        var e=this.model.get('testRuns'); var t=e&&e.length; return Object.assign(d()(b()(SummaryWidgetView.prototype), 'serializeData', this).call(this), {isAggregated: t>1, launchesCount: t});
      }}]), SummaryWidgetView;
    }(St.View))||co; allure.api.addWidget('widgets', 'summary', po); n(221); var mo; var go=n(122); var vo=n.n(go); function HistoryTrendWidgetView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var yo=Object(Nt.e)({chart: '.history-trend__chart'})(mo=Object(Nt.b)('history-trend')(mo=function(e) {
      m()(HistoryTrendWidgetView, e); var t=HistoryTrendWidgetView_createSuper(HistoryTrendWidgetView); function HistoryTrendWidgetView() {
        var e; s()(this, HistoryTrendWidgetView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', vo.a), e;
      } return u()(HistoryTrendWidgetView, [{key: 'onRender', value: function() {
        this.showChildView('chart', new Ct({model: this.model, hideLines: !0, hidePoints: !0, colors: ordinal(['#fd5a3e', '#ffd050', '#97cc64', '#aaa', '#d35ebe']).domain(Tn.a), keys: Tn.a}));
      }}]), HistoryTrendWidgetView;
    }(St.View))||mo)||mo; allure.api.addWidget('widgets', 'history-trend', yo, Mt), allure.api.addWidget('graph', 'history-trend', yo, Mt), allure.api.addWidget('widgets', 'suites', Et.extend({rowTag: 'a', title: 'widget.suites.name', baseUrl: 'suites', showLinks: !0})), allure.api.addWidget('widgets', 'categories', Et.extend({rowTag: 'a', title: 'widget.categories.name', baseUrl: 'categories', showLinks: !0})); var bo; var _o; var wo=n(123); var xo=n.n(wo); function EnvironmentWidget_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var ko=(bo=Object(Nt.c)('click .environment-widget__expand'), _o=function(e) {
      m()(EnvironmentWidget, e); var t=EnvironmentWidget_createSuper(EnvironmentWidget); function EnvironmentWidget() {
        var e; s()(this, EnvironmentWidget); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', xo.a), e;
      } return u()(EnvironmentWidget, [{key: 'initialize', value: function() {
        this.listLimit=5;
      }}, {key: 'onExpandClick', value: function() {
        this.listLimit=this.model.get('items').length, this.render();
      }}, {key: 'serializeData', value: function() {
        var e=this.model.get('items'); return {items: e.slice(0, this.listLimit), overLimit: e.length>this.listLimit};
      }}]), EnvironmentWidget;
    }(St.View), en()(_o.prototype, 'onExpandClick', [bo], Object.getOwnPropertyDescriptor(_o.prototype, 'onExpandClick'), _o.prototype), _o); allure.api.addWidget('widgets', 'environment', ko); var Co=n(124); var So=n.n(Co); function ExecutorsWidgetView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Oo=function(e) {
      m()(ExecutorsWidgetView, e); var t=ExecutorsWidgetView_createSuper(ExecutorsWidgetView); function ExecutorsWidgetView() {
        var e; s()(this, ExecutorsWidgetView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', So.a), e;
      } return u()(ExecutorsWidgetView);
    }(St.View); allure.api.addWidget('widgets', 'executors', Oo); var To; var Eo=n(125); var Ro=n.n(Eo); function DescriptionView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Po=Object(Nt.b)('pane__section')(To=function(e) {
      m()(DescriptionView, e); var t=DescriptionView_createSuper(DescriptionView); function DescriptionView() {
        var e; s()(this, DescriptionView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', Ro.a), e;
      } return u()(DescriptionView, [{key: 'serializeData', value: function() {
        return {descriptionHtml: this.model.get('descriptionHtml')};
      }}]), DescriptionView;
    }(St.View))||To; allure.api.addTestResultBlock(Po, {position: 'before'}); var Mo; var Ao=n(126); var jo=n.n(Ao); function TagsView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var No=Object(Nt.b)('pane__section')(Mo=function(e) {
      m()(TagsView, e); var t=TagsView_createSuper(TagsView); function TagsView() {
        var e; s()(this, TagsView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', jo.a), e;
      } return u()(TagsView, [{key: 'serializeData', value: function() {
        var e=this.model.get('extra'); return {tags: e?e.tags:null};
      }}]), TagsView;
    }(St.View))||Mo; allure.api.addTestResultBlock(No, {position: 'tag'}); var Do; var Vo=n(127); var Lo=n.n(Vo); function CategoryView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Bo=Object(Nt.b)('pane__section')(Do=function(e) {
      m()(SeverityView, e); var t=CategoryView_createSuper(SeverityView); function SeverityView() {
        var e; s()(this, SeverityView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', Lo.a), e;
      } return u()(SeverityView, [{key: 'serializeData', value: function() {
        var e=this.model.get('extra'); return {categories: e?e.categories:null};
      }}]), SeverityView;
    }(St.View))||Do; allure.api.addTestResultBlock(Bo, {position: 'tag'}); n(222); var Io; var zo=n(128); var Fo=n.n(zo); function HistoryView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } function getSuccessRate(e) {
      if (!e||!e.statistic||!e.statistic.total) return 'unknown'; var t; var n=e.statistic; var r=n.passed; var a=n.total; return ''.concat((t=(r||0)/a*100, (Math.floor(100*t)/100).toString()), '%');
    } var Uo=Object(Nt.b)('test-result-history')(Io=function(e) {
      m()(HistoryView, e); var t=HistoryView_createSuper(HistoryView); function HistoryView() {
        var e; s()(this, HistoryView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', Fo.a), e;
      } return u()(HistoryView, [{key: 'serializeData', value: function() {
        var e=this.model.get('extra'); var t=e?e.history:null; return {cls: this.className, history: t, successRate: getSuccessRate(t)};
      }}]), HistoryView;
    }(St.View))||Io; allure.api.addTestResultTab('history', 'testResult.history.name', Uo); n(223); var Ho; var qo; var Wo; var $o; var Go=n(129); var Yo=n.n(Go); function RetriesView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Ko=(Ho=Object(Nt.b)('test-result-retries'), qo=Object(Nt.c)('click .retry-row'), Ho(($o=function(e) {
      m()(RetriesView, e); var t=RetriesView_createSuper(RetriesView); function RetriesView() {
        var e; s()(this, RetriesView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', Yo.a), e;
      } return u()(RetriesView, [{key: 'serializeData', value: function() {
        var e=this.model.get('extra'); var t=e?e.retries:null; return {cls: this.className, retries: t};
      }}, {key: 'onRetryClick', value: function(e) {
        var t=a()(e.currentTarget).data('uid'); Mn.a.toUrl('#testresult/'.concat(t));
      }}]), RetriesView;
    }(St.View), en()($o.prototype, 'onRetryClick', [qo], Object.getOwnPropertyDescriptor($o.prototype, 'onRetryClick'), $o.prototype), Wo=$o))||Wo); allure.api.addTestResultTab('retries', 'testResult.retries.name', Ko); var Xo; var Zo=n(130); var Jo=n.n(Zo); function OwnerView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var Qo; var es=Object(Nt.b)('pane__section')(Xo=function(e) {
      m()(OwnerView, e); var t=OwnerView_createSuper(OwnerView); function OwnerView() {
        var e; s()(this, OwnerView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', Jo.a), e;
      } return u()(OwnerView, [{key: 'serializeData', value: function() {
        var e=this.model.get('extra'); return {owner: e?e.owner:null};
      }}]), OwnerView;
    }(St.View))||Xo; function SeverityView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    }allure.api.addTestResultBlock(es, {position: 'before'}); var ts=Object(Nt.b)('pane__section')(Qo=function(e) {
      m()(SeverityView, e); var t=SeverityView_createSuper(SeverityView); function SeverityView() {
        return s()(this, SeverityView), t.apply(this, arguments);
      } return u()(SeverityView, [{key: 'template', value: function(e) {
        return e.severity?''.concat(Object(wt.default)('testResult.severity.name'), ': ').concat(Object(si.escapeExpression)(e.severity)):'';
      }}, {key: 'serializeData', value: function() {
        var e=this.model.get('extra'); return {severity: e?e.severity:null};
      }}]), SeverityView;
    }(St.View))||Qo; allure.api.addTestResultBlock(ts, {position: 'tag'}); var ns; var rs=n(131); var as=n.n(rs); function DurationView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var is=Object(Nt.b)('pane__section')(ns=function(e) {
      m()(DurationView, e); var t=DurationView_createSuper(DurationView); function DurationView() {
        var e; s()(this, DurationView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', as.a), e;
      } return u()(DurationView, [{key: 'serializeData', value: function() {
        return {time: this.model.get('time')};
      }}]), DurationView;
    }(St.View))||ns; allure.api.addTestResultBlock(is, {position: 'tag'}); n(224); var os; var ss; var ls; var us; var cs=n(132); var hs=n.n(cs); function ParametersView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var fs=(os=Object(Nt.b)('pane__section'), ss=Object(Nt.c)('click .environment'), os((us=function(e) {
      m()(ParametersView, e); var t=ParametersView_createSuper(ParametersView); function ParametersView() {
        var e; s()(this, ParametersView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', hs.a), e;
      } return u()(ParametersView, [{key: 'serializeData', value: function() {
        return {parameters: this.model.get('parameters')};
      }}, {key: 'onParameterClick', value: function() {
        this.$('.environment').toggleClass('line-ellipsis', !1);
      }}]), ParametersView;
    }(St.View), en()(us.prototype, 'onParameterClick', [ss], Object.getOwnPropertyDescriptor(us.prototype, 'onParameterClick'), us.prototype), ls=us))||ls); allure.api.addTestResultBlock(fs, {position: 'before'}); n(225); var ds; var ps=n(133); var ms=n.n(ps); function LinksView_createSuper(e) {
      var t=function() {
        if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }(); return function() {
        var n; var r=b()(e); if (t) {
          var a=b()(this).constructor; n=Reflect.construct(r, arguments, a);
        } else n=r.apply(this, arguments); return v()(this, n);
      };
    } var gs=Object(Nt.b)('pane__section')(ds=function(e) {
      m()(LinksView, e); var t=LinksView_createSuper(LinksView); function LinksView() {
        var e; s()(this, LinksView); for (var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; return e=t.call.apply(t, [this].concat(r)), x()(h()(e), 'template', ms.a), e;
      } return u()(LinksView, [{key: 'serializeData', value: function() {
        return {links: this.model.get('links')};
      }}]), LinksView;
    }(St.View))||ds; allure.api.addTestResultBlock(gs, {position: 'before'}), window.jQuery=a.a, a()(document).ready((function() {
      return i.a.start();
    }));
  }]);
