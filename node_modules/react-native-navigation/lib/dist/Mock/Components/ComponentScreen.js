"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentScreen = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
const __1 = require("../..");
const constants_1 = require("../constants");
const LayoutStore_1 = require("../Stores/LayoutStore");
const connect_1 = require("../connect");
const TopBar_1 = require("./TopBar");
exports.ComponentScreen = connect_1.connect(class extends react_1.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.layoutNode.componentDidMount();
    }
    isVisible() {
        return LayoutStore_1.LayoutStore.isVisibleLayout(this.props.layoutNode);
    }
    renderTabBar() {
        const bottomTabs = this.props.layoutNode.getBottomTabs();
        if (!bottomTabs)
            return null;
        const bottomTabsOptions = bottomTabs.resolveOptions().bottomTabs;
        if (bottomTabsOptions?.visible === false)
            return null;
        const buttons = bottomTabs.children.map((child, i) => {
            const bottomTabOptions = child.resolveOptions().bottomTab;
            return (react_1.default.createElement(react_native_1.View, { key: `tab-${i}` },
                react_1.default.createElement(react_native_1.Button, { testID: bottomTabOptions?.testID, title: bottomTabOptions?.text || '', onPress: () => LayoutStore_1.LayoutStore.selectTabIndex(this.props.layoutNode.getBottomTabs(), i) }),
                react_1.default.createElement(react_native_1.Text, null, bottomTabOptions?.badge)));
        });
        return react_1.default.createElement(react_native_1.View, { testID: bottomTabsOptions?.testID }, buttons);
    }
    render() {
        const Component = __1.Navigation.mock.store.getWrappedComponent(this.props.layoutNode.data.name);
        return (react_1.default.createElement(react_native_1.View, { testID: this.isVisible() ? constants_1.VISIBLE_SCREEN_TEST_ID : undefined },
            this.props.layoutNode.getStack() && (react_1.default.createElement(TopBar_1.TopBar, { layoutNode: this.props.layoutNode, topBarOptions: this.props.layoutNode.resolveOptions().topBar, backButtonOptions: this.props.layoutNode.resolveOptions().topBar?.backButton })),
            this.renderTabBar(),
            react_1.default.createElement(Component, { componentId: this.props.layoutNode.nodeId })));
    }
});
