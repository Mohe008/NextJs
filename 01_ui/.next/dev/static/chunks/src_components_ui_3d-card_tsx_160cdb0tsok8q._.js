(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/3d-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardBody",
    ()=>CardBody,
    "CardContainer",
    ()=>CardContainer,
    "CardItem",
    ()=>CardItem,
    "useMouseEnter",
    ()=>useMouseEnter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
const MouseEnterContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const CardContainer = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "5bd7d78170d045e54340af47b38fd2a2209ea216aad4d1d82e70aae66ab11b50") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5bd7d78170d045e54340af47b38fd2a2209ea216aad4d1d82e70aae66ab11b50";
    }
    const { children, className, containerClassName } = t0;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMouseEntered, setIsMouseEntered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = (e)=>{
            if (!containerRef.current) {
                return;
            }
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            const x = (e.clientX - left - width / 2) / 25;
            const y = (e.clientY - top - height / 2) / 25;
            containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const handleMouseMove = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (e_0)=>{
            setIsMouseEntered(true);
            if (!containerRef.current) {
                return;
            }
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const handleMouseEnter = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = (e_1)=>{
            if (!containerRef.current) {
                return;
            }
            setIsMouseEntered(false);
            containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const handleMouseLeave = t3;
    let t4;
    if ($[4] !== isMouseEntered) {
        t4 = [
            isMouseEntered,
            setIsMouseEntered
        ];
        $[4] = isMouseEntered;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== containerClassName) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-20 flex items-center justify-center", containerClassName);
        $[6] = containerClassName;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            perspective: "1000px"
        };
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== className) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center relative transition-all duration-200 ease-linear", className);
        $[9] = className;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            transformStyle: "preserve-3d"
        };
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== children || $[13] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            onMouseEnter: handleMouseEnter,
            onMouseMove: handleMouseMove,
            onMouseLeave: handleMouseLeave,
            className: t7,
            style: t8,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/3d-card.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = children;
        $[13] = t7;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t5 || $[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            style: t6,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/ui/3d-card.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t5;
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MouseEnterContext.Provider, {
            value: t4,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/ui/3d-card.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t10;
        $[19] = t4;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    return t11;
};
_s(CardContainer, "tJah37jWw/4ti6WZSYSC6Ge0QMQ=");
_c = CardContainer;
const CardBody = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "5bd7d78170d045e54340af47b38fd2a2209ea216aad4d1d82e70aae66ab11b50") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5bd7d78170d045e54340af47b38fd2a2209ea216aad4d1d82e70aae66ab11b50";
    }
    const { children, className } = t0;
    let t1;
    if ($[1] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]", className);
        $[1] = className;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== children || $[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/3d-card.tsx",
            lineNumber: 163,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = children;
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
};
_c1 = CardBody;
const CardItem = ({ as: Tag = "div", children, className, translateX = 0, translateY = 0, translateZ = 0, rotateX = 0, rotateY = 0, rotateZ = 0, ...rest })=>{
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMouseEntered] = useMouseEnter();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardItem.useEffect": ()=>{
            handleAnimations();
        }
    }["CardItem.useEffect"], [
        isMouseEntered
    ]);
    const handleAnimations = ()=>{
        if (!ref.current) return;
        if (isMouseEntered) {
            ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
        } else {
            ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-fit transition duration-200 ease-linear", className),
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/3d-card.tsx",
        lineNumber: 208,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(CardItem, "2Rf3PxvxkXo5GuCzd4bt6RXJ2ko=", false, function() {
    return [
        useMouseEnter
    ];
});
_c2 = CardItem;
const useMouseEnter = ()=>{
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "5bd7d78170d045e54340af47b38fd2a2209ea216aad4d1d82e70aae66ab11b50") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5bd7d78170d045e54340af47b38fd2a2209ea216aad4d1d82e70aae66ab11b50";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MouseEnterContext);
    if (context === undefined) {
        throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
};
_s2(useMouseEnter, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CardContainer");
__turbopack_context__.k.register(_c1, "CardBody");
__turbopack_context__.k.register(_c2, "CardItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ui_3d-card_tsx_160cdb0tsok8q._.js.map