/* Source Themes academia v4.3.1 | https://sourcethemes.com/academic/ */

/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */ !(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], t)
    : t(((e = e || self).bootstrap = {}), e.jQuery, e.Popper);
})(this, function (e, t, n) {
  "use strict";
  function Be(e, t) {
    for (var n, s = 0; s < t.length; s++)
      (n = t[s]),
        (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
  }
  function h(e, t, n) {
    return t && Be(e.prototype, t), n && Be(e, n), e;
  }
  function i(e) {
    for (t = 1; t < arguments.length; t++) {
      var t,
        n = null != arguments[t] ? arguments[t] : {},
        s = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (s = s.concat(
          Object.getOwnPropertySymbols(n).filter(function (e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        s.forEach(function (t) {
          var s, o, i;
          (s = e),
            (i = n[(o = t)]),
            o in s
              ? Object.defineProperty(s, o, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (s[o] = i);
        });
    }
    return e;
  }
  (t = t && t.hasOwnProperty("default") ? t.default : t),
    (n = n && n.hasOwnProperty("default") ? n.default : n),
    (P = "transitionend");
  function ns(e) {
    var o = this,
      n = !1;
    return (
      t(this).one(s.TRANSITION_END, function () {
        n = !0;
      }),
      setTimeout(function () {
        n || s.triggerTransitionEnd(o);
      }, e),
      this
    );
  }
  (s = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (e) {
      for (; (e += ~~(1e6 * Math.random())), document.getElementById(e); );
      return e;
    },
    getSelectorFromElement: function (e) {
      var n,
        t = e.getAttribute("data-target");
      (!t || "#" === t) &&
        ((n = e.getAttribute("href")), (t = n && "#" !== n ? n.trim() : ""));
      try {
        return document.querySelector(t) ? t : null;
      } catch {
        return null;
      }
    },
    getTransitionDurationFromElement: function (e) {
      if (!e) return 0;
      var n = t(e).css("transition-duration"),
        s = t(e).css("transition-delay"),
        o = parseFloat(n),
        i = parseFloat(s);
      return o || i
        ? ((n = n.split(",")[0]),
          (s = s.split(",")[0]),
          1e3 * (parseFloat(n) + parseFloat(s)))
        : 0;
    },
    reflow: function (e) {
      return e.offsetHeight;
    },
    triggerTransitionEnd: function (e) {
      t(e).trigger(P);
    },
    supportsTransitionEnd: function () {
      return Boolean(P);
    },
    isElement: function (e) {
      return (e[0] || e).nodeType;
    },
    typeCheckConfig: function (e, t, n) {
      for (o in n)
        if (Object.prototype.hasOwnProperty.call(n, o)) {
          var o,
            c,
            a = n[o],
            i = t[o],
            r =
              i && s.isElement(i)
                ? "element"
                : ((c = i),
                  {}.toString
                    .call(c)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase());
          if (!new RegExp(a).test(r))
            throw new Error(
              e.toUpperCase() +
                ': Option "' +
                o +
                '" provided type "' +
                r +
                '" but expected type "' +
                a +
                '".'
            );
        }
    },
    findShadowRoot: function (e) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof e.getRootNode)
        return e instanceof ShadowRoot
          ? e
          : e.parentNode
          ? s.findShadowRoot(e.parentNode)
          : null;
      var t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    },
  }),
    (t.fn.emulateTransitionEnd = ns),
    (t.event.special[s.TRANSITION_END] = {
      bindType: P,
      delegateType: P,
      handle: function (e) {
        if (t(e.target).is(this))
          return e.handleObj.handler.apply(this, arguments);
      },
    });
  var I = "alert",
    he = "bs.alert",
    Ce = "." + he,
    es = t.fn[I],
    we = {
      CLOSE: "close" + Ce,
      CLOSED: "closed" + Ce,
      CLICK_DATA_API: "click" + Ce + ".data-api",
    },
    Zn = "alert",
    Qn = "fade",
    Xn = "show",
    C = (function () {
      function e(e) {
        this._element = e;
      }
      var n = e.prototype;
      return (
        (n.close = function (e) {
          var t = this._element;
          e && (t = this._getRootElement(e)),
            this._triggerCloseEvent(t).isDefaultPrevented() ||
              this._removeElement(t);
        }),
        (n.dispose = function () {
          t.removeData(this._element, he), (this._element = null);
        }),
        (n._getRootElement = function (e) {
          var o = s.getSelectorFromElement(e),
            n = !1;
          return (
            o && (n = document.querySelector(o)),
            n || (n = t(e).closest("." + Zn)[0]),
            n
          );
        }),
        (n._triggerCloseEvent = function (e) {
          var n = t.Event(we.CLOSE);
          return t(e).trigger(n), n;
        }),
        (n._removeElement = function (e) {
          var n,
            o = this;
          t(e).removeClass(Xn),
            t(e).hasClass(Qn)
              ? ((n = s.getTransitionDurationFromElement(e)),
                t(e)
                  .one(s.TRANSITION_END, function (t) {
                    return o._destroyElement(e, t);
                  })
                  .emulateTransitionEnd(n))
              : this._destroyElement(e);
        }),
        (n._destroyElement = function (e) {
          t(e).detach().trigger(we.CLOSED).remove();
        }),
        (e._jQueryInterface = function (n) {
          return this.each(function () {
            var o = t(this),
              s = o.data(he);
            s || ((s = new e(this)), o.data(he, s)),
              "close" === n && s[n](this);
          });
        }),
        (e._handleDismiss = function (e) {
          return function (t) {
            t && t.preventDefault(), e.close(this);
          };
        }),
        h(e, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
        ]),
        e
      );
    })();
  t(document).on(
    we.CLICK_DATA_API,
    '[data-dismiss="alert"]',
    C._handleDismiss(new C())
  ),
    (t.fn[I] = C._jQueryInterface),
    (t.fn[I].Constructor = C),
    (t.fn[I].noConflict = function () {
      return (t.fn[I] = es), C._jQueryInterface;
    });
  var te = "button",
    le = "bs.button",
    Fe = "." + le,
    Me = ".data-api",
    Yn = t.fn[te],
    X = "active",
    Kn = "btn",
    Un = "focus",
    nt = '[data-toggle^="button"]',
    Wn = '[data-toggle="buttons"]',
    $n = 'input:not([type="hidden"])',
    Hn = ".active",
    De = ".btn",
    Je = {
      CLICK_DATA_API: "click" + Fe + Me,
      FOCUS_BLUR_DATA_API: "focus" + Fe + Me + " blur" + Fe + Me,
    },
    N = (function () {
      function e(e) {
        this._element = e;
      }
      var n = e.prototype;
      return (
        (n.toggle = function () {
          var e,
            o,
            s = !0,
            i = !0,
            n = t(this._element).closest(Wn)[0];
          if (n && ((e = this._element.querySelector($n)), e)) {
            if (
              ("radio" === e.type &&
                (e.checked && this._element.classList.contains(X)
                  ? (s = !1)
                  : ((o = n.querySelector(Hn)), o && t(o).removeClass(X))),
              s)
            ) {
              if (
                e.hasAttribute("disabled") ||
                n.hasAttribute("disabled") ||
                e.classList.contains("disabled") ||
                n.classList.contains("disabled")
              )
                return;
              (e.checked = !this._element.classList.contains(X)),
                t(e).trigger("change");
            }
            e.focus(), (i = !1);
          }
          i &&
            this._element.setAttribute(
              "aria-pressed",
              !this._element.classList.contains(X)
            ),
            s && t(this._element).toggleClass(X);
        }),
        (n.dispose = function () {
          t.removeData(this._element, le), (this._element = null);
        }),
        (e._jQueryInterface = function (n) {
          return this.each(function () {
            var s = t(this).data(le);
            s || ((s = new e(this)), t(this).data(le, s)),
              "toggle" === n && s[n]();
          });
        }),
        h(e, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
        ]),
        e
      );
    })();
  t(document)
    .on(Je.CLICK_DATA_API, nt, function (e) {
      e.preventDefault();
      var n = e.target;
      t(n).hasClass(Kn) || (n = t(n).closest(De)),
        N._jQueryInterface.call(t(n), "toggle");
    })
    .on(Je.FOCUS_BLUR_DATA_API, nt, function (e) {
      var n = t(e.target).closest(De)[0];
      t(n).toggleClass(Un, /^focus(in)?$/.test(e.type));
    }),
    (t.fn[te] = N._jQueryInterface),
    (t.fn[te].Constructor = N),
    (t.fn[te].noConflict = function () {
      return (t.fn[te] = Yn), N._jQueryInterface;
    });
  var s,
    P,
    x = "carousel",
    ne = "bs.carousel",
    r = "." + ne,
    Ze = ".data-api",
    Pn = t.fn[x],
    ze = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    Nn = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    oe = "next",
    me = "prev",
    Dn = "left",
    Tn = "right",
    c = {
      SLIDE: "slide" + r,
      SLID: "slid" + r,
      KEYDOWN: "keydown" + r,
      MOUSEENTER: "mouseenter" + r,
      MOUSELEAVE: "mouseleave" + r,
      TOUCHSTART: "touchstart" + r,
      TOUCHMOVE: "touchmove" + r,
      TOUCHEND: "touchend" + r,
      POINTERDOWN: "pointerdown" + r,
      POINTERUP: "pointerup" + r,
      DRAG_START: "dragstart" + r,
      LOAD_DATA_API: "load" + r + Ze,
      CLICK_DATA_API: "click" + r + Ze,
    },
    Mn = "carousel",
    v = "active",
    An = "slide",
    kn = "carousel-item-right",
    En = "carousel-item-left",
    Cn = "carousel-item-next",
    yn = "carousel-item-prev",
    bn = "pointer-event",
    vn = ".active",
    je = ".active.carousel-item",
    pn = ".carousel-item",
    at = ".carousel-item img",
    mn = ".carousel-item-next, .carousel-item-prev",
    un = ".carousel-indicators",
    ln = "[data-slide], [data-slide-to]",
    cn = '[data-ride="carousel"]',
    He = { TOUCH: "touch", PEN: "pen" },
    E = (function () {
      function n(e, t) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(t)),
          (this._element = e),
          (this._indicatorsElement = this._element.querySelector(un)),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            0 < navigator.maxTouchPoints),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var e = n.prototype;
      return (
        (e.next = function () {
          this._isSliding || this._slide(oe);
        }),
        (e.nextWhenVisible = function () {
          !document.hidden &&
            t(this._element).is(":visible") &&
            "hidden" !== t(this._element).css("visibility") &&
            this.next();
        }),
        (e.prev = function () {
          this._isSliding || this._slide(me);
        }),
        (e.pause = function (e) {
          e || (this._isPaused = !0),
            this._element.querySelector(mn) &&
              (s.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (e.cycle = function (e) {
          e || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (e.to = function (e) {
          var n,
            s,
            o = this;
          if (
            ((this._activeElement = this._element.querySelector(je)),
            (n = this._getItemIndex(this._activeElement)),
            !(e > this._items.length - 1 || e < 0))
          )
            if (this._isSliding)
              t(this._element).one(c.SLID, function () {
                return o.to(e);
              });
            else {
              if (n === e) return this.pause(), void this.cycle();
              (s = n < e ? oe : me), this._slide(s, this._items[e]);
            }
        }),
        (e.dispose = function () {
          t(this._element).off(r),
            t.removeData(this._element, ne),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (e._getConfig = function (e) {
          return (e = i({}, ze, e)), s.typeCheckConfig(x, e, Nn), e;
        }),
        (e._handleSwipe = function () {
          var e,
            t = Math.abs(this.touchDeltaX);
          t <= 40 ||
            ((e = t / this.touchDeltaX),
            0 < e && this.prev(),
            e < 0 && this.next());
        }),
        (e._addEventListeners = function () {
          var e = this;
          this._config.keyboard &&
            t(this._element).on(c.KEYDOWN, function (t) {
              return e._keydown(t);
            }),
            "hover" === this._config.pause &&
              t(this._element)
                .on(c.MOUSEENTER, function (t) {
                  return e.pause(t);
                })
                .on(c.MOUSELEAVE, function (t) {
                  return e.cycle(t);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (e._addTouchEventListeners = function () {
          if (((e = this), this._touchSupported)) {
            var e,
              n = function (t) {
                e._pointerEvent && He[t.originalEvent.pointerType.toUpperCase()]
                  ? (e.touchStartX = t.originalEvent.clientX)
                  : e._pointerEvent ||
                    (e.touchStartX = t.originalEvent.touches[0].clientX);
              },
              s = function (t) {
                e._pointerEvent &&
                  He[t.originalEvent.pointerType.toUpperCase()] &&
                  (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                  e._handleSwipe(),
                  "hover" === e._config.pause &&
                    (e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    (e.touchTimeout = setTimeout(function (t) {
                      return e.cycle(t);
                    }, 500 + e._config.interval)));
              };
            t(this._element.querySelectorAll(at)).on(
              c.DRAG_START,
              function (e) {
                return e.preventDefault();
              }
            ),
              this._pointerEvent
                ? (t(this._element).on(c.POINTERDOWN, function (e) {
                    return n(e);
                  }),
                  t(this._element).on(c.POINTERUP, function (e) {
                    return s(e);
                  }),
                  this._element.classList.add(bn))
                : (t(this._element).on(c.TOUCHSTART, function (e) {
                    return n(e);
                  }),
                  t(this._element).on(c.TOUCHMOVE, function (t) {
                    var n;
                    (n = t).originalEvent.touches &&
                    1 < n.originalEvent.touches.length
                      ? (e.touchDeltaX = 0)
                      : (e.touchDeltaX =
                          n.originalEvent.touches[0].clientX - e.touchStartX);
                  }),
                  t(this._element).on(c.TOUCHEND, function (e) {
                    return s(e);
                  }));
          }
        }),
        (e._keydown = function (e) {
          if (!/input|textarea/i.test(e.target.tagName))
            switch (e.which) {
              case 37:
                e.preventDefault(), this.prev();
                break;
              case 39:
                e.preventDefault(), this.next();
            }
        }),
        (e._getItemIndex = function (e) {
          return (
            (this._items =
              e && e.parentNode
                ? [].slice.call(e.parentNode.querySelectorAll(pn))
                : []),
            this._items.indexOf(e)
          );
        }),
        (e._getItemByDirection = function (e, t) {
          var s,
            o = e === oe,
            i = e === me,
            n = this._getItemIndex(t),
            a = this._items.length - 1;
          return ((i && 0 === n) || (o && n === a)) && !this._config.wrap
            ? t
            : ((s = (n + (e === me ? -1 : 1)) % this._items.length),
              -1 === s ? this._items[this._items.length - 1] : this._items[s]);
        }),
        (e._triggerSlideEvent = function (e, n) {
          var o = this._getItemIndex(e),
            i = this._getItemIndex(this._element.querySelector(je)),
            s = t.Event(c.SLIDE, {
              relatedTarget: e,
              direction: n,
              from: i,
              to: o,
            });
          return t(this._element).trigger(s), s;
        }),
        (e._setActiveIndicatorElement = function (e) {
          if (this._indicatorsElement) {
            var n,
              s = [].slice.call(this._indicatorsElement.querySelectorAll(vn));
            t(s).removeClass(v),
              (n = this._indicatorsElement.children[this._getItemIndex(e)]),
              n && t(n).addClass(v);
          }
        }),
        (e._slide = function (e, n) {
          var a,
            r,
            l,
            d,
            u,
            f,
            h = this,
            i = this._element.querySelector(je),
            p = this._getItemIndex(i),
            o = n || (i && this._getItemByDirection(e, i)),
            g = this._getItemIndex(o),
            m = Boolean(this._interval);
          (l = e === oe ? ((a = En), (r = Cn), Dn) : ((a = kn), (r = yn), Tn)),
            o && t(o).hasClass(v)
              ? (this._isSliding = !1)
              : !this._triggerSlideEvent(o, l).isDefaultPrevented() &&
                i &&
                o &&
                ((this._isSliding = !0),
                m && this.pause(),
                this._setActiveIndicatorElement(o),
                (d = t.Event(c.SLID, {
                  relatedTarget: o,
                  direction: l,
                  from: p,
                  to: g,
                })),
                t(this._element).hasClass(An)
                  ? (t(o).addClass(r),
                    s.reflow(o),
                    t(i).addClass(a),
                    t(o).addClass(a),
                    (u = parseInt(o.getAttribute("data-interval"), 10)),
                    (this._config.interval = u
                      ? ((this._config.defaultInterval =
                          this._config.defaultInterval ||
                          this._config.interval),
                        u)
                      : this._config.defaultInterval || this._config.interval),
                    (f = s.getTransitionDurationFromElement(i)),
                    t(i)
                      .one(s.TRANSITION_END, function () {
                        t(o)
                          .removeClass(a + " " + r)
                          .addClass(v),
                          t(i).removeClass(v + " " + r + " " + a),
                          (h._isSliding = !1),
                          setTimeout(function () {
                            return t(h._element).trigger(d);
                          }, 0);
                      })
                      .emulateTransitionEnd(f))
                  : (t(i).removeClass(v),
                    t(o).addClass(v),
                    (this._isSliding = !1),
                    t(this._element).trigger(d)),
                m && this.cycle());
        }),
        (n._jQueryInterface = function (e) {
          return this.each(function () {
            var a,
              s = t(this).data(ne),
              o = i({}, ze, t(this).data());
            if (
              ("object" == typeof e && (o = i({}, o, e)),
              (a = "string" == typeof e ? e : o.slide),
              (s || ((s = new n(this, o)), t(this).data(ne, s)),
              "number" == typeof e))
            )
              s.to(e);
            else if ("string" == typeof a) {
              if ("undefined" == typeof s[a])
                throw new TypeError('No method named "' + a + '"');
              s[a]();
            } else o.interval && o.ride && (s.pause(), s.cycle());
          });
        }),
        (n._dataApiClickHandler = function (e) {
          if (
            ((a = s.getSelectorFromElement(this)),
            a && ((o = t(a)[0]), o && t(o).hasClass(Mn)))
          ) {
            var o,
              a,
              c = i({}, t(o).data(), t(this).data()),
              r = this.getAttribute("data-slide-to");
            r && (c.interval = !1),
              n._jQueryInterface.call(t(o), c),
              r && t(o).data(ne).to(r),
              e.preventDefault();
          }
        }),
        h(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return ze;
            },
          },
        ]),
        n
      );
    })();
  t(document).on(c.CLICK_DATA_API, ln, E._dataApiClickHandler),
    t(window).on(c.LOAD_DATA_API, function () {
      for (
        var n,
          s = [].slice.call(document.querySelectorAll(cn)),
          e = 0,
          o = s.length;
        e < o;
        e++
      )
        (n = t(s[e])), E._jQueryInterface.call(n, n.data());
    }),
    (t.fn[x] = E._jQueryInterface),
    (t.fn[x].Constructor = E),
    (t.fn[x].noConflict = function () {
      return (t.fn[x] = Pn), E._jQueryInterface;
    });
  var A = "collapse",
    b = "bs.collapse",
    ee = "." + b,
    rn = t.fn[A],
    Ee = { toggle: !0, parent: "" },
    an = { toggle: "boolean", parent: "(string|element)" },
    J = {
      SHOW: "show" + ee,
      SHOWN: "shown" + ee,
      HIDE: "hide" + ee,
      HIDDEN: "hidden" + ee,
      CLICK_DATA_API: "click" + ee + ".data-api",
    },
    y = "show",
    Y = "collapse",
    be = "collapsing",
    ye = "collapsed",
    Pe = "width",
    Xt = "height",
    Yt = ".show, .collapsing",
    Ne = '[data-toggle="collapse"]',
    V = (function () {
      function n(e, t) {
        (this._isTransitioning = !1),
          (this._element = e),
          (this._config = this._getConfig(t)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                e.id +
                '"],[data-toggle="collapse"][data-target="#' +
                e.id +
                '"]'
            )
          ));
        for (
          var i = [].slice.call(document.querySelectorAll(Ne)),
            n = 0,
            r = i.length;
          n < r;
          n++
        ) {
          var a = i[n],
            o = s.getSelectorFromElement(a),
            c = [].slice
              .call(document.querySelectorAll(o))
              .filter(function (t) {
                return t === e;
              });
          null !== o &&
            0 < c.length &&
            ((this._selector = o), this._triggerArray.push(a));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var e = n.prototype;
      return (
        (e.toggle = function () {
          t(this._element).hasClass(y) ? this.hide() : this.show();
        }),
        (e.show = function () {
          if (
            ((o = this),
            !this._isTransitioning &&
              !t(this._element).hasClass(y) &&
              (this._parent &&
                0 ===
                  (e = [].slice
                    .call(this._parent.querySelectorAll(Yt))
                    .filter(function (e) {
                      return "string" == typeof o._config.parent
                        ? e.getAttribute("data-parent") === o._config.parent
                        : e.classList.contains(Y);
                    })).length &&
                (e = null),
              !(
                e &&
                (a = t(e).not(this._selector).data(b)) &&
                a._isTransitioning
              )) &&
              ((r = t.Event(J.SHOW)),
              (t(this._element).trigger(r), !r.isDefaultPrevented())))
          ) {
            e &&
              (n._jQueryInterface.call(t(e).not(this._selector), "hide"),
              a || t(e).data(b, null)),
              (i = this._getDimension()),
              t(this._element).removeClass(Y).addClass(be),
              (this._element.style[i] = 0),
              this._triggerArray.length &&
                t(this._triggerArray).removeClass(ye).attr("aria-expanded", !0),
              this.setTransitioning(!0);
            var e,
              o,
              i,
              a,
              r,
              c = "scroll" + (i[0].toUpperCase() + i.slice(1)),
              l = s.getTransitionDurationFromElement(this._element);
            t(this._element)
              .one(s.TRANSITION_END, function () {
                t(o._element).removeClass(be).addClass(Y).addClass(y),
                  (o._element.style[i] = ""),
                  o.setTransitioning(!1),
                  t(o._element).trigger(J.SHOWN);
              })
              .emulateTransitionEnd(l),
              (this._element.style[i] = this._element[c] + "px");
          }
        }),
        (e.hide = function () {
          if (
            ((o = this),
            !this._isTransitioning &&
              t(this._element).hasClass(y) &&
              ((i = t.Event(J.HIDE)),
              (t(this._element).trigger(i), !i.isDefaultPrevented())))
          ) {
            if (
              ((e = this._getDimension()),
              (this._element.style[e] =
                this._element.getBoundingClientRect()[e] + "px"),
              s.reflow(this._element),
              t(this._element).addClass(be).removeClass(Y).removeClass(y),
              (a = this._triggerArray.length),
              0 < a)
            )
              for (n = 0; n < a; n++) {
                var e,
                  n,
                  o,
                  i,
                  a,
                  l,
                  r = this._triggerArray[n],
                  c = s.getSelectorFromElement(r);
                null !== c &&
                  (t([].slice.call(document.querySelectorAll(c))).hasClass(y) ||
                    t(r).addClass(ye).attr("aria-expanded", !1));
              }
            this.setTransitioning(!0),
              (this._element.style[e] = ""),
              (l = s.getTransitionDurationFromElement(this._element)),
              t(this._element)
                .one(s.TRANSITION_END, function () {
                  o.setTransitioning(!1),
                    t(o._element).removeClass(be).addClass(Y).trigger(J.HIDDEN);
                })
                .emulateTransitionEnd(l);
          }
        }),
        (e.setTransitioning = function (e) {
          this._isTransitioning = e;
        }),
        (e.dispose = function () {
          t.removeData(this._element, b),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (e._getConfig = function (e) {
          return (
            ((e = i({}, Ee, e)).toggle = Boolean(e.toggle)),
            s.typeCheckConfig(A, e, an),
            e
          );
        }),
        (e._getDimension = function () {
          return t(this._element).hasClass(Pe) ? Pe : Xt;
        }),
        (e._getParent = function () {
          (o = this),
            s.isElement(this._config.parent)
              ? ((e = this._config.parent),
                "undefined" != typeof this._config.parent.jquery &&
                  (e = this._config.parent[0]))
              : (e = document.querySelector(this._config.parent));
          var e,
            o,
            i =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            a = [].slice.call(e.querySelectorAll(i));
          return (
            t(a).each(function (e, t) {
              o._addAriaAndCollapsedClass(n._getTargetFromElement(t), [t]);
            }),
            e
          );
        }),
        (e._addAriaAndCollapsedClass = function (e, n) {
          var s = t(e).hasClass(y);
          n.length && t(n).toggleClass(ye, !s).attr("aria-expanded", s);
        }),
        (n._getTargetFromElement = function (e) {
          var t = s.getSelectorFromElement(e);
          return t ? document.querySelector(t) : null;
        }),
        (n._jQueryInterface = function (e) {
          return this.each(function () {
            var o = t(this),
              s = o.data(b),
              a = i({}, Ee, o.data(), "object" == typeof e && e ? e : {});
            if (
              (!s && a.toggle && /show|hide/.test(e) && (a.toggle = !1),
              s || ((s = new n(this, a)), o.data(b, s)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof s[e])
                throw new TypeError('No method named "' + e + '"');
              s[e]();
            }
          });
        }),
        h(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return Ee;
            },
          },
        ]),
        n
      );
    })();
  t(document).on(J.CLICK_DATA_API, Ne, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();
    var n = t(this),
      o = s.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(o));
    t(i).each(function () {
      var e = t(this),
        s = e.data(b) ? "toggle" : n.data();
      V._jQueryInterface.call(e, s);
    });
  }),
    (t.fn[A] = V._jQueryInterface),
    (t.fn[A].Constructor = V),
    (t.fn[A].noConflict = function () {
      return (t.fn[A] = rn), V._jQueryInterface;
    });
  var M = "dropdown",
    B = "bs.dropdown",
    f = "." + B,
    Ae = ".data-api",
    qt = t.fn[M],
    Kt = new RegExp("38|40|27"),
    a = {
      HIDE: "hide" + f,
      HIDDEN: "hidden" + f,
      SHOW: "show" + f,
      SHOWN: "shown" + f,
      CLICK: "click" + f,
      CLICK_DATA_API: "click" + f + Ae,
      KEYDOWN_DATA_API: "keydown" + f + Ae,
      KEYUP_DATA_API: "keyup" + f + Ae,
    },
    ae = "disabled",
    l = "show",
    Ut = "dropup",
    Vt = "dropright",
    Bt = "dropleft",
    Re = "dropdown-menu-right",
    Pt = "position-static",
    re = '[data-toggle="dropdown"]',
    Rt = ".dropdown form",
    Te = ".dropdown-menu",
    Nt = ".navbar-nav",
    Dt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    At = "top-start",
    Et = "top-end",
    Ct = "bottom-start",
    xt = "bottom-end",
    Ot = "right-start",
    bt = "left-start",
    vt = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
    },
    gt = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
    },
    p = (function () {
      function e(e, t) {
        (this._element = e),
          (this._popper = null),
          (this._config = this._getConfig(t)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var o = e.prototype;
      return (
        (o.toggle = function () {
          if (!this._element.disabled && !t(this._element).hasClass(ae)) {
            var i,
              r,
              c,
              o = e._getParentFromElement(this._element),
              d = t(this._menu).hasClass(l);
            if (
              (e._clearMenus(),
              !d &&
                ((r = { relatedTarget: this._element }),
                (c = t.Event(a.SHOW, r)),
                (t(o).trigger(c), !c.isDefaultPrevented())))
            ) {
              if (!this._inNavbar) {
                if ("undefined" == typeof n)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                (i = this._element),
                  "parent" === this._config.reference
                    ? (i = o)
                    : s.isElement(this._config.reference) &&
                      ((i = this._config.reference),
                      "undefined" != typeof this._config.reference.jquery &&
                        (i = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary && t(o).addClass(Pt),
                  (this._popper = new n(
                    i,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === t(o).closest(Nt).length &&
                t(document.body).children().on("mouseover", null, t.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                t(this._menu).toggleClass(l),
                t(o).toggleClass(l).trigger(t.Event(a.SHOWN, r));
            }
          }
        }),
        (o.show = function () {
          if (
            !(
              this._element.disabled ||
              t(this._element).hasClass(ae) ||
              t(this._menu).hasClass(l)
            )
          ) {
            var n = { relatedTarget: this._element },
              s = t.Event(a.SHOW, n),
              o = e._getParentFromElement(this._element);
            t(o).trigger(s),
              s.isDefaultPrevented() ||
                (t(this._menu).toggleClass(l),
                t(o).toggleClass(l).trigger(t.Event(a.SHOWN, n)));
          }
        }),
        (o.hide = function () {
          if (
            !this._element.disabled &&
            !t(this._element).hasClass(ae) &&
            t(this._menu).hasClass(l)
          ) {
            var n = { relatedTarget: this._element },
              s = t.Event(a.HIDE, n),
              o = e._getParentFromElement(this._element);
            t(o).trigger(s),
              s.isDefaultPrevented() ||
                (t(this._menu).toggleClass(l),
                t(o).toggleClass(l).trigger(t.Event(a.HIDDEN, n)));
          }
        }),
        (o.dispose = function () {
          t.removeData(this._element, B),
            t(this._element).off(f),
            (this._element = null),
            (this._menu = null) !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (o.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (o._addEventListeners = function () {
          var e = this;
          t(this._element).on(a.CLICK, function (t) {
            t.preventDefault(), t.stopPropagation(), e.toggle();
          });
        }),
        (o._getConfig = function (e) {
          return (
            (e = i({}, this.constructor.Default, t(this._element).data(), e)),
            s.typeCheckConfig(M, e, this.constructor.DefaultType),
            e
          );
        }),
        (o._getMenuElement = function () {
          if (!this._menu) {
            var t = e._getParentFromElement(this._element);
            t && (this._menu = t.querySelector(Te));
          }
          return this._menu;
        }),
        (o._getPlacement = function () {
          var n = t(this._element.parentNode),
            e = Ct;
          return (
            n.hasClass(Ut)
              ? ((e = At), t(this._menu).hasClass(Re) && (e = Et))
              : n.hasClass(Vt)
              ? (e = Ot)
              : n.hasClass(Bt)
              ? (e = bt)
              : t(this._menu).hasClass(Re) && (e = xt),
            e
          );
        }),
        (o._detectNavbar = function () {
          return 0 < t(this._element).closest(".navbar").length;
        }),
        (o._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = i(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (o._getPopperConfig = function () {
          var e = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (e.modifiers.applyStyle = { enabled: !1 }),
            e
          );
        }),
        (e._jQueryInterface = function (n) {
          return this.each(function () {
            var s = t(this).data(B);
            if (
              (s ||
                ((s = new e(this, "object" == typeof n ? n : null)),
                t(this).data(B, s)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof s[n])
                throw new TypeError('No method named "' + n + '"');
              s[n]();
            }
          });
        }),
        (e._clearMenus = function (n) {
          if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
            for (
              var c,
                u,
                o = [].slice.call(document.querySelectorAll(re)),
                s = 0,
                h = o.length;
              s < h;
              s++
            ) {
              var i = e._getParentFromElement(o[s]),
                d = t(o[s]).data(B),
                r = { relatedTarget: o[s] };
              n && "click" === n.type && (r.clickEvent = n),
                d &&
                  ((u = d._menu),
                  t(i).hasClass(l) &&
                    !(
                      n &&
                      (("click" === n.type &&
                        /input|textarea/i.test(n.target.tagName)) ||
                        ("keyup" === n.type && 9 === n.which)) &&
                      t.contains(i, n.target)
                    ) &&
                    ((c = t.Event(a.HIDE, r)),
                    t(i).trigger(c),
                    c.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        t(document.body)
                          .children()
                          .off("mouseover", null, t.noop),
                      o[s].setAttribute("aria-expanded", "false"),
                      t(u).removeClass(l),
                      t(i).removeClass(l).trigger(t.Event(a.HIDDEN, r)))));
            }
        }),
        (e._getParentFromElement = function (e) {
          var t,
            n = s.getSelectorFromElement(e);
          return n && (t = document.querySelector(n)), t || e.parentNode;
        }),
        (e._dataApiKeydownHandler = function (n) {
          if (
            (/input|textarea/i.test(n.target.tagName)
              ? !(
                  32 === n.which ||
                  (27 !== n.which &&
                    ((40 !== n.which && 38 !== n.which) ||
                      t(n.target).closest(Te).length))
                )
              : Kt.test(n.which)) &&
            (n.preventDefault(),
            n.stopPropagation(),
            !this.disabled && !t(this).hasClass(ae))
          ) {
            var s,
              o,
              r,
              i = e._getParentFromElement(this),
              a = t(i).hasClass(l);
            a && (!a || (27 !== n.which && 32 !== n.which))
              ? ((o = [].slice.call(i.querySelectorAll(Dt))),
                0 !== o.length &&
                  ((s = o.indexOf(n.target)),
                  38 === n.which && 0 < s && s--,
                  40 === n.which && s < o.length - 1 && s++,
                  s < 0 && (s = 0),
                  o[s].focus()))
              : (27 === n.which &&
                  ((r = i.querySelector(re)), t(r).trigger("focus")),
                t(this).trigger("click"));
          }
        }),
        h(e, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return vt;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return gt;
            },
          },
        ]),
        e
      );
    })();
  t(document)
    .on(a.KEYDOWN_DATA_API, re, p._dataApiKeydownHandler)
    .on(a.KEYDOWN_DATA_API, Te, p._dataApiKeydownHandler)
    .on(a.CLICK_DATA_API + " " + a.KEYUP_DATA_API, p._clearMenus)
    .on(a.CLICK_DATA_API, re, function (e) {
      e.preventDefault(),
        e.stopPropagation(),
        p._jQueryInterface.call(t(this), "toggle");
    })
    .on(a.CLICK_DATA_API, Rt, function (e) {
      e.stopPropagation();
    }),
    (t.fn[M] = p._jQueryInterface),
    (t.fn[M].Constructor = p),
    (t.fn[M].noConflict = function () {
      return (t.fn[M] = qt), p._jQueryInterface;
    });
  var F = "modal",
    L = "bs.modal",
    d = "." + L,
    ut = t.fn[F],
    ke = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    dt = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    o = {
      HIDE: "hide" + d,
      HIDDEN: "hidden" + d,
      SHOW: "show" + d,
      SHOWN: "shown" + d,
      FOCUSIN: "focusin" + d,
      RESIZE: "resize" + d,
      CLICK_DISMISS: "click.dismiss" + d,
      KEYDOWN_DISMISS: "keydown.dismiss" + d,
      MOUSEUP_DISMISS: "mouseup.dismiss" + d,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + d,
      CLICK_DATA_API: "click" + d + ".data-api",
    },
    lt = "modal-dialog-scrollable",
    rt = "modal-scrollbar-measure",
    ct = "modal-backdrop",
    et = "modal-open",
    S = "fade",
    ge = "show",
    ht = ".modal-dialog",
    mt = ".modal-body",
    ft = '[data-toggle="modal"]',
    pt = '[data-dismiss="modal"]',
    Qe = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    Xe = ".sticky-top",
    R = (function () {
      function n(e, t) {
        (this._config = this._getConfig(t)),
          (this._element = e),
          (this._dialog = e.querySelector(ht)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var e = n.prototype;
      return (
        (e.toggle = function (e) {
          return this._isShown ? this.hide() : this.show(e);
        }),
        (e.show = function (e) {
          var s,
            n = this;
          !this._isShown &&
            !this._isTransitioning &&
            (t(this._element).hasClass(S) && (this._isTransitioning = !0),
            (s = t.Event(o.SHOW, { relatedTarget: e })),
            t(this._element).trigger(s),
            this._isShown ||
              s.isDefaultPrevented() ||
              ((this._isShown = !0),
              this._checkScrollbar(),
              this._setScrollbar(),
              this._adjustDialog(),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              t(this._element).on(o.CLICK_DISMISS, pt, function (e) {
                return n.hide(e);
              }),
              t(this._dialog).on(o.MOUSEDOWN_DISMISS, function () {
                t(n._element).one(o.MOUSEUP_DISMISS, function (e) {
                  t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
                });
              }),
              this._showBackdrop(function () {
                return n._showElement(e);
              })));
        }),
        (e.hide = function (e) {
          var n,
            i,
            a,
            r = this;
          e && e.preventDefault(),
            this._isShown &&
              !this._isTransitioning &&
              ((n = t.Event(o.HIDE)),
              (t(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented()) &&
                ((this._isShown = !1),
                (i = t(this._element).hasClass(S)),
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                t(document).off(o.FOCUSIN),
                t(this._element).removeClass(ge),
                t(this._element).off(o.CLICK_DISMISS),
                t(this._dialog).off(o.MOUSEDOWN_DISMISS),
                i)
                  ? ((a = s.getTransitionDurationFromElement(this._element)),
                    t(this._element)
                      .one(s.TRANSITION_END, function (e) {
                        return r._hideModal(e);
                      })
                      .emulateTransitionEnd(a))
                  : this._hideModal()));
        }),
        (e.dispose = function () {
          [window, this._element, this._dialog].forEach(function (e) {
            return t(e).off(d);
          }),
            t(document).off(o.FOCUSIN),
            t.removeData(this._element, L),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (e.handleUpdate = function () {
          this._adjustDialog();
        }),
        (e._getConfig = function (e) {
          return (e = i({}, ke, e)), s.typeCheckConfig(F, e, dt), e;
        }),
        (e._showElement = function (e) {
          var i,
            r,
            c,
            n = this,
            a = t(this._element).hasClass(S);
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            t(this._dialog).hasClass(lt)
              ? (this._dialog.querySelector(mt).scrollTop = 0)
              : (this._element.scrollTop = 0),
            a && s.reflow(this._element),
            t(this._element).addClass(ge),
            this._config.focus && this._enforceFocus(),
            (r = t.Event(o.SHOWN, { relatedTarget: e })),
            (i = function () {
              n._config.focus && n._element.focus(),
                (n._isTransitioning = !1),
                t(n._element).trigger(r);
            }),
            a
              ? ((c = s.getTransitionDurationFromElement(this._dialog)),
                t(this._dialog)
                  .one(s.TRANSITION_END, i)
                  .emulateTransitionEnd(c))
              : i();
        }),
        (e._enforceFocus = function () {
          var e = this;
          t(document)
            .off(o.FOCUSIN)
            .on(o.FOCUSIN, function (n) {
              document !== n.target &&
                e._element !== n.target &&
                0 === t(e._element).has(n.target).length &&
                e._element.focus();
            });
        }),
        (e._setEscapeEvent = function () {
          var e = this;
          this._isShown && this._config.keyboard
            ? t(this._element).on(o.KEYDOWN_DISMISS, function (t) {
                27 === t.which && (t.preventDefault(), e.hide());
              })
            : this._isShown || t(this._element).off(o.KEYDOWN_DISMISS);
        }),
        (e._setResizeEvent = function () {
          var e = this;
          this._isShown
            ? t(window).on(o.RESIZE, function (t) {
                return e.handleUpdate(t);
              })
            : t(window).off(o.RESIZE);
        }),
        (e._hideModal = function () {
          var e = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              t(document.body).removeClass(et),
                e._resetAdjustments(),
                e._resetScrollbar(),
                t(e._element).trigger(o.HIDDEN);
            });
        }),
        (e._removeBackdrop = function () {
          this._backdrop &&
            (t(this._backdrop).remove(), (this._backdrop = null));
        }),
        (e._showBackdrop = function (e) {
          var a,
            r,
            c,
            n = this,
            i = t(this._element).hasClass(S) ? S : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = ct),
              i && this._backdrop.classList.add(i),
              t(this._backdrop).appendTo(document.body),
              t(this._element).on(o.CLICK_DISMISS, function (e) {
                n._ignoreBackdropClick
                  ? (n._ignoreBackdropClick = !1)
                  : e.target === e.currentTarget &&
                    ("static" === n._config.backdrop
                      ? n._element.focus()
                      : n.hide());
              }),
              i && s.reflow(this._backdrop),
              t(this._backdrop).addClass(ge),
              !e)
            )
              return;
            if (!i) return void e();
            (r = s.getTransitionDurationFromElement(this._backdrop)),
              t(this._backdrop)
                .one(s.TRANSITION_END, e)
                .emulateTransitionEnd(r);
          } else
            !this._isShown && this._backdrop
              ? (t(this._backdrop).removeClass(ge),
                (a = function () {
                  n._removeBackdrop(), e && e();
                }),
                t(this._element).hasClass(S)
                  ? ((c = s.getTransitionDurationFromElement(this._backdrop)),
                    t(this._backdrop)
                      .one(s.TRANSITION_END, a)
                      .emulateTransitionEnd(c))
                  : a())
              : e && e();
        }),
        (e._adjustDialog = function () {
          var e =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            e &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !e &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (e._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (e._checkScrollbar = function () {
          var e = document.body.getBoundingClientRect();
          (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (e._setScrollbar = function () {
          if (((e = this), this._isBodyOverflowing)) {
            var e,
              n,
              s,
              o = [].slice.call(document.querySelectorAll(Qe)),
              i = [].slice.call(document.querySelectorAll(Xe));
            t(o).each(function (n, s) {
              var o = s.style.paddingRight,
                i = t(s).css("padding-right");
              t(s)
                .data("padding-right", o)
                .css("padding-right", parseFloat(i) + e._scrollbarWidth + "px");
            }),
              t(i).each(function (n, s) {
                var o = s.style.marginRight,
                  i = t(s).css("margin-right");
                t(s)
                  .data("margin-right", o)
                  .css(
                    "margin-right",
                    parseFloat(i) - e._scrollbarWidth + "px"
                  );
              }),
              (n = document.body.style.paddingRight),
              (s = t(document.body).css("padding-right")),
              t(document.body)
                .data("padding-right", n)
                .css(
                  "padding-right",
                  parseFloat(s) + this._scrollbarWidth + "px"
                );
          }
          t(document.body).addClass(et);
        }),
        (e._resetScrollbar = function () {
          var e,
            n,
            s = [].slice.call(document.querySelectorAll(Qe));
          t(s).each(function (e, n) {
            var s = t(n).data("padding-right");
            t(n).removeData("padding-right"), (n.style.paddingRight = s || "");
          }),
            (e = [].slice.call(document.querySelectorAll("" + Xe))),
            t(e).each(function (e, n) {
              var s = t(n).data("margin-right");
              "undefined" != typeof s &&
                t(n).css("margin-right", s).removeData("margin-right");
            }),
            (n = t(document.body).data("padding-right")),
            t(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = n || "");
        }),
        (e._getScrollbarWidth = function () {
          var t,
            e = document.createElement("div");
          return (
            (e.className = rt),
            document.body.appendChild(e),
            (t = e.getBoundingClientRect().width - e.clientWidth),
            document.body.removeChild(e),
            t
          );
        }),
        (n._jQueryInterface = function (e, s) {
          return this.each(function () {
            var o = t(this).data(L),
              a = i({}, ke, t(this).data(), "object" == typeof e && e ? e : {});
            if (
              (o || ((o = new n(this, a)), t(this).data(L, o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](s);
            } else a.show && o.show(s);
          });
        }),
        h(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return ke;
            },
          },
        ]),
        n
      );
    })();
  t(document).on(o.CLICK_DATA_API, ft, function (e) {
    var n,
      c,
      l,
      a = this,
      r = s.getSelectorFromElement(this);
    r && (n = document.querySelector(r)),
      (c = t(n).data(L) ? "toggle" : i({}, t(n).data(), t(this).data())),
      ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault(),
      (l = t(n).one(o.SHOW, function (e) {
        e.isDefaultPrevented() ||
          l.one(o.HIDDEN, function () {
            t(a).is(":visible") && a.focus();
          });
      })),
      R._jQueryInterface.call(t(n), c, this);
  }),
    (t.fn[F] = R._jQueryInterface),
    (t.fn[F].Constructor = R),
    (t.fn[F].noConflict = function () {
      return (t.fn[F] = ut), R._jQueryInterface;
    });
  var jt = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    yt = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    _t = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    wt =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function Ye(e, t, n) {
    if (0 === e.length) return e;
    if (n && "function" == typeof n) return n(e);
    for (
      var o = new window.DOMParser().parseFromString(e, "text/html"),
        a = Object.keys(t),
        i = [].slice.call(o.body.querySelectorAll("*")),
        r = function (e) {
          var o,
            r,
            s = i[e],
            c = s.nodeName.toLowerCase();
          if (-1 === a.indexOf(s.nodeName.toLowerCase()))
            return s.parentNode.removeChild(s), "continue";
          (o = [].slice.call(s.attributes)),
            (r = [].concat(t["*"] || [], t[c] || [])),
            o.forEach(function (e) {
              (function (e, t) {
                if (((n = e.nodeName.toLowerCase()), -1 !== t.indexOf(n)))
                  return (
                    -1 === jt.indexOf(n) ||
                    Boolean(e.nodeValue.match(_t) || e.nodeValue.match(wt))
                  );
                for (
                  var n,
                    o = t.filter(function (e) {
                      return e instanceof RegExp;
                    }),
                    s = 0,
                    i = o.length;
                  s < i;
                  s++
                )
                  if (n.match(o[s])) return !0;
                return !1;
              })(e, r) || s.removeAttribute(e.nodeName);
            });
        },
        s = 0,
        c = i.length;
      s < c;
      s++
    )
      r(s);
    return o.body.innerHTML;
  }
  var j = "tooltip",
    pe = "bs.tooltip",
    u = "." + pe,
    kt = t.fn[j],
    We = "bs-tooltip",
    St = new RegExp("(^|\\s)" + We + "\\S+", "g"),
    Mt = ["sanitize", "whiteList", "sanitizeFn"],
    Ft = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
    },
    Tt = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    zt = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: yt,
    },
    Q = "show",
    xe = "out",
    Lt = {
      HIDE: "hide" + u,
      HIDDEN: "hidden" + u,
      SHOW: "show" + u,
      SHOWN: "shown" + u,
      INSERTED: "inserted" + u,
      CLICK: "click" + u,
      FOCUSIN: "focusin" + u,
      FOCUSOUT: "focusout" + u,
      MOUSEENTER: "mouseenter" + u,
      MOUSELEAVE: "mouseleave" + u,
    },
    D = "fade",
    K = "show",
    Ht = ".tooltip-inner",
    It = ".arrow",
    W = "hover",
    Oe = "focus",
    $t = "click",
    Wt = "manual",
    g = (function () {
      function o(e, t) {
        if ("undefined" == typeof n)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = e),
          (this.config = this._getConfig(t)),
          (this.tip = null),
          this._setListeners();
      }
      var e = o.prototype;
      return (
        (e.enable = function () {
          this._isEnabled = !0;
        }),
        (e.disable = function () {
          this._isEnabled = !1;
        }),
        (e.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (e.toggle = function (e) {
          if (this._isEnabled)
            if (e) {
              var s = this.constructor.DATA_KEY,
                n = t(e.currentTarget).data(s);
              n ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                t(e.currentTarget).data(s, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (t(this.getTipElement()).hasClass(K))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            t.removeData(this.element, this.constructor.DATA_KEY),
            t(this.element).off(this.constructor.EVENT_KEY),
            t(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && t(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null) !== this._popper &&
              this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (e.show = function () {
          if (((e = this), "none" === t(this.element).css("display")))
            throw new Error("Please use show on visible elements");
          if (
            ((i = t.Event(this.constructor.Event.SHOW)),
            this.isWithContent() && this._isEnabled)
          ) {
            t(this.element).trigger(i);
            var e,
              o,
              i,
              a,
              r,
              c,
              d,
              u,
              h,
              l = s.findShadowRoot(this.element),
              m = t.contains(
                null !== l ? l : this.element.ownerDocument.documentElement,
                this.element
              );
            if (i.isDefaultPrevented() || !m) return;
            (o = this.getTipElement()),
              (a = s.getUID(this.constructor.NAME)),
              o.setAttribute("id", a),
              this.element.setAttribute("aria-describedby", a),
              this.setContent(),
              this.config.animation && t(o).addClass(D),
              (d =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement),
              (r = this._getAttachment(d)),
              this.addAttachmentClass(r),
              (u = this._getContainer()),
              t(o).data(this.constructor.DATA_KEY, this),
              t.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || t(o).appendTo(u),
              t(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new n(this.element, o, {
                placement: r,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: It },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
                onUpdate: function (t) {
                  return e._handlePopperPlacementChange(t);
                },
              })),
              t(o).addClass(K),
              "ontouchstart" in document.documentElement &&
                t(document.body).children().on("mouseover", null, t.noop),
              (c = function () {
                e.config.animation && e._fixTransition();
                var n = e._hoverState;
                (e._hoverState = null),
                  t(e.element).trigger(e.constructor.Event.SHOWN),
                  n === xe && e._leave(null, e);
              }),
              t(this.tip).hasClass(D)
                ? ((h = s.getTransitionDurationFromElement(this.tip)),
                  t(this.tip).one(s.TRANSITION_END, c).emulateTransitionEnd(h))
                : c();
          }
        }),
        (e.hide = function (e) {
          var r,
            n = this,
            o = this.getTipElement(),
            i = t.Event(this.constructor.Event.HIDE),
            a = function () {
              n._hoverState !== Q &&
                o.parentNode &&
                o.parentNode.removeChild(o),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                t(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                e && e();
            };
          t(this.element).trigger(i),
            !i.isDefaultPrevented() &&
              ((t(o).removeClass(K),
              "ontouchstart" in document.documentElement &&
                t(document.body).children().off("mouseover", null, t.noop),
              (this._activeTrigger[$t] = !1),
              (this._activeTrigger[Oe] = !1),
              (this._activeTrigger[W] = !1),
              t(this.tip).hasClass(D))
                ? ((r = s.getTransitionDurationFromElement(o)),
                  t(o).one(s.TRANSITION_END, a).emulateTransitionEnd(r))
                : a(),
              (this._hoverState = ""));
        }),
        (e.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (e.addAttachmentClass = function (e) {
          t(this.getTipElement()).addClass(We + "-" + e);
        }),
        (e.getTipElement = function () {
          return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
        }),
        (e.setContent = function () {
          var e = this.getTipElement();
          this.setElementContent(t(e.querySelectorAll(Ht)), this.getTitle()),
            t(e).removeClass(D + " " + K);
        }),
        (e.setElementContent = function (e, n) {
          "object" != typeof n || (!n.nodeType && !n.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (n = Ye(n, this.config.whiteList, this.config.sanitizeFn)),
                e.html(n))
              : e.text(n)
            : this.config.html
            ? t(n).parent().is(e) || e.empty().append(n)
            : e.text(t(n).text());
        }),
        (e.getTitle = function () {
          var e = this.element.getAttribute("data-original-title");
          return (
            e ||
              (e =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            e
          );
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = i(
                      {},
                      e.offsets,
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (e._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : s.isElement(this.config.container)
            ? t(this.config.container)
            : t(document).find(this.config.container);
        }),
        (e._getAttachment = function (e) {
          return Tt[e.toUpperCase()];
        }),
        (e._setListeners = function () {
          var e = this;
          this.config.trigger.split(" ").forEach(function (n) {
            if ("click" === n)
              t(e.element).on(
                e.constructor.Event.CLICK,
                e.config.selector,
                function (t) {
                  return e.toggle(t);
                }
              );
            else if (n !== Wt) {
              var s =
                  n === W
                    ? e.constructor.Event.MOUSEENTER
                    : e.constructor.Event.FOCUSIN,
                o =
                  n === W
                    ? e.constructor.Event.MOUSELEAVE
                    : e.constructor.Event.FOCUSOUT;
              t(e.element)
                .on(s, e.config.selector, function (t) {
                  return e._enter(t);
                })
                .on(o, e.config.selector, function (t) {
                  return e._leave(t);
                });
            }
          }),
            t(this.element)
              .closest(".modal")
              .on("hide.bs.modal", function () {
                e.element && e.hide();
              }),
            this.config.selector
              ? (this.config = i({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (e._fixTitle = function () {
          var e = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== e) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (e._enter = function (e, n) {
          var s = this.constructor.DATA_KEY;
          (n = n || t(e.currentTarget).data(s)) ||
            ((n = new this.constructor(
              e.currentTarget,
              this._getDelegateConfig()
            )),
            t(e.currentTarget).data(s, n)),
            e && (n._activeTrigger["focusin" === e.type ? Oe : W] = !0),
            t(n.getTipElement()).hasClass(K) || n._hoverState === Q
              ? (n._hoverState = Q)
              : (clearTimeout(n._timeout),
                (n._hoverState = Q),
                n.config.delay && n.config.delay.show
                  ? (n._timeout = setTimeout(function () {
                      n._hoverState === Q && n.show();
                    }, n.config.delay.show))
                  : n.show());
        }),
        (e._leave = function (e, n) {
          var s = this.constructor.DATA_KEY;
          (n = n || t(e.currentTarget).data(s)) ||
            ((n = new this.constructor(
              e.currentTarget,
              this._getDelegateConfig()
            )),
            t(e.currentTarget).data(s, n)),
            e && (n._activeTrigger["focusout" === e.type ? Oe : W] = !1),
            n._isWithActiveTrigger() ||
              (clearTimeout(n._timeout),
              (n._hoverState = xe),
              n.config.delay && n.config.delay.hide
                ? (n._timeout = setTimeout(function () {
                    n._hoverState === xe && n.hide();
                  }, n.config.delay.hide))
                : n.hide());
        }),
        (e._isWithActiveTrigger = function () {
          for (var e in this._activeTrigger)
            if (this._activeTrigger[e]) return !0;
          return !1;
        }),
        (e._getConfig = function (e) {
          var n = t(this.element).data();
          return (
            Object.keys(n).forEach(function (e) {
              -1 !== Mt.indexOf(e) && delete n[e];
            }),
            "number" ==
              typeof (e = i(
                {},
                this.constructor.Default,
                n,
                "object" == typeof e && e ? e : {}
              )).delay && (e.delay = { show: e.delay, hide: e.delay }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            s.typeCheckConfig(j, e, this.constructor.DefaultType),
            e.sanitize &&
              (e.template = Ye(e.template, e.whiteList, e.sanitizeFn)),
            e
          );
        }),
        (e._getDelegateConfig = function () {
          var e,
            t = {};
          if (this.config)
            for (e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (e._cleanTipClass = function () {
          var n = t(this.getTipElement()),
            e = n.attr("class").match(St);
          null !== e && e.length && n.removeClass(e.join(""));
        }),
        (e._handlePopperPlacementChange = function (e) {
          var t = e.instance;
          (this.tip = t.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement));
        }),
        (e._fixTransition = function () {
          var e = this.getTipElement(),
            n = this.config.animation;
          null === e.getAttribute("x-placement") &&
            (t(e).removeClass(D),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = n));
        }),
        (o._jQueryInterface = function (e) {
          return this.each(function () {
            var n = t(this).data(pe),
              s = "object" == typeof e && e;
            if (
              (n || !/dispose|hide/.test(e)) &&
              (n || ((n = new o(this, s)), t(this).data(pe, n)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        h(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return zt;
            },
          },
          {
            key: "NAME",
            get: function () {
              return j;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return pe;
            },
          },
          {
            key: "Event",
            get: function () {
              return Lt;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return u;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Ft;
            },
          },
        ]),
        o
      );
    })();
  (t.fn[j] = g._jQueryInterface),
    (t.fn[j].Constructor = g),
    (t.fn[j].noConflict = function () {
      return (t.fn[j] = kt), g._jQueryInterface;
    });
  var T = "popover",
    ue = "bs.popover",
    m = "." + ue,
    Gt = t.fn[T],
    Le = "bs-popover",
    Qt = new RegExp("(^|\\s)" + Le + "\\S+", "g"),
    Zt = i({}, g.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    Jt = i({}, g.DefaultType, { content: "(string|element|function)" }),
    en = "fade",
    tn = "show",
    nn = ".popover-header",
    sn = ".popover-body",
    on = {
      HIDE: "hide" + m,
      HIDDEN: "hidden" + m,
      SHOW: "show" + m,
      SHOWN: "shown" + m,
      INSERTED: "inserted" + m,
      CLICK: "click" + m,
      FOCUSIN: "focusin" + m,
      FOCUSOUT: "focusout" + m,
      MOUSEENTER: "mouseenter" + m,
      MOUSELEAVE: "mouseleave" + m,
    },
    fe = (function (e) {
      function n() {
        return e.apply(this, arguments) || this;
      }
      (i = e),
        ((o = n).prototype = Object.create(i.prototype)),
        ((o.prototype.constructor = o).__proto__ = i);
      var o,
        i,
        s = n.prototype;
      return (
        (s.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (s.addAttachmentClass = function (e) {
          t(this.getTipElement()).addClass(Le + "-" + e);
        }),
        (s.getTipElement = function () {
          return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
        }),
        (s.setContent = function () {
          var e,
            n = t(this.getTipElement());
          this.setElementContent(n.find(nn), this.getTitle()),
            (e = this._getContent()),
            "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(n.find(sn), e),
            n.removeClass(en + " " + tn);
        }),
        (s._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (s._cleanTipClass = function () {
          var n = t(this.getTipElement()),
            e = n.attr("class").match(Qt);
          null !== e && 0 < e.length && n.removeClass(e.join(""));
        }),
        (n._jQueryInterface = function (e) {
          return this.each(function () {
            var s = t(this).data(ue),
              o = "object" == typeof e ? e : null;
            if (
              (s || !/dispose|hide/.test(e)) &&
              (s || ((s = new n(this, o)), t(this).data(ue, s)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof s[e])
                throw new TypeError('No method named "' + e + '"');
              s[e]();
            }
          });
        }),
        h(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return Zt;
            },
          },
          {
            key: "NAME",
            get: function () {
              return T;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return ue;
            },
          },
          {
            key: "Event",
            get: function () {
              return on;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return m;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Jt;
            },
          },
        ]),
        n
      );
    })(g);
  (t.fn[T] = fe._jQueryInterface),
    (t.fn[T].Constructor = fe),
    (t.fn[T].noConflict = function () {
      return (t.fn[T] = Gt), fe._jQueryInterface;
    });
  var w = "scrollspy",
    se = "bs.scrollspy",
    ie = "." + se,
    dn = t.fn[w],
    Ie = { offset: 10, method: "auto", target: "" },
    hn = { offset: "number", method: "string", target: "(string|element)" },
    Se = {
      ACTIVATE: "activate" + ie,
      SCROLL: "scroll" + ie,
      LOAD_DATA_API: "load" + ie + ".data-api",
    },
    fn = "dropdown-item",
    _ = "active",
    gn = '[data-spy="scroll"]',
    Ve = ".nav, .list-group",
    _e = ".nav-link",
    jn = ".nav-item",
    $e = ".list-group-item",
    _n = ".dropdown",
    wn = ".dropdown-item",
    On = ".dropdown-toggle",
    xn = "offset",
    Ue = "position",
    G = (function () {
      function n(e, n) {
        var s = this;
        (this._element = e),
          (this._scrollElement = "BODY" === e.tagName ? window : e),
          (this._config = this._getConfig(n)),
          (this._selector =
            this._config.target +
            " " +
            _e +
            "," +
            this._config.target +
            " " +
            $e +
            "," +
            this._config.target +
            " " +
            wn),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          t(this._scrollElement).on(Se.SCROLL, function (e) {
            return s._process(e);
          }),
          this.refresh(),
          this._process();
      }
      var e = n.prototype;
      return (
        (e.refresh = function () {
          var e = this,
            o = this._scrollElement === this._scrollElement.window ? xn : Ue,
            n = "auto" === this._config.method ? o : this._config.method,
            i = n === Ue ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (e) {
                var o,
                  r,
                  a = s.getSelectorFromElement(e);
                return (a && (o = document.querySelector(a)), o) &&
                  ((r = o.getBoundingClientRect()), r.width || r.height)
                  ? [t(o)[n]().top + i, a]
                  : null;
              })
              .filter(function (e) {
                return e;
              })
              .sort(function (e, t) {
                return e[0] - t[0];
              })
              .forEach(function (t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
              });
        }),
        (e.dispose = function () {
          t.removeData(this._element, se),
            t(this._scrollElement).off(ie),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (e._getConfig = function (e) {
          if (
            "string" !=
            typeof (e = i({}, Ie, "object" == typeof e && e ? e : {})).target
          ) {
            var n = t(e.target).attr("id");
            n || ((n = s.getUID(w)), t(e.target).attr("id", n)),
              (e.target = "#" + n);
          }
          return s.typeCheckConfig(w, e, hn), e;
        }),
        (e._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (e._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (e._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (e._process = function () {
          var e,
            n,
            t = this._getScrollTop() + this._config.offset,
            s = this._getScrollHeight(),
            o = this._config.offset + s - this._getOffsetHeight();
          if ((this._scrollHeight !== s && this.refresh(), o <= t))
            (n = this._targets[this._targets.length - 1]),
              this._activeTarget !== n && this._activate(n);
          else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear();
            for (e = this._offsets.length; e--; )
              this._activeTarget !== this._targets[e] &&
                t >= this._offsets[e] &&
                ("undefined" == typeof this._offsets[e + 1] ||
                  t < this._offsets[e + 1]) &&
                this._activate(this._targets[e]);
          }
        }),
        (e._activate = function (e) {
          (this._activeTarget = e), this._clear();
          var s = this._selector.split(",").map(function (t) {
              return (
                t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
              );
            }),
            n = t([].slice.call(document.querySelectorAll(s.join(","))));
          n.hasClass(fn)
            ? (n.closest(_n).find(On).addClass(_), n.addClass(_))
            : (n.addClass(_),
              n
                .parents(Ve)
                .prev(_e + ", " + $e)
                .addClass(_),
              n.parents(Ve).prev(jn).children(_e).addClass(_)),
            t(this._scrollElement).trigger(Se.ACTIVATE, { relatedTarget: e });
        }),
        (e._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (e) {
              return e.classList.contains(_);
            })
            .forEach(function (e) {
              return e.classList.remove(_);
            });
        }),
        (n._jQueryInterface = function (e) {
          return this.each(function () {
            var s = t(this).data(se);
            if (
              (s ||
                ((s = new n(this, "object" == typeof e && e)),
                t(this).data(se, s)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof s[e])
                throw new TypeError('No method named "' + e + '"');
              s[e]();
            }
          });
        }),
        h(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return Ie;
            },
          },
        ]),
        n
      );
    })();
  t(window).on(Se.LOAD_DATA_API, function () {
    for (
      var e, n = [].slice.call(document.querySelectorAll(gn)), s = n.length;
      s--;

    )
      (e = t(n[s])), G._jQueryInterface.call(e, e.data());
  }),
    (t.fn[w] = G._jQueryInterface),
    (t.fn[w].Constructor = G),
    (t.fn[w].noConflict = function () {
      return (t.fn[w] = dn), G._jQueryInterface;
    });
  var ve = "bs.tab",
    q = "." + ve,
    Sn = t.fn.tab,
    U = {
      HIDE: "hide" + q,
      HIDDEN: "hidden" + q,
      SHOW: "show" + q,
      SHOWN: "shown" + q,
      CLICK_DATA_API: "click" + q + ".data-api",
    },
    Fn = "dropdown-menu",
    $ = "active",
    zn = "disabled",
    Ke = "fade",
    qe = "show",
    Ln = ".dropdown",
    Rn = ".nav, .list-group",
    Ge = ".active",
    tt = "> li > .active",
    In = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    Bn = ".dropdown-toggle",
    Vn = "> .dropdown-menu .active",
    H = (function () {
      function e(e) {
        this._element = e;
      }
      var n = e.prototype;
      return (
        (n.show = function () {
          if (
            ((i = this),
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                t(this._element).hasClass($)) ||
              t(this._element).hasClass(zn)
            ))
          ) {
            var e,
              o,
              i,
              a,
              r,
              c,
              d,
              n = t(this._element).closest(Rn)[0],
              l = s.getSelectorFromElement(this._element);
            n &&
              ((d = "UL" === n.nodeName || "OL" === n.nodeName ? tt : Ge),
              (e = (e = t.makeArray(t(n).find(d)))[e.length - 1])),
              (a = t.Event(U.HIDE, { relatedTarget: this._element })),
              (r = t.Event(U.SHOW, { relatedTarget: e })),
              (e && t(e).trigger(a),
              t(this._element).trigger(r),
              !r.isDefaultPrevented() && !a.isDefaultPrevented()) &&
                (l && (o = document.querySelector(l)),
                this._activate(this._element, n),
                (c = function () {
                  var n = t.Event(U.HIDDEN, { relatedTarget: i._element }),
                    s = t.Event(U.SHOWN, { relatedTarget: e });
                  t(e).trigger(n), t(i._element).trigger(s);
                }),
                o ? this._activate(o, o.parentNode, c) : c());
          }
        }),
        (n.dispose = function () {
          t.removeData(this._element, ve), (this._element = null);
        }),
        (n._activate = function (e, n, o) {
          var r,
            c = this,
            i = (
              !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
                ? t(n).children(Ge)
                : t(n).find(tt)
            )[0],
            l = o && i && t(i).hasClass(Ke),
            a = function () {
              return c._transitionComplete(e, i, o);
            };
          i && l
            ? ((r = s.getTransitionDurationFromElement(i)),
              t(i)
                .removeClass(qe)
                .one(s.TRANSITION_END, a)
                .emulateTransitionEnd(r))
            : a();
        }),
        (n._transitionComplete = function (e, n, o) {
          if (n) {
            t(n).removeClass($);
            var i,
              r,
              a = t(n.parentNode).find(Vn)[0];
            a && t(a).removeClass($),
              "tab" === n.getAttribute("role") &&
                n.setAttribute("aria-selected", !1);
          }
          (t(e).addClass($),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !0),
          s.reflow(e),
          e.classList.contains(Ke) && e.classList.add(qe),
          e.parentNode && t(e.parentNode).hasClass(Fn)) &&
            ((i = t(e).closest(Ln)[0]),
            i &&
              ((r = [].slice.call(i.querySelectorAll(Bn))), t(r).addClass($)),
            e.setAttribute("aria-expanded", !0)),
            o && o();
        }),
        (e._jQueryInterface = function (n) {
          return this.each(function () {
            var o = t(this),
              s = o.data(ve);
            if (
              (s || ((s = new e(this)), o.data(ve, s)), "string" == typeof n)
            ) {
              if ("undefined" == typeof s[n])
                throw new TypeError('No method named "' + n + '"');
              s[n]();
            }
          });
        }),
        h(e, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
        ]),
        e
      );
    })();
  t(document).on(U.CLICK_DATA_API, In, function (e) {
    e.preventDefault(), H._jQueryInterface.call(t(this), "show");
  }),
    (t.fn.tab = H._jQueryInterface),
    (t.fn.tab.Constructor = H),
    (t.fn.tab.noConflict = function () {
      return (t.fn.tab = Sn), H._jQueryInterface;
    });
  var k = "toast",
    de = "bs.toast",
    z = "." + de,
    qn = t.fn[k],
    O = {
      CLICK_DISMISS: "click.dismiss" + z,
      HIDE: "hide" + z,
      HIDDEN: "hidden" + z,
      SHOW: "show" + z,
      SHOWN: "shown" + z,
    },
    Gn = "fade",
    st = "hide",
    Z = "show",
    ot = "showing",
    Jn = { animation: "boolean", autohide: "boolean", delay: "number" },
    it = { animation: !0, autohide: !0, delay: 500 },
    ts = '[data-dismiss="toast"]',
    ce = (function () {
      function n(e, t) {
        (this._element = e),
          (this._config = this._getConfig(t)),
          (this._timeout = null),
          this._setListeners();
      }
      var e = n.prototype;
      return (
        (e.show = function () {
          var n,
            o,
            e = this;
          t(this._element).trigger(O.SHOW),
            this._config.animation && this._element.classList.add(Gn),
            (n = function () {
              e._element.classList.remove(ot),
                e._element.classList.add(Z),
                t(e._element).trigger(O.SHOWN),
                e._config.autohide && e.hide();
            }),
            (this._element.classList.remove(st),
            this._element.classList.add(ot),
            this._config.animation)
              ? ((o = s.getTransitionDurationFromElement(this._element)),
                t(this._element)
                  .one(s.TRANSITION_END, n)
                  .emulateTransitionEnd(o))
              : n();
        }),
        (e.hide = function (e) {
          var n = this;
          this._element.classList.contains(Z) &&
            (t(this._element).trigger(O.HIDE),
            e
              ? this._close()
              : (this._timeout = setTimeout(function () {
                  n._close();
                }, this._config.delay)));
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains(Z) &&
              this._element.classList.remove(Z),
            t(this._element).off(O.CLICK_DISMISS),
            t.removeData(this._element, de),
            (this._element = null),
            (this._config = null);
        }),
        (e._getConfig = function (e) {
          return (
            (e = i(
              {},
              it,
              t(this._element).data(),
              "object" == typeof e && e ? e : {}
            )),
            s.typeCheckConfig(k, e, this.constructor.DefaultType),
            e
          );
        }),
        (e._setListeners = function () {
          var e = this;
          t(this._element).on(O.CLICK_DISMISS, ts, function () {
            return e.hide(!0);
          });
        }),
        (e._close = function () {
          var o,
            e = this,
            n = function () {
              e._element.classList.add(st), t(e._element).trigger(O.HIDDEN);
            };
          this._element.classList.remove(Z),
            this._config.animation
              ? ((o = s.getTransitionDurationFromElement(this._element)),
                t(this._element)
                  .one(s.TRANSITION_END, n)
                  .emulateTransitionEnd(o))
              : n();
        }),
        (n._jQueryInterface = function (e) {
          return this.each(function () {
            var o = t(this),
              s = o.data(de);
            if (
              (s ||
                ((s = new n(this, "object" == typeof e && e)), o.data(de, s)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof s[e])
                throw new TypeError('No method named "' + e + '"');
              s[e](this);
            }
          });
        }),
        h(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Jn;
            },
          },
          {
            key: "Default",
            get: function () {
              return it;
            },
          },
        ]),
        n
      );
    })();
  (t.fn[k] = ce._jQueryInterface),
    (t.fn[k].Constructor = ce),
    (t.fn[k].noConflict = function () {
      return (t.fn[k] = qn), ce._jQueryInterface;
    }),
    (function () {
      if ("undefined" == typeof t)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var e = t.fn.jquery.split(" ")[0].split(".");
      if (
        (e[0] < 2 && e[1] < 9) ||
        (1 === e[0] && 9 === e[1] && e[2] < 1) ||
        4 <= e[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(),
    (e.Util = s),
    (e.Alert = C),
    (e.Button = N),
    (e.Carousel = E),
    (e.Collapse = V),
    (e.Dropdown = p),
    (e.Modal = R),
    (e.Popover = fe),
    (e.Scrollspy = G),
    (e.Tab = H),
    (e.Toast = ce),
    (e.Tooltip = g),
    Object.defineProperty(e, "__esModule", { value: !0 });
}),
  (function (e) {
    var t,
      n,
      s,
      i,
      a,
      r,
      l,
      u,
      h,
      g = e(".navbar"),
      o = g.innerHeight();
    function d(t) {
      (t =
        typeof t == "undefined" || typeof t == "object"
          ? window.location.hash
          : t),
        (t = t.replace(/:/g, "\\:")),
        e(t).length &&
          (e("body").addClass("scrolling"),
          e("html, body").animate(
            { scrollTop: e(t).offset().top - o },
            600,
            function () {
              e("body").removeClass("scrolling");
            }
          ));
    }
    function p() {
      var t = e("body"),
        n = t.data("bs.scrollspy");
      n &&
        ((n._config.offset = o),
        t.data("bs.scrollspy", n),
        t.scrollspy("refresh"));
    }
    function y() {
      if (window.history.pushState) {
        var e =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          window.location.hash;
        window.history.pushState({ path: e }, "", e);
      }
    }
    l = document.getElementsByClassName("collapsible");
    for (t = 0; t < l.length; t++)
      l[t].addEventListener("click", function () {
        this.classList.toggle("active");
        var e = this.nextElementSibling;
        e.style.maxHeight
          ? (e.style.maxHeight = null)
          : (e.style.maxHeight = e.scrollHeight + "px");
      });
    r = document.getElementsByClassName("ollapse");
    for (t = 0; t < r.length; t++)
      r[t].addEventListener("click", function () {
        this.classList.toggle("active");
        var e = this.nextElementSibling;
        e.style.maxHeight
          ? (e.style.maxHeight = null)
          : (e.style.maxHeight = e.scrollHeight + "px");
      });
    window.addEventListener("hashchange", d),
      (h = e("html, body")),
      e("nav a, .page-scroll").on("click", function () {
        if (
          location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname
        ) {
          var t = e(this.hash),
            t = t.length ? t : e('[name="' + this.hash.slice(1) + '"]');
          if (t.length)
            return (
              h.animate(
                { scrollTop: t.offset().top - o },
                1500,
                "easeInOutExpo"
              ),
              !1
            );
        }
      }),
      jQuery.extend(jQuery.easing, {
        easeInOutExpo: function (e, t, n, s, o) {
          return t === 0
            ? n
            : t === o
            ? n + s
            : (t /= o / 2) < 1
            ? (s / 2) * Math.pow(2, 10 * (t - 1)) + n
            : (s / 2) * (-Math.pow(2, -10 * --t) + 2) + n;
        },
      }),
      e(document).on("click", ".navbar-collapse.show", function (t) {
        var n = e(t.target).is("a") ? e(t.target) : e(t.target).parent();
        n.is("a") &&
          n.attr("class") != "dropdown-toggle" &&
          e(this).collapse("hide");
      }),
      (s = {}),
      (n = e("#container-publications")),
      n.isotope({
        itemSelector: ".isotope-item",
        percentPosition: !0,
        masonry: { columnWidth: ".grid-sizer" },
        filter: function () {
          var t = e(this),
            n = !a || t.text().match(a),
            s = !i || t.is(i);
          return n && s;
        },
      }),
      (u = e(".filter-search").keyup(
        f(function () {
          (a = new RegExp(u.val(), "gi")), n.isotope();
        })
      ));
    function f(e, t) {
      var n;
      return (
        (t = t || 100),
        function () {
          clearTimeout(n);
          var o = arguments,
            i = this;
          function a() {
            e.apply(i, o);
          }
          n = setTimeout(a, t);
        }
      );
    }
    function m(e) {
      var n,
        t = "";
      for (n in e) t += e[n];
      return t;
    }
    e(".pub-filters").on("change", function () {
      var t,
        a = e(this),
        o = a[0].getAttribute("data-filter-group");
      (s[o] = this.value),
        (i = m(s)),
        n.isotope(),
        o == "pubtype" &&
          ((t = e(this).val()),
          t.substr(0, 9) == ".pubtype-"
            ? (window.location.hash = t.substr(9))
            : (window.location.hash = ""));
    });
    function v() {
      var a,
        t = window.location.hash.replace("#", ""),
        o = "*";
      t != "" && !isNaN(t) && (o = ".pubtype-" + t),
        (a = "pubtype"),
        (s[a] = o),
        (i = m(s)),
        n.isotope(),
        e(".pubtype-select").val(o);
    }
    function b() {
      if (e("#map").length) {
        var s,
          c,
          l,
          a = e("#map-provider").val(),
          t = e("#map-lat").val(),
          n = e("#map-lng").val(),
          o = parseInt(e("#map-zoom").val()),
          i = e("#map-dir").val(),
          r = e("#map-api-key").val();
        a == 1
          ? ((s = new GMaps({
              div: "#map",
              lat: t,
              lng: n,
              zoom: o,
              zoomControl: !0,
              zoomControlOpt: { style: "SMALL", position: "TOP_LEFT" },
              panControl: !1,
              streetViewControl: !1,
              mapTypeControl: !1,
              overviewMapControl: !1,
              scrollwheel: !0,
              draggable: !0,
            })),
            s.addMarker({
              lat: t,
              lng: n,
              click: function () {
                var s =
                  "https://www.google.com/maps/place/" +
                  encodeURIComponent(i) +
                  "/@" +
                  t +
                  "," +
                  n +
                  "/";
                window.open(s, "_blank");
              },
              title: i,
            }))
          : ((s = new L.map("map").setView([t, n], o)),
            a == 3 && r.length
              ? L.tileLayer(
                  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
                  {
                    attribution:
                      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                    maxZoom: 18,
                    id: "mapbox.streets",
                    accessToken: r,
                  }
                ).addTo(s)
              : L.tileLayer(
                  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                  {
                    maxZoom: 19,
                    attribution:
                      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                  }
                ).addTo(s),
            (c = L.marker([t, n]).addTo(s)),
            (l = t + "," + n + "#map=" + o + "/" + t + "/" + n + "&layers=N"),
            c.bindPopup(
              i +
                '<p><a href="https://www.openstreetmap.org/directions?engine=osrm_car&route=' +
                l +
                '">Routing via OpenStreetMap</a></p>'
            ));
      }
    }
    function j(t, n) {
      e.getJSON("https://api.github.com/repos/" + n + "/tags")
        .done(function (n) {
          var s = n[0];
          e(t).append(" " + s.name);
        })
        .fail(function (e, t, n) {
          var s = t + ", " + n;
          console.log("Request Failed: " + s);
        });
    }
    function c() {
      e("body").hasClass("searching")
        ? (e("[id=search-query]").blur(),
          e("body").removeClass("searching"),
          y())
        : (e("body").addClass("searching"),
          e(".search-results")
            .css({ opacity: 0, visibility: "visible" })
            .animate({ opacity: 1 }, 200),
          e("#search-query").focus());
    }
    function _(t, n, s, o) {
      e("body").hasClass("dark")
        ? (e("body")
            .css({ opacity: 0, visibility: "visible" })
            .animate({ opacity: 1 }, 500),
          e("body").removeClass("dark"),
          t && ((n.disabled = !1), (s.disabled = !0)),
          e(".js-dark-toggle i").removeClass("fa-sun").addClass("fa-moon"),
          localStorage.setItem("dark_mode", "0"),
          o && location.reload())
        : (e("body")
            .css({ opacity: 0, visibility: "visible" })
            .animate({ opacity: 1 }, 500),
          e("body").addClass("dark"),
          t && ((n.disabled = !0), (s.disabled = !1)),
          e(".js-dark-toggle i").removeClass("fa-moon").addClass("fa-sun"),
          localStorage.setItem("dark_mode", "1"),
          o && location.reload());
    }
    function w() {
      e(".carousel").each(function () {
        var n,
          t = e(".carousel-item", this);
        t.css("min-height", 0),
          (n = Math.max.apply(
            null,
            t
              .map(function () {
                return e(this).outerHeight();
              })
              .get()
          )),
          t.css("min-height", n + "px");
      });
    }
    e(document).ready(function () {
      e("#TableOfContents > ul > li > ul").unwrap().unwrap(),
        e("#TableOfContents").addClass("nav flex-column"),
        e("#TableOfContents li").addClass("nav-item"),
        e("#TableOfContents li a").addClass("nav-link");
      var a,
        i = 0;
      e("body").hasClass("dark") && (i = 1),
        (a = parseInt(localStorage.getItem("dark_mode") || i));
      const t = e("link[title=hl-light]").length > 0,
        n = e("link[title=hl-light]")[0],
        s = e("link[title=hl-dark]")[0],
        o = e("script[title=mermaid]").length > 0;
      a
        ? (e("body").addClass("dark"),
          t && ((n.disabled = !0), (s.disabled = !1)),
          o && mermaid.initialize({ theme: "dark" }),
          e(".js-dark-toggle i").removeClass("fa-moon").addClass("fa-sun"))
        : (e("body").removeClass("dark"),
          t && ((n.disabled = !1), (s.disabled = !0)),
          o && mermaid.initialize({ theme: "default" }),
          e(".js-dark-toggle i").removeClass("fa-sun").addClass("fa-moon")),
        e(".js-dark-toggle").click(function (e) {
          e.preventDefault(), _(t, n, s, o);
        });
    }),
      e(window).on("load", function () {
        window.location.hash &&
          (window.location.hash == "#top"
            ? (window.location.hash = "")
            : e(".projects-container").length || d());
        var t,
          n,
          s = e("body");
        s.scrollspy({ offset: o }),
          e(window).resize(function () {
            clearTimeout(n), (n = setTimeout(p, 200));
          }),
          e(".projects-container").each(function (t, n) {
            var i,
              s = e(n),
              o = s.closest("section");
            o.find(".isotope").hasClass("js-layout-row")
              ? (i = "fitRows")
              : (i = "masonry"),
              s.imagesLoaded(function () {
                s.isotope({
                  itemSelector: ".isotope-item",
                  layoutMode: i,
                  masonry: { gutter: 20 },
                  filter: o.find(".default-project-filter").text(),
                }),
                  o.find(".project-filters a").click(function () {
                    var t = e(this).attr("data-filter");
                    return (
                      s.isotope({ filter: t }),
                      e(this)
                        .removeClass("active")
                        .addClass("active")
                        .siblings()
                        .removeClass("active all"),
                      !1
                    );
                  }),
                  window.location.hash && d();
              });
          }),
          e(".pub-filters-select") && v(),
          e(".js-cite-modal").click(function (t) {
            t.preventDefault();
            var n = e(this).attr("data-filename"),
              s = e("#modal");
            s.find(".modal-body code").load(n, function (t, s, o) {
              if (s == "error") {
                var i = "Error: ";
                e("#modal-error").html(i + o.status + " " + o.statusText);
              } else e(".js-download-cite").attr("href", n);
            }),
              s.modal("show");
          }),
          e(".js-copy-cite").click(function (e) {
            e.preventDefault();
            var t = document.createRange(),
              n = document.querySelector("#modal .modal-body");
            t.selectNode(n), window.getSelection().addRange(t);
            try {
              document.execCommand("copy");
            } catch {
              console.log("Error: citation copy failed.");
            }
            window.getSelection().removeRange(t);
          }),
          b(),
          (t = ".js-github-release"),
          e(t).length > 0 && j(t, e(t).data("repo")),
          e(".js-search").click(function (e) {
            e.preventDefault(), c();
          }),
          e(document).on("keydown", function (t) {
            t.which == 27
              ? e("body").hasClass("searching") && c()
              : t.which == 191 &&
                t.shiftKey == !1 &&
                !e("input,textarea").is(":focus") &&
                (t.preventDefault(), c());
          });
      }),
      e(window).on("load resize orientationchange", w);
  })(jQuery);
let fuseOptions = {
    shouldSort: !0,
    includeMatches: !0,
    tokenize: !0,
    threshold: 0,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: [
      { name: "title", weight: 0.99 },
      { name: "summary", weight: 0.6 },
      { name: "authors", weight: 0.5 },
      { name: "content", weight: 0.2 },
      { name: "tags", weight: 0.5 },
      { name: "categories", weight: 0.5 },
    ],
  },
  summaryLength = 60;
function getSearchQuery(e) {
  return decodeURIComponent(
    (location.search.split(e + "=")[1] || "").split("&")[0]
  ).replace(/\+/g, " ");
}
function updateURL(e) {
  history.pushState && window.history.pushState({ path: e }, "", e);
}
function initSearch(e, t) {
  let n = $("#search-query").val();
  if (
    (n.length < 1 && $("#search-hits").empty(),
    !e && n.length < fuseOptions.minMatchCharLength)
  )
    return;
  $("#search-hits").empty(), searchacademia(n, t);
  let s =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    "?q=" +
    encodeURIComponent(n) +
    window.location.hash;
  updateURL(s);
}
function searchacademia(e, t) {
  let n = t.search(e);
  n.length > 0
    ? ($("#search-hits").append(
        '<h3 class="mt-0">' + n.length + " " + i18n.results + "</h3>"
      ),
      parseResults(e, n))
    : $("#search-hits").append(
        '<div class="search-no-results">' + i18n.no_results + "</div>"
      );
}
function parseResults(e, t) {
  $.each(t, function (t, n) {
    let s = n.item.content,
      o = "",
      a = [];
    fuseOptions.tokenize
      ? a.push(e)
      : $.each(n.matches, function (e, t) {
          if (t.key == "content") {
            let e =
                t.indices[0][0] - summaryLength > 0
                  ? t.indices[0][0] - summaryLength
                  : 0,
              n =
                t.indices[0][1] + summaryLength < s.length
                  ? t.indices[0][1] + summaryLength
                  : s.length;
            (o += s.substring(e, n)),
              a.push(
                t.value.substring(
                  t.indices[0][0],
                  t.indices[0][1] - t.indices[0][0] + 1
                )
              );
          }
        }),
      o.length < 1 && (o += s.substring(0, summaryLength * 2));
    var r = $("#search-hit-fuse-template").html();
    let i = n.item.section;
    i in content_type && (i = content_type[i]);
    let c = {
        key: t,
        title: n.item.title,
        type: i,
        relpermalink: n.item.relpermalink,
        snippet: o,
      },
      l = render(r, c);
    $("#search-hits").append(l),
      $.each(a, function (e, n) {
        $("#summary-" + t).mark(n);
      });
  });
}
function render(e, t) {
  let n, s, o;
  for (n in t)
    (s = "\\{\\{\\s*" + n + "\\s*\\}\\}"),
      (o = new RegExp(s, "g")),
      (e = e.replace(o, t[n]));
  return e;
}
typeof Fuse == "function" &&
  $.getJSON(search_index_filename, function (e) {
    let t = new Fuse(e, fuseOptions);
    (query = getSearchQuery("q")) &&
      ($("body").addClass("searching"),
      $(".search-results")
        .css({ opacity: 0, visibility: "visible" })
        .animate({ opacity: 1 }, 200),
      $("#search-query").val(query),
      $("#search-query").focus(),
      initSearch(!0, t)),
      $("#search-query").keyup(function (e) {
        clearTimeout($.data(this, "searchTimer")),
          e.keyCode == 13
            ? initSearch(!0, t)
            : $(this).data(
                "searchTimer",
                setTimeout(function () {
                  initSearch(!1, t);
                }, 250)
              );
      });
  });
