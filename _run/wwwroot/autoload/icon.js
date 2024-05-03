

var Tutorial;
(Tutorial||(Tutorial = {}));
(function (Tutorial) {
const moduleName = `Tutorial`;
const _ = {};

const System = {};
_.System = {};
let _n;
System.AppIcon = class AppIcon extends Core.System.AppIcon {
    static __style = `:host{background-color:#7ff3f3}:host rk-img{--img-fill-color: transparent;--img-stroke-color: #cd996c;max-height:100%;flex-grow:1;padding:10%}@media screen and (max-width: 768px){:host rk-img{padding:7px}}`;
    __getStatic() {
        return AppIcon;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(AppIcon.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({Tutorial
        blocks: { 'default':`<rk-img src="/apps/DemoRaph/img/todo.svg"></rk-img>` }
    });
}
    getClassName() {
        return "AppIcon";
    }
}
System.AppIcon.Namespace=`${moduleName}.System`;
System.AppIcon.Tag=`demo-raph-app-icon`;
_.System.AppIcon=System.AppIcon;
if(!window.customElements.get('demo-raph-app-icon')){window.customElements.define('demo-raph-app-icon', System.AppIcon);Aventus.WebComponentInstance.registerDefinition(System.AppIcon);}

Tutorial
forTutorial in _) { DemoRaph[key] = _[key] }
})(DemoRaph);

