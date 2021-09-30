

export default class Agenda {

    constructor (Jour, heure){
        this.Jour = Jour
        this.heure = heure

        this.times = new Date(this.heure)  
        
    }

     static getDaysName () {
        const names = [];
        const date = new Date();
        const ceMois = new Date();
        const moisPrecedent = new Date();
      
        
    
        let format_semaine = {weekday: 'long'};
        let format_mois = {month: 'short'}; 
        let type_Affichage ='fr-fr';
    
        let jours = 7;
        let i= 0;
        let finMois = 0;
       
        let nomMois ;
        // recuperer le numero du Mois 
        let moisSuivant = ceMois.getMonth();
            ceMois.setMonth(ceMois.getMonth()+1);
            moisSuivant = ceMois.toLocaleDateString(type_Affichage, format_mois)
        
        while (jours !== 0) {
         
         
          date.setDate(date.getDate(1)+i);
          let numJour = date.getDate();
          let nomJour = date.toLocaleDateString(type_Affichage, format_semaine);
          
           
          // tester si le numero du jour depasse le 30, donc on doit passer au mois suivant
          
            if (numJour >= 30  ) {
               
               finMois = 1;
               moisPrecedent.setMonth(moisPrecedent.getMonth());
               nomMois = moisPrecedent.toLocaleDateString(type_Affichage, format_mois)
              
            } else if (finMois == 1 ) {
               nomMois = moisSuivant;

            } else if(finMois == 0) {
              nomMois = moisPrecedent.toLocaleDateString(type_Affichage, format_mois)
            }
            
          
          
          names.push(nomJour+' '+numJour+' '+nomMois);
         
          i=1;
        
          jours--;

        }
      
        return names;
        }

        // addZero (i) {
        //     if (i < 10) {
        //       i = "0" + i;
        //     }
        //     return i;
        //   }

      static getHeure(){
            let heures = [];
            //let d = new Date();
            let H = 6;
            let ix = "0"
            let M="00"
            
            
            // let h = d.getHours();
            // d.setHours(d.getHours())
            // let m = d.getMinutes();
            for(let x = 0; x < 12; x++){
                                
                if (x<3) {
                    ix 
                }
                    else{
                    ix=""
                  }
                 H++;
                heures.push(ix+""+H+":"+M);
                heures.push(ix+""+H+":30");
            } 

           return heures;
        }
    
}


