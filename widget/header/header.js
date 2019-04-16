/*
 * Wiktor header and widgets ------------------------------------------------------------
 */

class Header extends Fragment {
    watch(title) {
        this.title = title;

        this.left = [];
        this.right = [];

        Header.widgets.left.forEach(widget => this.left.push(widget(this)));
        Header.widgets.right.forEach(widget => this.right.push(widget(this)));
    }

    static addWidgetL(widget) {
        this.widgets.left.push(widget);
    }
    static addWidgetR(widget) {
        this.widgets.right.push(widget);
    }

    get template() {
        return html`
            <header class="row py-2">
                <div class="col-12 col-lg my-auto d-flex flex-flow-row">
                    ${this.left.map(e => e())}
                </div>
                <div class="col-12 col-lg my-auto d-flex ">
                    <div class="ml-auto flex-flow-row d-flex">
                        ${this.right.map(e => e())}
                    </div>
                </div>
            </header>
        `;
    }
}
Header.widgets = { left: [], right: [] };

Wiktor.plug("onEntryLoad", function(orig, data) {
    orig(data);
    this.header = new Header(this, this.title);
});

Wiktor.plug("_render", function(orig) {
    return html`
        ${this.header()}
        <main class="row flex-lg-nowrap h-min-0">
            <div class="nav col-12 col-lg-2 overflow-auto pt-2">
                ${this.navigation()}
            </div>
            <div class="col-12 col-lg px-0 px-md-3 overflow-auto mt-2">
                ${this.entries.map(e => e())}
            </div>
        </main>
    `;
});
