using UnityEngine;
using System.Collections;

public class fall : MonoBehaviour {
	public GameObject[] prefab;
	public int xPosition=0;
	public int t=0;
	int za=0;
	void Start()
	{
		// Call the Spawn function after a delay of the spawnTime and then continue to call after the same amount of time.
			InvokeRepeating ("Spawn", 1, 1);
		

	}
	
	void Update() {
		if (za == 1) {
			Time.timeScale = 0;
		}



	}
		void Spawn()
	{   xPosition = Random.Range (-8, +8);
		Instantiate (prefab[Random.Range(0,5)], new Vector3 (xPosition, 4, 0), Quaternion.identity);


		}
	void OnGUI()
	{

	if (GUI.Button (new Rect (Screen.width / 2, Screen.height / 2 - 250, 150, 25), "pause")) {
                    
			Time.timeScale = 0;
			za = 1;
		}
		if(za==1)
		{
	
			if (GUI.Button (new Rect (Screen.width / 2, Screen.height / 2-200 , 150, 95), "Main Menu")) {
				Application.LoadLevel(0);

	

			}
			if (GUI.Button (new Rect (Screen.width / 2, Screen.height / 2 , 150, 95), "Resume")) {
			
				Time.timeScale = 1;
				za=0;
			}
			if (GUI.Button (new Rect (Screen.width / 2, Screen.height / 2 -100, 150, 95), "Quit")) {
				Application.Quit();


		}
}
}
}


	

