#pragma strict
import UnityEngine.RigidbodyConstraints;
var speed: float = 8.0; var filter: float = 5.0;
  var fingerCount :int=0;

  
private var accel: Vector3;
function Start () {

 accel = Input.acceleration;
}

function Update () {
 accel = Vector3.Lerp(accel, Input.acceleration, filter * Time.deltaTime);
     // map accel -Y and X to game X and Y directions:
     var dir = Vector3(accel.x,0, 0);
     // limit dir vector1 to magnitude 1:
     if (dir.sqrMagnitude > 1) dir.Normalize();
     // move the object at the velocity defined in speed:
     transform.Translate(dir * speed * Time.deltaTime);
                
             for (var touch: Touch in Input.touches) {
                 if (touch.phase != TouchPhase.Ended && touch.phase != TouchPhase.Canceled)
                    
                     var dir1=Vector3(0,1,0);
                     transform.Translate(dir1*speed*Time.deltaTime);
                     
                     
                    
                 
             }
             
             

}