let md = new showdown.Converter({
    tables: true,
    ghCompatibleHeaderId: true,
    disableForced4SpacesIndentedSublists: true,
    simplifiedAutoLink: true,
});
Wiktor.addProcessor("md", content => md.makeHtml(content));
