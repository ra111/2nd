using UnityEngine;
using System.Collections;

public class fal : MonoBehaviour {

	public GameObject[] prefab;
	public int xPosition=0;
	public int t=0;
	void Start()
	{
		// Call the Spawn function after a delay of the spawnTime and then continue to call after the same amount of time.
		InvokeRepeating ("Spawn", 0, 1);
		
		
	}
	
	void Update() {
		
		
		
	}
	void Spawn()
	{   xPosition = Random.Range (0,3);
		Instantiate (prefab[Random.Range(0,5)], new Vector3 (6, xPosition, 0), Quaternion.identity);
		
		
	}
	

}
