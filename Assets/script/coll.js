#pragma strict
var scoreValue : int;


var other : GameObject; 
var z: AudioSource;	
function Awake()
{
 z= other.GetComponent.<AudioSource>();

  
 
}
function Start () {


  
}



function Update () {
 
}
 function OnCollisionEnter(theCollision : Collision){
     
       if(theCollision.gameObject.tag=="basket") {
       
    
         Destroy(gameObject);
       z.Play();
         scoreValue+=5;
          
          
       }
       if(theCollision.gameObject.tag=="ground")
       {
       Destroy(gameObject);
       }
    }