
var Settings;
(Settings||(Settings = {}));
(function (Settings) {
const moduleName = `Settings`;
const _ = {};

const Component = {};
_.Component = {};
Component.Form = {};
_.Component.Form = {};
const Permissions = {};
_.Permissions = {};
const State = {};
_.State = {};
const Application = {};
_.Application = {};
Application.Main = {};
_.Application.Main = {};
Application.Main.Frame = {};
_.Application.Main.Frame = {};
Component.Table = {};
_.Component.Table = {};
Component.Display = {};
_.Component.Display = {};
let _n;
Component.Form.UserSelect = class UserSelect extends Core.Components.SelectData {
    static __style = ``;
    __getStatic() {
        return UserSelect;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(UserSelect.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "UserSelect";
    }
    defineRam() {
        return Core.RAM.UserRAM.getInstance();
    }
    optionText(item) {
        return item.Firstname + " " + item.Lastname;
    }
    optionValue(item) {
        return item;
    }
}
Component.Form.UserSelect.Namespace=`${moduleName}.Component.Form`;
Component.Form.UserSelect.Tag=`settings-user-select`;
_.Component.Form.UserSelect=Component.Form.UserSelect;
if(!window.customElements.get('settings-user-select')){window.customElements.define('settings-user-select', Component.Form.UserSelect);Aventus.WebComponentInstance.registerDefinition(Component.Form.UserSelect);}

Component.Form.TwoColumnsSelectUser = class TwoColumnsSelectUser extends Core.Components.TwoColumnsSelectData {
    static __style = ``;
    __getStatic() {
        return TwoColumnsSelectUser;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(TwoColumnsSelectUser.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "TwoColumnsSelectUser";
    }
    defineRam() {
        return Core.RAM.UserRAM.getInstance();
    }
    optionText(item) {
        return item.Firstname + " " + item.Lastname;
    }
    optionValue(item) {
        return item;
    }
}
Component.Form.TwoColumnsSelectUser.Namespace=`${moduleName}.Component.Form`;
Component.Form.TwoColumnsSelectUser.Tag=`settings-two-columns-select-user`;
_.Component.Form.TwoColumnsSelectUser=Component.Form.TwoColumnsSelectUser;
if(!window.customElements.get('settings-two-columns-select-user')){window.customElements.define('settings-two-columns-select-user', Component.Form.TwoColumnsSelectUser);Aventus.WebComponentInstance.registerDefinition(Component.Form.TwoColumnsSelectUser);}

(function (UserPermission) {
    UserPermission[UserPermission["CanList"] = 0] = "CanList";
    UserPermission[UserPermission["CanEdit"] = 1] = "CanEdit";
    UserPermission[UserPermission["CanEditSelf"] = 2] = "CanEditSelf";
    UserPermission[UserPermission["CanDelete"] = 3] = "CanDelete";
    UserPermission[UserPermission["CanCreate"] = 4] = "CanCreate";
})(Permissions.UserPermission || (Permissions.UserPermission = {}));

_.Permissions.UserPermission=Permissions.UserPermission;
State.EditUsersState=class EditUsersState extends Core.State.CreateOrUpdate {
    /**
     * @inheritdoc
     */
    defineRAM() {
        return Core.RAM.UserRAM.getInstance();
    }
    /**
     * @inheritdoc
     */
    defineObjectName() {
        return 'users';
    }
    /**
     * @inheritdoc
     */
    defineFormSchema() {
        return {
            Firstname: {
                value: {
                    get: () => this.item.Firstname,
                    set: (value) => this.item.Firstname = value,
                },
                validate: (value) => {
                    if (value)
                        return true;
                    return "Un prénom est nécessaire";
                },
                validateOnChange: false
            },
            Lastname: {
                value: {
                    get: () => this.item.Lastname,
                    set: (value) => this.item.Lastname = value,
                },
                validate: (value) => {
                    if (value)
                        return true;
                    return "Un nom de famille est nécessaire";
                },
                validateOnChange: false
            },
            Username: {
                value: {
                    get: () => this.item.Username,
                    set: (value) => this.item.Username = value,
                },
                validate: (value) => {
                    if (value)
                        return true;
                    return "Un nom d'utilisateur est nécessaire";
                },
                validateOnChange: false
            },
            Password: {
                value: {
                    get: () => this.item.Password,
                    set: (value) => this.item.Password = value,
                },
                validate: (value) => {
                    if (this.item.Id == 0 || this.item.Password) {
                        if (value && value.length >= 4)
                            return true;
                        return "Le mot de passe de faire 4 caratère de long";
                    }
                    return true;
                },
                validateOnChange: false
            },
        };
    }
    /**
     * @inheritdoc
     */
    newElement() {
        return new Core.Data.User();
    }
}
State.EditUsersState.Namespace=`${moduleName}.State`;
State.EditUsersState.$schema={...(Core.State.CreateOrUpdate?.$schema ?? {}), };
Aventus.Converter.register(State.EditUsersState.Fullname, State.EditUsersState);

_.State.EditUsersState=State.EditUsersState;
Application.Main.Frame.User = class User extends Core.System.Frame {
    get 'has_change'() { return this.getBoolAttr('has_change') }
    set 'has_change'(val) { this.setBoolAttr('has_change', val) }    get 'currentUser'() {
						return this.__watch["currentUser"];
					}
					set 'currentUser'(val) {
						this.__watch["currentUser"] = val;
					}get 'previewUri'() {
						return this.__watch["previewUri"];
					}
					set 'previewUri'(val) {
						this.__watch["previewUri"] = val;
					}    __registerWatchesActions() {
    this.__addWatchesActions("currentUser", ((target) => {
    target.compareObject();
}));this.__addWatchesActions("previewUri");    super.__registerWatchesActions();
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
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'after-scroll':`    <rk-button-icon-mi class="fixed-btn" icon="save_as" color="green" _id="user_4"></rk-button-icon-mi>`,'default':`<div class="title">Gestion de votre Profil</div><rk-row>    <rk-col size="12" size_md="6" class="col-background">        <rk-user-profil-picture class="user-profil touch" _id="user_0"></rk-user-profil-picture>        <input type="file" style="display:none" _id="user_1" />    </rk-col>    <rk-col size="12" size_md="6">        <div class="info-perso">            <rk-input label="Prénom" _id="user_2"></rk-input>            <rk-input label="Nom" _id="user_3"></rk-input>        </div>    </rk-col></rk-row>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
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
}); }
    getClassName() {
        return "User";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('has_change')) { this.attributeChangedCallback('has_change', false, false); } }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["currentUser"] = undefined;w["previewUri"] = undefined; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('has_change');this.__correctGetter('currentUser');this.__correctGetter('previewUri'); }
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

State.EditUserPermissionsState=class EditUserPermissionsState extends Core.State.ApplicationState {
    userId;
    constructor(userId) {
        super();
        this.userId = userId;
    }
    /**
     * @inheritdoc
     */
    get name() {
        return `/users/${this.userId}/permissions`;
    }
    syncField(addField) {
        addField("userId");
    }
}
State.EditUserPermissionsState.Namespace=`${moduleName}.State`;
State.EditUserPermissionsState.$schema={...(Core.State.ApplicationState?.$schema ?? {}), "userId":"number","name":"string"};
Aventus.Converter.register(State.EditUserPermissionsState.Fullname, State.EditUserPermissionsState);

_.State.EditUserPermissionsState=State.EditUserPermissionsState;
Component.Table.UserTable = class UserTable extends Core.Components.TableData {
    static __style = ``;
    __getStatic() {
        return UserTable;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(UserTable.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "UserTable";
    }
    defineRAM() {
        return Core.RAM.UserRAM.getInstance();
    }
    defineNewState() {
        return new State.EditUsersState();
    }
    defineEditState(data) {
        return new State.EditUsersState(data);
    }
    defineDeleteMessage(data) {
        return "Etes-vous sûr de vouloir supprimer l'utilisateur " + data.Firstname + " " + data.Lastname + "?";
    }
    configure(options) {
        options.title = "Liste des utilisateurs";
        options.globalSearch = true;
        let userId = Core.Lib.SessionManager.getUserId();
        this.addFilter("Id", (v) => {
            return v != userId;
        });
        options.schema = [{
                displayName: "Nom",
                type: "string",
                cellContent: (user, cell) => {
                    return user.Firstname + " " + user.Lastname;
                }
            }, {
                displayName: "Action",
                type: "custom",
                cellHeader: Core.Components.TableDataCellHeaderAction,
                cell: Component.Table.TableDataCellActionPermission,
                width: 105
            }];
        return options;
    }
    editPermission(user) {
        this.application?.navigate(new State.EditUserPermissionsState(user.Id));
    }
}
Component.Table.UserTable.Namespace=`${moduleName}.Component.Table`;
Component.Table.UserTable.Tag=`settings-user-table`;
_.Component.Table.UserTable=Component.Table.UserTable;
if(!window.customElements.get('settings-user-table')){window.customElements.define('settings-user-table', Component.Table.UserTable);Aventus.WebComponentInstance.registerDefinition(Component.Table.UserTable);}

Application.Main.Frame.Index = class Index extends Core.System.Frame {
    get 'currentUser'() {
						return this.__watch["currentUser"];
					}
					set 'currentUser'(val) {
						this.__watch["currentUser"] = val;
					}    __registerWatchesActions() {
    this.__addWatchesActions("currentUser");    super.__registerWatchesActions();
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
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="header">    <rk-user-profil-picture _id="index_0"></rk-user-profil-picture>    <div _id="index_1"></div></div><div class="content">    <rk-row>        <rk-col size="12" size_sm="6" size_md="4" size_lg="3">            <rk-link to="/profil" class="option">                <mi-icon icon="person"></mi-icon>                <div class="text">                    <div class="title">Profil</div>                    <div class="info">Gérer votre profil</div>                </div>            </rk-link>        </rk-col>        <rk-col size="12" size_sm="6" size_md="4" size_lg="3">            <rk-link to="/display" class="option">                <mi-icon icon="display_settings"></mi-icon>                <div class="text">                    <div class="title">Affichage</div>                    <div class="info">Gestion de l'affichage et des bureaux</div>                </div>            </rk-link>        </rk-col>        <rk-col size="12" size_sm="6" size_md="4" size_lg="3">            <rk-link to="/users" class="option">                <mi-icon icon="group"></mi-icon>                <div class="text">                    <div class="title">Utilisateurs</div>                    <div class="info">Gestion des utilisateurs du système</div>                </div>            </rk-link>        </rk-col>        <rk-col size="12" size_sm="6" size_md="4" size_lg="3">            <rk-link to="/groups" class="option">                <mi-icon icon="diversity_3"></mi-icon>                <div class="text">                    <div class="title">Groupes</div>                    <div class="info">Gestion des groupes d'utilisateurs</div>                </div>            </rk-link>        </rk-col>        <rk-col size="12" size_sm="6" size_md="4" size_lg="3">            <rk-link to="/groups" class="option">                <mi-icon icon="gavel"></mi-icon>                <div class="text">                    <div class="title">Permissions</div>                    <div class="info">Permet de voir les permissions d'un utilisateur spécifique</div>                </div>            </rk-link>        </rk-col>    </rk-row></div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "content": {
    "index_0°uri": {
      "fct": (c) => `${c.print(c.comp.__4e98023cfb0b5ecea55cf339715caac5method0())}`
    },
    "index_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__4e98023cfb0b5ecea55cf339715caac5method1())} ${c.print(c.comp.__4e98023cfb0b5ecea55cf339715caac5method2())}`
    }
  }
}); }
    getClassName() {
        return "Index";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["currentUser"] = undefined; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('currentUser'); }
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

Application.Main.Frame.GroupsFrame = class GroupsFrame extends Core.System.FrameNoScroll {
    static __style = `:host{padding:15px}`;
    __getStatic() {
        return GroupsFrame;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(GroupsFrame.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<settings-group-table></settings-group-table>` }
    });
}
    getClassName() {
        return "GroupsFrame";
    }
    pageTitle() {
        return "Gestion des groupes";
    }
    onShow() {
    }
    onHide() {
    }
}
Application.Main.Frame.GroupsFrame.Namespace=`${moduleName}.Application.Main.Frame`;
Application.Main.Frame.GroupsFrame.Tag=`settings-groups-frame`;
_.Application.Main.Frame.GroupsFrame=Application.Main.Frame.GroupsFrame;
if(!window.customElements.get('settings-groups-frame')){window.customElements.define('settings-groups-frame', Application.Main.Frame.GroupsFrame);Aventus.WebComponentInstance.registerDefinition(Application.Main.Frame.GroupsFrame);}

State.EditGroupPermissionsState=class EditGroupPermissionsState extends Core.State.ApplicationState {
    groupId;
    constructor(groupId) {
        super();
        this.groupId = groupId;
    }
    /**
     * @inheritdoc
     */
    get name() {
        return `/groups/${this.groupId}/permissions`;
    }
    syncField(addField) {
        addField("groupId");
    }
}
State.EditGroupPermissionsState.Namespace=`${moduleName}.State`;
State.EditGroupPermissionsState.$schema={...(Core.State.ApplicationState?.$schema ?? {}), "groupId":"number","name":"string"};
Aventus.Converter.register(State.EditGroupPermissionsState.Fullname, State.EditGroupPermissionsState);

_.State.EditGroupPermissionsState=State.EditGroupPermissionsState;
State.EditGroupState=class EditGroupState extends Core.State.CreateOrUpdate {
    /**
     * @inheritdoc
     */
    defineRAM() {
        return Core.RAM.GroupRAM.getInstance();
    }
    /**
     * @inheritdoc
     */
    defineObjectName() {
        return 'groups';
    }
    /**
     * @inheritdoc
     */
    defineFormSchema() {
        return {
            Name: {
                value: {
                    get: () => this.item.Name,
                    set: (value) => this.item.Name = value,
                },
                validate: (value) => {
                    if (value)
                        return true;
                    return "Un nom de groupe est nécessaire";
                },
                validateOnChange: false
            },
            Description: {
                value: {
                    get: () => this.item.Description,
                    set: (value) => this.item.Description = value,
                },
            },
            Users: {
                value: {
                    get: () => this.item.Users,
                    set: (value) => this.item.Users = value,
                },
            },
        };
    }
    /**
     * @inheritdoc
     */
    newElement() {
        return new Core.Data.Group();
    }
}
State.EditGroupState.Namespace=`${moduleName}.State`;
State.EditGroupState.$schema={...(Core.State.CreateOrUpdate?.$schema ?? {}), };
Aventus.Converter.register(State.EditGroupState.Fullname, State.EditGroupState);

_.State.EditGroupState=State.EditGroupState;
Application.Main.Frame.Display = class Display extends Core.System.Frame {
    get 'has_change'() { return this.getBoolAttr('has_change') }
    set 'has_change'(val) { this.setBoolAttr('has_change', val) }    get 'configuration'() {
						return this.__watch["configuration"];
					}
					set 'configuration'(val) {
						this.__watch["configuration"] = val;
					}get 'iconSize'() {
						return this.__watch["iconSize"];
					}
					set 'iconSize'(val) {
						this.__watch["iconSize"] = val;
					}    currentDesktop;
    __registerWatchesActions() {
    this.__addWatchesActions("configuration", ((target) => {
    target.compareObject();
}));this.__addWatchesActions("iconSize");    super.__registerWatchesActions();
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
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'after-scroll':`    <rk-button-icon-mi class="fixed-btn" icon="save_as" color="green" _id="display_7"></rk-button-icon-mi>`,'default':`<div class="title">Gestion du bureau</div><div class="sub-title">Arrière plan</div><rk-row>    <rk-col size="12" size_md="6" class="col-background">        <div class="bg-preview" _id="display_0"></div>        <input type="file" style="display:none" _id="display_1" />    </rk-col>    <rk-col size="12" size_md="6">        <div class="container-background-option">            <rk-select label="Choissiez une taille" _id="display_2">                <rk-option value="0">Remplir</rk-option>                <rk-option value="1">Ajuster</rk-option>                <rk-option value="2">Etirer</rk-option>            </rk-select>        </div>    </rk-col></rk-row><rk-separator></rk-separator><div class="sub-title">Taille des icones</div><div class="icon-size-container">    <div class="configuration">        <rk-item-box-select class="icon-size" value="desktop" _id="display_3">            <rk-item-box-option value="desktop">                <mi-icon icon="desktop_windows"></mi-icon>            </rk-item-box-option>            <rk-item-box-option value="tablet">                <mi-icon icon="tablet_mac"></mi-icon>            </rk-item-box-option>            <rk-item-box-option value="phone">                <mi-icon icon="phone_iphone"></mi-icon>            </rk-item-box-option>        </rk-item-box-select>        <rk-slider min="30" max="100" step="5" value="70" popup="onMove" _id="display_4"></rk-slider>    </div>    <div class="result">        <div class="icon-example" _id="display_5"></div>    </div></div><rk-separator></rk-separator><div class="sub-title">Synchronisation du bureau</div><div class="sync-container">    <p>Si vous synchronisez vos bureaux, une réplication sera faite entre chacun de vos appareils pour toujours        reprendre le travail là où vous l'avez laissé.</p>    <rk-checkbox label="Synchroniser" _id="display_6"></rk-checkbox></div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
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
}); }
    getClassName() {
        return "Display";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('has_change')) { this.attributeChangedCallback('has_change', false, false); } }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["configuration"] = undefined;w["iconSize"] = 0; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('has_change');this.__correctGetter('configuration');this.__correctGetter('iconSize'); }
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

