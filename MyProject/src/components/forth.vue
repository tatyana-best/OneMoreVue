<script>
    export default{
        data() {
            return {
                text: '',
                arr: [],
                checked: true,
                arr1: [],
            }
        },
        methods: {
            getArray: function(text) {
                this.arr = text.split(' ');
                console.log(this.arr);
            },
            getArrVal: function() {
                console.log(this.arr);
            }
        }
    }
</script>

<template>
    <div>
        <textarea v-model="text"></textarea>
        <p>{{ text }}</p>
        <button @click="getArray(text)">GET ARRAY</button>
        <ul>
            <li v-for="elem in arr">{{ elem }}</li>
        </ul>
    </div>
    <div>
        <input type="checkbox" v-model="checked">
        <p>{{ checked ? 'yes' : 'no' }}</p>
        <p v-show="checked">Показываем/скрываем абзац</p>
    </div>
    <div>
        <input type="checkbox" v-model="arr" value="v1">
        <input type="checkbox" v-model="arr" value="v2">
        <input type="checkbox" v-model="arr" value="v3">
        <button @click="getArrVal">getArrVal</button>
    </div>
    <div>Какие языки вы знаете?</div>
    <div>
        RU<input type="checkbox" v-model="arr1" value="RU">
        KZ<input type="checkbox" v-model="arr1" value="KZ">
        EN<input type="checkbox" v-model="arr1" value="EN">
        CH<input type="checkbox" v-model="arr1" value="CH">
        YAP<input type="checkbox" v-model="arr1" value="YAP">
        DH<input type="checkbox" v-model="arr1" value="DH">
    </div>
    <div>
        <ul>
            <li v-for="elem in arr1">{{ elem }}</li>
        </ul>
    </div>
</template>
