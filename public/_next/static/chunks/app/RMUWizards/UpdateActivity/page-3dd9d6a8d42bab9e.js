(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [323],
    {
      5004: function (e, t, a) {
        Promise.resolve().then(a.bind(a, 9059));
      },
      9059: function (e, t, a) {
        "use strict";
        a.r(t);
        a.d(t, { default: function () { return f; } });
  
        // Import necessary modules
        var r = a(3827),
          c = a(4454),
          n = a.n(c),
          i = a(210),
          s = a(3444),
          l = a(8711);
  
        a(2888);
        var o = a(4090);
        a(5805);
        var d = a(8819),
          u = a(2505),
          h = a(6252),
          m = a(9742);
  
        // Define static text and initial state
        let p = [
            "hello hello hello",
            "to mark RMU Course completion in Rent Manager.",
          ],
          x = {
            "Start Date": { value: "" },
            Submit: { Color: "primary", Text: "Submit" },
            Feedback: { color: "success", code: "", title: "", text: "", hidden: true },
          };
  
        // Reducer function to manage state updates
        let b = (e, t) => {
          let a = { ...e };
          switch (t.type) {
            case "update-Value":
              a[t.label].value = t.value;
              a.Submit.Color = "primary";
              a.Submit.Text = "Submit";
              return a;
            case "submit-Clicked":
            case "submit-Error":
            case "submit-Success":
              a.Submit.Color = t.color;
              a.Submit.Text = t.text;
              return a;
            case "load-Feedback":
              a.Feedback.hidden = false;
              a.Feedback.color = t.color;
              a.Feedback.code = t.code;
              a.Feedback.title = t.title;
              a.Feedback.text = t.text;
              return a;
          }
        };
  
        // Main component function
        function f() {
          let [e, t] = (0, o.useReducer)(b, x);
          let a = { Start_Date: e["Start Date"].value };
  
          return (0, r.jsx)("main", {
            className: n().main,
            style: { backgroundImage: "url(" + d.Z.src + ")" },
            children: (0, r.jsxs)(i.Z, {
              children: [
                (0, r.jsx)(u.Z, { text: "View Activity from RMU" }),
                (0, r.jsx)(m.Z, { text: p }),
                (0, r.jsx)(s.Z, {
                  label: "Start Date",
                  type: "date",
                  reminder: "Please Enter Date To Mark",
                  placeholder: "",
                  value: e["Start Date"].value,
                  dispatch: t,
                }),
                (0, r.jsx)(l.Z, {
                  method: "POST",
                  endpoint: "Litmos/UpdateActivity",
                  dispatch: t,
                  data: a,
                  color: e.Submit.Color,
                  text: e.Submit.Text,
                }),
                (0, r.jsx)(h.Z, {
                  color: e.Feedback.color,
                  code: e.Feedback.code,
                  title: e.Feedback.title,
                  text: e.Feedback.text,
                  hidden: e.Feedback.hidden,
                }),
              ],
            }),
          });
        }
      },
  
      // Additional helper components and imports
      5805: function (e, t, a) {
        "use strict";
        a.d(t, { Z: function () { return n; } });
        var r = a(3827);
        a(6845);
        var c = a(210);
        function n(e) {
          let { label: t, reminder: a, isChecked: n, dispatch: i, hidden: s = false } = e;
          return (0, r.jsx)(c.Z.Group, {
            hidden: s,
            className: "mb-3 text-dark-emphasis",
            controlId: "form" + t,
            children: (0, r.jsx)(c.Z.Check, {
              type: "checkbox",
              label: a,
              checked: n,
              onChange: (e) => i({ type: "mark-Checked", label: t, value: !n }),
            }),
          });
        }
      },
      // More helper functions and exports
    },
    function (e) {
      e.O(0, [210, 842, 703, 971, 69, 744], function () {
        return e(e.s = 5004);
      });
      _N_E = e.O();
    },
  ]);
  //# sourceMappingURL=page-3dd9d6a8d42bab9e.js.map
  