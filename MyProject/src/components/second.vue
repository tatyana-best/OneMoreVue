<script setup>
    import { ref } from 'vue'
    const count = ref(0)

    const name = ref('Vue.js')

    function greet(event) {
        alert(`Hello ${name.value}!`)
        if (event) {
            alert(event.target.tagName)
        }
    }

    function say(message) {
        alert(message)
    }

    function warn(message, event) {
        // now we have access to the native event
        if (event) {
            event.preventDefault()
        }
        alert(message)
    }

    function doThis() {
        console.log('Checking');
    }
</script>

<template>
    <div>
        <div>Привет!</div>
        <button @click="count++">Add 1</button>
        <p>Count is: {{ count }}</p>
        <button @click="greet">Greet</button>
        <button @click="say('hello')">Say hello</button>
        <button @click="say('bye')">Say bye</button>
        <button @click="warn('Form cannot be submitted yet.', $event)">
            Submit
        </button>

        <!-- using inline arrow function -->
        <button @click="(event) => warn('Form cannot be submitted yet.', event)">
            Submit
        </button>
        <a @click.once="doThis">Click once</a>
    </div>
</template>