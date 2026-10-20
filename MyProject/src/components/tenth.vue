<script>
    export default {
        data() {
            return {
                users: [
                    {
                        id: 1,
                        name: 'Name1',
                        surn: 'Surname1',
                    },
                    {
                        id: 2,
                        name: 'Name2',
                        surn: 'Surname2',
                    },
                    {
                        id: 3,
                        name: 'Name3',
                        surn: 'Surname3',
                    }
                ],
                users1: [
                    {
                        id: 1,
                        name: 'name1',
                        salary: 100,
                        age: 30,
                        isEdit: false,
                    },
                    {
                        id: 2,
                        name: 'name2',
                        salary: 200,
                        age: 40,
                        isEdit: false,
                    },
                    {
                        id: 3,
                        name: 'name3',
                        salary: 300,
                        age: 50,
                        isEdit: false,
                    },
                ],
            }
        },
        methods: {
            deleteUser: function(key) {
                this.users.splice(key, 1);
            },
            removeItem: function(id) {
                this.users = this.users.filter((user) => {
                    return user.id !== id;
                })
            },
            delUser: function(id) {
                this.users1 = this.users1.filter((user) => {
                    return user.id !== id;
                })
            },
            editUser: function(user) {
                user.isEdit = true;
            },
            saveUser: function(user) {
                user.isEdit = false;
            },
        }
    }
</script>

<template>
    <h3>Первый вариант</h3>
    <div>
        <ul>
            <li v-for="(user, key) in users" @key=""><span>{{ user.name }} {{ user.surn }}</span><button @click="deleteUser(key)">Удалить пользователя</button></li>
        </ul>
    </div>
    <h3>Второй вариант</h3>
    <div>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
                {{ user.surn }}
                <button @click="removeItem(user.id)">remove</button>
            </li>
        </ul>
    </div>
    <h3>Третий вариант</h3>
    <div>
        <table>
            <tr v-for="(user, key) in users1" :key="user.id">
                <template v-if="!user.isEdit">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.salary }}</td>
                    <td>{{ user.age }}</td>
                    <td><div class="del" @click="delUser(user.id)">Удалить</div></td>
                    <td><div class="del" @click="editUser(user)">Редактировать</div></td>
                </template>
                <template v-else>
                    <td><input v-model="user.id" placeholder="Введите id"></td>
                    <td><input v-model="user.name" placeholder="Введите имя"></td>
                    <td><input v-model="user.salary" placeholder="Введите зарплату"></td>
                    <td><input v-model="user.age" placeholder="Введите возраст"></td>
                    <td><div class="del" @click="delUser(user.id)">Удалить</div></td>
                    <td><div class="del" @click="saveUser(user)">Сохранить</div></td>
                </template>
            </tr>
        </table>
    </div>
</template>

<style>
    td {
        border: 1px solid green;
        padding: 10px;
    }
    table {
        border: 1px solid green;
    }
    .del {
        cursor: pointer;
    }
    .del:hover {
        color: maroon;
        text-decoration: underline;
    }
    h3 {
        color: maroon;
        font-weght: bold;
    }
</style>