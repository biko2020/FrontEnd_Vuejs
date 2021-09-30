<template>
 <nav>
    <v-toolbar>
<v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Askoach</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>
       <span>
           <router-link to="/" > <a>Je Koach</a></router-link> |
       </span>
      </v-btn>
      <v-btn>
          <span>
        <router-link to="/about" > <a>Mon Cpmpte</a> </router-link> |
          </span>
      </v-btn>
      <v-btn>
          <span>
        <router-link to="/appagenda"> <a>Calandrier</a> </router-link>
          </span>
      </v-btn>
        <v-spacer></v-spacer>
        
       


    </v-toolbar>
 </nav>
</template>


<script>

export default {
    name:'AppHeader'

}
</script>
