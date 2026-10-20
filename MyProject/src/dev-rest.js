import './bitrix24-rest.js'; //don't forget comment it!!!
const BX24 = window.BX24; //don't forget comment it!!!

const auth = {
    access_token: "a16cab6a009268f0007d96980000013b403807d9b604d1fd82681a46b1231cf5a25fb7",
    domain: "devcrm.vektortool.com",
    expires_in: 1789619365470,
    member_id: "a53ec98921ef92d2987455aae0e29497",
    refresh_token: "91ebd26a009268f0007d96980000013b403807d8981432eac7fc15378199ce7b4d7f55"
}

if (BX24 && typeof BX24.initAuth == "function") BX24.initAuth({
    client_id: "local.6aa3b336b188c6.55054180",
    client_secret: "1ahLNESJlKeuJ84HW3JD2YO6R6KSwczLCglrRGjONxOVad5n4s",

    ...auth,
    placement: "DEFAULT",
    // placement: "CRM_LEAD_DETAIL_TAB",
    // placement_options: {
    //    ID: 42036
    // }
});
