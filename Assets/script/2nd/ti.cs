using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class ti : MonoBehaviour {
	public Text timerLabel;
	public Text text1;
	public Text text2;
	public int scoreValue=0;
	public Texture gameOverTexture ;
	public int za;

	public int finalscore=0;
	
	private float time=18.00f;
	
	void Update() {
		if (za != 1) {
			Time.timeScale= 1;
		}
		text1.text= "Score: " +  scoreValue;
		time -= Time.deltaTime;
		
		var minutes = time / 60; //Divide the guiTime by sixty to get the minutes.
		var seconds = time % 60;//Use the euclidean division for the seconds.
		var fraction = (time * 100) % 100;
		if ((int)time % 10 == 0&&(int)time!=0) {
			if (scoreValue > 20) {
				time += 8.00f;
				finalscore +=scoreValue;
				scoreValue=0;



			}
		}
		text2.text = "Final Score:" + finalscore;
		if (time<0.0f) {
		
			Time.timeScale = 0;
			finalscore+=scoreValue;
			scoreValue=0;
		}

		
		//update the label value
		timerLabel.text = string.Format ("{0:00} : {1:00} : {2:000}", minutes, seconds, fraction);

	}
	void OnCollisionEnter(  Collision theCollision){
		
		if(theCollision.gameObject.tag=="be") {
			
			scoreValue+=5;
			text1.text= "Score: " +scoreValue;

			
		}
		if(theCollision.gameObject.tag=="anti") {
			
			scoreValue-=10;
			text1.text= "Score: " +scoreValue;

			
		}
}
	void OnGUI()
	{
		if (GUI.Button (new Rect (Screen.width / 2, Screen.height / 2 - 250, 150, 25), "pause")) {
			
			Time.timeScale = 0;
			za = 1;
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
		if(time<0.00f||time==0.00f)
		{
			Time.timeScale = 1;
		GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),gameOverTexture);
		GUI.Button(new Rect(Screen.width / 2, Screen.height /2-150, 250, 100),"Your Score is"+finalscore);
		if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2+200, 250, 100),"Give it a try")) 
		{

			Application.LoadLevel("sd");

		}
		if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2+50 , 250, 100),"Try again later")) 
		{
			Application.Quit();
		}
		if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2 -300, 250, 100),"Main Menu")) 
		{
			Application.LoadLevel("menu");
		}
	}
	}
}

