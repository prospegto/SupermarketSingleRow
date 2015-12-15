using UnityEngine;
using System.Collections;
using UnityEngine.UI;


public class ManejarClientes : MonoBehaviour {

	public Text textoTiempo;
	private float timer;
	private bool estaEnPausa;
	
	public void EnviarPrimerCliente(Vector3 posicion){
		if(gameObject.transform.childCount > 0){
			gameObject.transform.GetChild(0).GetComponent<NavMeshAgent>().SetDestination(posicion);
			gameObject.transform.GetChild(0).transform.parent = null;
		}
	}


	void Update(){

		if(Input.GetKey(KeyCode.P)){
			estaEnPausa = !estaEnPausa;
		}

		if(estaEnPausa)
			Time.timeScale = 0;
		else
			Time.timeScale = 1;

		timer += Time.deltaTime;
		int minutes = Mathf.FloorToInt(timer / 60F);
		int seconds = Mathf.FloorToInt(timer - minutes * 60);
		
		string niceTime = string.Format("{0:0}:{1:00}", minutes, seconds);
		textoTiempo.text = "  " + niceTime;
	}


}
