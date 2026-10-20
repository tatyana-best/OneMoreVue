<script>
    export default{
        data() {
            return {
                newItem: '',
                items: ['a', 'b', 'c', 'd', 'e'],
            }
        },
        methods: {
            addItemToEnd: function() {
                this.items.push(this.newItem);
                this.newItem = '';
            },
            addItemToBegin: function() {
                this.items.unshift(this.newItem);
                this.newItem = '';
            },
            removeItem: function(index) {
                this.items.splice(index, 1);
            }
        }
    }
</script>

<template>
    <div>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <span class="item" @click="removeItem(index)">{{ item }}</span><button @click="removeItem(index)">remove</button>
            </li>
        </ul>
        <input v-model="newItem"><br>
	    <button @click="addItemToEnd">Add element in the end of the array</button>
        <button @click="addItemToBegin">Add element in the begin of the array</button>
    </div>
</template>

<style>
    .item {
        padding: 0 20px 0 0;
    }
</style>
