<script>
    const DAYS_OF_WEEK = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const MONTHS = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    export default {
        data() {
            return {
                choice: '',
                language: '',
                block: true,
                selected: 'value1',
                city: 'Новосибирск',
                selected1: 'value1',
		        options: ['value1', 'value2', 'value3'],
                daysOfWeek: DAYS_OF_WEEK,
                dayOfWeek: DAYS_OF_WEEK[new Date().getDay()],
                months: MONTHS,
                month: MONTHS[new Date().getMonth()],
                years: ['2021', '2022', '2023', '2024', '2025', '2026'],
                year: new Date().getFullYear(),
                days: Array.from({ length: 31 }, (_, i) => i + 1),
                day: new Date().getDate(),
                isDisabled: true,
                isInputDisabled: true,
            }
        },
        methods: {
            
        }, 
    }
</script>
<template>
    <div>
        you choosed: {{ choice }}<br>
        <input name="radio" type="radio" v-model="choice" value="v1">
        <input name="radio" type="radio" v-model="choice" value="v2">
        <input name="radio" type="radio" v-model="choice" value="v3">
    </div>
    <div>
        Какой язык для тебя родной?: {{ language }}<br>
        <input name="radio" type="radio" v-model="language" value="ru">
        <input name="radio" type="radio" v-model="language" value="en">
        <input name="radio" type="radio" v-model="language" value="ch">
    </div>
    <div>
        <p v-if="language == 'ru'">Текст на русском языке</p>
        <p v-if="language == 'en'">Текст на английском языке</p>
        <p v-if="language == 'ch'">Текст на китайском языке</p>
    </div>
    <div>
        <select v-model="selected">
            <option>value1</option>
            <option>value2</option>
            <option>value3</option>
        </select>
        
        <p>{{ selected }}</p>
    </div>
    <div>
        <p>В каком городе вы живете?</p>
        <select v-model="city">
            <option>Новосибирск</option>
            <option>Москва</option>
            <option>Красноярск</option>
        </select>
        
        <p>{{ city }}</p>
    </div>
    <div>
        <select v-model="selected1" v-option="options">
            <option v-for="option in options">{{ option }}</option>
        </select>
        
        <p>{{ selected1 }}</p>
    </div>
    <div>
        <select v-model="dayOfWeek" v-option="daysOfWeek">
            <option v-for="option in daysOfWeek">{{ option }}</option>
        </select>
        <select v-model="day" v-option="days">
            <option v-for="option in days">{{ option }}</option>
        </select>
        <select v-model="month" v-option="months">
            <option v-for="option in months">{{ option }}</option>
        </select>
        <select v-model="year" v-option="years">
            <option v-for="option in years">{{ option }}</option>
        </select>
        
        <p>{{ day }} {{ month }} {{ year }} {{ dayOfWeek }}</p>
    </div>
    <div>
        <button v-bind:disabled="isDisabled">btn</button>
    </div>
    <div>
        <input v-bind:disabled="isInputDisabled" value="Тестовый инпут">
        <button @click="isInputDisabled = !isInputDisabled;">btn</button>
        <input type="checkbox" @change="isInputDisabled = !isInputDisabled;"><br>
    </div>
</template>