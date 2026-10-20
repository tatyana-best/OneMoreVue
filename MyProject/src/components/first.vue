<script>
import img1 from '../assets/smiles/1.jpg'
export default {
    data() {
	    return {
            text1: '111',
            text2: '222',
            name: 'john',
		    surn: 'smit',
            attr: img1,
            text: 'page',
		    href: 'https://e.mail.ru/inbox/',
            var1: 1,
		    var2: 2,
            num: 5,
            arr: [1, 2, 3],
            obj: {a: 1, b: 2, c: 3},
            count: 0,
        }
    },
    methods: {
        show: function() {
            let text = this.cape(this.text);
            alert(this.name + ' ' + this.surn + ': ' + ((+this.obj.a) + (+this.obj.b) + (+this.obj.c)) + " - " + text);
            const now = new Date();
            console.log(now.getFullYear() + '.' + now.getMonth() + '.' + now.getDate());
        },
        cape: function(str) {
            const now = new Date();
            return str[0].toUpperCase() + str.slice(1) + ' - ' + this.weekDay(now.getDay());
        },
        weekDay: function(num) {
            switch(num) {
                case 0:
                    return 'воскресенье';
                    break;
                case 1:
                    return 'понедельник';
                    break;
                case 2:
                    return 'вторник';
                    break;
                case 3:
                    return 'среда';
                    break;
                case 4:
                    return 'четверг';
                    break;
                case 5:
                    return 'пятница';
                    break;
                case 6:
                    return 'суббота';
                    break;
            }

        },
        MyAlert:function(str) {
            alert(str);
        },
        square: function(num) {
            alert('num2: ' + num * num);
        },
        change: function(text) {
            this.text = text;
        },
        changeName: function(name, sur) {
            this.name = name;
            this.sur = sur;
        },
        goToSecond() {
            router.push('/second')
        },
    },
    computed: {
        full: function() {
            return this.name + ' ' + this.surn;
        }
    }
}
</script>
<template>
    <div>
        <button @mouseover="show">{{ text }}</button>
        <button @click="square(2)">2^2</button>
        <button @click="square(3)">3^2</button>
        <div>Массив (пример): 
            {{ arr[0] }}
            {{ arr[1] }}
            {{ arr[2] }}
        </div>
        <div>Сумма элементов массива равна: {{ arr[0] + arr[1] + arr[2] }}</div>
        <div>Объект (пример):
            {{ obj.a }}
            {{ obj.b }}
            {{ obj.c }}
        </div>
        <div>Сумма элементов объекта равна: {{ obj.a + obj.b + obj.c }}</div>
        <div>{{ var1 + var2 }} * {{ num * num }} = {{ (var1 + var2) * num * num }}</div>
        <img :src="attr" @click="MyAlert(cape('ghtyroi'))">
        <div>
            {{ name }} {{ surn }}, Hello!!! {{ full }}
        </div>
        <div>
            {{ text1 }}
        </div>
        <div>
            {{ text2 }}
        </div>
        <a :href="href">page</a>
        {{ text }}
        <button @click="change('opochki')">text</button>
        <button @click="change('vot imenno')">text</button>
        <button @click="changeName('Valentina', 'Pavlenko')">Change name</button>
        <button @click="count++">Add 1</button>
        <p>Count is: {{ count }}</p>
    </div>
</template>