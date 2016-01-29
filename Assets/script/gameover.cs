using UnityEngine;
using System.Collections;

public class gameover : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	public Texture gameOverTexture;
	
	void OnGUI()
	{ GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),gameOverTexture);

		if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2+150, 150, 25),"Give it a try")) 
		{
			Application.LoadLevel("level1");
		}
		if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2 , 150, 25),"Try again later")) 
		{
			Application.Quit();
		}
		if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2 -150, 150, 25),"Main Menu")) 
		{
			Application.LoadLevel("0");
		}
	}

}
