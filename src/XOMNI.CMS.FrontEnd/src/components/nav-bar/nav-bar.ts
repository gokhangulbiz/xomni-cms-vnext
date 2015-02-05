/// <amd-dependency path="text!./nav-bar.html" />
import ko = require("knockout");
export var template: string = require("text!./nav-bar.html");

export class viewModel {
    public route: any;
    private managementEnabled = ko.observable(false);
    constructor(params: any) {
        this.managementEnabled(params.managementEnabled);
        this.route = params.route;
    }
}