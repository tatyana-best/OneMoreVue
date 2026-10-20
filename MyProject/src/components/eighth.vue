<script>
    export default{
        data() {
            return {
                text: '',
                output: '',
                someText: '',
                press: '',
            }
        },
        methods: {
            op: function() {
                this.output = this.text;
            },
            op1: function() {
                this.someText = 'It works';
            },
            op2: function(event) {
                this.press = 'Left button';
            },
            op3: function(event) {
                this.press = 'Right button';
            }
        }
    }
</script>

<template>
    <div>
        <input type="text" v-model="text" @keyup.enter="op"><br>
        <a href="#" @click.prevent.ctrl="op1">Click me</a><br>
        <a href="#" @click.prevent.left="op2" @click.prevent.right="op3">Click me to see button</a><br>
        <p>{{ output }}</p>
        <p>{{ someText }}</p>
        <p>{{ press }}</p>
    </div>
</template>
