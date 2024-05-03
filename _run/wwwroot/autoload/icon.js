

var Tutorial;
(Tutorial||(Tutorial = {}));
(function (Tutorial) {
const moduleName = `Tutorial`;
const _ = {};

const System = {};
_.System = {};
let _n;
System.AppIcon = class AppIcon extends Core.System.AppIcon {
    static __style = `:host rk-img{--img-fill-color: transparent;--img-stroke-color: white;max-height:100%;flex-grow:1;padding:10%}@media screen and (max-width: 768px){:host rk-img{padding:7px}}`;
    __getStatic() {
        return AppIcon;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(AppIcon.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<rk-img src="/apps/Tutorial/img/todo.svg"></rk-img>` }
    });
}
    getClassName() {
        return "AppIcon";
    }
}
System.AppIcon.Namespace=`${moduleName}.System`;
System.AppIcon.Tag=`tutorial-app-icon`;
_.System.AppIcon=System.AppIcon;
if(!window.customElements.get('tutorial-app-icon')){window.customElements.define('tutorial-app-icon', System.AppIcon);Aventus.WebComponentInstance.registerDefinition(System.AppIcon);}


for(let key in _) { Tutorial[key] = _[key] }
})(Tutorial);

