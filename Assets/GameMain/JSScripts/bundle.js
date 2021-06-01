/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CircuitSystem/Ammeter.ts":
/*!**************************************!*\
  !*** ./src/CircuitSystem/Ammeter.ts ***!
  \**************************************/
/*! exports provided: Ammeter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ammeter", function() { return Ammeter; });
/* harmony import */ var _CircuitComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircuitComponent */ "./src/CircuitSystem/CircuitComponent.ts");
/* harmony import */ var _ElectricalBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElectricalBase */ "./src/CircuitSystem/ElectricalBase.ts");


class Ammeter extends _ElectricalBase__WEBPACK_IMPORTED_MODULE_1__["ElectricalBase"] {
    constructor(value) {
        super(_CircuitComponent__WEBPACK_IMPORTED_MODULE_0__["ComponentType"].Current, value);
    }
    ;
}


/***/ }),

/***/ "./src/CircuitSystem/Battery.ts":
/*!**************************************!*\
  !*** ./src/CircuitSystem/Battery.ts ***!
  \**************************************/
/*! exports provided: Battery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Battery", function() { return Battery; });
/* harmony import */ var _CircuitComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircuitComponent */ "./src/CircuitSystem/CircuitComponent.ts");
/* harmony import */ var _ElectricalBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElectricalBase */ "./src/CircuitSystem/ElectricalBase.ts");


class Battery extends _ElectricalBase__WEBPACK_IMPORTED_MODULE_1__["ElectricalBase"] {
    constructor(value) {
        super(_CircuitComponent__WEBPACK_IMPORTED_MODULE_0__["ComponentType"].Voltage, value);
    }
    ;
}


/***/ }),

/***/ "./src/CircuitSystem/CircuitComponent.ts":
/*!***********************************************!*\
  !*** ./src/CircuitSystem/CircuitComponent.ts ***!
  \***********************************************/
/*! exports provided: ComponentType, CircuitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentType", function() { return ComponentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircuitComponent", function() { return CircuitComponent; });
var ComponentType;
(function (ComponentType) {
    ComponentType[ComponentType["None"] = 0] = "None";
    ComponentType[ComponentType["Voltage"] = 1] = "Voltage";
    ComponentType[ComponentType["Current"] = 2] = "Current";
    ComponentType[ComponentType["Resistor"] = 3] = "Resistor";
})(ComponentType || (ComponentType = {}));
//https://www.circuitlab.com/editor/#
class CircuitComponent {
    // 构造函数 
    constructor(type, high, low, v) {
        this.id = CircuitComponent.index++;
        this.comp_type = type;
        this.high_node = high;
        this.low_node = low;
        this.value = v;
        this.high = -1;
        this.low = -1;
    }
    ;
    SetTargetPos(pos, isHigh) {
        if (isHigh) {
            this.high_node = pos;
        }
        else {
            this.low_node = pos;
        }
    }
    SetValue(v) {
        //电阻不允许设置为0
        if (this.comp_type == ComponentType.Resistor && v == 0) {
            this.value = 0.0001;
        }
        else {
            this.value = v;
        }
    }
    PrintSelf() {
        let str = this.id + " " + (this.comp_type) + " " + (this.high_node) + " "
            + (this.low_node) + " " + (this.value);
        console.log(str);
    }
}
CircuitComponent.index = 0;


/***/ }),

/***/ "./src/CircuitSystem/CircuitSolveSystem.ts":
/*!*************************************************!*\
  !*** ./src/CircuitSystem/CircuitSolveSystem.ts ***!
  \*************************************************/
/*! exports provided: NodeHashtable, CircuitSolveSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeHashtable", function() { return NodeHashtable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircuitSolveSystem", function() { return CircuitSolveSystem; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./src/CircuitSystem/linear.js");
/* harmony import */ var _CircuitComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircuitComponent */ "./src/CircuitSystem/CircuitComponent.ts");


class NodeHashtable {
    constructor() {
        this.nodes = new Map();
        this.nodeCount = 0;
    }
    ;
    addToNodes(node_str) {
        if (!this.nodes.has(node_str)) {
            this.nodes.set(node_str, this.nodeCount);
            this.nodeCount++;
        }
        let ret = this.nodes.get(node_str);
        if (ret == undefined)
            return -1;
        return ret;
    }
    Clean() {
        this.nodes.clear();
        this.nodeCount = 0;
    }
}
class CircuitSolveSystem {
    constructor() {
        this.voltageCount = 0;
        this.currentCount = 0;
        this.resistorCount = 0;
        this.hashTable = new NodeHashtable();
        this.hashTable.addToNodes('Node_0');
        this.lstComponents = [];
    }
    ;
    Clean() {
        this.hashTable.Clean();
        this.hashTable.addToNodes('Node_0');
        this.lstComponents = [];
    }
    InitComponents(components) {
        components.forEach(component => {
            this.AddComponent(component);
        });
    }
    PrintNodes() {
        console.log("Circuit Info");
        console.log("Component count: ", this.lstComponents.length);
        console.log("Voltage count: ", this.voltageCount);
        console.log("Current count: ", this.currentCount);
        console.log("Resistance count: ", this.resistorCount);
        console.log("Node count: ", this.hashTable.nodeCount);
        console.log("\nNodes are mapped as following:");
        this.hashTable.nodes.forEach((key, val) => {
            console.log("\"" + key + "\" :", val);
        });
        console.log("\nCircuit Components:");
        this.lstComponents.forEach(component => {
            component.PrintSelf();
        });
    }
    AddComponent(component) {
        if (component.comp_type == _CircuitComponent__WEBPACK_IMPORTED_MODULE_1__["ComponentType"].Current) {
            this.currentCount++;
        }
        else if (component.comp_type == _CircuitComponent__WEBPACK_IMPORTED_MODULE_1__["ComponentType"].Resistor) {
            this.resistorCount++;
        }
        else if (component.comp_type == _CircuitComponent__WEBPACK_IMPORTED_MODULE_1__["ComponentType"].Voltage) {
            this.voltageCount++;
        }
        component.high = this.hashTable.addToNodes(component.high_node);
        component.low = this.hashTable.addToNodes(component.low_node);
        this.lstComponents.push(component);
    }
    CalculateMatrices() {
        let voltageCount = this.voltageCount;
        let inductorCount = 0;
        let nodeCount = this.hashTable.nodeCount;
        // calculate g2 components
        let g2Count = voltageCount + inductorCount;
        console.log("Group 2 count:" + g2Count);
        // calculate matrix size
        let matrixSize = nodeCount + g2Count - 1;
        console.log("Matrix size:", matrixSize, "\n");
        // define Matrices
        let A = this.Zero(matrixSize, matrixSize);
        let b = this.ZeroArray(matrixSize);
        // Group 2 component index
        let g2Index = matrixSize - g2Count;
        // loop through all components
        this.lstComponents.forEach(component => {
            // store component info in temporary variable
            let high = component.high;
            let low = component.low;
            let value = component.value;
            if (component.comp_type == _CircuitComponent__WEBPACK_IMPORTED_MODULE_1__["ComponentType"].Resistor) {
                // affects G-matrix of A
                // diagonal self-conductance of node
                if (high != 0) {
                    A[high - 1][high - 1] = A[high - 1][high - 1] + 1 / value;
                }
                if (low != 0) {
                    A[low - 1][low - 1] = A[low - 1][low - 1] + 1 / value;
                }
                if (high != 0 && low != 0) {
                    A[high - 1][low - 1] = A[high - 1][low - 1] - 1 / value;
                    A[low - 1][high - 1] = A[low - 1][high - 1] - 1 / value;
                }
            }
            else if (component.comp_type == _CircuitComponent__WEBPACK_IMPORTED_MODULE_1__["ComponentType"].Voltage) {
                // affects the B and C matrices of A
                if (high != 0) {
                    A[high - 1][g2Index] = A[high - 1][g2Index] + 1;
                    A[g2Index][high - 1] = A[g2Index][high - 1] + 1;
                }
                if (low != 0) {
                    A[low - 1][g2Index] = A[low - 1][g2Index] - 1;
                    A[g2Index][low - 1] = A[g2Index][low - 1] - 1;
                }
                // affects b-matrix
                b[g2Index] = value;
                // increase G2 counter
                g2Index = g2Index + 1;
            }
            else if (component.comp_type == _CircuitComponent__WEBPACK_IMPORTED_MODULE_1__["ComponentType"].Current) {
                // affects b-matrix
                if (high != 0) {
                    b[high - 1] = b[high - 1] - value;
                }
                if (low != 0) {
                    b[low - 1] = b[low - 1] + value;
                }
            }
        });
        return [A, b];
    }
    SolveSystem(A, b) {
        let x = Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__["default"])(A, b);
        return x;
    }
    Zero(row, col) {
        let ret = [];
        let i = 0;
        let j = 0;
        for (i = 0; i < row; i++) {
            ret[i] = [];
            for (j = 0; j < col; j++) {
                ret[i][j] = 0;
            }
        }
        return ret;
    }
    ZeroArray(col) {
        let ret = [];
        let i = 0;
        for (i = 0; i < col; i++) {
            ret[i] = 0;
        }
        return ret;
    }
}


/***/ }),

/***/ "./src/CircuitSystem/CircuitSystem.ts":
/*!********************************************!*\
  !*** ./src/CircuitSystem/CircuitSystem.ts ***!
  \********************************************/
/*! exports provided: CircuitSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircuitSystem", function() { return CircuitSystem; });
/* harmony import */ var _CircuitComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircuitComponent */ "./src/CircuitSystem/CircuitComponent.ts");
/* harmony import */ var _LineConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineConnection */ "./src/CircuitSystem/LineConnection.ts");
/* harmony import */ var _CircuitSolveSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CircuitSolveSystem */ "./src/CircuitSystem/CircuitSolveSystem.ts");



class CircuitSystem {
    constructor() {
        this.lst = [];
        this.lstLines = [];
        this.circuitSystem = new _CircuitSolveSystem__WEBPACK_IMPORTED_MODULE_2__["CircuitSolveSystem"]();
    }
    ;
    Add(elect) {
        this.lst.push(elect);
    }
    Remove(elect) {
        let index = this.lst.indexOf(elect);
        if (index > -1) {
            this.lst.splice(index, 1);
        }
    }
    CreateLine() {
        let line = new _LineConnection__WEBPACK_IMPORTED_MODULE_1__["LineConnection"]();
        this.lstLines.push(line);
        return line;
    }
    RemoveLine(line) {
        let index = this.lstLines.indexOf(line);
        if (index > -1) {
            this.lstLines.splice(index, 1);
        }
    }
    Solve() {
        let isInitPowerNode = false;
        let component = [];
        this.lst.forEach(electric => {
            if (electric.circuitComponent.comp_type == _CircuitComponent__WEBPACK_IMPORTED_MODULE_0__["ComponentType"].Voltage && !isInitPowerNode) {
                electric.ResetPos(true);
            }
            else {
                electric.ResetPos(false);
            }
            component.push(electric.circuitComponent);
        });
        this.lstLines.forEach(line => {
            line.ReNamePosName();
        });
        this.lst.forEach(electric => {
            electric.ResetCircuitComponentInfos();
        });
        this.circuitSystem.InitComponents(component);
        this.circuitSystem.PrintNodes();
        let [A, b] = this.circuitSystem.CalculateMatrices();
        console.log(A);
        console.log(b);
        let re = this.circuitSystem.SolveSystem(A, b);
        console.log(re);
    }
}


/***/ }),

/***/ "./src/CircuitSystem/ElectricalBase.ts":
/*!*********************************************!*\
  !*** ./src/CircuitSystem/ElectricalBase.ts ***!
  \*********************************************/
/*! exports provided: ElectricalPos, ElectricalBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalPos", function() { return ElectricalPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalBase", function() { return ElectricalBase; });
/* harmony import */ var _CircuitComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircuitComponent */ "./src/CircuitSystem/CircuitComponent.ts");

