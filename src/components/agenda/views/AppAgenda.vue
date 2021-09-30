<template>
 <div class="container">
    <section>
       <div class="semaine" >     
            <!--Affichage les jours de la semaine-->
            <div class="jours" v-for="(j,index) in Jours" :key="index">
                <span class="span_jour">{{j}} </span>
                <!--Afficher les heures-->
                 <div class="heures" v-for="(h,indexH) in Heures" :key="indexH">
                 
                      <v-btn :id="indexH"
                        :v-model="selected"
                        :class="classColor"  
                        @click="select(h+' '+j)">
                        {{h}}
                      </v-btn>
                
                </div> 
            </div>
      </div>
    </section>
   <!-- <button v-on:click="postStatus(this.post.start_date, this.post.end_date)">heure actuel</button>-->
 </div>
</template>


<script>
// importer la class Agenda depuis le fichier agenda.js
import Agenda from '@/components/agenda/agenda.js'

export default {
props: ["data"],// recuperer data
data() {
return {

		couleur: true,
    Jours : [], //mettre au tableau les jours 
    Heures: [],
    selected: '',
    cible: []
    
   
   
}
},

  mounted () {
         // recuperer l'objet qui contient les jours 
         // via la methode static getDaysName()
        this.Jours = Agenda.getDaysName()
        this.Heures = Agenda.getHeure();

    },

computed:{

  classColor(){
    return {
      'span_heure': this.couleur, 'active': !this.couleur
    }
  }  
},    
  

methods:{

select(value) {
        this.selected = value;
         
             for(let h in this.Heures){
                this.cible.push(this.Heures[h].id) 
                   if(this.selected) {
                      this.couleur = !this.couleur
                
                 // return  console.log(this.Heures[h])
              }  
              
          }
          
          return  console.log(this.selected)
           //}
          //}
      

    }, 

}
}
</script>
<!-- ficher scss de l'agenda-->
<style src="@/components/agenda/agenda.scss" lang="scss">

</style>