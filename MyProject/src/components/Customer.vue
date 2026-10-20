<script>
    export default {
        props: {
            id: Number,
            name: String,
            salary: Number,
            age: Number
        },
        data() {

        }
    }
</script>

<template>
    <div>
        <tr>
            <td>{{ id }}</td>
            <td>{{ name }}</td>
            <td>{{ salary }}</td>
            <td>{{ age }}</td>
        </tr>
    </div>
</template>