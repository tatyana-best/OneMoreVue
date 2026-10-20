<script>
    export default {
        data() {
            return {
                message: 'hello',
                digit: 12,
                num: 0,
		        res: 0,
                num1: 0,
                res1: 0,
                n1: 0,
                n2: 0,
                sumOfTwo: 0,
                text1: '',
                text2: '',
                changeTexts: '',
                fullName: '',
                firstName: '',
                secondName: '',
                lastName: '',
            }
        },
        methods: {
            calc: function() {
                this.res = this.num ** 2;
            },
            mySqrt: function() {
                this.res1 = Math.sqrt(this.num1);
            },
            mySum: function() {
                this.sumOfTwo = Number(this.n1) + Number(this.n2);
            },
            changeText: function(text) {
                this.changeTexts =  text;               
                this.text1 = this.text2;
                this.text2 = this.changeTexts;
            },
            getFullName: function(fullName) {
                var words = fullName.split(' ');
                this.firstName = words[0];
                this.secondName = words[1];
                this.lastName = words[2];
            }
        }, 
    }
</script>
<template>
    <div>
        <input v-model="message">
        <p>{{ message.toUpperCase() }}</p>
    </div>
    <div>
        <input type="number" v-model="digit">
        <p>{{ digit * digit }}</p>
    </div>
    <div>
        <p>{{ res }}</p>
        <input v-model="num">
        <button v-on:click="calc">work</button>
    </div>
    <div>
        <input v-model="num1">
        <p>{{ res1 }}</p>
        <button @click="mySqrt">Жми</button>
    </div>
    <div>
        <input v-model="n1">
        <input v-model="n2">
        <p>{{ sumOfTwo }}</p>
        <button @click="mySum">SUM</button>
    </div>
    <div>
        <input v-model="text1">
        <input v-model="text2">
        <button @click="changeText(text1)">CHANGE</button>
    </div>
    <div>
        <input v-model="fullName">
        <p>{{ firstName }}</p>
        <p>{{ secondName }}</p>
        <p>{{ lastName }}</p>
        <button @click="getFullName(fullName)">GET NAME</button>
    </div>
</template>