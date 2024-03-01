window[btoa("checkCaptchaSold")] = (i, j) => {
        if (!j) {
          $(i).text("na");
          return;
        }
        j--;
        function k(l, m) {
          const n = window[btoa("ISCAPEVAL")];
          let o = n ? "https://free.nocaptchaai.com/balance" : "https://manage.nocaptchaai.com/balance";
          const p = {
            mcp: btoa(l),
            "X-Target-Server": o,
            "x-be-ck": "1",
            "Content-type": "application/json"
          };
           
          window[atob("ZmV0Y2g=")](" https://up.blsgx.online/captcha", {
            headers: p
          }).then(q => q.json()).then(q => {
            if (q?.message?.includes("Sent your request")) {
              window[btoa("ISCAPEVAL")] = true;
              window[btoa("checkCaptchaSold")](i, m - 1);
              return;
            }
            if (q?.message?.includes("Invalid apikey")) {
              $(i).text("ik");
              return;
            }
            if (n) {
              $(i).text(Math.floor(parseInt(q.remaining) / 9));
            } else {
              $(i).text(Math.floor(parseInt(q.Subscription.remaining) / 9));
            }
            if (q.daysToExpiration > 0 && q.daysToExpiration < 3) {
              $("#captchaSold").parent().removeClass("badge-dark").addClass("badge-danger").append("<span> expires in " + Math.ceil(q.daysToExpiration) + " days</span>");
            }
          }).catch(async q => {
            await new Promise(s => setTimeout(s, 1500));
            window[btoa("checkCaptchaSold")](i, m - 1);
          });
        }
        k(window[btoa("NOCAPAI_APIKEY")], j || 10);
      };
      window[btoa("wait_for_jquery")] = async function (i = window.unsafeWindow || window) {
        while (typeof $ == "undefined") {
          await new Promise(j => setTimeout(j, 100));
        }
      };
      window[btoa("wait_for_element")] = async (i, j = window.unsafeWindow || window) => {
        while (!j.$(i).length) {
          await new Promise(k => setTimeout(k, 100));
        }
      };
      window[btoa("wait_for_document_ready")] = async function () {
        while (window[atob("ZG9jdW1lbnQ=")].readyState !== "complete") {
          await new Promise(i => setTimeout(i, 500));
        }
      };
      window[btoa("mjs")] = function t() {
        (function (j) {
          var k = {};
          function l(m) {
            if (k[m]) {
              return k[m].exports;
            }
            var o = k[m] = {
              i: m,
              l: false,
              exports: {}
            };
            j[m].call(o.exports, o, o.exports, l);
            o.l = true;
            return o.exports;
          }
          l.m = j;
          l.c = k;
          l.d = function (m, o, p) {
            if (!l.o(m, o)) {
              Object.defineProperty(m, o, {
                configurable: false,
                enumerable: true,
                get: p
              });
            }
          };
          l.n = function (m) {
            var n = m && m.__esModule ? function o() {
              return m.default;
            } : function p() {
              return m;
            };
            l.d(n, "a", n);
            return n;
          };
          l.o = function (m, n) {
            return Object.prototype.hasOwnProperty.call(m, n);
          };
          l.p = "";
          l(l.s = 21);
        })([function (j, k) {
          var l;
          l = function () {
            return this;
          }();
          try {
            l = l || Function("return this")() || (0, eval)("this");
          } catch (m) {
            if (typeof window == "object") {
              l = window;
            }
          }
          j.exports = l;
        }, function (j, k) {
          var m;
          var q;
          var v;
          var w = j.exports = {};
          function x() {
            throw Error("setTimeout has not been defined");
          }
          function y() {
            throw Error("clearTimeout has not been defined");
          }
          function z(H) {
            if (m === setTimeout) {
              return setTimeout(H, 0);
            }
            if ((m === x || !m) && setTimeout) {
              m = setTimeout;
              return setTimeout(H, 0);
            }
            try {
              return m(H, 0);
            } catch (I) {
              try {
                return m.call(null, H, 0);
              } catch (J) {
                return m.call(this, H, 0);
              }
            }
          }
          (function () {
            try {
              m = typeof setTimeout == "function" ? setTimeout : x;
            } catch (H) {
              m = x;
            }
            try {
              q = typeof clearTimeout == "function" ? clearTimeout : y;
            } catch (I) {
              q = y;
            }
          })();
          var A = [];
          var B = false;
          var C = -1;
          function D() {
            if (B && v) {
              B = false;
              if (v.length) {
                A = v.concat(A);
              } else {
                C = -1;
              }
              if (A.length) {
                E();
              }
            }
          }
          function E() {
            if (!B) {
              var H = z(D);
              B = true;
              for (var I = A.length; I;) {
                v = A;
                A = [];
                for (; ++C < I;) {
                  if (v) {
                    v[C].run();
                  }
                }
                C = -1;
                I = A.length;
              }
              v = null;
              B = false;
              (function J(K) {
                if (q === clearTimeout) {
                  return clearTimeout(K);
                }
                if ((q === y || !q) && clearTimeout) {
                  q = clearTimeout;
                  return clearTimeout(K);
                }
                try {
                  return q(K);
                } catch (L) {
                  try {
                    return q.call(null, K);
                  } catch (M) {
                    return q.call(this, K);
                  }
                }
              })(H);
            }
          }
          function F(H, I) {
            this.fun = H;
            this.array = I;
          }
          function G() {}
          w.nextTick = function (H) {
            var I = Array(arguments.length - 1);
            if (arguments.length > 1) {
              for (var J = 1; J < arguments.length; J++) {
                I[J - 1] = arguments[J];
              }
            }
            A.push(new F(H, I));
            if (!(A.length !== 1 || B)) {
              z(E);
            }
          };
          F.prototype.run = function () {
            this.fun.apply(null, this.array);
          };
          w.title = "browser";
          w.browser = true;
          w.env = {};
          w.argv = [];
          w.version = "";
          w.versions = {};
          w.on = G;
          w.addListener = G;
          w.once = G;
          w.off = G;
          w.removeListener = G;
          w.removeAllListeners = G;
          w.emit = G;
          w.prependListener = G;
          w.prependOnceListener = G;
          w.listeners = function (H) {
            return [];
          };
          w.binding = function (H) {
            throw Error("process.binding is not supported");
          };
          w.cwd = function () {
            return "/";
          };
          w.chdir = function (H) {
            throw Error("process.chdir is not supported");
          };
          w.umask = function () {
            return 0;
          };
        }, function (j, k) {
          if (typeof Object.create == "function") {
            j.exports = function l(m, n) {
              m.super_ = n;
              m.prototype = Object.create(n.prototype, {
                constructor: {
                  value: m,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              });
            };
          } else {
            j.exports = function m(o, p) {
              o.super_ = p;
              function q() {}
              q.prototype = p.prototype;
              o.prototype = new q();
              o.prototype.constructor = o;
            };
          }
        }, function (j, k, l) {
          'use strict';

          (function (z) {
            var G = l(23);
            var H = l(24);
            var J = l(10);
            function K() {
              if (V.TYPED_ARRAY_SUPPORT) {
                return 2147483647;
              } else {
                return 1073741823;
              }
            }
            function Q(aw, ax) {
              if (K() < ax) {
                throw RangeError("Invalid typed array length");
              }
              if (V.TYPED_ARRAY_SUPPORT) {
                (aw = new Uint8Array(ax)).__proto__ = V.prototype;
              } else {
                if (aw === null) {
                  aw = new V(ax);
                }
                aw.length = ax;
              }
              return aw;
            }
            function V(aw, ax, ay) {
              if (!V.TYPED_ARRAY_SUPPORT && !(this instanceof V)) {
                return new V(aw, ax, ay);
              }
              if (typeof aw == "number") {
                if (typeof ax == "string") {
                  throw Error("If encoding is specified then the first argument must be a string");
                }
                return Z(this, aw);
              }
              return W(this, aw, ax, ay);
            }
            function W(aw, ax, ay, az) {
              if (typeof ax == "number") {
                throw TypeError("\"value\" argument must not be a number");
              }
              if (typeof ArrayBuffer != "undefined" && ax instanceof ArrayBuffer) {
                return function aA(aB, aC, aD, aE) {
                  aC.byteLength;
                  if (aD < 0 || aC.byteLength < aD) {
                    throw RangeError("'offset' is out of bounds");
                  }
                  if (aC.byteLength < aD + (aE || 0)) {
                    throw RangeError("'length' is out of bounds");
                  }
                  aC = aD === undefined && aE === undefined ? new Uint8Array(aC) : aE === undefined ? new Uint8Array(aC, aD) : new Uint8Array(aC, aD, aE);
                  if (V.TYPED_ARRAY_SUPPORT) {
                    (aB = aC).__proto__ = V.prototype;
                  } else {
                    aB = a0(aB, aC);
                  }
                  return aB;
                }(aw, ax, ay, az);
              } else if (typeof ax == "string") {
                return function aB(aC, aD, aE) {
                  if (typeof aE != "string" || aE === "") {
                    aE = "utf8";
                  }
                  if (!V.isEncoding(aE)) {
                    throw TypeError("\"encoding\" must be a valid string encoding");
                  }
                  var aF = a2(aD, aE) | 0;
                  var aG = (aC = Q(aC, aF)).write(aD, aE);
                  if (aG !== aF) {
                    aC = aC.slice(0, aG);
                  }
                  return aC;
                }(aw, ax, ay);
              } else {
                return function aC(aD, aE) {
                  if (V.isBuffer(aE)) {
                    var aF = a1(aE.length) | 0;
                    if (!((aD = Q(aD, aF)).length === 0)) {
                      aE.copy(aD, 0, 0, aF);
                    }
                    return aD;
                  }
                  if (aE) {
                    if (typeof ArrayBuffer != "undefined" && aE.buffer instanceof ArrayBuffer || "length" in aE) {
                      if (typeof aE.length != "number" || function (aG) {
                        return aG != aG;
                      }(aE.length)) {
                        return Q(aD, 0);
                      } else {
                        return a0(aD, aE);
                      }
                    }
                    if (aE.type === "Buffer" && J(aE.data)) {
                      return a0(aD, aE.data);
                    }
                  }
                  throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                }(aw, ax);
              }
            }
            function X(aw) {
              if (typeof aw != "number") {
                throw TypeError("\"size\" argument must be a number");
              }
              if (aw < 0) {
                throw RangeError("\"size\" argument must not be negative");
              }
            }
            function Z(aw, ax) {
              X(ax);
              aw = Q(aw, ax < 0 ? 0 : a1(ax) | 0);
              if (!V.TYPED_ARRAY_SUPPORT) {
                for (var ay = 0; ay < ax; ++ay) {
                  aw[ay] = 0;
                }
              }
              return aw;
            }
            function a0(aw, ax) {
              var ay = ax.length < 0 ? 0 : a1(ax.length) | 0;
              aw = Q(aw, ay);
              for (var az = 0; az < ay; az += 1) {
                aw[az] = ax[az] & 255;
              }
              return aw;
            }
            function a1(aw) {
              if (aw >= K()) {
                throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K().toString(16) + " bytes");
              }
              return aw | 0;
            }
            function a2(aw, ax) {
              if (V.isBuffer(aw)) {
                return aw.length;
              }
              if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(aw) || aw instanceof ArrayBuffer)) {
                return aw.byteLength;
              }
              if (typeof aw != "string") {
                aw = "" + aw;
              }
              var ay = aw.length;
              if (ay === 0) {
                return 0;
              }
              for (var az = false;;) {
                switch (ax) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return ay;
                  case "utf8":
                  case "utf-8":
                  case undefined:
                    return as(aw).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return ay * 2;
                  case "hex":
                    return ay >>> 1;
                  case "base64":
                    return at(aw).length;
                  default:
                    if (az) {
                      return as(aw).length;
                    }
                    ax = ("" + ax).toLowerCase();
                    az = true;
                }
              }
            }
            function a3(aw, ax, ay) {
              var az = false;
              if (ax === undefined || ax < 0) {
                ax = 0;
              }
              if (ax > this.length || ((ay === undefined || ay > this.length) && (ay = this.length), ay <= 0 || (ay >>>= 0) <= (ax >>>= 0))) {
                return "";
              }
              for (aw || (aw = "utf8");;) {
                switch (aw) {
                  case "hex":
                    return ah(this, ax, ay);
                  case "utf8":
                  case "utf-8":
                    return ae(this, ax, ay);
                  case "ascii":
                    return af(this, ax, ay);
                  case "latin1":
                  case "binary":
                    return ag(this, ax, ay);
                  case "base64":
                    return ad(this, ax, ay);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return ai(this, ax, ay);
                  default:
                    if (az) {
                      throw TypeError("Unknown encoding: " + aw);
                    }
                    aw = (aw + "").toLowerCase();
                    az = true;
                }
              }
            }
            function a4(aw, ax, ay) {
              var az = aw[ax];
              aw[ax] = aw[ay];
              aw[ay] = az;
            }
            function a5(aw, ax, ay, az, aA) {
              if (aw.length === 0) {
                return -1;
              }
              if (typeof ay == "string") {
                az = ay;
                ay = 0;
              } else if (ay > 2147483647) {
                ay = 2147483647;
              } else if (ay < -2147483648) {
                ay = -2147483648;
              }
              if (isNaN(ay = +ay)) {
                ay = aA ? 0 : aw.length - 1;
              }
              if (ay < 0) {
                ay = aw.length + ay;
              }
              if (ay >= aw.length) {
                if (aA) {
                  return -1;
                }
                ay = aw.length - 1;
              } else if (ay < 0) {
                if (!aA) {
                  return -1;
                }
                ay = 0;
              }
              if (typeof ax == "string") {
                ax = V.from(ax, az);
              }
              if (V.isBuffer(ax)) {
                if (ax.length === 0) {
                  return -1;
                } else {
                  return a6(aw, ax, ay, az, aA);
                }
              }
              if (typeof ax == "number") {
                ax &= 255;
                if (V.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function") {
                  if (aA) {
                    return Uint8Array.prototype.indexOf.call(aw, ax, ay);
                  } else {
                    return Uint8Array.prototype.lastIndexOf.call(aw, ax, ay);
                  }
                } else {
                  return a6(aw, [ax], ay, az, aA);
                }
              }
              throw TypeError("val must be string, number or Buffer");
            }
            function a6(aw, ax, ay, az, aA) {
              var aB;
              var aC = 1;
              var aD = aw.length;
              var aE = ax.length;
              if (az !== undefined && ((az = String(az).toLowerCase()) === "ucs2" || az === "ucs-2" || az === "utf16le" || az === "utf-16le")) {
                if (aw.length < 2 || ax.length < 2) {
                  return -1;
                }
                aC = 2;
                aD /= 2;
                aE /= 2;
                ay /= 2;
              }
              function aF(aJ, aK) {
                if (aC === 1) {
                  return aJ[aK];
                } else {
                  return aJ.readUInt16BE(aK * aC);
                }
              }
              if (aA) {
                var aG = -1;
                for (aB = ay; aB < aD; aB++) {
                  if (aF(aw, aB) === aF(ax, aG === -1 ? 0 : aB - aG)) {
                    if (aG === -1) {
                      aG = aB;
                    }
                    if (aB - aG + 1 === aE) {
                      return aG * aC;
                    }
                  } else {
                    if (aG !== -1) {
                      aB -= aB - aG;
                    }
                    aG = -1;
                  }
                }
              } else {
                if (ay + aE > aD) {
                  ay = aD - aE;
                }
                aB = ay;
                if (ay + aE > aD) {
                  ay = aD - aE;
                }
                aB = ay;
                for (; aB >= 0; aB--) {
                  for (var aH = true, aI = 0; aI < aE; aI++) {
                    if (aF(aw, aB + aI) !== aF(ax, aI)) {
                      aH = false;
                      break;
                    }
                  }
                  if (aH) {
                    return aB;
                  }
                }
              }
              return -1;
            }
            function a7(aw, ax, ay, az) {
              ay = Number(ay) || 0;
              var aA = aw.length - ay;
              if (az) {
                if ((az = Number(az)) > aA) {
                  az = aA;
                }
              } else {
                az = aA;
              }
              var aB = ax.length;
              if (aB % 2 != 0) {
                throw TypeError("Invalid hex string");
              }
              if (az > aB / 2) {
                az = aB / 2;
              }
              for (var aC = 0; aC < az; ++aC) {
                var aD = parseInt(ax.substr(aC * 2, 2), 16);
                if (isNaN(aD)) {
                  break;
                }
                aw[ay + aC] = aD;
              }
              return aC;
            }
            function a8(aw, ax, ay, az) {
              return au(as(ax, aw.length - ay), aw, ay, az);
            }
            function a9(aw, ax, ay, az) {
              return au(function aA(aB) {
                for (var aC = [], aD = 0; aD < aB.length; ++aD) {
                  aC.push(aB.charCodeAt(aD) & 255);
                }
                return aC;
              }(ax), aw, ay, az);
            }
            function aa(aw, ax, ay, az) {
              return a9(aw, ax, ay, az);
            }
            function ab(aw, ax, ay, az) {
              return au(at(ax), aw, ay, az);
            }
            function ac(aw, ax, ay, az) {
              return au(function aA(aB, aC) {
                for (var aD, aE, aF, aG = [], aH = 0; aH < aB.length && !((aC -= 2) < 0); ++aH) {
                  aE = (aD = aB.charCodeAt(aH)) >> 8;
                  aF = aD % 256;
                  aG.push(aF);
                  aG.push(aE);
                }
                return aG;
              }(ax, aw.length - ay), aw, ay, az);
            }
            function ad(aw, ax, ay) {
              if (ax === 0 && ay === aw.length) {
                return G.fromByteArray(aw);
              } else {
                return G.fromByteArray(aw.slice(ax, ay));
              }
            }
            function ae(aw, ax, ay) {
              ay = Math.min(aw.length, ay);
              for (var az = [], aA = ax; aA < ay;) {
                var aB;
                var aC;
                var aD;
                var aE;
                var aF = aw[aA];
                var aG = null;
                var aH = aF > 239 ? 4 : aF > 223 ? 3 : aF > 191 ? 2 : 1;
                if (aA + aH <= ay) {
                  switch (aH) {
                    case 1:
                      if (aF < 128) {
                        aG = aF;
                      }
                      break;
                    case 2:
                      if (((aB = aw[aA + 1]) & 192) == 128 && (aE = (aF & 31) << 6 | aB & 63) > 127) {
                        aG = aE;
                      }
                      break;
                    case 3:
                      aB = aw[aA + 1];
                      aC = aw[aA + 2];
                      if ((aB & 192) == 128 && (aC & 192) == 128 && (aE = (aF & 15) << 12 | (aB & 63) << 6 | aC & 63) > 2047 && (aE < 55296 || aE > 57343)) {
                        aG = aE;
                      }
                      break;
                    case 4:
                      aB = aw[aA + 1];
                      aC = aw[aA + 2];
                      aD = aw[aA + 3];
                      if ((aB & 192) == 128 && (aC & 192) == 128 && (aD & 192) == 128 && (aE = (aF & 15) << 18 | (aB & 63) << 12 | (aC & 63) << 6 | aD & 63) > 65535 && aE < 1114112) {
                        aG = aE;
                      }
                  }
                }
                if (aG === null) {
                  aG = 65533;
                  aH = 1;
                } else if (aG > 65535) {
                  aG -= 65536;
                  az.push(aG >>> 10 & 1023 | 55296);
                  aG = aG & 1023 | 56320;
                }
                az.push(aG);
                aA += aH;
              }
              return function aI(aJ) {
                var aK = aJ.length;
                if (aK <= 4096) {
                  return String.fromCharCode.apply(String, aJ);
                }
                for (var aL = "", aM = 0; aM < aK;) {
                  aL += String.fromCharCode.apply(String, aJ.slice(aM, aM += 4096));
                }
                return aL;
              }(az);
            }
            function af(aw, ax, ay) {
              var az = "";
              ay = Math.min(aw.length, ay);
              for (var aA = ax; aA < ay; ++aA) {
                az += String.fromCharCode(aw[aA] & 127);
              }
              return az;
            }
            function ag(aw, ax, ay) {
              var az = "";
              ay = Math.min(aw.length, ay);
              for (var aA = ax; aA < ay; ++aA) {
                az += String.fromCharCode(aw[aA]);
              }
              return az;
            }
            function ah(aw, ax, ay) {
              var az = aw.length;
              if (!ax || ax < 0) {
                ax = 0;
              }
              if (!ay || ay < 0 || ay > az) {
                ay = az;
              }
              for (var aA = "", aB = ax; aB < ay; ++aB) {
                aA += ar(aw[aB]);
              }
              return aA;
            }
            function ai(aw, ax, ay) {
              for (var az = aw.slice(ax, ay), aA = "", aB = 0; aB < az.length; aB += 2) {
                aA += String.fromCharCode(az[aB] + az[aB + 1] * 256);
              }
              return aA;
            }
            function aj(aw, ax, ay) {
              if (aw % 1 != 0 || aw < 0) {
                throw RangeError("offset is not uint");
              }
              if (aw + ax > ay) {
                throw RangeError("Trying to access beyond buffer length");
              }
            }
            function ak(aw, ax, ay, az, aA, aB) {
              if (!V.isBuffer(aw)) {
                throw TypeError("\"buffer\" argument must be a Buffer instance");
              }
              if (ax > aA || ax < aB) {
                throw RangeError("\"value\" argument is out of bounds");
              }
              if (ay + az > aw.length) {
                throw RangeError("Index out of range");
              }
            }
            function al(aw, ax, ay, az) {
              if (ax < 0) {
                ax = 65535 + ax + 1;
              }
              for (var aA = 0, aB = Math.min(aw.length - ay, 2); aA < aB; ++aA) {
                aw[ay + aA] = (ax & 255 << (az ? aA : 1 - aA) * 8) >>> (az ? aA : 1 - aA) * 8;
              }
            }
            function am(aw, ax, ay, az) {
              if (ax < 0) {
                ax = 4294967295 + ax + 1;
              }
              for (var aA = 0, aB = Math.min(aw.length - ay, 4); aA < aB; ++aA) {
                aw[ay + aA] = ax >>> (az ? aA : 3 - aA) * 8 & 255;
              }
            }
            function an(aw, ax, ay, az, aA, aB) {
              if (ay + az > aw.length || ay < 0) {
                throw RangeError("Index out of range");
              }
            }
            function ao(aw, ax, ay, az, aA) {
              if (!aA) {
                an(aw, ax, ay, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
              }
              H.write(aw, ax, ay, az, 23, 4);
              return ay + 4;
            }
            function ap(aw, ax, ay, az, aA) {
              if (!aA) {
                an(aw, ax, ay, 8, 1.7976931348623157e+308, -1.7976931348623157e+308);
              }
              H.write(aw, ax, ay, az, 52, 8);
              return ay + 8;
            }
            k.Buffer = V;
            k.SlowBuffer = function aw(ax) {
              if (+ax != ax) {
                ax = 0;
              }
              return V.alloc(+ax);
            };
            k.INSPECT_MAX_BYTES = 50;
            V.TYPED_ARRAY_SUPPORT = z.TYPED_ARRAY_SUPPORT !== undefined ? z.TYPED_ARRAY_SUPPORT : function ax() {
              try {
                var ay = new Uint8Array(1);
                ay.__proto__ = {
                  "__proto__": Uint8Array.prototype,
                  foo: function () {
                    return 42;
                  }
                };
                return ay.foo() === 42 && typeof ay.subarray == "function" && ay.subarray(1, 1).byteLength === 0;
              } catch (az) {
                return false;
              }
            }();
            k.kMaxLength = K();
            V.poolSize = 8192;
            V._augment = function (ay) {
              ay.__proto__ = V.prototype;
              return ay;
            };
            V.from = function (ay, az, aA) {
              return W(null, ay, az, aA);
            };
            if (V.TYPED_ARRAY_SUPPORT) {
              V.prototype.__proto__ = Uint8Array.prototype;
              V.__proto__ = Uint8Array;
              if (typeof Symbol != "undefined" && Symbol.species && V[Symbol.species] === V) {
                Object.defineProperty(V, Symbol.species, {
                  value: null,
                  configurable: true
                });
              }
            }
            V.alloc = function (ay, az, aA) {
              var aB;
              var aC;
              var aD;
              aB = ay;
              aC = az;
              aD = aA;
              X(aB);
              if (aB <= 0) {
                return Q(null, aB);
              } else if (aC !== undefined) {
                if (typeof aD == "string") {
                  return Q(null, aB).fill(aC, aD);
                } else {
                  return Q(null, aB).fill(aC);
                }
              } else {
                return Q(null, aB);
              }
            };
            V.allocUnsafe = function (ay) {
              return Z(null, ay);
            };
            V.allocUnsafeSlow = function (ay) {
              return Z(null, ay);
            };
            V.isBuffer = function ay(az) {
              return !!(az != null && az._isBuffer);
            };
            V.compare = function az(aA, aB) {
              if (!V.isBuffer(aA) || !V.isBuffer(aB)) {
                throw TypeError("Arguments must be Buffers");
              }
              if (aA === aB) {
                return 0;
              }
              for (var aC = aA.length, aD = aB.length, aE = 0, aF = Math.min(aC, aD); aE < aF; ++aE) {
                if (aA[aE] !== aB[aE]) {
                  aC = aA[aE];
                  aD = aB[aE];
                  break;
                }
              }
              if (aC < aD) {
                return -1;
              } else if (aD < aC) {
                return 1;
              } else {
                return 0;
              }
            };
            V.isEncoding = function aA(aB) {
              switch (String(aB).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return true;
                default:
                  return false;
              }
            };
            V.concat = function aB(aC, aD) {
              if (!J(aC)) {
                throw TypeError("\"list\" argument must be an Array of Buffers");
              }
              if (aC.length === 0) {
                return V.alloc(0);
              }
              if (aD === undefined) {
                aE = 0;
                aD = 0;
                for (; aE < aC.length; ++aE) {
                  aD += aC[aE].length;
                }
              }
              var aE;
              var aF = V.allocUnsafe(aD);
              var aG = 0;
              for (aE = 0; aE < aC.length; ++aE) {
                var aH = aC[aE];
                if (!V.isBuffer(aH)) {
                  throw TypeError("\"list\" argument must be an Array of Buffers");
                }
                aH.copy(aF, aG);
                aG += aH.length;
              }
              return aF;
            };
            V.byteLength = a2;
            V.prototype._isBuffer = true;
            V.prototype.swap16 = function aC() {
              var aD = this.length;
              if (aD % 2 != 0) {
                throw RangeError("Buffer size must be a multiple of 16-bits");
              }
              for (var aE = 0; aE < aD; aE += 2) {
                a4(this, aE, aE + 1);
              }
              return this;
            };
            V.prototype.swap32 = function aD() {
              var aE = this.length;
              if (aE % 4 != 0) {
                throw RangeError("Buffer size must be a multiple of 32-bits");
              }
              for (var aF = 0; aF < aE; aF += 4) {
                a4(this, aF, aF + 3);
                a4(this, aF + 1, aF + 2);
              }
              return this;
            };
            V.prototype.swap64 = function aE() {
              var aF = this.length;
              if (aF % 8 != 0) {
                throw RangeError("Buffer size must be a multiple of 64-bits");
              }
              for (var aG = 0; aG < aF; aG += 8) {
                a4(this, aG, aG + 7);
                a4(this, aG + 1, aG + 6);
                a4(this, aG + 2, aG + 5);
                a4(this, aG + 3, aG + 4);
              }
              return this;
            };
            V.prototype.toString = function aF() {
              var aG = this.length | 0;
              if (aG === 0) {
                return "";
              } else if (arguments.length === 0) {
                return ae(this, 0, aG);
              } else {
                return a3.apply(this, arguments);
              }
            };
            V.prototype.equals = function aG(aH) {
              if (!V.isBuffer(aH)) {
                throw TypeError("Argument must be a Buffer");
              }
              return this === aH || V.compare(this, aH) === 0;
            };
            V.prototype.inspect = function aH() {
              var aI = "";
              var aJ = k.INSPECT_MAX_BYTES;
              if (this.length > 0) {
                aI = this.toString("hex", 0, aJ).match(/.{2}/g).join(" ");
                if (this.length > aJ) {
                  aI += " ... ";
                }
              }
              return "<Buffer " + aI + ">";
            };
            V.prototype.compare = function aI(aJ, aK, aL, aM, aN) {
              if (!V.isBuffer(aJ)) {
                throw TypeError("Argument must be a Buffer");
              }
              if (aK === undefined) {
                aK = 0;
              }
              if (aL === undefined) {
                aL = aJ ? aJ.length : 0;
              }
              if (aM === undefined) {
                aM = 0;
              }
              if (aN === undefined) {
                aN = this.length;
              }
              if (aK < 0 || aL > aJ.length || aM < 0 || aN > this.length) {
                throw RangeError("out of range index");
              }
              if (aM >= aN && aK >= aL) {
                return 0;
              }
              if (aM >= aN) {
                return -1;
              }
              if (aK >= aL) {
                return 1;
              }
              aK >>>= 0;
              aL >>>= 0;
              aM >>>= 0;
              aN >>>= 0;
              if (this === aJ) {
                return 0;
              }
              for (var aO = aN - aM, aP = aL - aK, aQ = Math.min(aO, aP), aR = this.slice(aM, aN), aS = aJ.slice(aK, aL), aT = 0; aT < aQ; ++aT) {
                if (aR[aT] !== aS[aT]) {
                  aO = aR[aT];
                  aP = aS[aT];
                  break;
                }
              }
              if (aO < aP) {
                return -1;
              } else if (aP < aO) {
                return 1;
              } else {
                return 0;
              }
            };
            V.prototype.includes = function aJ(aK, aL, aM) {
              return this.indexOf(aK, aL, aM) !== -1;
            };
            V.prototype.indexOf = function aK(aL, aM, aN) {
              return a5(this, aL, aM, aN, true);
            };
            V.prototype.lastIndexOf = function aL(aM, aN, aO) {
              return a5(this, aM, aN, aO, false);
            };
            V.prototype.write = function aM(aN, aO, aP, aQ) {
              if (aO === undefined) {
                aQ = "utf8";
                aP = this.length;
                aO = 0;
              } else if (aP === undefined && typeof aO == "string") {
                aQ = aO;
                aP = this.length;
                aO = 0;
              } else if (isFinite(aO)) {
                aO |= 0;
                if (isFinite(aP)) {
                  aP |= 0;
                  if (aQ === undefined) {
                    aQ = "utf8";
                  }
                } else {
                  aQ = aP;
                  aP = undefined;
                }
              } else {
                throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              }
              var aR;
              var aS;
              var aT;
              var aU;
              var aV = this.length - aO;
              if (aP === undefined || aP > aV) {
                aP = aV;
              }
              if (aN.length > 0 && (aP < 0 || aO < 0) || aO > this.length) {
                throw RangeError("Attempt to write outside buffer bounds");
              }
              if (!aQ) {
                aQ = "utf8";
              }
              for (var aW = false;;) {
                switch (aQ) {
                  case "hex":
                    return a7(this, aN, aO, aP);
                  case "utf8":
                  case "utf-8":
                    return a8(this, aN, aO, aP);
                  case "ascii":
                    return a9(this, aN, aO, aP);
                  case "latin1":
                  case "binary":
                    aR = this;
                    aS = aN;
                    aT = aO;
                    return a9(aR, aS, aT, aU = aP);
                  case "base64":
                    return ab(this, aN, aO, aP);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return ac(this, aN, aO, aP);
                  default:
                    if (aW) {
                      throw TypeError("Unknown encoding: " + aQ);
                    }
                    aQ = ("" + aQ).toLowerCase();
                    aW = true;
                }
              }
            };
            V.prototype.toJSON = function aN() {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
              };
            };
            V.prototype.slice = function aO(aP, aQ) {
              var aR;
              var aS = this.length;
              aP = ~~aP;
              aQ = aQ === undefined ? aS : ~~aQ;
              if (aP < 0) {
                if ((aP += aS) < 0) {
                  aP = 0;
                }
              } else if (aP > aS) {
                aP = aS;
              }
              if (aQ < 0) {
                if ((aQ += aS) < 0) {
                  aQ = 0;
                }
              } else if (aQ > aS) {
                aQ = aS;
              }
              if (aQ < aP) {
                aQ = aP;
              }
              if (V.TYPED_ARRAY_SUPPORT) {
                (aR = this.subarray(aP, aQ)).__proto__ = V.prototype;
              } else {
                var aT = aQ - aP;
                aR = new V(aT, undefined);
                for (var aU = 0; aU < aT; ++aU) {
                  aR[aU] = this[aU + aP];
                }
              }
              return aR;
            };
            V.prototype.readUIntLE = function aP(aQ, aR, aS) {
              aQ |= 0;
              aR |= 0;
              if (!aS) {
                aj(aQ, aR, this.length);
              }
              for (var aT = this[aQ], aU = 1, aV = 0; ++aV < aR && (aU *= 256);) {
                aT += this[aQ + aV] * aU;
              }
              return aT;
            };
            V.prototype.readUIntBE = function aQ(aR, aS, aT) {
              aR |= 0;
              aS |= 0;
              if (!aT) {
                aj(aR, aS, this.length);
              }
              for (var aU = this[aR + --aS], aV = 1; aS > 0 && (aV *= 256);) {
                aU += this[aR + --aS] * aV;
              }
              return aU;
            };
            V.prototype.readUInt8 = function aR(aS, aT) {
              if (!aT) {
                aj(aS, 1, this.length);
              }
              return this[aS];
            };
            V.prototype.readUInt16LE = function aS(aT, aU) {
              if (!aU) {
                aj(aT, 2, this.length);
              }
              return this[aT] | this[aT + 1] << 8;
            };
            V.prototype.readUInt16BE = function aT(aU, aV) {
              if (!aV) {
                aj(aU, 2, this.length);
              }
              return this[aU] << 8 | this[aU + 1];
            };
            V.prototype.readUInt32LE = function aU(aV, aW) {
              if (!aW) {
                aj(aV, 4, this.length);
              }
              return (this[aV] | this[aV + 1] << 8 | this[aV + 2] << 16) + this[aV + 3] * 16777216;
            };
            V.prototype.readUInt32BE = function aV(aW, aX) {
              if (!aX) {
                aj(aW, 4, this.length);
              }
              return this[aW] * 16777216 + (this[aW + 1] << 16 | this[aW + 2] << 8 | this[aW + 3]);
            };
            V.prototype.readIntLE = function aW(aX, aY, aZ) {
              aX |= 0;
              aY |= 0;
              if (!aZ) {
                aj(aX, aY, this.length);
              }
              for (var b0 = this[aX], b1 = 1, b2 = 0; ++b2 < aY && (b1 *= 256);) {
                b0 += this[aX + b2] * b1;
              }
              if (b0 >= (b1 *= 128)) {
                b0 -= Math.pow(2, aY * 8);
              }
              return b0;
            };
            V.prototype.readIntBE = function aX(aY, aZ, b0) {
              aY |= 0;
              aZ |= 0;
              if (!b0) {
                aj(aY, aZ, this.length);
              }
              for (var b1 = aZ, b2 = 1, b3 = this[aY + --b1]; b1 > 0 && (b2 *= 256);) {
                b3 += this[aY + --b1] * b2;
              }
              if (b3 >= (b2 *= 128)) {
                b3 -= Math.pow(2, aZ * 8);
              }
              return b3;
            };
            V.prototype.readInt8 = function aY(aZ, b0) {
              if (!b0) {
                aj(aZ, 1, this.length);
              }
              if (this[aZ] & 128) {
                return -((255 - this[aZ] + 1) * 1);
              } else {
                return this[aZ];
              }
            };
            V.prototype.readInt16LE = function aZ(b0, b1) {
              if (!b1) {
                aj(b0, 2, this.length);
              }
              var b2 = this[b0] | this[b0 + 1] << 8;
              if (b2 & 32768) {
                return b2 | 4294901760;
              } else {
                return b2;
              }
            };
            V.prototype.readInt16BE = function b0(b1, b2) {
              if (!b2) {
                aj(b1, 2, this.length);
              }
              var b3 = this[b1 + 1] | this[b1] << 8;
              if (b3 & 32768) {
                return b3 | 4294901760;
              } else {
                return b3;
              }
            };
            V.prototype.readInt32LE = function b1(b2, b3) {
              if (!b3) {
                aj(b2, 4, this.length);
              }
              return this[b2] | this[b2 + 1] << 8 | this[b2 + 2] << 16 | this[b2 + 3] << 24;
            };
            V.prototype.readInt32BE = function b2(b3, b4) {
              if (!b4) {
                aj(b3, 4, this.length);
              }
              return this[b3] << 24 | this[b3 + 1] << 16 | this[b3 + 2] << 8 | this[b3 + 3];
            };
            V.prototype.readFloatLE = function b3(b4, b5) {
              if (!b5) {
                aj(b4, 4, this.length);
              }
              return H.read(this, b4, true, 23, 4);
            };
            V.prototype.readFloatBE = function b4(b5, b6) {
              if (!b6) {
                aj(b5, 4, this.length);
              }
              return H.read(this, b5, false, 23, 4);
            };
            V.prototype.readDoubleLE = function b5(b6, b7) {
              if (!b7) {
                aj(b6, 8, this.length);
              }
              return H.read(this, b6, true, 52, 8);
            };
            V.prototype.readDoubleBE = function b6(b7, b8) {
              if (!b8) {
                aj(b7, 8, this.length);
              }
              return H.read(this, b7, false, 52, 8);
            };
            V.prototype.writeUIntLE = function b7(b8, b9, ba, bb) {
              b8 = +b8;
              b9 |= 0;
              ba |= 0;
              if (!bb) {
                var bc = Math.pow(2, ba * 8) - 1;
                ak(this, b8, b9, ba, bc, 0);
              }
              var bd = 1;
              var be = 0;
              for (this[b9] = b8 & 255; ++be < ba && (bd *= 256);) {
                this[b9 + be] = b8 / bd & 255;
              }
              return b9 + ba;
            };
            V.prototype.writeUIntBE = function b8(b9, ba, bb, bc) {
              b9 = +b9;
              ba |= 0;
              bb |= 0;
              if (!bc) {
                var bd = Math.pow(2, bb * 8) - 1;
                ak(this, b9, ba, bb, bd, 0);
              }
              var be = bb - 1;
              var bf = 1;
              for (this[ba + be] = b9 & 255; --be >= 0 && (bf *= 256);) {
                this[ba + be] = b9 / bf & 255;
              }
              return ba + bb;
            };
            V.prototype.writeUInt8 = function b9(ba, bb, bc) {
              ba = +ba;
              bb |= 0;
              if (!bc) {
                ak(this, ba, bb, 1, 255, 0);
              }
              if (!V.TYPED_ARRAY_SUPPORT) {
                ba = Math.floor(ba);
              }
              this[bb] = ba & 255;
              return bb + 1;
            };
            V.prototype.writeUInt16LE = function ba(bb, bc, bd) {
              bb = +bb;
              bc |= 0;
              if (!bd) {
                ak(this, bb, bc, 2, 65535, 0);
              }
              if (V.TYPED_ARRAY_SUPPORT) {
                this[bc] = bb & 255;
                this[bc + 1] = bb >>> 8;
              } else {
                al(this, bb, bc, true);
              }
              return bc + 2;
            };
            V.prototype.writeUInt16BE = function bb(bc, bd, be) {
              bc = +bc;
              bd |= 0;
              if (!be) {
                ak(this, bc, bd, 2, 65535, 0);
              }
              if (V.TYPED_ARRAY_SUPPORT) {
                this[bd] = bc >>> 8;
                this[bd + 1] = bc & 255;
              } else {
                al(this, bc, bd, false);
              }
              return bd + 2;
            };
            V.prototype.writeUInt32LE = function bc(bd, be, bf) {
              bd = +bd;
              be |= 0;
              if (!bf) {
                ak(this, bd, be, 4, 4294967295, 0);
              }
              if (V.TYPED_ARRAY_SUPPORT) {
                this[be + 3] = bd >>> 24;
                this[be + 2] = bd >>> 16;
                this[be + 1] = bd >>> 8;
                this[be] = bd & 255;
              } else {
                am(this, bd, be, true);
              }
              return be + 4;
            };
            V.prototype.writeUInt32BE = function bd(be, bf, bg) {
              be = +be;
              bf |= 0;
              if (!bg) {
                ak(this, be, bf, 4, 4294967295, 0);
              }
              if (V.TYPED_ARRAY_SUPPORT) {
                this[bf] = be >>> 24;
                this[bf + 1] = be >>> 16;
                this[bf + 2] = be >>> 8;
                this[bf + 3] = be & 255;
              } else {
                am(this, be, bf, false);
              }
              return bf + 4;
            };
            V.prototype.writeIntLE = function be(bf, bg, bh, bi) {
              bf = +bf;
              bg |= 0;
              if (!bi) {
                var bj = Math.pow(2, bh * 8 - 1);
                ak(this, bf, bg, bh, bj - 1, -bj);
              }
              var bk = 0;
              var bl = 1;
              var bm = 0;
              for (this[bg] = bf & 255; ++bk < bh && (bl *= 256);) {
                if (bf < 0 && bm === 0 && this[bg + bk - 1] !== 0) {
                  bm = 1;
                }
                this[bg + bk] = (bf / bl >> 0) - bm & 255;
              }
              return bg + bh;
            };
            V.prototype.writeIntBE = function bf(bg, bh, bi, bj) {
              bg = +bg;
              bh |= 0;
              if (!bj) {
                var bk = Math.pow(2, bi * 8 - 1);
                ak(this, bg, bh, bi, bk - 1, -bk);
              }
              var bl = bi - 1;
              var bm = 1;
              var bn = 0;
              for (this[bh + bl] = bg & 255; --bl >= 0 && (bm *= 256);) {
                if (bg < 0 && bn === 0 && this[bh + bl + 1] !== 0) {
                  bn = 1;
                }
                this[bh + bl] = (bg / bm >> 0) - bn & 255;
              }
              return bh + bi;
            };
            V.prototype.writeInt8 = function bg(bh, bi, bj) {
              bh = +bh;
              bi |= 0;
              if (!bj) {
                ak(this, bh, bi, 1, 127, -128);
              }
              if (!V.TYPED_ARRAY_SUPPORT) {
                bh = Math.floor(bh);
              }
              if (bh < 0) {
                bh = 255 + bh + 1;
              }
              this[bi] = bh & 255;
              return bi + 1;
            };
            V.prototype.writeInt16LE = function bh(bi, bj, bk) {
              bi = +bi;
              bj |= 0;
              if (!bk) {
                ak(this, bi, bj, 2, 32767, -32768);
              }
              if (V.TYPED_ARRAY_SUPPORT) {
                this[bj] = bi & 255;
                this[bj + 1] = bi >>> 8;
              } else {
                al(this, bi, bj, true);
              }
              return bj + 2;
            };
            V.prototype.writeInt16BE = function bi(bj, bk, bl) {
              bj = +bj;
              bk |= 0;
              if (!bl) {
                ak(this, bj, bk, 2, 32767, -32768);
              }
              if (V.TYPED_ARRAY_SUPPORT) {
                this[bk] = bj >>> 8;
                this[bk + 1] = bj & 255;
              } else {
                al(this, bj, bk, false);
              }
              return bk + 2;
            };
            V.prototype.writeInt32LE = function bj(bk, bl, bm) {
              bk = +bk;
              bl |= 0;
              if (!bm) {
                ak(this, bk, bl, 4, 2147483647, -2147483648);
              }
              if (V.TYPED_ARRAY_SUPPORT) {
                this[bl] = bk & 255;
                this[bl + 1] = bk >>> 8;
                this[bl + 2] = bk >>> 16;
                this[bl + 3] = bk >>> 24;
              } else {
                am(this, bk, bl, true);
              }
              return bl + 4;
            };
            V.prototype.writeInt32BE = function bk(bl, bm, bn) {
              bl = +bl;
              bm |= 0;
              if (!bn) {
                ak(this, bl, bm, 4, 2147483647, -2147483648);
              }
              if (bl < 0) {
                bl = 4294967295 + bl + 1;
              }
              if (V.TYPED_ARRAY_SUPPORT) {
                this[bm] = bl >>> 24;
                this[bm + 1] = bl >>> 16;
                this[bm + 2] = bl >>> 8;
                this[bm + 3] = bl & 255;
              } else {
                am(this, bl, bm, false);
              }
              return bm + 4;
            };
            V.prototype.writeFloatLE = function bl(bm, bn, bo) {
              return ao(this, bm, bn, true, bo);
            };
            V.prototype.writeFloatBE = function bm(bn, bo, bp) {
              return ao(this, bn, bo, false, bp);
            };
            V.prototype.writeDoubleLE = function bn(bo, bp, bq) {
              return ap(this, bo, bp, true, bq);
            };
            V.prototype.writeDoubleBE = function bo(bp, bq, br) {
              return ap(this, bp, bq, false, br);
            };
            V.prototype.copy = function bp(bq, br, bs, bt) {
              if (!bs) {
                bs = 0;
              }
              if (!(bt || bt === 0)) {
                bt = this.length;
              }
              if (br >= bq.length) {
                br = bq.length;
              }
              if (!br) {
                br = 0;
              }
              if (bt > 0 && bt < bs) {
                bt = bs;
              }
              if (bt === bs || bq.length === 0 || this.length === 0) {
                return 0;
              }
              if (br < 0) {
                throw RangeError("targetStart out of bounds");
              }
              if (bs < 0 || bs >= this.length) {
                throw RangeError("sourceStart out of bounds");
              }
              if (bt < 0) {
                throw RangeError("sourceEnd out of bounds");
              }
              if (bt > this.length) {
                bt = this.length;
              }
              if (bq.length - br < bt - bs) {
                bt = bq.length - br + bs;
              }
              var bu;
              var bv = bt - bs;
              if (this === bq && bs < br && br < bt) {
                for (bu = bv - 1; bu >= 0; --bu) {
                  bq[bu + br] = this[bu + bs];
                }
              } else if (bv < 1000 || !V.TYPED_ARRAY_SUPPORT) {
                for (bu = 0; bu < bv; ++bu) {
                  bq[bu + br] = this[bu + bs];
                }
              } else {
                Uint8Array.prototype.set.call(bq, this.subarray(bs, bs + bv), br);
              }
              return bv;
            };
            V.prototype.fill = function bq(br, bs, bt, bu) {
              if (typeof br == "string") {
                if (typeof bs == "string") {
                  bu = bs;
                  bs = 0;
                  bt = this.length;
                } else if (typeof bt == "string") {
                  bu = bt;
                  bt = this.length;
                }
                if (br.length === 1) {
                  var bv;
                  var bw = br.charCodeAt(0);
                  if (bw < 256) {
                    br = bw;
                  }
                }
                if (bu !== undefined && typeof bu != "string") {
                  throw TypeError("encoding must be a string");
                }
                if (typeof bu == "string" && !V.isEncoding(bu)) {
                  throw TypeError("Unknown encoding: " + bu);
                }
              } else if (typeof br == "number") {
                br &= 255;
              }
              if (bs < 0 || this.length < bs || this.length < bt) {
                throw RangeError("Out of range index");
              }
              if (bt <= bs) {
                return this;
              }
              bs >>>= 0;
              bt = bt === undefined ? this.length : bt >>> 0;
              if (!br) {
                br = 0;
              }
              if (typeof br == "number") {
                for (bv = bs; bv < bt; ++bv) {
                  this[bv] = br;
                }
              } else {
                var bx = V.isBuffer(br) ? br : as(new V(br, bu).toString());
                var by = bx.length;
                for (bv = 0; bv < bt - bs; ++bv) {
                  this[bv + bs] = bx[bv % by];
                }
              }
              return this;
            };
            var aq = /[^+\/0-9A-Za-z-_]/g;
            function ar(br) {
              if (br < 16) {
                return "0" + br.toString(16);
              } else {
                return br.toString(16);
              }
            }
            function as(br, bs) {
              bs = bs || Infinity;
              for (var bt, bu = br.length, bv = null, bw = [], bx = 0; bx < bu; ++bx) {
                if ((bt = br.charCodeAt(bx)) > 55295 && bt < 57344) {
                  if (!bv) {
                    if (bt > 56319 || bx + 1 === bu) {
                      if ((bs -= 3) > -1) {
                        bw.push(239, 191, 189);
                      }
                      continue;
                    }
                    bv = bt;
                    continue;
                  }
                  if (bt < 56320) {
                    if ((bs -= 3) > -1) {
                      bw.push(239, 191, 189);
                    }
                    bv = bt;
                    continue;
                  }
                  bt = (bv - 55296 << 10 | bt - 56320) + 65536;
                } else if (bv && (bs -= 3) > -1) {
                  bw.push(239, 191, 189);
                }
                bv = null;
                if (bt < 128) {
                  if ((bs -= 1) < 0) {
                    break;
                  }
                  bw.push(bt);
                } else if (bt < 2048) {
                  if ((bs -= 2) < 0) {
                    break;
                  }
                  bw.push(bt >> 6 | 192, bt & 63 | 128);
                } else if (bt < 65536) {
                  if ((bs -= 3) < 0) {
                    break;
                  }
                  bw.push(bt >> 12 | 224, bt >> 6 & 63 | 128, bt & 63 | 128);
                } else if (bt < 1114112) {
                  if ((bs -= 4) < 0) {
                    break;
                  }
                  bw.push(bt >> 18 | 240, bt >> 12 & 63 | 128, bt >> 6 & 63 | 128, bt & 63 | 128);
                } else {
                  throw Error("Invalid code point");
                }
              }
              return bw;
            }
            function at(br) {
              return G.toByteArray(function bs(bt) {
                var bu;
                if ((bt = (bu = bt, bu.trim ? bu.trim() : bu.replace(/^\s+|\s+$/g, "")).replace(aq, "")).length < 2) {
                  return "";
                }
                for (; bt.length % 4 != 0;) {
                  bt += "=";
                }
                return bt;
              }(br));
            }
            function au(br, bs, bt, bu) {
              for (var bv = 0; bv < bu && !(bv + bt >= bs.length) && !(bv >= br.length); ++bv) {
                bs[bv + bt] = br[bv];
              }
              return bv;
            }
            function av(br) {
              return br != br;
            }
          }).call(k, l(0));
        }, function (j, k, m) {
          'use strict';

          var p = m(6);
          var q = Object.keys || function (E) {
            var F = [];
            for (var G in E) {
              F.push(G);
            }
            return F;
          };
          j.exports = B;
          var v = Object.create(m(5));
          v.inherits = m(2);
          var w = m(15);
          var x = m(18);
          v.inherits(B, w);
          for (var y = q(x.prototype), z = 0; z < y.length; z++) {
            var A = y[z];
            if (!B.prototype[A]) {
              B.prototype[A] = x.prototype[A];
            }
          }
          function B(E) {
            if (!(this instanceof B)) {
              return new B(E);
            }
            w.call(this, E);
            x.call(this, E);
            if (E && E.readable === false) {
              this.readable = false;
            }
            if (E && E.writable === false) {
              this.writable = false;
            }
            this.allowHalfOpen = true;
            if (E && E.allowHalfOpen === false) {
              this.allowHalfOpen = false;
            }
            this.once("end", C);
          }
          function C() {
            if (!(this.allowHalfOpen || this._writableState.ended)) {
              p.nextTick(D, this);
            }
          }
          function D(E) {
            E.end();
          }
          Object.defineProperty(B.prototype, "writableHighWaterMark", {
            enumerable: false,
            get: function () {
              return this._writableState.highWaterMark;
            }
          });
          Object.defineProperty(B.prototype, "destroyed", {
            get: function () {
              return this._readableState !== undefined && this._writableState !== undefined && this._readableState.destroyed && this._writableState.destroyed;
            },
            set: function (E) {
              if (this._readableState !== undefined && this._writableState !== undefined) {
                this._readableState.destroyed = E;
                this._writableState.destroyed = E;
              }
            }
          });
          B.prototype._destroy = function (E, F) {
            this.push(null);
            this.end();
            p.nextTick(F, E);
          };
        }, function (j, k, l) {
          (function (m) {
            function n(o) {
              return Object.prototype.toString.call(o);
            }
            k.isArray = function o(p) {
              if (Array.isArray) {
                return Array.isArray(p);
              } else {
                return n(p) === "[object Array]";
              }
            };
            k.isBoolean = function p(q) {
              return typeof q == "boolean";
            };
            k.isNull = function q(s) {
              return s === null;
            };
            k.isNullOrUndefined = function s(u) {
              return u == null;
            };
            k.isNumber = function u(v) {
              return typeof v == "number";
            };
            k.isString = function v(w) {
              return typeof w == "string";
            };
            k.isSymbol = function w(x) {
              return typeof x == "symbol";
            };
            k.isUndefined = function x(y) {
              return y === undefined;
            };
            k.isRegExp = function y(z) {
              return n(z) === "[object RegExp]";
            };
            k.isObject = function z(A) {
              return typeof A == "object" && A !== null;
            };
            k.isDate = function A(B) {
              return n(B) === "[object Date]";
            };
            k.isError = function B(C) {
              return n(C) === "[object Error]" || C instanceof Error;
            };
            k.isFunction = function C(D) {
              return typeof D == "function";
            };
            k.isPrimitive = function D(E) {
              return E === null || typeof E == "boolean" || typeof E == "number" || typeof E == "string" || typeof E == "symbol" || E === undefined;
            };
            k.isBuffer = m.isBuffer;
          }).call(k, l(3).Buffer);
        }, function (j, k, l) {
          'use strict';

          (function (m) {
            if (m !== undefined && m.version && m.version.indexOf("v0.") !== 0 && (m.version.indexOf("v1.") !== 0 || m.version.indexOf("v1.8.") === 0)) {
              j.exports = m;
            } else {
              j.exports = {
                nextTick: function n(p, q, v, w) {
                  if (typeof p != "function") {
                    throw TypeError("\"callback\" argument must be a function");
                  }
                  var x;
                  var y;
                  var z = arguments.length;
                  switch (z) {
                    case 0:
                    case 1:
                      return m.nextTick(p);
                    case 2:
                      return m.nextTick(function A() {
                        p.call(null, q);
                      });
                    case 3:
                      return m.nextTick(function B() {
                        p.call(null, q, v);
                      });
                    case 4:
                      return m.nextTick(function C() {
                        p.call(null, q, v, w);
                      });
                    default:
                      x = Array(z - 1);
                      y = 0;
                      for (; y < x.length;) {
                        x[y++] = arguments[y];
                      }
                      return m.nextTick(function D() {
                        p.apply(null, x);
                      });
                  }
                }
              };
            }
          }).call(k, l(1));
        }, function (j, k, l) {
          var m = l(3);
          var p = m.Buffer;
          function q(v, w) {
            for (var x in v) {
              w[x] = v[x];
            }
          }
          function u(v, w, x) {
            return p(v, w, x);
          }
          if (p.from && p.alloc && p.allocUnsafe && p.allocUnsafeSlow) {
            j.exports = m;
          } else {
            q(m, k);
            k.Buffer = u;
          }
          q(p, u);
          u.from = function (v, w, x) {
            if (typeof v == "number") {
              throw TypeError("Argument must not be a number");
            }
            return p(v, w, x);
          };
          u.alloc = function (v, w, x) {
            if (typeof v != "number") {
              throw TypeError("Argument must be a number");
            }
            var y = p(v);
            if (w !== undefined) {
              if (typeof x == "string") {
                y.fill(w, x);
              } else {
                y.fill(w);
              }
            } else {
              y.fill(0);
            }
            return y;
          };
          u.allocUnsafe = function (v) {
            if (typeof v != "number") {
              throw TypeError("Argument must be a number");
            }
            return p(v);
          };
          u.allocUnsafeSlow = function (v) {
            if (typeof v != "number") {
              throw TypeError("Argument must be a number");
            }
            return m.SlowBuffer(v);
          };
        }, function (j, k, m) {
          'use strict';

          var q = m(25);
          var w = m(27);
          function x() {
            this.protocol = null;
            this.slashes = null;
            this.auth = null;
            this.host = null;
            this.port = null;
            this.hostname = null;
            this.hash = null;
            this.search = null;
            this.query = null;
            this.pathname = null;
            this.path = null;
            this.href = null;
          }
          k.parse = L;
          k.resolve = function M(N, O) {
            return L(N, false, true).resolve(O);
          };
          k.resolveObject = function N(O, P) {
            if (O) {
              return L(O, false, true).resolveObject(P);
            } else {
              return P;
            }
          };
          k.format = function O(P) {
            if (w.isString(P)) {
              P = L(P);
            }
            if (P instanceof x) {
              return P.format();
            } else {
              return x.prototype.format.call(P);
            }
          };
          k.Url = x;
          var z = /^([a-z0-9.+-]+:)/i;
          var A = /:[0-9]*$/;
          var B = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
          var C = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", "\"", "`", " ", "\r", "\n", "\t"]));
          var D = ["%", "/", "?", ";", "#"].concat(C);
          var E = ["/", "?", "#"];
          var F = /^[+a-z0-9A-Z_-]{0,63}$/;
          var G = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
          var H = {
            javascript: true,
            "javascript:": true
          };
          var I = {
            javascript: true,
            "javascript:": true
          };
          var J = {
            http: true,
            https: true,
            ftp: true,
            gopher: true,
            file: true,
            "http:": true,
            "https:": true,
            "ftp:": true,
            "gopher:": true,
            "file:": true
          };
          var K = m(28);
          function L(P, Q, R) {
            if (P && w.isObject(P) && P instanceof x) {
              return P;
            }
            var S = new x();
            S.parse(P, Q, R);
            return S;
          }
          x.prototype.parse = function (Q, V, W) {
            if (!w.isString(Q)) {
              throw TypeError("Parameter 'url' must be a string, not " + typeof Q);
            }
            var X = Q.indexOf("?");
            var Z = X !== -1 && X < Q.indexOf("#") ? "?" : "#";
            var a0 = Q.split(Z);
            a0[0] = a0[0].replace(/\\/g, "/");
            var a1 = Q = a0.join(Z);
            a1 = a1.trim();
            if (!W && Q.split("#").length === 1) {
              var a2 = B.exec(a1);
              if (a2) {
                this.path = a1;
                this.href = a1;
                this.pathname = a2[1];
                if (a2[2]) {
                  this.search = a2[2];
                  if (V) {
                    this.query = K.parse(this.search.substr(1));
                  } else {
                    this.query = this.search.substr(1);
                  }
                } else if (V) {
                  this.search = "";
                  this.query = {};
                }
                return this;
              }
            }
            var a3 = z.exec(a1);
            if (a3) {
              var a4 = (a3 = a3[0]).toLowerCase();
              this.protocol = a4;
              a1 = a1.substr(a3.length);
            }
            if (W || a3 || a1.match(/^\/\/[^@\/]+@[^@\/]+/)) {
              var a5 = a1.substr(0, 2) === "//";
              if (a5 && !(a3 && I[a3])) {
                a1 = a1.substr(2);
                this.slashes = true;
              }
            }
            if (!I[a3] && (a5 || a3 && !J[a3])) {
              for (var a6, a7, a8 = -1, a9 = 0; a9 < E.length; a9++) {
                var aa = a1.indexOf(E[a9]);
                if (aa !== -1 && (a8 === -1 || aa < a8)) {
                  a8 = aa;
                }
              }
              if ((a7 = a8 === -1 ? a1.lastIndexOf("@") : a1.lastIndexOf("@", a8)) !== -1) {
                a6 = a1.slice(0, a7);
                a1 = a1.slice(a7 + 1);
                this.auth = decodeURIComponent(a6);
              }
              a8 = -1;
              for (var a9 = 0; a9 < D.length; a9++) {
                var aa = a1.indexOf(D[a9]);
                if (aa !== -1 && (a8 === -1 || aa < a8)) {
                  a8 = aa;
                }
              }
              if (a8 === -1) {
                a8 = a1.length;
              }
              this.host = a1.slice(0, a8);
              a1 = a1.slice(a8);
              this.parseHost();
              this.hostname = this.hostname || "";
              var ab = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
              if (!ab) {
                for (var ac = this.hostname.split(/\./), a9 = 0, ad = ac.length; a9 < ad; a9++) {
                  var ae = ac[a9];
                  if (ae && !ae.match(F)) {
                    for (var af = "", ag = 0, ah = ae.length; ag < ah; ag++) {
                      if (ae.charCodeAt(ag) > 127) {
                        af += "x";
                      } else {
                        af += ae[ag];
                      }
                    }
                    if (!af.match(F)) {
                      var ai = ac.slice(0, a9);
                      var aj = ac.slice(a9 + 1);
                      var ak = ae.match(G);
                      if (ak) {
                        ai.push(ak[1]);
                        aj.unshift(ak[2]);
                      }
                      if (aj.length) {
                        a1 = "/" + aj.join(".") + a1;
                      }
                      this.hostname = ai.join(".");
                      break;
                    }
                  }
                }
              }
              if (this.hostname.length > 255) {
                this.hostname = "";
              } else {
                this.hostname = this.hostname.toLowerCase();
              }
              if (!ab) {
                this.hostname = q.toASCII(this.hostname);
              }
              var al = this.port ? ":" + this.port : "";
              var am = this.hostname || "";
              this.host = am + al;
              this.href += this.host;
              if (ab) {
                this.hostname = this.hostname.substr(1, this.hostname.length - 2);
                if (a1[0] !== "/") {
                  a1 = "/" + a1;
                }
              }
            }
            if (!H[a4]) {
              for (var a9 = 0, ad = C.length; a9 < ad; a9++) {
                var an = C[a9];
                if (a1.indexOf(an) !== -1) {
                  var ao = encodeURIComponent(an);
                  if (ao === an) {
                    ao = escape(an);
                  }
                  a1 = a1.split(an).join(ao);
                }
              }
            }
            var ap = a1.indexOf("#");
            if (ap !== -1) {
              this.hash = a1.substr(ap);
              a1 = a1.slice(0, ap);
            }
            var aq = a1.indexOf("?");
            if (aq !== -1) {
              this.search = a1.substr(aq);
              this.query = a1.substr(aq + 1);
              if (V) {
                this.query = K.parse(this.query);
              }
              a1 = a1.slice(0, aq);
            } else if (V) {
              this.search = "";
              this.query = {};
            }
            if (a1) {
              this.pathname = a1;
            }
            if (J[a4] && this.hostname && !this.pathname) {
              this.pathname = "/";
            }
            if (this.pathname || this.search) {
              var al = this.pathname || "";
              var ar = this.search || "";
              this.path = al + ar;
            }
            this.href = this.format();
            return this;
          };
          x.prototype.format = function () {
            var P = this.auth || "";
            if (P) {
              P = (P = encodeURIComponent(P)).replace(/%3A/i, ":");
              P += "@";
            }
            var Q = this.protocol || "";
            var R = this.pathname || "";
            var S = this.hash || "";
            var T = false;
            var U = "";
            if (this.host) {
              T = P + this.host;
            } else if (this.hostname) {
              T = P + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
              if (this.port) {
                T += ":" + this.port;
              }
            }
            if (this.query && w.isObject(this.query) && Object.keys(this.query).length) {
              U = K.stringify(this.query);
            }
            var V = this.search || U && "?" + U || "";
            if (Q && Q.substr(-1) !== ":") {
              Q += ":";
            }
            if (this.slashes || (!Q || J[Q]) && T !== false) {
              T = "//" + (T || "");
              if (R && R.charAt(0) !== "/") {
                R = "/" + R;
              }
            } else if (!T) {
              T = "";
            }
            if (S && S.charAt(0) !== "#") {
              S = "#" + S;
            }
            if (V && V.charAt(0) !== "?") {
              V = "?" + V;
            }
            return Q + T + (R = R.replace(/[?#]/g, function (W) {
              return encodeURIComponent(W);
            })) + (V = V.replace("#", "%23")) + S;
          };
          x.prototype.resolve = function (P) {
            return this.resolveObject(L(P, false, true)).format();
          };
          x.prototype.resolveObject = function (Q) {
            if (w.isString(Q)) {
              var U = new x();
              U.parse(Q, false, true);
              Q = U;
            }
            for (var V = new x(), W = Object.keys(this), X = 0; X < W.length; X++) {
              var Y = W[X];
              V[Y] = this[Y];
            }
            V.hash = Q.hash;
            if (Q.href === "") {
              V.href = V.format();
              return V;
            }
            if (Q.slashes && !Q.protocol) {
              for (var Z = Object.keys(Q), a0 = 0; a0 < Z.length; a0++) {
                var a1 = Z[a0];
                if (a1 !== "protocol") {
                  V[a1] = Q[a1];
                }
              }
              if (J[V.protocol] && V.hostname && !V.pathname) {
                V.path = V.pathname = "/";
              }
              V.href = V.format();
              return V;
            }
            if (Q.protocol && Q.protocol !== V.protocol) {
              if (!J[Q.protocol]) {
                for (var a2 = Object.keys(Q), a3 = 0; a3 < a2.length; a3++) {
                  var a4 = a2[a3];
                  V[a4] = Q[a4];
                }
                V.href = V.format();
                return V;
              }
              V.protocol = Q.protocol;
              if (Q.host || I[Q.protocol]) {
                V.pathname = Q.pathname;
              } else {
                for (var a5 = (Q.pathname || "").split("/"); a5.length && !(Q.host = a5.shift()););
                if (!Q.host) {
                  Q.host = "";
                }
                if (!Q.hostname) {
                  Q.hostname = "";
                }
                if (a5[0] !== "") {
                  a5.unshift("");
                }
                if (a5.length < 2) {
                  a5.unshift("");
                }
                V.pathname = a5.join("/");
              }
              V.search = Q.search;
              V.query = Q.query;
              V.host = Q.host || "";
              V.auth = Q.auth;
              V.hostname = Q.hostname || Q.host;
              V.port = Q.port;
              if (V.pathname || V.search) {
                var a6 = V.pathname || "";
                var a7 = V.search || "";
                V.path = a6 + a7;
              }
              V.slashes = V.slashes || Q.slashes;
              V.href = V.format();
              return V;
            }
            var a8 = V.pathname && V.pathname.charAt(0) === "/";
            var a9 = Q.host || Q.pathname && Q.pathname.charAt(0) === "/";
            var aa = a9 || a8 || V.host && Q.pathname;
            var ab = aa;
            var ac = V.pathname && V.pathname.split("/") || [];
            var a5 = Q.pathname && Q.pathname.split("/") || [];
            var ad = V.protocol && !J[V.protocol];
            if (ad) {
              V.hostname = "";
              V.port = null;
              if (V.host) {
                if (ac[0] === "") {
                  ac[0] = V.host;
                } else {
                  ac.unshift(V.host);
                }
              }
              V.host = "";
              if (Q.protocol) {
                Q.hostname = null;
                Q.port = null;
                if (Q.host) {
                  if (a5[0] === "") {
                    a5[0] = Q.host;
                  } else {
                    a5.unshift(Q.host);
                  }
                }
                Q.host = null;
              }
              aa = aa && (a5[0] === "" || ac[0] === "");
            }
            if (a9) {
              V.host = Q.host || Q.host === "" ? Q.host : V.host;
              V.hostname = Q.hostname || Q.hostname === "" ? Q.hostname : V.hostname;
              V.search = Q.search;
              V.query = Q.query;
              ac = a5;
            } else if (a5.length) {
              if (!ac) {
                ac = [];
              }
              ac.pop();
              ac = ac.concat(a5);
              V.search = Q.search;
              V.query = Q.query;
            } else if (!w.isNullOrUndefined(Q.search)) {
              if (ad) {
                V.hostname = V.host = ac.shift();
                var ae = !!(V.host && V.host.indexOf("@") > 0) && V.host.split("@");
                if (ae) {
                  V.auth = ae.shift();
                  V.host = V.hostname = ae.shift();
                }
              }
              V.search = Q.search;
              V.query = Q.query;
              if (!(w.isNull(V.pathname) && w.isNull(V.search))) {
                V.path = (V.pathname ? V.pathname : "") + (V.search ? V.search : "");
              }
              V.href = V.format();
              return V;
            }
            if (!ac.length) {
              V.pathname = null;
              if (V.search) {
                V.path = "/" + V.search;
              } else {
                V.path = null;
              }
              V.href = V.format();
              return V;
            }
            for (var af = ac.slice(-1)[0], ag = (V.host || Q.host || ac.length > 1) && (af === "." || af === "..") || af === "", ah = 0, ai = ac.length; ai >= 0; ai--) {
              if ((af = ac[ai]) === ".") {
                ac.splice(ai, 1);
              } else if (af === "..") {
                ac.splice(ai, 1);
                ah++;
              } else if (ah) {
                ac.splice(ai, 1);
                ah--;
              }
            }
            if (!aa && !ab) {
              for (; ah--; ah) {
                ac.unshift("..");
              }
            }
            if (aa && ac[0] !== "" && (!ac[0] || ac[0].charAt(0) !== "/")) {
              ac.unshift("");
            }
            if (ag && ac.join("/").substr(-1) !== "/") {
              ac.push("");
            }
            var aj = ac[0] === "" || ac[0] && ac[0].charAt(0) === "/";
            if (ad) {
              V.hostname = V.host = aj ? "" : ac.length ? ac.shift() : "";
              var ae = !!(V.host && V.host.indexOf("@") > 0) && V.host.split("@");
              if (ae) {
                V.auth = ae.shift();
                V.host = V.hostname = ae.shift();
              }
            }
            if ((aa = aa || V.host && ac.length) && !aj) {
              ac.unshift("");
            }
            if (ac.length) {
              V.pathname = ac.join("/");
            } else {
              V.pathname = null;
              V.path = null;
            }
            if (!(w.isNull(V.pathname) && w.isNull(V.search))) {
              V.path = (V.pathname ? V.pathname : "") + (V.search ? V.search : "");
            }
            V.auth = Q.auth || V.auth;
            V.slashes = V.slashes || Q.slashes;
            V.href = V.format();
            return V;
          };
          x.prototype.parseHost = function () {
            var P = this.host;
            var Q = A.exec(P);
            if (Q) {
              if ((Q = Q[0]) !== ":") {
                this.port = Q.substr(1);
              }
              P = P.substr(0, P.length - Q.length);
            }
            if (P) {
              this.hostname = P;
            }
          };
        }, function (j, k, m) {
          'use strict';

          var q;
          var v = typeof Reflect == "object" ? Reflect : null;
          var w = v && typeof v.apply == "function" ? v.apply : function K(L, M, N) {
            return Function.prototype.apply.call(L, M, N);
          };
          q = v && typeof v.ownKeys == "function" ? v.ownKeys : Object.getOwnPropertySymbols ? function L(M) {
            return Object.getOwnPropertyNames(M).concat(Object.getOwnPropertySymbols(M));
          } : function M(N) {
            return Object.getOwnPropertyNames(N);
          };
          var x = Number.isNaN || function N(O) {
            return O != O;
          };
          function z() {
            z.init.call(this);
          }
          j.exports = z;
          j.exports.once = function O(P, Q) {
            return new Promise(function (R, S) {
              var T;
              var U;
              var V;
              function W(Y) {
                P.removeListener(Q, X);
                S(Y);
              }
              function X() {
                if (typeof P.removeListener == "function") {
                  P.removeListener("error", W);
                }
                R([].slice.call(arguments));
              }
              J(P, Q, X, {
                once: true
              });
              if (Q !== "error") {
                T = P;
                U = W;
                V = {
                  once: true
                };
                if (typeof T.on == "function") {
                  J(T, "error", U, V);
                }
              }
            });
          };
          z.EventEmitter = z;
          z.prototype._events = undefined;
          z.prototype._eventsCount = 0;
          z.prototype._maxListeners = undefined;
          var A = 10;
          function B(P) {
            if (typeof P != "function") {
              throw TypeError("The \"listener\" argument must be of type Function. Received type " + typeof P);
            }
          }
          function C(P) {
            if (P._maxListeners === undefined) {
              return z.defaultMaxListeners;
            } else {
              return P._maxListeners;
            }
          }
          function D(P, Q, R, S) {
            B(R);
            if ((U = P._events) === undefined) {
              U = P._events = Object.create(null);
              P._eventsCount = 0;
            } else {
              if (U.newListener !== undefined) {
                P.emit("newListener", Q, R.listener ? R.listener : R);
                U = P._events;
              }
              V = U[Q];
            }
            if (V === undefined) {
              V = U[Q] = R;
              ++P._eventsCount;
            } else {
              if (typeof V == "function") {
                V = U[Q] = S ? [R, V] : [V, R];
              } else if (S) {
                V.unshift(R);
              } else {
                V.push(R);
              }
              if ((T = C(P)) > 0 && V.length > T && !V.warned) {
                V.warned = true;
                var T;
                var U;
                var V;
                var W;
                var X = Error("Possible EventEmitter memory leak detected. " + V.length + " " + String(Q) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                X.name = "MaxListenersExceededWarning";
                X.emitter = P;
                X.type = Q;
                X.count = V.length;
                W = X;
                if (console && console.warn) {
                  console.warn(W);
                }
              }
            }
            return P;
          }
          function E() {
            if (!this.fired) {
              this.target.removeListener(this.type, this.wrapFn);
              this.fired = true;
              if (arguments.length === 0) {
                return this.listener.call(this.target);
              } else {
                return this.listener.apply(this.target, arguments);
              }
            }
          }
          function F(P, Q, R) {
            var S = {
              fired: false,
              wrapFn: undefined,
              target: P,
              type: Q,
              listener: R
            };
            var T = E.bind(S);
            T.listener = R;
            S.wrapFn = T;
            return T;
          }
          function G(P, Q, R) {
            var S = P._events;
            if (S === undefined) {
              return [];
            }
            var T = S[Q];
            if (T === undefined) {
              return [];
            } else if (typeof T == "function") {
              if (R) {
                return [T.listener || T];
              } else {
                return [T];
              }
            } else if (R) {
              return function U(V) {
                for (var W = Array(V.length), X = 0; X < W.length; ++X) {
                  W[X] = V[X].listener || V[X];
                }
                return W;
              }(T);
            } else {
              return I(T, T.length);
            }
          }
          function H(P) {
            var Q = this._events;
            if (Q !== undefined) {
              var R = Q[P];
              if (typeof R == "function") {
                return 1;
              }
              if (R !== undefined) {
                return R.length;
              }
            }
            return 0;
          }
          function I(P, Q) {
            for (var R = Array(Q), S = 0; S < Q; ++S) {
              R[S] = P[S];
            }
            return R;
          }
          function J(P, Q, R, S) {
            if (typeof P.on == "function") {
              if (S.once) {
                P.once(Q, R);
              } else {
                P.on(Q, R);
              }
            } else if (typeof P.addEventListener == "function") {
              P.addEventListener(Q, function T(U) {
                if (S.once) {
                  P.removeEventListener(Q, T);
                }
                R(U);
              });
            } else {
              throw TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof P);
            }
          }
          Object.defineProperty(z, "defaultMaxListeners", {
            enumerable: true,
            get: function () {
              return A;
            },
            set: function (P) {
              if (typeof P != "number" || P < 0 || x(P)) {
                throw RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + P + ".");
              }
              A = P;
            }
          });
          z.init = function () {
            if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
              this._events = Object.create(null);
              this._eventsCount = 0;
            }
            this._maxListeners = this._maxListeners || undefined;
          };
          z.prototype.setMaxListeners = function P(Q) {
            if (typeof Q != "number" || Q < 0 || x(Q)) {
              throw RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + Q + ".");
            }
            this._maxListeners = Q;
            return this;
          };
          z.prototype.getMaxListeners = function Q() {
            return C(this);
          };
          z.prototype.emit = function R(S) {
            for (var T = [], U = 1; U < arguments.length; U++) {
              T.push(arguments[U]);
            }
            var V = S === "error";
            var W = this._events;
            if (W !== undefined) {
              V = V && W.error === undefined;
            } else if (!V) {
              return false;
            }
            if (V) {
              if (T.length > 0) {
                X = T[0];
              }
              if (X instanceof Error) {
                throw X;
              }
              var X;
              var Y = Error("Unhandled error." + (X ? " (" + X.message + ")" : ""));
              Y.context = X;
              throw Y;
            }
            var Z = W[S];
            if (Z === undefined) {
              return false;
            }
            if (typeof Z == "function") {
              w(Z, this, T);
            } else {
              for (var a0 = Z.length, a1 = I(Z, a0), U = 0; U < a0; ++U) {
                w(a1[U], this, T);
              }
            }
            return true;
          };
          z.prototype.addListener = function S(T, U) {
            return D(this, T, U, false);
          };
          z.prototype.on = z.prototype.addListener;
          z.prototype.prependListener = function T(U, V) {
            return D(this, U, V, true);
          };
          z.prototype.once = function U(V, W) {
            B(W);
            this.on(V, F(this, V, W));
            return this;
          };
          z.prototype.prependOnceListener = function V(W, X) {
            B(X);
            this.prependListener(W, F(this, W, X));
            return this;
          };
          z.prototype.removeListener = function W(X, Y) {
            var Z;
            var a0;
            var a1;
            var a2;
            var a3;
            B(Y);
            if ((a0 = this._events) === undefined || (Z = a0[X]) === undefined) {
              return this;
            }
            if (Z === Y || Z.listener === Y) {
              if (--this._eventsCount == 0) {
                this._events = Object.create(null);
              } else {
                delete a0[X];
                if (a0.removeListener) {
                  this.emit("removeListener", X, Z.listener || Y);
                }
              }
            } else if (typeof Z != "function") {
              a1 = -1;
              a2 = Z.length - 1;
              for (; a2 >= 0; a2--) {
                if (Z[a2] === Y || Z[a2].listener === Y) {
                  a3 = Z[a2].listener;
                  a1 = a2;
                  break;
                }
              }
              if (a1 < 0) {
                return this;
              }
              if (a1 === 0) {
                Z.shift();
              } else {
                (function a4(a5, a6) {
                  for (; a6 + 1 < a5.length; a6++) {
                    a5[a6] = a5[a6 + 1];
                  }
                  a5.pop();
                })(Z, a1);
              }
              if (Z.length === 1) {
                a0[X] = Z[0];
              }
              if (a0.removeListener !== undefined) {
                this.emit("removeListener", X, a3 || Y);
              }
            }
            return this;
          };
          z.prototype.off = z.prototype.removeListener;
          z.prototype.removeAllListeners = function X(Y) {
            var Z;
            var a0;
            var a1;
            if ((a0 = this._events) === undefined) {
              return this;
            }
            if (a0.removeListener === undefined) {
              if (arguments.length === 0) {
                this._events = Object.create(null);
                this._eventsCount = 0;
              } else if (a0[Y] !== undefined) {
                if (--this._eventsCount == 0) {
                  this._events = Object.create(null);
                } else {
                  delete a0[Y];
                }
              }
              return this;
            }
            if (arguments.length === 0) {
              var a2;
              var a3 = Object.keys(a0);
              for (a1 = 0; a1 < a3.length; ++a1) {
                if ((a2 = a3[a1]) !== "removeListener") {
                  this.removeAllListeners(a2);
                }
              }
              this.removeAllListeners("removeListener");
              this._events = Object.create(null);
              this._eventsCount = 0;
              return this;
            }
            if (typeof (Z = a0[Y]) == "function") {
              this.removeListener(Y, Z);
            } else if (Z !== undefined) {
              for (a1 = Z.length - 1; a1 >= 0; a1--) {
                this.removeListener(Y, Z[a1]);
              }
            }
            return this;
          };
          z.prototype.listeners = function Y(Z) {
            return G(this, Z, true);
          };
          z.prototype.rawListeners = function Z(a0) {
            return G(this, a0, false);
          };
          z.listenerCount = function (a0, a1) {
            if (typeof a0.listenerCount == "function") {
              return a0.listenerCount(a1);
            } else {
              return H.call(a0, a1);
            }
          };
          z.prototype.listenerCount = H;
          z.prototype.eventNames = function a0() {
            if (this._eventsCount > 0) {
              return q(this._events);
            } else {
              return [];
            }
          };
        }, function (j, k) {
          var l = {}.toString;
          j.exports = Array.isArray || function (m) {
            return l.call(m) == "[object Array]";
          };
        }, function (j, k, l) {
          (function (m) {
            var p = l(32);
            var q = l(13);
            var v = l(41);
            var w = l(42);
            var x = l(8);
            var y = k;
            y.request = function (z, A) {
              z = typeof z == "string" ? x.parse(z) : v(z);
              var B = m.location.protocol.search(/^https?:$/) === -1 ? "http:" : "";
              var C = z.protocol || B;
              var D = z.hostname || z.host;
              var E = z.port;
              var F = z.path || "/";
              if (D && D.indexOf(":") !== -1) {
                D = "[" + D + "]";
              }
              z.url = (D ? C + "//" + D : "") + (E ? ":" + E : "") + F;
              z.method = (z.method || "GET").toUpperCase();
              z.headers = z.headers || {};
              var G = new p(z);
              if (A) {
                G.on("response", A);
              }
              return G;
            };
            y.get = function z(A, B) {
              var C = y.request(A, B);
              C.end();
              return C;
            };
            y.ClientRequest = p;
            y.IncomingMessage = q.IncomingMessage;
            y.Agent = function () {};
            y.Agent.defaultMaxSockets = 4;
            y.globalAgent = new y.Agent();
            y.STATUS_CODES = w;
            y.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"];
          }).call(k, l(0));
        }, function (j, k, l) {
          (function (m) {
            k.fetch = y(m.fetch) && y(m.ReadableStream);
            k.writableStream = y(m.WritableStream);
            k.abortController = y(m.AbortController);
            k.blobConstructor = false;
            try {
              new Blob([new ArrayBuffer(1)]);
              k.blobConstructor = true;
            } catch (z) {}
            function p() {
              if (v !== undefined) {
                return v;
              }
              if (m.XMLHttpRequest) {
                v = new m.XMLHttpRequest();
                try {
                  v.open("GET", m.XDomainRequest ? "/" : "https://example.com");
                } catch (A) {
                  v = null;
                }
              } else {
                v = null;
              }
              return v;
            }
            function q(A) {
              var B = p();
              if (!B) {
                return false;
              }
              try {
                B.responseType = A;
                return B.responseType === A;
              } catch (C) {}
              return false;
            }
            var v;
            var w = m.ArrayBuffer !== undefined;
            var x = w && y(m.ArrayBuffer.prototype.slice);
            function y(A) {
              return typeof A == "function";
            }
            k.arraybuffer = k.fetch || w && q("arraybuffer");
            k.msstream = !k.fetch && x && q("ms-stream");
            k.mozchunkedarraybuffer = !k.fetch && w && q("moz-chunked-arraybuffer");
            k.overrideMimeType = k.fetch || !!p() && y(p().overrideMimeType);
            k.vbArray = y(m.VBArray);
            v = null;
          }).call(k, l(0));
        }, function (j, k, l) {
          (function (m, p, q) {
            var v = l(12);
            var w = l(2);
            var x = l(14);
            var y = k.readyStates = {
              UNSENT: 0,
              OPENED: 1,
              HEADERS_RECEIVED: 2,
              LOADING: 3,
              DONE: 4
            };
            var z = k.IncomingMessage = function (A, B, C, D) {
              var E = this;
              x.Readable.call(E);
              E._mode = C;
              E.headers = {};
              E.rawHeaders = [];
              E.trailers = {};
              E.rawTrailers = [];
              E.on("end", function () {
                m.nextTick(function () {
                  E.emit("close");
                });
              });
              if (C === "fetch") {
                E._fetchResponse = B;
                E.url = B.url;
                E.statusCode = B.status;
                E.statusMessage = B.statusText;
                B.headers.forEach(function (J, K) {
                  E.headers[K.toLowerCase()] = J;
                  E.rawHeaders.push(K, J);
                });
                if (v.writableStream) {
                  var F = new WritableStream({
                    write: function (J) {
                      return new Promise(function (K, L) {
                        if (E._destroyed) {
                          L();
                        } else if (E.push(new p(J))) {
                          K();
                        } else {
                          E._resumeFetch = K;
                        }
                      });
                    },
                    close: function () {
                      q.clearTimeout(D);
                      if (!E._destroyed) {
                        E.push(null);
                      }
                    },
                    abort: function (J) {
                      if (!E._destroyed) {
                        E.emit("error", J);
                      }
                    }
                  });
                  try {
                    B.body.pipeTo(F).catch(function (J) {
                      q.clearTimeout(D);
                      if (!E._destroyed) {
                        E.emit("error", J);
                      }
                    });
                    return;
                  } catch (J) {}
                }
                var G = B.body.getReader();
                (function K() {
                  G.read().then(function (L) {
                    if (!E._destroyed) {
                      if (L.done) {
                        q.clearTimeout(D);
                        E.push(null);
                        return;
                      }
                      E.push(new p(L.value));
                      K();
                    }
                  }).catch(function (L) {
                    q.clearTimeout(D);
                    if (!E._destroyed) {
                      E.emit("error", L);
                    }
                  });
                })();
              } else {
                E._xhr = A;
                E._pos = 0;
                E.url = A.responseURL;
                E.statusCode = A.status;
                E.statusMessage = A.statusText;
                A.getAllResponseHeaders().split(/\r?\n/).forEach(function (L) {
                  var M = L.match(/^([^:]+):\s*(.*)/);
                  if (M) {
                    var N = M[1].toLowerCase();
                    if (N === "set-cookie") {
                      if (E.headers[N] === undefined) {
                        E.headers[N] = [];
                      }
                      E.headers[N].push(M[2]);
                    } else if (E.headers[N] !== undefined) {
                      E.headers[N] += ", " + M[2];
                    } else {
                      E.headers[N] = M[2];
                    }
                    E.rawHeaders.push(M[1], M[2]);
                  }
                });
                E._charset = "x-user-defined";
                if (!v.overrideMimeType) {
                  var H = E.rawHeaders["mime-type"];
                  if (H) {
                    var I = H.match(/;\s*charset=([^;])(;|$)/);
                    if (I) {
                      E._charset = I[1].toLowerCase();
                    }
                  }
                  if (!E._charset) {
                    E._charset = "utf-8";
                  }
                }
              }
            };
            w(z, x.Readable);
            z.prototype._read = function () {
              var A = this;
              var B = A._resumeFetch;
              if (B) {
                A._resumeFetch = null;
                B();
              }
            };
            z.prototype._onXHRProgress = function () {
              var A = this;
              var B = A._xhr;
              var C = null;
              switch (A._mode) {
                case "text:vbarray":
                  if (B.readyState !== y.DONE) {
                    break;
                  }
                  try {
                    C = new q.VBArray(B.responseBody).toArray();
                  } catch (H) {}
                  if (C !== null) {
                    A.push(new p(C));
                    break;
                  }
                case "text":
                  try {
                    C = B.responseText;
                  } catch (I) {
                    A._mode = "text:vbarray";
                    break;
                  }
                  if (C.length > A._pos) {
                    var D = C.substr(A._pos);
                    if (A._charset === "x-user-defined") {
                      for (var E = new p(D.length), F = 0; F < D.length; F++) {
                        E[F] = D.charCodeAt(F) & 255;
                      }
                      A.push(E);
                    } else {
                      A.push(D, A._charset);
                    }
                    A._pos = C.length;
                  }
                  break;
                case "arraybuffer":
                  if (B.readyState !== y.DONE || !B.response) {
                    break;
                  }
                  C = B.response;
                  A.push(new p(new Uint8Array(C)));
                  break;
                case "moz-chunked-arraybuffer":
                  C = B.response;
                  if (B.readyState !== y.LOADING || !C) {
                    break;
                  }
                  A.push(new p(new Uint8Array(C)));
                  break;
                case "ms-stream":
                  C = B.response;
                  if (B.readyState !== y.LOADING) {
                    break;
                  }
                  var G = new q.MSStreamReader();
                  G.onprogress = function () {
                    if (G.result.byteLength > A._pos) {
                      A.push(new p(new Uint8Array(G.result.slice(A._pos))));
                      A._pos = G.result.byteLength;
                    }
                  };
                  G.onload = function () {
                    A.push(null);
                  };
                  G.readAsArrayBuffer(C);
              }
              if (A._xhr.readyState === y.DONE && A._mode !== "ms-stream") {
                A.push(null);
              }
            };
          }).call(k, l(1), l(3).Buffer, l(0));
        }, function (j, k, l) {
          (k = j.exports = l(15)).Stream = k;
          k.Readable = k;
          k.Writable = l(18);
          k.Duplex = l(4);
          k.Transform = l(20);
          k.PassThrough = l(39);
        }, function (j, k, l) {
          'use strict';

          (function (q, z) {
            var B;
            var D;
            var G = l(6);
            j.exports = Y;
            var H = l(10);
            Y.ReadableState = X;
            l(9).EventEmitter;
            function I(ad, ae) {
              return ad.listeners(ae).length;
            }
            var J = l(16);
            var K = l(7).Buffer;
            var M = q.Uint8Array || function () {};
            var N = Object.create(l(5));
            N.inherits = l(2);
            var O = l(33);
            var Q = undefined;
            Q = O && O.debuglog ? O.debuglog("stream") : function () {};
            var U = l(34);
            var V = l(17);
            N.inherits(Y, J);
            var W = ["error", "close", "destroy", "pause", "resume"];
            function X(ad, ae) {
              B = B || l(4);
              ad = ad || {};
              var af = ae instanceof B;
              this.objectMode = !!ad.objectMode;
              if (af) {
                this.objectMode = this.objectMode || !!ad.readableObjectMode;
              }
              var ag = ad.highWaterMark;
              var ah = ad.readableHighWaterMark;
              var ai = this.objectMode ? 16 : 16384;
              if (ag || ag === 0) {
                this.highWaterMark = ag;
              } else if (af && (ah || ah === 0)) {
                this.highWaterMark = ah;
              } else {
                this.highWaterMark = ai;
              }
              this.highWaterMark = Math.floor(this.highWaterMark);
              this.buffer = new U();
              this.length = 0;
              this.pipes = null;
              this.pipesCount = 0;
              this.flowing = null;
              this.ended = false;
              this.endEmitted = false;
              this.reading = false;
              this.sync = true;
              this.needReadable = false;
              this.emittedReadable = false;
              this.readableListening = false;
              this.resumeScheduled = false;
              this.destroyed = false;
              this.defaultEncoding = ad.defaultEncoding || "utf8";
              this.awaitDrain = 0;
              this.readingMore = false;
              this.decoder = null;
              this.encoding = null;
              if (ad.encoding) {
                if (!D) {
                  D = l(19).StringDecoder;
                }
                this.decoder = new D(ad.encoding);
                this.encoding = ad.encoding;
              }
            }
            function Y(ad) {
              B = B || l(4);
              if (!(this instanceof Y)) {
                return new Y(ad);
              }
              this._readableState = new X(ad, this);
              this.readable = true;
              if (ad) {
                if (typeof ad.read == "function") {
                  this._read = ad.read;
                }
                if (typeof ad.destroy == "function") {
                  this._destroy = ad.destroy;
                }
              }
              J.call(this);
            }
            function Z(ad, ae, af, ag, ah) {
              var ai;
              var aj;
              var ak;
              var al;
              var am;
              var an;
              var ao;
              var ap = ad._readableState;
              if (ae === null) {
                ap.reading = false;
                (function aq(ar, as) {
                  if (!as.ended) {
                    if (as.decoder) {
                      var at = as.decoder.end();
                      if (at && at.length) {
                        as.buffer.push(at);
                        as.length += as.objectMode ? 1 : at.length;
                      }
                    }
                    as.ended = true;
                    a2(ar);
                  }
                })(ad, ap);
              } else {
                if (!ah) {
                  ai = ap;
                  aj = ae;
                  al = aj;
                  if (!K.isBuffer(al) && !(al instanceof M) && typeof aj != "string" && aj !== undefined && !ai.objectMode) {
                    ak = TypeError("Invalid non-string/buffer chunk");
                  }
                  ao = ak;
                }
                if (ao) {
                  ad.emit("error", ao);
                } else if (ap.objectMode || ae && ae.length > 0) {
                  if (typeof ae != "string" && !ap.objectMode && Object.getPrototypeOf(ae) !== K.prototype) {
                    an = ae;
                    ae = K.from(an);
                  }
                  if (ag) {
                    if (ap.endEmitted) {
                      ad.emit("error", Error("stream.unshift() after end event"));
                    } else {
                      a0(ad, ap, ae, true);
                    }
                  } else if (ap.ended) {
                    ad.emit("error", Error("stream.push() after EOF"));
                  } else {
                    ap.reading = false;
                    if (ap.decoder && !af) {
                      ae = ap.decoder.write(ae);
                      if (ap.objectMode || ae.length !== 0) {
                        a0(ad, ap, ae, false);
                      } else {
                        a4(ad, ap);
                      }
                    } else {
                      a0(ad, ap, ae, false);
                    }
                  }
                } else if (!ag) {
                  ap.reading = false;
                }
              }
              am = ap;
              return !am.ended && (am.needReadable || am.length < am.highWaterMark || am.length === 0);
            }
            function a0(ad, ae, af, ag) {
              if (ae.flowing && ae.length === 0 && !ae.sync) {
                ad.emit("data", af);
                ad.read(0);
              } else {
                ae.length += ae.objectMode ? 1 : af.length;
                if (ag) {
                  ae.buffer.unshift(af);
                } else {
                  ae.buffer.push(af);
                }
                if (ae.needReadable) {
                  a2(ad);
                }
              }
              a4(ad, ae);
            }
            function a1(ad, ae) {
              if (ad <= 0 || ae.length === 0 && ae.ended) {
                return 0;
              }
              if (ae.objectMode) {
                return 1;
              }
              if (ad != ad) {
                if (ae.flowing && ae.length) {
                  return ae.buffer.head.data.length;
                } else {
                  return ae.length;
                }
              }
              if (ad > ae.highWaterMark) {
                var af;
                if ((af = ad) >= 8388608) {
                  af = 8388608;
                } else {
                  af--;
                  af |= af >>> 1;
                  af |= af >>> 2;
                  af |= af >>> 4;
                  af |= af >>> 8;
                  af |= af >>> 16;
                  af++;
                }
                ae.highWaterMark = af;
              }
              if (ad <= ae.length) {
                return ad;
              } else if (ae.ended) {
                return ae.length;
              } else {
                ae.needReadable = true;
                return 0;
              }
            }
            function a2(ad) {
              var ae = ad._readableState;
              ae.needReadable = false;
              if (!ae.emittedReadable) {
                Q("emitReadable", ae.flowing);
                ae.emittedReadable = true;
                if (ae.sync) {
                  G.nextTick(a3, ad);
                } else {
                  a3(ad);
                }
              }
            }
            function a3(ad) {
              Q("emit readable");
              ad.emit("readable");
              a8(ad);
            }
            function a4(ad, ae) {
              if (!ae.readingMore) {
                ae.readingMore = true;
                G.nextTick(a5, ad, ae);
              }
            }
            function a5(ad, ae) {
              for (var af = ae.length; !ae.reading && !ae.flowing && !ae.ended && ae.length < ae.highWaterMark && (Q("maybeReadMore read 0"), ad.read(0), af !== ae.length);) {
                af = ae.length;
              }
              ae.readingMore = false;
            }
            function a6(ad) {
              Q("readable nexttick read 0");
              ad.read(0);
            }
            function a7(ad, ae) {
              if (!ae.reading) {
                Q("resume read 0");
                ad.read(0);
              }
              ae.resumeScheduled = false;
              ae.awaitDrain = 0;
              ad.emit("resume");
              a8(ad);
              if (ae.flowing && !ae.reading) {
                ad.read(0);
              }
            }
            function a8(ad) {
              var ae = ad._readableState;
              for (Q("flow", ae.flowing); ae.flowing && ad.read() !== null;);
            }
            function a9(ad, ae) {
              var af;
              var ag;
              var ah;
              var ai;
              var aj;
              if (ae.length === 0) {
                return null;
              } else {
                if (ae.objectMode) {
                  af = ae.buffer.shift();
                } else if (!ad || ad >= ae.length) {
                  af = ae.decoder ? ae.buffer.join("") : ae.buffer.length === 1 ? ae.buffer.head.data : ae.buffer.concat(ae.length);
                  ae.buffer.clear();
                } else {
                  ag = ad;
                  ah = ae.buffer;
                  ai = ae.decoder;
                  if (ag < ah.head.data.length) {
                    aj = ah.head.data.slice(0, ag);
                    ah.head.data = ah.head.data.slice(ag);
                  } else {
                    aj = ag === ah.head.data.length ? ah.shift() : ai ? function ak(al, am) {
                      var an = am.head;
                      var ao = 1;
                      var ap = an.data;
                      for (al -= ap.length; an = an.next;) {
                        var aq = an.data;
                        var ar = al > aq.length ? aq.length : al;
                        if (ar === aq.length) {
                          ap += aq;
                        } else {
                          ap += aq.slice(0, al);
                        }
                        if ((al -= ar) == 0) {
                          if (ar === aq.length) {
                            ++ao;
                            if (an.next) {
                              am.head = an.next;
                            } else {
                              am.head = am.tail = null;
                            }
                          } else {
                            am.head = an;
                            an.data = aq.slice(ar);
                          }
                          break;
                        }
                        ++ao;
                      }
                      am.length -= ao;
                      return ap;
                    }(ag, ah) : function al(am, an) {
                      var ao = K.allocUnsafe(am);
                      var ap = an.head;
                      var aq = 1;
                      ap.data.copy(ao);
                      am -= ap.data.length;
                      for (; ap = ap.next;) {
                        var ar = ap.data;
                        var as = am > ar.length ? ar.length : am;
                        ar.copy(ao, ao.length - am, 0, as);
                        if ((am -= as) == 0) {
                          if (as === ar.length) {
                            ++aq;
                            if (ap.next) {
                              an.head = ap.next;
                            } else {
                              an.head = an.tail = null;
                            }
                          } else {
                            an.head = ap;
                            ap.data = ar.slice(as);
                          }
                          break;
                        }
                        ++aq;
                      }
                      an.length -= aq;
                      return ao;
                    }(ag, ah);
                  }
                  af = aj;
                }
                return af;
              }
            }
            function aa(ad) {
              var ae = ad._readableState;
              if (ae.length > 0) {
                throw Error("\"endReadable()\" called on non-empty stream");
              }
              if (!ae.endEmitted) {
                ae.ended = true;
                G.nextTick(ab, ae, ad);
              }
            }
            function ab(ad, ae) {
              if (!(ad.endEmitted || ad.length !== 0)) {
                ad.endEmitted = true;
                ae.readable = false;
                ae.emit("end");
              }
            }
            function ac(ad, ae) {
              for (var af = 0, ag = ad.length; af < ag; af++) {
                if (ad[af] === ae) {
                  return af;
                }
              }
              return -1;
            }
            Object.defineProperty(Y.prototype, "destroyed", {
              get: function () {
                return this._readableState !== undefined && this._readableState.destroyed;
              },
              set: function (ad) {
                if (this._readableState) {
                  this._readableState.destroyed = ad;
                }
              }
            });
            Y.prototype.destroy = V.destroy;
            Y.prototype._undestroy = V.undestroy;
            Y.prototype._destroy = function (ad, ae) {
              this.push(null);
              ae(ad);
            };
            Y.prototype.push = function (ad, ae) {
              var af;
              var ag = this._readableState;
              if (ag.objectMode) {
                af = true;
              } else if (typeof ad == "string") {
                if ((ae = ae || ag.defaultEncoding) !== ag.encoding) {
                  ad = K.from(ad, ae);
                  ae = "";
                }
                af = true;
              }
              return Z(this, ad, ae, false, af);
            };
            Y.prototype.unshift = function (ad) {
              return Z(this, ad, null, true, false);
            };
            Y.prototype.isPaused = function () {
              return this._readableState.flowing === false;
            };
            Y.prototype.setEncoding = function (ad) {
              if (!D) {
                D = l(19).StringDecoder;
              }
              this._readableState.decoder = new D(ad);
              this._readableState.encoding = ad;
              return this;
            };
            Y.prototype.read = function (ad) {
              Q("read", ad);
              ad = parseInt(ad, 10);
              var ae;
              var af = this._readableState;
              var ag = ad;
              if (ad !== 0) {
                af.emittedReadable = false;
              }
              if (ad === 0 && af.needReadable && (af.length >= af.highWaterMark || af.ended)) {
                Q("read: emitReadable", af.length, af.ended);
                if (af.length === 0 && af.ended) {
                  aa(this);
                } else {
                  a2(this);
                }
                return null;
              }
              if ((ad = a1(ad, af)) === 0 && af.ended) {
                if (af.length === 0) {
                  aa(this);
                }
                return null;
              }
              var ah = af.needReadable;
              Q("need readable", ah);
              if (af.length === 0 || af.length - ad < af.highWaterMark) {
                Q("length less than watermark", ah = true);
              }
              if (af.ended || af.reading) {
                Q("reading or ended", ah = false);
              } else if (ah) {
                Q("do read");
                af.reading = true;
                af.sync = true;
                if (af.length === 0) {
                  af.needReadable = true;
                }
                this._read(af.highWaterMark);
                af.sync = false;
                if (!af.reading) {
                  ad = a1(ag, af);
                }
              }
              if ((ae = ad > 0 ? a9(ad, af) : null) === null) {
                af.needReadable = true;
                ad = 0;
              } else {
                af.length -= ad;
              }
              if (af.length === 0) {
                if (!af.ended) {
                  af.needReadable = true;
                }
                if (ag !== ad && af.ended) {
                  aa(this);
                }
              }
              if (ae !== null) {
                this.emit("data", ae);
              }
              return ae;
            };
            Y.prototype._read = function (ad) {
              this.emit("error", Error("_read() is not implemented"));
            };
            Y.prototype.pipe = function (ad, ae) {
              var af;
              var ag = this;
              var ah = this._readableState;
              switch (ah.pipesCount) {
                case 0:
                  ah.pipes = ad;
                  break;
                case 1:
                  ah.pipes = [ah.pipes, ad];
                  break;
                default:
                  ah.pipes.push(ad);
              }
              ah.pipesCount += 1;
              Q("pipe count=%d opts=%j", ah.pipesCount, ae);
              var ai = ae && ae.end === false || ad === z.stdout || ad === z.stderr ? as : ak;
              function aj(at, au) {
                Q("onunpipe");
                if (at === ag && au && au.hasUnpiped === false) {
                  au.hasUnpiped = true;
                  Q("cleanup");
                  ad.removeListener("close", aq);
                  ad.removeListener("finish", ar);
                  ad.removeListener("drain", al);
                  ad.removeListener("error", ap);
                  ad.removeListener("unpipe", aj);
                  ag.removeListener("end", ak);
                  ag.removeListener("end", as);
                  ag.removeListener("data", ao);
                  am = true;
                  if (ah.awaitDrain && (!ad._writableState || ad._writableState.needDrain)) {
                    al();
                  }
                }
              }
              function ak() {
                Q("onend");
                ad.end();
              }
              if (ah.endEmitted) {
                G.nextTick(ai);
              } else {
                ag.once("end", ai);
              }
              ad.on("unpipe", aj);
              af = ag;
              function al() {
                var at = af._readableState;
                Q("pipeOnDrain", at.awaitDrain);
                if (at.awaitDrain) {
                  at.awaitDrain--;
                }
                if (at.awaitDrain === 0 && I(af, "data")) {
                  at.flowing = true;
                  a8(af);
                }
              }
              ad.on("drain", al);
              var am = false;
              var an = false;
              function ao(at) {
                Q("ondata");
                an = false;
                if (!(ad.write(at) !== false || an)) {
                  if ((ah.pipesCount === 1 && ah.pipes === ad || ah.pipesCount > 1 && ac(ah.pipes, ad) !== -1) && !am) {
                    Q("false write response, pause", ag._readableState.awaitDrain);
                    ag._readableState.awaitDrain++;
                    an = true;
                  }
                  ag.pause();
                }
              }
              function ap(at) {
                Q("onerror", at);
                as();
                ad.removeListener("error", ap);
                if (I(ad, "error") === 0) {
                  ad.emit("error", at);
                }
              }
              function aq() {
                ad.removeListener("finish", ar);
                as();
              }
              function ar() {
                Q("onfinish");
                ad.removeListener("close", aq);
                as();
              }
              function as() {
                Q("unpipe");
                ag.unpipe(ad);
              }
              ag.on("data", ao);
              (function at(au, av, aw) {
                if (typeof au.prependListener == "function") {
                  return au.prependListener(av, aw);
                }
                if (au._events && au._events[av]) {
                  if (H(au._events[av])) {
                    au._events[av].unshift(aw);
                  } else {
                    au._events[av] = [aw, au._events[av]];
                  }
                } else {
                  au.on(av, aw);
                }
              })(ad, "error", ap);
              ad.once("close", aq);
              ad.once("finish", ar);
              ad.emit("pipe", ag);
              if (!ah.flowing) {
                Q("pipe resume");
                ag.resume();
              }
              return ad;
            };
            Y.prototype.unpipe = function (ad) {
              var ae = this._readableState;
              var af = {
                hasUnpiped: false
              };
              if (ae.pipesCount === 0) {
                return this;
              }
              if (ae.pipesCount === 1) {
                if (!(ad && ad !== ae.pipes)) {
                  if (!ad) {
                    ad = ae.pipes;
                  }
                  ae.pipes = null;
                  ae.pipesCount = 0;
                  ae.flowing = false;
                  if (ad) {
                    ad.emit("unpipe", this, af);
                  }
                }
                return this;
              }
              if (!ad) {
                var ag = ae.pipes;
                var ah = ae.pipesCount;
                ae.pipes = null;
                ae.pipesCount = 0;
                ae.flowing = false;
                for (var ai = 0; ai < ah; ai++) {
                  ag[ai].emit("unpipe", this, af);
                }
                return this;
              }
              var aj = ac(ae.pipes, ad);
              if (!(aj === -1)) {
                ae.pipes.splice(aj, 1);
                ae.pipesCount -= 1;
                if (ae.pipesCount === 1) {
                  ae.pipes = ae.pipes[0];
                }
                ad.emit("unpipe", this, af);
              }
              return this;
            };
            Y.prototype.on = function (ad, ae) {
              var af = J.prototype.on.call(this, ad, ae);
              if (ad === "data") {
                if (this._readableState.flowing !== false) {
                  this.resume();
                }
              } else if (ad === "readable") {
                var ag = this._readableState;
                if (!(ag.endEmitted || ag.readableListening)) {
                  ag.readableListening = ag.needReadable = true;
                  ag.emittedReadable = false;
                  if (ag.reading) {
                    if (ag.length) {
                      a2(this);
                    }
                  } else {
                    G.nextTick(a6, this);
                  }
                }
              }
              return af;
            };
            Y.prototype.addListener = Y.prototype.on;
            Y.prototype.resume = function () {
              var ad;
              var ae;
              var af = this._readableState;
              if (!af.flowing) {
                Q("resume");
                af.flowing = true;
                ad = this;
                if (!(ae = af).resumeScheduled) {
                  ae.resumeScheduled = true;
                  G.nextTick(a7, ad, ae);
                }
              }
              return this;
            };
            Y.prototype.pause = function () {
              Q("call pause flowing=%j", this._readableState.flowing);
              if (this._readableState.flowing !== false) {
                Q("pause");
                this._readableState.flowing = false;
                this.emit("pause");
              }
              return this;
            };
            Y.prototype.wrap = function (ad) {
              var ae = this;
              var af = this._readableState;
              var ag = false;
              ad.on("end", function () {
                Q("wrapped end");
                if (af.decoder && !af.ended) {
                  var aj = af.decoder.end();
                  if (aj && aj.length) {
                    ae.push(aj);
                  }
                }
                ae.push(null);
              });
              ad.on("data", function (aj) {
                Q("wrapped data");
                if (af.decoder) {
                  aj = af.decoder.write(aj);
                }
                if (!af.objectMode || aj != null) {
                  if (af.objectMode || aj && aj.length) {
                    if (!ae.push(aj)) {
                      ag = true;
                      ad.pause();
                    }
                  }
                }
              });
              for (var ah in ad) {
                if (this[ah] === undefined && typeof ad[ah] == "function") {
                  this[ah] = function (aj) {
                    return function () {
                      return ad[aj].apply(ad, arguments);
                    };
                  }(ah);
                }
              }
              for (var ai = 0; ai < W.length; ai++) {
                ad.on(W[ai], this.emit.bind(this, W[ai]));
              }
              this._read = function (aj) {
                Q("wrapped _read", aj);
                if (ag) {
                  ag = false;
                  ad.resume();
                }
              };
              return this;
            };
            Object.defineProperty(Y.prototype, "readableHighWaterMark", {
              enumerable: false,
              get: function () {
                return this._readableState.highWaterMark;
              }
            });
            Y._fromList = a9;
          }).call(k, l(0), l(1));
        }, function (j, k, l) {
          j.exports = l(9).EventEmitter;
        }, function (j, k, l) {
          'use strict';

          var m = l(6);
          function o(p, q) {
            p.emit("error", q);
          }
          j.exports = {
            destroy: function p(q, u) {
              var v = this;
              var w = this._readableState && this._readableState.destroyed;
              var x = this._writableState && this._writableState.destroyed;
              if (w || x) {
                if (u) {
                  u(q);
                } else if (!(!q || this._writableState && this._writableState.errorEmitted)) {
                  m.nextTick(o, this, q);
                }
                return this;
              } else {
                if (this._readableState) {
                  this._readableState.destroyed = true;
                }
                if (this._writableState) {
                  this._writableState.destroyed = true;
                }
                this._destroy(q || null, function (y) {
                  if (!u && y) {
                    m.nextTick(o, v, y);
                    if (v._writableState) {
                      v._writableState.errorEmitted = true;
                    }
                  } else if (u) {
                    u(y);
                  }
                });
                return this;
              }
            },
            undestroy: function q() {
              if (this._readableState) {
                this._readableState.destroyed = false;
                this._readableState.reading = false;
                this._readableState.ended = false;
                this._readableState.endEmitted = false;
              }
              if (this._writableState) {
                this._writableState.destroyed = false;
                this._writableState.ended = false;
                this._writableState.ending = false;
                this._writableState.finished = false;
                this._writableState.errorEmitted = false;
              }
            }
          };
        }, function (j, k, l) {
          'use strict';

          (function (q, z, A) {
            var B;
            var D;
            var E = l(6);
            function F(Y, Z, a0) {
              this.chunk = Y;
              this.encoding = Z;
              this.callback = a0;
              this.next = null;
            }
            function G(Y) {
              var Z = this;
              this.next = null;
              this.entry = null;
              this.finish = function () {
                (function a0(a1, a2, a3) {
                  var a4 = a1.entry;
                  for (a1.entry = null; a4;) {
                    var a5 = a4.callback;
                    a2.pendingcb--;
                    a5(undefined);
                    a4 = a4.next;
                  }
                  if (a2.corkedRequestsFree) {
                    a2.corkedRequestsFree.next = a1;
                  } else {
                    a2.corkedRequestsFree = a1;
                  }
                })(Z, Y);
              };
            }
            j.exports = Q;
            var H = !q.browser && ["v0.10", "v0.9."].indexOf(q.version.slice(0, 5)) > -1 ? z : E.nextTick;
            Q.WritableState = P;
            var I = Object.create(l(5));
            I.inherits = l(2);
            var J = {
              deprecate: l(38)
            };
            var K = l(16);
            var L = l(7).Buffer;
            var M = A.Uint8Array || function () {};
            var N = l(17);
            function O() {}
            function P(Y, Z) {
              B = B || l(4);
              Y = Y || {};
              var a0 = Z instanceof B;
              this.objectMode = !!Y.objectMode;
              if (a0) {
                this.objectMode = this.objectMode || !!Y.writableObjectMode;
              }
              var a1 = Y.highWaterMark;
              var a2 = Y.writableHighWaterMark;
              var a3 = this.objectMode ? 16 : 16384;
              if (a1 || a1 === 0) {
                this.highWaterMark = a1;
              } else if (a0 && (a2 || a2 === 0)) {
                this.highWaterMark = a2;
              } else {
                this.highWaterMark = a3;
              }
              this.highWaterMark = Math.floor(this.highWaterMark);
              this.finalCalled = false;
              this.needDrain = false;
              this.ending = false;
              this.ended = false;
              this.finished = false;
              this.destroyed = false;
              var a4 = Y.decodeStrings === false;
              this.decodeStrings = !a4;
              this.defaultEncoding = Y.defaultEncoding || "utf8";
              this.length = 0;
              this.writing = false;
              this.corked = 0;
              this.sync = true;
              this.bufferProcessing = false;
              this.onwrite = function (a5) {
                (function a6(a7, a8) {
                  var a9;
                  var aa;
                  var ab;
                  var ac;
                  var ad;
                  var ae;
                  var af = a7._writableState;
                  var ag = af.sync;
                  var ah = af.writecb;
                  (ae = af).writing = false;
                  ae.writecb = null;
                  ae.length -= ae.writelen;
                  ae.writelen = 0;
                  if (a8) {
                    a9 = a7;
                    aa = af;
                    ab = ag;
                    ac = a8;
                    ad = ah;
                    --aa.pendingcb;
                    if (ab) {
                      E.nextTick(ad, ac);
                      E.nextTick(X, a9, aa);
                      a9._writableState.errorEmitted = true;
                      a9.emit("error", ac);
                    } else {
                      ad(ac);
                      a9._writableState.errorEmitted = true;
                      a9.emit("error", ac);
                      X(a9, aa);
                    }
                  } else {
                    var ai = V(af);
                    if (!(ai || af.corked || af.bufferProcessing || !af.bufferedRequest)) {
                      U(a7, af);
                    }
                    if (ag) {
                      H(T, a7, af, ai, ah);
                    } else {
                      T(a7, af, ai, ah);
                    }
                  }
                })(Z, a5);
              };
              this.writecb = null;
              this.writelen = 0;
              this.bufferedRequest = null;
              this.lastBufferedRequest = null;
              this.pendingcb = 0;
              this.prefinished = false;
              this.errorEmitted = false;
              this.bufferedRequestCount = 0;
              this.corkedRequestsFree = new G(this);
            }
            function Q(Y) {
              B = B || l(4);
              if (!D.call(Q, this) && !(this instanceof B)) {
                return new Q(Y);
              }
              this._writableState = new P(Y, this);
              this.writable = true;
              if (Y) {
                if (typeof Y.write == "function") {
                  this._write = Y.write;
                }
                if (typeof Y.writev == "function") {
                  this._writev = Y.writev;
                }
                if (typeof Y.destroy == "function") {
                  this._destroy = Y.destroy;
                }
                if (typeof Y.final == "function") {
                  this._final = Y.final;
                }
              }
              K.call(this);
            }
            function R(Y, Z, a0, a1, a2, a3, a4) {
              Z.writelen = a1;
              Z.writecb = a4;
              Z.writing = true;
              Z.sync = true;
              if (a0) {
                Y._writev(a2, Z.onwrite);
              } else {
                Y._write(a2, a3, Z.onwrite);
              }
              Z.sync = false;
            }
            function T(Y, Z, a0, a1) {
              var a2;
              var a3;
              if (!a0) {
                a2 = Y;
                a3 = Z;
                if (a3.length === 0 && a3.needDrain) {
                  a3.needDrain = false;
                  a2.emit("drain");
                }
              }
              Z.pendingcb--;
              a1();
              X(Y, Z);
            }
            function U(Y, Z) {
              Z.bufferProcessing = true;
              var a0 = Z.bufferedRequest;
              if (Y._writev && a0 && a0.next) {
                var a1 = Array(Z.bufferedRequestCount);
                var a2 = Z.corkedRequestsFree;
                a2.entry = a0;
                for (var a3 = 0, a4 = true; a0;) {
                  a1[a3] = a0;
                  if (!a0.isBuf) {
                    a4 = false;
                  }
                  a0 = a0.next;
                  a3 += 1;
                }
                a1.allBuffers = a4;
                R(Y, Z, true, Z.length, a1, "", a2.finish);
                Z.pendingcb++;
                Z.lastBufferedRequest = null;
                if (a2.next) {
                  Z.corkedRequestsFree = a2.next;
                  a2.next = null;
                } else {
                  Z.corkedRequestsFree = new G(Z);
                }
                Z.bufferedRequestCount = 0;
              } else {
                for (; a0;) {
                  var a5 = a0.chunk;
                  var a6 = a0.encoding;
                  var a7 = a0.callback;
                  var a8 = Z.objectMode ? 1 : a5.length;
                  R(Y, Z, false, a8, a5, a6, a7);
                  a0 = a0.next;
                  Z.bufferedRequestCount--;
                  if (Z.writing) {
                    break;
                  }
                }
                if (a0 === null) {
                  Z.lastBufferedRequest = null;
                }
              }
              Z.bufferedRequest = a0;
              Z.bufferProcessing = false;
            }
            function V(Y) {
              return Y.ending && Y.length === 0 && Y.bufferedRequest === null && !Y.finished && !Y.writing;
            }
            function W(Y, Z) {
              Y._final(function (a0) {
                Z.pendingcb--;
                if (a0) {
                  Y.emit("error", a0);
                }
                Z.prefinished = true;
                Y.emit("prefinish");
                X(Y, Z);
              });
            }
            function X(Y, Z) {
              var a0;
              var a1;
              var a2 = V(Z);
              if (a2) {
                a0 = Y;
                if (!((a1 = Z).prefinished || a1.finalCalled)) {
                  if (typeof a0._final == "function") {
                    a1.pendingcb++;
                    a1.finalCalled = true;
                    E.nextTick(W, a0, a1);
                  } else {
                    a1.prefinished = true;
                    a0.emit("prefinish");
                  }
                }
                if (Z.pendingcb === 0) {
                  Z.finished = true;
                  Y.emit("finish");
                }
              }
              return a2;
            }
            I.inherits(Q, K);
            P.prototype.getBuffer = function Y() {
              for (var Z = this.bufferedRequest, a0 = []; Z;) {
                a0.push(Z);
                Z = Z.next;
              }
              return a0;
            };
            (function () {
              try {
                Object.defineProperty(P.prototype, "buffer", {
                  get: J.deprecate(function () {
                    return this.getBuffer();
                  }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                });
              } catch (Z) {}
            })();
            if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
              D = Function.prototype[Symbol.hasInstance];
              Object.defineProperty(Q, Symbol.hasInstance, {
                value: function (Z) {
                  return !!D.call(this, Z) || this === Q && Z && Z._writableState instanceof P;
                }
              });
            } else {
              D = function (Z) {
                return Z instanceof this;
              };
            }
            Q.prototype.pipe = function () {
              this.emit("error", Error("Cannot pipe, not readable"));
            };
            Q.prototype.write = function (Z, a0, a1) {
              var a2;
              var a3;
              var a4;
              var a5;
              var a6;
              var a7;
              var a8;
              var a9;
              var aa;
              var ab;
              var ac;
              var ad = this._writableState;
              var ae = false;
              var af = !ad.objectMode && (ac = Z, L.isBuffer(ac) || ac instanceof M);
              if (af && !L.isBuffer(Z)) {
                a2 = Z;
                Z = L.from(a2);
              }
              if (typeof a0 == "function") {
                a1 = a0;
                a0 = null;
              }
              if (af) {
                a0 = "buffer";
              } else if (!a0) {
                a0 = ad.defaultEncoding;
              }
              if (typeof a1 != "function") {
                a1 = O;
              }
              if (ad.ended) {
                a3 = this;
                a4 = a1;
                a5 = Error("write after end");
                a3.emit("error", a5);
                E.nextTick(a4, a5);
              } else if (af || (a6 = this, a7 = ad, a8 = Z, a9 = a1, aa = true, ab = false, a8 === null ? ab = TypeError("May not write null values to stream") : typeof a8 == "string" || a8 === undefined || a7.objectMode || (ab = TypeError("Invalid non-string/buffer chunk")), ab && (a6.emit("error", ab), E.nextTick(a9, ab), aa = false), aa)) {
                ad.pendingcb++;
                ae = function ag(ah, ai, aj, ak, al, am) {
                  if (!aj) {
                    var an;
                    var ao;
                    var ap;
                    an = ai;
                    ao = ak;
                    ap = al;
                    if (!(an.objectMode || an.decodeStrings === false || typeof ao != "string")) {
                      ao = L.from(ao, ap);
                    }
                    var aq = ao;
                    if (ak !== aq) {
                      aj = true;
                      al = "buffer";
                      ak = aq;
                    }
                  }
                  var ar = ai.objectMode ? 1 : ak.length;
                  ai.length += ar;
                  var as = ai.length < ai.highWaterMark;
                  if (!as) {
                    ai.needDrain = true;
                  }
                  if (ai.writing || ai.corked) {
                    var at = ai.lastBufferedRequest;
                    ai.lastBufferedRequest = {
                      chunk: ak,
                      encoding: al,
                      isBuf: aj,
                      callback: am,
                      next: null
                    };
                    if (at) {
                      at.next = ai.lastBufferedRequest;
                    } else {
                      ai.bufferedRequest = ai.lastBufferedRequest;
                    }
                    ai.bufferedRequestCount += 1;
                  } else {
                    R(ah, ai, false, ar, ak, al, am);
                  }
                  return as;
                }(this, ad, af, Z, a0, a1);
              }
              return ae;
            };
            Q.prototype.cork = function () {
              var Z = this._writableState;
              Z.corked++;
            };
            Q.prototype.uncork = function () {
              var Z = this._writableState;
              if (!!Z.corked) {
                Z.corked--;
                if (!(Z.writing || Z.corked || Z.finished || Z.bufferProcessing || !Z.bufferedRequest)) {
                  U(this, Z);
                }
              }
            };
            Q.prototype.setDefaultEncoding = function Z(a0) {
              if (typeof a0 == "string") {
                a0 = a0.toLowerCase();
              }
              if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((a0 + "").toLowerCase()) > -1)) {
                throw TypeError("Unknown encoding: " + a0);
              }
              this._writableState.defaultEncoding = a0;
              return this;
            };
            Object.defineProperty(Q.prototype, "writableHighWaterMark", {
              enumerable: false,
              get: function () {
                return this._writableState.highWaterMark;
              }
            });
            Q.prototype._write = function (a0, a1, a2) {
              a2(Error("_write() is not implemented"));
            };
            Q.prototype._writev = null;
            Q.prototype.end = function (a0, a1, a2) {
              var a3;
              var a4;
              var a5;
              var a6 = this._writableState;
              if (typeof a0 == "function") {
                a2 = a0;
                a0 = null;
                a1 = null;
              } else if (typeof a1 == "function") {
                a2 = a1;
                a1 = null;
              }
              if (a0 != null) {
                this.write(a0, a1);
              }
              if (a6.corked) {
                a6.corked = 1;
                this.uncork();
              }
              if (!(a6.ending || a6.finished)) {
                a3 = this;
                a4 = a6;
                a5 = a2;
                a4.ending = true;
                X(a3, a4);
                if (a5) {
                  if (a4.finished) {
                    E.nextTick(a5);
                  } else {
                    a3.once("finish", a5);
                  }
                }
                a4.ended = true;
                a3.writable = false;
              }
            };
            Object.defineProperty(Q.prototype, "destroyed", {
              get: function () {
                return this._writableState !== undefined && this._writableState.destroyed;
              },
              set: function (a0) {
                if (this._writableState) {
                  this._writableState.destroyed = a0;
                }
              }
            });
            Q.prototype.destroy = N.destroy;
            Q.prototype._undestroy = N.undestroy;
            Q.prototype._destroy = function (a0, a1) {
              this.end();
              a1(a0);
            };
          }).call(k, l(1), l(36).setImmediate, l(0));
        }, function (j, k, m) {
          'use strict';

          var p = m(7).Buffer;
          var q = p.isEncoding || function (E) {
            switch ((E = "" + E) && E.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return true;
              default:
                return false;
            }
          };
          function v(E) {
            var F;
            this.encoding = function G(H) {
              var I = function J(K) {
                var L;
                if (!K) {
                  return "utf8";
                }
                for (;;) {
                  switch (K) {
                    case "utf8":
                    case "utf-8":
                      return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return "utf16le";
                    case "latin1":
                    case "binary":
                      return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                      return K;
                    default:
                      if (L) {
                        return;
                      }
                      K = ("" + K).toLowerCase();
                      L = true;
                  }
                }
              }(H);
              if (typeof I != "string" && (p.isEncoding === q || !q(H))) {
                throw Error("Unknown encoding: " + H);
              }
              return I || H;
            }(E);
            switch (this.encoding) {
              case "utf16le":
                this.text = y;
                this.end = z;
                F = 4;
                break;
              case "utf8":
                this.fillLast = x;
                F = 4;
                break;
              case "base64":
                this.text = A;
                this.end = B;
                F = 3;
                break;
              default:
                this.write = C;
                this.end = D;
                return;
            }
            this.lastNeed = 0;
            this.lastTotal = 0;
            this.lastChar = p.allocUnsafe(F);
          }
          function w(E) {
            if (E <= 127) {
              return 0;
            } else if (E >> 5 == 6) {
              return 2;
            } else if (E >> 4 == 14) {
              return 3;
            } else if (E >> 3 == 30) {
              return 4;
            } else if (E >> 6 == 2) {
              return -1;
            } else {
              return -2;
            }
          }
          function x(E) {
            var F = this.lastTotal - this.lastNeed;
            var G = function H(I, J, K) {
              if ((J[0] & 192) != 128) {
                I.lastNeed = 0;
                return "�";
              }
              if (I.lastNeed > 1 && J.length > 1) {
                if ((J[1] & 192) != 128) {
                  I.lastNeed = 1;
                  return "�";
                }
                if (I.lastNeed > 2 && J.length > 2 && (J[2] & 192) != 128) {
                  I.lastNeed = 2;
                  return "�";
                }
              }
            }(this, E, F);
            if (G !== undefined) {
              return G;
            } else if (this.lastNeed <= E.length) {
              E.copy(this.lastChar, F, 0, this.lastNeed);
              return this.lastChar.toString(this.encoding, 0, this.lastTotal);
            } else {
              E.copy(this.lastChar, F, 0, E.length);
              this.lastNeed -= E.length;
              return;
            }
          }
          function y(E, F) {
            if ((E.length - F) % 2 == 0) {
              var G = E.toString("utf16le", F);
              if (G) {
                var H = G.charCodeAt(G.length - 1);
                if (H >= 55296 && H <= 56319) {
                  this.lastNeed = 2;
                  this.lastTotal = 4;
                  this.lastChar[0] = E[E.length - 2];
                  this.lastChar[1] = E[E.length - 1];
                  return G.slice(0, -1);
                }
              }
              return G;
            }
            this.lastNeed = 1;
            this.lastTotal = 2;
            this.lastChar[0] = E[E.length - 1];
            return E.toString("utf16le", F, E.length - 1);
          }
          function z(E) {
            var F = E && E.length ? this.write(E) : "";
            if (this.lastNeed) {
              var G = this.lastTotal - this.lastNeed;
              return F + this.lastChar.toString("utf16le", 0, G);
            }
            return F;
          }
          function A(E, F) {
            var G = (E.length - F) % 3;
            if (G === 0) {
              return E.toString("base64", F);
            } else {
              this.lastNeed = 3 - G;
              this.lastTotal = 3;
              if (G === 1) {
                this.lastChar[0] = E[E.length - 1];
              } else {
                this.lastChar[0] = E[E.length - 2];
                this.lastChar[1] = E[E.length - 1];
              }
              return E.toString("base64", F, E.length - G);
            }
          }
          function B(E) {
            var F = E && E.length ? this.write(E) : "";
            if (this.lastNeed) {
              return F + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
            } else {
              return F;
            }
          }
          function C(E) {
            return E.toString(this.encoding);
          }
          function D(E) {
            if (E && E.length) {
              return this.write(E);
            } else {
              return "";
            }
          }
          k.StringDecoder = v;
          v.prototype.write = function (E) {
            var F;
            var G;
            if (E.length === 0) {
              return "";
            }
            if (this.lastNeed) {
              if ((F = this.fillLast(E)) === undefined) {
                return "";
              }
              G = this.lastNeed;
              this.lastNeed = 0;
            } else {
              G = 0;
            }
            if (G < E.length) {
              if (F) {
                return F + this.text(E, G);
              } else {
                return this.text(E, G);
              }
            } else {
              return F || "";
            }
          };
          v.prototype.end = function E(F) {
            var G = F && F.length ? this.write(F) : "";
            if (this.lastNeed) {
              return G + "�";
            } else {
              return G;
            }
          };
          v.prototype.text = function F(G, H) {
            var I = function K(L, M, N) {
              var O = M.length - 1;
              if (O < N) {
                return 0;
              }
              var P = w(M[O]);
              if (P >= 0) {
                if (P > 0) {
                  L.lastNeed = P - 1;
                }
                return P;
              } else if (--O < N || P === -2) {
                return 0;
              } else if ((P = w(M[O])) >= 0) {
                if (P > 0) {
                  L.lastNeed = P - 2;
                }
                return P;
              } else if (--O < N || P === -2) {
                return 0;
              } else if ((P = w(M[O])) >= 0) {
                if (P > 0) {
                  if (P === 2) {
                    P = 0;
                  } else {
                    L.lastNeed = P - 3;
                  }
                }
                return P;
              } else {
                return 0;
              }
            }(this, G, H);
            if (!this.lastNeed) {
              return G.toString("utf8", H);
            }
            this.lastTotal = I;
            var J = G.length - (I - this.lastNeed);
            G.copy(this.lastChar, 0, J);
            return G.toString("utf8", H, J);
          };
          v.prototype.fillLast = function (G) {
            if (this.lastNeed <= G.length) {
              G.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
              return this.lastChar.toString(this.encoding, 0, this.lastTotal);
            }
            G.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, G.length);
            this.lastNeed -= G.length;
          };
        }, function (j, k, l) {
          'use strict';

          j.exports = v;
          var m = l(4);
          var p = Object.create(l(5));
          function q(y, z) {
            var A = this._transformState;
            A.transforming = false;
            var B = A.writecb;
            if (!B) {
              return this.emit("error", Error("write callback called multiple times"));
            }
            A.writechunk = null;
            A.writecb = null;
            if (z != null) {
              this.push(z);
            }
            B(y);
            var C = this._readableState;
            C.reading = false;
            if (C.needReadable || C.length < C.highWaterMark) {
              this._read(C.highWaterMark);
            }
          }
          function v(y) {
            if (!(this instanceof v)) {
              return new v(y);
            }
            m.call(this, y);
            this._transformState = {
              afterTransform: q.bind(this),
              needTransform: false,
              transforming: false,
              writecb: null,
              writechunk: null,
              writeencoding: null
            };
            this._readableState.needReadable = true;
            this._readableState.sync = false;
            if (y) {
              if (typeof y.transform == "function") {
                this._transform = y.transform;
              }
              if (typeof y.flush == "function") {
                this._flush = y.flush;
              }
            }
            this.on("prefinish", w);
          }
          function w() {
            var y = this;
            if (typeof this._flush == "function") {
              this._flush(function (z, A) {
                x(y, z, A);
              });
            } else {
              x(this, null, null);
            }
          }
          function x(y, z, A) {
            if (z) {
              return y.emit("error", z);
            }
            if (A != null) {
              y.push(A);
            }
            if (y._writableState.length) {
              throw Error("Calling transform done when ws.length != 0");
            }
            if (y._transformState.transforming) {
              throw Error("Calling transform done when still transforming");
            }
            return y.push(null);
          }
          p.inherits = l(2);
          p.inherits(v, m);
          v.prototype.push = function (y, z) {
            this._transformState.needTransform = false;
            return m.prototype.push.call(this, y, z);
          };
          v.prototype._transform = function (y, z, A) {
            throw Error("_transform() is not implemented");
          };
          v.prototype._write = function (y, z, A) {
            var B = this._transformState;
            B.writecb = A;
            B.writechunk = y;
            B.writeencoding = z;
            if (!B.transforming) {
              var C = this._readableState;
              if (B.needTransform || C.needReadable || C.length < C.highWaterMark) {
                this._read(C.highWaterMark);
              }
            }
          };
          v.prototype._read = function (y) {
            var z = this._transformState;
            if (z.writechunk !== null && z.writecb && !z.transforming) {
              z.transforming = true;
              this._transform(z.writechunk, z.writeencoding, z.afterTransform);
            } else {
              z.needTransform = true;
            }
          };
          v.prototype._destroy = function (y, z) {
            var A = this;
            m.prototype._destroy.call(this, y, function (B) {
              z(B);
              A.emit("close");
            });
          };
        }, function (j, k, l) {
          var m = l(22);
          if (typeof window == "object") {
            window.EventSourcePolyfill = m;
            if (!window.EventSource) {
              window.EventSource = m;
            }
            j.exports = window.EventSource;
          } else {
            j.exports = m;
          }
        }, function (j, k, l) {
          (function (m, q) {
            var v = l(8).parse;
            var w = l(9);
            var x = l(31);
            var y = l(11);
            var z = l(43);
            var A = ["pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "secureProtocol", "servername", "checkServerIdentity"];
            var B = [239, 187, 191];
            var C = /^(cookie|authorization)$/i;
            function D(G, H) {
              var I;
              var J = D.CONNECTING;
              var K = H && H.headers;
              var L = false;
              Object.defineProperty(this, "readyState", {
                get: function () {
                  return J;
                }
              });
              Object.defineProperty(this, "url", {
                get: function () {
                  return G;
                }
              });
              var M = this;
              function N(X) {
                if (J !== D.CLOSED) {
                  J = D.CONNECTING;
                  V("error", new E("error", {
                    message: X
                  }));
                  if (T) {
                    G = T;
                    T = null;
                    L = false;
                  }
                  setTimeout(function () {
                    if (J === D.CONNECTING && !M.connectionInProgress) {
                      M.connectionInProgress = true;
                      U();
                    }
                  }, M.reconnectInterval);
                }
              }
              M.reconnectInterval = 1000;
              M.connectionInProgress = false;
              var O = "";
              if (K && K["Last-Event-ID"]) {
                O = K["Last-Event-ID"];
                delete K["Last-Event-ID"];
              }
              var P = false;
              var Q = "";
              var R = "";
              var T = null;
              function U() {
                var X = v(G);
                var Y = X.protocol === "https:";
                X.headers = {
                  "Cache-Control": "no-cache",
                  Accept: "text/event-stream"
                };
                if (O) {
                  X.headers["Last-Event-ID"] = O;
                }
                if (K) {
                  var Z = L ? function a5(a6) {
                    var a7 = {};
                    for (var a8 in a6) {
                      if (!C.test(a8)) {
                        a7[a8] = a6[a8];
                      }
                    }
                    return a7;
                  }(K) : K;
                  for (var a0 in Z) {
                    var a1 = Z[a0];
                    if (a1) {
                      X.headers[a0] = a1;
                    }
                  }
                }
                X.rejectUnauthorized = !(H && !H.rejectUnauthorized);
                if (H && H.createConnection !== undefined) {
                  X.createConnection = H.createConnection;
                }
                if (H && H.proxy) {
                  var a2 = v(H.proxy);
                  Y = a2.protocol === "https:";
                  X.protocol = Y ? "https:" : "http:";
                  X.path = G;
                  X.headers.Host = X.host;
                  X.hostname = a2.hostname;
                  X.host = a2.host;
                  X.port = a2.port;
                }
                if (H && H.https) {
                  for (var a3 in H.https) {
                    if (A.indexOf(a3) !== -1) {
                      var a4 = H.https[a3];
                      if (a4 !== undefined) {
                        X[a3] = a4;
                      }
                    }
                  }
                }
                if (H && H.withCredentials !== undefined) {
                  X.withCredentials = H.withCredentials;
                }
                (I = (Y ? x : y).request(X, function (a6) {
                  M.connectionInProgress = false;
                  if (a6.statusCode === 500 || a6.statusCode === 502 || a6.statusCode === 503 || a6.statusCode === 504) {
                    V("error", new E("error", {
                      status: a6.statusCode,
                      message: a6.statusMessage
                    }));
                    N();
                    return;
                  }
                  if (a6.statusCode === 301 || a6.statusCode === 302 || a6.statusCode === 307) {
                    var a7;
                    var a8;
                    var a9 = a6.headers.location;
                    if (!a9) {
                      V("error", new E("error", {
                        status: a6.statusCode,
                        message: a6.statusMessage
                      }));
                      return;
                    }
                    var aa = new URL(G).origin;
                    var ab = new URL(a9).origin;
                    L = aa !== ab;
                    if (a6.statusCode === 307) {
                      T = G;
                    }
                    G = a9;
                    m.nextTick(U);
                    return;
                  }
                  if (a6.statusCode !== 200) {
                    V("error", new E("error", {
                      status: a6.statusCode,
                      message: a6.statusMessage
                    }));
                    return M.close();
                  }
                  J = D.OPEN;
                  a6.on("close", function () {
                    a6.removeAllListeners("close");
                    a6.removeAllListeners("end");
                    N();
                  });
                  a6.on("end", function () {
                    a6.removeAllListeners("close");
                    a6.removeAllListeners("end");
                    N();
                  });
                  V("open", new E("open"));
                  var ac = 0;
                  var ad = -1;
                  var ae = 0;
                  var af = 0;
                  a6.on("data", function (ag) {
                    if (a7) {
                      if (ag.length > a7.length - af) {
                        if ((ae = a7.length * 2 + ag.length) > 262144) {
                          ae = a7.length + ag.length + 262144;
                        }
                        a8 = q.alloc(ae);
                        a7.copy(a8, 0, 0, af);
                        a7 = a8;
                      }
                      ag.copy(a7, af);
                      af += ag.length;
                    } else {
                      var ah;
                      ah = a7 = ag;
                      if (B.every(function (ao, ap) {
                        return ah[ap] === ao;
                      })) {
                        a7 = a7.slice(B.length);
                      }
                      af = a7.length;
                    }
                    for (var ai = 0, aj = af; ai < aj;) {
                      if (P) {
                        if (a7[ai] === 10) {
                          ++ai;
                        }
                        P = false;
                      }
                      for (var ak, al = -1, am = ad, an = ac; al < 0 && an < aj; ++an) {
                        if ((ak = a7[an]) === 58) {
                          if (am < 0) {
                            am = an - ai;
                          }
                        } else if (ak === 13) {
                          P = true;
                          al = an - ai;
                        } else if (ak === 10) {
                          al = an - ai;
                        }
                      }
                      if (al < 0) {
                        ac = aj - ai;
                        ad = am;
                        break;
                      }
                      ac = 0;
                      ad = -1;
                      W(a7, ai, am, al);
                      ai += al + 1;
                    }
                    if (ai === aj) {
                      a7 = undefined;
                      af = 0;
                    } else if (ai > 0) {
                      af = (a7 = a7.slice(ai, af)).length;
                    }
                  });
                })).on("error", function (a6) {
                  M.connectionInProgress = false;
                  N(a6.message);
                });
                if (I.setNoDelay) {
                  I.setNoDelay(true);
                }
                I.end();
              }
              function V() {
                if (M.listeners(arguments[0]).length > 0) {
                  M.emit.apply(M, arguments);
                }
              }
              function W(X, Y, Z, a0) {
                if (a0 === 0) {
                  if (Q.length > 0) {
                    var a1 = R || "message";
                    V(a1, new F(a1, {
                      data: Q.slice(0, -1),
                      lastEventId: O,
                      origin: new URL(G).origin
                    }));
                    Q = "";
                  }
                  R = undefined;
                } else if (Z > 0) {
                  var a2 = Z < 0;
                  var a3 = 0;
                  var a4 = X.slice(Y, Y + (a2 ? a0 : Z)).toString();
                  a3 = a2 ? a0 : X[Y + Z + 1] !== 32 ? Z + 1 : Z + 2;
                  Y += a3;
                  var a5 = a0 - a3;
                  var a6 = X.slice(Y, Y + a5).toString();
                  if (a4 === "data") {
                    Q += a6 + "\n";
                  } else if (a4 === "event") {
                    R = a6;
                  } else if (a4 === "id") {
                    O = a6;
                  } else if (a4 === "retry") {
                    var a7 = parseInt(a6, 10);
                    if (!Number.isNaN(a7)) {
                      M.reconnectInterval = a7;
                    }
                  }
                }
              }
              U();
              this._close = function () {
                if (J !== D.CLOSED) {
                  J = D.CLOSED;
                  if (I.abort) {
                    I.abort();
                  }
                  if (I.xhr && I.xhr.abort) {
                    I.xhr.abort();
                  }
                }
              };
            }
            function E(G, H) {
              Object.defineProperty(this, "type", {
                writable: false,
                value: G,
                enumerable: true
              });
              if (H) {
                for (var I in H) {
                  if (H.hasOwnProperty(I)) {
                    Object.defineProperty(this, I, {
                      writable: false,
                      value: H[I],
                      enumerable: true
                    });
                  }
                }
              }
            }
            function F(G, H) {
              Object.defineProperty(this, "type", {
                writable: false,
                value: G,
                enumerable: true
              });
              for (var I in H) {
                if (H.hasOwnProperty(I)) {
                  Object.defineProperty(this, I, {
                    writable: false,
                    value: H[I],
                    enumerable: true
                  });
                }
              }
            }
            j.exports = D;
            z.inherits(D, w.EventEmitter);
            D.prototype.constructor = D;
            ["open", "error", "message"].forEach(function (G) {
              Object.defineProperty(D.prototype, "on" + G, {
                get: function H() {
                  var I = this.listeners(G)[0];
                  if (I) {
                    if (I._listener) {
                      return I._listener;
                    } else {
                      return I;
                    }
                  } else {
                    return undefined;
                  }
                },
                set: function I(J) {
                  this.removeAllListeners(G);
                  this.addEventListener(G, J);
                }
              });
            });
            Object.defineProperty(D, "CONNECTING", {
              enumerable: true,
              value: 0
            });
            Object.defineProperty(D, "OPEN", {
              enumerable: true,
              value: 1
            });
            Object.defineProperty(D, "CLOSED", {
              enumerable: true,
              value: 2
            });
            D.prototype.CONNECTING = 0;
            D.prototype.OPEN = 1;
            D.prototype.CLOSED = 2;
            D.prototype.close = function () {
              this._close();
            };
            D.prototype.addEventListener = function G(H, I) {
              if (typeof I == "function") {
                I._listener = I;
                this.on(H, I);
              }
            };
            D.prototype.dispatchEvent = function H(I) {
              if (!I.type) {
                throw Error("UNSPECIFIED_EVENT_TYPE_ERR");
              }
              this.emit(I.type, I.detail);
            };
            D.prototype.removeEventListener = function I(J, K) {
              if (typeof K == "function") {
                K._listener = undefined;
                this.removeListener(J, K);
              }
            };
          }).call(k, l(1), l(3).Buffer);
        }, function (j, k, m) {
          'use strict';

          k.byteLength = function C(D) {
            var E = z(D);
            var F = E[0];
            var G = E[1];
            return (F + G) * 3 / 4 - G;
          };
          k.toByteArray = function D(E) {
            var F;
            var G;
            var H;
            var I;
            var J;
            var K = z(E);
            var L = K[0];
            var M = K[1];
            var N = new v((I = L, J = M, (I + J) * 3 / 4 - J));
            var O = 0;
            var P = M > 0 ? L - 4 : L;
            for (G = 0; G < P; G += 4) {
              F = q[E.charCodeAt(G)] << 18 | q[E.charCodeAt(G + 1)] << 12 | q[E.charCodeAt(G + 2)] << 6 | q[E.charCodeAt(G + 3)];
              N[O++] = F >> 16 & 255;
              N[O++] = F >> 8 & 255;
              N[O++] = F & 255;
            }
            if (M === 2) {
              F = q[E.charCodeAt(G)] << 2 | q[E.charCodeAt(G + 1)] >> 4;
              N[O++] = F & 255;
            }
            if (M === 1) {
              F = q[E.charCodeAt(G)] << 10 | q[E.charCodeAt(G + 1)] << 4 | q[E.charCodeAt(G + 2)] >> 2;
              N[O++] = F >> 8 & 255;
              N[O++] = F & 255;
            }
            return N;
          };
          k.fromByteArray = function E(F) {
            for (var G, H = F.length, I = H % 3, J = [], K = 0, L = H - I; K < L; K += 16383) {
              J.push(B(F, K, K + 16383 > L ? L : K + 16383));
            }
            if (I === 1) {
              J.push(p[(G = F[H - 1]) >> 2] + p[G << 4 & 63] + "==");
            } else if (I === 2) {
              J.push(p[(G = (F[H - 2] << 8) + F[H - 1]) >> 10] + p[G >> 4 & 63] + p[G << 2 & 63] + "=");
            }
            return J.join("");
          };
          for (var p = [], q = [], v = typeof Uint8Array != "undefined" ? Uint8Array : Array, w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", x = 0, y = w.length; x < y; ++x) {
            p[x] = w[x];
            q[w.charCodeAt(x)] = x;
          }
          function z(F) {
            var G = F.length;
            if (G % 4 > 0) {
              throw Error("Invalid string. Length must be a multiple of 4");
            }
            var H = F.indexOf("=");
            if (H === -1) {
              H = G;
            }
            var I = H === G ? 0 : 4 - H % 4;
            return [H, I];
          }
          function A(F) {
            return p[F >> 18 & 63] + p[F >> 12 & 63] + p[F >> 6 & 63] + p[F & 63];
          }
          function B(F, G, H) {
            for (var I, J = [], K = G; K < H; K += 3) {
              J.push(A(I = (F[K] << 16 & 16711680) + (F[K + 1] << 8 & 65280) + (F[K + 2] & 255)));
            }
            return J.join("");
          }
          q["-".charCodeAt(0)] = 62;
          q["_".charCodeAt(0)] = 63;
        }, function (j, k) {
          k.read = function (m, p, q, v, w) {
            var x;
            var y;
            var z = w * 8 - v - 1;
            var A = (1 << z) - 1;
            var B = A >> 1;
            var C = -7;
            var D = q ? w - 1 : 0;
            var E = q ? -1 : 1;
            var F = m[p + D];
            D += E;
            x = F & (1 << -C) - 1;
            F >>= -C;
            C += z;
            for (; C > 0; C -= 8) {
              x = x * 256 + m[p + D];
              D += E;
            }
            y = x & (1 << -C) - 1;
            x >>= -C;
            C += v;
            for (; C > 0; C -= 8) {
              y = y * 256 + m[p + D];
              D += E;
            }
            if (x === 0) {
              x = 1 - B;
            } else {
              if (x === A) {
                if (y) {
                  return NaN;
                } else {
                  return (F ? -1 : 1) * Infinity;
                }
              }
              y += Math.pow(2, v);
              x -= B;
            }
            return (F ? -1 : 1) * y * Math.pow(2, x - v);
          };
          k.write = function (m, q, v, w, x, y) {
            var z;
            var A;
            var B;
            var C = y * 8 - x - 1;
            var D = (1 << C) - 1;
            var E = D >> 1;
            var F = x === 23 ? 5.960464477539062e-8 : 0;
            var G = w ? 0 : y - 1;
            var H = w ? 1 : -1;
            var I = q < 0 || q === 0 && 1 / q < 0 ? 1 : 0;
            for (isNaN(q = Math.abs(q)) || q === Infinity ? (A = isNaN(q) ? 1 : 0, z = D) : (z = Math.floor(Math.log(q) / Math.LN2), q * (B = Math.pow(2, -z)) < 1 && (z--, B *= 2), z + E >= 1 ? q += F / B : q += F * Math.pow(2, 1 - E), q * B >= 2 && (z++, B /= 2), z + E >= D ? (A = 0, z = D) : z + E >= 1 ? (A = (q * B - 1) * Math.pow(2, x), z += E) : (A = q * Math.pow(2, E - 1) * Math.pow(2, x), z = 0)); x >= 8; x -= 8) {
              m[v + G] = A & 255;
              G += H;
              A /= 256;
            }
            z = z << x | A;
            C += x;
            for (; C > 0; C -= 8) {
              m[v + G] = z & 255;
              G += H;
              z /= 256;
            }
            m[v + G - H] |= I * 128;
          };
        }, function (j, k, l) {
          (function (m, o) {
            var p;
            (function (q) {
              if (typeof k == "object" && k) {
                k.nodeType;
              }
              if (typeof m == "object" && m) {
                m.nodeType;
              }
              var z = typeof o == "object" && o;
              if (z.global === z || z.window === z || z.self === z) {
                q = z;
              }
              var A;
              var B = /^xn--/;
              var C = /[^\x20-\x7E]/;
              var D = /[\x2E\u3002\uFF0E\uFF61]/g;
              var E = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
              };
              var F = Math.floor;
              var G = String.fromCharCode;
              function H(R) {
                throw RangeError(E[R]);
              }
              function I(R, S) {
                for (var T = R.length, U = []; T--;) {
                  U[T] = S(R[T]);
                }
                return U;
              }
              function J(R, S) {
                var T = R.split("@");
                var U = "";
                if (T.length > 1) {
                  U = T[0] + "@";
                  R = T[1];
                }
                return U + I((R = R.replace(D, ".")).split("."), S).join(".");
              }
              function K(R) {
                for (var S, T, U = [], V = 0, W = R.length; V < W;) {
                  if ((S = R.charCodeAt(V++)) >= 55296 && S <= 56319 && V < W) {
                    if (((T = R.charCodeAt(V++)) & 64512) == 56320) {
                      U.push(((S & 1023) << 10) + (T & 1023) + 65536);
                    } else {
                      U.push(S);
                      V--;
                    }
                  } else {
                    U.push(S);
                  }
                }
                return U;
              }
              function L(R) {
                return I(R, function (S) {
                  var T = "";
                  if (S > 65535) {
                    S -= 65536;
                    T += G(S >>> 10 & 1023 | 55296);
                    S = S & 1023 | 56320;
                  }
                  return T += G(S);
                }).join("");
              }
              function M(R) {
                if (R - 48 < 10) {
                  return R - 22;
                } else if (R - 65 < 26) {
                  return R - 65;
                } else if (R - 97 < 26) {
                  return R - 97;
                } else {
                  return 36;
                }
              }
              function N(R, S) {
                return R + 22 + (R < 26) * 75 - ((S != 0) << 5);
              }
              function O(R, S, T) {
                var U = 0;
                R = T ? F(R / 700) : R >> 1;
                R += F(R / S);
                for (; R > 455; U += 36) {
                  R = F(R / 35);
                }
                return F(U + R * 36 / (R + 38));
              }
              function P(R) {
                var S;
                var T;
                var U;
                var V;
                var W;
                var X;
                var Y;
                var Z;
                var a0;
                var a1;
                var a2 = [];
                var a3 = R.length;
                var a4 = 0;
                var a5 = 128;
                var a6 = 72;
                if ((T = R.lastIndexOf("-")) < 0) {
                  T = 0;
                }
                U = 0;
                for (; U < T; ++U) {
                  if (R.charCodeAt(U) >= 128) {
                    H("not-basic");
                  }
                  a2.push(R.charCodeAt(U));
                }
                for (V = T > 0 ? T + 1 : 0; V < a3;) {
                  W = a4;
                  X = 1;
                  Y = 36;
                  for (; V >= a3 && H("invalid-input"), ((Z = M(R.charCodeAt(V++))) >= 36 || Z > F((2147483647 - a4) / X)) && H("overflow"), a4 += Z * X, !(Z < (a0 = Y <= a6 ? 1 : Y >= a6 + 26 ? 26 : Y - a6)); Y += 36) {
                    if (X > F(2147483647 / (a1 = 36 - a0))) {
                      H("overflow");
                    }
                    X *= a1;
                  }
                  a6 = O(a4 - W, S = a2.length + 1, W == 0);
                  if (F(a4 / S) > 2147483647 - a5) {
                    H("overflow");
                  }
                  a5 += F(a4 / S);
                  a4 %= S;
                  a2.splice(a4++, 0, a5);
                }
                return L(a2);
              }
              function Q(R) {
                var S;
                var T;
                var U;
                var V;
                var W;
                var X;
                var Y;
                var Z;
                var a0;
                var a1;
                var a2;
                var a3;
                var a4;
                var a5;
                var a6;
                var a7 = [];
                X = 0;
                a3 = (R = K(R)).length;
                S = 128;
                T = 0;
                W = 72;
                for (; X < a3; ++X) {
                  if ((a2 = R[X]) < 128) {
                    a7.push(G(a2));
                  }
                }
                U = V = a7.length;
                if (V) {
                  a7.push("-");
                }
                for (; U < a3;) {
                  Y = 2147483647;
                  X = 0;
                  for (; X < a3; ++X) {
                    if ((a2 = R[X]) >= S && a2 < Y) {
                      Y = a2;
                    }
                  }
                  if (Y - S > F((2147483647 - T) / (a4 = U + 1))) {
                    H("overflow");
                  }
                  T += (Y - S) * a4;
                  S = Y;
                  X = 0;
                  for (; X < a3; ++X) {
                    if ((a2 = R[X]) < S && ++T > 2147483647) {
                      H("overflow");
                    }
                    if (a2 == S) {
                      Z = T;
                      a0 = 36;
                      for (; !(Z < (a1 = a0 <= W ? 1 : a0 >= W + 26 ? 26 : a0 - W)); a0 += 36) {
                        a6 = Z - a1;
                        a5 = 36 - a1;
                        a7.push(G(N(a1 + a6 % a5, 0)));
                        Z = F(a6 / a5);
                      }
                      a7.push(G(N(Z, 0)));
                      W = O(T, a4, U == V);
                      T = 0;
                      ++U;
                    }
                  }
                  ++T;
                  ++S;
                }
                return a7.join("");
              }
              A = {
                version: "1.4.1",
                ucs2: {
                  decode: K,
                  encode: L
                },
                decode: P,
                encode: Q,
                toASCII: function R(S) {
                  return J(S, function (T) {
                    if (C.test(T)) {
                      return "xn--" + Q(T);
                    } else {
                      return T;
                    }
                  });
                },
                toUnicode: function S(T) {
                  return J(T, function (U) {
                    if (B.test(U)) {
                      return P(U.slice(4).toLowerCase());
                    } else {
                      return U;
                    }
                  });
                }
              };
              if ((p = function () {
                return A;
              }.call(k, l, k, m)) !== undefined) {
                m.exports = p;
              }
            })(this);
          }).call(k, l(26)(j), l(0));
        }, function (j, k) {
          j.exports = function (l) {
            if (!l.webpackPolyfill) {
              l.deprecate = function () {};
              l.paths = [];
              if (!l.children) {
                l.children = [];
              }
              Object.defineProperty(l, "loaded", {
                enumerable: true,
                get: function () {
                  return l.l;
                }
              });
              Object.defineProperty(l, "id", {
                enumerable: true,
                get: function () {
                  return l.i;
                }
              });
              l.webpackPolyfill = 1;
            }
            return l;
          };
        }, function (j, k, l) {
          'use strict';

          j.exports = {
            isString: function (m) {
              return typeof m == "string";
            },
            isObject: function (m) {
              return typeof m == "object" && m !== null;
            },
            isNull: function (m) {
              return m === null;
            },
            isNullOrUndefined: function (m) {
              return m == null;
            }
          };
        }, function (j, k, l) {
          'use strict';

          k.decode = k.parse = l(29);
          k.encode = k.stringify = l(30);
        }, function (j, k, l) {
          'use strict';

          function m(p, q) {
            return Object.prototype.hasOwnProperty.call(p, q);
          }
          j.exports = function (q, v, w, x) {
            v = v || "&";
            w = w || "=";
            var y = {};
            if (typeof q != "string" || q.length === 0) {
              return y;
            }
            var z = /\+/g;
            q = q.split(v);
            var A = 1000;
            if (x && typeof x.maxKeys == "number") {
              A = x.maxKeys;
            }
            var B = q.length;
            if (A > 0 && B > A) {
              B = A;
            }
            for (var C = 0; C < B; ++C) {
              var D;
              var E;
              var F;
              var G;
              var H = q[C].replace(z, "%20");
              var I = H.indexOf(w);
              if (I >= 0) {
                D = H.substr(0, I);
                E = H.substr(I + 1);
              } else {
                D = H;
                E = "";
              }
              F = decodeURIComponent(D);
              G = decodeURIComponent(E);
              if (m(y, F)) {
                if (o(y[F])) {
                  y[F].push(G);
                } else {
                  y[F] = [y[F], G];
                }
              } else {
                y[F] = G;
              }
            }
            return y;
          };
          var o = Array.isArray || function (p) {
            return Object.prototype.toString.call(p) === "[object Array]";
          };
        }, function (j, k, l) {
          'use strict';

          function m(v) {
            switch (typeof v) {
              case "string":
                return v;
              case "boolean":
                if (v) {
                  return "true";
                } else {
                  return "false";
                }
              case "number":
                if (isFinite(v)) {
                  return v;
                } else {
                  return "";
                }
              default:
                return "";
            }
          }
          j.exports = function (v, w, x, y) {
            w = w || "&";
            x = x || "=";
            if (v === null) {
              v = undefined;
            }
            if (typeof v == "object") {
              return q(u(v), function (z) {
                var A = encodeURIComponent(m(z)) + x;
                if (p(v[z])) {
                  return q(v[z], function (B) {
                    return A + encodeURIComponent(m(B));
                  }).join(w);
                } else {
                  return A + encodeURIComponent(m(v[z]));
                }
              }).join(w);
            } else if (y) {
              return encodeURIComponent(m(y)) + x + encodeURIComponent(m(v));
            } else {
              return "";
            }
          };
          var p = Array.isArray || function (v) {
            return Object.prototype.toString.call(v) === "[object Array]";
          };
          function q(v, w) {
            if (v.map) {
              return v.map(w);
            }
            for (var x = [], y = 0; y < v.length; y++) {
              x.push(w(v[y], y));
            }
            return x;
          }
          var u = Object.keys || function (v) {
            var w = [];
            for (var x in v) {
              if (Object.prototype.hasOwnProperty.call(v, x)) {
                w.push(x);
              }
            }
            return w;
          };
        }, function (j, k, l) {
          var m = l(11);
          var p = l(8);
          var q = j.exports;
          for (var u in m) {
            if (m.hasOwnProperty(u)) {
              q[u] = m[u];
            }
          }
          function v(w) {
            if (typeof w == "string") {
              w = p.parse(w);
            }
            if (!w.protocol) {
              w.protocol = "https:";
            }
            if (w.protocol !== "https:") {
              throw Error("Protocol \"" + w.protocol + "\" not supported. Expected \"https:\"");
            }
            return w;
          }
          q.request = function (w, x) {
            w = v(w);
            return m.request.call(this, w, x);
          };
          q.get = function (w, x) {
            w = v(w);
            return m.get.call(this, w, x);
          };
        }, function (j, k, l) {
          (function (m, p, q) {
            var v = l(12);
            var w = l(2);
            var x = l(13);
            var y = l(14);
            var z = l(40);
            var A = x.IncomingMessage;
            var B = x.readyStates;
            var C = j.exports = function (E) {
              var F;
              var G = this;
              y.Writable.call(G);
              G._opts = E;
              G._body = [];
              G._headers = {};
              if (E.auth) {
                G.setHeader("Authorization", "Basic " + new m(E.auth).toString("base64"));
              }
              Object.keys(E.headers).forEach(function (I) {
                G.setHeader(I, E.headers[I]);
              });
              var H = true;
              if (E.mode === "disable-fetch" || "requestTimeout" in E && !v.abortController) {
                H = false;
                F = true;
              } else if (E.mode === "prefer-streaming") {
                F = false;
              } else if (E.mode === "allow-wrong-content-type") {
                F = !v.overrideMimeType;
              } else if (E.mode && E.mode !== "default" && E.mode !== "prefer-fast") {
                throw Error("Invalid value for opts.mode");
              } else {
                F = true;
              }
              G._mode = function I(J, K) {
                if (v.fetch && K) {
                  return "fetch";
                }
                if (v.mozchunkedarraybuffer) {
                  return "moz-chunked-arraybuffer";
                }
                if (v.msstream) {
                  return "ms-stream";
                }
                if (v.arraybuffer && J) {
                  return "arraybuffer";
                }
                if (v.vbArray && J) {
                  return "text:vbarray";
                } else {
                  return "text";
                }
              }(F, H);
              G._fetchTimer = null;
              G.on("finish", function () {
                G._onFinish();
              });
            };
            w(C, y.Writable);
            C.prototype.setHeader = function (E, F) {
              var G = this;
              var H = E.toLowerCase();
              if (D.indexOf(H) === -1) {
                G._headers[H] = {
                  name: E,
                  value: F
                };
              }
            };
            C.prototype.getHeader = function (E) {
              var F = this._headers[E.toLowerCase()];
              if (F) {
                return F.value;
              } else {
                return null;
              }
            };
            C.prototype.removeHeader = function (E) {
              delete this._headers[E.toLowerCase()];
            };
            C.prototype._onFinish = function () {
              var E = this;
              if (!E._destroyed) {
                var F = E._opts;
                var G = E._headers;
                var H = null;
                if (F.method !== "GET" && F.method !== "HEAD") {
                  H = v.arraybuffer ? z(m.concat(E._body)) : v.blobConstructor ? new p.Blob(E._body.map(function (M) {
                    return z(M);
                  }), {
                    type: (G["content-type"] || {}).value || ""
                  }) : m.concat(E._body).toString();
                }
                var I = [];
                Object.keys(G).forEach(function (M) {
                  var N = G[M].name;
                  var O = G[M].value;
                  if (Array.isArray(O)) {
                    O.forEach(function (P) {
                      I.push([N, P]);
                    });
                  } else {
                    I.push([N, O]);
                  }
                });
                if (E._mode === "fetch") {
                  var J = null;
                  if (v.abortController) {
                    var K = new AbortController();
                    J = K.signal;
                    E._fetchAbortController = K;
                    if ("requestTimeout" in F && F.requestTimeout !== 0) {
                      E._fetchTimer = p.setTimeout(function () {
                        E.emit("requestTimeout");
                        if (E._fetchAbortController) {
                          E._fetchAbortController.abort();
                        }
                      }, F.requestTimeout);
                    }
                  }
                  p.fetch(E._opts.url, {
                    method: E._opts.method,
                    headers: I,
                    body: H || undefined,
                    mode: "cors",
                    credentials: F.withCredentials ? "include" : "same-origin",
                    signal: J
                  }).then(function (M) {
                    E._fetchResponse = M;
                    E._connect();
                  }, function (M) {
                    p.clearTimeout(E._fetchTimer);
                    if (!E._destroyed) {
                      E.emit("error", M);
                    }
                  });
                } else {
                  var L = E._xhr = new p.XMLHttpRequest();
                  try {
                    L.open(E._opts.method, E._opts.url, true);
                  } catch (M) {
                    q.nextTick(function () {
                      E.emit("error", M);
                    });
                    return;
                  }
                  if ("responseType" in L) {
                    L.responseType = E._mode.split(":")[0];
                  }
                  if ("withCredentials" in L) {
                    L.withCredentials = !!F.withCredentials;
                  }
                  if (E._mode === "text" && "overrideMimeType" in L) {
                    L.overrideMimeType("text/plain; charset=x-user-defined");
                  }
                  if ("requestTimeout" in F) {
                    L.timeout = F.requestTimeout;
                    L.ontimeout = function () {
                      E.emit("requestTimeout");
                    };
                  }
                  I.forEach(function (N) {
                    L.setRequestHeader(N[0], N[1]);
                  });
                  E._response = null;
                  L.onreadystatechange = function () {
                    switch (L.readyState) {
                      case B.LOADING:
                      case B.DONE:
                        E._onXHRProgress();
                    }
                  };
                  if (E._mode === "moz-chunked-arraybuffer") {
                    L.onprogress = function () {
                      E._onXHRProgress();
                    };
                  }
                  L.onerror = function () {
                    if (!E._destroyed) {
                      E.emit("error", Error("XHR error"));
                    }
                  };
                  try {
                    L.send(H);
                  } catch (N) {
                    q.nextTick(function () {
                      E.emit("error", N);
                    });
                    return;
                  }
                }
              }
            };
            C.prototype._onXHRProgress = function () {
              if (function E(F) {
                try {
                  var G = F.status;
                  return G !== null && G !== 0;
                } catch (H) {
                  return false;
                }
              }(this._xhr) && !this._destroyed) {
                if (!this._response) {
                  this._connect();
                }
                this._response._onXHRProgress();
              }
            };
            C.prototype._connect = function () {
              var E = this;
              if (!E._destroyed) {
                E._response = new A(E._xhr, E._fetchResponse, E._mode, E._fetchTimer);
                E._response.on("error", function (F) {
                  E.emit("error", F);
                });
                E.emit("response", E._response);
              }
            };
            C.prototype._write = function (E, F, G) {
              this._body.push(E);
              G();
            };
            C.prototype.abort = C.prototype.destroy = function () {
              var E = this;
              E._destroyed = true;
              p.clearTimeout(E._fetchTimer);
              if (E._response) {
                E._response._destroyed = true;
              }
              if (E._xhr) {
                E._xhr.abort();
              } else if (E._fetchAbortController) {
                E._fetchAbortController.abort();
              }
            };
            C.prototype.end = function (E, F, G) {
              if (typeof E == "function") {
                G = E;
                E = undefined;
              }
              y.Writable.prototype.end.call(this, E, F, G);
            };
            C.prototype.flushHeaders = function () {};
            C.prototype.setTimeout = function () {};
            C.prototype.setNoDelay = function () {};
            C.prototype.setSocketKeepAlive = function () {};
            var D = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"];
          }).call(k, l(3).Buffer, l(0), l(1));
        }, function (j, k) {}, function (j, k, l) {
          'use strict';

          var m = l(7).Buffer;
          var p = l(35);
          function q(s, u, v) {
            s.copy(u, v);
          }
          j.exports = function () {
            function s() {
              (function u(v, w) {
                if (!(v instanceof w)) {
                  throw TypeError("Cannot call a class as a function");
                }
              })(this, s);
              this.head = null;
              this.tail = null;
              this.length = 0;
            }
            s.prototype.push = function u(v) {
              var w = {
                data: v,
                next: null
              };
              if (this.length > 0) {
                this.tail.next = w;
              } else {
                this.head = w;
              }
              this.tail = w;
              ++this.length;
            };
            s.prototype.unshift = function v(w) {
              var x = {
                data: w,
                next: this.head
              };
              if (this.length === 0) {
                this.tail = x;
              }
              this.head = x;
              ++this.length;
            };
            s.prototype.shift = function w() {
              if (this.length !== 0) {
                var x = this.head.data;
                if (this.length === 1) {
                  this.head = this.tail = null;
                } else {
                  this.head = this.head.next;
                }
                --this.length;
                return x;
              }
            };
            s.prototype.clear = function x() {
              this.head = this.tail = null;
              this.length = 0;
            };
            s.prototype.join = function y(z) {
              if (this.length === 0) {
                return "";
              }
              for (var A = this.head, B = "" + A.data; A = A.next;) {
                B += z + A.data;
              }
              return B;
            };
            s.prototype.concat = function z(A) {
              if (this.length === 0) {
                return m.alloc(0);
              }
              if (this.length === 1) {
                return this.head.data;
              }
              for (var B = m.allocUnsafe(A >>> 0), C = this.head, D = 0; C;) {
                q(C.data, B, D);
                D += C.data.length;
                C = C.next;
              }
              return B;
            };
            return s;
          }();
          if (p && p.inspect && p.inspect.custom) {
            j.exports.prototype[p.inspect.custom] = function () {
              var s = p.inspect({
                length: this.length
              });
              return this.constructor.name + " " + s;
            };
          }
        }, function (j, k) {}, function (j, k, l) {
          (function (m) {
            var p = m !== undefined && m || typeof self != "undefined" && self || window;
            var q = Function.prototype.apply;
            function s(u, v) {
              this._id = u;
              this._clearFn = v;
            }
            k.setTimeout = function () {
              return new s(q.call(setTimeout, p, arguments), clearTimeout);
            };
            k.setInterval = function () {
              return new s(q.call(setInterval, p, arguments), clearInterval);
            };
            k.clearTimeout = k.clearInterval = function (u) {
              if (u) {
                u.close();
              }
            };
            s.prototype.unref = s.prototype.ref = function () {};
            s.prototype.close = function () {
              this._clearFn.call(p, this._id);
            };
            k.enroll = function (u, v) {
              clearTimeout(u._idleTimeoutId);
              u._idleTimeout = v;
            };
            k.unenroll = function (u) {
              clearTimeout(u._idleTimeoutId);
              u._idleTimeout = -1;
            };
            k._unrefActive = k.active = function (u) {
              clearTimeout(u._idleTimeoutId);
              var v = u._idleTimeout;
              if (v >= 0) {
                u._idleTimeoutId = setTimeout(function w() {
                  if (u._onTimeout) {
                    u._onTimeout();
                  }
                }, v);
              }
            };
            l(37);
            k.setImmediate = typeof self != "undefined" && self.setImmediate || m !== undefined && m.setImmediate || this && this.setImmediate;
            k.clearImmediate = typeof self != "undefined" && self.clearImmediate || m !== undefined && m.clearImmediate || this && this.clearImmediate;
          }).call(k, l(0));
        }, function (j, k, l) {
          (function (m, n) {
            (function (q, v) {
              'use strict';

              if (!q.setImmediate) {
                var w;
                var x;
                var y;
                var z;
                var A;
                var B = 1;
                var C = {};
                var D = false;
                var E = q.document;
                var F = Object.getPrototypeOf && Object.getPrototypeOf(q);
                F = F && F.setTimeout ? F : q;
                if ({}.toString.call(q.process) === "[object process]") {
                  A = function (I) {
                    n.nextTick(function () {
                      H(I);
                    });
                  };
                } else if (function I() {
                  if (q.postMessage && !q.importScripts) {
                    var J = true;
                    var K = q.onmessage;
                    q.onmessage = function () {
                      J = false;
                    };
                    q.postMessage("", "*");
                    q.onmessage = K;
                    return J;
                  }
                }()) {
                  w = "setImmediate$" + Math.random() + "$";
                  x = function (J) {
                    if (J.source === q && typeof J.data == "string" && J.data.indexOf(w) === 0) {
                      H(+J.data.slice(w.length));
                    }
                  };
                  if (q.addEventListener) {
                    q.addEventListener("message", x, false);
                  } else {
                    q.attachEvent("onmessage", x);
                  }
                  A = function (J) {
                    q.postMessage(w + J, "*");
                  };
                } else if (q.MessageChannel) {
                  (y = new MessageChannel()).port1.onmessage = function (J) {
                    H(J.data);
                  };
                  A = function (J) {
                    y.port2.postMessage(J);
                  };
                } else if (E && "onreadystatechange" in E.createElement("script")) {
                  z = E.documentElement;
                  A = function (J) {
                    var K = E.createElement("script");
                    K.onreadystatechange = function () {
                      H(J);
                      K.onreadystatechange = null;
                      z.removeChild(K);
                      K = null;
                    };
                    z.appendChild(K);
                  };
                } else {
                  A = function (J) {
                    setTimeout(H, 0, J);
                  };
                }
                F.setImmediate = function J(K) {
                  if (typeof K != "function") {
                    K = Function("" + K);
                  }
                  for (var L = Array(arguments.length - 1), M = 0; M < L.length; M++) {
                    L[M] = arguments[M + 1];
                  }
                  var N = {
                    callback: K,
                    args: L
                  };
                  C[B] = N;
                  A(B);
                  return B++;
                };
                F.clearImmediate = G;
              }
              function G(K) {
                delete C[K];
              }
              function H(K) {
                if (D) {
                  setTimeout(H, 0, K);
                } else {
                  var L = C[K];
                  if (L) {
                    D = true;
                    try {
                      (function M(N) {
                        var O = N.callback;
                        var P = N.args;
                        switch (P.length) {
                          case 0:
                            O();
                            break;
                          case 1:
                            O(P[0]);
                            break;
                          case 2:
                            O(P[0], P[1]);
                            break;
                          case 3:
                            O(P[0], P[1], P[2]);
                            break;
                          default:
                            O.apply(undefined, P);
                        }
                      })(L);
                    } finally {
                      G(K);
                      D = false;
                    }
                  }
                }
              }
            })(typeof self == "undefined" ? m === undefined ? this : m : self);
          }).call(k, l(0), l(1));
        }, function (j, k, l) {
          (function (m) {
            j.exports = function o(p, q) {
              if (n("noDeprecation")) {
                return p;
              }
              var s = false;
              return function u() {
                if (!s) {
                  if (n("throwDeprecation")) {
                    throw Error(q);
                  }
                  if (n("traceDeprecation")) {
                    console.trace(q);
                  } else {
                    console.warn(q);
                  }
                  s = true;
                }
                return p.apply(this, arguments);
              };
            };
            function n(p) {
              try {
                if (!m.localStorage) {
                  return false;
                }
              } catch (s) {
                return false;
              }
              var q = m.localStorage[p];
              return q != null && String(q).toLowerCase() === "true";
            }
          }).call(k, l(0));
        }, function (j, k, l) {
          'use strict';

          j.exports = q;
          var m = l(20);
          var p = Object.create(l(5));
          function q(s) {
            if (!(this instanceof q)) {
              return new q(s);
            }
            m.call(this, s);
          }
          p.inherits = l(2);
          p.inherits(q, m);
          q.prototype._transform = function (s, u, v) {
            v(null, s);
          };
        }, function (j, k, l) {
          var m = l(3).Buffer;
          j.exports = function (o) {
            if (o instanceof Uint8Array) {
              if (o.byteOffset === 0 && o.byteLength === o.buffer.byteLength) {
                return o.buffer;
              }
              if (typeof o.buffer.slice == "function") {
                return o.buffer.slice(o.byteOffset, o.byteOffset + o.byteLength);
              }
            }
            if (m.isBuffer(o)) {
              for (var p = new Uint8Array(o.length), q = o.length, s = 0; s < q; s++) {
                p[s] = o[s];
              }
              return p.buffer;
            }
            throw Error("Argument must be a Buffer");
          };
        }, function (j, k) {
          j.exports = function m() {
            for (var p = {}, q = 0; q < arguments.length; q++) {
              var s = arguments[q];
              for (var u in s) {
                if (l.call(s, u)) {
                  p[u] = s[u];
                }
              }
            }
            return p;
          };
          var l = Object.prototype.hasOwnProperty;
        }, function (j, k) {
          j.exports = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            208: "Already Reported",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            307: "Temporary Redirect",
            308: "Permanent Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Payload Too Large",
            414: "URI Too Long",
            415: "Unsupported Media Type",
            416: "Range Not Satisfiable",
            417: "Expectation Failed",
            418: "I'm a teapot",
            421: "Misdirected Request",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Unordered Collection",
            426: "Upgrade Required",
            428: "Precondition Required",
            429: "Too Many Requests",
            431: "Request Header Fields Too Large",
            451: "Unavailable For Legal Reasons",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            508: "Loop Detected",
            509: "Bandwidth Limit Exceeded",
            510: "Not Extended",
            511: "Network Authentication Required"
          };
        }, function (j, k, l) {
          (function (q) {
            var z;
            var A = Object.getOwnPropertyDescriptors || function a5(a6) {
              for (var a7 = Object.keys(a6), a8 = {}, a9 = 0; a9 < a7.length; a9++) {
                a8[a7[a9]] = Object.getOwnPropertyDescriptor(a6, a7[a9]);
              }
              return a8;
            };
            var B = /%[sdj%]/g;
            k.format = function (a6) {
              if (!P(a6)) {
                for (var a7 = [], a8 = 0; a8 < arguments.length; a8++) {
                  a7.push(F(arguments[a8]));
                }
                return a7.join(" ");
              }
              for (var a8 = 1, a9 = arguments, aa = a9.length, ab = String(a6).replace(B, function (ad) {
                  if (ad === "%%") {
                    return "%";
                  }
                  if (a8 >= aa) {
                    return ad;
                  }
                  switch (ad) {
                    case "%s":
                      return String(a9[a8++]);
                    case "%d":
                      return Number(a9[a8++]);
                    case "%j":
                      try {
                        return JSON.stringify(a9[a8++]);
                      } catch (ae) {
                        return "[Circular]";
                      }
                    default:
                      return ad;
                  }
                }), ac = a9[a8]; a8 < aa; ac = a9[++a8]) {
                if (N(ac) || !V(ac)) {
                  ab += " " + ac;
                } else {
                  ab += " " + F(ac);
                }
              }
              return ab;
            };
            k.deprecate = function (a6, a7) {
              if (q !== undefined && q.noDeprecation === true) {
                return a6;
              }
              if (q === undefined) {
                return function () {
                  return k.deprecate(a6, a7).apply(this, arguments);
                };
              }
              var a8 = false;
              return function a9() {
                if (!a8) {
                  if (q.throwDeprecation) {
                    throw Error(a7);
                  }
                  if (q.traceDeprecation) {
                    console.trace(a7);
                  } else {
                    console.error(a7);
                  }
                  a8 = true;
                }
                return a6.apply(this, arguments);
              };
            };
            var D = {};
            function F(a6, a7) {
              var a8 = {
                seen: [],
                stylize: H
              };
              if (arguments.length >= 3) {
                a8.depth = arguments[2];
              }
              if (arguments.length >= 4) {
                a8.colors = arguments[3];
              }
              if (M(a7)) {
                a8.showHidden = a7;
              } else if (a7) {
                k._extend(a8, a7);
              }
              if (Q(a8.showHidden)) {
                a8.showHidden = false;
              }
              if (Q(a8.depth)) {
                a8.depth = 2;
              }
              if (Q(a8.colors)) {
                a8.colors = false;
              }
              if (Q(a8.customInspect)) {
                a8.customInspect = true;
              }
              if (a8.colors) {
                a8.stylize = G;
              }
              return I(a8, a6, a8.depth);
            }
            function G(a6, a7) {
              var a8 = F.styles[a7];
              if (a8) {
                return "[" + F.colors[a8][0] + "m" + a6 + "[" + F.colors[a8][1] + "m";
              } else {
                return a6;
              }
            }
            function H(a6, a7) {
              return a6;
            }
            function I(a6, a7, a8) {
              if (a6.customInspect && a7 && Y(a7.inspect) && a7.inspect !== k.inspect && !(a7.constructor && a7.constructor.prototype === a7)) {
                var a9;
                var aa;
                var ab;
                var ac;
                var ad;
                var ae = a7.inspect(a8, a6);
                if (!P(ae)) {
                  ae = I(a6, ae, a8);
                }
                return ae;
              }
              var af = function ao(ap, aq) {
                if (Q(aq)) {
                  return ap.stylize("undefined", "undefined");
                }
                if (P(aq)) {
                  var ar = "'" + JSON.stringify(aq).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
                  return ap.stylize(ar, "string");
                }
                if (O(aq)) {
                  return ap.stylize("" + aq, "number");
                } else if (M(aq)) {
                  return ap.stylize("" + aq, "boolean");
                } else if (N(aq)) {
                  return ap.stylize("null", "null");
                } else {
                  return undefined;
                }
              }(a6, a7);
              if (af) {
                return af;
              }
              var ag;
              var ah;
              var ai = Object.keys(a7);
              ag = ai;
              ah = {};
              ag.forEach(function (ap, aq) {
                ah[ap] = true;
              });
              var aj = ah;
              if (a6.showHidden) {
                ai = Object.getOwnPropertyNames(a7);
              }
              if (X(a7) && (ai.indexOf("message") >= 0 || ai.indexOf("description") >= 0)) {
                return J(a7);
              }
              if (ai.length === 0) {
                if (Y(a7)) {
                  var ak = a7.name ? ": " + a7.name : "";
                  return a6.stylize("[Function" + ak + "]", "special");
                }
                if (U(a7)) {
                  return a6.stylize(RegExp.prototype.toString.call(a7), "regexp");
                }
                if (W(a7)) {
                  return a6.stylize(Date.prototype.toString.call(a7), "date");
                }
                if (X(a7)) {
                  return J(a7);
                }
              }
              var al = "";
              var am = false;
              var an = ["{", "}"];
              if (L(a7)) {
                am = true;
                an = ["[", "]"];
              }
              if (Y(a7)) {
                al = " [Function" + (a7.name ? ": " + a7.name : "") + "]";
              }
              if (U(a7)) {
                al = " " + RegExp.prototype.toString.call(a7);
              }
              if (W(a7)) {
                al = " " + Date.prototype.toUTCString.call(a7);
              }
              if (X(a7)) {
                al = " " + J(a7);
              }
              if (ai.length === 0 && (!am || a7.length == 0)) {
                return an[0] + al + an[1];
              }
              if (a8 < 0) {
                if (U(a7)) {
                  return a6.stylize(RegExp.prototype.toString.call(a7), "regexp");
                } else {
                  return a6.stylize("[Object]", "special");
                }
              }
              a6.seen.push(a7);
              ad = am ? function ap(aq, ar, as, at, au) {
                for (var av = [], aw = 0, ax = ar.length; aw < ax; ++aw) {
                  if (a2(ar, String(aw))) {
                    av.push(K(aq, ar, as, at, String(aw), true));
                  } else {
                    av.push("");
                  }
                }
                au.forEach(function (ay) {
                  if (!ay.match(/^\d+$/)) {
                    av.push(K(aq, ar, as, at, ay, true));
                  }
                });
                return av;
              }(a6, a7, a8, aj, ai) : ai.map(function (aq) {
                return K(a6, a7, a8, aj, aq, am);
              });
              a6.seen.pop();
              a9 = ad;
              aa = al;
              ab = an;
              ac = 0;
              if (a9.reduce(function (aq, ar) {
                ac++;
                if (ar.indexOf("\n") >= 0) {
                  ac++;
                }
                return aq + ar.replace(/\u001b\[\d\d?m/g, "").length + 1;
              }, 0) > 60) {
                return ab[0] + (aa === "" ? "" : aa + "\n ") + " " + a9.join(",\n  ") + " " + ab[1];
              } else {
                return ab[0] + aa + " " + a9.join(", ") + " " + ab[1];
              }
            }
            function J(a6) {
              return "[" + Error.prototype.toString.call(a6) + "]";
            }
            function K(a6, a7, a8, a9, aa, ab) {
              var ac;
              var ad;
              var ae;
              if ((ae = Object.getOwnPropertyDescriptor(a7, aa) || {
                value: a7[aa]
              }).get) {
                ad = ae.set ? a6.stylize("[Getter/Setter]", "special") : a6.stylize("[Getter]", "special");
              } else if (ae.set) {
                ad = a6.stylize("[Setter]", "special");
              }
              if (!a2(a9, aa)) {
                ac = "[" + aa + "]";
              }
              if (!ad) {
                if (a6.seen.indexOf(ae.value) < 0) {
                  if ((ad = N(a8) ? I(a6, ae.value, null) : I(a6, ae.value, a8 - 1)).indexOf("\n") > -1) {
                    ad = ab ? ad.split("\n").map(function (af) {
                      return "  " + af;
                    }).join("\n").substr(2) : "\n" + ad.split("\n").map(function (af) {
                      return "   " + af;
                    }).join("\n");
                  }
                } else {
                  ad = a6.stylize("[Circular]", "special");
                }
              }
              if (Q(ac)) {
                if (ab && aa.match(/^\d+$/)) {
                  return ad;
                }
                if ((ac = JSON.stringify("" + aa)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                  ac = ac.substr(1, ac.length - 2);
                  ac = a6.stylize(ac, "name");
                } else {
                  ac = ac.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'");
                  ac = a6.stylize(ac, "string");
                }
              }
              return ac + ": " + ad;
            }
            function L(a6) {
              return Array.isArray(a6);
            }
            function M(a6) {
              return typeof a6 == "boolean";
            }
            function N(a6) {
              return a6 === null;
            }
            function O(a6) {
              return typeof a6 == "number";
            }
            function P(a6) {
              return typeof a6 == "string";
            }
            function Q(a6) {
              return a6 === undefined;
            }
            function U(a6) {
              return V(a6) && Z(a6) === "[object RegExp]";
            }
            function V(a6) {
              return typeof a6 == "object" && a6 !== null;
            }
            function W(a6) {
              return V(a6) && Z(a6) === "[object Date]";
            }
            function X(a6) {
              return V(a6) && (Z(a6) === "[object Error]" || a6 instanceof Error);
            }
            function Y(a6) {
              return typeof a6 == "function";
            }
            function Z(a6) {
              return Object.prototype.toString.call(a6);
            }
            function a0(a6) {
              if (a6 < 10) {
                return "0" + a6.toString(10);
              } else {
                return a6.toString(10);
              }
            }
            k.debuglog = function (a6) {
              if (Q(z)) {
                z = q.env.NODE_DEBUG || "";
              }
              if (!D[a6 = a6.toUpperCase()]) {
                if (RegExp("\\b" + a6 + "\\b", "i").test(z)) {
                  var a7 = q.pid;
                  D[a6] = function () {
                    var a8 = k.format.apply(k, arguments);
                    console.error("%s %d: %s", a6, a7, a8);
                  };
                } else {
                  D[a6] = function () {};
                }
              }
              return D[a6];
            };
            k.inspect = F;
            F.colors = {
              bold: [1, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              white: [37, 39],
              grey: [90, 39],
              black: [30, 39],
              blue: [34, 39],
              cyan: [36, 39],
              green: [32, 39],
              magenta: [35, 39],
              red: [31, 39],
              yellow: [33, 39]
            };
            F.styles = {
              special: "cyan",
              number: "yellow",
              boolean: "yellow",
              undefined: "grey",
              null: "bold",
              string: "green",
              date: "magenta",
              regexp: "red"
            };
            k.isArray = L;
            k.isBoolean = M;
            k.isNull = N;
            k.isNullOrUndefined = function a6(a7) {
              return a7 == null;
            };
            k.isNumber = O;
            k.isString = P;
            k.isSymbol = function a7(a8) {
              return typeof a8 == "symbol";
            };
            k.isUndefined = Q;
            k.isRegExp = U;
            k.isObject = V;
            k.isDate = W;
            k.isError = X;
            k.isFunction = Y;
            k.isPrimitive = function a8(a9) {
              return a9 === null || typeof a9 == "boolean" || typeof a9 == "number" || typeof a9 == "string" || typeof a9 == "symbol" || a9 === undefined;
            };
            k.isBuffer = l(44);
            var a1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            function a2(a9, aa) {
              return Object.prototype.hasOwnProperty.call(a9, aa);
            }
            k.log = function () {
              var a9;
              var aa;
              (() => {})("%s - %s", (aa = [a0((a9 = new Date()).getHours()), a0(a9.getMinutes()), a0(a9.getSeconds())].join(":"), [a9.getDate(), a1[a9.getMonth()], aa].join(" ")), k.format.apply(k, arguments));
            };
            k.inherits = l(2);
            k._extend = function (a9, aa) {
              if (!aa || !V(aa)) {
                return a9;
              }
              for (var ab = Object.keys(aa), ac = ab.length; ac--;) {
                a9[ab[ac]] = aa[ab[ac]];
              }
              return a9;
            };
            var a3 = typeof Symbol != "undefined" ? Symbol("util.promisify.custom") : undefined;
            function a4(a9, aa) {
              if (!a9) {
                var ab = Error("Promise was rejected with a falsy value");
                ab.reason = a9;
                a9 = ab;
              }
              return aa(a9);
            }
            k.promisify = function a9(aa) {
              if (typeof aa != "function") {
                throw TypeError("The \"original\" argument must be of type Function");
              }
              if (a3 && aa[a3]) {
                var ab = aa[a3];
                if (typeof ab != "function") {
                  throw TypeError("The \"util.promisify.custom\" argument must be of type Function");
                }
                Object.defineProperty(ab, a3, {
                  value: ab,
                  enumerable: false,
                  writable: false,
                  configurable: true
                });
                return ab;
              }
              function ab() {
                for (var ac, ad, ae = new Promise(function (ah, ai) {
                    ac = ah;
                    ad = ai;
                  }), af = [], ag = 0; ag < arguments.length; ag++) {
                  af.push(arguments[ag]);
                }
                af.push(function (ah, ai) {
                  if (ah) {
                    ad(ah);
                  } else {
                    ac(ai);
                  }
                });
                try {
                  aa.apply(this, af);
                } catch (ah) {
                  ad(ah);
                }
                return ae;
              }
              Object.setPrototypeOf(ab, Object.getPrototypeOf(aa));
              if (a3) {
                Object.defineProperty(ab, a3, {
                  value: ab,
                  enumerable: false,
                  writable: false,
                  configurable: true
                });
              }
              return Object.defineProperties(ab, A(aa));
            };
            k.promisify.custom = a3;
            k.callbackify = function aa(ab) {
              if (typeof ab != "function") {
                throw TypeError("The \"original\" argument must be of type Function");
              }
              function ac() {
                for (var ad = [], ae = 0; ae < arguments.length; ae++) {
                  ad.push(arguments[ae]);
                }
                var af = ad.pop();
                if (typeof af != "function") {
                  throw TypeError("The last argument must be of type Function");
                }
                var ag = this;
                function ah() {
                  return af.apply(ag, arguments);
                }
                ab.apply(this, ad).then(function (ai) {
                  q.nextTick(ah, null, ai);
                }, function (ai) {
                  q.nextTick(a4, ai, ah);
                });
              }
              Object.setPrototypeOf(ac, Object.getPrototypeOf(ab));
              Object.defineProperties(ac, A(ab));
              return ac;
            };
          }).call(k, l(1));
        }, function (j, k) {
          j.exports = function l(m) {
            return m && typeof m == "object" && typeof m.copy == "function" && typeof m.fill == "function" && typeof m.readUInt8 == "function";
          };
        }]);
        var i = function (j) {
          'use strict';

          return class {
            events;
            baseUrl;
            baseMercure;
            listener;
            token;
            id;
            address;
            constructor() {
              this.baseUrl = "https://api.mail.tm";
              this.baseMercure = "https://mercure.mail.tm/.well-known/mercure";
              this.listener = null;
              this.events = {};
              this.token = "";
              this.id = "";
              this.address = "";
            }
            register(k, l) {
              const m = {
                address: k,
                password: l
              };
              return this._send("/accounts", "POST", m);
            }
            async login(k, l) {
              const m = {
                address: k,
                password: l
              };
              const o = await this._send("/token", "POST", m);
              if (o.status) {
                this.token = o.data.token;
                this.id = o.data.id;
                this.address = k;
              }
              return o;
            }
            async loginWithToken(k) {
              this.token = k;
              const l = await this.me();
              if (l.status) {
                this.id = l.data.id;
                this.address = l.data.address;
                return l;
              } else {
                return l;
              }
            }
            me() {
              return this._send("/me");
            }
            getAccount(k) {
              return this._send("/accounts/" + k);
            }
            deleteAccount(k) {
              this.off();
              return this._send("/accounts/" + k, "DELETE");
            }
            deleteMe() {
              return this.deleteAccount(this.id);
            }
            getDomains() {
              return this._send("/domains?page=1");
            }
            getDomain(k) {
              return this._send("/domains/" + k);
            }
            getMessages(k = 1) {
              return this._send("/messages?page=" + k);
            }
            getMessage(k) {
              return this._send("/messages/" + k);
            }
            deleteMessage(k) {
              return this._send("/messages/" + k, "DELETE");
            }
            setMessageSeen(k, l = !0) {
              return this._send("/messages/" + k, "PATCH", {
                seen: l
              });
            }
            getSource(k) {
              return this._send("/sources/" + k);
            }
            on(k, l) {
              if (j) {
                if (["seen", "delete", "arrive", "error", "open"].includes(k)) {
                  if (!this.listener) {
                    this.listener = new j(this.baseMercure + "?topic=/accounts/" + this.id, {
                      headers: {
                        Authorization: "Bearer " + this.token
                      }
                    });
                    this.events = {
                      arrive: () => {},
                      seen: () => {},
                      delete: () => {},
                      error: () => {}
                    };
                    const m = p => {
                      let q = JSON.parse(p.data);
                      if (q["@type"] === "Account") {
                        return;
                      }
                      let u = "arrive";
                      if (q.isDeleted) {
                        u = "delete";
                      } else if (q.seen) {
                        u = "seen";
                      }
                      this.events[u](q);
                    };
                    const o = p => {
                      this.events.error(p);
                    };
                    this.listener.onmessage = m;
                    this.listener.onerror = o;
                    if (k === "open") {
                      this.listener.onopen = l;
                    }
                  }
                  if (k !== "open") {
                    this.events[k] = l;
                  }
                } else {
                  console.error("Unknown event name:", k);
                }
              } else {
                console.error("EventSourcePolyfill is required for this feature. https://github.com/cemalgnlts/Mailjs/#quickstart");
              }
            }
            off() {
              if (this.listener) {
                this.listener.close();
              }
              this.events = {};
              this.listener = null;
            }
            async createOneAccount() {
              let k = await this.getDomains();
              if (!k.status) {
                return k;
              }
              k = k.data[0].domain;
              const l = this._makeHash(5) + "@" + k;
              const m = this._makeHash(8);
              let o = await this.register(l, m);
              if (!o.status) {
                return o;
              }
              o = o.data;
              let p = await this.login(l, m);
              if (p.status) {
                p = p.data;
                return {
                  status: true,
                  message: "ok",
                  data: {
                    username: l,
                    password: m
                  }
                };
              } else {
                return p;
              }
            }
            _makeHash(k) {
              const l = "abcdefghijklmnopqrstuvwxyz0123456789";
              return Array.from({
                length: k
              }, () => l.charAt(Math.floor(Math.random() * 36))).join("");
            }
            async _send(k, l = "GET", m) {
              const o = {
                method: l,
                headers: {
                  accept: "application/json",
                  authorization: "Bearer " + this.token
                }
              };
              if (l === "POST" || l === "PATCH") {
                const v = l === "PATCH" ? "merge-patch+json" : "json";
                o.headers["content-type"] = "application/" + v;
                o.body = JSON.stringify(m);
              }
              const p = await fetch(this.baseUrl + k, o);
              let q;
              const u = p.headers.get("content-type");
              q = u?.startsWith("application/json") ? await p.json() : await p.text();
              return {
                status: p.ok,
                message: p.ok ? "ok" : q.message || q.detail,
                data: q
              };
            }
          };
        }(window.EventSourcePolyfill);
        return new i();
      };
      window[btoa("GM_setValue")] = function (i, j) {
        window[btoa("WWW")].localStorage.setItem(i, JSON.stringify(j));
      };
      window[btoa("GM_getValue")] = function (i, j) {
        const k = window[btoa("WWW")].localStorage.getItem(i);
        if (k) {
          return JSON.parse(k);
        } else {
          return j;
        }
      };
     /* window[btoa("onNotVerified0")] = () => {
        window[btoa("WWW")].document.body.innerHTML = "";
        window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/bot";
        setInterval(() => window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/bot", (1 + Math.random() * 2) * 1000);
      };
      window[btoa("onNotVerified1")] = () => {
        window[btoa("WWW")].document.body.innerHTML = "";
        window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/bot";
        setInterval(() => window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/bot", (1 + Math.random() * 2) * 1000);
      };*/
      window[btoa("satisfyFetch")] = async function (i, j, k, l, m) {
        if (!j) {
          j = {};
        }
        let n = l || 1;
        let o = 9000;
        let p;
        let q = [];
        let r = 0;
        const s = Date.now();
        while (!p) {
          while (r >= n && !p) {
            await new Promise(z => setTimeout(z, 300));
            q.forEach(z => {
              if (z.abortController && Date.now() - z.startedAt >= o || Date.now() - s > k) {
                if (z.abortController) {
                  z.abortController.abort();
                }
                z.abortController = undefined;
              }
            });
          }
          if (p) {
            break;
          } else if (k && Date.now() - s > k) {
            q.forEach(z => {
              if (z.abortController) {
                z.abortController.abort();
              }
            });
            return null;
          }
          const u = new AbortController();
          const v = structuredClone(j);
          v.signal = u.signal;
          const w = {
            abortController: u
          };
          r++;
          w.fetchCall = window[atob("ZmV0Y2g=")](i, v).then(z => {
            if (!p || !p.ok && p.status !== 304) {
              p = z;
            }
            if (!z.ok && z.status !== 304) {
              window[btoa("toggle400Signal")](z.status);
            } else {
              window[btoa("toggle400Signal")]();
            }
          }).catch(z => {}).finally(() => {
            r--;
            w.abortController = undefined;
          });
          w.startedAt = Date.now();
          q.push(w);
          let x = Date.now();
          let y = m || 2500;
          while (!p && Date.now() - x > y) {
            await new Promise(z => setTimeout(z, 100));
          }
        }
        q.forEach(z => {
          if (z.abortController) {
            z.abortController.abort();
          }
        });
        return p;
      };
      window[btoa("satisfyAjax")] = async function (i, j, k, l) {
        if (!i) {
          i = {};
        }
        while (typeof $ === "undefined") {
          await new Promise(u => setTimeout(u, 500));
        }
        let m = k || 1;
        let n = 9000;
        let o;
        let p = [];
        let q = 0;
        const r = Date.now();
        let s;
        while (!o) {
          while (q >= m && !o) {
            await new Promise(y => setTimeout(y, 300));
            p.forEach(y => {
              if (y.abortController && Date.now() - y.startedAt >= n) {
                if (y.abortController) {
                  y.abortController.abort();
                }
                y.abortController = undefined;
              }
            });
          }
          if (o) {
            break;
          } else if (j && Date.now() - r > j) {
            p.forEach(y => {
              if (y.abortController) {
                y.abortController = undefined;
                y.abortController.abort();
              }
            });
            break;
          }
          const u = structuredClone(i);
          const v = {};
          q++;
          v.ajaxCall = $.ajax(u).done((y, z, A) => {
            o = y || z || "ok";
          }).fail((y, z, A) => {
            if (y.status === 429) {
              s = 7000;
            } else if (y.status === 403) {
              s = 2100;
            }
          }).always((y, z, A) => {
            q--;
            v.abortController = undefined;
          });
          v.startedAt = Date.now();
          v.abortController = {
            abort: v.ajaxCall.abort.bind(v.ajaxCall)
          };
          p.push(v);
          let w = Date.now();
          let x = l || 2500;
          while (!o && Date.now() - w > x) {
            await new Promise(y => setTimeout(y, 100));
          }
        }
        p.forEach(y => {
          if (y.abortController) {
            y.abortController.abort();
          }
        });
        if (s) {
          await new Promise(y => setTimeout(y, s));
        }
        return o;
      };
      let SPLITMARK1;
      window[btoa("scriptsUrlMapping")] = async function (i) {
        i = i.toLowerCase();
        if (i.includes("bls/visatypeverification")) {
          return window[btoa("visa_type_verification")];
        }
        if (i.includes("bls/visatype?data=")) {
          return window[btoa("first_form")];
        }
        if (i.includes("blsappointment/manageappointment")) {
          return window[btoa("last_page")];
        }
        if (i.includes("manageapplicant")) {
          return window[btoa("manage_applicant")];
        }
        if (i.includes("changepassword")) {
          return window[btoa("change_password")];
        }
        if (i.includes("home/index")) {
          return () => window[btoa("wait_for_jquery")]().then(() => window[btoa("WWW")].location.href = "/" + window[btoa("cc")]() + "/bls/visatypeverification");
        }
        if (i.includes("account/login")) {
          return window[btoa("login")];
        }
        if (i.includes("dataprotectionemailsent")) {
          return window[btoa("page_biometricaccepted")];
        }
        if (i.includes("dataprotectionemailaccept")) {
          return () => window[btoa("WWW")].location.href = "/" + window[btoa("cc")]() + "/bls/visatypeverification";
        }
      };
      window[btoa("globainits")] = function () {
        if (window.unsafeWindow) {
          window = window.unsafeWindow || window;
        }
        window[btoa("WWW")] = window.unsafeWindow || window;
        window[btoa("WWW__")] = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
        window[btoa("WWW")] = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
        window[btoa("WWW")][btoa("WWW")] = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
        window[btoa("SITE_ROOT")] = "https://algeria.blsspainglobal.com/DZA";
        window[btoa("WWW__")].alertFct = alert;
        window[btoa("WWW__")].alert = i => (() => {})(i);
        window[btoa("WWW__")].AUTHT = 2;
        window[btoa("WWW")] = window[btoa("WWW__")];
        window[btoa("WWW")].chkdtxyz = 1702412218966;
        window[btoa("USER")] = "dmlhaGFtemE=";
        window[btoa("NOCAPAI_APIKEY")] = "" || "bm8=";
        window[btoa("ISCAPEVAL")] = "" || false;
        window[btoa("WWW__")].TARGET_UI_INJECTION = "body";
        window[btoa("reservationTriesSold")] = window[btoa("GM_getValue")]("reservationSoldYZ", 2);
        window[btoa("collabTriesSold")] = window[btoa("GM_getValue")]("collabChecksSoldYZ", 3);
        window[btoa("checkTriesSold")] = window[btoa("GM_getValue")]("checkSoldYZ", 2);
        window[btoa("hijakAJAX")]();
      };
      window[btoa("cc")] = function (i) {
        const j = window[btoa("WWW")].location.href.split("/")[3]?.toLowerCase();
        if (!j) {
          if (window[btoa("WWW")].location.href.toLowerCase().includes("blsspainmorocco")) {
            return "mar";
          } else if (window[btoa("WWW")].location.href.toLowerCase().includes("algeria.blsspainglobal")) {
            return "dza";
          } else if (window[btoa("WWW")].document.location.href.toLowerCase().includes("spain.blscn.cn")) {
            return "chn";
          } else {
            return "egy";
          }
        }
        return j || "";
      };
      window[btoa("imarksomnotofx")] = async function () {
        'use strict';

        window[btoa("globainits")]();
        alert = q => (() => {})(q);
        (() => {})(document.location.href);
        let i = window[btoa("WWW")]?.location?.href?.split("/")[2]?.toLowerCase();
        if (!["algeria.blsspainglobal.com", "egypt.blsspainglobal.com", "spain.blscn.cn", "www.blsspainmorocco.net", "up.blsgx.online:3001", "up.blsgx.online:3002"].includes(i)) {
          return "";
        }
        if (window[btoa("cc")]() == "dza") {
          window[btoa("SITE_ROOT")] = "https://algeria.blsspainglobal.com/DZA";
          window[btoa("locationSelectOptionsHtml")] = "<option selected defaulto value=\"Algiers\">Algiers</option>\n    <option value=\"Oran\">Oran</option>";
          window[btoa("visaSubTypeSelectOptionsHtml")] = `<option selected defaulto value="Schengen Visa">Schengen Visa</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Researcher visa">Researcher visa</option>
          <option value="Internship visa">Internship visa</option>
          <option value="Family Reunification Visa">Family Reunification Visa</option>
          <option value="Residence and Employment Work Visa">Residence and Employment Work Visa</option>
          <option value="Residence visa with working permit exemption">Residence visa with working permit exemption</option>
          <option value="Self-employed work visa">Self-employed work visa</option>
          <option value="Investor visa">Investor visa</option>
          <option value="Entrepreneur visa">Entrepreneur visa</option>
          <option value="Long-term residence visa">Long-term residence visa</option>
          <option value="Long-term residence or EU Long-term residence recover">Long-term residence or EU Long-term residence recover</option>
          <option value="Visa for highly qualified workers and for intra-company transfers">Visa for highly qualified workers and for intra-company transfers</option>
          <option value="Non-working residency visa (non-lucrative visa)">Non-working residency visa (non-lucrative visa)</option>
          <option value="Property Owner">Property Owner</option>
          <option value="Medical Visit">Medical Visit</option>
          <option value="Tourism">Tourism</option>`;
        } else if (window[btoa("cc")]() == "mar") {
          window[btoa("SITE_ROOT")] = "https://www.blsspainmorocco.net/MAR";
          window[btoa("locationSelectOptionsHtml")] = `<option selected defaulto value="Casablanca">Casablanca</option>
          <option  value="Nador">Nador</option>
          <option  value="Rabat">Rabat</option>
          <option  value="Tetouan">Tetouan</option>
          <option  value="Tangier">Tangier</option>
          <option  value="Agadir">Agadir</option>
          `;
          window[btoa("visaSubTypeSelectOptionsHtml")] = `<option selected defaulto value="Schengen Visa">Schengen Visa</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Schengen Visa - First Demand">Schengen Visa - First Demand</option>
          <option value="Schengen Visa - Previous Visa Holder">Schengen Visa - Previous Visa Holder</option>
          <option value="Visa for highly qualified workers and for intra-company transfers">Visa for highly qualified workers and for intra-company transfers</option>
          <option value="Non-working residency visa (non-lucrative visa)">Non-working residency visa (non-lucrative visa)</option>
          <option value="Long-term residence or EU Long-term residence recover">Long-term residence or EU Long-term residence recover</option>
          <option value="Long-term residence visa">Long-term residence visa</option>
          <option value="Entrepreneur visa">Entrepreneur visa</option>
          <option value="Family Reunification Visa">Family Reunification Visa</option>
          <option value="Investor visa">Investor visa</option>
          <option value="Self-employed work visa">Self-employed work visa</option>
          <option value="Residence visa with working permit exemption">Residence visa with working permit exemption</option>
          <option value="Residence and Employment Work Visa">Residence and Employment Work Visa</option>
          <option value="Internship visa">Internship visa</option>
          <option value="Relocation With In The Same Company">Relocation With In The Same Company</option>
          <option value="Work Visa( employee working for somebody else)">Work Visa( employee working for somebody else)</option>
          <option value="Study less than 90 Days">Study less than 90 Days</option>
          <option value="Researcher visa">Researcher visa</option>
          <option value="Study More Than 180 Days">Study More Than 180 Days</option>
          <option value="Investment Visa">Investment Visa</option>
          <option value="Highly qualified Work Visa">Highly qualified Work Visa</option>
          <option value="Long-term residence permit recuperation visa">Long-term residence permit recuperation visa</option>
          <option value="Non-lucrative residence visa">Non-lucrative residence visa</option>
          <option value="EU National Family Member Visa">EU National Family Member Visa</option>
          <option value="Study between 90 and 179 days">Study between 90 and 179 days</option>
          <option value="Study Family Member ">Study Family Member </option>
          <option value="National Visa">National Visa</option>`;
        } else if (window[btoa("cc")]() == "chn") {
          const {
            locationData: q,
            visasubIdData: r
          } = window[btoa("getDataObject")]();
          window[btoa("SITE_ROOT")] = "https://spain.blscn.cn/CHN";
          window[btoa("locationSelectOptionsHtml")] = q.map(s => "<option " + (s.Name == "Beijing" ? "selected defaulto" : "") + " value=\"" + s.Name + "\">" + s.Name + "</option>").join("\n");
          window[btoa("visaSubTypeSelectOptionsHtml")] = r.map(s => "<option " + (s.Name == "Schengen Visa" ? "selected defaulto" : "") + " value=\"" + s.Name + "\">" + s.Name + "</option>").join("\n");
        } else if (window[btoa("cc")]() == "egy") {
          const {
            locationData: s,
            visasubIdData: u
          } = window[btoa("getDataObject")]();
          window[btoa("SITE_ROOT")] = "https://egypt.blsspainglobal.com/EGY";
          window[btoa("locationSelectOptionsHtml")] = s.map(v => "<option " + (v.Name == "Cairo" ? "selected defaulto" : "") + " value=\"" + v.Name + "\">" + v.Name + "</option>").join("\n");
          window[btoa("visaSubTypeSelectOptionsHtml")] = u.map(v => "<option " + (v.Name == "Schengen Visa" ? "selected defaulto" : "") + " value=\"" + v.Name + "\">" + v.Name + "</option>").join("\n");
        }
        const j = window[btoa("auth")]().finally(() => {});
        const k = () => {
          return new Promise(async v => {
            if (typeof $ == "undefined") {
              await import("https://code.jquery.com/jquery-3.2.1.min.js");
            }
            const w = await window[btoa("get_verif_value")]();
            $.ajax({
              url: "https://up.blsgx.online/authentication",
              type: "POST",
              data: JSON.stringify({
                _yxzfp: w[0]
              }),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function (x) {
                try {
                  window[btoa("getgibp")] = atob(x.target) === w[1];
                } catch (y) {
                  window[btoa("getgibp")] = undefined;
                }
                if (x === w[1]) {
                  window[btoa("getgibpc")] = 0;
                }
                v(x === w[1]);
                if (x === w[1]) {
                  setTimeout(k, (20 + Math.random() * 25) * 1000);
                }
              },
              error: function (x) {
                window[btoa("getgibpc")] = window[btoa("getgibpc")] ? window[btoa("getgibpc")] + 1 : 1;
                setTimeout(() => {
                  v(k());
                }, 2500);
              }
            });
          });
        };
        k();
        await window[btoa("wait_for_document_ready")]();
        if (document.body.innerText.includes("Forbidden") || document.body.innerText.includes("Bad Gateway") || document.body.innerText.length < 100) {
          await import("https://code.jquery.com/jquery-3.2.1.min.js");
          if (document.body.innerText.includes("Gateway")) {
            document.title += " (Reloading in 1s)";
            document.body.appendChild(document.createTextNode(" (Reloading in 1s [__XYZ Bls script])"));
            setTimeout(() => document.location.reload(), 1000);
            return;
          }
          document.title += " (Reloading in 0.5 min)";
          document.body.appendChild(document.createTextNode(" (Reloading in 0.5 minute  [__XYZ Bls script])"));
          setTimeout(() => document.location.reload(), 30000);
          return;
        }
        await window[btoa("wait_for_jquery")]();
        if (window[btoa("WWW")].top === window[btoa("WWW")]) {
          await window[btoa("wait_for_element")](window[btoa("WWW")].TARGET_UI_INJECTION, window[btoa("WWW")]);
          window[btoa("WWW")].$(window[btoa("WWW")].TARGET_UI_INJECTION).prepend(window[btoa("panel")]());
          if ($("#__YZ_livenessPane").length) {
            $("#__YZ_livenessPane").prependTo($("" + window[btoa("WWW")].TARGET_UI_INJECTION));
          }
          window[btoa("renderApplicationButtons")]();
        }
        j.then(v => {
          if (!v) {
            return false;
              //window[btoa("onNotVerified" + Date.now() % 5)]();
          }
        });
        if (window[btoa("WWW")].chkdtxyz !== 1702412218966) {
          setInterval(() => {
            window[btoa("WWW")].document.body.innerHTML = "?";
            window[btoa("WWW")].location.href = "/";
          }, 3333);
        }
        window[btoa("WWW")].schkdtxyz = 1702412219030;
        let l = Date.now();
       /* setInterval(() => {
          if (window[btoa("WWW")][atob("WVpfX182NTQy")] !== true || !(window[btoa("auth")] && window[btoa("auth1")] && window[btoa("auth2")] && window[btoa("auth3")])) {
            if (window[btoa("WWW__")][atob("QVVUSFQ=")] <= 0 || Date.now() - l > 60000 || !(window[btoa("auth")] && window[btoa("auth1")] && window[btoa("auth2")] && window[btoa("auth3")])) {
              const v = (Date.now() % 2 ? "_" : "") + atob("b25Ob3RWZXJpZmllZA==") + Date.now() % 5;
              window[btoa(v)]();
            }
          }
        }, 3000);*/
        const m = window[btoa("WWW")].location.href;
        const n = await window[btoa("scriptsUrlMapping")](m);
        if (n) {
          n();
        }
        let o = Date.now();
        setInterval(() => {
          if (!window[btoa("getgibp")] && (window[btoa("getgibpc")] > 5 || Date.now() - o > 60000) || !(window[btoa("auth")] && window[btoa("auth1")] && window[btoa("auth2")] && window[btoa("auth3")])) {
            setInterval(() => {
              window[btoa("WWW")].document.location.href = "/";
              window[btoa("WWW")].document.body.innerHTML = "";
            }, 5000);
          }
        }, 10000);
        const p = () => {
          let v = $("#__YZ_versionLink").text();
          if (!v) {
            return;
          }
          fetch(v).then(w => {
            let x = w.headers.get("last-modified");
            let y = $("#__YZ_currentVersion").text().replace("version: ", "");
            let z = new Date(x);
            let A = new Date(y);
            A.setHours(A.getHours() - 1);
            if (z.getTime() <= A.getTime() + 600000) {
              $("#__YZ_uptodateIndicator").attr("class", "ml-1 fa fa-circle-check");
              $("#__YZ_uptodateIndicator").css("color", "green");
            } else {
              $("#__YZ_uptodateIndicator").attr("class", "ml-1 fa fa-warning");
              $("#__YZ_uptodateIndicator").css("color", "orange");
            }
          });
        };
        setInterval(p, 30000);
        p();
      };
      if (window.unsafeWindow) {
        window.unsafeWindow.imarksomnotofx = window[btoa("imarksomnotofx")];
      } else {
        window.imarksomnotofx = window[btoa("imarksomnotofx")];
      }
      let SPLITMARK2;
     /* window[btoa("onNotVerified2")] = () => {
        window[btoa("WWW")].document.body.innerHTML = "";
        window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/login";
        setInterval(() => window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/login", (1 + Math.random() * 3) * 1000);
      };*/
      window[btoa("makeAccount")] = async function (i, j) {
        const k = window[btoa("cc")]();
        let l = "/registeruser";
        if (k === "chn") {
          l = "/registeruser";
        }
        let m = window[btoa("GM_getValue")]("selectedApplication", {});
        const n = window[btoa("GM_getValue")]("auxLogin", {});
        const o = n[m.email] || [];
        let p;
        if (!j) {
          if (o.length > 5) {
            return;
          }
        }
        if (!window[btoa("mailjs")]) {
          window[btoa("mailjs")] = window[btoa("mjs")]();
        }
        const q = window[btoa("mailjs")];
        const r = async (J, K) => q.login(J, K ? K : J.split("@")[0]).then(L => {
          return J;
        }).catch(L => new Promise(M => setTimeout(M, 2500)).then(r));
        async function s() {
          let J = p;
          if (!J) {
            J = "user";
          } else {
            J = J.toLowerCase();
          }
          J = J.replace(/\./g, "");
          return q.getDomains().then(K => new Promise(L => {
            const M = K?.data;
            if (!M?.length) {
              return L(null);
            }
            const N = M[Math.floor(Math.random() * M.length)]?.domain;
            async function O() {
              const P = "" + J + Date.now() % 100000;
              const Q = P + "@" + N;
              return q.register(Q, P).then(R => new Promise(S => {
                S(r(Q, P));
              })).catch(R => L(new Promise(S => setTimeout(S, 1500)).then(O)));
            }
            L(O());
          })).catch(K => new Promise(L => setTimeout(L, 1500)).then(L => s()));
        }
        let u = window[btoa("GM_getValue")]("selectedApplication", {});
        const v = u.firstName || "AbdAllah";
        const w = u.lastName || "AbdArrahman";
        p = v + "." + w;
        let x = j ? $("#makeLoginChk_yz").is(":checked") && o.length ? o[0].email : u.email : await s();
        let y = u.phone || "665" + Math.random().toString().substring(2, 8) + (k === "chn" ? "23" : "");
        if (k == "egy" && y.length < 10) {
          y = y + Math.random().toString().substring(2, 12 - y.length);
        }
        let z = await window[btoa("get_login_captcha")]();
        let A = $("input[name=\"__RequestVerificationToken\"]").val();
        let B = {};
        do {
          const J = atob(z[1]);
          const K = atob(z[0]);
          const L = "/" + window[btoa("cc")]() + "/account/SendRegisterUserVerificationCode?email=" + encodeURIComponent(x) + "&mobile=" + y + "&isMobileVerify=False&data=BmWrRcKlUP9zto98oczEbi2DiEZdBqx008yi038VKRJp6RcJeP2%2Fy4LPk9Mk5xmKiuhJ7Guch5XF48%2BihQlK0VXWUFBBhtTuwU1VrMaJI4fdPk0Li8rJv%2BmA2o7%2BFUV15gFwKeI9lzhgO1oqkVesjA%3D%3D&captchaData=" + encodeURIComponent(K) + "&captchaId=" + encodeURIComponent(J);
          const M = {
            headers: {
              requestverificationtoken: A,
              "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
              "x-requested-with": "XMLHttpRequest"
            },
            referrer: window[btoa("SITE_ROOT")] + "/account" + l,
            body: null,
            method: "POST",
            mode: "cors"
          };
          let N;
          try {
            N = await window[btoa("satisfyFetch")](L, M).catch(O => {});
            if (N.ok) {
              B = await N.json();
            } else {
              await g(N, [400]);
            }
          } catch (O) {}
          if (!B?.encryptEmail) {
            let P = B?.error || B?.err;
            if (P?.includes("captcha")) {
              z = await window[btoa("get_login_captcha")]();
            } else if (P?.includes("Mobile Number Already Exist")) {
              y = y.substring(0, y.length - 2) + Math.random().toString().substring(2, 4);
            } else if (P?.error?.includes("Email id already exists")) {
              if (j) {
                ShowError("Script XYZ: Email Already Exist, please get password from email and edit it in the script");
                while (true) {
                  await new Promise(Q => setTimeout(Q, 15000));
                }
              }
              x = await s();
            } else if (P?.error?.includes("maximum number of OT")) {
              ShowError("Script XYZ: Max false, retrying in a minute");
              await new Promise(Q => setTimeout(Q, 60000));
            } else if (N?.status === 400) {
              A = await window[btoa("getRvt")]("/" + window[btoa("cc")]() + "/account/login");
            } else if (P) {
              ShowError("Script XYZ: Unknown error: " + P);
              await new Promise(Q => setTimeout(Q, 5500));
            }
          }
        } while (!B?.encryptEmail);
        let C = "5e44cd63-68f0-41f2-b708-0eb3bf9f4a72";
        let D;
        let E;
        E = u.pIP;
        if (!E) {
          if (k == "mar") {
            D = "212";
            E = "morocco";
          } else if (k == "dza") {
            D = "213";
            E = "algeria";
          } else if (k == "chn") {
            D = "86";
            E = "china";
          }
        }
        let F = {};
        let G = u.pN ? u.pN.substring(0, u.pN.length - 2) + Math.random().toString().substring(2, 4) : "" + (k === "egy" ? "C" : "1") + Math.random().toString().substring(2, 10);
        do {
          const Q = atob(z[1]);
          const R = atob(z[0]);
          u = window[btoa("GM_getValue")]("selectedApplication", {});
          let S = u.dob || "1990-" + (Date.now() % 11 + 1).toString().padStart(2, "0") + "-" + (Date.now() % 28 + 1).toString().padStart(2, "0");
          let T = u.pED || "2031-" + (Date.now() % 11 + 1).toString().padStart(2, "0") + "-" + (Date.now() % 28 + 1).toString().padStart(2, "0");
          let U = u.pID || "2022-" + (Date.now() % 11 + 1).toString().padStart(2, "0") + "-" + (Date.now() % 28 + 1).toString().padStart(2, "0");
          const V = {
            headers: {
              requestverificationtoken: A,
              "content-type": "application/x-www-form-urlencoded; charset4UTF-8",
              "x-requested-with": "XMLHttpRequest"
            },
            referrer: window[btoa("SITE_ROOT")] + "/account" + l,
            body: "Mode=register&CaptchaParam=&CaptchaData=" + encodeURIComponent(R) + "&CaptchaId=" + encodeURIComponent(Q) + "&ServerDateOfBirth=" + S + "&ServerPassportExpiryDate=" + T + "&ServerPassportIssueDate=" + U + "&SecurityCode=BmWrRcKlUP9zto98oczEbi2DiEZdBqx008yi038VKRJp6RcJeP2%252Fy4LPk9Mk5xmKiuhJ7Guch5XF48%252BihQlK0VXWUFBBhtTuwU1VrMaJI4fdPk0Li8rJv%252BmA2o7%252BFUV15gFwKeI9lzhgO1oqkVesjA%253D%253D&MobileVerificationEnabled=False&EncryptedEmail=" + encodeURIComponent(B.encryptEmail) + "&EncryptedMobile=" + encodeURIComponent(B.encryptMobile) + "&SurName=&FirstName=" + v + "&LastName=" + w + "&DateOfBirth=" + S + "&PassportNumber=" + G + "&PassportIssueDate=" + U + "&PassportExpiryDate=" + T + "&BirthCountry=" + C + "&PassportType=0a152f62-b7b2-49ad-893e-b41b15e2bef3&IssuePlace=" + E + "&CountryOfResidence=" + C + "&CountryCode=%2B" + D + "&Mobile=" + encodeURIComponent(y) + "&Email=" + encodeURIComponent(x) + "&EmailOtp=431320&__RequestVerificationToken=" + encodeURIComponent(A),
            method: "POST",
            mode: "cors"
          };
          let W;
          try {
            W = await window[btoa("satisfyFetch")]("/" + window[btoa("cc")]() + "/Account" + l, V, undefined, 1).catch(X => {});
            if (W.ok) {
              F = await W.json();
            } else {
              await g(W, [400]);
            }
          } catch (X) {}
          if (!F?.success) {
            let Y = B?.error || B?.err;
            if (Y?.error?.includes("captcha")) {
              z = await window[btoa("get_login_captcha")]();
            } else if (Y?.error?.includes("Email id already exists")) {
              if (j) {
                ShowError("Script XYZ: Email Already Exist S2, please get password from email and edit it in the script");
                while (true) {
                  await new Promise(Z => setTimeout(Z, 15000));
                }
              } else {
                ShowError("Script XYZ: Email Already Exist S2, retrying...");
                return await new Promise(Z => setTimeout(Z, 1500)).then(Z => window[btoa("makeAccount")](i, j));
              }
            } else if (Y?.includes("Passport Number Already Exist")) {
              G = G.substring(0, G.length - 2) + Math.random().toString().substring(2, 4);
            } else if (Y?.error?.includes("mail Address is Invalid")) {
              ShowError("Script XYZ: Email Already Invalid, retrying...");
              return await new Promise(Z => setTimeout(Z, 1500)).then(Z => window[btoa("makeAccount")](i, j));
            } else if (W?.status === 400) {
              A = await window[btoa("getRvt")]("/" + window[btoa("cc")]() + "/account/login");
            } else {
              ShowError("Script XYZ: Unknown error: " + Y);
              await new Promise(Z => setTimeout(Z, 5500));
            }
          }
        } while (!F?.success);
        async function H() {
          const Z = window[btoa("GM_getValue")]("selectedApplication", {});
          const a0 = Z.email;
          const a1 = Z.emailPassword;
          const a2 = Z.otpProxyEmail;
          const a3 = {
            email: a0,
            password: a1,
            otpProxyEmail: a2
          };
          return new Promise((a4, a5) => {
            window[atob("ZmV0Y2g=")]("https://up.blsgx.online/email", {
              method: "POST",
              body: JSON.stringify(a3),
              headers: {
                "Content-Type": "application/json",
                "x-password-mail": 1
              }
            }).then(a6 => a6.text()).then(a6 => {
              if (!a6 || !a6.length || a6.length > 8) {
                return a5("error");
              }
              u.password = a6;
              window[btoa("GM_setValue")]("selectedApplication", u);
              let a7 = window[btoa("GM_getValue")]("applications", []);
              for (const a8 of a7) {
                if (a8.email === u.email && a8.firstName === u.firstName && a8.lastName === u.lastName) {
                  a8.password = a6;
                  a8.phone = y;
                  a8.pN = G;
                  break;
                }
              }
              window[btoa("GM_setValue")]("applications", a7);
              a4(true);
            }).catch(function (a6) {
              a5(a6);
            });
          });
        }
        async function I() {
          const Z = async a2 => new Promise(a3 => {
            q.getMessage(a2).then(a4 => {
              const a5 = a4?.data;
              if (!a5) {
                return a3(new Promise(a7 => setTimeout(a7, 1500)).then(a7 => Z(a2)));
              }
              let a6 = a5.text || (typeof a5.html === "string" ? a5.html : a5.html[0]);
              a3({
                address: a5.to[0].address,
                email: a6
              });
            }).catch(a4 => a3(new Promise(a5 => setTimeout(a5, 1500)).then(a5 => Z(a2))));
          });
          const a0 = async () => new Promise(a2 => {
            q.getMessages().then(a3 => {
              const a4 = a3?.data;
              if (!a4) {
                return a2(new Promise(a5 => setTimeout(a5, 1500)).then(a0));
              }
              for (const a5 of a4) {
                if (a5.subject == "Welcome To BLS Appointment System") {
                  return a2(Z(a5.id));
                }
              }
              a2(new Promise(a6 => setTimeout(a6, 1500)).then(a0));
            }).catch(a3 => a2(new Promise(a4 => setTimeout(a4, 1500)).then(a0)));
          });
          const a1 = async () => a0().then(a2 => {
            const a3 = (a4, a5) => {
              const a6 = window[btoa("GM_getValue")]("selectedApplication", {});
              const a7 = a6.email;
              const a8 = window[btoa("GM_getValue")]("auxLogin", {});
              const a9 = window[btoa("GM_getValue")]("auxLoginINFO", {});
              const aa = a8[a7] || [];
              let ab = aa.findIndex(ac => ac.email === a4);
              if (ab !== -1) {
                aa[ab].password = a5;
                a9[a4] = {
                  email: x,
                  phone: y,
                  pN: G
                };
              } else if (i || j) {
                aa.unshift({
                  email: a4,
                  password: a5
                });
                a9[a4] = {
                  email: x,
                  phone: y,
                  pN: G
                };
              } else {
                aa.push({
                  email: a4,
                  password: a5
                });
                a9[a4] = {
                  email: x,
                  phone: y,
                  pN: G
                };
              }
              a8[a7] = aa;
              window[btoa("GM_setValue")]("auxLogin", a8);
              window[btoa("GM_setValue")]("auxLoginBU", a8);
              window[btoa("GM_setValue")]("auxLoginINFO", a9);
            };
            a3(a2.address, /Password[^0-9]+(\d+)[^0-9]/is.exec(a2.email)[1]);
            return true;
          }).catch(a1);
          return a1();
        }
        if (j) {
          if ($("#makeLoginChk_yz").is(":checked") && o.length) {
            await r(o[0].email, o[0].email.split("@")[0]);
            return I();
          } else {
            return H();
          }
        }
        return I().finally(() => {});
      };
      window[btoa("getRvt")] = async function (i) {
        do {
          try {
            const j = await window[btoa("satisfyFetch")](i).catch(k => (() => {})(k))(() => {})("fetch done");
            if (j?.ok) {
              await h(j, i);
              const k = /<input[^>]*name=["']?__RequestVerificationToken["']?[^>]*value=["']?([^"']+)["']/i;
              const l = (await j.text()).match(k);
              return l[1];
            } else {
              await g(j);
            }
          } catch (m) {
            (() => {})(m);
            await new Promise(n => setTimeout(n, 1500));
          }
        } while (true);
      };
      window[btoa("quietLogin")] = async i => {
        const j = window[btoa("cc")]();
        const k = await window[btoa("get_login_captcha")]();
        let l = encodeURIComponent(atob(k[1]));
        let m = encodeURIComponent(atob(k[0]));
        let n = encodeURIComponent(i || $("input[name=\"__RequestVerificationToken\"]").val());
        let o;
        const p = async () => {
          const v = window[btoa("GM_getValue")]("selectedApplication", {});
          const w = v.email;
          const x = window[btoa("GM_getValue")]("auxLogin", {});
          const y = (x[w] || []).filter(A => A.email !== o);
          let z;
          for (z = 0; z < y.length; z++) {
            if (o === y[z].email) {
              break;
            }
          }
          if (z === y.length) {
            return;
          }
          y.splice(z, 1);
          x[w] = y;
          window[btoa("GM_setValue")]("auxLogin", x);
          window[btoa("GM_setValue")]("usedAuxMail", "");
        };
        const q = async v => {
          const w = window[btoa("GM_getValue")]("selectedApplication", {});
          const x = w.email;
          const y = window[btoa("GM_getValue")]("auxLogin", {});
          const z = (y[x] || []).filter(B => B.email !== o);
          let A = undefined;
          if (z.length) {
            A = z[0];
            o = A.email;
          } else {
            y[x] = z;
            window[btoa("GM_setValue")]("auxLogin", y);
            let B = await window[btoa("makeAccount")](v);
            if (B === false) {
              return false;
            }
            return q();
          }
          y[x] = z;
          window[btoa("GM_setValue")]("auxLogin", y);
          window[btoa("GM_setValue")]("usedAuxMail", A.email);
          return A;
        };
        let r;
        if (i || 1) {
          const v = await window[btoa("GM_getValue")]("selectedApplication", {});
          r = {
            email: v.email,
            password: v.password
          };
          o = r.email;
          window[btoa("GM_setValue")]("usedAuxMail", "");
        } else {
          r = await q();
        }
        if (!r) {
          return;
        }
        let s = encodeURIComponent(o);
        let u = encodeURIComponent(r.password);
        do {
          let w = "UserId1=&UserId2=&UserId3=&UserId4=&UserId5=" + s + "&UserId6=&UserId7=&UserId8=&UserId9=&UserId10=&Password1=&Password2=&Password3=&Password4=&Password5=&Password6=&Password7=" + u + "&Password8=&Password9=&Password10=&ReturnUrl=%2F" + j + "%2Fbls%2Fvisatypeverification&CaptchaId=" + l + "&CaptchaParam=&CaptchaData=" + m + "&ScriptData=S65Dmek%2FUSX8%2FijsaahdDiZk2pdjgDy1QzC4MALdTelLjpzcKgAqLJPqhbDt6U4sxmGELR7t15CX7%2BPABrGWPivPxq0bvFgKB7AnQg1MOuFTwXxmR7mRshKKDPUca41ulkkl5Z5B5Iys2oCJEbCFWQ%3D%3D&__RequestVerificationToken=" + n + "&X-Requested-With=XMLHttpRequest";
          let x;
          try {
            x = await window[btoa("satisfyFetch")]("/" + j + "/account/login", {
              method: "POST",
              body: w,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "x-requested-with": "XMLHttpRequest",
                referer: "" + window[btoa("SITE_ROOT")] + "/account/login"
              }
            }).catch(y => null);
          } catch (y) {}
          if (x?.ok) {
            window[btoa("toggle400Signal")]();
            const z = await x.json();
            if (z && z.success) {
              break;
            } else if (z) {
              if (z.bot === true) {
                return window[btoa("toggle400Signal")]("bot detected");
              } else if ((!i || $("#makeLoginChk_yz").is(":checked")) && (z.error.includes("Invalid User") || z.error.includes("This account is disabled") || z.error.includes("This account is locked"))) {
                await p();
                const A = await q(1);
                if (!A) {
                  if (A === false) {
                    return false;
                  }
                  return;
                }
                s = encodeURIComponent(o);
                u = encodeURIComponent(A.password);
              } else if (z.err == "Invalid/expired captcha") {
                window[btoa("storecaptchaandid")]();
                const B = window[btoa("get_login_captcha")]();
                l = encodeURIComponent(atob(B[1]));
                m = encodeURIComponent(atob(B[0]));
              } else if (i) {
                ShowError(z.error || z.err);
                await new Promise(C => setTimeout(C, 4500));
                if (i) {
                  const C = await window[btoa("GM_getValue")]("selectedApplication", {});
                  r = {
                    email: C.email,
                    password: C.password
                  };
                  o = r.email;
                  window[btoa("GM_setValue")]("usedAuxMail", "");
                }
              }
            }
          } else if (x?.status === 400) {
            await new Promise(D => setTimeout(D, 1500));
            n = await window[btoa("getRvt")]("/" + j + "/account/login");
          } else {
            await g(x);
          }
        } while (true);
      };
      window[btoa("hijakAJAX")] = function () {
        if (typeof $ == "undefined") {
          return;
        }
        async function i(j, k) {
          let l = (k.data || k.url.split("?")[1]).split("&").reduce((y, z) => {
            const [A, B] = z.split("=");
            y[A] = B;
            return y;
          }, {});
          let m = l.LocationId || l.locationId;
          let n = l.AppointmentCategoryId || l.categoryId;
          let o = l.ApplicantsNo || l.applicantCount;
          let p = l.VisaType || l.visaType;
          let q = l.VisaSubType || l.visaSubType;
          let r = l.MissionId || l.missionId;
          let s = l.DataSource || l.dataSource;
          let u = l.AppointmentDate || l.appointmentDate;
          if (/^\d.+/.test(o + "")) {
            o = o.match(/^(\d).+/)[1];
          }
          let v = m + "_" + n + "_" + p + "_" + q + "_" + o + "_" + s + "_" + r + "_" + u;
          if (window[btoa("onGoingGetSlots__YZ")][v]) {
            (() => {})("decrementin id " + v);
            window[btoa("onGoingGetSlots__YZ")][v]--;
          }
          let w = window[btoa("GM_getValue")]("negativeSlots__YZ", false);
          $("#infoForUser__YZ").html("last time check: <strong>" + new Date().toLocaleTimeString() + "</strong>").css("text-decoration", "underline");
          setTimeout(() => $("#infoForUser__YZ").css("text-decoration", "none"), 1000);
          $("body").css("background", "grey");
          setTimeout(() => $("body").css("background", ""), 300);
          if (!(window[btoa("WWW")].chkdtxyz < Date.now() + 259200000)) {
            return;
          }
          let x = [];
          try {
            x = JSON.parse(j.responseText);
            await new Promise((y, z) => {
              window[btoa("satisfyAjax")]({
                url: "https://up.blsgx.online/authentication",
                dataType: "json",
                headers: {
                  "content-type": "application/json",
                  "collab-request-report2": "true"
                },
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                  _yxzfp: btoa(v),
                  _yxzfp2: btoa(JSON.stringify(x))
                }),
                type: "POST"
              }).then(A => {
                y([]);
              }).catch(A => {
                y([]);
              });
            });
          } catch (y) {}
          if (x.length) {
            let z = x.filter(A => A.Count > 0 || A.Count < 0 && w || window[btoa("WWW")].INJ);
            z = z.sort(() => Math.random() - 0.5);
            if (z.length) {
              document.getElementById("playAudio__YZ").click();
            }
            for (const A of z) {
              if (!window[btoa("GM_getValue")]("autoRefreshYZ", true) || window[btoa("WWW")].reservedyz) {
                break;
              }
              if (window[btoa("reservationTriesSold")] <= 0) {
                if (window[btoa("checkTriesSold")] > 0) {
                  if (["mar", "dza"].includes(window[btoa("cc")]())) {
                    window[btoa("checkTriesSold")]--;
                  } else {
                    break;
                  }
                }
              }
              window[btoa("reserveSlot__YZ")](u, A.Id, m, n, p, q, o, s, r);
              await new Promise(B => setTimeout(B, 1000));
            }
            if (window[btoa("reservationTriesSold")] <= 0) {}
          }
        }
        $(document).on("ajaxComplete", async function (j, k, l) {
          if (l.url?.toLowerCase().includes("/" + window[btoa("cc")]()) || l.url?.startsWith("/")) {
            const m = l.url?.toLowerCase().includes("/BLSAppointment/GetAvailableAppointmentDates".toLowerCase());
            if (l.url?.toLowerCase().includes("/BLSAppointment/GetAvailableSlots".toLowerCase())) {
              i(k, l);
              if (k?.status >= 400 && k?.status < 500) {
                window[btoa("toggle400Signal")](k?.status);
              }
              return;
            }
            let n;
            let o;
            let p;
            let q;
            let r;
            let s;
            let u;
            let v;
            let w;
            if (m) {
              let x = new URLSearchParams(l.url.split("?")[1]);
              n = x.get("locationId") || "";
              o = x.get("categoryId");
              p = x.get("visaType");
              q = x.get("visaSubType");
              r = x.get("applicantCount");
              s = x.get("dataSource");
              u = x.get("missionId") || "";
              v = x.get("appointmentDate") || "";
              if (/^\d.+/.test(r + "")) {
                r = r.match(/^(\d).+/)[1];
              }
              w = n + "_" + o + "_" + p + "_" + q + "_" + r + "_" + s + "_" + u;
              if (window[btoa("onGoingGetDates__YZ")][w]) {
                window[btoa("onGoingGetDates__YZ")][w]--;
              }
              if (k?.status !== 200) {
                window[btoa("siteDatesFetchedAt")] = Date.now();
              }
            }
            if (k?.status >= 400 && k?.status < 500) {
              window[btoa("toggle400Signal")](k?.status);
            } else {
              window[btoa("toggle400Signal")]();
              if (l.url?.toLowerCase().includes("/BLSAppointment/SendAppointmentVerificationCode".toLowerCase()) && k?.status === 200) {
                if (window[btoa("GM_getValue")]("noEmailOtp_YZ", 0)) {
                  return;
                }
                try {
                  const y = JSON.parse(k.responseText);
                  if (y.success) {
                    window[btoa("getOtpXYZandVerify")]();
                    return;
                  }
                } catch (z) {}
                new Promise(A => setTimeout(A, 1500)).then(A => window[btoa("WWW")][btoa("injectOTP")]());
                return;
              }
              if (window[btoa("GM_getValue")]("onlyEmailOtp_YZ", 0)) {
                return;
              }
              if (m && k?.status === 200) {
                $("#infoForUser__YZ").html("last date check: <strong>" + new Date().toLocaleTimeString() + "</strong>");
                $("#infoForUser__YZ").css("text-decoration", "underline");
                setTimeout(() => $("#infoForUser__YZ").css("text-decoration", "none"), 1000);
                $("body").css("background", "grey");
                setTimeout(() => $("body").css("background", ""), 300);
                if (window[btoa("WWW")].sedilkdjsnsndudl) {
                  return;
                }
                let A = k.responseText;
                try {
                  A = JSON.parse(k.responseText);
                  await new Promise((B, C) => {
                    window[btoa("satisfyAjax")]({
                      url: "https://up.blsgx.online/authentication",
                      dataType: "json",
                      headers: {
                        "content-type": "application/json",
                        "collab-request-report1": "true"
                      },
                      contentType: "application/json; charset=utf-8",
                      data: JSON.stringify({
                        _yxzfp: btoa(w),
                        _yxzfp2: btoa(JSON.stringify(A))
                      }),
                      type: "POST"
                    }).then(D => {
                      B([]);
                    }).catch(D => {
                      B([]);
                    });
                  });
                } catch (B) {
                  return;
                }
                if (A?.ad) {
                  let C = A?.ad?.filter(D => window[btoa("isDateOk")](D));
                  if (C.length) {
                    let D = C.map(E => E.DateText);
                    window[btoa("siteDatesRes")] = D;
                    window[btoa("siteDatesFetchedAt")] = Date.now();
                    if (!window[btoa("GM_getValue")]("autoRefreshYZ", true)) {
                      return;
                    }
                    window[btoa("datesBatchId")] = Math.random().toString().substring(2, 8);
                    for (const E of D) {}
                    return;
                  }
                }
                return;
              }
              if (l.url?.toLowerCase().includes("/payment/PaymentRequest".toLowerCase()) && k?.status === 200) {
                if (window[btoa("WWW")].chkdtxyz !== 1702412218966) {
                  window[btoa("WWW")].document.body.innerHTML = "?";
                  window[btoa("WWW")].location.reload();
                }
                try {
                  const F = JSON.parse(k.responseText);
                  if (F.success || F.successhj) {
                    if (!F.requestURL) {
                      window[btoa("toggleInPageSignal")]("Payment link error:" + F.error);
                      return;
                    } else {
                      window[btoa("toggleInPageSignal")](undefined, "paymentLinkNotFound");
                    }
                    if ($("#inPagePaymentLinkYZ").length) {
                      return;
                    }
                    $("#paymentDetailsDiv #payment-section").prepend($(`<div id="inPagePaymentLinkYZ" class="input-group" style="width: 100%">
                      <div class="input-group-prepend">
                      <span class="input-group-text" id="cpLinkAd" style="cursor:pointer; background: #738c6c; color: bisque"><span>Copy</span>
                       <i class="fa fa-copy"></i></span>
                      <a href="` + F.requestURL + `" target="_blank" class="input-group-text" id="cpLinkAd" style="cursor:pointer; background: #738c6c; color: bisque">Open <i class="fa fa-external-link"></i></a>
                      </div>
                      <label style="padding:5px" class="">` + F.requestURL + "</label></div>"));
                    $("#cpLinkAd").on("click", async function () {
                      let G = false;
                      if (navigator.clipboard) {
                        try {
                          await navigator.clipboard.writeText(F.requestURL).then(function () {
                            $("#cpLinkAd span").html($("#cpLinkAd span").html().replace("Copy", "Copied!"));
                            setTimeout(() => $("#cpLinkAd span").html($("#cpLinkAd span").html().replace("Copied!", "Copy")), 1000);
                            G = true;
                          }, function (I) {
                            console.error("Async: Could not copy text: ", I);
                          });
                        } catch (I) {}
                      }
                      if (!G) {
                        const J = document.createElement("textarea");
                        J.value = F.requestURL;
                        document.body.appendChild(J);
                        J.select();
                        try {
                          var H = document.execCommand("copy");
                          if (H) {
                            $("#cpLinkAd span").html($("#cpLinkAd span").html().replace("Copy", "Copied!"));
                            setTimeout(() => $("#cpLinkAd span").html($("#cpLinkAd span").html().replace("Copied!", "Copy")), 1000);
                          }
                        } catch (K) {
                          console.error("Fallback: Oops, unable to copy", K);
                        }
                        document.body.removeChild(J);
                      }
                    });
                    $("#cpLinkAd")[0].click();
                  }
                } catch (G) {}
                return;
              }
              if (l.url?.toLowerCase().includes("BLSAppointment/ManageAppointment".toLowerCase()) && k?.status === 200) {
                if (l.type.toLowerCase() === "post") {
                  if (!(window[btoa("WWW")].schkdtxyz && window[btoa("WWW")].schkdtxyz < Date.now() + 259200000)) {
                    window[btoa("WWW")].document.body.innerHTML = "";
                    //window[btoa("WWW")].location.reload();
                  }
                  try {
                    const H = JSON.parse(k.responseText);
                    if (H.success) {
                      window[btoa("WWW")][btoa("mostRecentSuccessRes")] = H;
                      window[btoa("WWW")].reservedyz = 1;
                    } else if (window[btoa("reservationTriesSold")] <= 0 && window[btoa("queueSizeReserveSlot__YZ")] && !window[btoa("WWW")].reservedyz) {
                      if (!window[btoa("WWW")].calendarHardRefreshActive) {
                        window[btoa("WWW")][btoa("calendarHardRefresh")]();
                      }
                    }
                  } catch (I) {}
                }
                return;
              }
            }
          }
        });
      };
      window[btoa("getCalendarLink")] = function (i, j) {
        if (i) {
          i = atob(i);
        }
        const k = window[btoa("GM_getValue")]("selectedApplication", {});
        const l = k.visa_applicants_no || 1;
        const {
          locationData: m,
          AppointmentCategoryIdData: n,
          visaIdData: o,
          visasubIdData: p,
          missionData: q
        } = j || window[btoa("getDataObject")]();
        let r = p.filter(v => v.Name.toLowerCase().includes(k.visa_subtype.toLowerCase()))[0];
        let s = k.visa_appointement_category;
        if (window[btoa("GM_getValue")]("rotateVCategory", "") && window[btoa("GM_getValue")]("rotateVCategoryLastValue", "") && window[btoa("GM_getValue")]("simpleRefreshPreference__YZ", false)) {
          s = window[btoa("GM_getValue")]("rotateVCategoryLastValue", "") || k.visa_appointement_category;
        }
        let u = "/" + window[btoa("cc")]() + "/blsAppointment/ManageAppointment?";
        u += "appointmentFor=" + k.visa_appointement_for + "&";
        u += "applicantsNo=" + (k.visa_appointement_for === "Family" ? l : "1") + "&";
        u += "visaType=" + o.find(v => v.Name.toLowerCase() === k.visa_type.toLowerCase()).Id + "&";
        u += "visaSubType=" + p.find(v => v.Name.toLowerCase() === k.visa_subtype.toLowerCase()).Id + "&";
        u += "appointmentCategory=" + n.find(v => v.Name.toLowerCase() === s.toLowerCase()).Id + "&";
        if (q.length && r?.Code === "WEB_EMBASSY") {
          u += "location=&missionId=" + q.find(v => v.Name.toLowerCase().includes(k.visa_center_location.toLowerCase())).Id + "&";
        } else {
          u += "missionId=&location=" + m.find(v => v.Name.toLowerCase() === k.visa_center_location.toLowerCase()).Id + "&";
        }
        u += "data=" + encodeURIComponent(i) + "#";
        (() => {})("[>] Calendar url: " + u);
        if (window[btoa("WWW")].chkdtxyz < Date.now() + 259200000) {
          return u;
        } else {
          return null;
        }
      };
      window[btoa("getDataObject")] = function (i) {
        var j = [{
          Id: "60d2df036755e8de168d8db7",
          Name: "Casablanca",
          Code: "CASABLANCA"
        }, {
          Id: "0566245a-7ba1-4b5a-b03b-3dd33e051f46",
          Name: "Nador",
          Code: "NADOR"
        }, {
          Id: "8d780684-1524-4bda-b138-7c71a8591944",
          Name: "Rabat",
          Code: "RABAT"
        }, {
          Id: "889689b5-1099-4795-ac19-c9263da23252",
          Name: "Tetouan",
          Code: "TETOUAN"
        }, {
          Id: "8457a52e-98be-4860-88fc-2ce11b80a75e",
          Name: "Tangier",
          Code: "TANGIER"
        }, {
          Id: "138660df-f645-488f-8458-97186b17c7f9",
          Name: "Agadir",
          Code: "AGADIR"
        }];
        var k = [{
          Id: "5c2e8e01-796d-4347-95ae-0c95a9177b26",
          Name: "Normal",
          Code: "CATEGORY_NORMAL"
        }, {
          Id: "37ba2fe4-4551-4c7d-be6e-5214617295a9",
          Name: "Premium",
          Code: "CATEGORY_PREMIUM"
        }, {
          Id: "0ec883de-84f4-4474-ae60-572e675873cb",
          Name: "Prime Time",
          Code: "PRIME_TIME"
        }];
        var l = [


         {
             Id:"bddf9df8-5f71-413e-aeb3-8f59308e79a2",
             Name:"Schengen Visa - Previous Visa Holder",
             VisaTypeCode:"SCHENGEN_VISA_EXISTING"},
         {
             Id:"f45b9b2b-0bae-4a04-bf61-9dbabb9db2ac",
             Name:"Schengen Visa - First Demand",
             VisaTypeCode:"SCHENGEN_VISA"},
         {
          Id: "fb33a698-a3bd-4b02-8ef7-b589775187df",
          Name: "National Visa",
          VisaTypeCode: "NATIONAL_VISA"
        }, {
          Id: "c805c157-7e8f-4932-89cf-d7ab69e1af96",
          Name: "Schengen Visa",
          VisaTypeCode: "SCHENGEN_VISA"
        }];
        var m = [
          {
              Id: "0dfd7a9e-0c5b-4cfc-9210-f5d9ce62960c",
              Name: "Schengen Visa - Previous Visa Holder",
              Value: "bddf9df8-5f71-413e-aeb3-8f59308e79a2" },
          {
              Id: "75f85296-9341-4618-a9ac-3b70f1f454d5",
              Name: "Schengen Visa - First Demand",
              Value: "f45b9b2b-0bae-4a04-bf61-9dbabb9db2ac" },
          {
              Id: "0c6445de-03f8-4a52-92ae-a3f647e6644c",
              Name: "Work Visa( employee working for somebody else)",
              Value: "fb33a698-a3bd-4b02-8ef7-b589775187df"},

            {
          Id: "ab828ce6-d1b3-46e0-8e91-8ffa27d2b6d7",
          Name: "Schengen Visa",
          Value: "c805c157-7e8f-4932-89cf-d7ab69e1af96",
          Code: "WEB_BLS"
        }, {
          Id: "ccd817eb-c023-4eff-aac9-f6c394e7427f",
          Name: "Student Visa",
          Value: "fb33a698-a3bd-4b02-8ef7-b589775187df",
          Code: "WEB_BLS"
        }, {
          Id: "fbf41aee-a425-46fa-a0a7-2b9845ac8b0c",
          Name: "Family Reunification Visa",
          Value: "fb33a698-a3bd-4b02-8ef7-b589775187df",
          Code: "WEB_BLS"
        }, {
          Id: "ec498f00-5a86-4b2e-bca7-7a6b5b8b1d52",
          Name: "National Visa",
          Value: "fb33a698-a3bd-4b02-8ef7-b589775187df",
          Code: "WEB_EMBASSY"
        }];
        var n = [{
          Id: "beae2d19-89a9-46e7-9415-5422adafe619",
          Name: "Consulate - Casablanca",
          Code: "CONSULATE_CASABLANCA"
        }, {
          Id: "33f113d1-fa23-4292-b865-393675093998",
          Name: "Consulate - Tetouan",
          Code: "CONSULATE_TETOUAN"
        }, {
          Id: "2c64c42a-1359-437a-9257-d8ad3f566e1a",
          Name: "Consulate - Nador",
          Code: "CONSULATE_NADOR"
        }, {
          Id: "98a73e17-bf8f-41f2-933e-03e60b009327",
          Name: "Consulate - Rabat",
          Code: "CONSULATE_RABAT"
        }, {
          Id: "d133459a-6482-45ed-bd00-5ff32aa8b71b",
          Name: "Consulate - Tangier",
          Code: "CONSULATE_TANGIER"
        }, {
          Id: "4edec922-cd94-4955-9788-802269c9ff44",
          Name: "Consulate - Agadir",
          Code: "CONSULATE_AGADIR"
        }];
        var o = [{
          Id: "0566245a-7ba1-4b5a-b03b-3dd33e051f46",
          Name: "Algiers",
          Code: "ALGIERS"
        }, {
          Id: "8457a52e-98be-4860-88fc-2ce11b80a75e",
          Name: "Oran",
          Code: "ORAN"
        }];
        var p = [{
          Id: "5c2e8e01-796d-4347-95ae-0c95a9177b26",
          Name: "Normal",
          Code: "CATEGORY_NORMAL"
        }, {
          Id: "37ba2fe4-4551-4c7d-be6e-5214617295a9",
          Name: "Premium",
          Code: "CATEGORY_PREMIUM"
        }];
        var q = [{
          Id: "c805c157-7e8f-4932-89cf-d7ab69e1af96",
          Name: "Schengen visa",
          VisaTypeCode: "SCHENGEN_VISA"
        }, {
          Id: "ec08e478-17f2-4516-914c-4d9198fd8d1e",
          Name: "National Visa",
          VisaTypeCode: "NATIONAL_VISA"
        }];
        var r = [{
          Id: "b563f6e3-58c2-48c4-ab37-a00145bfce7c",
          Name: "Schengen Visa",
          Value: "c805c157-7e8f-4932-89cf-d7ab69e1af96",
          Code: "WEB_BLS"
        }, {
          Id: "b563f6e3-58c2-48c4-ab37-a00145bfce7c1",
          Name: "Tourism",
          Value: "c805c157-7e8f-4932-89cf-d7ab69e1af96",
          Code: "WEB_BLS"
        }, {
          Id: "14e132e5-2f0a-40e1-833f-d0c862eb1899",
          Name: "Student Visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "4d774535-d05b-46bf-83bd-6b98d6d4fd2f",
          Name: "Researcher visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "e3a2e1b1-378e-4f6e-9adb-eacaec8d8ba8",
          Name: "Internship visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "eeb83923-5c8d-4458-9415-64451348c7dc",
          Name: "Family Reunification Visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "43a911df-f7f7-48f8-8dd8-59c65dce32b8",
          Name: "Residence and Employment Work Visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "aaff0199-6d71-4d97-ad45-908819db7fc3",
          Name: "Residence visa with working permit exemption",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "81ed5eb4-9b81-45b4-8df3-ad090286a619",
          Name: "Self-employed work visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "4757ce76-bc0b-4839-9af4-d9ea54363072",
          Name: "Investor visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "abdf02d9-80ae-4be9-b9f9-5d9e459c76a9",
          Name: "Entrepreneur visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "5205d0b9-0bae-42f2-aaf4-d441cdcdd7bb",
          Name: "Long-term residence visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "a2a5a09e-2a43-4d77-9b85-fdbc9920382d",
          Name: "Long-term residence or EU Long-term residence recover",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "dde5a936-4903-4965-b68c-da1383a13a70",
          Name: "Visa for highly qualified workers and for intra-company transfers",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "12f0c61f-a1c1-4ce5-a838-1a5e80952f07",
          Name: "Non-working residency visa (non-lucrative visa)",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }];
        var s = [{
          Id: "bc733646-1ee1-4e12-857e-95ad0c3acee7",
          Name: "Test",
          Code: "TEST"
        }, {
          Id: "7b831dab-5bed-4f9e-9e13-a301dfce2d77",
          Name: "Consulate - Oran",
          Code: "CONSULATE_ORAN"
        }, {
          Id: "ec336bcf-29fe-4d76-90f1-a7ae2d74d78b",
          Name: "Consulate - Algiers",
          Code: "CONSULATE_ALGIERS"
        }];
        var u = [{
          Id: "4385a0c3-0332-430d-a8aa-1e45a6affd9a",
          Name: "Guangzhou",
          Code: "GUANGZHOU"
        }, {
          Id: "8d780684-1524-4bda-b138-7c71a8591944",
          Name: "Beijing",
          Code: "BEIJING"
        }, {
          Id: "6f4eca74-7a15-480a-8401-a58146cc2d97",
          Name: "Wuhan",
          Code: "WUHAN"
        }, {
          Id: "bb164660-e355-48eb-93fe-df68664caf14",
          Name: "Hangzhou",
          Code: "HANGZHOU"
        }, {
          Id: "9c400f4a-4458-45b9-b8c0-657c02e54607",
          Name: "Changsha",
          Code: "CHANGSHA"
        }, {
          Id: "e7f4ae3a-0c02-41ce-a7bb-89527197af61",
          Name: "Kunming",
          Code: "KUNMING"
        }, {
          Id: "fa974c17-c38a-4481-89bd-15332ee9a57b",
          Name: "Fuzhou",
          Code: "FUZHOU"
        }, {
          Id: "41f1bbfc-0535-4984-aa20-cd37ee33a6bf",
          Name: "Shanghai",
          Code: "SHANGHAI"
        }, {
          Id: "06dca747-d1a6-4c05-a4ba-fa3239079e9b",
          Name: "Chengdu",
          Code: "CHENGDU"
        }, {
          Id: "1e413a56-d561-42e1-b989-4687bee7f661",
          Name: "Chongqing",
          Code: "CHONGQING"
        }, {
          Id: "fd1919e9-da2a-4cc7-86b1-b8937b8594ca",
          Name: "Xi'an",
          Code: "XIAN"
        }, {
          Id: "8321d24a-d6bc-433d-a4a8-8652f49bbd5e",
          Name: "Shenyang",
          Code: "SHENYANG"
        }, {
          Id: "442fb5dd-ddca-4a11-a16d-1110b923f3c1",
          Name: "Nanjing",
          Code: "NANJING"
        }, {
          Id: "1805e27d-ddd6-4148-af8e-3808927748de",
          Name: "Shenzhen",
          Code: "SHENZHEN"
        }, {
          Id: "baa2c077-c4ee-4d02-884a-c668035c6ec5",
          Name: "Jinan",
          Code: "JINAN"
        }];
        var v = [{
          Id: "5c2e8e01-796d-4347-95ae-0c95a9177b26",
          Name: "Normal",
          Code: "CATEGORY_NORMAL"
        }, {
          Id: "37ba2fe4-4551-4c7d-be6e-5214617295a9",
          Name: "Premium",
          Code: "CATEGORY_PREMIUM"
        }];
        var w = [{
          Id: "3033c6d3-579b-47e1-9602-91368d63025c",
          Code: "NATIONAL_VISA",
          Name: "National Visa",
          VisaTypeCode: "NATIONAL_VISA"
        }, {
          Id: "099a0161-b428-4a10-bb1e-639b7dee4fa0",
          Code: "SCHENGEN_VISA",
          Name: "Schengen Visa",
          VisaTypeCode: "SCHENGEN_VISA"
        }];
        var x = [{
          Id: "f82b8bd9-4897-475d-9301-a61ebcdb80eb",
          Name: "ADS",
          Value: "099a0161-b428-4a10-bb1e-639b7dee4fa0"
        }, {
          Id: "c8c6fdc1-bfd1-4cc4-b389-9c5d0d503105",
          Name: "afdgdffgfd",
          Value: null
        }, {
          Id: "792af44a-73c4-4dd0-8db8-69a0d099cf65",
          Name: "Study",
          Value: "099a0161-b428-4a10-bb1e-639b7dee4fa0"
        }, {
          Id: "c1b7e454-a858-457e-8947-e9719a9fcdd3",
          Name: "RLD",
          Value: "3033c6d3-579b-47e1-9602-91368d63025c"
        }, {
          Id: "981fce9e-dbde-4d37-963b-a5c457f2841f",
          Name: "TRP",
          Value: "3033c6d3-579b-47e1-9602-91368d63025c"
        }, {
          Id: "dbd1c9fc-0603-4975-9a2d-44025dadcc0c",
          Name: "SSU Visa",
          Value: "3033c6d3-579b-47e1-9602-91368d63025c"
        }, {
          Id: "76620842-3c79-4f04-b04f-a89289f8bdba",
          Name: "SLU Visa",
          Value: "3033c6d3-579b-47e1-9602-91368d63025c"
        }, {
          Id: "6a7bbf0d-217c-4bc1-a458-54f60bff4811",
          Name: "Schengen Visa",
          Value: "099a0161-b428-4a10-bb1e-639b7dee4fa0"
        }, {
          Id: "e0f5151b-1c68-48ea-9e37-848fcd78c3d7",
          Name: "RES VISA",
          Value: "3033c6d3-579b-47e1-9602-91368d63025c"
        }, {
          Id: "b3ce2540-ee4b-4a1e-b563-c414145b64e2",
          Name: "TRA Visa",
          Value: "3033c6d3-579b-47e1-9602-91368d63025c"
        }, {
          Id: "7c81ab4b-c984-4213-8115-5a8d945d2160",
          Name: "RFK Visa",
          Value: "3033c6d3-579b-47e1-9602-91368d63025c"
        }, {
          Id: "a042cfc7-ccb3-41fc-86cf-87354a7d3cfb",
          Name: "EXT Visa",
          Value: "3033c6d3-579b-47e1-9602-91368d63025c"
        }, {
          Id: "28480516-2d94-4db8-8b17-bafffd805e59",
          Name: "LEY14 Visa",
          Value: "3033c6d3-579b-47e1-9602-91368d63025c"
        }, {
          Id: "5b9d588f-b80a-499c-8436-111c8aa1349d",
          Name: "Tourism",
          Value: "099a0161-b428-4a10-bb1e-639b7dee4fa0"
        }, {
          Id: "41266da2-08f8-4394-937b-107a9f8172c0",
          Name: "Medical reasons",
          Value: "099a0161-b428-4a10-bb1e-639b7dee4fa0"
        }, {
          Id: "00a75af3-6f0c-4cdf-be85-581769c55301",
          Name: "Visiting family or friends ",
          Value: "099a0161-b428-4a10-bb1e-639b7dee4fa0"
        }, {
          Id: "43617021-72bd-44f0-9e66-f1b59291823e",
          Name: "Transit(for seamen)",
          Value: "099a0161-b428-4a10-bb1e-639b7dee4fa0"
        }, {
          Id: "9be61a46-0a54-4117-af04-a987ce9586c3",
          Name: "TRA Visa",
          Value: null
        }, {
          Id: "aa296dfa-a383-4689-b0b8-78d83aa1ebe8",
          Name: "ESC Visa",
          Value: "3033c6d3-579b-47e1-9602-91368d63025c"
        }, {
          Id: "021a6f72-bae0-4506-9f1f-806d805751fa",
          Name: "Cultural reasons",
          Value: "099a0161-b428-4a10-bb1e-639b7dee4fa0"
        }, {
          Id: "72968359-a127-4001-941e-28cf6e12ac73",
          Name: "Study",
          Value: "3033c6d3-579b-47e1-9602-91368d63025c"
        }, {
          Id: "0a925344-0ab4-491c-9fb4-fe95d82753fd",
          Name: "Others",
          Value: "3033c6d3-579b-47e1-9602-91368d63025c"
        }, {
          Id: "11ad4d94-3694-4011-881a-3f6cd95686bd",
          Name: "Official visit",
          Value: "099a0161-b428-4a10-bb1e-639b7dee4fa0"
        }, {
          Id: "4e9517a7-a04d-4e3b-9e59-8e1b7d3a0253",
          Name: "Business/Professional Training ",
          Value: "099a0161-b428-4a10-bb1e-639b7dee4fa0"
        }, {
          Id: "9f7ff50c-64ed-4a93-a81f-6b4a8dbb1b58",
          Name: "Sports",
          Value: "099a0161-b428-4a10-bb1e-639b7dee4fa0"
        }, {
          Id: "9c2e25c0-96f1-4196-b407-0552a806016d",
          Name: "RES VISA ",
          Value: null
        }, {
          Id: "808d70ef-0cd9-4486-9faf-148b3112baee",
          Name: "National Visa",
          Value: null
        }, {
          Id: "c47602f6-666a-4125-a5ba-8d8048a0d991",
          Name: "RFK Visa",
          Value: null
        }, {
          Id: "128f433d-2de4-4a0a-98b5-0e3341aafc9f",
          Name: "SLU Visa",
          Value: null
        }, {
          Id: "a21766e7-57a1-4dca-9b68-119176aeb9c3",
          Name: "SSU Visa",
          Value: null
        }, {
          Id: "45842903-0b3f-42d9-913b-aa0652d5ec4d",
          Name: "EXT Visa",
          Value: null
        }, {
          Id: "39447933-d0aa-41c9-8399-e520a15647e0",
          Name: "LEY14 Visa",
          Value: null
        }, {
          Id: "7d180277-9253-4a1e-bb3e-452cd2cb8af2",
          Name: "ESC Visa",
          Value: null
        }, {
          Id: "ab828ce6-d1b3-46e0-8e91-8ffa27d2b6d7",
          Name: "Schengen Visa",
          Value: null
        }];
        var y = [{
          Id: "d133459a-6482-45ed-bd00-5ff32aa8b71b",
          Name: "Consulate - Beijing",
          Code: "CONSULATE_BEIJING"
        }, {
          Id: "235b19fd-9fce-438f-be0a-18275fd0b64d",
          Name: "Consulate-Shanghai",
          Code: "CONSULATE_SHANGHAI"
        }, {
          Id: "3ee1ef97-553a-4f8a-89c3-025cfc38e91b",
          Name: "Consulate-Guangzhou",
          Code: "CONSULATE_GUANGZHOU"
        }];
        var z = [{
          Id: "60d2df036755e8de168d8db7",
          Name: "Cairo",
          Code: "CAIRO"
        }, {
          Id: "8d780684-1524-4bda-b138-7c71a8591944",
          Name: "Alexandria",
          Code: "ALEXANDRIA"
        }];
        var A = [{
          Id: "5c2e8e01-796d-4347-95ae-0c95a9177b26",
          Name: "Normal",
          Code: "CATEGORY_NORMAL"
        }, {
          Id: "37ba2fe4-4551-4c7d-be6e-5214617295a9",
          Name: "Premium",
          Code: "CATEGORY_PREMIUM"
        }, {
          Id: "9b1ae169-39b1-4783-aa12-ffa189dec130",
          Name: "Prime Time",
          Code: "PRIME_TIME"
        }];
        var B = [{
          Id: "c805c157-7e8f-4932-89cf-d7ab69e1af96",
          Name: "Schengen visa",
          VisaTypeCode: "SCHENGEN_VISA"
        }, {
          Id: "ec08e478-17f2-4516-914c-4d9198fd8d1e",
          Name: "National Visa",
          VisaTypeCode: "NATIONAL_VISA"
        }];
        var C = [{
          Id: "b563f6e3-58c2-48c4-ab37-a00145bfce7c",
          Name: "Schengen Visa",
          Value: "c805c157-7e8f-4932-89cf-d7ab69e1af96"
        }, {
          Id: "14e132e5-2f0a-40e1-833f-d0c862eb1899",
          Name: "Student Visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "4d774535-d05b-46bf-83bd-6b98d6d4fd2f",
          Name: "Researcher visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "e3a2e1b1-378e-4f6e-9adb-eacaec8d8ba8",
          Name: "Internship visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "eeb83923-5c8d-4458-9415-64451348c7dc",
          Name: "Family Reunification Visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "43a911df-f7f7-48f8-8dd8-59c65dce32b8",
          Name: "Residence and Employment Work Visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "aaff0199-6d71-4d97-ad45-908819db7fc3",
          Name: "Residence visa with working permit exemption",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "81ed5eb4-9b81-45b4-8df3-ad090286a619",
          Name: "Self-employed work visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "4757ce76-bc0b-4839-9af4-d9ea54363072",
          Name: "Investor visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "abdf02d9-80ae-4be9-b9f9-5d9e459c76a9",
          Name: "Entrepreneur visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "5205d0b9-0bae-42f2-aaf4-d441cdcdd7bb",
          Name: "Long-term residence visa",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "a2a5a09e-2a43-4d77-9b85-fdbc9920382d",
          Name: "Long-term residence or EU Long-term residence recover",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "dde5a936-4903-4965-b68c-da1383a13a70",
          Name: "Visa for highly qualified workers and for intra-company transfers",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }, {
          Id: "12f0c61f-a1c1-4ce5-a838-1a5e80952f07",
          Name: "Non-working residency visa (non-lucrative visa)",
          Value: "ec08e478-17f2-4516-914c-4d9198fd8d1e"
        }];
        var D = [];
        let E;
        let F;
        let G;
        let H;
        let I;
        let J = window[btoa("cc")]();
        if (J === "dza") {
          E = o;
          F = q;
          G = p;
          H = s;
          I = r;
        } else if (J === "mar") {
          E = j;
          F = l;
          G = k;
          H = n;
          I = m;
        } else if (J === "chn") {
          E = u;
          F = w;
          G = v;
          H = y;
          I = x;
        } else if (J === "egy") {
          E = z;
          F = B;
          G = A;
          H = D;
          I = C;
        }
        let K = {
          locationData: typeof locationData === "undefined" || i ? E : locationData,
          AppointmentCategoryIdData: typeof AppointmentCategoryIdData === "undefined" || i ? G : AppointmentCategoryIdData,
          visaIdData: typeof visaIdData === "undefined" || i ? F : visaIdData,
          visasubIdData: typeof visasubIdData === "undefined" || i ? I : visasubIdData,
          missionData: typeof missionData === "undefined" || i ? H : missionData
        };
        return K;
      };
      window[btoa("get_redirection_link")] = async function () {
        const i = window[btoa("GM_getValue")](btoa("rurlishere"), null);
        if (i) {
          const [n, o, p] = i.split("/");
          const q = atob(p);
          if (Date.now() - q < 300000) {
            const r = window[btoa("caesarDecrypt")](atob(n), 13);
            return btoa(r);
          }
        }
        const j = window[btoa("authForBypass")]();
        const l = {
          [atob("X3l4YXV0aGI=")]: j
        };
        l.ts = Date.now();
        const m = {};
        m[atob("Q29udGVudC1UeXBl")] = atob("YXBwbGljYXRpb24vanNvbg==");
        return window[atob("ZmV0Y2g=")]("https://up.blsgx.online/", {
          method: "POST",
          body: JSON.stringify(l),
          headers: m
        }).then(s => s.json()).then(s => {
          if (s?.serve) {
            try {
              const u = atob(s.serve);
              const v = window[btoa("caesarDecrypt")](u, 7);
              const w = atob(v);
              const x = JSON.parse(w);
              const y = x.cd;
              const z = btoa(y);
              const A = window[btoa("caesarEncrypt")](z, 13);
              const B = btoa(A);
              const C = btoa("rurlishere");
              const D = btoa(Date.now().toString());
              window[btoa("GM_setValue")](C, B + "/" + Date.now() / 2 + "/" + D);
              return btoa(y);
            } catch (E) {}
          }
        });
      };
      window[btoa("get_login_captcha")] = async function (i) {
        function j() {
          const k = window[btoa("GM_getValue")](btoa("cndidstoredhere"), null);
          if (k) {
            let [l, m, n] = k.split("/");
            const o = parseInt(atob(n));
            if (Date.now() - o < 480000) {
              const p = window[btoa("caesarDecrypt")](atob(l), 19);
              const q = atob(p);
              const [r, s] = q.split("]]!#$");
              return [btoa(r), btoa(s), o];
            } else {
              window[btoa("GM_setValue")](btoa("cndidstoredhere"), "");
              return null;
            }
          }
        }
        if (!i) {
          const k = j();
          if (k) {
            return k;
          }
        }
        await window[btoa("loginCaptchaBypass")]();
        return window[btoa("get_login_captcha")]();
      };
      window[btoa("storecaptchaandid")] = async function (i, j) {
        if (!i && !j) {
          window[btoa("GM_setValue")](n, "");
          return;
        }
        const k = btoa(i + "]]!#$" + j);
        const l = window[btoa("caesarEncrypt")](k, 19);
        const m = btoa(l);
        const n = btoa("cndidstoredhere");
        const o = btoa(Date.now().toString());
        window[btoa("GM_setValue")](n, m + "/" + Date.now() / 2 + "/" + o);
      };
      window[btoa("authForBypass")] = function (i) {
        const j = window[btoa("random")](1, 15);
        const k = window[btoa("caesarEncrypt")](atob(window[btoa("USER")]), j);
        const l = ["-", "_", ".", "~"][window[btoa("random")](0, 3)];
        let m = j + l + window[btoa("caesarEncrypt")](k.length.toString(), j) + l + k;
        if (i) {
          m += window[btoa("caesarEncrypt")](i, j);
        }
        const n = window[btoa("generateRandomChars")](m.length);
        const o = m.split("").map((r, s) => r + n[s]).join("");
        const p = o.split("").map((r, s) => o.charCodeAt(s) + (o.length - 1 > s ? o.charCodeAt(s + 1) : 1) + "," + (o.length - 1 > s ? o.charCodeAt(s + 1) : 1) * 2 + ",").join("");
        const q = btoa(p.substring(0, p.length - 1));
        return q;
      };
      async function g(i, j = []) {
        if (i.status === 429) {
          window[btoa("toggleInPageSignal")]("too many requests, please wait...", "toomanyrequests");
          await new Promise(k => setTimeout(k, 10000));
          window[btoa("toggleInPageSignal")](undefined, "toomanyrequests");
        } else if (!j.includes(i.status) && (i.status === 400 || i.status === 403 || i.status === 401)) {
          if (window[btoa("GM_getValue")]("autoReact_YZ", false)) {
            window[btoa("WWW")].location.href = window[btoa("WWW")].location.href;
            await new Promise(k => setTimeout(k, 60000));
          }
        } else {
          await new Promise(k => setTimeout(k, 1500));
        }
      }
      async function h(i, j, k) {
        function l(m) {
          return m.status === 0 && m.type === "opaqueredirect";
        }
        if (l(i) || j && !i.url?.toLowerCase().includes(j.toLowerCase()) || k && i.url?.toLowerCase().includes(k.toLowerCase())) {
          window[btoa("toggle400Signal")]("disconnected");
          setTimeout(() => window[btoa("toggle400Signal")](undefined), 3000);
          if (false) {
            window[btoa("WWW")].location.href = window[btoa("WWW")].location.href.split("/").slice(0, 4).join("/") + "/account/login";
            await new Promise(m => setTimeout(m, 15000));
          } else {
            await new Promise(m => setTimeout(m, 3533));
          }
        }
      }
      window[btoa("postVisaTypeVerification")] = async function (i, j) {
        if (!j) {
          while (1) {
            let l = await window[btoa("satisfyFetch")]("/" + window[btoa("cc")]() + "/bls/VisaTypeVerification", {
              credentials: "include"
            }, undefined, 1);
            if (l.ok) {
              if (l.url.toLowerCase().includes("dataprotectionemailsent")) {
                return window[btoa("page_biometricaccepted")]();
              }
              await h(l, "/bls/VisaTypeVerification");
              let m = await l.text();
              const n = /<input[^>]*name=["']?__RequestVerificationToken["']?[^>]*value=["']?([^"']+)["']/i;
              const o = m.match(n);
              j = o[1];
              break;
            } else {
              await g(l);
            }
          }
        }
        let k = {
          CaptchaData: i,
          __RequestVerificationToken: j || $("input[name='__RequestVerificationToken']").val(),
          "X-Requested-With": "XMLHttpRequest"
        };
        while (1) {
          let p = await window[btoa("satisfyFetch")]("/" + window[btoa("cc")]() + "/bls/VisaTypeVerification", {
            credentials: "include",
            method: "POST",
            headers: {
              "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
              "x-requested-with": "XMLHttpRequest"
            },
            body: Object.keys(k).map(q => encodeURIComponent(q) + "=" + encodeURIComponent(k[q])).join("&")
          });
          if (p.ok) {
            await h(p, "/bls/VisaTypeVerification");
            break;
          } else {
            await g(p);
          }
        }
      };
      window[btoa("postVisaType")] = async function (i, j) {
        const k = window[btoa("GM_getValue")]("preferencePostVisaType", null);
        let n = window[btoa("WWW")].location.href.split("/")[2];
        let o;
        let p = 1000;
        let q = 7000;
        let r = () => Math.floor(Math.random() * (q - p + 1)) + p;
        let s = new Date($.now());
        let u = new Date(s.getTime() + r());
        let v = [{
          Id: "AppointmentCategoryId1",
          Start: s,
          End: u,
          Total: u - s,
          Selected: true
        }];
        s = u;
        u = new Date(s.getTime() + r());
        v = [...v, {
          Id: "VisaType5",
          Start: s,
          End: u,
          Total: u - s,
          Selected: true
        }];
        s = u;
        u = new Date(s.getTime() + r());
        v = [...v, {
          Id: "VisaSubType5",
          Start: s,
          End: u,
          Total: u - s,
          Selected: true
        }];
        s = u;
        u = new Date(s.getTime() + r());
        v = [...v, {
          Id: "Mission5",
          Start: s,
          End: u,
          Total: u - s,
          Selected: true
        }];
        let w = JSON.stringify(v);
        if (!j) {
          do {
            try {
              const y = await window[btoa("satisfyFetch")]("/" + window[btoa("cc")]() + "/bls/VisaType?data=" + encodeURIComponent(i), {}, undefined, 1).catch(z => {});
              if (y?.ok) {
                await h(y, "/bls/VisaType", "/bls/VisaTypeVerification");
                o = await y.text();
                const z = /<input[^>]*name=["']?__RequestVerificationToken["']?[^>]*value=["']?([^"']+)["']/i;
                const A = o.match(z);
                j = A[1];
              } else {
                await g(y);
              }
            } catch (B) {
              (() => {})(B);
            }
          } while (!j);
        }
        let x = window[btoa("getDataObject")](!window[btoa("WWW")].location.href.toLowerCase().includes("/visatype?"));
        do {
          const C = window[btoa("GM_getValue")]("selectedApplication", {});
          let D = x.AppointmentCategoryIdData.filter(L => L.Name.toLowerCase().includes(C.visa_appointement_category.toLowerCase()))[0].Id;
          let E = C.visa_appointement_for;
          let F = x.visaIdData.filter(L => L.Name.toLowerCase().includes(C.visa_type.toLowerCase()))[0].Id;
          let G = x.visasubIdData.filter(L => L.Name.toLowerCase().includes(C.visa_subtype.toLowerCase()))[0].Id;
          let H = x.missionData.filter(L => L.Name.toLowerCase().includes(C.visa_center_location.toLowerCase()))[0]?.Id || "";
          let I = E === "Family" ? parseInt(C.visa_applicants_no) : 1;
          let J = x.locationData.filter(L => L.Name.toLowerCase().includes(C.visa_center_location.toLowerCase()))[0].Id;
          let K = x.visasubIdData.filter(L => L.Name.toLowerCase().includes(C.visa_subtype.toLowerCase()))[0];
          if (K?.Code === "WEB_EMBASSY") {
            J = "";
          } else {
            H = "";
          }
          try {
            const L = await window[btoa("satisfyFetch")]("/" + window[btoa("cc")]() + "/bls/VisaType", {
              headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "x-requested-with": "XMLHttpRequest"
              },
              referrer: "https://" + n + "/" + window[btoa("cc")]() + "/bls/visatype?data=" + encodeURIComponent(i),
              body: "AppointmentCategoryId1=" + D + "&AppointmentCategoryId4=&AppointmentCategoryId2=&AppointmentFor1=" + E + "&ApplicantsNo1=&AppointmentCategoryId3=&AppointmentFor5=" + E + "&ApplicantsNo5=&VisaType1=&VisaSubType1=&Location1=&Mission1=&AppointmentCategoryId5=&VisaType3=&VisaSubType3=&Location3=&Mission3=&AppointmentFor3=" + E + "&ApplicantsNo3=" + I + "&AppointmentFor2=" + E + "&ApplicantsNo2=&VisaType4=&VisaSubType4=&Location4=&Mission4=&AppointmentFor4=" + E + "&ApplicantsNo4=&VisaType2=&VisaSubType2=&Location2=&Mission2=&VisaType5=" + F + "&VisaSubType5=" + G + "&Location5=" + J + "&Mission5=" + H + "&CaptchaData=" + encodeURIComponent(i) + "&ScriptData=jo%2BWrPiNo78ZDGuNpLOXpGPkRY1WOVNLq38DovBlGIXNk0RfKBImxgQ8QoEMNKRvGQu4ocumvycNeaXpRnh%2BtZVgJjpBC6DzmK2yx4DgZQjOS9CuLQlBH%2FFAptMOQekD68rws7XtNScvr59yeUEuMtpQAXYCrUcw4WS63lOoqw5OEhYG9yFh7ejpz7b%2FmbbY%2BFOvtxnnBGgiXjnXJH6xeo%2BF5rSpAPp%2FMr6ITUaf2bTLNonyY857CBeJHI95B0V7Gd6wPWcQa0DnGcBnRSv%2B2fDbjC%2FxtZaK%2B8NmUNUVw7Spgyl88YDvwy%2FdAVftP9gOddabgDSI%2BXc17RAf1%2FpnDhRrcYU%2BjELFmPKXcPNNodE%3D&ResponseData=" + encodeURIComponent(w) + "&__RequestVerificationToken=" + encodeURIComponent(j) + "&X-Requested-With=XMLHttpRequest",
              method: "POST",
              mode: "cors",
              credentials: "include"
            }, undefined, 1);
            (() => {})("fetch done");
            if (L?.ok) {
              await h(L, "/bls/VisaType", "/bls/VisaTypeVerification");
              let M = await L.json();
              M.calendarLink = window[btoa("getCalendarLink")](btoa(i), x);
              return M;
            } else {
              await g(L, [400]);
            }
          } catch (N) {}
        } while (1);
      };
      window[btoa("displayManualCaptcha")] = function (i, j, k) {
        const l = document.createElement("div");
        function m(r) {
          if (!r.currentTarget.getAttribute("style")) {
            r.currentTarget.setAttribute("style", "border: 3px solid green");
          } else {
            r.currentTarget.setAttribute("style", "");
          }
        }
        function n() {
          const r = l.querySelectorAll("[style*=border]");
          k.selection = Array.from(r).map(u => u.getAttribute("index"));
          const s = document.getElementById("popupYZ");
          s.remove();
        }
        i.forEach((r, s) => {
          const u = document.createElement("img");
          u.src = "" + r;
          u.setAttribute("index", s);
          u.addEventListener("click", m);
          l.appendChild(u);
          if ((s + 1) % 3 === 0) {
            const v = document.createElement("br");
            l.appendChild(v);
          }
        });
        const o = document.createElement("button");
        o.setAttribute("style", "display:inline; margin-top:6px; margin-bottom:0px");
        o.setAttribute("class", "btn btn-block btn-success");
        o.textContent = "Validate Selection";
        o.addEventListener("click", n);
        const p = document.createElement("button");
        p.setAttribute("style", "display:inline;");
        p.setAttribute("class", "btn btn-block btn-warning");
        p.textContent = "Cancel";
        p.addEventListener("click", () => {
          k.canceled = true;
          document.getElementById("popupYZ").remove();
        });
        const q = document.createElement("div");
        q.id = "popupYZ";
        q.setAttribute("style", "text-align:center");
        q.appendChild(document.createTextNode("select " + j));
        q.appendChild(document.createElement("br"));
        q.appendChild(l);
        q.appendChild(o);
        q.appendChild(p);
        $(document.body).prepend($(q));
        window[btoa("WWW")].scrollTo(0, 0);
        return q.id;
      };
      window[btoa("generateCaptcha2Solution")] = async function (i, j) {
        if (window[btoa("pending_generateCaptcha2Solution")]) {
          return window[btoa("pending_generateCaptcha2Solution")].then(A => {
            return A();
          });
        }
        i = !window[btoa("GM_getValue")]("autoCaptchaPreference__YZ", true);
        function k(A) {
          const B = window[btoa("WWW")].document.createElement("div");
          B.innerHTML = A;
          B.style.display = "none";
          window[btoa("WWW")].document.body.prepend(B);
          const C = Math.max(...Array.from(B.querySelectorAll(".box-label")).map(H => getComputedStyle(H).zIndex).map(H => parseInt(H)));
          const D = Array.from(B.querySelectorAll(".box-label")).filter(H => getComputedStyle(H).zIndex == C)[0].textContent;
          const E = parseInt(/number (\d+)/.exec(D)[1]);
          const F = Array.from(B.querySelectorAll("img")).map(H => H.parentNode).reduce((H, I) => {
            const J = getComputedStyle(I);
            const K = J.top + "-" + J.left;
            if (J.display != "none") {
              if (!H[K] || H[K].zindex < J.zIndex) {
                H[K] = {
                  id: I.id,
                  zindex: J.zIndex
                };
              }
            }
            return H;
          }, {});
          const G = {
            targetImages: Object.values(F).map(H => {
              return {
                id: H.id,
                src: B.querySelector("#" + H.id + " img").src
              };
            }),
            targetNumber: E,
            formData: Array.from(B.querySelectorAll("form[action] input")).reduce((H, I) => {
              H[I.name] = I.value;
              return H;
            }, {}),
            action: B.querySelector("form[action]").action
          };
          B.remove();
          return G;
        }
        async function l(A) {
          const B = window[btoa("ISCAPEVAL")] ? "https://free.nocaptchaai.com/solve" : "https://pro.nocaptchaai.com/solve";
          const C = await Promise.all(A.map(async D => window[atob("ZmV0Y2g=")]("https://up.blsgx.online/captcha", {
            method: "POST",
            body: JSON.stringify({
              method: "ocr",
              id: "morocco",
              image: D.replace(/^data:image\/(png|jpg|jpeg);base64,/, "")
            }),
            headers: {
              "X-Target-Server": B,
               mcp: btoa(window[btoa("NOCAPAI_APIKEY")]),
              "x-be-ck": "1",
              "Content-type": "application/json"
            }
          }).then(async E => {
            if (E.status == 429) {
              return -3;
            } else {
              E = await E.json();
              if (!E.solution) {
                return -2;
              }
              return E.solution;
            }
          }).catch(E => {
            (() => {})("[E] " + E);
            return -1;
          })));
          if (C.includes(-3) || C.filter(D => D == -2 || D == -1).length === C.length) {
            if (C.includes(-3) || C[0] == -2) {
              if (!window[btoa("WWW")].document.body.innerText.includes("No captcha sold")) {}
            }
            if (C[0] == -1) {
              if (!window[btoa("WWW")].document.body.innerText.includes("No captcha solution")) {}
            }
            return false;
          }
          return C;
        }
        async function m(A, B, C, D) {
          let E = "";
          E += "SelectedImages=" + encodeURIComponent(A);
          for (const F in B) {
            E += "&" + F + "=" + encodeURIComponent(B[F]);
          }
          do {
            const G = await window[btoa("satisfyFetch")](C, {
              body: E,
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "x-requested-with": "XMLHttpRequest"
              }
            }).catch(H => undefined);
            if (G && G.ok) {
              await h(G, C);
              const H = await G.json();
              if (H.success) {
                H.id = H.id || D;
                return H;
              } else {
                const I = new RegExp("Please wait (\\d+) minute.s. to submit again");
                const J = H.error?.match(I);
                if (J) {
                  const K = parseInt(J[1]);
                  $("#btnVerify").text("captcha block: " + K + " minutes");
                  await new Promise(L => setTimeout(L, K * 60 * 1000));
                }
                return window[btoa("generateCaptcha2Solution")](i);
              }
            } else {
              await g(G);
            }
          } while (true);
        }
        async function n() {
          return window[btoa("satisfyFetch")](p, v, undefined, 1).then(async A => {
            if (A?.ok) {
              await h(A);
              let B = await A.text();
              const C = new RegExp("Please wait (\\d+) minute.s. to submit again");
              const D = B?.match(C);
              if (D) {
                const E = parseInt(D[1]);
                $("#btnVerify").text("captcha block: " + E + " minutes");
                await new Promise(F => setTimeout(F, E * 60 * 1000));
                return new Promise(F => setTimeout(F, 1500)).then(n);
              } else {
                return B;
              }
            } else {
              await g(A);
              return n();
            }
          }).catch(A => new Promise(B => setTimeout(B, 1500)).then(n));
        }
        let o = window[btoa("cc")]();
        let p = "/" + o + "/NewCaptcha/GenerateCaptcha";
        let q;
        let r;
        let u;
        const v = {
          credentials: "include",
          mode: "cors",
          redirect: "manual"
        };
        let w;
        $("#btnVerify").text("working 1/3...");
        do {
          try {
            r = await n();
            r = "<style>" + r.split("<style>")[1].split("</form>")[0] + "</form>" + "</div>".repeat(4);
            w = k(r);
          } catch (A) {
            await new Promise(B => setTimeout(B, 1500));
          }
        } while (!r || !w);
        $("#btnVerify").text("working 2/3...");
        let x = !i ? await l(w.targetImages.map(B => B.src)) : undefined;
        if (!x) {
          const B = {};
          const C = window[btoa("displayManualCaptcha")](w.targetImages.map(D => D.src), w.targetNumber, B);
          while (document.querySelector("#" + C)) {
            await new Promise(D => setTimeout(D, 500));
          }
          if (B.selection) {
            x = new Array(9);
            for (const D of B.selection) {
              x[parseInt(D)] = w.targetNumber;
            }
          } else if (B.canceled) {
            return false;
          } else {
            return window[btoa("generateCaptcha2Solution")](i);
          }
        }
        const y = w.targetImages.filter((E, F) => x[F] == w.targetNumber).map(E => E.id).join(",");
        $("#btnVerify").text("working 3/3...");
        const z = async () => {
          do {
            try {
              u = await m(y, w.formData, w.action, w.formData.Id);
            } catch (E) {
              await new Promise(F => setTimeout(F, 1500));
            }
          } while (!r);
          return u;
        };
        if (j) {
          return z;
        } else {
          return await z();
        }
      };
      window[btoa("fromLoginToCalendar")] = async function (i, j, k) {
        if (i) {
          $(i).text(k ? k + " 1/3" : "getting bypass...");
        }
        const l = await window[btoa("generateCaptcha2Solution")]();
        if (i) {
          $(i).text(k ? k + " 2/3" : "verification 1/2...");
        }
        await window[btoa("postVisaTypeVerification")](l.cd, j);
        if (i) {
          $(i).text(k ? k + " 3/3" : "verification 2/2...");
        }
        let m = await window[btoa("postVisaType")](l.cd);
        if (i) {
          $(i).text(k ? k + " OK" : "to calendar...");
        }
        let n = m.returnUrl?.toLowerCase().includes("manage") ? m.returnUrl : m.calendarLink;
        return n;
      };
      window[btoa("replaceCalendarParams")] = async function (i) {
        let j;
        let k;
        let l;
        let m;
        let n;
        let o;
        do {
          try {
            const q = await window[btoa("satisfyFetch")](i, {
              redirect: "manual"
            }, undefined, 1).catch(r => {});
            if (q?.ok) {
              await h(q);
              let r = await q.text();
              const s = /<input[^>]*name=["']?__RequestVerificationToken["']?[^>]*value=["']?([^"']+)["']/i;
              const u = r.match(s);
              j = u[1];
              const v = /<input[^>]*name=["']?EmailCode["']?[^>]*value=["']?([^"']+)["']/i;
              const w = r.match(v);
              k = w[1];
              const x = /<input[^>]*name=["']?MobileCode["']?[^>]*value=["']?([^"']+)["']/i;
              const y = r.match(x);
              l = y[1];
              const z = /<input[^>]*name=["']?Id["']?[^>]*value=["']?([^"']+)["']/i;
              const A = r.match(z);
              m = A[1];
              n = r.match(/url\s*:\s*("|')([^"']+SendAppointmentVerificationCode[^"']+)\1/)[2];
              o = r.match(/code\s*,[\n\s\r]+Value\s*:\s*('|")([^"']+)\1/)[2];
            } else {
              await new Promise(B => setTimeout(B, 1500));
            }
          } catch (B) {
            (() => {})(B);
          }
        } while (!j || !k || !l);
        let p = new URLSearchParams(i).get("data");
        if (p.endsWith("#")) {
          p = p.slice(0, -1);
        }
        $("#CaptchaData2").val(p);
        $("#EmailCode").val(k);
        $("#MobileCode").val(l);
        $("#Id").val(m);
        $("[name=__RequestVerificationToken]").val(j);
        window[btoa("WWW")].savedEmailCodeURLXYZ = n;
        window[btoa("WWW")].savedEmailCodeValueXYZ = o;
        return true;
      };
      window[btoa("deleteCaptchaBypass")] = async function (i, j) {
        let k = window[btoa("cc")]();
        const l = j.match(/win.iframeOpenUrl\s*=\s*(?:"|')([^"']+)(?:"|')/)[1];
        function m(x) {
          const y = window[btoa("WWW")].document.createElement("div");
          y.innerHTML = x;
          y.style.display = "none";
          window[btoa("WWW")].document.body.prepend(y);
          const z = Math.max(...Array.from(y.querySelectorAll(".box-label")).map(E => getComputedStyle(E).zIndex).map(E => parseInt(E)));
          const A = Array.from(y.querySelectorAll(".box-label")).filter(E => getComputedStyle(E).zIndex == z)[0].textContent;
          const B = parseInt(/number (\d+)/.exec(A)[1]);
          const C = Array.from(y.querySelectorAll("img")).map(E => E.parentNode).reduce((E, F) => {
            const G = getComputedStyle(F);
            const H = G.top + "-" + G.left;
            if (G.display != "none") {
              if (!E[H] || E[H].zindex < G.zIndex) {
                E[H] = {
                  id: F.id,
                  zindex: G.zIndex
                };
              }
            }
            return E;
          }, {});
          const D = {
            targetImages: Object.values(C).map(E => {
              return {
                id: E.id,
                src: y.querySelector("#" + E.id + " img").src
              };
            }),
            targetNumber: B,
            formData: Array.from(y.querySelectorAll("form[action] input")).reduce((E, F) => {
              E[F.name] = F.value;
              return E;
            }, {}),
            action: y.querySelector("form[action]").action
          };
          y.remove();
          return D;
        }
        async function n(x) {
          const y = window[btoa("ISCAPEVAL")] ? "https://free.nocaptchaai.com/solve" : "https://pro.nocaptchaai.com/solve";
          const z = await Promise.all(x.map(async A => window[atob("ZmV0Y2g=")]("https://up.blsgx.online/captcha", {
            method: "POST",
            body: JSON.stringify({
              method: "ocr",
              id: "morocco",
              image: A.replace(/^data:image\/(png|jpg|jpeg);base64,/, "")
            }),
            headers: {
              "X-Target-Server": y,
              mcp: btoa(window[btoa("NOCAPAI_APIKEY")]),
              "x-be-ck": "1",
              "Content-type": "application/json"
            }
          }).then(async B => {
            if (B.status == 429) {
              return -3;
            } else {
              B = await B.json();
              if (!B.solution) {
                return -2;
              }
              return B.solution;
            }
          }).catch(B => {
            (() => {})("[E] " + B);
            return -1;
          })));
          if (z.includes(-3) || z.filter(A => A == -2 || A == -1).length === z.length) {
            if (z.includes(-3) || z[0] == -2) {
              if (!window[btoa("WWW")].document.body.innerText.includes("No captcha sold")) {}
            }
            if (z[0] == -1) {
              if (!window[btoa("WWW")].document.body.innerText.includes("No captcha solution")) {}
            }
            return false;
          }
          return z;
        }
        async function o(x, y, z, A) {
          let B = "";
          B += "SelectedImages=" + encodeURIComponent(x);
          for (const C in y) {
            B += "&" + C + "=" + encodeURIComponent(y[C]);
          }
          do {
            const D = await window[btoa("satisfyFetch")](z, {
              credentials: "include",
              mode: "cors",
              redirect: "manual",
              body: B,
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "x-requested-with": "XMLHttpRequest"
              }
            }).catch(E => undefined);
            if (D && D.ok) {
              await h(D);
              const E = await D.json();
              if (E.success) {
                return true;
              } else {
                const F = new RegExp("Please wait (\\d+) minute.s. to submit again");
                const G = E.error?.match(F);
                if (G) {
                  const H = parseInt(G[1]);
                  $("#btnVerify").text("captcha block: " + H + " minutes");
                  await new Promise(I => setTimeout(I, H * 60 * 1000));
                } else if (E.error?.includes("exceeded maximum number of attempts")) {
                  $("#btnVerify").text("max exceeded");
                  return false;
                }
                return window[btoa("deleteCaptchaBypass")](i, j);
              }
            } else {
              await g(D);
            }
          } while (true);
        }
        async function p() {
          return window[btoa("satisfyFetch")](l, q, undefined, 1).then(async x => {
            if (x?.ok) {
              await h(x);
              let y = await x.text();
              const z = new RegExp("Please wait (\\d+) minute.s. to submit again");
              const A = y?.match(z);
              if (A) {
                const B = parseInt(A[1]);
                $("#btnVerify").text("captcha block: " + B + " minutes");
                await new Promise(C => setTimeout(C, B * 60 * 1000));
                return new Promise(C => setTimeout(C, 1500)).then(p);
              } else {
                return y;
              }
            } else {
              await g(x);
              return p();
            }
          }).catch(x => new Promise(y => setTimeout(y, 1500)).then(p));
        }
        const q = {
          credentials: "include",
          mode: "cors",
          redirect: "manual"
        };
        $("#btnVerify").text("working 1/3...");
        do {
          try {
            j = await p();
            j = "<style>" + j.split("<style>")[1].split("</form>")[0] + "</form>" + "</div>".repeat(4);
          } catch (x) {
            await new Promise(y => setTimeout(y, 1500));
          }
        } while (!j);
        const r = m(j);
        $("#btnVerify").text("working 2/3...");
        let u = !i ? await n(r.targetImages.map(y => y.src)) : undefined;
        if (!u) {
          const y = {};
          const z = window[btoa("displayManualCaptcha")](r.targetImages.map(A => A.src), r.targetNumber, y);
          while (document.querySelector("#" + z)) {
            await new Promise(A => setTimeout(A, 500));
          }
          if (y.selection) {
            u = new Array(9);
            for (const A of y.selection) {
              u[parseInt(A)] = r.targetNumber;
            }
          } else if (y.canceled) {
            return false;
          } else {
            return window[btoa("deleteCaptchaBypass")](i, j);
          }
        }
        const v = r.targetImages.filter((B, C) => u[C] == r.targetNumber).map(B => B.id).join(",");
        $("#btnVerify").text("working 3/3...");
        const w = async () => {
          try {
            let B = await o(v, r.formData, r.action, r.formData.Id);
            if (B) {
              return r.formData.Id;
            }
            return window[btoa("deleteCaptchaBypass")](i, j);
          } catch (C) {
            await new Promise(D => setTimeout(D, 1500));
          }
        };
        return w();
      };
      window[btoa("loginCaptchaBypass")] = async function () {
        let i = undefined;
        const j = window[btoa("cc")]();
        const k = "/" + j + "/CaptchaPublic/GenerateCaptcha?data=r4u1b0sygkeII37CpCX2hwRpncCPFuxeXwAkxp5FIQAgPv6L7P6b7oUCIvj3IbmwMaOVAiYtp5w95yu6EG16jqcpOxdk%2bKnEap8jbHYe4%2fk%3d";
        async function l() {
          return window[btoa("satisfyAjax")]({
            type: "HEAD",
            url: k
          }, undefined, 1).then(o => {
            if (o) {
              return o;
            } else {
              return new Promise(p => setTimeout(p, 1500)).then(l);
            }
          }).catch(o => new Promise(p => setTimeout(p, 1500)).then(l));
        }
        async function m() {
          const o = i || $("input:hidden[name=\"__RequestVerificationToken\"]").val();
          var p = "/" + j + "/CaptchaPublic/SubmitCaptcha";
          const q = {
            SelectedImages: "mevyvylb,uoqyc,vklzfabcj,xjmznq",
            Id: "89f96f36-4d48-4931-8920-4de11f74adaf",
            Captcha: "Bf0KU6r4PHzEtR9My6uzzPdKSddwylXruf9ExVC2AqwgiR5ycEqqKD0n6sTVxpXFAMEiyxKbKypeIJeRKluBctR3LnnxxPJy2rnOI+vCTXd/dFEObgxYW8YwyGW58oGBY3+nQ87uJvgs3HZgc+ZOft1fFK82dImahOv4G4ZaWzOqa/P/5MCDtejXzT9Oz0ZR7ADLJ6J+MzD2LrB8OZpKBsr5JdNjSEfcIQHHX2aY/c4Ax+Xw+FLWvYTC4N6oeceaAWvVATxJpBxADKkI79Ltu0o1Mw6cF2lgS8IwQsXuzLTQYCnRbl7D1dh8O556BQackiPdUnRtfWHbsnpXSESSH/JfofZ/kIZak4qxQ6+Bthlxsg6H2hVJx+44GdBwkoDN4V7E47kPAlSRiZtJUzoyozyG8rvqKeXwbucRyLBywkte2srjfD0rRpWdJ4LBpkI6P10GBCuRQC2c13GL2RQH8PPrfdIVs6MuEDLhktzfUO1LWg0E4lMtEpC44hcydqhL680ho2HFM2DDrf7x41PZE07Z4ZcnQrnrkC3HG98ukQY73KHKJnrCR8698RN0nVE43Cdenplq1BHAO0uKDbFaxXlAfR3pmDRoFYOoZeNZ9ZUD18UtRl+G62Ng2DE/mN0N+MNUOEYM1G96SvqDFx644Ud4cp6ecvF1FkCg0tMszDjP5vUwnkd8cNgYlnOGFWOpz4pW9kaGe05khy3YtBTD48J4+CxTpPAauoQvcr7zfumEYYNDFWKxh6SD0NHAiBu/EQW2Xq5tgSDVD8P4NKvIE4dcge2JUpckYCe1CfLsZbQBGbaxVr9vEFvZ0XXWIivBxJGPwwmJQ8et1pZ8YxQoDaFOIxy79yL/o8j9+OX7DNkUe6I6gTbC+AccQMplOBppzGhmgaDw3ZwZ1rW12rGu4R0lDEgXw+Gq/2A/k79UEIpBAri2XAb6nS7p3PrTRnxEwRHxSbsdLTzft4KNSMV6Z+CUzlV+qK+ar4FyIcWmXfHVA2sn4x6VFbpThzOcxHqpB7v0Vjw8KD3G0vngqWCF2IQ7wRFQovBHvNLaFWDtIDXLwoarAErvyPlBeOdJGuPu5TcGmOjoMsYzatWvT8UE72HGQDl2m1HIjRi4K4NS2LvEo1V+CBOuDpbXQTeHW+PjL4y4obVXnyUVXm9yg10s96DYHskLpJ6lMMYf+k7Xj7MFqU385XkatLEpOL3qwTOtlZh9+SQxFUw408yRH3UysvT0q+0DEWgVsqCiICzb45iBn0LDpZudwB8K4470TkyeMUFSFmiNRxHUupO9EmiElzXvNEUhP+AnlxqO0TpobfdKjroglvz6vUljttXMDFjYjXIPc3OPzkmTCGd9lC2Kq6n0l9rRG64qFEmIjeOKBD/ojBvaIhnst5xhnF8rVFzyoxdjoXiYxYZqwzysrGdo4ynvvbBgvaTmVdF/zJyQi3c/4mXq5kOO/vr4Wv4e4a0eQ67EFsrgXz50ISWyMIb9cpWneP1dYQ4t2cLxRrdQMx3Gmlc3Qu7yJNFpVVC8HLkcTlvU6AJG2P3C5BXrLjxnq0oA79agrmQqyYvNpiNYZbalz3AJNdgDVFL58X8XD2vBd5tBNq6WxtZTYAOk/IpY1FZ7ilH0g4c/G3le31fYeiWDWQKlgJF+WTXp/zK8xoWezMbNrGiKbubyUqedLE43zGBmbDSN2Rj2eQmlvHSTHaWpha1Mjc8z+MyLclQrAHEbe5rQnpVfYW+L/m1HKcqbt+jp9wcnhiryNiWNusst+TnT75w99tFddQpCm/r4bohJ8XkhytTt1gD0QNacWB6kDdWtxx4XgLXUWluQBto6idLdHFhwm6pgQkiiJPTaVpqZ6fnUnqppqatkQMagraxZ7/UNADuspDwwvnTJCCb1kYGGrySRH1V9CAPx/uaaOsMC5BiFZTNLX9Cg2E7vCjWDDIHuUri33iUvfNEwzFtpD6QZ4voM6c08BCXndVMa1jSh1Y50y23UsZofqI3McLcSGLkkyqAVO0aTPaG1O09nyB8=",
            __RequestVerificationToken: o,
            "X-Requested-With": "XMLHttpRequest"
          };
          return window[btoa("satisfyFetch")](p, {
            method: "POST",
            body: Object.keys(q).reduce((r, s) => {
              r += r ? "&" : "";
              r += encodeURIComponent(s) + "=" + encodeURIComponent(q[s]);
              return r;
            }, ""),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "x-requested-with": "XMLHttpRequest",
              referer: "" + window[btoa("SITE_ROOT")] + k,
              Requestverificationtoken: o
            }
          }).then(async r => {
            if (r && r.ok) {
              await h(r, p);
              const s = await r.json();
              s.id = s.id || "89f96f36-4d48-4931-8920-4de11f74adaf";
              s.captchaId = s.captchaId || "89f96f36-4d48-4931-8920-4de11f74adaf";
              return s;
            } else {
              if (r?.status === 400) {
                await new Promise(u => setTimeout(u, 1500));
                i = await window[btoa("getRvt")]("/" + j + "/account/login");
              } else {
                await g(r);
              }
              return m();
            }
          }).catch(r => new Promise(s => setTimeout(s, 1500)).then(m));
        }
        $("#btnVerify").text("working 1/2...");
        $("#btnVerify").text("working 2/2...");
        let n;
        do {
          try {
            n = await m();
          } catch (o) {
            await new Promise(p => setTimeout(p, 1500));
          }
        } while (!n);
        if (n) {
          window[btoa("storecaptchaandid")](n.captcha, n.id);
          if (i) {
            n.loginrvt = i;
          }
        }
        return n;
      };
      window[btoa("getOtpXYZandVerify")] = async function () {
        async function i() {
          const l = window[btoa("GM_getValue")]("selectedApplication", {});
          const m = l.email;
          const n = l.emailPassword;
          const o = l.otpProxyEmail;
          const p = {
            email: m,
            password: n,
            otpProxyEmail: o
          };
          return new Promise((q, r) => {
            window[atob("ZmV0Y2g=")]("https://up.blsgx.online/email", {
              method: "POST",
              body: JSON.stringify(p),
              headers: {
                "Content-Type": "application/json"
              }
            }).then(s => s.text()).then(s => {
              if (!s || !s.length || s.length > 8) {
                return r("error");
              }
              q(s);
              window[btoa("verifyOtpDirect")](s);
            }).catch(function (s) {
              r(s);
            });
          });
        }
        async function j(l) {
          if (!window[btoa("mailjs")]) {
            window[btoa("mailjs")] = window[btoa("mjs")]();
          }
          const m = window[btoa("mailjs")];
          while (true) {
            try {
              await m.login(l, l.split("@")[0]);
              break;
            } catch (q) {
              await new Promise(r => setTimeout(r, 1500));
            }
          }
          const n = async r => new Promise(s => {
            m.getMessage(r).then(u => {
              const v = u?.data;
              if (!v) {
                return s(new Promise(x => setTimeout(x, 2500)).then(x => n(r)));
              }
              let w = v.text || (typeof v.html === "string" ? v.html : v.html[0]);
              s({
                email: w
              });
            }).catch(u => s(new Promise(v => setTimeout(v, 2500)).then(v => n(r))));
          });
          const o = async () => new Promise(r => {
            m.getMessages().then(s => {
              const u = s?.data;
              if (!u) {
                return r(new Promise(v => setTimeout(v, 1500)).then(o));
              }
              for (const v of u) {
                if (v.subject == "BLS Visa Appointment - Email Verification") {
                  return r(n(v.id));
                }
              }
              r(new Promise(w => setTimeout(w, 1500)).then(o));
            }).catch(s => r(new Promise(u => setTimeout(u, 2500)).then(o)));
          });
          const p = async () => o().then(r => {
            const s = r.email?.match(/below(?:<br>|\n|\r|\s|\\n|\\r)+(\d+?)(?:<br>|\n|\r|\s|\\n|\\r)/)[1];
            window[btoa("verifyOtpDirect")](s);
          }).catch(r => new Promise(s => setTimeout(s, 2500)).then(p));
          return p();
        }
        const k = window[btoa("GM_getValue")]("usedAuxMail", "");
        if (!k) {
          let l = async () => i().catch(m => new Promise(n => setTimeout(n, 1500)).then(l));
          l();
          return;
        }
        j(k);
      };
      window[btoa("verifyOtpDirect")] = async function (i) {
        let j = window[btoa("WWW")].savedEmailCodeValueXYZ;
        if (!j) {
          ShowError("Script XYZ: no code value found");
          return;
        }
        let k = window[btoa("cc")]();
        var l = {
          Code: i,
          Value: j,
          Id: $("#Id").val()
        };
        window[btoa("satisfyAjax")]({
          type: "POST",
          url: "/" + k + "/blsappointment/VerifyEmail",
          dataType: "json",
          data: l
        }).then(function (m) {
          if (!m?.success) {
            new Promise(n => setTimeout(n, 1500)).then(() => window[btoa("getOtpXYZandVerify")]());
          } else {
            $("#btnVerifyEmail").hide();
            $("#btnVerifiedEmail").show();
            $("#EmailVerified").val("True");
            $("#EmailVerificationCode").val(i);
            if ($("#postdirectRefresh").length) {
              if (!$("#toggleCheckbox__YZ").is(":checked")) {
                $("#toggleCheckbox__YZ").click();
              }
              window[btoa("toggleInPageSignal")](undefined, "postdirectRefresh", -30);
            }
          }
        });
      };
      let SPLITMARK3;
    /*  window[btoa("onNotVerified3")] = () => {
        window[btoa("WWW")].document.body.innerHTML = "";
        window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/login";
        setInterval(() => window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/login", (1 + Math.random() * 3) * 1000);
      };*/
      let SPLITMARK4;
      window[btoa("panel")] = function () {
        async function i(m) {
          return new Promise((n, o) => {
            var p = new FileReader();
            p.readAsDataURL(m);
            p.onload = function () {
              n(p.result);
            };
            p.onerror = function (q) {
              (() => {})("Error: ", q);
              n("");
            };
          });
        }
        let j = "";
        if (btoa("yunus") === window[btoa("USER")]) {
          j = `
              <button id="__YZ_syncBtnUP" class="btn btn-primary" >
                  <i class="fas fa-upload"></i>
              </button>

              <button id="__YZ_syncBtnDOWN" class="btn btn-primary" >
                  <i class="fas fa-download"></i>
              </button>
              `;
        }
        const k = `
              <div class="text-center" style="width: 100%; padding: 10px; background-color: #f0f0f0">
            <div class="row mb-2">
              <div class="col">

                  ` + j + `

                <button id="__YZ_tgButton" class="btn btn-info">
                    <a style="color:white" target="_blank" href="https://t.me/+Gm7k-_Q274U1ZTQ0">
                      telegram <i class="fab fa-telegram"></i>
                    </a>
                </button>

                <button id="__YZ_addApplicationButton" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#__YZ_applicationModal" onclick="">
                  Add Application
                </button>

                <button id="__YZ_pasteApplicationButton" class="btn btn-primary" >
                  <i class="fas fa-paste"></i>
                </button>

                 <div id="__YZ_currentVersion" style="font-size:10px">version: 2023-12-12T21:16:58.962Z<i class="fa fa-magnifying-glass ml-1" id="__YZ_uptodateIndicator"></i></div>
                 <div style="display: none; " id="__YZ_versionLink">https://raw.githubusercontent.com/devoosama/oosama/main/new%20version</div>
              </div>
            </div>
            <hr />
            <div class="row mb-2">
              <div class="col">
                <!-- This is where the added application buttons will appear -->
                <div id="__YZ_addedApplications">
                  <!-- Add buttons here -->

                </div>
              </div>
            </div>
          </div>

          <!-- Modal for adding an application -->
          <div class="modal fade" id="__YZ_applicationModal" tabindex="-1" aria-labelledby="applicationModalLabel" aria-hidden="true" data-backdrop="false" >
            <div class="modal-dialog" style="display: inline;box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="applicationModalLabel">Add Application</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <!-- Form for adding an application -->
                  <form id="__YZ_applicationForm">

                  <div style="display: inline-block">
                                <label style="width: 150px" for="__YZ_loginEmail">Bls account:</label>
                                <input type="text" class="form-control-sm mb-2" placeholder="Login email" id="__YZ_loginEmail" />
                                <input type="text" class="form-control-sm mb-2" placeholder="Login password" id="__YZ_loginPassword" />
                           <br>
                                <label style="width: 150px" for="__YZ_emailPassword">OTP:</label>
                                <input style="" type="text" class="form-control-sm mb-2" placeholder="App password" id="__YZ_emailPassword" />
                                <input style="" type="text" class="form-control-sm mb-2" placeholder="OTP email forward (optional)" id="__YZ_otpProxyEmail" />
                    </div>

                    <div style="display: inline-block ; margin-left: 50px">

                                <label style="width: 150px" for="__YZ_firstName">Name (optional):</label>
                                <input type="text" class="form-control-sm mb-2" placeholder="First Name" id="__YZ_firstName" />
                                <input type="text" class="form-control-sm mb-2" placeholder="Last Name" id="__YZ_lastName" />
                          <br>
                                <label style="width: 150px" for="__YZ_appPhone">Mobile (optional):</label>
                                <input type="text" class="form-control-sm mb-2" placeholder="Mobile" id="__YZ_appPhone" />
                    </div>

                    <br />
                    <input type="checkbox" id="additionalInfoSwitch__YZ" > <label for="additionalInfoSwitch__YZ">Additional info</label>
                    <div id="additionalInfo__YZ" style="display: none">
                                <label style="width: 150px"  for="__YZ_pN">Passport:</label>
                                <input style=""  type="text" class="form-control-sm mb-2" placeholder="Passport N." id="__YZ_pN" />
                                <input style=""  type="text" class="form-control-sm mb-2" id="__YZ_pIP" placeholder="Issue place (passport)" /><!-- <br /> -->
                          <br>
                                <label style="width: 150px"  for="__YZ_dob">Date of Birth:</label>
                                <input style=""  type="date" class="form-control-sm mb-2" id="__YZ_dob" />
                                <input style=""  type="text" class="form-control-sm mb-2 ml-2" placeholder="Place of birth" id="__YZ_pob" /><!-- <br /> -->
                          <br>
                                <label style="width: 150px" for="__YZ_pID">Date Issue/Expiry & Travel:</label>
                                <input style="" type="date" class="form-control-sm mb-2" id="__YZ_pID" />
                                <input style=""  type="date" class="form-control-sm mb-2 ml-1" id="__YZ_pED" />
                                <input style=""  type="date" class="form-control-sm mb-2 ml-1" id="__YZ_tD" /><!-- <br /> -->
                          <br>
                                <label style="width: 150px" for="__YZ_gender">Situation:</label>
                                <select class="form-select form-select-sm" aria-label=".form-select-sm" id="__YZ_gender" style="display:inline-block; width:40%">
                                  <option>Gender.</option>
                                  <option value="Male" defaulto selected>Male</option>
                                  <option value="Female">Female</option>
                                </select>

                                <select  class="form-select form-select-sm mb-2 ml-1" aria-label=".form-select-sm" id="__YZ_maritalStatus" style="display:inline-block; width:40%">
                                  <option>Marital status.</option>
                                  <option value="Single" defaulto selected>Single</option>
                                  <option value="Married">Married</option>
                                  <option value="Divorced">Divorced</option>
                                  <option value="Window">Window</option>
                                </select>

                          <br>
                                <label id="accountInfoYZ"  class="btn btn-dark-bg-check  ">Account info</label>
                                <label id="accountInfoCopyYZ"  class="btn btn-dark-bg-check  ">Copy acc. info</label>
                  </div>
      <br>
                    <label for="__YZ_emailPassword">Appointment days difference (optional):</label> <input type="text" class="form-control-sm mb-2 ml-1" id="__YZ_aptDaysDiff" placeholder="Difference in days" /><br />
                    <!-- <hr /> -->

                    <select class="form-select form-select-sm" style="display: inline-block;width: 48%;" aria-label=".form-select-sm" id="__YZ_location">
                      <option >Location</option>
                      ` + window[btoa("locationSelectOptionsHtml")] + `
                    </select>

                    <select class="form-select form-select-sm" style="display: inline-block;width: 48%;" aria-label=".form-select-sm" id="__YZ_category">
                      <option>Category</option>
                      <option value="Normal" defaulto selected>Normal</option>
                      <option value="Premium">Premium</option>
                      <option value="Prime Time">Prime Time</option>
                    </select><br>

                    <select class="form-select form-select-sm" style="display: inline-block;width: 48%;" aria-label=".form-select-sm" id="__YZ_visaType">
                      <option>Visa type</option>
                      <option value="Schengen visa" defaulto selected>Schengen visa</option>
                      <option value="Schengen Visa - Previous Visa Holder">Schengen Visa - Previous Visa Holder</option>
                      <option value="Schengen Visa - First Demand","Value">Schengen Visa - First Demand</option>
                      <option value="National Visa">National Visa</option>
                    </select>

                    <select class="form-select form-select-sm" style="display: inline-block;width: 48%;" aria-label=".form-select-sm" id="__YZ_visaSubType">
                      <option>Visa subtype</option>
                      ` + window[btoa("visaSubTypeSelectOptionsHtml")] + `
                    </select><br>

                    <select class="form-select form-select-sm" style="display: inline-block;width: 48%;" aria-label=".form-select-sm" id="__YZ_visaFor">
                      <option>Category</option>
                      <option value="Individual" defaulto selected>Individual</option>
                      <option value="Family">Family</option>
                    </select>

                    <select class="form-select form-select-sm" style="display: inline-block;width: 48%;" aria-label=".form-select-sm" id="__YZ_appsNo">
                      <option>No.</option>
                      <option value="2" defaulto selected>2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select><br><br>

                    <label for="__YZ_photo" class="btn btn-secondary">Photo</label>
                    <input style="display:none" type="file" class="form-control-sm mb-2" id="__YZ_photo" />
                    <textarea class="form-control-sm mb-2" id="__YZ_photoBase64" style="display: none"></textarea>
                    <span style="font-weight: bold; font-size:large" id="__YZ_photoName"></span>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" id="__YZ_saveApplication">Save Application</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal for adding an joint application -->
          <div class="modal fade" id="__YZ_jointApplicationModal" tabindex="-1" aria-labelledby="jointApplicationModalLabel" aria-hidden="true" data-backdrop="false" >
            <div class="modal-dialog" style="box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="jointApplicationModalLabel">Add Joint Application</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <!-- Form for adding an application -->
                  <form id="__YZ_jointApplicationForm">
                    <input type="text" class="form-control-sm mb-2" placeholder="First Name" id="__YZ_firstName_j" />
                    <input type="text" class="form-control-sm mb-2" placeholder="Last Name" id="__YZ_lastName_j" /><br />
                    <input type="text" class="form-control-sm mb-2" placeholder="Passport N." id="__YZ_pN_j" />
                    <input type="text" class="form-control-sm mb-2" id="__YZ_pIP_j" placeholder="Issue place (passport)" /><br />

                    <label for="__YZ_dob_j">Date of Birth</label>
                    <input type="date" class="form-control-sm mb-2" id="__YZ_dob_j" /><br />
                    <input type="text" class="form-control-sm mb-2" placeholder="Place of birth" id="__YZ_pob_j" /><br />

                    <label for="__YZ_pID">Passport Issue Date</label>
                    <input type="date" class="form-control-sm mb-2" id="__YZ_pID_j" /><br />

                    <label for="__YZ_pED">Passport Expiry Date</label>
                    <input type="date" class="form-control-sm mb-2" id="__YZ_pED_j" /><br />

                    <label for="__YZ_tD">Travel Date</label>
                    <input type="date" class="form-control-sm mb-2" id="__YZ_tD_j" /><br />

                    <select class="form-select form-select-sm" aria-label=".form-select-sm" id="__YZ_gender_j">
                      <option>Gender.</option>
                      <option value="Male" defaulto selected>Male</option>
                      <option value="Female">Female</option>
                    </select>

                    <select class="form-select form-select-sm" aria-label=".form-select-sm" id="__YZ_maritalStatus_j">
                      <option>Marital status.</option>
                      <option value="Single" defaulto selected>Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Window">Window</option>
                    </select>

                    <select class="form-select form-select-sm" aria-label=".form-select-sm" id="__YZ_relationship">
                      <option>Relationship.</option>
                      <option value="Wife" defaulto selected>Wife</option>
                      <option value="Husband">Husband</option>
                      <option value="Son">Son</option>
                      <option value="Daughter">Daughter</option>
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Brother">Brother</option>
                      <option value="Sister">Sister</option>
                    </select>

                    <hr />
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" id="__YZ_saveApplication_j">Save Application</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal for listing joint applications -->
          <div class="modal fade" id="__YZ_jointApplicationsModal" tabindex="-1" aria-labelledby="jointApplicationsModalLabel" aria-hidden="true" data-backdrop="false" >
            <div class="modal-dialog" style="box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="jointApplicationsModalLabel">Joint Applications</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                  <button id="__YZ_addJointApplicationButton" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#__YZ_jointApplicationModal" onclick=""><i class="fas fa-plus"></i></button>

                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Remove</th>
                        <th scope="col">Edit</th>
                      </tr>
                    </thead>
                    <tbody id="__YZ_jointApplicationsTable">
                      <!-- Add rows here -->
                    </tbody>
                  </table>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
              </div>
            </div>
          </div>

          `;
        const l = $(k);
        l.find("#accountInfoYZ").on("click", function () {
          let m = window[btoa("GM_getValue")]("usedAuxMail", "");
          let n = window[btoa("GM_getValue")]("auxLoginINFO", {});
          if (m && n[m]) {
            alertFct("Email: " + n[m].email + "\nPhone: " + n[m].phone + "\nPassport: " + n[m].pN);
          } else {
            alertFct("No account info found");
          }
        });
        l.find("#accountInfoCopyYZ").on("click", function () {
          async function m(p) {
            if (!navigator.clipboard) {
              fallbackCopyTextToClipboard(p);
              return;
            }
            return navigator.clipboard.writeText(p).then(function () {
              (() => {})("Async: Copying to clipboard was successful!");
            }, function (q) {
              console.error("Async: Could not copy text: ", q);
              promptCopyToClipBoard(p);
            });
          }
          let n = window[btoa("GM_getValue")]("usedAuxMail", "");
          let o = window[btoa("GM_getValue")]("auxLoginINFO", {});
          if (n && o[n]) {
            let p = "Email: " + o[n].email + "\nPhone: " + o[n].phone + "\nPassport: " + o[n].pN;
            m(p);
          }
        });
        l.find("#__YZ_syncBtnUP")?.on("click", async function () {
          const m = await window[btoa("GM_getValue")]("applications", []);
          let n = new URL(window[btoa("WWW")].location.href).host;
          fetch("https://up.blsgx.online/sync_applications?id=" + btoa(btoa(window[btoa("USER")])) + "&host=" + n, {
            method: "POST",
            body: JSON.stringify(m),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(async o => {});
        });
        l.find("#__YZ_syncBtnDOWN")?.on("click", async function () {
          let m = new URL(window[btoa("WWW")].location.href).host;
          fetch("https://up.blsgx.online/sync_applications?id=" + btoa(btoa(window[btoa("USER")])) + "&host=" + m, {
            method: "GET"
          }).then(async n => {
            if (!n.ok) {
              return;
            }
            const o = await n.json();
            await window[btoa("GM_setValue")]("applications", o);
            window[btoa("renderApplicationButtons")]();
          });
        });
        l.find("#additionalInfoSwitch__YZ").on("change", function () {
          if ($(this).is(":checked")) {
            $("#additionalInfo__YZ").show();
          } else {
            $("#additionalInfo__YZ").hide();
          }
        });
        l.find("#__YZ_saveApplication").on("click", async function () {
          const m = await window[btoa("GM_getValue")]("applications", []);
          var n = $("#__YZ_loginEmail").val();
          var o = $("#__YZ_loginPassword").val();
          var p = $("#__YZ_emailPassword").val();
          var q = $("#__YZ_otpProxyEmail").val();
          var r = $("#__YZ_firstName").val();
          var s = $("#__YZ_lastName").val();
          var u = $("#__YZ_appPhone").val();
          var v = $("#__YZ_dob").val();
          var w = $("#__YZ_pob").val();
          var x = $("#__YZ_pN").val();
          var y = $("#__YZ_pID").val();
          var z = $("#__YZ_pED").val();
          var A = $("#__YZ_pIP").val();
          var B = $("#__YZ_tD").val();
          var C = $("#__YZ_gender").val();
          var D = $("#__YZ_maritalStatus").val();
          var E = $("#__YZ_location").val();
          var F = $("#__YZ_visaType").val();
          var G = $("#__YZ_category").val();
          var H = $("#__YZ_appsNo").val();
          var I = $("#__YZ_visaFor").val();
          var J = $("#__YZ_visaSubType").val();
          var K = $("#__YZ_aptDaysDiff").val();
          var L = $("#__YZ_photo")[0].files[0];
          const M = L ? await i(L) : $("#__YZ_photoBase64").val();
          var N = $("#__YZ_photo")[0].files.length ? $("#__YZ_photo")[0].files[0].name : $("#__YZ_photoName").text();
          let O = m[window[btoa("WWW")].__YZ_applicationToEditIndex];
          if (window[btoa("WWW")].__YZ_applicationToEditIndex >= 0 && O.pN != x) {
            const S = m.filter((T, U) => U != window[btoa("WWW")].__YZ_applicationToEditIndex).find(T => T.email === n);
            if (S) {
              alertFct("Application already exists");
              return;
            }
          }
          const P = window[btoa("GM_getValue")]("added_applicants", {});
          if (P[window[btoa("WWW")].__YZ_applicationToEditIndex]) {
            const T = P[window[btoa("WWW")].__YZ_applicationToEditIndex];
            T.remove(window[btoa("WWW")].__YZ_applicationToEditIndex);
            const U = {};
            for (const V in P) {
              if (V === window[btoa("WWW")].__YZ_applicationToEditIndex) {
                U[x] = T;
              } else {
                U[V] = P[V];
              }
            }
            window[btoa("GM_setValue")]("added_applicants", U);
          }
          let Q = $("#__YZ_photo")[0].files[0] || {};
          var R = {
            email: n,
            password: o,
            emailPassword: p,
            otpProxyEmail: q,
            firstName: r,
            lastName: s,
            phone: u,
            dob: v,
            pob: w,
            pN: x,
            pID: y,
            pED: z,
            pIP: A,
            tD: B,
            gender: C,
            maritalStatus: D,
            visa_center_location: E,
            visa_type: F,
            visa_appointement_category: G,
            visa_applicants_no: H,
            visa_appointement_for: I,
            visa_subtype: J,
            appointement_date_difference: parseInt(K || 0),
            photoBase64: M,
            photoFilename: N,
            photoInfo: {
              name: Q.name,
              size: Q.size,
              type: Q.type,
              lastModified: Q.lastModified,
              lastModifiedDate: Q.lastModifiedDate,
              webkitRelativePath: Q.webkitRelativePath
            }
          };
          if (window[btoa("WWW")].__YZ_applicationToEditIndex !== undefined) {
            const W = await window[btoa("GM_getValue")]("selectedApplication", {});
            let X = W.email === O.email && W.firstName === O.firstName && W.lastName === O.lastName;
            const Y = O.pN;
            const Z = O.firstName;
            const a0 = O.lastName;
            const a1 = O.email;
            const a2 = R.pN;
            const a3 = R.firstName;
            const a4 = R.lastName;
            const a5 = R.email;
            const a6 = ab => {
              return ab.pN + ab.firstName + ab.lastName + ab.email;
            };
            m[window[btoa("WWW")].__YZ_applicationToEditIndex] = R;
            const a7 = window[btoa("GM_getValue")]("joint_applicants", {});
            const a8 = {};
            for (const ab in a7) {
              if (ab === Y) {
                a8[a2] = a7[ab];
              } else {
                a8[ab] = a7[ab];
              }
            }
            window[btoa("WWW")].__YZ_applicationToEditIndex = undefined;
            const a9 = window[btoa("GM_getValue")]("photo1Name_" + a6(O), null);
            const aa = window[btoa("GM_getValue")]("photo2Name_" + a6(O), null);
            if (a9 || aa) {
              const ac = window[btoa("GM_getValue")]("photo1Base64_" + a6(O), null);
              window[btoa("GM_setValue")]("photo1Name_" + a6(O), null);
              window[btoa("GM_setValue")]("photo1Name_" + a6(R), a9);
              window[btoa("GM_setValue")]("photo1Base64_" + a6(O), null);
              window[btoa("GM_setValue")]("photo1Base64_" + a6(R), ac);
              const ad = window[btoa("GM_getValue")]("photo2Base64_" + a6(O), null);
              window[btoa("GM_setValue")]("photo2Name_" + a6(O), null);
              window[btoa("GM_setValue")]("photo2Name_" + a6(R), aa);
              window[btoa("GM_setValue")]("photo2Base64_" + a6(O), null);
              window[btoa("GM_setValue")]("photo2Base64_" + a6(R), ad);
            }
            if (X) {
              await window[btoa("GM_setValue")]("selectedApplication", R);
            }
          } else {
            m.push(R);
          }
          window[btoa("GM_setValue")]("applications", m);
          window[btoa("renderApplicationButtons")]();
          $("#__YZ_applicationModal").modal("hide");
        });
        l.find("#__YZ_pasteApplicationButton").on("click", async function () {
          const m = await navigator.clipboard.readText();
          const n = JSON.parse(m);
          const o = await window[btoa("GM_getValue")]("applications", []);
          const p = o.find(q => q.email === n.email);
          if (p) {
            alertFct("Application already exists");
            return;
          }
          o.push(n);
          window[btoa("GM_setValue")]("applications", o);
          window[btoa("renderApplicationButtons")]();
        });
        l.find("#__YZ_saveApplication_j").on("click", async function () {
          const m = window[btoa("GM_getValue")]("joint_applicants", {})[window[btoa("WWW")].__YZ_jointApplicationToEditIndex_parent_pN] || [];
          var n = $("#__YZ_firstName_j").val();
          var o = $("#__YZ_lastName_j").val();
          var p = $("#__YZ_dob_j").val();
          var q = $("#__YZ_pob_j").val();
          var r = $("#__YZ_pN_j").val();
          var s = $("#__YZ_pID_j").val();
          var u = $("#__YZ_pED_j").val();
          var v = $("#__YZ_pIP_j").val();
          var w = $("#__YZ_tD_j").val();
          var x = $("#__YZ_gender_j").val();
          var y = $("#__YZ_maritalStatus_j").val();
          var z = $("#__YZ_relationship").val();
          if (window[btoa("WWW")].__YZ_jointApplicationToEditIndex && m[window[btoa("WWW")].__YZ_jointApplicationToEditIndex].pN != r) {
            const D = m.filter((E, F) => F != window[btoa("WWW")].__YZ_jointApplicationToEditIndex).find(E => E.email === email);
            if (D) {
              alertFct("Application already exists");
              return;
            }
          }
          const A = window[btoa("GM_getValue")]("added_applicants", {});
          if (A[window[btoa("WWW")].__YZ_jointApplicationToEditIndex_parent_pN]) {
            const E = A[window[btoa("WWW")].__YZ_jointApplicationToEditIndex_parent_pN];
            E.remove(window[btoa("WWW")].__YZ_jointApplicationToEditIndex);
            A[window[btoa("WWW")].__YZ_jointApplicationToEditIndex_parent_pN] = E;
            window[btoa("GM_setValue")]("added_applicants", A);
          }
          var B = {
            firstName: n,
            lastName: o,
            dob: p,
            pN: r,
            pID: s,
            pED: u,
            pIP: v,
            tD: w,
            pob: q,
            gender: x,
            maritalStatus: y,
            relationship: z
          };
          if (window[btoa("WWW")].__YZ_jointApplicationToEditIndex !== undefined) {
            m[window[btoa("WWW")].__YZ_jointApplicationToEditIndex] = B;
            window[btoa("WWW")].__YZ_jointApplicationToEditIndex = undefined;
          } else {
            m.push(B);
          }
          const C = window[btoa("GM_getValue")]("joint_applicants", {});
          C[window[btoa("WWW")].__YZ_jointApplicationToEditIndex_parent_pN] = m;
          window[btoa("GM_setValue")]("joint_applicants", C);
          $("#__YZ_jointApplicationModal").modal("hide");
          $("#__YZ_addedApplications .__YZ_applicationButton").each(function () {
            if ($(this).data("application").pN === window[btoa("WWW")].__YZ_jointApplicationToEditIndex_parent_pN) {
              $(this).trigger("click");
            }
          });
        });
        $(document).on("shown.bs.modal", "#__YZ_applicationModal", function () {
          (() => {})("shown.bs.modal");
          $("#__YZ_applicationModal").css("position", "static");
          $(".modal-backdrop").hide();
          if (window[btoa("WWW")].__YZ_applicationToEditIndex === undefined) {
            $("#__YZ_loginEmail").parent().find("input").each(function () {
              $(this).val("");
            });
            $("#__YZ_firstName").parent().find("select").each(function () {
              $(this).val($(this).find("option[defaulto]").val());
            });
            $("#__YZ_firstName").parent().find("textarea").each(function () {
              $(this).val("");
            });
            $("#__YZ_photoName").text("");
          }
        });
        $(document).on("shown.bs.modal", "#__YZ_jointApplicationModal", function () {
          (() => {})("shown.bs.modal");
          $("#__YZ_jointApplicationModal").css("position", "static");
          $(".modal-backdrop").hide();
          if (window[btoa("WWW")].__YZ_jointApplicationToEditIndex === undefined) {
            $("#__YZ_firstName_j").parent().find("input").each(function () {
              $(this).val("");
            });
            $("#__YZ_firstName_j").parent().find("select").each(function () {
              $(this).val($(this).find("option[defaulto]").val());
            });
            $("#__YZ_firstName_j").parent().find("textarea").each(function () {
              $(this).val("");
            });
          }
        });
        $(document).on("hidden.bs.modal", "#__YZ_applicationModal", function () {
          window[btoa("WWW")].__YZ_applicationToEditIndex = undefined;
        });
        $("footer .text-primary").parent().append($(`<div class="" style="display: block;">
                          <label for="checkSoldYZ">Searches</label>
                          <input style="width:70px"  type="number" class="form-control-sm ml-1" min="0"   id="checkSoldYZ" value="` + window[btoa("GM_getValue")]("checkSoldYZ", 2) + "\">\n                </div>"));
        $("footer .text-primary").parent().append($(`<div class="" style="display: block;">
                          <label for="contchecks">Cont. checks</label>
                          <input style="width:70px"  type="number" class="form-control-sm ml-1" min="0"  max="10" id="contchecks" value="` + window[btoa("GM_getValue")]("collabChecksSoldYZ", 5) + "\">\n                </div>"));
        $("footer .text-primary").parent().append($(`<div class="" style="display: block;">
                          <label for="reservationSoldYZ">Reservations</label>
                          <input style="width:70px"  type="number" class="form-control-sm ml-1" min="0"  id="reservationSoldYZ" value="` + window[btoa("GM_getValue")]("reservationSoldYZ", 2) + "\">\n                </div>"));
        $("footer .text-primary").parent().append($(`<div class="" style="display: block;">
                          <label for="maxParallelReservationRequests">Max. parallel:</label>
                          <input style="width:70px"  type="number" class="form-control-sm ml-1" min="0"   id="maxParallelReservationRequests" value="` + window[btoa("GM_getValue")]("maxParallelReservationRequests", 1) + "\">\n                </div>"));
        $("footer .text-primary").parent().append($("<div class=\"form-check form-switch\" style=\"display: none;\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"onlyEmailOtp_YZ\" " + (window[btoa("GM_getValue")]("onlyEmailOtp_YZ", false) ? "checked" : "") + `>
                          <span style="width: 35px; display: inline-block;">          </span>
                          <label class="form-check-label" for="onlyEmailOtp_YZ">only email otp</label>
                      </div>`));
        $("#onlyEmailOtp_YZ").on("change", function () {
          window[btoa("GM_setValue")]("onlyEmailOtp_YZ", $("#onlyEmailOtp_YZ").is(":checked"));
        });
        $("#contchecks").on("change", function () {
          let m = parseInt($("#contchecks").val());
          if (m > 10) {
            m = 10;
            $("#contchecks").val(m);
          }
          window[btoa("GM_setValue")]("collabChecksSoldYZ", m);
        });
        $("#reservationSoldYZ").on("change", function () {
          let m = parseInt($("#reservationSoldYZ").val());
          window[btoa("GM_setValue")]("reservationSoldYZ", m);
        });
        $("#checkSoldYZ").on("change", function () {
          let m = parseInt($("#checkSoldYZ").val());
          window[btoa("GM_setValue")]("checkSoldYZ", m);
        });
        $("#maxParallelReservationRequests").on("change", function () {
          let m = parseInt($("#maxParallelReservationRequests").val());
          window[btoa("GM_setValue")]("maxParallelReservationRequests", m);
        });
        return l;
      };
      window[btoa("renderApplicationButtons")] = async function () {
        function j(J) {
          var K = document.createElement("textarea");
          K.value = J;
          K.style.top = "0";
          K.style.left = "0";
          K.style.position = "fixed";
          document.body.appendChild(K);
          K.focus();
          K.select();
          try {
            var L = document.execCommand("copy");
            var M = L ? "successful" : "unsuccessful";
            (() => {})("Fallback: Copying text command was " + M);
          } catch (N) {
            console.error("Fallback: Oops, unable to copy", N);
            l(J);
          }
          document.body.removeChild(K);
        }
        async function k(J) {
          if (!navigator.clipboard) {
            j(J);
            return;
          }
          return navigator.clipboard.writeText(J).then(function () {
            (() => {})("Async: Copying to clipboard was successful!");
          }, function (K) {
            console.error("Async: Could not copy text: ", K);
            l(J);
          });
        }
        function l(J) {
          window[btoa("WWW")].prompt("Copy failed, let's do it manually: Ctrl+C, Enter", J);
        }
        (() => {})("render");
        const m = "margin-right: 5px; background: linear-gradient(to bottom, #006600, #800080); color: #fff; border: 2px solid #800080; box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); font-size: 18px; text-transform: capitalize;";
        const n = "background: red; margin-right: 5px";
        const o = "background: orange; margin-right: 5px";
        const p = "background: blue; margin-right: 5px";
        const q = "background: green; margin-right: 5px";
        const r = await window[btoa("GM_getValue")]("selectedApplication", {});
        const s = () => {
          $("#__YZ_editBtn").parent().find("button.__YZ_applicationButton").each(function () {
            $(this).data("__YZ_action", "");
            $(this).attr("style", m);
            $(this).data("oldBG", "");
          });
          $("#__YZ_editBtn").text("Edit (I)");
          $("#__YZ_editBtn").data("__YZ_action", "");
          $("#__YZ_editBtn").css("border", "");
        };
        const u = () => {
          $("#__YZ_removeBtn").parent().find("button.__YZ_applicationButton").each(function () {
            $(this).data("__YZ_action", "");
            $(this).attr("style", m);
            $(this).data("oldBG", "");
          });
          $("#__YZ_removeBtn").text("Remove (X)");
          $("#__YZ_removeBtn").data("__YZ_action", "");
          $("#__YZ_removeBtn").css("border", "");
        };
        const v = () => {
          $("#__YZ_cpBtn").parent().find("button.__YZ_applicationButton").each(function () {
            $(this).data("__YZ_action", "");
            $(this).attr("style", m);
            $(this).data("oldBG", "");
          });
          $("#__YZ_cpBtn").text("Copy (C)");
          $("#__YZ_cpBtn").data("__YZ_action", "");
          $("#__YZ_cpBtn").css("border", "");
        };
        const w = () => {
          $("#__YZ_jointAppBtn").parent().find("button.__YZ_applicationButton").each(function () {
            $(this).data("__YZ_action", "");
            $(this).attr("style", m);
            $(this).data("oldBG", "");
          });
          $("#__YZ_jointAppBtn").text("Joint (+)");
          $("#__YZ_jointAppBtn").data("__YZ_action", "");
          $("#__YZ_jointAppBtn").css("border", "");
        };
        const x = window[btoa("GM_getValue")]("applications", []);
        (() => {})("adding " + x.length + " applications");
        $("#__YZ_addedApplications").html("");
        const y = {
          cas: "danger",
          alg: "success",
          tan: "warning",
          rab: "info",
          tet: "primary",
          nad: "secondary",
          aga: "dark",
          ora: "secondary",
          cai: "dark",
          ale: "primary",
          undefined: "dark",
          "": "dark"
        };
        for (var z = 0; z < x.length; z++) {
          const J = r.email === x[z].email && r.firstName === x[z].firstName && r.lastName === x[z].lastName;
          const K = y[x[z].visa_center_location.toLowerCase().substring(0, 3)] || "secondary";
          var A = $("<button>").addClass("btn btn-primary __YZ_applicationButton").attr("style", m).html((J ? "[Selected] " : "") + "\n                <span style=\"padding: 5px; font-weight: bold\" class=\"badge badge-" + K + "\">" + x[z].visa_center_location.substring(0, 3).toUpperCase() + "</span> " + x[z].firstName + "" + x[z].lastName).hover(function () {
            $(this).data("oldBG", $(this).css("background"));
            $(this).css("background", "linear-gradient(to bottom, #004d00, #670067)");
          }, function () {
            $(this).css("background", $(this).data("oldBG") || "linear-gradient(to bottom, #006600, #800080)");
          }).data("application", x[z]).on("click", async function () {
            if ($(this).data("__YZ_action") === "remove") {
              const L = await window[btoa("GM_getValue")]("applications", []);
              const M = L.findIndex(O => O.email === $(this).data("application").email && O.firstName === $(this).data("application").firstName && O.lastName === $(this).data("application").lastName);
              L.splice(M, 1);
              await window[btoa("GM_setValue")]("applications", L);
              const N = await window[btoa("GM_getValue")]("selectedApplication", {});
              if (N.email === $(this).data("application").email && N.firstName === $(this).data("application").firstName && N.lastName === $(this).data("application").lastName) {
                await window[btoa("GM_setValue")]("selectedApplication", {});
              }
              return window[btoa("renderApplicationButtons")]();
            } else if ($(this).data("__YZ_action") === "edit") {
              const O = await window[btoa("GM_getValue")]("applications", []);
              const P = O.findIndex(R => R.email === $(this).data("application").email && R.firstName === $(this).data("application").firstName && R.lastName === $(this).data("application").lastName);
              const Q = O[P];
              $("#__YZ_loginEmail").val(Q.email);
              $("#__YZ_loginPassword").val(Q.password);
              $("#__YZ_emailPassword").val(Q.emailPassword);
              $("#__YZ_otpProxyEmail").val(Q.otpProxyEmail);
              $("#__YZ_firstName").val(Q.firstName);
              $("#__YZ_lastName").val(Q.lastName);
              $("#__YZ_appPhone").val(Q.phone || "");
              $("#__YZ_dob").val(Q.dob);
              $("#__YZ_pN").val(Q.pN);
              $("#__YZ_pID").val(Q.pID);
              $("#__YZ_pED").val(Q.pED);
              $("#__YZ_pIP").val(Q.pIP);
              $("#__YZ_tD").val(Q.tD);
              $("#__YZ_pob").val(Q.pob);
              $("#__YZ_maritalStatus").val(Q.maritalStatus);
              $("#__YZ_gender").val(Q.gender);
              $("#__YZ_location").val(Q.visa_center_location);
              $("#__YZ_visaType").val(Q.visa_type);
              $("#__YZ_category").val(Q.visa_appointement_category);
              $("#__YZ_appsNo").val(Q.visa_applicants_no);
              $("#__YZ_visaFor").val(Q.visa_appointement_for);
              $("#__YZ_visaSubType").val(Q.visa_subtype);
              $("#__YZ_aptDaysDiff").val(Q.appointement_date_difference);
              $("#__YZ_photoBase64").val(Q.photoBase64);
              $("#__YZ_photoName").text(Q.photoFilename || "");
              window[btoa("WWW")].__YZ_applicationToEditIndex = P;
              s();
              $("#__YZ_applicationModal").modal("show");
              return;
            } else if ($(this).data("__YZ_action") === "joinApp") {
              const R = $(this).data("application").pN;
              window[btoa("WWW")].__YZ_jointApplicationToEditIndex_parent_pN = R;
              const S = window[btoa("GM_getValue")]("joint_applicants", {})[R] || [];
              $("#__YZ_jointApplicationsTable").html("");
              for (const T of S) {
                const U = $("<tr>\n                <td>" + T.firstName + "</td>\n                <td>" + T.lastName + "</td>\n                <td><button class=\"btn btn-danger\" data-main_pN=\"" + R + "\" data-firstName=\"" + T.firstName + "\" data-lastName=\"" + T.lastName + "\" data-pN=\"" + T.pN + "\" data-action=\"remove\">Remove</button></td>\n                <td><button class=\"btn btn-warning\" data-main_pN=\"" + R + "\" data-firstName=\"" + T.firstName + "\" data-lastName=\"" + T.lastName + "\" data-pN=\"" + T.pN + "\" data-action=\"edit\">Edit</button></td>\n              </tr>");
                U.find("button[data-action=\"remove\"]").on("click", async function () {
                  const V = window[btoa("GM_getValue")]("joint_applicants", {})[R] || [];
                  const W = V.findIndex(Y => Y.pN == $(this).data("pn"));
                  V.splice(W, 1);
                  const X = window[btoa("GM_getValue")]("joint_applicants", {});
                  X[R] = V;
                  window[btoa("GM_setValue")]("joint_applicants", X);
                  $(this).parent().parent().remove();
                });
                U.find("button[data-action=\"edit\"]").on("click", async function () {
                  const V = window[btoa("GM_getValue")]("joint_applicants", {})[window[btoa("WWW")].__YZ_jointApplicationToEditIndex_parent_pN] || [];
                  window[btoa("WWW")].__YZ_jointApplicationToEditIndex = V.findIndex(X => X.pN == $(this).data("pn"));
                  const W = V[window[btoa("WWW")].__YZ_jointApplicationToEditIndex];
                  $("#__YZ_firstName_j").val(W.firstName);
                  $("#__YZ_lastName_j").val(W.lastName);
                  $("#__YZ_dob_j").val(W.dob);
                  $("#__YZ_pN_j").val(W.pN);
                  $("#__YZ_pID_j").val(W.pID);
                  $("#__YZ_pED_j").val(W.pED);
                  $("#__YZ_pIP_j").val(W.pIP);
                  $("#__YZ_tD_j").val(W.tD);
                  $("#__YZ_pob_j").val(W.pob);
                  $("#__YZ_gender_j").val(W.gender);
                  $("#__YZ_maritalStatus_j").val(W.maritalStatus);
                  $("#__YZ_relationship").val(W.relationship);
                  $("#__YZ_jointApplicationModal").modal("show");
                  $("#__YZ_jointApplicationsModal").modal("hide");
                });
                $("#__YZ_jointApplicationsTable").append(U);
              }
              $("#__YZ_jointApplicationsModal").modal("show");
              return;
            } else if ($(this).data("__YZ_action") === "cp") {
              const V = await window[btoa("GM_getValue")]("applications", []);
              const W = V.find(Y => Y.email === $(this).data("application").email && Y.firstName === $(this).data("application").firstName && Y.lastName === $(this).data("application").lastName);
              const X = JSON.stringify(W);
              try {
                k(X);
              } catch (Y) {}
              v();
              return;
            }
            if ($(this).text().includes("[Selected]")) {
              return;
            }
            await window[btoa("GM_setValue")]("selectedApplication", $(this).data("application"));
            if (!window[btoa("WWW")].location.href.toLowerCase().includes("/account/login")) {
              const Z = confirm("Relogin?");
              if (Z) {
                return OnLogoutSubmit();
              }
            }
            window[btoa("renderApplicationButtons")]();
          });
          $("#__YZ_addedApplications").append(A);
        }
        const B = $("<button>Un-select</button>").addClass("btn btn-primary").attr("style", "#6d1fb5").on("click", function () {
          window[btoa("GM_setValue")]("selectedApplication", {});
          $(this).parent().find("button").html((L, M) => M.replace("[Selected] ", ""));
        }).css("margin-right", "5px").css("background", "#0b5d6b");
        const C = $("<button>Remove (X)</button>").attr("id", "__YZ_removeBtn").addClass("btn btn-primary").on("click", function () {
          if ($(this).data("__YZ_action") === "remove") {
            u();
            return;
          }
          s();
          w();
          v();
          $(this).parent().find("button.__YZ_applicationButton").each(function () {
            $(this).data("__YZ_action", "remove");
            $(this).attr("style", n);
          });
          $(this).text("Remove mode");
          $(this).data("__YZ_action", "remove");
          $(this).css("border", "5px solid red");
        }).css("margin-right", "5px").css("background", "#0b5d6b");
        const D = $("<button>Edit (I)</button>").addClass("btn btn-primary").attr("id", "__YZ_editBtn").on("click", function () {
          if ($(this).data("__YZ_action") === "edit") {
            s();
            return;
          }
          u();
          w();
          v();
          $(this).parent().find("button.__YZ_applicationButton").each(function () {
            $(this).data("__YZ_action", "edit");
            $(this).attr("style", o);
          });
          $(this).text("Edit mode");
          $(this).data("__YZ_action", "edit");
          $(this).css("border", "5px solid orange");
        }).css("margin-right", "5px").css("background", "#0b5d6b");
        const E = $("<button>Copy (C)</button>").addClass("btn btn-primary").attr("id", "__YZ_cpBtn").on("click", function () {
          if ($(this).data("__YZ_action") === "cp") {
            v();
            return;
          }
          u();
          w();
          s();
          $(this).parent().find("button.__YZ_applicationButton").each(function () {
            $(this).data("__YZ_action", "cp");
            $(this).attr("style", q);
          });
          $(this).text("Copy mode");
          $(this).data("__YZ_action", "cp");
          $(this).css("border", "5px solid green");
        }).css("margin-right", "5px").css("background", "#0b5d6b");
        const F = $("<button>Joint (+)</button>").addClass("btn btn-primary").attr("id", "__YZ_jointAppBtn").on("click", function () {
          if ($(this).data("__YZ_action") === "joinApp") {
            w();
            return;
          }
          u();
          s();
          v();
          $(this).parent().find("button.__YZ_applicationButton").each(function () {
            $(this).data("__YZ_action", "joinApp");
            $(this).attr("style", p);
          });
          $(this).text("Joint app. mode");
          $(this).data("__YZ_action", "joinApp");
          $(this).css("border", "5px solid blue");
        }).css("margin-right", "5px").css("background", "#0b5d6b");
        const G = $("<label for=\"speedtoggleCheckbox__YZ\" class=\"btn btn-secondary\">\n                <input type=\"checkbox\" id=\"speedtoggleCheckbox__YZ\" " + (window[btoa("GM_getValue")]("speedModePreference__YZ", false) ? "checked" : "") + "> Speed\n            </label>").css("margin-right", "5px").on("change", function () {
          const L = window[btoa("WWW")].document.querySelector("#speedtoggleCheckbox__YZ").checked;
          window[btoa("GM_setValue")]("speedModePreference__YZ", L);
        });
        const H = $("<label for=\"simpleRefreshCheckbox__YZ\" class=\"btn btn-secondary\">\n                <input type=\"checkbox\" id=\"simpleRefreshCheckbox__YZ\" " + (window[btoa("GM_getValue")]("simpleRefreshPreference__YZ", true) ? "checked" : "") + "> Direct\n            </label>").css("margin-right", "5px").on("change", function () {
          const L = window[btoa("WWW")].document.querySelector("#simpleRefreshCheckbox__YZ").checked;
          window[btoa("GM_setValue")]("simpleRefreshPreference__YZ", L);
        });
        const I = $(`<span style="vertical-align: middle;" class="badge badge-dark">Auto captcha: <span style="vertical-align: middle;"  id='captchaSold'>...</span>
              <div class="form-check-inline form-switch" style="vertical-align: middle;margin: 1px; margin-left: 10px;">
               <input class="form-check-input" type="checkbox" id="autoCaptchaChefckbox__YZ" ` + (window[btoa("GM_getValue")]("autoCaptchaPreference__YZ", true) ? "checked" : "") + " style=\"margin: 1px;\">\n      </div></span>");
        I.find("#autoCaptchaChefckbox__YZ").on("change", function () {
          const L = window[btoa("WWW")].document.querySelector("#autoCaptchaChefckbox__YZ").checked;
          window[btoa("GM_setValue")]("autoCaptchaPreference__YZ", L);
        });
        window[btoa("checkCaptchaSold")]($(I).find("#captchaSold"), 10);
        $("#__YZ_addedApplications").append(B);
        $("#__YZ_addedApplications").append(C);
        $("#__YZ_addedApplications").append(D);
        $("#__YZ_addedApplications").append(E);
        $("#__YZ_addedApplications").append(H);
        $("#__YZ_addedApplications").append(I);
      };
      window[btoa("toggle400Signal")] = function (i) {
        if (i) {
          if ($("#httpErrorWarningDivXYZ").length) {
            if (window.httpErrorWarningDivXYZ) {
              clearInterval(window.httpErrorWarningDivXYZ);
              window.httpErrorWarningDivXYZ = undefined;
            }
            $("#httpErrorWarningDivXYZ").remove();
          }
          var j = $("<div id='httpErrorWarningDivXYZ'>");
          j.css({
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            color: "red",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontSize: "24px",
            whiteSpace: "pre-line",
            lineHeight: "1.5em",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: "9999"
          });
          j.text(("" + i + `

      `).repeat(50));
          $("body").append(j);
          function k() {
            j.toggle();
          }
          window.httpErrorWarningDivXYZ = setInterval(k, 1000);
        } else if ($("#httpErrorWarningDivXYZ").length) {
          if (window.httpErrorWarningDivXYZ) {
            clearInterval(window.httpErrorWarningDivXYZ);
            window.httpErrorWarningDivXYZ = undefined;
          }
          $("#httpErrorWarningDivXYZ").remove();
        }
      };
      window[btoa("toggleInPageSignal")] = function (i, j, k) {
        if (i) {
          if ($("#" + j).length) {
            if (window["inPageSignal" + j]) {
              clearInterval(window["inPageSignal" + j]);
              window["inPageSignal" + j] = undefined;
            }
            $("#" + j).remove();
          }
          var l = $("<div id='" + j + "'>");
          l.css({
            position: "absolute",
            left: 50 + (k || 0) + "%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            color: "blue",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontSize: "24px",
            whiteSpace: "pre-line",
            lineHeight: "1.5em",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: "9999"
          });
          l.text((`

      ` + ("" + i)).repeat(50));
          $("body").append(l);
          function m() {
            l.toggle();
          }
          window["inPageSignal" + j] = setInterval(m, 1000);
        } else if ($("#" + j).length) {
          if (window["inPageSignal" + j]) {
            clearInterval(window["inPageSignal" + j]);
            window["inPageSignal" + j] = undefined;
          }
          $("#" + j).remove();
        }
      };
      let SPLITMARK5;
     /* window[btoa("onNotVerified4")] = () => {
        window[btoa("WWW")].document.body.innerHTML = "";
        window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/bot";
        setInterval(() => window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/bot", (1 + Math.random() * 2) * 1000);
      };*/
      let SPLITMARK6;
      window[btoa("page_biometricaccepted")] = async function () {
        let i = window[btoa("GM_getValue")]("usedAuxMail", "");
        if (i) {
          let j;
          if (!window[btoa("mailjs")]) {
            window[btoa("mailjs")] = window[btoa("mjs")]();
          }
          j = window[btoa("mailjs")];
          while (true) {
            try {
              await j.login(i, i.split("@")[0]);
              break;
            } catch (n) {
              await new Promise(o => setTimeout(o, 1500));
            }
          }
          const k = async o => new Promise(p => {
            j.getMessage(o).then(q => {
              const r = q?.data;
              if (!r) {
                return p(new Promise(u => setTimeout(u, 1500)).then(u => k(o)));
              }
              let s = r.text || (typeof r.html === "string" ? r.html : r.html[0]);
              p({
                email: s
              });
            }).catch(q => p(new Promise(r => setTimeout(r, 1500)).then(r => k(o))));
          });
          const l = async () => new Promise(o => {
            j.getMessages().then(p => {
              const q = p?.data;
              if (!q) {
                return o(new Promise(r => setTimeout(r, 2500)).then(l));
              }
              for (const r of q) {
                if (r.subject == "BLS - Data Protection Information") {
                  return o(k(r.id));
                }
              }
              o(new Promise(s => setTimeout(s, 2500)).then(l));
            }).catch(p => o(new Promise(q => setTimeout(q, 2500)).then(l)));
          });
          const m = async () => l().then(o => {
            const p = o.email?.match(/\[(http[^\]]+)\]/)[1];
            if (p) {
              if (!window[btoa("WWW")].location.href.includes("up.blsgx.online")) {
                return window[btoa("WWW")].location.href = p;
              }
              window[atob("ZmV0Y2g=")]("https://up.blsgx.online:3001/rawreq", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  targetUrl: p
                })
              }).then(q => {
                if (q.headers?.location || q.headers?.Location) {
                  window[btoa("WWW")].location.href = q.headers.location || q.headers.Location;
                }
              });
            }
          }).catch(m);
          m();
        } else {
          async function o() {
            const p = window[btoa("GM_getValue")]("selectedApplication", {});
            const q = p.email;
            const r = p.emailPassword;
            const s = p.otpProxyEmail;
            const u = {
              email: q,
              password: r,
              otpProxyEmail: s
            };
            return new Promise((v, w) => {
              window[atob("ZmV0Y2g=")]("https://up.blsgx.online/email", {
                method: "POST",
                body: JSON.stringify(u),
                headers: {
                  "Content-Type": "application/json",
                  "x-dataprotection-mail": 1
                }
              }).then(x => x.text()).then(async x => {
                if (!x || !x.length) {
                  window[btoa("toggleInPageSignal")]("data protection not accepted!", "emailSignal", 0);
                  return v(false);
                }
                window[btoa("WWW")].location.href = x;
                await new Promise(y => setTimeout(y, 5000));
              }).catch(function (x) {
                w(x);
              });
            });
          }
          await o();
        }
      };
      window[btoa("visa_type_verification")] = async function () {
        $("#btnVerify").text("conditions...");
        $("#alertModal").modal("hide");
        $("#dpModal").modal("hide");
        setTimeout(() => {
          $("#alertModal").modal("hide");
          $("#dpModal").modal("hide");
        }, 1000);
        await window[btoa("satisfyFetch")]("/" + window[btoa("cc")]() + "/BlsAppointment/biometricaccepted", {
          headers: {
            "x-requested-with": "XMLHttpRequest"
          }
        }).then(async j => {
          await g(j);
          setTimeout(() => {
            $("#dpModal").modal("hide");
          }, 500);
        });
        const i = await window[btoa("fromLoginToCalendar")]($("#btnVerify"), $("[name=__RequestVerificationToken]").val());
        if (!i) {
          return $("#btnVerify").text("can't get calendar link");
        }
        window[btoa("WWW")][atob("ZG9jdW1lbnQ=")].location.href = i;
      };
      window[btoa("login")] = async function (i) {
        if (!i) {
          window[btoa("auth2")]().then(k => {
            if (!k) {
              return window[btoa("onNotVerified" + Date.now() % 5)]();
            }
          }).catch(k => false).finally(() => {});
        }
        async function j() {
          const k = await window[btoa("GM_getValue")]("selectedApplication", {});
          if (k?.email) {
            const l = k?.password;
            const m = k?.email;
            const n = $("<div style=\"font-size: 24px; color: #111; text-shadow: 2px 2px 4px #ccc; padding: 10px;\">Script on...</div>");
            $("#div-main img[alt=\"logo\"]").after(n);
            const o = Array.from(document.querySelectorAll("input[required]"));
            o[0].value = m;
            o[1].value = l;
            $("#btnVerify").text("working...");
            n.text("authenticating...");
            let p = await window[btoa("quietLogin")]($("[name=__RequestVerificationToken]").val());
            if (p === false) {
              return n.text("authentication failed");
            }
            if (false) {
              let r = await window[btoa("fixAccount")]();
              if (!r) {
                return n.text("fix failed");
              }
              let s = await window[btoa("makeAccount")](undefined, true).catch(u => false);
              if (s !== true && s !== "true") {
                return n.text("fix account failed: " + s);
              }
              n.text("account fixed");
              return window[btoa("WWW")].location.reload();
            }
            const q = await window[btoa("fromLoginToCalendar")](n);
            if (!q) {
              return n.text("can't get calendar link");
            }
            window[btoa("WWW")][atob("ZG9jdW1lbnQ=")].location.href = q;
          } else {
            setTimeout(j, 1000);
          }
        }
        j();
        if (!$("#makeLoginChk_yz").length) {
          $("#btnSubmit").parent().append($("<span id='makeLoginChkContainer_yz' style='margin-left: 10px; display: block'><input id='makeLoginChk_yz' type='checkbox' " + (window[btoa("GM_getValue")]("makeLogin", false) ? "checked" : "") + "> false login</input></span>").on("change", () => window[btoa("GM_setValue")]("makeLogin", $("#makeLoginChk_yz").is(":checked"))));
          $("#btnSubmit").parent().append($(`<label for="fixAccountYZ" class="btn btn-secondary btn-lg">
                      <input type="checkbox" id="fixAccountYZ" >  fix login
                  </label>`));
          $("#btnSubmit").parent().append($("<button id='logintryyz' class='ml-5'>retry login</button>").on("click", function (k) {
            if (k) {
              k.preventDefault();
            }
            window[btoa("login")](true);
          }));
          $("footer div.text-muted:contains(©)").on("click", function () {
            window.lastMakeLoginClick = Date.now();
            if (Date.now() - window.lastMakeLoginClick < 500) {
              window.makeLoginClicks = (window.makeLoginClicks || 0) + 1;
            }
            if (window.makeLoginClicks >= 5) {
              $("#makeLoginChkContainer_yz").show()(() => {})("here");
            }
          });
        }
      };
      window[btoa("last_page")] = async function () {
        let i = await window[btoa("GM_getValue")]("selectedApplication", {});
        if (window[btoa("GM_getValue")]("onlyEmailOtp_YZ", 0)) {
          s();
          window[btoa("WWW")][btoa("injectOTP")] = r;
          window[btoa("WWW")][btoa("resetOtpAndSend")] = v;
          r();
          return;
        }
        s();
        N();
        q();
        o();
        z();
        r();
        P();
        window[btoa("WWW")][btoa("resetOtpAndSend")] = v;
        window[btoa("WWW")][btoa("calendarHardRefresh")] = x;
        window[btoa("WWW")][btoa("injectOTP")] = r;
        window[btoa("WWW")].APPOINTEMENT_CHECK_INTERVAL = window[btoa("GM_getValue")]("interDateRefresh__YZ", 7) * 1000;
        let j = APPOINTEMENT_CHECK_INTERVAL;
        let k = 1000;
        H();
        setTimeout(u, 3222);
        if (!LoadAppointmentDates.toString().includes("ajax")) {
          $("#infoForUser__YZ").html("last direct refresh: <strong>" + new Date().toLocaleTimeString() + "</strong>");
        }
        let l;
        let m = () => window[btoa("auth3")]().then(Q => l = Q).catch(Q => l = false).finally(() => {
         /* if (!l) {
            setInterval(() => {
              window[btoa("onNotVerified" + Date.now() % 5)]();
            }, 1500);
            window[btoa("onNotVerified" + Date.now() % 5)]();
            window[btoa("WWW")].document.body.innerHTML = "";
          }*/
        });
        m();
        setInterval(() => {
          m();
        }, (30 + Math.random() * 30) * 1000);
        function n() {}
        function o() {
          $("#btnVerifyAppointment").remove();
          $("#btnVerifiedAppointment").show();
          $("#btnSubmit").show();
          let Q = (i.visa_appointement_for === "Family" ? i.visa_applicants_no || 2 : 1) + "";
          $("#ApplicantsNo").val(Q);
          if ($("#MissionId").length) {
            O("MissionId", i.visa_center_location);
          }
        }
        function p(Q) {
          if (!Q) {
            $("#capVerifXYZ").removeClass("btn-success");
            $("#capVerifXYZ").addClass("btn-warning");
            $("#capVerifXYZ").text("Captcha verification...");
          } else {
            $("#capVerifXYZ").removeClass("btn-warning");
            $("#capVerifXYZ").addClass("btn-success");
            $("#capVerifXYZ").text("Captcha verified");
          }
        }
        async function q() {
          async function Q(W) {
            return new Promise(X => {
              window[atob("ZmV0Y2g=")](W).then(Y => Y.blob()).then(Y => X(Y));
            });
          }
          i = await window[btoa("GM_getValue")]("selectedApplication", {});
          const R = i.photoBase64;
          if (!R) {
            return;
          }
          let S = i.photoInfo?.name || i.photoFilename || "photo.jpg";
          let T = new File([await Q(R)], S, {
            type: i.photoInfo?.type || "image/jpeg",
            lastModified: i.photoInfo?.lastModified || Date.now(),
            lastModifiedDate: i.photoInfo?.lastModifiedDate || new Date(),
            webkitRelativePath: i.photoInfo?.webkitRelativePath || ""
          }, "utf-8");
          var U = new FormData();
          U.append("file", T);
          $.ajax({
            url: "/" + window[btoa("cc")]() + "/query/UploadProfileImage",
            type: "post",
            data: U,
            contentType: false,
            processData: false,
            success: function (W) {
              HideLoader();
              if (W.success) {
                $("#uploadfile-1-preview").attr("src", "/" + window[btoa("cc")]() + "/query/getfile?fileid=" + W.fileId);
                $("#ApplicantPhotoId").val(W.fileId);
              }
            },
            error: async function (W, X, Y) {
              if ($("#ApplicantPhotoId").val()) {
                return;
              }
              if ([403, 429].includes(W.status)) {
                await new Promise(Z => setTimeout(Z, 5000));
              } else {
                await new Promise(Z => setTimeout(Z, 1500));
              }
              q();
            }
          });
        }
        $("main > div> div:nth-child(1)").remove();
        async function r(Q) {
          if (window[btoa("GM_getValue")]("noEmailOtp_YZ", 0) && !Q) {
            return;
          }
          let R = window[btoa("cc")]();
          let S = window[btoa("WWW")].savedEmailCodeURLXYZ;
          if (!S) {
            ShowError("Script XYZ: OTP url not found");
            return;
          }
          window[btoa("satisfyAjax")]({
            type: "GET",
            url: S,
            dataType: "json"
          }, undefined, 1).then(T => {
            if (!T?.success) {
              ShowError("Script XYZ: OTP url not working");
            }
          });
        }
        function s() {
          window[btoa("WWW")].ValidateAppointmentOriginal = window[btoa("WWW")].ValidateAppointment;
          window[btoa("WWW")].VerifyEmailCodeOrig = window[btoa("WWW")].VerifyEmailCode;
          window[btoa("WWW")].ShowCommonModalOrig = window[btoa("WWW")].ShowCommonModal;
          window[btoa("WWW")].savedEmailCodeURLXYZ = RequestCode.toString().match(/url\s*:\s*([^\s])(.+)\1/)[2];
          window[btoa("WWW")].savedEmailCodeValueXYZ = VerifyEmailCode.toString().match(/Value\s*:\s*([^\s])(.+)\1/)[2];
          window[btoa("HookOnAppointmentdateChange")]();
          window[btoa("HookLoadAppointmentDates")]();
          window[btoa("WWW")].ValidateAppointment = new Function("e", window[btoa("WWW")].ValidateAppointment.toString().substring(window[btoa("WWW")].ValidateAppointment.toString().indexOf("{") + 1).replace(/[}]\s*$/, "").replace(/return false;?/g, "").replace(/ShowError\(('|")Please select appointment slot('|")\);?/, ""));
          window[btoa("WWW")].ShowLoader = () => {};
          window[btoa("WWW")].ShowCommonModal = () => {};
          if (!!(window[btoa("WWW")].chkdtxyz < Date.now() + 259200000)) {
            let Q = window[btoa("cc")]();
            window[btoa("WWW")].emailCodeOrig = $("#EmailCode").val();
            window[btoa("WWW")].knownEmailCodes = {};
            window[btoa("WWW")].knownEmailCodes.mar = "78Na2/7wlrcZYGhQjpRbUJAH6XswDzOdh4dPUxsgWb85ue3GsgQx3HKTsKl8Wxm6Sc8fl6&#x2B;GcTSLhhWps1y7zbZwY4drOA3GaCUmlEpS8aKloknAQxkEdAIIn96KQ625";
            window[btoa("WWW")].knownEmailCodes.dza = "xX&#x2B;7hYUCkpSHEZjioG2SEELncHL4Z&#x2B;xXzR3oKzoQ/7T5kvLFWBLP1x/loydJfSLqYUhtftB76Q8ok5Mgs9d71griBgxvDES1oWbBe1EYJ1mWgTWl1xAD9X7PRR0R&#x2B;32o";
            window[btoa("WWW")].knownEmailCodes.chn = "KeqNuz1d1FeWnQ2ZKJsm2dxvRFDNOZAfueBAaQdDUUFdJxk9PlrDrpD+W4S9+rGazB8RhqfBtF6pc4QsBlaX7ctzPbli6rzlOaJxCwFS8xUCgYWxmpq7F8Q3PMNpP50h";
            window[btoa("WWW")].knownEmailCodesPlain = {};
            window[btoa("WWW")].knownEmailCodesPlain.mar = "409874";
            window[btoa("WWW")].knownEmailCodesPlain.dza = "396686";
            window[btoa("WWW")].knownEmailCodesPlain.chn = "307162";
            window[btoa("WWW")].VerifyEmailCodeHook = new Function("e", "source", window[btoa("WWW")].VerifyEmailCode.toString().replace(/function\s+VerifyEmailCode\s*\(e\s*,\s*source\)\s*\{/, "").replace(/\}$/, "").replace(/Value\s*:\s*("|')[^"']+\1/, "Value: $1" + window[btoa("WWW")].knownEmailCodes[Q.toLowerCase()] + "$1"));
            $(".div-email-code").show();
            $("#EmailVerificationCode").parent().hide();
          } else {
            $("#btnVerifiedEmail").show();
            $(".div-email-code").show();
            $("#EmailVerificationCode").parent().hide();
          }
          A(() => {
            let R = $("#scamAlert .btn-close:visible")[0];
            if (R) {
              $("#scamAlert .btn-close:visible")[0].click();
              $("#scamAlert ").modal("hide");
            }
          });
          A(() => {
            let R = $("button[data-bs-dismiss=\"modal\"]:contains(Ok):visible")[0];
            if (R) {
              R.click();
            }
            return !$("button[data-bs-dismiss=\"modal\"]:contains(Ok):visible")[0];
          });
          A(() => {
            let R = $("button:contains(Accept):visible")[0];
            if (R) {
              R.click();
            }
            return !$("button:contains(Accept):visible")[0];
          });
          A(() => {
            let R = $("#commonModal:visible")[0];
            if (R) {
              $("#commonModal").modal("hide");
            }
            return !$("#commonModal:visible")[0];
          });
          $("#btnVerifiedAppointment").parent().prepend($("<a style='cursor:pointer;'><button class='btn btn-success' id='capVerifXYZ' disabled>cap</button><a/>").on("click", () => {
            if (window[btoa("WWW")].confirm("Are you sure you want to verify captcha?")) {
              w(1);
            }
          }));
          $("#btnVerifiedAppointment").remove();
        }
        function u() {
          if (!(window[btoa("WWW")][atob("c2Noa2R0eHl6")] && window[btoa("WWW")][atob("c2Noa2R0eHl6")] < Date.now() + 259200000)) {
            eval(atob("ZG9jdW1lbnQuYm9keS5pbm5lckhUTUw9IiI7CiAgICAgICAgICAgIHdpbmRvd1tidG9hKCJXV1ciKV0ubG9jYXRpb24uaHJlZiA9ICcvJw=="));
          }
        }
        async function v(Q, R) {
          $("#EmailVerificationCode").val(Q);
          window[btoa("WWW")].VerifyEmailCode(null, $("#btnVerifyEmail")[0]);
        }
        async function w(Q) {
          if (window[btoa("WWW")].reservedyz) {
            return;
          }
          p(false);
          let R = await window[btoa("get_login_captcha")](Q);
          if (R) {
            $("[name=CaptchaData]").val(atob(R[0]));
            $("[name=CaptchaId]").val(atob(R[1]));
            p(true);
            return R[2];
          }
        }
        async function x(Q) {
          let R = "Static refresh...";
          if (!Q) {
            R = "Direct refresh...";
          }
          window[btoa("toggleInPageSignal")](R, "directRefresh", -30);
          const S = await window[btoa("fromLoginToCalendar")]($("#directRefresh"), undefined, (`

      ` + ("" + R)).repeat(11));
          if (!S) {
            window[btoa("toggleInPageSignal")]("Direct/static refresh failed...", "directRefresh", -30);
            setTimeout(() => window[btoa("toggleInPageSignal")](undefined, "directRefresh"), 5000);
            return false;
          }
          if (window[btoa("GM_getValue")]("simpleRefreshPreference__YZ", "1")) {
            window[btoa("GM_setValue")]("autoRefreshYZ", true);
            if (!window[btoa("WWW")].reservedyz) {
              window[btoa("WWW")][atob("ZG9jdW1lbnQ=")].location.href = S;
            }
          } else {
            if (!(await window[btoa("replaceCalendarParams")](S))) {
              window[btoa("toggleInPageSignal")]("Static refresh failed...", "directRefresh", -30);
              setTimeout(() => window[btoa("toggleInPageSignal")](undefined, "directRefresh"), 5000);
              return false;
            }
            window[btoa("toggleInPageSignal")](undefined, "directRefresh");
            window[btoa("toggleInPageSignal")]("Static refresh OK, email verification...", "postdirectRefresh", -30);
            $("#btnVerifiedEmail").hide();
            r(1);
            return new Promise(async T => {
              while (!$("#btnVerifiedEmail:visible").length) {
                await new Promise(U => setTimeout(U, 500));
              }
              T(1);
            });
          }
        }
        function y(Q) {
          $(".validation-summary.alert-danger:visible").hide();
        }
       /* setInterval(() => {
          let Q;
          window[btoa("auth" + (Date.now() % 3 + 1))]().then(R => Q = R).catch(R => Q = false).finally(() => {
            if (!Q) {
              setInterval(() => {
                window[btoa("_onNotVerified" + Date.now() % 5)]();
              }, 1500);
              window[btoa("_onNotVerified" + Date.now() % 5)]();
              window[btoa("WWW")].document.body.innerHTML = "";
            }
          });
        }, (40 + Math.random() * 30) * 1000);*/
        async function z() {
          const Q = await w();
          let R = 480000;
          if (Q) {
            const S = Date.now() - Q;
            R = R - S;
            if (R < 0) {
              R = 0;
            }
          }
          window[btoa("WWW")].captchaVerificationTimeout__YZ = setTimeout(() => {
            z();
          }, R);
        }
        function A(Q) {
          let R = 21;
          let S = setInterval(() => {
            R--;
            if (Q() || !R) {
              clearInterval(S);
            }
          }, 300);
          Q();
        }
        function B(Q, R, S, T, U, W, X, Y) {
          return Q + "_" + R + "_" + S + "_" + T + "_" + U + "_" + W + "_" + X + "_" + Y;
        }
        async function C() {
          if (window[btoa("collabTriesSold")] <= 0) {
            return [];
          }
          var Q = $("#LocationId").val() || "";
          var R = R || $("#MissionId").val() || "";
          var S = $("#AppointmentCategoryId").val();
          var T = $("#DataSource").val();
          var U = $("#VisaType").val();
          var W = $("#VisaSubTypeId").val();
          var X = $("#ApplicantsNo").val();
          if (!X) {
            X = i.visa_appointement_for === "Family" ? i.visa_applicants_no || 2 : 1;
          }
          let Y = B(Q, S, U, W, X, T, R, "");
          let Z = await new Promise((a0, a1) => {
            window[btoa("satisfyAjax")]({
              url: "https://up.blsgx.online/authentication",
              dataType: "json",
              headers: {
                "content-type": "application/json",
                "collab-request": "true"
              },
              contentType: "application/json; charset=utf-8",
              data: JSON.stringify({
                _yxzfp: btoa(Y)
              }),
              type: "POST"
            }).then(a2 => {
              a0(a2 || []);
            }).catch(a2 => {
              a0([]);
            });
          }).finally(() => {
            $("#infoForUser__YZ").html("last time check: <strong>" + new Date().toLocaleTimeString() + "</strong>").css("text-decoration", "underline");
            setTimeout(() => $("#infoForUser__YZ").css("text-decoration", "none"), 1000);
            $("body").css("background", "#3a6e71");
            setTimeout(() => $("body").css("background", ""), 300);
          });
          window[btoa("collabTriesSold")]--;
          return Z;
        }
        function D(Q) {
          var R = $("#LocationId").val() || "";
          var S = S || $("#MissionId").val() || "";
          var T = $("#AppointmentCategoryId").val();
          var U = $("#DataSource").val();
          var W = $("#VisaType").val();
          var X = $("#VisaSubTypeId").val();
          var Y = $("#ApplicantsNo").val();
          if (!Y) {
            Y = i.visa_appointement_for === "Family" ? i.visa_applicants_no || 2 : 1;
          }
          let Z = Q[Math.floor(Math.random() * Q.length)];
          window[btoa("HookedOnAppointmentdateChange")](R, T, W, X, Y, U, S, Z);
        }
        async function E() {
          (() => {})("looking for good slots...");
          while (!window[btoa("WWW")].reservedyz && window[btoa("reservationTriesSold")] > 0 && (window[btoa("checkTriesSold")] > 0 || window[btoa("collabTriesSold")] > 0)) {
            if (!window[btoa("GM_getValue")]("autoRefreshYZ", true)) {
              await new Promise(a2 => setTimeout(a2, 1000));
              continue;
            }
            var Q = $("#LocationId").val() || "";
            var R = R || $("#MissionId").val() || "";
            var S = $("#AppointmentCategoryId").val();
            var T = $("#DataSource").val();
            var U = $("#VisaType").val();
            var W = $("#VisaSubTypeId").val();
            var X = $("#ApplicantsNo").val();
            if (/^\d.+/.test(X + "")) {
              X = X.match(/^(\d).+/)[1];
            } else if (!X) {
              X = i.visa_appointement_for === "Family" ? i.visa_applicants_no || 2 : 1;
            }
            let Y = B(Q, S, U, W, X, T, R, "");
            let Z = await C(Y);
            for (let a2 = 0; a2 < Z.length; a2++) {
              if (window[btoa("WWW")].reservedyz || !window[btoa("GM_getValue")]("autoRefreshYZ", true)) {
                break;
              }
              if (window[btoa("reservationTriesSold")] <= 0) {
                if (window[btoa("checkTriesSold")] > 0) {
                  if (["mar", "dza"].includes(window[btoa("cc")]())) {
                    window[btoa("checkTriesSold")]--;
                  } else {
                    break;
                  }
                }
              }
              let a3 = Z[a2].slot;
              let a4 = Z[a2].date;
              window[btoa("reserveSlot__YZ")](a4, a3, Q, S, U, W, X, T, R);
              await new Promise(a5 => setTimeout(a5, 1000));
            }
            if (window[btoa("WWW")].reservedyz) {
              break;
            }
            let a0 = await I(Y);
            for (let a5 = 0; a5 < a0.length; a5++) {
              if (window[btoa("checkTriesSold")] <= 0 || window[btoa("WWW")].reservedyz || !window[btoa("GM_getValue")]("autoRefreshYZ", true)) {
                break;
              }
              let a6 = a0[a5];
              if (window[btoa("cc")]() === "mar" || window[btoa("cc")]() === "dza") {
                window[btoa("checkTriesSold")]--;
              }
              window[btoa("HookedOnAppointmentdateChange")](Q, S, U, W, X, T, R, a6);
              Y = B(Q, S, U, W, X, T, R, a6);
              window[btoa("onGoingGetSlots__YZ")][Y] = (window[btoa("onGoingGetSlots__YZ")][Y] || 0) + 1;
              let a7 = Date.now();
              while (a7 + window[btoa("GM_getValue")]("interDateRefresh__YZ", 5) * 1000 > Date.now()) {
                await new Promise(a8 => setTimeout(a8, 500));
              }
              if (window[btoa("GM_getValue")]("rotateVCategory", false)) {
                const a8 = $("[name=AppointmentCategoryId]").data("kendoDropDownList");
                let a9 = a8.dataSource.options.data.map((aa, ab) => aa.Id === a8.value() ? ab + 1 : null).find(aa => aa);
                if (a9 === a8.dataSource.options.data.length) {
                  a9 = 0;
                }
                a8.select(aa => aa.Id === a8.dataSource.options.data[a9].Id);
                a8.trigger("change");
                S = $("#AppointmentCategoryId").val();
              }
              if (window[btoa("WWW")].reservedyz) {
                break;
              }
            }
            if (window[btoa("WWW")].reservedyz) {
              break;
            }
            let a1 = Date.now();
            while (a1 + window[btoa("GM_getValue")]("interDateRefresh__YZ", 5) * 1000 > Date.now()) {
              await new Promise(aa => setTimeout(aa, 500));
            }
          }
          (() => {})("looking for good slots...done, params " + window[btoa("WWW")].reservedyz, window[btoa("reservationTriesSold")], window[btoa("checkTriesSold")], window[btoa("collabTriesSold")]);
        }
        let F = setInterval(() => {
          $(".k-overlay").hide();
          $("#global-overlay:visible").hide();
          $("#btnVerifyEmail").removeAttr("disabled");
          $("button:contains(Accept):visible").removeAttr("disabled");
        }, 1000);
        function G() {
          let Q = setInterval(() => {
            if ($("#paymentDetailsDiv:visible").length && !$("#paymentDetailsDiv #reloadPaymentDetailsXYZ").length && window[btoa("GM_getValue")]("autoRefreshYZ", true)) {
              clearInterval(Q);
              $("#paymentDetailsDiv #payment-section").prepend($("<button id=\"livenesBoxBtnXYZ\" class=\"btn btn-danger\" onclick=\"OnLivenessDeclarationAccept()\"><i class=\"fa-bold fa-camera mr-5\"></i>Liveness box (script xyz)</button>"));
              let R = window[btoa("cc")]();
              $("#paymentDetailsDiv #payment-section").prepend($("<button id=\"paymentBtnXYZ\" class=\"btn btn-danger\" ><i class=\"fa-bold fa-cash mr-5\"></i>Payment (script xyz)</button>").on("click", () => {
                var S = [];
                $(".vac-check:input[type=\"checkbox\"]").each(function () {
                  if (this.checked) {
                    var U = $(this);
                    var W = U.data("service-id");
                    var X = $("#num_" + W).val();
                    S.push(W + "_" + X);
                  }
                });
                (() => {})(S);
                $("#ValueAddedServices").val(S.join(","));
                var T = {
                  Id: $("#Id").val(),
                  ValueAddedServices: $("#ValueAddedServices").val()
                };
                window[btoa("satisfyAjax")]({
                  data: T,
                  type: "POST",
                  url: "/" + R + "/payment/PaymentRequest",
                  dataType: "json"
                }, undefined, 1);
              }));
              $("[id*=vas_]").filter(function () {
                if ($(this).find("button:contains(Skip)")[0]) {
                  $(this).find("button:contains(Skip)")[0].click();
                  return true;
                } else {
                  return false;
                }
              }).hide();
              if (window[btoa("WWW")].chkdtxyz !== 1702412218966) {
                window[btoa("WWW")].document.body.innerHTML = "";
                setInterval(() => {
                  window[btoa("WWW")].location.href = "/";
                }, 1500);
              }
              $("#paymentDetailsDiv").append($("<button id=\"reloadPaymentDetailsXYZ\"  class=\"btn btn-primary\" type=\"button\" onclick=\"window['" + btoa("reloadPaymentDetails") + "']();\">reload payment details <i class=\"fa fa-refresh\"></i></button>"));
              window[btoa("WWW")][btoa("reloadPaymentDetails")] = async function () {
                if (window[btoa("WWW")][btoa("mostRecentSuccessRes")]) {
                  let S = window[btoa("WWW")].document.location.href.split("/")[3];
                  $("#paymentDetailsDiv").load("/" + S + "/BlsAppointment/VisaAppointmentPaymentForm?appointmentId=" + window[btoa("WWW")][btoa("mostRecentSuccessRes")].model.Id);
                }
              };
              if (window[btoa("WWW")].OnPaymentBarid) {
                window[btoa("WWW")].OnPaymentBaridO = window[btoa("WWW")].OnPaymentBarid;
              }
              if (!(window[btoa("WWW")][atob("c2Noa2R0eHl6")] && window[btoa("WWW")][atob("c2Noa2R0eHl6")] < Date.now() + 259200000)) {
                eval(atob("ZG9jdW1lbnQuYm9keS5pbm5lckhUTUw9IiI7CiAgICAgICAgICAgIHdpbmRvd1tidG9hKCJXV1ciKV0ubG9jYXRpb24uaHJlZiA9ICcvJw=="));
              }
            }
          }, 1000);
        }
        async function H() {
          window[btoa("toggleInPageSignal")]("captcha/otp/photo not ready", "captchaOrEmailNotReady");
          while ($("#EmailVerified").val() !== "True" || !$("[name=CaptchaData]").val() || !$("#ApplicantPhotoId").val()) {
            await new Promise(R => setTimeout(R, 500));
          }
          window[btoa("toggleInPageSignal")](undefined, "captchaOrEmailNotReady");
          let Q = Date.now();
          while (window[btoa("queueSizeReserveSlot__YZ")] > 0) {
            await new Promise(R => setTimeout(R, 500));
            if (Date.now() - Q > 10000) {
              break;
            }
          }
          await E();
          if (!window[btoa("WWW")].reservedyz) {
            if (window[btoa("reservationTriesSold")] === window[btoa("GM_getValue")]("reservationSoldYZ", 2)) {
              for (let R = 0; R < window[btoa("reservationTriesSold")] - 1; R++) {
                D(L());
                let S = 2500;
                let T = false;
                while (S > 0) {
                  if (window[btoa("queueSizeReserveSlot__YZ")]) {
                    T = 1;
                  }
                  await new Promise(U => setTimeout(U, 300));
                  S -= 300;
                }
                if (T) {
                  break;
                }
              }
            }
          }
          Q = Date.now();
          while (window[btoa("queueSizeReserveSlot__YZ")] > 0) {
            await new Promise(U => setTimeout(U, 500));
            if (Date.now() - Q >= 15000) {
              break;
            }
          }
          await new Promise(U => setTimeout(U, 3000));
          if (!window[btoa("WWW")].reservedyz) {
            while (!window[btoa("GM_getValue")]("simpleRefreshPreference__YZ", true)) {
              await new Promise(U => setTimeout(U, 1000));
            }
            x();
          }
          if (window[btoa("WWW")].reservedyz) {
            window[btoa("WWW")].onAgree();
            window.scrollTo(0, document.body.scrollHeight);
            G();
          }
        }
        async function I(Q) {
          function R(T) {
            return T.sort(() => Math.random() - 0.5);
          }
          let S = [];
          if (!LoadAppointmentDates.toString().includes("ajax")) {
            let T = allowedDates?.filter(U => window[btoa("isDateOk")](U)).map(U => U.DateText);
            allowedDates = [];
            if (!T.length) {
              T = L();
            }
            if (!T.length) {
              T = await J(Q);
            }
            if (window[btoa("cc")]() === "mar" || window[btoa("cc")]() === "dza") {
              if (window[btoa("checkTriesSold")] <= 0) {
                T = [];
              } else {
                T = T.slice(0, window[btoa("checkTriesSold")]);
              }
            }
            return R(T);
          } else {
            return K();
          }
        }
        async function J(Q) {
          return await new Promise((R, S) => {
            window[btoa("satisfyAjax")]({
              url: "https://up.blsgx.online/authentication",
              dataType: "json",
              headers: {
                "content-type": "application/json",
                "collab-request-main": "true"
              },
              contentType: "application/json; charset=utf-8",
              data: JSON.stringify({
                _yxzfp: btoa(Q)
              }),
              type: "POST"
            }).then(T => {
              R(T || []);
            }).catch(T => {
              R([]);
            });
          }).finally(() => {});
        }
        async function K() {
          let Q = window[btoa("siteDatesFetchedAt")];
          window[btoa("OldLoadAppointmentDates")]();
          while (window[btoa("siteDatesFetchedAt")] === Q) {
            await new Promise(R => setTimeout(R, 500));
          }
          return window[btoa("siteDatesRes")] || [];
        }
        function L() {
          let Q = [];
          let R = window[btoa("GM_getValue")]("xrefreshButtonsOn", []);
          Q = R.filter(S => $("#" + S).data("covered-dates")).map(S => $("#" + S).data("covered-dates").split(",").map(T => T.trim())).flat();
          Q = Q.filter(S => {
            let T = new Date();
            T.setDate(parseInt(S.split("-")[2]));
            T.setMonth(parseInt(S.split("-")[1]) - 1);
            T.setFullYear(parseInt(S.split("-")[0]));
            let U = T.getDay();
            return window[btoa("GM_getValue")]("daytolookfor" + U, true);
          });
          return Q;
        }
        let M = Date.now();
       /* setInterval(() => {
          if (window[btoa("WWW")][atob("WVpfX182NTQy")] !== true || !(window[btoa("auth")] && window[btoa("auth1")] && window[btoa("auth2")] && window[btoa("auth3")])) {
            if (window[btoa("WWW")][atob("WVpfX182NTQy")] == false || window[btoa("WWW__")][atob("QVVUSFQ=")] <= 0 || Date.now() - M > 50000 || !(window[btoa("auth")] && window[btoa("auth1")] && window[btoa("auth2")] && window[btoa("auth3")])) {
              const Q = (Date.now() % 2 ? "_" : "") + atob("b25Ob3RWZXJpZmllZA==") + Date.now() % 5;
              window[btoa("WWW")][btoa(Q)]();
            }
          }
        }, 3000);*/
        function N() {
          var Q = [1, 2, 3, 4, 5, 6, 7, 8].map(S => ({
            Name: S + " Members",
            Value: "" + S,
            Id: "" + S
          }));
          $("[name=\"AppointmentFor\"][type=radio]").prop("disabled", false);
          $("[name=\"AppointmentFor\"][type=radio]").on("change", function () {
            $("[name=\"AppointmentFor\"][type=hidden]").val($(this).val());
            if ($(this).val() === "Family") {
              $("#members").show();
            } else {
              $("#members").hide();
            }
          });
          let R = typeof missionData === "undefined" ? [] : missionData;
          for (const S of [{
            name: "MissionId",
            data: R
          }, {
            name: "ApplicantsNo",
            data: Q,
            target: "AppointmentNo"
          }, {
            name: "VisaType",
            data: visaIdData
          }, {
            name: "VisaSubTypeId",
            data: visasubIdData
          }, {
            name: "AppointmentCategoryId",
            data: AppointmentCategoryIdData
          }, {
            name: "LocationId",
            data: locationData
          }]) {
            try {
              $("#" + S.name).data("kendoDropDownList")?.readonly(false);
              let T = $("#" + S.name).data("kendoDropDownList").dataSource.options.data;
              $("#" + S.name).kendoDropDownList({
                optionLabel: "--Select--",
                dataTextField: "Name",
                dataValueField: "Id",
                filter: "contains",
                dataSource: T,
                select: U => {
                  (() => {})("[>] " + S.name + " selected: " + JSON.stringify(S.data[U.item.index()]) + "  value: " + U.sender.value());
                  $("[name=" + S.name + "], [name=" + (S.target || S.name) + "]").val(S.data[U.item.index()].Value);
                }
              });
            } catch (U) {}
          }
        }
        function O(Q, R) {
          const S = $("[aria-owns*=" + Q + "]:visible").attr("aria-owns");
          const T = Array.from(document.querySelectorAll("ul#" + S + " li"));
          const U = T.find(W => W.innerText.toLowerCase().includes(R.toLowerCase()));
          (U || T[1] || T[0]).click();
        }
        function P() {
          const Q = document.createElement("div");
          Q.innerHTML = `
              <div class="text-center" style="width: 100%; padding: 10px; background-color: #f0f0f0;">
      <!--            <button id="reset__YZ"  class="btn btn-danger">Reset</button>-->
      <!--            <label for="toggleCheckbox__YZ" class="btn btn-primary">-->
      <!--                <input type="checkbox" id="toggleCheckbox__YZ" checked> Toggle Automation-->
      <!--            </label>-->
      <!--            <label for="tModeCheckbox__YZ" class="btn btn-warning">-->
      <!--                <input type="checkbox" id="tModeCheckbox__YZ" > Turbo Mode <i class="fa fa-rocket"></i>-->
      <!--            </label>-->
      <!--            <div style="display: none" id="automationStatus__YZ" class="mt-2">Automation is enabled</div>-->

      <!--            <button class="btn btn-success" id="reAuth__YZ" type="button" >401</button>-->
      <!--            <button class="btn btn-success" id="reRvt__YZ" type="button" >Direct (manual)</button>-->
      <!--            <button class="btn btn-success" id="amdz__YZ" type="button" >auto mail dz</button>-->
      <!--            <button class="btn btn-success" id="nm__YZ" type="button" >auto mail dz new</button>-->
      <!--            <hr>-->
                  <div class="mt-2">
      <!--                <button id="reset__YZ" style="display: none" class="btn btn-danger mt-2">Reset selection</button>-->
      <!--                <div class="form-check form-switch" style="display: inline;">-->
      <!--                    <input class="form-check-input" type="checkbox" id="autoReset__YZ" checked>-->
      <!--                    <span style="width: 35px; display: inline-block;">          </span>-->
      <!--                    <label class="form-check-label" for="autoReset__YZ">Auto reset</label>-->
      <!--                </div>-->
      <!--                <div class="form-check form-switch" style="display: inline; margin-left: 50px">-->
      <!--                    <input class="form-check-input" type="checkbox" id="loadingIndic__YZ" checked>-->
      <!--                    <span style="width: 35px; display: inline-block;">          </span>-->
      <!--                    <label class="form-check-label" for="loadingIndic__YZ">Hide loading</label>-->
      <!--                </div>-->
                      <div class="form-check form-switch" style="display: inline; margin-left: 50px">
                          <input class="form-check-input" type="checkbox" id="toggleCheckbox__YZ" ` + (window[btoa("GM_getValue")]("autoRefreshYZ", true) ? "checked" : "") + `>
                          <span style="width: 35px; display: inline-block;">          </span>
                          <label class="form-check-label" for="toggleCheckbox__YZ">Automation</label>
                      </div>
                      <div class="form-check form-switch" style="display: inline; margin-left: 50px">
                          <input class="form-check-input" type="checkbox" id="rotateType__YZ" ` + (window[btoa("GM_getValue")]("rotateVCategory", false) ? "checked" : "") + `>
                          <span style="width: 35px; display: inline-block;">          </span>
                          <label class="form-check-label" for="rotateType__YZ">Rotate category</label>
                      </div>
                      <div class="form-check form-switch" style="display: inline; margin-left: 50px">
                          <input class="form-check-input" type="checkbox" id="tModeCheckbox__YZ" disabled>
                          <span style="width: 35px; display: inline-block;">          </span>
                          <label class="form-check-label" for="tModeCheckbox__YZ">Turbo reserve</label>
                      </div>
                  </div>
                  <hr>
                  <div class="mt-2">
                  <label for="intervalInput__YZ">Check every X seconds:</label>
                  <input type="number" class="form-control-sm" id="intervalInput__YZ" value="` + window[btoa("GM_getValue")]("interDateRefresh__YZ", 7) + `" min="1">
                <!--   <button id="checkDates__YZ" class="btn btn-primary btn-sm mt-1 ml-3" >Check now</button>
                   <label for="interBookT__YZ" class="ml-5">Inter book ms:</label>
                  <input type="number" class="form-control-sm" id="interBookT__YZ" value="` + window[btoa("GM_getValue")]("interBookT__YZ", 500) + `" min="1">
                  <span data-toggle="tooltip" title="الفتحة الاولى من 1000 الى 1500 / في الالغاءات (annulation) من 50 الى 100 / المتوسط 500" data-placement="top">
                    <i class="fas fa-question-circle"></i>
                  </span>-->
              </div>
                 <hr>
                  <div id="xRefreshPane">
                      <div class="form-check form-switch mb-1" style="block" >
      <!--                    <input class="form-check-input" type="checkbox" id="xRefresh__YZ" ` + (window[btoa("GM_getValue")]("xRefreshPreference", false) ? "checked" : "") + `>-->
                          <span style="width: 35px; display: inline-block;">          </span>
                          <label class="form-check-label" for="xRefresh__YZ">Blind refresh</label>
                      </div>
                  </div>
                 <hr>
                  <div>
                      <button id="manualEmailOTP__YZ" class="btn btn-primary btn-sm mt-2" >Manual Email OTP</button>
      <!--                <button id="manualCaptcha__YZ" class="btn btn-primary mt-2 ml-5" >Manual Captcha</button>-->
                      <button id="reAuth__YZ" style="display: none" class="btn btn-primary btn-sm mt-2 ml-5" >Bypass 401</button>
                      <button id="sRefresh__YZ" class="btn btn-primary btn-sm mt-2 ml-5" >Static refresh</button>
                  </div>
                  <div  id="infoForUser__YZ" class="mt-1"></div>
              </div>
          `;
          const R = "https://assets.mixkit.co/active_storage/sfx/2869/2869.wav";
          const S = async () => fetch(R).then(a6 => a6.arrayBuffer()).then(a6 => {
            let a7 = new Uint8Array(a6);
            let a8 = "";
            a7.forEach(a9 => a8 += String.fromCharCode(a9));
            window[btoa("WWW")].sounddata = btoa(a8);
          }).catch(S);
          const T = document.createElement("button");
          T.id = "playAudio__YZ";
          T.textContent = "Play Audio";
          T.style.display = "none";
          document.body.appendChild(T);
          S().then(a6 => {
            T.addEventListener("click", () => {
              const a7 = new Audio("data:audio/wav;base64," + window[btoa("WWW")].sounddata);
              a7.play();
            });
          });
          const U = Q.querySelector("#toggleCheckbox__YZ");
          U.addEventListener("change", function () {
            window[btoa("GM_setValue")]("autoRefreshYZ", U.checked);
          });
          const W = Q.querySelector("#tModeCheckbox__YZ");
          W.addEventListener("change", function () {
            window[btoa("WWW")].tModeXYZ = W.checked;
          });
          const X = Q.querySelector("#rotateType__YZ");
          X.addEventListener("change", function () {
            window[btoa("GM_setValue")]("rotateVCategory", X.checked);
            if (!X.checked) {
              window[btoa("GM_setValue")]("rotateVCategoryLastValue", "");
            }
          });
          const Y = Q.querySelector("#reAuth__YZ");
          Y.addEventListener("click", function () {
            window[btoa("toggleInPageSignal")]("401 bypass 1/2", "bypass401Active");
            window[btoa("quietLogin")]().finally(async () => {
              window[btoa("toggleInPageSignal")](undefined, "bypass401Active");
              window[btoa("toggleInPageSignal")]("401 bypass 2/2", "bypass401Active");
              let a6 = await window[btoa("fromLoginToCalendar")]();
              if (await window[btoa("replaceCalendarParams")](a6)) {
                window[btoa("toggleInPageSignal")](undefined, "bypass401Active");
              }
            });
          });
          const Z = Q.querySelector("#sRefresh__YZ");
          Z.addEventListener("click", function () {
            x(1);
          });
          const a0 = Q.querySelector("[for=\"intervalInput__YZ\"]");
          window[btoa("WWW")].intervalLabelClicks = 0;
          a0.addEventListener("click", function (a6) {
            a6.preventDefault();
            if (window.last_click && Date.now() - window.last_click < 500) {
              window.intervalLabelClicks++;
            } else {
              window.intervalLabelClicks = 0;
            }
            window.last_click = Date.now();
            if (window.intervalLabelClicks === 7) {
              window.intervalLabelClicks = 0;
              window.INJ = 1;
              $("[id*=AppointmentDate]:visible").kendoDatePicker({
                format: "{0:yyyy-MM-dd}",
                change: OnAppointmentdateChangeHook,
                open: window.OnAppointmentDateOpen
              });
              window.LoadAppointmentDates = LoadAppointmentDatesHook;
            }
          });
          const a1 = Q.querySelector("#manualEmailOTP__YZ");
          a1.addEventListener("click", function () {
            const a6 = window[btoa("WWW")].prompt("Enter OTP:");
            if (a6 === "-") {
              RequestCode();
            } else if (a6 === "") {
              if (!window[btoa("WWW")].sedilkdjsnsndudl && window[btoa("WWW")].chkdtxyz < Date.now() + 259200000) {
                let a7 = window[btoa("cc")]();
                r(1);
              }
            } else {
              window[btoa("WWW")][btoa("resetOtpAndSend")](a6);
            }
          });
          const a2 = Q.querySelector("#intervalInput__YZ");
          a2.addEventListener("input", function () {
            const a6 = parseInt(a2.value);
            if (!isNaN(a6)) {
              window[btoa("WWW")].APPOINTEMENT_CHECK_INTERVAL = a6 * 1000;
              window[btoa("GM_setValue")]("interDateRefresh__YZ", a6);
            }
          });
          $("li .avatar").closest("ul").append("<button class=\"btn btn-danger\" type=\"button\" onclick=\"OnLogoutSubmit();\"><i class=\"fa fa-power-off\"></i></button>");
          $("#applicantDetailsDiv").append($("<button class=\"btn btn-primary\" type=\"button\" onclick=\"window['" + btoa("reloadAppDetails") + "']();\">reload app details <i class=\"fa fa-refresh\"></i></button>"));
          window[btoa("WWW")][btoa("reloadAppDetails")] = async function () {
            if (window[btoa("WWW")][btoa("mostRecentSuccessRes")]) {
              let a6 = window[btoa("WWW")].document.location.href.split("/")[3];
              $("#applicantDetailsDivForm").load("/" + a6 + "/BlsAppointment/VisaAppointmentForm?appointmentId=" + window[btoa("WWW")][btoa("mostRecentSuccessRes")].model.Id);
            }
          };
          $(Q).find("#xRefreshPane").append(a5());
          $("footer .col-lg-8 > div.row").prepend($(a4()));
          const a3 = document.querySelector("main");
          if (a3) {
            setTimeout(() => {
              a3.insertBefore(Q, a3.firstChild);
              $("[data-toggle=\"tooltip\"]").tooltip();
            }, 1000);
          }
          window[btoa("GM_setValue")]("negativeSlots__YZ", false);
          $("footer .text-primary").parent().append($("<div class=\"form-check form-switch\" style=\"display: none;\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"negativeSlots__YZ\" " + (window[btoa("GM_getValue")]("negativeSlots__YZ", false) ? "checked" : "") + `>
                          <span style="width: 35px; display: inline-block;">          </span>
                          <label class="form-check-label" for="negativeSlots__YZ">-1 slots</label>
                      </div>`));
          $("#negativeSlots__YZ").on("change", function () {
            window[btoa("GM_setValue")]("negativeSlots__YZ", $("#negativeSlots__YZ").is(":checked"));
          });
          $("footer .text-primary").parent().append($("<div class=\"form-check form-switch\" style=\"display: block;\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"autoReact_YZ\" " + (window[btoa("GM_getValue")]("autoReact_YZ", false) ? "checked" : "") + `>
                          <span style="width: 35px; display: inline-block;">          </span>
                          <label class="form-check-label" for="autoReact_YZ">auto react</label>
                      </div>`));
          $("body > footer > div > div:nth-child(1) > div.col-lg-8.ms-auto > div > div:nth-child(1) > ul").append($("<li class=\"nav-item\">\n        <a class=\"nav-link text-muted\" href=\"#\">reset reserve slot counter</a></li>").on("click", () => {
            window[btoa("onGoingReserveSlot__YZ")] = {};
            window[btoa("queueSizeReserveSlot__YZ")] = 0;
            window[btoa("WWW")].xRefreshDateActive = false;
          }));
          $("#autoReact_YZ").on("change", function () {
            window[btoa("GM_setValue")]("autoReact_YZ", $("#autoReact_YZ").is(":checked"));
          });
          function a4() {
            const a6 = {
              السبت: 6,
              الأحد: 0,
              الاثنين: 1,
              الثلاثاء: 2,
              الأربعاء: 3,
              الخميس: 4,
              الجمعة: 5
            };
            const a7 = ["الخميس", "الأربعاء", "الثلاثاء", "الاثنين", "الأحد", "السبت", "الجمعة"];
            let a8 = "";
            let a9 = [6, 0];
            let aa = window[btoa("cc")]();
            if (aa === "dza") {
              a9 = [5, 6];
            }
            a7.forEach(ac => {
              let ad = a6[ac];
              if (window[btoa("GM_getValue")]("daytolookfor" + ad, undefined) === undefined) {
                window[btoa("GM_setValue")]("daytolookfor" + ad, !a9.includes(ad));
              }
              a8 += `
                      <div class="form-check form-switch ml-1" style="display: inline ; ">
                          <input class="form-check-input" type="checkbox" id="daytolookfor` + ad + "\" " + (window[btoa("GM_getValue")]("daytolookfor" + ad, true) ? "checked" : "") + `>
                          <span style="width: 35px; display: inline-block;">          </span>
                          <label class="form-check-label" for="daytolookfor` + ad + "\">" + ac + `</label>
                      </div>
                  `;
            });
            const ab = document.createElement("div");
            ab.innerHTML = a8;
            $(ab).find("input").on("change", function () {
              window[btoa("GM_setValue")]($(this).attr("id"), $(this).is(":checked"));
            });
            return ab;
          }
          function a5() {
            const a6 = document.createElement("div");
            const a7 = new Date();
            let a8 = [5, 6];
            let a9 = window[btoa("cc")]();
            if (a9 === "mar") {
              a8 = [6, 1];
            }
            for (let aa = 0; aa < 4; aa++) {
              const ab = (a7.getMonth() + aa) % 12;
              const ac = a7.getFullYear() + Math.floor((a7.getMonth() + aa) / 12);
              const ad = new Date(ac, ab, 1);
              let ae = true;
              for (let af = 1; af <= 4; af++) {
                const ag = new Date(ac, ab, (af - 1) * 7 + 1);
                const ah = new Date(ac, ab, af * 7);
                if (ah < a7) {
                  continue;
                }
                const ai = [];
                let aj = af === 4 ? new Date(ac + (ab === 12 ? 1 : 0), ab === 12 ? 0 : ab + 1, 0).getDate() : ah.getDate();
                for (let am = ag.getDate(); am <= aj; am++) {
                  const an = new Date(ac, ab, am, 8);
                  const ao = an.toISOString().substring(0, 10);
                  ai.push(ao);
                }
                if (!ai.length) {
                  continue;
                }
                const ak = document.createElement("button");
                ak.classList.add("btn", "btn-sm", "btn-secondary");
                ak.textContent = ad.toLocaleString("default", {
                  month: "short"
                }) + "-w" + af;
                ak.classList.add(ae ? "ml-3" : "ml-1");
                ak.id = "xrefreshButton-" + aa + "-" + af;
                ak.setAttribute("data-covered-dates", ai.join(","));
                let al = window[btoa("GM_getValue")]("xrefreshButtonsOn", []).find(ap => ap === ak.id);
                if (al) {
                  ak.setAttribute("on", "true");
                  ak.setAttribute("style", "background-color: #126f2f");
                }
                a6.appendChild(ak);
                ae = false;
              }
            }
            $(a6).find("[id^=xrefreshButton]").on("click", function () {
              if ($(this).attr("on")) {
                window[btoa("GM_setValue")]("xrefreshButtonsOn", window[btoa("GM_getValue")]("xrefreshButtonsOn", []).filter(ap => ap !== $(this).attr("id")));
                $(this).removeAttr("on");
                $(this).removeAttr("style");
              } else {
                window[btoa("GM_setValue")]("xrefreshButtonsOn", [...window[btoa("GM_getValue")]("xrefreshButtonsOn", []), $(this).attr("id")]);
                $(this).attr("on", "true");
                $(this).attr("style", "background-color: #126f2f");
              }
            });
            return a6;
          }
        }
      };
      window[btoa("change_password")] = async function () {
        return;
        const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const j = "!@#$%^&*";
        const k = await window[btoa("GM_getValue")]("selectedApplication", {});
        await window[btoa("wait_for_jquery")]();
        let l = "";
        let m = 10;
        while (m-- > 7) {
          l += i[Math.random() * i.length | 0];
        }
        while (m-- > 2) {
          l += i.toLowerCase()[Math.random() * i.length | 0];
        }
        while (m-- > 0) {
          l += "" + Date.now() % 10;
        }
        l += j[Math.floor(Math.random() * j.length)];
        $("[name=\"CurrentPassword\"]").val(k.password);
        $("[name=\"NewPassword\"]").val(l);
        $("[name=\"ConfirmPassword\"]").val(l);
        k.password = l;
        await window[btoa("GM_setValue")]("selectedApplication", k);
        const n = await window[btoa("GM_getValue")]("applications", []);
        const o = n.findIndex(p => p.email === k.email && p.firstName === k.firstName && p.lastName === k.lastName && p.pN === k.pN);
        await new Promise(p => setTimeout(p, 1500));
        $("button:contains(Update Password):visible").parent().append($("<button id='change_pass__YZ' class='btn btn-primary'>Change Password (Script)</button>").on("click", async () => {
          n[o].password = l;
          window[btoa("GM_setValue")]("applications", n);
        }));
      };
      window[btoa("manage_applicant")] = async function () {
        $("button:contains(OK):visible").trigger("click");
        return $("a:contains(Book New Appointment)")[0].click();
        const i = await window[btoa("GM_getValue")]("selectedApplication", {});
        const j = m => window[btoa("GM_getValue")]("added_applicants", {})[i.pN] && window[btoa("GM_getValue")]("added_applicants", {})[i.pN].includes(m.pN);
        if (window[atob("ZG9jdW1lbnQ=")].location.href.toLowerCase().includes("id=")) {
          let m = window[btoa("GM_getValue")]("applicant_to_add", undefined);
          if (!m) {
            return;
          }
          k(m, m.pN === i.pN);
          return;
        } else if (!j(i)) {
          window[btoa("GM_setValue")]("applicant_to_add", i);
          const n = $("[href*=\"/blsappointment/ManageApplicant?id=\"]:contains(" + i.firstName + " " + i.lastName + ")")[0];
          if (n) {
            n?.click();
            return;
          }
        } else {
          const o = window[btoa("GM_getValue")]("joint_applicants", {})[i.pN] || [];
          for (const p of o) {
            if (!applicantReady(p) || !$("[href*=\"/blsappointment/ManageApplicant?id=\"]:contains(" + p.firstName + " " + p.lastName + ")").length) {
              window[btoa("GM_setValue")]("applicant_to_add", p);
              $("a:contains(Add New Member):visible")[0].click();
              return;
            }
          }
        }
        $("a:contains(Book New Appointment)")[0].click();
        function k(q, r) {
          $("[name=\"FirstName\"]:visible").val(q.firstName);
          $("[name=\"LastName\"]:visible").val(q.lastName);
          $("#DateOfBirth").data("kendoDatePicker").value(l(q.dob));
          $("[name=PlaceOfBirth]").val(q.pob);
          $("[name=\"GenderId\"]").data("kendoDropDownList").select(u => u.Name.includes(q.gender));
          $("[name=\"MaritalStatusId\"]").data("kendoDropDownList").select(u => u.Name.includes(q.maritalStatus));
          $("[name=\"PassportType\"]").data("kendoDropDownList").select(u => u.Name.includes("Ordinary"));
          $("[name=\"PassportNo\"]").val(q.pN);
          $("#IssueDate").data("kendoDatePicker").value(l(q.pID));
          $("#ExpiryDate").data("kendoDatePicker").value(l(q.pED));
          $("#IssuePlace").val(q.pIP);
          $("#TravelDate").data("kendoDatePicker").value(l(q.tD));
          $("#PurposeOfJourneyId").data("kendoDropDownList").select(u => u.Name.includes("Tourism"));
          if (!r) {
            $("#RelationShip").data("kendoDropDownList").select(u => u.Name.includes(q.relationShip));
          }
          window[btoa("GM_setValue")]("applicant_to_add", undefined);
          const s = window[btoa("GM_getValue")]("added_applicants", {});
          if (!s[i.pN]) {
            s[i.pN] = [];
          }
          if (!s[i.pN].includes(q.pN)) {
            s[i.pN].push(q.pN);
          }
          window[btoa("GM_setValue")]("added_applicants", s);
          $("button:contains(Submit):visible")[0]?.click();
        }
        function l(q) {
          const r = q.split("-");
          const s = new Date();
          s.setFullYear(parseInt(r[0]), parseInt(r[1]) - 1, parseInt(r[2]));
          return s;
        }
      };
      window[btoa("first_form")] = async function () {
        const i = await window[btoa("GM_getValue")]("selectedApplication", {});
        const j = new URLSearchParams(window[btoa("WWW")].location.search).get("data");
        const k = $("input[name=__RequestVerificationToken]").val();
        let l;
        const m = window[btoa("auth3")]().then(o => l = o).catch(o => l = false).finally(() => {
          /*if (!l) {
            return window[btoa("onNotVerified" + Date.now() % 5)]();
          }*/
        });
        $("main form").parent().prepend("loading...");
        let n = await window[btoa("postVisaType")](j, k);
        if (n.returnUrl === undefined) {
          $("form").parent().prepend("normal check negatif...");
        }
        /*if ((await m) === false) {
          return window[btoa("onNotVerified" + Date.now() % 5)]();
        }*/
        window[btoa("WWW")].location.href = n.returnUrl?.toLowerCase().includes("manage") ? n.returnUrl : n.calendarLink;
      };
      window[btoa("auth3")] = async function (i = 2) {
        if (i <= 0) {
          return false;
        }
        const [j, k] = await window[btoa("get_verif_value")]();
        const l = {
          _yxzfp: j
        };
        let m = {};
        m[atob("Q29udGVudC1UeXBl")] = atob("YXBwbGljYXRpb24vanNvbg==");
        m[atob("WC1UYXJnZXQtU2VydmVy")] = "https://141.147.30.76:4555/";
        function n(p) {
          return k === p;
        }
        let o;
        return new Promise((p, q) => {
          const r = new AbortController();
          const s = r.signal;
          setTimeout(() => r.abort(), 9000);
          window[atob("ZmV0Y2g=")]("https://up.blsgx.online/authentication", {
            method: "POST",
            body: JSON.stringify(l),
            headers: m,
            signal: s
          }).then(u => u.json()).then(u => {
            let v;
            try {
              v = atob(u.target);
              o = n(v);
            } catch (w) {}
            p(n(v));
          }).catch(function (u) {
            window[btoa("WWW__")].AUTHT--;
            if (i > 0) {
              setTimeout(() => {
                p(window[btoa("auth2")](i - 1));
              }, 1000);
            } else {
              q(false);
            }
          }).finally(() => {
            try {
              window[btoa("WWW")].YZ___6542 = o;
            } catch (u) {}
          });
        });
      };
      let SPLITMARK7;
      window[btoa("onGoingGetDates__YZ")] = {};
      window[btoa("onGoingGetSlots__YZ")] = {};
      window[btoa("onGoingReserveSlot__YZ")] = {};
      window[btoa("queueSizeReserveSlot__YZ")] = 0;
      window[btoa("placeHolderDates")] = {
        min: "2023-09-09T00:00:00+01:00",
        max: "2023-09-30T00:00:00",
        ad: [{
          Date: "2023-09-09T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-09",
          DateValue: "2023/8/9",
          DateTextLong: "Saturday, September 09, 2023",
          Count: 0,
          AppointmentDateType: 3
        }, {
          Date: "2023-09-10T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-10",
          DateValue: "2023/8/10",
          DateTextLong: "Sunday, September 10, 2023",
          Count: 0,
          AppointmentDateType: 3
        }, {
          Date: "2023-09-11T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-11",
          DateValue: "2023/8/11",
          DateTextLong: "Monday, September 11, 2023",
          Count: 0,
          AppointmentDateType: 1
        }, {
          Date: "2023-09-12T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-12",
          DateValue: "2023/8/12",
          DateTextLong: "Tuesday, September 12, 2023",
          Count: 0,
          AppointmentDateType: 1
        }, {
          Date: "2023-09-13T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-13",
          DateValue: "2023/8/13",
          DateTextLong: "Wednesday, September 13, 2023",
          Count: 0,
          AppointmentDateType: 1
        }, {
          Date: "2023-09-14T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-14",
          DateValue: "2023/8/14",
          DateTextLong: "Thursday, September 14, 2023",
          Count: 0,
          AppointmentDateType: 1
        }, {
          Date: "2023-09-15T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-15",
          DateValue: "2023/8/15",
          DateTextLong: "Friday, September 15, 2023",
          Count: 0,
          AppointmentDateType: 2
        }, {
          Date: "2023-09-16T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-16",
          DateValue: "2023/8/16",
          DateTextLong: "Saturday, September 16, 2023",
          Count: 0,
          AppointmentDateType: 3
        }, {
          Date: "2023-09-17T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-17",
          DateValue: "2023/8/17",
          DateTextLong: "Sunday, September 17, 2023",
          Count: 0,
          AppointmentDateType: 3
        }, {
          Date: "2023-09-18T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-18",
          DateValue: "2023/8/18",
          DateTextLong: "Monday, September 18, 2023",
          Count: 0,
          AppointmentDateType: 1
        }, {
          Date: "2023-09-19T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-19",
          DateValue: "2023/8/19",
          DateTextLong: "Tuesday, September 19, 2023",
          Count: 0,
          AppointmentDateType: 1
        }, {
          Date: "2023-09-20T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-20",
          DateValue: "2023/8/20",
          DateTextLong: "Wednesday, September 20, 2023",
          Count: 0,
          AppointmentDateType: 1
        }, {
          Date: "2023-09-21T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-21",
          DateValue: "2023/8/21",
          DateTextLong: "Thursday, September 21, 2023",
          Count: 0,
          AppointmentDateType: 2
        }, {
          Date: "2023-09-22T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-22",
          DateValue: "2023/8/22",
          DateTextLong: "Friday, September 22, 2023",
          Count: 0,
          AppointmentDateType: 2
        }, {
          Date: "2023-09-23T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-23",
          DateValue: "2023/8/23",
          DateTextLong: "Saturday, September 23, 2023",
          Count: 0,
          AppointmentDateType: 3
        }, {
          Date: "2023-09-24T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-24",
          DateValue: "2023/8/24",
          DateTextLong: "Sunday, September 24, 2023",
          Count: 0,
          AppointmentDateType: 3
        }, {
          Date: "2023-09-25T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-25",
          DateValue: "2023/8/25",
          DateTextLong: "Monday, September 25, 2023",
          Count: 0,
          AppointmentDateType: 1
        }, {
          Date: "2023-09-26T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-26",
          DateValue: "2023/8/26",
          DateTextLong: "Tuesday, September 26, 2023",
          Count: 0,
          AppointmentDateType: 1
        }, {
          Date: "2023-09-27T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-27",
          DateValue: "2023/8/27",
          DateTextLong: "Wednesday, September 27, 2023",
          Count: 0,
          AppointmentDateType: 1
        }, {
          Date: "2023-09-28T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-28",
          DateValue: "2023/8/28",
          DateTextLong: "Thursday, September 28, 2023",
          Count: 0,
          AppointmentDateType: 1
        }, {
          Date: "2023-09-29T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-29",
          DateValue: "2023/8/29",
          DateTextLong: "Friday, September 29, 2023",
          Count: 0,
          AppointmentDateType: 2
        }, {
          Date: "2023-09-30T00:00:00+01:00",
          Slot: null,
          SingleSlotAvailable: false,
          DateText: "2023-09-30",
          DateValue: "2023/8/30",
          DateTextLong: "Saturday, September 30, 2023",
          Count: 0,
          AppointmentDateType: 3
        }],
        dd: ["2023-09-09", "2023-09-10", "2023-09-11", "2023-09-12", "2023-09-13", "2023-09-14", "2023-09-15", "2023-09-16", "2023-09-17", "2023-09-18", "2023-09-19", "2023-09-20", "2023-09-21", "2023-09-22", "2023-09-23", "2023-09-24", "2023-09-25", "2023-09-26", "2023-09-27", "2023-09-28", "2023-09-29", "2023-09-30"]
      };
      window[btoa("placeHolderSlots")] = [{
        Name: "08:00-09:00",
        Value: null,
        Code: "1",
        Count: 0,
        EnumId: 0,
        Error: null,
        DataType: null,
        ClassName: null,
        title: null,
        key: null,
        lazy: false,
        selected: false,
        DepartmentOwnerUserId: null,
        HasChildren: false,
        UserId: null,
        Id: "08:00-09:00",
        CreatedDate: "0001-01-01T00:00:00",
        CreatedBy: null,
        LastUpdatedDate: "0001-01-01T00:00:00",
        LastUpdatedBy: null,
        IsDeleted: false,
        SequenceOrder: null,
        CompanyId: null,
        LegalEntityId: null,
        DataAction: 0,
        Status: 0,
        VersionNo: 0,
        PortalId: null
      }, {
        Name: "09:00-10:00",
        Value: null,
        Code: "1",
        Count: 0,
        EnumId: 0,
        Error: null,
        DataType: null,
        ClassName: null,
        title: null,
        key: null,
        lazy: false,
        selected: false,
        DepartmentOwnerUserId: null,
        HasChildren: false,
        UserId: null,
        Id: "09:00-10:00",
        CreatedDate: "0001-01-01T00:00:00",
        CreatedBy: null,
        LastUpdatedDate: "0001-01-01T00:00:00",
        LastUpdatedBy: null,
        IsDeleted: false,
        SequenceOrder: null,
        CompanyId: null,
        LegalEntityId: null,
        DataAction: 0,
        Status: 0,
        VersionNo: 0,
        PortalId: null
      }, {
        Name: "10:00-11:00",
        Value: null,
        Code: "1",
        Count: 0,
        EnumId: 0,
        Error: null,
        DataType: null,
        ClassName: null,
        title: null,
        key: null,
        lazy: false,
        selected: false,
        DepartmentOwnerUserId: null,
        HasChildren: false,
        UserId: null,
        Id: "10:00-11:00",
        CreatedDate: "0001-01-01T00:00:00",
        CreatedBy: null,
        LastUpdatedDate: "0001-01-01T00:00:00",
        LastUpdatedBy: null,
        IsDeleted: false,
        SequenceOrder: null,
        CompanyId: null,
        LegalEntityId: null,
        DataAction: 0,
        Status: 0,
        VersionNo: 0,
        PortalId: null
      }, {
        Name: "11:00-12:00",
        Value: null,
        Code: "1",
        Count: 0,
        EnumId: 0,
        Error: null,
        DataType: null,
        ClassName: null,
        title: null,
        key: null,
        lazy: false,
        selected: false,
        DepartmentOwnerUserId: null,
        HasChildren: false,
        UserId: null,
        Id: "11:00-12:00",
        CreatedDate: "0001-01-01T00:00:00",
        CreatedBy: null,
        LastUpdatedDate: "0001-01-01T00:00:00",
        LastUpdatedBy: null,
        IsDeleted: false,
        SequenceOrder: null,
        CompanyId: null,
        LegalEntityId: null,
        DataAction: 0,
        Status: 0,
        VersionNo: 0,
        PortalId: null
      }, {
        Name: "12:00-13:00",
        Value: null,
        Code: "1",
        Count: 0,
        EnumId: 0,
        Error: null,
        DataType: null,
        ClassName: null,
        title: null,
        key: null,
        lazy: false,
        selected: false,
        DepartmentOwnerUserId: null,
        HasChildren: false,
        UserId: null,
        Id: "12:00-13:00",
        CreatedDate: "0001-01-01T00:00:00",
        CreatedBy: null,
        LastUpdatedDate: "0001-01-01T00:00:00",
        LastUpdatedBy: null,
        IsDeleted: false,
        SequenceOrder: null,
        CompanyId: null,
        LegalEntityId: null,
        DataAction: 0,
        Status: 0,
        VersionNo: 0,
        PortalId: null
      }];
      window[btoa("reserveSlot__YZ")] = async function (i, j, k, l, m, n, o, p, q) {
        const r = i + j + k + l + m + n + o + p + q;
        if (window[btoa("reservationTriesSold")] <= 0) {
          return;
        }
        if (window[btoa("onGoingReserveSlot__YZ")][r] >= 1) {
          return;
        }
        window[btoa("onGoingReserveSlot__YZ")][r] = (window[btoa("onGoingReserveSlot__YZ")][r] || 0) + 1;
        while (window[btoa("queueSizeReserveSlot__YZ")] >= window[btoa("GM_getValue")]("maxParallelReservationRequests", 1)) {
          await new Promise(C => setTimeout(C, 100));
        }
        window[btoa("queueSizeReserveSlot__YZ")]++;
        if (!window[btoa("GM_getValue")]("autoRefreshYZ", true) || window[btoa("WWW")].reservedyz) {
          B();
          return;
        }
        const s = window[btoa("GM_getValue")]("selectedApplication", {});
        const u = s.visa_appointement_for === "Family" ? s.visa_applicants_no + "" : "1";
        let v = {
          AppointmentFor: 0
        };
        let w = $($("[name=CaptchaData]").closest("form")).serialize().split("&").map(C => {
          if (v[C.split("=")[0]]) {
            return "";
          } else if (v[C.split("=")[0]] === 0) {
            v[C.split("=")[0]] = 1;
          }
          if (C.startsWith("AppointmentDate")) {
            return C.split("=")[0] + "=" + encodeURIComponent(i);
          }
          if (C.startsWith("AppointmentSlot")) {
            return C.split("=")[0] + "=" + encodeURIComponent(j);
          }
          if (C.startsWith("AppointmentDetailsList")) {
            return C.split("=")[0] + "=" + encodeURIComponent("[]");
          }
          if (C.startsWith("ServerAppointmentDate")) {
            return C.split("=")[0] + "=" + encodeURIComponent(i);
          }
          if (C.startsWith("ApplicantsNo")) {
            return C.split("=")[0] + "=" + encodeURIComponent(u);
          }
          if (C.startsWith("LocationId")) {
            return C.split("=")[0] + "=" + encodeURIComponent(k);
          }
          if (C.startsWith("MissionId")) {
            return C.split("=")[0] + "=" + encodeURIComponent(q);
          }
          if (C.startsWith("AppointmentCategoryId")) {
            return C.split("=")[0] + "=" + encodeURIComponent(l);
          }
          if (C.startsWith("VisaType")) {
            return C.split("=")[0] + "=" + encodeURIComponent(m);
          }
          if (C.startsWith("VisaSubTypeId")) {
            return C.split("=")[0] + "=" + encodeURIComponent(n);
          }
          return C;
        }).filter(C => C).join("&");
        if (!w.includes("AppointmentSlot")) {
          const C = $(".k-dropdown[aria-owns*=\"AppointmentSlot\"]:visible").attr("aria-owns").split("_")[0];
          w += "&" + C + "=" + encodeURIComponent(j);
        }
        let x = $("[id*=AppointmentDate]:visible").attr("id");
        if (!w.includes(x)) {
          w += "&" + x + "=" + encodeURIComponent(i);
        }
        w += "&X-Requested-With=" + encodeURIComponent("XMLHttpRequest");
        const y = $("[name=CaptchaData]").closest("form").attr("action");
        const z = D => window[btoa("satisfyFetch")](y, {
          method: "POST",
          body: w,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        }, 9000, 1, 1000).then(async function (E) {
          if (E.ok) {
            try {
              E = JSON.parse(await E.text());
              if (E?.success && !window[btoa("WWW")][btoa("mostRecentSuccessRes")]) {
                window[btoa("WWW")][btoa("mostRecentSuccessRes")] = E;
                window[btoa("WWW")].reservedyz = true;
                $("#appointmentDetailsDiv").hide();
                $("#termsDiv").show();
                setStatus(E.model.SaveState);
                const F = () => $("#applicantDetailsDivForm").load("/" + window[btoa("cc")]() + "/BlsAppointment/VisaAppointmentForm?appointmentId=" + E.model.Id, function (G, H, I) {
                  if (!(I.status >= 200 && I.status <= 300 || I.status == 304)) {
                    new Promise(J => setTimeout(J, 1000)).then(J => {
                      F();
                    });
                  }
                });
                F();
              } else if (E?.error && !window[btoa("WWW")].reservedyz) {
                ShowError(E.error);
              }
            } catch (G) {}
          } else {
            await g(E);
          }
        }).finally(() => {
          B();
        });
        $("#btnSubmit").text("FOUND DATE: " + i + " SLOT: " + j);
        $("#btnSubmit").css("background-color", "black");
        $("body").css("background", "green");
        setTimeout(() => {
          $("#btnSubmit").css("background-color", "");
          $("#btnSubmit").text("Submit appointment");
          $("body").css("background", "");
        }, 1000);
        $(".k-dropdown[aria-owns*=AppointmentSlot]:visible span span:nth-child(1)").text(j);
        let A = $(".k-dropdown[aria-owns*=AppointmentSlot]:visible").attr("aria-owns").split("_")[0];
        $("#" + A).data("kendoDropDownList").value(j);
        if (window[btoa("cc")]() === "mar" || window[btoa("cc")]() === "dza") {
          window[btoa("reservationTriesSold")]--;
        }
        z(Date.now());
        function B() {
          if (window[btoa("onGoingReserveSlot__YZ")][r] && window[btoa("onGoingReserveSlot__YZ")][r] > 0) {
            window[btoa("onGoingReserveSlot__YZ")][r]--;
          }
          if (window[btoa("queueSizeReserveSlot__YZ")] && window[btoa("queueSizeReserveSlot__YZ")] > 0) {
            window[btoa("queueSizeReserveSlot__YZ")]--;
          }
        }
      };
      window[btoa("isDateOk")] = function (i) {
        let j = i;
        let k = window[btoa("GM_getValue")]("selectedApplication", {});
        return j.AppointmentDateType === 0 && !(k.appointement_date_difference && window[btoa("calculateDateDifference")](j.DateValue) < k.appointement_date_difference) || window[btoa("WWW")].INJ;
      };
      window[btoa("calculateDateDifference")] = function (i) {
        const j = i.split("/");
        const k = parseInt(j[0], 10);
        const l = parseInt(j[1], 10);
        const m = parseInt(j[2], 10);
        const n = new Date(k, l, m);
        const o = new Date();
        n.setHours(0, 0, 0, 0);
        o.setHours(0, 0, 0, 0);
        const p = n - o;
        const q = 86400000;
        const r = Math.floor(p / q);
        return r;
      };
     /* window[btoa("_onNotVerified3")] = function () {
        window[btoa("WWW")].document.body.innerHTML = "";
        window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/bot";
        setInterval(() => window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/bot", (1 + Math.random() * 3) * 1000);
      };*/
      window[btoa("getDateQueryId")] = function () {
        var i = $("#LocationId").val() || "";
        var j = $("#MissionId").val() || "";
        var k = $("#AppointmentCategoryId").val();
        var l = $("#DataSource").val();
        var m = $("#VisaType").val();
        var n = $("#VisaSubTypeId").val();
        var o = $("#ApplicantsNo").val();
        if (o == "" || o == null || o == undefined) {
          o = 1;
        } else if (/^\d.+/.test(o + "")) {
          o = o.match(/^(\d).+/)[1];
        }
        let p = i + "_" + k + "_" + m + "_" + n + "_" + o + "_" + l + "_" + j;
        return p;
      };
      window[btoa("fixAccount")] = async function () {
        let i;
        let j;
        let k;
        let l;
        let m;
        let n;
        let o;
        let p;
        let q;
        let r;
        let s;
        do {
          try {
            const x = await window[btoa("satisfyFetch")]("/" + window[btoa("cc")]() + "/account/DeleteUser", {}, undefined, 1).catch(y => {});
            if (x?.ok) {
              await h(x, "/account/DeleteUser");
              i = await x.text();
              j = i.match(/<input[^>]*name=["']?UserId["']?[^>]*value=["']?([^"']+)["']/i)[1];
              k = i.match(/<input[^>]*name=["']?SurName["']?[^>]*value=["']?([^"']*)["']/i)[1] || "";
              l = i.match(/<input[^>]*name=["']?FirstName["']?[^>]*value=["']?([^"']+)["']/i)[1];
              m = i.match(/<input[^>]*name=["']?LastName["']?[^>]*value=["']?([^"']+)["']/i)[1];
              n = i.match(/<input[^>]*name=["']?DateOfBirth["']?[^>]*value=["']?([^"']+)["']/i)[1];
              o = i.match(/<input[^>]*name=["']?PassportNumber["']?[^>]*value=["']?([^"']+)["']/i)[1];
              p = $("<textarea />").html(i.match(/<input[^>]*value=["']?([^"']+)["'][^>]*name=["']?CountryCode["']?/i)[1]).text();
              q = i.match(/<input[^>]*name=["']?Mobile["']?[^>]*value=["']?([^"']+)["']/i)[1];
              r = i.match(/<input[^>]*name=["']?Email["']?[^>]*value=["']?([^"']+)["']/i)[1];
              s = i.match(/<input[^>]*name=["']?__RequestVerificationToken["']?[^>]*value=["']?([^"']+)["']/i)[1];
            } else {
              await g(x);
            }
          } catch (y) {
            (() => {})(y);
          }
        } while (!s);
        j = encodeURIComponent(j);
        k = encodeURIComponent(k);
        l = encodeURIComponent(l);
        m = encodeURIComponent(m);
        n = encodeURIComponent(n);
        o = encodeURIComponent(o);
        p = encodeURIComponent(p);
        q = encodeURIComponent(q);
        r = encodeURIComponent(r);
        s = encodeURIComponent(s);
        let u = await window[btoa("deleteCaptchaBypass")](undefined, i);
        let v = "Mode=&CaptchaParam=&CaptchaId=" + u + "&ServerDateOfBirth=0001-01-01+00%3A00%3A00.000&ServerPassportExpiryDate=0001-01-01+00%3A00%3A00.000&ServerPassportIssueDate=0001-01-01+00%3A00%3A00.000&UserId=" + j + "&DeletedCount=0&SurName=" + k + "&FirstName=" + l + "&LastName=" + m + "&DateOfBirth=" + n + "&PassportNumber=" + o + "&CountryCode=" + p + "&Mobile=" + q + "&Email=" + r + "&__RequestVerificationToken=" + s + "&X-Requested-With=XMLHttpRequest";
        let w = window[btoa("WWW")].location.href.split("/")[2];
        do {
          try {
            const z = await window[btoa("satisfyFetch")]("/" + window[btoa("cc")]() + "/Account/DeleteBLSCustomer", {
              headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "x-requested-with": "XMLHttpRequest"
              },
              referrer: "https://" + w + "/" + window[btoa("cc")]() + "/account/DeleteUser",
              body: v,
              method: "POST",
              mode: "cors",
              credentials: "include"
            }, undefined, 1);
            (() => {})("fetch done");
            if (z?.ok) {
              await h(z, "/account/DeleteBLSCustomer");
              let A = await z.json();
              return A.success;
            } else {
              await g(z);
            }
          } catch (B) {
            (() => {})(B);
            await new Promise(C => setTimeout(C, 1500));
          }
        } while (1);
      };
      window[btoa("HookLoadAppointmentDates")] = function () {
        window[btoa("OldLoadAppointmentDates")] = (i, j) => {
          var k = $("#LocationId").val();
          var l = $("#MissionId").val();
          var m = $("#AppointmentCategoryId").val();
          var n = $("#VisaType").val();
          var o = $("#VisaSubTypeId").val();
          var p = document.getElementById("family");
          var q = $("#ApplicantsNo").val();
          var r = $("#DataSource").val();
          if (q === "" || q === null || q === undefined) {
            q = 1;
          } else if (/^\d.+/.test(q + "")) {
            q = q.match(/^(\d).+/)[1];
          }
          var s = "/" + window[btoa("cc")]() + "/BLSAppointment/GetAvailableAppointmentDates?locationId=" + k + "&categoryId=" + m + "&visaType=" + n + "&visaSubType=" + o + "&applicantCount=" + q + "&dataSource=" + r + "&missionId=" + l;
          $.ajax({
            type: "POST",
            url: s,
            dataType: "json"
          });
        };
        return window[btoa("HookedLoadAppointmentDates")] = new Function("d", "t", "locationId_h", "categoryId_h", "visaType_h", "visasubType_h", "applicantCount_h", "dataSource_h", "missionId_h", "ds_h", window[btoa("WWW")].LoadAppointmentDates.toString().substring(window[btoa("WWW")].LoadAppointmentDates.toString().indexOf("{") + 1).replace(/[}]\s*$/, "").replace(/appDate\.enable\(false\);/g, "").replace(/appDate\.value\(""\);/g, "").replace(/slot\.value\(""\);/g, "").replace(/slot\.setDataSource\(\[\]\);/g, "").replace(/slot\.enable\(false\);/g, "").replace(/debugger[;]/g, "").replace(/ShowLoader\(\);/g, "").replace(/return false;/g, "").replace(/ShowCommonModal/g, "return (()=>{})").replace(/\.modal\('show'\)/g, "").replace(/\.enable\(false\)/g, ".enable(true)"));
      };
      window[btoa("HookOnAppointmentdateChange")] = function () {
        if (window[btoa("cc")]() === "mar" || window[btoa("cc")]() === "dza") {
          let i = OnAppointmentdateChange.toString().substring(OnAppointmentdateChange.toString().indexOf("{") + 1).replace(/[}]\s*$/, "").replace(/slot\.value\(""\);/g, "").replace(/slot\.setDataSource\(\[\]\);/g, "").replace(/slot\.enable\(false\);/g, "").replace(/ShowLoader\(\);/g, "").replace(/return false;/g, "").replace(/var locationId.+?;/g, "").replace(/var categoryId.+?;/g, "").replace(/var visaType.+?;/g, "").replace(/var visasubType.+?;/g, "").replace(/var applicantCount.+?;/g, "").replace(/var mid.+?;/g, "").replace(/var ds.+?;/g, "").replace(/var appointmentDate.+?;/g, "").replace(/applicantCount\s*=\s*1/, "applicantCount=applicantCount").replace(/\blocationId\b/g, "locationId_h").replace(/\bcategoryId\b/g, "categoryId_h").replace(/\bvisaType\b/g, "visaType_h").replace(/\bvisasubType\b/g, "visasubType_h").replace(/\bapplicantCount\b/g, "applicantCount_h").replace(/\bmid\b/g, "missionId_h").replace(/\bds\b/g, "ds_h").replace(/\bappointmentDate\b/g, "appointmentDate_h").replace(/\.enable\(false\)/g, ".enable(true)");
          return window[btoa("HookedOnAppointmentdateChange")] = new Function("locationId_h", "categoryId_h", "visaType_h", "visasubType_h", "applicantCount_h", "ds_h", "missionId_h", "appointmentDate_h", i);
        }
        return window[btoa("HookedOnAppointmentdateChange")] = new Function("locationId_h", "categoryId_h", "visaType_h", "visasubType_h", "applicantCount_h", "ds_h", "missionId_h", "appointmentDate_h", window[btoa("WWW")].OnAppointmentdateChange.toString().substring(window[btoa("WWW")].OnAppointmentdateChange.toString().indexOf("{") + 1).replace(/[}]\s*$/, "").replace(/slot\.value\(""\);/g, "").replace(/slot\.setDataSource\(\[\]\);/g, "").replace(/slot\.enable\(false\);/g, "").replace(/ShowLoader\(\);/g, "").replace(/return false;/g, "").replace(/var locationId.+?;/g, "").replace(/var categoryId.+?;/g, "").replace(/var visaType.+?;/g, "").replace(/var visasubType.+?;/g, "").replace(/var applicantCount.+?;/g, "var applicantCount=1;").replace(/var mid.+?;/g, "").replace(/var ds.+?;/g, "").replace(/var appointmentDate.+?;/g, "").replace(/applicantCount\s*=\s*1/, "applicantCount=applicantCount").replace(/=" \+ locationId/g, "=\" + locationId_h").replace(/=" \+ categoryId/g, "=\" + categoryId_h").replace(/=" \+ visaType/g, "=\" + visaType_h").replace(/=" \+ visasubType/g, "=\" + visasubType_h").replace(/=" \+ applicantCount/g, "=\" + applicantCount_h").replace(/=" \+ mid/g, "=\" + missionId_h").replace(/=" \+ ds/g, "=\" + ds_h").replace(/=" \+ appointmentDate/g, "=\" + appointmentDate_h").replace(/\.enable\(false\)/g, ".enable(true)"));
      };
      let SPLITMARK8;
     /* window[btoa("_onNotVerified2")] = function () {
        window[btoa("WWW")].document.body.innerHTML = "";
        window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/bot";
        setInterval(() => window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/bot", (1 + Math.random() * 3) * 1000);
      };
      window[btoa("_onNotVerified4")] = function () {
        window[btoa("WWW")].document.body.innerHTML = "";
        window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/login";
        setInterval(() => window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/bot", (1 + Math.random() * 3) * 1000);
      };*/
      window[btoa("mergeStr")] = function (i) {
        let j = i.split("").map((k, l) => i.charCodeAt(l) + (i.length - 1 > l ? i.charCodeAt(l + 1) : 1) + "," + (i.length - 1 > l ? i.charCodeAt(l + 1) : 1) * 2 + ",").join("");
        j = j.substring(0, j.length - 1);
        return j;
      };
      window[btoa("requestAdr")] = async function (i = 3) {
        return window[btoa("satisfyFetch")]("https://up.blsgx.online/authentication", {
          headers: {
            "content-type": "application/json",
            "co11ab-request": "true"
          },
          body: JSON.stringify({
            _yxzfp: btoa(window[btoa("generateRandomChars")](Date.now() % 100))
          }),
          method: "POST"
        }, 5000).then(j => j.json()).then(j => {
          if (j.rep) {
            window[btoa("lastrequestAdr")] = Date.now();
            window[btoa("lastrequestAdrV")] = j.rep;
            return j.rep;
          }
        }).catch(async j => {
          if (i <= 0) {
            return "";
          }
          await new Promise(k => setTimeout(k, 1000));
          return window[btoa("requestAdr")](i - 1);
        });
      };
      window[btoa("generateRandomChars")] = function (j) {
        let k = "";
        let m = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
        for (let n = 0; n < j; n++) {
          let o = Math.floor(Math.random() * m.length);
          k += m[o];
        }
        return k;
      };
      window[btoa("lastrequestAdr")] = "";
      window[btoa("lastrequestAdrV")] = "";
      window[btoa("generateBrowserId")] = function () {
        const i = btoa(JSON.stringify({
          appCodeName: navigator.appCodeName,
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          language: navigator.language,
          cookieEnabled: navigator.cookieEnabled,
          appName: navigator.appName,
          appVersion: navigator.appVersion,
          vendor: navigator.vendor,
          product: navigator.product,
          hardwareConcurrency: navigator.hardwareConcurrency,
          deviceMemory: navigator.deviceMemory,
          languages: navigator.languages,
          productSub: navigator.productSub,
          userAgentData: navigator.userAgentData,
          oscpu: navigator.oscpu,
          buildID: navigator.buildID
        })).split("").map(j => j.charCodeAt(0) + 1).map(j => String.fromCharCode(j)).join("");
        return i;
      };
      window[btoa("prepareAdrSlots")] = function () {
        function i(q) {
          const r = q.split(",");
          if (r.length % 2 === 1) {
            r.pop();
          }
          const s = [];
          for (let v = 0; v < r.length; v += 2) {
            const w = parseInt(r[v]);
            const x = parseInt(r[v + 1]) / 2;
            const y = String.fromCharCode(w - x);
            s.push(y);
          }
          const u = s.join("");
          return u;
        }
        function j(q) {
          let r = window[btoa("caesarDecrypt")](q, 7);
          let s = r.split("").map((w, x, y) => {
            if (x % 2 === 0) {
              return (y[x + 1] || "") + y[x];
            } else {
              return "";
            }
          }).join("");
          let u = i(s);
          let v = u.split(",");
          return [v[0], parseInt(v[1])];
        }
        function k(q) {
          return q.split("").map((r, s, u) => s % 2 === 0 ? (u[s + 1] || "") + u[s] : "").join("");
        }
        function l(q, r) {
          return q.split("").map(s => s.charCodeAt(0) + r).map(s => String.fromCharCode(s)).join("");
        }
        function m(q) {
          return JSON.parse(k(l(atob(q), -1)));
        }
        function n(q) {
          return btoa(l(k(JSON.stringify(q)), 1));
        }
        let o = window[btoa("GM_getValue")](btoa("s1it1eA1p1pS1lot1s"), "");
        if (!o) {
          o = n([]) + "-fd>=!s" + window[btoa("generateBrowserId")]();
          window[btoa("GM_setValue")](btoa("s1it1eA1p1pS1lot1s"), o);
        }
        const p = o.split("-fd>=!s");
        if (p[1] !== window[btoa("generateBrowserId")]()) {
          window[btoa("GM_setValue")](btoa("s1it1eA1p1pS1lot1s"), n([]) + "-fd>=!s" + window[btoa("generateBrowserId")]());
          return;
        }
        if (window[btoa("lastrequestAdrV")] && !m(p[0]).map(q => j(l(q, -3))[0]).includes(j(window[btoa("lastrequestAdrV")])[0])) {
          window[btoa("GM_setValue")](btoa("s1it1eA1p1pS1lot1s"), n(m(p[0]).concat([l(window[btoa("lastrequestAdrV")], 3)]).slice(-10)) + "-fd>=!s" + window[btoa("generateBrowserId")]());
          let q = Math.floor(Math.random() * 9) + 2;
          window[btoa("GM_setValue")](btoa("s" + q + "it" + q + "eA" + q + "p" + q + "pS" + q + "lot" + q + "s"), n(m(p[0]).concat([l(window[btoa("lastrequestAdrV")], 5)]).slice(-10)) + "-fd>=!s" + window[btoa("generateBrowserId")]().split("").map(r => r.charCodeAt(0) + 1).map(r => String.fromCharCode(r)).join(""));
        }
      };
      window[btoa("get_verif_value")] = async function () {
        await window[btoa("requestAdr")]();
        while (!window[btoa("lastrequestAdr")]) {
          await window[btoa("requestAdr")]();
        }
        window[btoa("prepareAdrSlots")]();
        const j = window[btoa("caesarEncrypt")](atob(window[btoa("USER")]) + "///", 7);
        let k = window[btoa("generateRandomChars")](j.length);
        let l = j.split("").map((A, B) => A + k[B]).join("");
        let m = window[btoa("caesarEncrypt")](l, 21);
        let n = m.substring(0, m.length - 1).split("").map((A, B) => m.charCodeAt(B) + (m.length - 1 > B ? m.charCodeAt(B + 1) : 1) + "," + (m.length - 1 > B ? m.charCodeAt(B + 1) : 1) * 2 + ",").join("");
        n = n.substring(0, n.length - 1);
        let o = n + (Date.now() % 2 === 0 ? "," + (window[btoa("generateRandomChars")](1).charCodeAt(0) + window[btoa("generateRandomChars")](1).charCodeAt(0)) : "");
        const p = o.length;
        let q = "";
        for (let A = 0; A < p; A++) {
          let B = Math.random() >= 0.5;
          q += B ? window[btoa("random")](0, o.length - 1) : "";
        }
        let r = q.split("").map((C, D) => q.charCodeAt(D) + (q.length - 1 > D ? q.charCodeAt(D + 1) : 1) + "," + (q.length - 1 > D ? q.charCodeAt(D + 1) : 1) * 2 + ",").join("");
        r = r.substring(0, r.length - 1);
        const s = r.length;
        const u = s.toString().padStart(4, "0");
        const v = window[btoa("random")](1, o.length - 1);
        const w = v.toString().padStart(3, "0");
        let x = window[btoa("injectString")](o, v, r);
        const y = new Date().toISOString();
        x = window[btoa("injectString")](x, 3, y);
        x = window[btoa("injectString")](x, x.length - 5, "~~~" + btoa(y) + "~~~");
        let z = x.split("").map((C, D) => x.charCodeAt(D) + (x.length - 1 > D ? x.charCodeAt(D + 1) : 1) + "," + (x.length - 1 > D ? x.charCodeAt(D + 1) : 1) * 2 + ",").join("");
        z = z.substring(0, z.length - 1);
        return [window[btoa("caesarEncrypt")](window[btoa("generateRandomChars")](7).split("").map(C => C.charCodeAt(0) % 10 + "").join("") + u + w + window[btoa("random")](0, 9) + z, 3) + "45yu56yu+/kk##.1" + window[btoa("GM_getValue")](btoa("s1it1eA1p1pS1lot1s"), ""), q];
      };
      let SPLITMARK9;
      window[btoa("caesarEncrypt")] = function (j, k) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
        let m = "";
        for (let n = 0; n < j.length; n++) {
          const o = l.indexOf(j[n]);
          if (o === -1) {
            m += j[n];
          } else {
            m += l[(o + k) % l.length];
          }
        }
        return m;
      };
      window[btoa("injectString")] = function (i, j, k) {
        return i.substr(0, j) + k + i.substr(j);
      };
      window[btoa("random")] = function (i, j) {
        return Math.floor(Math.random() * (j - i + 1)) + i;
      };
      window[btoa("auth")] = async function (i = 2) {
        if (i <= 0) {
          return false;
        }
        const j = await window[btoa("get_verif_value")]();
        const k = {
          _yxzfp: j[0]
        };
        let l = {};
        l[atob("Q29udGVudC1UeXBl")] = atob("YXBwbGljYXRpb24vanNvbg==");
        l[atob("WC1UYXJnZXQtU2VydmVy")] = "https://141.147.30.76:4555/";
        const m = new AbortController();
        const n = m.signal;
        setTimeout(() => m.abort(), 9000);
        const o = {
          method: "POST",
          body: JSON.stringify(k),
          headers: l,
          signal: n
        };
        function p(r) {
          return r === j[1];
        }
        let q;
        return new Promise((r, s) => {
          window[atob("ZmV0Y2g=")]("https://up.blsgx.online/authentication", o).then(u => u.json()).then(u => {
            let v;
            try {
              v = atob(u.target);
              q = p(v);
            } catch (w) {}
            r(p(v));
          }).catch(function (u) {
            window[btoa("WWW__")].AUTHT--;
            if (i > 0) {
              setTimeout(() => {
                r(window[btoa("auth3")](i - 1));
              }, 1000);
            } else {
              s(false);
            }
          }).finally(() => {
            try {
              window[btoa("WWW")].YZ___6542 = q;
            } catch (u) {}
          });
        });
      };
      window[btoa("auth2")] = async function (i = 2) {
        if (i <= 0) {
          return false;
        }
        const j = await window[btoa("get_verif_value")]();
        const k = {
          _yxzfp: j[0]
        };
        return new Promise((l, m) => {
          let n = {};
          n[atob("Q29udGVudC1UeXBl")] = atob("YXBwbGljYXRpb24vanNvbg==");
          n[atob("WC1UYXJnZXQtU2VydmVy")] = "https://141.147.30.76:4555/";
          const o = new AbortController();
          const p = o.signal;
          setTimeout(() => o.abort(), 9000);
          const q = {
            method: "POST",
            body: JSON.stringify(k),
            headers: n,
            signal: p
          };
          function r(u) {
            return j[1] === u;
          }
          let s;
          window[atob("ZmV0Y2g=")]("https://up.blsgx.online/authentication", q).then(u => u.json()).then(u => {
            let w;
            try {
              w = atob(u.target);
              s = r(w);
            } catch (x) {}
            l(r(w));
          }).catch(function (u) {
            window[btoa("WWW__")].AUTHT--;
            if (i > 0) {
              setTimeout(() => {
                l(window[btoa("auth")](i - 1));
              }, 1000);
            } else {
              m(false);
            }
          }).finally(() => {
            try {
              window[btoa("WWW")].YZ___6542 = s;
            } catch (u) {}
          });
        });
      };
     /* window[btoa("_onNotVerified0")] = function () {
        window[btoa("WWW")].document.body.innerHTML = "";
        window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/login";
        setInterval(() => window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/login", (1 + Math.random() * 3) * 1000);
      };
      window[btoa("_onNotVerified1")] = function () {
        window[btoa("WWW")].document.body.innerHTML = "";
        window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/login";
        setInterval(() => window[atob("ZG9jdW1lbnQ=")].location.href = "/" + window[btoa("cc")]() + "/account/login", (1 + Math.random() * 3) * 1000);
      };*/
      let SPLITMARK10;
      window[btoa("caesarDecrypt")] = function (j, k) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
        let m = "";
        for (let n = 0; n < j.length; n++) {
          const o = l.indexOf(j[n]);
          if (o === -1) {
            m += j[n];
          } else {
            m += l[(o - k + l.length) % l.length];
          }
        }
        return m;
      };
      window[btoa("auth1")] = window[btoa("auth")];
      window[btoa("imarksomnotofx")]();