class ElectricalPos {
    constructor(o) {
        this.id = ElectricalPos.index++;
        this.owner = o;
        this.name = this.id.toString();
    }
    ;
    GetOwner() {
        return this.owner;
    }
    Reset() {
        this.name = this.id.toString();
    }
}
ElectricalPos.index = 10;
class ElectricalBase {
    constructor(type, v = 1, highStr = "", lowStr = "") {
        this.id = ElectricalBase.index++;
        this.circuitComponent = new _CircuitComponent__WEBPACK_IMPORTED_MODULE_0__["CircuitComponent"](type, "", "", v);
        this.blackPos = new ElectricalPos(this);
        this.redPos = new ElectricalPos(this);
    }
    ;
    //设置高节点位
    SetHighTagPos(highStr) {
        this.circuitComponent.SetTargetPos(highStr, true);
    }
    //设置低节点位
    SetLowTagPos(str) {
        this.circuitComponent.SetTargetPos(str, false);
    }
    //设置数值
    SetValue(value) {
        this.circuitComponent.SetValue(value);
    }
    //重置节点位
    ResetCircuitComponentInfos() {
        this.SetHighTagPos(this.redPos.name);
        this.SetLowTagPos(this.blackPos.name);
    }
    //重置节点位，isZeroPos是否为0电势点即接地点。
    ResetPos(isZeroPos = false) {
        this.blackPos.Reset();
        this.redPos.Reset();
        if (isZeroPos) {
            this.blackPos.name = "Node_0";
            this.redPos.name = "Node_1";
        }
    }
}
ElectricalBase.index = 0;


/***/ }),

/***/ "./src/CircuitSystem/Index.ts":
/*!************************************!*\
  !*** ./src/CircuitSystem/Index.ts ***!
  \************************************/
/*! exports provided: LineConnection, NodeHashtable, CircuitSolveSystem, Ammeter, Battery, Resistor, Voltmeter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineConnection */ "./src/CircuitSystem/LineConnection.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineConnection", function() { return _LineConnection__WEBPACK_IMPORTED_MODULE_0__["LineConnection"]; });

/* harmony import */ var _CircuitSolveSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircuitSolveSystem */ "./src/CircuitSystem/CircuitSolveSystem.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeHashtable", function() { return _CircuitSolveSystem__WEBPACK_IMPORTED_MODULE_1__["NodeHashtable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircuitSolveSystem", function() { return _CircuitSolveSystem__WEBPACK_IMPORTED_MODULE_1__["CircuitSolveSystem"]; });

/* harmony import */ var _Ammeter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ammeter */ "./src/CircuitSystem/Ammeter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ammeter", function() { return _Ammeter__WEBPACK_IMPORTED_MODULE_2__["Ammeter"]; });

/* harmony import */ var _Battery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Battery */ "./src/CircuitSystem/Battery.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Battery", function() { return _Battery__WEBPACK_IMPORTED_MODULE_3__["Battery"]; });

/* harmony import */ var _Resistor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Resistor */ "./src/CircuitSystem/Resistor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resistor", function() { return _Resistor__WEBPACK_IMPORTED_MODULE_4__["Resistor"]; });

/* harmony import */ var _Voltmeter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Voltmeter */ "./src/CircuitSystem/Voltmeter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Voltmeter", function() { return _Voltmeter__WEBPACK_IMPORTED_MODULE_5__["Voltmeter"]; });









/***/ }),

/***/ "./src/CircuitSystem/LineConnection.ts":
/*!*********************************************!*\
  !*** ./src/CircuitSystem/LineConnection.ts ***!
  \*********************************************/
/*! exports provided: LineConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineConnection", function() { return LineConnection; });
class LineConnection {
    constructor() {
        this.isConnected = true;
        this.id = LineConnection.index++;
        this.blackPos = null;
        this.redPos = null;
    }
    ;
    /**
     *红色接头连接
     *
     * @param {ElectricalPos} pos:器材接头
     * @memberof LineConnection
     */
    ConnectBlackPos(pos) {
        this.Connect(false, pos);
    }
    /**
     *黑色接头连接
     *
     * @param {ElectricalPos} pos:器材接头
     * @memberof LineConnection
     */
    ConnectRedPos(pos) {
        this.Connect(true, pos);
    }
    /**
     *黑色接头断开连接
     *
     * @param {ElectricalPos}  pos:器材接头
     * @memberof LineConnection
     */
    DisconnectBlackPos(pos) {
        this.Connect(false, null);
    }
    /**
     *红色接头断开连接
     *
     * @param {ElectricalPos}  pos:器材接头
     * @memberof LineConnection
     */
    DisconnectRedPos(pos) {
        this.Connect(true, null);
    }
    /**
     *导线连接
     *
     * @param {boolean} isRed：是否为红色接头
     * @param {(ElectricalPos | null)} pos：连接的器材的点
     * @memberof LineConnection
     */
    Connect(isRed, pos) {
        if (isRed) {
            this.redPos = pos;
        }
        else {
            this.blackPos = pos;
        }
    }
    /**
     *获取连接此导线的节点的名字
     *如果有以Node_开头的节点，这名该节点已经被命名过直接返回
     *否则返回Node_加Id
     * @return {*}  {string} 节点名字
     * @memberof LineConnection
     */
    GetNodeName() {
        if (this.redPos != null && this.redPos.name.startsWith(LineConnection.NodeStr)) {
            return this.redPos.name;
        }
        if (this.blackPos != null && this.blackPos.name.startsWith(LineConnection.NodeStr)) {
            return this.blackPos.name;
        }
        return "Node_" + this.id;
    }
    //重置节点名字
    ReNamePosName() {
        if (this.redPos != null) {
            if (!this.redPos.name.startsWith(LineConnection.NodeStr)) {
                this.redPos.name = this.GetNodeName();
            }
        }
        if (this.blackPos != null) {
            if (!this.blackPos.name.startsWith(LineConnection.NodeStr)) {
                this.blackPos.name = this.GetNodeName();
            }
        }
    }
}
LineConnection.index = 10;
LineConnection.NodeStr = "Node_";


/***/ }),

/***/ "./src/CircuitSystem/Resistor.ts":
/*!***************************************!*\
  !*** ./src/CircuitSystem/Resistor.ts ***!
  \***************************************/
/*! exports provided: Resistor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resistor", function() { return Resistor; });
/* harmony import */ var _CircuitComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircuitComponent */ "./src/CircuitSystem/CircuitComponent.ts");
/* harmony import */ var _ElectricalBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElectricalBase */ "./src/CircuitSystem/ElectricalBase.ts");


class Resistor extends _ElectricalBase__WEBPACK_IMPORTED_MODULE_1__["ElectricalBase"] {
    constructor(value) {
        super(_CircuitComponent__WEBPACK_IMPORTED_MODULE_0__["ComponentType"].Resistor, value);
    }
    ;
}


/***/ }),

/***/ "./src/CircuitSystem/Voltmeter.ts":
/*!****************************************!*\
  !*** ./src/CircuitSystem/Voltmeter.ts ***!
  \****************************************/
/*! exports provided: Voltmeter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Voltmeter", function() { return Voltmeter; });
/* harmony import */ var _CircuitComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircuitComponent */ "./src/CircuitSystem/CircuitComponent.ts");
/* harmony import */ var _ElectricalBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElectricalBase */ "./src/CircuitSystem/ElectricalBase.ts");


class Voltmeter extends _ElectricalBase__WEBPACK_IMPORTED_MODULE_1__["ElectricalBase"] {
    constructor(value) {
        super(_CircuitComponent__WEBPACK_IMPORTED_MODULE_0__["ComponentType"].Voltage, value);
    }
    ;
}


/***/ }),

/***/ "./src/CircuitSystem/linear.js":
/*!*************************************!*\
  !*** ./src/CircuitSystem/linear.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return solve; });
/**
 * Gauss-Jordan elimination
 * https://github.com/lovasoa/linear-solve
 */


/**
     * Used internally to solve systems
     * If you want to solve A.x = B,
     * choose data=A and mirror=B.
     * mirror can be either an array representing a vector
     * or an array of arrays representing a matrix.
     */
 function Mat(data, mirror) {
  // Clone the original matrix
  this.data = new Array(data.length);
  for (var i=0, cols=data[0].length; i<data.length; i++) {
    this.data[i] = new Array(cols);
    for(var j=0; j<cols; j++) {
      this.data[i][j] = data[i][j];
    }
  }

  if (mirror) {
    if (typeof mirror[0] !== "object") {
      for (var i=0; i<mirror.length; i++) {
        mirror[i] = [mirror[i]];
      }
    }
    this.mirror = new Mat(mirror);
  }
}

/**
 * Swap lines i and j in the matrix
 */
Mat.prototype.swap = function (i, j) {
  if (this.mirror) this.mirror.swap(i,j);
  var tmp = this.data[i];
  this.data[i] = this.data[j];
  this.data[j] = tmp;
}

/**
 * Multiply line number i by l
 */
Mat.prototype.multline = function (i, l) {
  if (this.mirror) this.mirror.multline(i,l);
  var line = this.data[i];
  for (var k=line.length-1; k>=0; k--) {
    line[k] *= l;
  }
}

/**
 * Add line number j multiplied by l to line number i
 */
Mat.prototype.addmul = function (i, j, l) {
  if (this.mirror) this.mirror.addmul(i,j,l);
  var lineI = this.data[i], lineJ = this.data[j];
  for (var k=lineI.length-1; k>=0; k--) {
    lineI[k] = lineI[k] + l*lineJ[k];
  }
}

/**
 * Tests if line number i is composed only of zeroes
 */
Mat.prototype.hasNullLine = function (i) {
  for (var j=0; j<this.data[i].length; j++) {
    if (this.data[i][j] !== 0) {
      return false;
    }
  }
  return true;
}

Mat.prototype.gauss = function() {
  var pivot = 0,
      lines = this.data.length,
      columns = this.data[0].length,
      nullLines = [];

  for (var j=0; j<columns; j++) {
    // Find the line on which there is the maximum value of column j
    var maxValue = 0, maxLine = 0;
    for (var k=pivot; k<lines; k++) {
      var val = this.data[k][j];
      if (Math.abs(val) > Math.abs(maxValue)) {
        maxLine = k;
        maxValue = val;
      } 
    }
    if (maxValue === 0) {
      // The matrix is not invertible. The system may still have solutions.
      nullLines.push(pivot);
    } else {
      // The value of the pivot is maxValue
      this.multline(maxLine, 1/maxValue);
      this.swap(maxLine, pivot);
      for (var i=0; i<lines; i++) {
        if (i !== pivot) {
          this.addmul(i, pivot, -this.data[i][j]);
        }
      }
    }
    pivot++;
  }

  // Check that the system has null lines where it should
  for (var i=0; i<nullLines.length; i++) {
    if (!this.mirror.hasNullLine(nullLines[i])) {
      throw new Error("singular matrix");
    }
  }
  return this.mirror.data;
}

/**
 * Solves A.x = b
 * @param A
 * @param b
 * @return x
 */
 function solve(A, b) {
  var result = new Mat(A,b).gauss();
  if (result.length > 0 && result[0].length === 1) {
    // Convert Nx1 matrices to simple javascript arrays
    for (var i=0; i<result.length; i++) result[i] = result[i][0];
  }
  return result;
}

function identity(n) {
  var id = new Array(n);
  for (var i=0; i<n; i++) {
    id[i] = new Array(n);
    for (var j=0; j<n; j++) {
      id[i][j] = (i === j) ? 1 : 0;
    }
  }
  return id;
}

/**
 * invert a matrix
 */
 function invert(A) {
  return new Mat(A, identity(A.length)).gauss();
}

/***/ }),

/***/ "./src/CircuitSystem/test.ts":
/*!***********************************!*\
  !*** ./src/CircuitSystem/test.ts ***!
  \***********************************/
/*! exports provided: Test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test", function() { return Test; });
/* harmony import */ var _CircuitSystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircuitSystem */ "./src/CircuitSystem/CircuitSystem.ts");
/* harmony import */ var _Voltmeter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Voltmeter */ "./src/CircuitSystem/Voltmeter.ts");
/* harmony import */ var _Resistor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Resistor */ "./src/CircuitSystem/Resistor.ts");



