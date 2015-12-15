using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class ActivarCaja : MonoBehaviour {

	public bool estaActiva;
	public GameObject cajero;
	public Sprite[] imagenes;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public void AtivarDesactivar(){
		estaActiva = !estaActiva;
		Color color = gameObject.GetComponent<Image>().color;
		if(estaActiva){
			//color.a = 0f;
			cajero.SetActive(true);
			gameObject.GetComponent<Image>().sprite = imagenes[0];
		}else{
			cajero.SetActive(false);
			//color.a = 0.7f;
			gameObject.GetComponent<Image>().sprite = imagenes[1];
		}
		//gameObject.GetComponent<Image>().color = color;
	}
}
