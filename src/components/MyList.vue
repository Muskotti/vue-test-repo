<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">First name</th>
          <th class="text-left">Last name</th>
          <th class="text-left">E-Mail</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.fname">
          <td>{{ item.fname }}</td>
          <td>{{ item.lname }}</td>
          <td>{{ item.email }}</td>
          <td>
            <v-btn color="red" fab x-small dark @click="remove">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          fname: 'asd',
          lname: 'asd',
          email: 'asd@asd.fi'
        },
        {
          fname: 'qwe',
          lname: 'qwe',
          email: 'qwe@qwe.fi'
        },
      ]
    };
  },
  methods: {
    remove() {
      console.log('asd')
    }
  }
};
</script>
