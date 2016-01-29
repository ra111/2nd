#pragma strict
 var speed: float = 50.0; var filter: float = 10.0;

private var accel: Vector3;
 function Start(){
     accel = Input.acceleration;
 }
 
 function Update(){
     // filter the jerky acceleration in the variable accel:
     accel = Vector3.Lerp(accel, Input.acceleration, filter * Time.deltaTime);
     // map accel -Y and X to game X and Y directions:
     var dir = Vector3(accel.x,0, 0);
     // limit dir vector1 to magnitude 1:
     if (dir.sqrMagnitude > 1) dir.Normalize();
     // move the object at the velocity defined in speed:
     transform.Translate(dir * speed * Time.deltaTime);
 }
     function OnCollisionEnter(theCollision : Collision){
     
       if(theCollision.gameObject.tag=="be") {
         Destroy(gameObject);
       }
    }