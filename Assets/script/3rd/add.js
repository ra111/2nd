#pragma strict
var x:int;
var y:int;
var z:int;
var z1:int;
var z2:int;
var scor:Text;
var tim:Text;
var ques:Text;
var time:float=10.00f;
var minutes:float;
var seconds:float;
var fraction:float;
var q:String;
var q3:String;
var q2:String;
 public var a1:int=1;
	var gameOverTexture:Texture;
	 var tex : Texture;
	 private var texWidth : float;
 private var texHeight : float;
public var i :int;
public var i1:int;
public var i2:int;
 var za:int;

var a:int;
var s:int;


function Start () { 

     texWidth = tex.width;
     texHeight = tex.height;
   

}

function Update () {
   if(za!=1)
   {
   Time.timeScale=1;
   }
   
		time -= Time.deltaTime;
		
		minutes = time / 60; //Divide the guiTime by sixty to get the minutes.
		 seconds = time % 60;//Use the euclidean division for the seconds.
		 fraction = (time * 100) % 100;
		 tim.text = String.Format ("{0:00} : {1:00} : {2:000}", minutes, seconds, fraction);
		 if(time<0.00f)
		 { 
		 //time+=18.00f;
		 adds();
		 
		 }
		 if(time>19.00f)
		 {
		 
		 adds();
}
scor.text="SCORE "+a; 

}

function adds()
{

   
x=Random.Range(40,120);
y=Random.Range(10,100);
z=x+y;
q=""+x+"+";
q2=""+y;
q3=q+q2;
ques.text=""+q3+"=";
z2=x+y+Random.Range(1,4);
z1=x+y-Random.Range(1,4);



if(time<0.00f)
{
s+=1;
time+=10.00f;
   
x=Random.Range(400,800);
y=Random.Range(800,1000);
z=x+y;
q=""+x+"+";
q2=""+y;
q3=q+q2;
ques.text=""+q3+"=";
z2=x+y+Random.Range(1,4);
z1=x+y-Random.Range(1,4);



}
}
function OnGUI()
{ 


if (GUI.Button (new Rect (Screen.width / 2, Screen.height / 2 - 250, 150, 25), "pause")) {
			
			
			za = 1;
			Time.timeScale = 0;
			
		}
		if (za == 1) {
			
			if (GUI.Button (new Rect (Screen.width / 2, Screen.height / 2 - 200, 150, 95), "Main Menu")) {
				Application.LoadLevel (0);
				
				
				
			}
			if (GUI.Button (new Rect (Screen.width / 2, Screen.height / 2, 150, 95), "Resume")) {
				
				Time.timeScale = 1;
				za = 0;
			}
			if (GUI.Button (new Rect (Screen.width / 2, Screen.height / 2 - 100, 150, 95), "Quit")) {
				Application.Quit ();
				
				
			}
			}
if((a1)%2==0&&a1%3==0)
{
i=z;
i1=z2;
i2=z1;


}
if((a1)%2!=0)
{
i=z1;
i1=z;
i2=z2;

}
if(a1%2==0&&a1%3!=0)
{ 
i=z2;
i1=z1;
i2=z;
}
if(s!=3)
{  
         var posRect = Rect(50,50,texWidth / 5 *(4-s), texHeight);
         var texRect = Rect(0,0,1.0 / 5 * (4-s), 1.0);
         GUI.DrawTextureWithTexCoords(posRect, tex, texRect);
      
  if (GUI.Button (Rect (440,170,90,40),""+ i)) {
      	if(i!=z)
       	{
       	  time=10.00f;
       a1=Random.Range(1,100);
          s+=1;
        adds();
      
    }
  
    if(i==z)
  {
        time=10.00f;
          a +=5;
        a1=Random.Range(1,100);
        adds();
      
    
    }

    }
if (GUI.Button (Rect (620,170,90,40),""+ i1)) {
       	if(i1!=z)
       	{
       	  time=10.00f;
        a1=Random.Range(1,100);
          s+=1;
        adds();
      
    }
     if(i1==z)
  {   
        time=10.00f;
          a +=5;
          a1=Random.Range(1,100);
        adds();
      
    
    }
    }
    if (GUI.Button (Rect (790,170,90,40),""+ i2)) {
    if(i2!=z)
    { 
        time=10.00f;
         s+=1;
         a1=Random.Range(1,100);
        adds();
       
    }
     if(i2==z)
  {      
        time=10.00f;
          a +=5;
          a1=Random.Range(1,100);
        adds();
      
    
    }
    
    }
    }
    if(s==3)
	{ Time.timeScale = 0;
GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),gameOverTexture);
       GUI.Button(new Rect(Screen.width / 2, Screen.height /2-250, 150, 95),"Your Score is"+a);
		if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2+150, 150, 25),"Give it a try")) 
		{
		Time.timeScale = 1;
		s=0;
			Application.LoadLevel(3);
		}
		if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2 , 150, 25),"Try again later")) 
		{
			Application.Quit();
		}
		if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2 -150, 150, 25),"Main Menu")) 
		{
			Application.LoadLevel("menu");
		}
		
	}


}