Application.Main.Frame.GroupEditFrame = class GroupEditFrame extends Core.System.Frame {
    get 'form'() {
						return this.__watch["form"];
					}
					set 'form'(val) {
						this.__watch["form"] = val;
					}    __registerWatchesActions() {
    this.__addWatchesActions("form");    super.__registerWatchesActions();
}
    static __style = `:host .title{display:flex;font-size:var(--font-size-lg);margin-bottom:15px;margin-top:20px;width:100%}:host .validate{margin-top:15px;text-align:center}:host .import{padding:0 10px;margin-top:15px;height:400px}`;
    __getStatic() {
        return GroupEditFrame;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(GroupEditFrame.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="title">Edition d'un groupe</div><rk-row>    <rk-col size="12" size_md="6">        <rk-input label="Nom" _id="groupeditframe_0"></rk-input>    </rk-col>    <rk-col size="12" size_md="6">        <rk-textarea label="Description" autogrow _id="groupeditframe_1"></rk-textarea>    </rk-col></rk-row><settings-two-columns-select-user class="import" placeholder_select="Recherche" placeholder_unselect="Recherche" searchable_select searchable_unselect title_select="Personnes groupées" title_unselect="Personnes non groupées" _id="groupeditframe_2"></settings-two-columns-select-user><div class="validate">    <rk-button color="green" _id="groupeditframe_3">Enregister</rk-button></div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "injection": [
    {
      "id": "groupeditframe_0",
      "injectionName": "formPart",
      "inject": (c) => c.comp.__da703e6eac95523f2650563c34d32bb9method0(),
      "once": true
    },
    {
      "id": "groupeditframe_1",
      "injectionName": "formPart",
      "inject": (c) => c.comp.__da703e6eac95523f2650563c34d32bb9method1(),
      "once": true
    },
    {
      "id": "groupeditframe_2",
      "injectionName": "formPart",
      "inject": (c) => c.comp.__da703e6eac95523f2650563c34d32bb9method2(),
      "once": true
    }
  ],
  "pressEvents": [
    {
      "id": "groupeditframe_3",
      "onPress": (e, pressInstance, c) => { c.comp.validate(e, pressInstance); }
    }
  ]
}); }
    getClassName() {
        return "GroupEditFrame";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["form"] = undefined; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('form'); }
    pageTitle() {
        return "Edition d'un groupe";
    }
    onShow() {
        if (this.state instanceof State.EditGroupState) {
            this.form = this.state.form;
        }
        else {
            this.application.navigate("/users");
        }
    }
    onHide() {
    }
    async validate() {
        if (this.state instanceof State.EditGroupState) {
            let result = await this.state.save();
            if (result !== undefined) {
                this.state.back();
            }
        }
    }
    __da703e6eac95523f2650563c34d32bb9method0() {
        return this.form.Name;
    }
    __da703e6eac95523f2650563c34d32bb9method1() {
        return this.form.Description;
    }
    __da703e6eac95523f2650563c34d32bb9method2() {
        return this.form.Users;
    }
}
Application.Main.Frame.GroupEditFrame.Namespace=`${moduleName}.Application.Main.Frame`;
Application.Main.Frame.GroupEditFrame.Tag=`settings-group-edit-frame`;
_.Application.Main.Frame.GroupEditFrame=Application.Main.Frame.GroupEditFrame;
if(!window.customElements.get('settings-group-edit-frame')){window.customElements.define('settings-group-edit-frame', Application.Main.Frame.GroupEditFrame);Aventus.WebComponentInstance.registerDefinition(Application.Main.Frame.GroupEditFrame);}

