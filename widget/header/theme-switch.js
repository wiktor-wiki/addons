class WidgetThemeSwitch extends Widget {
    action(parent, selection) {
        if (!this.selection) {
            $("body").addClass(selection);
        } else {
            $("body").swapClass(this.selection, selection);
        }
        this.selection = selection;
    }
}

Header.addWidgetR(
    that =>
        new WidgetThemeSwitch(that, "", "Theme", {
            values: ["light", "dark"],
            persist: true,
        })
);
