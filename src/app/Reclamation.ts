 export class Reclamation{
     id: number;
     type: String;
     commune: String;
     nom: String;
     CIN: String;
     constructor(tp:String,com:String,name:String,C:String){
         this.CIN=C;
         this.commune=com;
         this.nom=name;
         this.type=tp;

     }
 }