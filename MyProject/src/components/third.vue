<script>
    export default {
        data() {
            return {
                visible: false,
                visible1: false,
                visible2: false,
                visible3: false,
                isAuth: false,
                isAdmin: true,
                day: this.dayOfWeek(),
                age: 65,
                showHideButton: false,
            }
        },
        methods: {
            showParagraph: function() {
                this.visible = true;
            },

            hideParagraph: function() {
                this.visible = false;
            },

            toggle: function() {
                this.visible = !this.visible;
            },

            toggle1: function() {
                this.visible1 = !this.visible1;
            },

            toggle2: function() {
                this.visible2 = !this.visible2;
            },

            toggle3: function() {
                this.visible3 = !this.visible3;
            },

            imAdmin: function() {
                this.isAdmin = !this.isAdmin;
            },

            dayOfWeek: function() {
                const today = new Date();
                const dayIndex = today.getDay();
                switch (dayIndex) {
                    case 1:
                        return 'Воскресенье';
                        break;
                    case 2:
                        return 'Понедельник';
                        break;
                    case 3:
                        return 'Вторник';
                        break;
                    case 4:
                        return 'Среда';
                        break;
                    case 5:
                        return 'Четверг';
                        break;
                    case 6:
                        return 'Пятница';
                        break;
                    case 7:
                        return 'Суббота';
                        break;
                }
            },

            showHide: function() {
                this.showHideButton = !this.showHideButton;
            }
        }
    }
</script>

<template>
    <div>
        <template v-if="showHideButton">
            <button v-if="!visible" @click="showParagraph">showParagraph1</button>
            <button v-if="visible" @click="hideParagraph">showParagraph2</button>
            <p v-if="visible">Paragraph1</p>
            <p v-if="!visible">Paragraph2</p>

            <button @click="toggle1">{{ visible1 ? 'hide1' : 'show1' }}</button>
            <p v-if="visible1">text1</p>

            <button @click="toggle2">{{ visible2 ? 'hide2' : 'show2' }}</button>
            <p v-if="visible2">text2</p>

            <button @click="toggle3">{{ visible3 ? 'hide3' : 'show3' }}</button>
            <p v-if="visible3">text3</p>

            <button @click="toggle">
                {{ visible ? 'hide' : 'show' }}
            </button>

            <p v-if="isAuth">+++</p>
            <p v-else>---</p>

            <button @click="imAdmin">{{ !isAdmin ? 'I am an admin' : 'I am not an admin'}}</button>
            <p v-if="isAdmin">Привет, админ!</p>
            <p v-else>Пока, Админ!</p>
            <p>{{ day }}</p>

            <p v-if="age < 18">Подросток</p>
            <p v-else-if="age >= 18 && age <= 25">Молодой человек</p>
            <p v-else>Мужчина</p>
        </template>

        <button @click="showHide">Скрыть/Показать абзацы</button>

        <p v-show="isAdmin">
            +++
        </p>
    </div>
</template>