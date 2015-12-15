using UnityEngine;
using System.Collections;

public class InstanciarCajas : MonoBehaviour {

	public GameObject cajaSupermercado;

	// Use this for initialization
	void Start () {
		for (int x = 0; x < 5; x++) {
			/*GameObject cajaSup = GameObject.CreatePrimitive(PrimitiveType.Cube);
			cajaSup.AddComponent<Rigidbody>();*/
			GameObject cajaSup = Instantiate(cajaSupermercado, new Vector3(0 + (x + 10f) , 0, -25f), Quaternion.identity) as GameObject;
			cajaSup.transform.parent = gameObject.transform;
			//cajaSup.transform.localPosition = new Vector3(transform.parent.position.x - x, 0, 0);
		}
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
