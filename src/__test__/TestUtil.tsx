import * as React from "react";
import * as TestUtils from "react-addons-test-utils";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export function renderWithMui(component: any):any {
    return TestUtils.renderIntoDocument(
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {component}
            </MuiThemeProvider>)
}