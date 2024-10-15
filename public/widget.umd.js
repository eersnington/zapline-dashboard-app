(function (qo) {
  typeof define == "function" && define.amd ? define(qo) : qo();
})(function () {
  "use strict";
  function qo(e, r) {
    for (var n = 0; n < r.length; n++) {
      const o = r[n];
      if (typeof o != "string" && !Array.isArray(o)) {
        for (const s in o)
          if (s !== "default" && !(s in e)) {
            const l = Object.getOwnPropertyDescriptor(o, s);
            l &&
              Object.defineProperty(
                e,
                s,
                l.get ? l : { enumerable: !0, get: () => o[s] },
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
    );
  }
  function cf(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var uf = { exports: {} },
    Rn = {},
    xa = { exports: {} },
    yA = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ff;
  function G0() {
    if (ff) return yA;
    ff = 1;
    var e = Symbol.for("react.element"),
      r = Symbol.for("react.portal"),
      n = Symbol.for("react.fragment"),
      o = Symbol.for("react.strict_mode"),
      s = Symbol.for("react.profiler"),
      l = Symbol.for("react.provider"),
      u = Symbol.for("react.context"),
      f = Symbol.for("react.forward_ref"),
      B = Symbol.for("react.suspense"),
      g = Symbol.for("react.memo"),
      w = Symbol.for("react.lazy"),
      h = Symbol.iterator;
    function v(H) {
      return H === null || typeof H != "object"
        ? null
        : ((H = (h && H[h]) || H["@@iterator"]),
          typeof H == "function" ? H : null);
    }
    var U = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      Q = Object.assign,
      m = {};
    function F(H, M, uA) {
      (this.props = H),
        (this.context = M),
        (this.refs = m),
        (this.updater = uA || U);
    }
    (F.prototype.isReactComponent = {}),
      (F.prototype.setState = function (H, M) {
        if (typeof H != "object" && typeof H != "function" && H != null)
          throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
          );
        this.updater.enqueueSetState(this, H, M, "setState");
      }),
      (F.prototype.forceUpdate = function (H) {
        this.updater.enqueueForceUpdate(this, H, "forceUpdate");
      });
    function E() {}
    E.prototype = F.prototype;
    function I(H, M, uA) {
      (this.props = H),
        (this.context = M),
        (this.refs = m),
        (this.updater = uA || U);
    }
    var R = (I.prototype = new E());
    (R.constructor = I), Q(R, F.prototype), (R.isPureReactComponent = !0);
    var T = Array.isArray,
      k = Object.prototype.hasOwnProperty,
      O = { current: null },
      P = { key: !0, ref: !0, __self: !0, __source: !0 };
    function j(H, M, uA) {
      var fA,
        wA = {},
        hA = null,
        $ = null;
      if (M != null)
        for (fA in (M.ref !== void 0 && ($ = M.ref),
        M.key !== void 0 && (hA = "" + M.key),
        M))
          k.call(M, fA) && !P.hasOwnProperty(fA) && (wA[fA] = M[fA]);
      var BA = arguments.length - 2;
      if (BA === 1) wA.children = uA;
      else if (1 < BA) {
        for (var CA = Array(BA), QA = 0; QA < BA; QA++)
          CA[QA] = arguments[QA + 2];
        wA.children = CA;
      }
      if (H && H.defaultProps)
        for (fA in ((BA = H.defaultProps), BA))
          wA[fA] === void 0 && (wA[fA] = BA[fA]);
      return {
        $$typeof: e,
        type: H,
        key: hA,
        ref: $,
        props: wA,
        _owner: O.current,
      };
    }
    function X(H, M) {
      return {
        $$typeof: e,
        type: H.type,
        key: M,
        ref: H.ref,
        props: H.props,
        _owner: H._owner,
      };
    }
    function sA(H) {
      return typeof H == "object" && H !== null && H.$$typeof === e;
    }
    function dA(H) {
      var M = { "=": "=0", ":": "=2" };
      return (
        "$" +
        H.replace(/[=:]/g, function (uA) {
          return M[uA];
        })
      );
    }
    var q = /\/+/g;
    function tA(H, M) {
      return typeof H == "object" && H !== null && H.key != null
        ? dA("" + H.key)
        : M.toString(36);
    }
    function oA(H, M, uA, fA, wA) {
      var hA = typeof H;
      (hA === "undefined" || hA === "boolean") && (H = null);
      var $ = !1;
      if (H === null) $ = !0;
      else
        switch (hA) {
          case "string":
          case "number":
            $ = !0;
            break;
          case "object":
            switch (H.$$typeof) {
              case e:
              case r:
                $ = !0;
            }
        }
      if ($)
        return (
          ($ = H),
          (wA = wA($)),
          (H = fA === "" ? "." + tA($, 0) : fA),
          T(wA)
            ? ((uA = ""),
              H != null && (uA = H.replace(q, "$&/") + "/"),
              oA(wA, M, uA, "", function (QA) {
                return QA;
              }))
            : wA != null &&
              (sA(wA) &&
                (wA = X(
                  wA,
                  uA +
                    (!wA.key || ($ && $.key === wA.key)
                      ? ""
                      : ("" + wA.key).replace(q, "$&/") + "/") +
                    H,
                )),
              M.push(wA)),
          1
        );
      if ((($ = 0), (fA = fA === "" ? "." : fA + ":"), T(H)))
        for (var BA = 0; BA < H.length; BA++) {
          hA = H[BA];
          var CA = fA + tA(hA, BA);
          $ += oA(hA, M, uA, CA, wA);
        }
      else if (((CA = v(H)), typeof CA == "function"))
        for (H = CA.call(H), BA = 0; !(hA = H.next()).done; )
          (hA = hA.value),
            (CA = fA + tA(hA, BA++)),
            ($ += oA(hA, M, uA, CA, wA));
      else if (hA === "object")
        throw (
          ((M = String(H)),
          Error(
            "Objects are not valid as a React child (found: " +
              (M === "[object Object]"
                ? "object with keys {" + Object.keys(H).join(", ") + "}"
                : M) +
              "). If you meant to render a collection of children, use an array instead.",
          ))
        );
      return $;
    }
    function J(H, M, uA) {
      if (H == null) return H;
      var fA = [],
        wA = 0;
      return (
        oA(H, fA, "", "", function (hA) {
          return M.call(uA, hA, wA++);
        }),
        fA
      );
    }
    function AA(H) {
      if (H._status === -1) {
        var M = H._result;
        (M = M()),
          M.then(
            function (uA) {
              (H._status === 0 || H._status === -1) &&
                ((H._status = 1), (H._result = uA));
            },
            function (uA) {
              (H._status === 0 || H._status === -1) &&
                ((H._status = 2), (H._result = uA));
            },
          ),
          H._status === -1 && ((H._status = 0), (H._result = M));
      }
      if (H._status === 1) return H._result.default;
      throw H._result;
    }
    var Y = { current: null },
      N = { transition: null },
      G = {
        ReactCurrentDispatcher: Y,
        ReactCurrentBatchConfig: N,
        ReactCurrentOwner: O,
      };
    function Z() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return (
      (yA.Children = {
        map: J,
        forEach: function (H, M, uA) {
          J(
            H,
            function () {
              M.apply(this, arguments);
            },
            uA,
          );
        },
        count: function (H) {
          var M = 0;
          return (
            J(H, function () {
              M++;
            }),
            M
          );
        },
        toArray: function (H) {
          return (
            J(H, function (M) {
              return M;
            }) || []
          );
        },
        only: function (H) {
          if (!sA(H))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return H;
        },
      }),
      (yA.Component = F),
      (yA.Fragment = n),
      (yA.Profiler = s),
      (yA.PureComponent = I),
      (yA.StrictMode = o),
      (yA.Suspense = B),
      (yA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
      (yA.act = Z),
      (yA.cloneElement = function (H, M, uA) {
        if (H == null)
          throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              H +
              ".",
          );
        var fA = Q({}, H.props),
          wA = H.key,
          hA = H.ref,
          $ = H._owner;
        if (M != null) {
          if (
            (M.ref !== void 0 && ((hA = M.ref), ($ = O.current)),
            M.key !== void 0 && (wA = "" + M.key),
            H.type && H.type.defaultProps)
          )
            var BA = H.type.defaultProps;
          for (CA in M)
            k.call(M, CA) &&
              !P.hasOwnProperty(CA) &&
              (fA[CA] = M[CA] === void 0 && BA !== void 0 ? BA[CA] : M[CA]);
        }
        var CA = arguments.length - 2;
        if (CA === 1) fA.children = uA;
        else if (1 < CA) {
          BA = Array(CA);
          for (var QA = 0; QA < CA; QA++) BA[QA] = arguments[QA + 2];
          fA.children = BA;
        }
        return {
          $$typeof: e,
          type: H.type,
          key: wA,
          ref: hA,
          props: fA,
          _owner: $,
        };
      }),
      (yA.createContext = function (H) {
        return (
          (H = {
            $$typeof: u,
            _currentValue: H,
            _currentValue2: H,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }),
          (H.Provider = { $$typeof: l, _context: H }),
          (H.Consumer = H)
        );
      }),
      (yA.createElement = j),
      (yA.createFactory = function (H) {
        var M = j.bind(null, H);
        return (M.type = H), M;
      }),
      (yA.createRef = function () {
        return { current: null };
      }),
      (yA.forwardRef = function (H) {
        return { $$typeof: f, render: H };
      }),
      (yA.isValidElement = sA),
      (yA.lazy = function (H) {
        return {
          $$typeof: w,
          _payload: { _status: -1, _result: H },
          _init: AA,
        };
      }),
      (yA.memo = function (H, M) {
        return { $$typeof: g, type: H, compare: M === void 0 ? null : M };
      }),
      (yA.startTransition = function (H) {
        var M = N.transition;
        N.transition = {};
        try {
          H();
        } finally {
          N.transition = M;
        }
      }),
      (yA.unstable_act = Z),
      (yA.useCallback = function (H, M) {
        return Y.current.useCallback(H, M);
      }),
      (yA.useContext = function (H) {
        return Y.current.useContext(H);
      }),
      (yA.useDebugValue = function () {}),
      (yA.useDeferredValue = function (H) {
        return Y.current.useDeferredValue(H);
      }),
      (yA.useEffect = function (H, M) {
        return Y.current.useEffect(H, M);
      }),
      (yA.useId = function () {
        return Y.current.useId();
      }),
      (yA.useImperativeHandle = function (H, M, uA) {
        return Y.current.useImperativeHandle(H, M, uA);
      }),
      (yA.useInsertionEffect = function (H, M) {
        return Y.current.useInsertionEffect(H, M);
      }),
      (yA.useLayoutEffect = function (H, M) {
        return Y.current.useLayoutEffect(H, M);
      }),
      (yA.useMemo = function (H, M) {
        return Y.current.useMemo(H, M);
      }),
      (yA.useReducer = function (H, M, uA) {
        return Y.current.useReducer(H, M, uA);
      }),
      (yA.useRef = function (H) {
        return Y.current.useRef(H);
      }),
      (yA.useState = function (H) {
        return Y.current.useState(H);
      }),
      (yA.useSyncExternalStore = function (H, M, uA) {
        return Y.current.useSyncExternalStore(H, M, uA);
      }),
      (yA.useTransition = function () {
        return Y.current.useTransition();
      }),
      (yA.version = "18.3.1"),
      yA
    );
  }
  var df;
  function Ia() {
    return df || ((df = 1), (xa.exports = G0())), xa.exports;
  }
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Bf;
  function W0() {
    if (Bf) return Rn;
    Bf = 1;
    var e = Ia(),
      r = Symbol.for("react.element"),
      n = Symbol.for("react.fragment"),
      o = Object.prototype.hasOwnProperty,
      s =
        e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      l = { key: !0, ref: !0, __self: !0, __source: !0 };
    function u(f, B, g) {
      var w,
        h = {},
        v = null,
        U = null;
      g !== void 0 && (v = "" + g),
        B.key !== void 0 && (v = "" + B.key),
        B.ref !== void 0 && (U = B.ref);
      for (w in B) o.call(B, w) && !l.hasOwnProperty(w) && (h[w] = B[w]);
      if (f && f.defaultProps)
        for (w in ((B = f.defaultProps), B)) h[w] === void 0 && (h[w] = B[w]);
      return {
        $$typeof: r,
        type: f,
        key: v,
        ref: U,
        props: h,
        _owner: s.current,
      };
    }
    return (Rn.Fragment = n), (Rn.jsx = u), (Rn.jsxs = u), Rn;
  }
  uf.exports = W0();
  var b = uf.exports,
    Ha = {},
    gf = { exports: {} },
    me = {},
    Sa = { exports: {} },
    ba = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var pf;
  function j0() {
    return (
      pf ||
        ((pf = 1),
        (function (e) {
          function r(N, G) {
            var Z = N.length;
            N.push(G);
            A: for (; 0 < Z; ) {
              var H = (Z - 1) >>> 1,
                M = N[H];
              if (0 < s(M, G)) (N[H] = G), (N[Z] = M), (Z = H);
              else break A;
            }
          }
          function n(N) {
            return N.length === 0 ? null : N[0];
          }
          function o(N) {
            if (N.length === 0) return null;
            var G = N[0],
              Z = N.pop();
            if (Z !== G) {
              N[0] = Z;
              A: for (var H = 0, M = N.length, uA = M >>> 1; H < uA; ) {
                var fA = 2 * (H + 1) - 1,
                  wA = N[fA],
                  hA = fA + 1,
                  $ = N[hA];
                if (0 > s(wA, Z))
                  hA < M && 0 > s($, wA)
                    ? ((N[H] = $), (N[hA] = Z), (H = hA))
                    : ((N[H] = wA), (N[fA] = Z), (H = fA));
                else if (hA < M && 0 > s($, Z))
                  (N[H] = $), (N[hA] = Z), (H = hA);
                else break A;
              }
            }
            return G;
          }
          function s(N, G) {
            var Z = N.sortIndex - G.sortIndex;
            return Z !== 0 ? Z : N.id - G.id;
          }
          if (
            typeof performance == "object" &&
            typeof performance.now == "function"
          ) {
            var l = performance;
            e.unstable_now = function () {
              return l.now();
            };
          } else {
            var u = Date,
              f = u.now();
            e.unstable_now = function () {
              return u.now() - f;
            };
          }
          var B = [],
            g = [],
            w = 1,
            h = null,
            v = 3,
            U = !1,
            Q = !1,
            m = !1,
            F = typeof setTimeout == "function" ? setTimeout : null,
            E = typeof clearTimeout == "function" ? clearTimeout : null,
            I = typeof setImmediate < "u" ? setImmediate : null;
          typeof navigator < "u" &&
            navigator.scheduling !== void 0 &&
            navigator.scheduling.isInputPending !== void 0 &&
            navigator.scheduling.isInputPending.bind(navigator.scheduling);
          function R(N) {
            for (var G = n(g); G !== null; ) {
              if (G.callback === null) o(g);
              else if (G.startTime <= N)
                o(g), (G.sortIndex = G.expirationTime), r(B, G);
              else break;
              G = n(g);
            }
          }
          function T(N) {
            if (((m = !1), R(N), !Q))
              if (n(B) !== null) (Q = !0), AA(k);
              else {
                var G = n(g);
                G !== null && Y(T, G.startTime - N);
              }
          }
          function k(N, G) {
            (Q = !1), m && ((m = !1), E(j), (j = -1)), (U = !0);
            var Z = v;
            try {
              for (
                R(G), h = n(B);
                h !== null && (!(h.expirationTime > G) || (N && !dA()));

              ) {
                var H = h.callback;
                if (typeof H == "function") {
                  (h.callback = null), (v = h.priorityLevel);
                  var M = H(h.expirationTime <= G);
                  (G = e.unstable_now()),
                    typeof M == "function"
                      ? (h.callback = M)
                      : h === n(B) && o(B),
                    R(G);
                } else o(B);
                h = n(B);
              }
              if (h !== null) var uA = !0;
              else {
                var fA = n(g);
                fA !== null && Y(T, fA.startTime - G), (uA = !1);
              }
              return uA;
            } finally {
              (h = null), (v = Z), (U = !1);
            }
          }
          var O = !1,
            P = null,
            j = -1,
            X = 5,
            sA = -1;
          function dA() {
            return !(e.unstable_now() - sA < X);
          }
          function q() {
            if (P !== null) {
              var N = e.unstable_now();
              sA = N;
              var G = !0;
              try {
                G = P(!0, N);
              } finally {
                G ? tA() : ((O = !1), (P = null));
              }
            } else O = !1;
          }
          var tA;
          if (typeof I == "function")
            tA = function () {
              I(q);
            };
          else if (typeof MessageChannel < "u") {
            var oA = new MessageChannel(),
              J = oA.port2;
            (oA.port1.onmessage = q),
              (tA = function () {
                J.postMessage(null);
              });
          } else
            tA = function () {
              F(q, 0);
            };
          function AA(N) {
            (P = N), O || ((O = !0), tA());
          }
          function Y(N, G) {
            j = F(function () {
              N(e.unstable_now());
            }, G);
          }
          (e.unstable_IdlePriority = 5),
            (e.unstable_ImmediatePriority = 1),
            (e.unstable_LowPriority = 4),
            (e.unstable_NormalPriority = 3),
            (e.unstable_Profiling = null),
            (e.unstable_UserBlockingPriority = 2),
            (e.unstable_cancelCallback = function (N) {
              N.callback = null;
            }),
            (e.unstable_continueExecution = function () {
              Q || U || ((Q = !0), AA(k));
            }),
            (e.unstable_forceFrameRate = function (N) {
              0 > N || 125 < N
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                  )
                : (X = 0 < N ? Math.floor(1e3 / N) : 5);
            }),
            (e.unstable_getCurrentPriorityLevel = function () {
              return v;
            }),
            (e.unstable_getFirstCallbackNode = function () {
              return n(B);
            }),
            (e.unstable_next = function (N) {
              switch (v) {
                case 1:
                case 2:
                case 3:
                  var G = 3;
                  break;
                default:
                  G = v;
              }
              var Z = v;
              v = G;
              try {
                return N();
              } finally {
                v = Z;
              }
            }),
            (e.unstable_pauseExecution = function () {}),
            (e.unstable_requestPaint = function () {}),
            (e.unstable_runWithPriority = function (N, G) {
              switch (N) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  N = 3;
              }
              var Z = v;
              v = N;
              try {
                return G();
              } finally {
                v = Z;
              }
            }),
            (e.unstable_scheduleCallback = function (N, G, Z) {
              var H = e.unstable_now();
              switch (
                (typeof Z == "object" && Z !== null
                  ? ((Z = Z.delay),
                    (Z = typeof Z == "number" && 0 < Z ? H + Z : H))
                  : (Z = H),
                N)
              ) {
                case 1:
                  var M = -1;
                  break;
                case 2:
                  M = 250;
                  break;
                case 5:
                  M = 1073741823;
                  break;
                case 4:
                  M = 1e4;
                  break;
                default:
                  M = 5e3;
              }
              return (
                (M = Z + M),
                (N = {
                  id: w++,
                  callback: G,
                  priorityLevel: N,
                  startTime: Z,
                  expirationTime: M,
                  sortIndex: -1,
                }),
                Z > H
                  ? ((N.sortIndex = Z),
                    r(g, N),
                    n(B) === null &&
                      N === n(g) &&
                      (m ? (E(j), (j = -1)) : (m = !0), Y(T, Z - H)))
                  : ((N.sortIndex = M), r(B, N), Q || U || ((Q = !0), AA(k))),
                N
              );
            }),
            (e.unstable_shouldYield = dA),
            (e.unstable_wrapCallback = function (N) {
              var G = v;
              return function () {
                var Z = v;
                v = G;
                try {
                  return N.apply(this, arguments);
                } finally {
                  v = Z;
                }
              };
            });
        })(ba)),
      ba
    );
  }
  var wf;
  function X0() {
    return wf || ((wf = 1), (Sa.exports = j0())), Sa.exports;
  }
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var hf;
  function z0() {
    if (hf) return me;
    hf = 1;
    var e = Ia(),
      r = X0();
    function n(A) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + A,
          i = 1;
        i < arguments.length;
        i++
      )
        t += "&args[]=" + encodeURIComponent(arguments[i]);
      return (
        "Minified React error #" +
        A +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var o = new Set(),
      s = {};
    function l(A, t) {
      u(A, t), u(A + "Capture", t);
    }
    function u(A, t) {
      for (s[A] = t, A = 0; A < t.length; A++) o.add(t[A]);
    }
    var f = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      B = Object.prototype.hasOwnProperty,
      g =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      w = {},
      h = {};
    function v(A) {
      return B.call(h, A)
        ? !0
        : B.call(w, A)
          ? !1
          : g.test(A)
            ? (h[A] = !0)
            : ((w[A] = !0), !1);
    }
    function U(A, t, i, a) {
      if (i !== null && i.type === 0) return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return a
            ? !1
            : i !== null
              ? !i.acceptsBooleans
              : ((A = A.toLowerCase().slice(0, 5)),
                A !== "data-" && A !== "aria-");
        default:
          return !1;
      }
    }
    function Q(A, t, i, a) {
      if (t === null || typeof t > "u" || U(A, t, i, a)) return !0;
      if (a) return !1;
      if (i !== null)
        switch (i.type) {
          case 3:
            return !t;
          case 4:
            return t === !1;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function m(A, t, i, a, c, d, p) {
      (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = a),
        (this.attributeNamespace = c),
        (this.mustUseProperty = i),
        (this.propertyName = A),
        (this.type = t),
        (this.sanitizeURL = d),
        (this.removeEmptyString = p);
    }
    var F = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (A) {
        F[A] = new m(A, 0, !1, A, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (A) {
        var t = A[0];
        F[t] = new m(t, 1, !1, A[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(
        function (A) {
          F[A] = new m(A, 2, !1, A.toLowerCase(), null, !1, !1);
        },
      ),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (A) {
        F[A] = new m(A, 2, !1, A, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (A) {
          F[A] = new m(A, 3, !1, A.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (A) {
        F[A] = new m(A, 3, !0, A, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (A) {
        F[A] = new m(A, 4, !1, A, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (A) {
        F[A] = new m(A, 6, !1, A, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (A) {
        F[A] = new m(A, 5, !1, A.toLowerCase(), null, !1, !1);
      });
    var E = /[\-:]([a-z])/g;
    function I(A) {
      return A[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (A) {
        var t = A.replace(E, I);
        F[t] = new m(t, 1, !1, A, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (A) {
          var t = A.replace(E, I);
          F[t] = new m(t, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (A) {
        var t = A.replace(E, I);
        F[t] = new m(
          t,
          1,
          !1,
          A,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1,
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (A) {
        F[A] = new m(A, 1, !1, A.toLowerCase(), null, !1, !1);
      }),
      (F.xlinkHref = new m(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1,
      )),
      ["src", "href", "action", "formAction"].forEach(function (A) {
        F[A] = new m(A, 1, !1, A.toLowerCase(), null, !0, !0);
      });
    function R(A, t, i, a) {
      var c = F.hasOwnProperty(t) ? F[t] : null;
      (c !== null
        ? c.type !== 0
        : a ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (Q(t, i, c, a) && (i = null),
        a || c === null
          ? v(t) &&
            (i === null ? A.removeAttribute(t) : A.setAttribute(t, "" + i))
          : c.mustUseProperty
            ? (A[c.propertyName] = i === null ? (c.type === 3 ? !1 : "") : i)
            : ((t = c.attributeName),
              (a = c.attributeNamespace),
              i === null
                ? A.removeAttribute(t)
                : ((c = c.type),
                  (i = c === 3 || (c === 4 && i === !0) ? "" : "" + i),
                  a ? A.setAttributeNS(a, t, i) : A.setAttribute(t, i))));
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      k = Symbol.for("react.element"),
      O = Symbol.for("react.portal"),
      P = Symbol.for("react.fragment"),
      j = Symbol.for("react.strict_mode"),
      X = Symbol.for("react.profiler"),
      sA = Symbol.for("react.provider"),
      dA = Symbol.for("react.context"),
      q = Symbol.for("react.forward_ref"),
      tA = Symbol.for("react.suspense"),
      oA = Symbol.for("react.suspense_list"),
      J = Symbol.for("react.memo"),
      AA = Symbol.for("react.lazy"),
      Y = Symbol.for("react.offscreen"),
      N = Symbol.iterator;
    function G(A) {
      return A === null || typeof A != "object"
        ? null
        : ((A = (N && A[N]) || A["@@iterator"]),
          typeof A == "function" ? A : null);
    }
    var Z = Object.assign,
      H;
    function M(A) {
      if (H === void 0)
        try {
          throw Error();
        } catch (i) {
          var t = i.stack.trim().match(/\n( *(at )?)/);
          H = (t && t[1]) || "";
        }
      return (
        `
` +
        H +
        A
      );
    }
    var uA = !1;
    function fA(A, t) {
      if (!A || uA) return "";
      uA = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (K) {
              var a = K;
            }
            Reflect.construct(A, [], t);
          } else {
            try {
              t.call();
            } catch (K) {
              a = K;
            }
            A.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (K) {
            a = K;
          }
          A();
        }
      } catch (K) {
        if (K && a && typeof K.stack == "string") {
          for (
            var c = K.stack.split(`
`),
              d = a.stack.split(`
`),
              p = c.length - 1,
              y = d.length - 1;
            1 <= p && 0 <= y && c[p] !== d[y];

          )
            y--;
          for (; 1 <= p && 0 <= y; p--, y--)
            if (c[p] !== d[y]) {
              if (p !== 1 || y !== 1)
                do
                  if ((p--, y--, 0 > y || c[p] !== d[y])) {
                    var x =
                      `
` + c[p].replace(" at new ", " at ");
                    return (
                      A.displayName &&
                        x.includes("<anonymous>") &&
                        (x = x.replace("<anonymous>", A.displayName)),
                      x
                    );
                  }
                while (1 <= p && 0 <= y);
              break;
            }
        }
      } finally {
        (uA = !1), (Error.prepareStackTrace = i);
      }
      return (A = A ? A.displayName || A.name : "") ? M(A) : "";
    }
    function wA(A) {
      switch (A.tag) {
        case 5:
          return M(A.type);
        case 16:
          return M("Lazy");
        case 13:
          return M("Suspense");
        case 19:
          return M("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (A = fA(A.type, !1)), A;
        case 11:
          return (A = fA(A.type.render, !1)), A;
        case 1:
          return (A = fA(A.type, !0)), A;
        default:
          return "";
      }
    }
    function hA(A) {
      if (A == null) return null;
      if (typeof A == "function") return A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case P:
          return "Fragment";
        case O:
          return "Portal";
        case X:
          return "Profiler";
        case j:
          return "StrictMode";
        case tA:
          return "Suspense";
        case oA:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case dA:
            return (A.displayName || "Context") + ".Consumer";
          case sA:
            return (A._context.displayName || "Context") + ".Provider";
          case q:
            var t = A.render;
            return (
              (A = A.displayName),
              A ||
                ((A = t.displayName || t.name || ""),
                (A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")),
              A
            );
          case J:
            return (
              (t = A.displayName || null), t !== null ? t : hA(A.type) || "Memo"
            );
          case AA:
            (t = A._payload), (A = A._init);
            try {
              return hA(A(t));
            } catch {}
        }
      return null;
    }
    function $(A) {
      var t = A.type;
      switch (A.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (A = t.render),
            (A = A.displayName || A.name || ""),
            t.displayName || (A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return hA(t);
        case 8:
          return t === j ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
      }
      return null;
    }
    function BA(A) {
      switch (typeof A) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return A;
        case "object":
          return A;
        default:
          return "";
      }
    }
    function CA(A) {
      var t = A.type;
      return (
        (A = A.nodeName) &&
        A.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
      );
    }
    function QA(A) {
      var t = CA(A) ? "checked" : "value",
        i = Object.getOwnPropertyDescriptor(A.constructor.prototype, t),
        a = "" + A[t];
      if (
        !A.hasOwnProperty(t) &&
        typeof i < "u" &&
        typeof i.get == "function" &&
        typeof i.set == "function"
      ) {
        var c = i.get,
          d = i.set;
        return (
          Object.defineProperty(A, t, {
            configurable: !0,
            get: function () {
              return c.call(this);
            },
            set: function (p) {
              (a = "" + p), d.call(this, p);
            },
          }),
          Object.defineProperty(A, t, { enumerable: i.enumerable }),
          {
            getValue: function () {
              return a;
            },
            setValue: function (p) {
              a = "" + p;
            },
            stopTracking: function () {
              (A._valueTracker = null), delete A[t];
            },
          }
        );
      }
    }
    function IA(A) {
      A._valueTracker || (A._valueTracker = QA(A));
    }
    function MA(A) {
      if (!A) return !1;
      var t = A._valueTracker;
      if (!t) return !0;
      var i = t.getValue(),
        a = "";
      return (
        A && (a = CA(A) ? (A.checked ? "true" : "false") : A.value),
        (A = a),
        A !== i ? (t.setValue(A), !0) : !1
      );
    }
    function se(A) {
      if (
        ((A = A || (typeof document < "u" ? document : void 0)), typeof A > "u")
      )
        return null;
      try {
        return A.activeElement || A.body;
      } catch {
        return A.body;
      }
    }
    function Je(A, t) {
      var i = t.checked;
      return Z({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? A._wrapperState.initialChecked,
      });
    }
    function cn(A, t) {
      var i = t.defaultValue == null ? "" : t.defaultValue,
        a = t.checked != null ? t.checked : t.defaultChecked;
      (i = BA(t.value != null ? t.value : i)),
        (A._wrapperState = {
          initialChecked: a,
          initialValue: i,
          controlled:
            t.type === "checkbox" || t.type === "radio"
              ? t.checked != null
              : t.value != null,
        });
    }
    function un(A, t) {
      (t = t.checked), t != null && R(A, "checked", t, !1);
    }
    function Fr(A, t) {
      un(A, t);
      var i = BA(t.value),
        a = t.type;
      if (i != null)
        a === "number"
          ? ((i === 0 && A.value === "") || A.value != i) && (A.value = "" + i)
          : A.value !== "" + i && (A.value = "" + i);
      else if (a === "submit" || a === "reset") {
        A.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value")
        ? hc(A, t.type, i)
        : t.hasOwnProperty("defaultValue") && hc(A, t.type, BA(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (A.defaultChecked = !!t.defaultChecked);
    }
    function qp(A, t, i) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var a = t.type;
        if (
          !(
            (a !== "submit" && a !== "reset") ||
            (t.value !== void 0 && t.value !== null)
          )
        )
          return;
        (t = "" + A._wrapperState.initialValue),
          i || t === A.value || (A.value = t),
          (A.defaultValue = t);
      }
      (i = A.name),
        i !== "" && (A.name = ""),
        (A.defaultChecked = !!A._wrapperState.initialChecked),
        i !== "" && (A.name = i);
    }
    function hc(A, t, i) {
      (t !== "number" || se(A.ownerDocument) !== A) &&
        (i == null
          ? (A.defaultValue = "" + A._wrapperState.initialValue)
          : A.defaultValue !== "" + i && (A.defaultValue = "" + i));
    }
    var Bo = Array.isArray;
    function fn(A, t, i, a) {
      if (((A = A.options), t)) {
        t = {};
        for (var c = 0; c < i.length; c++) t["$" + i[c]] = !0;
        for (i = 0; i < A.length; i++)
          (c = t.hasOwnProperty("$" + A[i].value)),
            A[i].selected !== c && (A[i].selected = c),
            c && a && (A[i].defaultSelected = !0);
      } else {
        for (i = "" + BA(i), t = null, c = 0; c < A.length; c++) {
          if (A[c].value === i) {
            (A[c].selected = !0), a && (A[c].defaultSelected = !0);
            return;
          }
          t !== null || A[c].disabled || (t = A[c]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function vc(A, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(n(91));
      return Z({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + A._wrapperState.initialValue,
      });
    }
    function Aw(A, t) {
      var i = t.value;
      if (i == null) {
        if (((i = t.children), (t = t.defaultValue), i != null)) {
          if (t != null) throw Error(n(92));
          if (Bo(i)) {
            if (1 < i.length) throw Error(n(93));
            i = i[0];
          }
          t = i;
        }
        t == null && (t = ""), (i = t);
      }
      A._wrapperState = { initialValue: BA(i) };
    }
    function ew(A, t) {
      var i = BA(t.value),
        a = BA(t.defaultValue);
      i != null &&
        ((i = "" + i),
        i !== A.value && (A.value = i),
        t.defaultValue == null && A.defaultValue !== i && (A.defaultValue = i)),
        a != null && (A.defaultValue = "" + a);
    }
    function tw(A) {
      var t = A.textContent;
      t === A._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (A.value = t);
    }
    function rw(A) {
      switch (A) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function mc(A, t) {
      return A == null || A === "http://www.w3.org/1999/xhtml"
        ? rw(t)
        : A === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : A;
    }
    var vs,
      nw = (function (A) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
          ? function (t, i, a, c) {
              MSApp.execUnsafeLocalFunction(function () {
                return A(t, i, a, c);
              });
            }
          : A;
      })(function (A, t) {
        if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in A)
          A.innerHTML = t;
        else {
          for (
            vs = vs || document.createElement("div"),
              vs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
              t = vs.firstChild;
            A.firstChild;

          )
            A.removeChild(A.firstChild);
          for (; t.firstChild; ) A.appendChild(t.firstChild);
        }
      });
    function go(A, t) {
      if (t) {
        var i = A.firstChild;
        if (i && i === A.lastChild && i.nodeType === 3) {
          i.nodeValue = t;
          return;
        }
      }
      A.textContent = t;
    }
    var po = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      zx = ["Webkit", "ms", "Moz", "O"];
    Object.keys(po).forEach(function (A) {
      zx.forEach(function (t) {
        (t = t + A.charAt(0).toUpperCase() + A.substring(1)), (po[t] = po[A]);
      });
    });
    function ow(A, t, i) {
      return t == null || typeof t == "boolean" || t === ""
        ? ""
        : i ||
            typeof t != "number" ||
            t === 0 ||
            (po.hasOwnProperty(A) && po[A])
          ? ("" + t).trim()
          : t + "px";
    }
    function iw(A, t) {
      A = A.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var a = i.indexOf("--") === 0,
            c = ow(i, t[i], a);
          i === "float" && (i = "cssFloat"),
            a ? A.setProperty(i, c) : (A[i] = c);
        }
    }
    var Jx = Z(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    );
    function Cc(A, t) {
      if (t) {
        if (Jx[A] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(n(137, A));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(n(60));
          if (
            typeof t.dangerouslySetInnerHTML != "object" ||
            !("__html" in t.dangerouslySetInnerHTML)
          )
            throw Error(n(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(n(62));
      }
    }
    function Qc(A, t) {
      if (A.indexOf("-") === -1) return typeof t.is == "string";
      switch (A) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var yc = null;
    function Uc(A) {
      return (
        (A = A.target || A.srcElement || window),
        A.correspondingUseElement && (A = A.correspondingUseElement),
        A.nodeType === 3 ? A.parentNode : A
      );
    }
    var Fc = null,
      dn = null,
      Bn = null;
    function sw(A) {
      if ((A = Oo(A))) {
        if (typeof Fc != "function") throw Error(n(280));
        var t = A.stateNode;
        t && ((t = _s(t)), Fc(A.stateNode, A.type, t));
      }
    }
    function aw(A) {
      dn ? (Bn ? Bn.push(A) : (Bn = [A])) : (dn = A);
    }
    function lw() {
      if (dn) {
        var A = dn,
          t = Bn;
        if (((Bn = dn = null), sw(A), t))
          for (A = 0; A < t.length; A++) sw(t[A]);
      }
    }
    function cw(A, t) {
      return A(t);
    }
    function uw() {}
    var Ec = !1;
    function fw(A, t, i) {
      if (Ec) return A(t, i);
      Ec = !0;
      try {
        return cw(A, t, i);
      } finally {
        (Ec = !1), (dn !== null || Bn !== null) && (uw(), lw());
      }
    }
    function wo(A, t) {
      var i = A.stateNode;
      if (i === null) return null;
      var a = _s(i);
      if (a === null) return null;
      i = a[t];
      A: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (a = !a.disabled) ||
            ((A = A.type),
            (a = !(
              A === "button" ||
              A === "input" ||
              A === "select" ||
              A === "textarea"
            ))),
            (A = !a);
          break A;
        default:
          A = !1;
      }
      if (A) return null;
      if (i && typeof i != "function") throw Error(n(231, t, typeof i));
      return i;
    }
    var xc = !1;
    if (f)
      try {
        var ho = {};
        Object.defineProperty(ho, "passive", {
          get: function () {
            xc = !0;
          },
        }),
          window.addEventListener("test", ho, ho),
          window.removeEventListener("test", ho, ho);
      } catch {
        xc = !1;
      }
    function Yx(A, t, i, a, c, d, p, y, x) {
      var K = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, K);
      } catch (V) {
        this.onError(V);
      }
    }
    var vo = !1,
      ms = null,
      Cs = !1,
      Ic = null,
      Zx = {
        onError: function (A) {
          (vo = !0), (ms = A);
        },
      };
    function $x(A, t, i, a, c, d, p, y, x) {
      (vo = !1), (ms = null), Yx.apply(Zx, arguments);
    }
    function qx(A, t, i, a, c, d, p, y, x) {
      if (($x.apply(this, arguments), vo)) {
        if (vo) {
          var K = ms;
          (vo = !1), (ms = null);
        } else throw Error(n(198));
        Cs || ((Cs = !0), (Ic = K));
      }
    }
    function Er(A) {
      var t = A,
        i = A;
      if (A.alternate) for (; t.return; ) t = t.return;
      else {
        A = t;
        do (t = A), t.flags & 4098 && (i = t.return), (A = t.return);
        while (A);
      }
      return t.tag === 3 ? i : null;
    }
    function dw(A) {
      if (A.tag === 13) {
        var t = A.memoizedState;
        if (
          (t === null &&
            ((A = A.alternate), A !== null && (t = A.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function Bw(A) {
      if (Er(A) !== A) throw Error(n(188));
    }
    function AI(A) {
      var t = A.alternate;
      if (!t) {
        if (((t = Er(A)), t === null)) throw Error(n(188));
        return t !== A ? null : A;
      }
      for (var i = A, a = t; ; ) {
        var c = i.return;
        if (c === null) break;
        var d = c.alternate;
        if (d === null) {
          if (((a = c.return), a !== null)) {
            i = a;
            continue;
          }
          break;
        }
        if (c.child === d.child) {
          for (d = c.child; d; ) {
            if (d === i) return Bw(c), A;
            if (d === a) return Bw(c), t;
            d = d.sibling;
          }
          throw Error(n(188));
        }
        if (i.return !== a.return) (i = c), (a = d);
        else {
          for (var p = !1, y = c.child; y; ) {
            if (y === i) {
              (p = !0), (i = c), (a = d);
              break;
            }
            if (y === a) {
              (p = !0), (a = c), (i = d);
              break;
            }
            y = y.sibling;
          }
          if (!p) {
            for (y = d.child; y; ) {
              if (y === i) {
                (p = !0), (i = d), (a = c);
                break;
              }
              if (y === a) {
                (p = !0), (a = d), (i = c);
                break;
              }
              y = y.sibling;
            }
            if (!p) throw Error(n(189));
          }
        }
        if (i.alternate !== a) throw Error(n(190));
      }
      if (i.tag !== 3) throw Error(n(188));
      return i.stateNode.current === i ? A : t;
    }
    function gw(A) {
      return (A = AI(A)), A !== null ? pw(A) : null;
    }
    function pw(A) {
      if (A.tag === 5 || A.tag === 6) return A;
      for (A = A.child; A !== null; ) {
        var t = pw(A);
        if (t !== null) return t;
        A = A.sibling;
      }
      return null;
    }
    var ww = r.unstable_scheduleCallback,
      hw = r.unstable_cancelCallback,
      eI = r.unstable_shouldYield,
      tI = r.unstable_requestPaint,
      XA = r.unstable_now,
      rI = r.unstable_getCurrentPriorityLevel,
      Hc = r.unstable_ImmediatePriority,
      vw = r.unstable_UserBlockingPriority,
      Qs = r.unstable_NormalPriority,
      nI = r.unstable_LowPriority,
      mw = r.unstable_IdlePriority,
      ys = null,
      lt = null;
    function oI(A) {
      if (lt && typeof lt.onCommitFiberRoot == "function")
        try {
          lt.onCommitFiberRoot(ys, A, void 0, (A.current.flags & 128) === 128);
        } catch {}
    }
    var Ye = Math.clz32 ? Math.clz32 : aI,
      iI = Math.log,
      sI = Math.LN2;
    function aI(A) {
      return (A >>>= 0), A === 0 ? 32 : (31 - ((iI(A) / sI) | 0)) | 0;
    }
    var Us = 64,
      Fs = 4194304;
    function mo(A) {
      switch (A & -A) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return A & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return A & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return A;
      }
    }
    function Es(A, t) {
      var i = A.pendingLanes;
      if (i === 0) return 0;
      var a = 0,
        c = A.suspendedLanes,
        d = A.pingedLanes,
        p = i & 268435455;
      if (p !== 0) {
        var y = p & ~c;
        y !== 0 ? (a = mo(y)) : ((d &= p), d !== 0 && (a = mo(d)));
      } else (p = i & ~c), p !== 0 ? (a = mo(p)) : d !== 0 && (a = mo(d));
      if (a === 0) return 0;
      if (
        t !== 0 &&
        t !== a &&
        !(t & c) &&
        ((c = a & -a),
        (d = t & -t),
        c >= d || (c === 16 && (d & 4194240) !== 0))
      )
        return t;
      if ((a & 4 && (a |= i & 16), (t = A.entangledLanes), t !== 0))
        for (A = A.entanglements, t &= a; 0 < t; )
          (i = 31 - Ye(t)), (c = 1 << i), (a |= A[i]), (t &= ~c);
      return a;
    }
    function lI(A, t) {
      switch (A) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function cI(A, t) {
      for (
        var i = A.suspendedLanes,
          a = A.pingedLanes,
          c = A.expirationTimes,
          d = A.pendingLanes;
        0 < d;

      ) {
        var p = 31 - Ye(d),
          y = 1 << p,
          x = c[p];
        x === -1
          ? (!(y & i) || y & a) && (c[p] = lI(y, t))
          : x <= t && (A.expiredLanes |= y),
          (d &= ~y);
      }
    }
    function Sc(A) {
      return (
        (A = A.pendingLanes & -1073741825),
        A !== 0 ? A : A & 1073741824 ? 1073741824 : 0
      );
    }
    function Cw() {
      var A = Us;
      return (Us <<= 1), !(Us & 4194240) && (Us = 64), A;
    }
    function bc(A) {
      for (var t = [], i = 0; 31 > i; i++) t.push(A);
      return t;
    }
    function Co(A, t, i) {
      (A.pendingLanes |= t),
        t !== 536870912 && ((A.suspendedLanes = 0), (A.pingedLanes = 0)),
        (A = A.eventTimes),
        (t = 31 - Ye(t)),
        (A[t] = i);
    }
    function uI(A, t) {
      var i = A.pendingLanes & ~t;
      (A.pendingLanes = t),
        (A.suspendedLanes = 0),
        (A.pingedLanes = 0),
        (A.expiredLanes &= t),
        (A.mutableReadLanes &= t),
        (A.entangledLanes &= t),
        (t = A.entanglements);
      var a = A.eventTimes;
      for (A = A.expirationTimes; 0 < i; ) {
        var c = 31 - Ye(i),
          d = 1 << c;
        (t[c] = 0), (a[c] = -1), (A[c] = -1), (i &= ~d);
      }
    }
    function Lc(A, t) {
      var i = (A.entangledLanes |= t);
      for (A = A.entanglements; i; ) {
        var a = 31 - Ye(i),
          c = 1 << a;
        (c & t) | (A[a] & t) && (A[a] |= t), (i &= ~c);
      }
    }
    var HA = 0;
    function Qw(A) {
      return (
        (A &= -A), 1 < A ? (4 < A ? (A & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var yw,
      Tc,
      Uw,
      Fw,
      Ew,
      Dc = !1,
      xs = [],
      Yt = null,
      Zt = null,
      $t = null,
      Qo = new Map(),
      yo = new Map(),
      qt = [],
      fI =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " ",
        );
    function xw(A, t) {
      switch (A) {
        case "focusin":
        case "focusout":
          Yt = null;
          break;
        case "dragenter":
        case "dragleave":
          Zt = null;
          break;
        case "mouseover":
        case "mouseout":
          $t = null;
          break;
        case "pointerover":
        case "pointerout":
          Qo.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          yo.delete(t.pointerId);
      }
    }
    function Uo(A, t, i, a, c, d) {
      return A === null || A.nativeEvent !== d
        ? ((A = {
            blockedOn: t,
            domEventName: i,
            eventSystemFlags: a,
            nativeEvent: d,
            targetContainers: [c],
          }),
          t !== null && ((t = Oo(t)), t !== null && Tc(t)),
          A)
        : ((A.eventSystemFlags |= a),
          (t = A.targetContainers),
          c !== null && t.indexOf(c) === -1 && t.push(c),
          A);
    }
    function dI(A, t, i, a, c) {
      switch (t) {
        case "focusin":
          return (Yt = Uo(Yt, A, t, i, a, c)), !0;
        case "dragenter":
          return (Zt = Uo(Zt, A, t, i, a, c)), !0;
        case "mouseover":
          return ($t = Uo($t, A, t, i, a, c)), !0;
        case "pointerover":
          var d = c.pointerId;
          return Qo.set(d, Uo(Qo.get(d) || null, A, t, i, a, c)), !0;
        case "gotpointercapture":
          return (
            (d = c.pointerId),
            yo.set(d, Uo(yo.get(d) || null, A, t, i, a, c)),
            !0
          );
      }
      return !1;
    }
    function Iw(A) {
      var t = xr(A.target);
      if (t !== null) {
        var i = Er(t);
        if (i !== null) {
          if (((t = i.tag), t === 13)) {
            if (((t = dw(i)), t !== null)) {
              (A.blockedOn = t),
                Ew(A.priority, function () {
                  Uw(i);
                });
              return;
            }
          } else if (
            t === 3 &&
            i.stateNode.current.memoizedState.isDehydrated
          ) {
            A.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
            return;
          }
        }
      }
      A.blockedOn = null;
    }
    function Is(A) {
      if (A.blockedOn !== null) return !1;
      for (var t = A.targetContainers; 0 < t.length; ) {
        var i = kc(A.domEventName, A.eventSystemFlags, t[0], A.nativeEvent);
        if (i === null) {
          i = A.nativeEvent;
          var a = new i.constructor(i.type, i);
          (yc = a), i.target.dispatchEvent(a), (yc = null);
        } else return (t = Oo(i)), t !== null && Tc(t), (A.blockedOn = i), !1;
        t.shift();
      }
      return !0;
    }
    function Hw(A, t, i) {
      Is(A) && i.delete(t);
    }
    function BI() {
      (Dc = !1),
        Yt !== null && Is(Yt) && (Yt = null),
        Zt !== null && Is(Zt) && (Zt = null),
        $t !== null && Is($t) && ($t = null),
        Qo.forEach(Hw),
        yo.forEach(Hw);
    }
    function Fo(A, t) {
      A.blockedOn === t &&
        ((A.blockedOn = null),
        Dc ||
          ((Dc = !0),
          r.unstable_scheduleCallback(r.unstable_NormalPriority, BI)));
    }
    function Eo(A) {
      function t(c) {
        return Fo(c, A);
      }
      if (0 < xs.length) {
        Fo(xs[0], A);
        for (var i = 1; i < xs.length; i++) {
          var a = xs[i];
          a.blockedOn === A && (a.blockedOn = null);
        }
      }
      for (
        Yt !== null && Fo(Yt, A),
          Zt !== null && Fo(Zt, A),
          $t !== null && Fo($t, A),
          Qo.forEach(t),
          yo.forEach(t),
          i = 0;
        i < qt.length;
        i++
      )
        (a = qt[i]), a.blockedOn === A && (a.blockedOn = null);
      for (; 0 < qt.length && ((i = qt[0]), i.blockedOn === null); )
        Iw(i), i.blockedOn === null && qt.shift();
    }
    var gn = T.ReactCurrentBatchConfig,
      Hs = !0;
    function gI(A, t, i, a) {
      var c = HA,
        d = gn.transition;
      gn.transition = null;
      try {
        (HA = 1), Kc(A, t, i, a);
      } finally {
        (HA = c), (gn.transition = d);
      }
    }
    function pI(A, t, i, a) {
      var c = HA,
        d = gn.transition;
      gn.transition = null;
      try {
        (HA = 4), Kc(A, t, i, a);
      } finally {
        (HA = c), (gn.transition = d);
      }
    }
    function Kc(A, t, i, a) {
      if (Hs) {
        var c = kc(A, t, i, a);
        if (c === null) qc(A, t, a, Ss, i), xw(A, a);
        else if (dI(c, A, t, i, a)) a.stopPropagation();
        else if ((xw(A, a), t & 4 && -1 < fI.indexOf(A))) {
          for (; c !== null; ) {
            var d = Oo(c);
            if (
              (d !== null && yw(d),
              (d = kc(A, t, i, a)),
              d === null && qc(A, t, a, Ss, i),
              d === c)
            )
              break;
            c = d;
          }
          c !== null && a.stopPropagation();
        } else qc(A, t, a, null, i);
      }
    }
    var Ss = null;
    function kc(A, t, i, a) {
      if (((Ss = null), (A = Uc(a)), (A = xr(A)), A !== null))
        if (((t = Er(A)), t === null)) A = null;
        else if (((i = t.tag), i === 13)) {
          if (((A = dw(t)), A !== null)) return A;
          A = null;
        } else if (i === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          A = null;
        } else t !== A && (A = null);
      return (Ss = A), null;
    }
    function Sw(A) {
      switch (A) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (rI()) {
            case Hc:
              return 1;
            case vw:
              return 4;
            case Qs:
            case nI:
              return 16;
            case mw:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Ar = null,
      Rc = null,
      bs = null;
    function bw() {
      if (bs) return bs;
      var A,
        t = Rc,
        i = t.length,
        a,
        c = "value" in Ar ? Ar.value : Ar.textContent,
        d = c.length;
      for (A = 0; A < i && t[A] === c[A]; A++);
      var p = i - A;
      for (a = 1; a <= p && t[i - a] === c[d - a]; a++);
      return (bs = c.slice(A, 1 < a ? 1 - a : void 0));
    }
    function Ls(A) {
      var t = A.keyCode;
      return (
        "charCode" in A
          ? ((A = A.charCode), A === 0 && t === 13 && (A = 13))
          : (A = t),
        A === 10 && (A = 13),
        32 <= A || A === 13 ? A : 0
      );
    }
    function Ts() {
      return !0;
    }
    function Lw() {
      return !1;
    }
    function Se(A) {
      function t(i, a, c, d, p) {
        (this._reactName = i),
          (this._targetInst = c),
          (this.type = a),
          (this.nativeEvent = d),
          (this.target = p),
          (this.currentTarget = null);
        for (var y in A)
          A.hasOwnProperty(y) && ((i = A[y]), (this[y] = i ? i(d) : d[y]));
        return (
          (this.isDefaultPrevented = (
            d.defaultPrevented != null
              ? d.defaultPrevented
              : d.returnValue === !1
          )
            ? Ts
            : Lw),
          (this.isPropagationStopped = Lw),
          this
        );
      }
      return (
        Z(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var i = this.nativeEvent;
            i &&
              (i.preventDefault
                ? i.preventDefault()
                : typeof i.returnValue != "unknown" && (i.returnValue = !1),
              (this.isDefaultPrevented = Ts));
          },
          stopPropagation: function () {
            var i = this.nativeEvent;
            i &&
              (i.stopPropagation
                ? i.stopPropagation()
                : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
              (this.isPropagationStopped = Ts));
          },
          persist: function () {},
          isPersistent: Ts,
        }),
        t
      );
    }
    var pn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (A) {
          return A.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Oc = Se(pn),
      xo = Z({}, pn, { view: 0, detail: 0 }),
      wI = Se(xo),
      Nc,
      Mc,
      Io,
      Ds = Z({}, xo, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: _c,
        button: 0,
        buttons: 0,
        relatedTarget: function (A) {
          return A.relatedTarget === void 0
            ? A.fromElement === A.srcElement
              ? A.toElement
              : A.fromElement
            : A.relatedTarget;
        },
        movementX: function (A) {
          return "movementX" in A
            ? A.movementX
            : (A !== Io &&
                (Io && A.type === "mousemove"
                  ? ((Nc = A.screenX - Io.screenX),
                    (Mc = A.screenY - Io.screenY))
                  : (Mc = Nc = 0),
                (Io = A)),
              Nc);
        },
        movementY: function (A) {
          return "movementY" in A ? A.movementY : Mc;
        },
      }),
      Tw = Se(Ds),
      hI = Z({}, Ds, { dataTransfer: 0 }),
      vI = Se(hI),
      mI = Z({}, xo, { relatedTarget: 0 }),
      Pc = Se(mI),
      CI = Z({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      QI = Se(CI),
      yI = Z({}, pn, {
        clipboardData: function (A) {
          return "clipboardData" in A ? A.clipboardData : window.clipboardData;
        },
      }),
      UI = Se(yI),
      FI = Z({}, pn, { data: 0 }),
      Dw = Se(FI),
      EI = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      xI = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      II = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function HI(A) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(A)
        : (A = II[A])
          ? !!t[A]
          : !1;
    }
    function _c() {
      return HI;
    }
    var SI = Z({}, xo, {
        key: function (A) {
          if (A.key) {
            var t = EI[A.key] || A.key;
            if (t !== "Unidentified") return t;
          }
          return A.type === "keypress"
            ? ((A = Ls(A)), A === 13 ? "Enter" : String.fromCharCode(A))
            : A.type === "keydown" || A.type === "keyup"
              ? xI[A.keyCode] || "Unidentified"
              : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: _c,
        charCode: function (A) {
          return A.type === "keypress" ? Ls(A) : 0;
        },
        keyCode: function (A) {
          return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
        },
        which: function (A) {
          return A.type === "keypress"
            ? Ls(A)
            : A.type === "keydown" || A.type === "keyup"
              ? A.keyCode
              : 0;
        },
      }),
      bI = Se(SI),
      LI = Z({}, Ds, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      Kw = Se(LI),
      TI = Z({}, xo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: _c,
      }),
      DI = Se(TI),
      KI = Z({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      kI = Se(KI),
      RI = Z({}, Ds, {
        deltaX: function (A) {
          return "deltaX" in A
            ? A.deltaX
            : "wheelDeltaX" in A
              ? -A.wheelDeltaX
              : 0;
        },
        deltaY: function (A) {
          return "deltaY" in A
            ? A.deltaY
            : "wheelDeltaY" in A
              ? -A.wheelDeltaY
              : "wheelDelta" in A
                ? -A.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      OI = Se(RI),
      NI = [9, 13, 27, 32],
      Vc = f && "CompositionEvent" in window,
      Ho = null;
    f && "documentMode" in document && (Ho = document.documentMode);
    var MI = f && "TextEvent" in window && !Ho,
      kw = f && (!Vc || (Ho && 8 < Ho && 11 >= Ho)),
      Rw = " ",
      Ow = !1;
    function Nw(A, t) {
      switch (A) {
        case "keyup":
          return NI.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Mw(A) {
      return (
        (A = A.detail), typeof A == "object" && "data" in A ? A.data : null
      );
    }
    var wn = !1;
    function PI(A, t) {
      switch (A) {
        case "compositionend":
          return Mw(t);
        case "keypress":
          return t.which !== 32 ? null : ((Ow = !0), Rw);
        case "textInput":
          return (A = t.data), A === Rw && Ow ? null : A;
        default:
          return null;
      }
    }
    function _I(A, t) {
      if (wn)
        return A === "compositionend" || (!Vc && Nw(A, t))
          ? ((A = bw()), (bs = Rc = Ar = null), (wn = !1), A)
          : null;
      switch (A) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return kw && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var VI = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Pw(A) {
      var t = A && A.nodeName && A.nodeName.toLowerCase();
      return t === "input" ? !!VI[A.type] : t === "textarea";
    }
    function _w(A, t, i, a) {
      aw(a),
        (t = Ns(t, "onChange")),
        0 < t.length &&
          ((i = new Oc("onChange", "change", null, i, a)),
          A.push({ event: i, listeners: t }));
    }
    var So = null,
      bo = null;
    function GI(A) {
      ih(A, 0);
    }
    function Ks(A) {
      var t = Qn(A);
      if (MA(t)) return A;
    }
    function WI(A, t) {
      if (A === "change") return t;
    }
    var Vw = !1;
    if (f) {
      var Gc;
      if (f) {
        var Wc = "oninput" in document;
        if (!Wc) {
          var Gw = document.createElement("div");
          Gw.setAttribute("oninput", "return;"),
            (Wc = typeof Gw.oninput == "function");
        }
        Gc = Wc;
      } else Gc = !1;
      Vw = Gc && (!document.documentMode || 9 < document.documentMode);
    }
    function Ww() {
      So && (So.detachEvent("onpropertychange", jw), (bo = So = null));
    }
    function jw(A) {
      if (A.propertyName === "value" && Ks(bo)) {
        var t = [];
        _w(t, bo, A, Uc(A)), fw(GI, t);
      }
    }
    function jI(A, t, i) {
      A === "focusin"
        ? (Ww(), (So = t), (bo = i), So.attachEvent("onpropertychange", jw))
        : A === "focusout" && Ww();
    }
    function XI(A) {
      if (A === "selectionchange" || A === "keyup" || A === "keydown")
        return Ks(bo);
    }
    function zI(A, t) {
      if (A === "click") return Ks(t);
    }
    function JI(A, t) {
      if (A === "input" || A === "change") return Ks(t);
    }
    function YI(A, t) {
      return (A === t && (A !== 0 || 1 / A === 1 / t)) || (A !== A && t !== t);
    }
    var Ze = typeof Object.is == "function" ? Object.is : YI;
    function Lo(A, t) {
      if (Ze(A, t)) return !0;
      if (
        typeof A != "object" ||
        A === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      var i = Object.keys(A),
        a = Object.keys(t);
      if (i.length !== a.length) return !1;
      for (a = 0; a < i.length; a++) {
        var c = i[a];
        if (!B.call(t, c) || !Ze(A[c], t[c])) return !1;
      }
      return !0;
    }
    function Xw(A) {
      for (; A && A.firstChild; ) A = A.firstChild;
      return A;
    }
    function zw(A, t) {
      var i = Xw(A);
      A = 0;
      for (var a; i; ) {
        if (i.nodeType === 3) {
          if (((a = A + i.textContent.length), A <= t && a >= t))
            return { node: i, offset: t - A };
          A = a;
        }
        A: {
          for (; i; ) {
            if (i.nextSibling) {
              i = i.nextSibling;
              break A;
            }
            i = i.parentNode;
          }
          i = void 0;
        }
        i = Xw(i);
      }
    }
    function Jw(A, t) {
      return A && t
        ? A === t
          ? !0
          : A && A.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Jw(A, t.parentNode)
              : "contains" in A
                ? A.contains(t)
                : A.compareDocumentPosition
                  ? !!(A.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Yw() {
      for (var A = window, t = se(); t instanceof A.HTMLIFrameElement; ) {
        try {
          var i = typeof t.contentWindow.location.href == "string";
        } catch {
          i = !1;
        }
        if (i) A = t.contentWindow;
        else break;
        t = se(A.document);
      }
      return t;
    }
    function jc(A) {
      var t = A && A.nodeName && A.nodeName.toLowerCase();
      return (
        t &&
        ((t === "input" &&
          (A.type === "text" ||
            A.type === "search" ||
            A.type === "tel" ||
            A.type === "url" ||
            A.type === "password")) ||
          t === "textarea" ||
          A.contentEditable === "true")
      );
    }
    function ZI(A) {
      var t = Yw(),
        i = A.focusedElem,
        a = A.selectionRange;
      if (
        t !== i &&
        i &&
        i.ownerDocument &&
        Jw(i.ownerDocument.documentElement, i)
      ) {
        if (a !== null && jc(i)) {
          if (
            ((t = a.start),
            (A = a.end),
            A === void 0 && (A = t),
            "selectionStart" in i)
          )
            (i.selectionStart = t),
              (i.selectionEnd = Math.min(A, i.value.length));
          else if (
            ((A =
              ((t = i.ownerDocument || document) && t.defaultView) || window),
            A.getSelection)
          ) {
            A = A.getSelection();
            var c = i.textContent.length,
              d = Math.min(a.start, c);
            (a = a.end === void 0 ? d : Math.min(a.end, c)),
              !A.extend && d > a && ((c = a), (a = d), (d = c)),
              (c = zw(i, d));
            var p = zw(i, a);
            c &&
              p &&
              (A.rangeCount !== 1 ||
                A.anchorNode !== c.node ||
                A.anchorOffset !== c.offset ||
                A.focusNode !== p.node ||
                A.focusOffset !== p.offset) &&
              ((t = t.createRange()),
              t.setStart(c.node, c.offset),
              A.removeAllRanges(),
              d > a
                ? (A.addRange(t), A.extend(p.node, p.offset))
                : (t.setEnd(p.node, p.offset), A.addRange(t)));
          }
        }
        for (t = [], A = i; (A = A.parentNode); )
          A.nodeType === 1 &&
            t.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
        for (
          typeof i.focus == "function" && i.focus(), i = 0;
          i < t.length;
          i++
        )
          (A = t[i]),
            (A.element.scrollLeft = A.left),
            (A.element.scrollTop = A.top);
      }
    }
    var $I = f && "documentMode" in document && 11 >= document.documentMode,
      hn = null,
      Xc = null,
      To = null,
      zc = !1;
    function Zw(A, t, i) {
      var a =
        i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
      zc ||
        hn == null ||
        hn !== se(a) ||
        ((a = hn),
        "selectionStart" in a && jc(a)
          ? (a = { start: a.selectionStart, end: a.selectionEnd })
          : ((a = (
              (a.ownerDocument && a.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (a = {
              anchorNode: a.anchorNode,
              anchorOffset: a.anchorOffset,
              focusNode: a.focusNode,
              focusOffset: a.focusOffset,
            })),
        (To && Lo(To, a)) ||
          ((To = a),
          (a = Ns(Xc, "onSelect")),
          0 < a.length &&
            ((t = new Oc("onSelect", "select", null, t, i)),
            A.push({ event: t, listeners: a }),
            (t.target = hn))));
    }
    function ks(A, t) {
      var i = {};
      return (
        (i[A.toLowerCase()] = t.toLowerCase()),
        (i["Webkit" + A] = "webkit" + t),
        (i["Moz" + A] = "moz" + t),
        i
      );
    }
    var vn = {
        animationend: ks("Animation", "AnimationEnd"),
        animationiteration: ks("Animation", "AnimationIteration"),
        animationstart: ks("Animation", "AnimationStart"),
        transitionend: ks("Transition", "TransitionEnd"),
      },
      Jc = {},
      $w = {};
    f &&
      (($w = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete vn.animationend.animation,
        delete vn.animationiteration.animation,
        delete vn.animationstart.animation),
      "TransitionEvent" in window || delete vn.transitionend.transition);
    function Rs(A) {
      if (Jc[A]) return Jc[A];
      if (!vn[A]) return A;
      var t = vn[A],
        i;
      for (i in t) if (t.hasOwnProperty(i) && i in $w) return (Jc[A] = t[i]);
      return A;
    }
    var qw = Rs("animationend"),
      Ah = Rs("animationiteration"),
      eh = Rs("animationstart"),
      th = Rs("transitionend"),
      rh = new Map(),
      nh =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " ",
        );
    function er(A, t) {
      rh.set(A, t), l(t, [A]);
    }
    for (var Yc = 0; Yc < nh.length; Yc++) {
      var Zc = nh[Yc],
        qI = Zc.toLowerCase(),
        AH = Zc[0].toUpperCase() + Zc.slice(1);
      er(qI, "on" + AH);
    }
    er(qw, "onAnimationEnd"),
      er(Ah, "onAnimationIteration"),
      er(eh, "onAnimationStart"),
      er("dblclick", "onDoubleClick"),
      er("focusin", "onFocus"),
      er("focusout", "onBlur"),
      er(th, "onTransitionEnd"),
      u("onMouseEnter", ["mouseout", "mouseover"]),
      u("onMouseLeave", ["mouseout", "mouseover"]),
      u("onPointerEnter", ["pointerout", "pointerover"]),
      u("onPointerLeave", ["pointerout", "pointerover"]),
      l(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " ",
        ),
      ),
      l(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " ",
        ),
      ),
      l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      l(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" "),
      ),
      l(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" "),
      ),
      l(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(
          " ",
        ),
      );
    var Do =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " ",
        ),
      eH = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Do),
      );
    function oh(A, t, i) {
      var a = A.type || "unknown-event";
      (A.currentTarget = i), qx(a, t, void 0, A), (A.currentTarget = null);
    }
    function ih(A, t) {
      t = (t & 4) !== 0;
      for (var i = 0; i < A.length; i++) {
        var a = A[i],
          c = a.event;
        a = a.listeners;
        A: {
          var d = void 0;
          if (t)
            for (var p = a.length - 1; 0 <= p; p--) {
              var y = a[p],
                x = y.instance,
                K = y.currentTarget;
              if (((y = y.listener), x !== d && c.isPropagationStopped()))
                break A;
              oh(c, y, K), (d = x);
            }
          else
            for (p = 0; p < a.length; p++) {
              if (
                ((y = a[p]),
                (x = y.instance),
                (K = y.currentTarget),
                (y = y.listener),
                x !== d && c.isPropagationStopped())
              )
                break A;
              oh(c, y, K), (d = x);
            }
        }
      }
      if (Cs) throw ((A = Ic), (Cs = !1), (Ic = null), A);
    }
    function KA(A, t) {
      var i = t[ou];
      i === void 0 && (i = t[ou] = new Set());
      var a = A + "__bubble";
      i.has(a) || (sh(t, A, 2, !1), i.add(a));
    }
    function $c(A, t, i) {
      var a = 0;
      t && (a |= 4), sh(i, A, a, t);
    }
    var Os = "_reactListening" + Math.random().toString(36).slice(2);
    function Ko(A) {
      if (!A[Os]) {
        (A[Os] = !0),
          o.forEach(function (i) {
            i !== "selectionchange" &&
              (eH.has(i) || $c(i, !1, A), $c(i, !0, A));
          });
        var t = A.nodeType === 9 ? A : A.ownerDocument;
        t === null || t[Os] || ((t[Os] = !0), $c("selectionchange", !1, t));
      }
    }
    function sh(A, t, i, a) {
      switch (Sw(t)) {
        case 1:
          var c = gI;
          break;
        case 4:
          c = pI;
          break;
        default:
          c = Kc;
      }
      (i = c.bind(null, t, i, A)),
        (c = void 0),
        !xc ||
          (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
          (c = !0),
        a
          ? c !== void 0
            ? A.addEventListener(t, i, { capture: !0, passive: c })
            : A.addEventListener(t, i, !0)
          : c !== void 0
            ? A.addEventListener(t, i, { passive: c })
            : A.addEventListener(t, i, !1);
    }
    function qc(A, t, i, a, c) {
      var d = a;
      if (!(t & 1) && !(t & 2) && a !== null)
        A: for (;;) {
          if (a === null) return;
          var p = a.tag;
          if (p === 3 || p === 4) {
            var y = a.stateNode.containerInfo;
            if (y === c || (y.nodeType === 8 && y.parentNode === c)) break;
            if (p === 4)
              for (p = a.return; p !== null; ) {
                var x = p.tag;
                if (
                  (x === 3 || x === 4) &&
                  ((x = p.stateNode.containerInfo),
                  x === c || (x.nodeType === 8 && x.parentNode === c))
                )
                  return;
                p = p.return;
              }
            for (; y !== null; ) {
              if (((p = xr(y)), p === null)) return;
              if (((x = p.tag), x === 5 || x === 6)) {
                a = d = p;
                continue A;
              }
              y = y.parentNode;
            }
          }
          a = a.return;
        }
      fw(function () {
        var K = d,
          V = Uc(i),
          W = [];
        A: {
          var _ = rh.get(A);
          if (_ !== void 0) {
            var rA = Oc,
              aA = A;
            switch (A) {
              case "keypress":
                if (Ls(i) === 0) break A;
              case "keydown":
              case "keyup":
                rA = bI;
                break;
              case "focusin":
                (aA = "focus"), (rA = Pc);
                break;
              case "focusout":
                (aA = "blur"), (rA = Pc);
                break;
              case "beforeblur":
              case "afterblur":
                rA = Pc;
                break;
              case "click":
                if (i.button === 2) break A;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                rA = Tw;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                rA = vI;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                rA = DI;
                break;
              case qw:
              case Ah:
              case eh:
                rA = QI;
                break;
              case th:
                rA = kI;
                break;
              case "scroll":
                rA = wI;
                break;
              case "wheel":
                rA = OI;
                break;
              case "copy":
              case "cut":
              case "paste":
                rA = UI;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                rA = Kw;
            }
            var lA = (t & 4) !== 0,
              zA = !lA && A === "scroll",
              L = lA ? (_ !== null ? _ + "Capture" : null) : _;
            lA = [];
            for (var S = K, D; S !== null; ) {
              D = S;
              var z = D.stateNode;
              if (
                (D.tag === 5 &&
                  z !== null &&
                  ((D = z),
                  L !== null &&
                    ((z = wo(S, L)), z != null && lA.push(ko(S, z, D)))),
                zA)
              )
                break;
              S = S.return;
            }
            0 < lA.length &&
              ((_ = new rA(_, aA, null, i, V)),
              W.push({ event: _, listeners: lA }));
          }
        }
        if (!(t & 7)) {
          A: {
            if (
              ((_ = A === "mouseover" || A === "pointerover"),
              (rA = A === "mouseout" || A === "pointerout"),
              _ &&
                i !== yc &&
                (aA = i.relatedTarget || i.fromElement) &&
                (xr(aA) || aA[Ut]))
            )
              break A;
            if (
              (rA || _) &&
              ((_ =
                V.window === V
                  ? V
                  : (_ = V.ownerDocument)
                    ? _.defaultView || _.parentWindow
                    : window),
              rA
                ? ((aA = i.relatedTarget || i.toElement),
                  (rA = K),
                  (aA = aA ? xr(aA) : null),
                  aA !== null &&
                    ((zA = Er(aA)),
                    aA !== zA || (aA.tag !== 5 && aA.tag !== 6)) &&
                    (aA = null))
                : ((rA = null), (aA = K)),
              rA !== aA)
            ) {
              if (
                ((lA = Tw),
                (z = "onMouseLeave"),
                (L = "onMouseEnter"),
                (S = "mouse"),
                (A === "pointerout" || A === "pointerover") &&
                  ((lA = Kw),
                  (z = "onPointerLeave"),
                  (L = "onPointerEnter"),
                  (S = "pointer")),
                (zA = rA == null ? _ : Qn(rA)),
                (D = aA == null ? _ : Qn(aA)),
                (_ = new lA(z, S + "leave", rA, i, V)),
                (_.target = zA),
                (_.relatedTarget = D),
                (z = null),
                xr(V) === K &&
                  ((lA = new lA(L, S + "enter", aA, i, V)),
                  (lA.target = D),
                  (lA.relatedTarget = zA),
                  (z = lA)),
                (zA = z),
                rA && aA)
              )
                e: {
                  for (lA = rA, L = aA, S = 0, D = lA; D; D = mn(D)) S++;
                  for (D = 0, z = L; z; z = mn(z)) D++;
                  for (; 0 < S - D; ) (lA = mn(lA)), S--;
                  for (; 0 < D - S; ) (L = mn(L)), D--;
                  for (; S--; ) {
                    if (lA === L || (L !== null && lA === L.alternate)) break e;
                    (lA = mn(lA)), (L = mn(L));
                  }
                  lA = null;
                }
              else lA = null;
              rA !== null && ah(W, _, rA, lA, !1),
                aA !== null && zA !== null && ah(W, zA, aA, lA, !0);
            }
          }
          A: {
            if (
              ((_ = K ? Qn(K) : window),
              (rA = _.nodeName && _.nodeName.toLowerCase()),
              rA === "select" || (rA === "input" && _.type === "file"))
            )
              var cA = WI;
            else if (Pw(_))
              if (Vw) cA = JI;
              else {
                cA = XI;
                var gA = jI;
              }
            else
              (rA = _.nodeName) &&
                rA.toLowerCase() === "input" &&
                (_.type === "checkbox" || _.type === "radio") &&
                (cA = zI);
            if (cA && (cA = cA(A, K))) {
              _w(W, cA, i, V);
              break A;
            }
            gA && gA(A, _, K),
              A === "focusout" &&
                (gA = _._wrapperState) &&
                gA.controlled &&
                _.type === "number" &&
                hc(_, "number", _.value);
          }
          switch (((gA = K ? Qn(K) : window), A)) {
            case "focusin":
              (Pw(gA) || gA.contentEditable === "true") &&
                ((hn = gA), (Xc = K), (To = null));
              break;
            case "focusout":
              To = Xc = hn = null;
              break;
            case "mousedown":
              zc = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (zc = !1), Zw(W, i, V);
              break;
            case "selectionchange":
              if ($I) break;
            case "keydown":
            case "keyup":
              Zw(W, i, V);
          }
          var pA;
          if (Vc)
            A: {
              switch (A) {
                case "compositionstart":
                  var vA = "onCompositionStart";
                  break A;
                case "compositionend":
                  vA = "onCompositionEnd";
                  break A;
                case "compositionupdate":
                  vA = "onCompositionUpdate";
                  break A;
              }
              vA = void 0;
            }
          else
            wn
              ? Nw(A, i) && (vA = "onCompositionEnd")
              : A === "keydown" &&
                i.keyCode === 229 &&
                (vA = "onCompositionStart");
          vA &&
            (kw &&
              i.locale !== "ko" &&
              (wn || vA !== "onCompositionStart"
                ? vA === "onCompositionEnd" && wn && (pA = bw())
                : ((Ar = V),
                  (Rc = "value" in Ar ? Ar.value : Ar.textContent),
                  (wn = !0))),
            (gA = Ns(K, vA)),
            0 < gA.length &&
              ((vA = new Dw(vA, A, null, i, V)),
              W.push({ event: vA, listeners: gA }),
              pA
                ? (vA.data = pA)
                : ((pA = Mw(i)), pA !== null && (vA.data = pA)))),
            (pA = MI ? PI(A, i) : _I(A, i)) &&
              ((K = Ns(K, "onBeforeInput")),
              0 < K.length &&
                ((V = new Dw("onBeforeInput", "beforeinput", null, i, V)),
                W.push({ event: V, listeners: K }),
                (V.data = pA)));
        }
        ih(W, t);
      });
    }
    function ko(A, t, i) {
      return { instance: A, listener: t, currentTarget: i };
    }
    function Ns(A, t) {
      for (var i = t + "Capture", a = []; A !== null; ) {
        var c = A,
          d = c.stateNode;
        c.tag === 5 &&
          d !== null &&
          ((c = d),
          (d = wo(A, i)),
          d != null && a.unshift(ko(A, d, c)),
          (d = wo(A, t)),
          d != null && a.push(ko(A, d, c))),
          (A = A.return);
      }
      return a;
    }
    function mn(A) {
      if (A === null) return null;
      do A = A.return;
      while (A && A.tag !== 5);
      return A || null;
    }
    function ah(A, t, i, a, c) {
      for (var d = t._reactName, p = []; i !== null && i !== a; ) {
        var y = i,
          x = y.alternate,
          K = y.stateNode;
        if (x !== null && x === a) break;
        y.tag === 5 &&
          K !== null &&
          ((y = K),
          c
            ? ((x = wo(i, d)), x != null && p.unshift(ko(i, x, y)))
            : c || ((x = wo(i, d)), x != null && p.push(ko(i, x, y)))),
          (i = i.return);
      }
      p.length !== 0 && A.push({ event: t, listeners: p });
    }
    var tH = /\r\n?/g,
      rH = /\u0000|\uFFFD/g;
    function lh(A) {
      return (typeof A == "string" ? A : "" + A)
        .replace(
          tH,
          `
`,
        )
        .replace(rH, "");
    }
    function Ms(A, t, i) {
      if (((t = lh(t)), lh(A) !== t && i)) throw Error(n(425));
    }
    function Ps() {}
    var Au = null,
      eu = null;
    function tu(A, t) {
      return (
        A === "textarea" ||
        A === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var ru = typeof setTimeout == "function" ? setTimeout : void 0,
      nH = typeof clearTimeout == "function" ? clearTimeout : void 0,
      ch = typeof Promise == "function" ? Promise : void 0,
      oH =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof ch < "u"
            ? function (A) {
                return ch.resolve(null).then(A).catch(iH);
              }
            : ru;
    function iH(A) {
      setTimeout(function () {
        throw A;
      });
    }
    function nu(A, t) {
      var i = t,
        a = 0;
      do {
        var c = i.nextSibling;
        if ((A.removeChild(i), c && c.nodeType === 8))
          if (((i = c.data), i === "/$")) {
            if (a === 0) {
              A.removeChild(c), Eo(t);
              return;
            }
            a--;
          } else (i !== "$" && i !== "$?" && i !== "$!") || a++;
        i = c;
      } while (i);
      Eo(t);
    }
    function tr(A) {
      for (; A != null; A = A.nextSibling) {
        var t = A.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = A.data), t === "$" || t === "$!" || t === "$?")) break;
          if (t === "/$") return null;
        }
      }
      return A;
    }
    function uh(A) {
      A = A.previousSibling;
      for (var t = 0; A; ) {
        if (A.nodeType === 8) {
          var i = A.data;
          if (i === "$" || i === "$!" || i === "$?") {
            if (t === 0) return A;
            t--;
          } else i === "/$" && t++;
        }
        A = A.previousSibling;
      }
      return null;
    }
    var Cn = Math.random().toString(36).slice(2),
      ct = "__reactFiber$" + Cn,
      Ro = "__reactProps$" + Cn,
      Ut = "__reactContainer$" + Cn,
      ou = "__reactEvents$" + Cn,
      sH = "__reactListeners$" + Cn,
      aH = "__reactHandles$" + Cn;
    function xr(A) {
      var t = A[ct];
      if (t) return t;
      for (var i = A.parentNode; i; ) {
        if ((t = i[Ut] || i[ct])) {
          if (
            ((i = t.alternate),
            t.child !== null || (i !== null && i.child !== null))
          )
            for (A = uh(A); A !== null; ) {
              if ((i = A[ct])) return i;
              A = uh(A);
            }
          return t;
        }
        (A = i), (i = A.parentNode);
      }
      return null;
    }
    function Oo(A) {
      return (
        (A = A[ct] || A[Ut]),
        !A || (A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3)
          ? null
          : A
      );
    }
    function Qn(A) {
      if (A.tag === 5 || A.tag === 6) return A.stateNode;
      throw Error(n(33));
    }
    function _s(A) {
      return A[Ro] || null;
    }
    var iu = [],
      yn = -1;
    function rr(A) {
      return { current: A };
    }
    function kA(A) {
      0 > yn || ((A.current = iu[yn]), (iu[yn] = null), yn--);
    }
    function TA(A, t) {
      yn++, (iu[yn] = A.current), (A.current = t);
    }
    var nr = {},
      fe = rr(nr),
      Qe = rr(!1),
      Ir = nr;
    function Un(A, t) {
      var i = A.type.contextTypes;
      if (!i) return nr;
      var a = A.stateNode;
      if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
        return a.__reactInternalMemoizedMaskedChildContext;
      var c = {},
        d;
      for (d in i) c[d] = t[d];
      return (
        a &&
          ((A = A.stateNode),
          (A.__reactInternalMemoizedUnmaskedChildContext = t),
          (A.__reactInternalMemoizedMaskedChildContext = c)),
        c
      );
    }
    function ye(A) {
      return (A = A.childContextTypes), A != null;
    }
    function Vs() {
      kA(Qe), kA(fe);
    }
    function fh(A, t, i) {
      if (fe.current !== nr) throw Error(n(168));
      TA(fe, t), TA(Qe, i);
    }
    function dh(A, t, i) {
      var a = A.stateNode;
      if (((t = t.childContextTypes), typeof a.getChildContext != "function"))
        return i;
      a = a.getChildContext();
      for (var c in a) if (!(c in t)) throw Error(n(108, $(A) || "Unknown", c));
      return Z({}, i, a);
    }
    function Gs(A) {
      return (
        (A =
          ((A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext) ||
          nr),
        (Ir = fe.current),
        TA(fe, A),
        TA(Qe, Qe.current),
        !0
      );
    }
    function Bh(A, t, i) {
      var a = A.stateNode;
      if (!a) throw Error(n(169));
      i
        ? ((A = dh(A, t, Ir)),
          (a.__reactInternalMemoizedMergedChildContext = A),
          kA(Qe),
          kA(fe),
          TA(fe, A))
        : kA(Qe),
        TA(Qe, i);
    }
    var Ft = null,
      Ws = !1,
      su = !1;
    function gh(A) {
      Ft === null ? (Ft = [A]) : Ft.push(A);
    }
    function lH(A) {
      (Ws = !0), gh(A);
    }
    function or() {
      if (!su && Ft !== null) {
        su = !0;
        var A = 0,
          t = HA;
        try {
          var i = Ft;
          for (HA = 1; A < i.length; A++) {
            var a = i[A];
            do a = a(!0);
            while (a !== null);
          }
          (Ft = null), (Ws = !1);
        } catch (c) {
          throw (Ft !== null && (Ft = Ft.slice(A + 1)), ww(Hc, or), c);
        } finally {
          (HA = t), (su = !1);
        }
      }
      return null;
    }
    var Fn = [],
      En = 0,
      js = null,
      Xs = 0,
      Oe = [],
      Ne = 0,
      Hr = null,
      Et = 1,
      xt = "";
    function Sr(A, t) {
      (Fn[En++] = Xs), (Fn[En++] = js), (js = A), (Xs = t);
    }
    function ph(A, t, i) {
      (Oe[Ne++] = Et), (Oe[Ne++] = xt), (Oe[Ne++] = Hr), (Hr = A);
      var a = Et;
      A = xt;
      var c = 32 - Ye(a) - 1;
      (a &= ~(1 << c)), (i += 1);
      var d = 32 - Ye(t) + c;
      if (30 < d) {
        var p = c - (c % 5);
        (d = (a & ((1 << p) - 1)).toString(32)),
          (a >>= p),
          (c -= p),
          (Et = (1 << (32 - Ye(t) + c)) | (i << c) | a),
          (xt = d + A);
      } else (Et = (1 << d) | (i << c) | a), (xt = A);
    }
    function au(A) {
      A.return !== null && (Sr(A, 1), ph(A, 1, 0));
    }
    function lu(A) {
      for (; A === js; )
        (js = Fn[--En]), (Fn[En] = null), (Xs = Fn[--En]), (Fn[En] = null);
      for (; A === Hr; )
        (Hr = Oe[--Ne]),
          (Oe[Ne] = null),
          (xt = Oe[--Ne]),
          (Oe[Ne] = null),
          (Et = Oe[--Ne]),
          (Oe[Ne] = null);
    }
    var be = null,
      Le = null,
      OA = !1,
      $e = null;
    function wh(A, t) {
      var i = Ve(5, null, null, 0);
      (i.elementType = "DELETED"),
        (i.stateNode = t),
        (i.return = A),
        (t = A.deletions),
        t === null ? ((A.deletions = [i]), (A.flags |= 16)) : t.push(i);
    }
    function hh(A, t) {
      switch (A.tag) {
        case 5:
          var i = A.type;
          return (
            (t =
              t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null
              ? ((A.stateNode = t), (be = A), (Le = tr(t.firstChild)), !0)
              : !1
          );
        case 6:
          return (
            (t = A.pendingProps === "" || t.nodeType !== 3 ? null : t),
            t !== null ? ((A.stateNode = t), (be = A), (Le = null), !0) : !1
          );
        case 13:
          return (
            (t = t.nodeType !== 8 ? null : t),
            t !== null
              ? ((i = Hr !== null ? { id: Et, overflow: xt } : null),
                (A.memoizedState = {
                  dehydrated: t,
                  treeContext: i,
                  retryLane: 1073741824,
                }),
                (i = Ve(18, null, null, 0)),
                (i.stateNode = t),
                (i.return = A),
                (A.child = i),
                (be = A),
                (Le = null),
                !0)
              : !1
          );
        default:
          return !1;
      }
    }
    function cu(A) {
      return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
    }
    function uu(A) {
      if (OA) {
        var t = Le;
        if (t) {
          var i = t;
          if (!hh(A, t)) {
            if (cu(A)) throw Error(n(418));
            t = tr(i.nextSibling);
            var a = be;
            t && hh(A, t)
              ? wh(a, i)
              : ((A.flags = (A.flags & -4097) | 2), (OA = !1), (be = A));
          }
        } else {
          if (cu(A)) throw Error(n(418));
          (A.flags = (A.flags & -4097) | 2), (OA = !1), (be = A);
        }
      }
    }
    function vh(A) {
      for (
        A = A.return;
        A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13;

      )
        A = A.return;
      be = A;
    }
    function zs(A) {
      if (A !== be) return !1;
      if (!OA) return vh(A), (OA = !0), !1;
      var t;
      if (
        ((t = A.tag !== 3) &&
          !(t = A.tag !== 5) &&
          ((t = A.type),
          (t = t !== "head" && t !== "body" && !tu(A.type, A.memoizedProps))),
        t && (t = Le))
      ) {
        if (cu(A)) throw (mh(), Error(n(418)));
        for (; t; ) wh(A, t), (t = tr(t.nextSibling));
      }
      if ((vh(A), A.tag === 13)) {
        if (((A = A.memoizedState), (A = A !== null ? A.dehydrated : null), !A))
          throw Error(n(317));
        A: {
          for (A = A.nextSibling, t = 0; A; ) {
            if (A.nodeType === 8) {
              var i = A.data;
              if (i === "/$") {
                if (t === 0) {
                  Le = tr(A.nextSibling);
                  break A;
                }
                t--;
              } else (i !== "$" && i !== "$!" && i !== "$?") || t++;
            }
            A = A.nextSibling;
          }
          Le = null;
        }
      } else Le = be ? tr(A.stateNode.nextSibling) : null;
      return !0;
    }
    function mh() {
      for (var A = Le; A; ) A = tr(A.nextSibling);
    }
    function xn() {
      (Le = be = null), (OA = !1);
    }
    function fu(A) {
      $e === null ? ($e = [A]) : $e.push(A);
    }
    var cH = T.ReactCurrentBatchConfig;
    function No(A, t, i) {
      if (
        ((A = i.ref),
        A !== null && typeof A != "function" && typeof A != "object")
      ) {
        if (i._owner) {
          if (((i = i._owner), i)) {
            if (i.tag !== 1) throw Error(n(309));
            var a = i.stateNode;
          }
          if (!a) throw Error(n(147, A));
          var c = a,
            d = "" + A;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == "function" &&
            t.ref._stringRef === d
            ? t.ref
            : ((t = function (p) {
                var y = c.refs;
                p === null ? delete y[d] : (y[d] = p);
              }),
              (t._stringRef = d),
              t);
        }
        if (typeof A != "string") throw Error(n(284));
        if (!i._owner) throw Error(n(290, A));
      }
      return A;
    }
    function Js(A, t) {
      throw (
        ((A = Object.prototype.toString.call(t)),
        Error(
          n(
            31,
            A === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : A,
          ),
        ))
      );
    }
    function Ch(A) {
      var t = A._init;
      return t(A._payload);
    }
    function Qh(A) {
      function t(L, S) {
        if (A) {
          var D = L.deletions;
          D === null ? ((L.deletions = [S]), (L.flags |= 16)) : D.push(S);
        }
      }
      function i(L, S) {
        if (!A) return null;
        for (; S !== null; ) t(L, S), (S = S.sibling);
        return null;
      }
      function a(L, S) {
        for (L = new Map(); S !== null; )
          S.key !== null ? L.set(S.key, S) : L.set(S.index, S), (S = S.sibling);
        return L;
      }
      function c(L, S) {
        return (L = dr(L, S)), (L.index = 0), (L.sibling = null), L;
      }
      function d(L, S, D) {
        return (
          (L.index = D),
          A
            ? ((D = L.alternate),
              D !== null
                ? ((D = D.index), D < S ? ((L.flags |= 2), S) : D)
                : ((L.flags |= 2), S))
            : ((L.flags |= 1048576), S)
        );
      }
      function p(L) {
        return A && L.alternate === null && (L.flags |= 2), L;
      }
      function y(L, S, D, z) {
        return S === null || S.tag !== 6
          ? ((S = rf(D, L.mode, z)), (S.return = L), S)
          : ((S = c(S, D)), (S.return = L), S);
      }
      function x(L, S, D, z) {
        var cA = D.type;
        return cA === P
          ? V(L, S, D.props.children, z, D.key)
          : S !== null &&
              (S.elementType === cA ||
                (typeof cA == "object" &&
                  cA !== null &&
                  cA.$$typeof === AA &&
                  Ch(cA) === S.type))
            ? ((z = c(S, D.props)), (z.ref = No(L, S, D)), (z.return = L), z)
            : ((z = va(D.type, D.key, D.props, null, L.mode, z)),
              (z.ref = No(L, S, D)),
              (z.return = L),
              z);
      }
      function K(L, S, D, z) {
        return S === null ||
          S.tag !== 4 ||
          S.stateNode.containerInfo !== D.containerInfo ||
          S.stateNode.implementation !== D.implementation
          ? ((S = nf(D, L.mode, z)), (S.return = L), S)
          : ((S = c(S, D.children || [])), (S.return = L), S);
      }
      function V(L, S, D, z, cA) {
        return S === null || S.tag !== 7
          ? ((S = Or(D, L.mode, z, cA)), (S.return = L), S)
          : ((S = c(S, D)), (S.return = L), S);
      }
      function W(L, S, D) {
        if ((typeof S == "string" && S !== "") || typeof S == "number")
          return (S = rf("" + S, L.mode, D)), (S.return = L), S;
        if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case k:
              return (
                (D = va(S.type, S.key, S.props, null, L.mode, D)),
                (D.ref = No(L, null, S)),
                (D.return = L),
                D
              );
            case O:
              return (S = nf(S, L.mode, D)), (S.return = L), S;
            case AA:
              var z = S._init;
              return W(L, z(S._payload), D);
          }
          if (Bo(S) || G(S))
            return (S = Or(S, L.mode, D, null)), (S.return = L), S;
          Js(L, S);
        }
        return null;
      }
      function _(L, S, D, z) {
        var cA = S !== null ? S.key : null;
        if ((typeof D == "string" && D !== "") || typeof D == "number")
          return cA !== null ? null : y(L, S, "" + D, z);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case k:
              return D.key === cA ? x(L, S, D, z) : null;
            case O:
              return D.key === cA ? K(L, S, D, z) : null;
            case AA:
              return (cA = D._init), _(L, S, cA(D._payload), z);
          }
          if (Bo(D) || G(D)) return cA !== null ? null : V(L, S, D, z, null);
          Js(L, D);
        }
        return null;
      }
      function rA(L, S, D, z, cA) {
        if ((typeof z == "string" && z !== "") || typeof z == "number")
          return (L = L.get(D) || null), y(S, L, "" + z, cA);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case k:
              return (
                (L = L.get(z.key === null ? D : z.key) || null), x(S, L, z, cA)
              );
            case O:
              return (
                (L = L.get(z.key === null ? D : z.key) || null), K(S, L, z, cA)
              );
            case AA:
              var gA = z._init;
              return rA(L, S, D, gA(z._payload), cA);
          }
          if (Bo(z) || G(z))
            return (L = L.get(D) || null), V(S, L, z, cA, null);
          Js(S, z);
        }
        return null;
      }
      function aA(L, S, D, z) {
        for (
          var cA = null, gA = null, pA = S, vA = (S = 0), ne = null;
          pA !== null && vA < D.length;
          vA++
        ) {
          pA.index > vA ? ((ne = pA), (pA = null)) : (ne = pA.sibling);
          var EA = _(L, pA, D[vA], z);
          if (EA === null) {
            pA === null && (pA = ne);
            break;
          }
          A && pA && EA.alternate === null && t(L, pA),
            (S = d(EA, S, vA)),
            gA === null ? (cA = EA) : (gA.sibling = EA),
            (gA = EA),
            (pA = ne);
        }
        if (vA === D.length) return i(L, pA), OA && Sr(L, vA), cA;
        if (pA === null) {
          for (; vA < D.length; vA++)
            (pA = W(L, D[vA], z)),
              pA !== null &&
                ((S = d(pA, S, vA)),
                gA === null ? (cA = pA) : (gA.sibling = pA),
                (gA = pA));
          return OA && Sr(L, vA), cA;
        }
        for (pA = a(L, pA); vA < D.length; vA++)
          (ne = rA(pA, L, vA, D[vA], z)),
            ne !== null &&
              (A &&
                ne.alternate !== null &&
                pA.delete(ne.key === null ? vA : ne.key),
              (S = d(ne, S, vA)),
              gA === null ? (cA = ne) : (gA.sibling = ne),
              (gA = ne));
        return (
          A &&
            pA.forEach(function (Br) {
              return t(L, Br);
            }),
          OA && Sr(L, vA),
          cA
        );
      }
      function lA(L, S, D, z) {
        var cA = G(D);
        if (typeof cA != "function") throw Error(n(150));
        if (((D = cA.call(D)), D == null)) throw Error(n(151));
        for (
          var gA = (cA = null), pA = S, vA = (S = 0), ne = null, EA = D.next();
          pA !== null && !EA.done;
          vA++, EA = D.next()
        ) {
          pA.index > vA ? ((ne = pA), (pA = null)) : (ne = pA.sibling);
          var Br = _(L, pA, EA.value, z);
          if (Br === null) {
            pA === null && (pA = ne);
            break;
          }
          A && pA && Br.alternate === null && t(L, pA),
            (S = d(Br, S, vA)),
            gA === null ? (cA = Br) : (gA.sibling = Br),
            (gA = Br),
            (pA = ne);
        }
        if (EA.done) return i(L, pA), OA && Sr(L, vA), cA;
        if (pA === null) {
          for (; !EA.done; vA++, EA = D.next())
            (EA = W(L, EA.value, z)),
              EA !== null &&
                ((S = d(EA, S, vA)),
                gA === null ? (cA = EA) : (gA.sibling = EA),
                (gA = EA));
          return OA && Sr(L, vA), cA;
        }
        for (pA = a(L, pA); !EA.done; vA++, EA = D.next())
          (EA = rA(pA, L, vA, EA.value, z)),
            EA !== null &&
              (A &&
                EA.alternate !== null &&
                pA.delete(EA.key === null ? vA : EA.key),
              (S = d(EA, S, vA)),
              gA === null ? (cA = EA) : (gA.sibling = EA),
              (gA = EA));
        return (
          A &&
            pA.forEach(function (VH) {
              return t(L, VH);
            }),
          OA && Sr(L, vA),
          cA
        );
      }
      function zA(L, S, D, z) {
        if (
          (typeof D == "object" &&
            D !== null &&
            D.type === P &&
            D.key === null &&
            (D = D.props.children),
          typeof D == "object" && D !== null)
        ) {
          switch (D.$$typeof) {
            case k:
              A: {
                for (var cA = D.key, gA = S; gA !== null; ) {
                  if (gA.key === cA) {
                    if (((cA = D.type), cA === P)) {
                      if (gA.tag === 7) {
                        i(L, gA.sibling),
                          (S = c(gA, D.props.children)),
                          (S.return = L),
                          (L = S);
                        break A;
                      }
                    } else if (
                      gA.elementType === cA ||
                      (typeof cA == "object" &&
                        cA !== null &&
                        cA.$$typeof === AA &&
                        Ch(cA) === gA.type)
                    ) {
                      i(L, gA.sibling),
                        (S = c(gA, D.props)),
                        (S.ref = No(L, gA, D)),
                        (S.return = L),
                        (L = S);
                      break A;
                    }
                    i(L, gA);
                    break;
                  } else t(L, gA);
                  gA = gA.sibling;
                }
                D.type === P
                  ? ((S = Or(D.props.children, L.mode, z, D.key)),
                    (S.return = L),
                    (L = S))
                  : ((z = va(D.type, D.key, D.props, null, L.mode, z)),
                    (z.ref = No(L, S, D)),
                    (z.return = L),
                    (L = z));
              }
              return p(L);
            case O:
              A: {
                for (gA = D.key; S !== null; ) {
                  if (S.key === gA)
                    if (
                      S.tag === 4 &&
                      S.stateNode.containerInfo === D.containerInfo &&
                      S.stateNode.implementation === D.implementation
                    ) {
                      i(L, S.sibling),
                        (S = c(S, D.children || [])),
                        (S.return = L),
                        (L = S);
                      break A;
                    } else {
                      i(L, S);
                      break;
                    }
                  else t(L, S);
                  S = S.sibling;
                }
                (S = nf(D, L.mode, z)), (S.return = L), (L = S);
              }
              return p(L);
            case AA:
              return (gA = D._init), zA(L, S, gA(D._payload), z);
          }
          if (Bo(D)) return aA(L, S, D, z);
          if (G(D)) return lA(L, S, D, z);
          Js(L, D);
        }
        return (typeof D == "string" && D !== "") || typeof D == "number"
          ? ((D = "" + D),
            S !== null && S.tag === 6
              ? (i(L, S.sibling), (S = c(S, D)), (S.return = L), (L = S))
              : (i(L, S), (S = rf(D, L.mode, z)), (S.return = L), (L = S)),
            p(L))
          : i(L, S);
      }
      return zA;
    }
    var In = Qh(!0),
      yh = Qh(!1),
      Ys = rr(null),
      Zs = null,
      Hn = null,
      du = null;
    function Bu() {
      du = Hn = Zs = null;
    }
    function gu(A) {
      var t = Ys.current;
      kA(Ys), (A._currentValue = t);
    }
    function pu(A, t, i) {
      for (; A !== null; ) {
        var a = A.alternate;
        if (
          ((A.childLanes & t) !== t
            ? ((A.childLanes |= t), a !== null && (a.childLanes |= t))
            : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
          A === i)
        )
          break;
        A = A.return;
      }
    }
    function Sn(A, t) {
      (Zs = A),
        (du = Hn = null),
        (A = A.dependencies),
        A !== null &&
          A.firstContext !== null &&
          (A.lanes & t && (Ue = !0), (A.firstContext = null));
    }
    function Me(A) {
      var t = A._currentValue;
      if (du !== A)
        if (((A = { context: A, memoizedValue: t, next: null }), Hn === null)) {
          if (Zs === null) throw Error(n(308));
          (Hn = A), (Zs.dependencies = { lanes: 0, firstContext: A });
        } else Hn = Hn.next = A;
      return t;
    }
    var br = null;
    function wu(A) {
      br === null ? (br = [A]) : br.push(A);
    }
    function Uh(A, t, i, a) {
      var c = t.interleaved;
      return (
        c === null ? ((i.next = i), wu(t)) : ((i.next = c.next), (c.next = i)),
        (t.interleaved = i),
        It(A, a)
      );
    }
    function It(A, t) {
      A.lanes |= t;
      var i = A.alternate;
      for (i !== null && (i.lanes |= t), i = A, A = A.return; A !== null; )
        (A.childLanes |= t),
          (i = A.alternate),
          i !== null && (i.childLanes |= t),
          (i = A),
          (A = A.return);
      return i.tag === 3 ? i.stateNode : null;
    }
    var ir = !1;
    function hu(A) {
      A.updateQueue = {
        baseState: A.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function Fh(A, t) {
      (A = A.updateQueue),
        t.updateQueue === A &&
          (t.updateQueue = {
            baseState: A.baseState,
            firstBaseUpdate: A.firstBaseUpdate,
            lastBaseUpdate: A.lastBaseUpdate,
            shared: A.shared,
            effects: A.effects,
          });
    }
    function Ht(A, t) {
      return {
        eventTime: A,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function sr(A, t, i) {
      var a = A.updateQueue;
      if (a === null) return null;
      if (((a = a.shared), FA & 2)) {
        var c = a.pending;
        return (
          c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
          (a.pending = t),
          It(A, i)
        );
      }
      return (
        (c = a.interleaved),
        c === null ? ((t.next = t), wu(a)) : ((t.next = c.next), (c.next = t)),
        (a.interleaved = t),
        It(A, i)
      );
    }
    function $s(A, t, i) {
      if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (i & 4194240) !== 0))
      ) {
        var a = t.lanes;
        (a &= A.pendingLanes), (i |= a), (t.lanes = i), Lc(A, i);
      }
    }
    function Eh(A, t) {
      var i = A.updateQueue,
        a = A.alternate;
      if (a !== null && ((a = a.updateQueue), i === a)) {
        var c = null,
          d = null;
        if (((i = i.firstBaseUpdate), i !== null)) {
          do {
            var p = {
              eventTime: i.eventTime,
              lane: i.lane,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            };
            d === null ? (c = d = p) : (d = d.next = p), (i = i.next);
          } while (i !== null);
          d === null ? (c = d = t) : (d = d.next = t);
        } else c = d = t;
        (i = {
          baseState: a.baseState,
          firstBaseUpdate: c,
          lastBaseUpdate: d,
          shared: a.shared,
          effects: a.effects,
        }),
          (A.updateQueue = i);
        return;
      }
      (A = i.lastBaseUpdate),
        A === null ? (i.firstBaseUpdate = t) : (A.next = t),
        (i.lastBaseUpdate = t);
    }
    function qs(A, t, i, a) {
      var c = A.updateQueue;
      ir = !1;
      var d = c.firstBaseUpdate,
        p = c.lastBaseUpdate,
        y = c.shared.pending;
      if (y !== null) {
        c.shared.pending = null;
        var x = y,
          K = x.next;
        (x.next = null), p === null ? (d = K) : (p.next = K), (p = x);
        var V = A.alternate;
        V !== null &&
          ((V = V.updateQueue),
          (y = V.lastBaseUpdate),
          y !== p &&
            (y === null ? (V.firstBaseUpdate = K) : (y.next = K),
            (V.lastBaseUpdate = x)));
      }
      if (d !== null) {
        var W = c.baseState;
        (p = 0), (V = K = x = null), (y = d);
        do {
          var _ = y.lane,
            rA = y.eventTime;
          if ((a & _) === _) {
            V !== null &&
              (V = V.next =
                {
                  eventTime: rA,
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: y.callback,
                  next: null,
                });
            A: {
              var aA = A,
                lA = y;
              switch (((_ = t), (rA = i), lA.tag)) {
                case 1:
                  if (((aA = lA.payload), typeof aA == "function")) {
                    W = aA.call(rA, W, _);
                    break A;
                  }
                  W = aA;
                  break A;
                case 3:
                  aA.flags = (aA.flags & -65537) | 128;
                case 0:
                  if (
                    ((aA = lA.payload),
                    (_ = typeof aA == "function" ? aA.call(rA, W, _) : aA),
                    _ == null)
                  )
                    break A;
                  W = Z({}, W, _);
                  break A;
                case 2:
                  ir = !0;
              }
            }
            y.callback !== null &&
              y.lane !== 0 &&
              ((A.flags |= 64),
              (_ = c.effects),
              _ === null ? (c.effects = [y]) : _.push(y));
          } else
            (rA = {
              eventTime: rA,
              lane: _,
              tag: y.tag,
              payload: y.payload,
              callback: y.callback,
              next: null,
            }),
              V === null ? ((K = V = rA), (x = W)) : (V = V.next = rA),
              (p |= _);
          if (((y = y.next), y === null)) {
            if (((y = c.shared.pending), y === null)) break;
            (_ = y),
              (y = _.next),
              (_.next = null),
              (c.lastBaseUpdate = _),
              (c.shared.pending = null);
          }
        } while (!0);
        if (
          (V === null && (x = W),
          (c.baseState = x),
          (c.firstBaseUpdate = K),
          (c.lastBaseUpdate = V),
          (t = c.shared.interleaved),
          t !== null)
        ) {
          c = t;
          do (p |= c.lane), (c = c.next);
          while (c !== t);
        } else d === null && (c.shared.lanes = 0);
        (Dr |= p), (A.lanes = p), (A.memoizedState = W);
      }
    }
    function xh(A, t, i) {
      if (((A = t.effects), (t.effects = null), A !== null))
        for (t = 0; t < A.length; t++) {
          var a = A[t],
            c = a.callback;
          if (c !== null) {
            if (((a.callback = null), (a = i), typeof c != "function"))
              throw Error(n(191, c));
            c.call(a);
          }
        }
    }
    var Mo = {},
      ut = rr(Mo),
      Po = rr(Mo),
      _o = rr(Mo);
    function Lr(A) {
      if (A === Mo) throw Error(n(174));
      return A;
    }
    function vu(A, t) {
      switch ((TA(_o, t), TA(Po, A), TA(ut, Mo), (A = t.nodeType), A)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : mc(null, "");
          break;
        default:
          (A = A === 8 ? t.parentNode : t),
            (t = A.namespaceURI || null),
            (A = A.tagName),
            (t = mc(t, A));
      }
      kA(ut), TA(ut, t);
    }
    function bn() {
      kA(ut), kA(Po), kA(_o);
    }
    function Ih(A) {
      Lr(_o.current);
      var t = Lr(ut.current),
        i = mc(t, A.type);
      t !== i && (TA(Po, A), TA(ut, i));
    }
    function mu(A) {
      Po.current === A && (kA(ut), kA(Po));
    }
    var PA = rr(0);
    function Aa(A) {
      for (var t = A; t !== null; ) {
        if (t.tag === 13) {
          var i = t.memoizedState;
          if (
            i !== null &&
            ((i = i.dehydrated),
            i === null || i.data === "$?" || i.data === "$!")
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === A) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === A) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var Cu = [];
    function Qu() {
      for (var A = 0; A < Cu.length; A++)
        Cu[A]._workInProgressVersionPrimary = null;
      Cu.length = 0;
    }
    var ea = T.ReactCurrentDispatcher,
      yu = T.ReactCurrentBatchConfig,
      Tr = 0,
      _A = null,
      qA = null,
      te = null,
      ta = !1,
      Vo = !1,
      Go = 0,
      uH = 0;
    function de() {
      throw Error(n(321));
    }
    function Uu(A, t) {
      if (t === null) return !1;
      for (var i = 0; i < t.length && i < A.length; i++)
        if (!Ze(A[i], t[i])) return !1;
      return !0;
    }
    function Fu(A, t, i, a, c, d) {
      if (
        ((Tr = d),
        (_A = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ea.current = A === null || A.memoizedState === null ? gH : pH),
        (A = i(a, c)),
        Vo)
      ) {
        d = 0;
        do {
          if (((Vo = !1), (Go = 0), 25 <= d)) throw Error(n(301));
          (d += 1),
            (te = qA = null),
            (t.updateQueue = null),
            (ea.current = wH),
            (A = i(a, c));
        } while (Vo);
      }
      if (
        ((ea.current = oa),
        (t = qA !== null && qA.next !== null),
        (Tr = 0),
        (te = qA = _A = null),
        (ta = !1),
        t)
      )
        throw Error(n(300));
      return A;
    }
    function Eu() {
      var A = Go !== 0;
      return (Go = 0), A;
    }
    function ft() {
      var A = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return te === null ? (_A.memoizedState = te = A) : (te = te.next = A), te;
    }
    function Pe() {
      if (qA === null) {
        var A = _A.alternate;
        A = A !== null ? A.memoizedState : null;
      } else A = qA.next;
      var t = te === null ? _A.memoizedState : te.next;
      if (t !== null) (te = t), (qA = A);
      else {
        if (A === null) throw Error(n(310));
        (qA = A),
          (A = {
            memoizedState: qA.memoizedState,
            baseState: qA.baseState,
            baseQueue: qA.baseQueue,
            queue: qA.queue,
            next: null,
          }),
          te === null ? (_A.memoizedState = te = A) : (te = te.next = A);
      }
      return te;
    }
    function Wo(A, t) {
      return typeof t == "function" ? t(A) : t;
    }
    function xu(A) {
      var t = Pe(),
        i = t.queue;
      if (i === null) throw Error(n(311));
      i.lastRenderedReducer = A;
      var a = qA,
        c = a.baseQueue,
        d = i.pending;
      if (d !== null) {
        if (c !== null) {
          var p = c.next;
          (c.next = d.next), (d.next = p);
        }
        (a.baseQueue = c = d), (i.pending = null);
      }
      if (c !== null) {
        (d = c.next), (a = a.baseState);
        var y = (p = null),
          x = null,
          K = d;
        do {
          var V = K.lane;
          if ((Tr & V) === V)
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  action: K.action,
                  hasEagerState: K.hasEagerState,
                  eagerState: K.eagerState,
                  next: null,
                }),
              (a = K.hasEagerState ? K.eagerState : A(a, K.action));
          else {
            var W = {
              lane: V,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null,
            };
            x === null ? ((y = x = W), (p = a)) : (x = x.next = W),
              (_A.lanes |= V),
              (Dr |= V);
          }
          K = K.next;
        } while (K !== null && K !== d);
        x === null ? (p = a) : (x.next = y),
          Ze(a, t.memoizedState) || (Ue = !0),
          (t.memoizedState = a),
          (t.baseState = p),
          (t.baseQueue = x),
          (i.lastRenderedState = a);
      }
      if (((A = i.interleaved), A !== null)) {
        c = A;
        do (d = c.lane), (_A.lanes |= d), (Dr |= d), (c = c.next);
        while (c !== A);
      } else c === null && (i.lanes = 0);
      return [t.memoizedState, i.dispatch];
    }
    function Iu(A) {
      var t = Pe(),
        i = t.queue;
      if (i === null) throw Error(n(311));
      i.lastRenderedReducer = A;
      var a = i.dispatch,
        c = i.pending,
        d = t.memoizedState;
      if (c !== null) {
        i.pending = null;
        var p = (c = c.next);
        do (d = A(d, p.action)), (p = p.next);
        while (p !== c);
        Ze(d, t.memoizedState) || (Ue = !0),
          (t.memoizedState = d),
          t.baseQueue === null && (t.baseState = d),
          (i.lastRenderedState = d);
      }
      return [d, a];
    }
    function Hh() {}
    function Sh(A, t) {
      var i = _A,
        a = Pe(),
        c = t(),
        d = !Ze(a.memoizedState, c);
      if (
        (d && ((a.memoizedState = c), (Ue = !0)),
        (a = a.queue),
        Hu(Th.bind(null, i, a, A), [A]),
        a.getSnapshot !== t || d || (te !== null && te.memoizedState.tag & 1))
      ) {
        if (
          ((i.flags |= 2048),
          jo(9, Lh.bind(null, i, a, c, t), void 0, null),
          re === null)
        )
          throw Error(n(349));
        Tr & 30 || bh(i, t, c);
      }
      return c;
    }
    function bh(A, t, i) {
      (A.flags |= 16384),
        (A = { getSnapshot: t, value: i }),
        (t = _A.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (_A.updateQueue = t),
            (t.stores = [A]))
          : ((i = t.stores), i === null ? (t.stores = [A]) : i.push(A));
    }
    function Lh(A, t, i, a) {
      (t.value = i), (t.getSnapshot = a), Dh(t) && Kh(A);
    }
    function Th(A, t, i) {
      return i(function () {
        Dh(t) && Kh(A);
      });
    }
    function Dh(A) {
      var t = A.getSnapshot;
      A = A.value;
      try {
        var i = t();
        return !Ze(A, i);
      } catch {
        return !0;
      }
    }
    function Kh(A) {
      var t = It(A, 1);
      t !== null && tt(t, A, 1, -1);
    }
    function kh(A) {
      var t = ft();
      return (
        typeof A == "function" && (A = A()),
        (t.memoizedState = t.baseState = A),
        (A = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Wo,
          lastRenderedState: A,
        }),
        (t.queue = A),
        (A = A.dispatch = BH.bind(null, _A, A)),
        [t.memoizedState, A]
      );
    }
    function jo(A, t, i, a) {
      return (
        (A = { tag: A, create: t, destroy: i, deps: a, next: null }),
        (t = _A.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (_A.updateQueue = t),
            (t.lastEffect = A.next = A))
          : ((i = t.lastEffect),
            i === null
              ? (t.lastEffect = A.next = A)
              : ((a = i.next), (i.next = A), (A.next = a), (t.lastEffect = A))),
        A
      );
    }
    function Rh() {
      return Pe().memoizedState;
    }
    function ra(A, t, i, a) {
      var c = ft();
      (_A.flags |= A),
        (c.memoizedState = jo(1 | t, i, void 0, a === void 0 ? null : a));
    }
    function na(A, t, i, a) {
      var c = Pe();
      a = a === void 0 ? null : a;
      var d = void 0;
      if (qA !== null) {
        var p = qA.memoizedState;
        if (((d = p.destroy), a !== null && Uu(a, p.deps))) {
          c.memoizedState = jo(t, i, d, a);
          return;
        }
      }
      (_A.flags |= A), (c.memoizedState = jo(1 | t, i, d, a));
    }
    function Oh(A, t) {
      return ra(8390656, 8, A, t);
    }
    function Hu(A, t) {
      return na(2048, 8, A, t);
    }
    function Nh(A, t) {
      return na(4, 2, A, t);
    }
    function Mh(A, t) {
      return na(4, 4, A, t);
    }
    function Ph(A, t) {
      if (typeof t == "function")
        return (
          (A = A()),
          t(A),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (A = A()),
          (t.current = A),
          function () {
            t.current = null;
          }
        );
    }
    function _h(A, t, i) {
      return (
        (i = i != null ? i.concat([A]) : null), na(4, 4, Ph.bind(null, t, A), i)
      );
    }
    function Su() {}
    function Vh(A, t) {
      var i = Pe();
      t = t === void 0 ? null : t;
      var a = i.memoizedState;
      return a !== null && t !== null && Uu(t, a[1])
        ? a[0]
        : ((i.memoizedState = [A, t]), A);
    }
    function Gh(A, t) {
      var i = Pe();
      t = t === void 0 ? null : t;
      var a = i.memoizedState;
      return a !== null && t !== null && Uu(t, a[1])
        ? a[0]
        : ((A = A()), (i.memoizedState = [A, t]), A);
    }
    function Wh(A, t, i) {
      return Tr & 21
        ? (Ze(i, t) ||
            ((i = Cw()), (_A.lanes |= i), (Dr |= i), (A.baseState = !0)),
          t)
        : (A.baseState && ((A.baseState = !1), (Ue = !0)),
          (A.memoizedState = i));
    }
    function fH(A, t) {
      var i = HA;
      (HA = i !== 0 && 4 > i ? i : 4), A(!0);
      var a = yu.transition;
      yu.transition = {};
      try {
        A(!1), t();
      } finally {
        (HA = i), (yu.transition = a);
      }
    }
    function jh() {
      return Pe().memoizedState;
    }
    function dH(A, t, i) {
      var a = ur(A);
      if (
        ((i = {
          lane: a,
          action: i,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Xh(A))
      )
        zh(t, i);
      else if (((i = Uh(A, t, i, a)), i !== null)) {
        var c = ve();
        tt(i, A, a, c), Jh(i, t, a);
      }
    }
    function BH(A, t, i) {
      var a = ur(A),
        c = {
          lane: a,
          action: i,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (Xh(A)) zh(t, c);
      else {
        var d = A.alternate;
        if (
          A.lanes === 0 &&
          (d === null || d.lanes === 0) &&
          ((d = t.lastRenderedReducer), d !== null)
        )
          try {
            var p = t.lastRenderedState,
              y = d(p, i);
            if (((c.hasEagerState = !0), (c.eagerState = y), Ze(y, p))) {
              var x = t.interleaved;
              x === null
                ? ((c.next = c), wu(t))
                : ((c.next = x.next), (x.next = c)),
                (t.interleaved = c);
              return;
            }
          } catch {
          } finally {
          }
        (i = Uh(A, t, c, a)),
          i !== null && ((c = ve()), tt(i, A, a, c), Jh(i, t, a));
      }
    }
    function Xh(A) {
      var t = A.alternate;
      return A === _A || (t !== null && t === _A);
    }
    function zh(A, t) {
      Vo = ta = !0;
      var i = A.pending;
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (A.pending = t);
    }
    function Jh(A, t, i) {
      if (i & 4194240) {
        var a = t.lanes;
        (a &= A.pendingLanes), (i |= a), (t.lanes = i), Lc(A, i);
      }
    }
    var oa = {
        readContext: Me,
        useCallback: de,
        useContext: de,
        useEffect: de,
        useImperativeHandle: de,
        useInsertionEffect: de,
        useLayoutEffect: de,
        useMemo: de,
        useReducer: de,
        useRef: de,
        useState: de,
        useDebugValue: de,
        useDeferredValue: de,
        useTransition: de,
        useMutableSource: de,
        useSyncExternalStore: de,
        useId: de,
        unstable_isNewReconciler: !1,
      },
      gH = {
        readContext: Me,
        useCallback: function (A, t) {
          return (ft().memoizedState = [A, t === void 0 ? null : t]), A;
        },
        useContext: Me,
        useEffect: Oh,
        useImperativeHandle: function (A, t, i) {
          return (
            (i = i != null ? i.concat([A]) : null),
            ra(4194308, 4, Ph.bind(null, t, A), i)
          );
        },
        useLayoutEffect: function (A, t) {
          return ra(4194308, 4, A, t);
        },
        useInsertionEffect: function (A, t) {
          return ra(4, 2, A, t);
        },
        useMemo: function (A, t) {
          var i = ft();
          return (
            (t = t === void 0 ? null : t),
            (A = A()),
            (i.memoizedState = [A, t]),
            A
          );
        },
        useReducer: function (A, t, i) {
          var a = ft();
          return (
            (t = i !== void 0 ? i(t) : t),
            (a.memoizedState = a.baseState = t),
            (A = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: A,
              lastRenderedState: t,
            }),
            (a.queue = A),
            (A = A.dispatch = dH.bind(null, _A, A)),
            [a.memoizedState, A]
          );
        },
        useRef: function (A) {
          var t = ft();
          return (A = { current: A }), (t.memoizedState = A);
        },
        useState: kh,
        useDebugValue: Su,
        useDeferredValue: function (A) {
          return (ft().memoizedState = A);
        },
        useTransition: function () {
          var A = kh(!1),
            t = A[0];
          return (A = fH.bind(null, A[1])), (ft().memoizedState = A), [t, A];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (A, t, i) {
          var a = _A,
            c = ft();
          if (OA) {
            if (i === void 0) throw Error(n(407));
            i = i();
          } else {
            if (((i = t()), re === null)) throw Error(n(349));
            Tr & 30 || bh(a, t, i);
          }
          c.memoizedState = i;
          var d = { value: i, getSnapshot: t };
          return (
            (c.queue = d),
            Oh(Th.bind(null, a, d, A), [A]),
            (a.flags |= 2048),
            jo(9, Lh.bind(null, a, d, i, t), void 0, null),
            i
          );
        },
        useId: function () {
          var A = ft(),
            t = re.identifierPrefix;
          if (OA) {
            var i = xt,
              a = Et;
            (i = (a & ~(1 << (32 - Ye(a) - 1))).toString(32) + i),
              (t = ":" + t + "R" + i),
              (i = Go++),
              0 < i && (t += "H" + i.toString(32)),
              (t += ":");
          } else (i = uH++), (t = ":" + t + "r" + i.toString(32) + ":");
          return (A.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      pH = {
        readContext: Me,
        useCallback: Vh,
        useContext: Me,
        useEffect: Hu,
        useImperativeHandle: _h,
        useInsertionEffect: Nh,
        useLayoutEffect: Mh,
        useMemo: Gh,
        useReducer: xu,
        useRef: Rh,
        useState: function () {
          return xu(Wo);
        },
        useDebugValue: Su,
        useDeferredValue: function (A) {
          var t = Pe();
          return Wh(t, qA.memoizedState, A);
        },
        useTransition: function () {
          var A = xu(Wo)[0],
            t = Pe().memoizedState;
          return [A, t];
        },
        useMutableSource: Hh,
        useSyncExternalStore: Sh,
        useId: jh,
        unstable_isNewReconciler: !1,
      },
      wH = {
        readContext: Me,
        useCallback: Vh,
        useContext: Me,
        useEffect: Hu,
        useImperativeHandle: _h,
        useInsertionEffect: Nh,
        useLayoutEffect: Mh,
        useMemo: Gh,
        useReducer: Iu,
        useRef: Rh,
        useState: function () {
          return Iu(Wo);
        },
        useDebugValue: Su,
        useDeferredValue: function (A) {
          var t = Pe();
          return qA === null
            ? (t.memoizedState = A)
            : Wh(t, qA.memoizedState, A);
        },
        useTransition: function () {
          var A = Iu(Wo)[0],
            t = Pe().memoizedState;
          return [A, t];
        },
        useMutableSource: Hh,
        useSyncExternalStore: Sh,
        useId: jh,
        unstable_isNewReconciler: !1,
      };
    function qe(A, t) {
      if (A && A.defaultProps) {
        (t = Z({}, t)), (A = A.defaultProps);
        for (var i in A) t[i] === void 0 && (t[i] = A[i]);
        return t;
      }
      return t;
    }
    function bu(A, t, i, a) {
      (t = A.memoizedState),
        (i = i(a, t)),
        (i = i == null ? t : Z({}, t, i)),
        (A.memoizedState = i),
        A.lanes === 0 && (A.updateQueue.baseState = i);
    }
    var ia = {
      isMounted: function (A) {
        return (A = A._reactInternals) ? Er(A) === A : !1;
      },
      enqueueSetState: function (A, t, i) {
        A = A._reactInternals;
        var a = ve(),
          c = ur(A),
          d = Ht(a, c);
        (d.payload = t),
          i != null && (d.callback = i),
          (t = sr(A, d, c)),
          t !== null && (tt(t, A, c, a), $s(t, A, c));
      },
      enqueueReplaceState: function (A, t, i) {
        A = A._reactInternals;
        var a = ve(),
          c = ur(A),
          d = Ht(a, c);
        (d.tag = 1),
          (d.payload = t),
          i != null && (d.callback = i),
          (t = sr(A, d, c)),
          t !== null && (tt(t, A, c, a), $s(t, A, c));
      },
      enqueueForceUpdate: function (A, t) {
        A = A._reactInternals;
        var i = ve(),
          a = ur(A),
          c = Ht(i, a);
        (c.tag = 2),
          t != null && (c.callback = t),
          (t = sr(A, c, a)),
          t !== null && (tt(t, A, a, i), $s(t, A, a));
      },
    };
    function Yh(A, t, i, a, c, d, p) {
      return (
        (A = A.stateNode),
        typeof A.shouldComponentUpdate == "function"
          ? A.shouldComponentUpdate(a, d, p)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Lo(i, a) || !Lo(c, d)
            : !0
      );
    }
    function Zh(A, t, i) {
      var a = !1,
        c = nr,
        d = t.contextType;
      return (
        typeof d == "object" && d !== null
          ? (d = Me(d))
          : ((c = ye(t) ? Ir : fe.current),
            (a = t.contextTypes),
            (d = (a = a != null) ? Un(A, c) : nr)),
        (t = new t(i, d)),
        (A.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = ia),
        (A.stateNode = t),
        (t._reactInternals = A),
        a &&
          ((A = A.stateNode),
          (A.__reactInternalMemoizedUnmaskedChildContext = c),
          (A.__reactInternalMemoizedMaskedChildContext = d)),
        t
      );
    }
    function $h(A, t, i, a) {
      (A = t.state),
        typeof t.componentWillReceiveProps == "function" &&
          t.componentWillReceiveProps(i, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
          t.UNSAFE_componentWillReceiveProps(i, a),
        t.state !== A && ia.enqueueReplaceState(t, t.state, null);
    }
    function Lu(A, t, i, a) {
      var c = A.stateNode;
      (c.props = i), (c.state = A.memoizedState), (c.refs = {}), hu(A);
      var d = t.contextType;
      typeof d == "object" && d !== null
        ? (c.context = Me(d))
        : ((d = ye(t) ? Ir : fe.current), (c.context = Un(A, d))),
        (c.state = A.memoizedState),
        (d = t.getDerivedStateFromProps),
        typeof d == "function" && (bu(A, t, d, i), (c.state = A.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((t = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          t !== c.state && ia.enqueueReplaceState(c, c.state, null),
          qs(A, i, c, a),
          (c.state = A.memoizedState)),
        typeof c.componentDidMount == "function" && (A.flags |= 4194308);
    }
    function Ln(A, t) {
      try {
        var i = "",
          a = t;
        do (i += wA(a)), (a = a.return);
        while (a);
        var c = i;
      } catch (d) {
        c =
          `
Error generating stack: ` +
          d.message +
          `
` +
          d.stack;
      }
      return { value: A, source: t, stack: c, digest: null };
    }
    function Tu(A, t, i) {
      return { value: A, source: null, stack: i ?? null, digest: t ?? null };
    }
    function Du(A, t) {
      try {
        console.error(t.value);
      } catch (i) {
        setTimeout(function () {
          throw i;
        });
      }
    }
    var hH = typeof WeakMap == "function" ? WeakMap : Map;
    function qh(A, t, i) {
      (i = Ht(-1, i)), (i.tag = 3), (i.payload = { element: null });
      var a = t.value;
      return (
        (i.callback = function () {
          da || ((da = !0), (Ju = a)), Du(A, t);
        }),
        i
      );
    }
    function A0(A, t, i) {
      (i = Ht(-1, i)), (i.tag = 3);
      var a = A.type.getDerivedStateFromError;
      if (typeof a == "function") {
        var c = t.value;
        (i.payload = function () {
          return a(c);
        }),
          (i.callback = function () {
            Du(A, t);
          });
      }
      var d = A.stateNode;
      return (
        d !== null &&
          typeof d.componentDidCatch == "function" &&
          (i.callback = function () {
            Du(A, t),
              typeof a != "function" &&
                (lr === null ? (lr = new Set([this])) : lr.add(this));
            var p = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: p !== null ? p : "",
            });
          }),
        i
      );
    }
    function e0(A, t, i) {
      var a = A.pingCache;
      if (a === null) {
        a = A.pingCache = new hH();
        var c = new Set();
        a.set(t, c);
      } else (c = a.get(t)), c === void 0 && ((c = new Set()), a.set(t, c));
      c.has(i) || (c.add(i), (A = LH.bind(null, A, t, i)), t.then(A, A));
    }
    function t0(A) {
      do {
        var t;
        if (
          ((t = A.tag === 13) &&
            ((t = A.memoizedState),
            (t = t !== null ? t.dehydrated !== null : !0)),
          t)
        )
          return A;
        A = A.return;
      } while (A !== null);
      return null;
    }
    function r0(A, t, i, a, c) {
      return A.mode & 1
        ? ((A.flags |= 65536), (A.lanes = c), A)
        : (A === t
            ? (A.flags |= 65536)
            : ((A.flags |= 128),
              (i.flags |= 131072),
              (i.flags &= -52805),
              i.tag === 1 &&
                (i.alternate === null
                  ? (i.tag = 17)
                  : ((t = Ht(-1, 1)), (t.tag = 2), sr(i, t, 1))),
              (i.lanes |= 1)),
          A);
    }
    var vH = T.ReactCurrentOwner,
      Ue = !1;
    function he(A, t, i, a) {
      t.child = A === null ? yh(t, null, i, a) : In(t, A.child, i, a);
    }
    function n0(A, t, i, a, c) {
      i = i.render;
      var d = t.ref;
      return (
        Sn(t, c),
        (a = Fu(A, t, i, a, d, c)),
        (i = Eu()),
        A !== null && !Ue
          ? ((t.updateQueue = A.updateQueue),
            (t.flags &= -2053),
            (A.lanes &= ~c),
            St(A, t, c))
          : (OA && i && au(t), (t.flags |= 1), he(A, t, a, c), t.child)
      );
    }
    function o0(A, t, i, a, c) {
      if (A === null) {
        var d = i.type;
        return typeof d == "function" &&
          !tf(d) &&
          d.defaultProps === void 0 &&
          i.compare === null &&
          i.defaultProps === void 0
          ? ((t.tag = 15), (t.type = d), i0(A, t, d, a, c))
          : ((A = va(i.type, null, a, t, t.mode, c)),
            (A.ref = t.ref),
            (A.return = t),
            (t.child = A));
      }
      if (((d = A.child), !(A.lanes & c))) {
        var p = d.memoizedProps;
        if (
          ((i = i.compare),
          (i = i !== null ? i : Lo),
          i(p, a) && A.ref === t.ref)
        )
          return St(A, t, c);
      }
      return (
        (t.flags |= 1),
        (A = dr(d, a)),
        (A.ref = t.ref),
        (A.return = t),
        (t.child = A)
      );
    }
    function i0(A, t, i, a, c) {
      if (A !== null) {
        var d = A.memoizedProps;
        if (Lo(d, a) && A.ref === t.ref)
          if (((Ue = !1), (t.pendingProps = a = d), (A.lanes & c) !== 0))
            A.flags & 131072 && (Ue = !0);
          else return (t.lanes = A.lanes), St(A, t, c);
      }
      return Ku(A, t, i, a, c);
    }
    function s0(A, t, i) {
      var a = t.pendingProps,
        c = a.children,
        d = A !== null ? A.memoizedState : null;
      if (a.mode === "hidden")
        if (!(t.mode & 1))
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            TA(Dn, Te),
            (Te |= i);
        else {
          if (!(i & 1073741824))
            return (
              (A = d !== null ? d.baseLanes | i : i),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: A,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              TA(Dn, Te),
              (Te |= A),
              null
            );
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (a = d !== null ? d.baseLanes : i),
            TA(Dn, Te),
            (Te |= a);
        }
      else
        d !== null
          ? ((a = d.baseLanes | i), (t.memoizedState = null))
          : (a = i),
          TA(Dn, Te),
          (Te |= a);
      return he(A, t, c, i), t.child;
    }
    function a0(A, t) {
      var i = t.ref;
      ((A === null && i !== null) || (A !== null && A.ref !== i)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Ku(A, t, i, a, c) {
      var d = ye(i) ? Ir : fe.current;
      return (
        (d = Un(t, d)),
        Sn(t, c),
        (i = Fu(A, t, i, a, d, c)),
        (a = Eu()),
        A !== null && !Ue
          ? ((t.updateQueue = A.updateQueue),
            (t.flags &= -2053),
            (A.lanes &= ~c),
            St(A, t, c))
          : (OA && a && au(t), (t.flags |= 1), he(A, t, i, c), t.child)
      );
    }
    function l0(A, t, i, a, c) {
      if (ye(i)) {
        var d = !0;
        Gs(t);
      } else d = !1;
      if ((Sn(t, c), t.stateNode === null))
        aa(A, t), Zh(t, i, a), Lu(t, i, a, c), (a = !0);
      else if (A === null) {
        var p = t.stateNode,
          y = t.memoizedProps;
        p.props = y;
        var x = p.context,
          K = i.contextType;
        typeof K == "object" && K !== null
          ? (K = Me(K))
          : ((K = ye(i) ? Ir : fe.current), (K = Un(t, K)));
        var V = i.getDerivedStateFromProps,
          W =
            typeof V == "function" ||
            typeof p.getSnapshotBeforeUpdate == "function";
        W ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((y !== a || x !== K) && $h(t, p, a, K)),
          (ir = !1);
        var _ = t.memoizedState;
        (p.state = _),
          qs(t, a, p, c),
          (x = t.memoizedState),
          y !== a || _ !== x || Qe.current || ir
            ? (typeof V == "function" &&
                (bu(t, i, V, a), (x = t.memoizedState)),
              (y = ir || Yh(t, i, y, a, _, x, K))
                ? (W ||
                    (typeof p.UNSAFE_componentWillMount != "function" &&
                      typeof p.componentWillMount != "function") ||
                    (typeof p.componentWillMount == "function" &&
                      p.componentWillMount(),
                    typeof p.UNSAFE_componentWillMount == "function" &&
                      p.UNSAFE_componentWillMount()),
                  typeof p.componentDidMount == "function" &&
                    (t.flags |= 4194308))
                : (typeof p.componentDidMount == "function" &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = a),
                  (t.memoizedState = x)),
              (p.props = a),
              (p.state = x),
              (p.context = K),
              (a = y))
            : (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
              (a = !1));
      } else {
        (p = t.stateNode),
          Fh(A, t),
          (y = t.memoizedProps),
          (K = t.type === t.elementType ? y : qe(t.type, y)),
          (p.props = K),
          (W = t.pendingProps),
          (_ = p.context),
          (x = i.contextType),
          typeof x == "object" && x !== null
            ? (x = Me(x))
            : ((x = ye(i) ? Ir : fe.current), (x = Un(t, x)));
        var rA = i.getDerivedStateFromProps;
        (V =
          typeof rA == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function") ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((y !== W || _ !== x) && $h(t, p, a, x)),
          (ir = !1),
          (_ = t.memoizedState),
          (p.state = _),
          qs(t, a, p, c);
        var aA = t.memoizedState;
        y !== W || _ !== aA || Qe.current || ir
          ? (typeof rA == "function" &&
              (bu(t, i, rA, a), (aA = t.memoizedState)),
            (K = ir || Yh(t, i, K, a, _, aA, x) || !1)
              ? (V ||
                  (typeof p.UNSAFE_componentWillUpdate != "function" &&
                    typeof p.componentWillUpdate != "function") ||
                  (typeof p.componentWillUpdate == "function" &&
                    p.componentWillUpdate(a, aA, x),
                  typeof p.UNSAFE_componentWillUpdate == "function" &&
                    p.UNSAFE_componentWillUpdate(a, aA, x)),
                typeof p.componentDidUpdate == "function" && (t.flags |= 4),
                typeof p.getSnapshotBeforeUpdate == "function" &&
                  (t.flags |= 1024))
              : (typeof p.componentDidUpdate != "function" ||
                  (y === A.memoizedProps && _ === A.memoizedState) ||
                  (t.flags |= 4),
                typeof p.getSnapshotBeforeUpdate != "function" ||
                  (y === A.memoizedProps && _ === A.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = a),
                (t.memoizedState = aA)),
            (p.props = a),
            (p.state = aA),
            (p.context = x),
            (a = K))
          : (typeof p.componentDidUpdate != "function" ||
              (y === A.memoizedProps && _ === A.memoizedState) ||
              (t.flags |= 4),
            typeof p.getSnapshotBeforeUpdate != "function" ||
              (y === A.memoizedProps && _ === A.memoizedState) ||
              (t.flags |= 1024),
            (a = !1));
      }
      return ku(A, t, i, a, d, c);
    }
    function ku(A, t, i, a, c, d) {
      a0(A, t);
      var p = (t.flags & 128) !== 0;
      if (!a && !p) return c && Bh(t, i, !1), St(A, t, d);
      (a = t.stateNode), (vH.current = t);
      var y =
        p && typeof i.getDerivedStateFromError != "function"
          ? null
          : a.render();
      return (
        (t.flags |= 1),
        A !== null && p
          ? ((t.child = In(t, A.child, null, d)), (t.child = In(t, null, y, d)))
          : he(A, t, y, d),
        (t.memoizedState = a.state),
        c && Bh(t, i, !0),
        t.child
      );
    }
    function c0(A) {
      var t = A.stateNode;
      t.pendingContext
        ? fh(A, t.pendingContext, t.pendingContext !== t.context)
        : t.context && fh(A, t.context, !1),
        vu(A, t.containerInfo);
    }
    function u0(A, t, i, a, c) {
      return xn(), fu(c), (t.flags |= 256), he(A, t, i, a), t.child;
    }
    var Ru = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Ou(A) {
      return { baseLanes: A, cachePool: null, transitions: null };
    }
    function f0(A, t, i) {
      var a = t.pendingProps,
        c = PA.current,
        d = !1,
        p = (t.flags & 128) !== 0,
        y;
      if (
        ((y = p) ||
          (y = A !== null && A.memoizedState === null ? !1 : (c & 2) !== 0),
        y
          ? ((d = !0), (t.flags &= -129))
          : (A === null || A.memoizedState !== null) && (c |= 1),
        TA(PA, c & 1),
        A === null)
      )
        return (
          uu(t),
          (A = t.memoizedState),
          A !== null && ((A = A.dehydrated), A !== null)
            ? (t.mode & 1
                ? A.data === "$!"
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824)
                : (t.lanes = 1),
              null)
            : ((p = a.children),
              (A = a.fallback),
              d
                ? ((a = t.mode),
                  (d = t.child),
                  (p = { mode: "hidden", children: p }),
                  !(a & 1) && d !== null
                    ? ((d.childLanes = 0), (d.pendingProps = p))
                    : (d = ma(p, a, 0, null)),
                  (A = Or(A, a, i, null)),
                  (d.return = t),
                  (A.return = t),
                  (d.sibling = A),
                  (t.child = d),
                  (t.child.memoizedState = Ou(i)),
                  (t.memoizedState = Ru),
                  A)
                : Nu(t, p))
        );
      if (
        ((c = A.memoizedState), c !== null && ((y = c.dehydrated), y !== null))
      )
        return mH(A, t, p, a, y, c, i);
      if (d) {
        (d = a.fallback), (p = t.mode), (c = A.child), (y = c.sibling);
        var x = { mode: "hidden", children: a.children };
        return (
          !(p & 1) && t.child !== c
            ? ((a = t.child),
              (a.childLanes = 0),
              (a.pendingProps = x),
              (t.deletions = null))
            : ((a = dr(c, x)), (a.subtreeFlags = c.subtreeFlags & 14680064)),
          y !== null
            ? (d = dr(y, d))
            : ((d = Or(d, p, i, null)), (d.flags |= 2)),
          (d.return = t),
          (a.return = t),
          (a.sibling = d),
          (t.child = a),
          (a = d),
          (d = t.child),
          (p = A.child.memoizedState),
          (p =
            p === null
              ? Ou(i)
              : {
                  baseLanes: p.baseLanes | i,
                  cachePool: null,
                  transitions: p.transitions,
                }),
          (d.memoizedState = p),
          (d.childLanes = A.childLanes & ~i),
          (t.memoizedState = Ru),
          a
        );
      }
      return (
        (d = A.child),
        (A = d.sibling),
        (a = dr(d, { mode: "visible", children: a.children })),
        !(t.mode & 1) && (a.lanes = i),
        (a.return = t),
        (a.sibling = null),
        A !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [A]), (t.flags |= 16)) : i.push(A)),
        (t.child = a),
        (t.memoizedState = null),
        a
      );
    }
    function Nu(A, t) {
      return (
        (t = ma({ mode: "visible", children: t }, A.mode, 0, null)),
        (t.return = A),
        (A.child = t)
      );
    }
    function sa(A, t, i, a) {
      return (
        a !== null && fu(a),
        In(t, A.child, null, i),
        (A = Nu(t, t.pendingProps.children)),
        (A.flags |= 2),
        (t.memoizedState = null),
        A
      );
    }
    function mH(A, t, i, a, c, d, p) {
      if (i)
        return t.flags & 256
          ? ((t.flags &= -257), (a = Tu(Error(n(422)))), sa(A, t, p, a))
          : t.memoizedState !== null
            ? ((t.child = A.child), (t.flags |= 128), null)
            : ((d = a.fallback),
              (c = t.mode),
              (a = ma({ mode: "visible", children: a.children }, c, 0, null)),
              (d = Or(d, c, p, null)),
              (d.flags |= 2),
              (a.return = t),
              (d.return = t),
              (a.sibling = d),
              (t.child = a),
              t.mode & 1 && In(t, A.child, null, p),
              (t.child.memoizedState = Ou(p)),
              (t.memoizedState = Ru),
              d);
      if (!(t.mode & 1)) return sa(A, t, p, null);
      if (c.data === "$!") {
        if (((a = c.nextSibling && c.nextSibling.dataset), a)) var y = a.dgst;
        return (
          (a = y), (d = Error(n(419))), (a = Tu(d, a, void 0)), sa(A, t, p, a)
        );
      }
      if (((y = (p & A.childLanes) !== 0), Ue || y)) {
        if (((a = re), a !== null)) {
          switch (p & -p) {
            case 4:
              c = 2;
              break;
            case 16:
              c = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              c = 32;
              break;
            case 536870912:
              c = 268435456;
              break;
            default:
              c = 0;
          }
          (c = c & (a.suspendedLanes | p) ? 0 : c),
            c !== 0 &&
              c !== d.retryLane &&
              ((d.retryLane = c), It(A, c), tt(a, A, c, -1));
        }
        return ef(), (a = Tu(Error(n(421)))), sa(A, t, p, a);
      }
      return c.data === "$?"
        ? ((t.flags |= 128),
          (t.child = A.child),
          (t = TH.bind(null, A)),
          (c._reactRetry = t),
          null)
        : ((A = d.treeContext),
          (Le = tr(c.nextSibling)),
          (be = t),
          (OA = !0),
          ($e = null),
          A !== null &&
            ((Oe[Ne++] = Et),
            (Oe[Ne++] = xt),
            (Oe[Ne++] = Hr),
            (Et = A.id),
            (xt = A.overflow),
            (Hr = t)),
          (t = Nu(t, a.children)),
          (t.flags |= 4096),
          t);
    }
    function d0(A, t, i) {
      A.lanes |= t;
      var a = A.alternate;
      a !== null && (a.lanes |= t), pu(A.return, t, i);
    }
    function Mu(A, t, i, a, c) {
      var d = A.memoizedState;
      d === null
        ? (A.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: i,
            tailMode: c,
          })
        : ((d.isBackwards = t),
          (d.rendering = null),
          (d.renderingStartTime = 0),
          (d.last = a),
          (d.tail = i),
          (d.tailMode = c));
    }
    function B0(A, t, i) {
      var a = t.pendingProps,
        c = a.revealOrder,
        d = a.tail;
      if ((he(A, t, a.children, i), (a = PA.current), a & 2))
        (a = (a & 1) | 2), (t.flags |= 128);
      else {
        if (A !== null && A.flags & 128)
          A: for (A = t.child; A !== null; ) {
            if (A.tag === 13) A.memoizedState !== null && d0(A, i, t);
            else if (A.tag === 19) d0(A, i, t);
            else if (A.child !== null) {
              (A.child.return = A), (A = A.child);
              continue;
            }
            if (A === t) break A;
            for (; A.sibling === null; ) {
              if (A.return === null || A.return === t) break A;
              A = A.return;
            }
            (A.sibling.return = A.return), (A = A.sibling);
          }
        a &= 1;
      }
      if ((TA(PA, a), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (c) {
          case "forwards":
            for (i = t.child, c = null; i !== null; )
              (A = i.alternate),
                A !== null && Aa(A) === null && (c = i),
                (i = i.sibling);
            (i = c),
              i === null
                ? ((c = t.child), (t.child = null))
                : ((c = i.sibling), (i.sibling = null)),
              Mu(t, !1, c, i, d);
            break;
          case "backwards":
            for (i = null, c = t.child, t.child = null; c !== null; ) {
              if (((A = c.alternate), A !== null && Aa(A) === null)) {
                t.child = c;
                break;
              }
              (A = c.sibling), (c.sibling = i), (i = c), (c = A);
            }
            Mu(t, !0, i, null, d);
            break;
          case "together":
            Mu(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function aa(A, t) {
      !(t.mode & 1) &&
        A !== null &&
        ((A.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function St(A, t, i) {
      if (
        (A !== null && (t.dependencies = A.dependencies),
        (Dr |= t.lanes),
        !(i & t.childLanes))
      )
        return null;
      if (A !== null && t.child !== A.child) throw Error(n(153));
      if (t.child !== null) {
        for (
          A = t.child, i = dr(A, A.pendingProps), t.child = i, i.return = t;
          A.sibling !== null;

        )
          (A = A.sibling),
            (i = i.sibling = dr(A, A.pendingProps)),
            (i.return = t);
        i.sibling = null;
      }
      return t.child;
    }
    function CH(A, t, i) {
      switch (t.tag) {
        case 3:
          c0(t), xn();
          break;
        case 5:
          Ih(t);
          break;
        case 1:
          ye(t.type) && Gs(t);
          break;
        case 4:
          vu(t, t.stateNode.containerInfo);
          break;
        case 10:
          var a = t.type._context,
            c = t.memoizedProps.value;
          TA(Ys, a._currentValue), (a._currentValue = c);
          break;
        case 13:
          if (((a = t.memoizedState), a !== null))
            return a.dehydrated !== null
              ? (TA(PA, PA.current & 1), (t.flags |= 128), null)
              : i & t.child.childLanes
                ? f0(A, t, i)
                : (TA(PA, PA.current & 1),
                  (A = St(A, t, i)),
                  A !== null ? A.sibling : null);
          TA(PA, PA.current & 1);
          break;
        case 19:
          if (((a = (i & t.childLanes) !== 0), A.flags & 128)) {
            if (a) return B0(A, t, i);
            t.flags |= 128;
          }
          if (
            ((c = t.memoizedState),
            c !== null &&
              ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
            TA(PA, PA.current),
            a)
          )
            break;
          return null;
        case 22:
        case 23:
          return (t.lanes = 0), s0(A, t, i);
      }
      return St(A, t, i);
    }
    var g0, Pu, p0, w0;
    (g0 = function (A, t) {
      for (var i = t.child; i !== null; ) {
        if (i.tag === 5 || i.tag === 6) A.appendChild(i.stateNode);
        else if (i.tag !== 4 && i.child !== null) {
          (i.child.return = i), (i = i.child);
          continue;
        }
        if (i === t) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === t) return;
          i = i.return;
        }
        (i.sibling.return = i.return), (i = i.sibling);
      }
    }),
      (Pu = function () {}),
      (p0 = function (A, t, i, a) {
        var c = A.memoizedProps;
        if (c !== a) {
          (A = t.stateNode), Lr(ut.current);
          var d = null;
          switch (i) {
            case "input":
              (c = Je(A, c)), (a = Je(A, a)), (d = []);
              break;
            case "select":
              (c = Z({}, c, { value: void 0 })),
                (a = Z({}, a, { value: void 0 })),
                (d = []);
              break;
            case "textarea":
              (c = vc(A, c)), (a = vc(A, a)), (d = []);
              break;
            default:
              typeof c.onClick != "function" &&
                typeof a.onClick == "function" &&
                (A.onclick = Ps);
          }
          Cc(i, a);
          var p;
          i = null;
          for (K in c)
            if (!a.hasOwnProperty(K) && c.hasOwnProperty(K) && c[K] != null)
              if (K === "style") {
                var y = c[K];
                for (p in y)
                  y.hasOwnProperty(p) && (i || (i = {}), (i[p] = ""));
              } else
                K !== "dangerouslySetInnerHTML" &&
                  K !== "children" &&
                  K !== "suppressContentEditableWarning" &&
                  K !== "suppressHydrationWarning" &&
                  K !== "autoFocus" &&
                  (s.hasOwnProperty(K)
                    ? d || (d = [])
                    : (d = d || []).push(K, null));
          for (K in a) {
            var x = a[K];
            if (
              ((y = c?.[K]),
              a.hasOwnProperty(K) && x !== y && (x != null || y != null))
            )
              if (K === "style")
                if (y) {
                  for (p in y)
                    !y.hasOwnProperty(p) ||
                      (x && x.hasOwnProperty(p)) ||
                      (i || (i = {}), (i[p] = ""));
                  for (p in x)
                    x.hasOwnProperty(p) &&
                      y[p] !== x[p] &&
                      (i || (i = {}), (i[p] = x[p]));
                } else i || (d || (d = []), d.push(K, i)), (i = x);
              else
                K === "dangerouslySetInnerHTML"
                  ? ((x = x ? x.__html : void 0),
                    (y = y ? y.__html : void 0),
                    x != null && y !== x && (d = d || []).push(K, x))
                  : K === "children"
                    ? (typeof x != "string" && typeof x != "number") ||
                      (d = d || []).push(K, "" + x)
                    : K !== "suppressContentEditableWarning" &&
                      K !== "suppressHydrationWarning" &&
                      (s.hasOwnProperty(K)
                        ? (x != null && K === "onScroll" && KA("scroll", A),
                          d || y === x || (d = []))
                        : (d = d || []).push(K, x));
          }
          i && (d = d || []).push("style", i);
          var K = d;
          (t.updateQueue = K) && (t.flags |= 4);
        }
      }),
      (w0 = function (A, t, i, a) {
        i !== a && (t.flags |= 4);
      });
    function Xo(A, t) {
      if (!OA)
        switch (A.tailMode) {
          case "hidden":
            t = A.tail;
            for (var i = null; t !== null; )
              t.alternate !== null && (i = t), (t = t.sibling);
            i === null ? (A.tail = null) : (i.sibling = null);
            break;
          case "collapsed":
            i = A.tail;
            for (var a = null; i !== null; )
              i.alternate !== null && (a = i), (i = i.sibling);
            a === null
              ? t || A.tail === null
                ? (A.tail = null)
                : (A.tail.sibling = null)
              : (a.sibling = null);
        }
    }
    function Be(A) {
      var t = A.alternate !== null && A.alternate.child === A.child,
        i = 0,
        a = 0;
      if (t)
        for (var c = A.child; c !== null; )
          (i |= c.lanes | c.childLanes),
            (a |= c.subtreeFlags & 14680064),
            (a |= c.flags & 14680064),
            (c.return = A),
            (c = c.sibling);
      else
        for (c = A.child; c !== null; )
          (i |= c.lanes | c.childLanes),
            (a |= c.subtreeFlags),
            (a |= c.flags),
            (c.return = A),
            (c = c.sibling);
      return (A.subtreeFlags |= a), (A.childLanes = i), t;
    }
    function QH(A, t, i) {
      var a = t.pendingProps;
      switch ((lu(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Be(t), null;
        case 1:
          return ye(t.type) && Vs(), Be(t), null;
        case 3:
          return (
            (a = t.stateNode),
            bn(),
            kA(Qe),
            kA(fe),
            Qu(),
            a.pendingContext &&
              ((a.context = a.pendingContext), (a.pendingContext = null)),
            (A === null || A.child === null) &&
              (zs(t)
                ? (t.flags |= 4)
                : A === null ||
                  (A.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), $e !== null && ($u($e), ($e = null)))),
            Pu(A, t),
            Be(t),
            null
          );
        case 5:
          mu(t);
          var c = Lr(_o.current);
          if (((i = t.type), A !== null && t.stateNode != null))
            p0(A, t, i, a, c),
              A.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(n(166));
              return Be(t), null;
            }
            if (((A = Lr(ut.current)), zs(t))) {
              (a = t.stateNode), (i = t.type);
              var d = t.memoizedProps;
              switch (((a[ct] = t), (a[Ro] = d), (A = (t.mode & 1) !== 0), i)) {
                case "dialog":
                  KA("cancel", a), KA("close", a);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  KA("load", a);
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Do.length; c++) KA(Do[c], a);
                  break;
                case "source":
                  KA("error", a);
                  break;
                case "img":
                case "image":
                case "link":
                  KA("error", a), KA("load", a);
                  break;
                case "details":
                  KA("toggle", a);
                  break;
                case "input":
                  cn(a, d), KA("invalid", a);
                  break;
                case "select":
                  (a._wrapperState = { wasMultiple: !!d.multiple }),
                    KA("invalid", a);
                  break;
                case "textarea":
                  Aw(a, d), KA("invalid", a);
              }
              Cc(i, d), (c = null);
              for (var p in d)
                if (d.hasOwnProperty(p)) {
                  var y = d[p];
                  p === "children"
                    ? typeof y == "string"
                      ? a.textContent !== y &&
                        (d.suppressHydrationWarning !== !0 &&
                          Ms(a.textContent, y, A),
                        (c = ["children", y]))
                      : typeof y == "number" &&
                        a.textContent !== "" + y &&
                        (d.suppressHydrationWarning !== !0 &&
                          Ms(a.textContent, y, A),
                        (c = ["children", "" + y]))
                    : s.hasOwnProperty(p) &&
                      y != null &&
                      p === "onScroll" &&
                      KA("scroll", a);
                }
              switch (i) {
                case "input":
                  IA(a), qp(a, d, !0);
                  break;
                case "textarea":
                  IA(a), tw(a);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof d.onClick == "function" && (a.onclick = Ps);
              }
              (a = c), (t.updateQueue = a), a !== null && (t.flags |= 4);
            } else {
              (p = c.nodeType === 9 ? c : c.ownerDocument),
                A === "http://www.w3.org/1999/xhtml" && (A = rw(i)),
                A === "http://www.w3.org/1999/xhtml"
                  ? i === "script"
                    ? ((A = p.createElement("div")),
                      (A.innerHTML = "<script></script>"),
                      (A = A.removeChild(A.firstChild)))
                    : typeof a.is == "string"
                      ? (A = p.createElement(i, { is: a.is }))
                      : ((A = p.createElement(i)),
                        i === "select" &&
                          ((p = A),
                          a.multiple
                            ? (p.multiple = !0)
                            : a.size && (p.size = a.size)))
                  : (A = p.createElementNS(A, i)),
                (A[ct] = t),
                (A[Ro] = a),
                g0(A, t, !1, !1),
                (t.stateNode = A);
              A: {
                switch (((p = Qc(i, a)), i)) {
                  case "dialog":
                    KA("cancel", A), KA("close", A), (c = a);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    KA("load", A), (c = a);
                    break;
                  case "video":
                  case "audio":
                    for (c = 0; c < Do.length; c++) KA(Do[c], A);
                    c = a;
                    break;
                  case "source":
                    KA("error", A), (c = a);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    KA("error", A), KA("load", A), (c = a);
                    break;
                  case "details":
                    KA("toggle", A), (c = a);
                    break;
                  case "input":
                    cn(A, a), (c = Je(A, a)), KA("invalid", A);
                    break;
                  case "option":
                    c = a;
                    break;
                  case "select":
                    (A._wrapperState = { wasMultiple: !!a.multiple }),
                      (c = Z({}, a, { value: void 0 })),
                      KA("invalid", A);
                    break;
                  case "textarea":
                    Aw(A, a), (c = vc(A, a)), KA("invalid", A);
                    break;
                  default:
                    c = a;
                }
                Cc(i, c), (y = c);
                for (d in y)
                  if (y.hasOwnProperty(d)) {
                    var x = y[d];
                    d === "style"
                      ? iw(A, x)
                      : d === "dangerouslySetInnerHTML"
                        ? ((x = x ? x.__html : void 0), x != null && nw(A, x))
                        : d === "children"
                          ? typeof x == "string"
                            ? (i !== "textarea" || x !== "") && go(A, x)
                            : typeof x == "number" && go(A, "" + x)
                          : d !== "suppressContentEditableWarning" &&
                            d !== "suppressHydrationWarning" &&
                            d !== "autoFocus" &&
                            (s.hasOwnProperty(d)
                              ? x != null && d === "onScroll" && KA("scroll", A)
                              : x != null && R(A, d, x, p));
                  }
                switch (i) {
                  case "input":
                    IA(A), qp(A, a, !1);
                    break;
                  case "textarea":
                    IA(A), tw(A);
                    break;
                  case "option":
                    a.value != null &&
                      A.setAttribute("value", "" + BA(a.value));
                    break;
                  case "select":
                    (A.multiple = !!a.multiple),
                      (d = a.value),
                      d != null
                        ? fn(A, !!a.multiple, d, !1)
                        : a.defaultValue != null &&
                          fn(A, !!a.multiple, a.defaultValue, !0);
                    break;
                  default:
                    typeof c.onClick == "function" && (A.onclick = Ps);
                }
                switch (i) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a = !!a.autoFocus;
                    break A;
                  case "img":
                    a = !0;
                    break A;
                  default:
                    a = !1;
                }
              }
              a && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return Be(t), null;
        case 6:
          if (A && t.stateNode != null) w0(A, t, A.memoizedProps, a);
          else {
            if (typeof a != "string" && t.stateNode === null)
              throw Error(n(166));
            if (((i = Lr(_o.current)), Lr(ut.current), zs(t))) {
              if (
                ((a = t.stateNode),
                (i = t.memoizedProps),
                (a[ct] = t),
                (d = a.nodeValue !== i) && ((A = be), A !== null))
              )
                switch (A.tag) {
                  case 3:
                    Ms(a.nodeValue, i, (A.mode & 1) !== 0);
                    break;
                  case 5:
                    A.memoizedProps.suppressHydrationWarning !== !0 &&
                      Ms(a.nodeValue, i, (A.mode & 1) !== 0);
                }
              d && (t.flags |= 4);
            } else
              (a = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(a)),
                (a[ct] = t),
                (t.stateNode = a);
          }
          return Be(t), null;
        case 13:
          if (
            (kA(PA),
            (a = t.memoizedState),
            A === null ||
              (A.memoizedState !== null && A.memoizedState.dehydrated !== null))
          ) {
            if (OA && Le !== null && t.mode & 1 && !(t.flags & 128))
              mh(), xn(), (t.flags |= 98560), (d = !1);
            else if (((d = zs(t)), a !== null && a.dehydrated !== null)) {
              if (A === null) {
                if (!d) throw Error(n(318));
                if (
                  ((d = t.memoizedState),
                  (d = d !== null ? d.dehydrated : null),
                  !d)
                )
                  throw Error(n(317));
                d[ct] = t;
              } else
                xn(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              Be(t), (d = !1);
            } else $e !== null && ($u($e), ($e = null)), (d = !0);
            if (!d) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = i), t)
            : ((a = a !== null),
              a !== (A !== null && A.memoizedState !== null) &&
                a &&
                ((t.child.flags |= 8192),
                t.mode & 1 &&
                  (A === null || PA.current & 1 ? Ae === 0 && (Ae = 3) : ef())),
              t.updateQueue !== null && (t.flags |= 4),
              Be(t),
              null);
        case 4:
          return (
            bn(),
            Pu(A, t),
            A === null && Ko(t.stateNode.containerInfo),
            Be(t),
            null
          );
        case 10:
          return gu(t.type._context), Be(t), null;
        case 17:
          return ye(t.type) && Vs(), Be(t), null;
        case 19:
          if ((kA(PA), (d = t.memoizedState), d === null)) return Be(t), null;
          if (((a = (t.flags & 128) !== 0), (p = d.rendering), p === null))
            if (a) Xo(d, !1);
            else {
              if (Ae !== 0 || (A !== null && A.flags & 128))
                for (A = t.child; A !== null; ) {
                  if (((p = Aa(A)), p !== null)) {
                    for (
                      t.flags |= 128,
                        Xo(d, !1),
                        a = p.updateQueue,
                        a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        a = i,
                        i = t.child;
                      i !== null;

                    )
                      (d = i),
                        (A = a),
                        (d.flags &= 14680066),
                        (p = d.alternate),
                        p === null
                          ? ((d.childLanes = 0),
                            (d.lanes = A),
                            (d.child = null),
                            (d.subtreeFlags = 0),
                            (d.memoizedProps = null),
                            (d.memoizedState = null),
                            (d.updateQueue = null),
                            (d.dependencies = null),
                            (d.stateNode = null))
                          : ((d.childLanes = p.childLanes),
                            (d.lanes = p.lanes),
                            (d.child = p.child),
                            (d.subtreeFlags = 0),
                            (d.deletions = null),
                            (d.memoizedProps = p.memoizedProps),
                            (d.memoizedState = p.memoizedState),
                            (d.updateQueue = p.updateQueue),
                            (d.type = p.type),
                            (A = p.dependencies),
                            (d.dependencies =
                              A === null
                                ? null
                                : {
                                    lanes: A.lanes,
                                    firstContext: A.firstContext,
                                  })),
                        (i = i.sibling);
                    return TA(PA, (PA.current & 1) | 2), t.child;
                  }
                  A = A.sibling;
                }
              d.tail !== null &&
                XA() > Kn &&
                ((t.flags |= 128), (a = !0), Xo(d, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((A = Aa(p)), A !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (i = A.updateQueue),
                  i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                  Xo(d, !0),
                  d.tail === null &&
                    d.tailMode === "hidden" &&
                    !p.alternate &&
                    !OA)
                )
                  return Be(t), null;
              } else
                2 * XA() - d.renderingStartTime > Kn &&
                  i !== 1073741824 &&
                  ((t.flags |= 128), (a = !0), Xo(d, !1), (t.lanes = 4194304));
            d.isBackwards
              ? ((p.sibling = t.child), (t.child = p))
              : ((i = d.last),
                i !== null ? (i.sibling = p) : (t.child = p),
                (d.last = p));
          }
          return d.tail !== null
            ? ((t = d.tail),
              (d.rendering = t),
              (d.tail = t.sibling),
              (d.renderingStartTime = XA()),
              (t.sibling = null),
              (i = PA.current),
              TA(PA, a ? (i & 1) | 2 : i & 1),
              t)
            : (Be(t), null);
        case 22:
        case 23:
          return (
            Af(),
            (a = t.memoizedState !== null),
            A !== null && (A.memoizedState !== null) !== a && (t.flags |= 8192),
            a && t.mode & 1
              ? Te & 1073741824 &&
                (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : Be(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(n(156, t.tag));
    }
    function yH(A, t) {
      switch ((lu(t), t.tag)) {
        case 1:
          return (
            ye(t.type) && Vs(),
            (A = t.flags),
            A & 65536 ? ((t.flags = (A & -65537) | 128), t) : null
          );
        case 3:
          return (
            bn(),
            kA(Qe),
            kA(fe),
            Qu(),
            (A = t.flags),
            A & 65536 && !(A & 128) ? ((t.flags = (A & -65537) | 128), t) : null
          );
        case 5:
          return mu(t), null;
        case 13:
          if (
            (kA(PA), (A = t.memoizedState), A !== null && A.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(n(340));
            xn();
          }
          return (
            (A = t.flags),
            A & 65536 ? ((t.flags = (A & -65537) | 128), t) : null
          );
        case 19:
          return kA(PA), null;
        case 4:
          return bn(), null;
        case 10:
          return gu(t.type._context), null;
        case 22:
        case 23:
          return Af(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var la = !1,
      ge = !1,
      UH = typeof WeakSet == "function" ? WeakSet : Set,
      iA = null;
    function Tn(A, t) {
      var i = A.ref;
      if (i !== null)
        if (typeof i == "function")
          try {
            i(null);
          } catch (a) {
            VA(A, t, a);
          }
        else i.current = null;
    }
    function _u(A, t, i) {
      try {
        i();
      } catch (a) {
        VA(A, t, a);
      }
    }
    var h0 = !1;
    function FH(A, t) {
      if (((Au = Hs), (A = Yw()), jc(A))) {
        if ("selectionStart" in A)
          var i = { start: A.selectionStart, end: A.selectionEnd };
        else
          A: {
            i = ((i = A.ownerDocument) && i.defaultView) || window;
            var a = i.getSelection && i.getSelection();
            if (a && a.rangeCount !== 0) {
              i = a.anchorNode;
              var c = a.anchorOffset,
                d = a.focusNode;
              a = a.focusOffset;
              try {
                i.nodeType, d.nodeType;
              } catch {
                i = null;
                break A;
              }
              var p = 0,
                y = -1,
                x = -1,
                K = 0,
                V = 0,
                W = A,
                _ = null;
              e: for (;;) {
                for (
                  var rA;
                  W !== i || (c !== 0 && W.nodeType !== 3) || (y = p + c),
                    W !== d || (a !== 0 && W.nodeType !== 3) || (x = p + a),
                    W.nodeType === 3 && (p += W.nodeValue.length),
                    (rA = W.firstChild) !== null;

                )
                  (_ = W), (W = rA);
                for (;;) {
                  if (W === A) break e;
                  if (
                    (_ === i && ++K === c && (y = p),
                    _ === d && ++V === a && (x = p),
                    (rA = W.nextSibling) !== null)
                  )
                    break;
                  (W = _), (_ = W.parentNode);
                }
                W = rA;
              }
              i = y === -1 || x === -1 ? null : { start: y, end: x };
            } else i = null;
          }
        i = i || { start: 0, end: 0 };
      } else i = null;
      for (
        eu = { focusedElem: A, selectionRange: i }, Hs = !1, iA = t;
        iA !== null;

      )
        if (
          ((t = iA), (A = t.child), (t.subtreeFlags & 1028) !== 0 && A !== null)
        )
          (A.return = t), (iA = A);
        else
          for (; iA !== null; ) {
            t = iA;
            try {
              var aA = t.alternate;
              if (t.flags & 1024)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (aA !== null) {
                      var lA = aA.memoizedProps,
                        zA = aA.memoizedState,
                        L = t.stateNode,
                        S = L.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? lA : qe(t.type, lA),
                          zA,
                        );
                      L.__reactInternalSnapshotBeforeUpdate = S;
                    }
                    break;
                  case 3:
                    var D = t.stateNode.containerInfo;
                    D.nodeType === 1
                      ? (D.textContent = "")
                      : D.nodeType === 9 &&
                        D.documentElement &&
                        D.removeChild(D.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(n(163));
                }
            } catch (z) {
              VA(t, t.return, z);
            }
            if (((A = t.sibling), A !== null)) {
              (A.return = t.return), (iA = A);
              break;
            }
            iA = t.return;
          }
      return (aA = h0), (h0 = !1), aA;
    }
    function zo(A, t, i) {
      var a = t.updateQueue;
      if (((a = a !== null ? a.lastEffect : null), a !== null)) {
        var c = (a = a.next);
        do {
          if ((c.tag & A) === A) {
            var d = c.destroy;
            (c.destroy = void 0), d !== void 0 && _u(t, i, d);
          }
          c = c.next;
        } while (c !== a);
      }
    }
    function ca(A, t) {
      if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        var i = (t = t.next);
        do {
          if ((i.tag & A) === A) {
            var a = i.create;
            i.destroy = a();
          }
          i = i.next;
        } while (i !== t);
      }
    }
    function Vu(A) {
      var t = A.ref;
      if (t !== null) {
        var i = A.stateNode;
        switch (A.tag) {
          case 5:
            A = i;
            break;
          default:
            A = i;
        }
        typeof t == "function" ? t(A) : (t.current = A);
      }
    }
    function v0(A) {
      var t = A.alternate;
      t !== null && ((A.alternate = null), v0(t)),
        (A.child = null),
        (A.deletions = null),
        (A.sibling = null),
        A.tag === 5 &&
          ((t = A.stateNode),
          t !== null &&
            (delete t[ct],
            delete t[Ro],
            delete t[ou],
            delete t[sH],
            delete t[aH])),
        (A.stateNode = null),
        (A.return = null),
        (A.dependencies = null),
        (A.memoizedProps = null),
        (A.memoizedState = null),
        (A.pendingProps = null),
        (A.stateNode = null),
        (A.updateQueue = null);
    }
    function m0(A) {
      return A.tag === 5 || A.tag === 3 || A.tag === 4;
    }
    function C0(A) {
      A: for (;;) {
        for (; A.sibling === null; ) {
          if (A.return === null || m0(A.return)) return null;
          A = A.return;
        }
        for (
          A.sibling.return = A.return, A = A.sibling;
          A.tag !== 5 && A.tag !== 6 && A.tag !== 18;

        ) {
          if (A.flags & 2 || A.child === null || A.tag === 4) continue A;
          (A.child.return = A), (A = A.child);
        }
        if (!(A.flags & 2)) return A.stateNode;
      }
    }
    function Gu(A, t, i) {
      var a = A.tag;
      if (a === 5 || a === 6)
        (A = A.stateNode),
          t
            ? i.nodeType === 8
              ? i.parentNode.insertBefore(A, t)
              : i.insertBefore(A, t)
            : (i.nodeType === 8
                ? ((t = i.parentNode), t.insertBefore(A, i))
                : ((t = i), t.appendChild(A)),
              (i = i._reactRootContainer),
              i != null || t.onclick !== null || (t.onclick = Ps));
      else if (a !== 4 && ((A = A.child), A !== null))
        for (Gu(A, t, i), A = A.sibling; A !== null; )
          Gu(A, t, i), (A = A.sibling);
    }
    function Wu(A, t, i) {
      var a = A.tag;
      if (a === 5 || a === 6)
        (A = A.stateNode), t ? i.insertBefore(A, t) : i.appendChild(A);
      else if (a !== 4 && ((A = A.child), A !== null))
        for (Wu(A, t, i), A = A.sibling; A !== null; )
          Wu(A, t, i), (A = A.sibling);
    }
    var ae = null,
      At = !1;
    function ar(A, t, i) {
      for (i = i.child; i !== null; ) Q0(A, t, i), (i = i.sibling);
    }
    function Q0(A, t, i) {
      if (lt && typeof lt.onCommitFiberUnmount == "function")
        try {
          lt.onCommitFiberUnmount(ys, i);
        } catch {}
      switch (i.tag) {
        case 5:
          ge || Tn(i, t);
        case 6:
          var a = ae,
            c = At;
          (ae = null),
            ar(A, t, i),
            (ae = a),
            (At = c),
            ae !== null &&
              (At
                ? ((A = ae),
                  (i = i.stateNode),
                  A.nodeType === 8
                    ? A.parentNode.removeChild(i)
                    : A.removeChild(i))
                : ae.removeChild(i.stateNode));
          break;
        case 18:
          ae !== null &&
            (At
              ? ((A = ae),
                (i = i.stateNode),
                A.nodeType === 8
                  ? nu(A.parentNode, i)
                  : A.nodeType === 1 && nu(A, i),
                Eo(A))
              : nu(ae, i.stateNode));
          break;
        case 4:
          (a = ae),
            (c = At),
            (ae = i.stateNode.containerInfo),
            (At = !0),
            ar(A, t, i),
            (ae = a),
            (At = c);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !ge &&
            ((a = i.updateQueue),
            a !== null && ((a = a.lastEffect), a !== null))
          ) {
            c = a = a.next;
            do {
              var d = c,
                p = d.destroy;
              (d = d.tag),
                p !== void 0 && (d & 2 || d & 4) && _u(i, t, p),
                (c = c.next);
            } while (c !== a);
          }
          ar(A, t, i);
          break;
        case 1:
          if (
            !ge &&
            (Tn(i, t),
            (a = i.stateNode),
            typeof a.componentWillUnmount == "function")
          )
            try {
              (a.props = i.memoizedProps),
                (a.state = i.memoizedState),
                a.componentWillUnmount();
            } catch (y) {
              VA(i, t, y);
            }
          ar(A, t, i);
          break;
        case 21:
          ar(A, t, i);
          break;
        case 22:
          i.mode & 1
            ? ((ge = (a = ge) || i.memoizedState !== null),
              ar(A, t, i),
              (ge = a))
            : ar(A, t, i);
          break;
        default:
          ar(A, t, i);
      }
    }
    function y0(A) {
      var t = A.updateQueue;
      if (t !== null) {
        A.updateQueue = null;
        var i = A.stateNode;
        i === null && (i = A.stateNode = new UH()),
          t.forEach(function (a) {
            var c = DH.bind(null, A, a);
            i.has(a) || (i.add(a), a.then(c, c));
          });
      }
    }
    function et(A, t) {
      var i = t.deletions;
      if (i !== null)
        for (var a = 0; a < i.length; a++) {
          var c = i[a];
          try {
            var d = A,
              p = t,
              y = p;
            A: for (; y !== null; ) {
              switch (y.tag) {
                case 5:
                  (ae = y.stateNode), (At = !1);
                  break A;
                case 3:
                  (ae = y.stateNode.containerInfo), (At = !0);
                  break A;
                case 4:
                  (ae = y.stateNode.containerInfo), (At = !0);
                  break A;
              }
              y = y.return;
            }
            if (ae === null) throw Error(n(160));
            Q0(d, p, c), (ae = null), (At = !1);
            var x = c.alternate;
            x !== null && (x.return = null), (c.return = null);
          } catch (K) {
            VA(c, t, K);
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) U0(t, A), (t = t.sibling);
    }
    function U0(A, t) {
      var i = A.alternate,
        a = A.flags;
      switch (A.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((et(t, A), dt(A), a & 4)) {
            try {
              zo(3, A, A.return), ca(3, A);
            } catch (lA) {
              VA(A, A.return, lA);
            }
            try {
              zo(5, A, A.return);
            } catch (lA) {
              VA(A, A.return, lA);
            }
          }
          break;
        case 1:
          et(t, A), dt(A), a & 512 && i !== null && Tn(i, i.return);
          break;
        case 5:
          if (
            (et(t, A),
            dt(A),
            a & 512 && i !== null && Tn(i, i.return),
            A.flags & 32)
          ) {
            var c = A.stateNode;
            try {
              go(c, "");
            } catch (lA) {
              VA(A, A.return, lA);
            }
          }
          if (a & 4 && ((c = A.stateNode), c != null)) {
            var d = A.memoizedProps,
              p = i !== null ? i.memoizedProps : d,
              y = A.type,
              x = A.updateQueue;
            if (((A.updateQueue = null), x !== null))
              try {
                y === "input" &&
                  d.type === "radio" &&
                  d.name != null &&
                  un(c, d),
                  Qc(y, p);
                var K = Qc(y, d);
                for (p = 0; p < x.length; p += 2) {
                  var V = x[p],
                    W = x[p + 1];
                  V === "style"
                    ? iw(c, W)
                    : V === "dangerouslySetInnerHTML"
                      ? nw(c, W)
                      : V === "children"
                        ? go(c, W)
                        : R(c, V, W, K);
                }
                switch (y) {
                  case "input":
                    Fr(c, d);
                    break;
                  case "textarea":
                    ew(c, d);
                    break;
                  case "select":
                    var _ = c._wrapperState.wasMultiple;
                    c._wrapperState.wasMultiple = !!d.multiple;
                    var rA = d.value;
                    rA != null
                      ? fn(c, !!d.multiple, rA, !1)
                      : _ !== !!d.multiple &&
                        (d.defaultValue != null
                          ? fn(c, !!d.multiple, d.defaultValue, !0)
                          : fn(c, !!d.multiple, d.multiple ? [] : "", !1));
                }
                c[Ro] = d;
              } catch (lA) {
                VA(A, A.return, lA);
              }
          }
          break;
        case 6:
          if ((et(t, A), dt(A), a & 4)) {
            if (A.stateNode === null) throw Error(n(162));
            (c = A.stateNode), (d = A.memoizedProps);
            try {
              c.nodeValue = d;
            } catch (lA) {
              VA(A, A.return, lA);
            }
          }
          break;
        case 3:
          if (
            (et(t, A),
            dt(A),
            a & 4 && i !== null && i.memoizedState.isDehydrated)
          )
            try {
              Eo(t.containerInfo);
            } catch (lA) {
              VA(A, A.return, lA);
            }
          break;
        case 4:
          et(t, A), dt(A);
          break;
        case 13:
          et(t, A),
            dt(A),
            (c = A.child),
            c.flags & 8192 &&
              ((d = c.memoizedState !== null),
              (c.stateNode.isHidden = d),
              !d ||
                (c.alternate !== null && c.alternate.memoizedState !== null) ||
                (zu = XA())),
            a & 4 && y0(A);
          break;
        case 22:
          if (
            ((V = i !== null && i.memoizedState !== null),
            A.mode & 1 ? ((ge = (K = ge) || V), et(t, A), (ge = K)) : et(t, A),
            dt(A),
            a & 8192)
          ) {
            if (
              ((K = A.memoizedState !== null),
              (A.stateNode.isHidden = K) && !V && A.mode & 1)
            )
              for (iA = A, V = A.child; V !== null; ) {
                for (W = iA = V; iA !== null; ) {
                  switch (((_ = iA), (rA = _.child), _.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      zo(4, _, _.return);
                      break;
                    case 1:
                      Tn(_, _.return);
                      var aA = _.stateNode;
                      if (typeof aA.componentWillUnmount == "function") {
                        (a = _), (i = _.return);
                        try {
                          (t = a),
                            (aA.props = t.memoizedProps),
                            (aA.state = t.memoizedState),
                            aA.componentWillUnmount();
                        } catch (lA) {
                          VA(a, i, lA);
                        }
                      }
                      break;
                    case 5:
                      Tn(_, _.return);
                      break;
                    case 22:
                      if (_.memoizedState !== null) {
                        x0(W);
                        continue;
                      }
                  }
                  rA !== null ? ((rA.return = _), (iA = rA)) : x0(W);
                }
                V = V.sibling;
              }
            A: for (V = null, W = A; ; ) {
              if (W.tag === 5) {
                if (V === null) {
                  V = W;
                  try {
                    (c = W.stateNode),
                      K
                        ? ((d = c.style),
                          typeof d.setProperty == "function"
                            ? d.setProperty("display", "none", "important")
                            : (d.display = "none"))
                        : ((y = W.stateNode),
                          (x = W.memoizedProps.style),
                          (p =
                            x != null && x.hasOwnProperty("display")
                              ? x.display
                              : null),
                          (y.style.display = ow("display", p)));
                  } catch (lA) {
                    VA(A, A.return, lA);
                  }
                }
              } else if (W.tag === 6) {
                if (V === null)
                  try {
                    W.stateNode.nodeValue = K ? "" : W.memoizedProps;
                  } catch (lA) {
                    VA(A, A.return, lA);
                  }
              } else if (
                ((W.tag !== 22 && W.tag !== 23) ||
                  W.memoizedState === null ||
                  W === A) &&
                W.child !== null
              ) {
                (W.child.return = W), (W = W.child);
                continue;
              }
              if (W === A) break A;
              for (; W.sibling === null; ) {
                if (W.return === null || W.return === A) break A;
                V === W && (V = null), (W = W.return);
              }
              V === W && (V = null),
                (W.sibling.return = W.return),
                (W = W.sibling);
            }
          }
          break;
        case 19:
          et(t, A), dt(A), a & 4 && y0(A);
          break;
        case 21:
          break;
        default:
          et(t, A), dt(A);
      }
    }
    function dt(A) {
      var t = A.flags;
      if (t & 2) {
        try {
          A: {
            for (var i = A.return; i !== null; ) {
              if (m0(i)) {
                var a = i;
                break A;
              }
              i = i.return;
            }
            throw Error(n(160));
          }
          switch (a.tag) {
            case 5:
              var c = a.stateNode;
              a.flags & 32 && (go(c, ""), (a.flags &= -33));
              var d = C0(A);
              Wu(A, d, c);
              break;
            case 3:
            case 4:
              var p = a.stateNode.containerInfo,
                y = C0(A);
              Gu(A, y, p);
              break;
            default:
              throw Error(n(161));
          }
        } catch (x) {
          VA(A, A.return, x);
        }
        A.flags &= -3;
      }
      t & 4096 && (A.flags &= -4097);
    }
    function EH(A, t, i) {
      (iA = A), F0(A);
    }
    function F0(A, t, i) {
      for (var a = (A.mode & 1) !== 0; iA !== null; ) {
        var c = iA,
          d = c.child;
        if (c.tag === 22 && a) {
          var p = c.memoizedState !== null || la;
          if (!p) {
            var y = c.alternate,
              x = (y !== null && y.memoizedState !== null) || ge;
            y = la;
            var K = ge;
            if (((la = p), (ge = x) && !K))
              for (iA = c; iA !== null; )
                (p = iA),
                  (x = p.child),
                  p.tag === 22 && p.memoizedState !== null
                    ? I0(c)
                    : x !== null
                      ? ((x.return = p), (iA = x))
                      : I0(c);
            for (; d !== null; ) (iA = d), F0(d), (d = d.sibling);
            (iA = c), (la = y), (ge = K);
          }
          E0(A);
        } else
          c.subtreeFlags & 8772 && d !== null
            ? ((d.return = c), (iA = d))
            : E0(A);
      }
    }
    function E0(A) {
      for (; iA !== null; ) {
        var t = iA;
        if (t.flags & 8772) {
          var i = t.alternate;
          try {
            if (t.flags & 8772)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  ge || ca(5, t);
                  break;
                case 1:
                  var a = t.stateNode;
                  if (t.flags & 4 && !ge)
                    if (i === null) a.componentDidMount();
                    else {
                      var c =
                        t.elementType === t.type
                          ? i.memoizedProps
                          : qe(t.type, i.memoizedProps);
                      a.componentDidUpdate(
                        c,
                        i.memoizedState,
                        a.__reactInternalSnapshotBeforeUpdate,
                      );
                    }
                  var d = t.updateQueue;
                  d !== null && xh(t, d, a);
                  break;
                case 3:
                  var p = t.updateQueue;
                  if (p !== null) {
                    if (((i = null), t.child !== null))
                      switch (t.child.tag) {
                        case 5:
                          i = t.child.stateNode;
                          break;
                        case 1:
                          i = t.child.stateNode;
                      }
                    xh(t, p, i);
                  }
                  break;
                case 5:
                  var y = t.stateNode;
                  if (i === null && t.flags & 4) {
                    i = y;
                    var x = t.memoizedProps;
                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        x.autoFocus && i.focus();
                        break;
                      case "img":
                        x.src && (i.src = x.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var K = t.alternate;
                    if (K !== null) {
                      var V = K.memoizedState;
                      if (V !== null) {
                        var W = V.dehydrated;
                        W !== null && Eo(W);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(n(163));
              }
            ge || (t.flags & 512 && Vu(t));
          } catch (_) {
            VA(t, t.return, _);
          }
        }
        if (t === A) {
          iA = null;
          break;
        }
        if (((i = t.sibling), i !== null)) {
          (i.return = t.return), (iA = i);
          break;
        }
        iA = t.return;
      }
    }
    function x0(A) {
      for (; iA !== null; ) {
        var t = iA;
        if (t === A) {
          iA = null;
          break;
        }
        var i = t.sibling;
        if (i !== null) {
          (i.return = t.return), (iA = i);
          break;
        }
        iA = t.return;
      }
    }
    function I0(A) {
      for (; iA !== null; ) {
        var t = iA;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var i = t.return;
              try {
                ca(4, t);
              } catch (x) {
                VA(t, i, x);
              }
              break;
            case 1:
              var a = t.stateNode;
              if (typeof a.componentDidMount == "function") {
                var c = t.return;
                try {
                  a.componentDidMount();
                } catch (x) {
                  VA(t, c, x);
                }
              }
              var d = t.return;
              try {
                Vu(t);
              } catch (x) {
                VA(t, d, x);
              }
              break;
            case 5:
              var p = t.return;
              try {
                Vu(t);
              } catch (x) {
                VA(t, p, x);
              }
          }
        } catch (x) {
          VA(t, t.return, x);
        }
        if (t === A) {
          iA = null;
          break;
        }
        var y = t.sibling;
        if (y !== null) {
          (y.return = t.return), (iA = y);
          break;
        }
        iA = t.return;
      }
    }
    var xH = Math.ceil,
      ua = T.ReactCurrentDispatcher,
      ju = T.ReactCurrentOwner,
      _e = T.ReactCurrentBatchConfig,
      FA = 0,
      re = null,
      YA = null,
      le = 0,
      Te = 0,
      Dn = rr(0),
      Ae = 0,
      Jo = null,
      Dr = 0,
      fa = 0,
      Xu = 0,
      Yo = null,
      Fe = null,
      zu = 0,
      Kn = 1 / 0,
      bt = null,
      da = !1,
      Ju = null,
      lr = null,
      Ba = !1,
      cr = null,
      ga = 0,
      Zo = 0,
      Yu = null,
      pa = -1,
      wa = 0;
    function ve() {
      return FA & 6 ? XA() : pa !== -1 ? pa : (pa = XA());
    }
    function ur(A) {
      return A.mode & 1
        ? FA & 2 && le !== 0
          ? le & -le
          : cH.transition !== null
            ? (wa === 0 && (wa = Cw()), wa)
            : ((A = HA),
              A !== 0 ||
                ((A = window.event), (A = A === void 0 ? 16 : Sw(A.type))),
              A)
        : 1;
    }
    function tt(A, t, i, a) {
      if (50 < Zo) throw ((Zo = 0), (Yu = null), Error(n(185)));
      Co(A, i, a),
        (!(FA & 2) || A !== re) &&
          (A === re && (!(FA & 2) && (fa |= i), Ae === 4 && fr(A, le)),
          Ee(A, a),
          i === 1 &&
            FA === 0 &&
            !(t.mode & 1) &&
            ((Kn = XA() + 500), Ws && or()));
    }
    function Ee(A, t) {
      var i = A.callbackNode;
      cI(A, t);
      var a = Es(A, A === re ? le : 0);
      if (a === 0)
        i !== null && hw(i), (A.callbackNode = null), (A.callbackPriority = 0);
      else if (((t = a & -a), A.callbackPriority !== t)) {
        if ((i != null && hw(i), t === 1))
          A.tag === 0 ? lH(S0.bind(null, A)) : gh(S0.bind(null, A)),
            oH(function () {
              !(FA & 6) && or();
            }),
            (i = null);
        else {
          switch (Qw(a)) {
            case 1:
              i = Hc;
              break;
            case 4:
              i = vw;
              break;
            case 16:
              i = Qs;
              break;
            case 536870912:
              i = mw;
              break;
            default:
              i = Qs;
          }
          i = O0(i, H0.bind(null, A));
        }
        (A.callbackPriority = t), (A.callbackNode = i);
      }
    }
    function H0(A, t) {
      if (((pa = -1), (wa = 0), FA & 6)) throw Error(n(327));
      var i = A.callbackNode;
      if (kn() && A.callbackNode !== i) return null;
      var a = Es(A, A === re ? le : 0);
      if (a === 0) return null;
      if (a & 30 || a & A.expiredLanes || t) t = ha(A, a);
      else {
        t = a;
        var c = FA;
        FA |= 2;
        var d = L0();
        (re !== A || le !== t) && ((bt = null), (Kn = XA() + 500), kr(A, t));
        do
          try {
            SH();
            break;
          } catch (y) {
            b0(A, y);
          }
        while (!0);
        Bu(),
          (ua.current = d),
          (FA = c),
          YA !== null ? (t = 0) : ((re = null), (le = 0), (t = Ae));
      }
      if (t !== 0) {
        if (
          (t === 2 && ((c = Sc(A)), c !== 0 && ((a = c), (t = Zu(A, c)))),
          t === 1)
        )
          throw ((i = Jo), kr(A, 0), fr(A, a), Ee(A, XA()), i);
        if (t === 6) fr(A, a);
        else {
          if (
            ((c = A.current.alternate),
            !(a & 30) &&
              !IH(c) &&
              ((t = ha(A, a)),
              t === 2 && ((d = Sc(A)), d !== 0 && ((a = d), (t = Zu(A, d)))),
              t === 1))
          )
            throw ((i = Jo), kr(A, 0), fr(A, a), Ee(A, XA()), i);
          switch (((A.finishedWork = c), (A.finishedLanes = a), t)) {
            case 0:
            case 1:
              throw Error(n(345));
            case 2:
              Rr(A, Fe, bt);
              break;
            case 3:
              if (
                (fr(A, a),
                (a & 130023424) === a && ((t = zu + 500 - XA()), 10 < t))
              ) {
                if (Es(A, 0) !== 0) break;
                if (((c = A.suspendedLanes), (c & a) !== a)) {
                  ve(), (A.pingedLanes |= A.suspendedLanes & c);
                  break;
                }
                A.timeoutHandle = ru(Rr.bind(null, A, Fe, bt), t);
                break;
              }
              Rr(A, Fe, bt);
              break;
            case 4:
              if ((fr(A, a), (a & 4194240) === a)) break;
              for (t = A.eventTimes, c = -1; 0 < a; ) {
                var p = 31 - Ye(a);
                (d = 1 << p), (p = t[p]), p > c && (c = p), (a &= ~d);
              }
              if (
                ((a = c),
                (a = XA() - a),
                (a =
                  (120 > a
                    ? 120
                    : 480 > a
                      ? 480
                      : 1080 > a
                        ? 1080
                        : 1920 > a
                          ? 1920
                          : 3e3 > a
                            ? 3e3
                            : 4320 > a
                              ? 4320
                              : 1960 * xH(a / 1960)) - a),
                10 < a)
              ) {
                A.timeoutHandle = ru(Rr.bind(null, A, Fe, bt), a);
                break;
              }
              Rr(A, Fe, bt);
              break;
            case 5:
              Rr(A, Fe, bt);
              break;
            default:
              throw Error(n(329));
          }
        }
      }
      return Ee(A, XA()), A.callbackNode === i ? H0.bind(null, A) : null;
    }
    function Zu(A, t) {
      var i = Yo;
      return (
        A.current.memoizedState.isDehydrated && (kr(A, t).flags |= 256),
        (A = ha(A, t)),
        A !== 2 && ((t = Fe), (Fe = i), t !== null && $u(t)),
        A
      );
    }
    function $u(A) {
      Fe === null ? (Fe = A) : Fe.push.apply(Fe, A);
    }
    function IH(A) {
      for (var t = A; ; ) {
        if (t.flags & 16384) {
          var i = t.updateQueue;
          if (i !== null && ((i = i.stores), i !== null))
            for (var a = 0; a < i.length; a++) {
              var c = i[a],
                d = c.getSnapshot;
              c = c.value;
              try {
                if (!Ze(d(), c)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((i = t.child), t.subtreeFlags & 16384 && i !== null))
          (i.return = t), (t = i);
        else {
          if (t === A) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === A) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }
    function fr(A, t) {
      for (
        t &= ~Xu,
          t &= ~fa,
          A.suspendedLanes |= t,
          A.pingedLanes &= ~t,
          A = A.expirationTimes;
        0 < t;

      ) {
        var i = 31 - Ye(t),
          a = 1 << i;
        (A[i] = -1), (t &= ~a);
      }
    }
    function S0(A) {
      if (FA & 6) throw Error(n(327));
      kn();
      var t = Es(A, 0);
      if (!(t & 1)) return Ee(A, XA()), null;
      var i = ha(A, t);
      if (A.tag !== 0 && i === 2) {
        var a = Sc(A);
        a !== 0 && ((t = a), (i = Zu(A, a)));
      }
      if (i === 1) throw ((i = Jo), kr(A, 0), fr(A, t), Ee(A, XA()), i);
      if (i === 6) throw Error(n(345));
      return (
        (A.finishedWork = A.current.alternate),
        (A.finishedLanes = t),
        Rr(A, Fe, bt),
        Ee(A, XA()),
        null
      );
    }
    function qu(A, t) {
      var i = FA;
      FA |= 1;
      try {
        return A(t);
      } finally {
        (FA = i), FA === 0 && ((Kn = XA() + 500), Ws && or());
      }
    }
    function Kr(A) {
      cr !== null && cr.tag === 0 && !(FA & 6) && kn();
      var t = FA;
      FA |= 1;
      var i = _e.transition,
        a = HA;
      try {
        if (((_e.transition = null), (HA = 1), A)) return A();
      } finally {
        (HA = a), (_e.transition = i), (FA = t), !(FA & 6) && or();
      }
    }
    function Af() {
      (Te = Dn.current), kA(Dn);
    }
    function kr(A, t) {
      (A.finishedWork = null), (A.finishedLanes = 0);
      var i = A.timeoutHandle;
      if ((i !== -1 && ((A.timeoutHandle = -1), nH(i)), YA !== null))
        for (i = YA.return; i !== null; ) {
          var a = i;
          switch ((lu(a), a.tag)) {
            case 1:
              (a = a.type.childContextTypes), a != null && Vs();
              break;
            case 3:
              bn(), kA(Qe), kA(fe), Qu();
              break;
            case 5:
              mu(a);
              break;
            case 4:
              bn();
              break;
            case 13:
              kA(PA);
              break;
            case 19:
              kA(PA);
              break;
            case 10:
              gu(a.type._context);
              break;
            case 22:
            case 23:
              Af();
          }
          i = i.return;
        }
      if (
        ((re = A),
        (YA = A = dr(A.current, null)),
        (le = Te = t),
        (Ae = 0),
        (Jo = null),
        (Xu = fa = Dr = 0),
        (Fe = Yo = null),
        br !== null)
      ) {
        for (t = 0; t < br.length; t++)
          if (((i = br[t]), (a = i.interleaved), a !== null)) {
            i.interleaved = null;
            var c = a.next,
              d = i.pending;
            if (d !== null) {
              var p = d.next;
              (d.next = c), (a.next = p);
            }
            i.pending = a;
          }
        br = null;
      }
      return A;
    }
    function b0(A, t) {
      do {
        var i = YA;
        try {
          if ((Bu(), (ea.current = oa), ta)) {
            for (var a = _A.memoizedState; a !== null; ) {
              var c = a.queue;
              c !== null && (c.pending = null), (a = a.next);
            }
            ta = !1;
          }
          if (
            ((Tr = 0),
            (te = qA = _A = null),
            (Vo = !1),
            (Go = 0),
            (ju.current = null),
            i === null || i.return === null)
          ) {
            (Ae = 1), (Jo = t), (YA = null);
            break;
          }
          A: {
            var d = A,
              p = i.return,
              y = i,
              x = t;
            if (
              ((t = le),
              (y.flags |= 32768),
              x !== null && typeof x == "object" && typeof x.then == "function")
            ) {
              var K = x,
                V = y,
                W = V.tag;
              if (!(V.mode & 1) && (W === 0 || W === 11 || W === 15)) {
                var _ = V.alternate;
                _
                  ? ((V.updateQueue = _.updateQueue),
                    (V.memoizedState = _.memoizedState),
                    (V.lanes = _.lanes))
                  : ((V.updateQueue = null), (V.memoizedState = null));
              }
              var rA = t0(p);
              if (rA !== null) {
                (rA.flags &= -257),
                  r0(rA, p, y, d, t),
                  rA.mode & 1 && e0(d, K, t),
                  (t = rA),
                  (x = K);
                var aA = t.updateQueue;
                if (aA === null) {
                  var lA = new Set();
                  lA.add(x), (t.updateQueue = lA);
                } else aA.add(x);
                break A;
              } else {
                if (!(t & 1)) {
                  e0(d, K, t), ef();
                  break A;
                }
                x = Error(n(426));
              }
            } else if (OA && y.mode & 1) {
              var zA = t0(p);
              if (zA !== null) {
                !(zA.flags & 65536) && (zA.flags |= 256),
                  r0(zA, p, y, d, t),
                  fu(Ln(x, y));
                break A;
              }
            }
            (d = x = Ln(x, y)),
              Ae !== 4 && (Ae = 2),
              Yo === null ? (Yo = [d]) : Yo.push(d),
              (d = p);
            do {
              switch (d.tag) {
                case 3:
                  (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                  var L = qh(d, x, t);
                  Eh(d, L);
                  break A;
                case 1:
                  y = x;
                  var S = d.type,
                    D = d.stateNode;
                  if (
                    !(d.flags & 128) &&
                    (typeof S.getDerivedStateFromError == "function" ||
                      (D !== null &&
                        typeof D.componentDidCatch == "function" &&
                        (lr === null || !lr.has(D))))
                  ) {
                    (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                    var z = A0(d, y, t);
                    Eh(d, z);
                    break A;
                  }
              }
              d = d.return;
            } while (d !== null);
          }
          D0(i);
        } catch (cA) {
          (t = cA), YA === i && i !== null && (YA = i = i.return);
          continue;
        }
        break;
      } while (!0);
    }
    function L0() {
      var A = ua.current;
      return (ua.current = oa), A === null ? oa : A;
    }
    function ef() {
      (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
        re === null || (!(Dr & 268435455) && !(fa & 268435455)) || fr(re, le);
    }
    function ha(A, t) {
      var i = FA;
      FA |= 2;
      var a = L0();
      (re !== A || le !== t) && ((bt = null), kr(A, t));
      do
        try {
          HH();
          break;
        } catch (c) {
          b0(A, c);
        }
      while (!0);
      if ((Bu(), (FA = i), (ua.current = a), YA !== null)) throw Error(n(261));
      return (re = null), (le = 0), Ae;
    }
    function HH() {
      for (; YA !== null; ) T0(YA);
    }
    function SH() {
      for (; YA !== null && !eI(); ) T0(YA);
    }
    function T0(A) {
      var t = R0(A.alternate, A, Te);
      (A.memoizedProps = A.pendingProps),
        t === null ? D0(A) : (YA = t),
        (ju.current = null);
    }
    function D0(A) {
      var t = A;
      do {
        var i = t.alternate;
        if (((A = t.return), t.flags & 32768)) {
          if (((i = yH(i, t)), i !== null)) {
            (i.flags &= 32767), (YA = i);
            return;
          }
          if (A !== null)
            (A.flags |= 32768), (A.subtreeFlags = 0), (A.deletions = null);
          else {
            (Ae = 6), (YA = null);
            return;
          }
        } else if (((i = QH(i, t, Te)), i !== null)) {
          YA = i;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          YA = t;
          return;
        }
        YA = t = A;
      } while (t !== null);
      Ae === 0 && (Ae = 5);
    }
    function Rr(A, t, i) {
      var a = HA,
        c = _e.transition;
      try {
        (_e.transition = null), (HA = 1), bH(A, t, i, a);
      } finally {
        (_e.transition = c), (HA = a);
      }
      return null;
    }
    function bH(A, t, i, a) {
      do kn();
      while (cr !== null);
      if (FA & 6) throw Error(n(327));
      i = A.finishedWork;
      var c = A.finishedLanes;
      if (i === null) return null;
      if (((A.finishedWork = null), (A.finishedLanes = 0), i === A.current))
        throw Error(n(177));
      (A.callbackNode = null), (A.callbackPriority = 0);
      var d = i.lanes | i.childLanes;
      if (
        (uI(A, d),
        A === re && ((YA = re = null), (le = 0)),
        (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
          Ba ||
          ((Ba = !0),
          O0(Qs, function () {
            return kn(), null;
          })),
        (d = (i.flags & 15990) !== 0),
        i.subtreeFlags & 15990 || d)
      ) {
        (d = _e.transition), (_e.transition = null);
        var p = HA;
        HA = 1;
        var y = FA;
        (FA |= 4),
          (ju.current = null),
          FH(A, i),
          U0(i, A),
          ZI(eu),
          (Hs = !!Au),
          (eu = Au = null),
          (A.current = i),
          EH(i),
          tI(),
          (FA = y),
          (HA = p),
          (_e.transition = d);
      } else A.current = i;
      if (
        (Ba && ((Ba = !1), (cr = A), (ga = c)),
        (d = A.pendingLanes),
        d === 0 && (lr = null),
        oI(i.stateNode),
        Ee(A, XA()),
        t !== null)
      )
        for (a = A.onRecoverableError, i = 0; i < t.length; i++)
          (c = t[i]), a(c.value, { componentStack: c.stack, digest: c.digest });
      if (da) throw ((da = !1), (A = Ju), (Ju = null), A);
      return (
        ga & 1 && A.tag !== 0 && kn(),
        (d = A.pendingLanes),
        d & 1 ? (A === Yu ? Zo++ : ((Zo = 0), (Yu = A))) : (Zo = 0),
        or(),
        null
      );
    }
    function kn() {
      if (cr !== null) {
        var A = Qw(ga),
          t = _e.transition,
          i = HA;
        try {
          if (((_e.transition = null), (HA = 16 > A ? 16 : A), cr === null))
            var a = !1;
          else {
            if (((A = cr), (cr = null), (ga = 0), FA & 6)) throw Error(n(331));
            var c = FA;
            for (FA |= 4, iA = A.current; iA !== null; ) {
              var d = iA,
                p = d.child;
              if (iA.flags & 16) {
                var y = d.deletions;
                if (y !== null) {
                  for (var x = 0; x < y.length; x++) {
                    var K = y[x];
                    for (iA = K; iA !== null; ) {
                      var V = iA;
                      switch (V.tag) {
                        case 0:
                        case 11:
                        case 15:
                          zo(8, V, d);
                      }
                      var W = V.child;
                      if (W !== null) (W.return = V), (iA = W);
                      else
                        for (; iA !== null; ) {
                          V = iA;
                          var _ = V.sibling,
                            rA = V.return;
                          if ((v0(V), V === K)) {
                            iA = null;
                            break;
                          }
                          if (_ !== null) {
                            (_.return = rA), (iA = _);
                            break;
                          }
                          iA = rA;
                        }
                    }
                  }
                  var aA = d.alternate;
                  if (aA !== null) {
                    var lA = aA.child;
                    if (lA !== null) {
                      aA.child = null;
                      do {
                        var zA = lA.sibling;
                        (lA.sibling = null), (lA = zA);
                      } while (lA !== null);
                    }
                  }
                  iA = d;
                }
              }
              if (d.subtreeFlags & 2064 && p !== null) (p.return = d), (iA = p);
              else
                A: for (; iA !== null; ) {
                  if (((d = iA), d.flags & 2048))
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zo(9, d, d.return);
                    }
                  var L = d.sibling;
                  if (L !== null) {
                    (L.return = d.return), (iA = L);
                    break A;
                  }
                  iA = d.return;
                }
            }
            var S = A.current;
            for (iA = S; iA !== null; ) {
              p = iA;
              var D = p.child;
              if (p.subtreeFlags & 2064 && D !== null) (D.return = p), (iA = D);
              else
                A: for (p = S; iA !== null; ) {
                  if (((y = iA), y.flags & 2048))
                    try {
                      switch (y.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ca(9, y);
                      }
                    } catch (cA) {
                      VA(y, y.return, cA);
                    }
                  if (y === p) {
                    iA = null;
                    break A;
                  }
                  var z = y.sibling;
                  if (z !== null) {
                    (z.return = y.return), (iA = z);
                    break A;
                  }
                  iA = y.return;
                }
            }
            if (
              ((FA = c),
              or(),
              lt && typeof lt.onPostCommitFiberRoot == "function")
            )
              try {
                lt.onPostCommitFiberRoot(ys, A);
              } catch {}
            a = !0;
          }
          return a;
        } finally {
          (HA = i), (_e.transition = t);
        }
      }
      return !1;
    }
    function K0(A, t, i) {
      (t = Ln(i, t)),
        (t = qh(A, t, 1)),
        (A = sr(A, t, 1)),
        (t = ve()),
        A !== null && (Co(A, 1, t), Ee(A, t));
    }
    function VA(A, t, i) {
      if (A.tag === 3) K0(A, A, i);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            K0(t, A, i);
            break;
          } else if (t.tag === 1) {
            var a = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == "function" ||
              (typeof a.componentDidCatch == "function" &&
                (lr === null || !lr.has(a)))
            ) {
              (A = Ln(i, A)),
                (A = A0(t, A, 1)),
                (t = sr(t, A, 1)),
                (A = ve()),
                t !== null && (Co(t, 1, A), Ee(t, A));
              break;
            }
          }
          t = t.return;
        }
    }
    function LH(A, t, i) {
      var a = A.pingCache;
      a !== null && a.delete(t),
        (t = ve()),
        (A.pingedLanes |= A.suspendedLanes & i),
        re === A &&
          (le & i) === i &&
          (Ae === 4 || (Ae === 3 && (le & 130023424) === le && 500 > XA() - zu)
            ? kr(A, 0)
            : (Xu |= i)),
        Ee(A, t);
    }
    function k0(A, t) {
      t === 0 &&
        (A.mode & 1
          ? ((t = Fs), (Fs <<= 1), !(Fs & 130023424) && (Fs = 4194304))
          : (t = 1));
      var i = ve();
      (A = It(A, t)), A !== null && (Co(A, t, i), Ee(A, i));
    }
    function TH(A) {
      var t = A.memoizedState,
        i = 0;
      t !== null && (i = t.retryLane), k0(A, i);
    }
    function DH(A, t) {
      var i = 0;
      switch (A.tag) {
        case 13:
          var a = A.stateNode,
            c = A.memoizedState;
          c !== null && (i = c.retryLane);
          break;
        case 19:
          a = A.stateNode;
          break;
        default:
          throw Error(n(314));
      }
      a !== null && a.delete(t), k0(A, i);
    }
    var R0;
    R0 = function (A, t, i) {
      if (A !== null)
        if (A.memoizedProps !== t.pendingProps || Qe.current) Ue = !0;
        else {
          if (!(A.lanes & i) && !(t.flags & 128)) return (Ue = !1), CH(A, t, i);
          Ue = !!(A.flags & 131072);
        }
      else (Ue = !1), OA && t.flags & 1048576 && ph(t, Xs, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var a = t.type;
          aa(A, t), (A = t.pendingProps);
          var c = Un(t, fe.current);
          Sn(t, i), (c = Fu(null, t, a, A, c, i));
          var d = Eu();
          return (
            (t.flags |= 1),
            typeof c == "object" &&
            c !== null &&
            typeof c.render == "function" &&
            c.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                ye(a) ? ((d = !0), Gs(t)) : (d = !1),
                (t.memoizedState =
                  c.state !== null && c.state !== void 0 ? c.state : null),
                hu(t),
                (c.updater = ia),
                (t.stateNode = c),
                (c._reactInternals = t),
                Lu(t, a, A, i),
                (t = ku(null, t, a, !0, d, i)))
              : ((t.tag = 0),
                OA && d && au(t),
                he(null, t, c, i),
                (t = t.child)),
            t
          );
        case 16:
          a = t.elementType;
          A: {
            switch (
              (aa(A, t),
              (A = t.pendingProps),
              (c = a._init),
              (a = c(a._payload)),
              (t.type = a),
              (c = t.tag = kH(a)),
              (A = qe(a, A)),
              c)
            ) {
              case 0:
                t = Ku(null, t, a, A, i);
                break A;
              case 1:
                t = l0(null, t, a, A, i);
                break A;
              case 11:
                t = n0(null, t, a, A, i);
                break A;
              case 14:
                t = o0(null, t, a, qe(a.type, A), i);
                break A;
            }
            throw Error(n(306, a, ""));
          }
          return t;
        case 0:
          return (
            (a = t.type),
            (c = t.pendingProps),
            (c = t.elementType === a ? c : qe(a, c)),
            Ku(A, t, a, c, i)
          );
        case 1:
          return (
            (a = t.type),
            (c = t.pendingProps),
            (c = t.elementType === a ? c : qe(a, c)),
            l0(A, t, a, c, i)
          );
        case 3:
          A: {
            if ((c0(t), A === null)) throw Error(n(387));
            (a = t.pendingProps),
              (d = t.memoizedState),
              (c = d.element),
              Fh(A, t),
              qs(t, a, null, i);
            var p = t.memoizedState;
            if (((a = p.element), d.isDehydrated))
              if (
                ((d = {
                  element: a,
                  isDehydrated: !1,
                  cache: p.cache,
                  pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                  transitions: p.transitions,
                }),
                (t.updateQueue.baseState = d),
                (t.memoizedState = d),
                t.flags & 256)
              ) {
                (c = Ln(Error(n(423)), t)), (t = u0(A, t, a, i, c));
                break A;
              } else if (a !== c) {
                (c = Ln(Error(n(424)), t)), (t = u0(A, t, a, i, c));
                break A;
              } else
                for (
                  Le = tr(t.stateNode.containerInfo.firstChild),
                    be = t,
                    OA = !0,
                    $e = null,
                    i = yh(t, null, a, i),
                    t.child = i;
                  i;

                )
                  (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
            else {
              if ((xn(), a === c)) {
                t = St(A, t, i);
                break A;
              }
              he(A, t, a, i);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            Ih(t),
            A === null && uu(t),
            (a = t.type),
            (c = t.pendingProps),
            (d = A !== null ? A.memoizedProps : null),
            (p = c.children),
            tu(a, c) ? (p = null) : d !== null && tu(a, d) && (t.flags |= 32),
            a0(A, t),
            he(A, t, p, i),
            t.child
          );
        case 6:
          return A === null && uu(t), null;
        case 13:
          return f0(A, t, i);
        case 4:
          return (
            vu(t, t.stateNode.containerInfo),
            (a = t.pendingProps),
            A === null ? (t.child = In(t, null, a, i)) : he(A, t, a, i),
            t.child
          );
        case 11:
          return (
            (a = t.type),
            (c = t.pendingProps),
            (c = t.elementType === a ? c : qe(a, c)),
            n0(A, t, a, c, i)
          );
        case 7:
          return he(A, t, t.pendingProps, i), t.child;
        case 8:
          return he(A, t, t.pendingProps.children, i), t.child;
        case 12:
          return he(A, t, t.pendingProps.children, i), t.child;
        case 10:
          A: {
            if (
              ((a = t.type._context),
              (c = t.pendingProps),
              (d = t.memoizedProps),
              (p = c.value),
              TA(Ys, a._currentValue),
              (a._currentValue = p),
              d !== null)
            )
              if (Ze(d.value, p)) {
                if (d.children === c.children && !Qe.current) {
                  t = St(A, t, i);
                  break A;
                }
              } else
                for (d = t.child, d !== null && (d.return = t); d !== null; ) {
                  var y = d.dependencies;
                  if (y !== null) {
                    p = d.child;
                    for (var x = y.firstContext; x !== null; ) {
                      if (x.context === a) {
                        if (d.tag === 1) {
                          (x = Ht(-1, i & -i)), (x.tag = 2);
                          var K = d.updateQueue;
                          if (K !== null) {
                            K = K.shared;
                            var V = K.pending;
                            V === null
                              ? (x.next = x)
                              : ((x.next = V.next), (V.next = x)),
                              (K.pending = x);
                          }
                        }
                        (d.lanes |= i),
                          (x = d.alternate),
                          x !== null && (x.lanes |= i),
                          pu(d.return, i, t),
                          (y.lanes |= i);
                        break;
                      }
                      x = x.next;
                    }
                  } else if (d.tag === 10)
                    p = d.type === t.type ? null : d.child;
                  else if (d.tag === 18) {
                    if (((p = d.return), p === null)) throw Error(n(341));
                    (p.lanes |= i),
                      (y = p.alternate),
                      y !== null && (y.lanes |= i),
                      pu(p, i, t),
                      (p = d.sibling);
                  } else p = d.child;
                  if (p !== null) p.return = d;
                  else
                    for (p = d; p !== null; ) {
                      if (p === t) {
                        p = null;
                        break;
                      }
                      if (((d = p.sibling), d !== null)) {
                        (d.return = p.return), (p = d);
                        break;
                      }
                      p = p.return;
                    }
                  d = p;
                }
            he(A, t, c.children, i), (t = t.child);
          }
          return t;
        case 9:
          return (
            (c = t.type),
            (a = t.pendingProps.children),
            Sn(t, i),
            (c = Me(c)),
            (a = a(c)),
            (t.flags |= 1),
            he(A, t, a, i),
            t.child
          );
        case 14:
          return (
            (a = t.type),
            (c = qe(a, t.pendingProps)),
            (c = qe(a.type, c)),
            o0(A, t, a, c, i)
          );
        case 15:
          return i0(A, t, t.type, t.pendingProps, i);
        case 17:
          return (
            (a = t.type),
            (c = t.pendingProps),
            (c = t.elementType === a ? c : qe(a, c)),
            aa(A, t),
            (t.tag = 1),
            ye(a) ? ((A = !0), Gs(t)) : (A = !1),
            Sn(t, i),
            Zh(t, a, c),
            Lu(t, a, c, i),
            ku(null, t, a, !0, A, i)
          );
        case 19:
          return B0(A, t, i);
        case 22:
          return s0(A, t, i);
      }
      throw Error(n(156, t.tag));
    };
    function O0(A, t) {
      return ww(A, t);
    }
    function KH(A, t, i, a) {
      (this.tag = A),
        (this.key = i),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = a),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function Ve(A, t, i, a) {
      return new KH(A, t, i, a);
    }
    function tf(A) {
      return (A = A.prototype), !(!A || !A.isReactComponent);
    }
    function kH(A) {
      if (typeof A == "function") return tf(A) ? 1 : 0;
      if (A != null) {
        if (((A = A.$$typeof), A === q)) return 11;
        if (A === J) return 14;
      }
      return 2;
    }
    function dr(A, t) {
      var i = A.alternate;
      return (
        i === null
          ? ((i = Ve(A.tag, t, A.key, A.mode)),
            (i.elementType = A.elementType),
            (i.type = A.type),
            (i.stateNode = A.stateNode),
            (i.alternate = A),
            (A.alternate = i))
          : ((i.pendingProps = t),
            (i.type = A.type),
            (i.flags = 0),
            (i.subtreeFlags = 0),
            (i.deletions = null)),
        (i.flags = A.flags & 14680064),
        (i.childLanes = A.childLanes),
        (i.lanes = A.lanes),
        (i.child = A.child),
        (i.memoizedProps = A.memoizedProps),
        (i.memoizedState = A.memoizedState),
        (i.updateQueue = A.updateQueue),
        (t = A.dependencies),
        (i.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (i.sibling = A.sibling),
        (i.index = A.index),
        (i.ref = A.ref),
        i
      );
    }
    function va(A, t, i, a, c, d) {
      var p = 2;
      if (((a = A), typeof A == "function")) tf(A) && (p = 1);
      else if (typeof A == "string") p = 5;
      else
        A: switch (A) {
          case P:
            return Or(i.children, c, d, t);
          case j:
            (p = 8), (c |= 8);
            break;
          case X:
            return (
              (A = Ve(12, i, t, c | 2)), (A.elementType = X), (A.lanes = d), A
            );
          case tA:
            return (
              (A = Ve(13, i, t, c)), (A.elementType = tA), (A.lanes = d), A
            );
          case oA:
            return (
              (A = Ve(19, i, t, c)), (A.elementType = oA), (A.lanes = d), A
            );
          case Y:
            return ma(i, c, d, t);
          default:
            if (typeof A == "object" && A !== null)
              switch (A.$$typeof) {
                case sA:
                  p = 10;
                  break A;
                case dA:
                  p = 9;
                  break A;
                case q:
                  p = 11;
                  break A;
                case J:
                  p = 14;
                  break A;
                case AA:
                  (p = 16), (a = null);
                  break A;
              }
            throw Error(n(130, A == null ? A : typeof A, ""));
        }
      return (
        (t = Ve(p, i, t, c)),
        (t.elementType = A),
        (t.type = a),
        (t.lanes = d),
        t
      );
    }
    function Or(A, t, i, a) {
      return (A = Ve(7, A, a, t)), (A.lanes = i), A;
    }
    function ma(A, t, i, a) {
      return (
        (A = Ve(22, A, a, t)),
        (A.elementType = Y),
        (A.lanes = i),
        (A.stateNode = { isHidden: !1 }),
        A
      );
    }
    function rf(A, t, i) {
      return (A = Ve(6, A, null, t)), (A.lanes = i), A;
    }
    function nf(A, t, i) {
      return (
        (t = Ve(4, A.children !== null ? A.children : [], A.key, t)),
        (t.lanes = i),
        (t.stateNode = {
          containerInfo: A.containerInfo,
          pendingChildren: null,
          implementation: A.implementation,
        }),
        t
      );
    }
    function RH(A, t, i, a, c) {
      (this.tag = t),
        (this.containerInfo = A),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = bc(0)),
        (this.expirationTimes = bc(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = bc(0)),
        (this.identifierPrefix = a),
        (this.onRecoverableError = c),
        (this.mutableSourceEagerHydrationData = null);
    }
    function of(A, t, i, a, c, d, p, y, x) {
      return (
        (A = new RH(A, t, i, y, x)),
        t === 1 ? ((t = 1), d === !0 && (t |= 8)) : (t = 0),
        (d = Ve(3, null, null, t)),
        (A.current = d),
        (d.stateNode = A),
        (d.memoizedState = {
          element: a,
          isDehydrated: i,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        hu(d),
        A
      );
    }
    function OH(A, t, i) {
      var a =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: O,
        key: a == null ? null : "" + a,
        children: A,
        containerInfo: t,
        implementation: i,
      };
    }
    function N0(A) {
      if (!A) return nr;
      A = A._reactInternals;
      A: {
        if (Er(A) !== A || A.tag !== 1) throw Error(n(170));
        var t = A;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break A;
            case 1:
              if (ye(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break A;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(n(171));
      }
      if (A.tag === 1) {
        var i = A.type;
        if (ye(i)) return dh(A, i, t);
      }
      return t;
    }
    function M0(A, t, i, a, c, d, p, y, x) {
      return (
        (A = of(i, a, !0, A, c, d, p, y, x)),
        (A.context = N0(null)),
        (i = A.current),
        (a = ve()),
        (c = ur(i)),
        (d = Ht(a, c)),
        (d.callback = t ?? null),
        sr(i, d, c),
        (A.current.lanes = c),
        Co(A, c, a),
        Ee(A, a),
        A
      );
    }
    function Ca(A, t, i, a) {
      var c = t.current,
        d = ve(),
        p = ur(c);
      return (
        (i = N0(i)),
        t.context === null ? (t.context = i) : (t.pendingContext = i),
        (t = Ht(d, p)),
        (t.payload = { element: A }),
        (a = a === void 0 ? null : a),
        a !== null && (t.callback = a),
        (A = sr(c, t, p)),
        A !== null && (tt(A, c, p, d), $s(A, c, p)),
        p
      );
    }
    function Qa(A) {
      if (((A = A.current), !A.child)) return null;
      switch (A.child.tag) {
        case 5:
          return A.child.stateNode;
        default:
          return A.child.stateNode;
      }
    }
    function P0(A, t) {
      if (((A = A.memoizedState), A !== null && A.dehydrated !== null)) {
        var i = A.retryLane;
        A.retryLane = i !== 0 && i < t ? i : t;
      }
    }
    function sf(A, t) {
      P0(A, t), (A = A.alternate) && P0(A, t);
    }
    function NH() {
      return null;
    }
    var _0 =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            console.error(A);
          };
    function af(A) {
      this._internalRoot = A;
    }
    (ya.prototype.render = af.prototype.render =
      function (A) {
        var t = this._internalRoot;
        if (t === null) throw Error(n(409));
        Ca(A, t, null, null);
      }),
      (ya.prototype.unmount = af.prototype.unmount =
        function () {
          var A = this._internalRoot;
          if (A !== null) {
            this._internalRoot = null;
            var t = A.containerInfo;
            Kr(function () {
              Ca(null, A, null, null);
            }),
              (t[Ut] = null);
          }
        });
    function ya(A) {
      this._internalRoot = A;
    }
    ya.prototype.unstable_scheduleHydration = function (A) {
      if (A) {
        var t = Fw();
        A = { blockedOn: null, target: A, priority: t };
        for (var i = 0; i < qt.length && t !== 0 && t < qt[i].priority; i++);
        qt.splice(i, 0, A), i === 0 && Iw(A);
      }
    };
    function lf(A) {
      return !(
        !A ||
        (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
      );
    }
    function Ua(A) {
      return !(
        !A ||
        (A.nodeType !== 1 &&
          A.nodeType !== 9 &&
          A.nodeType !== 11 &&
          (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "))
      );
    }
    function V0() {}
    function MH(A, t, i, a, c) {
      if (c) {
        if (typeof a == "function") {
          var d = a;
          a = function () {
            var K = Qa(p);
            d.call(K);
          };
        }
        var p = M0(t, a, A, 0, null, !1, !1, "", V0);
        return (
          (A._reactRootContainer = p),
          (A[Ut] = p.current),
          Ko(A.nodeType === 8 ? A.parentNode : A),
          Kr(),
          p
        );
      }
      for (; (c = A.lastChild); ) A.removeChild(c);
      if (typeof a == "function") {
        var y = a;
        a = function () {
          var K = Qa(x);
          y.call(K);
        };
      }
      var x = of(A, 0, !1, null, null, !1, !1, "", V0);
      return (
        (A._reactRootContainer = x),
        (A[Ut] = x.current),
        Ko(A.nodeType === 8 ? A.parentNode : A),
        Kr(function () {
          Ca(t, x, i, a);
        }),
        x
      );
    }
    function Fa(A, t, i, a, c) {
      var d = i._reactRootContainer;
      if (d) {
        var p = d;
        if (typeof c == "function") {
          var y = c;
          c = function () {
            var x = Qa(p);
            y.call(x);
          };
        }
        Ca(t, p, A, c);
      } else p = MH(i, t, A, c, a);
      return Qa(p);
    }
    (yw = function (A) {
      switch (A.tag) {
        case 3:
          var t = A.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var i = mo(t.pendingLanes);
            i !== 0 &&
              (Lc(t, i | 1),
              Ee(t, XA()),
              !(FA & 6) && ((Kn = XA() + 500), or()));
          }
          break;
        case 13:
          Kr(function () {
            var a = It(A, 1);
            if (a !== null) {
              var c = ve();
              tt(a, A, 1, c);
            }
          }),
            sf(A, 1);
      }
    }),
      (Tc = function (A) {
        if (A.tag === 13) {
          var t = It(A, 134217728);
          if (t !== null) {
            var i = ve();
            tt(t, A, 134217728, i);
          }
          sf(A, 134217728);
        }
      }),
      (Uw = function (A) {
        if (A.tag === 13) {
          var t = ur(A),
            i = It(A, t);
          if (i !== null) {
            var a = ve();
            tt(i, A, t, a);
          }
          sf(A, t);
        }
      }),
      (Fw = function () {
        return HA;
      }),
      (Ew = function (A, t) {
        var i = HA;
        try {
          return (HA = A), t();
        } finally {
          HA = i;
        }
      }),
      (Fc = function (A, t, i) {
        switch (t) {
          case "input":
            if ((Fr(A, i), (t = i.name), i.type === "radio" && t != null)) {
              for (i = A; i.parentNode; ) i = i.parentNode;
              for (
                i = i.querySelectorAll(
                  "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
                ),
                  t = 0;
                t < i.length;
                t++
              ) {
                var a = i[t];
                if (a !== A && a.form === A.form) {
                  var c = _s(a);
                  if (!c) throw Error(n(90));
                  MA(a), Fr(a, c);
                }
              }
            }
            break;
          case "textarea":
            ew(A, i);
            break;
          case "select":
            (t = i.value), t != null && fn(A, !!i.multiple, t, !1);
        }
      }),
      (cw = qu),
      (uw = Kr);
    var PH = { usingClientEntryPoint: !1, Events: [Oo, Qn, _s, aw, lw, qu] },
      $o = {
        findFiberByHostInstance: xr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
      },
      _H = {
        bundleType: $o.bundleType,
        version: $o.version,
        rendererPackageName: $o.rendererPackageName,
        rendererConfig: $o.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: T.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (A) {
          return (A = gw(A)), A === null ? null : A.stateNode;
        },
        findFiberByHostInstance: $o.findFiberByHostInstance || NH,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
      };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Ea = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Ea.isDisabled && Ea.supportsFiber)
        try {
          (ys = Ea.inject(_H)), (lt = Ea);
        } catch {}
    }
    return (
      (me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PH),
      (me.createPortal = function (A, t) {
        var i =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!lf(t)) throw Error(n(200));
        return OH(A, t, null, i);
      }),
      (me.createRoot = function (A, t) {
        if (!lf(A)) throw Error(n(299));
        var i = !1,
          a = "",
          c = _0;
        return (
          t != null &&
            (t.unstable_strictMode === !0 && (i = !0),
            t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
          (t = of(A, 1, !1, null, null, i, !1, a, c)),
          (A[Ut] = t.current),
          Ko(A.nodeType === 8 ? A.parentNode : A),
          new af(t)
        );
      }),
      (me.findDOMNode = function (A) {
        if (A == null) return null;
        if (A.nodeType === 1) return A;
        var t = A._reactInternals;
        if (t === void 0)
          throw typeof A.render == "function"
            ? Error(n(188))
            : ((A = Object.keys(A).join(",")), Error(n(268, A)));
        return (A = gw(t)), (A = A === null ? null : A.stateNode), A;
      }),
      (me.flushSync = function (A) {
        return Kr(A);
      }),
      (me.hydrate = function (A, t, i) {
        if (!Ua(t)) throw Error(n(200));
        return Fa(null, A, t, !0, i);
      }),
      (me.hydrateRoot = function (A, t, i) {
        if (!lf(A)) throw Error(n(405));
        var a = (i != null && i.hydratedSources) || null,
          c = !1,
          d = "",
          p = _0;
        if (
          (i != null &&
            (i.unstable_strictMode === !0 && (c = !0),
            i.identifierPrefix !== void 0 && (d = i.identifierPrefix),
            i.onRecoverableError !== void 0 && (p = i.onRecoverableError)),
          (t = M0(t, null, A, 1, i ?? null, c, !1, d, p)),
          (A[Ut] = t.current),
          Ko(A),
          a)
        )
          for (A = 0; A < a.length; A++)
            (i = a[A]),
              (c = i._getVersion),
              (c = c(i._source)),
              t.mutableSourceEagerHydrationData == null
                ? (t.mutableSourceEagerHydrationData = [i, c])
                : t.mutableSourceEagerHydrationData.push(i, c);
        return new ya(t);
      }),
      (me.render = function (A, t, i) {
        if (!Ua(t)) throw Error(n(200));
        return Fa(null, A, t, !1, i);
      }),
      (me.unmountComponentAtNode = function (A) {
        if (!Ua(A)) throw Error(n(40));
        return A._reactRootContainer
          ? (Kr(function () {
              Fa(null, null, A, !1, function () {
                (A._reactRootContainer = null), (A[Ut] = null);
              });
            }),
            !0)
          : !1;
      }),
      (me.unstable_batchedUpdates = qu),
      (me.unstable_renderSubtreeIntoContainer = function (A, t, i, a) {
        if (!Ua(i)) throw Error(n(200));
        if (A == null || A._reactInternals === void 0) throw Error(n(38));
        return Fa(A, t, i, !1, a);
      }),
      (me.version = "18.3.1-next-f1338f8080-20240426"),
      me
    );
  }
  function vf() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vf);
      } catch (e) {
        console.error(e);
      }
  }
  vf(), (gf.exports = z0());
  var gr = gf.exports;
  const J0 = cf(gr);
  var mf = gr;
  (Ha.createRoot = mf.createRoot), (Ha.hydrateRoot = mf.hydrateRoot);
  var C = Ia();
  const Lt = cf(C),
    Y0 = qo({ __proto__: null, default: Lt }, [C]);
  /*!
   * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
   * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   */ /*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */ var La =
    function (e, r) {
      return (
        (La =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (n, o) {
              n.__proto__ = o;
            }) ||
          function (n, o) {
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
          }),
        La(e, r)
      );
    };
  function Ge(e, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError(
        "Class extends value " + String(r) + " is not a constructor or null",
      );
    La(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype =
      r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
  }
  var Ta = function () {
    return (
      (Ta =
        Object.assign ||
        function (r) {
          for (var n, o = 1, s = arguments.length; o < s; o++) {
            n = arguments[o];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (r[l] = n[l]);
          }
          return r;
        }),
      Ta.apply(this, arguments)
    );
  };
  function pe(e, r, n, o) {
    function s(l) {
      return l instanceof n
        ? l
        : new n(function (u) {
            u(l);
          });
    }
    return new (n || (n = Promise))(function (l, u) {
      function f(w) {
        try {
          g(o.next(w));
        } catch (h) {
          u(h);
        }
      }
      function B(w) {
        try {
          g(o.throw(w));
        } catch (h) {
          u(h);
        }
      }
      function g(w) {
        w.done ? l(w.value) : s(w.value).then(f, B);
      }
      g((o = o.apply(e, [])).next());
    });
  }
  function ce(e, r) {
    var n = {
        label: 0,
        sent: function () {
          if (l[0] & 1) throw l[1];
          return l[1];
        },
        trys: [],
        ops: [],
      },
      o,
      s,
      l,
      u;
    return (
      (u = { next: f(0), throw: f(1), return: f(2) }),
      typeof Symbol == "function" &&
        (u[Symbol.iterator] = function () {
          return this;
        }),
      u
    );
    function f(g) {
      return function (w) {
        return B([g, w]);
      };
    }
    function B(g) {
      if (o) throw new TypeError("Generator is already executing.");
      for (; n; )
        try {
          if (
            ((o = 1),
            s &&
              (l =
                g[0] & 2
                  ? s.return
                  : g[0]
                    ? s.throw || ((l = s.return) && l.call(s), 0)
                    : s.next) &&
              !(l = l.call(s, g[1])).done)
          )
            return l;
          switch (((s = 0), l && (g = [g[0] & 2, l.value]), g[0])) {
            case 0:
            case 1:
              l = g;
              break;
            case 4:
              return n.label++, { value: g[1], done: !1 };
            case 5:
              n.label++, (s = g[1]), (g = [0]);
              continue;
            case 7:
              (g = n.ops.pop()), n.trys.pop();
              continue;
            default:
              if (
                ((l = n.trys),
                !(l = l.length > 0 && l[l.length - 1]) &&
                  (g[0] === 6 || g[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (g[0] === 3 && (!l || (g[1] > l[0] && g[1] < l[3]))) {
                n.label = g[1];
                break;
              }
              if (g[0] === 6 && n.label < l[1]) {
                (n.label = l[1]), (l = g);
                break;
              }
              if (l && n.label < l[2]) {
                (n.label = l[2]), n.ops.push(g);
                break;
              }
              l[2] && n.ops.pop(), n.trys.pop();
              continue;
          }
          g = r.call(e, n);
        } catch (w) {
          (g = [6, w]), (s = 0);
        } finally {
          o = l = 0;
        }
      if (g[0] & 5) throw g[1];
      return { value: g[0] ? g[1] : void 0, done: !0 };
    }
  }
  function Ai(e, r, n) {
    if (arguments.length === 2)
      for (var o = 0, s = r.length, l; o < s; o++)
        (l || !(o in r)) &&
          (l || (l = Array.prototype.slice.call(r, 0, o)), (l[o] = r[o]));
    return e.concat(l || r);
  }
  for (
    var Bt = (function () {
        function e(r, n, o, s) {
          (this.left = r), (this.top = n), (this.width = o), (this.height = s);
        }
        return (
          (e.prototype.add = function (r, n, o, s) {
            return new e(
              this.left + r,
              this.top + n,
              this.width + o,
              this.height + s,
            );
          }),
          (e.fromClientRect = function (r, n) {
            return new e(
              n.left + r.windowBounds.left,
              n.top + r.windowBounds.top,
              n.width,
              n.height,
            );
          }),
          (e.fromDOMRectList = function (r, n) {
            var o = Array.from(n).find(function (s) {
              return s.width !== 0;
            });
            return o
              ? new e(
                  o.left + r.windowBounds.left,
                  o.top + r.windowBounds.top,
                  o.width,
                  o.height,
                )
              : e.EMPTY;
          }),
          (e.EMPTY = new e(0, 0, 0, 0)),
          e
        );
      })(),
      ei = function (e, r) {
        return Bt.fromClientRect(e, r.getBoundingClientRect());
      },
      Z0 = function (e) {
        var r = e.body,
          n = e.documentElement;
        if (!r || !n) throw new Error("Unable to get document size");
        var o = Math.max(
            Math.max(r.scrollWidth, n.scrollWidth),
            Math.max(r.offsetWidth, n.offsetWidth),
            Math.max(r.clientWidth, n.clientWidth),
          ),
          s = Math.max(
            Math.max(r.scrollHeight, n.scrollHeight),
            Math.max(r.offsetHeight, n.offsetHeight),
            Math.max(r.clientHeight, n.clientHeight),
          );
        return new Bt(0, 0, o, s);
      },
      ti = function (e) {
        for (var r = [], n = 0, o = e.length; n < o; ) {
          var s = e.charCodeAt(n++);
          if (s >= 55296 && s <= 56319 && n < o) {
            var l = e.charCodeAt(n++);
            (l & 64512) === 56320
              ? r.push(((s & 1023) << 10) + (l & 1023) + 65536)
              : (r.push(s), n--);
          } else r.push(s);
        }
        return r;
      },
      GA = function () {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        if (String.fromCodePoint) return String.fromCodePoint.apply(String, e);
        var n = e.length;
        if (!n) return "";
        for (var o = [], s = -1, l = ""; ++s < n; ) {
          var u = e[s];
          u <= 65535
            ? o.push(u)
            : ((u -= 65536), o.push((u >> 10) + 55296, (u % 1024) + 56320)),
            (s + 1 === n || o.length > 16384) &&
              ((l += String.fromCharCode.apply(String, o)), (o.length = 0));
        }
        return l;
      },
      Cf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      $0 = typeof Uint8Array > "u" ? [] : new Uint8Array(256),
      ri = 0;
    ri < Cf.length;
    ri++
  )
    $0[Cf.charCodeAt(ri)] = ri;
  for (
    var Qf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      On = typeof Uint8Array > "u" ? [] : new Uint8Array(256),
      ni = 0;
    ni < Qf.length;
    ni++
  )
    On[Qf.charCodeAt(ni)] = ni;
  for (
    var q0 = function (e) {
        var r = e.length * 0.75,
          n = e.length,
          o,
          s = 0,
          l,
          u,
          f,
          B;
        e[e.length - 1] === "=" && (r--, e[e.length - 2] === "=" && r--);
        var g =
            typeof ArrayBuffer < "u" &&
            typeof Uint8Array < "u" &&
            typeof Uint8Array.prototype.slice < "u"
              ? new ArrayBuffer(r)
              : new Array(r),
          w = Array.isArray(g) ? g : new Uint8Array(g);
        for (o = 0; o < n; o += 4)
          (l = On[e.charCodeAt(o)]),
            (u = On[e.charCodeAt(o + 1)]),
            (f = On[e.charCodeAt(o + 2)]),
            (B = On[e.charCodeAt(o + 3)]),
            (w[s++] = (l << 2) | (u >> 4)),
            (w[s++] = ((u & 15) << 4) | (f >> 2)),
            (w[s++] = ((f & 3) << 6) | (B & 63));
        return g;
      },
      Av = function (e) {
        for (var r = e.length, n = [], o = 0; o < r; o += 2)
          n.push((e[o + 1] << 8) | e[o]);
        return n;
      },
      ev = function (e) {
        for (var r = e.length, n = [], o = 0; o < r; o += 4)
          n.push((e[o + 3] << 24) | (e[o + 2] << 16) | (e[o + 1] << 8) | e[o]);
        return n;
      },
      pr = 5,
      Da = 11,
      Ka = 2,
      tv = Da - pr,
      yf = 65536 >> pr,
      rv = 1 << pr,
      ka = rv - 1,
      nv = 1024 >> pr,
      ov = yf + nv,
      iv = ov,
      sv = 32,
      av = iv + sv,
      lv = 65536 >> Da,
      cv = 1 << tv,
      uv = cv - 1,
      Uf = function (e, r, n) {
        return e.slice
          ? e.slice(r, n)
          : new Uint16Array(Array.prototype.slice.call(e, r, n));
      },
      fv = function (e, r, n) {
        return e.slice
          ? e.slice(r, n)
          : new Uint32Array(Array.prototype.slice.call(e, r, n));
      },
      dv = function (e, r) {
        var n = q0(e),
          o = Array.isArray(n) ? ev(n) : new Uint32Array(n),
          s = Array.isArray(n) ? Av(n) : new Uint16Array(n),
          l = 24,
          u = Uf(s, l / 2, o[4] / 2),
          f =
            o[5] === 2
              ? Uf(s, (l + o[4]) / 2)
              : fv(o, Math.ceil((l + o[4]) / 4));
        return new Bv(o[0], o[1], o[2], o[3], u, f);
      },
      Bv = (function () {
        function e(r, n, o, s, l, u) {
          (this.initialValue = r),
            (this.errorValue = n),
            (this.highStart = o),
            (this.highValueIndex = s),
            (this.index = l),
            (this.data = u);
        }
        return (
          (e.prototype.get = function (r) {
            var n;
            if (r >= 0) {
              if (r < 55296 || (r > 56319 && r <= 65535))
                return (
                  (n = this.index[r >> pr]),
                  (n = (n << Ka) + (r & ka)),
                  this.data[n]
                );
              if (r <= 65535)
                return (
                  (n = this.index[yf + ((r - 55296) >> pr)]),
                  (n = (n << Ka) + (r & ka)),
                  this.data[n]
                );
              if (r < this.highStart)
                return (
                  (n = av - lv + (r >> Da)),
                  (n = this.index[n]),
                  (n += (r >> pr) & uv),
                  (n = this.index[n]),
                  (n = (n << Ka) + (r & ka)),
                  this.data[n]
                );
              if (r <= 1114111) return this.data[this.highValueIndex];
            }
            return this.errorValue;
          }),
          e
        );
      })(),
      Ff = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      gv = typeof Uint8Array > "u" ? [] : new Uint8Array(256),
      oi = 0;
    oi < Ff.length;
    oi++
  )
    gv[Ff.charCodeAt(oi)] = oi;
  var pv =
      "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",
    Ef = 50,
    wv = 1,
    xf = 2,
    If = 3,
    hv = 4,
    vv = 5,
    Hf = 7,
    Sf = 8,
    bf = 9,
    Tt = 10,
    Ra = 11,
    Lf = 12,
    Oa = 13,
    mv = 14,
    Nn = 15,
    Na = 16,
    ii = 17,
    Mn = 18,
    Cv = 19,
    Tf = 20,
    Ma = 21,
    Pn = 22,
    Pa = 23,
    Nr = 24,
    xe = 25,
    _n = 26,
    Vn = 27,
    Mr = 28,
    Qv = 29,
    wr = 30,
    yv = 31,
    si = 32,
    ai = 33,
    _a = 34,
    Va = 35,
    Ga = 36,
    Gn = 37,
    Wa = 38,
    li = 39,
    ci = 40,
    ja = 41,
    Df = 42,
    Uv = 43,
    Fv = [9001, 65288],
    Kf = "!",
    UA = "×",
    ui = "÷",
    Xa = dv(pv),
    gt = [wr, Ga],
    za = [wv, xf, If, vv],
    kf = [Tt, Sf],
    Rf = [Vn, _n],
    Ev = za.concat(kf),
    Of = [Wa, li, ci, _a, Va],
    xv = [Nn, Oa],
    Iv = function (e, r) {
      r === void 0 && (r = "strict");
      var n = [],
        o = [],
        s = [];
      return (
        e.forEach(function (l, u) {
          var f = Xa.get(l);
          if (
            (f > Ef ? (s.push(!0), (f -= Ef)) : s.push(!1),
            ["normal", "auto", "loose"].indexOf(r) !== -1 &&
              [8208, 8211, 12316, 12448].indexOf(l) !== -1)
          )
            return o.push(u), n.push(Na);
          if (f === hv || f === Ra) {
            if (u === 0) return o.push(u), n.push(wr);
            var B = n[u - 1];
            return Ev.indexOf(B) === -1
              ? (o.push(o[u - 1]), n.push(B))
              : (o.push(u), n.push(wr));
          }
          if ((o.push(u), f === yv)) return n.push(r === "strict" ? Ma : Gn);
          if (f === Df || f === Qv) return n.push(wr);
          if (f === Uv)
            return (l >= 131072 && l <= 196605) || (l >= 196608 && l <= 262141)
              ? n.push(Gn)
              : n.push(wr);
          n.push(f);
        }),
        [o, n, s]
      );
    },
    Ja = function (e, r, n, o) {
      var s = o[n];
      if (Array.isArray(e) ? e.indexOf(s) !== -1 : e === s)
        for (var l = n; l <= o.length; ) {
          l++;
          var u = o[l];
          if (u === r) return !0;
          if (u !== Tt) break;
        }
      if (s === Tt)
        for (var l = n; l > 0; ) {
          l--;
          var f = o[l];
          if (Array.isArray(e) ? e.indexOf(f) !== -1 : e === f)
            for (var B = n; B <= o.length; ) {
              B++;
              var u = o[B];
              if (u === r) return !0;
              if (u !== Tt) break;
            }
          if (f !== Tt) break;
        }
      return !1;
    },
    Nf = function (e, r) {
      for (var n = e; n >= 0; ) {
        var o = r[n];
        if (o === Tt) n--;
        else return o;
      }
      return 0;
    },
    Hv = function (e, r, n, o, s) {
      if (n[o] === 0) return UA;
      var l = o - 1;
      if (Array.isArray(s) && s[l] === !0) return UA;
      var u = l - 1,
        f = l + 1,
        B = r[l],
        g = u >= 0 ? r[u] : 0,
        w = r[f];
      if (B === xf && w === If) return UA;
      if (za.indexOf(B) !== -1) return Kf;
      if (za.indexOf(w) !== -1 || kf.indexOf(w) !== -1) return UA;
      if (Nf(l, r) === Sf) return ui;
      if (
        Xa.get(e[l]) === Ra ||
        ((B === si || B === ai) && Xa.get(e[f]) === Ra) ||
        B === Hf ||
        w === Hf ||
        B === bf ||
        ([Tt, Oa, Nn].indexOf(B) === -1 && w === bf) ||
        [ii, Mn, Cv, Nr, Mr].indexOf(w) !== -1 ||
        Nf(l, r) === Pn ||
        Ja(Pa, Pn, l, r) ||
        Ja([ii, Mn], Ma, l, r) ||
        Ja(Lf, Lf, l, r)
      )
        return UA;
      if (B === Tt) return ui;
      if (B === Pa || w === Pa) return UA;
      if (w === Na || B === Na) return ui;
      if (
        [Oa, Nn, Ma].indexOf(w) !== -1 ||
        B === mv ||
        (g === Ga && xv.indexOf(B) !== -1) ||
        (B === Mr && w === Ga) ||
        w === Tf ||
        (gt.indexOf(w) !== -1 && B === xe) ||
        (gt.indexOf(B) !== -1 && w === xe) ||
        (B === Vn && [Gn, si, ai].indexOf(w) !== -1) ||
        ([Gn, si, ai].indexOf(B) !== -1 && w === _n) ||
        (gt.indexOf(B) !== -1 && Rf.indexOf(w) !== -1) ||
        (Rf.indexOf(B) !== -1 && gt.indexOf(w) !== -1) ||
        ([Vn, _n].indexOf(B) !== -1 &&
          (w === xe || ([Pn, Nn].indexOf(w) !== -1 && r[f + 1] === xe))) ||
        ([Pn, Nn].indexOf(B) !== -1 && w === xe) ||
        (B === xe && [xe, Mr, Nr].indexOf(w) !== -1)
      )
        return UA;
      if ([xe, Mr, Nr, ii, Mn].indexOf(w) !== -1)
        for (var h = l; h >= 0; ) {
          var v = r[h];
          if (v === xe) return UA;
          if ([Mr, Nr].indexOf(v) !== -1) h--;
          else break;
        }
      if ([Vn, _n].indexOf(w) !== -1)
        for (var h = [ii, Mn].indexOf(B) !== -1 ? u : l; h >= 0; ) {
          var v = r[h];
          if (v === xe) return UA;
          if ([Mr, Nr].indexOf(v) !== -1) h--;
          else break;
        }
      if (
        (Wa === B && [Wa, li, _a, Va].indexOf(w) !== -1) ||
        ([li, _a].indexOf(B) !== -1 && [li, ci].indexOf(w) !== -1) ||
        ([ci, Va].indexOf(B) !== -1 && w === ci) ||
        (Of.indexOf(B) !== -1 && [Tf, _n].indexOf(w) !== -1) ||
        (Of.indexOf(w) !== -1 && B === Vn) ||
        (gt.indexOf(B) !== -1 && gt.indexOf(w) !== -1) ||
        (B === Nr && gt.indexOf(w) !== -1) ||
        (gt.concat(xe).indexOf(B) !== -1 &&
          w === Pn &&
          Fv.indexOf(e[f]) === -1) ||
        (gt.concat(xe).indexOf(w) !== -1 && B === Mn)
      )
        return UA;
      if (B === ja && w === ja) {
        for (var U = n[l], Q = 1; U > 0 && (U--, r[U] === ja); ) Q++;
        if (Q % 2 !== 0) return UA;
      }
      return B === si && w === ai ? UA : ui;
    },
    Sv = function (e, r) {
      r || (r = { lineBreak: "normal", wordBreak: "normal" });
      var n = Iv(e, r.lineBreak),
        o = n[0],
        s = n[1],
        l = n[2];
      (r.wordBreak === "break-all" || r.wordBreak === "break-word") &&
        (s = s.map(function (f) {
          return [xe, wr, Df].indexOf(f) !== -1 ? Gn : f;
        }));
      var u =
        r.wordBreak === "keep-all"
          ? l.map(function (f, B) {
              return f && e[B] >= 19968 && e[B] <= 40959;
            })
          : void 0;
      return [o, s, u];
    },
    bv = (function () {
      function e(r, n, o, s) {
        (this.codePoints = r),
          (this.required = n === Kf),
          (this.start = o),
          (this.end = s);
      }
      return (
        (e.prototype.slice = function () {
          return GA.apply(void 0, this.codePoints.slice(this.start, this.end));
        }),
        e
      );
    })(),
    Lv = function (e, r) {
      var n = ti(e),
        o = Sv(n, r),
        s = o[0],
        l = o[1],
        u = o[2],
        f = n.length,
        B = 0,
        g = 0;
      return {
        next: function () {
          if (g >= f) return { done: !0, value: null };
          for (var w = UA; g < f && (w = Hv(n, l, s, ++g, u)) === UA; );
          if (w !== UA || g === f) {
            var h = new bv(n, w, B, g);
            return (B = g), { value: h, done: !1 };
          }
          return { done: !0, value: null };
        },
      };
    },
    Tv = 1,
    Dv = 2,
    Wn = 4,
    Mf = 8,
    fi = 10,
    Pf = 47,
    jn = 92,
    Kv = 9,
    kv = 32,
    di = 34,
    Xn = 61,
    Rv = 35,
    Ov = 36,
    Nv = 37,
    Bi = 39,
    gi = 40,
    zn = 41,
    Mv = 95,
    Ce = 45,
    Pv = 33,
    _v = 60,
    Vv = 62,
    Gv = 64,
    Wv = 91,
    jv = 93,
    Xv = 61,
    zv = 123,
    pi = 63,
    Jv = 125,
    _f = 124,
    Yv = 126,
    Zv = 128,
    Vf = 65533,
    Ya = 42,
    hr = 43,
    $v = 44,
    qv = 58,
    Am = 59,
    Jn = 46,
    em = 0,
    tm = 8,
    rm = 11,
    nm = 14,
    om = 31,
    im = 127,
    rt = -1,
    Gf = 48,
    Wf = 97,
    jf = 101,
    sm = 102,
    am = 117,
    lm = 122,
    Xf = 65,
    zf = 69,
    Jf = 70,
    cm = 85,
    um = 90,
    ue = function (e) {
      return e >= Gf && e <= 57;
    },
    fm = function (e) {
      return e >= 55296 && e <= 57343;
    },
    Pr = function (e) {
      return ue(e) || (e >= Xf && e <= Jf) || (e >= Wf && e <= sm);
    },
    dm = function (e) {
      return e >= Wf && e <= lm;
    },
    Bm = function (e) {
      return e >= Xf && e <= um;
    },
    gm = function (e) {
      return dm(e) || Bm(e);
    },
    pm = function (e) {
      return e >= Zv;
    },
    wi = function (e) {
      return e === fi || e === Kv || e === kv;
    },
    hi = function (e) {
      return gm(e) || pm(e) || e === Mv;
    },
    Yf = function (e) {
      return hi(e) || ue(e) || e === Ce;
    },
    wm = function (e) {
      return (
        (e >= em && e <= tm) || e === rm || (e >= nm && e <= om) || e === im
      );
    },
    Dt = function (e, r) {
      return e !== jn ? !1 : r !== fi;
    },
    vi = function (e, r, n) {
      return e === Ce
        ? hi(r) || Dt(r, n)
        : hi(e)
          ? !0
          : !!(e === jn && Dt(e, r));
    },
    Za = function (e, r, n) {
      return e === hr || e === Ce
        ? ue(r)
          ? !0
          : r === Jn && ue(n)
        : ue(e === Jn ? r : e);
    },
    hm = function (e) {
      var r = 0,
        n = 1;
      (e[r] === hr || e[r] === Ce) && (e[r] === Ce && (n = -1), r++);
      for (var o = []; ue(e[r]); ) o.push(e[r++]);
      var s = o.length ? parseInt(GA.apply(void 0, o), 10) : 0;
      e[r] === Jn && r++;
      for (var l = []; ue(e[r]); ) l.push(e[r++]);
      var u = l.length,
        f = u ? parseInt(GA.apply(void 0, l), 10) : 0;
      (e[r] === zf || e[r] === jf) && r++;
      var B = 1;
      (e[r] === hr || e[r] === Ce) && (e[r] === Ce && (B = -1), r++);
      for (var g = []; ue(e[r]); ) g.push(e[r++]);
      var w = g.length ? parseInt(GA.apply(void 0, g), 10) : 0;
      return n * (s + f * Math.pow(10, -u)) * Math.pow(10, B * w);
    },
    vm = { type: 2 },
    mm = { type: 3 },
    Cm = { type: 4 },
    Qm = { type: 13 },
    ym = { type: 8 },
    Um = { type: 21 },
    Fm = { type: 9 },
    Em = { type: 10 },
    xm = { type: 11 },
    Im = { type: 12 },
    Hm = { type: 14 },
    mi = { type: 23 },
    Sm = { type: 1 },
    bm = { type: 25 },
    Lm = { type: 24 },
    Tm = { type: 26 },
    Dm = { type: 27 },
    Km = { type: 28 },
    km = { type: 29 },
    Rm = { type: 31 },
    $a = { type: 32 },
    Zf = (function () {
      function e() {
        this._value = [];
      }
      return (
        (e.prototype.write = function (r) {
          this._value = this._value.concat(ti(r));
        }),
        (e.prototype.read = function () {
          for (var r = [], n = this.consumeToken(); n !== $a; )
            r.push(n), (n = this.consumeToken());
          return r;
        }),
        (e.prototype.consumeToken = function () {
          var r = this.consumeCodePoint();
          switch (r) {
            case di:
              return this.consumeStringToken(di);
            case Rv:
              var n = this.peekCodePoint(0),
                o = this.peekCodePoint(1),
                s = this.peekCodePoint(2);
              if (Yf(n) || Dt(o, s)) {
                var l = vi(n, o, s) ? Dv : Tv,
                  u = this.consumeName();
                return { type: 5, value: u, flags: l };
              }
              break;
            case Ov:
              if (this.peekCodePoint(0) === Xn)
                return this.consumeCodePoint(), Qm;
              break;
            case Bi:
              return this.consumeStringToken(Bi);
            case gi:
              return vm;
            case zn:
              return mm;
            case Ya:
              if (this.peekCodePoint(0) === Xn)
                return this.consumeCodePoint(), Hm;
              break;
            case hr:
              if (Za(r, this.peekCodePoint(0), this.peekCodePoint(1)))
                return this.reconsumeCodePoint(r), this.consumeNumericToken();
              break;
            case $v:
              return Cm;
            case Ce:
              var f = r,
                B = this.peekCodePoint(0),
                g = this.peekCodePoint(1);
              if (Za(f, B, g))
                return this.reconsumeCodePoint(r), this.consumeNumericToken();
              if (vi(f, B, g))
                return this.reconsumeCodePoint(r), this.consumeIdentLikeToken();
              if (B === Ce && g === Vv)
                return this.consumeCodePoint(), this.consumeCodePoint(), Lm;
              break;
            case Jn:
              if (Za(r, this.peekCodePoint(0), this.peekCodePoint(1)))
                return this.reconsumeCodePoint(r), this.consumeNumericToken();
              break;
            case Pf:
              if (this.peekCodePoint(0) === Ya)
                for (this.consumeCodePoint(); ; ) {
                  var w = this.consumeCodePoint();
                  if (w === Ya && ((w = this.consumeCodePoint()), w === Pf))
                    return this.consumeToken();
                  if (w === rt) return this.consumeToken();
                }
              break;
            case qv:
              return Tm;
            case Am:
              return Dm;
            case _v:
              if (
                this.peekCodePoint(0) === Pv &&
                this.peekCodePoint(1) === Ce &&
                this.peekCodePoint(2) === Ce
              )
                return this.consumeCodePoint(), this.consumeCodePoint(), bm;
              break;
            case Gv:
              var h = this.peekCodePoint(0),
                v = this.peekCodePoint(1),
                U = this.peekCodePoint(2);
              if (vi(h, v, U)) {
                var u = this.consumeName();
                return { type: 7, value: u };
              }
              break;
            case Wv:
              return Km;
            case jn:
              if (Dt(r, this.peekCodePoint(0)))
                return this.reconsumeCodePoint(r), this.consumeIdentLikeToken();
              break;
            case jv:
              return km;
            case Xv:
              if (this.peekCodePoint(0) === Xn)
                return this.consumeCodePoint(), ym;
              break;
            case zv:
              return xm;
            case Jv:
              return Im;
            case am:
            case cm:
              var Q = this.peekCodePoint(0),
                m = this.peekCodePoint(1);
              return (
                Q === hr &&
                  (Pr(m) || m === pi) &&
                  (this.consumeCodePoint(), this.consumeUnicodeRangeToken()),
                this.reconsumeCodePoint(r),
                this.consumeIdentLikeToken()
              );
            case _f:
              if (this.peekCodePoint(0) === Xn)
                return this.consumeCodePoint(), Fm;
              if (this.peekCodePoint(0) === _f)
                return this.consumeCodePoint(), Um;
              break;
            case Yv:
              if (this.peekCodePoint(0) === Xn)
                return this.consumeCodePoint(), Em;
              break;
            case rt:
              return $a;
          }
          return wi(r)
            ? (this.consumeWhiteSpace(), Rm)
            : ue(r)
              ? (this.reconsumeCodePoint(r), this.consumeNumericToken())
              : hi(r)
                ? (this.reconsumeCodePoint(r), this.consumeIdentLikeToken())
                : { type: 6, value: GA(r) };
        }),
        (e.prototype.consumeCodePoint = function () {
          var r = this._value.shift();
          return typeof r > "u" ? -1 : r;
        }),
        (e.prototype.reconsumeCodePoint = function (r) {
          this._value.unshift(r);
        }),
        (e.prototype.peekCodePoint = function (r) {
          return r >= this._value.length ? -1 : this._value[r];
        }),
        (e.prototype.consumeUnicodeRangeToken = function () {
          for (var r = [], n = this.consumeCodePoint(); Pr(n) && r.length < 6; )
            r.push(n), (n = this.consumeCodePoint());
          for (var o = !1; n === pi && r.length < 6; )
            r.push(n), (n = this.consumeCodePoint()), (o = !0);
          if (o) {
            var s = parseInt(
                GA.apply(
                  void 0,
                  r.map(function (B) {
                    return B === pi ? Gf : B;
                  }),
                ),
                16,
              ),
              l = parseInt(
                GA.apply(
                  void 0,
                  r.map(function (B) {
                    return B === pi ? Jf : B;
                  }),
                ),
                16,
              );
            return { type: 30, start: s, end: l };
          }
          var u = parseInt(GA.apply(void 0, r), 16);
          if (this.peekCodePoint(0) === Ce && Pr(this.peekCodePoint(1))) {
            this.consumeCodePoint(), (n = this.consumeCodePoint());
            for (var f = []; Pr(n) && f.length < 6; )
              f.push(n), (n = this.consumeCodePoint());
            var l = parseInt(GA.apply(void 0, f), 16);
            return { type: 30, start: u, end: l };
          } else return { type: 30, start: u, end: u };
        }),
        (e.prototype.consumeIdentLikeToken = function () {
          var r = this.consumeName();
          return r.toLowerCase() === "url" && this.peekCodePoint(0) === gi
            ? (this.consumeCodePoint(), this.consumeUrlToken())
            : this.peekCodePoint(0) === gi
              ? (this.consumeCodePoint(), { type: 19, value: r })
              : { type: 20, value: r };
        }),
        (e.prototype.consumeUrlToken = function () {
          var r = [];
          if ((this.consumeWhiteSpace(), this.peekCodePoint(0) === rt))
            return { type: 22, value: "" };
          var n = this.peekCodePoint(0);
          if (n === Bi || n === di) {
            var o = this.consumeStringToken(this.consumeCodePoint());
            return o.type === 0 &&
              (this.consumeWhiteSpace(),
              this.peekCodePoint(0) === rt || this.peekCodePoint(0) === zn)
              ? (this.consumeCodePoint(), { type: 22, value: o.value })
              : (this.consumeBadUrlRemnants(), mi);
          }
          for (;;) {
            var s = this.consumeCodePoint();
            if (s === rt || s === zn)
              return { type: 22, value: GA.apply(void 0, r) };
            if (wi(s))
              return (
                this.consumeWhiteSpace(),
                this.peekCodePoint(0) === rt || this.peekCodePoint(0) === zn
                  ? (this.consumeCodePoint(),
                    { type: 22, value: GA.apply(void 0, r) })
                  : (this.consumeBadUrlRemnants(), mi)
              );
            if (s === di || s === Bi || s === gi || wm(s))
              return this.consumeBadUrlRemnants(), mi;
            if (s === jn)
              if (Dt(s, this.peekCodePoint(0)))
                r.push(this.consumeEscapedCodePoint());
              else return this.consumeBadUrlRemnants(), mi;
            else r.push(s);
          }
        }),
        (e.prototype.consumeWhiteSpace = function () {
          for (; wi(this.peekCodePoint(0)); ) this.consumeCodePoint();
        }),
        (e.prototype.consumeBadUrlRemnants = function () {
          for (;;) {
            var r = this.consumeCodePoint();
            if (r === zn || r === rt) return;
            Dt(r, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
          }
        }),
        (e.prototype.consumeStringSlice = function (r) {
          for (var n = 5e4, o = ""; r > 0; ) {
            var s = Math.min(n, r);
            (o += GA.apply(void 0, this._value.splice(0, s))), (r -= s);
          }
          return this._value.shift(), o;
        }),
        (e.prototype.consumeStringToken = function (r) {
          var n = "",
            o = 0;
          do {
            var s = this._value[o];
            if (s === rt || s === void 0 || s === r)
              return (n += this.consumeStringSlice(o)), { type: 0, value: n };
            if (s === fi) return this._value.splice(0, o), Sm;
            if (s === jn) {
              var l = this._value[o + 1];
              l !== rt &&
                l !== void 0 &&
                (l === fi
                  ? ((n += this.consumeStringSlice(o)),
                    (o = -1),
                    this._value.shift())
                  : Dt(s, l) &&
                    ((n += this.consumeStringSlice(o)),
                    (n += GA(this.consumeEscapedCodePoint())),
                    (o = -1)));
            }
            o++;
          } while (!0);
        }),
        (e.prototype.consumeNumber = function () {
          var r = [],
            n = Wn,
            o = this.peekCodePoint(0);
          for (
            (o === hr || o === Ce) && r.push(this.consumeCodePoint());
            ue(this.peekCodePoint(0));

          )
            r.push(this.consumeCodePoint());
          o = this.peekCodePoint(0);
          var s = this.peekCodePoint(1);
          if (o === Jn && ue(s))
            for (
              r.push(this.consumeCodePoint(), this.consumeCodePoint()), n = Mf;
              ue(this.peekCodePoint(0));

            )
              r.push(this.consumeCodePoint());
          (o = this.peekCodePoint(0)), (s = this.peekCodePoint(1));
          var l = this.peekCodePoint(2);
          if (
            (o === zf || o === jf) &&
            (((s === hr || s === Ce) && ue(l)) || ue(s))
          )
            for (
              r.push(this.consumeCodePoint(), this.consumeCodePoint()), n = Mf;
              ue(this.peekCodePoint(0));

            )
              r.push(this.consumeCodePoint());
          return [hm(r), n];
        }),
        (e.prototype.consumeNumericToken = function () {
          var r = this.consumeNumber(),
            n = r[0],
            o = r[1],
            s = this.peekCodePoint(0),
            l = this.peekCodePoint(1),
            u = this.peekCodePoint(2);
          if (vi(s, l, u)) {
            var f = this.consumeName();
            return { type: 15, number: n, flags: o, unit: f };
          }
          return s === Nv
            ? (this.consumeCodePoint(), { type: 16, number: n, flags: o })
            : { type: 17, number: n, flags: o };
        }),
        (e.prototype.consumeEscapedCodePoint = function () {
          var r = this.consumeCodePoint();
          if (Pr(r)) {
            for (var n = GA(r); Pr(this.peekCodePoint(0)) && n.length < 6; )
              n += GA(this.consumeCodePoint());
            wi(this.peekCodePoint(0)) && this.consumeCodePoint();
            var o = parseInt(n, 16);
            return o === 0 || fm(o) || o > 1114111 ? Vf : o;
          }
          return r === rt ? Vf : r;
        }),
        (e.prototype.consumeName = function () {
          for (var r = ""; ; ) {
            var n = this.consumeCodePoint();
            if (Yf(n)) r += GA(n);
            else if (Dt(n, this.peekCodePoint(0)))
              r += GA(this.consumeEscapedCodePoint());
            else return this.reconsumeCodePoint(n), r;
          }
        }),
        e
      );
    })(),
    $f = (function () {
      function e(r) {
        this._tokens = r;
      }
      return (
        (e.create = function (r) {
          var n = new Zf();
          return n.write(r), new e(n.read());
        }),
        (e.parseValue = function (r) {
          return e.create(r).parseComponentValue();
        }),
        (e.parseValues = function (r) {
          return e.create(r).parseComponentValues();
        }),
        (e.prototype.parseComponentValue = function () {
          for (var r = this.consumeToken(); r.type === 31; )
            r = this.consumeToken();
          if (r.type === 32)
            throw new SyntaxError(
              "Error parsing CSS component value, unexpected EOF",
            );
          this.reconsumeToken(r);
          var n = this.consumeComponentValue();
          do r = this.consumeToken();
          while (r.type === 31);
          if (r.type === 32) return n;
          throw new SyntaxError(
            "Error parsing CSS component value, multiple values found when expecting only one",
          );
        }),
        (e.prototype.parseComponentValues = function () {
          for (var r = []; ; ) {
            var n = this.consumeComponentValue();
            if (n.type === 32) return r;
            r.push(n), r.push();
          }
        }),
        (e.prototype.consumeComponentValue = function () {
          var r = this.consumeToken();
          switch (r.type) {
            case 11:
            case 28:
            case 2:
              return this.consumeSimpleBlock(r.type);
            case 19:
              return this.consumeFunction(r);
          }
          return r;
        }),
        (e.prototype.consumeSimpleBlock = function (r) {
          for (var n = { type: r, values: [] }, o = this.consumeToken(); ; ) {
            if (o.type === 32 || Nm(o, r)) return n;
            this.reconsumeToken(o),
              n.values.push(this.consumeComponentValue()),
              (o = this.consumeToken());
          }
        }),
        (e.prototype.consumeFunction = function (r) {
          for (var n = { name: r.value, values: [], type: 18 }; ; ) {
            var o = this.consumeToken();
            if (o.type === 32 || o.type === 3) return n;
            this.reconsumeToken(o), n.values.push(this.consumeComponentValue());
          }
        }),
        (e.prototype.consumeToken = function () {
          var r = this._tokens.shift();
          return typeof r > "u" ? $a : r;
        }),
        (e.prototype.reconsumeToken = function (r) {
          this._tokens.unshift(r);
        }),
        e
      );
    })(),
    Yn = function (e) {
      return e.type === 15;
    },
    _r = function (e) {
      return e.type === 17;
    },
    SA = function (e) {
      return e.type === 20;
    },
    Om = function (e) {
      return e.type === 0;
    },
    qa = function (e, r) {
      return SA(e) && e.value === r;
    },
    qf = function (e) {
      return e.type !== 31;
    },
    Vr = function (e) {
      return e.type !== 31 && e.type !== 4;
    },
    nt = function (e) {
      var r = [],
        n = [];
      return (
        e.forEach(function (o) {
          if (o.type === 4) {
            if (n.length === 0)
              throw new Error(
                "Error parsing function args, zero tokens for arg",
              );
            r.push(n), (n = []);
            return;
          }
          o.type !== 31 && n.push(o);
        }),
        n.length && r.push(n),
        r
      );
    },
    Nm = function (e, r) {
      return (r === 11 && e.type === 12) || (r === 28 && e.type === 29)
        ? !0
        : r === 2 && e.type === 3;
    },
    Kt = function (e) {
      return e.type === 17 || e.type === 15;
    },
    JA = function (e) {
      return e.type === 16 || Kt(e);
    },
    Ad = function (e) {
      return e.length > 1 ? [e[0], e[1]] : [e[0]];
    },
    oe = { type: 17, number: 0, flags: Wn },
    Al = { type: 16, number: 50, flags: Wn },
    kt = { type: 16, number: 100, flags: Wn },
    Zn = function (e, r, n) {
      var o = e[0],
        s = e[1];
      return [bA(o, r), bA(typeof s < "u" ? s : o, n)];
    },
    bA = function (e, r) {
      if (e.type === 16) return (e.number / 100) * r;
      if (Yn(e))
        switch (e.unit) {
          case "rem":
          case "em":
            return 16 * e.number;
          case "px":
          default:
            return e.number;
        }
      return e.number;
    },
    ed = "deg",
    td = "grad",
    rd = "rad",
    nd = "turn",
    Ci = {
      name: "angle",
      parse: function (e, r) {
        if (r.type === 15)
          switch (r.unit) {
            case ed:
              return (Math.PI * r.number) / 180;
            case td:
              return (Math.PI / 200) * r.number;
            case rd:
              return r.number;
            case nd:
              return Math.PI * 2 * r.number;
          }
        throw new Error("Unsupported angle type");
      },
    },
    od = function (e) {
      return (
        e.type === 15 &&
        (e.unit === ed || e.unit === td || e.unit === rd || e.unit === nd)
      );
    },
    id = function (e) {
      var r = e
        .filter(SA)
        .map(function (n) {
          return n.value;
        })
        .join(" ");
      switch (r) {
        case "to bottom right":
        case "to right bottom":
        case "left top":
        case "top left":
          return [oe, oe];
        case "to top":
        case "bottom":
          return De(0);
        case "to bottom left":
        case "to left bottom":
        case "right top":
        case "top right":
          return [oe, kt];
        case "to right":
        case "left":
          return De(90);
        case "to top left":
        case "to left top":
        case "right bottom":
        case "bottom right":
          return [kt, kt];
        case "to bottom":
        case "top":
          return De(180);
        case "to top right":
        case "to right top":
        case "left bottom":
        case "bottom left":
          return [kt, oe];
        case "to left":
        case "right":
          return De(270);
      }
      return 0;
    },
    De = function (e) {
      return (Math.PI * e) / 180;
    },
    Rt = {
      name: "color",
      parse: function (e, r) {
        if (r.type === 18) {
          var n = Mm[r.name];
          if (typeof n > "u")
            throw new Error(
              'Attempting to parse an unsupported color function "' +
                r.name +
                '"',
            );
          return n(e, r.values);
        }
        if (r.type === 5) {
          if (r.value.length === 3) {
            var o = r.value.substring(0, 1),
              s = r.value.substring(1, 2),
              l = r.value.substring(2, 3);
            return Nt(
              parseInt(o + o, 16),
              parseInt(s + s, 16),
              parseInt(l + l, 16),
              1,
            );
          }
          if (r.value.length === 4) {
            var o = r.value.substring(0, 1),
              s = r.value.substring(1, 2),
              l = r.value.substring(2, 3),
              u = r.value.substring(3, 4);
            return Nt(
              parseInt(o + o, 16),
              parseInt(s + s, 16),
              parseInt(l + l, 16),
              parseInt(u + u, 16) / 255,
            );
          }
          if (r.value.length === 6) {
            var o = r.value.substring(0, 2),
              s = r.value.substring(2, 4),
              l = r.value.substring(4, 6);
            return Nt(parseInt(o, 16), parseInt(s, 16), parseInt(l, 16), 1);
          }
          if (r.value.length === 8) {
            var o = r.value.substring(0, 2),
              s = r.value.substring(2, 4),
              l = r.value.substring(4, 6),
              u = r.value.substring(6, 8);
            return Nt(
              parseInt(o, 16),
              parseInt(s, 16),
              parseInt(l, 16),
              parseInt(u, 16) / 255,
            );
          }
        }
        if (r.type === 20) {
          var f = pt[r.value.toUpperCase()];
          if (typeof f < "u") return f;
        }
        return pt.TRANSPARENT;
      },
    },
    Ot = function (e) {
      return (255 & e) === 0;
    },
    ee = function (e) {
      var r = 255 & e,
        n = 255 & (e >> 8),
        o = 255 & (e >> 16),
        s = 255 & (e >> 24);
      return r < 255
        ? "rgba(" + s + "," + o + "," + n + "," + r / 255 + ")"
        : "rgb(" + s + "," + o + "," + n + ")";
    },
    Nt = function (e, r, n, o) {
      return (
        ((e << 24) | (r << 16) | (n << 8) | (Math.round(o * 255) << 0)) >>> 0
      );
    },
    sd = function (e, r) {
      if (e.type === 17) return e.number;
      if (e.type === 16) {
        var n = r === 3 ? 1 : 255;
        return r === 3
          ? (e.number / 100) * n
          : Math.round((e.number / 100) * n);
      }
      return 0;
    },
    ad = function (e, r) {
      var n = r.filter(Vr);
      if (n.length === 3) {
        var o = n.map(sd),
          s = o[0],
          l = o[1],
          u = o[2];
        return Nt(s, l, u, 1);
      }
      if (n.length === 4) {
        var f = n.map(sd),
          s = f[0],
          l = f[1],
          u = f[2],
          B = f[3];
        return Nt(s, l, u, B);
      }
      return 0;
    };
  function el(e, r, n) {
    return (
      n < 0 && (n += 1),
      n >= 1 && (n -= 1),
      n < 1 / 6
        ? (r - e) * n * 6 + e
        : n < 1 / 2
          ? r
          : n < 2 / 3
            ? (r - e) * 6 * (2 / 3 - n) + e
            : e
    );
  }
  var ld = function (e, r) {
      var n = r.filter(Vr),
        o = n[0],
        s = n[1],
        l = n[2],
        u = n[3],
        f = (o.type === 17 ? De(o.number) : Ci.parse(e, o)) / (Math.PI * 2),
        B = JA(s) ? s.number / 100 : 0,
        g = JA(l) ? l.number / 100 : 0,
        w = typeof u < "u" && JA(u) ? bA(u, 1) : 1;
      if (B === 0) return Nt(g * 255, g * 255, g * 255, 1);
      var h = g <= 0.5 ? g * (B + 1) : g + B - g * B,
        v = g * 2 - h,
        U = el(v, h, f + 1 / 3),
        Q = el(v, h, f),
        m = el(v, h, f - 1 / 3);
      return Nt(U * 255, Q * 255, m * 255, w);
    },
    Mm = { hsl: ld, hsla: ld, rgb: ad, rgba: ad },
    $n = function (e, r) {
      return Rt.parse(e, $f.create(r).parseComponentValue());
    },
    pt = {
      ALICEBLUE: 4042850303,
      ANTIQUEWHITE: 4209760255,
      AQUA: 16777215,
      AQUAMARINE: 2147472639,
      AZURE: 4043309055,
      BEIGE: 4126530815,
      BISQUE: 4293182719,
      BLACK: 255,
      BLANCHEDALMOND: 4293643775,
      BLUE: 65535,
      BLUEVIOLET: 2318131967,
      BROWN: 2771004159,
      BURLYWOOD: 3736635391,
      CADETBLUE: 1604231423,
      CHARTREUSE: 2147418367,
      CHOCOLATE: 3530104575,
      CORAL: 4286533887,
      CORNFLOWERBLUE: 1687547391,
      CORNSILK: 4294499583,
      CRIMSON: 3692313855,
      CYAN: 16777215,
      DARKBLUE: 35839,
      DARKCYAN: 9145343,
      DARKGOLDENROD: 3095837695,
      DARKGRAY: 2846468607,
      DARKGREEN: 6553855,
      DARKGREY: 2846468607,
      DARKKHAKI: 3182914559,
      DARKMAGENTA: 2332068863,
      DARKOLIVEGREEN: 1433087999,
      DARKORANGE: 4287365375,
      DARKORCHID: 2570243327,
      DARKRED: 2332033279,
      DARKSALMON: 3918953215,
      DARKSEAGREEN: 2411499519,
      DARKSLATEBLUE: 1211993087,
      DARKSLATEGRAY: 793726975,
      DARKSLATEGREY: 793726975,
      DARKTURQUOISE: 13554175,
      DARKVIOLET: 2483082239,
      DEEPPINK: 4279538687,
      DEEPSKYBLUE: 12582911,
      DIMGRAY: 1768516095,
      DIMGREY: 1768516095,
      DODGERBLUE: 512819199,
      FIREBRICK: 2988581631,
      FLORALWHITE: 4294635775,
      FORESTGREEN: 579543807,
      FUCHSIA: 4278255615,
      GAINSBORO: 3705462015,
      GHOSTWHITE: 4177068031,
      GOLD: 4292280575,
      GOLDENROD: 3668254975,
      GRAY: 2155905279,
      GREEN: 8388863,
      GREENYELLOW: 2919182335,
      GREY: 2155905279,
      HONEYDEW: 4043305215,
      HOTPINK: 4285117695,
      INDIANRED: 3445382399,
      INDIGO: 1258324735,
      IVORY: 4294963455,
      KHAKI: 4041641215,
      LAVENDER: 3873897215,
      LAVENDERBLUSH: 4293981695,
      LAWNGREEN: 2096890111,
      LEMONCHIFFON: 4294626815,
      LIGHTBLUE: 2916673279,
      LIGHTCORAL: 4034953471,
      LIGHTCYAN: 3774873599,
      LIGHTGOLDENRODYELLOW: 4210742015,
      LIGHTGRAY: 3553874943,
      LIGHTGREEN: 2431553791,
      LIGHTGREY: 3553874943,
      LIGHTPINK: 4290167295,
      LIGHTSALMON: 4288707327,
      LIGHTSEAGREEN: 548580095,
      LIGHTSKYBLUE: 2278488831,
      LIGHTSLATEGRAY: 2005441023,
      LIGHTSLATEGREY: 2005441023,
      LIGHTSTEELBLUE: 2965692159,
      LIGHTYELLOW: 4294959359,
      LIME: 16711935,
      LIMEGREEN: 852308735,
      LINEN: 4210091775,
      MAGENTA: 4278255615,
      MAROON: 2147483903,
      MEDIUMAQUAMARINE: 1724754687,
      MEDIUMBLUE: 52735,
      MEDIUMORCHID: 3126187007,
      MEDIUMPURPLE: 2473647103,
      MEDIUMSEAGREEN: 1018393087,
      MEDIUMSLATEBLUE: 2070474495,
      MEDIUMSPRINGGREEN: 16423679,
      MEDIUMTURQUOISE: 1221709055,
      MEDIUMVIOLETRED: 3340076543,
      MIDNIGHTBLUE: 421097727,
      MINTCREAM: 4127193855,
      MISTYROSE: 4293190143,
      MOCCASIN: 4293178879,
      NAVAJOWHITE: 4292783615,
      NAVY: 33023,
      OLDLACE: 4260751103,
      OLIVE: 2155872511,
      OLIVEDRAB: 1804477439,
      ORANGE: 4289003775,
      ORANGERED: 4282712319,
      ORCHID: 3664828159,
      PALEGOLDENROD: 4008225535,
      PALEGREEN: 2566625535,
      PALETURQUOISE: 2951671551,
      PALEVIOLETRED: 3681588223,
      PAPAYAWHIP: 4293907967,
      PEACHPUFF: 4292524543,
      PERU: 3448061951,
      PINK: 4290825215,
      PLUM: 3718307327,
      POWDERBLUE: 2967529215,
      PURPLE: 2147516671,
      REBECCAPURPLE: 1714657791,
      RED: 4278190335,
      ROSYBROWN: 3163525119,
      ROYALBLUE: 1097458175,
      SADDLEBROWN: 2336560127,
      SALMON: 4202722047,
      SANDYBROWN: 4104413439,
      SEAGREEN: 780883967,
      SEASHELL: 4294307583,
      SIENNA: 2689740287,
      SILVER: 3233857791,
      SKYBLUE: 2278484991,
      SLATEBLUE: 1784335871,
      SLATEGRAY: 1887473919,
      SLATEGREY: 1887473919,
      SNOW: 4294638335,
      SPRINGGREEN: 16744447,
      STEELBLUE: 1182971135,
      TAN: 3535047935,
      TEAL: 8421631,
      THISTLE: 3636451583,
      TOMATO: 4284696575,
      TRANSPARENT: 0,
      TURQUOISE: 1088475391,
      VIOLET: 4001558271,
      WHEAT: 4125012991,
      WHITE: 4294967295,
      WHITESMOKE: 4126537215,
      YELLOW: 4294902015,
      YELLOWGREEN: 2597139199,
    },
    Pm = {
      name: "background-clip",
      initialValue: "border-box",
      prefix: !1,
      type: 1,
      parse: function (e, r) {
        return r.map(function (n) {
          if (SA(n))
            switch (n.value) {
              case "padding-box":
                return 1;
              case "content-box":
                return 2;
            }
          return 0;
        });
      },
    },
    _m = {
      name: "background-color",
      initialValue: "transparent",
      prefix: !1,
      type: 3,
      format: "color",
    },
    Qi = function (e, r) {
      var n = Rt.parse(e, r[0]),
        o = r[1];
      return o && JA(o) ? { color: n, stop: o } : { color: n, stop: null };
    },
    cd = function (e, r) {
      var n = e[0],
        o = e[e.length - 1];
      n.stop === null && (n.stop = oe), o.stop === null && (o.stop = kt);
      for (var s = [], l = 0, u = 0; u < e.length; u++) {
        var f = e[u].stop;
        if (f !== null) {
          var B = bA(f, r);
          B > l ? s.push(B) : s.push(l), (l = B);
        } else s.push(null);
      }
      for (var g = null, u = 0; u < s.length; u++) {
        var w = s[u];
        if (w === null) g === null && (g = u);
        else if (g !== null) {
          for (
            var h = u - g, v = s[g - 1], U = (w - v) / (h + 1), Q = 1;
            Q <= h;
            Q++
          )
            s[g + Q - 1] = U * Q;
          g = null;
        }
      }
      return e.map(function (m, F) {
        var E = m.color;
        return { color: E, stop: Math.max(Math.min(1, s[F] / r), 0) };
      });
    },
    Vm = function (e, r, n) {
      var o = r / 2,
        s = n / 2,
        l = bA(e[0], r) - o,
        u = s - bA(e[1], n);
      return (Math.atan2(u, l) + Math.PI * 2) % (Math.PI * 2);
    },
    Gm = function (e, r, n) {
      var o = typeof e == "number" ? e : Vm(e, r, n),
        s = Math.abs(r * Math.sin(o)) + Math.abs(n * Math.cos(o)),
        l = r / 2,
        u = n / 2,
        f = s / 2,
        B = Math.sin(o - Math.PI / 2) * f,
        g = Math.cos(o - Math.PI / 2) * f;
      return [s, l - g, l + g, u - B, u + B];
    },
    We = function (e, r) {
      return Math.sqrt(e * e + r * r);
    },
    ud = function (e, r, n, o, s) {
      var l = [
        [0, 0],
        [0, r],
        [e, 0],
        [e, r],
      ];
      return l.reduce(
        function (u, f) {
          var B = f[0],
            g = f[1],
            w = We(n - B, o - g);
          return (s ? w < u.optimumDistance : w > u.optimumDistance)
            ? { optimumCorner: f, optimumDistance: w }
            : u;
        },
        { optimumDistance: s ? 1 / 0 : -1 / 0, optimumCorner: null },
      ).optimumCorner;
    },
    Wm = function (e, r, n, o, s) {
      var l = 0,
        u = 0;
      switch (e.size) {
        case 0:
          e.shape === 0
            ? (l = u =
                Math.min(
                  Math.abs(r),
                  Math.abs(r - o),
                  Math.abs(n),
                  Math.abs(n - s),
                ))
            : e.shape === 1 &&
              ((l = Math.min(Math.abs(r), Math.abs(r - o))),
              (u = Math.min(Math.abs(n), Math.abs(n - s))));
          break;
        case 2:
          if (e.shape === 0)
            l = u = Math.min(
              We(r, n),
              We(r, n - s),
              We(r - o, n),
              We(r - o, n - s),
            );
          else if (e.shape === 1) {
            var f =
                Math.min(Math.abs(n), Math.abs(n - s)) /
                Math.min(Math.abs(r), Math.abs(r - o)),
              B = ud(o, s, r, n, !0),
              g = B[0],
              w = B[1];
            (l = We(g - r, (w - n) / f)), (u = f * l);
          }
          break;
        case 1:
          e.shape === 0
            ? (l = u =
                Math.max(
                  Math.abs(r),
                  Math.abs(r - o),
                  Math.abs(n),
                  Math.abs(n - s),
                ))
            : e.shape === 1 &&
              ((l = Math.max(Math.abs(r), Math.abs(r - o))),
              (u = Math.max(Math.abs(n), Math.abs(n - s))));
          break;
        case 3:
          if (e.shape === 0)
            l = u = Math.max(
              We(r, n),
              We(r, n - s),
              We(r - o, n),
              We(r - o, n - s),
            );
          else if (e.shape === 1) {
            var f =
                Math.max(Math.abs(n), Math.abs(n - s)) /
                Math.max(Math.abs(r), Math.abs(r - o)),
              h = ud(o, s, r, n, !1),
              g = h[0],
              w = h[1];
            (l = We(g - r, (w - n) / f)), (u = f * l);
          }
          break;
      }
      return (
        Array.isArray(e.size) &&
          ((l = bA(e.size[0], o)),
          (u = e.size.length === 2 ? bA(e.size[1], s) : l)),
        [l, u]
      );
    },
    jm = function (e, r) {
      var n = De(180),
        o = [];
      return (
        nt(r).forEach(function (s, l) {
          if (l === 0) {
            var u = s[0];
            if (u.type === 20 && u.value === "to") {
              n = id(s);
              return;
            } else if (od(u)) {
              n = Ci.parse(e, u);
              return;
            }
          }
          var f = Qi(e, s);
          o.push(f);
        }),
        { angle: n, stops: o, type: 1 }
      );
    },
    yi = function (e, r) {
      var n = De(180),
        o = [];
      return (
        nt(r).forEach(function (s, l) {
          if (l === 0) {
            var u = s[0];
            if (
              u.type === 20 &&
              ["top", "left", "right", "bottom"].indexOf(u.value) !== -1
            ) {
              n = id(s);
              return;
            } else if (od(u)) {
              n = (Ci.parse(e, u) + De(270)) % De(360);
              return;
            }
          }
          var f = Qi(e, s);
          o.push(f);
        }),
        { angle: n, stops: o, type: 1 }
      );
    },
    Xm = function (e, r) {
      var n = De(180),
        o = [],
        s = 1,
        l = 0,
        u = 3,
        f = [];
      return (
        nt(r).forEach(function (B, g) {
          var w = B[0];
          if (g === 0) {
            if (SA(w) && w.value === "linear") {
              s = 1;
              return;
            } else if (SA(w) && w.value === "radial") {
              s = 2;
              return;
            }
          }
          if (w.type === 18) {
            if (w.name === "from") {
              var h = Rt.parse(e, w.values[0]);
              o.push({ stop: oe, color: h });
            } else if (w.name === "to") {
              var h = Rt.parse(e, w.values[0]);
              o.push({ stop: kt, color: h });
            } else if (w.name === "color-stop") {
              var v = w.values.filter(Vr);
              if (v.length === 2) {
                var h = Rt.parse(e, v[1]),
                  U = v[0];
                _r(U) &&
                  o.push({
                    stop: { type: 16, number: U.number * 100, flags: U.flags },
                    color: h,
                  });
              }
            }
          }
        }),
        s === 1
          ? { angle: (n + De(180)) % De(360), stops: o, type: s }
          : { size: u, shape: l, stops: o, position: f, type: s }
      );
    },
    fd = "closest-side",
    dd = "farthest-side",
    Bd = "closest-corner",
    gd = "farthest-corner",
    pd = "circle",
    wd = "ellipse",
    hd = "cover",
    vd = "contain",
    zm = function (e, r) {
      var n = 0,
        o = 3,
        s = [],
        l = [];
      return (
        nt(r).forEach(function (u, f) {
          var B = !0;
          if (f === 0) {
            var g = !1;
            B = u.reduce(function (h, v) {
              if (g)
                if (SA(v))
                  switch (v.value) {
                    case "center":
                      return l.push(Al), h;
                    case "top":
                    case "left":
                      return l.push(oe), h;
                    case "right":
                    case "bottom":
                      return l.push(kt), h;
                  }
                else (JA(v) || Kt(v)) && l.push(v);
              else if (SA(v))
                switch (v.value) {
                  case pd:
                    return (n = 0), !1;
                  case wd:
                    return (n = 1), !1;
                  case "at":
                    return (g = !0), !1;
                  case fd:
                    return (o = 0), !1;
                  case hd:
                  case dd:
                    return (o = 1), !1;
                  case vd:
                  case Bd:
                    return (o = 2), !1;
                  case gd:
                    return (o = 3), !1;
                }
              else if (Kt(v) || JA(v))
                return Array.isArray(o) || (o = []), o.push(v), !1;
              return h;
            }, B);
          }
          if (B) {
            var w = Qi(e, u);
            s.push(w);
          }
        }),
        { size: o, shape: n, stops: s, position: l, type: 2 }
      );
    },
    Ui = function (e, r) {
      var n = 0,
        o = 3,
        s = [],
        l = [];
      return (
        nt(r).forEach(function (u, f) {
          var B = !0;
          if (
            (f === 0
              ? (B = u.reduce(function (w, h) {
                  if (SA(h))
                    switch (h.value) {
                      case "center":
                        return l.push(Al), !1;
                      case "top":
                      case "left":
                        return l.push(oe), !1;
                      case "right":
                      case "bottom":
                        return l.push(kt), !1;
                    }
                  else if (JA(h) || Kt(h)) return l.push(h), !1;
                  return w;
                }, B))
              : f === 1 &&
                (B = u.reduce(function (w, h) {
                  if (SA(h))
                    switch (h.value) {
                      case pd:
                        return (n = 0), !1;
                      case wd:
                        return (n = 1), !1;
                      case vd:
                      case fd:
                        return (o = 0), !1;
                      case dd:
                        return (o = 1), !1;
                      case Bd:
                        return (o = 2), !1;
                      case hd:
                      case gd:
                        return (o = 3), !1;
                    }
                  else if (Kt(h) || JA(h))
                    return Array.isArray(o) || (o = []), o.push(h), !1;
                  return w;
                }, B)),
            B)
          ) {
            var g = Qi(e, u);
            s.push(g);
          }
        }),
        { size: o, shape: n, stops: s, position: l, type: 2 }
      );
    },
    Jm = function (e) {
      return e.type === 1;
    },
    Ym = function (e) {
      return e.type === 2;
    },
    tl = {
      name: "image",
      parse: function (e, r) {
        if (r.type === 22) {
          var n = { url: r.value, type: 0 };
          return e.cache.addImage(r.value), n;
        }
        if (r.type === 18) {
          var o = md[r.name];
          if (typeof o > "u")
            throw new Error(
              'Attempting to parse an unsupported image function "' +
                r.name +
                '"',
            );
          return o(e, r.values);
        }
        throw new Error("Unsupported image type " + r.type);
      },
    };
  function Zm(e) {
    return (
      !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!md[e.name])
    );
  }
  var md = {
      "linear-gradient": jm,
      "-moz-linear-gradient": yi,
      "-ms-linear-gradient": yi,
      "-o-linear-gradient": yi,
      "-webkit-linear-gradient": yi,
      "radial-gradient": zm,
      "-moz-radial-gradient": Ui,
      "-ms-radial-gradient": Ui,
      "-o-radial-gradient": Ui,
      "-webkit-radial-gradient": Ui,
      "-webkit-gradient": Xm,
    },
    $m = {
      name: "background-image",
      initialValue: "none",
      type: 1,
      prefix: !1,
      parse: function (e, r) {
        if (r.length === 0) return [];
        var n = r[0];
        return n.type === 20 && n.value === "none"
          ? []
          : r
              .filter(function (o) {
                return Vr(o) && Zm(o);
              })
              .map(function (o) {
                return tl.parse(e, o);
              });
      },
    },
    qm = {
      name: "background-origin",
      initialValue: "border-box",
      prefix: !1,
      type: 1,
      parse: function (e, r) {
        return r.map(function (n) {
          if (SA(n))
            switch (n.value) {
              case "padding-box":
                return 1;
              case "content-box":
                return 2;
            }
          return 0;
        });
      },
    },
    AC = {
      name: "background-position",
      initialValue: "0% 0%",
      type: 1,
      prefix: !1,
      parse: function (e, r) {
        return nt(r)
          .map(function (n) {
            return n.filter(JA);
          })
          .map(Ad);
      },
    },
    eC = {
      name: "background-repeat",
      initialValue: "repeat",
      prefix: !1,
      type: 1,
      parse: function (e, r) {
        return nt(r)
          .map(function (n) {
            return n
              .filter(SA)
              .map(function (o) {
                return o.value;
              })
              .join(" ");
          })
          .map(tC);
      },
    },
    tC = function (e) {
      switch (e) {
        case "no-repeat":
          return 1;
        case "repeat-x":
        case "repeat no-repeat":
          return 2;
        case "repeat-y":
        case "no-repeat repeat":
          return 3;
        case "repeat":
        default:
          return 0;
      }
    },
    Gr;
  (function (e) {
    (e.AUTO = "auto"), (e.CONTAIN = "contain"), (e.COVER = "cover");
  })(Gr || (Gr = {}));
  var rC = {
      name: "background-size",
      initialValue: "0",
      prefix: !1,
      type: 1,
      parse: function (e, r) {
        return nt(r).map(function (n) {
          return n.filter(nC);
        });
      },
    },
    nC = function (e) {
      return SA(e) || JA(e);
    },
    Fi = function (e) {
      return {
        name: "border-" + e + "-color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color",
      };
    },
    oC = Fi("top"),
    iC = Fi("right"),
    sC = Fi("bottom"),
    aC = Fi("left"),
    Ei = function (e) {
      return {
        name: "border-radius-" + e,
        initialValue: "0 0",
        prefix: !1,
        type: 1,
        parse: function (r, n) {
          return Ad(n.filter(JA));
        },
      };
    },
    lC = Ei("top-left"),
    cC = Ei("top-right"),
    uC = Ei("bottom-right"),
    fC = Ei("bottom-left"),
    xi = function (e) {
      return {
        name: "border-" + e + "-style",
        initialValue: "solid",
        prefix: !1,
        type: 2,
        parse: function (r, n) {
          switch (n) {
            case "none":
              return 0;
            case "dashed":
              return 2;
            case "dotted":
              return 3;
            case "double":
              return 4;
          }
          return 1;
        },
      };
    },
    dC = xi("top"),
    BC = xi("right"),
    gC = xi("bottom"),
    pC = xi("left"),
    Ii = function (e) {
      return {
        name: "border-" + e + "-width",
        initialValue: "0",
        type: 0,
        prefix: !1,
        parse: function (r, n) {
          return Yn(n) ? n.number : 0;
        },
      };
    },
    wC = Ii("top"),
    hC = Ii("right"),
    vC = Ii("bottom"),
    mC = Ii("left"),
    CC = {
      name: "color",
      initialValue: "transparent",
      prefix: !1,
      type: 3,
      format: "color",
    },
    QC = {
      name: "direction",
      initialValue: "ltr",
      prefix: !1,
      type: 2,
      parse: function (e, r) {
        switch (r) {
          case "rtl":
            return 1;
          case "ltr":
          default:
            return 0;
        }
      },
    },
    yC = {
      name: "display",
      initialValue: "inline-block",
      prefix: !1,
      type: 1,
      parse: function (e, r) {
        return r.filter(SA).reduce(function (n, o) {
          return n | UC(o.value);
        }, 0);
      },
    },
    UC = function (e) {
      switch (e) {
        case "block":
        case "-webkit-box":
          return 2;
        case "inline":
          return 4;
        case "run-in":
          return 8;
        case "flow":
          return 16;
        case "flow-root":
          return 32;
        case "table":
          return 64;
        case "flex":
        case "-webkit-flex":
          return 128;
        case "grid":
        case "-ms-grid":
          return 256;
        case "ruby":
          return 512;
        case "subgrid":
          return 1024;
        case "list-item":
          return 2048;
        case "table-row-group":
          return 4096;
        case "table-header-group":
          return 8192;
        case "table-footer-group":
          return 16384;
        case "table-row":
          return 32768;
        case "table-cell":
          return 65536;
        case "table-column-group":
          return 131072;
        case "table-column":
          return 262144;
        case "table-caption":
          return 524288;
        case "ruby-base":
          return 1048576;
        case "ruby-text":
          return 2097152;
        case "ruby-base-container":
          return 4194304;
        case "ruby-text-container":
          return 8388608;
        case "contents":
          return 16777216;
        case "inline-block":
          return 33554432;
        case "inline-list-item":
          return 67108864;
        case "inline-table":
          return 134217728;
        case "inline-flex":
          return 268435456;
        case "inline-grid":
          return 536870912;
      }
      return 0;
    },
    FC = {
      name: "float",
      initialValue: "none",
      prefix: !1,
      type: 2,
      parse: function (e, r) {
        switch (r) {
          case "left":
            return 1;
          case "right":
            return 2;
          case "inline-start":
            return 3;
          case "inline-end":
            return 4;
        }
        return 0;
      },
    },
    EC = {
      name: "letter-spacing",
      initialValue: "0",
      prefix: !1,
      type: 0,
      parse: function (e, r) {
        return r.type === 20 && r.value === "normal"
          ? 0
          : r.type === 17 || r.type === 15
            ? r.number
            : 0;
      },
    },
    Hi;
  (function (e) {
    (e.NORMAL = "normal"), (e.STRICT = "strict");
  })(Hi || (Hi = {}));
  var xC = {
      name: "line-break",
      initialValue: "normal",
      prefix: !1,
      type: 2,
      parse: function (e, r) {
        switch (r) {
          case "strict":
            return Hi.STRICT;
          case "normal":
          default:
            return Hi.NORMAL;
        }
      },
    },
    IC = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 },
    Cd = function (e, r) {
      return SA(e) && e.value === "normal"
        ? 1.2 * r
        : e.type === 17
          ? r * e.number
          : JA(e)
            ? bA(e, r)
            : r;
    },
    HC = {
      name: "list-style-image",
      initialValue: "none",
      type: 0,
      prefix: !1,
      parse: function (e, r) {
        return r.type === 20 && r.value === "none" ? null : tl.parse(e, r);
      },
    },
    SC = {
      name: "list-style-position",
      initialValue: "outside",
      prefix: !1,
      type: 2,
      parse: function (e, r) {
        switch (r) {
          case "inside":
            return 0;
          case "outside":
          default:
            return 1;
        }
      },
    },
    rl = {
      name: "list-style-type",
      initialValue: "none",
      prefix: !1,
      type: 2,
      parse: function (e, r) {
        switch (r) {
          case "disc":
            return 0;
          case "circle":
            return 1;
          case "square":
            return 2;
          case "decimal":
            return 3;
          case "cjk-decimal":
            return 4;
          case "decimal-leading-zero":
            return 5;
          case "lower-roman":
            return 6;
          case "upper-roman":
            return 7;
          case "lower-greek":
            return 8;
          case "lower-alpha":
            return 9;
          case "upper-alpha":
            return 10;
          case "arabic-indic":
            return 11;
          case "armenian":
            return 12;
          case "bengali":
            return 13;
          case "cambodian":
            return 14;
          case "cjk-earthly-branch":
            return 15;
          case "cjk-heavenly-stem":
            return 16;
          case "cjk-ideographic":
            return 17;
          case "devanagari":
            return 18;
          case "ethiopic-numeric":
            return 19;
          case "georgian":
            return 20;
          case "gujarati":
            return 21;
          case "gurmukhi":
            return 22;
          case "hebrew":
            return 22;
          case "hiragana":
            return 23;
          case "hiragana-iroha":
            return 24;
          case "japanese-formal":
            return 25;
          case "japanese-informal":
            return 26;
          case "kannada":
            return 27;
          case "katakana":
            return 28;
          case "katakana-iroha":
            return 29;
          case "khmer":
            return 30;
          case "korean-hangul-formal":
            return 31;
          case "korean-hanja-formal":
            return 32;
          case "korean-hanja-informal":
            return 33;
          case "lao":
            return 34;
          case "lower-armenian":
            return 35;
          case "malayalam":
            return 36;
          case "mongolian":
            return 37;
          case "myanmar":
            return 38;
          case "oriya":
            return 39;
          case "persian":
            return 40;
          case "simp-chinese-formal":
            return 41;
          case "simp-chinese-informal":
            return 42;
          case "tamil":
            return 43;
          case "telugu":
            return 44;
          case "thai":
            return 45;
          case "tibetan":
            return 46;
          case "trad-chinese-formal":
            return 47;
          case "trad-chinese-informal":
            return 48;
          case "upper-armenian":
            return 49;
          case "disclosure-open":
            return 50;
          case "disclosure-closed":
            return 51;
          case "none":
          default:
            return -1;
        }
      },
    },
    Si = function (e) {
      return { name: "margin-" + e, initialValue: "0", prefix: !1, type: 4 };
    },
    bC = Si("top"),
    LC = Si("right"),
    TC = Si("bottom"),
    DC = Si("left"),
    KC = {
      name: "overflow",
      initialValue: "visible",
      prefix: !1,
      type: 1,
      parse: function (e, r) {
        return r.filter(SA).map(function (n) {
          switch (n.value) {
            case "hidden":
              return 1;
            case "scroll":
              return 2;
            case "clip":
              return 3;
            case "auto":
              return 4;
            case "visible":
            default:
              return 0;
          }
        });
      },
    },
    kC = {
      name: "overflow-wrap",
      initialValue: "normal",
      prefix: !1,
      type: 2,
      parse: function (e, r) {
        switch (r) {
          case "break-word":
            return "break-word";
          case "normal":
          default:
            return "normal";
        }
      },
    },
    bi = function (e) {
      return {
        name: "padding-" + e,
        initialValue: "0",
        prefix: !1,
        type: 3,
        format: "length-percentage",
      };
    },
    RC = bi("top"),
    OC = bi("right"),
    NC = bi("bottom"),
    MC = bi("left"),
    PC = {
      name: "text-align",
      initialValue: "left",
      prefix: !1,
      type: 2,
      parse: function (e, r) {
        switch (r) {
          case "right":
            return 2;
          case "center":
          case "justify":
            return 1;
          case "left":
          default:
            return 0;
        }
      },
    },
    _C = {
      name: "position",
      initialValue: "static",
      prefix: !1,
      type: 2,
      parse: function (e, r) {
        switch (r) {
          case "relative":
            return 1;
          case "absolute":
            return 2;
          case "fixed":
            return 3;
          case "sticky":
            return 4;
        }
        return 0;
      },
    },
    VC = {
      name: "text-shadow",
      initialValue: "none",
      type: 1,
      prefix: !1,
      parse: function (e, r) {
        return r.length === 1 && qa(r[0], "none")
          ? []
          : nt(r).map(function (n) {
              for (
                var o = {
                    color: pt.TRANSPARENT,
                    offsetX: oe,
                    offsetY: oe,
                    blur: oe,
                  },
                  s = 0,
                  l = 0;
                l < n.length;
                l++
              ) {
                var u = n[l];
                Kt(u)
                  ? (s === 0
                      ? (o.offsetX = u)
                      : s === 1
                        ? (o.offsetY = u)
                        : (o.blur = u),
                    s++)
                  : (o.color = Rt.parse(e, u));
              }
              return o;
            });
      },
    },
    GC = {
      name: "text-transform",
      initialValue: "none",
      prefix: !1,
      type: 2,
      parse: function (e, r) {
        switch (r) {
          case "uppercase":
            return 2;
          case "lowercase":
            return 1;
          case "capitalize":
            return 3;
        }
        return 0;
      },
    },
    WC = {
      name: "transform",
      initialValue: "none",
      prefix: !0,
      type: 0,
      parse: function (e, r) {
        if (r.type === 20 && r.value === "none") return null;
        if (r.type === 18) {
          var n = zC[r.name];
          if (typeof n > "u")
            throw new Error(
              'Attempting to parse an unsupported transform function "' +
                r.name +
                '"',
            );
          return n(r.values);
        }
        return null;
      },
    },
    jC = function (e) {
      var r = e
        .filter(function (n) {
          return n.type === 17;
        })
        .map(function (n) {
          return n.number;
        });
      return r.length === 6 ? r : null;
    },
    XC = function (e) {
      var r = e
          .filter(function (B) {
            return B.type === 17;
          })
          .map(function (B) {
            return B.number;
          }),
        n = r[0],
        o = r[1];
      r[2], r[3];
      var s = r[4],
        l = r[5];
      r[6], r[7], r[8], r[9], r[10], r[11];
      var u = r[12],
        f = r[13];
      return r[14], r[15], r.length === 16 ? [n, o, s, l, u, f] : null;
    },
    zC = { matrix: jC, matrix3d: XC },
    Qd = { type: 16, number: 50, flags: Wn },
    JC = [Qd, Qd],
    YC = {
      name: "transform-origin",
      initialValue: "50% 50%",
      prefix: !0,
      type: 1,
      parse: function (e, r) {
        var n = r.filter(JA);
        return n.length !== 2 ? JC : [n[0], n[1]];
      },
    },
    ZC = {
      name: "visible",
      initialValue: "none",
      prefix: !1,
      type: 2,
      parse: function (e, r) {
        switch (r) {
          case "hidden":
            return 1;
          case "collapse":
            return 2;
          case "visible":
          default:
            return 0;
        }
      },
    },
    qn;
  (function (e) {
    (e.NORMAL = "normal"),
      (e.BREAK_ALL = "break-all"),
      (e.KEEP_ALL = "keep-all");
  })(qn || (qn = {}));
  for (
    var $C = {
        name: "word-break",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function (e, r) {
          switch (r) {
            case "break-all":
              return qn.BREAK_ALL;
            case "keep-all":
              return qn.KEEP_ALL;
            case "normal":
            default:
              return qn.NORMAL;
          }
        },
      },
      qC = {
        name: "z-index",
        initialValue: "auto",
        prefix: !1,
        type: 0,
        parse: function (e, r) {
          if (r.type === 20) return { auto: !0, order: 0 };
          if (_r(r)) return { auto: !1, order: r.number };
          throw new Error("Invalid z-index number parsed");
        },
      },
      yd = {
        name: "time",
        parse: function (e, r) {
          if (r.type === 15)
            switch (r.unit.toLowerCase()) {
              case "s":
                return 1e3 * r.number;
              case "ms":
                return r.number;
            }
          throw new Error("Unsupported time type");
        },
      },
      AQ = {
        name: "opacity",
        initialValue: "1",
        type: 0,
        prefix: !1,
        parse: function (e, r) {
          return _r(r) ? r.number : 1;
        },
      },
      eQ = {
        name: "text-decoration-color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color",
      },
      tQ = {
        name: "text-decoration-line",
        initialValue: "none",
        prefix: !1,
        type: 1,
        parse: function (e, r) {
          return r
            .filter(SA)
            .map(function (n) {
              switch (n.value) {
                case "underline":
                  return 1;
                case "overline":
                  return 2;
                case "line-through":
                  return 3;
                case "none":
                  return 4;
              }
              return 0;
            })
            .filter(function (n) {
              return n !== 0;
            });
        },
      },
      rQ = {
        name: "font-family",
        initialValue: "",
        prefix: !1,
        type: 1,
        parse: function (e, r) {
          var n = [],
            o = [];
          return (
            r.forEach(function (s) {
              switch (s.type) {
                case 20:
                case 0:
                  n.push(s.value);
                  break;
                case 17:
                  n.push(s.number.toString());
                  break;
                case 4:
                  o.push(n.join(" ")), (n.length = 0);
                  break;
              }
            }),
            n.length && o.push(n.join(" ")),
            o.map(function (s) {
              return s.indexOf(" ") === -1 ? s : "'" + s + "'";
            })
          );
        },
      },
      nQ = {
        name: "font-size",
        initialValue: "0",
        prefix: !1,
        type: 3,
        format: "length",
      },
      oQ = {
        name: "font-weight",
        initialValue: "normal",
        type: 0,
        prefix: !1,
        parse: function (e, r) {
          if (_r(r)) return r.number;
          if (SA(r))
            switch (r.value) {
              case "bold":
                return 700;
              case "normal":
              default:
                return 400;
            }
          return 400;
        },
      },
      iQ = {
        name: "font-variant",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function (e, r) {
          return r.filter(SA).map(function (n) {
            return n.value;
          });
        },
      },
      sQ = {
        name: "font-style",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function (e, r) {
          switch (r) {
            case "oblique":
              return "oblique";
            case "italic":
              return "italic";
            case "normal":
            default:
              return "normal";
          }
        },
      },
      ZA = function (e, r) {
        return (e & r) !== 0;
      },
      aQ = {
        name: "content",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function (e, r) {
          if (r.length === 0) return [];
          var n = r[0];
          return n.type === 20 && n.value === "none" ? [] : r;
        },
      },
      lQ = {
        name: "counter-increment",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function (e, r) {
          if (r.length === 0) return null;
          var n = r[0];
          if (n.type === 20 && n.value === "none") return null;
          for (var o = [], s = r.filter(qf), l = 0; l < s.length; l++) {
            var u = s[l],
              f = s[l + 1];
            if (u.type === 20) {
              var B = f && _r(f) ? f.number : 1;
              o.push({ counter: u.value, increment: B });
            }
          }
          return o;
        },
      },
      cQ = {
        name: "counter-reset",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function (e, r) {
          if (r.length === 0) return [];
          for (var n = [], o = r.filter(qf), s = 0; s < o.length; s++) {
            var l = o[s],
              u = o[s + 1];
            if (SA(l) && l.value !== "none") {
              var f = u && _r(u) ? u.number : 0;
              n.push({ counter: l.value, reset: f });
            }
          }
          return n;
        },
      },
      uQ = {
        name: "duration",
        initialValue: "0s",
        prefix: !1,
        type: 1,
        parse: function (e, r) {
          return r.filter(Yn).map(function (n) {
            return yd.parse(e, n);
          });
        },
      },
      fQ = {
        name: "quotes",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function (e, r) {
          if (r.length === 0) return null;
          var n = r[0];
          if (n.type === 20 && n.value === "none") return null;
          var o = [],
            s = r.filter(Om);
          if (s.length % 2 !== 0) return null;
          for (var l = 0; l < s.length; l += 2) {
            var u = s[l].value,
              f = s[l + 1].value;
            o.push({ open: u, close: f });
          }
          return o;
        },
      },
      Ud = function (e, r, n) {
        if (!e) return "";
        var o = e[Math.min(r, e.length - 1)];
        return o ? (n ? o.open : o.close) : "";
      },
      dQ = {
        name: "box-shadow",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function (e, r) {
          return r.length === 1 && qa(r[0], "none")
            ? []
            : nt(r).map(function (n) {
                for (
                  var o = {
                      color: 255,
                      offsetX: oe,
                      offsetY: oe,
                      blur: oe,
                      spread: oe,
                      inset: !1,
                    },
                    s = 0,
                    l = 0;
                  l < n.length;
                  l++
                ) {
                  var u = n[l];
                  qa(u, "inset")
                    ? (o.inset = !0)
                    : Kt(u)
                      ? (s === 0
                          ? (o.offsetX = u)
                          : s === 1
                            ? (o.offsetY = u)
                            : s === 2
                              ? (o.blur = u)
                              : (o.spread = u),
                        s++)
                      : (o.color = Rt.parse(e, u));
                }
                return o;
              });
        },
      },
      BQ = {
        name: "paint-order",
        initialValue: "normal",
        prefix: !1,
        type: 1,
        parse: function (e, r) {
          var n = [0, 1, 2],
            o = [];
          return (
            r.filter(SA).forEach(function (s) {
              switch (s.value) {
                case "stroke":
                  o.push(1);
                  break;
                case "fill":
                  o.push(0);
                  break;
                case "markers":
                  o.push(2);
                  break;
              }
            }),
            n.forEach(function (s) {
              o.indexOf(s) === -1 && o.push(s);
            }),
            o
          );
        },
      },
      gQ = {
        name: "-webkit-text-stroke-color",
        initialValue: "currentcolor",
        prefix: !1,
        type: 3,
        format: "color",
      },
      pQ = {
        name: "-webkit-text-stroke-width",
        initialValue: "0",
        type: 0,
        prefix: !1,
        parse: function (e, r) {
          return Yn(r) ? r.number : 0;
        },
      },
      wQ = (function () {
        function e(r, n) {
          var o, s;
          (this.animationDuration = nA(r, uQ, n.animationDuration)),
            (this.backgroundClip = nA(r, Pm, n.backgroundClip)),
            (this.backgroundColor = nA(r, _m, n.backgroundColor)),
            (this.backgroundImage = nA(r, $m, n.backgroundImage)),
            (this.backgroundOrigin = nA(r, qm, n.backgroundOrigin)),
            (this.backgroundPosition = nA(r, AC, n.backgroundPosition)),
            (this.backgroundRepeat = nA(r, eC, n.backgroundRepeat)),
            (this.backgroundSize = nA(r, rC, n.backgroundSize)),
            (this.borderTopColor = nA(r, oC, n.borderTopColor)),
            (this.borderRightColor = nA(r, iC, n.borderRightColor)),
            (this.borderBottomColor = nA(r, sC, n.borderBottomColor)),
            (this.borderLeftColor = nA(r, aC, n.borderLeftColor)),
            (this.borderTopLeftRadius = nA(r, lC, n.borderTopLeftRadius)),
            (this.borderTopRightRadius = nA(r, cC, n.borderTopRightRadius)),
            (this.borderBottomRightRadius = nA(
              r,
              uC,
              n.borderBottomRightRadius,
            )),
            (this.borderBottomLeftRadius = nA(r, fC, n.borderBottomLeftRadius)),
            (this.borderTopStyle = nA(r, dC, n.borderTopStyle)),
            (this.borderRightStyle = nA(r, BC, n.borderRightStyle)),
            (this.borderBottomStyle = nA(r, gC, n.borderBottomStyle)),
            (this.borderLeftStyle = nA(r, pC, n.borderLeftStyle)),
            (this.borderTopWidth = nA(r, wC, n.borderTopWidth)),
            (this.borderRightWidth = nA(r, hC, n.borderRightWidth)),
            (this.borderBottomWidth = nA(r, vC, n.borderBottomWidth)),
            (this.borderLeftWidth = nA(r, mC, n.borderLeftWidth)),
            (this.boxShadow = nA(r, dQ, n.boxShadow)),
            (this.color = nA(r, CC, n.color)),
            (this.direction = nA(r, QC, n.direction)),
            (this.display = nA(r, yC, n.display)),
            (this.float = nA(r, FC, n.cssFloat)),
            (this.fontFamily = nA(r, rQ, n.fontFamily)),
            (this.fontSize = nA(r, nQ, n.fontSize)),
            (this.fontStyle = nA(r, sQ, n.fontStyle)),
            (this.fontVariant = nA(r, iQ, n.fontVariant)),
            (this.fontWeight = nA(r, oQ, n.fontWeight)),
            (this.letterSpacing = nA(r, EC, n.letterSpacing)),
            (this.lineBreak = nA(r, xC, n.lineBreak)),
            (this.lineHeight = nA(r, IC, n.lineHeight)),
            (this.listStyleImage = nA(r, HC, n.listStyleImage)),
            (this.listStylePosition = nA(r, SC, n.listStylePosition)),
            (this.listStyleType = nA(r, rl, n.listStyleType)),
            (this.marginTop = nA(r, bC, n.marginTop)),
            (this.marginRight = nA(r, LC, n.marginRight)),
            (this.marginBottom = nA(r, TC, n.marginBottom)),
            (this.marginLeft = nA(r, DC, n.marginLeft)),
            (this.opacity = nA(r, AQ, n.opacity));
          var l = nA(r, KC, n.overflow);
          (this.overflowX = l[0]),
            (this.overflowY = l[l.length > 1 ? 1 : 0]),
            (this.overflowWrap = nA(r, kC, n.overflowWrap)),
            (this.paddingTop = nA(r, RC, n.paddingTop)),
            (this.paddingRight = nA(r, OC, n.paddingRight)),
            (this.paddingBottom = nA(r, NC, n.paddingBottom)),
            (this.paddingLeft = nA(r, MC, n.paddingLeft)),
            (this.paintOrder = nA(r, BQ, n.paintOrder)),
            (this.position = nA(r, _C, n.position)),
            (this.textAlign = nA(r, PC, n.textAlign)),
            (this.textDecorationColor = nA(
              r,
              eQ,
              (o = n.textDecorationColor) !== null && o !== void 0
                ? o
                : n.color,
            )),
            (this.textDecorationLine = nA(
              r,
              tQ,
              (s = n.textDecorationLine) !== null && s !== void 0
                ? s
                : n.textDecoration,
            )),
            (this.textShadow = nA(r, VC, n.textShadow)),
            (this.textTransform = nA(r, GC, n.textTransform)),
            (this.transform = nA(r, WC, n.transform)),
            (this.transformOrigin = nA(r, YC, n.transformOrigin)),
            (this.visibility = nA(r, ZC, n.visibility)),
            (this.webkitTextStrokeColor = nA(r, gQ, n.webkitTextStrokeColor)),
            (this.webkitTextStrokeWidth = nA(r, pQ, n.webkitTextStrokeWidth)),
            (this.wordBreak = nA(r, $C, n.wordBreak)),
            (this.zIndex = nA(r, qC, n.zIndex));
        }
        return (
          (e.prototype.isVisible = function () {
            return (
              this.display > 0 && this.opacity > 0 && this.visibility === 0
            );
          }),
          (e.prototype.isTransparent = function () {
            return Ot(this.backgroundColor);
          }),
          (e.prototype.isTransformed = function () {
            return this.transform !== null;
          }),
          (e.prototype.isPositioned = function () {
            return this.position !== 0;
          }),
          (e.prototype.isPositionedWithZIndex = function () {
            return this.isPositioned() && !this.zIndex.auto;
          }),
          (e.prototype.isFloating = function () {
            return this.float !== 0;
          }),
          (e.prototype.isInlineLevel = function () {
            return (
              ZA(this.display, 4) ||
              ZA(this.display, 33554432) ||
              ZA(this.display, 268435456) ||
              ZA(this.display, 536870912) ||
              ZA(this.display, 67108864) ||
              ZA(this.display, 134217728)
            );
          }),
          e
        );
      })(),
      hQ = (function () {
        function e(r, n) {
          (this.content = nA(r, aQ, n.content)),
            (this.quotes = nA(r, fQ, n.quotes));
        }
        return e;
      })(),
      Fd = (function () {
        function e(r, n) {
          (this.counterIncrement = nA(r, lQ, n.counterIncrement)),
            (this.counterReset = nA(r, cQ, n.counterReset));
        }
        return e;
      })(),
      nA = function (e, r, n) {
        var o = new Zf(),
          s = n !== null && typeof n < "u" ? n.toString() : r.initialValue;
        o.write(s);
        var l = new $f(o.read());
        switch (r.type) {
          case 2:
            var u = l.parseComponentValue();
            return r.parse(e, SA(u) ? u.value : r.initialValue);
          case 0:
            return r.parse(e, l.parseComponentValue());
          case 1:
            return r.parse(e, l.parseComponentValues());
          case 4:
            return l.parseComponentValue();
          case 3:
            switch (r.format) {
              case "angle":
                return Ci.parse(e, l.parseComponentValue());
              case "color":
                return Rt.parse(e, l.parseComponentValue());
              case "image":
                return tl.parse(e, l.parseComponentValue());
              case "length":
                var f = l.parseComponentValue();
                return Kt(f) ? f : oe;
              case "length-percentage":
                var B = l.parseComponentValue();
                return JA(B) ? B : oe;
              case "time":
                return yd.parse(e, l.parseComponentValue());
            }
            break;
        }
      },
      vQ = "data-html2canvas-debug",
      mQ = function (e) {
        var r = e.getAttribute(vQ);
        switch (r) {
          case "all":
            return 1;
          case "clone":
            return 2;
          case "parse":
            return 3;
          case "render":
            return 4;
          default:
            return 0;
        }
      },
      nl = function (e, r) {
        var n = mQ(e);
        return n === 1 || r === n;
      },
      ot = (function () {
        function e(r, n) {
          if (
            ((this.context = r),
            (this.textNodes = []),
            (this.elements = []),
            (this.flags = 0),
            nl(n, 3))
          )
            debugger;
          (this.styles = new wQ(r, window.getComputedStyle(n, null))),
            hl(n) &&
              (this.styles.animationDuration.some(function (o) {
                return o > 0;
              }) && (n.style.animationDuration = "0s"),
              this.styles.transform !== null && (n.style.transform = "none")),
            (this.bounds = ei(this.context, n)),
            nl(n, 4) && (this.flags |= 16);
        }
        return e;
      })(),
      CQ =
        "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",
      Ed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      Ao = typeof Uint8Array > "u" ? [] : new Uint8Array(256),
      Li = 0;
    Li < Ed.length;
    Li++
  )
    Ao[Ed.charCodeAt(Li)] = Li;
  for (
    var QQ = function (e) {
        var r = e.length * 0.75,
          n = e.length,
          o,
          s = 0,
          l,
          u,
          f,
          B;
        e[e.length - 1] === "=" && (r--, e[e.length - 2] === "=" && r--);
        var g =
            typeof ArrayBuffer < "u" &&
            typeof Uint8Array < "u" &&
            typeof Uint8Array.prototype.slice < "u"
              ? new ArrayBuffer(r)
              : new Array(r),
          w = Array.isArray(g) ? g : new Uint8Array(g);
        for (o = 0; o < n; o += 4)
          (l = Ao[e.charCodeAt(o)]),
            (u = Ao[e.charCodeAt(o + 1)]),
            (f = Ao[e.charCodeAt(o + 2)]),
            (B = Ao[e.charCodeAt(o + 3)]),
            (w[s++] = (l << 2) | (u >> 4)),
            (w[s++] = ((u & 15) << 4) | (f >> 2)),
            (w[s++] = ((f & 3) << 6) | (B & 63));
        return g;
      },
      yQ = function (e) {
        for (var r = e.length, n = [], o = 0; o < r; o += 2)
          n.push((e[o + 1] << 8) | e[o]);
        return n;
      },
      UQ = function (e) {
        for (var r = e.length, n = [], o = 0; o < r; o += 4)
          n.push((e[o + 3] << 24) | (e[o + 2] << 16) | (e[o + 1] << 8) | e[o]);
        return n;
      },
      vr = 5,
      ol = 11,
      il = 2,
      FQ = ol - vr,
      xd = 65536 >> vr,
      EQ = 1 << vr,
      sl = EQ - 1,
      xQ = 1024 >> vr,
      IQ = xd + xQ,
      HQ = IQ,
      SQ = 32,
      bQ = HQ + SQ,
      LQ = 65536 >> ol,
      TQ = 1 << FQ,
      DQ = TQ - 1,
      Id = function (e, r, n) {
        return e.slice
          ? e.slice(r, n)
          : new Uint16Array(Array.prototype.slice.call(e, r, n));
      },
      KQ = function (e, r, n) {
        return e.slice
          ? e.slice(r, n)
          : new Uint32Array(Array.prototype.slice.call(e, r, n));
      },
      kQ = function (e, r) {
        var n = QQ(e),
          o = Array.isArray(n) ? UQ(n) : new Uint32Array(n),
          s = Array.isArray(n) ? yQ(n) : new Uint16Array(n),
          l = 24,
          u = Id(s, l / 2, o[4] / 2),
          f =
            o[5] === 2
              ? Id(s, (l + o[4]) / 2)
              : KQ(o, Math.ceil((l + o[4]) / 4));
        return new RQ(o[0], o[1], o[2], o[3], u, f);
      },
      RQ = (function () {
        function e(r, n, o, s, l, u) {
          (this.initialValue = r),
            (this.errorValue = n),
            (this.highStart = o),
            (this.highValueIndex = s),
            (this.index = l),
            (this.data = u);
        }
        return (
          (e.prototype.get = function (r) {
            var n;
            if (r >= 0) {
              if (r < 55296 || (r > 56319 && r <= 65535))
                return (
                  (n = this.index[r >> vr]),
                  (n = (n << il) + (r & sl)),
                  this.data[n]
                );
              if (r <= 65535)
                return (
                  (n = this.index[xd + ((r - 55296) >> vr)]),
                  (n = (n << il) + (r & sl)),
                  this.data[n]
                );
              if (r < this.highStart)
                return (
                  (n = bQ - LQ + (r >> ol)),
                  (n = this.index[n]),
                  (n += (r >> vr) & DQ),
                  (n = this.index[n]),
                  (n = (n << il) + (r & sl)),
                  this.data[n]
                );
              if (r <= 1114111) return this.data[this.highValueIndex];
            }
            return this.errorValue;
          }),
          e
        );
      })(),
      Hd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      OQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256),
      Ti = 0;
    Ti < Hd.length;
    Ti++
  )
    OQ[Hd.charCodeAt(Ti)] = Ti;
  var NQ = 1,
    al = 2,
    ll = 3,
    Sd = 4,
    bd = 5,
    MQ = 7,
    Ld = 8,
    cl = 9,
    ul = 10,
    Td = 11,
    Dd = 12,
    Kd = 13,
    kd = 14,
    fl = 15,
    PQ = function (e) {
      for (var r = [], n = 0, o = e.length; n < o; ) {
        var s = e.charCodeAt(n++);
        if (s >= 55296 && s <= 56319 && n < o) {
          var l = e.charCodeAt(n++);
          (l & 64512) === 56320
            ? r.push(((s & 1023) << 10) + (l & 1023) + 65536)
            : (r.push(s), n--);
        } else r.push(s);
      }
      return r;
    },
    _Q = function () {
      for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
      if (String.fromCodePoint) return String.fromCodePoint.apply(String, e);
      var n = e.length;
      if (!n) return "";
      for (var o = [], s = -1, l = ""; ++s < n; ) {
        var u = e[s];
        u <= 65535
          ? o.push(u)
          : ((u -= 65536), o.push((u >> 10) + 55296, (u % 1024) + 56320)),
          (s + 1 === n || o.length > 16384) &&
            ((l += String.fromCharCode.apply(String, o)), (o.length = 0));
      }
      return l;
    },
    VQ = kQ(CQ),
    Ke = "×",
    dl = "÷",
    GQ = function (e) {
      return VQ.get(e);
    },
    WQ = function (e, r, n) {
      var o = n - 2,
        s = r[o],
        l = r[n - 1],
        u = r[n];
      if (l === al && u === ll) return Ke;
      if (l === al || l === ll || l === Sd || u === al || u === ll || u === Sd)
        return dl;
      if (
        (l === Ld && [Ld, cl, Td, Dd].indexOf(u) !== -1) ||
        ((l === Td || l === cl) && (u === cl || u === ul)) ||
        ((l === Dd || l === ul) && u === ul) ||
        u === Kd ||
        u === bd ||
        u === MQ ||
        l === NQ
      )
        return Ke;
      if (l === Kd && u === kd) {
        for (; s === bd; ) s = r[--o];
        if (s === kd) return Ke;
      }
      if (l === fl && u === fl) {
        for (var f = 0; s === fl; ) f++, (s = r[--o]);
        if (f % 2 === 0) return Ke;
      }
      return dl;
    },
    jQ = function (e) {
      var r = PQ(e),
        n = r.length,
        o = 0,
        s = 0,
        l = r.map(GQ);
      return {
        next: function () {
          if (o >= n) return { done: !0, value: null };
          for (var u = Ke; o < n && (u = WQ(r, l, ++o)) === Ke; );
          if (u !== Ke || o === n) {
            var f = _Q.apply(null, r.slice(s, o));
            return (s = o), { value: f, done: !1 };
          }
          return { done: !0, value: null };
        },
      };
    },
    XQ = function (e) {
      for (var r = jQ(e), n = [], o; !(o = r.next()).done; )
        o.value && n.push(o.value.slice());
      return n;
    },
    zQ = function (e) {
      var r = 123;
      if (e.createRange) {
        var n = e.createRange();
        if (n.getBoundingClientRect) {
          var o = e.createElement("boundtest");
          (o.style.height = r + "px"),
            (o.style.display = "block"),
            e.body.appendChild(o),
            n.selectNode(o);
          var s = n.getBoundingClientRect(),
            l = Math.round(s.height);
          if ((e.body.removeChild(o), l === r)) return !0;
        }
      }
      return !1;
    },
    JQ = function (e) {
      var r = e.createElement("boundtest");
      (r.style.width = "50px"),
        (r.style.display = "block"),
        (r.style.fontSize = "12px"),
        (r.style.letterSpacing = "0px"),
        (r.style.wordSpacing = "0px"),
        e.body.appendChild(r);
      var n = e.createRange();
      r.innerHTML =
        typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
      var o = r.firstChild,
        s = ti(o.data).map(function (B) {
          return GA(B);
        }),
        l = 0,
        u = {},
        f = s.every(function (B, g) {
          n.setStart(o, l), n.setEnd(o, l + B.length);
          var w = n.getBoundingClientRect();
          l += B.length;
          var h = w.x > u.x || w.y > u.y;
          return (u = w), g === 0 ? !0 : h;
        });
      return e.body.removeChild(r), f;
    },
    YQ = function () {
      return typeof new Image().crossOrigin < "u";
    },
    ZQ = function () {
      return typeof new XMLHttpRequest().responseType == "string";
    },
    $Q = function (e) {
      var r = new Image(),
        n = e.createElement("canvas"),
        o = n.getContext("2d");
      if (!o) return !1;
      r.src =
        "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
      try {
        o.drawImage(r, 0, 0), n.toDataURL();
      } catch {
        return !1;
      }
      return !0;
    },
    Rd = function (e) {
      return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
    },
    qQ = function (e) {
      var r = e.createElement("canvas"),
        n = 100;
      (r.width = n), (r.height = n);
      var o = r.getContext("2d");
      if (!o) return Promise.reject(!1);
      (o.fillStyle = "rgb(0, 255, 0)"), o.fillRect(0, 0, n, n);
      var s = new Image(),
        l = r.toDataURL();
      s.src = l;
      var u = Bl(n, n, 0, 0, s);
      return (
        (o.fillStyle = "red"),
        o.fillRect(0, 0, n, n),
        Od(u)
          .then(function (f) {
            o.drawImage(f, 0, 0);
            var B = o.getImageData(0, 0, n, n).data;
            (o.fillStyle = "red"), o.fillRect(0, 0, n, n);
            var g = e.createElement("div");
            return (
              (g.style.backgroundImage = "url(" + l + ")"),
              (g.style.height = n + "px"),
              Rd(B) ? Od(Bl(n, n, 0, 0, g)) : Promise.reject(!1)
            );
          })
          .then(function (f) {
            return o.drawImage(f, 0, 0), Rd(o.getImageData(0, 0, n, n).data);
          })
          .catch(function () {
            return !1;
          })
      );
    },
    Bl = function (e, r, n, o, s) {
      var l = "http://www.w3.org/2000/svg",
        u = document.createElementNS(l, "svg"),
        f = document.createElementNS(l, "foreignObject");
      return (
        u.setAttributeNS(null, "width", e.toString()),
        u.setAttributeNS(null, "height", r.toString()),
        f.setAttributeNS(null, "width", "100%"),
        f.setAttributeNS(null, "height", "100%"),
        f.setAttributeNS(null, "x", n.toString()),
        f.setAttributeNS(null, "y", o.toString()),
        f.setAttributeNS(null, "externalResourcesRequired", "true"),
        u.appendChild(f),
        f.appendChild(s),
        u
      );
    },
    Od = function (e) {
      return new Promise(function (r, n) {
        var o = new Image();
        (o.onload = function () {
          return r(o);
        }),
          (o.onerror = n),
          (o.src =
            "data:image/svg+xml;charset=utf-8," +
            encodeURIComponent(new XMLSerializer().serializeToString(e)));
      });
    },
    ie = {
      get SUPPORT_RANGE_BOUNDS() {
        var e = zQ(document);
        return (
          Object.defineProperty(ie, "SUPPORT_RANGE_BOUNDS", { value: e }), e
        );
      },
      get SUPPORT_WORD_BREAKING() {
        var e = ie.SUPPORT_RANGE_BOUNDS && JQ(document);
        return (
          Object.defineProperty(ie, "SUPPORT_WORD_BREAKING", { value: e }), e
        );
      },
      get SUPPORT_SVG_DRAWING() {
        var e = $Q(document);
        return (
          Object.defineProperty(ie, "SUPPORT_SVG_DRAWING", { value: e }), e
        );
      },
      get SUPPORT_FOREIGNOBJECT_DRAWING() {
        var e =
          typeof Array.from == "function" && typeof window.fetch == "function"
            ? qQ(document)
            : Promise.resolve(!1);
        return (
          Object.defineProperty(ie, "SUPPORT_FOREIGNOBJECT_DRAWING", {
            value: e,
          }),
          e
        );
      },
      get SUPPORT_CORS_IMAGES() {
        var e = YQ();
        return (
          Object.defineProperty(ie, "SUPPORT_CORS_IMAGES", { value: e }), e
        );
      },
      get SUPPORT_RESPONSE_TYPE() {
        var e = ZQ();
        return (
          Object.defineProperty(ie, "SUPPORT_RESPONSE_TYPE", { value: e }), e
        );
      },
      get SUPPORT_CORS_XHR() {
        var e = "withCredentials" in new XMLHttpRequest();
        return Object.defineProperty(ie, "SUPPORT_CORS_XHR", { value: e }), e;
      },
      get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
        var e = !!(typeof Intl < "u" && Intl.Segmenter);
        return (
          Object.defineProperty(ie, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
            value: e,
          }),
          e
        );
      },
    },
    eo = (function () {
      function e(r, n) {
        (this.text = r), (this.bounds = n);
      }
      return e;
    })(),
    Ay = function (e, r, n, o) {
      var s = ry(r, n),
        l = [],
        u = 0;
      return (
        s.forEach(function (f) {
          if (n.textDecorationLine.length || f.trim().length > 0)
            if (ie.SUPPORT_RANGE_BOUNDS) {
              var B = Nd(o, u, f.length).getClientRects();
              if (B.length > 1) {
                var g = gl(f),
                  w = 0;
                g.forEach(function (v) {
                  l.push(
                    new eo(
                      v,
                      Bt.fromDOMRectList(
                        e,
                        Nd(o, w + u, v.length).getClientRects(),
                      ),
                    ),
                  ),
                    (w += v.length);
                });
              } else l.push(new eo(f, Bt.fromDOMRectList(e, B)));
            } else {
              var h = o.splitText(f.length);
              l.push(new eo(f, ey(e, o))), (o = h);
            }
          else ie.SUPPORT_RANGE_BOUNDS || (o = o.splitText(f.length));
          u += f.length;
        }),
        l
      );
    },
    ey = function (e, r) {
      var n = r.ownerDocument;
      if (n) {
        var o = n.createElement("html2canvaswrapper");
        o.appendChild(r.cloneNode(!0));
        var s = r.parentNode;
        if (s) {
          s.replaceChild(o, r);
          var l = ei(e, o);
          return o.firstChild && s.replaceChild(o.firstChild, o), l;
        }
      }
      return Bt.EMPTY;
    },
    Nd = function (e, r, n) {
      var o = e.ownerDocument;
      if (!o) throw new Error("Node has no owner document");
      var s = o.createRange();
      return s.setStart(e, r), s.setEnd(e, r + n), s;
    },
    gl = function (e) {
      if (ie.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        var r = new Intl.Segmenter(void 0, { granularity: "grapheme" });
        return Array.from(r.segment(e)).map(function (n) {
          return n.segment;
        });
      }
      return XQ(e);
    },
    ty = function (e, r) {
      if (ie.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        var n = new Intl.Segmenter(void 0, { granularity: "word" });
        return Array.from(n.segment(e)).map(function (o) {
          return o.segment;
        });
      }
      return oy(e, r);
    },
    ry = function (e, r) {
      return r.letterSpacing !== 0 ? gl(e) : ty(e, r);
    },
    ny = [32, 160, 4961, 65792, 65793, 4153, 4241],
    oy = function (e, r) {
      for (
        var n = Lv(e, {
            lineBreak: r.lineBreak,
            wordBreak:
              r.overflowWrap === "break-word" ? "break-word" : r.wordBreak,
          }),
          o = [],
          s,
          l = function () {
            if (s.value) {
              var u = s.value.slice(),
                f = ti(u),
                B = "";
              f.forEach(function (g) {
                ny.indexOf(g) === -1
                  ? (B += GA(g))
                  : (B.length && o.push(B), o.push(GA(g)), (B = ""));
              }),
                B.length && o.push(B);
            }
          };
        !(s = n.next()).done;

      )
        l();
      return o;
    },
    iy = (function () {
      function e(r, n, o) {
        (this.text = sy(n.data, o.textTransform)),
          (this.textBounds = Ay(r, this.text, o, n));
      }
      return e;
    })(),
    sy = function (e, r) {
      switch (r) {
        case 1:
          return e.toLowerCase();
        case 3:
          return e.replace(ay, ly);
        case 2:
          return e.toUpperCase();
        default:
          return e;
      }
    },
    ay = /(^|\s|:|-|\(|\))([a-z])/g,
    ly = function (e, r, n) {
      return e.length > 0 ? r + n.toUpperCase() : e;
    },
    Md = (function (e) {
      Ge(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (
          (s.src = o.currentSrc || o.src),
          (s.intrinsicWidth = o.naturalWidth),
          (s.intrinsicHeight = o.naturalHeight),
          s.context.cache.addImage(s.src),
          s
        );
      }
      return r;
    })(ot),
    Pd = (function (e) {
      Ge(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (
          (s.canvas = o),
          (s.intrinsicWidth = o.width),
          (s.intrinsicHeight = o.height),
          s
        );
      }
      return r;
    })(ot),
    _d = (function (e) {
      Ge(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this,
          l = new XMLSerializer(),
          u = ei(n, o);
        return (
          o.setAttribute("width", u.width + "px"),
          o.setAttribute("height", u.height + "px"),
          (s.svg =
            "data:image/svg+xml," + encodeURIComponent(l.serializeToString(o))),
          (s.intrinsicWidth = o.width.baseVal.value),
          (s.intrinsicHeight = o.height.baseVal.value),
          s.context.cache.addImage(s.svg),
          s
        );
      }
      return r;
    })(ot),
    Vd = (function (e) {
      Ge(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (s.value = o.value), s;
      }
      return r;
    })(ot),
    pl = (function (e) {
      Ge(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (
          (s.start = o.start),
          (s.reversed = typeof o.reversed == "boolean" && o.reversed === !0),
          s
        );
      }
      return r;
    })(ot),
    cy = [{ type: 15, flags: 0, unit: "px", number: 3 }],
    uy = [{ type: 16, flags: 0, number: 50 }],
    fy = function (e) {
      return e.width > e.height
        ? new Bt(e.left + (e.width - e.height) / 2, e.top, e.height, e.height)
        : e.width < e.height
          ? new Bt(e.left, e.top + (e.height - e.width) / 2, e.width, e.width)
          : e;
    },
    dy = function (e) {
      var r = e.type === By ? new Array(e.value.length + 1).join("•") : e.value;
      return r.length === 0 ? e.placeholder || "" : r;
    },
    Di = "checkbox",
    Ki = "radio",
    By = "password",
    Gd = 707406591,
    wl = (function (e) {
      Ge(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        switch (
          ((s.type = o.type.toLowerCase()),
          (s.checked = o.checked),
          (s.value = dy(o)),
          (s.type === Di || s.type === Ki) &&
            ((s.styles.backgroundColor = 3739148031),
            (s.styles.borderTopColor =
              s.styles.borderRightColor =
              s.styles.borderBottomColor =
              s.styles.borderLeftColor =
                2779096575),
            (s.styles.borderTopWidth =
              s.styles.borderRightWidth =
              s.styles.borderBottomWidth =
              s.styles.borderLeftWidth =
                1),
            (s.styles.borderTopStyle =
              s.styles.borderRightStyle =
              s.styles.borderBottomStyle =
              s.styles.borderLeftStyle =
                1),
            (s.styles.backgroundClip = [0]),
            (s.styles.backgroundOrigin = [0]),
            (s.bounds = fy(s.bounds))),
          s.type)
        ) {
          case Di:
            s.styles.borderTopRightRadius =
              s.styles.borderTopLeftRadius =
              s.styles.borderBottomRightRadius =
              s.styles.borderBottomLeftRadius =
                cy;
            break;
          case Ki:
            s.styles.borderTopRightRadius =
              s.styles.borderTopLeftRadius =
              s.styles.borderBottomRightRadius =
              s.styles.borderBottomLeftRadius =
                uy;
            break;
        }
        return s;
      }
      return r;
    })(ot),
    Wd = (function (e) {
      Ge(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this,
          l = o.options[o.selectedIndex || 0];
        return (s.value = (l && l.text) || ""), s;
      }
      return r;
    })(ot),
    jd = (function (e) {
      Ge(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (s.value = o.value), s;
      }
      return r;
    })(ot),
    Xd = (function (e) {
      Ge(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        (s.src = o.src),
          (s.width = parseInt(o.width, 10) || 0),
          (s.height = parseInt(o.height, 10) || 0),
          (s.backgroundColor = s.styles.backgroundColor);
        try {
          if (
            o.contentWindow &&
            o.contentWindow.document &&
            o.contentWindow.document.documentElement
          ) {
            s.tree = Jd(n, o.contentWindow.document.documentElement);
            var l = o.contentWindow.document.documentElement
                ? $n(
                    n,
                    getComputedStyle(o.contentWindow.document.documentElement)
                      .backgroundColor,
                  )
                : pt.TRANSPARENT,
              u = o.contentWindow.document.body
                ? $n(
                    n,
                    getComputedStyle(o.contentWindow.document.body)
                      .backgroundColor,
                  )
                : pt.TRANSPARENT;
            s.backgroundColor = Ot(l)
              ? Ot(u)
                ? s.styles.backgroundColor
                : u
              : l;
          }
        } catch {}
        return s;
      }
      return r;
    })(ot),
    gy = ["OL", "UL", "MENU"],
    ki = function (e, r, n, o) {
      for (var s = r.firstChild, l = void 0; s; s = l)
        if (((l = s.nextSibling), Yd(s) && s.data.trim().length > 0))
          n.textNodes.push(new iy(e, s, n.styles));
        else if (Wr(s))
          if (tB(s) && s.assignedNodes)
            s.assignedNodes().forEach(function (f) {
              return ki(e, f, n, o);
            });
          else {
            var u = zd(e, s);
            u.styles.isVisible() &&
              (py(s, u, o) ? (u.flags |= 4) : wy(u.styles) && (u.flags |= 2),
              gy.indexOf(s.tagName) !== -1 && (u.flags |= 8),
              n.elements.push(u),
              s.slot,
              s.shadowRoot
                ? ki(e, s.shadowRoot, u, o)
                : !Oi(s) && !Zd(s) && !Ni(s) && ki(e, s, u, o));
          }
    },
    zd = function (e, r) {
      return ml(r)
        ? new Md(e, r)
        : $d(r)
          ? new Pd(e, r)
          : Zd(r)
            ? new _d(e, r)
            : hy(r)
              ? new Vd(e, r)
              : vy(r)
                ? new pl(e, r)
                : my(r)
                  ? new wl(e, r)
                  : Ni(r)
                    ? new Wd(e, r)
                    : Oi(r)
                      ? new jd(e, r)
                      : AB(r)
                        ? new Xd(e, r)
                        : new ot(e, r);
    },
    Jd = function (e, r) {
      var n = zd(e, r);
      return (n.flags |= 4), ki(e, r, n, n), n;
    },
    py = function (e, r, n) {
      return (
        r.styles.isPositionedWithZIndex() ||
        r.styles.opacity < 1 ||
        r.styles.isTransformed() ||
        (vl(e) && n.styles.isTransparent())
      );
    },
    wy = function (e) {
      return e.isPositioned() || e.isFloating();
    },
    Yd = function (e) {
      return e.nodeType === Node.TEXT_NODE;
    },
    Wr = function (e) {
      return e.nodeType === Node.ELEMENT_NODE;
    },
    hl = function (e) {
      return Wr(e) && typeof e.style < "u" && !Ri(e);
    },
    Ri = function (e) {
      return typeof e.className == "object";
    },
    hy = function (e) {
      return e.tagName === "LI";
    },
    vy = function (e) {
      return e.tagName === "OL";
    },
    my = function (e) {
      return e.tagName === "INPUT";
    },
    Cy = function (e) {
      return e.tagName === "HTML";
    },
    Zd = function (e) {
      return e.tagName === "svg";
    },
    vl = function (e) {
      return e.tagName === "BODY";
    },
    $d = function (e) {
      return e.tagName === "CANVAS";
    },
    qd = function (e) {
      return e.tagName === "VIDEO";
    },
    ml = function (e) {
      return e.tagName === "IMG";
    },
    AB = function (e) {
      return e.tagName === "IFRAME";
    },
    eB = function (e) {
      return e.tagName === "STYLE";
    },
    Qy = function (e) {
      return e.tagName === "SCRIPT";
    },
    Oi = function (e) {
      return e.tagName === "TEXTAREA";
    },
    Ni = function (e) {
      return e.tagName === "SELECT";
    },
    tB = function (e) {
      return e.tagName === "SLOT";
    },
    rB = function (e) {
      return e.tagName.indexOf("-") > 0;
    },
    yy = (function () {
      function e() {
        this.counters = {};
      }
      return (
        (e.prototype.getCounterValue = function (r) {
          var n = this.counters[r];
          return n && n.length ? n[n.length - 1] : 1;
        }),
        (e.prototype.getCounterValues = function (r) {
          var n = this.counters[r];
          return n || [];
        }),
        (e.prototype.pop = function (r) {
          var n = this;
          r.forEach(function (o) {
            return n.counters[o].pop();
          });
        }),
        (e.prototype.parse = function (r) {
          var n = this,
            o = r.counterIncrement,
            s = r.counterReset,
            l = !0;
          o !== null &&
            o.forEach(function (f) {
              var B = n.counters[f.counter];
              B &&
                f.increment !== 0 &&
                ((l = !1),
                B.length || B.push(1),
                (B[Math.max(0, B.length - 1)] += f.increment));
            });
          var u = [];
          return (
            l &&
              s.forEach(function (f) {
                var B = n.counters[f.counter];
                u.push(f.counter),
                  B || (B = n.counters[f.counter] = []),
                  B.push(f.reset);
              }),
            u
          );
        }),
        e
      );
    })(),
    nB = {
      integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      values: [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
      ],
    },
    oB = {
      integers: [
        9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500,
        400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5,
        4, 3, 2, 1,
      ],
      values: [
        "Ք",
        "Փ",
        "Ւ",
        "Ց",
        "Ր",
        "Տ",
        "Վ",
        "Ս",
        "Ռ",
        "Ջ",
        "Պ",
        "Չ",
        "Ո",
        "Շ",
        "Ն",
        "Յ",
        "Մ",
        "Ճ",
        "Ղ",
        "Ձ",
        "Հ",
        "Կ",
        "Ծ",
        "Խ",
        "Լ",
        "Ի",
        "Ժ",
        "Թ",
        "Ը",
        "Է",
        "Զ",
        "Ե",
        "Դ",
        "Գ",
        "Բ",
        "Ա",
      ],
    },
    Uy = {
      integers: [
        1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100,
        90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5,
        4, 3, 2, 1,
      ],
      values: [
        "י׳",
        "ט׳",
        "ח׳",
        "ז׳",
        "ו׳",
        "ה׳",
        "ד׳",
        "ג׳",
        "ב׳",
        "א׳",
        "ת",
        "ש",
        "ר",
        "ק",
        "צ",
        "פ",
        "ע",
        "ס",
        "נ",
        "מ",
        "ל",
        "כ",
        "יט",
        "יח",
        "יז",
        "טז",
        "טו",
        "י",
        "ט",
        "ח",
        "ז",
        "ו",
        "ה",
        "ד",
        "ג",
        "ב",
        "א",
      ],
    },
    Fy = {
      integers: [
        1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600,
        500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6,
        5, 4, 3, 2, 1,
      ],
      values: [
        "ჵ",
        "ჰ",
        "ჯ",
        "ჴ",
        "ხ",
        "ჭ",
        "წ",
        "ძ",
        "ც",
        "ჩ",
        "შ",
        "ყ",
        "ღ",
        "ქ",
        "ფ",
        "ჳ",
        "ტ",
        "ს",
        "რ",
        "ჟ",
        "პ",
        "ო",
        "ჲ",
        "ნ",
        "მ",
        "ლ",
        "კ",
        "ი",
        "თ",
        "ჱ",
        "ზ",
        "ვ",
        "ე",
        "დ",
        "გ",
        "ბ",
        "ა",
      ],
    },
    jr = function (e, r, n, o, s, l) {
      return e < r || e > n
        ? ro(e, s, l.length > 0)
        : o.integers.reduce(function (u, f, B) {
            for (; e >= f; ) (e -= f), (u += o.values[B]);
            return u;
          }, "") + l;
    },
    iB = function (e, r, n, o) {
      var s = "";
      do n || e--, (s = o(e) + s), (e /= r);
      while (e * r >= r);
      return s;
    },
    WA = function (e, r, n, o, s) {
      var l = n - r + 1;
      return (
        (e < 0 ? "-" : "") +
        (iB(Math.abs(e), l, o, function (u) {
          return GA(Math.floor(u % l) + r);
        }) +
          s)
      );
    },
    mr = function (e, r, n) {
      n === void 0 && (n = ". ");
      var o = r.length;
      return (
        iB(Math.abs(e), o, !1, function (s) {
          return r[Math.floor(s % o)];
        }) + n
      );
    },
    Xr = 1,
    Mt = 2,
    Pt = 4,
    to = 8,
    wt = function (e, r, n, o, s, l) {
      if (e < -9999 || e > 9999) return ro(e, 4, s.length > 0);
      var u = Math.abs(e),
        f = s;
      if (u === 0) return r[0] + f;
      for (var B = 0; u > 0 && B <= 4; B++) {
        var g = u % 10;
        g === 0 && ZA(l, Xr) && f !== ""
          ? (f = r[g] + f)
          : g > 1 ||
              (g === 1 && B === 0) ||
              (g === 1 && B === 1 && ZA(l, Mt)) ||
              (g === 1 && B === 1 && ZA(l, Pt) && e > 100) ||
              (g === 1 && B > 1 && ZA(l, to))
            ? (f = r[g] + (B > 0 ? n[B - 1] : "") + f)
            : g === 1 && B > 0 && (f = n[B - 1] + f),
          (u = Math.floor(u / 10));
      }
      return (e < 0 ? o : "") + f;
    },
    sB = "十百千萬",
    aB = "拾佰仟萬",
    lB = "マイナス",
    Cl = "마이너스",
    ro = function (e, r, n) {
      var o = n ? ". " : "",
        s = n ? "、" : "",
        l = n ? ", " : "",
        u = n ? " " : "";
      switch (r) {
        case 0:
          return "•" + u;
        case 1:
          return "◦" + u;
        case 2:
          return "◾" + u;
        case 5:
          var f = WA(e, 48, 57, !0, o);
          return f.length < 4 ? "0" + f : f;
        case 4:
          return mr(e, "〇一二三四五六七八九", s);
        case 6:
          return jr(e, 1, 3999, nB, 3, o).toLowerCase();
        case 7:
          return jr(e, 1, 3999, nB, 3, o);
        case 8:
          return WA(e, 945, 969, !1, o);
        case 9:
          return WA(e, 97, 122, !1, o);
        case 10:
          return WA(e, 65, 90, !1, o);
        case 11:
          return WA(e, 1632, 1641, !0, o);
        case 12:
        case 49:
          return jr(e, 1, 9999, oB, 3, o);
        case 35:
          return jr(e, 1, 9999, oB, 3, o).toLowerCase();
        case 13:
          return WA(e, 2534, 2543, !0, o);
        case 14:
        case 30:
          return WA(e, 6112, 6121, !0, o);
        case 15:
          return mr(e, "子丑寅卯辰巳午未申酉戌亥", s);
        case 16:
          return mr(e, "甲乙丙丁戊己庚辛壬癸", s);
        case 17:
        case 48:
          return wt(e, "零一二三四五六七八九", sB, "負", s, Mt | Pt | to);
        case 47:
          return wt(e, "零壹貳參肆伍陸柒捌玖", aB, "負", s, Xr | Mt | Pt | to);
        case 42:
          return wt(e, "零一二三四五六七八九", sB, "负", s, Mt | Pt | to);
        case 41:
          return wt(e, "零壹贰叁肆伍陆柒捌玖", aB, "负", s, Xr | Mt | Pt | to);
        case 26:
          return wt(e, "〇一二三四五六七八九", "十百千万", lB, s, 0);
        case 25:
          return wt(e, "零壱弐参四伍六七八九", "拾百千万", lB, s, Xr | Mt | Pt);
        case 31:
          return wt(e, "영일이삼사오육칠팔구", "십백천만", Cl, l, Xr | Mt | Pt);
        case 33:
          return wt(e, "零一二三四五六七八九", "十百千萬", Cl, l, 0);
        case 32:
          return wt(e, "零壹貳參四五六七八九", "拾百千", Cl, l, Xr | Mt | Pt);
        case 18:
          return WA(e, 2406, 2415, !0, o);
        case 20:
          return jr(e, 1, 19999, Fy, 3, o);
        case 21:
          return WA(e, 2790, 2799, !0, o);
        case 22:
          return WA(e, 2662, 2671, !0, o);
        case 22:
          return jr(e, 1, 10999, Uy, 3, o);
        case 23:
          return mr(
            e,
            "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん",
          );
        case 24:
          return mr(
            e,
            "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす",
          );
        case 27:
          return WA(e, 3302, 3311, !0, o);
        case 28:
          return mr(
            e,
            "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",
            s,
          );
        case 29:
          return mr(
            e,
            "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",
            s,
          );
        case 34:
          return WA(e, 3792, 3801, !0, o);
        case 37:
          return WA(e, 6160, 6169, !0, o);
        case 38:
          return WA(e, 4160, 4169, !0, o);
        case 39:
          return WA(e, 2918, 2927, !0, o);
        case 40:
          return WA(e, 1776, 1785, !0, o);
        case 43:
          return WA(e, 3046, 3055, !0, o);
        case 44:
          return WA(e, 3174, 3183, !0, o);
        case 45:
          return WA(e, 3664, 3673, !0, o);
        case 46:
          return WA(e, 3872, 3881, !0, o);
        case 3:
        default:
          return WA(e, 48, 57, !0, o);
      }
    },
    cB = "data-html2canvas-ignore",
    uB = (function () {
      function e(r, n, o) {
        if (
          ((this.context = r),
          (this.options = o),
          (this.scrolledElements = []),
          (this.referenceElement = n),
          (this.counters = new yy()),
          (this.quoteDepth = 0),
          !n.ownerDocument)
        )
          throw new Error("Cloned element does not have an owner document");
        this.documentElement = this.cloneNode(
          n.ownerDocument.documentElement,
          !1,
        );
      }
      return (
        (e.prototype.toIFrame = function (r, n) {
          var o = this,
            s = Ey(r, n);
          if (!s.contentWindow)
            return Promise.reject("Unable to find iframe window");
          var l = r.defaultView.pageXOffset,
            u = r.defaultView.pageYOffset,
            f = s.contentWindow,
            B = f.document,
            g = Hy(s).then(function () {
              return pe(o, void 0, void 0, function () {
                var w, h;
                return ce(this, function (v) {
                  switch (v.label) {
                    case 0:
                      return (
                        this.scrolledElements.forEach(Ty),
                        f &&
                          (f.scrollTo(n.left, n.top),
                          /(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                            (f.scrollY !== n.top || f.scrollX !== n.left) &&
                            (this.context.logger.warn(
                              "Unable to restore scroll position for cloned document",
                            ),
                            (this.context.windowBounds =
                              this.context.windowBounds.add(
                                f.scrollX - n.left,
                                f.scrollY - n.top,
                                0,
                                0,
                              )))),
                        (w = this.options.onclone),
                        (h = this.clonedReferenceElement),
                        typeof h > "u"
                          ? [
                              2,
                              Promise.reject(
                                "Error finding the " +
                                  this.referenceElement.nodeName +
                                  " in the cloned document",
                              ),
                            ]
                          : B.fonts && B.fonts.ready
                            ? [4, B.fonts.ready]
                            : [3, 2]
                      );
                    case 1:
                      v.sent(), (v.label = 2);
                    case 2:
                      return /(AppleWebKit)/g.test(navigator.userAgent)
                        ? [4, Iy(B)]
                        : [3, 4];
                    case 3:
                      v.sent(), (v.label = 4);
                    case 4:
                      return typeof w == "function"
                        ? [
                            2,
                            Promise.resolve()
                              .then(function () {
                                return w(B, h);
                              })
                              .then(function () {
                                return s;
                              }),
                          ]
                        : [2, s];
                  }
                });
              });
            });
          return (
            B.open(),
            B.write(by(document.doctype) + "<html></html>"),
            Ly(this.referenceElement.ownerDocument, l, u),
            B.replaceChild(
              B.adoptNode(this.documentElement),
              B.documentElement,
            ),
            B.close(),
            g
          );
        }),
        (e.prototype.createElementClone = function (r) {
          if (nl(r, 2)) debugger;
          if ($d(r)) return this.createCanvasClone(r);
          if (qd(r)) return this.createVideoClone(r);
          if (eB(r)) return this.createStyleClone(r);
          var n = r.cloneNode(!1);
          return (
            ml(n) &&
              (ml(r) &&
                r.currentSrc &&
                r.currentSrc !== r.src &&
                ((n.src = r.currentSrc), (n.srcset = "")),
              n.loading === "lazy" && (n.loading = "eager")),
            rB(n) ? this.createCustomElementClone(n) : n
          );
        }),
        (e.prototype.createCustomElementClone = function (r) {
          var n = document.createElement("html2canvascustomelement");
          return Ql(r.style, n), n;
        }),
        (e.prototype.createStyleClone = function (r) {
          try {
            var n = r.sheet;
            if (n && n.cssRules) {
              var o = [].slice.call(n.cssRules, 0).reduce(function (l, u) {
                  return u && typeof u.cssText == "string" ? l + u.cssText : l;
                }, ""),
                s = r.cloneNode(!1);
              return (s.textContent = o), s;
            }
          } catch (l) {
            if (
              (this.context.logger.error(
                "Unable to access cssRules property",
                l,
              ),
              l.name !== "SecurityError")
            )
              throw l;
          }
          return r.cloneNode(!1);
        }),
        (e.prototype.createCanvasClone = function (r) {
          var n;
          if (this.options.inlineImages && r.ownerDocument) {
            var o = r.ownerDocument.createElement("img");
            try {
              return (o.src = r.toDataURL()), o;
            } catch {
              this.context.logger.info(
                "Unable to inline canvas contents, canvas is tainted",
                r,
              );
            }
          }
          var s = r.cloneNode(!1);
          try {
            (s.width = r.width), (s.height = r.height);
            var l = r.getContext("2d"),
              u = s.getContext("2d");
            if (u)
              if (!this.options.allowTaint && l)
                u.putImageData(l.getImageData(0, 0, r.width, r.height), 0, 0);
              else {
                var f =
                  (n = r.getContext("webgl2")) !== null && n !== void 0
                    ? n
                    : r.getContext("webgl");
                if (f) {
                  var B = f.getContextAttributes();
                  B?.preserveDrawingBuffer === !1 &&
                    this.context.logger.warn(
                      "Unable to clone WebGL context as it has preserveDrawingBuffer=false",
                      r,
                    );
                }
                u.drawImage(r, 0, 0);
              }
            return s;
          } catch {
            this.context.logger.info(
              "Unable to clone canvas as it is tainted",
              r,
            );
          }
          return s;
        }),
        (e.prototype.createVideoClone = function (r) {
          var n = r.ownerDocument.createElement("canvas");
          (n.width = r.offsetWidth), (n.height = r.offsetHeight);
          var o = n.getContext("2d");
          try {
            return (
              o &&
                (o.drawImage(r, 0, 0, n.width, n.height),
                this.options.allowTaint ||
                  o.getImageData(0, 0, n.width, n.height)),
              n
            );
          } catch {
            this.context.logger.info(
              "Unable to clone video as it is tainted",
              r,
            );
          }
          var s = r.ownerDocument.createElement("canvas");
          return (s.width = r.offsetWidth), (s.height = r.offsetHeight), s;
        }),
        (e.prototype.appendChildNode = function (r, n, o) {
          (!Wr(n) ||
            (!Qy(n) &&
              !n.hasAttribute(cB) &&
              (typeof this.options.ignoreElements != "function" ||
                !this.options.ignoreElements(n)))) &&
            (!this.options.copyStyles || !Wr(n) || !eB(n)) &&
            r.appendChild(this.cloneNode(n, o));
        }),
        (e.prototype.cloneChildNodes = function (r, n, o) {
          for (
            var s = this,
              l = r.shadowRoot ? r.shadowRoot.firstChild : r.firstChild;
            l;
            l = l.nextSibling
          )
            if (Wr(l) && tB(l) && typeof l.assignedNodes == "function") {
              var u = l.assignedNodes();
              u.length &&
                u.forEach(function (f) {
                  return s.appendChildNode(n, f, o);
                });
            } else this.appendChildNode(n, l, o);
        }),
        (e.prototype.cloneNode = function (r, n) {
          if (Yd(r)) return document.createTextNode(r.data);
          if (!r.ownerDocument) return r.cloneNode(!1);
          var o = r.ownerDocument.defaultView;
          if (o && Wr(r) && (hl(r) || Ri(r))) {
            var s = this.createElementClone(r);
            s.style.transitionProperty = "none";
            var l = o.getComputedStyle(r),
              u = o.getComputedStyle(r, ":before"),
              f = o.getComputedStyle(r, ":after");
            this.referenceElement === r &&
              hl(s) &&
              (this.clonedReferenceElement = s),
              vl(s) && ky(s);
            var B = this.counters.parse(new Fd(this.context, l)),
              g = this.resolvePseudoContent(r, s, u, no.BEFORE);
            rB(r) && (n = !0),
              qd(r) || this.cloneChildNodes(r, s, n),
              g && s.insertBefore(g, s.firstChild);
            var w = this.resolvePseudoContent(r, s, f, no.AFTER);
            return (
              w && s.appendChild(w),
              this.counters.pop(B),
              ((l && (this.options.copyStyles || Ri(r)) && !AB(r)) || n) &&
                Ql(l, s),
              (r.scrollTop !== 0 || r.scrollLeft !== 0) &&
                this.scrolledElements.push([s, r.scrollLeft, r.scrollTop]),
              (Oi(r) || Ni(r)) && (Oi(s) || Ni(s)) && (s.value = r.value),
              s
            );
          }
          return r.cloneNode(!1);
        }),
        (e.prototype.resolvePseudoContent = function (r, n, o, s) {
          var l = this;
          if (o) {
            var u = o.content,
              f = n.ownerDocument;
            if (
              !(
                !f ||
                !u ||
                u === "none" ||
                u === "-moz-alt-content" ||
                o.display === "none"
              )
            ) {
              this.counters.parse(new Fd(this.context, o));
              var B = new hQ(this.context, o),
                g = f.createElement("html2canvaspseudoelement");
              Ql(o, g),
                B.content.forEach(function (h) {
                  if (h.type === 0) g.appendChild(f.createTextNode(h.value));
                  else if (h.type === 22) {
                    var v = f.createElement("img");
                    (v.src = h.value),
                      (v.style.opacity = "1"),
                      g.appendChild(v);
                  } else if (h.type === 18) {
                    if (h.name === "attr") {
                      var U = h.values.filter(SA);
                      U.length &&
                        g.appendChild(
                          f.createTextNode(r.getAttribute(U[0].value) || ""),
                        );
                    } else if (h.name === "counter") {
                      var Q = h.values.filter(Vr),
                        m = Q[0],
                        F = Q[1];
                      if (m && SA(m)) {
                        var E = l.counters.getCounterValue(m.value),
                          I = F && SA(F) ? rl.parse(l.context, F.value) : 3;
                        g.appendChild(f.createTextNode(ro(E, I, !1)));
                      }
                    } else if (h.name === "counters") {
                      var R = h.values.filter(Vr),
                        m = R[0],
                        T = R[1],
                        F = R[2];
                      if (m && SA(m)) {
                        var k = l.counters.getCounterValues(m.value),
                          O = F && SA(F) ? rl.parse(l.context, F.value) : 3,
                          P = T && T.type === 0 ? T.value : "",
                          j = k
                            .map(function (dA) {
                              return ro(dA, O, !1);
                            })
                            .join(P);
                        g.appendChild(f.createTextNode(j));
                      }
                    }
                  } else if (h.type === 20)
                    switch (h.value) {
                      case "open-quote":
                        g.appendChild(
                          f.createTextNode(Ud(B.quotes, l.quoteDepth++, !0)),
                        );
                        break;
                      case "close-quote":
                        g.appendChild(
                          f.createTextNode(Ud(B.quotes, --l.quoteDepth, !1)),
                        );
                        break;
                      default:
                        g.appendChild(f.createTextNode(h.value));
                    }
                }),
                (g.className = yl + " " + Ul);
              var w = s === no.BEFORE ? " " + yl : " " + Ul;
              return (
                Ri(n) ? (n.className.baseValue += w) : (n.className += w), g
              );
            }
          }
        }),
        (e.destroy = function (r) {
          return r.parentNode ? (r.parentNode.removeChild(r), !0) : !1;
        }),
        e
      );
    })(),
    no;
  (function (e) {
    (e[(e.BEFORE = 0)] = "BEFORE"), (e[(e.AFTER = 1)] = "AFTER");
  })(no || (no = {}));
  var Ey = function (e, r) {
      var n = e.createElement("iframe");
      return (
        (n.className = "html2canvas-container"),
        (n.style.visibility = "hidden"),
        (n.style.position = "fixed"),
        (n.style.left = "-10000px"),
        (n.style.top = "0px"),
        (n.style.border = "0"),
        (n.width = r.width.toString()),
        (n.height = r.height.toString()),
        (n.scrolling = "no"),
        n.setAttribute(cB, "true"),
        e.body.appendChild(n),
        n
      );
    },
    xy = function (e) {
      return new Promise(function (r) {
        if (e.complete) {
          r();
          return;
        }
        if (!e.src) {
          r();
          return;
        }
        (e.onload = r), (e.onerror = r);
      });
    },
    Iy = function (e) {
      return Promise.all([].slice.call(e.images, 0).map(xy));
    },
    Hy = function (e) {
      return new Promise(function (r, n) {
        var o = e.contentWindow;
        if (!o) return n("No window assigned for iframe");
        var s = o.document;
        o.onload = e.onload = function () {
          o.onload = e.onload = null;
          var l = setInterval(function () {
            s.body.childNodes.length > 0 &&
              s.readyState === "complete" &&
              (clearInterval(l), r(e));
          }, 50);
        };
      });
    },
    Sy = ["all", "d", "content"],
    Ql = function (e, r) {
      for (var n = e.length - 1; n >= 0; n--) {
        var o = e.item(n);
        Sy.indexOf(o) === -1 && r.style.setProperty(o, e.getPropertyValue(o));
      }
      return r;
    },
    by = function (e) {
      var r = "";
      return (
        e &&
          ((r += "<!DOCTYPE "),
          e.name && (r += e.name),
          e.internalSubset && (r += e.internalSubset),
          e.publicId && (r += '"' + e.publicId + '"'),
          e.systemId && (r += '"' + e.systemId + '"'),
          (r += ">")),
        r
      );
    },
    Ly = function (e, r, n) {
      e &&
        e.defaultView &&
        (r !== e.defaultView.pageXOffset || n !== e.defaultView.pageYOffset) &&
        e.defaultView.scrollTo(r, n);
    },
    Ty = function (e) {
      var r = e[0],
        n = e[1],
        o = e[2];
      (r.scrollLeft = n), (r.scrollTop = o);
    },
    Dy = ":before",
    Ky = ":after",
    yl = "___html2canvas___pseudoelement_before",
    Ul = "___html2canvas___pseudoelement_after",
    fB = `{
    content: "" !important;
    display: none !important;
}`,
    ky = function (e) {
      Ry(
        e,
        "." +
          yl +
          Dy +
          fB +
          `
         .` +
          Ul +
          Ky +
          fB,
      );
    },
    Ry = function (e, r) {
      var n = e.ownerDocument;
      if (n) {
        var o = n.createElement("style");
        (o.textContent = r), e.appendChild(o);
      }
    },
    dB = (function () {
      function e() {}
      return (
        (e.getOrigin = function (r) {
          var n = e._link;
          return n
            ? ((n.href = r),
              (n.href = n.href),
              n.protocol + n.hostname + n.port)
            : "about:blank";
        }),
        (e.isSameOrigin = function (r) {
          return e.getOrigin(r) === e._origin;
        }),
        (e.setContext = function (r) {
          (e._link = r.document.createElement("a")),
            (e._origin = e.getOrigin(r.location.href));
        }),
        (e._origin = "about:blank"),
        e
      );
    })(),
    Oy = (function () {
      function e(r, n) {
        (this.context = r), (this._options = n), (this._cache = {});
      }
      return (
        (e.prototype.addImage = function (r) {
          var n = Promise.resolve();
          return (
            this.has(r) ||
              ((El(r) || _y(r)) &&
                (this._cache[r] = this.loadImage(r)).catch(function () {})),
            n
          );
        }),
        (e.prototype.match = function (r) {
          return this._cache[r];
        }),
        (e.prototype.loadImage = function (r) {
          return pe(this, void 0, void 0, function () {
            var n,
              o,
              s,
              l,
              u = this;
            return ce(this, function (f) {
              switch (f.label) {
                case 0:
                  return (
                    (n = dB.isSameOrigin(r)),
                    (o =
                      !Fl(r) &&
                      this._options.useCORS === !0 &&
                      ie.SUPPORT_CORS_IMAGES &&
                      !n),
                    (s =
                      !Fl(r) &&
                      !n &&
                      !El(r) &&
                      typeof this._options.proxy == "string" &&
                      ie.SUPPORT_CORS_XHR &&
                      !o),
                    !n &&
                    this._options.allowTaint === !1 &&
                    !Fl(r) &&
                    !El(r) &&
                    !s &&
                    !o
                      ? [2]
                      : ((l = r), s ? [4, this.proxy(l)] : [3, 2])
                  );
                case 1:
                  (l = f.sent()), (f.label = 2);
                case 2:
                  return (
                    this.context.logger.debug(
                      "Added image " + r.substring(0, 256),
                    ),
                    [
                      4,
                      new Promise(function (B, g) {
                        var w = new Image();
                        (w.onload = function () {
                          return B(w);
                        }),
                          (w.onerror = g),
                          (Vy(l) || o) && (w.crossOrigin = "anonymous"),
                          (w.src = l),
                          w.complete === !0 &&
                            setTimeout(function () {
                              return B(w);
                            }, 500),
                          u._options.imageTimeout > 0 &&
                            setTimeout(function () {
                              return g(
                                "Timed out (" +
                                  u._options.imageTimeout +
                                  "ms) loading image",
                              );
                            }, u._options.imageTimeout);
                      }),
                    ]
                  );
                case 3:
                  return [2, f.sent()];
              }
            });
          });
        }),
        (e.prototype.has = function (r) {
          return typeof this._cache[r] < "u";
        }),
        (e.prototype.keys = function () {
          return Promise.resolve(Object.keys(this._cache));
        }),
        (e.prototype.proxy = function (r) {
          var n = this,
            o = this._options.proxy;
          if (!o) throw new Error("No proxy defined");
          var s = r.substring(0, 256);
          return new Promise(function (l, u) {
            var f = ie.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
              B = new XMLHttpRequest();
            (B.onload = function () {
              if (B.status === 200)
                if (f === "text") l(B.response);
                else {
                  var h = new FileReader();
                  h.addEventListener(
                    "load",
                    function () {
                      return l(h.result);
                    },
                    !1,
                  ),
                    h.addEventListener(
                      "error",
                      function (v) {
                        return u(v);
                      },
                      !1,
                    ),
                    h.readAsDataURL(B.response);
                }
              else
                u(
                  "Failed to proxy resource " +
                    s +
                    " with status code " +
                    B.status,
                );
            }),
              (B.onerror = u);
            var g = o.indexOf("?") > -1 ? "&" : "?";
            if (
              (B.open(
                "GET",
                "" +
                  o +
                  g +
                  "url=" +
                  encodeURIComponent(r) +
                  "&responseType=" +
                  f,
              ),
              f !== "text" &&
                B instanceof XMLHttpRequest &&
                (B.responseType = f),
              n._options.imageTimeout)
            ) {
              var w = n._options.imageTimeout;
              (B.timeout = w),
                (B.ontimeout = function () {
                  return u("Timed out (" + w + "ms) proxying " + s);
                });
            }
            B.send();
          });
        }),
        e
      );
    })(),
    Ny = /^data:image\/svg\+xml/i,
    My = /^data:image\/.*;base64,/i,
    Py = /^data:image\/.*/i,
    _y = function (e) {
      return ie.SUPPORT_SVG_DRAWING || !Gy(e);
    },
    Fl = function (e) {
      return Py.test(e);
    },
    Vy = function (e) {
      return My.test(e);
    },
    El = function (e) {
      return e.substr(0, 4) === "blob";
    },
    Gy = function (e) {
      return e.substr(-3).toLowerCase() === "svg" || Ny.test(e);
    },
    eA = (function () {
      function e(r, n) {
        (this.type = 0), (this.x = r), (this.y = n);
      }
      return (
        (e.prototype.add = function (r, n) {
          return new e(this.x + r, this.y + n);
        }),
        e
      );
    })(),
    zr = function (e, r, n) {
      return new eA(e.x + (r.x - e.x) * n, e.y + (r.y - e.y) * n);
    },
    Mi = (function () {
      function e(r, n, o, s) {
        (this.type = 1),
          (this.start = r),
          (this.startControl = n),
          (this.endControl = o),
          (this.end = s);
      }
      return (
        (e.prototype.subdivide = function (r, n) {
          var o = zr(this.start, this.startControl, r),
            s = zr(this.startControl, this.endControl, r),
            l = zr(this.endControl, this.end, r),
            u = zr(o, s, r),
            f = zr(s, l, r),
            B = zr(u, f, r);
          return n ? new e(this.start, o, u, B) : new e(B, f, l, this.end);
        }),
        (e.prototype.add = function (r, n) {
          return new e(
            this.start.add(r, n),
            this.startControl.add(r, n),
            this.endControl.add(r, n),
            this.end.add(r, n),
          );
        }),
        (e.prototype.reverse = function () {
          return new e(
            this.end,
            this.endControl,
            this.startControl,
            this.start,
          );
        }),
        e
      );
    })(),
    ke = function (e) {
      return e.type === 1;
    },
    Wy = (function () {
      function e(r) {
        var n = r.styles,
          o = r.bounds,
          s = Zn(n.borderTopLeftRadius, o.width, o.height),
          l = s[0],
          u = s[1],
          f = Zn(n.borderTopRightRadius, o.width, o.height),
          B = f[0],
          g = f[1],
          w = Zn(n.borderBottomRightRadius, o.width, o.height),
          h = w[0],
          v = w[1],
          U = Zn(n.borderBottomLeftRadius, o.width, o.height),
          Q = U[0],
          m = U[1],
          F = [];
        F.push((l + B) / o.width),
          F.push((Q + h) / o.width),
          F.push((u + m) / o.height),
          F.push((g + v) / o.height);
        var E = Math.max.apply(Math, F);
        E > 1 &&
          ((l /= E),
          (u /= E),
          (B /= E),
          (g /= E),
          (h /= E),
          (v /= E),
          (Q /= E),
          (m /= E));
        var I = o.width - B,
          R = o.height - v,
          T = o.width - h,
          k = o.height - m,
          O = n.borderTopWidth,
          P = n.borderRightWidth,
          j = n.borderBottomWidth,
          X = n.borderLeftWidth,
          sA = bA(n.paddingTop, r.bounds.width),
          dA = bA(n.paddingRight, r.bounds.width),
          q = bA(n.paddingBottom, r.bounds.width),
          tA = bA(n.paddingLeft, r.bounds.width);
        (this.topLeftBorderDoubleOuterBox =
          l > 0 || u > 0
            ? RA(
                o.left + X / 3,
                o.top + O / 3,
                l - X / 3,
                u - O / 3,
                xA.TOP_LEFT,
              )
            : new eA(o.left + X / 3, o.top + O / 3)),
          (this.topRightBorderDoubleOuterBox =
            l > 0 || u > 0
              ? RA(
                  o.left + I,
                  o.top + O / 3,
                  B - P / 3,
                  g - O / 3,
                  xA.TOP_RIGHT,
                )
              : new eA(o.left + o.width - P / 3, o.top + O / 3)),
          (this.bottomRightBorderDoubleOuterBox =
            h > 0 || v > 0
              ? RA(o.left + T, o.top + R, h - P / 3, v - j / 3, xA.BOTTOM_RIGHT)
              : new eA(o.left + o.width - P / 3, o.top + o.height - j / 3)),
          (this.bottomLeftBorderDoubleOuterBox =
            Q > 0 || m > 0
              ? RA(
                  o.left + X / 3,
                  o.top + k,
                  Q - X / 3,
                  m - j / 3,
                  xA.BOTTOM_LEFT,
                )
              : new eA(o.left + X / 3, o.top + o.height - j / 3)),
          (this.topLeftBorderDoubleInnerBox =
            l > 0 || u > 0
              ? RA(
                  o.left + (X * 2) / 3,
                  o.top + (O * 2) / 3,
                  l - (X * 2) / 3,
                  u - (O * 2) / 3,
                  xA.TOP_LEFT,
                )
              : new eA(o.left + (X * 2) / 3, o.top + (O * 2) / 3)),
          (this.topRightBorderDoubleInnerBox =
            l > 0 || u > 0
              ? RA(
                  o.left + I,
                  o.top + (O * 2) / 3,
                  B - (P * 2) / 3,
                  g - (O * 2) / 3,
                  xA.TOP_RIGHT,
                )
              : new eA(o.left + o.width - (P * 2) / 3, o.top + (O * 2) / 3)),
          (this.bottomRightBorderDoubleInnerBox =
            h > 0 || v > 0
              ? RA(
                  o.left + T,
                  o.top + R,
                  h - (P * 2) / 3,
                  v - (j * 2) / 3,
                  xA.BOTTOM_RIGHT,
                )
              : new eA(
                  o.left + o.width - (P * 2) / 3,
                  o.top + o.height - (j * 2) / 3,
                )),
          (this.bottomLeftBorderDoubleInnerBox =
            Q > 0 || m > 0
              ? RA(
                  o.left + (X * 2) / 3,
                  o.top + k,
                  Q - (X * 2) / 3,
                  m - (j * 2) / 3,
                  xA.BOTTOM_LEFT,
                )
              : new eA(o.left + (X * 2) / 3, o.top + o.height - (j * 2) / 3)),
          (this.topLeftBorderStroke =
            l > 0 || u > 0
              ? RA(
                  o.left + X / 2,
                  o.top + O / 2,
                  l - X / 2,
                  u - O / 2,
                  xA.TOP_LEFT,
                )
              : new eA(o.left + X / 2, o.top + O / 2)),
          (this.topRightBorderStroke =
            l > 0 || u > 0
              ? RA(
                  o.left + I,
                  o.top + O / 2,
                  B - P / 2,
                  g - O / 2,
                  xA.TOP_RIGHT,
                )
              : new eA(o.left + o.width - P / 2, o.top + O / 2)),
          (this.bottomRightBorderStroke =
            h > 0 || v > 0
              ? RA(o.left + T, o.top + R, h - P / 2, v - j / 2, xA.BOTTOM_RIGHT)
              : new eA(o.left + o.width - P / 2, o.top + o.height - j / 2)),
          (this.bottomLeftBorderStroke =
            Q > 0 || m > 0
              ? RA(
                  o.left + X / 2,
                  o.top + k,
                  Q - X / 2,
                  m - j / 2,
                  xA.BOTTOM_LEFT,
                )
              : new eA(o.left + X / 2, o.top + o.height - j / 2)),
          (this.topLeftBorderBox =
            l > 0 || u > 0
              ? RA(o.left, o.top, l, u, xA.TOP_LEFT)
              : new eA(o.left, o.top)),
          (this.topRightBorderBox =
            B > 0 || g > 0
              ? RA(o.left + I, o.top, B, g, xA.TOP_RIGHT)
              : new eA(o.left + o.width, o.top)),
          (this.bottomRightBorderBox =
            h > 0 || v > 0
              ? RA(o.left + T, o.top + R, h, v, xA.BOTTOM_RIGHT)
              : new eA(o.left + o.width, o.top + o.height)),
          (this.bottomLeftBorderBox =
            Q > 0 || m > 0
              ? RA(o.left, o.top + k, Q, m, xA.BOTTOM_LEFT)
              : new eA(o.left, o.top + o.height)),
          (this.topLeftPaddingBox =
            l > 0 || u > 0
              ? RA(
                  o.left + X,
                  o.top + O,
                  Math.max(0, l - X),
                  Math.max(0, u - O),
                  xA.TOP_LEFT,
                )
              : new eA(o.left + X, o.top + O)),
          (this.topRightPaddingBox =
            B > 0 || g > 0
              ? RA(
                  o.left + Math.min(I, o.width - P),
                  o.top + O,
                  I > o.width + P ? 0 : Math.max(0, B - P),
                  Math.max(0, g - O),
                  xA.TOP_RIGHT,
                )
              : new eA(o.left + o.width - P, o.top + O)),
          (this.bottomRightPaddingBox =
            h > 0 || v > 0
              ? RA(
                  o.left + Math.min(T, o.width - X),
                  o.top + Math.min(R, o.height - j),
                  Math.max(0, h - P),
                  Math.max(0, v - j),
                  xA.BOTTOM_RIGHT,
                )
              : new eA(o.left + o.width - P, o.top + o.height - j)),
          (this.bottomLeftPaddingBox =
            Q > 0 || m > 0
              ? RA(
                  o.left + X,
                  o.top + Math.min(k, o.height - j),
                  Math.max(0, Q - X),
                  Math.max(0, m - j),
                  xA.BOTTOM_LEFT,
                )
              : new eA(o.left + X, o.top + o.height - j)),
          (this.topLeftContentBox =
            l > 0 || u > 0
              ? RA(
                  o.left + X + tA,
                  o.top + O + sA,
                  Math.max(0, l - (X + tA)),
                  Math.max(0, u - (O + sA)),
                  xA.TOP_LEFT,
                )
              : new eA(o.left + X + tA, o.top + O + sA)),
          (this.topRightContentBox =
            B > 0 || g > 0
              ? RA(
                  o.left + Math.min(I, o.width + X + tA),
                  o.top + O + sA,
                  I > o.width + X + tA ? 0 : B - X + tA,
                  g - (O + sA),
                  xA.TOP_RIGHT,
                )
              : new eA(o.left + o.width - (P + dA), o.top + O + sA)),
          (this.bottomRightContentBox =
            h > 0 || v > 0
              ? RA(
                  o.left + Math.min(T, o.width - (X + tA)),
                  o.top + Math.min(R, o.height + O + sA),
                  Math.max(0, h - (P + dA)),
                  v - (j + q),
                  xA.BOTTOM_RIGHT,
                )
              : new eA(
                  o.left + o.width - (P + dA),
                  o.top + o.height - (j + q),
                )),
          (this.bottomLeftContentBox =
            Q > 0 || m > 0
              ? RA(
                  o.left + X + tA,
                  o.top + k,
                  Math.max(0, Q - (X + tA)),
                  m - (j + q),
                  xA.BOTTOM_LEFT,
                )
              : new eA(o.left + X + tA, o.top + o.height - (j + q)));
      }
      return e;
    })(),
    xA;
  (function (e) {
    (e[(e.TOP_LEFT = 0)] = "TOP_LEFT"),
      (e[(e.TOP_RIGHT = 1)] = "TOP_RIGHT"),
      (e[(e.BOTTOM_RIGHT = 2)] = "BOTTOM_RIGHT"),
      (e[(e.BOTTOM_LEFT = 3)] = "BOTTOM_LEFT");
  })(xA || (xA = {}));
  var RA = function (e, r, n, o, s) {
      var l = 4 * ((Math.sqrt(2) - 1) / 3),
        u = n * l,
        f = o * l,
        B = e + n,
        g = r + o;
      switch (s) {
        case xA.TOP_LEFT:
          return new Mi(
            new eA(e, g),
            new eA(e, g - f),
            new eA(B - u, r),
            new eA(B, r),
          );
        case xA.TOP_RIGHT:
          return new Mi(
            new eA(e, r),
            new eA(e + u, r),
            new eA(B, g - f),
            new eA(B, g),
          );
        case xA.BOTTOM_RIGHT:
          return new Mi(
            new eA(B, r),
            new eA(B, r + f),
            new eA(e + u, g),
            new eA(e, g),
          );
        case xA.BOTTOM_LEFT:
        default:
          return new Mi(
            new eA(B, g),
            new eA(B - u, g),
            new eA(e, r + f),
            new eA(e, r),
          );
      }
    },
    Pi = function (e) {
      return [
        e.topLeftBorderBox,
        e.topRightBorderBox,
        e.bottomRightBorderBox,
        e.bottomLeftBorderBox,
      ];
    },
    jy = function (e) {
      return [
        e.topLeftContentBox,
        e.topRightContentBox,
        e.bottomRightContentBox,
        e.bottomLeftContentBox,
      ];
    },
    _i = function (e) {
      return [
        e.topLeftPaddingBox,
        e.topRightPaddingBox,
        e.bottomRightPaddingBox,
        e.bottomLeftPaddingBox,
      ];
    },
    Xy = (function () {
      function e(r, n, o) {
        (this.offsetX = r),
          (this.offsetY = n),
          (this.matrix = o),
          (this.type = 0),
          (this.target = 6);
      }
      return e;
    })(),
    Vi = (function () {
      function e(r, n) {
        (this.path = r), (this.target = n), (this.type = 1);
      }
      return e;
    })(),
    zy = (function () {
      function e(r) {
        (this.opacity = r), (this.type = 2), (this.target = 6);
      }
      return e;
    })(),
    Jy = function (e) {
      return e.type === 0;
    },
    BB = function (e) {
      return e.type === 1;
    },
    Yy = function (e) {
      return e.type === 2;
    },
    gB = function (e, r) {
      return e.length === r.length
        ? e.some(function (n, o) {
            return n === r[o];
          })
        : !1;
    },
    Zy = function (e, r, n, o, s) {
      return e.map(function (l, u) {
        switch (u) {
          case 0:
            return l.add(r, n);
          case 1:
            return l.add(r + o, n);
          case 2:
            return l.add(r + o, n + s);
          case 3:
            return l.add(r, n + s);
        }
        return l;
      });
    },
    pB = (function () {
      function e(r) {
        (this.element = r),
          (this.inlineLevel = []),
          (this.nonInlineLevel = []),
          (this.negativeZIndex = []),
          (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
          (this.positiveZIndex = []),
          (this.nonPositionedFloats = []),
          (this.nonPositionedInlineLevel = []);
      }
      return e;
    })(),
    wB = (function () {
      function e(r, n) {
        if (
          ((this.container = r),
          (this.parent = n),
          (this.effects = []),
          (this.curves = new Wy(this.container)),
          this.container.styles.opacity < 1 &&
            this.effects.push(new zy(this.container.styles.opacity)),
          this.container.styles.transform !== null)
        ) {
          var o =
              this.container.bounds.left +
              this.container.styles.transformOrigin[0].number,
            s =
              this.container.bounds.top +
              this.container.styles.transformOrigin[1].number,
            l = this.container.styles.transform;
          this.effects.push(new Xy(o, s, l));
        }
        if (this.container.styles.overflowX !== 0) {
          var u = Pi(this.curves),
            f = _i(this.curves);
          gB(u, f)
            ? this.effects.push(new Vi(u, 6))
            : (this.effects.push(new Vi(u, 2)),
              this.effects.push(new Vi(f, 4)));
        }
      }
      return (
        (e.prototype.getEffects = function (r) {
          for (
            var n = [2, 3].indexOf(this.container.styles.position) === -1,
              o = this.parent,
              s = this.effects.slice(0);
            o;

          ) {
            var l = o.effects.filter(function (B) {
              return !BB(B);
            });
            if (n || o.container.styles.position !== 0 || !o.parent) {
              if (
                (s.unshift.apply(s, l),
                (n = [2, 3].indexOf(o.container.styles.position) === -1),
                o.container.styles.overflowX !== 0)
              ) {
                var u = Pi(o.curves),
                  f = _i(o.curves);
                gB(u, f) || s.unshift(new Vi(f, 6));
              }
            } else s.unshift.apply(s, l);
            o = o.parent;
          }
          return s.filter(function (B) {
            return ZA(B.target, r);
          });
        }),
        e
      );
    })(),
    xl = function (e, r, n, o) {
      e.container.elements.forEach(function (s) {
        var l = ZA(s.flags, 4),
          u = ZA(s.flags, 2),
          f = new wB(s, e);
        ZA(s.styles.display, 2048) && o.push(f);
        var B = ZA(s.flags, 8) ? [] : o;
        if (l || u) {
          var g = l || s.styles.isPositioned() ? n : r,
            w = new pB(f);
          if (
            s.styles.isPositioned() ||
            s.styles.opacity < 1 ||
            s.styles.isTransformed()
          ) {
            var h = s.styles.zIndex.order;
            if (h < 0) {
              var v = 0;
              g.negativeZIndex.some(function (Q, m) {
                return h > Q.element.container.styles.zIndex.order
                  ? ((v = m), !1)
                  : v > 0;
              }),
                g.negativeZIndex.splice(v, 0, w);
            } else if (h > 0) {
              var U = 0;
              g.positiveZIndex.some(function (Q, m) {
                return h >= Q.element.container.styles.zIndex.order
                  ? ((U = m + 1), !1)
                  : U > 0;
              }),
                g.positiveZIndex.splice(U, 0, w);
            } else g.zeroOrAutoZIndexOrTransformedOrOpacity.push(w);
          } else
            s.styles.isFloating()
              ? g.nonPositionedFloats.push(w)
              : g.nonPositionedInlineLevel.push(w);
          xl(f, w, l ? w : n, B);
        } else
          s.styles.isInlineLevel()
            ? r.inlineLevel.push(f)
            : r.nonInlineLevel.push(f),
            xl(f, r, n, B);
        ZA(s.flags, 8) && hB(s, B);
      });
    },
    hB = function (e, r) {
      for (
        var n = e instanceof pl ? e.start : 1,
          o = e instanceof pl ? e.reversed : !1,
          s = 0;
        s < r.length;
        s++
      ) {
        var l = r[s];
        l.container instanceof Vd &&
          typeof l.container.value == "number" &&
          l.container.value !== 0 &&
          (n = l.container.value),
          (l.listValue = ro(n, l.container.styles.listStyleType, !0)),
          (n += o ? -1 : 1);
      }
    },
    $y = function (e) {
      var r = new wB(e, null),
        n = new pB(r),
        o = [];
      return xl(r, n, n, o), hB(r.container, o), n;
    },
    vB = function (e, r) {
      switch (r) {
        case 0:
          return Re(
            e.topLeftBorderBox,
            e.topLeftPaddingBox,
            e.topRightBorderBox,
            e.topRightPaddingBox,
          );
        case 1:
          return Re(
            e.topRightBorderBox,
            e.topRightPaddingBox,
            e.bottomRightBorderBox,
            e.bottomRightPaddingBox,
          );
        case 2:
          return Re(
            e.bottomRightBorderBox,
            e.bottomRightPaddingBox,
            e.bottomLeftBorderBox,
            e.bottomLeftPaddingBox,
          );
        case 3:
        default:
          return Re(
            e.bottomLeftBorderBox,
            e.bottomLeftPaddingBox,
            e.topLeftBorderBox,
            e.topLeftPaddingBox,
          );
      }
    },
    qy = function (e, r) {
      switch (r) {
        case 0:
          return Re(
            e.topLeftBorderBox,
            e.topLeftBorderDoubleOuterBox,
            e.topRightBorderBox,
            e.topRightBorderDoubleOuterBox,
          );
        case 1:
          return Re(
            e.topRightBorderBox,
            e.topRightBorderDoubleOuterBox,
            e.bottomRightBorderBox,
            e.bottomRightBorderDoubleOuterBox,
          );
        case 2:
          return Re(
            e.bottomRightBorderBox,
            e.bottomRightBorderDoubleOuterBox,
            e.bottomLeftBorderBox,
            e.bottomLeftBorderDoubleOuterBox,
          );
        case 3:
        default:
          return Re(
            e.bottomLeftBorderBox,
            e.bottomLeftBorderDoubleOuterBox,
            e.topLeftBorderBox,
            e.topLeftBorderDoubleOuterBox,
          );
      }
    },
    AU = function (e, r) {
      switch (r) {
        case 0:
          return Re(
            e.topLeftBorderDoubleInnerBox,
            e.topLeftPaddingBox,
            e.topRightBorderDoubleInnerBox,
            e.topRightPaddingBox,
          );
        case 1:
          return Re(
            e.topRightBorderDoubleInnerBox,
            e.topRightPaddingBox,
            e.bottomRightBorderDoubleInnerBox,
            e.bottomRightPaddingBox,
          );
        case 2:
          return Re(
            e.bottomRightBorderDoubleInnerBox,
            e.bottomRightPaddingBox,
            e.bottomLeftBorderDoubleInnerBox,
            e.bottomLeftPaddingBox,
          );
        case 3:
        default:
          return Re(
            e.bottomLeftBorderDoubleInnerBox,
            e.bottomLeftPaddingBox,
            e.topLeftBorderDoubleInnerBox,
            e.topLeftPaddingBox,
          );
      }
    },
    eU = function (e, r) {
      switch (r) {
        case 0:
          return Gi(e.topLeftBorderStroke, e.topRightBorderStroke);
        case 1:
          return Gi(e.topRightBorderStroke, e.bottomRightBorderStroke);
        case 2:
          return Gi(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
        case 3:
        default:
          return Gi(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
      }
    },
    Gi = function (e, r) {
      var n = [];
      return (
        ke(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e),
        ke(r) ? n.push(r.subdivide(0.5, !0)) : n.push(r),
        n
      );
    },
    Re = function (e, r, n, o) {
      var s = [];
      return (
        ke(e) ? s.push(e.subdivide(0.5, !1)) : s.push(e),
        ke(n) ? s.push(n.subdivide(0.5, !0)) : s.push(n),
        ke(o) ? s.push(o.subdivide(0.5, !0).reverse()) : s.push(o),
        ke(r) ? s.push(r.subdivide(0.5, !1).reverse()) : s.push(r),
        s
      );
    },
    mB = function (e) {
      var r = e.bounds,
        n = e.styles;
      return r.add(
        n.borderLeftWidth,
        n.borderTopWidth,
        -(n.borderRightWidth + n.borderLeftWidth),
        -(n.borderTopWidth + n.borderBottomWidth),
      );
    },
    Wi = function (e) {
      var r = e.styles,
        n = e.bounds,
        o = bA(r.paddingLeft, n.width),
        s = bA(r.paddingRight, n.width),
        l = bA(r.paddingTop, n.width),
        u = bA(r.paddingBottom, n.width);
      return n.add(
        o + r.borderLeftWidth,
        l + r.borderTopWidth,
        -(r.borderRightWidth + r.borderLeftWidth + o + s),
        -(r.borderTopWidth + r.borderBottomWidth + l + u),
      );
    },
    tU = function (e, r) {
      return e === 0 ? r.bounds : e === 2 ? Wi(r) : mB(r);
    },
    rU = function (e, r) {
      return e === 0 ? r.bounds : e === 2 ? Wi(r) : mB(r);
    },
    Il = function (e, r, n) {
      var o = tU(Yr(e.styles.backgroundOrigin, r), e),
        s = rU(Yr(e.styles.backgroundClip, r), e),
        l = nU(Yr(e.styles.backgroundSize, r), n, o),
        u = l[0],
        f = l[1],
        B = Zn(Yr(e.styles.backgroundPosition, r), o.width - u, o.height - f),
        g = oU(Yr(e.styles.backgroundRepeat, r), B, l, o, s),
        w = Math.round(o.left + B[0]),
        h = Math.round(o.top + B[1]);
      return [g, w, h, u, f];
    },
    Jr = function (e) {
      return SA(e) && e.value === Gr.AUTO;
    },
    ji = function (e) {
      return typeof e == "number";
    },
    nU = function (e, r, n) {
      var o = r[0],
        s = r[1],
        l = r[2],
        u = e[0],
        f = e[1];
      if (!u) return [0, 0];
      if (JA(u) && f && JA(f)) return [bA(u, n.width), bA(f, n.height)];
      var B = ji(l);
      if (SA(u) && (u.value === Gr.CONTAIN || u.value === Gr.COVER)) {
        if (ji(l)) {
          var g = n.width / n.height;
          return g < l != (u.value === Gr.COVER)
            ? [n.width, n.width / l]
            : [n.height * l, n.height];
        }
        return [n.width, n.height];
      }
      var w = ji(o),
        h = ji(s),
        v = w || h;
      if (Jr(u) && (!f || Jr(f))) {
        if (w && h) return [o, s];
        if (!B && !v) return [n.width, n.height];
        if (v && B) {
          var U = w ? o : s * l,
            Q = h ? s : o / l;
          return [U, Q];
        }
        var m = w ? o : n.width,
          F = h ? s : n.height;
        return [m, F];
      }
      if (B) {
        var E = 0,
          I = 0;
        return (
          JA(u) ? (E = bA(u, n.width)) : JA(f) && (I = bA(f, n.height)),
          Jr(u) ? (E = I * l) : (!f || Jr(f)) && (I = E / l),
          [E, I]
        );
      }
      var R = null,
        T = null;
      if (
        (JA(u) ? (R = bA(u, n.width)) : f && JA(f) && (T = bA(f, n.height)),
        R !== null && (!f || Jr(f)) && (T = w && h ? (R / o) * s : n.height),
        T !== null && Jr(u) && (R = w && h ? (T / s) * o : n.width),
        R !== null && T !== null)
      )
        return [R, T];
      throw new Error("Unable to calculate background-size for element");
    },
    Yr = function (e, r) {
      var n = e[r];
      return typeof n > "u" ? e[0] : n;
    },
    oU = function (e, r, n, o, s) {
      var l = r[0],
        u = r[1],
        f = n[0],
        B = n[1];
      switch (e) {
        case 2:
          return [
            new eA(Math.round(o.left), Math.round(o.top + u)),
            new eA(Math.round(o.left + o.width), Math.round(o.top + u)),
            new eA(Math.round(o.left + o.width), Math.round(B + o.top + u)),
            new eA(Math.round(o.left), Math.round(B + o.top + u)),
          ];
        case 3:
          return [
            new eA(Math.round(o.left + l), Math.round(o.top)),
            new eA(Math.round(o.left + l + f), Math.round(o.top)),
            new eA(Math.round(o.left + l + f), Math.round(o.height + o.top)),
            new eA(Math.round(o.left + l), Math.round(o.height + o.top)),
          ];
        case 1:
          return [
            new eA(Math.round(o.left + l), Math.round(o.top + u)),
            new eA(Math.round(o.left + l + f), Math.round(o.top + u)),
            new eA(Math.round(o.left + l + f), Math.round(o.top + u + B)),
            new eA(Math.round(o.left + l), Math.round(o.top + u + B)),
          ];
        default:
          return [
            new eA(Math.round(s.left), Math.round(s.top)),
            new eA(Math.round(s.left + s.width), Math.round(s.top)),
            new eA(Math.round(s.left + s.width), Math.round(s.height + s.top)),
            new eA(Math.round(s.left), Math.round(s.height + s.top)),
          ];
      }
    },
    iU =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    CB = "Hidden Text",
    sU = (function () {
      function e(r) {
        (this._data = {}), (this._document = r);
      }
      return (
        (e.prototype.parseMetrics = function (r, n) {
          var o = this._document.createElement("div"),
            s = this._document.createElement("img"),
            l = this._document.createElement("span"),
            u = this._document.body;
          (o.style.visibility = "hidden"),
            (o.style.fontFamily = r),
            (o.style.fontSize = n),
            (o.style.margin = "0"),
            (o.style.padding = "0"),
            (o.style.whiteSpace = "nowrap"),
            u.appendChild(o),
            (s.src = iU),
            (s.width = 1),
            (s.height = 1),
            (s.style.margin = "0"),
            (s.style.padding = "0"),
            (s.style.verticalAlign = "baseline"),
            (l.style.fontFamily = r),
            (l.style.fontSize = n),
            (l.style.margin = "0"),
            (l.style.padding = "0"),
            l.appendChild(this._document.createTextNode(CB)),
            o.appendChild(l),
            o.appendChild(s);
          var f = s.offsetTop - l.offsetTop + 2;
          o.removeChild(l),
            o.appendChild(this._document.createTextNode(CB)),
            (o.style.lineHeight = "normal"),
            (s.style.verticalAlign = "super");
          var B = s.offsetTop - o.offsetTop + 2;
          return u.removeChild(o), { baseline: f, middle: B };
        }),
        (e.prototype.getMetrics = function (r, n) {
          var o = r + " " + n;
          return (
            typeof this._data[o] > "u" &&
              (this._data[o] = this.parseMetrics(r, n)),
            this._data[o]
          );
        }),
        e
      );
    })(),
    QB = (function () {
      function e(r, n) {
        (this.context = r), (this.options = n);
      }
      return e;
    })(),
    aU = 1e4,
    lU = (function (e) {
      Ge(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (
          (s._activeEffects = []),
          (s.canvas = o.canvas ? o.canvas : document.createElement("canvas")),
          (s.ctx = s.canvas.getContext("2d")),
          o.canvas ||
            ((s.canvas.width = Math.floor(o.width * o.scale)),
            (s.canvas.height = Math.floor(o.height * o.scale)),
            (s.canvas.style.width = o.width + "px"),
            (s.canvas.style.height = o.height + "px")),
          (s.fontMetrics = new sU(document)),
          s.ctx.scale(s.options.scale, s.options.scale),
          s.ctx.translate(-o.x, -o.y),
          (s.ctx.textBaseline = "bottom"),
          (s._activeEffects = []),
          s.context.logger.debug(
            "Canvas renderer initialized (" +
              o.width +
              "x" +
              o.height +
              ") with scale " +
              o.scale,
          ),
          s
        );
      }
      return (
        (r.prototype.applyEffects = function (n) {
          for (var o = this; this._activeEffects.length; ) this.popEffect();
          n.forEach(function (s) {
            return o.applyEffect(s);
          });
        }),
        (r.prototype.applyEffect = function (n) {
          this.ctx.save(),
            Yy(n) && (this.ctx.globalAlpha = n.opacity),
            Jy(n) &&
              (this.ctx.translate(n.offsetX, n.offsetY),
              this.ctx.transform(
                n.matrix[0],
                n.matrix[1],
                n.matrix[2],
                n.matrix[3],
                n.matrix[4],
                n.matrix[5],
              ),
              this.ctx.translate(-n.offsetX, -n.offsetY)),
            BB(n) && (this.path(n.path), this.ctx.clip()),
            this._activeEffects.push(n);
        }),
        (r.prototype.popEffect = function () {
          this._activeEffects.pop(), this.ctx.restore();
        }),
        (r.prototype.renderStack = function (n) {
          return pe(this, void 0, void 0, function () {
            var o;
            return ce(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    (o = n.element.container.styles),
                    o.isVisible() ? [4, this.renderStackContent(n)] : [3, 2]
                  );
                case 1:
                  s.sent(), (s.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (r.prototype.renderNode = function (n) {
          return pe(this, void 0, void 0, function () {
            return ce(this, function (o) {
              switch (o.label) {
                case 0:
                  if (ZA(n.container.flags, 16)) debugger;
                  return n.container.styles.isVisible()
                    ? [4, this.renderNodeBackgroundAndBorders(n)]
                    : [3, 3];
                case 1:
                  return o.sent(), [4, this.renderNodeContent(n)];
                case 2:
                  o.sent(), (o.label = 3);
                case 3:
                  return [2];
              }
            });
          });
        }),
        (r.prototype.renderTextWithLetterSpacing = function (n, o, s) {
          var l = this;
          if (o === 0)
            this.ctx.fillText(n.text, n.bounds.left, n.bounds.top + s);
          else {
            var u = gl(n.text);
            u.reduce(function (f, B) {
              return (
                l.ctx.fillText(B, f, n.bounds.top + s),
                f + l.ctx.measureText(B).width
              );
            }, n.bounds.left);
          }
        }),
        (r.prototype.createFontStyle = function (n) {
          var o = n.fontVariant
              .filter(function (u) {
                return u === "normal" || u === "small-caps";
              })
              .join(""),
            s = BU(n.fontFamily).join(", "),
            l = Yn(n.fontSize)
              ? "" + n.fontSize.number + n.fontSize.unit
              : n.fontSize.number + "px";
          return [[n.fontStyle, o, n.fontWeight, l, s].join(" "), s, l];
        }),
        (r.prototype.renderTextNode = function (n, o) {
          return pe(this, void 0, void 0, function () {
            var s,
              l,
              u,
              f,
              B,
              g,
              w,
              h,
              v = this;
            return ce(this, function (U) {
              return (
                (s = this.createFontStyle(o)),
                (l = s[0]),
                (u = s[1]),
                (f = s[2]),
                (this.ctx.font = l),
                (this.ctx.direction = o.direction === 1 ? "rtl" : "ltr"),
                (this.ctx.textAlign = "left"),
                (this.ctx.textBaseline = "alphabetic"),
                (B = this.fontMetrics.getMetrics(u, f)),
                (g = B.baseline),
                (w = B.middle),
                (h = o.paintOrder),
                n.textBounds.forEach(function (Q) {
                  h.forEach(function (m) {
                    switch (m) {
                      case 0:
                        (v.ctx.fillStyle = ee(o.color)),
                          v.renderTextWithLetterSpacing(Q, o.letterSpacing, g);
                        var F = o.textShadow;
                        F.length &&
                          Q.text.trim().length &&
                          (F.slice(0)
                            .reverse()
                            .forEach(function (E) {
                              (v.ctx.shadowColor = ee(E.color)),
                                (v.ctx.shadowOffsetX =
                                  E.offsetX.number * v.options.scale),
                                (v.ctx.shadowOffsetY =
                                  E.offsetY.number * v.options.scale),
                                (v.ctx.shadowBlur = E.blur.number),
                                v.renderTextWithLetterSpacing(
                                  Q,
                                  o.letterSpacing,
                                  g,
                                );
                            }),
                          (v.ctx.shadowColor = ""),
                          (v.ctx.shadowOffsetX = 0),
                          (v.ctx.shadowOffsetY = 0),
                          (v.ctx.shadowBlur = 0)),
                          o.textDecorationLine.length &&
                            ((v.ctx.fillStyle = ee(
                              o.textDecorationColor || o.color,
                            )),
                            o.textDecorationLine.forEach(function (E) {
                              switch (E) {
                                case 1:
                                  v.ctx.fillRect(
                                    Q.bounds.left,
                                    Math.round(Q.bounds.top + g),
                                    Q.bounds.width,
                                    1,
                                  );
                                  break;
                                case 2:
                                  v.ctx.fillRect(
                                    Q.bounds.left,
                                    Math.round(Q.bounds.top),
                                    Q.bounds.width,
                                    1,
                                  );
                                  break;
                                case 3:
                                  v.ctx.fillRect(
                                    Q.bounds.left,
                                    Math.ceil(Q.bounds.top + w),
                                    Q.bounds.width,
                                    1,
                                  );
                                  break;
                              }
                            }));
                        break;
                      case 1:
                        o.webkitTextStrokeWidth &&
                          Q.text.trim().length &&
                          ((v.ctx.strokeStyle = ee(o.webkitTextStrokeColor)),
                          (v.ctx.lineWidth = o.webkitTextStrokeWidth),
                          (v.ctx.lineJoin = window.chrome ? "miter" : "round"),
                          v.ctx.strokeText(
                            Q.text,
                            Q.bounds.left,
                            Q.bounds.top + g,
                          )),
                          (v.ctx.strokeStyle = ""),
                          (v.ctx.lineWidth = 0),
                          (v.ctx.lineJoin = "miter");
                        break;
                    }
                  });
                }),
                [2]
              );
            });
          });
        }),
        (r.prototype.renderReplacedElement = function (n, o, s) {
          if (s && n.intrinsicWidth > 0 && n.intrinsicHeight > 0) {
            var l = Wi(n),
              u = _i(o);
            this.path(u),
              this.ctx.save(),
              this.ctx.clip(),
              this.ctx.drawImage(
                s,
                0,
                0,
                n.intrinsicWidth,
                n.intrinsicHeight,
                l.left,
                l.top,
                l.width,
                l.height,
              ),
              this.ctx.restore();
          }
        }),
        (r.prototype.renderNodeContent = function (n) {
          return pe(this, void 0, void 0, function () {
            var o,
              s,
              l,
              u,
              f,
              B,
              I,
              I,
              g,
              w,
              h,
              v,
              T,
              U,
              Q,
              k,
              m,
              F,
              E,
              I,
              R,
              T,
              k;
            return ce(this, function (O) {
              switch (O.label) {
                case 0:
                  this.applyEffects(n.getEffects(4)),
                    (o = n.container),
                    (s = n.curves),
                    (l = o.styles),
                    (u = 0),
                    (f = o.textNodes),
                    (O.label = 1);
                case 1:
                  return u < f.length
                    ? ((B = f[u]), [4, this.renderTextNode(B, l)])
                    : [3, 4];
                case 2:
                  O.sent(), (O.label = 3);
                case 3:
                  return u++, [3, 1];
                case 4:
                  if (!(o instanceof Md)) return [3, 8];
                  O.label = 5;
                case 5:
                  return (
                    O.trys.push([5, 7, , 8]),
                    [4, this.context.cache.match(o.src)]
                  );
                case 6:
                  return (
                    (I = O.sent()), this.renderReplacedElement(o, s, I), [3, 8]
                  );
                case 7:
                  return (
                    O.sent(),
                    this.context.logger.error("Error loading image " + o.src),
                    [3, 8]
                  );
                case 8:
                  if (
                    (o instanceof Pd &&
                      this.renderReplacedElement(o, s, o.canvas),
                    !(o instanceof _d))
                  )
                    return [3, 12];
                  O.label = 9;
                case 9:
                  return (
                    O.trys.push([9, 11, , 12]),
                    [4, this.context.cache.match(o.svg)]
                  );
                case 10:
                  return (
                    (I = O.sent()), this.renderReplacedElement(o, s, I), [3, 12]
                  );
                case 11:
                  return (
                    O.sent(),
                    this.context.logger.error(
                      "Error loading svg " + o.svg.substring(0, 255),
                    ),
                    [3, 12]
                  );
                case 12:
                  return o instanceof Xd && o.tree
                    ? ((g = new r(this.context, {
                        scale: this.options.scale,
                        backgroundColor: o.backgroundColor,
                        x: 0,
                        y: 0,
                        width: o.width,
                        height: o.height,
                      })),
                      [4, g.render(o.tree)])
                    : [3, 14];
                case 13:
                  (w = O.sent()),
                    o.width &&
                      o.height &&
                      this.ctx.drawImage(
                        w,
                        0,
                        0,
                        o.width,
                        o.height,
                        o.bounds.left,
                        o.bounds.top,
                        o.bounds.width,
                        o.bounds.height,
                      ),
                    (O.label = 14);
                case 14:
                  if (
                    (o instanceof wl &&
                      ((h = Math.min(o.bounds.width, o.bounds.height)),
                      o.type === Di
                        ? o.checked &&
                          (this.ctx.save(),
                          this.path([
                            new eA(
                              o.bounds.left + h * 0.39363,
                              o.bounds.top + h * 0.79,
                            ),
                            new eA(
                              o.bounds.left + h * 0.16,
                              o.bounds.top + h * 0.5549,
                            ),
                            new eA(
                              o.bounds.left + h * 0.27347,
                              o.bounds.top + h * 0.44071,
                            ),
                            new eA(
                              o.bounds.left + h * 0.39694,
                              o.bounds.top + h * 0.5649,
                            ),
                            new eA(
                              o.bounds.left + h * 0.72983,
                              o.bounds.top + h * 0.23,
                            ),
                            new eA(
                              o.bounds.left + h * 0.84,
                              o.bounds.top + h * 0.34085,
                            ),
                            new eA(
                              o.bounds.left + h * 0.39363,
                              o.bounds.top + h * 0.79,
                            ),
                          ]),
                          (this.ctx.fillStyle = ee(Gd)),
                          this.ctx.fill(),
                          this.ctx.restore())
                        : o.type === Ki &&
                          o.checked &&
                          (this.ctx.save(),
                          this.ctx.beginPath(),
                          this.ctx.arc(
                            o.bounds.left + h / 2,
                            o.bounds.top + h / 2,
                            h / 4,
                            0,
                            Math.PI * 2,
                            !0,
                          ),
                          (this.ctx.fillStyle = ee(Gd)),
                          this.ctx.fill(),
                          this.ctx.restore())),
                    cU(o) && o.value.length)
                  ) {
                    switch (
                      ((v = this.createFontStyle(l)),
                      (T = v[0]),
                      (U = v[1]),
                      (Q = this.fontMetrics.getMetrics(T, U).baseline),
                      (this.ctx.font = T),
                      (this.ctx.fillStyle = ee(l.color)),
                      (this.ctx.textBaseline = "alphabetic"),
                      (this.ctx.textAlign = fU(o.styles.textAlign)),
                      (k = Wi(o)),
                      (m = 0),
                      o.styles.textAlign)
                    ) {
                      case 1:
                        m += k.width / 2;
                        break;
                      case 2:
                        m += k.width;
                        break;
                    }
                    (F = k.add(m, 0, 0, -k.height / 2 + 1)),
                      this.ctx.save(),
                      this.path([
                        new eA(k.left, k.top),
                        new eA(k.left + k.width, k.top),
                        new eA(k.left + k.width, k.top + k.height),
                        new eA(k.left, k.top + k.height),
                      ]),
                      this.ctx.clip(),
                      this.renderTextWithLetterSpacing(
                        new eo(o.value, F),
                        l.letterSpacing,
                        Q,
                      ),
                      this.ctx.restore(),
                      (this.ctx.textBaseline = "alphabetic"),
                      (this.ctx.textAlign = "left");
                  }
                  if (!ZA(o.styles.display, 2048)) return [3, 20];
                  if (o.styles.listStyleImage === null) return [3, 19];
                  if (((E = o.styles.listStyleImage), E.type !== 0))
                    return [3, 18];
                  (I = void 0), (R = E.url), (O.label = 15);
                case 15:
                  return (
                    O.trys.push([15, 17, , 18]),
                    [4, this.context.cache.match(R)]
                  );
                case 16:
                  return (
                    (I = O.sent()),
                    this.ctx.drawImage(
                      I,
                      o.bounds.left - (I.width + 10),
                      o.bounds.top,
                    ),
                    [3, 18]
                  );
                case 17:
                  return (
                    O.sent(),
                    this.context.logger.error(
                      "Error loading list-style-image " + R,
                    ),
                    [3, 18]
                  );
                case 18:
                  return [3, 20];
                case 19:
                  n.listValue &&
                    o.styles.listStyleType !== -1 &&
                    ((T = this.createFontStyle(l)[0]),
                    (this.ctx.font = T),
                    (this.ctx.fillStyle = ee(l.color)),
                    (this.ctx.textBaseline = "middle"),
                    (this.ctx.textAlign = "right"),
                    (k = new Bt(
                      o.bounds.left,
                      o.bounds.top + bA(o.styles.paddingTop, o.bounds.width),
                      o.bounds.width,
                      Cd(l.lineHeight, l.fontSize.number) / 2 + 1,
                    )),
                    this.renderTextWithLetterSpacing(
                      new eo(n.listValue, k),
                      l.letterSpacing,
                      Cd(l.lineHeight, l.fontSize.number) / 2 + 2,
                    ),
                    (this.ctx.textBaseline = "bottom"),
                    (this.ctx.textAlign = "left")),
                    (O.label = 20);
                case 20:
                  return [2];
              }
            });
          });
        }),
        (r.prototype.renderStackContent = function (n) {
          return pe(this, void 0, void 0, function () {
            var o, s, E, l, u, E, f, B, E, g, w, E, h, v, E, U, Q, E, m, F, E;
            return ce(this, function (I) {
              switch (I.label) {
                case 0:
                  if (ZA(n.element.container.flags, 16)) debugger;
                  return [4, this.renderNodeBackgroundAndBorders(n.element)];
                case 1:
                  I.sent(), (o = 0), (s = n.negativeZIndex), (I.label = 2);
                case 2:
                  return o < s.length
                    ? ((E = s[o]), [4, this.renderStack(E)])
                    : [3, 5];
                case 3:
                  I.sent(), (I.label = 4);
                case 4:
                  return o++, [3, 2];
                case 5:
                  return [4, this.renderNodeContent(n.element)];
                case 6:
                  I.sent(), (l = 0), (u = n.nonInlineLevel), (I.label = 7);
                case 7:
                  return l < u.length
                    ? ((E = u[l]), [4, this.renderNode(E)])
                    : [3, 10];
                case 8:
                  I.sent(), (I.label = 9);
                case 9:
                  return l++, [3, 7];
                case 10:
                  (f = 0), (B = n.nonPositionedFloats), (I.label = 11);
                case 11:
                  return f < B.length
                    ? ((E = B[f]), [4, this.renderStack(E)])
                    : [3, 14];
                case 12:
                  I.sent(), (I.label = 13);
                case 13:
                  return f++, [3, 11];
                case 14:
                  (g = 0), (w = n.nonPositionedInlineLevel), (I.label = 15);
                case 15:
                  return g < w.length
                    ? ((E = w[g]), [4, this.renderStack(E)])
                    : [3, 18];
                case 16:
                  I.sent(), (I.label = 17);
                case 17:
                  return g++, [3, 15];
                case 18:
                  (h = 0), (v = n.inlineLevel), (I.label = 19);
                case 19:
                  return h < v.length
                    ? ((E = v[h]), [4, this.renderNode(E)])
                    : [3, 22];
                case 20:
                  I.sent(), (I.label = 21);
                case 21:
                  return h++, [3, 19];
                case 22:
                  (U = 0),
                    (Q = n.zeroOrAutoZIndexOrTransformedOrOpacity),
                    (I.label = 23);
                case 23:
                  return U < Q.length
                    ? ((E = Q[U]), [4, this.renderStack(E)])
                    : [3, 26];
                case 24:
                  I.sent(), (I.label = 25);
                case 25:
                  return U++, [3, 23];
                case 26:
                  (m = 0), (F = n.positiveZIndex), (I.label = 27);
                case 27:
                  return m < F.length
                    ? ((E = F[m]), [4, this.renderStack(E)])
                    : [3, 30];
                case 28:
                  I.sent(), (I.label = 29);
                case 29:
                  return m++, [3, 27];
                case 30:
                  return [2];
              }
            });
          });
        }),
        (r.prototype.mask = function (n) {
          this.ctx.beginPath(),
            this.ctx.moveTo(0, 0),
            this.ctx.lineTo(this.canvas.width, 0),
            this.ctx.lineTo(this.canvas.width, this.canvas.height),
            this.ctx.lineTo(0, this.canvas.height),
            this.ctx.lineTo(0, 0),
            this.formatPath(n.slice(0).reverse()),
            this.ctx.closePath();
        }),
        (r.prototype.path = function (n) {
          this.ctx.beginPath(), this.formatPath(n), this.ctx.closePath();
        }),
        (r.prototype.formatPath = function (n) {
          var o = this;
          n.forEach(function (s, l) {
            var u = ke(s) ? s.start : s;
            l === 0 ? o.ctx.moveTo(u.x, u.y) : o.ctx.lineTo(u.x, u.y),
              ke(s) &&
                o.ctx.bezierCurveTo(
                  s.startControl.x,
                  s.startControl.y,
                  s.endControl.x,
                  s.endControl.y,
                  s.end.x,
                  s.end.y,
                );
          });
        }),
        (r.prototype.renderRepeat = function (n, o, s, l) {
          this.path(n),
            (this.ctx.fillStyle = o),
            this.ctx.translate(s, l),
            this.ctx.fill(),
            this.ctx.translate(-s, -l);
        }),
        (r.prototype.resizeImage = function (n, o, s) {
          var l;
          if (n.width === o && n.height === s) return n;
          var u =
              (l = this.canvas.ownerDocument) !== null && l !== void 0
                ? l
                : document,
            f = u.createElement("canvas");
          (f.width = Math.max(1, o)), (f.height = Math.max(1, s));
          var B = f.getContext("2d");
          return B.drawImage(n, 0, 0, n.width, n.height, 0, 0, o, s), f;
        }),
        (r.prototype.renderBackgroundImage = function (n) {
          return pe(this, void 0, void 0, function () {
            var o, s, l, u, f, B;
            return ce(this, function (g) {
              switch (g.label) {
                case 0:
                  (o = n.styles.backgroundImage.length - 1),
                    (s = function (w) {
                      var h,
                        v,
                        U,
                        sA,
                        AA,
                        Y,
                        tA,
                        oA,
                        j,
                        Q,
                        sA,
                        AA,
                        Y,
                        tA,
                        oA,
                        m,
                        F,
                        E,
                        I,
                        R,
                        T,
                        k,
                        O,
                        P,
                        j,
                        X,
                        sA,
                        dA,
                        q,
                        tA,
                        oA,
                        J,
                        AA,
                        Y,
                        N,
                        G,
                        Z,
                        H,
                        M,
                        uA,
                        fA,
                        wA;
                      return ce(this, function (hA) {
                        switch (hA.label) {
                          case 0:
                            if (w.type !== 0) return [3, 5];
                            (h = void 0), (v = w.url), (hA.label = 1);
                          case 1:
                            return (
                              hA.trys.push([1, 3, , 4]),
                              [4, l.context.cache.match(v)]
                            );
                          case 2:
                            return (h = hA.sent()), [3, 4];
                          case 3:
                            return (
                              hA.sent(),
                              l.context.logger.error(
                                "Error loading background-image " + v,
                              ),
                              [3, 4]
                            );
                          case 4:
                            return (
                              h &&
                                ((U = Il(n, o, [
                                  h.width,
                                  h.height,
                                  h.width / h.height,
                                ])),
                                (sA = U[0]),
                                (AA = U[1]),
                                (Y = U[2]),
                                (tA = U[3]),
                                (oA = U[4]),
                                (j = l.ctx.createPattern(
                                  l.resizeImage(h, tA, oA),
                                  "repeat",
                                )),
                                l.renderRepeat(sA, j, AA, Y)),
                              [3, 6]
                            );
                          case 5:
                            Jm(w)
                              ? ((Q = Il(n, o, [null, null, null])),
                                (sA = Q[0]),
                                (AA = Q[1]),
                                (Y = Q[2]),
                                (tA = Q[3]),
                                (oA = Q[4]),
                                (m = Gm(w.angle, tA, oA)),
                                (F = m[0]),
                                (E = m[1]),
                                (I = m[2]),
                                (R = m[3]),
                                (T = m[4]),
                                (k = document.createElement("canvas")),
                                (k.width = tA),
                                (k.height = oA),
                                (O = k.getContext("2d")),
                                (P = O.createLinearGradient(E, R, I, T)),
                                cd(w.stops, F).forEach(function ($) {
                                  return P.addColorStop($.stop, ee($.color));
                                }),
                                (O.fillStyle = P),
                                O.fillRect(0, 0, tA, oA),
                                tA > 0 &&
                                  oA > 0 &&
                                  ((j = l.ctx.createPattern(k, "repeat")),
                                  l.renderRepeat(sA, j, AA, Y)))
                              : Ym(w) &&
                                ((X = Il(n, o, [null, null, null])),
                                (sA = X[0]),
                                (dA = X[1]),
                                (q = X[2]),
                                (tA = X[3]),
                                (oA = X[4]),
                                (J =
                                  w.position.length === 0 ? [Al] : w.position),
                                (AA = bA(J[0], tA)),
                                (Y = bA(J[J.length - 1], oA)),
                                (N = Wm(w, AA, Y, tA, oA)),
                                (G = N[0]),
                                (Z = N[1]),
                                G > 0 &&
                                  Z > 0 &&
                                  ((H = l.ctx.createRadialGradient(
                                    dA + AA,
                                    q + Y,
                                    0,
                                    dA + AA,
                                    q + Y,
                                    G,
                                  )),
                                  cd(w.stops, G * 2).forEach(function ($) {
                                    return H.addColorStop($.stop, ee($.color));
                                  }),
                                  l.path(sA),
                                  (l.ctx.fillStyle = H),
                                  G !== Z
                                    ? ((M =
                                        n.bounds.left + 0.5 * n.bounds.width),
                                      (uA =
                                        n.bounds.top + 0.5 * n.bounds.height),
                                      (fA = Z / G),
                                      (wA = 1 / fA),
                                      l.ctx.save(),
                                      l.ctx.translate(M, uA),
                                      l.ctx.transform(1, 0, 0, fA, 0, 0),
                                      l.ctx.translate(-M, -uA),
                                      l.ctx.fillRect(
                                        dA,
                                        wA * (q - uA) + uA,
                                        tA,
                                        oA * wA,
                                      ),
                                      l.ctx.restore())
                                    : l.ctx.fill())),
                              (hA.label = 6);
                          case 6:
                            return o--, [2];
                        }
                      });
                    }),
                    (l = this),
                    (u = 0),
                    (f = n.styles.backgroundImage.slice(0).reverse()),
                    (g.label = 1);
                case 1:
                  return u < f.length ? ((B = f[u]), [5, s(B)]) : [3, 4];
                case 2:
                  g.sent(), (g.label = 3);
                case 3:
                  return u++, [3, 1];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (r.prototype.renderSolidBorder = function (n, o, s) {
          return pe(this, void 0, void 0, function () {
            return ce(this, function (l) {
              return (
                this.path(vB(s, o)),
                (this.ctx.fillStyle = ee(n)),
                this.ctx.fill(),
                [2]
              );
            });
          });
        }),
        (r.prototype.renderDoubleBorder = function (n, o, s, l) {
          return pe(this, void 0, void 0, function () {
            var u, f;
            return ce(this, function (B) {
              switch (B.label) {
                case 0:
                  return o < 3 ? [4, this.renderSolidBorder(n, s, l)] : [3, 2];
                case 1:
                  return B.sent(), [2];
                case 2:
                  return (
                    (u = qy(l, s)),
                    this.path(u),
                    (this.ctx.fillStyle = ee(n)),
                    this.ctx.fill(),
                    (f = AU(l, s)),
                    this.path(f),
                    this.ctx.fill(),
                    [2]
                  );
              }
            });
          });
        }),
        (r.prototype.renderNodeBackgroundAndBorders = function (n) {
          return pe(this, void 0, void 0, function () {
            var o,
              s,
              l,
              u,
              f,
              B,
              g,
              w,
              h = this;
            return ce(this, function (v) {
              switch (v.label) {
                case 0:
                  return (
                    this.applyEffects(n.getEffects(2)),
                    (o = n.container.styles),
                    (s = !Ot(o.backgroundColor) || o.backgroundImage.length),
                    (l = [
                      {
                        style: o.borderTopStyle,
                        color: o.borderTopColor,
                        width: o.borderTopWidth,
                      },
                      {
                        style: o.borderRightStyle,
                        color: o.borderRightColor,
                        width: o.borderRightWidth,
                      },
                      {
                        style: o.borderBottomStyle,
                        color: o.borderBottomColor,
                        width: o.borderBottomWidth,
                      },
                      {
                        style: o.borderLeftStyle,
                        color: o.borderLeftColor,
                        width: o.borderLeftWidth,
                      },
                    ]),
                    (u = uU(Yr(o.backgroundClip, 0), n.curves)),
                    s || o.boxShadow.length
                      ? (this.ctx.save(),
                        this.path(u),
                        this.ctx.clip(),
                        Ot(o.backgroundColor) ||
                          ((this.ctx.fillStyle = ee(o.backgroundColor)),
                          this.ctx.fill()),
                        [4, this.renderBackgroundImage(n.container)])
                      : [3, 2]
                  );
                case 1:
                  v.sent(),
                    this.ctx.restore(),
                    o.boxShadow
                      .slice(0)
                      .reverse()
                      .forEach(function (U) {
                        h.ctx.save();
                        var Q = Pi(n.curves),
                          m = U.inset ? 0 : aU,
                          F = Zy(
                            Q,
                            -m + (U.inset ? 1 : -1) * U.spread.number,
                            (U.inset ? 1 : -1) * U.spread.number,
                            U.spread.number * (U.inset ? -2 : 2),
                            U.spread.number * (U.inset ? -2 : 2),
                          );
                        U.inset
                          ? (h.path(Q), h.ctx.clip(), h.mask(F))
                          : (h.mask(Q), h.ctx.clip(), h.path(F)),
                          (h.ctx.shadowOffsetX = U.offsetX.number + m),
                          (h.ctx.shadowOffsetY = U.offsetY.number),
                          (h.ctx.shadowColor = ee(U.color)),
                          (h.ctx.shadowBlur = U.blur.number),
                          (h.ctx.fillStyle = U.inset
                            ? ee(U.color)
                            : "rgba(0,0,0,1)"),
                          h.ctx.fill(),
                          h.ctx.restore();
                      }),
                    (v.label = 2);
                case 2:
                  (f = 0), (B = 0), (g = l), (v.label = 3);
                case 3:
                  return B < g.length
                    ? ((w = g[B]),
                      w.style !== 0 && !Ot(w.color) && w.width > 0
                        ? w.style !== 2
                          ? [3, 5]
                          : [
                              4,
                              this.renderDashedDottedBorder(
                                w.color,
                                w.width,
                                f,
                                n.curves,
                                2,
                              ),
                            ]
                        : [3, 11])
                    : [3, 13];
                case 4:
                  return v.sent(), [3, 11];
                case 5:
                  return w.style !== 3
                    ? [3, 7]
                    : [
                        4,
                        this.renderDashedDottedBorder(
                          w.color,
                          w.width,
                          f,
                          n.curves,
                          3,
                        ),
                      ];
                case 6:
                  return v.sent(), [3, 11];
                case 7:
                  return w.style !== 4
                    ? [3, 9]
                    : [
                        4,
                        this.renderDoubleBorder(w.color, w.width, f, n.curves),
                      ];
                case 8:
                  return v.sent(), [3, 11];
                case 9:
                  return [4, this.renderSolidBorder(w.color, f, n.curves)];
                case 10:
                  v.sent(), (v.label = 11);
                case 11:
                  f++, (v.label = 12);
                case 12:
                  return B++, [3, 3];
                case 13:
                  return [2];
              }
            });
          });
        }),
        (r.prototype.renderDashedDottedBorder = function (n, o, s, l, u) {
          return pe(this, void 0, void 0, function () {
            var f, B, g, w, h, v, U, Q, m, F, E, I, R, T, k, O, k, O;
            return ce(this, function (P) {
              return (
                this.ctx.save(),
                (f = eU(l, s)),
                (B = vB(l, s)),
                u === 2 && (this.path(B), this.ctx.clip()),
                ke(B[0])
                  ? ((g = B[0].start.x), (w = B[0].start.y))
                  : ((g = B[0].x), (w = B[0].y)),
                ke(B[1])
                  ? ((h = B[1].end.x), (v = B[1].end.y))
                  : ((h = B[1].x), (v = B[1].y)),
                s === 0 || s === 2
                  ? (U = Math.abs(g - h))
                  : (U = Math.abs(w - v)),
                this.ctx.beginPath(),
                u === 3 ? this.formatPath(f) : this.formatPath(B.slice(0, 2)),
                (Q = o < 3 ? o * 3 : o * 2),
                (m = o < 3 ? o * 2 : o),
                u === 3 && ((Q = o), (m = o)),
                (F = !0),
                U <= Q * 2
                  ? (F = !1)
                  : U <= Q * 2 + m
                    ? ((E = U / (2 * Q + m)), (Q *= E), (m *= E))
                    : ((I = Math.floor((U + m) / (Q + m))),
                      (R = (U - I * Q) / (I - 1)),
                      (T = (U - (I + 1) * Q) / I),
                      (m =
                        T <= 0 || Math.abs(m - R) < Math.abs(m - T) ? R : T)),
                F &&
                  (u === 3
                    ? this.ctx.setLineDash([0, Q + m])
                    : this.ctx.setLineDash([Q, m])),
                u === 3
                  ? ((this.ctx.lineCap = "round"), (this.ctx.lineWidth = o))
                  : (this.ctx.lineWidth = o * 2 + 1.1),
                (this.ctx.strokeStyle = ee(n)),
                this.ctx.stroke(),
                this.ctx.setLineDash([]),
                u === 2 &&
                  (ke(B[0]) &&
                    ((k = B[3]),
                    (O = B[0]),
                    this.ctx.beginPath(),
                    this.formatPath([
                      new eA(k.end.x, k.end.y),
                      new eA(O.start.x, O.start.y),
                    ]),
                    this.ctx.stroke()),
                  ke(B[1]) &&
                    ((k = B[1]),
                    (O = B[2]),
                    this.ctx.beginPath(),
                    this.formatPath([
                      new eA(k.end.x, k.end.y),
                      new eA(O.start.x, O.start.y),
                    ]),
                    this.ctx.stroke())),
                this.ctx.restore(),
                [2]
              );
            });
          });
        }),
        (r.prototype.render = function (n) {
          return pe(this, void 0, void 0, function () {
            var o;
            return ce(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    this.options.backgroundColor &&
                      ((this.ctx.fillStyle = ee(this.options.backgroundColor)),
                      this.ctx.fillRect(
                        this.options.x,
                        this.options.y,
                        this.options.width,
                        this.options.height,
                      )),
                    (o = $y(n)),
                    [4, this.renderStack(o)]
                  );
                case 1:
                  return s.sent(), this.applyEffects([]), [2, this.canvas];
              }
            });
          });
        }),
        r
      );
    })(QB),
    cU = function (e) {
      return e instanceof jd || e instanceof Wd
        ? !0
        : e instanceof wl && e.type !== Ki && e.type !== Di;
    },
    uU = function (e, r) {
      switch (e) {
        case 0:
          return Pi(r);
        case 2:
          return jy(r);
        case 1:
        default:
          return _i(r);
      }
    },
    fU = function (e) {
      switch (e) {
        case 1:
          return "center";
        case 2:
          return "right";
        case 0:
        default:
          return "left";
      }
    },
    dU = ["-apple-system", "system-ui"],
    BU = function (e) {
      return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
        ? e.filter(function (r) {
            return dU.indexOf(r) === -1;
          })
        : e;
    },
    gU = (function (e) {
      Ge(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (
          (s.canvas = o.canvas ? o.canvas : document.createElement("canvas")),
          (s.ctx = s.canvas.getContext("2d")),
          (s.options = o),
          (s.canvas.width = Math.floor(o.width * o.scale)),
          (s.canvas.height = Math.floor(o.height * o.scale)),
          (s.canvas.style.width = o.width + "px"),
          (s.canvas.style.height = o.height + "px"),
          s.ctx.scale(s.options.scale, s.options.scale),
          s.ctx.translate(-o.x, -o.y),
          s.context.logger.debug(
            "EXPERIMENTAL ForeignObject renderer initialized (" +
              o.width +
              "x" +
              o.height +
              " at " +
              o.x +
              "," +
              o.y +
              ") with scale " +
              o.scale,
          ),
          s
        );
      }
      return (
        (r.prototype.render = function (n) {
          return pe(this, void 0, void 0, function () {
            var o, s;
            return ce(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    (o = Bl(
                      this.options.width * this.options.scale,
                      this.options.height * this.options.scale,
                      this.options.scale,
                      this.options.scale,
                      n,
                    )),
                    [4, pU(o)]
                  );
                case 1:
                  return (
                    (s = l.sent()),
                    this.options.backgroundColor &&
                      ((this.ctx.fillStyle = ee(this.options.backgroundColor)),
                      this.ctx.fillRect(
                        0,
                        0,
                        this.options.width * this.options.scale,
                        this.options.height * this.options.scale,
                      )),
                    this.ctx.drawImage(
                      s,
                      -this.options.x * this.options.scale,
                      -this.options.y * this.options.scale,
                    ),
                    [2, this.canvas]
                  );
              }
            });
          });
        }),
        r
      );
    })(QB),
    pU = function (e) {
      return new Promise(function (r, n) {
        var o = new Image();
        (o.onload = function () {
          r(o);
        }),
          (o.onerror = n),
          (o.src =
            "data:image/svg+xml;charset=utf-8," +
            encodeURIComponent(new XMLSerializer().serializeToString(e)));
      });
    },
    wU = (function () {
      function e(r) {
        var n = r.id,
          o = r.enabled;
        (this.id = n), (this.enabled = o), (this.start = Date.now());
      }
      return (
        (e.prototype.debug = function () {
          for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          this.enabled &&
            (typeof window < "u" &&
            window.console &&
            typeof console.debug == "function"
              ? console.debug.apply(
                  console,
                  Ai([this.id, this.getTime() + "ms"], r),
                )
              : this.info.apply(this, r));
        }),
        (e.prototype.getTime = function () {
          return Date.now() - this.start;
        }),
        (e.prototype.info = function () {
          for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          this.enabled &&
            typeof window < "u" &&
            window.console &&
            typeof console.info == "function" &&
            console.info.apply(
              console,
              Ai([this.id, this.getTime() + "ms"], r),
            );
        }),
        (e.prototype.warn = function () {
          for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          this.enabled &&
            (typeof window < "u" &&
            window.console &&
            typeof console.warn == "function"
              ? console.warn.apply(
                  console,
                  Ai([this.id, this.getTime() + "ms"], r),
                )
              : this.info.apply(this, r));
        }),
        (e.prototype.error = function () {
          for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          this.enabled &&
            (typeof window < "u" &&
            window.console &&
            typeof console.error == "function"
              ? console.error.apply(
                  console,
                  Ai([this.id, this.getTime() + "ms"], r),
                )
              : this.info.apply(this, r));
        }),
        (e.instances = {}),
        e
      );
    })(),
    hU = (function () {
      function e(r, n) {
        var o;
        (this.windowBounds = n),
          (this.instanceName = "#" + e.instanceCount++),
          (this.logger = new wU({ id: this.instanceName, enabled: r.logging })),
          (this.cache =
            (o = r.cache) !== null && o !== void 0 ? o : new Oy(this, r));
      }
      return (e.instanceCount = 1), e;
    })(),
    vU = function (e, r) {
      return r === void 0 && (r = {}), mU(e, r);
    };
  typeof window < "u" && dB.setContext(window);
  var mU = function (e, r) {
      return pe(void 0, void 0, void 0, function () {
        var n,
          o,
          s,
          l,
          u,
          f,
          B,
          g,
          w,
          h,
          v,
          U,
          Q,
          m,
          F,
          E,
          I,
          R,
          T,
          k,
          P,
          O,
          P,
          j,
          X,
          sA,
          dA,
          q,
          tA,
          oA,
          J,
          AA,
          Y,
          N,
          G,
          Z,
          H,
          M,
          uA,
          fA;
        return ce(this, function (wA) {
          switch (wA.label) {
            case 0:
              if (!e || typeof e != "object")
                return [
                  2,
                  Promise.reject("Invalid element provided as first argument"),
                ];
              if (((n = e.ownerDocument), !n))
                throw new Error("Element is not attached to a Document");
              if (((o = n.defaultView), !o))
                throw new Error("Document is not attached to a Window");
              return (
                (s = {
                  allowTaint:
                    (j = r.allowTaint) !== null && j !== void 0 ? j : !1,
                  imageTimeout:
                    (X = r.imageTimeout) !== null && X !== void 0 ? X : 15e3,
                  proxy: r.proxy,
                  useCORS: (sA = r.useCORS) !== null && sA !== void 0 ? sA : !1,
                }),
                (l = Ta(
                  {
                    logging:
                      (dA = r.logging) !== null && dA !== void 0 ? dA : !0,
                    cache: r.cache,
                  },
                  s,
                )),
                (u = {
                  windowWidth:
                    (q = r.windowWidth) !== null && q !== void 0
                      ? q
                      : o.innerWidth,
                  windowHeight:
                    (tA = r.windowHeight) !== null && tA !== void 0
                      ? tA
                      : o.innerHeight,
                  scrollX:
                    (oA = r.scrollX) !== null && oA !== void 0
                      ? oA
                      : o.pageXOffset,
                  scrollY:
                    (J = r.scrollY) !== null && J !== void 0
                      ? J
                      : o.pageYOffset,
                }),
                (f = new Bt(
                  u.scrollX,
                  u.scrollY,
                  u.windowWidth,
                  u.windowHeight,
                )),
                (B = new hU(l, f)),
                (g =
                  (AA = r.foreignObjectRendering) !== null && AA !== void 0
                    ? AA
                    : !1),
                (w = {
                  allowTaint:
                    (Y = r.allowTaint) !== null && Y !== void 0 ? Y : !1,
                  onclone: r.onclone,
                  ignoreElements: r.ignoreElements,
                  inlineImages: g,
                  copyStyles: g,
                }),
                B.logger.debug(
                  "Starting document clone with size " +
                    f.width +
                    "x" +
                    f.height +
                    " scrolled to " +
                    -f.left +
                    "," +
                    -f.top,
                ),
                (h = new uB(B, e, w)),
                (v = h.clonedReferenceElement),
                v
                  ? [4, h.toIFrame(n, f)]
                  : [
                      2,
                      Promise.reject("Unable to find element in cloned iframe"),
                    ]
              );
            case 1:
              return (
                (U = wA.sent()),
                (Q = vl(v) || Cy(v) ? Z0(v.ownerDocument) : ei(B, v)),
                (m = Q.width),
                (F = Q.height),
                (E = Q.left),
                (I = Q.top),
                (R = CU(B, v, r.backgroundColor)),
                (T = {
                  canvas: r.canvas,
                  backgroundColor: R,
                  scale:
                    (G =
                      (N = r.scale) !== null && N !== void 0
                        ? N
                        : o.devicePixelRatio) !== null && G !== void 0
                      ? G
                      : 1,
                  x: ((Z = r.x) !== null && Z !== void 0 ? Z : 0) + E,
                  y: ((H = r.y) !== null && H !== void 0 ? H : 0) + I,
                  width:
                    (M = r.width) !== null && M !== void 0 ? M : Math.ceil(m),
                  height:
                    (uA = r.height) !== null && uA !== void 0
                      ? uA
                      : Math.ceil(F),
                }),
                g
                  ? (B.logger.debug(
                      "Document cloned, using foreign object rendering",
                    ),
                    (P = new gU(B, T)),
                    [4, P.render(v)])
                  : [3, 3]
              );
            case 2:
              return (k = wA.sent()), [3, 5];
            case 3:
              return (
                B.logger.debug(
                  "Document cloned, element located at " +
                    E +
                    "," +
                    I +
                    " with size " +
                    m +
                    "x" +
                    F +
                    " using computed rendering",
                ),
                B.logger.debug("Starting DOM parsing"),
                (O = Jd(B, v)),
                R === O.styles.backgroundColor &&
                  (O.styles.backgroundColor = pt.TRANSPARENT),
                B.logger.debug(
                  "Starting renderer for element at " +
                    T.x +
                    "," +
                    T.y +
                    " with size " +
                    T.width +
                    "x" +
                    T.height,
                ),
                (P = new lU(B, T)),
                [4, P.render(O)]
              );
            case 4:
              (k = wA.sent()), (wA.label = 5);
            case 5:
              return (
                (!((fA = r.removeContainer) !== null && fA !== void 0) || fA) &&
                  (uB.destroy(U) ||
                    B.logger.error(
                      "Cannot detach cloned iframe as it is not in the DOM anymore",
                    )),
                B.logger.debug("Finished rendering"),
                [2, k]
              );
          }
        });
      });
    },
    CU = function (e, r, n) {
      var o = r.ownerDocument,
        s = o.documentElement
          ? $n(e, getComputedStyle(o.documentElement).backgroundColor)
          : pt.TRANSPARENT,
        l = o.body
          ? $n(e, getComputedStyle(o.body).backgroundColor)
          : pt.TRANSPARENT,
        u =
          typeof n == "string"
            ? $n(e, n)
            : n === null
              ? pt.TRANSPARENT
              : 4294967295;
      return r === o.documentElement ? (Ot(s) ? (Ot(l) ? u : l) : s) : u;
    };
  function QU(e, r) {
    typeof e == "function" ? e(r) : e != null && (e.current = r);
  }
  function yB(...e) {
    return (r) => e.forEach((n) => QU(n, r));
  }
  function jA(...e) {
    return C.useCallback(yB(...e), e);
  }
  var Cr = C.forwardRef((e, r) => {
    const { children: n, ...o } = e,
      s = C.Children.toArray(n),
      l = s.find(UU);
    if (l) {
      const u = l.props.children,
        f = s.map((B) =>
          B === l
            ? C.Children.count(u) > 1
              ? C.Children.only(null)
              : C.isValidElement(u)
                ? u.props.children
                : null
            : B,
        );
      return b.jsx(Hl, {
        ...o,
        ref: r,
        children: C.isValidElement(u) ? C.cloneElement(u, void 0, f) : null,
      });
    }
    return b.jsx(Hl, { ...o, ref: r, children: n });
  });
  Cr.displayName = "Slot";
  var Hl = C.forwardRef((e, r) => {
    const { children: n, ...o } = e;
    if (C.isValidElement(n)) {
      const s = EU(n);
      return C.cloneElement(n, { ...FU(o, n.props), ref: r ? yB(r, s) : s });
    }
    return C.Children.count(n) > 1 ? C.Children.only(null) : null;
  });
  Hl.displayName = "SlotClone";
  var yU = ({ children: e }) => b.jsx(b.Fragment, { children: e });
  function UU(e) {
    return C.isValidElement(e) && e.type === yU;
  }
  function FU(e, r) {
    const n = { ...r };
    for (const o in r) {
      const s = e[o],
        l = r[o];
      /^on[A-Z]/.test(o)
        ? s && l
          ? (n[o] = (...f) => {
              l(...f), s(...f);
            })
          : s && (n[o] = s)
        : o === "style"
          ? (n[o] = { ...s, ...l })
          : o === "className" && (n[o] = [s, l].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
  }
  function EU(e) {
    let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
      n = r && "isReactWarning" in r && r.isReactWarning;
    return n
      ? e.ref
      : ((r = Object.getOwnPropertyDescriptor(e, "ref")?.get),
        (n = r && "isReactWarning" in r && r.isReactWarning),
        n ? e.props.ref : e.props.ref || e.ref);
  }
  function UB(e) {
    var r,
      n,
      o = "";
    if (typeof e == "string" || typeof e == "number") o += e;
    else if (typeof e == "object")
      if (Array.isArray(e))
        for (r = 0; r < e.length; r++)
          e[r] && (n = UB(e[r])) && (o && (o += " "), (o += n));
      else for (r in e) e[r] && (o && (o += " "), (o += r));
    return o;
  }
  function xU() {
    for (var e, r, n = 0, o = ""; n < arguments.length; )
      (e = arguments[n++]) && (r = UB(e)) && (o && (o += " "), (o += r));
    return o;
  }
  const FB = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
    EB = xU,
    Sl = (e, r) => (n) => {
      var o;
      if (r?.variants == null) return EB(e, n?.class, n?.className);
      const { variants: s, defaultVariants: l } = r,
        u = Object.keys(s).map((g) => {
          const w = n?.[g],
            h = l?.[g];
          if (w === null) return null;
          const v = FB(w) || FB(h);
          return s[g][v];
        }),
        f =
          n &&
          Object.entries(n).reduce((g, w) => {
            let [h, v] = w;
            return v === void 0 || (g[h] = v), g;
          }, {}),
        B =
          r == null || (o = r.compoundVariants) === null || o === void 0
            ? void 0
            : o.reduce((g, w) => {
                let { class: h, className: v, ...U } = w;
                return Object.entries(U).every((Q) => {
                  let [m, F] = Q;
                  return Array.isArray(F)
                    ? F.includes({ ...l, ...f }[m])
                    : { ...l, ...f }[m] === F;
                })
                  ? [...g, h, v]
                  : g;
              }, []);
      return EB(e, u, B, n?.class, n?.className);
    };
  function xB(e) {
    var r,
      n,
      o = "";
    if (typeof e == "string" || typeof e == "number") o += e;
    else if (typeof e == "object")
      if (Array.isArray(e)) {
        var s = e.length;
        for (r = 0; r < s; r++)
          e[r] && (n = xB(e[r])) && (o && (o += " "), (o += n));
      } else for (n in e) e[n] && (o && (o += " "), (o += n));
    return o;
  }
  function IU() {
    for (var e, r, n = 0, o = "", s = arguments.length; n < s; n++)
      (e = arguments[n]) && (r = xB(e)) && (o && (o += " "), (o += r));
    return o;
  }
  const bl = "-",
    HU = (e) => {
      const r = bU(e),
        { conflictingClassGroups: n, conflictingClassGroupModifiers: o } = e;
      return {
        getClassGroupId: (u) => {
          const f = u.split(bl);
          return f[0] === "" && f.length !== 1 && f.shift(), IB(f, r) || SU(u);
        },
        getConflictingClassGroupIds: (u, f) => {
          const B = n[u] || [];
          return f && o[u] ? [...B, ...o[u]] : B;
        },
      };
    },
    IB = (e, r) => {
      if (e.length === 0) return r.classGroupId;
      const n = e[0],
        o = r.nextPart.get(n),
        s = o ? IB(e.slice(1), o) : void 0;
      if (s) return s;
      if (r.validators.length === 0) return;
      const l = e.join(bl);
      return r.validators.find(({ validator: u }) => u(l))?.classGroupId;
    },
    HB = /^\[(.+)\]$/,
    SU = (e) => {
      if (HB.test(e)) {
        const r = HB.exec(e)[1],
          n = r?.substring(0, r.indexOf(":"));
        if (n) return "arbitrary.." + n;
      }
    },
    bU = (e) => {
      const { theme: r, prefix: n } = e,
        o = { nextPart: new Map(), validators: [] };
      return (
        TU(Object.entries(e.classGroups), n).forEach(([l, u]) => {
          Ll(u, o, l, r);
        }),
        o
      );
    },
    Ll = (e, r, n, o) => {
      e.forEach((s) => {
        if (typeof s == "string") {
          const l = s === "" ? r : SB(r, s);
          l.classGroupId = n;
          return;
        }
        if (typeof s == "function") {
          if (LU(s)) {
            Ll(s(o), r, n, o);
            return;
          }
          r.validators.push({ validator: s, classGroupId: n });
          return;
        }
        Object.entries(s).forEach(([l, u]) => {
          Ll(u, SB(r, l), n, o);
        });
      });
    },
    SB = (e, r) => {
      let n = e;
      return (
        r.split(bl).forEach((o) => {
          n.nextPart.has(o) ||
            n.nextPart.set(o, { nextPart: new Map(), validators: [] }),
            (n = n.nextPart.get(o));
        }),
        n
      );
    },
    LU = (e) => e.isThemeGetter,
    TU = (e, r) =>
      r
        ? e.map(([n, o]) => {
            const s = o.map((l) =>
              typeof l == "string"
                ? r + l
                : typeof l == "object"
                  ? Object.fromEntries(
                      Object.entries(l).map(([u, f]) => [r + u, f]),
                    )
                  : l,
            );
            return [n, s];
          })
        : e,
    DU = (e) => {
      if (e < 1) return { get: () => {}, set: () => {} };
      let r = 0,
        n = new Map(),
        o = new Map();
      const s = (l, u) => {
        n.set(l, u), r++, r > e && ((r = 0), (o = n), (n = new Map()));
      };
      return {
        get(l) {
          let u = n.get(l);
          if (u !== void 0) return u;
          if ((u = o.get(l)) !== void 0) return s(l, u), u;
        },
        set(l, u) {
          n.has(l) ? n.set(l, u) : s(l, u);
        },
      };
    },
    bB = "!",
    KU = (e) => {
      const { separator: r, experimentalParseClassName: n } = e,
        o = r.length === 1,
        s = r[0],
        l = r.length,
        u = (f) => {
          const B = [];
          let g = 0,
            w = 0,
            h;
          for (let F = 0; F < f.length; F++) {
            let E = f[F];
            if (g === 0) {
              if (E === s && (o || f.slice(F, F + l) === r)) {
                B.push(f.slice(w, F)), (w = F + l);
                continue;
              }
              if (E === "/") {
                h = F;
                continue;
              }
            }
            E === "[" ? g++ : E === "]" && g--;
          }
          const v = B.length === 0 ? f : f.substring(w),
            U = v.startsWith(bB),
            Q = U ? v.substring(1) : v,
            m = h && h > w ? h - w : void 0;
          return {
            modifiers: B,
            hasImportantModifier: U,
            baseClassName: Q,
            maybePostfixModifierPosition: m,
          };
        };
      return n ? (f) => n({ className: f, parseClassName: u }) : u;
    },
    kU = (e) => {
      if (e.length <= 1) return e;
      const r = [];
      let n = [];
      return (
        e.forEach((o) => {
          o[0] === "[" ? (r.push(...n.sort(), o), (n = [])) : n.push(o);
        }),
        r.push(...n.sort()),
        r
      );
    },
    RU = (e) => ({ cache: DU(e.cacheSize), parseClassName: KU(e), ...HU(e) }),
    OU = /\s+/,
    NU = (e, r) => {
      const {
          parseClassName: n,
          getClassGroupId: o,
          getConflictingClassGroupIds: s,
        } = r,
        l = [],
        u = e.trim().split(OU);
      let f = "";
      for (let B = u.length - 1; B >= 0; B -= 1) {
        const g = u[B],
          {
            modifiers: w,
            hasImportantModifier: h,
            baseClassName: v,
            maybePostfixModifierPosition: U,
          } = n(g);
        let Q = !!U,
          m = o(Q ? v.substring(0, U) : v);
        if (!m) {
          if (!Q) {
            f = g + (f.length > 0 ? " " + f : f);
            continue;
          }
          if (((m = o(v)), !m)) {
            f = g + (f.length > 0 ? " " + f : f);
            continue;
          }
          Q = !1;
        }
        const F = kU(w).join(":"),
          E = h ? F + bB : F,
          I = E + m;
        if (l.includes(I)) continue;
        l.push(I);
        const R = s(m, Q);
        for (let T = 0; T < R.length; ++T) {
          const k = R[T];
          l.push(E + k);
        }
        f = g + (f.length > 0 ? " " + f : f);
      }
      return f;
    };
  function MU() {
    let e = 0,
      r,
      n,
      o = "";
    for (; e < arguments.length; )
      (r = arguments[e++]) && (n = LB(r)) && (o && (o += " "), (o += n));
    return o;
  }
  const LB = (e) => {
    if (typeof e == "string") return e;
    let r,
      n = "";
    for (let o = 0; o < e.length; o++)
      e[o] && (r = LB(e[o])) && (n && (n += " "), (n += r));
    return n;
  };
  function PU(e, ...r) {
    let n,
      o,
      s,
      l = u;
    function u(B) {
      const g = r.reduce((w, h) => h(w), e());
      return (n = RU(g)), (o = n.cache.get), (s = n.cache.set), (l = f), f(B);
    }
    function f(B) {
      const g = o(B);
      if (g) return g;
      const w = NU(B, n);
      return s(B, w), w;
    }
    return function () {
      return l(MU.apply(null, arguments));
    };
  }
  const DA = (e) => {
      const r = (n) => n[e] || [];
      return (r.isThemeGetter = !0), r;
    },
    TB = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    _U = /^\d+\/\d+$/,
    VU = new Set(["px", "full", "screen"]),
    GU = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    WU =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    jU = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    XU = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    zU =
      /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    ht = (e) => Zr(e) || VU.has(e) || _U.test(e),
    _t = (e) => $r(e, "length", tF),
    Zr = (e) => !!e && !Number.isNaN(Number(e)),
    Tl = (e) => $r(e, "number", Zr),
    oo = (e) => !!e && Number.isInteger(Number(e)),
    JU = (e) => e.endsWith("%") && Zr(e.slice(0, -1)),
    mA = (e) => TB.test(e),
    Vt = (e) => GU.test(e),
    YU = new Set(["length", "size", "percentage"]),
    ZU = (e) => $r(e, YU, DB),
    $U = (e) => $r(e, "position", DB),
    qU = new Set(["image", "url"]),
    AF = (e) => $r(e, qU, nF),
    eF = (e) => $r(e, "", rF),
    io = () => !0,
    $r = (e, r, n) => {
      const o = TB.exec(e);
      return o
        ? o[1]
          ? typeof r == "string"
            ? o[1] === r
            : r.has(o[1])
          : n(o[2])
        : !1;
    },
    tF = (e) => WU.test(e) && !jU.test(e),
    DB = () => !1,
    rF = (e) => XU.test(e),
    nF = (e) => zU.test(e),
    oF = PU(() => {
      const e = DA("colors"),
        r = DA("spacing"),
        n = DA("blur"),
        o = DA("brightness"),
        s = DA("borderColor"),
        l = DA("borderRadius"),
        u = DA("borderSpacing"),
        f = DA("borderWidth"),
        B = DA("contrast"),
        g = DA("grayscale"),
        w = DA("hueRotate"),
        h = DA("invert"),
        v = DA("gap"),
        U = DA("gradientColorStops"),
        Q = DA("gradientColorStopPositions"),
        m = DA("inset"),
        F = DA("margin"),
        E = DA("opacity"),
        I = DA("padding"),
        R = DA("saturate"),
        T = DA("scale"),
        k = DA("sepia"),
        O = DA("skew"),
        P = DA("space"),
        j = DA("translate"),
        X = () => ["auto", "contain", "none"],
        sA = () => ["auto", "hidden", "clip", "visible", "scroll"],
        dA = () => ["auto", mA, r],
        q = () => [mA, r],
        tA = () => ["", ht, _t],
        oA = () => ["auto", Zr, mA],
        J = () => [
          "bottom",
          "center",
          "left",
          "left-bottom",
          "left-top",
          "right",
          "right-bottom",
          "right-top",
          "top",
        ],
        AA = () => ["solid", "dashed", "dotted", "double", "none"],
        Y = () => [
          "normal",
          "multiply",
          "screen",
          "overlay",
          "darken",
          "lighten",
          "color-dodge",
          "color-burn",
          "hard-light",
          "soft-light",
          "difference",
          "exclusion",
          "hue",
          "saturation",
          "color",
          "luminosity",
        ],
        N = () => [
          "start",
          "end",
          "center",
          "between",
          "around",
          "evenly",
          "stretch",
        ],
        G = () => ["", "0", mA],
        Z = () => [
          "auto",
          "avoid",
          "all",
          "avoid-page",
          "page",
          "left",
          "right",
          "column",
        ],
        H = () => [Zr, mA];
      return {
        cacheSize: 500,
        separator: ":",
        theme: {
          colors: [io],
          spacing: [ht, _t],
          blur: ["none", "", Vt, mA],
          brightness: H(),
          borderColor: [e],
          borderRadius: ["none", "", "full", Vt, mA],
          borderSpacing: q(),
          borderWidth: tA(),
          contrast: H(),
          grayscale: G(),
          hueRotate: H(),
          invert: G(),
          gap: q(),
          gradientColorStops: [e],
          gradientColorStopPositions: [JU, _t],
          inset: dA(),
          margin: dA(),
          opacity: H(),
          padding: q(),
          saturate: H(),
          scale: H(),
          sepia: G(),
          skew: H(),
          space: q(),
          translate: q(),
        },
        classGroups: {
          aspect: [{ aspect: ["auto", "square", "video", mA] }],
          container: ["container"],
          columns: [{ columns: [Vt] }],
          "break-after": [{ "break-after": Z() }],
          "break-before": [{ "break-before": Z() }],
          "break-inside": [
            { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
          ],
          "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
          box: [{ box: ["border", "content"] }],
          display: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "inline-flex",
            "table",
            "inline-table",
            "table-caption",
            "table-cell",
            "table-column",
            "table-column-group",
            "table-footer-group",
            "table-header-group",
            "table-row-group",
            "table-row",
            "flow-root",
            "grid",
            "inline-grid",
            "contents",
            "list-item",
            "hidden",
          ],
          float: [{ float: ["right", "left", "none", "start", "end"] }],
          clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [
            { object: ["contain", "cover", "fill", "none", "scale-down"] },
          ],
          "object-position": [{ object: [...J(), mA] }],
          overflow: [{ overflow: sA() }],
          "overflow-x": [{ "overflow-x": sA() }],
          "overflow-y": [{ "overflow-y": sA() }],
          overscroll: [{ overscroll: X() }],
          "overscroll-x": [{ "overscroll-x": X() }],
          "overscroll-y": [{ "overscroll-y": X() }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{ inset: [m] }],
          "inset-x": [{ "inset-x": [m] }],
          "inset-y": [{ "inset-y": [m] }],
          start: [{ start: [m] }],
          end: [{ end: [m] }],
          top: [{ top: [m] }],
          right: [{ right: [m] }],
          bottom: [{ bottom: [m] }],
          left: [{ left: [m] }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{ z: ["auto", oo, mA] }],
          basis: [{ basis: dA() }],
          "flex-direction": [
            { flex: ["row", "row-reverse", "col", "col-reverse"] },
          ],
          "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
          flex: [{ flex: ["1", "auto", "initial", "none", mA] }],
          grow: [{ grow: G() }],
          shrink: [{ shrink: G() }],
          order: [{ order: ["first", "last", "none", oo, mA] }],
          "grid-cols": [{ "grid-cols": [io] }],
          "col-start-end": [{ col: ["auto", { span: ["full", oo, mA] }, mA] }],
          "col-start": [{ "col-start": oA() }],
          "col-end": [{ "col-end": oA() }],
          "grid-rows": [{ "grid-rows": [io] }],
          "row-start-end": [{ row: ["auto", { span: [oo, mA] }, mA] }],
          "row-start": [{ "row-start": oA() }],
          "row-end": [{ "row-end": oA() }],
          "grid-flow": [
            { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
          ],
          "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", mA] }],
          "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", mA] }],
          gap: [{ gap: [v] }],
          "gap-x": [{ "gap-x": [v] }],
          "gap-y": [{ "gap-y": [v] }],
          "justify-content": [{ justify: ["normal", ...N()] }],
          "justify-items": [
            { "justify-items": ["start", "end", "center", "stretch"] },
          ],
          "justify-self": [
            { "justify-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          "align-content": [{ content: ["normal", ...N(), "baseline"] }],
          "align-items": [
            { items: ["start", "end", "center", "baseline", "stretch"] },
          ],
          "align-self": [
            { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
          ],
          "place-content": [{ "place-content": [...N(), "baseline"] }],
          "place-items": [
            {
              "place-items": ["start", "end", "center", "baseline", "stretch"],
            },
          ],
          "place-self": [
            { "place-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          p: [{ p: [I] }],
          px: [{ px: [I] }],
          py: [{ py: [I] }],
          ps: [{ ps: [I] }],
          pe: [{ pe: [I] }],
          pt: [{ pt: [I] }],
          pr: [{ pr: [I] }],
          pb: [{ pb: [I] }],
          pl: [{ pl: [I] }],
          m: [{ m: [F] }],
          mx: [{ mx: [F] }],
          my: [{ my: [F] }],
          ms: [{ ms: [F] }],
          me: [{ me: [F] }],
          mt: [{ mt: [F] }],
          mr: [{ mr: [F] }],
          mb: [{ mb: [F] }],
          ml: [{ ml: [F] }],
          "space-x": [{ "space-x": [P] }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{ "space-y": [P] }],
          "space-y-reverse": ["space-y-reverse"],
          w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", mA, r] }],
          "min-w": [{ "min-w": [mA, r, "min", "max", "fit"] }],
          "max-w": [
            {
              "max-w": [
                mA,
                r,
                "none",
                "full",
                "min",
                "max",
                "fit",
                "prose",
                { screen: [Vt] },
                Vt,
              ],
            },
          ],
          h: [{ h: [mA, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
          "min-h": [
            { "min-h": [mA, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          "max-h": [
            { "max-h": [mA, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          size: [{ size: [mA, r, "auto", "min", "max", "fit"] }],
          "font-size": [{ text: ["base", Vt, _t] }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [
            {
              font: [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
                Tl,
              ],
            },
          ],
          "font-family": [{ font: [io] }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
          tracking: [
            {
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
                mA,
              ],
            },
          ],
          "line-clamp": [{ "line-clamp": ["none", Zr, Tl] }],
          leading: [
            {
              leading: [
                "none",
                "tight",
                "snug",
                "normal",
                "relaxed",
                "loose",
                ht,
                mA,
              ],
            },
          ],
          "list-image": [{ "list-image": ["none", mA] }],
          "list-style-type": [{ list: ["none", "disc", "decimal", mA] }],
          "list-style-position": [{ list: ["inside", "outside"] }],
          "placeholder-color": [{ placeholder: [e] }],
          "placeholder-opacity": [{ "placeholder-opacity": [E] }],
          "text-alignment": [
            { text: ["left", "center", "right", "justify", "start", "end"] },
          ],
          "text-color": [{ text: [e] }],
          "text-opacity": [{ "text-opacity": [E] }],
          "text-decoration": [
            "underline",
            "overline",
            "line-through",
            "no-underline",
          ],
          "text-decoration-style": [{ decoration: [...AA(), "wavy"] }],
          "text-decoration-thickness": [
            { decoration: ["auto", "from-font", ht, _t] },
          ],
          "underline-offset": [{ "underline-offset": ["auto", ht, mA] }],
          "text-decoration-color": [{ decoration: [e] }],
          "text-transform": [
            "uppercase",
            "lowercase",
            "capitalize",
            "normal-case",
          ],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
          indent: [{ indent: q() }],
          "vertical-align": [
            {
              align: [
                "baseline",
                "top",
                "middle",
                "bottom",
                "text-top",
                "text-bottom",
                "sub",
                "super",
                mA,
              ],
            },
          ],
          whitespace: [
            {
              whitespace: [
                "normal",
                "nowrap",
                "pre",
                "pre-line",
                "pre-wrap",
                "break-spaces",
              ],
            },
          ],
          break: [{ break: ["normal", "words", "all", "keep"] }],
          hyphens: [{ hyphens: ["none", "manual", "auto"] }],
          content: [{ content: ["none", mA] }],
          "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
          "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
          "bg-opacity": [{ "bg-opacity": [E] }],
          "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
          "bg-position": [{ bg: [...J(), $U] }],
          "bg-repeat": [
            { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
          ],
          "bg-size": [{ bg: ["auto", "cover", "contain", ZU] }],
          "bg-image": [
            {
              bg: [
                "none",
                { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                AF,
              ],
            },
          ],
          "bg-color": [{ bg: [e] }],
          "gradient-from-pos": [{ from: [Q] }],
          "gradient-via-pos": [{ via: [Q] }],
          "gradient-to-pos": [{ to: [Q] }],
          "gradient-from": [{ from: [U] }],
          "gradient-via": [{ via: [U] }],
          "gradient-to": [{ to: [U] }],
          rounded: [{ rounded: [l] }],
          "rounded-s": [{ "rounded-s": [l] }],
          "rounded-e": [{ "rounded-e": [l] }],
          "rounded-t": [{ "rounded-t": [l] }],
          "rounded-r": [{ "rounded-r": [l] }],
          "rounded-b": [{ "rounded-b": [l] }],
          "rounded-l": [{ "rounded-l": [l] }],
          "rounded-ss": [{ "rounded-ss": [l] }],
          "rounded-se": [{ "rounded-se": [l] }],
          "rounded-ee": [{ "rounded-ee": [l] }],
          "rounded-es": [{ "rounded-es": [l] }],
          "rounded-tl": [{ "rounded-tl": [l] }],
          "rounded-tr": [{ "rounded-tr": [l] }],
          "rounded-br": [{ "rounded-br": [l] }],
          "rounded-bl": [{ "rounded-bl": [l] }],
          "border-w": [{ border: [f] }],
          "border-w-x": [{ "border-x": [f] }],
          "border-w-y": [{ "border-y": [f] }],
          "border-w-s": [{ "border-s": [f] }],
          "border-w-e": [{ "border-e": [f] }],
          "border-w-t": [{ "border-t": [f] }],
          "border-w-r": [{ "border-r": [f] }],
          "border-w-b": [{ "border-b": [f] }],
          "border-w-l": [{ "border-l": [f] }],
          "border-opacity": [{ "border-opacity": [E] }],
          "border-style": [{ border: [...AA(), "hidden"] }],
          "divide-x": [{ "divide-x": [f] }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{ "divide-y": [f] }],
          "divide-y-reverse": ["divide-y-reverse"],
          "divide-opacity": [{ "divide-opacity": [E] }],
          "divide-style": [{ divide: AA() }],
          "border-color": [{ border: [s] }],
          "border-color-x": [{ "border-x": [s] }],
          "border-color-y": [{ "border-y": [s] }],
          "border-color-t": [{ "border-t": [s] }],
          "border-color-r": [{ "border-r": [s] }],
          "border-color-b": [{ "border-b": [s] }],
          "border-color-l": [{ "border-l": [s] }],
          "divide-color": [{ divide: [s] }],
          "outline-style": [{ outline: ["", ...AA()] }],
          "outline-offset": [{ "outline-offset": [ht, mA] }],
          "outline-w": [{ outline: [ht, _t] }],
          "outline-color": [{ outline: [e] }],
          "ring-w": [{ ring: tA() }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{ ring: [e] }],
          "ring-opacity": [{ "ring-opacity": [E] }],
          "ring-offset-w": [{ "ring-offset": [ht, _t] }],
          "ring-offset-color": [{ "ring-offset": [e] }],
          shadow: [{ shadow: ["", "inner", "none", Vt, eF] }],
          "shadow-color": [{ shadow: [io] }],
          opacity: [{ opacity: [E] }],
          "mix-blend": [
            { "mix-blend": [...Y(), "plus-lighter", "plus-darker"] },
          ],
          "bg-blend": [{ "bg-blend": Y() }],
          filter: [{ filter: ["", "none"] }],
          blur: [{ blur: [n] }],
          brightness: [{ brightness: [o] }],
          contrast: [{ contrast: [B] }],
          "drop-shadow": [{ "drop-shadow": ["", "none", Vt, mA] }],
          grayscale: [{ grayscale: [g] }],
          "hue-rotate": [{ "hue-rotate": [w] }],
          invert: [{ invert: [h] }],
          saturate: [{ saturate: [R] }],
          sepia: [{ sepia: [k] }],
          "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
          "backdrop-blur": [{ "backdrop-blur": [n] }],
          "backdrop-brightness": [{ "backdrop-brightness": [o] }],
          "backdrop-contrast": [{ "backdrop-contrast": [B] }],
          "backdrop-grayscale": [{ "backdrop-grayscale": [g] }],
          "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [w] }],
          "backdrop-invert": [{ "backdrop-invert": [h] }],
          "backdrop-opacity": [{ "backdrop-opacity": [E] }],
          "backdrop-saturate": [{ "backdrop-saturate": [R] }],
          "backdrop-sepia": [{ "backdrop-sepia": [k] }],
          "border-collapse": [{ border: ["collapse", "separate"] }],
          "border-spacing": [{ "border-spacing": [u] }],
          "border-spacing-x": [{ "border-spacing-x": [u] }],
          "border-spacing-y": [{ "border-spacing-y": [u] }],
          "table-layout": [{ table: ["auto", "fixed"] }],
          caption: [{ caption: ["top", "bottom"] }],
          transition: [
            {
              transition: [
                "none",
                "all",
                "",
                "colors",
                "opacity",
                "shadow",
                "transform",
                mA,
              ],
            },
          ],
          duration: [{ duration: H() }],
          ease: [{ ease: ["linear", "in", "out", "in-out", mA] }],
          delay: [{ delay: H() }],
          animate: [
            { animate: ["none", "spin", "ping", "pulse", "bounce", mA] },
          ],
          transform: [{ transform: ["", "gpu", "none"] }],
          scale: [{ scale: [T] }],
          "scale-x": [{ "scale-x": [T] }],
          "scale-y": [{ "scale-y": [T] }],
          rotate: [{ rotate: [oo, mA] }],
          "translate-x": [{ "translate-x": [j] }],
          "translate-y": [{ "translate-y": [j] }],
          "skew-x": [{ "skew-x": [O] }],
          "skew-y": [{ "skew-y": [O] }],
          "transform-origin": [
            {
              origin: [
                "center",
                "top",
                "top-right",
                "right",
                "bottom-right",
                "bottom",
                "bottom-left",
                "left",
                "top-left",
                mA,
              ],
            },
          ],
          accent: [{ accent: ["auto", e] }],
          appearance: [{ appearance: ["none", "auto"] }],
          cursor: [
            {
              cursor: [
                "auto",
                "default",
                "pointer",
                "wait",
                "text",
                "move",
                "help",
                "not-allowed",
                "none",
                "context-menu",
                "progress",
                "cell",
                "crosshair",
                "vertical-text",
                "alias",
                "copy",
                "no-drop",
                "grab",
                "grabbing",
                "all-scroll",
                "col-resize",
                "row-resize",
                "n-resize",
                "e-resize",
                "s-resize",
                "w-resize",
                "ne-resize",
                "nw-resize",
                "se-resize",
                "sw-resize",
                "ew-resize",
                "ns-resize",
                "nesw-resize",
                "nwse-resize",
                "zoom-in",
                "zoom-out",
                mA,
              ],
            },
          ],
          "caret-color": [{ caret: [e] }],
          "pointer-events": [{ "pointer-events": ["none", "auto"] }],
          resize: [{ resize: ["none", "y", "x", ""] }],
          "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
          "scroll-m": [{ "scroll-m": q() }],
          "scroll-mx": [{ "scroll-mx": q() }],
          "scroll-my": [{ "scroll-my": q() }],
          "scroll-ms": [{ "scroll-ms": q() }],
          "scroll-me": [{ "scroll-me": q() }],
          "scroll-mt": [{ "scroll-mt": q() }],
          "scroll-mr": [{ "scroll-mr": q() }],
          "scroll-mb": [{ "scroll-mb": q() }],
          "scroll-ml": [{ "scroll-ml": q() }],
          "scroll-p": [{ "scroll-p": q() }],
          "scroll-px": [{ "scroll-px": q() }],
          "scroll-py": [{ "scroll-py": q() }],
          "scroll-ps": [{ "scroll-ps": q() }],
          "scroll-pe": [{ "scroll-pe": q() }],
          "scroll-pt": [{ "scroll-pt": q() }],
          "scroll-pr": [{ "scroll-pr": q() }],
          "scroll-pb": [{ "scroll-pb": q() }],
          "scroll-pl": [{ "scroll-pl": q() }],
          "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
          "snap-stop": [{ snap: ["normal", "always"] }],
          "snap-type": [{ snap: ["none", "x", "y", "both"] }],
          "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
          touch: [{ touch: ["auto", "none", "manipulation"] }],
          "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
          "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
          "touch-pz": ["touch-pinch-zoom"],
          select: [{ select: ["none", "text", "all", "auto"] }],
          "will-change": [
            { "will-change": ["auto", "scroll", "contents", "transform", mA] },
          ],
          fill: [{ fill: [e, "none"] }],
          "stroke-w": [{ stroke: [ht, _t, Tl] }],
          stroke: [{ stroke: [e, "none"] }],
          sr: ["sr-only", "not-sr-only"],
          "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: [
            "inset-x",
            "inset-y",
            "start",
            "end",
            "top",
            "right",
            "bottom",
            "left",
          ],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": [
            "fvn-ordinal",
            "fvn-slashed-zero",
            "fvn-figure",
            "fvn-spacing",
            "fvn-fraction",
          ],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: [
            "rounded-s",
            "rounded-e",
            "rounded-t",
            "rounded-r",
            "rounded-b",
            "rounded-l",
            "rounded-ss",
            "rounded-se",
            "rounded-ee",
            "rounded-es",
            "rounded-tl",
            "rounded-tr",
            "rounded-br",
            "rounded-bl",
          ],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": [
            "border-w-s",
            "border-w-e",
            "border-w-t",
            "border-w-r",
            "border-w-b",
            "border-w-l",
          ],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": [
            "border-color-t",
            "border-color-r",
            "border-color-b",
            "border-color-l",
          ],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": [
            "scroll-mx",
            "scroll-my",
            "scroll-ms",
            "scroll-me",
            "scroll-mt",
            "scroll-mr",
            "scroll-mb",
            "scroll-ml",
          ],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": [
            "scroll-px",
            "scroll-py",
            "scroll-ps",
            "scroll-pe",
            "scroll-pt",
            "scroll-pr",
            "scroll-pb",
            "scroll-pl",
          ],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"],
        },
        conflictingClassGroupModifiers: { "font-size": ["leading"] },
      };
    });
  function $A(...e) {
    return oF(IU(e));
  }
  const iF = Sl(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
      {
        variants: {
          variant: {
            default:
              "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive:
              "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline:
              "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary:
              "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
          },
          size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9",
          },
        },
        defaultVariants: { variant: "default", size: "default" },
      },
    ),
    Xi = C.forwardRef(
      ({ className: e, variant: r, size: n, asChild: o = !1, ...s }, l) => {
        const u = o ? Cr : "button";
        return b.jsx(u, {
          className: $A(iF({ variant: r, size: n, className: e })),
          ref: l,
          ...s,
        });
      },
    );
  Xi.displayName = "Button";
  var sF = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "span",
      "svg",
      "ul",
    ],
    LA = sF.reduce((e, r) => {
      const n = C.forwardRef((o, s) => {
        const { asChild: l, ...u } = o,
          f = l ? Cr : r;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          b.jsx(f, { ...u, ref: s })
        );
      });
      return (n.displayName = `Primitive.${r}`), { ...e, [r]: n };
    }, {});
  function aF(e, r) {
    e && gr.flushSync(() => e.dispatchEvent(r));
  }
  var lF = "Label",
    KB = C.forwardRef((e, r) =>
      b.jsx(LA.label, {
        ...e,
        ref: r,
        onMouseDown: (n) => {
          n.target.closest("button, input, select, textarea") ||
            (e.onMouseDown?.(n),
            !n.defaultPrevented && n.detail > 1 && n.preventDefault());
        },
      }),
    );
  KB.displayName = lF;
  var kB = KB;
  const cF = Sl(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    ),
    zi = C.forwardRef(({ className: e, ...r }, n) =>
      b.jsx(kB, { ref: n, className: $A(cF(), e), ...r }),
    );
  zi.displayName = kB.displayName;
  const RB = C.forwardRef(({ className: e, ...r }, n) =>
    b.jsx("textarea", {
      className: $A(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e,
      ),
      ref: n,
      ...r,
    }),
  );
  RB.displayName = "Textarea";
  function so(e, r) {
    if (e == null) return {};
    var n = {},
      o = Object.keys(e),
      s,
      l;
    for (l = 0; l < o.length; l++)
      (s = o[l]), !(r.indexOf(s) >= 0) && (n[s] = e[s]);
    return n;
  }
  var uF = ["color"],
    fF = C.forwardRef(function (e, r) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        s = so(e, uF);
      return C.createElement(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          s,
          { ref: r },
        ),
        C.createElement("path", {
          d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        }),
      );
    }),
    dF = ["color"],
    BF = C.forwardRef(function (e, r) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        s = so(e, dF);
      return C.createElement(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          s,
          { ref: r },
        ),
        C.createElement("path", {
          d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        }),
      );
    }),
    gF = ["color"],
    pF = C.forwardRef(function (e, r) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        s = so(e, gF);
      return C.createElement(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          s,
          { ref: r },
        ),
        C.createElement("path", {
          d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        }),
      );
    }),
    wF = ["color"],
    hF = C.forwardRef(function (e, r) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        s = so(e, wF);
      return C.createElement(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          s,
          { ref: r },
        ),
        C.createElement("path", {
          d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        }),
      );
    }),
    vF = ["color"],
    mF = C.forwardRef(function (e, r) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        s = so(e, vF);
      return C.createElement(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          s,
          { ref: r },
        ),
        C.createElement("path", {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        }),
      );
    });
  function OB(e, [r, n]) {
    return Math.min(n, Math.max(r, e));
  }
  function NA(e, r, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (s) {
      if ((e?.(s), n === !1 || !s.defaultPrevented)) return r?.(s);
    };
  }
  function CF(e, r) {
    const n = C.createContext(r);
    function o(l) {
      const { children: u, ...f } = l,
        B = C.useMemo(() => f, Object.values(f));
      return b.jsx(n.Provider, { value: B, children: u });
    }
    function s(l) {
      const u = C.useContext(n);
      if (u) return u;
      if (r !== void 0) return r;
      throw new Error(`\`${l}\` must be used within \`${e}\``);
    }
    return (o.displayName = e + "Provider"), [o, s];
  }
  function Ji(e, r = []) {
    let n = [];
    function o(l, u) {
      const f = C.createContext(u),
        B = n.length;
      n = [...n, u];
      function g(h) {
        const { scope: v, children: U, ...Q } = h,
          m = v?.[e][B] || f,
          F = C.useMemo(() => Q, Object.values(Q));
        return b.jsx(m.Provider, { value: F, children: U });
      }
      function w(h, v) {
        const U = v?.[e][B] || f,
          Q = C.useContext(U);
        if (Q) return Q;
        if (u !== void 0) return u;
        throw new Error(`\`${h}\` must be used within \`${l}\``);
      }
      return (g.displayName = l + "Provider"), [g, w];
    }
    const s = () => {
      const l = n.map((u) => C.createContext(u));
      return function (f) {
        const B = f?.[e] || l;
        return C.useMemo(() => ({ [`__scope${e}`]: { ...f, [e]: B } }), [f, B]);
      };
    };
    return (s.scopeName = e), [o, QF(s, ...r)];
  }
  function QF(...e) {
    const r = e[0];
    if (e.length === 1) return r;
    const n = () => {
      const o = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
      return function (l) {
        const u = o.reduce((f, { useScope: B, scopeName: g }) => {
          const h = B(l)[`__scope${g}`];
          return { ...f, ...h };
        }, {});
        return C.useMemo(() => ({ [`__scope${r.scopeName}`]: u }), [u]);
      };
    };
    return (n.scopeName = r.scopeName), n;
  }
  function yF(e) {
    const r = e + "CollectionProvider",
      [n, o] = Ji(r),
      [s, l] = n(r, { collectionRef: { current: null }, itemMap: new Map() }),
      u = (U) => {
        const { scope: Q, children: m } = U,
          F = Lt.useRef(null),
          E = Lt.useRef(new Map()).current;
        return b.jsx(s, {
          scope: Q,
          itemMap: E,
          collectionRef: F,
          children: m,
        });
      };
    u.displayName = r;
    const f = e + "CollectionSlot",
      B = Lt.forwardRef((U, Q) => {
        const { scope: m, children: F } = U,
          E = l(f, m),
          I = jA(Q, E.collectionRef);
        return b.jsx(Cr, { ref: I, children: F });
      });
    B.displayName = f;
    const g = e + "CollectionItemSlot",
      w = "data-radix-collection-item",
      h = Lt.forwardRef((U, Q) => {
        const { scope: m, children: F, ...E } = U,
          I = Lt.useRef(null),
          R = jA(Q, I),
          T = l(g, m);
        return (
          Lt.useEffect(
            () => (
              T.itemMap.set(I, { ref: I, ...E }), () => void T.itemMap.delete(I)
            ),
          ),
          b.jsx(Cr, { [w]: "", ref: R, children: F })
        );
      });
    h.displayName = g;
    function v(U) {
      const Q = l(e + "CollectionConsumer", U);
      return Lt.useCallback(() => {
        const F = Q.collectionRef.current;
        if (!F) return [];
        const E = Array.from(F.querySelectorAll(`[${w}]`));
        return Array.from(Q.itemMap.values()).sort(
          (T, k) => E.indexOf(T.ref.current) - E.indexOf(k.ref.current),
        );
      }, [Q.collectionRef, Q.itemMap]);
    }
    return [{ Provider: u, Slot: B, ItemSlot: h }, v, o];
  }
  var UF = C.createContext(void 0);
  function FF(e) {
    const r = C.useContext(UF);
    return e || r || "ltr";
  }
  function vt(e) {
    const r = C.useRef(e);
    return (
      C.useEffect(() => {
        r.current = e;
      }),
      C.useMemo(
        () =>
          (...n) =>
            r.current?.(...n),
        [],
      )
    );
  }
  function EF(e, r = globalThis?.document) {
    const n = vt(e);
    C.useEffect(() => {
      const o = (s) => {
        s.key === "Escape" && n(s);
      };
      return (
        r.addEventListener("keydown", o, { capture: !0 }),
        () => r.removeEventListener("keydown", o, { capture: !0 })
      );
    }, [n, r]);
  }
  var xF = "DismissableLayer",
    Dl = "dismissableLayer.update",
    IF = "dismissableLayer.pointerDownOutside",
    HF = "dismissableLayer.focusOutside",
    NB,
    MB = C.createContext({
      layers: new Set(),
      layersWithOutsidePointerEventsDisabled: new Set(),
      branches: new Set(),
    }),
    Kl = C.forwardRef((e, r) => {
      const {
          disableOutsidePointerEvents: n = !1,
          onEscapeKeyDown: o,
          onPointerDownOutside: s,
          onFocusOutside: l,
          onInteractOutside: u,
          onDismiss: f,
          ...B
        } = e,
        g = C.useContext(MB),
        [w, h] = C.useState(null),
        v = w?.ownerDocument ?? globalThis?.document,
        [, U] = C.useState({}),
        Q = jA(r, (P) => h(P)),
        m = Array.from(g.layers),
        [F] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
        E = m.indexOf(F),
        I = w ? m.indexOf(w) : -1,
        R = g.layersWithOutsidePointerEventsDisabled.size > 0,
        T = I >= E,
        k = LF((P) => {
          const j = P.target,
            X = [...g.branches].some((sA) => sA.contains(j));
          !T || X || (s?.(P), u?.(P), P.defaultPrevented || f?.());
        }, v),
        O = TF((P) => {
          const j = P.target;
          [...g.branches].some((sA) => sA.contains(j)) ||
            (l?.(P), u?.(P), P.defaultPrevented || f?.());
        }, v);
      return (
        EF((P) => {
          I === g.layers.size - 1 &&
            (o?.(P), !P.defaultPrevented && f && (P.preventDefault(), f()));
        }, v),
        C.useEffect(() => {
          if (w)
            return (
              n &&
                (g.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((NB = v.body.style.pointerEvents),
                  (v.body.style.pointerEvents = "none")),
                g.layersWithOutsidePointerEventsDisabled.add(w)),
              g.layers.add(w),
              PB(),
              () => {
                n &&
                  g.layersWithOutsidePointerEventsDisabled.size === 1 &&
                  (v.body.style.pointerEvents = NB);
              }
            );
        }, [w, v, n, g]),
        C.useEffect(
          () => () => {
            w &&
              (g.layers.delete(w),
              g.layersWithOutsidePointerEventsDisabled.delete(w),
              PB());
          },
          [w, g],
        ),
        C.useEffect(() => {
          const P = () => U({});
          return (
            document.addEventListener(Dl, P),
            () => document.removeEventListener(Dl, P)
          );
        }, []),
        b.jsx(LA.div, {
          ...B,
          ref: Q,
          style: {
            pointerEvents: R ? (T ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: NA(e.onFocusCapture, O.onFocusCapture),
          onBlurCapture: NA(e.onBlurCapture, O.onBlurCapture),
          onPointerDownCapture: NA(
            e.onPointerDownCapture,
            k.onPointerDownCapture,
          ),
        })
      );
    });
  Kl.displayName = xF;
  var SF = "DismissableLayerBranch",
    bF = C.forwardRef((e, r) => {
      const n = C.useContext(MB),
        o = C.useRef(null),
        s = jA(r, o);
      return (
        C.useEffect(() => {
          const l = o.current;
          if (l)
            return (
              n.branches.add(l),
              () => {
                n.branches.delete(l);
              }
            );
        }, [n.branches]),
        b.jsx(LA.div, { ...e, ref: s })
      );
    });
  bF.displayName = SF;
  function LF(e, r = globalThis?.document) {
    const n = vt(e),
      o = C.useRef(!1),
      s = C.useRef(() => {});
    return (
      C.useEffect(() => {
        const l = (f) => {
            if (f.target && !o.current) {
              let B = function () {
                _B(IF, n, g, { discrete: !0 });
              };
              const g = { originalEvent: f };
              f.pointerType === "touch"
                ? (r.removeEventListener("click", s.current),
                  (s.current = B),
                  r.addEventListener("click", s.current, { once: !0 }))
                : B();
            } else r.removeEventListener("click", s.current);
            o.current = !1;
          },
          u = window.setTimeout(() => {
            r.addEventListener("pointerdown", l);
          }, 0);
        return () => {
          window.clearTimeout(u),
            r.removeEventListener("pointerdown", l),
            r.removeEventListener("click", s.current);
        };
      }, [r, n]),
      { onPointerDownCapture: () => (o.current = !0) }
    );
  }
  function TF(e, r = globalThis?.document) {
    const n = vt(e),
      o = C.useRef(!1);
    return (
      C.useEffect(() => {
        const s = (l) => {
          l.target &&
            !o.current &&
            _B(HF, n, { originalEvent: l }, { discrete: !1 });
        };
        return (
          r.addEventListener("focusin", s),
          () => r.removeEventListener("focusin", s)
        );
      }, [r, n]),
      {
        onFocusCapture: () => (o.current = !0),
        onBlurCapture: () => (o.current = !1),
      }
    );
  }
  function PB() {
    const e = new CustomEvent(Dl);
    document.dispatchEvent(e);
  }
  function _B(e, r, n, { discrete: o }) {
    const s = n.originalEvent.target,
      l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    r && s.addEventListener(e, r, { once: !0 }),
      o ? aF(s, l) : s.dispatchEvent(l);
  }
  var kl = 0;
  function VB() {
    C.useEffect(() => {
      const e = document.querySelectorAll("[data-radix-focus-guard]");
      return (
        document.body.insertAdjacentElement("afterbegin", e[0] ?? GB()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? GB()),
        kl++,
        () => {
          kl === 1 &&
            document
              .querySelectorAll("[data-radix-focus-guard]")
              .forEach((r) => r.remove()),
            kl--;
        }
      );
    }, []);
  }
  function GB() {
    const e = document.createElement("span");
    return (
      e.setAttribute("data-radix-focus-guard", ""),
      (e.tabIndex = 0),
      (e.style.cssText =
        "outline: none; opacity: 0; position: fixed; pointer-events: none"),
      e
    );
  }
  var Rl = "focusScope.autoFocusOnMount",
    Ol = "focusScope.autoFocusOnUnmount",
    WB = { bubbles: !1, cancelable: !0 },
    DF = "FocusScope",
    Nl = C.forwardRef((e, r) => {
      const {
          loop: n = !1,
          trapped: o = !1,
          onMountAutoFocus: s,
          onUnmountAutoFocus: l,
          ...u
        } = e,
        [f, B] = C.useState(null),
        g = vt(s),
        w = vt(l),
        h = C.useRef(null),
        v = jA(r, (m) => B(m)),
        U = C.useRef({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      C.useEffect(() => {
        if (o) {
          let m = function (R) {
              if (U.paused || !f) return;
              const T = R.target;
              f.contains(T) ? (h.current = T) : Gt(h.current, { select: !0 });
            },
            F = function (R) {
              if (U.paused || !f) return;
              const T = R.relatedTarget;
              T !== null && (f.contains(T) || Gt(h.current, { select: !0 }));
            },
            E = function (R) {
              if (document.activeElement === document.body)
                for (const k of R) k.removedNodes.length > 0 && Gt(f);
            };
          document.addEventListener("focusin", m),
            document.addEventListener("focusout", F);
          const I = new MutationObserver(E);
          return (
            f && I.observe(f, { childList: !0, subtree: !0 }),
            () => {
              document.removeEventListener("focusin", m),
                document.removeEventListener("focusout", F),
                I.disconnect();
            }
          );
        }
      }, [o, f, U.paused]),
        C.useEffect(() => {
          if (f) {
            zB.add(U);
            const m = document.activeElement;
            if (!f.contains(m)) {
              const E = new CustomEvent(Rl, WB);
              f.addEventListener(Rl, g),
                f.dispatchEvent(E),
                E.defaultPrevented ||
                  (KF(MF(jB(f)), { select: !0 }),
                  document.activeElement === m && Gt(f));
            }
            return () => {
              f.removeEventListener(Rl, g),
                setTimeout(() => {
                  const E = new CustomEvent(Ol, WB);
                  f.addEventListener(Ol, w),
                    f.dispatchEvent(E),
                    E.defaultPrevented ||
                      Gt(m ?? document.body, { select: !0 }),
                    f.removeEventListener(Ol, w),
                    zB.remove(U);
                }, 0);
            };
          }
        }, [f, g, w, U]);
      const Q = C.useCallback(
        (m) => {
          if ((!n && !o) || U.paused) return;
          const F = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
            E = document.activeElement;
          if (F && E) {
            const I = m.currentTarget,
              [R, T] = kF(I);
            R && T
              ? !m.shiftKey && E === T
                ? (m.preventDefault(), n && Gt(R, { select: !0 }))
                : m.shiftKey &&
                  E === R &&
                  (m.preventDefault(), n && Gt(T, { select: !0 }))
              : E === I && m.preventDefault();
          }
        },
        [n, o, U.paused],
      );
      return b.jsx(LA.div, { tabIndex: -1, ...u, ref: v, onKeyDown: Q });
    });
  Nl.displayName = DF;
  function KF(e, { select: r = !1 } = {}) {
    const n = document.activeElement;
    for (const o of e)
      if ((Gt(o, { select: r }), document.activeElement !== n)) return;
  }
  function kF(e) {
    const r = jB(e),
      n = XB(r, e),
      o = XB(r.reverse(), e);
    return [n, o];
  }
  function jB(e) {
    const r = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (o) => {
          const s = o.tagName === "INPUT" && o.type === "hidden";
          return o.disabled || o.hidden || s
            ? NodeFilter.FILTER_SKIP
            : o.tabIndex >= 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP;
        },
      });
    for (; n.nextNode(); ) r.push(n.currentNode);
    return r;
  }
  function XB(e, r) {
    for (const n of e) if (!RF(n, { upTo: r })) return n;
  }
  function RF(e, { upTo: r }) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e; ) {
      if (r !== void 0 && e === r) return !1;
      if (getComputedStyle(e).display === "none") return !0;
      e = e.parentElement;
    }
    return !1;
  }
  function OF(e) {
    return e instanceof HTMLInputElement && "select" in e;
  }
  function Gt(e, { select: r = !1 } = {}) {
    if (e && e.focus) {
      const n = document.activeElement;
      e.focus({ preventScroll: !0 }), e !== n && OF(e) && r && e.select();
    }
  }
  var zB = NF();
  function NF() {
    let e = [];
    return {
      add(r) {
        const n = e[0];
        r !== n && n?.pause(), (e = JB(e, r)), e.unshift(r);
      },
      remove(r) {
        (e = JB(e, r)), e[0]?.resume();
      },
    };
  }
  function JB(e, r) {
    const n = [...e],
      o = n.indexOf(r);
    return o !== -1 && n.splice(o, 1), n;
  }
  function MF(e) {
    return e.filter((r) => r.tagName !== "A");
  }
  var we = globalThis?.document ? C.useLayoutEffect : () => {},
    PF = Y0.useId || (() => {}),
    _F = 0;
  function qr(e) {
    const [r, n] = C.useState(PF());
    return (
      we(() => {
        n((o) => o ?? String(_F++));
      }, [e]),
      r ? `radix-${r}` : ""
    );
  }
  const VF = ["top", "right", "bottom", "left"],
    it = Math.min,
    Ie = Math.max,
    Yi = Math.round,
    Zi = Math.floor,
    Wt = (e) => ({ x: e, y: e }),
    GF = { left: "right", right: "left", bottom: "top", top: "bottom" },
    WF = { start: "end", end: "start" };
  function Ml(e, r, n) {
    return Ie(e, it(r, n));
  }
  function mt(e, r) {
    return typeof e == "function" ? e(r) : e;
  }
  function Ct(e) {
    return e.split("-")[0];
  }
  function An(e) {
    return e.split("-")[1];
  }
  function Pl(e) {
    return e === "x" ? "y" : "x";
  }
  function _l(e) {
    return e === "y" ? "height" : "width";
  }
  function jt(e) {
    return ["top", "bottom"].includes(Ct(e)) ? "y" : "x";
  }
  function Vl(e) {
    return Pl(jt(e));
  }
  function jF(e, r, n) {
    n === void 0 && (n = !1);
    const o = An(e),
      s = Vl(e),
      l = _l(s);
    let u =
      s === "x"
        ? o === (n ? "end" : "start")
          ? "right"
          : "left"
        : o === "start"
          ? "bottom"
          : "top";
    return r.reference[l] > r.floating[l] && (u = $i(u)), [u, $i(u)];
  }
  function XF(e) {
    const r = $i(e);
    return [Gl(e), r, Gl(r)];
  }
  function Gl(e) {
    return e.replace(/start|end/g, (r) => WF[r]);
  }
  function zF(e, r, n) {
    const o = ["left", "right"],
      s = ["right", "left"],
      l = ["top", "bottom"],
      u = ["bottom", "top"];
    switch (e) {
      case "top":
      case "bottom":
        return n ? (r ? s : o) : r ? o : s;
      case "left":
      case "right":
        return r ? l : u;
      default:
        return [];
    }
  }
  function JF(e, r, n, o) {
    const s = An(e);
    let l = zF(Ct(e), n === "start", o);
    return (
      s && ((l = l.map((u) => u + "-" + s)), r && (l = l.concat(l.map(Gl)))), l
    );
  }
  function $i(e) {
    return e.replace(/left|right|bottom|top/g, (r) => GF[r]);
  }
  function YF(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }
  function YB(e) {
    return typeof e != "number"
      ? YF(e)
      : { top: e, right: e, bottom: e, left: e };
  }
  function qi(e) {
    const { x: r, y: n, width: o, height: s } = e;
    return {
      width: o,
      height: s,
      top: n,
      left: r,
      right: r + o,
      bottom: n + s,
      x: r,
      y: n,
    };
  }
  function ZB(e, r, n) {
    let { reference: o, floating: s } = e;
    const l = jt(r),
      u = Vl(r),
      f = _l(u),
      B = Ct(r),
      g = l === "y",
      w = o.x + o.width / 2 - s.width / 2,
      h = o.y + o.height / 2 - s.height / 2,
      v = o[f] / 2 - s[f] / 2;
    let U;
    switch (B) {
      case "top":
        U = { x: w, y: o.y - s.height };
        break;
      case "bottom":
        U = { x: w, y: o.y + o.height };
        break;
      case "right":
        U = { x: o.x + o.width, y: h };
        break;
      case "left":
        U = { x: o.x - s.width, y: h };
        break;
      default:
        U = { x: o.x, y: o.y };
    }
    switch (An(r)) {
      case "start":
        U[u] -= v * (n && g ? -1 : 1);
        break;
      case "end":
        U[u] += v * (n && g ? -1 : 1);
        break;
    }
    return U;
  }
  const ZF = async (e, r, n) => {
    const {
        placement: o = "bottom",
        strategy: s = "absolute",
        middleware: l = [],
        platform: u,
      } = n,
      f = l.filter(Boolean),
      B = await (u.isRTL == null ? void 0 : u.isRTL(r));
    let g = await u.getElementRects({ reference: e, floating: r, strategy: s }),
      { x: w, y: h } = ZB(g, o, B),
      v = o,
      U = {},
      Q = 0;
    for (let m = 0; m < f.length; m++) {
      const { name: F, fn: E } = f[m],
        {
          x: I,
          y: R,
          data: T,
          reset: k,
        } = await E({
          x: w,
          y: h,
          initialPlacement: o,
          placement: v,
          strategy: s,
          middlewareData: U,
          rects: g,
          platform: u,
          elements: { reference: e, floating: r },
        });
      (w = I ?? w),
        (h = R ?? h),
        (U = { ...U, [F]: { ...U[F], ...T } }),
        k &&
          Q <= 50 &&
          (Q++,
          typeof k == "object" &&
            (k.placement && (v = k.placement),
            k.rects &&
              (g =
                k.rects === !0
                  ? await u.getElementRects({
                      reference: e,
                      floating: r,
                      strategy: s,
                    })
                  : k.rects),
            ({ x: w, y: h } = ZB(g, v, B))),
          (m = -1));
    }
    return { x: w, y: h, placement: v, strategy: s, middlewareData: U };
  };
  async function ao(e, r) {
    var n;
    r === void 0 && (r = {});
    const { x: o, y: s, platform: l, rects: u, elements: f, strategy: B } = e,
      {
        boundary: g = "clippingAncestors",
        rootBoundary: w = "viewport",
        elementContext: h = "floating",
        altBoundary: v = !1,
        padding: U = 0,
      } = mt(r, e),
      Q = YB(U),
      F = f[v ? (h === "floating" ? "reference" : "floating") : h],
      E = qi(
        await l.getClippingRect({
          element:
            (n = await (l.isElement == null ? void 0 : l.isElement(F))) ==
              null || n
              ? F
              : F.contextElement ||
                (await (l.getDocumentElement == null
                  ? void 0
                  : l.getDocumentElement(f.floating))),
          boundary: g,
          rootBoundary: w,
          strategy: B,
        }),
      ),
      I =
        h === "floating"
          ? { x: o, y: s, width: u.floating.width, height: u.floating.height }
          : u.reference,
      R = await (l.getOffsetParent == null
        ? void 0
        : l.getOffsetParent(f.floating)),
      T = (await (l.isElement == null ? void 0 : l.isElement(R)))
        ? (await (l.getScale == null ? void 0 : l.getScale(R))) || {
            x: 1,
            y: 1,
          }
        : { x: 1, y: 1 },
      k = qi(
        l.convertOffsetParentRelativeRectToViewportRelativeRect
          ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: f,
              rect: I,
              offsetParent: R,
              strategy: B,
            })
          : I,
      );
    return {
      top: (E.top - k.top + Q.top) / T.y,
      bottom: (k.bottom - E.bottom + Q.bottom) / T.y,
      left: (E.left - k.left + Q.left) / T.x,
      right: (k.right - E.right + Q.right) / T.x,
    };
  }
  const $F = (e) => ({
      name: "arrow",
      options: e,
      async fn(r) {
        const {
            x: n,
            y: o,
            placement: s,
            rects: l,
            platform: u,
            elements: f,
            middlewareData: B,
          } = r,
          { element: g, padding: w = 0 } = mt(e, r) || {};
        if (g == null) return {};
        const h = YB(w),
          v = { x: n, y: o },
          U = Vl(s),
          Q = _l(U),
          m = await u.getDimensions(g),
          F = U === "y",
          E = F ? "top" : "left",
          I = F ? "bottom" : "right",
          R = F ? "clientHeight" : "clientWidth",
          T = l.reference[Q] + l.reference[U] - v[U] - l.floating[Q],
          k = v[U] - l.reference[U],
          O = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(g));
        let P = O ? O[R] : 0;
        (!P || !(await (u.isElement == null ? void 0 : u.isElement(O)))) &&
          (P = f.floating[R] || l.floating[Q]);
        const j = T / 2 - k / 2,
          X = P / 2 - m[Q] / 2 - 1,
          sA = it(h[E], X),
          dA = it(h[I], X),
          q = sA,
          tA = P - m[Q] - dA,
          oA = P / 2 - m[Q] / 2 + j,
          J = Ml(q, oA, tA),
          AA =
            !B.arrow &&
            An(s) != null &&
            oA !== J &&
            l.reference[Q] / 2 - (oA < q ? sA : dA) - m[Q] / 2 < 0,
          Y = AA ? (oA < q ? oA - q : oA - tA) : 0;
        return {
          [U]: v[U] + Y,
          data: {
            [U]: J,
            centerOffset: oA - J - Y,
            ...(AA && { alignmentOffset: Y }),
          },
          reset: AA,
        };
      },
    }),
    qF = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "flip",
          options: e,
          async fn(r) {
            var n, o;
            const {
                placement: s,
                middlewareData: l,
                rects: u,
                initialPlacement: f,
                platform: B,
                elements: g,
              } = r,
              {
                mainAxis: w = !0,
                crossAxis: h = !0,
                fallbackPlacements: v,
                fallbackStrategy: U = "bestFit",
                fallbackAxisSideDirection: Q = "none",
                flipAlignment: m = !0,
                ...F
              } = mt(e, r);
            if ((n = l.arrow) != null && n.alignmentOffset) return {};
            const E = Ct(s),
              I = jt(f),
              R = Ct(f) === f,
              T = await (B.isRTL == null ? void 0 : B.isRTL(g.floating)),
              k = v || (R || !m ? [$i(f)] : XF(f)),
              O = Q !== "none";
            !v && O && k.push(...JF(f, m, Q, T));
            const P = [f, ...k],
              j = await ao(r, F),
              X = [];
            let sA = ((o = l.flip) == null ? void 0 : o.overflows) || [];
            if ((w && X.push(j[E]), h)) {
              const oA = jF(s, u, T);
              X.push(j[oA[0]], j[oA[1]]);
            }
            if (
              ((sA = [...sA, { placement: s, overflows: X }]),
              !X.every((oA) => oA <= 0))
            ) {
              var dA, q;
              const oA = (((dA = l.flip) == null ? void 0 : dA.index) || 0) + 1,
                J = P[oA];
              if (J)
                return {
                  data: { index: oA, overflows: sA },
                  reset: { placement: J },
                };
              let AA =
                (q = sA
                  .filter((Y) => Y.overflows[0] <= 0)
                  .sort((Y, N) => Y.overflows[1] - N.overflows[1])[0]) == null
                  ? void 0
                  : q.placement;
              if (!AA)
                switch (U) {
                  case "bestFit": {
                    var tA;
                    const Y =
                      (tA = sA
                        .filter((N) => {
                          if (O) {
                            const G = jt(N.placement);
                            return G === I || G === "y";
                          }
                          return !0;
                        })
                        .map((N) => [
                          N.placement,
                          N.overflows
                            .filter((G) => G > 0)
                            .reduce((G, Z) => G + Z, 0),
                        ])
                        .sort((N, G) => N[1] - G[1])[0]) == null
                        ? void 0
                        : tA[0];
                    Y && (AA = Y);
                    break;
                  }
                  case "initialPlacement":
                    AA = f;
                    break;
                }
              if (s !== AA) return { reset: { placement: AA } };
            }
            return {};
          },
        }
      );
    };
  function $B(e, r) {
    return {
      top: e.top - r.height,
      right: e.right - r.width,
      bottom: e.bottom - r.height,
      left: e.left - r.width,
    };
  }
  function qB(e) {
    return VF.some((r) => e[r] >= 0);
  }
  const AE = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(r) {
          const { rects: n } = r,
            { strategy: o = "referenceHidden", ...s } = mt(e, r);
          switch (o) {
            case "referenceHidden": {
              const l = await ao(r, { ...s, elementContext: "reference" }),
                u = $B(l, n.reference);
              return {
                data: { referenceHiddenOffsets: u, referenceHidden: qB(u) },
              };
            }
            case "escaped": {
              const l = await ao(r, { ...s, altBoundary: !0 }),
                u = $B(l, n.floating);
              return { data: { escapedOffsets: u, escaped: qB(u) } };
            }
            default:
              return {};
          }
        },
      }
    );
  };
  async function eE(e, r) {
    const { placement: n, platform: o, elements: s } = e,
      l = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)),
      u = Ct(n),
      f = An(n),
      B = jt(n) === "y",
      g = ["left", "top"].includes(u) ? -1 : 1,
      w = l && B ? -1 : 1,
      h = mt(r, e);
    let {
      mainAxis: v,
      crossAxis: U,
      alignmentAxis: Q,
    } = typeof h == "number"
      ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
      : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h };
    return (
      f && typeof Q == "number" && (U = f === "end" ? Q * -1 : Q),
      B ? { x: U * w, y: v * g } : { x: v * g, y: U * w }
    );
  }
  const tE = function (e) {
      return (
        e === void 0 && (e = 0),
        {
          name: "offset",
          options: e,
          async fn(r) {
            var n, o;
            const { x: s, y: l, placement: u, middlewareData: f } = r,
              B = await eE(r, e);
            return u === ((n = f.offset) == null ? void 0 : n.placement) &&
              (o = f.arrow) != null &&
              o.alignmentOffset
              ? {}
              : { x: s + B.x, y: l + B.y, data: { ...B, placement: u } };
          },
        }
      );
    },
    rE = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "shift",
          options: e,
          async fn(r) {
            const { x: n, y: o, placement: s } = r,
              {
                mainAxis: l = !0,
                crossAxis: u = !1,
                limiter: f = {
                  fn: (F) => {
                    let { x: E, y: I } = F;
                    return { x: E, y: I };
                  },
                },
                ...B
              } = mt(e, r),
              g = { x: n, y: o },
              w = await ao(r, B),
              h = jt(Ct(s)),
              v = Pl(h);
            let U = g[v],
              Q = g[h];
            if (l) {
              const F = v === "y" ? "top" : "left",
                E = v === "y" ? "bottom" : "right",
                I = U + w[F],
                R = U - w[E];
              U = Ml(I, U, R);
            }
            if (u) {
              const F = h === "y" ? "top" : "left",
                E = h === "y" ? "bottom" : "right",
                I = Q + w[F],
                R = Q - w[E];
              Q = Ml(I, Q, R);
            }
            const m = f.fn({ ...r, [v]: U, [h]: Q });
            return { ...m, data: { x: m.x - n, y: m.y - o } };
          },
        }
      );
    },
    nE = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          options: e,
          fn(r) {
            const { x: n, y: o, placement: s, rects: l, middlewareData: u } = r,
              { offset: f = 0, mainAxis: B = !0, crossAxis: g = !0 } = mt(e, r),
              w = { x: n, y: o },
              h = jt(s),
              v = Pl(h);
            let U = w[v],
              Q = w[h];
            const m = mt(f, r),
              F =
                typeof m == "number"
                  ? { mainAxis: m, crossAxis: 0 }
                  : { mainAxis: 0, crossAxis: 0, ...m };
            if (B) {
              const R = v === "y" ? "height" : "width",
                T = l.reference[v] - l.floating[R] + F.mainAxis,
                k = l.reference[v] + l.reference[R] - F.mainAxis;
              U < T ? (U = T) : U > k && (U = k);
            }
            if (g) {
              var E, I;
              const R = v === "y" ? "width" : "height",
                T = ["top", "left"].includes(Ct(s)),
                k =
                  l.reference[h] -
                  l.floating[R] +
                  ((T && ((E = u.offset) == null ? void 0 : E[h])) || 0) +
                  (T ? 0 : F.crossAxis),
                O =
                  l.reference[h] +
                  l.reference[R] +
                  (T ? 0 : ((I = u.offset) == null ? void 0 : I[h]) || 0) -
                  (T ? F.crossAxis : 0);
              Q < k ? (Q = k) : Q > O && (Q = O);
            }
            return { [v]: U, [h]: Q };
          },
        }
      );
    },
    oE = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "size",
          options: e,
          async fn(r) {
            const { placement: n, rects: o, platform: s, elements: l } = r,
              { apply: u = () => {}, ...f } = mt(e, r),
              B = await ao(r, f),
              g = Ct(n),
              w = An(n),
              h = jt(n) === "y",
              { width: v, height: U } = o.floating;
            let Q, m;
            g === "top" || g === "bottom"
              ? ((Q = g),
                (m =
                  w ===
                  ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                    ? "start"
                    : "end")
                    ? "left"
                    : "right"))
              : ((m = g), (Q = w === "end" ? "top" : "bottom"));
            const F = U - B.top - B.bottom,
              E = v - B.left - B.right,
              I = it(U - B[Q], F),
              R = it(v - B[m], E),
              T = !r.middlewareData.shift;
            let k = I,
              O = R;
            if (
              (h ? (O = w || T ? it(R, E) : E) : (k = w || T ? it(I, F) : F),
              T && !w)
            ) {
              const j = Ie(B.left, 0),
                X = Ie(B.right, 0),
                sA = Ie(B.top, 0),
                dA = Ie(B.bottom, 0);
              h
                ? (O =
                    v - 2 * (j !== 0 || X !== 0 ? j + X : Ie(B.left, B.right)))
                : (k =
                    U -
                    2 * (sA !== 0 || dA !== 0 ? sA + dA : Ie(B.top, B.bottom)));
            }
            await u({ ...r, availableWidth: O, availableHeight: k });
            const P = await s.getDimensions(l.floating);
            return v !== P.width || U !== P.height
              ? { reset: { rects: !0 } }
              : {};
          },
        }
      );
    };
  function en(e) {
    return Ag(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function He(e) {
    var r;
    return (
      (e == null || (r = e.ownerDocument) == null ? void 0 : r.defaultView) ||
      window
    );
  }
  function Qt(e) {
    var r;
    return (r = (Ag(e) ? e.ownerDocument : e.document) || window.document) ==
      null
      ? void 0
      : r.documentElement;
  }
  function Ag(e) {
    return e instanceof Node || e instanceof He(e).Node;
  }
  function je(e) {
    return e instanceof Element || e instanceof He(e).Element;
  }
  function st(e) {
    return e instanceof HTMLElement || e instanceof He(e).HTMLElement;
  }
  function eg(e) {
    return typeof ShadowRoot > "u"
      ? !1
      : e instanceof ShadowRoot || e instanceof He(e).ShadowRoot;
  }
  function lo(e) {
    const { overflow: r, overflowX: n, overflowY: o, display: s } = Xe(e);
    return (
      /auto|scroll|overlay|hidden|clip/.test(r + o + n) &&
      !["inline", "contents"].includes(s)
    );
  }
  function iE(e) {
    return ["table", "td", "th"].includes(en(e));
  }
  function As(e) {
    return [":popover-open", ":modal"].some((r) => {
      try {
        return e.matches(r);
      } catch {
        return !1;
      }
    });
  }
  function Wl(e) {
    const r = jl(),
      n = je(e) ? Xe(e) : e;
    return (
      n.transform !== "none" ||
      n.perspective !== "none" ||
      (n.containerType ? n.containerType !== "normal" : !1) ||
      (!r && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
      (!r && (n.filter ? n.filter !== "none" : !1)) ||
      ["transform", "perspective", "filter"].some((o) =>
        (n.willChange || "").includes(o),
      ) ||
      ["paint", "layout", "strict", "content"].some((o) =>
        (n.contain || "").includes(o),
      )
    );
  }
  function sE(e) {
    let r = Xt(e);
    for (; st(r) && !tn(r); ) {
      if (Wl(r)) return r;
      if (As(r)) return null;
      r = Xt(r);
    }
    return null;
  }
  function jl() {
    return typeof CSS > "u" || !CSS.supports
      ? !1
      : CSS.supports("-webkit-backdrop-filter", "none");
  }
  function tn(e) {
    return ["html", "body", "#document"].includes(en(e));
  }
  function Xe(e) {
    return He(e).getComputedStyle(e);
  }
  function es(e) {
    return je(e)
      ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
      : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
  }
  function Xt(e) {
    if (en(e) === "html") return e;
    const r = e.assignedSlot || e.parentNode || (eg(e) && e.host) || Qt(e);
    return eg(r) ? r.host : r;
  }
  function tg(e) {
    const r = Xt(e);
    return tn(r)
      ? e.ownerDocument
        ? e.ownerDocument.body
        : e.body
      : st(r) && lo(r)
        ? r
        : tg(r);
  }
  function co(e, r, n) {
    var o;
    r === void 0 && (r = []), n === void 0 && (n = !0);
    const s = tg(e),
      l = s === ((o = e.ownerDocument) == null ? void 0 : o.body),
      u = He(s);
    if (l) {
      const f = Xl(u);
      return r.concat(
        u,
        u.visualViewport || [],
        lo(s) ? s : [],
        f && n ? co(f) : [],
      );
    }
    return r.concat(s, co(s, [], n));
  }
  function Xl(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
  }
  function rg(e) {
    const r = Xe(e);
    let n = parseFloat(r.width) || 0,
      o = parseFloat(r.height) || 0;
    const s = st(e),
      l = s ? e.offsetWidth : n,
      u = s ? e.offsetHeight : o,
      f = Yi(n) !== l || Yi(o) !== u;
    return f && ((n = l), (o = u)), { width: n, height: o, $: f };
  }
  function zl(e) {
    return je(e) ? e : e.contextElement;
  }
  function rn(e) {
    const r = zl(e);
    if (!st(r)) return Wt(1);
    const n = r.getBoundingClientRect(),
      { width: o, height: s, $: l } = rg(r);
    let u = (l ? Yi(n.width) : n.width) / o,
      f = (l ? Yi(n.height) : n.height) / s;
    return (
      (!u || !Number.isFinite(u)) && (u = 1),
      (!f || !Number.isFinite(f)) && (f = 1),
      { x: u, y: f }
    );
  }
  const aE = Wt(0);
  function ng(e) {
    const r = He(e);
    return !jl() || !r.visualViewport
      ? aE
      : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
  }
  function lE(e, r, n) {
    return r === void 0 && (r = !1), !n || (r && n !== He(e)) ? !1 : r;
  }
  function Qr(e, r, n, o) {
    r === void 0 && (r = !1), n === void 0 && (n = !1);
    const s = e.getBoundingClientRect(),
      l = zl(e);
    let u = Wt(1);
    r && (o ? je(o) && (u = rn(o)) : (u = rn(e)));
    const f = lE(l, n, o) ? ng(l) : Wt(0);
    let B = (s.left + f.x) / u.x,
      g = (s.top + f.y) / u.y,
      w = s.width / u.x,
      h = s.height / u.y;
    if (l) {
      const v = He(l),
        U = o && je(o) ? He(o) : o;
      let Q = v,
        m = Xl(Q);
      for (; m && o && U !== Q; ) {
        const F = rn(m),
          E = m.getBoundingClientRect(),
          I = Xe(m),
          R = E.left + (m.clientLeft + parseFloat(I.paddingLeft)) * F.x,
          T = E.top + (m.clientTop + parseFloat(I.paddingTop)) * F.y;
        (B *= F.x),
          (g *= F.y),
          (w *= F.x),
          (h *= F.y),
          (B += R),
          (g += T),
          (Q = He(m)),
          (m = Xl(Q));
      }
    }
    return qi({ width: w, height: h, x: B, y: g });
  }
  function cE(e) {
    let { elements: r, rect: n, offsetParent: o, strategy: s } = e;
    const l = s === "fixed",
      u = Qt(o),
      f = r ? As(r.floating) : !1;
    if (o === u || (f && l)) return n;
    let B = { scrollLeft: 0, scrollTop: 0 },
      g = Wt(1);
    const w = Wt(0),
      h = st(o);
    if (
      (h || (!h && !l)) &&
      ((en(o) !== "body" || lo(u)) && (B = es(o)), st(o))
    ) {
      const v = Qr(o);
      (g = rn(o)), (w.x = v.x + o.clientLeft), (w.y = v.y + o.clientTop);
    }
    return {
      width: n.width * g.x,
      height: n.height * g.y,
      x: n.x * g.x - B.scrollLeft * g.x + w.x,
      y: n.y * g.y - B.scrollTop * g.y + w.y,
    };
  }
  function uE(e) {
    return Array.from(e.getClientRects());
  }
  function og(e) {
    return Qr(Qt(e)).left + es(e).scrollLeft;
  }
  function fE(e) {
    const r = Qt(e),
      n = es(e),
      o = e.ownerDocument.body,
      s = Ie(r.scrollWidth, r.clientWidth, o.scrollWidth, o.clientWidth),
      l = Ie(r.scrollHeight, r.clientHeight, o.scrollHeight, o.clientHeight);
    let u = -n.scrollLeft + og(e);
    const f = -n.scrollTop;
    return (
      Xe(o).direction === "rtl" && (u += Ie(r.clientWidth, o.clientWidth) - s),
      { width: s, height: l, x: u, y: f }
    );
  }
  function dE(e, r) {
    const n = He(e),
      o = Qt(e),
      s = n.visualViewport;
    let l = o.clientWidth,
      u = o.clientHeight,
      f = 0,
      B = 0;
    if (s) {
      (l = s.width), (u = s.height);
      const g = jl();
      (!g || (g && r === "fixed")) && ((f = s.offsetLeft), (B = s.offsetTop));
    }
    return { width: l, height: u, x: f, y: B };
  }
  function BE(e, r) {
    const n = Qr(e, !0, r === "fixed"),
      o = n.top + e.clientTop,
      s = n.left + e.clientLeft,
      l = st(e) ? rn(e) : Wt(1),
      u = e.clientWidth * l.x,
      f = e.clientHeight * l.y,
      B = s * l.x,
      g = o * l.y;
    return { width: u, height: f, x: B, y: g };
  }
  function ig(e, r, n) {
    let o;
    if (r === "viewport") o = dE(e, n);
    else if (r === "document") o = fE(Qt(e));
    else if (je(r)) o = BE(r, n);
    else {
      const s = ng(e);
      o = { ...r, x: r.x - s.x, y: r.y - s.y };
    }
    return qi(o);
  }
  function sg(e, r) {
    const n = Xt(e);
    return n === r || !je(n) || tn(n)
      ? !1
      : Xe(n).position === "fixed" || sg(n, r);
  }
  function gE(e, r) {
    const n = r.get(e);
    if (n) return n;
    let o = co(e, [], !1).filter((f) => je(f) && en(f) !== "body"),
      s = null;
    const l = Xe(e).position === "fixed";
    let u = l ? Xt(e) : e;
    for (; je(u) && !tn(u); ) {
      const f = Xe(u),
        B = Wl(u);
      !B && f.position === "fixed" && (s = null),
        (
          l
            ? !B && !s
            : (!B &&
                f.position === "static" &&
                !!s &&
                ["absolute", "fixed"].includes(s.position)) ||
              (lo(u) && !B && sg(e, u))
        )
          ? (o = o.filter((w) => w !== u))
          : (s = f),
        (u = Xt(u));
    }
    return r.set(e, o), o;
  }
  function pE(e) {
    let { element: r, boundary: n, rootBoundary: o, strategy: s } = e;
    const u = [
        ...(n === "clippingAncestors"
          ? As(r)
            ? []
            : gE(r, this._c)
          : [].concat(n)),
        o,
      ],
      f = u[0],
      B = u.reduce(
        (g, w) => {
          const h = ig(r, w, s);
          return (
            (g.top = Ie(h.top, g.top)),
            (g.right = it(h.right, g.right)),
            (g.bottom = it(h.bottom, g.bottom)),
            (g.left = Ie(h.left, g.left)),
            g
          );
        },
        ig(r, f, s),
      );
    return {
      width: B.right - B.left,
      height: B.bottom - B.top,
      x: B.left,
      y: B.top,
    };
  }
  function wE(e) {
    const { width: r, height: n } = rg(e);
    return { width: r, height: n };
  }
  function hE(e, r, n) {
    const o = st(r),
      s = Qt(r),
      l = n === "fixed",
      u = Qr(e, !0, l, r);
    let f = { scrollLeft: 0, scrollTop: 0 };
    const B = Wt(0);
    if (o || (!o && !l))
      if (((en(r) !== "body" || lo(s)) && (f = es(r)), o)) {
        const h = Qr(r, !0, l, r);
        (B.x = h.x + r.clientLeft), (B.y = h.y + r.clientTop);
      } else s && (B.x = og(s));
    const g = u.left + f.scrollLeft - B.x,
      w = u.top + f.scrollTop - B.y;
    return { x: g, y: w, width: u.width, height: u.height };
  }
  function Jl(e) {
    return Xe(e).position === "static";
  }
  function ag(e, r) {
    return !st(e) || Xe(e).position === "fixed"
      ? null
      : r
        ? r(e)
        : e.offsetParent;
  }
  function lg(e, r) {
    const n = He(e);
    if (As(e)) return n;
    if (!st(e)) {
      let s = Xt(e);
      for (; s && !tn(s); ) {
        if (je(s) && !Jl(s)) return s;
        s = Xt(s);
      }
      return n;
    }
    let o = ag(e, r);
    for (; o && iE(o) && Jl(o); ) o = ag(o, r);
    return o && tn(o) && Jl(o) && !Wl(o) ? n : o || sE(e) || n;
  }
  const vE = async function (e) {
    const r = this.getOffsetParent || lg,
      n = this.getDimensions,
      o = await n(e.floating);
    return {
      reference: hE(e.reference, await r(e.floating), e.strategy),
      floating: { x: 0, y: 0, width: o.width, height: o.height },
    };
  };
  function mE(e) {
    return Xe(e).direction === "rtl";
  }
  const CE = {
    convertOffsetParentRelativeRectToViewportRelativeRect: cE,
    getDocumentElement: Qt,
    getClippingRect: pE,
    getOffsetParent: lg,
    getElementRects: vE,
    getClientRects: uE,
    getDimensions: wE,
    getScale: rn,
    isElement: je,
    isRTL: mE,
  };
  function QE(e, r) {
    let n = null,
      o;
    const s = Qt(e);
    function l() {
      var f;
      clearTimeout(o), (f = n) == null || f.disconnect(), (n = null);
    }
    function u(f, B) {
      f === void 0 && (f = !1), B === void 0 && (B = 1), l();
      const {
        left: g,
        top: w,
        width: h,
        height: v,
      } = e.getBoundingClientRect();
      if ((f || r(), !h || !v)) return;
      const U = Zi(w),
        Q = Zi(s.clientWidth - (g + h)),
        m = Zi(s.clientHeight - (w + v)),
        F = Zi(g),
        I = {
          rootMargin: -U + "px " + -Q + "px " + -m + "px " + -F + "px",
          threshold: Ie(0, it(1, B)) || 1,
        };
      let R = !0;
      function T(k) {
        const O = k[0].intersectionRatio;
        if (O !== B) {
          if (!R) return u();
          O
            ? u(!1, O)
            : (o = setTimeout(() => {
                u(!1, 1e-7);
              }, 1e3));
        }
        R = !1;
      }
      try {
        n = new IntersectionObserver(T, { ...I, root: s.ownerDocument });
      } catch {
        n = new IntersectionObserver(T, I);
      }
      n.observe(e);
    }
    return u(!0), l;
  }
  function yE(e, r, n, o) {
    o === void 0 && (o = {});
    const {
        ancestorScroll: s = !0,
        ancestorResize: l = !0,
        elementResize: u = typeof ResizeObserver == "function",
        layoutShift: f = typeof IntersectionObserver == "function",
        animationFrame: B = !1,
      } = o,
      g = zl(e),
      w = s || l ? [...(g ? co(g) : []), ...co(r)] : [];
    w.forEach((E) => {
      s && E.addEventListener("scroll", n, { passive: !0 }),
        l && E.addEventListener("resize", n);
    });
    const h = g && f ? QE(g, n) : null;
    let v = -1,
      U = null;
    u &&
      ((U = new ResizeObserver((E) => {
        let [I] = E;
        I &&
          I.target === g &&
          U &&
          (U.unobserve(r),
          cancelAnimationFrame(v),
          (v = requestAnimationFrame(() => {
            var R;
            (R = U) == null || R.observe(r);
          }))),
          n();
      })),
      g && !B && U.observe(g),
      U.observe(r));
    let Q,
      m = B ? Qr(e) : null;
    B && F();
    function F() {
      const E = Qr(e);
      m &&
        (E.x !== m.x ||
          E.y !== m.y ||
          E.width !== m.width ||
          E.height !== m.height) &&
        n(),
        (m = E),
        (Q = requestAnimationFrame(F));
    }
    return (
      n(),
      () => {
        var E;
        w.forEach((I) => {
          s && I.removeEventListener("scroll", n),
            l && I.removeEventListener("resize", n);
        }),
          h?.(),
          (E = U) == null || E.disconnect(),
          (U = null),
          B && cancelAnimationFrame(Q);
      }
    );
  }
  const UE = tE,
    FE = rE,
    EE = qF,
    xE = oE,
    IE = AE,
    cg = $F,
    HE = nE,
    SE = (e, r, n) => {
      const o = new Map(),
        s = { platform: CE, ...n },
        l = { ...s.platform, _c: o };
      return ZF(e, r, { ...s, platform: l });
    };
  var ts = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
  function rs(e, r) {
    if (e === r) return !0;
    if (typeof e != typeof r) return !1;
    if (typeof e == "function" && e.toString() === r.toString()) return !0;
    let n, o, s;
    if (e && r && typeof e == "object") {
      if (Array.isArray(e)) {
        if (((n = e.length), n !== r.length)) return !1;
        for (o = n; o-- !== 0; ) if (!rs(e[o], r[o])) return !1;
        return !0;
      }
      if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(r).length))
        return !1;
      for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(r, s[o])) return !1;
      for (o = n; o-- !== 0; ) {
        const l = s[o];
        if (!(l === "_owner" && e.$$typeof) && !rs(e[l], r[l])) return !1;
      }
      return !0;
    }
    return e !== e && r !== r;
  }
  function ug(e) {
    return typeof window > "u"
      ? 1
      : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function fg(e, r) {
    const n = ug(e);
    return Math.round(r * n) / n;
  }
  function dg(e) {
    const r = C.useRef(e);
    return (
      ts(() => {
        r.current = e;
      }),
      r
    );
  }
  function bE(e) {
    e === void 0 && (e = {});
    const {
        placement: r = "bottom",
        strategy: n = "absolute",
        middleware: o = [],
        platform: s,
        elements: { reference: l, floating: u } = {},
        transform: f = !0,
        whileElementsMounted: B,
        open: g,
      } = e,
      [w, h] = C.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: r,
        middlewareData: {},
        isPositioned: !1,
      }),
      [v, U] = C.useState(o);
    rs(v, o) || U(o);
    const [Q, m] = C.useState(null),
      [F, E] = C.useState(null),
      I = C.useCallback((Y) => {
        Y !== O.current && ((O.current = Y), m(Y));
      }, []),
      R = C.useCallback((Y) => {
        Y !== P.current && ((P.current = Y), E(Y));
      }, []),
      T = l || Q,
      k = u || F,
      O = C.useRef(null),
      P = C.useRef(null),
      j = C.useRef(w),
      X = B != null,
      sA = dg(B),
      dA = dg(s),
      q = C.useCallback(() => {
        if (!O.current || !P.current) return;
        const Y = { placement: r, strategy: n, middleware: v };
        dA.current && (Y.platform = dA.current),
          SE(O.current, P.current, Y).then((N) => {
            const G = { ...N, isPositioned: !0 };
            tA.current &&
              !rs(j.current, G) &&
              ((j.current = G),
              gr.flushSync(() => {
                h(G);
              }));
          });
      }, [v, r, n, dA]);
    ts(() => {
      g === !1 &&
        j.current.isPositioned &&
        ((j.current.isPositioned = !1), h((Y) => ({ ...Y, isPositioned: !1 })));
    }, [g]);
    const tA = C.useRef(!1);
    ts(
      () => (
        (tA.current = !0),
        () => {
          tA.current = !1;
        }
      ),
      [],
    ),
      ts(() => {
        if ((T && (O.current = T), k && (P.current = k), T && k)) {
          if (sA.current) return sA.current(T, k, q);
          q();
        }
      }, [T, k, q, sA, X]);
    const oA = C.useMemo(
        () => ({ reference: O, floating: P, setReference: I, setFloating: R }),
        [I, R],
      ),
      J = C.useMemo(() => ({ reference: T, floating: k }), [T, k]),
      AA = C.useMemo(() => {
        const Y = { position: n, left: 0, top: 0 };
        if (!J.floating) return Y;
        const N = fg(J.floating, w.x),
          G = fg(J.floating, w.y);
        return f
          ? {
              ...Y,
              transform: "translate(" + N + "px, " + G + "px)",
              ...(ug(J.floating) >= 1.5 && { willChange: "transform" }),
            }
          : { position: n, left: N, top: G };
      }, [n, f, J.floating, w.x, w.y]);
    return C.useMemo(
      () => ({ ...w, update: q, refs: oA, elements: J, floatingStyles: AA }),
      [w, q, oA, J, AA],
    );
  }
  const LE = (e) => {
      function r(n) {
        return {}.hasOwnProperty.call(n, "current");
      }
      return {
        name: "arrow",
        options: e,
        fn(n) {
          const { element: o, padding: s } = typeof e == "function" ? e(n) : e;
          return o && r(o)
            ? o.current != null
              ? cg({ element: o.current, padding: s }).fn(n)
              : {}
            : o
              ? cg({ element: o, padding: s }).fn(n)
              : {};
        },
      };
    },
    TE = (e, r) => ({ ...UE(e), options: [e, r] }),
    DE = (e, r) => ({ ...FE(e), options: [e, r] }),
    KE = (e, r) => ({ ...HE(e), options: [e, r] }),
    kE = (e, r) => ({ ...EE(e), options: [e, r] }),
    RE = (e, r) => ({ ...xE(e), options: [e, r] }),
    OE = (e, r) => ({ ...IE(e), options: [e, r] }),
    NE = (e, r) => ({ ...LE(e), options: [e, r] });
  var ME = "Arrow",
    Bg = C.forwardRef((e, r) => {
      const { children: n, width: o = 10, height: s = 5, ...l } = e;
      return b.jsx(LA.svg, {
        ...l,
        ref: r,
        width: o,
        height: s,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild
          ? n
          : b.jsx("polygon", { points: "0,0 30,0 15,10" }),
      });
    });
  Bg.displayName = ME;
  var PE = Bg;
  function _E(e) {
    const [r, n] = C.useState(void 0);
    return (
      we(() => {
        if (e) {
          n({ width: e.offsetWidth, height: e.offsetHeight });
          const o = new ResizeObserver((s) => {
            if (!Array.isArray(s) || !s.length) return;
            const l = s[0];
            let u, f;
            if ("borderBoxSize" in l) {
              const B = l.borderBoxSize,
                g = Array.isArray(B) ? B[0] : B;
              (u = g.inlineSize), (f = g.blockSize);
            } else (u = e.offsetWidth), (f = e.offsetHeight);
            n({ width: u, height: f });
          });
          return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
        } else n(void 0);
      }, [e]),
      r
    );
  }
  var Yl = "Popper",
    [gg, pg] = Ji(Yl),
    [VE, wg] = gg(Yl),
    hg = (e) => {
      const { __scopePopper: r, children: n } = e,
        [o, s] = C.useState(null);
      return b.jsx(VE, { scope: r, anchor: o, onAnchorChange: s, children: n });
    };
  hg.displayName = Yl;
  var vg = "PopperAnchor",
    mg = C.forwardRef((e, r) => {
      const { __scopePopper: n, virtualRef: o, ...s } = e,
        l = wg(vg, n),
        u = C.useRef(null),
        f = jA(r, u);
      return (
        C.useEffect(() => {
          l.onAnchorChange(o?.current || u.current);
        }),
        o ? null : b.jsx(LA.div, { ...s, ref: f })
      );
    });
  mg.displayName = vg;
  var Zl = "PopperContent",
    [GE, WE] = gg(Zl),
    Cg = C.forwardRef((e, r) => {
      const {
          __scopePopper: n,
          side: o = "bottom",
          sideOffset: s = 0,
          align: l = "center",
          alignOffset: u = 0,
          arrowPadding: f = 0,
          avoidCollisions: B = !0,
          collisionBoundary: g = [],
          collisionPadding: w = 0,
          sticky: h = "partial",
          hideWhenDetached: v = !1,
          updatePositionStrategy: U = "optimized",
          onPlaced: Q,
          ...m
        } = e,
        F = wg(Zl, n),
        [E, I] = C.useState(null),
        R = jA(r, ($) => I($)),
        [T, k] = C.useState(null),
        O = _E(T),
        P = O?.width ?? 0,
        j = O?.height ?? 0,
        X = o + (l !== "center" ? "-" + l : ""),
        sA =
          typeof w == "number"
            ? w
            : { top: 0, right: 0, bottom: 0, left: 0, ...w },
        dA = Array.isArray(g) ? g : [g],
        q = dA.length > 0,
        tA = { padding: sA, boundary: dA.filter(XE), altBoundary: q },
        {
          refs: oA,
          floatingStyles: J,
          placement: AA,
          isPositioned: Y,
          middlewareData: N,
        } = bE({
          strategy: "fixed",
          placement: X,
          whileElementsMounted: (...$) =>
            yE(...$, { animationFrame: U === "always" }),
          elements: { reference: F.anchor },
          middleware: [
            TE({ mainAxis: s + j, alignmentAxis: u }),
            B &&
              DE({
                mainAxis: !0,
                crossAxis: !1,
                limiter: h === "partial" ? KE() : void 0,
                ...tA,
              }),
            B && kE({ ...tA }),
            RE({
              ...tA,
              apply: ({
                elements: $,
                rects: BA,
                availableWidth: CA,
                availableHeight: QA,
              }) => {
                const { width: IA, height: MA } = BA.reference,
                  se = $.floating.style;
                se.setProperty("--radix-popper-available-width", `${CA}px`),
                  se.setProperty("--radix-popper-available-height", `${QA}px`),
                  se.setProperty("--radix-popper-anchor-width", `${IA}px`),
                  se.setProperty("--radix-popper-anchor-height", `${MA}px`);
              },
            }),
            T && NE({ element: T, padding: f }),
            zE({ arrowWidth: P, arrowHeight: j }),
            v && OE({ strategy: "referenceHidden", ...tA }),
          ],
        }),
        [G, Z] = Ug(AA),
        H = vt(Q);
      we(() => {
        Y && H?.();
      }, [Y, H]);
      const M = N.arrow?.x,
        uA = N.arrow?.y,
        fA = N.arrow?.centerOffset !== 0,
        [wA, hA] = C.useState();
      return (
        we(() => {
          E && hA(window.getComputedStyle(E).zIndex);
        }, [E]),
        b.jsx("div", {
          ref: oA.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...J,
            transform: Y ? J.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: wA,
            "--radix-popper-transform-origin": [
              N.transformOrigin?.x,
              N.transformOrigin?.y,
            ].join(" "),
            ...(N.hide?.referenceHidden && {
              visibility: "hidden",
              pointerEvents: "none",
            }),
          },
          dir: e.dir,
          children: b.jsx(GE, {
            scope: n,
            placedSide: G,
            onArrowChange: k,
            arrowX: M,
            arrowY: uA,
            shouldHideArrow: fA,
            children: b.jsx(LA.div, {
              "data-side": G,
              "data-align": Z,
              ...m,
              ref: R,
              style: { ...m.style, animation: Y ? void 0 : "none" },
            }),
          }),
        })
      );
    });
  Cg.displayName = Zl;
  var Qg = "PopperArrow",
    jE = { top: "bottom", right: "left", bottom: "top", left: "right" },
    yg = C.forwardRef(function (r, n) {
      const { __scopePopper: o, ...s } = r,
        l = WE(Qg, o),
        u = jE[l.placedSide];
      return b.jsx("span", {
        ref: l.onArrowChange,
        style: {
          position: "absolute",
          left: l.arrowX,
          top: l.arrowY,
          [u]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0",
          }[l.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)",
          }[l.placedSide],
          visibility: l.shouldHideArrow ? "hidden" : void 0,
        },
        children: b.jsx(PE, {
          ...s,
          ref: n,
          style: { ...s.style, display: "block" },
        }),
      });
    });
  yg.displayName = Qg;
  function XE(e) {
    return e !== null;
  }
  var zE = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(r) {
      const { placement: n, rects: o, middlewareData: s } = r,
        u = s.arrow?.centerOffset !== 0,
        f = u ? 0 : e.arrowWidth,
        B = u ? 0 : e.arrowHeight,
        [g, w] = Ug(n),
        h = { start: "0%", center: "50%", end: "100%" }[w],
        v = (s.arrow?.x ?? 0) + f / 2,
        U = (s.arrow?.y ?? 0) + B / 2;
      let Q = "",
        m = "";
      return (
        g === "bottom"
          ? ((Q = u ? h : `${v}px`), (m = `${-B}px`))
          : g === "top"
            ? ((Q = u ? h : `${v}px`), (m = `${o.floating.height + B}px`))
            : g === "right"
              ? ((Q = `${-B}px`), (m = u ? h : `${U}px`))
              : g === "left" &&
                ((Q = `${o.floating.width + B}px`), (m = u ? h : `${U}px`)),
        { data: { x: Q, y: m } }
      );
    },
  });
  function Ug(e) {
    const [r, n = "center"] = e.split("-");
    return [r, n];
  }
  var JE = hg,
    YE = mg,
    ZE = Cg,
    $E = yg,
    qE = "Portal",
    $l = C.forwardRef((e, r) => {
      const { container: n, ...o } = e,
        [s, l] = C.useState(!1);
      we(() => l(!0), []);
      const u = n || (s && globalThis?.document?.body);
      return u ? J0.createPortal(b.jsx(LA.div, { ...o, ref: r }), u) : null;
    });
  $l.displayName = qE;
  function ql({ prop: e, defaultProp: r, onChange: n = () => {} }) {
    const [o, s] = A1({ defaultProp: r, onChange: n }),
      l = e !== void 0,
      u = l ? e : o,
      f = vt(n),
      B = C.useCallback(
        (g) => {
          if (l) {
            const h = typeof g == "function" ? g(e) : g;
            h !== e && f(h);
          } else s(g);
        },
        [l, e, s, f],
      );
    return [u, B];
  }
  function A1({ defaultProp: e, onChange: r }) {
    const n = C.useState(e),
      [o] = n,
      s = C.useRef(o),
      l = vt(r);
    return (
      C.useEffect(() => {
        s.current !== o && (l(o), (s.current = o));
      }, [o, s, l]),
      n
    );
  }
  function e1(e) {
    const r = C.useRef({ value: e, previous: e });
    return C.useMemo(
      () => (
        r.current.value !== e &&
          ((r.current.previous = r.current.value), (r.current.value = e)),
        r.current.previous
      ),
      [e],
    );
  }
  var t1 = "VisuallyHidden",
    Fg = C.forwardRef((e, r) =>
      b.jsx(LA.span, {
        ...e,
        ref: r,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style,
        },
      }),
    );
  Fg.displayName = t1;
  var r1 = function (e) {
      if (typeof document > "u") return null;
      var r = Array.isArray(e) ? e[0] : e;
      return r.ownerDocument.body;
    },
    nn = new WeakMap(),
    ns = new WeakMap(),
    os = {},
    Ac = 0,
    Eg = function (e) {
      return e && (e.host || Eg(e.parentNode));
    },
    n1 = function (e, r) {
      return r
        .map(function (n) {
          if (e.contains(n)) return n;
          var o = Eg(n);
          return o && e.contains(o)
            ? o
            : (console.error(
                "aria-hidden",
                n,
                "in not contained inside",
                e,
                ". Doing nothing",
              ),
              null);
        })
        .filter(function (n) {
          return !!n;
        });
    },
    o1 = function (e, r, n, o) {
      var s = n1(r, Array.isArray(e) ? e : [e]);
      os[n] || (os[n] = new WeakMap());
      var l = os[n],
        u = [],
        f = new Set(),
        B = new Set(s),
        g = function (h) {
          !h || f.has(h) || (f.add(h), g(h.parentNode));
        };
      s.forEach(g);
      var w = function (h) {
        !h ||
          B.has(h) ||
          Array.prototype.forEach.call(h.children, function (v) {
            if (f.has(v)) w(v);
            else
              try {
                var U = v.getAttribute(o),
                  Q = U !== null && U !== "false",
                  m = (nn.get(v) || 0) + 1,
                  F = (l.get(v) || 0) + 1;
                nn.set(v, m),
                  l.set(v, F),
                  u.push(v),
                  m === 1 && Q && ns.set(v, !0),
                  F === 1 && v.setAttribute(n, "true"),
                  Q || v.setAttribute(o, "true");
              } catch (E) {
                console.error("aria-hidden: cannot operate on ", v, E);
              }
          });
      };
      return (
        w(r),
        f.clear(),
        Ac++,
        function () {
          u.forEach(function (h) {
            var v = nn.get(h) - 1,
              U = l.get(h) - 1;
            nn.set(h, v),
              l.set(h, U),
              v || (ns.has(h) || h.removeAttribute(o), ns.delete(h)),
              U || h.removeAttribute(n);
          }),
            Ac--,
            Ac ||
              ((nn = new WeakMap()),
              (nn = new WeakMap()),
              (ns = new WeakMap()),
              (os = {}));
        }
      );
    },
    xg = function (e, r, n) {
      n === void 0 && (n = "data-aria-hidden");
      var o = Array.from(Array.isArray(e) ? e : [e]),
        s = r1(e);
      return s
        ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))),
          o1(o, s, n, "aria-hidden"))
        : function () {
            return null;
          };
    },
    at = function () {
      return (
        (at =
          Object.assign ||
          function (r) {
            for (var n, o = 1, s = arguments.length; o < s; o++) {
              n = arguments[o];
              for (var l in n)
                Object.prototype.hasOwnProperty.call(n, l) && (r[l] = n[l]);
            }
            return r;
          }),
        at.apply(this, arguments)
      );
    };
  function Ig(e, r) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        r.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
        r.indexOf(o[s]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[s]) &&
          (n[o[s]] = e[o[s]]);
    return n;
  }
  function i1(e, r, n) {
    if (n || arguments.length === 2)
      for (var o = 0, s = r.length, l; o < s; o++)
        (l || !(o in r)) &&
          (l || (l = Array.prototype.slice.call(r, 0, o)), (l[o] = r[o]));
    return e.concat(l || Array.prototype.slice.call(r));
  }
  typeof SuppressedError == "function" && SuppressedError;
  var is = "right-scroll-bar-position",
    ss = "width-before-scroll-bar",
    s1 = "with-scroll-bars-hidden",
    a1 = "--removed-body-scroll-bar-size";
  function ec(e, r) {
    return typeof e == "function" ? e(r) : e && (e.current = r), e;
  }
  function l1(e, r) {
    var n = C.useState(function () {
      return {
        value: e,
        callback: r,
        facade: {
          get current() {
            return n.value;
          },
          set current(o) {
            var s = n.value;
            s !== o && ((n.value = o), n.callback(o, s));
          },
        },
      };
    })[0];
    return (n.callback = r), n.facade;
  }
  var c1 = typeof window < "u" ? C.useLayoutEffect : C.useEffect,
    Hg = new WeakMap();
  function u1(e, r) {
    var n = l1(null, function (o) {
      return e.forEach(function (s) {
        return ec(s, o);
      });
    });
    return (
      c1(
        function () {
          var o = Hg.get(n);
          if (o) {
            var s = new Set(o),
              l = new Set(e),
              u = n.current;
            s.forEach(function (f) {
              l.has(f) || ec(f, null);
            }),
              l.forEach(function (f) {
                s.has(f) || ec(f, u);
              });
          }
          Hg.set(n, e);
        },
        [e],
      ),
      n
    );
  }
  function f1(e) {
    return e;
  }
  function d1(e, r) {
    r === void 0 && (r = f1);
    var n = [],
      o = !1,
      s = {
        read: function () {
          if (o)
            throw new Error(
              "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
            );
          return n.length ? n[n.length - 1] : e;
        },
        useMedium: function (l) {
          var u = r(l, o);
          return (
            n.push(u),
            function () {
              n = n.filter(function (f) {
                return f !== u;
              });
            }
          );
        },
        assignSyncMedium: function (l) {
          for (o = !0; n.length; ) {
            var u = n;
            (n = []), u.forEach(l);
          }
          n = {
            push: function (f) {
              return l(f);
            },
            filter: function () {
              return n;
            },
          };
        },
        assignMedium: function (l) {
          o = !0;
          var u = [];
          if (n.length) {
            var f = n;
            (n = []), f.forEach(l), (u = n);
          }
          var B = function () {
              var w = u;
              (u = []), w.forEach(l);
            },
            g = function () {
              return Promise.resolve().then(B);
            };
          g(),
            (n = {
              push: function (w) {
                u.push(w), g();
              },
              filter: function (w) {
                return (u = u.filter(w)), n;
              },
            });
        },
      };
    return s;
  }
  function B1(e) {
    e === void 0 && (e = {});
    var r = d1(null);
    return (r.options = at({ async: !0, ssr: !1 }, e)), r;
  }
  var Sg = function (e) {
    var r = e.sideCar,
      n = Ig(e, ["sideCar"]);
    if (!r)
      throw new Error(
        "Sidecar: please provide `sideCar` property to import the right car",
      );
    var o = r.read();
    if (!o) throw new Error("Sidecar medium not found");
    return C.createElement(o, at({}, n));
  };
  Sg.isSideCarExport = !0;
  function g1(e, r) {
    return e.useMedium(r), Sg;
  }
  var bg = B1(),
    tc = function () {},
    as = C.forwardRef(function (e, r) {
      var n = C.useRef(null),
        o = C.useState({
          onScrollCapture: tc,
          onWheelCapture: tc,
          onTouchMoveCapture: tc,
        }),
        s = o[0],
        l = o[1],
        u = e.forwardProps,
        f = e.children,
        B = e.className,
        g = e.removeScrollBar,
        w = e.enabled,
        h = e.shards,
        v = e.sideCar,
        U = e.noIsolation,
        Q = e.inert,
        m = e.allowPinchZoom,
        F = e.as,
        E = F === void 0 ? "div" : F,
        I = e.gapMode,
        R = Ig(e, [
          "forwardProps",
          "children",
          "className",
          "removeScrollBar",
          "enabled",
          "shards",
          "sideCar",
          "noIsolation",
          "inert",
          "allowPinchZoom",
          "as",
          "gapMode",
        ]),
        T = v,
        k = u1([n, r]),
        O = at(at({}, R), s);
      return C.createElement(
        C.Fragment,
        null,
        w &&
          C.createElement(T, {
            sideCar: bg,
            removeScrollBar: g,
            shards: h,
            noIsolation: U,
            inert: Q,
            setCallbacks: l,
            allowPinchZoom: !!m,
            lockRef: n,
            gapMode: I,
          }),
        u
          ? C.cloneElement(C.Children.only(f), at(at({}, O), { ref: k }))
          : C.createElement(E, at({}, O, { className: B, ref: k }), f),
      );
    });
  (as.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
    (as.classNames = { fullWidth: ss, zeroRight: is });
  var p1 = function () {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
  function w1() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var r = p1();
    return r && e.setAttribute("nonce", r), e;
  }
  function h1(e, r) {
    e.styleSheet
      ? (e.styleSheet.cssText = r)
      : e.appendChild(document.createTextNode(r));
  }
  function v1(e) {
    var r = document.head || document.getElementsByTagName("head")[0];
    r.appendChild(e);
  }
  var m1 = function () {
      var e = 0,
        r = null;
      return {
        add: function (n) {
          e == 0 && (r = w1()) && (h1(r, n), v1(r)), e++;
        },
        remove: function () {
          e--,
            !e &&
              r &&
              (r.parentNode && r.parentNode.removeChild(r), (r = null));
        },
      };
    },
    C1 = function () {
      var e = m1();
      return function (r, n) {
        C.useEffect(
          function () {
            return (
              e.add(r),
              function () {
                e.remove();
              }
            );
          },
          [r && n],
        );
      };
    },
    Lg = function () {
      var e = C1(),
        r = function (n) {
          var o = n.styles,
            s = n.dynamic;
          return e(o, s), null;
        };
      return r;
    },
    Q1 = { left: 0, top: 0, right: 0, gap: 0 },
    rc = function (e) {
      return parseInt(e || "", 10) || 0;
    },
    y1 = function (e) {
      var r = window.getComputedStyle(document.body),
        n = r[e === "padding" ? "paddingLeft" : "marginLeft"],
        o = r[e === "padding" ? "paddingTop" : "marginTop"],
        s = r[e === "padding" ? "paddingRight" : "marginRight"];
      return [rc(n), rc(o), rc(s)];
    },
    U1 = function (e) {
      if ((e === void 0 && (e = "margin"), typeof window > "u")) return Q1;
      var r = y1(e),
        n = document.documentElement.clientWidth,
        o = window.innerWidth;
      return {
        left: r[0],
        top: r[1],
        right: r[2],
        gap: Math.max(0, o - n + r[2] - r[0]),
      };
    },
    F1 = Lg(),
    on = "data-scroll-locked",
    E1 = function (e, r, n, o) {
      var s = e.left,
        l = e.top,
        u = e.right,
        f = e.gap;
      return (
        n === void 0 && (n = "margin"),
        `
  .`
          .concat(
            s1,
            ` {
   overflow: hidden `,
          )
          .concat(
            o,
            `;
   padding-right: `,
          )
          .concat(f, "px ")
          .concat(
            o,
            `;
  }
  body[`,
          )
          .concat(
            on,
            `] {
    overflow: hidden `,
          )
          .concat(
            o,
            `;
    overscroll-behavior: contain;
    `,
          )
          .concat(
            [
              r && "position: relative ".concat(o, ";"),
              n === "margin" &&
                `
    padding-left: `
                  .concat(
                    s,
                    `px;
    padding-top: `,
                  )
                  .concat(
                    l,
                    `px;
    padding-right: `,
                  )
                  .concat(
                    u,
                    `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                  )
                  .concat(f, "px ")
                  .concat(
                    o,
                    `;
    `,
                  ),
              n === "padding" &&
                "padding-right: ".concat(f, "px ").concat(o, ";"),
            ]
              .filter(Boolean)
              .join(""),
            `
  }
  
  .`,
          )
          .concat(
            is,
            ` {
    right: `,
          )
          .concat(f, "px ")
          .concat(
            o,
            `;
  }
  
  .`,
          )
          .concat(
            ss,
            ` {
    margin-right: `,
          )
          .concat(f, "px ")
          .concat(
            o,
            `;
  }
  
  .`,
          )
          .concat(is, " .")
          .concat(
            is,
            ` {
    right: 0 `,
          )
          .concat(
            o,
            `;
  }
  
  .`,
          )
          .concat(ss, " .")
          .concat(
            ss,
            ` {
    margin-right: 0 `,
          )
          .concat(
            o,
            `;
  }
  
  body[`,
          )
          .concat(
            on,
            `] {
    `,
          )
          .concat(a1, ": ")
          .concat(
            f,
            `px;
  }
`,
          )
      );
    },
    Tg = function () {
      var e = parseInt(document.body.getAttribute(on) || "0", 10);
      return isFinite(e) ? e : 0;
    },
    x1 = function () {
      C.useEffect(function () {
        return (
          document.body.setAttribute(on, (Tg() + 1).toString()),
          function () {
            var e = Tg() - 1;
            e <= 0
              ? document.body.removeAttribute(on)
              : document.body.setAttribute(on, e.toString());
          }
        );
      }, []);
    },
    I1 = function (e) {
      var r = e.noRelative,
        n = e.noImportant,
        o = e.gapMode,
        s = o === void 0 ? "margin" : o;
      x1();
      var l = C.useMemo(
        function () {
          return U1(s);
        },
        [s],
      );
      return C.createElement(F1, {
        styles: E1(l, !r, s, n ? "" : "!important"),
      });
    },
    nc = !1;
  if (typeof window < "u")
    try {
      var ls = Object.defineProperty({}, "passive", {
        get: function () {
          return (nc = !0), !0;
        },
      });
      window.addEventListener("test", ls, ls),
        window.removeEventListener("test", ls, ls);
    } catch {
      nc = !1;
    }
  var sn = nc ? { passive: !1 } : !1,
    H1 = function (e) {
      return e.tagName === "TEXTAREA";
    },
    Dg = function (e, r) {
      var n = window.getComputedStyle(e);
      return (
        n[r] !== "hidden" &&
        !(n.overflowY === n.overflowX && !H1(e) && n[r] === "visible")
      );
    },
    S1 = function (e) {
      return Dg(e, "overflowY");
    },
    b1 = function (e) {
      return Dg(e, "overflowX");
    },
    Kg = function (e, r) {
      var n = r.ownerDocument,
        o = r;
      do {
        typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
        var s = kg(e, o);
        if (s) {
          var l = Rg(e, o),
            u = l[1],
            f = l[2];
          if (u > f) return !0;
        }
        o = o.parentNode;
      } while (o && o !== n.body);
      return !1;
    },
    L1 = function (e) {
      var r = e.scrollTop,
        n = e.scrollHeight,
        o = e.clientHeight;
      return [r, n, o];
    },
    T1 = function (e) {
      var r = e.scrollLeft,
        n = e.scrollWidth,
        o = e.clientWidth;
      return [r, n, o];
    },
    kg = function (e, r) {
      return e === "v" ? S1(r) : b1(r);
    },
    Rg = function (e, r) {
      return e === "v" ? L1(r) : T1(r);
    },
    D1 = function (e, r) {
      return e === "h" && r === "rtl" ? -1 : 1;
    },
    K1 = function (e, r, n, o, s) {
      var l = D1(e, window.getComputedStyle(r).direction),
        u = l * o,
        f = n.target,
        B = r.contains(f),
        g = !1,
        w = u > 0,
        h = 0,
        v = 0;
      do {
        var U = Rg(e, f),
          Q = U[0],
          m = U[1],
          F = U[2],
          E = m - F - l * Q;
        (Q || E) && kg(e, f) && ((h += E), (v += Q)),
          f instanceof ShadowRoot ? (f = f.host) : (f = f.parentNode);
      } while (
        (!B && f !== document.body) ||
        (B && (r.contains(f) || r === f))
      );
      return (
        ((w && (Math.abs(h) < 1 || !s)) || (!w && (Math.abs(v) < 1 || !s))) &&
          (g = !0),
        g
      );
    },
    cs = function (e) {
      return "changedTouches" in e
        ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
        : [0, 0];
    },
    Og = function (e) {
      return [e.deltaX, e.deltaY];
    },
    Ng = function (e) {
      return e && "current" in e ? e.current : e;
    },
    k1 = function (e, r) {
      return e[0] === r[0] && e[1] === r[1];
    },
    R1 = function (e) {
      return `
  .block-interactivity-`
        .concat(
          e,
          ` {pointer-events: none;}
  .allow-interactivity-`,
        )
        .concat(
          e,
          ` {pointer-events: all;}
`,
        );
    },
    O1 = 0,
    an = [];
  function N1(e) {
    var r = C.useRef([]),
      n = C.useRef([0, 0]),
      o = C.useRef(),
      s = C.useState(O1++)[0],
      l = C.useState(Lg)[0],
      u = C.useRef(e);
    C.useEffect(
      function () {
        u.current = e;
      },
      [e],
    ),
      C.useEffect(
        function () {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(s));
            var m = i1(
              [e.lockRef.current],
              (e.shards || []).map(Ng),
              !0,
            ).filter(Boolean);
            return (
              m.forEach(function (F) {
                return F.classList.add("allow-interactivity-".concat(s));
              }),
              function () {
                document.body.classList.remove(
                  "block-interactivity-".concat(s),
                ),
                  m.forEach(function (F) {
                    return F.classList.remove("allow-interactivity-".concat(s));
                  });
              }
            );
          }
        },
        [e.inert, e.lockRef.current, e.shards],
      );
    var f = C.useCallback(function (m, F) {
        if ("touches" in m && m.touches.length === 2)
          return !u.current.allowPinchZoom;
        var E = cs(m),
          I = n.current,
          R = "deltaX" in m ? m.deltaX : I[0] - E[0],
          T = "deltaY" in m ? m.deltaY : I[1] - E[1],
          k,
          O = m.target,
          P = Math.abs(R) > Math.abs(T) ? "h" : "v";
        if ("touches" in m && P === "h" && O.type === "range") return !1;
        var j = Kg(P, O);
        if (!j) return !0;
        if ((j ? (k = P) : ((k = P === "v" ? "h" : "v"), (j = Kg(P, O))), !j))
          return !1;
        if (
          (!o.current && "changedTouches" in m && (R || T) && (o.current = k),
          !k)
        )
          return !0;
        var X = o.current || k;
        return K1(X, F, m, X === "h" ? R : T, !0);
      }, []),
      B = C.useCallback(function (m) {
        var F = m;
        if (!(!an.length || an[an.length - 1] !== l)) {
          var E = "deltaY" in F ? Og(F) : cs(F),
            I = r.current.filter(function (k) {
              return (
                k.name === F.type &&
                (k.target === F.target || F.target === k.shadowParent) &&
                k1(k.delta, E)
              );
            })[0];
          if (I && I.should) {
            F.cancelable && F.preventDefault();
            return;
          }
          if (!I) {
            var R = (u.current.shards || [])
                .map(Ng)
                .filter(Boolean)
                .filter(function (k) {
                  return k.contains(F.target);
                }),
              T = R.length > 0 ? f(F, R[0]) : !u.current.noIsolation;
            T && F.cancelable && F.preventDefault();
          }
        }
      }, []),
      g = C.useCallback(function (m, F, E, I) {
        var R = {
          name: m,
          delta: F,
          target: E,
          should: I,
          shadowParent: M1(E),
        };
        r.current.push(R),
          setTimeout(function () {
            r.current = r.current.filter(function (T) {
              return T !== R;
            });
          }, 1);
      }, []),
      w = C.useCallback(function (m) {
        (n.current = cs(m)), (o.current = void 0);
      }, []),
      h = C.useCallback(function (m) {
        g(m.type, Og(m), m.target, f(m, e.lockRef.current));
      }, []),
      v = C.useCallback(function (m) {
        g(m.type, cs(m), m.target, f(m, e.lockRef.current));
      }, []);
    C.useEffect(function () {
      return (
        an.push(l),
        e.setCallbacks({
          onScrollCapture: h,
          onWheelCapture: h,
          onTouchMoveCapture: v,
        }),
        document.addEventListener("wheel", B, sn),
        document.addEventListener("touchmove", B, sn),
        document.addEventListener("touchstart", w, sn),
        function () {
          (an = an.filter(function (m) {
            return m !== l;
          })),
            document.removeEventListener("wheel", B, sn),
            document.removeEventListener("touchmove", B, sn),
            document.removeEventListener("touchstart", w, sn);
        }
      );
    }, []);
    var U = e.removeScrollBar,
      Q = e.inert;
    return C.createElement(
      C.Fragment,
      null,
      Q ? C.createElement(l, { styles: R1(s) }) : null,
      U ? C.createElement(I1, { gapMode: e.gapMode }) : null,
    );
  }
  function M1(e) {
    for (var r = null; e !== null; )
      e instanceof ShadowRoot && ((r = e.host), (e = e.host)),
        (e = e.parentNode);
    return r;
  }
  const P1 = g1(bg, N1);
  var oc = C.forwardRef(function (e, r) {
    return C.createElement(as, at({}, e, { ref: r, sideCar: P1 }));
  });
  oc.classNames = as.classNames;
  var _1 = [" ", "Enter", "ArrowUp", "ArrowDown"],
    V1 = [" ", "Enter"],
    uo = "Select",
    [us, fs, G1] = yF(uo),
    [ln, WH] = Ji(uo, [G1, pg]),
    ds = pg(),
    [W1, zt] = ln(uo),
    [j1, X1] = ln(uo),
    Mg = (e) => {
      const {
          __scopeSelect: r,
          children: n,
          open: o,
          defaultOpen: s,
          onOpenChange: l,
          value: u,
          defaultValue: f,
          onValueChange: B,
          dir: g,
          name: w,
          autoComplete: h,
          disabled: v,
          required: U,
        } = e,
        Q = ds(r),
        [m, F] = C.useState(null),
        [E, I] = C.useState(null),
        [R, T] = C.useState(!1),
        k = FF(g),
        [O = !1, P] = ql({ prop: o, defaultProp: s, onChange: l }),
        [j, X] = ql({ prop: u, defaultProp: f, onChange: B }),
        sA = C.useRef(null),
        dA = m ? !!m.closest("form") : !0,
        [q, tA] = C.useState(new Set()),
        oA = Array.from(q)
          .map((J) => J.props.value)
          .join(";");
      return b.jsx(JE, {
        ...Q,
        children: b.jsxs(W1, {
          required: U,
          scope: r,
          trigger: m,
          onTriggerChange: F,
          valueNode: E,
          onValueNodeChange: I,
          valueNodeHasChildren: R,
          onValueNodeHasChildrenChange: T,
          contentId: qr(),
          value: j,
          onValueChange: X,
          open: O,
          onOpenChange: P,
          dir: k,
          triggerPointerDownPosRef: sA,
          disabled: v,
          children: [
            b.jsx(us.Provider, {
              scope: r,
              children: b.jsx(j1, {
                scope: e.__scopeSelect,
                onNativeOptionAdd: C.useCallback((J) => {
                  tA((AA) => new Set(AA).add(J));
                }, []),
                onNativeOptionRemove: C.useCallback((J) => {
                  tA((AA) => {
                    const Y = new Set(AA);
                    return Y.delete(J), Y;
                  });
                }, []),
                children: n,
              }),
            }),
            dA
              ? b.jsxs(
                  up,
                  {
                    "aria-hidden": !0,
                    required: U,
                    tabIndex: -1,
                    name: w,
                    autoComplete: h,
                    value: j,
                    onChange: (J) => X(J.target.value),
                    disabled: v,
                    children: [
                      j === void 0 ? b.jsx("option", { value: "" }) : null,
                      Array.from(q),
                    ],
                  },
                  oA,
                )
              : null,
          ],
        }),
      });
    };
  Mg.displayName = uo;
  var Pg = "SelectTrigger",
    _g = C.forwardRef((e, r) => {
      const { __scopeSelect: n, disabled: o = !1, ...s } = e,
        l = ds(n),
        u = zt(Pg, n),
        f = u.disabled || o,
        B = jA(r, u.onTriggerChange),
        g = fs(n),
        [w, h, v] = fp((Q) => {
          const m = g().filter((I) => !I.disabled),
            F = m.find((I) => I.value === u.value),
            E = dp(m, Q, F);
          E !== void 0 && u.onValueChange(E.value);
        }),
        U = () => {
          f || (u.onOpenChange(!0), v());
        };
      return b.jsx(YE, {
        asChild: !0,
        ...l,
        children: b.jsx(LA.button, {
          type: "button",
          role: "combobox",
          "aria-controls": u.contentId,
          "aria-expanded": u.open,
          "aria-required": u.required,
          "aria-autocomplete": "none",
          dir: u.dir,
          "data-state": u.open ? "open" : "closed",
          disabled: f,
          "data-disabled": f ? "" : void 0,
          "data-placeholder": cp(u.value) ? "" : void 0,
          ...s,
          ref: B,
          onClick: NA(s.onClick, (Q) => {
            Q.currentTarget.focus();
          }),
          onPointerDown: NA(s.onPointerDown, (Q) => {
            const m = Q.target;
            m.hasPointerCapture(Q.pointerId) &&
              m.releasePointerCapture(Q.pointerId),
              Q.button === 0 &&
                Q.ctrlKey === !1 &&
                (U(),
                (u.triggerPointerDownPosRef.current = {
                  x: Math.round(Q.pageX),
                  y: Math.round(Q.pageY),
                }),
                Q.preventDefault());
          }),
          onKeyDown: NA(s.onKeyDown, (Q) => {
            const m = w.current !== "";
            !(Q.ctrlKey || Q.altKey || Q.metaKey) &&
              Q.key.length === 1 &&
              h(Q.key),
              !(m && Q.key === " ") &&
                _1.includes(Q.key) &&
                (U(), Q.preventDefault());
          }),
        }),
      });
    });
  _g.displayName = Pg;
  var Vg = "SelectValue",
    Gg = C.forwardRef((e, r) => {
      const {
          __scopeSelect: n,
          className: o,
          style: s,
          children: l,
          placeholder: u = "",
          ...f
        } = e,
        B = zt(Vg, n),
        { onValueNodeHasChildrenChange: g } = B,
        w = l !== void 0,
        h = jA(r, B.onValueNodeChange);
      return (
        we(() => {
          g(w);
        }, [g, w]),
        b.jsx(LA.span, {
          ...f,
          ref: h,
          style: { pointerEvents: "none" },
          children: cp(B.value) ? b.jsx(b.Fragment, { children: u }) : l,
        })
      );
    });
  Gg.displayName = Vg;
  var z1 = "SelectIcon",
    Wg = C.forwardRef((e, r) => {
      const { __scopeSelect: n, children: o, ...s } = e;
      return b.jsx(LA.span, {
        "aria-hidden": !0,
        ...s,
        ref: r,
        children: o || "▼",
      });
    });
  Wg.displayName = z1;
  var J1 = "SelectPortal",
    jg = (e) => b.jsx($l, { asChild: !0, ...e });
  jg.displayName = J1;
  var yr = "SelectContent",
    Xg = C.forwardRef((e, r) => {
      const n = zt(yr, e.__scopeSelect),
        [o, s] = C.useState();
      if (
        (we(() => {
          s(new DocumentFragment());
        }, []),
        !n.open)
      ) {
        const l = o;
        return l
          ? gr.createPortal(
              b.jsx(zg, {
                scope: e.__scopeSelect,
                children: b.jsx(us.Slot, {
                  scope: e.__scopeSelect,
                  children: b.jsx("div", { children: e.children }),
                }),
              }),
              l,
            )
          : null;
      }
      return b.jsx(Jg, { ...e, ref: r });
    });
  Xg.displayName = yr;
  var yt = 10,
    [zg, Jt] = ln(yr),
    Y1 = "SelectContentImpl",
    Jg = C.forwardRef((e, r) => {
      const {
          __scopeSelect: n,
          position: o = "item-aligned",
          onCloseAutoFocus: s,
          onEscapeKeyDown: l,
          onPointerDownOutside: u,
          side: f,
          sideOffset: B,
          align: g,
          alignOffset: w,
          arrowPadding: h,
          collisionBoundary: v,
          collisionPadding: U,
          sticky: Q,
          hideWhenDetached: m,
          avoidCollisions: F,
          ...E
        } = e,
        I = zt(yr, n),
        [R, T] = C.useState(null),
        [k, O] = C.useState(null),
        P = jA(r, ($) => T($)),
        [j, X] = C.useState(null),
        [sA, dA] = C.useState(null),
        q = fs(n),
        [tA, oA] = C.useState(!1),
        J = C.useRef(!1);
      C.useEffect(() => {
        if (R) return xg(R);
      }, [R]),
        VB();
      const AA = C.useCallback(
          ($) => {
            const [BA, ...CA] = q().map((MA) => MA.ref.current),
              [QA] = CA.slice(-1),
              IA = document.activeElement;
            for (const MA of $)
              if (
                MA === IA ||
                (MA?.scrollIntoView({ block: "nearest" }),
                MA === BA && k && (k.scrollTop = 0),
                MA === QA && k && (k.scrollTop = k.scrollHeight),
                MA?.focus(),
                document.activeElement !== IA)
              )
                return;
          },
          [q, k],
        ),
        Y = C.useCallback(() => AA([j, R]), [AA, j, R]);
      C.useEffect(() => {
        tA && Y();
      }, [tA, Y]);
      const { onOpenChange: N, triggerPointerDownPosRef: G } = I;
      C.useEffect(() => {
        if (R) {
          let $ = { x: 0, y: 0 };
          const BA = (QA) => {
              $ = {
                x: Math.abs(Math.round(QA.pageX) - (G.current?.x ?? 0)),
                y: Math.abs(Math.round(QA.pageY) - (G.current?.y ?? 0)),
              };
            },
            CA = (QA) => {
              $.x <= 10 && $.y <= 10
                ? QA.preventDefault()
                : R.contains(QA.target) || N(!1),
                document.removeEventListener("pointermove", BA),
                (G.current = null);
            };
          return (
            G.current !== null &&
              (document.addEventListener("pointermove", BA),
              document.addEventListener("pointerup", CA, {
                capture: !0,
                once: !0,
              })),
            () => {
              document.removeEventListener("pointermove", BA),
                document.removeEventListener("pointerup", CA, { capture: !0 });
            }
          );
        }
      }, [R, N, G]),
        C.useEffect(() => {
          const $ = () => N(!1);
          return (
            window.addEventListener("blur", $),
            window.addEventListener("resize", $),
            () => {
              window.removeEventListener("blur", $),
                window.removeEventListener("resize", $);
            }
          );
        }, [N]);
      const [Z, H] = fp(($) => {
          const BA = q().filter((IA) => !IA.disabled),
            CA = BA.find((IA) => IA.ref.current === document.activeElement),
            QA = dp(BA, $, CA);
          QA && setTimeout(() => QA.ref.current.focus());
        }),
        M = C.useCallback(
          ($, BA, CA) => {
            const QA = !J.current && !CA;
            ((I.value !== void 0 && I.value === BA) || QA) &&
              (X($), QA && (J.current = !0));
          },
          [I.value],
        ),
        uA = C.useCallback(() => R?.focus(), [R]),
        fA = C.useCallback(
          ($, BA, CA) => {
            const QA = !J.current && !CA;
            ((I.value !== void 0 && I.value === BA) || QA) && dA($);
          },
          [I.value],
        ),
        wA = o === "popper" ? ic : Yg,
        hA =
          wA === ic
            ? {
                side: f,
                sideOffset: B,
                align: g,
                alignOffset: w,
                arrowPadding: h,
                collisionBoundary: v,
                collisionPadding: U,
                sticky: Q,
                hideWhenDetached: m,
                avoidCollisions: F,
              }
            : {};
      return b.jsx(zg, {
        scope: n,
        content: R,
        viewport: k,
        onViewportChange: O,
        itemRefCallback: M,
        selectedItem: j,
        onItemLeave: uA,
        itemTextRefCallback: fA,
        focusSelectedItem: Y,
        selectedItemText: sA,
        position: o,
        isPositioned: tA,
        searchRef: Z,
        children: b.jsx(oc, {
          as: Cr,
          allowPinchZoom: !0,
          children: b.jsx(Nl, {
            asChild: !0,
            trapped: I.open,
            onMountAutoFocus: ($) => {
              $.preventDefault();
            },
            onUnmountAutoFocus: NA(s, ($) => {
              I.trigger?.focus({ preventScroll: !0 }), $.preventDefault();
            }),
            children: b.jsx(Kl, {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: l,
              onPointerDownOutside: u,
              onFocusOutside: ($) => $.preventDefault(),
              onDismiss: () => I.onOpenChange(!1),
              children: b.jsx(wA, {
                role: "listbox",
                id: I.contentId,
                "data-state": I.open ? "open" : "closed",
                dir: I.dir,
                onContextMenu: ($) => $.preventDefault(),
                ...E,
                ...hA,
                onPlaced: () => oA(!0),
                ref: P,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...E.style,
                },
                onKeyDown: NA(E.onKeyDown, ($) => {
                  const BA = $.ctrlKey || $.altKey || $.metaKey;
                  if (
                    ($.key === "Tab" && $.preventDefault(),
                    !BA && $.key.length === 1 && H($.key),
                    ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key))
                  ) {
                    let QA = q()
                      .filter((IA) => !IA.disabled)
                      .map((IA) => IA.ref.current);
                    if (
                      (["ArrowUp", "End"].includes($.key) &&
                        (QA = QA.slice().reverse()),
                      ["ArrowUp", "ArrowDown"].includes($.key))
                    ) {
                      const IA = $.target,
                        MA = QA.indexOf(IA);
                      QA = QA.slice(MA + 1);
                    }
                    setTimeout(() => AA(QA)), $.preventDefault();
                  }
                }),
              }),
            }),
          }),
        }),
      });
    });
  Jg.displayName = Y1;
  var Z1 = "SelectItemAlignedPosition",
    Yg = C.forwardRef((e, r) => {
      const { __scopeSelect: n, onPlaced: o, ...s } = e,
        l = zt(yr, n),
        u = Jt(yr, n),
        [f, B] = C.useState(null),
        [g, w] = C.useState(null),
        h = jA(r, (P) => w(P)),
        v = fs(n),
        U = C.useRef(!1),
        Q = C.useRef(!0),
        {
          viewport: m,
          selectedItem: F,
          selectedItemText: E,
          focusSelectedItem: I,
        } = u,
        R = C.useCallback(() => {
          if (l.trigger && l.valueNode && f && g && m && F && E) {
            const P = l.trigger.getBoundingClientRect(),
              j = g.getBoundingClientRect(),
              X = l.valueNode.getBoundingClientRect(),
              sA = E.getBoundingClientRect();
            if (l.dir !== "rtl") {
              const IA = sA.left - j.left,
                MA = X.left - IA,
                se = P.left - MA,
                Je = P.width + se,
                cn = Math.max(Je, j.width),
                un = window.innerWidth - yt,
                Fr = OB(MA, [yt, un - cn]);
              (f.style.minWidth = Je + "px"), (f.style.left = Fr + "px");
            } else {
              const IA = j.right - sA.right,
                MA = window.innerWidth - X.right - IA,
                se = window.innerWidth - P.right - MA,
                Je = P.width + se,
                cn = Math.max(Je, j.width),
                un = window.innerWidth - yt,
                Fr = OB(MA, [yt, un - cn]);
              (f.style.minWidth = Je + "px"), (f.style.right = Fr + "px");
            }
            const dA = v(),
              q = window.innerHeight - yt * 2,
              tA = m.scrollHeight,
              oA = window.getComputedStyle(g),
              J = parseInt(oA.borderTopWidth, 10),
              AA = parseInt(oA.paddingTop, 10),
              Y = parseInt(oA.borderBottomWidth, 10),
              N = parseInt(oA.paddingBottom, 10),
              G = J + AA + tA + N + Y,
              Z = Math.min(F.offsetHeight * 5, G),
              H = window.getComputedStyle(m),
              M = parseInt(H.paddingTop, 10),
              uA = parseInt(H.paddingBottom, 10),
              fA = P.top + P.height / 2 - yt,
              wA = q - fA,
              hA = F.offsetHeight / 2,
              $ = F.offsetTop + hA,
              BA = J + AA + $,
              CA = G - BA;
            if (BA <= fA) {
              const IA = F === dA[dA.length - 1].ref.current;
              f.style.bottom = "0px";
              const MA = g.clientHeight - m.offsetTop - m.offsetHeight,
                se = Math.max(wA, hA + (IA ? uA : 0) + MA + Y),
                Je = BA + se;
              f.style.height = Je + "px";
            } else {
              const IA = F === dA[0].ref.current;
              f.style.top = "0px";
              const se = Math.max(fA, J + m.offsetTop + (IA ? M : 0) + hA) + CA;
              (f.style.height = se + "px"),
                (m.scrollTop = BA - fA + m.offsetTop);
            }
            (f.style.margin = `${yt}px 0`),
              (f.style.minHeight = Z + "px"),
              (f.style.maxHeight = q + "px"),
              o?.(),
              requestAnimationFrame(() => (U.current = !0));
          }
        }, [v, l.trigger, l.valueNode, f, g, m, F, E, l.dir, o]);
      we(() => R(), [R]);
      const [T, k] = C.useState();
      we(() => {
        g && k(window.getComputedStyle(g).zIndex);
      }, [g]);
      const O = C.useCallback(
        (P) => {
          P && Q.current === !0 && (R(), I?.(), (Q.current = !1));
        },
        [R, I],
      );
      return b.jsx(q1, {
        scope: n,
        contentWrapper: f,
        shouldExpandOnScrollRef: U,
        onScrollButtonChange: O,
        children: b.jsx("div", {
          ref: B,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: T,
          },
          children: b.jsx(LA.div, {
            ...s,
            ref: h,
            style: { boxSizing: "border-box", maxHeight: "100%", ...s.style },
          }),
        }),
      });
    });
  Yg.displayName = Z1;
  var $1 = "SelectPopperPosition",
    ic = C.forwardRef((e, r) => {
      const {
          __scopeSelect: n,
          align: o = "start",
          collisionPadding: s = yt,
          ...l
        } = e,
        u = ds(n);
      return b.jsx(ZE, {
        ...u,
        ...l,
        ref: r,
        align: o,
        collisionPadding: s,
        style: {
          boxSizing: "border-box",
          ...l.style,
          "--radix-select-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-select-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
        },
      });
    });
  ic.displayName = $1;
  var [q1, sc] = ln(yr, {}),
    ac = "SelectViewport",
    Zg = C.forwardRef((e, r) => {
      const { __scopeSelect: n, nonce: o, ...s } = e,
        l = Jt(ac, n),
        u = sc(ac, n),
        f = jA(r, l.onViewportChange),
        B = C.useRef(0);
      return b.jsxs(b.Fragment, {
        children: [
          b.jsx("style", {
            dangerouslySetInnerHTML: {
              __html:
                "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
            },
            nonce: o,
          }),
          b.jsx(us.Slot, {
            scope: n,
            children: b.jsx(LA.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...s,
              ref: f,
              style: {
                position: "relative",
                flex: 1,
                overflow: "auto",
                ...s.style,
              },
              onScroll: NA(s.onScroll, (g) => {
                const w = g.currentTarget,
                  { contentWrapper: h, shouldExpandOnScrollRef: v } = u;
                if (v?.current && h) {
                  const U = Math.abs(B.current - w.scrollTop);
                  if (U > 0) {
                    const Q = window.innerHeight - yt * 2,
                      m = parseFloat(h.style.minHeight),
                      F = parseFloat(h.style.height),
                      E = Math.max(m, F);
                    if (E < Q) {
                      const I = E + U,
                        R = Math.min(Q, I),
                        T = I - R;
                      (h.style.height = R + "px"),
                        h.style.bottom === "0px" &&
                          ((w.scrollTop = T > 0 ? T : 0),
                          (h.style.justifyContent = "flex-end"));
                    }
                  }
                }
                B.current = w.scrollTop;
              }),
            }),
          }),
        ],
      });
    });
  Zg.displayName = ac;
  var $g = "SelectGroup",
    [Ax, ex] = ln($g),
    tx = C.forwardRef((e, r) => {
      const { __scopeSelect: n, ...o } = e,
        s = qr();
      return b.jsx(Ax, {
        scope: n,
        id: s,
        children: b.jsx(LA.div, {
          role: "group",
          "aria-labelledby": s,
          ...o,
          ref: r,
        }),
      });
    });
  tx.displayName = $g;
  var qg = "SelectLabel",
    Ap = C.forwardRef((e, r) => {
      const { __scopeSelect: n, ...o } = e,
        s = ex(qg, n);
      return b.jsx(LA.div, { id: s.id, ...o, ref: r });
    });
  Ap.displayName = qg;
  var Bs = "SelectItem",
    [rx, ep] = ln(Bs),
    tp = C.forwardRef((e, r) => {
      const {
          __scopeSelect: n,
          value: o,
          disabled: s = !1,
          textValue: l,
          ...u
        } = e,
        f = zt(Bs, n),
        B = Jt(Bs, n),
        g = f.value === o,
        [w, h] = C.useState(l ?? ""),
        [v, U] = C.useState(!1),
        Q = jA(r, (E) => B.itemRefCallback?.(E, o, s)),
        m = qr(),
        F = () => {
          s || (f.onValueChange(o), f.onOpenChange(!1));
        };
      if (o === "")
        throw new Error(
          "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
        );
      return b.jsx(rx, {
        scope: n,
        value: o,
        disabled: s,
        textId: m,
        isSelected: g,
        onItemTextChange: C.useCallback((E) => {
          h((I) => I || (E?.textContent ?? "").trim());
        }, []),
        children: b.jsx(us.ItemSlot, {
          scope: n,
          value: o,
          disabled: s,
          textValue: w,
          children: b.jsx(LA.div, {
            role: "option",
            "aria-labelledby": m,
            "data-highlighted": v ? "" : void 0,
            "aria-selected": g && v,
            "data-state": g ? "checked" : "unchecked",
            "aria-disabled": s || void 0,
            "data-disabled": s ? "" : void 0,
            tabIndex: s ? void 0 : -1,
            ...u,
            ref: Q,
            onFocus: NA(u.onFocus, () => U(!0)),
            onBlur: NA(u.onBlur, () => U(!1)),
            onPointerUp: NA(u.onPointerUp, F),
            onPointerMove: NA(u.onPointerMove, (E) => {
              s
                ? B.onItemLeave?.()
                : E.currentTarget.focus({ preventScroll: !0 });
            }),
            onPointerLeave: NA(u.onPointerLeave, (E) => {
              E.currentTarget === document.activeElement && B.onItemLeave?.();
            }),
            onKeyDown: NA(u.onKeyDown, (E) => {
              (B.searchRef?.current !== "" && E.key === " ") ||
                (V1.includes(E.key) && F(),
                E.key === " " && E.preventDefault());
            }),
          }),
        }),
      });
    });
  tp.displayName = Bs;
  var fo = "SelectItemText",
    rp = C.forwardRef((e, r) => {
      const { __scopeSelect: n, className: o, style: s, ...l } = e,
        u = zt(fo, n),
        f = Jt(fo, n),
        B = ep(fo, n),
        g = X1(fo, n),
        [w, h] = C.useState(null),
        v = jA(
          r,
          (E) => h(E),
          B.onItemTextChange,
          (E) => f.itemTextRefCallback?.(E, B.value, B.disabled),
        ),
        U = w?.textContent,
        Q = C.useMemo(
          () =>
            b.jsx(
              "option",
              { value: B.value, disabled: B.disabled, children: U },
              B.value,
            ),
          [B.disabled, B.value, U],
        ),
        { onNativeOptionAdd: m, onNativeOptionRemove: F } = g;
      return (
        we(() => (m(Q), () => F(Q)), [m, F, Q]),
        b.jsxs(b.Fragment, {
          children: [
            b.jsx(LA.span, { id: B.textId, ...l, ref: v }),
            B.isSelected && u.valueNode && !u.valueNodeHasChildren
              ? gr.createPortal(l.children, u.valueNode)
              : null,
          ],
        })
      );
    });
  rp.displayName = fo;
  var np = "SelectItemIndicator",
    op = C.forwardRef((e, r) => {
      const { __scopeSelect: n, ...o } = e;
      return ep(np, n).isSelected
        ? b.jsx(LA.span, { "aria-hidden": !0, ...o, ref: r })
        : null;
    });
  op.displayName = np;
  var lc = "SelectScrollUpButton",
    ip = C.forwardRef((e, r) => {
      const n = Jt(lc, e.__scopeSelect),
        o = sc(lc, e.__scopeSelect),
        [s, l] = C.useState(!1),
        u = jA(r, o.onScrollButtonChange);
      return (
        we(() => {
          if (n.viewport && n.isPositioned) {
            let f = function () {
              const g = B.scrollTop > 0;
              l(g);
            };
            const B = n.viewport;
            return (
              f(),
              B.addEventListener("scroll", f),
              () => B.removeEventListener("scroll", f)
            );
          }
        }, [n.viewport, n.isPositioned]),
        s
          ? b.jsx(ap, {
              ...e,
              ref: u,
              onAutoScroll: () => {
                const { viewport: f, selectedItem: B } = n;
                f && B && (f.scrollTop = f.scrollTop - B.offsetHeight);
              },
            })
          : null
      );
    });
  ip.displayName = lc;
  var cc = "SelectScrollDownButton",
    sp = C.forwardRef((e, r) => {
      const n = Jt(cc, e.__scopeSelect),
        o = sc(cc, e.__scopeSelect),
        [s, l] = C.useState(!1),
        u = jA(r, o.onScrollButtonChange);
      return (
        we(() => {
          if (n.viewport && n.isPositioned) {
            let f = function () {
              const g = B.scrollHeight - B.clientHeight,
                w = Math.ceil(B.scrollTop) < g;
              l(w);
            };
            const B = n.viewport;
            return (
              f(),
              B.addEventListener("scroll", f),
              () => B.removeEventListener("scroll", f)
            );
          }
        }, [n.viewport, n.isPositioned]),
        s
          ? b.jsx(ap, {
              ...e,
              ref: u,
              onAutoScroll: () => {
                const { viewport: f, selectedItem: B } = n;
                f && B && (f.scrollTop = f.scrollTop + B.offsetHeight);
              },
            })
          : null
      );
    });
  sp.displayName = cc;
  var ap = C.forwardRef((e, r) => {
      const { __scopeSelect: n, onAutoScroll: o, ...s } = e,
        l = Jt("SelectScrollButton", n),
        u = C.useRef(null),
        f = fs(n),
        B = C.useCallback(() => {
          u.current !== null &&
            (window.clearInterval(u.current), (u.current = null));
        }, []);
      return (
        C.useEffect(() => () => B(), [B]),
        we(() => {
          f()
            .find((w) => w.ref.current === document.activeElement)
            ?.ref.current?.scrollIntoView({ block: "nearest" });
        }, [f]),
        b.jsx(LA.div, {
          "aria-hidden": !0,
          ...s,
          ref: r,
          style: { flexShrink: 0, ...s.style },
          onPointerDown: NA(s.onPointerDown, () => {
            u.current === null && (u.current = window.setInterval(o, 50));
          }),
          onPointerMove: NA(s.onPointerMove, () => {
            l.onItemLeave?.(),
              u.current === null && (u.current = window.setInterval(o, 50));
          }),
          onPointerLeave: NA(s.onPointerLeave, () => {
            B();
          }),
        })
      );
    }),
    nx = "SelectSeparator",
    lp = C.forwardRef((e, r) => {
      const { __scopeSelect: n, ...o } = e;
      return b.jsx(LA.div, { "aria-hidden": !0, ...o, ref: r });
    });
  lp.displayName = nx;
  var uc = "SelectArrow",
    ox = C.forwardRef((e, r) => {
      const { __scopeSelect: n, ...o } = e,
        s = ds(n),
        l = zt(uc, n),
        u = Jt(uc, n);
      return l.open && u.position === "popper"
        ? b.jsx($E, { ...s, ...o, ref: r })
        : null;
    });
  ox.displayName = uc;
  function cp(e) {
    return e === "" || e === void 0;
  }
  var up = C.forwardRef((e, r) => {
    const { value: n, ...o } = e,
      s = C.useRef(null),
      l = jA(r, s),
      u = e1(n);
    return (
      C.useEffect(() => {
        const f = s.current,
          B = window.HTMLSelectElement.prototype,
          w = Object.getOwnPropertyDescriptor(B, "value").set;
        if (u !== n && w) {
          const h = new Event("change", { bubbles: !0 });
          w.call(f, n), f.dispatchEvent(h);
        }
      }, [u, n]),
      b.jsx(Fg, {
        asChild: !0,
        children: b.jsx("select", { ...o, ref: l, defaultValue: n }),
      })
    );
  });
  up.displayName = "BubbleSelect";
  function fp(e) {
    const r = vt(e),
      n = C.useRef(""),
      o = C.useRef(0),
      s = C.useCallback(
        (u) => {
          const f = n.current + u;
          r(f),
            (function B(g) {
              (n.current = g),
                window.clearTimeout(o.current),
                g !== "" && (o.current = window.setTimeout(() => B(""), 1e3));
            })(f);
        },
        [r],
      ),
      l = C.useCallback(() => {
        (n.current = ""), window.clearTimeout(o.current);
      }, []);
    return (
      C.useEffect(() => () => window.clearTimeout(o.current), []), [n, s, l]
    );
  }
  function dp(e, r, n) {
    const s = r.length > 1 && Array.from(r).every((g) => g === r[0]) ? r[0] : r,
      l = n ? e.indexOf(n) : -1;
    let u = ix(e, Math.max(l, 0));
    s.length === 1 && (u = u.filter((g) => g !== n));
    const B = u.find((g) =>
      g.textValue.toLowerCase().startsWith(s.toLowerCase()),
    );
    return B !== n ? B : void 0;
  }
  function ix(e, r) {
    return e.map((n, o) => e[(r + o) % e.length]);
  }
  var sx = Mg,
    Bp = _g,
    ax = Gg,
    lx = Wg,
    cx = jg,
    gp = Xg,
    ux = Zg,
    pp = Ap,
    wp = tp,
    fx = rp,
    dx = op,
    hp = ip,
    vp = sp,
    mp = lp;
  const Bx = sx,
    gx = ax,
    Cp = C.forwardRef(({ className: e, children: r, ...n }, o) =>
      b.jsxs(Bp, {
        ref: o,
        className: $A(
          "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
          e,
        ),
        ...n,
        children: [
          r,
          b.jsx(lx, {
            asChild: !0,
            children: b.jsx(fF, { className: "h-4 w-4 opacity-50" }),
          }),
        ],
      }),
    );
  Cp.displayName = Bp.displayName;
  const Qp = C.forwardRef(({ className: e, ...r }, n) =>
    b.jsx(hp, {
      ref: n,
      className: $A("flex cursor-default items-center justify-center py-1", e),
      ...r,
      children: b.jsx(hF, {}),
    }),
  );
  Qp.displayName = hp.displayName;
  const yp = C.forwardRef(({ className: e, ...r }, n) =>
    b.jsx(vp, {
      ref: n,
      className: $A("flex cursor-default items-center justify-center py-1", e),
      ...r,
      children: b.jsx(pF, {}),
    }),
  );
  yp.displayName = vp.displayName;
  const Up = C.forwardRef(
    ({ className: e, children: r, position: n = "popper", ...o }, s) =>
      b.jsx(cx, {
        children: b.jsxs(gp, {
          ref: s,
          className: $A(
            "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n === "popper" &&
              "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            e,
          ),
          position: n,
          ...o,
          children: [
            b.jsx(Qp, {}),
            b.jsx(ux, {
              className: $A(
                "p-1",
                n === "popper" &&
                  "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
              ),
              children: r,
            }),
            b.jsx(yp, {}),
          ],
        }),
      }),
  );
  Up.displayName = gp.displayName;
  const px = C.forwardRef(({ className: e, ...r }, n) =>
    b.jsx(pp, {
      ref: n,
      className: $A("px-2 py-1.5 text-sm font-semibold", e),
      ...r,
    }),
  );
  px.displayName = pp.displayName;
  const Fp = C.forwardRef(({ className: e, children: r, ...n }, o) =>
    b.jsxs(wp, {
      ref: o,
      className: $A(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e,
      ),
      ...n,
      children: [
        b.jsx("span", {
          className:
            "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
          children: b.jsx(dx, {
            children: b.jsx(BF, { className: "h-4 w-4" }),
          }),
        }),
        b.jsx(fx, { children: r }),
      ],
    }),
  );
  Fp.displayName = wp.displayName;
  const wx = C.forwardRef(({ className: e, ...r }, n) =>
    b.jsx(mp, { ref: n, className: $A("-mx-1 my-1 h-px bg-muted", e), ...r }),
  );
  wx.displayName = mp.displayName;
  function hx(e, r) {
    return C.useReducer((n, o) => r[n][o] ?? n, e);
  }
  var gs = (e) => {
    const { present: r, children: n } = e,
      o = vx(r),
      s =
        typeof n == "function"
          ? n({ present: o.isPresent })
          : C.Children.only(n),
      l = jA(o.ref, mx(s));
    return typeof n == "function" || o.isPresent
      ? C.cloneElement(s, { ref: l })
      : null;
  };
  gs.displayName = "Presence";
  function vx(e) {
    const [r, n] = C.useState(),
      o = C.useRef({}),
      s = C.useRef(e),
      l = C.useRef("none"),
      u = e ? "mounted" : "unmounted",
      [f, B] = hx(u, {
        mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
        unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
        unmounted: { MOUNT: "mounted" },
      });
    return (
      C.useEffect(() => {
        const g = ps(o.current);
        l.current = f === "mounted" ? g : "none";
      }, [f]),
      we(() => {
        const g = o.current,
          w = s.current;
        if (w !== e) {
          const v = l.current,
            U = ps(g);
          e
            ? B("MOUNT")
            : U === "none" || g?.display === "none"
              ? B("UNMOUNT")
              : B(w && v !== U ? "ANIMATION_OUT" : "UNMOUNT"),
            (s.current = e);
        }
      }, [e, B]),
      we(() => {
        if (r) {
          const g = (h) => {
              const U = ps(o.current).includes(h.animationName);
              h.target === r && U && gr.flushSync(() => B("ANIMATION_END"));
            },
            w = (h) => {
              h.target === r && (l.current = ps(o.current));
            };
          return (
            r.addEventListener("animationstart", w),
            r.addEventListener("animationcancel", g),
            r.addEventListener("animationend", g),
            () => {
              r.removeEventListener("animationstart", w),
                r.removeEventListener("animationcancel", g),
                r.removeEventListener("animationend", g);
            }
          );
        } else B("ANIMATION_END");
      }, [r, B]),
      {
        isPresent: ["mounted", "unmountSuspended"].includes(f),
        ref: C.useCallback((g) => {
          g && (o.current = getComputedStyle(g)), n(g);
        }, []),
      }
    );
  }
  function ps(e) {
    return e?.animationName || "none";
  }
  function mx(e) {
    let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
      n = r && "isReactWarning" in r && r.isReactWarning;
    return n
      ? e.ref
      : ((r = Object.getOwnPropertyDescriptor(e, "ref")?.get),
        (n = r && "isReactWarning" in r && r.isReactWarning),
        n ? e.props.ref : e.props.ref || e.ref);
  }
  var fc = "Dialog",
    [Ep, jH] = Ji(fc),
    [Cx, ze] = Ep(fc),
    xp = (e) => {
      const {
          __scopeDialog: r,
          children: n,
          open: o,
          defaultOpen: s,
          onOpenChange: l,
          modal: u = !0,
        } = e,
        f = C.useRef(null),
        B = C.useRef(null),
        [g = !1, w] = ql({ prop: o, defaultProp: s, onChange: l });
      return b.jsx(Cx, {
        scope: r,
        triggerRef: f,
        contentRef: B,
        contentId: qr(),
        titleId: qr(),
        descriptionId: qr(),
        open: g,
        onOpenChange: w,
        onOpenToggle: C.useCallback(() => w((h) => !h), [w]),
        modal: u,
        children: n,
      });
    };
  xp.displayName = fc;
  var Ip = "DialogTrigger",
    Hp = C.forwardRef((e, r) => {
      const { __scopeDialog: n, ...o } = e,
        s = ze(Ip, n),
        l = jA(r, s.triggerRef);
      return b.jsx(LA.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": pc(s.open),
        ...o,
        ref: l,
        onClick: NA(e.onClick, s.onOpenToggle),
      });
    });
  Hp.displayName = Ip;
  var dc = "DialogPortal",
    [Qx, Sp] = Ep(dc, { forceMount: void 0 }),
    bp = (e) => {
      const { __scopeDialog: r, forceMount: n, children: o, container: s } = e,
        l = ze(dc, r);
      return b.jsx(Qx, {
        scope: r,
        forceMount: n,
        children: C.Children.map(o, (u) =>
          b.jsx(gs, {
            present: n || l.open,
            children: b.jsx($l, { asChild: !0, container: s, children: u }),
          }),
        ),
      });
    };
  bp.displayName = dc;
  var ws = "DialogOverlay",
    Lp = C.forwardRef((e, r) => {
      const n = Sp(ws, e.__scopeDialog),
        { forceMount: o = n.forceMount, ...s } = e,
        l = ze(ws, e.__scopeDialog);
      return l.modal
        ? b.jsx(gs, {
            present: o || l.open,
            children: b.jsx(yx, { ...s, ref: r }),
          })
        : null;
    });
  Lp.displayName = ws;
  var yx = C.forwardRef((e, r) => {
      const { __scopeDialog: n, ...o } = e,
        s = ze(ws, n);
      return b.jsx(oc, {
        as: Cr,
        allowPinchZoom: !0,
        shards: [s.contentRef],
        children: b.jsx(LA.div, {
          "data-state": pc(s.open),
          ...o,
          ref: r,
          style: { pointerEvents: "auto", ...o.style },
        }),
      });
    }),
    Ur = "DialogContent",
    Tp = C.forwardRef((e, r) => {
      const n = Sp(Ur, e.__scopeDialog),
        { forceMount: o = n.forceMount, ...s } = e,
        l = ze(Ur, e.__scopeDialog);
      return b.jsx(gs, {
        present: o || l.open,
        children: l.modal
          ? b.jsx(Ux, { ...s, ref: r })
          : b.jsx(Fx, { ...s, ref: r }),
      });
    });
  Tp.displayName = Ur;
  var Ux = C.forwardRef((e, r) => {
      const n = ze(Ur, e.__scopeDialog),
        o = C.useRef(null),
        s = jA(r, n.contentRef, o);
      return (
        C.useEffect(() => {
          const l = o.current;
          if (l) return xg(l);
        }, []),
        b.jsx(Dp, {
          ...e,
          ref: s,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: NA(e.onCloseAutoFocus, (l) => {
            l.preventDefault(), n.triggerRef.current?.focus();
          }),
          onPointerDownOutside: NA(e.onPointerDownOutside, (l) => {
            const u = l.detail.originalEvent,
              f = u.button === 0 && u.ctrlKey === !0;
            (u.button === 2 || f) && l.preventDefault();
          }),
          onFocusOutside: NA(e.onFocusOutside, (l) => l.preventDefault()),
        })
      );
    }),
    Fx = C.forwardRef((e, r) => {
      const n = ze(Ur, e.__scopeDialog),
        o = C.useRef(!1),
        s = C.useRef(!1);
      return b.jsx(Dp, {
        ...e,
        ref: r,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (l) => {
          e.onCloseAutoFocus?.(l),
            l.defaultPrevented ||
              (o.current || n.triggerRef.current?.focus(), l.preventDefault()),
            (o.current = !1),
            (s.current = !1);
        },
        onInteractOutside: (l) => {
          e.onInteractOutside?.(l),
            l.defaultPrevented ||
              ((o.current = !0),
              l.detail.originalEvent.type === "pointerdown" &&
                (s.current = !0));
          const u = l.target;
          n.triggerRef.current?.contains(u) && l.preventDefault(),
            l.detail.originalEvent.type === "focusin" &&
              s.current &&
              l.preventDefault();
        },
      });
    }),
    Dp = C.forwardRef((e, r) => {
      const {
          __scopeDialog: n,
          trapFocus: o,
          onOpenAutoFocus: s,
          onCloseAutoFocus: l,
          ...u
        } = e,
        f = ze(Ur, n),
        B = C.useRef(null),
        g = jA(r, B);
      return (
        VB(),
        b.jsxs(b.Fragment, {
          children: [
            b.jsx(Nl, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: s,
              onUnmountAutoFocus: l,
              children: b.jsx(Kl, {
                role: "dialog",
                id: f.contentId,
                "aria-describedby": f.descriptionId,
                "aria-labelledby": f.titleId,
                "data-state": pc(f.open),
                ...u,
                ref: g,
                onDismiss: () => f.onOpenChange(!1),
              }),
            }),
            b.jsxs(b.Fragment, {
              children: [
                b.jsx(Ex, { titleId: f.titleId }),
                b.jsx(Ix, { contentRef: B, descriptionId: f.descriptionId }),
              ],
            }),
          ],
        })
      );
    }),
    Bc = "DialogTitle",
    Kp = C.forwardRef((e, r) => {
      const { __scopeDialog: n, ...o } = e,
        s = ze(Bc, n);
      return b.jsx(LA.h2, { id: s.titleId, ...o, ref: r });
    });
  Kp.displayName = Bc;
  var kp = "DialogDescription",
    gc = C.forwardRef((e, r) => {
      const { __scopeDialog: n, ...o } = e,
        s = ze(kp, n);
      return b.jsx(LA.p, { id: s.descriptionId, ...o, ref: r });
    });
  gc.displayName = kp;
  var Rp = "DialogClose",
    Op = C.forwardRef((e, r) => {
      const { __scopeDialog: n, ...o } = e,
        s = ze(Rp, n);
      return b.jsx(LA.button, {
        type: "button",
        ...o,
        ref: r,
        onClick: NA(e.onClick, () => s.onOpenChange(!1)),
      });
    });
  Op.displayName = Rp;
  function pc(e) {
    return e ? "open" : "closed";
  }
  var Np = "DialogTitleWarning",
    [XH, Mp] = CF(Np, { contentName: Ur, titleName: Bc, docsSlug: "dialog" }),
    Ex = ({ titleId: e }) => {
      const r = Mp(Np),
        n = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;
      return (
        C.useEffect(() => {
          e && (document.getElementById(e) || console.error(n));
        }, [n, e]),
        null
      );
    },
    xx = "DialogDescriptionWarning",
    Ix = ({ contentRef: e, descriptionId: r }) => {
      const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Mp(xx).contentName}}.`;
      return (
        C.useEffect(() => {
          const s = e.current?.getAttribute("aria-describedby");
          r && s && (document.getElementById(r) || console.warn(o));
        }, [o, e, r]),
        null
      );
    },
    Hx = xp,
    Sx = Hp,
    bx = bp,
    Pp = Lp,
    _p = Tp,
    Vp = Kp,
    Gp = gc,
    Lx = Op;
  const Tx = Hx,
    Dx = Sx,
    Kx = bx,
    Wp = C.forwardRef(({ className: e, ...r }, n) =>
      b.jsx(Pp, {
        ref: n,
        className: $A(
          "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          e,
        ),
        ...r,
      }),
    );
  Wp.displayName = Pp.displayName;
  const jp = C.forwardRef(({ className: e, children: r, ...n }, o) =>
    b.jsxs(Kx, {
      children: [
        b.jsx(Wp, {}),
        b.jsxs(_p, {
          ref: o,
          className: $A(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            e,
          ),
          ...n,
          children: [
            r,
            b.jsxs(Lx, {
              className:
                "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              children: [
                b.jsx(mF, { className: "h-4 w-4" }),
                b.jsx("span", { className: "sr-only", children: "Close" }),
              ],
            }),
          ],
        }),
      ],
    }),
  );
  jp.displayName = _p.displayName;
  const Xp = ({ className: e, ...r }) =>
    b.jsx("div", {
      className: $A("flex flex-col space-y-1.5 text-center sm:text-left", e),
      ...r,
    });
  Xp.displayName = "DialogHeader";
  const zp = C.forwardRef(({ className: e, ...r }, n) =>
    b.jsx(Vp, {
      ref: n,
      className: $A("text-lg font-semibold leading-none tracking-tight", e),
      ...r,
    }),
  );
  zp.displayName = Vp.displayName;
  const kx = C.forwardRef(({ className: e, ...r }, n) =>
    b.jsx(Gp, {
      ref: n,
      className: $A("text-sm text-muted-foreground", e),
      ...r,
    }),
  );
  kx.displayName = Gp.displayName;
  /**
   * @license lucide-react v0.441.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Rx = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Jp = (...e) => e.filter((r, n, o) => !!r && o.indexOf(r) === n).join(" ");
  /**
   * @license lucide-react v0.441.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ var Ox = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  /**
   * @license lucide-react v0.441.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Nx = C.forwardRef(
    (
      {
        color: e = "currentColor",
        size: r = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: o,
        className: s = "",
        children: l,
        iconNode: u,
        ...f
      },
      B,
    ) =>
      C.createElement(
        "svg",
        {
          ref: B,
          ...Ox,
          width: r,
          height: r,
          stroke: e,
          strokeWidth: o ? (Number(n) * 24) / Number(r) : n,
          className: Jp("lucide", s),
          ...f,
        },
        [
          ...u.map(([g, w]) => C.createElement(g, w)),
          ...(Array.isArray(l) ? l : [l]),
        ],
      ),
  );
  /**
   * @license lucide-react v0.441.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const wc = (e, r) => {
    const n = C.forwardRef(({ className: o, ...s }, l) =>
      C.createElement(Nx, {
        ref: l,
        iconNode: r,
        className: Jp(`lucide-${Rx(e)}`, o),
        ...s,
      }),
    );
    return (n.displayName = `${e}`), n;
  };
  /**
   * @license lucide-react v0.441.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Mx = wc("Camera", [
    [
      "path",
      {
        d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
        key: "1tc9qg",
      },
    ],
    ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
  ]);
  /**
   * @license lucide-react v0.441.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Px = wc("Loader", [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
  ]);
  /**
   * @license lucide-react v0.441.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const _x = wc("Star", [
      [
        "polygon",
        {
          points:
            "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
          key: "8f66p6",
        },
      ],
    ]),
    Vx = Sl(
      "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
      {
        variants: {
          variant: {
            default: "bg-background text-foreground",
            destructive:
              "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
          },
        },
        defaultVariants: { variant: "default" },
      },
    ),
    Yp = C.forwardRef(({ className: e, variant: r, ...n }, o) =>
      b.jsx("div", {
        ref: o,
        role: "alert",
        className: $A(Vx({ variant: r }), e),
        ...n,
      }),
    );
  Yp.displayName = "Alert";
  const Zp = C.forwardRef(({ className: e, ...r }, n) =>
    b.jsx("h5", {
      ref: n,
      className: $A("mb-1 font-medium leading-none tracking-tight", e),
      ...r,
    }),
  );
  Zp.displayName = "AlertTitle";
  const $p = C.forwardRef(({ className: e, ...r }, n) =>
    b.jsx("div", {
      ref: n,
      className: $A("text-sm [&_p]:leading-relaxed", e),
      ...r,
    }),
  );
  $p.displayName = "AlertDescription";
  const hs =
      '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.fbt-widget{--background: 0 0% 100%;--foreground: 0 0% 3.9%;--card: 0 0% 100%;--card-foreground: 0 0% 3.9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 3.9%;--primary: 0 0% 9%;--primary-foreground: 0 0% 98%;--secondary: 0 0% 96.1%;--secondary-foreground: 0 0% 9%;--muted: 0 0% 96.1%;--muted-foreground: 0 0% 45.1%;--accent: 0 0% 96.1%;--accent-foreground: 0 0% 9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 0 0% 89.8%;--input: 0 0% 89.8%;--ring: 0 0% 3.9%;--chart-1: 12 76% 61%;--chart-2: 173 58% 39%;--chart-3: 197 37% 24%;--chart-4: 43 74% 66%;--chart-5: 27 87% 67%;--radius: .5rem}.dark .fbt-widget{--background: 0 0% 3.9%;--foreground: 0 0% 98%;--card: 0 0% 3.9%;--card-foreground: 0 0% 98%;--popover: 0 0% 3.9%;--popover-foreground: 0 0% 98%;--primary: 0 0% 98%;--primary-foreground: 0 0% 9%;--secondary: 0 0% 14.9%;--secondary-foreground: 0 0% 98%;--muted: 0 0% 14.9%;--muted-foreground: 0 0% 63.9%;--accent: 0 0% 14.9%;--accent-foreground: 0 0% 98%;--destructive: 0 62.8% 30.6%;--destructive-foreground: 0 0% 98%;--border: 0 0% 14.9%;--input: 0 0% 14.9%;--ring: 0 0% 83.1%;--chart-1: 220 70% 50%;--chart-2: 160 60% 45%;--chart-3: 30 80% 55%;--chart-4: 280 65% 60%;--chart-5: 340 75% 55%}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.-right-10{right:-2.5rem}.bottom-1\\/2{bottom:50%}.bottom-4{bottom:1rem}.left-\\[50\\%\\]{left:50%}.right-2{right:.5rem}.right-4{right:1rem}.top-4{top:1rem}.top-\\[50\\%\\]{top:50%}.z-50{z-index:50}.-mx-1{margin-left:-.25rem;margin-right:-.25rem}.my-1{margin-top:.25rem;margin-bottom:.25rem}.mb-1{margin-bottom:.25rem}.mr-2{margin-right:.5rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.h-10{height:2.5rem}.h-2{height:.5rem}.h-3\\.5{height:.875rem}.h-4{height:1rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-auto{height:auto}.h-px{height:1px}.max-h-96{max-height:24rem}.min-h-\\[60px\\]{min-height:60px}.w-2{width:.5rem}.w-3\\.5{width:.875rem}.w-4{width:1rem}.w-6{width:1.5rem}.w-9{width:2.25rem}.w-full{width:100%}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.origin-bottom-left{transform-origin:bottom left}.translate-x-\\[-50\\%\\]{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\]{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:.75rem}.rounded-b-lg{border-bottom-right-radius:var(--radius);border-bottom-left-radius:var(--radius)}.border{border-width:1px}.border-destructive\\/50{border-color:hsl(var(--destructive) / .5)}.border-input{border-color:hsl(var(--input))}.border-violet-300{--tw-border-opacity: 1;border-color:rgb(196 181 253 / var(--tw-border-opacity))}.bg-background{background-color:hsl(var(--background))}.bg-black\\/80{background-color:#000c}.bg-blue-400{--tw-bg-opacity: 1;background-color:rgb(96 165 250 / var(--tw-bg-opacity))}.bg-card{background-color:hsl(var(--card))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-muted{background-color:hsl(var(--muted))}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-red-300{--tw-bg-opacity: 1;background-color:rgb(252 165 165 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-secondary{background-color:hsl(var(--secondary))}.bg-teal-300{--tw-bg-opacity: 1;background-color:rgb(94 234 212 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-violet-500{--tw-bg-opacity: 1;background-color:rgb(139 92 246 / var(--tw-bg-opacity))}.bg-yellow-300{--tw-bg-opacity: 1;background-color:rgb(253 224 71 / var(--tw-bg-opacity))}.fill-yellow-400{fill:#facc15}.p-0{padding:0}.p-1{padding:.25rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pl-2{padding-left:.5rem}.pr-8{padding-right:2rem}.pt-0{padding-top:0}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.text-card-foreground{color:hsl(var(--card-foreground))}.text-destructive{color:hsl(var(--destructive))}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-foreground{color:hsl(var(--foreground))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.text-violet-700{--tw-text-opacity: 1;color:rgb(109 40 217 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-yellow-400{--tw-text-opacity: 1;color:rgb(250 204 21 / var(--tw-text-opacity))}.underline-offset-4{text-underline-offset:4px}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-offset-background{--tw-ring-offset-color: hsl(var(--background))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-500{transition-duration:.5s}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.duration-200{animation-duration:.2s}.duration-500{animation-duration:.5s}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:bg-violet-50:hover{--tw-bg-opacity: 1;background-color:rgb(245 243 255 / var(--tw-bg-opacity))}.hover\\:bg-violet-600:hover{--tw-bg-opacity: 1;background-color:rgb(124 58 237 / var(--tw-bg-opacity))}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:text-violet-500:hover{--tw-text-opacity: 1;color:rgb(139 92 246 / var(--tw-text-opacity))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.focus\\:bg-accent:focus{background-color:hsl(var(--accent))}.focus\\:text-accent-foreground:focus{color:hsl(var(--accent-foreground))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-ring:focus{--tw-ring-color: hsl(var(--ring))}.focus\\:ring-violet-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(139 92 246 / var(--tw-ring-opacity))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color: hsl(var(--ring))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-70{opacity:.7}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y: .25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x: .25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:hsl(var(--muted-foreground))}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity: 0}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity: 0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale: .95}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale: .95}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y: -.5rem}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x: .5rem}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x: -.5rem}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y: .5rem}.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed]{--tw-exit-translate-x: -50%}.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed]{--tw-exit-translate-y: -48%}.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open]{--tw-enter-translate-x: -50%}.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open]{--tw-enter-translate-y: -48%}.dark\\:border-destructive:is(.dark *){border-color:hsl(var(--destructive))}@media (min-width: 640px){.sm\\:max-w-\\[425px\\]{max-width:425px}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.sm\\:rounded-lg{border-radius:var(--radius)}.sm\\:text-left{text-align:left}}.\\[\\&\\>span\\]\\:line-clamp-1>span{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.\\[\\&\\>svg\\+div\\]\\:translate-y-\\[-3px\\]>svg+div{--tw-translate-y: -3px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>svg\\]\\:absolute>svg{position:absolute}.\\[\\&\\>svg\\]\\:left-4>svg{left:1rem}.\\[\\&\\>svg\\]\\:top-4>svg{top:1rem}.\\[\\&\\>svg\\]\\:text-destructive>svg{color:hsl(var(--destructive))}.\\[\\&\\>svg\\]\\:text-foreground>svg{color:hsl(var(--foreground))}.\\[\\&\\>svg\\~\\*\\]\\:pl-7>svg~*{padding-left:1.75rem}.\\[\\&_p\\]\\:leading-relaxed p{line-height:1.625}',
    Gx = [
      { value: "feature", label: "Feature", color: "bg-yellow-300" },
      { value: "bug", label: "Bug", color: "bg-red-300" },
      { value: "question", label: "General Question", color: "bg-blue-400" },
      { value: "other", label: "Other", color: "bg-teal-300" },
    ];
  function Wx({ projectId: e }) {
    const [r, n] = C.useState(""),
      [o, s] = C.useState(0),
      [l, u] = C.useState(""),
      [f, B] = C.useState(!1),
      [g, w] = C.useState(!1),
      [h, v] = C.useState(null),
      [U, Q] = C.useState(!1),
      [m, F] = C.useState(null),
      E = C.useRef(null),
      [I, R] = C.useState(null),
      [T, k] = C.useState(null),
      [O, P] = C.useState({}),
      j = () => {
        const J = {};
        return (
          r || (J.feedbackType = "Please select a feedback type"),
          l.trim() || (J.feedback = "Please provide your feedback"),
          r === "feature" && o === 0 && (J.rating = "Please provide a rating"),
          P(J),
          Object.keys(J).length === 0
        );
      },
      X = (J, AA) => {
        F({ message: J, type: AA }), setTimeout(() => F(null), 5e3);
      },
      sA = async (J) => {
        if ((J.preventDefault(), !!j())) {
          Q(!0);
          try {
            const AA = new FormData();
            if (
              (AA.append("projectId", e),
              AA.append("type", r),
              r === "feature" && AA.append("rating", o),
              AA.append("feedback", l),
              h)
            ) {
              const G = await (await fetch(h)).blob();
              AA.append("screenshot", G, "screenshot.png");
            }
            const Y = await fetch(
              "https://feedback-thing.vercel.app/api/submit-feedback",
              { method: "POST", body: AA },
            );
            if (!Y.ok) {
              const N = await Y.json();
              throw new Error(N.error || "Failed to submit feedback");
            }
            X("Feedback submitted successfully!", "success"),
              n(""),
              s(0),
              u(""),
              v(null),
              B(!1);
          } catch (AA) {
            console.error("Error submitting feedback:", AA),
              X(AA.message, "error");
          } finally {
            Q(!1);
          }
        }
      },
      dA = () => {
        B(!1),
          setTimeout(() => {
            w(!0);
          }, 100);
      },
      q = (J) => {
        g && R({ x: J.clientX, y: J.clientY });
      },
      tA = (J) => {
        g && I && k({ x: J.clientX, y: J.clientY });
      },
      oA = async () => {
        if (g && I && T) {
          const J = Math.min(I.x, T.x),
            AA = Math.min(I.y, T.y),
            Y = Math.abs(T.x - I.x),
            N = Math.abs(T.y - I.y),
            Z = (
              await vU(document.body, {
                x: J,
                y: AA,
                width: Y,
                height: N,
                useCORS: !0,
                allowTaint: !0,
              })
            ).toDataURL("image/png");
          v(Z), w(!1), R(null), k(null), B(!0);
        }
      };
    return (
      C.useEffect(() => {
        if (g)
          return (
            document.addEventListener("mousedown", q),
            document.addEventListener("mousemove", tA),
            document.addEventListener("mouseup", oA),
            () => {
              document.removeEventListener("mousedown", q),
                document.removeEventListener("mousemove", tA),
                document.removeEventListener("mouseup", oA);
            }
          );
      }, [g, I, T]),
      e === null || e == null
        ? b.jsxs(Yp, {
            variant: "destructive",
            children: [
              b.jsx("style", { children: hs }),
              b.jsx(Zp, {
                className: "fbt-widget items-center justify-center text-center",
                children: "Error",
              }),
              b.jsx($p, {
                className: "fbt-widget items-center justify-center text-center",
                children:
                  "Unable to load the feedback widget. Project ID is missing.",
              }),
              b.jsx("div", {
                className: "flex justify-center mt-4",
                children: b.jsxs("a", {
                  href: "https://www.feedbackthing.pro",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex items-center space-x-2 text-sm text-gray-500 hover:text-violet-500 transition-colors",
                  children: [
                    b.jsx("img", {
                      src: "https://www.feedbackthing.pro/favicon.ico",
                      alt: "Feedbackthing Logo",
                      className: "h-4 w-4",
                    }),
                    b.jsx("span", { children: "Powered by feedbackthing.pro" }),
                  ],
                }),
              }),
            ],
          })
        : b.jsxs(b.Fragment, {
            children: [
              b.jsx("style", { children: hs }),
              g &&
                b.jsx("div", {
                  ref: E,
                  style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    cursor: "crosshair",
                    zIndex: 9999,
                  },
                  children:
                    I &&
                    T &&
                    b.jsx("div", {
                      style: {
                        position: "absolute",
                        left: Math.min(I.x, T.x),
                        top: Math.min(I.y, T.y),
                        width: Math.abs(T.x - I.x),
                        height: Math.abs(T.y - I.y),
                        border: "2px solid #4CAF50",
                        backgroundColor: "rgba(76, 175, 80, 0.1)",
                      },
                    }),
                }),
              b.jsxs(Tx, {
                open: f,
                onOpenChange: B,
                children: [
                  b.jsx("style", { children: hs }),
                  b.jsx(Dx, {
                    asChild: !0,
                    children: b.jsx(Xi, {
                      className:
                        "fbt-widget fixed -right-10 bottom-1/2 origin-bottom-left rotate-[-90deg] bg-violet-500 px-4 py-2 text-white hover:bg-violet-600",
                      children: "Feedback",
                    }),
                  }),
                  b.jsxs(jp, {
                    className: "fbt-widget sm:max-w-[425px] p-0",
                    children: [
                      b.jsx("style", { children: hs }),
                      b.jsxs("div", {
                        className: "p-6",
                        children: [
                          b.jsxs(Xp, {
                            children: [
                              b.jsx(zp, {
                                className:
                                  "text-violet-700 text-xl font-semibold",
                                children: "Send us your feedback",
                              }),
                              b.jsx(gc, {}),
                            ],
                          }),
                          b.jsxs("form", {
                            onSubmit: sA,
                            className: "mt-4 space-y-4",
                            children: [
                              b.jsxs("div", {
                                children: [
                                  b.jsx(zi, {
                                    htmlFor: "feedbackType",
                                    className: "text-violet-700",
                                    children: "Feedback Type",
                                  }),
                                  b.jsxs(Bx, {
                                    value: r,
                                    onValueChange: (J) => n(J),
                                    children: [
                                      b.jsx(Cp, {
                                        id: "feedbackType",
                                        className:
                                          "w-full border-violet-300 focus:ring-violet-500",
                                        children: b.jsx(gx, {
                                          placeholder: "Select feedback type",
                                        }),
                                      }),
                                      b.jsx(Up, {
                                        className: "fbt-widget",
                                        children: Gx.map((J) =>
                                          b.jsx(
                                            Fp,
                                            {
                                              value: J.value,
                                              children: b.jsxs("div", {
                                                className: "flex items-center",
                                                children: [
                                                  b.jsx("span", {
                                                    className: `w-2 h-2 rounded-full mr-2 ${J.color}`,
                                                  }),
                                                  J.label,
                                                ],
                                              }),
                                            },
                                            J.value,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                  O.feedbackType &&
                                    b.jsx("p", {
                                      className: "text-red-500 text-sm mt-1",
                                      children: O.feedbackType,
                                    }),
                                ],
                              }),
                              r === "feature" &&
                                b.jsxs("div", {
                                  children: [
                                    b.jsx(zi, {
                                      className: "text-violet-700",
                                      children: "Feature Rating",
                                    }),
                                    b.jsx("div", {
                                      className: "flex items-center",
                                      children: [1, 2, 3, 4, 5].map((J) =>
                                        b.jsx(
                                          _x,
                                          {
                                            className: `h-6 w-6 cursor-pointer ${J <= o ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`,
                                            onClick: () => s(J),
                                          },
                                          J,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              r === "bug" &&
                                b.jsxs("div", {
                                  children: [
                                    b.jsxs(Xi, {
                                      type: "button",
                                      variant: "outline",
                                      onClick: dA,
                                      className:
                                        "flex items-center border-violet-300 text-violet-700 hover:bg-violet-50",
                                      children: [
                                        b.jsx(Mx, {
                                          className: "mr-2 h-4 w-4",
                                        }),
                                        "Take Screenshot",
                                      ],
                                    }),
                                    h &&
                                      b.jsx("div", {
                                        className: "mt-2",
                                        children: b.jsx("img", {
                                          src: h,
                                          alt: "Screenshot",
                                          className: "max-w-full h-auto",
                                        }),
                                      }),
                                  ],
                                }),
                              b.jsxs("div", {
                                children: [
                                  b.jsx(zi, {
                                    htmlFor: "feedback",
                                    className: "text-violet-700",
                                    children: "Your Feedback",
                                  }),
                                  b.jsx(RB, {
                                    id: "feedback",
                                    value: l,
                                    onChange: (J) => u(J.target.value),
                                    placeholder:
                                      "Please provide your feedback here...",
                                    className:
                                      "w-full border-violet-300 focus:ring-violet-500",
                                    rows: 4,
                                  }),
                                ],
                              }),
                              b.jsx(Xi, {
                                type: "submit",
                                className:
                                  "w-full bg-violet-500 text-white hover:bg-violet-600",
                                disabled: U,
                                children: U
                                  ? b.jsxs(b.Fragment, {
                                      children: [
                                        b.jsx(Px, {
                                          className:
                                            "mr-2 h-4 w-4 animate-spin",
                                        }),
                                        "Submitting...",
                                      ],
                                    })
                                  : "Submit Feedback",
                              }),
                            ],
                          }),
                        ],
                      }),
                      b.jsx("div", {
                        className:
                          "bg-gray-50 p-4 flex justify-center rounded-b-lg",
                        children: b.jsxs("a", {
                          href: "https://www.feedbackthing.pro",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center space-x-2 text-sm text-gray-500 hover:text-violet-500 transition-colors",
                          children: [
                            b.jsx("img", {
                              src: "https://www.feedbackthing.pro/favicon.ico",
                              alt: "Feedbackthing Logo",
                              className: "h-4 w-4",
                            }),
                            b.jsx("span", {
                              children: "Powered by feedbackthing.pro",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              m &&
                b.jsx("div", {
                  className: `fixed bottom-4 right-4 z-50 ${m.type === "error" ? "bg-red-500" : "bg-green-500"} text-white p-4 rounded-md shadow-lg transition-opacity duration-500 fbt-widget`,
                  style: { opacity: 1, animation: "fadeOut 5s forwards" },
                  children: m.message,
                }),
              b.jsx("style", {
                children: `
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `,
              }),
            ],
          })
    );
  }
  const jx = (e) => e.replace(/-([a-z])/g, (r, n) => n.toUpperCase());
  class Xx extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const r = this.getPropsFromAttributes();
      Ha.createRoot(this.shadowRoot).render(b.jsx(Wx, { ...r }));
    }
    getPropsFromAttributes() {
      const r = {};
      for (const { name: n, value: o } of this.attributes) r[jx(n)] = o;
      return r;
    }
  }
  customElements.define("feedback-thing", Xx);
});
