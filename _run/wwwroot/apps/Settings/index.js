
var Settings;
(Settings||(Settings = {}));
(function (Settings) {
const moduleName = `Settings`;
const _ = {};

const Application = {};
_.Application = {};
Application.Main = {};
_.Application.Main = {};
Application.Main.Frame = {};
_.Application.Main.Frame = {};
let _n;
Application.Main.Frame.PermissionFrame = class PermissionFrame extends Core.System.Frame {
    static __style = ``;
    __getStatic() {
        return PermissionFrame;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(PermissionFrame.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "PermissionFrame";
    }
    pageTitle() {
        return "";
    }
    onShow() {
    }
    onHide() {
    }
}
Application.Main.Frame.PermissionFrame.Namespace=`${moduleName}.Application.Main.Frame`;
Application.Main.Frame.PermissionFrame.Tag=`settings-permission-frame`;
_.Application.Main.Frame.PermissionFrame=Application.Main.Frame.PermissionFrame;
if(!window.customElements.get('settings-permission-frame')){window.customElements.define('settings-permission-frame', Application.Main.Frame.PermissionFrame);Aventus.WebComponentInstance.registerDefinition(Application.Main.Frame.PermissionFrame);}

Application.Main.Frame.User = class User extends Core.System.Frame {
    get 'has_change'() { return this.getBoolAttr('has_change') }
    set 'has_change'(val) { this.setBoolAttr('has_change', val) }
						return this.__watch["currentUser"];
					}
					set 'currentUser'(val) {
						this.__watch["currentUser"] = val;
					}
						return this.__watch["previewUri"];
					}
					set 'previewUri'(val) {
						this.__watch["previewUri"] = val;
					}
    this.__addWatchesActions("currentUser", ((target) => {
    target.compareObject();
}));
}
    static __style = `:host .title{display:flex;font-size:var(--font-size-lg);margin-bottom:15px;margin-top:20px;width:100%}:host .col-background{align-items:center;display:flex;justify-content:center}:host .col-background .user-profil{box-shadow:var(--elevation-4);transition:box-shadow .2s var(--bezier-curve);height:150px;width:150px}:host .info-perso{width:100%}:host .info-perso rk-input{margin:10px 0}:host .fixed-btn{box-shadow:var(--elevation-4);height:40px;opacity:0;position:absolute;right:20px;top:25px;transition:.3s opacity var(--bezier-curve),.3s visibility var(--bezier-curve);visibility:hidden;width:40px;z-index:400}:host([has_change]) .fixed-btn{opacity:1;visibility:visible}@media screen and (min-width: 1225px){:host .col-background .user-profil:hover{box-shadow:var(--elevation-2)}}`;
    __getStatic() {
        return User;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(User.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'after-scroll':`
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
  "elements": [
    {
      "name": "inputFileEl",
      "ids": [
        "user_1"
      ]
    }
  ],
  "content": {
    "user_0°uri": {
      "fct": (c) => `${c.print(c.comp.__c4d120fb859188895e24d80a4b3c2060method0())}`,
      "once": true
    }
  },
  "bindings": [
    {
      "id": "user_2",
      "injectionName": "value",
      "eventNames": [
        "onChange"
      ],
      "inject": (c) => c.comp.__c4d120fb859188895e24d80a4b3c2060method1(),
      "extract": (c, v) => c.comp.__c4d120fb859188895e24d80a4b3c2060method2(v),
      "once": true,
      "isCallback": true
    },
    {
      "id": "user_3",
      "injectionName": "value",
      "eventNames": [
        "onChange"
      ],
      "inject": (c) => c.comp.__c4d120fb859188895e24d80a4b3c2060method3(),
      "extract": (c, v) => c.comp.__c4d120fb859188895e24d80a4b3c2060method4(v),
      "once": true,
      "isCallback": true
    }
  ],
  "events": [
    {
      "eventName": "change",
      "id": "user_1",
      "fct": (e, c) => c.comp.updateFile(e)
    }
  ],
  "pressEvents": [
    {
      "id": "user_0",
      "onPress": (e, pressInstance, c) => { c.comp.clickPreview(e, pressInstance); }
    },
    {
      "id": "user_4",
      "onPress": (e, pressInstance, c) => { c.comp.save(e, pressInstance); }
    }
  ]
});
    getClassName() {
        return "User";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('has_change')) { this.attributeChangedCallback('has_change', false, false); }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["currentUser"] = undefined;
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('has_change');
    __listBoolProps() { return ["has_change"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    pageTitle() {
        return "Parametres - Utilisateur";
    }
    async onShow() {
        let user = await Core.Lib.SessionManager.getUser();
        if (!user) {
            this.application.navigate("/");
            return;
        }
        this.previewUri = user.Picture.Uri;
        this.currentUser = user.clone();
    }
    onHide() {
    }
    async askChange(newState) {
        if (this.has_change) {
            return await this.application.confirm({
                title: "Edition en cours",
                description: "Vous avez des changements en cours. <br /> Etes-vous sûr de vouloir quitter?",
            });
        }
        return true;
    }
    async compareObject() {
        let user = await Core.Lib.SessionManager.getUser();
        this.has_change = !Aventus.compareObject(this.currentUser, user);
    }
    updateFile() {
        if (this.inputFileEl.files && this.inputFileEl.files.length > 0) {
            this.currentUser.Picture.Upload = this.inputFileEl.files[0];
            this.previewUri = URL.createObjectURL(this.inputFileEl.files[0]);
        }
        else {
            this.currentUser.Picture.Upload = undefined;
            this.previewUri = undefined;
        }
    }
    clickPreview() {
        this.inputFileEl.click();
    }
    async save() {
        if (!this.currentUser)
            return;
        let ram = Core.RAM.UserRAM.getInstance();
        let result = await this.application.executeWithLoading(ram.updateWithError(this.currentUser));
        if (result) {
            this.onShow();
        }
    }
    __c4d120fb859188895e24d80a4b3c2060method0() {
        return this.previewUri;
    }
    __c4d120fb859188895e24d80a4b3c2060method1() {
        return this.currentUser.Firstname;
    }
    __c4d120fb859188895e24d80a4b3c2060method2(v) {
        if (this.currentUser) {
            this.currentUser.Firstname = v;
        }
    }
    __c4d120fb859188895e24d80a4b3c2060method3() {
        return this.currentUser.Lastname;
    }
    __c4d120fb859188895e24d80a4b3c2060method4(v) {
        if (this.currentUser) {
            this.currentUser.Lastname = v;
        }
    }
}
Application.Main.Frame.User.Namespace=`${moduleName}.Application.Main.Frame`;
Application.Main.Frame.User.Tag=`settings-user`;
_.Application.Main.Frame.User=Application.Main.Frame.User;
if(!window.customElements.get('settings-user')){window.customElements.define('settings-user', Application.Main.Frame.User);Aventus.WebComponentInstance.registerDefinition(Application.Main.Frame.User);}

Application.Main.Frame.Index = class Index extends Core.System.Frame {
    get 'currentUser'() {
						return this.__watch["currentUser"];
					}
					set 'currentUser'(val) {
						this.__watch["currentUser"] = val;
					}
    this.__addWatchesActions("currentUser");
}
    static __style = `:host .header{align-items:center;display:flex;padding:30px}:host .header rk-img{border-radius:1000px;width:100px;height:100px;flex-shrink:0}:host .header div{font-size:var(--font-size-lg);font-weight:bold;margin-left:15px}:host .content{padding:30px;padding-top:0}:host .content .option{align-items:center;border-radius:5px;cursor:pointer;display:flex;padding:10px;transition:background .5s var(--bezier-curve);display:flex;width:100%}:host .content .option .text{margin-left:15px}:host .content .option .text .title{font-size:var(--font-size);margin-bottom:5px}:host .content .option .text .info{color:var(--text-color-light);font-size:var(--font-size-sm)}:host .content .option:hover{background-color:var(--darker)}`;
    __getStatic() {
        return Index;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Index.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="header">
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
  "content": {
    "index_0°uri": {
      "fct": (c) => `${c.print(c.comp.__4e98023cfb0b5ecea55cf339715caac5method0())}`
    },
    "index_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__4e98023cfb0b5ecea55cf339715caac5method1())} ${c.print(c.comp.__4e98023cfb0b5ecea55cf339715caac5method2())}`
    }
  }
});
    getClassName() {
        return "Index";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["currentUser"] = undefined;
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('currentUser');
    pageTitle() {
        return "Parametres - Accueil";
    }
    onShow() {
    }
    onHide() {
    }
    async getUser() {
        this.currentUser = await Core.Lib.SessionManager.getUser();
    }
    postCreation() {
        super.postCreation();
        this.getUser();
    }
    __4e98023cfb0b5ecea55cf339715caac5method0() {
        return this.currentUser?.Picture.Uri;
    }
    __4e98023cfb0b5ecea55cf339715caac5method1() {
        return this.currentUser?.Firstname;
    }
    __4e98023cfb0b5ecea55cf339715caac5method2() {
        return this.currentUser?.Lastname;
    }
}
Application.Main.Frame.Index.Namespace=`${moduleName}.Application.Main.Frame`;
Application.Main.Frame.Index.Tag=`settings-index`;
_.Application.Main.Frame.Index=Application.Main.Frame.Index;
if(!window.customElements.get('settings-index')){window.customElements.define('settings-index', Application.Main.Frame.Index);Aventus.WebComponentInstance.registerDefinition(Application.Main.Frame.Index);}