Component.Form.AllowDeny = class AllowDeny extends Core.Components.FormElement {
    static get observedAttributes() {return ["allow_none"].concat(super.observedAttributes).filter((v, i, a) => a.indexOf(v) === i);}
    get 'readonly'() { return this.getBoolAttr('readonly') }
    set 'readonly'(val) { this.setBoolAttr('readonly', val) }    get 'allow_none'() { return this.getBoolProp('allow_none') }
    set 'allow_none'(val) { this.setBoolAttr('allow_none', val) }    get 'value'() {
						return this.__watch["value"];
					}
					set 'value'(val) {
						this.__watch["value"] = val;
					}    selectedEl;
    __registerWatchesActions() {
    this.__addWatchesActions("value", ((target, action, path, value) => {
    target.onValueChange();
}));    super.__registerWatchesActions();
}
    static __style = `:host{align-items:center;border:1px solid var(--primary-color);border-radius:var(--border-radius-sm);display:flex;justify-content:center;overflow:hidden}:host mi-icon{border-left:1px solid var(--primary-color);font-size:var(--font-size);padding:5px}:host mi-icon:first-child{border-left:none}:host .allow{color:var(--green)}:host .deny{color:var(--red)}:host .none{color:var(--text-color)}:host .allow.selected{background-color:var(--green);color:var(--text-color-green)}:host .deny.selected{background-color:var(--red);color:var(--text-color-red)}:host .none.selected{background-color:var(--secondary-color);color:var(--text-color-reverse)}:host([readonly]){cursor:not-allowed}`;
    __getStatic() {
        return AllowDeny;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(AllowDeny.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<mi-icon icon="check" class="allow" _id="allowdeny_0"></mi-icon><template _id="allowdeny_1"></template><mi-icon icon="close" class="deny" _id="allowdeny_3"></mi-icon>` }
    });
}
    get noneEl () { return this.shadowRoot.querySelector('[_id="allowdeny_2"]'); }    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "allowEl",
      "ids": [
        "allowdeny_0"
      ]
    },
    {
      "name": "denyEl",
      "ids": [
        "allowdeny_3"
      ]
    }
  ],
  "pressEvents": [
    {
      "id": "allowdeny_0",
      "onPress": (e, pressInstance, c) => { c.comp.allow(e, pressInstance); }
    },
    {
      "id": "allowdeny_3",
      "onPress": (e, pressInstance, c) => { c.comp.deny(e, pressInstance); }
    }
  ]
});const templ0 = new Aventus.Template(this);templ0.setTemplate(`    <mi-icon icon="remove" class="none" _id="allowdeny_2"></mi-icon>`);templ0.setActions({
  "pressEvents": [
    {
      "id": "allowdeny_2",
      "onPress": (e, pressInstance, c) => { c.comp.none(e, pressInstance); }
    }
  ]
});this.__getStatic().__template.addIf({
                    anchorId: 'allowdeny_1',
                    parts: [{once: true,
                    condition: (c) => c.comp.__f72122525f74f423c0804854d7dfe947method0(),
                    template: templ0
                }]
            }); }
    getClassName() {
        return "AllowDeny";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('readonly')) { this.attributeChangedCallback('readonly', false, false); }if(!this.hasAttribute('allow_none')) { this.attributeChangedCallback('allow_none', false, false); } }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["value"] = "none"; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('readonly');this.__upgradeProperty('allow_none');this.__correctGetter('value'); }
    __listBoolProps() { return ["readonly","allow_none"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    onValueChange() {
        if (this.value == "allow") {
            if (this.selectedEl == this.allowEl)
                return;
            if (this.selectedEl) {
                this.selectedEl.classList.remove("selected");
            }
            this.allowEl.classList.add("selected");
            this.selectedEl = this.allowEl;
        }
        else if (this.value == "deny") {
            if (this.selectedEl == this.denyEl)
                return;
            if (this.selectedEl) {
                this.selectedEl.classList.remove("selected");
            }
            this.denyEl.classList.add("selected");
            this.selectedEl = this.denyEl;
        }
        else if (this.value == "none" && this.allow_none) {
            if (this.selectedEl == this.noneEl)
                return;
            if (this.selectedEl) {
                this.selectedEl.classList.remove("selected");
            }
            this.noneEl.classList.add("selected");
            this.selectedEl = this.noneEl;
        }
        else {
            this.value = "deny";
        }
    }
    allow() {
        if (this.readonly)
            return;
        this.value = "allow";
        this.triggerChange();
    }
    none() {
        if (this.readonly)
            return;
        if (!this.allow_none)
            return;
        this.value = "none";
        this.triggerChange();
    }
    deny() {
        if (this.readonly)
            return;
        this.value = "deny";
        this.triggerChange();
    }
    triggerChange() {
        this.onChange.trigger([this.value]);
        if (this.formPart) {
            Core.Components.FormElement.setValue(this.formPart, this.value);
            if (this.formPart.validateOnChange !== false) {
                this.validate();
            }
        }
    }
    postCreation() {
        this.onValueChange();
    }
    __f72122525f74f423c0804854d7dfe947method0() {
        return this.allow_none;
    }
}
Component.Form.AllowDeny.Namespace=`${moduleName}.Component.Form`;
Component.Form.AllowDeny.Tag=`settings-allow-deny`;
_.Component.Form.AllowDeny=Component.Form.AllowDeny;
if(!window.customElements.get('settings-allow-deny')){window.customElements.define('settings-allow-deny', Component.Form.AllowDeny);Aventus.WebComponentInstance.registerDefinition(Component.Form.AllowDeny);}

Component.Display.PermissionUserDisplay = class PermissionUserDisplay extends Aventus.WebComponent {
    static get observedAttributes() {return ["disable"].concat(super.observedAttributes).filter((v, i, a) => a.indexOf(v) === i);}
    get 'no_child'() { return this.getBoolAttr('no_child') }
    set 'no_child'(val) { this.setBoolAttr('no_child', val) }    get 'disable'() { return this.getBoolProp('disable') }
    set 'disable'(val) { this.setBoolAttr('disable', val) }    get 'permission'() {
						return this.__watch["permission"];
					}
					set 'permission'(val) {
						this.__watch["permission"] = val;
					}get 'permissions'() {
						return this.__watch["permissions"];
					}
					set 'permissions'(val) {
						this.__watch["permissions"] = val;
					}    currentPermission;
    __registerWatchesActions() {
    this.__addWatchesActions("permission", ((target, action, path, value) => {
    target.no_child = target.permission.Permissions.length == 0;
}));this.__addWatchesActions("permissions", ((target) => {
    target.permissionUpdated();
}));    super.__registerWatchesActions();
}
    __registerPropertiesActions() { super.__registerPropertiesActions(); this.__addPropertyActions("disable", ((target) => {
    target.changeDisable();
})); }
    static __style = `:host{display:flex;padding:10px;padding-right:0}:host rk-collapse{width:100%}:host rk-collapse .header{align-items:center;display:flex;width:100%}:host rk-collapse .header .title{flex-grow:1;transition:color .2s var(--bezier-curve)}:host rk-collapse .header .title p{font-size:var(--font-size-sm);margin:5px 0}:host rk-collapse .header .title p:empty{display:none}:host rk-collapse .header .action{display:flex;flex-shrink:0;flex-wrap:nowrap;gap:5px;margin-left:10px}:host rk-collapse .header .action .chevron{transform:rotate(0deg);transition:.3s transform var(--bezier-curve)}:host rk-collapse[open] .header .action .chevron{transform:rotate(90deg)}:host([disable]) rk-collapse{cursor:not-allowed}:host([disable]) rk-collapse .header{cursor:not-allowed}:host([disable]) rk-collapse .header .title{color:var(--text-color-disable)}:host([disable]) rk-collapse .header .action settings-allow-deny{pointer-events:none;opacity:.8}:host([disable]) rk-collapse .header .action .chevron{cursor:pointer}:host([no_child]) rk-collapse{cursor:default}:host([no_child]) rk-collapse .header .action .chevron{opacity:0;visibility:hidden}`;
    __getStatic() {
        return PermissionUserDisplay;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(PermissionUserDisplay.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<rk-collapse>    <div class="header" slot="header">        <div class="title">            <span _id="permissionuserdisplay_0"></span>            <p _id="permissionuserdisplay_1"></p>        </div>        <div class="action">            <settings-allow-deny allow_none _id="permissionuserdisplay_2"></settings-allow-deny>            <mi-icon class="chevron" icon="chevron_right"></mi-icon>        </div>    </div>    <div class="sub-permission" _id="permissionuserdisplay_3">        <template _id="permissionuserdisplay_4"></template>    </div></rk-collapse>` }
    });
}
    get permissionsDisplay () { var list = Array.from(this.shadowRoot.querySelectorAll('[_id="permissionuserdisplay_5"]')); return list; }    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "allowDenyEl",
      "ids": [
        "permissionuserdisplay_2"
      ]
    },
    {
      "name": "subPermissionCont",
      "ids": [
        "permissionuserdisplay_3"
      ]
    }
  ],
  "content": {
    "permissionuserdisplay_0°@HTML": {
      "fct": (c) => `${c.print(c.comp.__e89ecf0e3ac23dd45d17af163ab2a4c5method1())}`,
      "once": true
    },
    "permissionuserdisplay_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__e89ecf0e3ac23dd45d17af163ab2a4c5method2())}`,
      "once": true
    }
  },
  "events": [
    {
      "eventName": "onChange",
      "id": "permissionuserdisplay_2",
      "fct": (c, ...args) => c.comp.changeDisable.apply(c.comp, ...args),
      "isCallback": true
    }
  ]
});const templ0 = new Aventus.Template(this);templ0.setTemplate(`             <settings-permission-user-display _id="permissionuserdisplay_5"></settings-permission-user-display>        `);templ0.setActions({
  "injection": [
    {
      "id": "permissionuserdisplay_5",
      "injectionName": "permission",
      "inject": (c) => c.comp.__e89ecf0e3ac23dd45d17af163ab2a4c5method3(c.data.permission),
      "once": true
    },
    {
      "id": "permissionuserdisplay_5",
      "injectionName": "permissions",
      "inject": (c) => c.comp.__e89ecf0e3ac23dd45d17af163ab2a4c5method4(),
      "once": true
    }
  ]
});this.__getStatic().__template.addLoop({
                    anchorId: 'permissionuserdisplay_4',
                    template: templ0,
                simple:{data: "this.permission.Permissions",item:"permission"}}); }
    getClassName() {
        return "PermissionUserDisplay";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('no_child')) {this.setAttribute('no_child' ,'true'); }if(!this.hasAttribute('disable')) { this.attributeChangedCallback('disable', false, false); } }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["permission"] = undefined;w["permissions"] = []; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('no_child');this.__upgradeProperty('disable');this.__correctGetter('permission');this.__correctGetter('permissions'); }
    __listBoolProps() { return ["no_child","disable"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    changeDisable() {
        if (this.disable) {
            for (let child of this.subPermissionCont.children) {
                if (child instanceof Component.Display.PermissionUserDisplay) {
                    child.disable = this.disable;
                }
            }
        }
        else {
            for (let child of this.subPermissionCont.children) {
                if (child instanceof Component.Display.PermissionUserDisplay) {
                    child.disable = this.allowDenyEl.value == "deny";
                }
            }
        }
    }
    permissionUpdated() {
        let el = this.permissions.find(p => p.Permission.EnumName == this.permission.EnumName);
        if (el) {
            if (el.Allow) {
                this.allowDenyEl.value = 'allow';
            }
            else {
                this.allowDenyEl.value = 'deny';
            }
        }
        else {
            this.allowDenyEl.value = 'none';
        }
        this.currentPermission = el;
    }
    isAllow() {
        if (this.disable)
            return false;
        return this.allowDenyEl.value == "allow";
    }
    savePermissions(result) {
        if (!this.disable && this.allowDenyEl.value == "none") {
            if (this.currentPermission) {
                result.deleted.push(this.currentPermission);
            }
        }
        else {
            if (!this.currentPermission) {
                const perm = new Core.Data.PermissionUser();
                perm.Allow = this.isAllow();
                perm.Permission = new Core.Data.Permission();
                perm.Permission.Id = this.permission.PermissionId;
                result.created.push(perm);
            }
            else {
                if (this.currentPermission.Allow != this.isAllow()) {
                    const clone = this.currentPermission.clone();
                    clone.Allow = this.isAllow();
                    result.updated.push(clone);
                }
            }
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.savePermissions(result);
        }
    }
    allowAll() {
        if (this.allowDenyEl) {
            this.allowDenyEl.value = "allow";
            this.changeDisable();
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.allowAll();
        }
    }
    resetAll() {
        if (this.allowDenyEl) {
            this.allowDenyEl.value = "none";
            this.changeDisable();
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.resetAll();
        }
    }
    denyAll() {
        if (this.allowDenyEl) {
            this.allowDenyEl.value = "deny";
            this.changeDisable();
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.denyAll();
        }
    }
    postCreation() {
        this.changeDisable();
    }
    __e89ecf0e3ac23dd45d17af163ab2a4c5method1() {
        return this.permission.DisplayName;
    }
    __e89ecf0e3ac23dd45d17af163ab2a4c5method2() {
        return this.permission.Description;
    }
    __e89ecf0e3ac23dd45d17af163ab2a4c5method3(permission) {
        return permission;
    }
    __e89ecf0e3ac23dd45d17af163ab2a4c5method4() {
        return this.permissions;
    }
}
Component.Display.PermissionUserDisplay.Namespace=`${moduleName}.Component.Display`;
Component.Display.PermissionUserDisplay.Tag=`settings-permission-user-display`;
_.Component.Display.PermissionUserDisplay=Component.Display.PermissionUserDisplay;
if(!window.customElements.get('settings-permission-user-display')){window.customElements.define('settings-permission-user-display', Component.Display.PermissionUserDisplay);Aventus.WebComponentInstance.registerDefinition(Component.Display.PermissionUserDisplay);}

Component.Display.PermissionGroupDisplay = class PermissionGroupDisplay extends Aventus.WebComponent {
    static get observedAttributes() {return ["disable"].concat(super.observedAttributes).filter((v, i, a) => a.indexOf(v) === i);}
    get 'no_child'() { return this.getBoolAttr('no_child') }
    set 'no_child'(val) { this.setBoolAttr('no_child', val) }    get 'disable'() { return this.getBoolProp('disable') }
    set 'disable'(val) { this.setBoolAttr('disable', val) }    get 'permission'() {
						return this.__watch["permission"];
					}
					set 'permission'(val) {
						this.__watch["permission"] = val;
					}get 'permissions'() {
						return this.__watch["permissions"];
					}
					set 'permissions'(val) {
						this.__watch["permissions"] = val;
					}    currentPermission;
    __registerWatchesActions() {
    this.__addWatchesActions("permission", ((target, action, path, value) => {
    target.no_child = target.permission.Permissions.length == 0;
}));this.__addWatchesActions("permissions", ((target) => {
    target.permissionUpdated();
}));    super.__registerWatchesActions();
}
    __registerPropertiesActions() { super.__registerPropertiesActions(); this.__addPropertyActions("disable", ((target) => {
    target.changeDisable();
})); }
    static __style = `:host{display:flex;padding:10px;padding-right:0}:host rk-collapse{width:100%}:host rk-collapse .header{align-items:center;display:flex;width:100%}:host rk-collapse .header .title{flex-grow:1;transition:color .2s var(--bezier-curve)}:host rk-collapse .header .title p{font-size:var(--font-size-sm);margin:5px 0}:host rk-collapse .header .title p:empty{display:none}:host rk-collapse .header .action{display:flex;flex-shrink:0;flex-wrap:nowrap;gap:5px;margin-left:10px}:host rk-collapse .header .action .chevron{transform:rotate(0deg);transition:.3s transform var(--bezier-curve)}:host rk-collapse[open] .header .action .chevron{transform:rotate(90deg)}:host([disable]) rk-collapse{cursor:not-allowed}:host([disable]) rk-collapse .header{cursor:not-allowed}:host([disable]) rk-collapse .header .title{color:var(--text-color-disable)}:host([disable]) rk-collapse .header .action settings-allow-deny{pointer-events:none;opacity:.8}:host([disable]) rk-collapse .header .action .chevron{cursor:pointer}:host([no_child]) rk-collapse{cursor:default}:host([no_child]) rk-collapse .header .action .chevron{opacity:0;visibility:hidden}`;
    __getStatic() {
        return PermissionGroupDisplay;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(PermissionGroupDisplay.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<rk-collapse>    <div class="header" slot="header">        <div class="title">            <span _id="permissiongroupdisplay_0"></span>            <p _id="permissiongroupdisplay_1"></p>        </div>        <div class="action">            <settings-allow-deny _id="permissiongroupdisplay_2"></settings-allow-deny>            <mi-icon class="chevron" icon="chevron_right"></mi-icon>        </div>    </div>    <div class="sub-permission" _id="permissiongroupdisplay_3">        <template _id="permissiongroupdisplay_4"></template>    </div></rk-collapse>` }
    });
}
    get permissionsDisplay () { var list = Array.from(this.shadowRoot.querySelectorAll('[_id="permissiongroupdisplay_5"]')); return list; }    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "allowDenyEl",
      "ids": [
        "permissiongroupdisplay_2"
      ]
    },
    {
      "name": "subPermissionCont",
      "ids": [
        "permissiongroupdisplay_3"
      ]
    }
  ],
  "content": {
    "permissiongroupdisplay_0°@HTML": {
      "fct": (c) => `${c.print(c.comp.__82470d8150b122b843d0eeb6d9dfdbcemethod1())}`,
      "once": true
    },
    "permissiongroupdisplay_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__82470d8150b122b843d0eeb6d9dfdbcemethod2())}`,
      "once": true
    }
  },
  "events": [
    {
      "eventName": "onChange",
      "id": "permissiongroupdisplay_2",
      "fct": (c, ...args) => c.comp.changeDisable.apply(c.comp, ...args),
      "isCallback": true
    }
  ]
});const templ0 = new Aventus.Template(this);templ0.setTemplate(`             <settings-permission-group-display _id="permissiongroupdisplay_5"></settings-permission-group-display>        `);templ0.setActions({
  "injection": [
    {
      "id": "permissiongroupdisplay_5",
      "injectionName": "permission",
      "inject": (c) => c.comp.__82470d8150b122b843d0eeb6d9dfdbcemethod3(c.data.permission),
      "once": true
    },
    {
      "id": "permissiongroupdisplay_5",
      "injectionName": "permissions",
      "inject": (c) => c.comp.__82470d8150b122b843d0eeb6d9dfdbcemethod4(),
      "once": true
    }
  ]
});this.__getStatic().__template.addLoop({
                    anchorId: 'permissiongroupdisplay_4',
                    template: templ0,
                simple:{data: "this.permission.Permissions",item:"permission"}}); }
    getClassName() {
        return "PermissionGroupDisplay";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('no_child')) {this.setAttribute('no_child' ,'true'); }if(!this.hasAttribute('disable')) { this.attributeChangedCallback('disable', false, false); } }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["permission"] = undefined;w["permissions"] = []; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('no_child');this.__upgradeProperty('disable');this.__correctGetter('permission');this.__correctGetter('permissions'); }
    __listBoolProps() { return ["no_child","disable"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    changeDisable() {
        if (this.disable) {
            for (let child of this.subPermissionCont.children) {
                if (child instanceof Component.Display.PermissionGroupDisplay) {
                    child.disable = this.disable;
                }
            }
        }
        else {
            for (let child of this.subPermissionCont.children) {
                if (child instanceof Component.Display.PermissionGroupDisplay) {
                    child.disable = this.allowDenyEl.value == "deny";
                }
            }
        }
    }
    permissionUpdated() {
        let el = this.permissions.find(p => p.Permission.EnumName == this.permission.EnumName);
        this.allowDenyEl.value = el ? 'allow' : 'deny';
        this.currentPermission = el;
    }
    isAllow() {
        if (!this.disable)
            return false;
        return this.allowDenyEl.value == "allow";
    }
    savePermissions(result) {
        if (this.disable || ["none", "deny"].includes(this.allowDenyEl.value)) {
            if (this.currentPermission) {
                result.deleted.push(this.currentPermission);
            }
        }
        else {
            if (!this.currentPermission) {
                const perm = new Core.Data.PermissionGroup();
                perm.Permission = new Core.Data.Permission();
                perm.Permission.Id = this.permission.PermissionId;
                result.created.push(perm);
            }
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.savePermissions(result);
        }
    }
    allowAll() {
        if (this.allowDenyEl) {
            this.allowDenyEl.value = "allow";
            this.changeDisable();
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.allowAll();
        }
    }
    denyAll() {
        if (this.allowDenyEl) {
            this.allowDenyEl.value = "deny";
            this.changeDisable();
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.denyAll();
        }
    }
    postCreation() {
        this.changeDisable();
    }
    __82470d8150b122b843d0eeb6d9dfdbcemethod1() {
        return this.permission.DisplayName;
    }
    __82470d8150b122b843d0eeb6d9dfdbcemethod2() {
        return this.permission.Description;
    }
    __82470d8150b122b843d0eeb6d9dfdbcemethod3(permission) {
        return permission;
    }
    __82470d8150b122b843d0eeb6d9dfdbcemethod4() {
        return this.permissions;
    }
}
Component.Display.PermissionGroupDisplay.Namespace=`${moduleName}.Component.Display`;
Component.Display.PermissionGroupDisplay.Tag=`settings-permission-group-display`;
_.Component.Display.PermissionGroupDisplay=Component.Display.PermissionGroupDisplay;
if(!window.customElements.get('settings-permission-group-display')){window.customElements.define('settings-permission-group-display', Component.Display.PermissionGroupDisplay);Aventus.WebComponentInstance.registerDefinition(Component.Display.PermissionGroupDisplay);}

Component.Display.PermissionGroupApplicationDisplay = class PermissionGroupApplicationDisplay extends Aventus.WebComponent {
    get 'no_child'() { return this.getBoolAttr('no_child') }
    set 'no_child'(val) { this.setBoolAttr('no_child', val) }    get 'tree'() {
						return this.__watch["tree"];
					}
					set 'tree'(val) {
						this.__watch["tree"] = val;
					}get 'permissions'() {
						return this.__watch["permissions"];
					}
					set 'permissions'(val) {
						this.__watch["permissions"] = val;
					}    currentPermission;
    __registerWatchesActions() {
    this.__addWatchesActions("tree", ((target, action, path, value) => {
    target.no_child = target.tree.Permissions.length == 0;
    if (target.tree.AppName != "Système") {
        let cst = customElements.get(target.tree.IconTagName);
        if (cst) {
            target.iconEl.innerHTML = "";
            target.iconEl.appendChild(new cst);
        }
    }
    else {
        target.iconEl.innerHTML = "";
        target.iconEl.appendChild(new Core.System.CoreAppIcon());
    }
}));this.__addWatchesActions("permissions", ((target) => {
    target.permissionUpdated();
}));    super.__registerWatchesActions();
}
    static __style = `:host{background-color:#fff;border-radius:5px;box-shadow:var(--elevation-3);width:100%}:host rk-collapse{width:100%}:host rk-collapse .app-title{align-items:center;display:flex;padding:10px}:host rk-collapse .app-title .info{align-items:center;display:flex;flex-grow:1;flex-wrap:wrap}:host rk-collapse .app-title .info .icon>*{box-shadow:var(--elevation-0);height:40px;margin-right:10px;pointer-events:none;width:40px}:host rk-collapse .app-title .action{display:flex;flex-shrink:0;flex-wrap:nowrap;gap:5px;margin-left:10px;align-items:center}:host rk-collapse .app-title .action .chevron{transform:rotate(0deg);transition:.3s transform var(--bezier-curve)}:host rk-collapse settings-permission-group-display{padding-right:10px}:host rk-collapse[open] .app-title .action .chevron{transform:rotate(90deg)}:host([no_child]) rk-collapse{cursor:default}:host([no_child]) rk-collapse .app-title .action .chevron{opacity:0;visibility:hidden}`;
    __getStatic() {
        return PermissionGroupApplicationDisplay;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(PermissionGroupApplicationDisplay.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<rk-collapse>    <div class="app-title" slot="header">        <div class="info">            <div class="icon" _id="permissiongroupapplicationdisplay_0">            </div>            <span _id="permissiongroupapplicationdisplay_1"></span>        </div>        <div class="action">            <template _id="permissiongroupapplicationdisplay_2"></template>            <mi-icon class="chevron" icon="chevron_right"></mi-icon>        </div>    </div>    <div class="permissions" _id="permissiongroupapplicationdisplay_4">        <template _id="permissiongroupapplicationdisplay_5"></template>    </div></rk-collapse>` }
    });
}
    get permissionsDisplay () { var list = Array.from(this.shadowRoot.querySelectorAll('[_id="permissiongroupapplicationdisplay_6"]')); return list; }get allowDenyEl () { return this.shadowRoot.querySelector('[_id="permissiongroupapplicationdisplay_3"]'); }    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "iconEl",
      "ids": [
        "permissiongroupapplicationdisplay_0"
      ]
    },
    {
      "name": "permissionsCont",
      "ids": [
        "permissiongroupapplicationdisplay_4"
      ]
    }
  ],
  "content": {
    "permissiongroupapplicationdisplay_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__c942953a8954f153cac576d9a2e5ba8emethod2())}`,
      "once": true
    }
  }
});const templ1 = new Aventus.Template(this);templ1.setTemplate(`             <settings-permission-group-display _id="permissiongroupapplicationdisplay_6"></settings-permission-group-display>        `);templ1.setActions({
  "injection": [
    {
      "id": "permissiongroupapplicationdisplay_6",
      "injectionName": "permission",
      "inject": (c) => c.comp.__c942953a8954f153cac576d9a2e5ba8emethod3(c.data.permission),
      "once": true
    },
    {
      "id": "permissiongroupapplicationdisplay_6",
      "injectionName": "permissions",
      "inject": (c) => c.comp.__c942953a8954f153cac576d9a2e5ba8emethod4(),
      "once": true
    }
  ]
});this.__getStatic().__template.addLoop({
                    anchorId: 'permissiongroupapplicationdisplay_5',
                    template: templ1,
                simple:{data: "this.tree.Permissions",item:"permission"}});const templ0 = new Aventus.Template(this);templ0.setTemplate(`                <settings-allow-deny _id="permissiongroupapplicationdisplay_3"></settings-allow-deny>            `);templ0.setActions({
  "events": [
    {
      "eventName": "onChange",
      "id": "permissiongroupapplicationdisplay_3",
      "fct": (c, ...args) => c.comp.changeDisable.apply(c.comp, ...args),
      "isCallback": true
    }
  ]
});this.__getStatic().__template.addIf({
                    anchorId: 'permissiongroupapplicationdisplay_2',
                    parts: [{once: true,
                    condition: (c) => c.comp.__c942953a8954f153cac576d9a2e5ba8emethod0(),
                    template: templ0
                }]
            }); }
    getClassName() {
        return "PermissionGroupApplicationDisplay";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('no_child')) {this.setAttribute('no_child' ,'true'); } }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["tree"] = undefined;w["permissions"] = []; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('no_child');this.__correctGetter('tree');this.__correctGetter('permissions'); }
    __listBoolProps() { return ["no_child"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    changeDisable() {
        if (!this.allowDenyEl)
            return;
        for (let child of this.permissionsCont.children) {
            if (child instanceof Component.Display.PermissionGroupDisplay) {
                child.disable = this.allowDenyEl.value == "deny";
            }
        }
    }
    permissionUpdated() {
        if (!this.isConnected)
            return;
        if (!this.allowDenyEl)
            return;
        let el = this.permissions.find(p => p.Permission.Id == this.tree.PermissionId);
        this.allowDenyEl.value = el ? 'allow' : 'deny';
        this.currentPermission = el;
        this.changeDisable();
    }
    isAllow() {
        if (!this.allowDenyEl)
            return false;
        return this.allowDenyEl.value == "allow";
    }
    savePermissions(result) {
        if (!this.allowDenyEl || this.allowDenyEl.value == "deny" || this.allowDenyEl.value == "none") {
            if (this.currentPermission) {
                result.deleted.push(this.currentPermission);
            }
        }
        else {
            if (!this.currentPermission) {
                const perm = new Core.Data.PermissionGroup();
                perm.Permission = new Core.Data.Permission();
                perm.Permission.Id = this.tree.PermissionId;
                result.created.push(perm);
            }
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.savePermissions(result);
        }
    }
    allowAll() {
        if (this.allowDenyEl) {
            this.allowDenyEl.value = "allow";
            this.changeDisable();
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.allowAll();
        }
    }
    denyAll() {
        if (this.allowDenyEl) {
            this.allowDenyEl.value = "deny";
            this.changeDisable();
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.denyAll();
        }
    }
    postCreation() {
        this.permissionUpdated();
    }
    __c942953a8954f153cac576d9a2e5ba8emethod2() {
        return this.tree.AppName;
    }
    __c942953a8954f153cac576d9a2e5ba8emethod0() {
        return this.tree.PermissionId != 0;
    }
    __c942953a8954f153cac576d9a2e5ba8emethod3(permission) {
        return permission;
    }
    __c942953a8954f153cac576d9a2e5ba8emethod4() {
        return this.permissions;
    }
}
Component.Display.PermissionGroupApplicationDisplay.Namespace=`${moduleName}.Component.Display`;
Component.Display.PermissionGroupApplicationDisplay.Tag=`settings-permission-group-application-display`;
_.Component.Display.PermissionGroupApplicationDisplay=Component.Display.PermissionGroupApplicationDisplay;
if(!window.customElements.get('settings-permission-group-application-display')){window.customElements.define('settings-permission-group-application-display', Component.Display.PermissionGroupApplicationDisplay);Aventus.WebComponentInstance.registerDefinition(Component.Display.PermissionGroupApplicationDisplay);}

Application.Main.Frame.GroupPermissionFrame = class GroupPermissionFrame extends Core.System.Frame {
    get 'group'() {
						return this.__watch["group"];
					}
					set 'group'(val) {
						this.__watch["group"] = val;
					}get 'trees'() {
						return this.__watch["trees"];
					}
					set 'trees'(val) {
						this.__watch["trees"] = val;
					}get 'permissions'() {
						return this.__watch["permissions"];
					}
					set 'permissions'(val) {
						this.__watch["permissions"] = val;
					}    __registerWatchesActions() {
    this.__addWatchesActions("group");this.__addWatchesActions("trees");this.__addWatchesActions("permissions");    super.__registerWatchesActions();
}
    static __style = `:host .header{display:flex;align-items:center;margin-bottom:5px}:host .header .title{display:flex;font-size:var(--font-size-lg);margin-bottom:15px;margin-top:20px;width:100%}:host .header rk-button-icon-mi{flex-shrink:0}:host .actions{display:flex;margin-bottom:15px;gap:10px;flex-wrap:wrap}:host .table{display:flex;flex-direction:column;gap:10px;width:100%;margin-bottom:10px}`;
    __getStatic() {
        return GroupPermissionFrame;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(GroupPermissionFrame.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="header">    <div class="title" _id="grouppermissionframe_0"></div>    <rk-button-icon-mi icon="save" color="green" class="touch" _id="grouppermissionframe_1"></rk-button-icon-mi></div><div class="actions">    <rk-button color="green" _id="grouppermissionframe_2">Autoriser tout</rk-button>    <rk-button color="red" _id="grouppermissionframe_3">Refuser tout</rk-button></div><div class="table">    <template _id="grouppermissionframe_4"></template></div>` }
    });
}
    get appsPermissions () { var list = Array.from(this.shadowRoot.querySelectorAll('[_id="grouppermissionframe_5"]')); return list; }    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "content": {
    "grouppermissionframe_0°@HTML": {
      "fct": (c) => `Gestion des permissions pour ${c.print(c.comp.__49ce3ed32ce985130f403d3edc05e954method1())}`
    }
  },
  "pressEvents": [
    {
      "id": "grouppermissionframe_1",
      "onPress": (e, pressInstance, c) => { c.comp.save(e, pressInstance); }
    },
    {
      "id": "grouppermissionframe_2",
      "onPress": (e, pressInstance, c) => { c.comp.allowAll(e, pressInstance); }
    },
    {
      "id": "grouppermissionframe_3",
      "onPress": (e, pressInstance, c) => { c.comp.denyAll(e, pressInstance); }
    }
  ]
});const templ0 = new Aventus.Template(this);templ0.setTemplate(`         <settings-permission-group-application-display _id="grouppermissionframe_5"></settings-permission-group-application-display>    `);templ0.setActions({
  "injection": [
    {
      "id": "grouppermissionframe_5",
      "injectionName": "tree",
      "inject": (c) => c.comp.__49ce3ed32ce985130f403d3edc05e954method2(c.data.tree),
      "once": true
    },
    {
      "id": "grouppermissionframe_5",
      "injectionName": "permissions",
      "inject": (c) => c.comp.__49ce3ed32ce985130f403d3edc05e954method3(),
      "once": true
    }
  ]
});this.__getStatic().__template.addLoop({
                    anchorId: 'grouppermissionframe_4',
                    template: templ0,
                simple:{data: "this.trees",item:"tree"}}); }
    getClassName() {
        return "GroupPermissionFrame";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["group"] = undefined;w["trees"] = [];w["permissions"] = []; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('group');this.__correctGetter('trees');this.__correctGetter('permissions'); }
    pageTitle() {
        return "Gestion des permissions";
    }
    onShow() {
        if (!(this.state instanceof State.EditGroupPermissionsState)) {
            this.application.navigatePrevious(true);
            return;
        }
        this.loadData(this.state.groupId);
    }
    onHide() {
    }
    async loadData(groupId, reload = false) {
        if (!reload) {
            let group = await this.application.executeWithLoading(Core.RAM.GroupRAM.getInstance().getByIdWithError(groupId));
            if (!group) {
                this.application.navigatePrevious(true);
                return;
            }
            let permissionsTrees = await this.application.executeWithLoading(new Core.Routes.PermissionRouter().GetPermissionsTree());
            if (!permissionsTrees) {
                this.application.navigatePrevious(true);
                return;
            }
            this.trees = permissionsTrees;
            this.group = group;
        }
        let permissions = await this.application.executeWithLoading(new Core.Routes.PermissionGroupRouter().GetAllByGroup({ groupId }));
        if (!permissions) {
            this.application.navigatePrevious(true);
            return;
        }
        this.permissions = permissions;
    }
    allowAll() {
        for (let appPermissions of this.appsPermissions) {
            appPermissions.allowAll();
        }
    }
    denyAll() {
        for (let appPermissions of this.appsPermissions) {
            appPermissions.denyAll();
        }
    }
    async save() {
        if (!this.group)
            return;
        let result = {
            created: [],
            updated: [],
            deleted: []
        };
        for (let appPermissions of this.appsPermissions) {
            appPermissions.savePermissions(result);
        }
        for (let create of result.created) {
            create.GroupId = this.group.Id;
        }
        const saveResult = await this.application.executeWithLoading(new Core.Routes.PermissionGroupRouter().EditPermission(result));
        if (saveResult) {
            let n = new Core.System.Notification();
            n.subject = "Permissions sauvées";
            Core.System.Os.instance.notify(n);
            this.loadData(this.group.Id, true);
        }
    }
    __49ce3ed32ce985130f403d3edc05e954method1() {
        return this.group?.Name;
    }
    __49ce3ed32ce985130f403d3edc05e954method2(tree) {
        return tree;
    }
    __49ce3ed32ce985130f403d3edc05e954method3() {
        return this.permissions;
    }
}
Application.Main.Frame.GroupPermissionFrame.Namespace=`${moduleName}.Application.Main.Frame`;
Application.Main.Frame.GroupPermissionFrame.Tag=`settings-group-permission-frame`;
_.Application.Main.Frame.GroupPermissionFrame=Application.Main.Frame.GroupPermissionFrame;
if(!window.customElements.get('settings-group-permission-frame')){window.customElements.define('settings-group-permission-frame', Application.Main.Frame.GroupPermissionFrame);Aventus.WebComponentInstance.registerDefinition(Application.Main.Frame.GroupPermissionFrame);}

Application.Main.Frame.PermissionsFrame = class PermissionsFrame extends Core.System.Frame {
    get 'show_tree'() { return this.getBoolAttr('show_tree') }
    set 'show_tree'(val) { this.setBoolAttr('show_tree', val) }get 'is_super_admin'() { return this.getBoolAttr('is_super_admin') }
    set 'is_super_admin'(val) { this.setBoolAttr('is_super_admin', val) }    get 'trees'() {
						return this.__watch["trees"];
					}
					set 'trees'(val) {
						this.__watch["trees"] = val;
					}get 'permissions'() {
						return this.__watch["permissions"];
					}
					set 'permissions'(val) {
						this.__watch["permissions"] = val;
					}get 'userSelected'() {
						return this.__watch["userSelected"];
					}
					set 'userSelected'(val) {
						this.__watch["userSelected"] = val;
					}    __registerWatchesActions() {
    this.__addWatchesActions("trees");this.__addWatchesActions("permissions", ((target) => {
    target.show_tree = target.permissions != undefined;
}));this.__addWatchesActions("userSelected");    super.__registerWatchesActions();
}
    static __style = `:host .title{display:flex;font-size:var(--font-size-lg);margin-bottom:15px;margin-top:20px;width:100%}:host .super-admin{display:none;margin:10px 0}:host .tree{display:none;flex-direction:column;gap:10px;margin-bottom:10px;margin-top:10px;width:100%}:host([show_tree]) .tree{display:flex}:host([is_super_admin]) .super-admin{display:block}`;
    __getStatic() {
        return PermissionsFrame;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(PermissionsFrame.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="title">Test des permissions</div><div class="select-container">    <settings-user-select searchable label="Choix de l'utilisateur à tester" _id="permissionsframe_0"></settings-user-select></div><div class="super-admin" _id="permissionsframe_1"></div><div class="tree">    <template _id="permissionsframe_2"></template></div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "content": {
    "permissionsframe_1°@HTML": {
      "fct": (c) => `\r\n    ${c.print(c.comp.__5cdd51fd4cb413c013e874374b1307f1method1())} ${c.print(c.comp.__5cdd51fd4cb413c013e874374b1307f1method2())} est administrateur et a par conséquent des droits d'accès complets.\r\n`
    }
  },
  "events": [
    {
      "eventName": "onChange",
      "id": "permissionsframe_0",
      "fct": (c, ...args) => c.comp.onUserSelected.apply(c.comp, ...args),
      "isCallback": true
    }
  ]
});const templ0 = new Aventus.Template(this);templ0.setTemplate(`         <settings-permission-test-application-display _id="permissionsframe_3"></settings-permission-test-application-display>    `);templ0.setActions({
  "injection": [
    {
      "id": "permissionsframe_3",
      "injectionName": "tree",
      "inject": (c) => c.comp.__5cdd51fd4cb413c013e874374b1307f1method3(c.data.tree),
      "once": true
    },
    {
      "id": "permissionsframe_3",
      "injectionName": "permissions",
      "inject": (c) => c.comp.__5cdd51fd4cb413c013e874374b1307f1method4(),
      "once": true
    }
  ]
});this.__getStatic().__template.addLoop({
                    anchorId: 'permissionsframe_2',
                    template: templ0,
                simple:{data: "this.trees",item:"tree"}}); }
    getClassName() {
        return "PermissionsFrame";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('show_tree')) { this.attributeChangedCallback('show_tree', false, false); }if(!this.hasAttribute('is_super_admin')) { this.attributeChangedCallback('is_super_admin', false, false); } }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["trees"] = [];w["permissions"] = undefined;w["userSelected"] = undefined; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('show_tree');this.__upgradeProperty('is_super_admin');this.__correctGetter('trees');this.__correctGetter('permissions');this.__correctGetter('userSelected'); }
    __listBoolProps() { return ["show_tree","is_super_admin"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    pageTitle() {
        return "Test des permissions";
    }
    onShow() {
        this.loadData();
    }
    onHide() {
    }
    async loadData() {
        let permissionsTrees = await this.application.executeWithLoading(new Core.Routes.PermissionRouter().GetPermissionsTree());
        if (!permissionsTrees) {
            this.application.navigatePrevious(true);
            return;
        }
        this.trees = permissionsTrees;
    }
    async onUserSelected(user) {
        this.userSelected = user;
        if (user) {
            if (user.IsSuperAdmin) {
                this.permissions = undefined;
                this.is_super_admin = true;
            }
            else {
                this.is_super_admin = false;
                const result = await this.application.executeWithLoading(new Core.Routes.PermissionRouter().GetPermissionsForUser(user.Id));
                if (result) {
                    this.permissions = result;
                    return;
                }
            }
        }
        this.permissions = undefined;
    }
    showPermissionUser() {
        if (this.userSelected) {
            this.application.navigate(new State.EditUserPermissionsState(this.userSelected.Id));
        }
    }
    showPermissionGroup(groupId) {
        this.application.navigate(new State.EditGroupPermissionsState(groupId));
    }
    __5cdd51fd4cb413c013e874374b1307f1method1() {
        return this.userSelected?.Firstname;
    }
    __5cdd51fd4cb413c013e874374b1307f1method2() {
        return this.userSelected?.Lastname;
    }
    __5cdd51fd4cb413c013e874374b1307f1method3(tree) {
        return tree;
    }
    __5cdd51fd4cb413c013e874374b1307f1method4() {
        return this.permissions;
    }
}
Application.Main.Frame.PermissionsFrame.Namespace=`${moduleName}.Application.Main.Frame`;
Application.Main.Frame.PermissionsFrame.Tag=`settings-permissions-frame`;
_.Application.Main.Frame.PermissionsFrame=Application.Main.Frame.PermissionsFrame;
if(!window.customElements.get('settings-permissions-frame')){window.customElements.define('settings-permissions-frame', Application.Main.Frame.PermissionsFrame);Aventus.WebComponentInstance.registerDefinition(Application.Main.Frame.PermissionsFrame);}

Component.Display.LinkPermission = class LinkPermission extends Aventus.WebComponent {
    get 'group_id'() { return this.getNumberAttr('group_id') }
    set 'group_id'(val) { this.setNumberAttr('group_id', val) }    static __style = `:host{display:block}`;
    __getStatic() {
        return LinkPermission;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(LinkPermission.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "LinkPermission";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('group_id')){ this['group_id'] = undefined; } }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('group_id'); }
    postCreation() {
        new Aventus.PressManager({
            element: this,
            onPress: () => {
                const frame = this.findParentByType(Application.Main.Frame.PermissionsFrame);
                if (this.group_id) {
                    frame?.showPermissionGroup(this.group_id);
                }
                else {
                    frame?.showPermissionUser();
                }
            }
        });
    }
}
Component.Display.LinkPermission.Namespace=`${moduleName}.Component.Display`;
Component.Display.LinkPermission.Tag=`settings-link-permission`;
_.Component.Display.LinkPermission=Component.Display.LinkPermission;
if(!window.customElements.get('settings-link-permission')){window.customElements.define('settings-link-permission', Component.Display.LinkPermission);Aventus.WebComponentInstance.registerDefinition(Component.Display.LinkPermission);}

