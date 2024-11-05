(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [991],
    {
      3999: function (e, t, a) {
        // Load the module 4486 asynchronously
        Promise.resolve().then(a.bind(a, 4486));
      },
      4486: function (e, t, a) {
        "use strict";
        a.r(t);
        a.d(t, { default: function () { return MainComponent; } });
  
        // Import necessary libraries and modules
        var React = a(3827),
          styles = a(4454),
          s = a.n(styles),
          Bootstrap = a(210);
        a(3444), a(8711), a(2888);
        var useReducer = a(4090);
        a(5805);
        var apiHelper = a(4576),
          backgroundImage = a(8819);
        a(6007), a(6252);
        var TableComponent = a(1279),
          Header = a(2505);
  
        // Initial state and reducer function
        let initialState = {
          "LSManager Account": { value: "" },
          Submit: { Color: "primary", Text: "Submit" },
          "Select Session": { options: [], value: 0 },
          "Scheduling Month": { value: "" },
          Registrations: [{}],
        };
  
        let reducer = (state, action) => {
          let newState = { ...state };
          switch (action.type) {
            case "update-Value":
              newState[action.label].value = action.value;
              newState.Submit.Color = "primary";
              newState.Submit.Text = "Submit";
              return newState;
            case "submit-Clicked":
            case "submit-Error":
            case "submit-Success":
              newState.Submit.Color = action.color;
              newState.Submit.Text = action.text;
              return newState;
            case "load-Options":
              newState["Select Session"].options = action.data.getCourses;
              newState["Select Session"].value = action.data.getCourses[0].ID;
              return newState;
            case "load-Report":
              newState.Registrations = action.report;
              return newState;
            case "load-SelectBox":
              newState["Select Session"].options = action.data.Sessions;
              newState["Select Session"].value = action.data.Sessions[0].ID;
              return newState;
          }
        };
  
        // Main component function
        function MainComponent() {
          let [state, dispatch] = useReducer(reducer, initialState);
  
          // Load employee list on component mount
          React.useEffect(() => {
            (async () => {
              let response = await apiHelper.h({
                method: "GET",
                endpoint: "Litmos/LoadEmployeeList",
              });
              if (!response.didError) {
                dispatch({ type: "load-Report", report: response.data.data });
              }
            })();
          }, []);
  
          // Render the main component
          return React.jsx("main", {
            className: s().main,
            style: { backgroundImage: "url(" + backgroundImage.Z.src + ")" },
            children: React.jsxs(Bootstrap.Z, {
              children: [
                React.jsx(Header.Z, { text: "Employees In RMU" }),
                React.jsx(TableComponent.Z, { records: state.Registrations }),
              ],
            }),
          });
        }
      },
  
      // TableComponent definition
      1279: function (e, t, a) {
        "use strict";
        a.d(t, { Z: function () { return TableComponent; } });
        var React = a(3827),
          Bootstrap = a(210),
          classNames = a.n(a(6480)),
          forwardRef = a(4090).forwardRef,
          createElement = a(2865);
  
        // Table component definition
        let Table = forwardRef((props, ref) => {
          let {
            bsPrefix,
            className,
            striped,
            bordered,
            borderless,
            hover,
            size,
            variant,
            responsive,
            ...rest
          } = props;
          let tableClass = classNames()(
            className,
            createElement.vE(bsPrefix, "table"),
            variant && `${bsPrefix}-${variant}`,
            size && `${bsPrefix}-${size}`,
            striped && `${bsPrefix}-striped`,
            bordered && `${bsPrefix}-bordered`,
            borderless && `${bsPrefix}-borderless`,
            hover && `${bsPrefix}-hover`
          );
          let tableElement = React.jsx("table", {
            ...rest,
            className: tableClass,
            ref: ref,
          });
  
          if (responsive) {
            let responsiveClass = `${bsPrefix}-responsive`;
            return React.jsx("div", { className: responsiveClass, children: tableElement });
          }
          return tableElement;
        });
  
        // TableComponent for displaying records
        var TableComponent = function ({ records }) {
          let headers = Object.keys(records[0]);
          let rows = records.map((record) =>
            React.jsx("tr", {
              children: Object.values(record).map((value) =>
                React.jsx("td", { children: value })
              ),
            })
          );
  
          return React.jsx(Bootstrap.Z.Group, {
            children: React.jsxs(Table, {
              className: "table table-secondary table-hover table-striped table-bordered",
              children: [
                React.jsx("thead", {
                  children: React.jsx("tr", {
                    children: headers.map((header) =>
                      React.jsx("th", { children: header })
                    ),
                  }),
                }),
                React.jsx("tbody", { children: rows }),
              ],
            }),
          });
        };
      },
      // Helper functions and additional components
      // Other modules and dependencies
    },
    function (e) {
      e.O(0, [210, 842, 703, 971, 69, 744], function () {
        return e(e.s = 3999);
      });
      _N_E = e.O();
    },
  ]);
  //# sourceMappingURL=page-1fbc22c912360120.js.map
  