/*
let circuitSystem = new CircuitSystem();
circuitSystem.AddComponent(new CircuitComponent(ComponentType.Resistor,"0","1",4));
circuitSystem.AddComponent(new CircuitComponent(ComponentType.Resistor,"1","7",2));
circuitSystem.AddComponent(new CircuitComponent(ComponentType.Voltage,"7","0",3));
circuitSystem.PrintNodes();

console.log("hello");

console.log(circuitSystem.Zero(4,5));


let [A,b] = circuitSystem.CalculateMatrices();
console.log(A);
console.log(b);

let re = circuitSystem.SolveSystem(A,b);
console.log(re);
*/
class Test {
    static StartTest() {
        let cSystem = new _CircuitSystem__WEBPACK_IMPORTED_MODULE_0__["CircuitSystem"]();
        let v = new _Voltmeter__WEBPACK_IMPORTED_MODULE_1__["Voltmeter"](3);
        let r1 = new _Resistor__WEBPACK_IMPORTED_MODULE_2__["Resistor"](2);
        let r2 = new _Resistor__WEBPACK_IMPORTED_MODULE_2__["Resistor"](4);
        cSystem.Add(v);
        cSystem.Add(r1);
        cSystem.Add(r2);
        let line1 = cSystem.CreateLine();
        line1.ConnectBlackPos(v.blackPos);
        line1.ConnectRedPos(r1.blackPos);
        let line2 = cSystem.CreateLine();
        line2.ConnectBlackPos(v.redPos);
        line2.ConnectRedPos(r2.redPos);
        let line3 = cSystem.CreateLine();
        line3.ConnectBlackPos(r2.redPos);
        line3.ConnectRedPos(r1.redPos);
        cSystem.Solve();
    }
}


/***/ }),

/***/ "./src/Core/GTGameManager.ts":
/*!***********************************!*\
  !*** ./src/Core/GTGameManager.ts ***!
  \***********************************/
/*! exports provided: GTGameManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTGameManager", function() { return GTGameManager; });
/* harmony import */ var _Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Singleton */ "./src/Core/Singleton.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GTUpdateManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GTUpdateManager */ "./src/Core/GTUpdateManager.ts");
/* harmony import */ var _GTJSMonoManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GTJSMonoManager */ "./src/Core/GTJSMonoManager.ts");




class GTGameManager extends _Singleton__WEBPACK_IMPORTED_MODULE_0__["Singleton"] {
    onInit(bindTo) {
        this.updateManager = _GTUpdateManager__WEBPACK_IMPORTED_MODULE_2__["GTUpdateManager"].Instance(_GTUpdateManager__WEBPACK_IMPORTED_MODULE_2__["GTUpdateManager"]);
        csharp__WEBPACK_IMPORTED_MODULE_1__["GT"].GTPuertsAdaptor.OnCreateMonoTs = (mono, moduleName) => this.CreateJSMonoBehaviour(mono, moduleName);
        bindTo.JsUpdate = () => this.onUpdate();
        bindTo.JsOnApplicationQuit = () => this.onApplicationQuit();
    }
    CreateJSMonoBehaviour(mono, moduleName) {
        _GTJSMonoManager__WEBPACK_IMPORTED_MODULE_3__["GTJSMonoManager"].Instance(_GTJSMonoManager__WEBPACK_IMPORTED_MODULE_3__["GTJSMonoManager"]).CreateJSMonoBehaviour(mono, moduleName);
    }
    onUpdate() {
        //js不支持操作符重载所以Vector3的乘这()么用
        //console.log('GTGameManager onUpdate...');
        this.updateManager.Update();
    }
    onApplicationQuit() {
        console.log('OnApplicationQuit...');
    }
}


/***/ }),

/***/ "./src/Core/GTJSMonoBase.ts":
/*!**********************************!*\
  !*** ./src/Core/GTJSMonoBase.ts ***!
  \**********************************/
/*! exports provided: GTJSMonoBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTJSMonoBase", function() { return GTJSMonoBase; });
/* harmony import */ var _GTUpdateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GTUpdateManager */ "./src/Core/GTUpdateManager.ts");

class GTJSMonoBase {
    constructor(bindTo) {
        this.isUpdateOpen = false;
        this.gameObject = bindTo.gameObject;
        this.monoBehaviour = bindTo;
        this.monoBehaviour.JsOnDestroy = () => this.OnDestroy();
        this.monoBehaviour.JsAwake = () => this.OnAwake();
        this.monoBehaviour.JsStart = () => this.OnStart();
    }
    OnUpdate() {
    }
    getUpdateIsOpen() {
        return false;
    }
    OnAwake() {
        console.error("GTJSMonoBase  Awake");
        if (this.getUpdateIsOpen()) {
            let manager = _GTUpdateManager__WEBPACK_IMPORTED_MODULE_0__["GTUpdateManager"].Instance(_GTUpdateManager__WEBPACK_IMPORTED_MODULE_0__["GTUpdateManager"]);
            manager.AddUpdate(this);
        }
    }
    OnStart() {
        console.error("GTJSMonoBase  OnStart");
    }
    OnDestroy() {
        if (this.getUpdateIsOpen()) {
            let manager = _GTUpdateManager__WEBPACK_IMPORTED_MODULE_0__["GTUpdateManager"].Instance(_GTUpdateManager__WEBPACK_IMPORTED_MODULE_0__["GTUpdateManager"]);
            manager.RemoveUpdate(this);
        }
    }
}


/***/ }),

/***/ "./src/Core/GTJSMonoBehaviour.ts":
/*!***************************************!*\
  !*** ./src/Core/GTJSMonoBehaviour.ts ***!
  \***************************************/
/*! exports provided: GTJSMonoBehaviour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTJSMonoBehaviour", function() { return GTJSMonoBehaviour; });
/* harmony import */ var _GTJSMonoBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GTJSMonoBase */ "./src/Core/GTJSMonoBase.ts");

class GTJSMonoBehaviour extends _GTJSMonoBase__WEBPACK_IMPORTED_MODULE_0__["GTJSMonoBase"] {
    constructor(bindTo) {
        super(bindTo);
    }
    getUpdateIsOpen() {
        return true;
    }
    OnUpdate() {
        console.log('GTJSMonoBehaviour onUpdate...');
    }
    onDestroy() {
        console.log('onDestroy...');
    }
}


/***/ }),

/***/ "./src/Core/GTJSMonoManager.ts":
/*!*************************************!*\
  !*** ./src/Core/GTJSMonoManager.ts ***!
  \*************************************/
/*! exports provided: GTJSMonoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTJSMonoManager", function() { return GTJSMonoManager; });
/* harmony import */ var _Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Singleton */ "./src/Core/Singleton.ts");
/* harmony import */ var _GTJSMonoBehaviour__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GTJSMonoBehaviour */ "./src/Core/GTJSMonoBehaviour.ts");


class GTJSMonoManager extends _Singleton__WEBPACK_IMPORTED_MODULE_0__["Singleton"] {
    CreateJSMonoBehaviour(mono, moudle) {
        let jsMono = new _GTJSMonoBehaviour__WEBPACK_IMPORTED_MODULE_1__["GTJSMonoBehaviour"](mono);
        return jsMono;
    }
}


/***/ }),

/***/ "./src/Core/GTUpdateManager.ts":
/*!*************************************!*\
  !*** ./src/Core/GTUpdateManager.ts ***!
  \*************************************/
/*! exports provided: GTUpdateManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTUpdateManager", function() { return GTUpdateManager; });
/* harmony import */ var _Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Singleton */ "./src/Core/Singleton.ts");

class GTUpdateManager extends _Singleton__WEBPACK_IMPORTED_MODULE_0__["Singleton"] {
    constructor() {
        super(...arguments);
        this.updates = new Map();
        this.removeUpdates = [];
    }
    //添加元素
    AddUpdate(update) {
        this.index += 1;
        update.index = this.index;
        this.updates.set(update.index, update);
    }
    RemoveUpdate(update) {
        if (this.updates.has(update.index)) {
            this.removeUpdates.push(update.index);
        }
    }
    Update() {
        if (this.removeUpdates.length > 0) {
            this.removeUpdates.forEach(index => {
                if (this.updates.has(index)) {
                    this.updates.delete(index);
                }
            });
            this.removeUpdates.length = 0;
        }
        //  console.log('GTUpdateManager onUpdate...' + this.updates.size);
        this.updates.forEach((value, key) => { value.OnUpdate(); });
    }
}


/***/ }),

/***/ "./src/Core/GameMain.ts":
/*!******************************!*\
  !*** ./src/Core/GameMain.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GTGameManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GTGameManager */ "./src/Core/GTGameManager.ts");
/* harmony import */ var _CircuitSystem_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CircuitSystem/test */ "./src/CircuitSystem/test.ts");



function init(gtManager) {
    console.log("init");
    console.log(gtManager);
    let t = _GTGameManager__WEBPACK_IMPORTED_MODULE_1__["GTGameManager"].Instance(_GTGameManager__WEBPACK_IMPORTED_MODULE_1__["GTGameManager"]);
    t.onInit(gtManager);
    _CircuitSystem_test__WEBPACK_IMPORTED_MODULE_2__["Test"].StartTest();
}
console.log("1234");
init(csharp__WEBPACK_IMPORTED_MODULE_0__["GT"].GTJSManager.Instance);


/***/ }),

/***/ "./src/Core/Singleton.ts":
/*!*******************************!*\
  !*** ./src/Core/Singleton.ts ***!
  \*******************************/
/*! exports provided: Singleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Singleton", function() { return Singleton; });
class Singleton {
    static Instance(c) {
        if (this.instance == null) {
            this.instance = new c();
        }
        return this.instance;
    }
}
Singleton.instance = null;


/***/ }),

/***/ "./src/Index.ts":
/*!**********************!*\
  !*** ./src/Index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_GameMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/GameMain */ "./src/Core/GameMain.ts");
/* harmony import */ var _CircuitSystem_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircuitSystem/Index */ "./src/CircuitSystem/Index.ts");




/***/ }),