Component.Display.PermissionTestDisplay = class PermissionTestDisplay extends Aventus.WebComponent {
    get 'no_child'() { return this.getBoolAttr('no_child') }
    set 'no_child'(val) { this.setBoolAttr('no_child', val) }    get 'permission'() {
						return this.__watch["permission"];
					}
					set 'permission'(val) {
						this.__watch["permission"] = val;
					}get 'permissions'() {
						return this.__watch["permissions"];
					}
					set 'permissions'(val) {
						this.__watch["permissions"] = val;
					}    __registerWatchesActions() {
    this.__addWatchesActions("permission", ((target, action, path, value) => {
    target.no_child = target.permission.Permissions.length == 0;
}));this.__addWatchesActions("permissions", ((target) => {
    target.permissionUpdated();
}));    super.__registerWatchesActions();
}
    static __style = `:host{display:flex;padding:10px;padding-right:0}:host rk-collapse{width:100%}:host rk-collapse .header{align-items:center;display:flex;width:100%}:host rk-collapse .header .title{flex-grow:1;transition:color .2s var(--bezier-curve)}:host rk-collapse .header .title p{font-size:var(--font-size-sm);margin:5px 0}:host rk-collapse .header .title p:empty{display:none}:host rk-collapse .header .title .name{margin:5px 0}:host rk-collapse .header .title .from{font-size:calc(var(--font-size)*.8);margin-left:0px;display:flex;flex-direction:column;gap:5px}:host rk-collapse .header .title .from .touch:hover{text-decoration:underline}:host rk-collapse .header .action{display:flex;flex-shrink:0;flex-wrap:nowrap;gap:5px;margin-left:10px}:host rk-collapse .header .action .chevron{transform:rotate(0deg);transition:.3s transform var(--bezier-curve)}:host rk-collapse[open] .header .action .chevron{transform:rotate(90deg)}:host([disable]) rk-collapse{cursor:not-allowed}:host([disable]) rk-collapse .header{cursor:not-allowed}:host([disable]) rk-collapse .header .title{color:var(--text-color-disable)}:host([disable]) rk-collapse .header .action settings-allow-deny{pointer-events:none;opacity:.8}:host([disable]) rk-collapse .header .action .chevron{cursor:pointer}:host([no_child]) rk-collapse{cursor:default}:host([no_child]) rk-collapse .header .action .chevron{opacity:0;visibility:hidden}`;
    __getStatic() {
        return PermissionTestDisplay;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(PermissionTestDisplay.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<rk-collapse>    <div class="header" slot="header">        <div class="title">            <div>                <div class="name" _id="permissiontestdisplay_0"></div>                <div class="from" _id="permissiontestdisplay_1"></div>            </div>        </div>        <div class="action">            <settings-allow-deny readonly _id="permissiontestdisplay_2"></settings-allow-deny>            <mi-icon class="chevron" icon="chevron_right"></mi-icon>        </div>    </div>    <div class="sub-permission">        <template _id="permissiontestdisplay_3"></template>    </div></rk-collapse>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "fromEl",
      "ids": [
        "permissiontestdisplay_1"
      ]
    },
    {
      "name": "allowDenyEl",
      "ids": [
        "permissiontestdisplay_2"
      ]
    }
  ],
  "content": {
    "permissiontestdisplay_0°@HTML": {
      "fct": (c) => `${c.print(c.comp.__6f264d4b364780b7078054125983e9aamethod1())}`,
      "once": true
    }
  }
});const templ0 = new Aventus.Template(this);templ0.setTemplate(`             <settings-permission-test-display _id="permissiontestdisplay_4"></settings-permission-test-display>        `);templ0.setActions({
  "injection": [
    {
      "id": "permissiontestdisplay_4",
      "injectionName": "permission",
      "inject": (c) => c.comp.__6f264d4b364780b7078054125983e9aamethod2(c.data.permission),
      "once": true
    },
    {
      "id": "permissiontestdisplay_4",
      "injectionName": "permissions",
      "inject": (c) => c.comp.__6f264d4b364780b7078054125983e9aamethod3(),
      "once": true
    }
  ]
});this.__getStatic().__template.addLoop({
                    anchorId: 'permissiontestdisplay_3',
                    template: templ0,
                simple:{data: "this.permission.Permissions",item:"permission"}}); }
    getClassName() {
        return "PermissionTestDisplay";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('no_child')) {this.setAttribute('no_child' ,'true'); } }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["permission"] = undefined;w["permissions"] = undefined; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('no_child');this.__correctGetter('permission');this.__correctGetter('permissions'); }
    __listBoolProps() { return ["no_child"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    showPermission() {
    }
    async permissionUpdated() {
        const permissionUsers = this.permissions?.permissionUsers.filter(p => p.Permission.EnumName == this.permission.EnumName) ?? [];
        const permissionGroups = this.permissions?.permissionGroups.filter(p => p.Permission.EnumName == this.permission.EnumName) ?? [];
        let isAllowed = false;
        let check = true;
        this.fromEl.innerHTML = "";
        for (let permissionUser of permissionUsers) {
            const el = new Component.Display.LinkPermission();
            el.classList.add("touch");
            isAllowed = permissionUser.Allow;
            check = false;
            if (permissionUser.Allow) {
                el.innerHTML = "Autorisé par la permission sur l'utilisateur";
            }
            else {
                el.innerHTML = "Refuser par la permission sur l'utilistateur";
            }
            this.fromEl.appendChild(el);
        }
        for (let permissionGroup of permissionGroups) {
            const el = new Component.Display.LinkPermission();
            el.classList.add("touch");
            let group = await Core.RAM.GroupRAM.getInstance().get(permissionGroup.GroupId);
            el.innerHTML = "Autorisé par la permission sur le groupe " + group?.Name;
            el.group_id = group?.Id;
            if (check) {
                isAllowed = true;
            }
            this.fromEl.appendChild(el);
        }
    }
    createOriginUser(permission) {
    }
    __6f264d4b364780b7078054125983e9aamethod1() {
        return this.permission.DisplayName;
    }
    __6f264d4b364780b7078054125983e9aamethod2(permission) {
        return permission;
    }
    __6f264d4b364780b7078054125983e9aamethod3() {
        return this.permissions;
    }
}
Component.Display.PermissionTestDisplay.Namespace=`${moduleName}.Component.Display`;
Component.Display.PermissionTestDisplay.Tag=`settings-permission-test-display`;
_.Component.Display.PermissionTestDisplay=Component.Display.PermissionTestDisplay;
if(!window.customElements.get('settings-permission-test-display')){window.customElements.define('settings-permission-test-display', Component.Display.PermissionTestDisplay);Aventus.WebComponentInstance.registerDefinition(Component.Display.PermissionTestDisplay);}

Component.Display.PermissionTestApplicationDisplay = class PermissionTestApplicationDisplay extends Aventus.WebComponent {
    get 'no_child'() { return this.getBoolAttr('no_child') }
    set 'no_child'(val) { this.setBoolAttr('no_child', val) }    get 'tree'() {
						return this.__watch["tree"];
					}
					set 'tree'(val) {
						this.__watch["tree"] = val;
					}get 'permissions'() {
						return this.__watch["permissions"];
					}
					set 'permissions'(val) {
						this.__watch["permissions"] = val;
					}    actionGuard = new Aventus.ActionGuard();
    __registerWatchesActions() {
    this.__addWatchesActions("tree", ((target, action, path, value) => {
    target.no_child = target.tree.Permissions.length == 0;
    if (target.tree.AppName != "Système") {
        let cst = customElements.get(target.tree.IconTagName);
        if (cst) {
            target.iconEl.innerHTML = "";
            target.iconEl.appendChild(new cst);
        }
    }
    else {
        target.iconEl.innerHTML = "";
        target.iconEl.appendChild(new Core.System.CoreAppIcon());
    }
}));this.__addWatchesActions("permissions", ((target) => {
    target.permissionUpdated();
}));    super.__registerWatchesActions();
}
    static __style = `:host{background-color:#fff;border-radius:5px;box-shadow:var(--elevation-3);width:100%}:host rk-collapse{width:100%}:host rk-collapse .app-title{align-items:center;display:flex;padding:10px}:host rk-collapse .app-title .info{align-items:center;display:flex;flex-grow:1;flex-wrap:wrap}:host rk-collapse .app-title .info .icon>*{box-shadow:var(--elevation-0);height:40px;margin-right:10px;pointer-events:none;width:40px}:host rk-collapse .app-title .info .name{margin:5px 0}:host rk-collapse .app-title .info .from{font-size:calc(var(--font-size)*.8);margin-left:0px;display:flex;flex-direction:column;gap:5px}:host rk-collapse .app-title .info .from .touch:hover{text-decoration:underline}:host rk-collapse .app-title .action{display:flex;flex-shrink:0;flex-wrap:nowrap;gap:5px;margin-left:10px;align-items:center}:host rk-collapse .app-title .action .chevron{transform:rotate(0deg);transition:.3s transform var(--bezier-curve)}:host rk-collapse settings-permission-test-display{padding-right:10px}:host rk-collapse[open] .app-title .action .chevron{transform:rotate(90deg)}:host([no_child]) rk-collapse{cursor:default}:host([no_child]) rk-collapse .app-title .action .chevron{opacity:0;visibility:hidden}`;
    __getStatic() {
        return PermissionTestApplicationDisplay;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(PermissionTestApplicationDisplay.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<rk-collapse>    <div class="app-title" slot="header">        <div class="info">            <div class="icon" _id="permissiontestapplicationdisplay_0"></div>            <div>                <div class="name" _id="permissiontestapplicationdisplay_1"></div>                <div class="from" _id="permissiontestapplicationdisplay_2"></div>            </div>        </div>        <div class="action">            <template _id="permissiontestapplicationdisplay_3"></template>            <mi-icon class="chevron" icon="chevron_right"></mi-icon>        </div>    </div>    <div class="permissions">        <template _id="permissiontestapplicationdisplay_5"></template>    </div></rk-collapse>` }
    });
}
    get allowDenyEl () { return this.shadowRoot.querySelector('[_id="permissiontestapplicationdisplay_4"]'); }    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "iconEl",
      "ids": [
        "permissiontestapplicationdisplay_0"
      ]
    },
    {
      "name": "fromEl",
      "ids": [
        "permissiontestapplicationdisplay_2"
      ]
    }
  ],
  "content": {
    "permissiontestapplicationdisplay_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__6c78dd658641b8c31654ab636e17d574method2())}`,
      "once": true
    }
  }
});const templ1 = new Aventus.Template(this);templ1.setTemplate(`             <settings-permission-test-display _id="permissiontestapplicationdisplay_6"></settings-permission-test-display>        `);templ1.setActions({
  "injection": [
    {
      "id": "permissiontestapplicationdisplay_6",
      "injectionName": "permission",
      "inject": (c) => c.comp.__6c78dd658641b8c31654ab636e17d574method3(c.data.permission),
      "once": true
    },
    {
      "id": "permissiontestapplicationdisplay_6",
      "injectionName": "permissions",
      "inject": (c) => c.comp.__6c78dd658641b8c31654ab636e17d574method4(),
      "once": true
    }
  ]
});this.__getStatic().__template.addLoop({
                    anchorId: 'permissiontestapplicationdisplay_5',
                    template: templ1,
                simple:{data: "this.tree.Permissions",item:"permission"}});const templ0 = new Aventus.Template(this);templ0.setTemplate(`                <settings-allow-deny readonly _id="permissiontestapplicationdisplay_4"></settings-allow-deny>            `);this.__getStatic().__template.addIf({
                    anchorId: 'permissiontestapplicationdisplay_3',
                    parts: [{once: true,
                    condition: (c) => c.comp.__6c78dd658641b8c31654ab636e17d574method0(),
                    template: templ0
                }]
            }); }
    getClassName() {
        return "PermissionTestApplicationDisplay";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('no_child')) {this.setAttribute('no_child' ,'true'); } }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["tree"] = undefined;w["permissions"] = undefined; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('no_child');this.__correctGetter('tree');this.__correctGetter('permissions'); }
    __listBoolProps() { return ["no_child"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    async permissionUpdated() {
        await this.actionGuard.run(["permissionUpdated"], async () => {
            if (!this.isConnected)
                return;
            if (!this.allowDenyEl)
                return;
            let isAllowed = false;
            let check = true;
            const permissionUsers = this.permissions?.permissionUsers.filter(p => p.Permission.Id == this.tree.PermissionId) ?? [];
            const permissionGroups = this.permissions?.permissionGroups.filter(p => p.Permission.Id == this.tree.PermissionId) ?? [];
            this.fromEl.innerHTML = "";
            for (let permissionUser of permissionUsers) {
                const el = new Component.Display.LinkPermission();
                el.classList.add("touch");
                isAllowed = permissionUser.Allow;
                check = false;
                if (permissionUser.Allow) {
                    el.innerHTML = "Autorisé par la permission sur l'utilisateur";
                }
                else {
                    el.innerHTML = "Refuser par la permission sur l'utilistateur";
                }
                this.fromEl.appendChild(el);
            }
            for (let permissionGroup of permissionGroups) {
                const el = new Component.Display.LinkPermission();
                el.classList.add("touch");
                let group = await Core.RAM.GroupRAM.getInstance().get(permissionGroup.GroupId);
                el.innerHTML = "Autorisé par la permission sur le groupe " + group?.Name;
                el.group_id = group?.Id;
                if (check) {
                    isAllowed = true;
                }
                this.fromEl.appendChild(el);
            }
            this.allowDenyEl.value = isAllowed ? 'allow' : 'deny';
        });
    }
    postCreation() {
        this.permissionUpdated();
    }
    __6c78dd658641b8c31654ab636e17d574method2() {
        return this.tree.AppName;
    }
    __6c78dd658641b8c31654ab636e17d574method0() {
        return this.tree.PermissionId != 0;
    }
    __6c78dd658641b8c31654ab636e17d574method3(permission) {
        return permission;
    }
    __6c78dd658641b8c31654ab636e17d574method4() {
        return this.permissions;
    }
}
Component.Display.PermissionTestApplicationDisplay.Namespace=`${moduleName}.Component.Display`;
Component.Display.PermissionTestApplicationDisplay.Tag=`settings-permission-test-application-display`;
_.Component.Display.PermissionTestApplicationDisplay=Component.Display.PermissionTestApplicationDisplay;
if(!window.customElements.get('settings-permission-test-application-display')){window.customElements.define('settings-permission-test-application-display', Component.Display.PermissionTestApplicationDisplay);Aventus.WebComponentInstance.registerDefinition(Component.Display.PermissionTestApplicationDisplay);}

Application.Main.Frame.UserEditFrame = class UserEditFrame extends Core.System.Frame {
    get 'form'() {
						return this.__watch["form"];
					}
					set 'form'(val) {
						this.__watch["form"] = val;
					}    __registerWatchesActions() {
    this.__addWatchesActions("form");    super.__registerWatchesActions();
}
    static __style = `:host .title{display:flex;font-size:var(--font-size-lg);margin-bottom:15px;margin-top:20px;width:100%}:host .validate{margin-top:15px;text-align:center}`;
    __getStatic() {
        return UserEditFrame;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(UserEditFrame.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="title">Edition d'un utilisateur</div><rk-row>    <rk-col size="12" size_md="6">        <rk-input label="Prénom" _id="usereditframe_0"></rk-input>    </rk-col>    <rk-col size="12" size_md="6">        <rk-input label="Nom de famille" _id="usereditframe_1"></rk-input>    </rk-col>    <rk-col size="12" size_md="6">        <rk-input label="Nom d'utilisateur" _id="usereditframe_2"></rk-input>    </rk-col>    <rk-col size="12" size_md="6">        <rk-password label="Mot de passe" _id="usereditframe_3"></rk-password>    </rk-col></rk-row><div class="validate">    <rk-button color="green" _id="usereditframe_4">Enregister</rk-button></div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "injection": [
    {
      "id": "usereditframe_0",
      "injectionName": "formPart",
      "inject": (c) => c.comp.__b8d6451d030d601326100423cb1c92ecmethod0(),
      "once": true
    },
    {
      "id": "usereditframe_1",
      "injectionName": "formPart",
      "inject": (c) => c.comp.__b8d6451d030d601326100423cb1c92ecmethod1(),
      "once": true
    },
    {
      "id": "usereditframe_2",
      "injectionName": "formPart",
      "inject": (c) => c.comp.__b8d6451d030d601326100423cb1c92ecmethod2(),
      "once": true
    },
    {
      "id": "usereditframe_3",
      "injectionName": "formPart",
      "inject": (c) => c.comp.__b8d6451d030d601326100423cb1c92ecmethod3(),
      "once": true
    }
  ],
  "pressEvents": [
    {
      "id": "usereditframe_4",
      "onPress": (e, pressInstance, c) => { c.comp.validate(e, pressInstance); }
    }
  ]
}); }
    getClassName() {
        return "UserEditFrame";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["form"] = undefined; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('form'); }
    pageTitle() {
        return "Edition d'utilisateur";
    }
    onShow() {
        if (this.state instanceof State.EditUsersState) {
            this.form = this.state.form;
        }
        else {
            this.application.navigate("/users");
        }
    }
    onHide() {
    }
    async validate() {
        if (this.state instanceof State.EditUsersState) {
            let result = await this.state.save();
            if (result !== undefined) {
                this.state.back();
            }
        }
    }
    __b8d6451d030d601326100423cb1c92ecmethod0() {
        return this.form.Firstname;
    }
    __b8d6451d030d601326100423cb1c92ecmethod1() {
        return this.form.Lastname;
    }
    __b8d6451d030d601326100423cb1c92ecmethod2() {
        return this.form.Username;
    }
    __b8d6451d030d601326100423cb1c92ecmethod3() {
        return this.form.Password;
    }
}
Application.Main.Frame.UserEditFrame.Namespace=`${moduleName}.Application.Main.Frame`;
Application.Main.Frame.UserEditFrame.Tag=`settings-user-edit-frame`;
_.Application.Main.Frame.UserEditFrame=Application.Main.Frame.UserEditFrame;
if(!window.customElements.get('settings-user-edit-frame')){window.customElements.define('settings-user-edit-frame', Application.Main.Frame.UserEditFrame);Aventus.WebComponentInstance.registerDefinition(Application.Main.Frame.UserEditFrame);}

