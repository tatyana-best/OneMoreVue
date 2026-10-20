import { createApp, computed, shallowRef, ref } from 'vue'
import App from './App.vue'
import router from './router'

document.addEventListener("DOMContentLoaded", () => {
    const app = createApp(App)
    app.use(router)
    app.mount('#app')
})

import '@/dev-rest' 

console.log('main.js loaded');

BX24.init(()=>{
    var inf = BX24.placement.info();
    if(inf.options.ADDITIONAL == true) {
        window.location.href = inf.options.LINK;
    }
})


const catalogTreeOnlySections = computed(() => {
    if (!catalogTree.value || catalogTree.value.length === 0) {
    return [];
    }

    // Рекурсивная функция фильтрации
    function filterTree(nodes) {
    const result = [];

    for (const node of nodes) {
        // Если это раздел (у нас условились, что разделы имеют префикс 'S' или type='section')
        // Или проверяем наличие CHILDREN (даже пустого), так как товары обычно не имеют детей
        const isSection = String(node.ID).startsWith('S') || node.type === 'section';

        if (isSection) {
        // Создаем копию узла с вырезанием из ID 'S'
        const newNode = { ...node, ID: node.ID.slice(1), };

        // Рекурсивно фильтруем детей
        if (node.CHILDREN && node.CHILDREN.length > 0) {
            newNode.CHILDREN = filterTree(node.CHILDREN);
        } else {
            newNode.CHILDREN = [];
        }

        // Добавляем раздел в результат (даже если он пустой после фильтрации)
        result.push(newNode);
        }
    }

    return result;
    }

    return filterTree(catalogTree.value);
});

const callBX24 = (method, params = {}) =>
    new Promise((resolve, reject) => {
    BX24.callMethod(method, params, (response) => {
        response.error() ? reject(response.error()) : resolve(response.data());
    });
    });

async function getCatalogTree() {
    try {
    const catalog = await callBX24('mywebstor.profitreport.product.catalog.getTree')

    return catalog
    } catch (error) {
    console.error('error loading catalog tree', error)
    }
}

console.log(getCatalogTree());

// BX24.callMethod(
//     'placement.bind',
//     {
//         PLACEMENT: 'CRM_LEAD_DETAIL_TAB',
//         HANDLER: 'https://devcrm.vektortool.com/OneMoreVue/MyProject/index.html', // URL вашего приложения
//         TITLE: 'Приложение OneMoreVue ***', // название вкладки в интерфейсе
//         LANG_ALL: {
//         ru: { TITLE: 'Приложение OneMoreVue ***' },
//         en: { TITLE: 'My Tab' }
//         }
//     },
//     function(result) {
//         if (result.error()) console.error(result.error())
//         else console.log('Вкладка зарегистрирована', result.data())
//     }
// )

// BX24.callMethod(
//     'placement.unbind',
//     {
//         PLACEMENT: 'CRM_LEAD_DETAIL_TAB',
//         HANDLER: 'https://devcrm.vektortool.com/AppVueCodeMu/MyProject/index.html'
//     },
//     function(result) {
//         if (result.error()) console.error(result.error());
//         else console.log('Вкладка удалена', result.data());
//     }
// );
