(()=>{var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var i in a)e.o(a,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};(()=>{"use strict";const t=flarum.core.compat["admin/app"];var a=e.n(t);a().initializers.add("datlechin/flarum-silent-edit",(function(){a().extensionData.for("datlechin-silent-edit").registerPermission({icon:"fas fa-volume-mute",label:a().translator.trans("datlechin-silent-edit.admin.permissions.clearLastEdit"),permission:"discussion.clearLastEdit"},"moderate")}))})(),module.exports={}})();
//# sourceMappingURL=admin.js.map