Component.Display.PermissionUserApplicationDisplay = class PermissionUserApplicationDisplay extends Aventus.WebComponent {
    get 'no_child'() { return this.getBoolAttr('no_child') }
    set 'no_child'(val) { this.setBoolAttr('no_child', val) }    get 'tree'() {
						return this.__watch["tree"];
					}
					set 'tree'(val) {
						this.__watch["tree"] = val;
					}get 'permissions'() {
						return this.__watch["permissions"];
					}
					set 'permissions'(val) {
						this.__watch["permissions"] = val;
					}    currentPermission;
    __registerWatchesActions() {
    this.__addWatchesActions("tree", ((target, action, path, value) => {
    target.no_child = target.tree.Permissions.length == 0;
    if (target.tree.AppName != "Système") {
        let cst = customElements.get(target.tree.IconTagName);
        if (cst) {
            target.iconEl.innerHTML = "";
            target.iconEl.appendChild(new cst);
        }
    }
    else {
        target.iconEl.innerHTML = "";
        target.iconEl.appendChild(new Core.System.CoreAppIcon());
    }
}));this.__addWatchesActions("permissions", ((target) => {
    target.permissionUpdated();
}));    super.__registerWatchesActions();
}
    static __style = `:host{background-color:#fff;border-radius:5px;box-shadow:var(--elevation-3);width:100%}:host rk-collapse{width:100%}:host rk-collapse .app-title{align-items:center;display:flex;padding:10px}:host rk-collapse .app-title .info{align-items:center;display:flex;flex-grow:1;flex-wrap:wrap}:host rk-collapse .app-title .info .icon>*{box-shadow:var(--elevation-0);height:40px;margin-right:10px;pointer-events:none;width:40px}:host rk-collapse .app-title .action{display:flex;flex-shrink:0;flex-wrap:nowrap;gap:5px;margin-left:10px;align-items:center}:host rk-collapse .app-title .action .chevron{transform:rotate(0deg);transition:.3s transform var(--bezier-curve)}:host rk-collapse settings-permission-user-display{padding-right:10px}:host rk-collapse[open] .app-title .action .chevron{transform:rotate(90deg)}:host([no_child]) rk-collapse{cursor:default}:host([no_child]) rk-collapse .app-title .action .chevron{opacity:0;visibility:hidden}`;
    __getStatic() {
        return PermissionUserApplicationDisplay;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(PermissionUserApplicationDisplay.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<rk-collapse>    <div class="app-title" slot="header">        <div class="info">            <div class="icon" _id="permissionuserapplicationdisplay_0">            </div>            <span _id="permissionuserapplicationdisplay_1"></span>        </div>        <div class="action">            <template _id="permissionuserapplicationdisplay_2"></template>            <mi-icon class="chevron" icon="chevron_right"></mi-icon>        </div>    </div>    <div class="permissions" _id="permissionuserapplicationdisplay_4">        <template _id="permissionuserapplicationdisplay_5"></template>    </div></rk-collapse>` }
    });
}
    get permissionsDisplay () { var list = Array.from(this.shadowRoot.querySelectorAll('[_id="permissionuserapplicationdisplay_6"]')); return list; }get allowDenyEl () { return this.shadowRoot.querySelector('[_id="permissionuserapplicationdisplay_3"]'); }    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "iconEl",
      "ids": [
        "permissionuserapplicationdisplay_0"
      ]
    },
    {
      "name": "permissionsCont",
      "ids": [
        "permissionuserapplicationdisplay_4"
      ]
    }
  ],
  "content": {
    "permissionuserapplicationdisplay_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__ecc59a1c3f1e543eebca0b390cf6f399method2())}`,
      "once": true
    }
  }
});const templ1 = new Aventus.Template(this);templ1.setTemplate(`             <settings-permission-user-display _id="permissionuserapplicationdisplay_6"></settings-permission-user-display>        `);templ1.setActions({
  "injection": [
    {
      "id": "permissionuserapplicationdisplay_6",
      "injectionName": "permission",
      "inject": (c) => c.comp.__ecc59a1c3f1e543eebca0b390cf6f399method3(c.data.permission),
      "once": true
    },
    {
      "id": "permissionuserapplicationdisplay_6",
      "injectionName": "permissions",
      "inject": (c) => c.comp.__ecc59a1c3f1e543eebca0b390cf6f399method4(),
      "once": true
    }
  ]
});this.__getStatic().__template.addLoop({
                    anchorId: 'permissionuserapplicationdisplay_5',
                    template: templ1,
                simple:{data: "this.tree.Permissions",item:"permission"}});const templ0 = new Aventus.Template(this);templ0.setTemplate(`                <settings-allow-deny allow_none _id="permissionuserapplicationdisplay_3"></settings-allow-deny>            `);templ0.setActions({
  "events": [
    {
      "eventName": "onChange",
      "id": "permissionuserapplicationdisplay_3",
      "fct": (c, ...args) => c.comp.changeDisable.apply(c.comp, ...args),
      "isCallback": true
    }
  ]
});this.__getStatic().__template.addIf({
                    anchorId: 'permissionuserapplicationdisplay_2',
                    parts: [{once: true,
                    condition: (c) => c.comp.__ecc59a1c3f1e543eebca0b390cf6f399method0(),
                    template: templ0
                }]
            }); }
    getClassName() {
        return "PermissionUserApplicationDisplay";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('no_child')) {this.setAttribute('no_child' ,'true'); } }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["tree"] = undefined;w["permissions"] = []; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('no_child');this.__correctGetter('tree');this.__correctGetter('permissions'); }
    __listBoolProps() { return ["no_child"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    changeDisable() {
        if (!this.allowDenyEl)
            return;
        for (let child of this.permissionsCont.children) {
            if (child instanceof Component.Display.PermissionUserDisplay) {
                child.disable = this.allowDenyEl.value == "deny";
            }
        }
    }
    permissionUpdated() {
        if (!this.isConnected)
            return;
        if (!this.allowDenyEl)
            return;
        let el = this.permissions.find(p => p.Permission.Id == this.tree.PermissionId);
        if (el) {
            if (el.Allow) {
                this.allowDenyEl.value = 'allow';
            }
            else {
                this.allowDenyEl.value = 'deny';
            }
        }
        else {
            this.allowDenyEl.value = 'none';
        }
        this.currentPermission = el;
        this.changeDisable();
    }
    isAllow() {
        if (!this.allowDenyEl)
            return false;
        return this.allowDenyEl.value == "allow";
    }
    savePermissions(result) {
        if (!this.allowDenyEl || this.allowDenyEl.value == "none") {
            if (this.currentPermission) {
                result.deleted.push(this.currentPermission);
            }
        }
        else {
            if (!this.currentPermission) {
                const perm = new Core.Data.PermissionUser();
                perm.Allow = this.isAllow();
                perm.Permission = new Core.Data.Permission();
                perm.Permission.Id = this.tree.PermissionId;
                result.created.push(perm);
            }
            else {
                if (this.currentPermission.Allow != this.isAllow()) {
                    const clone = this.currentPermission.clone();
                    clone.Allow = this.isAllow();
                    result.updated.push(clone);
                }
            }
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.savePermissions(result);
        }
    }
    allowAll() {
        if (this.allowDenyEl) {
            this.allowDenyEl.value = "allow";
            this.changeDisable();
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.allowAll();
        }
    }
    resetAll() {
        if (this.allowDenyEl) {
            this.allowDenyEl.value = "none";
            this.changeDisable();
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.resetAll();
        }
    }
    denyAll() {
        if (this.allowDenyEl) {
            this.allowDenyEl.value = "deny";
            this.changeDisable();
        }
        for (let permissionDisplay of this.permissionsDisplay) {
            permissionDisplay.denyAll();
        }
    }
    postCreation() {
        this.permissionUpdated();
    }
    __ecc59a1c3f1e543eebca0b390cf6f399method2() {
        return this.tree.AppName;
    }
    __ecc59a1c3f1e543eebca0b390cf6f399method0() {
        return this.tree.PermissionId != 0;
    }
    __ecc59a1c3f1e543eebca0b390cf6f399method3(permission) {
        return permission;
    }
    __ecc59a1c3f1e543eebca0b390cf6f399method4() {
        return this.permissions;
    }
}
Component.Display.PermissionUserApplicationDisplay.Namespace=`${moduleName}.Component.Display`;
Component.Display.PermissionUserApplicationDisplay.Tag=`settings-permission-user-application-display`;
_.Component.Display.PermissionUserApplicationDisplay=Component.Display.PermissionUserApplicationDisplay;
if(!window.customElements.get('settings-permission-user-application-display')){window.customElements.define('settings-permission-user-application-display', Component.Display.PermissionUserApplicationDisplay);Aventus.WebComponentInstance.registerDefinition(Component.Display.PermissionUserApplicationDisplay);}

Application.Main.Frame.UserPermissionFrame = class UserPermissionFrame extends Core.System.Frame {
    get 'user'() {
						return this.__watch["user"];
					}
					set 'user'(val) {
						this.__watch["user"] = val;
					}get 'trees'() {
						return this.__watch["trees"];
					}
					set 'trees'(val) {
						this.__watch["trees"] = val;
					}get 'permissions'() {
						return this.__watch["permissions"];
					}
					set 'permissions'(val) {
						this.__watch["permissions"] = val;
					}    __registerWatchesActions() {
    this.__addWatchesActions("user");this.__addWatchesActions("trees");this.__addWatchesActions("permissions");    super.__registerWatchesActions();
}
    static __style = `:host .header{align-items:center;display:flex;margin-bottom:5px}:host .header .title{display:flex;font-size:var(--font-size-lg);margin-bottom:15px;margin-top:20px;width:100%}:host .header rk-button-icon-mi{flex-shrink:0}:host .actions{display:flex;margin-bottom:15px;gap:10px;flex-wrap:wrap}:host .actions .reset{background-color:var(--secondary-color);color:var(--text-color-reverse)}:host .table{display:flex;flex-direction:column;gap:10px;width:100%;margin-bottom:10px}`;
    __getStatic() {
        return UserPermissionFrame;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(UserPermissionFrame.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="header">    <div class="title" _id="userpermissionframe_0"></div>    <rk-button-icon-mi icon="save" color="green" class="touch" _id="userpermissionframe_1"></rk-button-icon-mi></div><div class="actions">    <rk-button color="green" _id="userpermissionframe_2">Autoriser tout</rk-button>    <rk-button class="reset" _id="userpermissionframe_3">Réinitialiser</rk-button>    <rk-button color="red" _id="userpermissionframe_4">Refuser tout</rk-button></div><div class="table">    <template _id="userpermissionframe_5"></template></div>` }
    });
}
    get appsPermissions () { var list = Array.from(this.shadowRoot.querySelectorAll('[_id="userpermissionframe_6"]')); return list; }    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "content": {
    "userpermissionframe_0°@HTML": {
      "fct": (c) => `Gestion des permissions pour ${c.print(c.comp.__1e72abbf64c2985079bfe6b970d4ba9cmethod1())} ${c.print(c.comp.__1e72abbf64c2985079bfe6b970d4ba9cmethod2())}`
    }
  },
  "pressEvents": [
    {
      "id": "userpermissionframe_1",
      "onPress": (e, pressInstance, c) => { c.comp.save(e, pressInstance); }
    },
    {
      "id": "userpermissionframe_2",
      "onPress": (e, pressInstance, c) => { c.comp.allowAll(e, pressInstance); }
    },
    {
      "id": "userpermissionframe_3",
      "onPress": (e, pressInstance, c) => { c.comp.resetAll(e, pressInstance); }
    },
    {
      "id": "userpermissionframe_4",
      "onPress": (e, pressInstance, c) => { c.comp.denyAll(e, pressInstance); }
    }
  ]
});const templ0 = new Aventus.Template(this);templ0.setTemplate(`         <settings-permission-user-application-display _id="userpermissionframe_6"></settings-permission-user-application-display>    `);templ0.setActions({
  "injection": [
    {
      "id": "userpermissionframe_6",
      "injectionName": "tree",
      "inject": (c) => c.comp.__1e72abbf64c2985079bfe6b970d4ba9cmethod3(c.data.tree),
      "once": true
    },
    {
      "id": "userpermissionframe_6",
      "injectionName": "permissions",
      "inject": (c) => c.comp.__1e72abbf64c2985079bfe6b970d4ba9cmethod4(),
      "once": true
    }
  ]
});this.__getStatic().__template.addLoop({
                    anchorId: 'userpermissionframe_5',
                    template: templ0,
                simple:{data: "this.trees",item:"tree"}}); }
    getClassName() {
        return "UserPermissionFrame";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["user"] = undefined;w["trees"] = [];w["permissions"] = []; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('user');this.__correctGetter('trees');this.__correctGetter('permissions'); }
    pageTitle() {
        return "Gestion des permissions";
    }
    onShow() {
        if (!(this.state instanceof State.EditUserPermissionsState)) {
            this.application.navigatePrevious(true);
            return;
        }
        this.loadData(this.state.userId);
    }
    onHide() {
    }
    async loadData(userId, reload = false) {
        if (!reload) {
            let user = await this.application.executeWithLoading(Core.RAM.UserRAM.getInstance().getByIdWithError(userId));
            if (!user) {
                this.application.navigatePrevious(true);
                return;
            }
            let permissionsTrees = await this.application.executeWithLoading(new Core.Routes.PermissionRouter().GetPermissionsTree());
            if (!permissionsTrees) {
                this.application.navigatePrevious(true);
                return;
            }
            this.trees = permissionsTrees;
            this.user = user;
        }
        let permissions = await this.application.executeWithLoading(new Core.Routes.PermissionUserRouter().GetAllByUser({ userId }));
        if (!permissions) {
            this.application.navigatePrevious(true);
            return;
        }
        this.permissions = permissions;
    }
    allowAll() {
        for (let appPermissions of this.appsPermissions) {
            appPermissions.allowAll();
        }
    }
    resetAll() {
        for (let appPermissions of this.appsPermissions) {
            appPermissions.resetAll();
        }
    }
    denyAll() {
        for (let appPermissions of this.appsPermissions) {
            appPermissions.denyAll();
        }
    }
    async save() {
        if (!this.user)
            return;
        let result = {
            created: [],
            updated: [],
            deleted: []
        };
        for (let appPermissions of this.appsPermissions) {
            appPermissions.savePermissions(result);
        }
        for (let create of result.created) {
            create.UserId = this.user.Id;
        }
        const saveResult = await this.application.executeWithLoading(new Core.Routes.PermissionUserRouter().EditPermission(result));
        if (saveResult) {
            let n = new Core.System.Notification();
            n.subject = "Permissions sauvées";
            Core.System.Os.instance.notify(n);
            this.loadData(this.user.Id, true);
        }
    }
    __1e72abbf64c2985079bfe6b970d4ba9cmethod1() {
        return this.user?.Firstname;
    }
    __1e72abbf64c2985079bfe6b970d4ba9cmethod2() {
        return this.user?.Lastname;
    }
    __1e72abbf64c2985079bfe6b970d4ba9cmethod3(tree) {
        return tree;
    }
    __1e72abbf64c2985079bfe6b970d4ba9cmethod4() {
        return this.permissions;
    }
}
Application.Main.Frame.UserPermissionFrame.Namespace=`${moduleName}.Application.Main.Frame`;
Application.Main.Frame.UserPermissionFrame.Tag=`settings-user-permission-frame`;
_.Application.Main.Frame.UserPermissionFrame=Application.Main.Frame.UserPermissionFrame;
if(!window.customElements.get('settings-user-permission-frame')){window.customElements.define('settings-user-permission-frame', Application.Main.Frame.UserPermissionFrame);Aventus.WebComponentInstance.registerDefinition(Application.Main.Frame.UserPermissionFrame);}

Permissions.UserPermissionQuery=class UserPermissionQuery extends Core.Permissions.PermissionQuery {
    static get Fullname() { return "Settings.Permissions.UserPermissionQuery, Settings"; }
}
Permissions.UserPermissionQuery.Namespace=`${moduleName}.Permissions`;
Permissions.UserPermissionQuery.$schema={...(Core.Permissions.PermissionQuery?.$schema ?? {}), };
Aventus.Converter.register(Permissions.UserPermissionQuery.Fullname, Permissions.UserPermissionQuery);

_.Permissions.UserPermissionQuery=Permissions.UserPermissionQuery;
Application.Main.Frame.UsersFrame = class UsersFrame extends Core.System.FrameNoScroll {
    static __style = `:host{padding:15px}`;
    __getStatic() {
        return UsersFrame;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(UsersFrame.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<settings-user-table></settings-user-table>` }
    });
}
    getClassName() {
        return "UsersFrame";
    }
    definePermissions(can) {
        can(new Permissions.UserPermissionQuery(Permissions.UserPermission.CanList));
    }
    pageTitle() {
        return "Gestion des utilisateurs";
    }
    onShow() {
    }
    onHide() {
    }
}
Application.Main.Frame.UsersFrame.Namespace=`${moduleName}.Application.Main.Frame`;
Application.Main.Frame.UsersFrame.Tag=`settings-users-frame`;
_.Application.Main.Frame.UsersFrame=Application.Main.Frame.UsersFrame;
if(!window.customElements.get('settings-users-frame')){window.customElements.define('settings-users-frame', Application.Main.Frame.UsersFrame);Aventus.WebComponentInstance.registerDefinition(Application.Main.Frame.UsersFrame);}

