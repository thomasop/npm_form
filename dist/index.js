

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const App = () => {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("h1", { children: "Npm package" }) }));
};

exports.default = App;
//# sourceMappingURL=index.js.map
