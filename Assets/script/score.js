#pragma strict
import UnityEngine.UI;
var scoreValue : int;
public var text1: Text;
var death:int=0;
	var gameOverTexture:Texture;
	 var tex : Texture;
	  private var texWidth : float;
 private var texHeight : float;
	
function Awake()
{

 scoreValue = 0;
}
function Start ()
{ Time.timeScale=0;
   
 texWidth = tex.width;
     texHeight = tex.height;

}

function Update () {
 Time.timeScale=1;;
text1.text= "Score: " + scoreValue;
if(death==3)
{ 
 Time.timeScale = 0;
 OnGUI();
 
}
}

function OnCollisionEnter(theCollision : Collision){
     
       if(theCollision.gameObject.tag=="be") {

         scoreValue+=5;
         text1.text= "Score: " +  scoreValue;
          
       }
       if(theCollision.gameObject.tag=="anti") {

         scoreValue-=10;
         text1.text= "Score: " +  scoreValue;
         death+=1;
          
       }
       
       }
          function  OnGUI()
	{  
	if(death!=3)
	{
	var posRect = Rect(50,50,texWidth / 5 *(4-death), texHeight);
         var texRect = Rect(0,0,1.0 / 5 * (4-death), 1.0);
         GUI.DrawTextureWithTexCoords(posRect, tex, texRect);
         }
	if(death==3)
	{ 
GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),gameOverTexture);
       GUI.Button(new Rect(Screen.width / 2, Screen.height /2-250, 200, 95),"Your Score is"+scoreValue);
		if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2+150, 200, 95),"Give it a try")) 
		{   death=0;
		   Time.timeScale=1;
			Application.LoadLevel("bheemladoo");
		}
		if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2 , 200, 95),"Try again later")) 
		{
			Application.Quit();
		}
		if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2 -150, 200, 95),"Main Menu")) 
		{
			Application.LoadLevel("menu");
		}
	}
	}