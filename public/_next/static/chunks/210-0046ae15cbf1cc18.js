"use strict";

// Initialize webpack chunk if it doesn't already exist
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[210], {
    8314: function (e, t, r) {
        // Import dependency
        var n = r(1811);

        // Placeholder functions for PropTypes checks
        function resetWarningCache() {}
        function checkPropTypes() {}

        checkPropTypes.resetWarningCache = resetWarningCache;

        e.exports = function () {
            function propTypesValidator(e, t, r, a, o, l) {
                if (l !== n) {
                    var error = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    error.name = "Invariant Violation";
                    throw error;
                }
            }

            function getPropType() {
                return propTypesValidator;
            }

            propTypesValidator.isRequired = propTypesValidator;

            // Define PropTypes with default values
            var propTypes = {
                array: propTypesValidator,
                bigint: propTypesValidator,
                bool: propTypesValidator,
                func: propTypesValidator,
                number: propTypesValidator,
                object: propTypesValidator,
                string: propTypesValidator,
                symbol: propTypesValidator,
                any: propTypesValidator,
                arrayOf: getPropType,
                element: propTypesValidator,
                elementType: propTypesValidator,
                instanceOf: getPropType,
                node: propTypesValidator,
                objectOf: getPropType,
                oneOf: getPropType,
                oneOfType: getPropType,
                shape: getPropType,
                exact: getPropType,
                checkPropTypes: checkPropTypes,
                resetWarningCache: resetWarningCache
            };

            propTypes.PropTypes = propTypes;
            return propTypes;
        };
    },
    4404: function (e, t, r) {
        // Export the module for use in other files
        e.exports = r(8314)();
    },
    1811: function (e) {
        // Secret constant
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    590: function (e, t, r) {
        var n = r(6480),
            a = r.n(n),
            o = r(4090),
            l = r(2865),
            s = r(3827);

        let Col = o.forwardRef((e, t) => {
            let [{ className, ...props }, { as = "div", bsPrefix, spans }] = (function (e) {
                let { as, bsPrefix, className, ...props } = e;
                bsPrefix = l.vE(bsPrefix, "col");

                let breakpoints = l.pi(),
                    minBreakpoint = l.zG(),
                    spans = [],
                    styles = [];

                breakpoints.forEach(e => {
                    let { span, offset, order } = props[e] || {};
                    delete props[e];

                    if (span) spans.push(`${bsPrefix}-${e !== minBreakpoint ? e : ""}-${span}`);
                    if (order) styles.push(`order-${e !== minBreakpoint ? e : ""}-${order}`);
                    if (offset) styles.push(`offset-${e !== minBreakpoint ? e : ""}-${offset}`);
                });

                return [{ ...props, className: a()(className, ...spans, ...styles) }, { as, bsPrefix, spans }];
            })(e);

            return s.jsx(as, { ...props, ref: t, className: a()(className, !spans.length && bsPrefix) });
        });

        Col.displayName = "Col";
        t.Z = Col;
    },
    210: function (e, t, r) {
        r.d(t, { Z: function () { return FormComponents; } });

        var n = r(6480),
            a = r.n(n),
            o = r(4404),
            l = r.n(o),
            s = r(4090),
            c = r(3827);

        let feedbackPropTypes = {
            type: l().string,
            tooltip: l().bool,
            as: l().elementType
        };

        let Feedback = s.forwardRef((e, t) => {
            let { as: r = "div", className, type: o = "valid", tooltip: tooltip = false, ...props } = e;
            return s.jsx(r, { ...props, ref: t, className: a()(className, `${o}-${tooltip ? "tooltip" : "feedback"}`) });
        });

        Feedback.displayName = "Feedback";
        Feedback.propTypes = feedbackPropTypes;

        // Additional form components omitted for brevity
        var FormComponents = Object.assign(Form, {
            Group: FormGroup,
            Control: FormControl,
            Floating: FloatingLabel,
            Check: FormCheck,
            Switch: FormSwitch,
            Label: FormLabel,
            Text: FormText,
            Range: FormRange,
            Select: FormSelect,
            FloatingLabel: FloatingLabel
        });
    }
}]);

//# sourceMappingURL=210-0046ae15cbf1cc18.js.map
