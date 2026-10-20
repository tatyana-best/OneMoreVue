<script setup lang="ts">
  import User from './components/User.vue'
  import Employee from './components/Employee.vue'
  import Customer from './components/Customer.vue'
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'

  const name = ref('john')
  const surn = ref('smit')
  const users = [
    {
      id: 1,
      name: 'name1',
      surn: 'surn1'
    },
    {
      id: 2,
      name: 'name2',
      surn: 'surn2'
    },
    {
      id: 3,
      name: 'name3',
      surn: 'surn3'
    },
  ]
  const customers = [
    {
      id: 1,
      name: 'name1',
      salary: 100,
      age: 30,
    },
    {
      id: 2,
      name: 'name2',
      salary: 200,
      age: 40,
    },
    {
      id: 3,
      name: 'name3',
      salary: 300,
      age: 50,
    },
  ]

  function func() {
    alert('xxx')
  }

  function op1(a, b) {
    console.log('Первая функция: ', Number(a * b));
  }

  function op2(a, b) {
    console.log('Вторая функция: ', Number(a + b));
  }

  function str(str1, str2) {
    alert(str1 + ' ' + str2);
  }
</script>

<template>
  <div>
    <div>
      <Employee name="Светлана" surn="Иванова" age="45" :arg1="[1, 2, 3]" :arg2="{a: 1, b: 2, c: 3}" :arg3="true" @show="func" @op1="op1" @op2="op2" @str="str"/>
    </div>
    <h3>Пользователи</h3>
    <div>
      <User v-for="user in users" :key="user.id" :name="user.name" :surn="user.surn"/>
    </div>
    <h3>Покупатели</h3>
    <div>
      <table>
          <Customer v-for="customer in customers" :key="customer.id" :id="customer.id" :name="customer.name" :salary="customer.salary" :age="customer.age" />
      </table>
    </div>
    <div>
      <router-link to="/OneMoreVue/MyProject/first">First</router-link>
      <router-link to="/OneMoreVue/MyProject/second">Second</router-link>
      <router-link to="/OneMoreVue/MyProject/third">Third</router-link>
      <router-link to="/OneMoreVue/MyProject/forth">Forth</router-link>
      <router-link to="/OneMoreVue/MyProject/fifth">Fifth</router-link>
      <router-link to="/OneMoreVue/MyProject/sixth">Sixth</router-link>
      <router-link to="/OneMoreVue/MyProject/seventh">Seventh</router-link>
      <router-link to="/OneMoreVue/MyProject/eighth">Eighth</router-link>
      <router-link to="/OneMoreVue/MyProject/ninth">Ninth</router-link>
      <router-link to="/OneMoreVue/MyProject/tenth">Tenth</router-link>
      <router-link to="/OneMoreVue/MyProject/eleventh">Eleventh</router-link>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
