<template>
    <div class="container">
        <section>
            <h1 class="text-center">My Calenader</h1>
        </section>  

    <h2> {{currentMonthName}} {{currentYear}}  {{lastDayOfMonth}} {{firstDayOfMonth}} jours:{{AskoachJour}} </h2>

        <section>
            <!--Affichage de Nom des jours-->
            <div class="jours">
                <p  v-for="(jour,index) in jours" :key="index">{{jour}}</p>
            </div>
             <!--Affichage de Numero des jours-->
            <div class="dates">
                <!--Affichage des derniers jours du mois derniers, seront les premiers jours du mois courant -->
                <p  v-for="premierJourDuMois in firstDayOfMonth" :key="premierJourDuMois"></p>
               <!--selectioner la date actuel avec la fonction "aujordhui" et lister les jours du mois-->
                <p :class="aujourdhui(date)"  v-for="date in lastDayOfMonth" :key="date"><a @click="agenda()">{{date}}</a></p>
     
            </div> 
            
        </section>
        <section >
            <!-- boutton 'suiv, prec' pour basculer entre les dates du clandrer-->
            <div class="box-btn">
             <button @click="precedent" class="btn-precedent" >Précédent</button>
             <button @click="suivant"  class="btn-suivant">Suivant</button>
            </div>
           
        </section>

   </div> 
</template>

<!--Style de la page calandrier-->
<style lang="scss">
@import '~bootstrap/scss/bootstrap';

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
      
.jourActive {
  color:red;
  background-color: yellow;
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

<script>
    export default {    
        data() {
            // list de nom des jours
            return {
                jours:["Dim","Lun","Mar","Mer","Jeu ","Ven","Sam"],

            // variables currentMonthInNumbre, currentYear pour stocker le numero du mois et l'annee
                currentMonthInNumbre:new Date().getMonth(),
                currentYear:new Date().getFullYear()
            }
        },
        // nous utilisons la propriete "computed" pour 
        // savoir si la varible est modifie ou pas en temps reel
        computed:{
            //recuperer le Nom du mois, premier et deriner jours du mois
            currentMonthName() {
                return new Date(this.currentYear,this.currentMonthInNumbre).toLocaleDateString("default",{month:"long"})
            },
            lastDayOfMonth() {
                return new Date(this.currentYear,this.currentMonthInNumbre+1,0).getDate()
            },
            firstDayOfMonth() {
                return new Date(this.currentYear,this.currentMonthInNumbre,1).getDay()
            }
        },

        methods : {
            // fonction pour basculer vers les mois prochaines
            suivant() {
                    
                if (this.currentMonthInNumbre===11) {
                    this.currentYear++
                    this.currentMonthInNumbre=0
                    
                }else {
                    this.currentMonthInNumbre++
                   
                }
                
            },
            // fonction pour basculer vers les mois précedents
            precedent(){
                
                if(this.currentMonthInNumbre===0){
                    this.currentMonthInNumbre=11
                    this.currentYear--

                }else{
                    this.currentMonthInNumbre--
                }
                console.log(this.currentMonthInNumbre)
            },
            // fonction pour trouver le jour actuel
            aujourdhui(date){
                
                let AskoachJour = new Date(this.currentYear,this.currentMonthInNumbre,date).toDateString()
                let cejour = new Date().toDateString()
                return AskoachJour === cejour ? "jourActive" : ""
                
               
            },
            agenda() {
                console.log("programme agenda")
            }
            
        }
    }
</script>
