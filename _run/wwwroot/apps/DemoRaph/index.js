

var DemoRaph;
(DemoRaph||(DemoRaph = {}));
(function (DemoRaph) {
const moduleName = `DemoRaph`;
const _ = {};

const Application = {};
_.Application = {};
Application.Main = {};
_.Application.Main = {};
Application.Main.Frame = {};
_.Application.Main.Frame = {};
let _n;
Application.Main.Frame.Index = class Index extends Core.System.Frame {
    static __style = ``;
    __getStatic() {
        return Index;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Index.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "Index";
    }
    pageTitle() {
        return "Tutorial - Accueil";
    }
    onShow() {
    }
    onHide() {
    }
}
Application.Main.Frame.Index.Namespace=`${moduleName}.Application.Main.Frame`;
Application.Main.Frame.Index.Tag=`demo-raph-index`;
_.Application.Main.Frame.Index=Application.Main.Frame.Index;
if(!window.customElements.get('demo-raph-index')){window.customElements.define('demo-raph-index', Application.Main.Frame.Index);Aventus.WebComponentInstance.registerDefinition(Application.Main.Frame.Index);}

_n = Application.Main;Application.Main = class Main extends Core.System.Application {
    static __style = ``;
    __getStatic() {
        return Main;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Main.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`` }
    });
}
    getClassName() {
        return "Main";
    }
    async defineRoutes() {
        this.addRoute("/", Application.Main.Frame.Index);
    }
}
Application.Main.Namespace=`${moduleName}.Application`;
Application.Main.Tag=`demo-raph-main`;
_.Application.Main=Application.Main;
if(!window.customElements.get('demo-raph-main')){window.customElements.define('demo-raph-main', Application.Main);Aventus.WebComponentInstance.registerDefinition(Application.Main);}
Object.assign(Application.Main, _n);

for(let key in _) { DemoRaph[key] = _[key] }
})(DemoRaph);
