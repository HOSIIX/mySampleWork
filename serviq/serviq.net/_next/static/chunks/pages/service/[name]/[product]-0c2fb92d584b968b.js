(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6569],
  {
    3758: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/service/[name]/[product]",
        function () {
          return t(8856);
        },
      ]);
    },
    8856: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return y;
          },
          default: function () {
            return A;
          },
        });
      var o = t(5893),
        r = t(7294),
        a = t(5357),
        s = t(1594),
        l = t(2876),
        i = t(282),
        d = t(2318),
        c = t(1555),
        p = t(682),
        u = t(4051),
        b = t(8375),
        m = t(2132),
        h = t(1664),
        x = t.n(h),
        _ = t(1163),
        g = t.n(_),
        j = t(5152),
        v = t.n(j),
        k = t(1123),
        f = t(7428),
        N = t.n(f);
      let C = v()(
          () => Promise.all([t.e(5935), t.e(4577)]).then(t.bind(t, 4577)),
          {
            loadableGenerated: { webpack: () => [4577] },
            loading: () => (0, o.jsx)("p", { children: "..." }),
          }
        ),
        w = v()(
          () =>
            Promise.all([t.e(3605), t.e(5219), t.e(2588)]).then(
              t.bind(t, 2588)
            ),
          {
            loadableGenerated: { webpack: () => [2588] },
            loading: () => (0, o.jsx)("p", { children: "..." }),
          }
        ),
        S = v()(
          () =>
            Promise.all([t.e(3605), t.e(5260), t.e(3460), t.e(3597)]).then(
              t.bind(t, 3597)
            ),
          {
            loadableGenerated: { webpack: () => [3597] },
            loading: () => (0, o.jsx)("p", { children: "..." }),
          }
        ),
        B = v()(
          () =>
            Promise.all([
              t.e(3605),
              t.e(5260),
              t.e(5219),
              t.e(3460),
              t.e(2028),
              t.e(4926),
              t.e(6450),
            ]).then(t.bind(t, 1423)),
          {
            loadableGenerated: { webpack: () => [1423] },
            loading: () => (0, o.jsx)("p", { children: "..." }),
          }
        ),
        O = v()(
          () =>
            Promise.all([t.e(3605), t.e(5935), t.e(2403)]).then(
              t.bind(t, 2403)
            ),
          {
            loadableGenerated: { webpack: () => [2403] },
            loading: () => (0, o.jsx)("p", { children: "..." }),
          }
        ),
        P = v()(() => t.e(7146).then(t.bind(t, 7146)), {
          loadableGenerated: { webpack: () => [7146] },
          loading: () => (0, o.jsx)("p", { children: "..." }),
        }),
        W = v()(() => t.e(8889).then(t.bind(t, 8889)), {
          loadableGenerated: { webpack: () => [8889] },
          loading: () => (0, o.jsx)("p", { children: "..." }),
        }),
        Z = v()(
          () =>
            Promise.all([t.e(7650), t.e(4795), t.e(1932), t.e(972)]).then(
              t.bind(t, 1932)
            ),
          {
            loadableGenerated: { webpack: () => [1932] },
            loading: () => (0, o.jsx)("p", { children: "..." }),
          }
        );
      function F() {
        return [
          "انتخاب خدمت",
          "تعیین تاریخ و زمان",
          "خدمات مورد نیاز",
          "انتخاب آدرس",
          "تایید نهایی",
        ];
      }
      var y = !0;
      function A(e) {
        let { urlname: n, dataUrl: t, productname: h } = e,
          {
            activeStep: _,
            handleNext: j,
            handleReset: v,
            disablenextBtn: f,
            handlesetloading: y,
            handlebackBtn: A,
            handlenextBtn: I,
            handlegroupStepTitles: T,
            handleGroupStep: E,
            handleDatasForm: G,
            FormData: L,
            handleDataCategory: M,
            loadingPage: R,
            handleLoadingPage: U,
            isEditOrder: D,
            replayOrder: H,
            handleEditOrder: X,
            handleisReplayOrder: z,
          } = (0, r.useContext)(k.Z),
          J = F(),
          [q, K] = (0, r.useState)([]),
          V = () => {
            g().push("/service/".concat(n)),
              sessionStorage.removeItem("categoryName"),
              sessionStorage.removeItem("category");
          };
        (0, r.useEffect)(
          () => (
            t.title
              ? (U(!1), y(!1), T(t.groupStepTitles), M(t), D)
                ? j()
                : G({
                    appType: 1,
                    groupId: t.groupId,
                    orderOptions: [],
                    numberFemaleWorker: 0,
                    numberMaleWorker: 0,
                    gender: null == t ? void 0 : t.gender,
                  })
              : V(),
            () => {}
          ),
          [D]
        );
        let Y = (e) => {
            K(e);
          },
          Q = () => {
            X(""), z(!1), E(), sessionStorage.clear(), v(), G({});
          };
        return (0, o.jsxs)("section", {
          className: N().sectionSetep,
          children: [
            (0, o.jsx)(P, {
              title: "".concat(t.metaTitle),
              description: "".concat(t.metaDescription),
              canonical: "service/".concat(n, "/").concat(h),
            }),
            (0, o.jsx)(Z, {}),
            R ? (0, o.jsx)(W, {}) : null,
            (0, o.jsxs)(p.Z, {
              style: { marginTop: "3%" },
              children: [
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)(a.Z, {
                      activeStep: _,
                      style: { backgroundColor: "#FAFAFA" },
                      alternativeLabel: !0,
                      children: J.map((e) =>
                        (0, o.jsx)(
                          s.Z,
                          {
                            className: N().boxLineStep,
                            children: (0, o.jsx)(l.Z, {
                              className: N().boxstep,
                              children: e,
                            }),
                          },
                          e
                        )
                      ),
                    }),
                    (0, o.jsx)("div", {
                      className: N().containerBox,
                      children:
                        _ === J.length
                          ? (0, o.jsxs)("div", {
                              children: [
                                (0, o.jsx)(d.Z, {
                                  children: "All steps completed",
                                }),
                                (0, o.jsx)(i.Z, {
                                  onClick: v,
                                  children: "Reset",
                                }),
                              ],
                            })
                          : (0, o.jsxs)("div", {
                              children: [
                                (0, o.jsxs)("div", {
                                  className: N().headerRow,
                                  children: [
                                    (0, o.jsx)("h1", {
                                      className: N().headerContent,
                                      children: 0 === _ ? t.title : F()[_],
                                    }),
                                    (0, o.jsx)(x(), {
                                      legacyBehavior: !0,
                                      href: "/service/".concat(n),
                                      children: (0, o.jsx)("a", {
                                        className: N().backheader,
                                        onClick: () => U(!0),
                                        children: (0, o.jsx)("span", {
                                          onClick: Q,
                                          children: "",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                D
                                  ? (0, o.jsxs)(b.Z, {
                                      variant: "warning",
                                      className: "mx-auto text-center ",
                                      children: [
                                        "شما در حال ".concat(
                                          H ? "تکرار" : "ویرایش",
                                          " سفارش هستید "
                                        ),
                                        (0, o.jsx)(x(), {
                                          legacyBehavior: !0,
                                          href: "/Profile",
                                          children: (0, o.jsx)("a", {
                                            onClick: () => {
                                              U(!0), Q();
                                            },
                                            children:
                                              "لغو ویرایش و بازگشت به پروفایل",
                                          }),
                                        }),
                                      ],
                                    })
                                  : null,
                                (0, o.jsx)("div", {
                                  className: N().bodyContent,
                                  children: (function (e) {
                                    switch (_) {
                                      case 0:
                                        return (0, o.jsx)(C, {
                                          banerUrl:
                                            null == t ? void 0 : t.banerUrl,
                                          description:
                                            null == t ? void 0 : t.description,
                                        });
                                      case 1:
                                        return (0, o.jsx)(w, {
                                          groupStepTitles:
                                            null == t
                                              ? void 0
                                              : t.groupStepTitles,
                                        });
                                      case 2:
                                        return (0, o.jsx)(S, {
                                          data: {
                                            groupId:
                                              null == L ? void 0 : L.groupId,
                                            numberMaleWorker: (
                                              null == L
                                                ? void 0
                                                : L.numberMaleWorker
                                            )
                                              ? null == L
                                                ? void 0
                                                : L.numberMaleWorker
                                              : 0,
                                            numberFemaleWorker: (
                                              null == L
                                                ? void 0
                                                : L.numberFemaleWorker
                                            )
                                              ? null == L
                                                ? void 0
                                                : L.numberFemaleWorker
                                              : 0,
                                          },
                                          handleDatasForm: G,
                                          handlesetloading: y,
                                          handleNext: j,
                                          FormData: L,
                                          handledataFetching: Y,
                                        });
                                      case 3:
                                        return (0, o.jsx)(B, {});
                                      case 4:
                                        return (0, o.jsx)(O, {});
                                      default:
                                        return "Unknown stepIndex";
                                    }
                                  })(0),
                                }),
                              ],
                            }),
                    }),
                  ],
                }),
                (0, o.jsx)("div", {
                  children:
                    0 === _
                      ? (0, o.jsx)(u.Z, {
                          className: N().bottomContent,
                          children: (0, o.jsx)(c.Z, {
                            lg: "12",
                            md: "12",
                            sm: "12",
                            xs: "12",
                            children:
                              (null == t ? void 0 : t.isActive) &&
                              (0, o.jsx)("button", {
                                className: N().btnNextStep,
                                disabled: f,
                                onClick: () => {
                                  1 === _
                                    ? (setdisablenextBtn(!0),
                                      void 0 === L.startWork
                                        ? (m.Am.error(
                                            "لطفا تارخ انجام کار را وارد کنید",
                                            {
                                              position: "bottom-center",
                                              autoClose: 5e3,
                                              hideProgressBar: !1,
                                              closeOnClick: !0,
                                              pauseOnHover: !0,
                                              draggable: !0,
                                              progress: void 0,
                                            }
                                          ),
                                          setdisablenextBtn(!1))
                                        : void 0 === L.periodTime
                                        ? (m.Am.error(
                                            "لطفا مدت زمان کار را وارد کنید",
                                            {
                                              position: "bottom-center",
                                              autoClose: 5e3,
                                              hideProgressBar: !1,
                                              closeOnClick: !0,
                                              pauseOnHover: !0,
                                              draggable: !0,
                                              progress: void 0,
                                            }
                                          ),
                                          setdisablenextBtn(!1))
                                        : void 0 === L.numberFemaleWorker ||
                                          void 0 === L.numberMaleWorker
                                        ? (m.Am.error(
                                            "لطفا نیروی مورد نظر را وارد کنید",
                                            {
                                              position: "bottom-center",
                                              autoClose: 5e3,
                                              hideProgressBar: !1,
                                              closeOnClick: !0,
                                              pauseOnHover: !0,
                                              draggable: !0,
                                              progress: void 0,
                                            }
                                          ),
                                          setdisablenextBtn(!1))
                                        : j())
                                    : 2 === _
                                    ? q.map((e) => {
                                        if (e.isRequired) {
                                          let n = L.orderOptions.filter((n) =>
                                            e.groupOptionItems.some(
                                              (e) => n.optionId === e.id
                                            )
                                          );
                                          !n.length > 0 &&
                                            m.Am.error("".concat(e.title), {
                                              position: "bottom-center",
                                              autoClose: 5e3,
                                              hideProgressBar: !1,
                                              closeOnClick: !0,
                                              pauseOnHover: !0,
                                              draggable: !0,
                                              progress: void 0,
                                            });
                                        }
                                      })
                                    : j();
                                },
                                children: "ثبت سفارش",
                              }),
                          }),
                        })
                      : (0, o.jsxs)("div", {
                          className: N().bottomContent,
                          children: [
                            (0, o.jsx)(c.Z, {
                              lg: "6",
                              md: "6",
                              sm: "6",
                              xs: "6",
                              className: "d-flex",
                              children: (0, o.jsx)("button", {
                                disabled: 0 === _,
                                onClick: A,
                                className: N().btnBackbottom,
                                children: "بازگشت",
                              }),
                            }),
                            (0, o.jsx)(c.Z, {
                              lg: "6",
                              md: "6",
                              sm: "6",
                              xs: "6",
                              className: "d-flex",
                              children: (0, o.jsx)("button", {
                                className: N().btnNextStep,
                                disabled: f,
                                onClick: I,
                                children: f
                                  ? (0, o.jsx)("i", {
                                      className:
                                        "fa fa-spinner fa-pulse fa-3x fa-fw",
                                    })
                                  : _ === J.length - 1
                                  ? D
                                    ? H
                                      ? "ثبت تکرار سفارش"
                                      : "ثبت ویرایش"
                                    : "ثبت نهایی"
                                  : "ادامه",
                              }),
                            }),
                          ],
                        }),
                }),
              ],
            }),
          ],
        });
      }
    },
    7428: function (e) {
      e.exports = {
        containerBox: "product_containerBox__dLz9O",
        sectionSetep: "product_sectionSetep__EYNLo",
        container: "product_container__RJvcm",
        boxstep: "product_boxstep__1hU6J",
        boxLineStep: "product_boxLineStep__uU3M_",
        headerRow: "product_headerRow__o5EvB",
        headerContent: "product_headerContent__BTWi_",
        backheader: "product_backheader__69vIj",
        bodyContent: "product_bodyContent__3KX7h",
        bottomContent: "product_bottomContent__doLVc",
        btnBackbottom: "product_btnBackbottom__78xaD",
        btnNextStep: "product_btnNextStep__zfloA",
        pricingbottom: "product_pricingbottom__7Xkpg",
      };
    },
  },
  function (e) {
    e.O(0, [1664, 1913, 9139, 4256, 7933, 4397, 9774, 2888, 179], function () {
      return e((e.s = 3758));
    }),
      (_N_E = e.O());
  },
]);