Application.Main.Frame.Display = class Display extends Core.System.Frame {
    get 'has_change'() { return this.getBoolAttr('has_change') }
    set 'has_change'(val) { this.setBoolAttr('has_change', val) }
						return this.__watch["configuration"];
					}
					set 'configuration'(val) {
						this.__watch["configuration"] = val;
					}
						return this.__watch["iconSize"];
					}
					set 'iconSize'(val) {
						this.__watch["iconSize"] = val;
					}
    __registerWatchesActions() {
    this.__addWatchesActions("configuration", ((target) => {
    target.compareObject();
}));
}
    static __style = `:host .title{display:flex;font-size:var(--font-size-lg);margin-bottom:15px;margin-top:20px;width:100%}:host .sub-title{display:flex;font-size:var(--font-size-md);margin-bottom:20px;margin-top:15px;width:100%}:host .title+.sub-title{margin-top:0}:host .col-background{align-items:center;display:flex;justify-content:center}:host .col-background .bg-preview{border-radius:5px;box-shadow:var(--elevation-4);display:inline-block;max-width:400px;aspect-ratio:var(--ration);transition:box-shadow .2s var(--bezier-curve);width:100%;background-repeat:no-repeat;background-position:center center;background-size:cover}:host .col-background .bg-preview[state=Cover]{background-size:cover}:host .col-background .bg-preview[state=Contain]{background-size:contain}:host .col-background .bg-preview[state=Stretch]{background-size:100% 100%}:host .container-background-option{width:100%}:host .icon-size-container{margin-bottom:16px}:host .icon-size-container .configuration{align-items:center;display:flex;flex-wrap:wrap;gap:10px;justify-content:center}:host .icon-size-container .configuration .icon-size{--item-box-box-size: 40px;flex-grow:0;flex-shrink:0;margin-bottom:16px;width:min-content}:host .icon-size-container .configuration .icon-size rk-item-box-option{color:var(--text-color-light);transition:background-color .2s var(--bezier-curve),color .2s var(--bezier-curve)}:host .icon-size-container .configuration .icon-size rk-item-box-option[selected]{background-color:var(--darker);color:var(--text-color)}:host .icon-size-container .configuration rk-slider{flex-grow:0;flex-shrink:0;max-width:400px;min-width:300px}:host .icon-size-container .result{align-items:center;display:flex;justify-content:center;max-width:532px}:host .icon-size-container .result .icon-example{aspect-ratio:1;background-color:var(--rayuki-color);border-radius:5px;box-shadow:var(--elevation-5);width:75px}:host .sync-container{margin-bottom:30px}:host .sync-container rk-checkbox{--checkbox-background-active: var(--green);--checkbox-border-active: transparent;margin-left:15px}:host .fixed-btn{box-shadow:var(--elevation-4);height:40px;opacity:0;position:absolute;right:20px;top:45px;transition:.3s opacity var(--bezier-curve),.3s visibility var(--bezier-curve);visibility:hidden;width:40px;z-index:400}:host([has_change]) .fixed-btn{opacity:1;visibility:visible}@media screen and (min-width: 1225px){:host .col-background .bg-preview{cursor:pointer}:host .col-background .bg-preview:hover{box-shadow:var(--elevation-2)}:host .icon-size-container .icon-size rk-item-box-option:hover{color:var(--text-color)}}@container application (min-width: 720px){:host .icon-size-container .configuration{justify-content:flex-start}}`;
    __getStatic() {
        return Display;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Display.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'after-scroll':`
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
  "elements": [
    {
      "name": "bgPreview",
      "ids": [
        "display_0"
      ]
    },
    {
      "name": "inputFileEl",
      "ids": [
        "display_1"
      ]
    },
    {
      "name": "iconSizeType",
      "ids": [
        "display_3"
      ]
    },
    {
      "name": "caseSizeSlider",
      "ids": [
        "display_4"
      ]
    }
  ],
  "content": {
    "display_0°style": {
      "fct": (c) => `background-image:url('${c.print(c.comp.__442eed440406adda2b52ded584452838method0())}')`,
      "once": true
    },
    "display_5°style": {
      "fct": (c) => `width:${c.print(c.comp.__442eed440406adda2b52ded584452838method5())}px;`,
      "once": true
    }
  },
  "bindings": [
    {
      "id": "display_2",
      "injectionName": "value",
      "eventNames": [
        "onChange"
      ],
      "inject": (c) => c.comp.__442eed440406adda2b52ded584452838method1(),
      "extract": (c, v) => c.comp.__442eed440406adda2b52ded584452838method2(v),
      "once": true,
      "isCallback": true
    },
    {
      "id": "display_4",
      "injectionName": "value",
      "eventNames": [
        "onChange"
      ],
      "inject": (c) => c.comp.__442eed440406adda2b52ded584452838method3(),
      "extract": (c, v) => c.comp.__442eed440406adda2b52ded584452838method4(v),
      "once": true,
      "isCallback": true
    },
    {
      "id": "display_6",
      "injectionName": "value",
      "eventNames": [
        "onChange"
      ],
      "inject": (c) => c.comp.__442eed440406adda2b52ded584452838method6(),
      "extract": (c, v) => c.comp.__442eed440406adda2b52ded584452838method7(v),
      "once": true,
      "isCallback": true
    }
  ],
  "events": [
    {
      "eventName": "change",
      "id": "display_1",
      "fct": (e, c) => c.comp.updateFile(e)
    },
    {
      "eventName": "onChange",
      "id": "display_2",
      "fct": (c, ...args) => c.comp.updatePreview.apply(c.comp, ...args),
      "isCallback": true
    },
    {
      "eventName": "onChange",
      "id": "display_3",
      "fct": (c, ...args) => c.comp.updateGaugeValue.apply(c.comp, ...args),
      "isCallback": true
    },
    {
      "eventName": "onChange",
      "id": "display_4",
      "fct": (c, ...args) => c.comp.setIconSize.apply(c.comp, ...args),
      "isCallback": true
    }
  ],
  "pressEvents": [
    {
      "id": "display_0",
      "onPress": (e, pressInstance, c) => { c.comp.clickPreview(e, pressInstance); }
    },
    {
      "id": "display_7",
      "onPress": (e, pressInstance, c) => { c.comp.save(e, pressInstance); }
    }
  ]
});
    getClassName() {
        return "Display";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('has_change')) { this.attributeChangedCallback('has_change', false, false); }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["configuration"] = undefined;
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('has_change');
    __listBoolProps() { return ["has_change"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    pageTitle() {
        return "Parametres - Display";
    }
    onShow() {
        this.currentDesktop = Core.System.Os.instance.activeDesktop;
        this.configuration = this.currentDesktop.data.Configuration.clone();
        this.has_change = false;
        this.updateGaugeValue();
    }
    onHide() {
    }
    async askChange(newState) {
        if (this.has_change) {
            return await this.application.confirm({
                title: "Edition en cours",
                description: "Vous avez des changements en cours. <br /> Etes-vous sûr de vouloir quitter?",
            });
        }
        return true;
    }
    async compareObject() {
        this.has_change = !Aventus.compareObject(this.configuration, this.currentDesktop?.data.Configuration);
    }
    clickPreview() {
        this.inputFileEl.click();
    }
    updatePreview(value) {
        this.bgPreview.setAttribute("state", Core.Data.BackgroundSize[value]);
    }
    setIconSize(size) {
        if (this.iconSizeType.value == "desktop") {
            this.configuration.SizeDesktop = size;
        }
        else if (this.iconSizeType.value == "tablet") {
            this.configuration.SizeTablet = size;
        }
        else if (this.iconSizeType.value == "phone") {
            this.configuration.SizeMobile = size;
        }
    }
    updateGaugeValue() {
        let value = 75;
        if (this.iconSizeType.value == "desktop") {
            value = this.configuration.SizeDesktop;
        }
        else if (this.iconSizeType.value == "tablet") {
            value = this.configuration.SizeTablet;
        }
        else if (this.iconSizeType.value == "phone") {
            value = this.configuration.SizeMobile;
        }
        this.iconSize = value;
    }
    updateFile() {
        if (this.inputFileEl.files && this.inputFileEl.files.length > 0) {
            this.configuration.Background.Upload = this.inputFileEl.files[0];
        }
        else {
            this.configuration.Background.Upload = undefined;
        }
    }
    async save() {
        if (!this.currentDesktop)
            return;
        let result = await this.application.executeWithLoading(this.currentDesktop.data.updateWithError({ Configuration: this.configuration }));
        if (result) {
            this.onShow();
        }
    }
    __442eed440406adda2b52ded584452838method0() {
        return this.configuration.Background.Uri;
    }
    __442eed440406adda2b52ded584452838method5() {
        return this.iconSize;
    }
    __442eed440406adda2b52ded584452838method1() {
        return this.configuration.BackgroundSize;
    }
    __442eed440406adda2b52ded584452838method2(v) {
        if (this.configuration) {
            this.configuration.BackgroundSize = v;
        }
    }
    __442eed440406adda2b52ded584452838method3() {
        return this.iconSize;
    }
    __442eed440406adda2b52ded584452838method4(v) {
        if (this) {
            this.iconSize = v;
        }
    }
    __442eed440406adda2b52ded584452838method6() {
        return this.configuration.SyncDesktop;
    }
    __442eed440406adda2b52ded584452838method7(v) {
        if (this.configuration) {
            this.configuration.SyncDesktop = v;
        }
    }
}
Application.Main.Frame.Display.Namespace=`${moduleName}.Application.Main.Frame`;
Application.Main.Frame.Display.Tag=`settings-display`;
_.Application.Main.Frame.Display=Application.Main.Frame.Display;
if(!window.customElements.get('settings-display')){window.customElements.define('settings-display', Application.Main.Frame.Display);Aventus.WebComponentInstance.registerDefinition(Application.Main.Frame.Display);}

_n = Application.Main;
    get 'no_sidenav'() { return this.getBoolAttr('no_sidenav') }
    set 'no_sidenav'(val) { this.setBoolAttr('no_sidenav', val) }
    __getStatic() {
        return Main;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Main.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`` }
    });
}
    getClassName() {
        return "Main";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('no_sidenav')) {this.setAttribute('no_sidenav' ,'true'); }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('no_sidenav');
    __listBoolProps() { return ["no_sidenav"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    defineRoutes() {
        this.addRouteSidenav({
            name: "Accueil",
            frame: Application.Main.Frame.Index,
            route: "/",
            miIcon: "home"
        });
        this.addRouteSidenav({
            name: "Profil",
            frame: Application.Main.Frame.User,
            route: "/user",
            miIcon: "person"
        });
        this.addRouteSidenav({
            name: "Affichage",
            frame: Application.Main.Frame.Display,
            route: "/display",
            miIcon: "display_settings"
        });
        this.addRouteSidenav({
            name: "Permissions",
            frame: Application.Main.Frame.PermissionFrame,
            route: "/permissions",
            miIcon: "gavel"
        });
    }
    onNewPage(oldUrl, oldFrame, newUrl, newFrame) {
        this.no_sidenav = newUrl == "/";
    }
}
Application.Main.Namespace=`${moduleName}.Application`;
Application.Main.Tag=`settings-main`;
_.Application.Main=Application.Main;
if(!window.customElements.get('settings-main')){window.customElements.define('settings-main', Application.Main);Aventus.WebComponentInstance.registerDefinition(Application.Main);}
Object.assign(Application.Main, _n);

for(let key in _) { Settings[key] = _[key] }
})(Settings);