/***/ "csharp":
/*!*************************!*\
  !*** external "csharp" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("csharp");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NpcmN1aXRTeXN0ZW0vQW1tZXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2lyY3VpdFN5c3RlbS9CYXR0ZXJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9DaXJjdWl0U3lzdGVtL0NpcmN1aXRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NpcmN1aXRTeXN0ZW0vQ2lyY3VpdFNvbHZlU3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9DaXJjdWl0U3lzdGVtL0NpcmN1aXRTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NpcmN1aXRTeXN0ZW0vRWxlY3RyaWNhbEJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NpcmN1aXRTeXN0ZW0vSW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NpcmN1aXRTeXN0ZW0vTGluZUNvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NpcmN1aXRTeXN0ZW0vUmVzaXN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NpcmN1aXRTeXN0ZW0vVm9sdG1ldGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9DaXJjdWl0U3lzdGVtL2xpbmVhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2lyY3VpdFN5c3RlbS90ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9Db3JlL0dUR2FtZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvcmUvR1RKU01vbm9CYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9Db3JlL0dUSlNNb25vQmVoYXZpb3VyLnRzIiwid2VicGFjazovLy8uL3NyYy9Db3JlL0dUSlNNb25vTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZS9HVFVwZGF0ZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvcmUvR2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvcmUvU2luZ2xldG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9JbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjc2hhcnBcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQW1FO0FBQ2xCO0FBQzFDLE1BQU0sT0FBUSxTQUFRLDhEQUFjO0lBRXZDLFlBQVksS0FBYztRQUN0QixLQUFLLENBQUMsK0RBQWEsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUFBLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ1BGO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ0Q7QUFDMUMsTUFBTSxPQUFRLFNBQVEsOERBQWM7SUFFdkMsWUFBWSxLQUFjO1FBQ3RCLEtBQUssQ0FBQywrREFBYSxDQUFDLE9BQU8sRUFBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQUEsQ0FBQztDQUNKOzs7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QTtBQUM3QyxTQUFTLElBQUksQ0FBQyxTQUEwQjtJQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDLEdBQUcsNERBQWEsQ0FBQyxRQUFRLENBQWdCLDREQUFhLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXBCLHdEQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsSUFBSSxDQUFDLHlDQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDVjlCO0FBQUE7QUFBTyxNQUFNLFNBQVM7SUFJWCxNQUFNLENBQUMsUUFBUSxDQUFLLENBQWU7UUFFdEMsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDM0I7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7QUFUYyxrQkFBUSxHQUFPLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0p2QztBQUFBO0FBQUE7QUFBd0I7QUFDTzs7Ozs7Ozs7Ozs7O0FDRC9CLG1DIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0luZGV4LnRzXCIpO1xuIiwiaW1wb3J0ICB7Q2lyY3VpdENvbXBvbmVudCxDb21wb25lbnRUeXBlfSBmcm9tICcuL0NpcmN1aXRDb21wb25lbnQnO1xyXG5pbXBvcnQgIHtFbGVjdHJpY2FsQmFzZX0gZnJvbSAnLi9FbGVjdHJpY2FsQmFzZSc7XHJcbmV4cG9ydCBjbGFzcyBBbW1ldGVyIGV4dGVuZHMgRWxlY3RyaWNhbEJhc2VcclxuIHsgXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA6IG51bWJlcikgeyBcclxuICAgICAgICBzdXBlcihDb21wb25lbnRUeXBlLkN1cnJlbnQsdmFsdWUpO1xyXG4gICAgfTtcclxuIH0iLCJpbXBvcnQgIHtDb21wb25lbnRUeXBlfSBmcm9tICcuL0NpcmN1aXRDb21wb25lbnQnO1xyXG5pbXBvcnQgIHtFbGVjdHJpY2FsQmFzZX0gZnJvbSAnLi9FbGVjdHJpY2FsQmFzZSc7XHJcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5IGV4dGVuZHMgRWxlY3RyaWNhbEJhc2VcclxuIHsgXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA6IG51bWJlcikgeyBcclxuICAgICAgICBzdXBlcihDb21wb25lbnRUeXBlLlZvbHRhZ2UsdmFsdWUpO1xyXG4gICAgfTtcclxuIH0iLCJleHBvcnQgZW51bSBDb21wb25lbnRUeXBlIHtcclxuICAgIE5vbmUsXHJcbiAgICBWb2x0YWdlID0gMSxcclxuICAgIEN1cnJlbnQsXHJcbiAgICBSZXNpc3RvcixcclxuICB9XHJcblxyXG4gIC8vaHR0cHM6Ly93d3cuY2lyY3VpdGxhYi5jb20vZWRpdG9yLyNcclxuZXhwb3J0IGNsYXNzIENpcmN1aXRDb21wb25lbnRcclxuIHsgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbmRleDpudW1iZXIgPSAwXHJcbiAgICBpZCA6IG51bWJlclxyXG4gICAgY29tcF90eXBlOkNvbXBvbmVudFR5cGVcclxuICAgIGhpZ2hfbm9kZTpzdHJpbmdcclxuICAgIGxvd19ub2RlOnN0cmluZ1xyXG4gICAgdmFsdWU6bnVtYmVyXHJcbiAgICBoaWdoIDogbnVtYmVyXHJcbiAgICBsb3cgOiBudW1iZXJcclxuXHJcbiAgICBcclxuICAgIC8vIOaehOmAoOWHveaVsCBcclxuICAgIGNvbnN0cnVjdG9yKHR5cGU6Q29tcG9uZW50VHlwZSxoaWdoOnN0cmluZyxsb3c6c3RyaW5nLHY6bnVtYmVyKSB7IFxyXG4gICAgICAgIHRoaXMuaWQgPSBDaXJjdWl0Q29tcG9uZW50LmluZGV4Kys7XHJcbiAgICAgICAgdGhpcy5jb21wX3R5cGUgPSB0eXBlIDtcclxuICAgICAgICB0aGlzLmhpZ2hfbm9kZSA9IGhpZ2g7XHJcbiAgICAgICAgdGhpcy5sb3dfbm9kZSA9IGxvdztcclxuICAgICAgICB0aGlzLnZhbHVlID0gdjtcclxuICAgICAgICB0aGlzLmhpZ2ggPSAtMTtcclxuICAgICAgICB0aGlzLmxvdyA9IC0xO1xyXG4gICAgfTtcclxuXHJcbiAgICBTZXRUYXJnZXRQb3MocG9zOnN0cmluZyxpc0hpZ2g6Ym9vbGVhbik6dm9pZHtcclxuICAgICAgICBpZihpc0hpZ2gpe1xyXG4gICAgICAgICAgICB0aGlzLmhpZ2hfbm9kZSA9IHBvcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5sb3dfbm9kZSA9IHBvcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU2V0VmFsdWUodjpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgLy/nlLXpmLvkuI3lhYHorrjorr7nva7kuLowXHJcbiAgICAgICAgaWYodGhpcy5jb21wX3R5cGUgPT0gQ29tcG9uZW50VHlwZS5SZXNpc3RvciAmJiB2ID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gMC4wMDAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiBcclxuICAgIFByaW50U2VsZigpOnZvaWR7XHJcbiAgICAgICAgbGV0IHN0ciA9ICB0aGlzLmlkICsgXCIgXCIgKyAodGhpcy5jb21wX3R5cGUpICsgXCIgXCIgKyAodGhpcy5oaWdoX25vZGUpICsgXCIgXCJcclxuICAgICAgICArICh0aGlzLmxvd19ub2RlKSArIFwiIFwiICsgKHRoaXMudmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgIExpbmVhclNvbHZlIGZyb20gJy4vbGluZWFyLmpzJztcclxuaW1wb3J0ICB7Q2lyY3VpdENvbXBvbmVudCxDb21wb25lbnRUeXBlfSBmcm9tICcuL0NpcmN1aXRDb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzICBOb2RlSGFzaHRhYmxle1xyXG4gICAgbm9kZXM6IE1hcDxzdHJpbmcsbnVtYmVyPiA9IG5ldyBNYXA8c3RyaW5nLG51bWJlcj4oKTtcclxuICAgIG5vZGVDb3VudDpudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgIH07XHJcblxyXG4gICAgYWRkVG9Ob2Rlcyhub2RlX3N0cjpzdHJpbmcpOm51bWJlcntcclxuICAgICAgICBpZighdGhpcy5ub2Rlcy5oYXMobm9kZV9zdHIpKXtcclxuICAgICAgICAgICAgdGhpcy5ub2Rlcy5zZXQobm9kZV9zdHIsdGhpcy5ub2RlQ291bnQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVDb3VudCArKztcclxuICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIGxldCByZXQgPSB0aGlzLm5vZGVzLmdldChub2RlX3N0cik7XHJcbiAgICAgICAgaWYocmV0ID09IHVuZGVmaW5lZCkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENsZWFuKCk6dm9pZHtcclxuICAgICAgICB0aGlzLm5vZGVzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlQ291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY3VpdFNvbHZlU3lzdGVte1xyXG4gICAgdm9sdGFnZUNvdW50Om51bWJlciA9IDA7XHJcbiAgICBjdXJyZW50Q291bnQ6bnVtYmVyID0gMDtcclxuICAgIHJlc2lzdG9yQ291bnQ6bnVtYmVyID0gMDtcclxuXHJcbiAgICBoYXNoVGFibGUgOiBOb2RlSGFzaHRhYmxlIDtcclxuICAgIGxzdENvbXBvbmVudHMgOiBDaXJjdWl0Q29tcG9uZW50W107XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgICAgdGhpcy5oYXNoVGFibGUgPSBuZXcgTm9kZUhhc2h0YWJsZSgpO1xyXG4gICAgICAgIHRoaXMuaGFzaFRhYmxlLmFkZFRvTm9kZXMoJ05vZGVfMCcpO1xyXG4gICAgICAgIHRoaXMubHN0Q29tcG9uZW50cyA9IFtdO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgQ2xlYW4oKTp2b2lke1xyXG4gICAgICAgIHRoaXMuaGFzaFRhYmxlLkNsZWFuKCk7XHJcbiAgICAgICAgdGhpcy5oYXNoVGFibGUuYWRkVG9Ob2RlcygnTm9kZV8wJyk7XHJcbiAgICAgICAgdGhpcy5sc3RDb21wb25lbnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEluaXRDb21wb25lbnRzKGNvbXBvbmVudHMgOiBDaXJjdWl0Q29tcG9uZW50W10pIDogdm9pZHtcclxuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5BZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBQcmludE5vZGVzKCk6dm9pZHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNpcmN1aXQgSW5mb1wiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcG9uZW50IGNvdW50OiBcIiwgdGhpcy5sc3RDb21wb25lbnRzLmxlbmd0aClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlZvbHRhZ2UgY291bnQ6IFwiLCB0aGlzLnZvbHRhZ2VDb3VudClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgY291bnQ6IFwiLCB0aGlzLmN1cnJlbnRDb3VudClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlc2lzdGFuY2UgY291bnQ6IFwiLCB0aGlzLnJlc2lzdG9yQ291bnQpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOb2RlIGNvdW50OiBcIiwgdGhpcy5oYXNoVGFibGUubm9kZUNvdW50KVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlxcbk5vZGVzIGFyZSBtYXBwZWQgYXMgZm9sbG93aW5nOlwiKTtcclxuICAgICAgICB0aGlzLmhhc2hUYWJsZS5ub2Rlcy5mb3JFYWNoKChrZXksdmFsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXFxcIlwiICsga2V5ICsgXCJcXFwiIDpcIiwgdmFsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJcXG5DaXJjdWl0IENvbXBvbmVudHM6XCIpXHJcbiAgICAgICAgdGhpcy5sc3RDb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgICAgY29tcG9uZW50LlByaW50U2VsZigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBBZGRDb21wb25lbnQoY29tcG9uZW50OkNpcmN1aXRDb21wb25lbnQpIDogdm9pZHtcclxuICAgICAgICBpZihjb21wb25lbnQuY29tcF90eXBlID09IENvbXBvbmVudFR5cGUuQ3VycmVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY29tcG9uZW50LmNvbXBfdHlwZSA9PSBDb21wb25lbnRUeXBlLlJlc2lzdG9yKXtcclxuICAgICAgICAgICAgdGhpcy5yZXNpc3RvckNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY29tcG9uZW50LmNvbXBfdHlwZSA9PSBDb21wb25lbnRUeXBlLlZvbHRhZ2Upe1xyXG4gICAgICAgICAgICB0aGlzLnZvbHRhZ2VDb3VudCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50LmhpZ2ggPSB0aGlzLmhhc2hUYWJsZS5hZGRUb05vZGVzKGNvbXBvbmVudC5oaWdoX25vZGUpXHJcbiAgICAgICAgY29tcG9uZW50LmxvdyA9IHRoaXMuaGFzaFRhYmxlLmFkZFRvTm9kZXMoY29tcG9uZW50Lmxvd19ub2RlKVxyXG5cclxuICAgICAgICB0aGlzLmxzdENvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBDYWxjdWxhdGVNYXRyaWNlcygpOltudW1iZXJbXVtdLG51bWJlcltdXXtcclxuXHJcbiAgICAgICAgbGV0IHZvbHRhZ2VDb3VudCA9IHRoaXMudm9sdGFnZUNvdW50O1xyXG4gICAgICAgIGxldCBpbmR1Y3RvckNvdW50ID0gMDtcclxuICAgICAgICBsZXQgbm9kZUNvdW50ID0gdGhpcy5oYXNoVGFibGUubm9kZUNvdW50O1xyXG4gICAgXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIGcyIGNvbXBvbmVudHNcclxuICAgICAgICBsZXQgZzJDb3VudCA9IHZvbHRhZ2VDb3VudCArIGluZHVjdG9yQ291bnRcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdyb3VwIDIgY291bnQ6XCIrZzJDb3VudClcclxuICAgIFxyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBtYXRyaXggc2l6ZVxyXG4gICAgICAgIGxldCBtYXRyaXhTaXplID0gbm9kZUNvdW50ICsgZzJDb3VudCAtIDFcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1hdHJpeCBzaXplOlwiLCBtYXRyaXhTaXplLCBcIlxcblwiKVxyXG4gICAgXHJcbiAgICAgICAgLy8gZGVmaW5lIE1hdHJpY2VzXHJcbiAgICAgICAgbGV0IEEgPSB0aGlzLlplcm8obWF0cml4U2l6ZSwgbWF0cml4U2l6ZSlcclxuICAgICAgICBsZXQgYiA9IHRoaXMuWmVyb0FycmF5KG1hdHJpeFNpemUpXHJcbiAgICBcclxuICAgICAgICAvLyBHcm91cCAyIGNvbXBvbmVudCBpbmRleFxyXG4gICAgICAgIGxldCBnMkluZGV4ID0gbWF0cml4U2l6ZSAtIGcyQ291bnRcclxuICAgIFxyXG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgY29tcG9uZW50c1xyXG4gICAgICAgIHRoaXMubHN0Q29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudD0+e1xyXG4gICAgICAgICAgICAvLyBzdG9yZSBjb21wb25lbnQgaW5mbyBpbiB0ZW1wb3JhcnkgdmFyaWFibGVcclxuICAgICAgICAgICAgbGV0IGhpZ2ggPSBjb21wb25lbnQuaGlnaFxyXG4gICAgICAgICAgICBsZXQgbG93ID0gY29tcG9uZW50Lmxvd1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBjb21wb25lbnQudmFsdWVcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmNvbXBfdHlwZSA9PSBDb21wb25lbnRUeXBlLlJlc2lzdG9yKXtcclxuICAgICAgICAgICAgICAgIC8vIGFmZmVjdHMgRy1tYXRyaXggb2YgQVxyXG4gICAgICAgICAgICAgICAgLy8gZGlhZ29uYWwgc2VsZi1jb25kdWN0YW5jZSBvZiBub2RlXHJcbiAgICAgICAgICAgICAgICBpZiAoaGlnaCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBBW2hpZ2ggLSAxXVtoaWdoIC0gMV0gPSBBW2hpZ2ggLSAxXVtoaWdoIC0gMV0gKyAxL3ZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAobG93ICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIEFbbG93IC0gMV1bbG93IC0gMV0gPSBBW2xvdyAtIDFdW2xvdyAtIDFdICsgMS92YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiggaGlnaCAhPSAwICYmIGxvdyAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBBW2hpZ2ggLSAxXVtsb3cgLSAxXSA9IEFbaGlnaCAtIDFdW2xvdyAtIDFdIC0gMS92YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIEFbbG93IC0gMV1baGlnaCAtIDFdID0gQVtsb3cgLSAxXVtoaWdoIC0gMV0gLSAxL3ZhbHVlXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2UgaWYoY29tcG9uZW50LmNvbXBfdHlwZSA9PSBDb21wb25lbnRUeXBlLlZvbHRhZ2Upe1xyXG4gICAgICAgICAgICAgICAgLy8gYWZmZWN0cyB0aGUgQiBhbmQgQyBtYXRyaWNlcyBvZiBBXHJcbiAgICAgICAgICAgICAgICBpZiAoaGlnaCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBBW2hpZ2ggLSAxXVtnMkluZGV4XSA9IEFbaGlnaCAtIDFdW2cySW5kZXhdICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIEFbZzJJbmRleF1baGlnaCAtIDFdID0gQVtnMkluZGV4XVtoaWdoIC0gMV0gKyAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChsb3cgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgQVtsb3cgLSAxXVtnMkluZGV4XSA9IEFbbG93IC0gMV1bZzJJbmRleF0gLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgQVtnMkluZGV4XVtsb3cgLSAxXSA9IEFbZzJJbmRleF1bbG93IC0gMV0gLSAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBhZmZlY3RzIGItbWF0cml4XHJcbiAgICAgICAgICAgICAgICBiW2cySW5kZXhdID0gdmFsdWVcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgRzIgY291bnRlclxyXG4gICAgICAgICAgICAgICAgZzJJbmRleCA9IGcySW5kZXggKyAxXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2UgaWYoY29tcG9uZW50LmNvbXBfdHlwZSA9PSBDb21wb25lbnRUeXBlLkN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgIC8vIGFmZmVjdHMgYi1tYXRyaXhcclxuICAgICAgICAgICAgICAgICBpZiAoaGlnaCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBiW2hpZ2ggLSAxXSA9IGJbaGlnaCAtIDFdIC0gdmFsdWVcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgaWYgKGxvdyAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBiW2xvdyAtIDFdID0gYltsb3cgLSAxXSArIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gW0EsYl1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU29sdmVTeXN0ZW0oQTpudW1iZXJbXVtdLCBiOm51bWJlcltdKTpudW1iZXJbXXtcclxuICAgICAgICBsZXQgeCA9IExpbmVhclNvbHZlKEEsIGIpXHJcbiAgICAgICAgcmV0dXJuIHhcclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgcHVibGljIFplcm8ocm93Om51bWJlcixjb2w6bnVtYmVyKSA6IG51bWJlcltdW117XHJcbiAgICAgICAgbGV0IHJldCA6IG51bWJlcltdW10gPSBbXTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgIGZvcihpID0gMDtpIDwgcm93O2krKyl7XHJcbiAgICAgICAgICAgIHJldFtpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IoaiA9IDA7aiA8IGNvbDtqKyspe1xyXG4gICAgICAgICAgICAgICAgcmV0W2ldW2pdID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBaZXJvQXJyYXkoY29sOm51bWJlcikgOiBudW1iZXJbXXtcclxuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGxldCBpIDogbnVtYmVyID0gMDtcclxuICAgICAgICBmb3IoaSA9IDA7aSA8IGNvbDtpKyspe1xyXG4gICAgICAgICAgICByZXRbaV0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHtDaXJjdWl0Q29tcG9uZW50LCBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi9DaXJjdWl0Q29tcG9uZW50JztcclxuaW1wb3J0ICB7RWxlY3RyaWNhbEJhc2V9IGZyb20gJy4vRWxlY3RyaWNhbEJhc2UnO1xyXG5pbXBvcnQgIHtMaW5lQ29ubmVjdGlvbn0gZnJvbSAnLi9MaW5lQ29ubmVjdGlvbic7XHJcbmltcG9ydCAge0NpcmN1aXRTb2x2ZVN5c3RlbX0gZnJvbSAnLi9DaXJjdWl0U29sdmVTeXN0ZW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIENpcmN1aXRTeXN0ZW1cclxue1xyXG4gICAgbHN0OkVsZWN0cmljYWxCYXNlW107XHJcbiAgICBsc3RMaW5lczpMaW5lQ29ubmVjdGlvbltdIDtcclxuICAgIGNpcmN1aXRTeXN0ZW06Q2lyY3VpdFNvbHZlU3lzdGVtIDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgICAgdGhpcy5sc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmxzdExpbmVzID0gW107XHJcbiAgICAgICAgdGhpcy5jaXJjdWl0U3lzdGVtID0gbmV3IENpcmN1aXRTb2x2ZVN5c3RlbSgpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcHVibGljIEFkZChlbGVjdDpFbGVjdHJpY2FsQmFzZSk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5sc3QucHVzaChlbGVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbW92ZShlbGVjdDpFbGVjdHJpY2FsQmFzZSk6dm9pZHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmxzdC5pbmRleE9mKGVsZWN0KTtcclxuICAgICAgICBpZihpbmRleCA+IC0xKXtcclxuICAgICAgICAgICAgdGhpcy5sc3Quc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBDcmVhdGVMaW5lKCk6TGluZUNvbm5lY3Rpb257XHJcbiAgICAgICAgbGV0IGxpbmUgPSBuZXcgTGluZUNvbm5lY3Rpb24oKTtcclxuICAgICAgICB0aGlzLmxzdExpbmVzLnB1c2gobGluZSk7XHJcbiAgICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbW92ZUxpbmUobGluZTpMaW5lQ29ubmVjdGlvbik6dm9pZHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmxzdExpbmVzLmluZGV4T2YobGluZSk7XHJcbiAgICAgICAgaWYoaW5kZXggPiAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMubHN0TGluZXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU29sdmUoKTp2b2lke1xyXG4gICAgICAgIGxldCBpc0luaXRQb3dlck5vZGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjb21wb25lbnQ6Q2lyY3VpdENvbXBvbmVudFtdID0gW107XHJcbiAgICAgICAgdGhpcy5sc3QuZm9yRWFjaChlbGVjdHJpYyA9PntcclxuICAgICAgICAgICAgaWYoZWxlY3RyaWMuY2lyY3VpdENvbXBvbmVudC5jb21wX3R5cGUgPT0gQ29tcG9uZW50VHlwZS5Wb2x0YWdlICYmICFpc0luaXRQb3dlck5vZGUpe1xyXG4gICAgICAgICAgICAgICAgZWxlY3RyaWMuUmVzZXRQb3ModHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGVsZWN0cmljLlJlc2V0UG9zKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb21wb25lbnQucHVzaChlbGVjdHJpYy5jaXJjdWl0Q29tcG9uZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sc3RMaW5lcy5mb3JFYWNoKGxpbmUgPT57XHJcbiAgICAgICAgICAgIGxpbmUuUmVOYW1lUG9zTmFtZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxzdC5mb3JFYWNoKGVsZWN0cmljID0+e1xyXG4gICAgICAgICAgICBlbGVjdHJpYy5SZXNldENpcmN1aXRDb21wb25lbnRJbmZvcygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNpcmN1aXRTeXN0ZW0uSW5pdENvbXBvbmVudHMoY29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaXJjdWl0U3lzdGVtLlByaW50Tm9kZXMoKTtcclxuXHJcbiAgICAgICAgbGV0IFtBLGJdID0gdGhpcy5jaXJjdWl0U3lzdGVtLkNhbGN1bGF0ZU1hdHJpY2VzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coQSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYik7XHJcblxyXG4gICAgICAgIGxldCByZSA9IHRoaXMuY2lyY3VpdFN5c3RlbS5Tb2x2ZVN5c3RlbShBLGIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlKTtcclxuICAgIH1cclxufSIsImltcG9ydCAge0NpcmN1aXRDb21wb25lbnQsQ29tcG9uZW50VHlwZX0gZnJvbSAnLi9DaXJjdWl0Q29tcG9uZW50JztcclxuXHJcbnR5cGUgTnVsbGFibGU8VD4gPSBUIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbGVjdHJpY2FsUG9ze1xyXG4gICAgc3RhdGljIGluZGV4Om51bWJlciA9IDEwO1xyXG4gICAgcHJpdmF0ZSBpZDpudW1iZXI7XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIHByaXZhdGUgb3duZXI6RWxlY3RyaWNhbEJhc2U7XHJcbiAgICBjb25zdHJ1Y3RvcihvOkVsZWN0cmljYWxCYXNlKSB7IFxyXG4gICAgICAgIHRoaXMuaWQgPSBFbGVjdHJpY2FsUG9zLmluZGV4Kys7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IG87XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5pZC50b1N0cmluZygpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIEdldE93bmVyKCk6RWxlY3RyaWNhbEJhc2V7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3duZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlc2V0KCk6dm9pZHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmlkLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbGVjdHJpY2FsQmFzZVxyXG4geyBcclxuICAgICBwcml2YXRlIHN0YXRpYyBpbmRleCA6IG51bWJlciA9IDA7XHJcbiAgICBjaXJjdWl0Q29tcG9uZW50IDogQ2lyY3VpdENvbXBvbmVudDtcclxuICAgIGlkOm51bWJlcjtcclxuICAgIHB1YmxpYyBibGFja1BvczpFbGVjdHJpY2FsUG9zOy8v6buR6Imy6KGo56S66LSf5p6BXHJcbiAgICBwdWJsaWMgcmVkUG9zOkVsZWN0cmljYWxQb3M7Ly/nuqLoibLooajnpLrmraPmnoFcclxuICAgIGNvbnN0cnVjdG9yKHR5cGU6Q29tcG9uZW50VHlwZSx2Om51bWJlciA9IDEsaGlnaFN0cjpzdHJpbmcgPSBcIlwiLGxvd1N0cjpzdHJpbmcgPSBcIlwiKSB7IFxyXG4gICAgICAgIHRoaXMuaWQgPSBFbGVjdHJpY2FsQmFzZS5pbmRleCsrO1xyXG4gICAgICAgIHRoaXMuY2lyY3VpdENvbXBvbmVudCA9IG5ldyBDaXJjdWl0Q29tcG9uZW50KHR5cGUsXCJcIixcIlwiLHYpO1xyXG4gICAgICAgIHRoaXMuYmxhY2tQb3MgPSBuZXcgRWxlY3RyaWNhbFBvcyh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlZFBvcyA9IG5ldyBFbGVjdHJpY2FsUG9zKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL+iuvue9rumrmOiKgueCueS9jVxyXG4gICAgU2V0SGlnaFRhZ1BvcyhoaWdoU3RyOnN0cmluZykgOiB2b2lke1xyXG4gICAgICAgIHRoaXMuY2lyY3VpdENvbXBvbmVudC5TZXRUYXJnZXRQb3MoaGlnaFN0cix0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iuvue9ruS9juiKgueCueS9jVxyXG4gICAgU2V0TG93VGFnUG9zKHN0cjpzdHJpbmcpIDogdm9pZHtcclxuICAgICAgICB0aGlzLmNpcmN1aXRDb21wb25lbnQuU2V0VGFyZ2V0UG9zKHN0cixmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/orr7nva7mlbDlgLxcclxuICAgIFNldFZhbHVlKHZhbHVlOm51bWJlcik6dm9pZHtcclxuICAgICAgICB0aGlzLmNpcmN1aXRDb21wb25lbnQuU2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6YeN572u6IqC54K55L2NXHJcbiAgICBSZXNldENpcmN1aXRDb21wb25lbnRJbmZvcygpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5TZXRIaWdoVGFnUG9zKHRoaXMucmVkUG9zLm5hbWUpO1xyXG4gICAgICAgIHRoaXMuU2V0TG93VGFnUG9zKHRoaXMuYmxhY2tQb3MubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ph43nva7oioLngrnkvY3vvIxpc1plcm9Qb3PmmK/lkKbkuLow55S15Yq/54K55Y2z5o6l5Zyw54K544CCXHJcbiAgICBSZXNldFBvcyhpc1plcm9Qb3M6Ym9vbGVhbiA9IGZhbHNlKTp2b2lke1xyXG4gICAgICAgIHRoaXMuYmxhY2tQb3MuUmVzZXQoKTtcclxuICAgICAgICB0aGlzLnJlZFBvcy5SZXNldCgpO1xyXG4gICAgICAgIGlmKGlzWmVyb1Bvcyl7XHJcbiAgICAgICAgICAgIHRoaXMuYmxhY2tQb3MubmFtZSA9IFwiTm9kZV8wXCJcclxuICAgICAgICAgICAgdGhpcy5yZWRQb3MubmFtZSA9IFwiTm9kZV8xXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiB9IiwiZXhwb3J0ICAgKiBmcm9tICcuL0xpbmVDb25uZWN0aW9uJztcclxuZXhwb3J0ICAgKiBmcm9tICcuL0NpcmN1aXRTb2x2ZVN5c3RlbSc7XHJcbmV4cG9ydCAgICogZnJvbSAnLi9BbW1ldGVyJztcclxuZXhwb3J0ICAgKiBmcm9tICcuL0JhdHRlcnknO1xyXG5leHBvcnQgICAqIGZyb20gJy4vUmVzaXN0b3InO1xyXG5leHBvcnQgICAqIGZyb20gJy4vVm9sdG1ldGVyJzsiLCJpbXBvcnQgIHtFbGVjdHJpY2FsQmFzZSxFbGVjdHJpY2FsUG9zfSBmcm9tICcuL0VsZWN0cmljYWxCYXNlJztcclxuZXhwb3J0IGNsYXNzIExpbmVDb25uZWN0aW9uIFxyXG4geyBcclxuICAgIHByaXZhdGUgc3RhdGljIGluZGV4Om51bWJlciA9IDEwO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgTm9kZVN0cjpzdHJpbmcgPSBcIk5vZGVfXCI7XHJcbiAgICBwcml2YXRlIGlkOm51bWJlcjtcclxuICAgIHB1YmxpYyBibGFja1BvczpFbGVjdHJpY2FsUG9zfG51bGw7Ly/otJ/mnoFcclxuICAgIHB1YmxpYyByZWRQb3M6RWxlY3RyaWNhbFBvc3xudWxsOy8v5q2j5p6BXHJcblxyXG4gICAgcHVibGljIGlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgICAgdGhpcy5pZCA9IExpbmVDb25uZWN0aW9uLmluZGV4Kys7XHJcbiAgICAgICAgdGhpcy5ibGFja1BvcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWRQb3MgPSBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAq57qi6Imy5o6l5aS06L+e5o6lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVjdHJpY2FsUG9zfSBwb3M65Zmo5p2Q5o6l5aS0XHJcbiAgICAgKiBAbWVtYmVyb2YgTGluZUNvbm5lY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIENvbm5lY3RCbGFja1Bvcyhwb3M6RWxlY3RyaWNhbFBvcyl7XHJcbiAgICAgICAgdGhpcy5Db25uZWN0KGZhbHNlLHBvcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAq6buR6Imy5o6l5aS06L+e5o6lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVjdHJpY2FsUG9zfSBwb3M65Zmo5p2Q5o6l5aS0XHJcbiAgICAgKiBAbWVtYmVyb2YgTGluZUNvbm5lY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIENvbm5lY3RSZWRQb3MocG9zOkVsZWN0cmljYWxQb3Mpe1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdCh0cnVlLHBvcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICrpu5HoibLmjqXlpLTmlq3lvIDov57mjqVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZWN0cmljYWxQb3N9ICBwb3M65Zmo5p2Q5o6l5aS0XHJcbiAgICAgKiBAbWVtYmVyb2YgTGluZUNvbm5lY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIERpc2Nvbm5lY3RCbGFja1Bvcyhwb3M6RWxlY3RyaWNhbFBvcyl7XHJcbiAgICAgICAgdGhpcy5Db25uZWN0KGZhbHNlLG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICrnuqLoibLmjqXlpLTmlq3lvIDov57mjqVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZWN0cmljYWxQb3N9ICBwb3M65Zmo5p2Q5o6l5aS0XHJcbiAgICAgKiBAbWVtYmVyb2YgTGluZUNvbm5lY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIERpc2Nvbm5lY3RSZWRQb3MocG9zOkVsZWN0cmljYWxQb3Mpe1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdCh0cnVlLG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICrlr7znur/ov57mjqVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzUmVk77ya5piv5ZCm5Li657qi6Imy5o6l5aS0IFxyXG4gICAgICogQHBhcmFtIHsoRWxlY3RyaWNhbFBvcyB8IG51bGwpfSBwb3PvvJrov57mjqXnmoTlmajmnZDnmoTngrlcclxuICAgICAqIEBtZW1iZXJvZiBMaW5lQ29ubmVjdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ29ubmVjdChpc1JlZDpib29sZWFuLHBvczpFbGVjdHJpY2FsUG9zIHwgbnVsbCk6dm9pZHtcclxuICAgICAgICBpZihpc1JlZCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVkUG9zID0gcG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmJsYWNrUG9zID0gcG9zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKuiOt+WPlui/nuaOpeatpOWvvOe6v+eahOiKgueCueeahOWQjeWtl1xyXG4gICAgICrlpoLmnpzmnInku6VOb2RlX+W8gOWktOeahOiKgueCue+8jOi/meWQjeivpeiKgueCueW3sue7j+iiq+WRveWQjei/h+ebtOaOpei/lOWbnlxyXG4gICAgICrlkKbliJnov5Tlm55Ob2RlX+WKoElkXHJcbiAgICAgKiBAcmV0dXJuIHsqfSAge3N0cmluZ30g6IqC54K55ZCN5a2XXHJcbiAgICAgKiBAbWVtYmVyb2YgTGluZUNvbm5lY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIEdldE5vZGVOYW1lKCk6c3RyaW5ne1xyXG5cclxuICAgICAgICBpZih0aGlzLnJlZFBvcyE9IG51bGwgJiYgdGhpcy5yZWRQb3MubmFtZS5zdGFydHNXaXRoKExpbmVDb25uZWN0aW9uLk5vZGVTdHIpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVkUG9zLm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmJsYWNrUG9zIT0gbnVsbCAmJiB0aGlzLmJsYWNrUG9zLm5hbWUuc3RhcnRzV2l0aChMaW5lQ29ubmVjdGlvbi5Ob2RlU3RyKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJsYWNrUG9zLm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gXCJOb2RlX1wiICsgdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICAvL+mHjee9ruiKgueCueWQjeWtl1xyXG4gICAgcHVibGljIFJlTmFtZVBvc05hbWUoKTp2b2lke1xyXG4gICAgICAgIGlmKHRoaXMucmVkUG9zICE9IG51bGwpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5yZWRQb3MubmFtZS5zdGFydHNXaXRoKExpbmVDb25uZWN0aW9uLk5vZGVTdHIpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkUG9zLm5hbWUgPSB0aGlzLkdldE5vZGVOYW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYmxhY2tQb3MgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmJsYWNrUG9zLm5hbWUuc3RhcnRzV2l0aChMaW5lQ29ubmVjdGlvbi5Ob2RlU3RyKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsYWNrUG9zLm5hbWUgPSB0aGlzLkdldE5vZGVOYW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiB9IiwiaW1wb3J0ICB7Q2lyY3VpdENvbXBvbmVudCxDb21wb25lbnRUeXBlfSBmcm9tICcuL0NpcmN1aXRDb21wb25lbnQnO1xyXG5pbXBvcnQgIHtFbGVjdHJpY2FsQmFzZX0gZnJvbSAnLi9FbGVjdHJpY2FsQmFzZSc7XHJcbmV4cG9ydCBjbGFzcyBSZXNpc3RvciBleHRlbmRzIEVsZWN0cmljYWxCYXNlXHJcbiB7IFxyXG4gICAgY29uc3RydWN0b3IodmFsdWUgOiBudW1iZXIpIHsgXHJcbiAgICAgICAgc3VwZXIoQ29tcG9uZW50VHlwZS5SZXNpc3Rvcix2YWx1ZSk7XHJcbiAgICB9O1xyXG4gfSIsImltcG9ydCAge0NpcmN1aXRDb21wb25lbnQsQ29tcG9uZW50VHlwZX0gZnJvbSAnLi9DaXJjdWl0Q29tcG9uZW50JztcclxuaW1wb3J0ICB7RWxlY3RyaWNhbEJhc2V9IGZyb20gJy4vRWxlY3RyaWNhbEJhc2UnO1xyXG5leHBvcnQgY2xhc3MgVm9sdG1ldGVyIGV4dGVuZHMgRWxlY3RyaWNhbEJhc2VcclxuIHsgXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA6IG51bWJlcikgeyBcclxuICAgICAgICBzdXBlcihDb21wb25lbnRUeXBlLlZvbHRhZ2UsdmFsdWUpO1xyXG4gICAgfTtcclxuIH0iLCIvKipcclxuICogR2F1c3MtSm9yZGFuIGVsaW1pbmF0aW9uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9sb3Zhc29hL2xpbmVhci1zb2x2ZVxyXG4gKi9cclxuXHJcblxyXG4vKipcclxuICAgICAqIFVzZWQgaW50ZXJuYWxseSB0byBzb2x2ZSBzeXN0ZW1zXHJcbiAgICAgKiBJZiB5b3Ugd2FudCB0byBzb2x2ZSBBLnggPSBCLFxyXG4gICAgICogY2hvb3NlIGRhdGE9QSBhbmQgbWlycm9yPUIuXHJcbiAgICAgKiBtaXJyb3IgY2FuIGJlIGVpdGhlciBhbiBhcnJheSByZXByZXNlbnRpbmcgYSB2ZWN0b3JcclxuICAgICAqIG9yIGFuIGFycmF5IG9mIGFycmF5cyByZXByZXNlbnRpbmcgYSBtYXRyaXguXHJcbiAgICAgKi9cclxuIGZ1bmN0aW9uIE1hdChkYXRhLCBtaXJyb3IpIHtcclxuICAvLyBDbG9uZSB0aGUgb3JpZ2luYWwgbWF0cml4XHJcbiAgdGhpcy5kYXRhID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcclxuICBmb3IgKHZhciBpPTAsIGNvbHM9ZGF0YVswXS5sZW5ndGg7IGk8ZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgdGhpcy5kYXRhW2ldID0gbmV3IEFycmF5KGNvbHMpO1xyXG4gICAgZm9yKHZhciBqPTA7IGo8Y29sczsgaisrKSB7XHJcbiAgICAgIHRoaXMuZGF0YVtpXVtqXSA9IGRhdGFbaV1bal07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAobWlycm9yKSB7XHJcbiAgICBpZiAodHlwZW9mIG1pcnJvclswXSAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICBmb3IgKHZhciBpPTA7IGk8bWlycm9yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbWlycm9yW2ldID0gW21pcnJvcltpXV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubWlycm9yID0gbmV3IE1hdChtaXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFN3YXAgbGluZXMgaSBhbmQgaiBpbiB0aGUgbWF0cml4XHJcbiAqL1xyXG5NYXQucHJvdG90eXBlLnN3YXAgPSBmdW5jdGlvbiAoaSwgaikge1xyXG4gIGlmICh0aGlzLm1pcnJvcikgdGhpcy5taXJyb3Iuc3dhcChpLGopO1xyXG4gIHZhciB0bXAgPSB0aGlzLmRhdGFbaV07XHJcbiAgdGhpcy5kYXRhW2ldID0gdGhpcy5kYXRhW2pdO1xyXG4gIHRoaXMuZGF0YVtqXSA9IHRtcDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE11bHRpcGx5IGxpbmUgbnVtYmVyIGkgYnkgbFxyXG4gKi9cclxuTWF0LnByb3RvdHlwZS5tdWx0bGluZSA9IGZ1bmN0aW9uIChpLCBsKSB7XHJcbiAgaWYgKHRoaXMubWlycm9yKSB0aGlzLm1pcnJvci5tdWx0bGluZShpLGwpO1xyXG4gIHZhciBsaW5lID0gdGhpcy5kYXRhW2ldO1xyXG4gIGZvciAodmFyIGs9bGluZS5sZW5ndGgtMTsgaz49MDsgay0tKSB7XHJcbiAgICBsaW5lW2tdICo9IGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQWRkIGxpbmUgbnVtYmVyIGogbXVsdGlwbGllZCBieSBsIHRvIGxpbmUgbnVtYmVyIGlcclxuICovXHJcbk1hdC5wcm90b3R5cGUuYWRkbXVsID0gZnVuY3Rpb24gKGksIGosIGwpIHtcclxuICBpZiAodGhpcy5taXJyb3IpIHRoaXMubWlycm9yLmFkZG11bChpLGosbCk7XHJcbiAgdmFyIGxpbmVJID0gdGhpcy5kYXRhW2ldLCBsaW5lSiA9IHRoaXMuZGF0YVtqXTtcclxuICBmb3IgKHZhciBrPWxpbmVJLmxlbmd0aC0xOyBrPj0wOyBrLS0pIHtcclxuICAgIGxpbmVJW2tdID0gbGluZUlba10gKyBsKmxpbmVKW2tdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRlc3RzIGlmIGxpbmUgbnVtYmVyIGkgaXMgY29tcG9zZWQgb25seSBvZiB6ZXJvZXNcclxuICovXHJcbk1hdC5wcm90b3R5cGUuaGFzTnVsbExpbmUgPSBmdW5jdGlvbiAoaSkge1xyXG4gIGZvciAodmFyIGo9MDsgajx0aGlzLmRhdGFbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgIGlmICh0aGlzLmRhdGFbaV1bal0gIT09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuTWF0LnByb3RvdHlwZS5nYXVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwaXZvdCA9IDAsXHJcbiAgICAgIGxpbmVzID0gdGhpcy5kYXRhLmxlbmd0aCxcclxuICAgICAgY29sdW1ucyA9IHRoaXMuZGF0YVswXS5sZW5ndGgsXHJcbiAgICAgIG51bGxMaW5lcyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBqPTA7IGo8Y29sdW1uczsgaisrKSB7XHJcbiAgICAvLyBGaW5kIHRoZSBsaW5lIG9uIHdoaWNoIHRoZXJlIGlzIHRoZSBtYXhpbXVtIHZhbHVlIG9mIGNvbHVtbiBqXHJcbiAgICB2YXIgbWF4VmFsdWUgPSAwLCBtYXhMaW5lID0gMDtcclxuICAgIGZvciAodmFyIGs9cGl2b3Q7IGs8bGluZXM7IGsrKykge1xyXG4gICAgICB2YXIgdmFsID0gdGhpcy5kYXRhW2tdW2pdO1xyXG4gICAgICBpZiAoTWF0aC5hYnModmFsKSA+IE1hdGguYWJzKG1heFZhbHVlKSkge1xyXG4gICAgICAgIG1heExpbmUgPSBrO1xyXG4gICAgICAgIG1heFZhbHVlID0gdmFsO1xyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gICAgaWYgKG1heFZhbHVlID09PSAwKSB7XHJcbiAgICAgIC8vIFRoZSBtYXRyaXggaXMgbm90IGludmVydGlibGUuIFRoZSBzeXN0ZW0gbWF5IHN0aWxsIGhhdmUgc29sdXRpb25zLlxyXG4gICAgICBudWxsTGluZXMucHVzaChwaXZvdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBUaGUgdmFsdWUgb2YgdGhlIHBpdm90IGlzIG1heFZhbHVlXHJcbiAgICAgIHRoaXMubXVsdGxpbmUobWF4TGluZSwgMS9tYXhWYWx1ZSk7XHJcbiAgICAgIHRoaXMuc3dhcChtYXhMaW5lLCBwaXZvdCk7XHJcbiAgICAgIGZvciAodmFyIGk9MDsgaTxsaW5lczsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgIT09IHBpdm90KSB7XHJcbiAgICAgICAgICB0aGlzLmFkZG11bChpLCBwaXZvdCwgLXRoaXMuZGF0YVtpXVtqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwaXZvdCsrO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgdGhhdCB0aGUgc3lzdGVtIGhhcyBudWxsIGxpbmVzIHdoZXJlIGl0IHNob3VsZFxyXG4gIGZvciAodmFyIGk9MDsgaTxudWxsTGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICghdGhpcy5taXJyb3IuaGFzTnVsbExpbmUobnVsbExpbmVzW2ldKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaW5ndWxhciBtYXRyaXhcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLm1pcnJvci5kYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogU29sdmVzIEEueCA9IGJcclxuICogQHBhcmFtIEFcclxuICogQHBhcmFtIGJcclxuICogQHJldHVybiB4XHJcbiAqL1xyXG4gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29sdmUoQSwgYikge1xyXG4gIHZhciByZXN1bHQgPSBuZXcgTWF0KEEsYikuZ2F1c3MoKTtcclxuICBpZiAocmVzdWx0Lmxlbmd0aCA+IDAgJiYgcmVzdWx0WzBdLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgLy8gQ29udmVydCBOeDEgbWF0cmljZXMgdG8gc2ltcGxlIGphdmFzY3JpcHQgYXJyYXlzXHJcbiAgICBmb3IgKHZhciBpPTA7IGk8cmVzdWx0Lmxlbmd0aDsgaSsrKSByZXN1bHRbaV0gPSByZXN1bHRbaV1bMF07XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlkZW50aXR5KG4pIHtcclxuICB2YXIgaWQgPSBuZXcgQXJyYXkobik7XHJcbiAgZm9yICh2YXIgaT0wOyBpPG47IGkrKykge1xyXG4gICAgaWRbaV0gPSBuZXcgQXJyYXkobik7XHJcbiAgICBmb3IgKHZhciBqPTA7IGo8bjsgaisrKSB7XHJcbiAgICAgIGlkW2ldW2pdID0gKGkgPT09IGopID8gMSA6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBpZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIGludmVydCBhIG1hdHJpeFxyXG4gKi9cclxuIGZ1bmN0aW9uIGludmVydChBKSB7XHJcbiAgcmV0dXJuIG5ldyBNYXQoQSwgaWRlbnRpdHkoQS5sZW5ndGgpKS5nYXVzcygpO1xyXG59IiwiaW1wb3J0ICB7Q2lyY3VpdFN5c3RlbX0gZnJvbSAnLi9DaXJjdWl0U3lzdGVtJztcclxuaW1wb3J0ICB7Vm9sdG1ldGVyfSBmcm9tICcuL1ZvbHRtZXRlcic7XHJcbmltcG9ydCAge1Jlc2lzdG9yfSBmcm9tICcuL1Jlc2lzdG9yJztcclxuXHJcbi8qXHJcbmxldCBjaXJjdWl0U3lzdGVtID0gbmV3IENpcmN1aXRTeXN0ZW0oKTtcclxuY2lyY3VpdFN5c3RlbS5BZGRDb21wb25lbnQobmV3IENpcmN1aXRDb21wb25lbnQoQ29tcG9uZW50VHlwZS5SZXNpc3RvcixcIjBcIixcIjFcIiw0KSk7XHJcbmNpcmN1aXRTeXN0ZW0uQWRkQ29tcG9uZW50KG5ldyBDaXJjdWl0Q29tcG9uZW50KENvbXBvbmVudFR5cGUuUmVzaXN0b3IsXCIxXCIsXCI3XCIsMikpO1xyXG5jaXJjdWl0U3lzdGVtLkFkZENvbXBvbmVudChuZXcgQ2lyY3VpdENvbXBvbmVudChDb21wb25lbnRUeXBlLlZvbHRhZ2UsXCI3XCIsXCIwXCIsMykpO1xyXG5jaXJjdWl0U3lzdGVtLlByaW50Tm9kZXMoKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiaGVsbG9cIik7XHJcblxyXG5jb25zb2xlLmxvZyhjaXJjdWl0U3lzdGVtLlplcm8oNCw1KSk7XHJcblxyXG5cclxubGV0IFtBLGJdID0gY2lyY3VpdFN5c3RlbS5DYWxjdWxhdGVNYXRyaWNlcygpO1xyXG5jb25zb2xlLmxvZyhBKTtcclxuY29uc29sZS5sb2coYik7XHJcblxyXG5sZXQgcmUgPSBjaXJjdWl0U3lzdGVtLlNvbHZlU3lzdGVtKEEsYik7XHJcbmNvbnNvbGUubG9nKHJlKTtcclxuKi9cclxuZXhwb3J0IGNsYXNzIFRlc3R7XHJcbiAgICBzdGF0aWMgU3RhcnRUZXN0KCk6dm9pZHtcclxuICAgICAgICBsZXQgY1N5c3RlbSA9IG5ldyBDaXJjdWl0U3lzdGVtKCk7XHJcbiAgICAgICAgbGV0IHY6Vm9sdG1ldGVyID0gbmV3IFZvbHRtZXRlcigzKTtcclxuICAgICAgICBsZXQgcjE6UmVzaXN0b3IgPSBuZXcgUmVzaXN0b3IoMik7XHJcbiAgICAgICAgbGV0IHIyOlJlc2lzdG9yID0gbmV3IFJlc2lzdG9yKDQpO1xyXG4gICAgICAgIGNTeXN0ZW0uQWRkKHYpO1xyXG4gICAgICAgIGNTeXN0ZW0uQWRkKHIxKTtcclxuICAgICAgICBjU3lzdGVtLkFkZChyMik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGxpbmUxID0gY1N5c3RlbS5DcmVhdGVMaW5lKCk7XHJcbiAgICAgICAgbGluZTEuQ29ubmVjdEJsYWNrUG9zKHYuYmxhY2tQb3MpO1xyXG4gICAgICAgIGxpbmUxLkNvbm5lY3RSZWRQb3MocjEuYmxhY2tQb3MpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBsaW5lMiA9IGNTeXN0ZW0uQ3JlYXRlTGluZSgpO1xyXG4gICAgICAgIGxpbmUyLkNvbm5lY3RCbGFja1Bvcyh2LnJlZFBvcyk7XHJcbiAgICAgICAgbGluZTIuQ29ubmVjdFJlZFBvcyhyMi5yZWRQb3MpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBsaW5lMyA9IGNTeXN0ZW0uQ3JlYXRlTGluZSgpO1xyXG4gICAgICAgIGxpbmUzLkNvbm5lY3RCbGFja1BvcyhyMi5yZWRQb3MpO1xyXG4gICAgICAgIGxpbmUzLkNvbm5lY3RSZWRQb3MocjEucmVkUG9zKTtcclxuICAgICAgICBcclxuICAgICAgICBjU3lzdGVtLlNvbHZlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi9TaW5nbGV0b24nO1xyXG5pbXBvcnQge0dULFVuaXR5RW5naW5lfSBmcm9tICdjc2hhcnAnXHJcbmltcG9ydCB7R1RVcGRhdGVNYW5hZ2VyfSBmcm9tICcuL0dUVXBkYXRlTWFuYWdlcidcclxuaW1wb3J0IHtHVEpTTW9ub01hbmFnZXJ9IGZyb20gJy4vR1RKU01vbm9NYW5hZ2VyJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEdUR2FtZU1hbmFnZXIgZXh0ZW5kcyBTaW5nbGV0b248R1RHYW1lTWFuYWdlcj5cclxue1xyXG4gICAgdXBkYXRlTWFuYWdlcjpHVFVwZGF0ZU1hbmFnZXI7XHJcbiAgICBvbkluaXQoYmluZFRvIDogR1QuR1RKU01hbmFnZXIpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTWFuYWdlciA9IEdUVXBkYXRlTWFuYWdlci5JbnN0YW5jZTxHVFVwZGF0ZU1hbmFnZXI+KEdUVXBkYXRlTWFuYWdlcik7XHJcbiAgICAgICAgR1QuR1RQdWVydHNBZGFwdG9yLk9uQ3JlYXRlTW9ub1RzID0gKG1vbm8sbW9kdWxlTmFtZSkgPT4gdGhpcy5DcmVhdGVKU01vbm9CZWhhdmlvdXIobW9ubyxtb2R1bGVOYW1lKTtcclxuICAgICAgICBiaW5kVG8uSnNVcGRhdGUgPSAoKSA9PiB0aGlzLm9uVXBkYXRlKCk7XHJcbiAgICAgICAgYmluZFRvLkpzT25BcHBsaWNhdGlvblF1aXQgPSAoKSA9PiB0aGlzLm9uQXBwbGljYXRpb25RdWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQ3JlYXRlSlNNb25vQmVoYXZpb3VyKG1vbm86R1QuR1RKU0JlaGF2aW91cixtb2R1bGVOYW1lOnN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIEdUSlNNb25vTWFuYWdlci5JbnN0YW5jZTxHVEpTTW9ub01hbmFnZXI+KEdUSlNNb25vTWFuYWdlcikuQ3JlYXRlSlNNb25vQmVoYXZpb3VyKG1vbm8sbW9kdWxlTmFtZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIC8vanPkuI3mlK/mjIHmk43kvZznrKbph43ovb3miYDku6VWZWN0b3Iz55qE5LmY6L+ZKCnkuYjnlKhcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdHVEdhbWVNYW5hZ2VyIG9uVXBkYXRlLi4uJyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVNYW5hZ2VyLlVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkFwcGxpY2F0aW9uUXVpdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT25BcHBsaWNhdGlvblF1aXQuLi4nKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7R1QsVW5pdHlFbmdpbmV9IGZyb20gJ2NzaGFycCc7XHJcbmltcG9ydCB7IEdUSVVwZGF0ZSB9IGZyb20gJy4vR1RJVXBkYXRlJztcclxuaW1wb3J0IHtHVFVwZGF0ZU1hbmFnZXIgfSBmcm9tICcuL0dUVXBkYXRlTWFuYWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgR1RKU01vbm9CYXNlIGltcGxlbWVudHMgR1RJVXBkYXRlXHJcbntcclxuICAgIGdhbWVPYmplY3QgOiBVbml0eUVuZ2luZS5HYW1lT2JqZWN0O1xyXG4gICAgbW9ub0JlaGF2aW91ciA6IEdULkdUSlNCZWhhdmlvdXJcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBpc1VwZGF0ZU9wZW4gOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGJpbmRUbzpHVC5HVEpTQmVoYXZpb3VyKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QgPSBiaW5kVG8uZ2FtZU9iamVjdDtcclxuICAgICAgICB0aGlzLm1vbm9CZWhhdmlvdXIgPSBiaW5kVG87XHJcbiAgICAgICAgdGhpcy5tb25vQmVoYXZpb3VyLkpzT25EZXN0cm95ID0gKCkgPT4gdGhpcy5PbkRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm1vbm9CZWhhdmlvdXIuSnNBd2FrZSA9ICgpID0+IHRoaXMuT25Bd2FrZSgpO1xyXG4gICAgICAgIHRoaXMubW9ub0JlaGF2aW91ci5Kc1N0YXJ0ID0gKCkgPT50aGlzLk9uU3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBPblVwZGF0ZSgpIHtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFVwZGF0ZUlzT3BlbigpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIE9uQXdha2UoKVxyXG4gICAge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiR1RKU01vbm9CYXNlICBBd2FrZVwiKTtcclxuICAgICAgIGlmKHRoaXMuZ2V0VXBkYXRlSXNPcGVuKCkpe1xyXG4gICAgICAgICAgbGV0IG1hbmFnZXI9IEdUVXBkYXRlTWFuYWdlci5JbnN0YW5jZTxHVFVwZGF0ZU1hbmFnZXI+KEdUVXBkYXRlTWFuYWdlcik7XHJcbiAgICAgICAgICBtYW5hZ2VyLkFkZFVwZGF0ZSh0aGlzKTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBPblN0YXJ0KClcclxuICAgIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkdUSlNNb25vQmFzZSAgT25TdGFydFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgT25EZXN0cm95KCkgXHJcbiAgICB7XHJcbiAgICAgIGlmKHRoaXMuZ2V0VXBkYXRlSXNPcGVuKCkpe1xyXG4gICAgICAgIGxldCBtYW5hZ2VyPSBHVFVwZGF0ZU1hbmFnZXIuSW5zdGFuY2U8R1RVcGRhdGVNYW5hZ2VyPihHVFVwZGF0ZU1hbmFnZXIpO1xyXG4gICAgICAgIG1hbmFnZXIuUmVtb3ZlVXBkYXRlKHRoaXMpO1xyXG4gICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1VuaXR5RW5naW5lfSBmcm9tICdjc2hhcnAnXHJcbmltcG9ydCB7R1RKU01vbm9CYXNlfSBmcm9tICcuL0dUSlNNb25vQmFzZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBHVEpTTW9ub0JlaGF2aW91ciBleHRlbmRzIEdUSlNNb25vQmFzZVxyXG57XHJcbiAgY29uc3RydWN0b3IoYmluZFRvOmFueSlcclxuICB7XHJcbiAgICBzdXBlcihiaW5kVG8pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXBkYXRlSXNPcGVuKCk6Ym9vbGVhbntcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICBPblVwZGF0ZSgpIFxyXG4gIHtcclxuICAgICAgY29uc29sZS5sb2coJ0dUSlNNb25vQmVoYXZpb3VyIG9uVXBkYXRlLi4uJyk7XHJcbiAgfVxyXG4gIFxyXG4gIG9uRGVzdHJveSgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ29uRGVzdHJveS4uLicpO1xyXG4gIH1cclxufSIsImltcG9ydCB7R1QsVW5pdHlFbmdpbmV9IGZyb20gJ2NzaGFycCc7XHJcbmltcG9ydCB7IEdUSVVwZGF0ZSB9IGZyb20gJy4vR1RJVXBkYXRlJztcclxuaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi9TaW5nbGV0b24nO1xyXG5pbXBvcnQgeyBHVEpTTW9ub0Jhc2UgfSBmcm9tICcuL0dUSlNNb25vQmFzZSc7XHJcbmltcG9ydCB7IEdUSlNNb25vQmVoYXZpb3VyIH0gZnJvbSAnLi9HVEpTTW9ub0JlaGF2aW91cic7XHJcblxyXG5leHBvcnQgY2xhc3MgR1RKU01vbm9NYW5hZ2VyIGV4dGVuZHMgU2luZ2xldG9uPEdUSlNNb25vTWFuYWdlcj4gXHJcbntcclxuICAgIHB1YmxpYyBDcmVhdGVKU01vbm9CZWhhdmlvdXIobW9ubzpHVC5HVEpTQmVoYXZpb3VyLG1vdWRsZTpzdHJpbmcpIDogR1RKU01vbm9CYXNle1xyXG4gICAgICBsZXQganNNb25vID0gbmV3IEdUSlNNb25vQmVoYXZpb3VyKG1vbm8pO1xyXG4gICAgICByZXR1cm4ganNNb25vO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4vU2luZ2xldG9uJztcclxuaW1wb3J0IHsgR1RJVXBkYXRlIH0gZnJvbSAnLi9HVElVcGRhdGUnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHVFVwZGF0ZU1hbmFnZXIgZXh0ZW5kcyBTaW5nbGV0b248R1RVcGRhdGVNYW5hZ2VyPlxyXG57XHJcbiAgICBpbmRleDpudW1iZXI7XHJcbiAgICB1cGRhdGVzOiBNYXA8bnVtYmVyLEdUSVVwZGF0ZT4gPSBuZXcgTWFwPG51bWJlcixHVElVcGRhdGU+KCk7XHJcbiAgICByZW1vdmVVcGRhdGVzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIC8v5re75Yqg5YWD57SgXHJcbiAgICBwdWJsaWMgQWRkVXBkYXRlKHVwZGF0ZTpHVElVcGRhdGUpe1xyXG4gICAgICAgIHRoaXMuaW5kZXggKz0gMTtcclxuICAgICAgICB1cGRhdGUuaW5kZXggPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHRoaXMudXBkYXRlcy5zZXQodXBkYXRlLmluZGV4LHVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbW92ZVVwZGF0ZSh1cGRhdGU6R1RJVXBkYXRlKXtcclxuICAgICAgICBpZih0aGlzLnVwZGF0ZXMuaGFzKHVwZGF0ZS5pbmRleCkpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVVwZGF0ZXMucHVzaCh1cGRhdGUuaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlKClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnJlbW92ZVVwZGF0ZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVXBkYXRlcy5mb3JFYWNoKGluZGV4ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudXBkYXRlcy5oYXMoaW5kZXgpKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZXMuZGVsZXRlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVVcGRhdGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAvLyAgY29uc29sZS5sb2coJ0dUVXBkYXRlTWFuYWdlciBvblVwZGF0ZS4uLicgKyB0aGlzLnVwZGF0ZXMuc2l6ZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHsgdmFsdWUuT25VcGRhdGUoKTsgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0dULFVuaXR5RW5naW5lfSBmcm9tICdjc2hhcnAnXHJcbmltcG9ydCB7R1RHYW1lTWFuYWdlcn0gZnJvbSAnLi9HVEdhbWVNYW5hZ2VyJ1xyXG5pbXBvcnQgeyBUZXN0IH0gZnJvbSAnLi4vQ2lyY3VpdFN5c3RlbS90ZXN0JztcclxuZnVuY3Rpb24gaW5pdChndE1hbmFnZXIgOiBHVC5HVEpTTWFuYWdlcik6IHZvaWQge1xyXG4gIGNvbnNvbGUubG9nKFwiaW5pdFwiKTtcclxuICBjb25zb2xlLmxvZyhndE1hbmFnZXIpO1xyXG4gIGxldCB0ID0gR1RHYW1lTWFuYWdlci5JbnN0YW5jZTxHVEdhbWVNYW5hZ2VyPihHVEdhbWVNYW5hZ2VyKTtcclxuICB0Lm9uSW5pdChndE1hbmFnZXIpO1xyXG5cclxuICBUZXN0LlN0YXJ0VGVzdCgpO1xyXG59IFxyXG5jb25zb2xlLmxvZyhcIjEyMzRcIik7XHJcbmluaXQoR1QuR1RKU01hbmFnZXIuSW5zdGFuY2UpOyIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIFNpbmdsZXRvbjxUPntcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTphbnkgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U8VD4oIGM6IHsgbmV3KCk6IFQgfSApIDogVHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBjKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgXCIuL0NvcmUvR2FtZU1haW5cIlxyXG5pbXBvcnQgXCIuL0NpcmN1aXRTeXN0ZW0vSW5kZXhcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjc2hhcnBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==