_n = Application.Main;Application.Main = class Main extends Core.System.ApplicationSidnav {
    get 'no_sidenav'() { return this.getBoolAttr('no_sidenav') }
    set 'no_sidenav'(val) { this.setBoolAttr('no_sidenav', val) }    static __style = `:host .content .container{transition:none}`;
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
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('no_sidenav')) {this.setAttribute('no_sidenav' ,'true'); } }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('no_sidenav'); }
    __listBoolProps() { return ["no_sidenav"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    async defineRoutes() {
        this.addRouteSidenav({
            name: "Accueil",
            frame: Application.Main.Frame.Index,
            route: "/",
            miIcon: "home"
        });
        this.addRouteSidenav({
            name: "Profil",
            frame: Application.Main.Frame.User,
            route: "/profil",
            miIcon: "person"
        });
        this.addRouteSidenav({
            name: "Affichage",
            frame: Application.Main.Frame.Display,
            route: "/display",
            miIcon: "display_settings"
        });
        this.addRouteSidenav({
            name: "Utilisateurs",
            frame: Application.Main.Frame.UsersFrame,
            route: "/users",
            activeRoute: "/users*",
            miIcon: "group"
        });
        this.addRoute("/users/{id:number}", Application.Main.Frame.UserEditFrame);
        this.addRoute("/users/{id:number}/permissions", Application.Main.Frame.UserPermissionFrame);
        this.addRouteSidenav({
            name: "Groupes",
            frame: Application.Main.Frame.GroupsFrame,
            route: "/groups",
            activeRoute: "/groups*",
            miIcon: "diversity_3"
        });
        this.addRoute("/groups/{id:number}", Application.Main.Frame.GroupEditFrame);
        this.addRoute("/groups/{id:number}/permissions", Application.Main.Frame.GroupPermissionFrame);
        this.addRouteSidenav({
            name: "Permissions",
            frame: Application.Main.Frame.PermissionsFrame,
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
Component.Table.TableDataCellActionPermission = class TableDataCellActionPermission extends Core.Components.TableCellAction {
    static __style = `:host{justify-content:flex-end;padding:0 7px}:host span{align-items:center;display:flex;justify-content:center;position:relative}:host mi-icon{border-radius:var(--border-radius-sm);color:var(--blue);cursor:pointer;font-size:var(--font-size-md);margin:0 2px;padding:3px;transition:background-color .2s linear}:host mi-icon.access{color:var(--orange)}:host mi-icon.delete{color:var(--red)}:host mi-icon:hover{background-color:var(--lighter)}:host([grid]){align-items:center;margin-top:0;width:100%}`;
    __getStatic() {
        return TableDataCellActionPermission;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(TableDataCellActionPermission.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<span>    <mi-icon class="access" icon="lock" _id="tabledatacellactionpermission_0"></mi-icon>    <rk-tooltip position="top" use_absolute color="orange" delay="1000">Accès</rk-tooltip></span><span>    <mi-icon icon="edit" _id="tabledatacellactionpermission_1"></mi-icon>    <rk-tooltip position="top" use_absolute color="blue" delay="1000">Edition</rk-tooltip></span><span>    <mi-icon class="delete" icon="delete" _id="tabledatacellactionpermission_2"></mi-icon>    <rk-tooltip position="top" use_absolute color="red" delay="1000">Suppression</rk-tooltip></span>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "pressEvents": [
    {
      "id": "tabledatacellactionpermission_0",
      "onPress": (e, pressInstance, c) => { c.comp.editPermission(e, pressInstance); }
    },
    {
      "id": "tabledatacellactionpermission_1",
      "onPress": (e, pressInstance, c) => { c.comp.editData(e, pressInstance); }
    },
    {
      "id": "tabledatacellactionpermission_2",
      "onPress": (e, pressInstance, c) => { c.comp.deleteData(e, pressInstance); }
    }
  ]
}); }
    getClassName() {
        return "TableDataCellActionPermission";
    }
    editData() {
        if (this.table instanceof Core.Components.TableData) {
            this.table.editData(this.data);
        }
    }
    deleteData() {
        if (this.table instanceof Core.Components.TableData) {
            this.table.deleteData(this.data);
        }
    }
    editPermission() {
        if (this.table instanceof Component.Table.GroupTable) {
            this.table.editPermission(this.data);
        }
        else if (this.table instanceof Component.Table.UserTable) {
            this.table.editPermission(this.data);
        }
    }
}
Component.Table.TableDataCellActionPermission.Namespace=`${moduleName}.Component.Table`;
Component.Table.TableDataCellActionPermission.Tag=`settings-table-data-cell-action-permission`;
_.Component.Table.TableDataCellActionPermission=Component.Table.TableDataCellActionPermission;
if(!window.customElements.get('settings-table-data-cell-action-permission')){window.customElements.define('settings-table-data-cell-action-permission', Component.Table.TableDataCellActionPermission);Aventus.WebComponentInstance.registerDefinition(Component.Table.TableDataCellActionPermission);}

Component.Table.GroupTable = class GroupTable extends Core.Components.TableData {
    static __style = ``;
    __getStatic() {
        return GroupTable;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(GroupTable.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "GroupTable";
    }
    defineRAM() {
        return Core.RAM.GroupRAM.getInstance();
    }
    defineNewState() {
        return new State.EditGroupState();
    }
    defineEditState(data) {
        return new State.EditGroupState(data);
    }
    defineDeleteMessage(data) {
        return 'Êtes-vous sûr de vouloir supprimer le groupe ' + data.Name + '?';
    }
    configure(options) {
        options.title = "Liste des groupes";
        options.globalSearch = true;
        options.schema = [
            {
                displayName: "Nom",
                type: "string",
                name: "Name"
            }, {
                displayName: "Membres",
                type: "string",
                cellContent: (data, cell) => {
                    let s = "";
                    if (data.Users.length > 1) {
                        s = "s";
                    }
                    return data.Users.length + " membre" + s;
                }
            }, {
                displayName: "Action",
                type: "custom",
                cellHeader: Core.Components.TableDataCellHeaderAction,
                cell: Component.Table.TableDataCellActionPermission,
                width: 105
            }
        ];
        return options;
    }
    editPermission(group) {
        this.application?.navigate(new State.EditGroupPermissionsState(group.Id));
    }
}
Component.Table.GroupTable.Namespace=`${moduleName}.Component.Table`;
Component.Table.GroupTable.Tag=`settings-group-table`;
_.Component.Table.GroupTable=Component.Table.GroupTable;
if(!window.customElements.get('settings-group-table')){window.customElements.define('settings-group-table', Component.Table.GroupTable);Aventus.WebComponentInstance.registerDefinition(Component.Table.GroupTable);}


for(let key in _) { Settings[key] = _[key] }
})(Settings);
