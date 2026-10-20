<script>
    export default {
        props: {
            name: String,
            surn: String,
            age: Number, 
            arg1: Array,
            arg2: Object,
            arg3: Boolean,
        },
        data() {
            return {
				setting: 'Setting is set up'
			}
        },
        methods: {
            handle() {
                this.$emit('show');
            },
            opa1(a, b) {
                this.$emit('op1', a, b);
            },
            opa2(a, b) {
                this.$emit('op2', a, b);
            },
        },
        emits: ['show', 'op1', 'op2'],
    }
</script>

<template>
    <div>{{ setting }}: {{ name }} {{ surn }}, {{ age }} лет</div>
    <h3>Массив</h3>
    <div>
        <ul>
            <li v-for="arg in arg1">{{ arg }}</li>
        </ul>
    </div>
    <h3>Объект</h3>
    <div>
        <ul>
            <li v-for="(arg, key) in arg2" :key="arg.key">{{key}}: {{ arg }}</li>
        </ul>
    </div>
    <h3>Значение логической переменной</h3>
    <div>{{ arg3 }}</div>
    <div>
        <button @click="handle">btn</button>
        <button @click="opa1(3, 5)">OPA1</button>
        <button @click="opa2(4, 9)">OPA2</button>
        <button @click="this.$emit('str', 'Вася', 'Иванов');">Get string</button>
    </div>
</template>