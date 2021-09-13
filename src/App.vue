<template>

  <div id="app">
    <AppHeader/>
    <router-view/>
  </div>
  
</template>

<script>
import AppHeader from "./components/global/AppHeader.vue";

export default {

  name:'App',
  components: {
    AppHeader
  }
}
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {

  h2 {
    
    text-align: left;
  }
.jours {
  display: flex;
    background-color:rgb(185, 185, 179);
  p{
     width: 14.28%;
  
  }
}
.dates {
 
   display: flex;
   flex-wrap: wrap;
   
  p{
    width: 14.28%;
    font-weight: 200;  
     a {
       color:gray
     }
    a:hover {
    cursor: pointer;
    color: black;
    font-weight: 900;  
     }

  }

}
    


.box-btn  {

  display:inline-block;
  background-color: #868685;
  width:100%;
   
  
  .btn-precedent {
      margin-right:50px;
      width: 100px;
      height: 50px;
      background-color: purple;
      color: aliceblue;
      border-radius: 10px;
           
  }

  .btn-suivant {
      
      margin-left:50px;
      width: 100px;
      height: 50px;
      background-color: purple;
      color: aliceblue;
      border-radius: 10px;

  }

}
  

}












</style>
