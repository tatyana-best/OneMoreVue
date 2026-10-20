<script>
    export default {
        data() {
            return {
                arr: ['a', 'b', 'c'],
                items: [1, 2, 3, 4, 5],
                obj: {a: 1, b: 2, c: 3},
                users: [
                    {
                        id: 1,
                        name: 'name1',
                        surn: 'surn1',
                    },
                    {
                        id: 2,
                        name: 'name2',
                        surn: 'surn2',
                    },
                    {
                        id: 3,
                        name: 'name3',
                        surn: 'surn3',
                    },
                ],
                hrefs: [
                    {href: '1.html', text: 'text1'},
                    {href: '2.html', text: 'text2'},
                    {href: '3.html', text: 'text3'},
                ],
                products: [
                    {
                        id: 102,
                        name: 'product1',
                        price: 100,
                        quantity: 5
                    },
                    {
                        id: 101,
                        name: 'product2',
                        price: 200,
                        quantity: 4
                    },
                    {
                        id: 103,
                        name: 'product3',
                        price: 300,
                        quantity: 3
                    },
                ],
                str: 'class1 class2',
                obj: {
                    active: true,
                    valid:  true,
                },
                hideElement: {
                    hideElem: false,
                },
                isValid: true,
		        isDisabled: true,
            }
        },
        methods: {
            add: function() {
                this.arr.push('d');
            },
            addItem: function() {
                this.items.push(+(this.items.length + 1));
            },
            deleteItem: function() {
                this.items.shift()
            },
            deleteLastItem: function() {
                this.items.pop()
            },
            deletePreLastItem: function() {
                this.items.splice(-2, 1);
            },
            sortItems: function() {
                this.items.sort();
            },
            sortItems1: function() {
                this.items.sort((a, b) => b - a);
            },
            changeUnderLine: function() {
                this.obj.valid = !this.obj.valid;
            },
            hideTable: function() {
                this.hideElement.hideElem = !this.hideElement.hideElem;
            }
        }
    }
</script>

<template>
    <div>
        <template v-for="elem in arr">
            <p :class="{active: true, valid: false}">{{ elem }}</p>
		    <hr>
        </template>
        <div v-for="elem in items" :class="{valid: isValid}">{{ elem }} в квадрате равно {{ elem * elem }}</div>
        <ul>
            <li v-for="(elem, key) in items">{{ elem }} с номером {{ key }}</li>
        </ul>
        <div v-for="(elem, key, index) in obj" :style="{color: 'red', border: '1px solid green', padding: '15px', 'margin-bottom': '15px'}">{{ index }}-й элемент: {{ key }}: {{ elem }}</div>
        <ul>
            <template v-for="elem in items">
            <li>{{ elem }}</li>
            <li class="divider">---------</li>
            </template>
        </ul>
        <p v-for="user in users" :key="user.id" :class="obj">
            {{ user.name }}
            {{ user.surn }}
        </p>
        <ul v-for="(elem, key) in hrefs">
            <li><a href="{{ elem.href }}">{{ key }} - {{ elem.text }}</a></li>
        </ul>
        <table style="border:1px solid green;" :class="hideElement">
            <tr v-for="product in products" :key="product.id">
                <td style="border:1px solid green;padding:5px;" :class="str">{{ product.id }} - {{ product.name }}</td>
                <td style="border:1px solid green;padding:5px;">{{ product.price }}</td>
                <td style="border:1px solid green;padding:5px;">{{ product.quantity }}</td>
            </tr>
        </table>
        <p v-for="num in 30">
            <span v-if="num % 2 === 0"> 
                {{ num }}
            </span>
        </p>
        <button @click="add">add</button>
        <button @click="addItem">addItem</button>
        <button @click="deleteItem">deleteItem</button>
        <button @click="deleteLastItem">deleteLastItem</button>
        <button @click="deletePreLastItem">deletePreLastItem</button>
        <button @click="sortItems">sortItems</button>
        <button @click="sortItems1">sortItems1</button>
        <button @click="changeUnderLine">changeUnderLine</button>
        <button @click="hideTable">hideTable</button>
    </div>
</template>

<style>
	p {
		color: red;
	}

    .class1 {
        color: maroon;
        font-family: Monotype Corsiva;
    }

    .class2 {
        font-size: 22px;
    }

    .valid {
        font-weight: bold;
        text-decoration: line-through;
    }

    .hideElem {
        display: none;
    }
</style>