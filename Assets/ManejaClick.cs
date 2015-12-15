using UnityEngine;
using System.Collections;

public class ManejaClick : MonoBehaviour {

	bool menuActivo;
	public Canvas canvasBotones;
	private float tiempo;
	private bool click, longClick = true;
	public Transform posicionPagar;
	public ManejarClientes mClientes;
	public ActivarCaja caja;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {

		Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		RaycastHit hit;
		if(Physics.Raycast(ray, out hit, 100)){
			if(hit.collider.transform == transform){
				if ( Input.GetMouseButtonDown (0) )
				{
					tiempo = Time.time;
					click = true;
				}
				
				if (click && longClick && (Time.time - tiempo) > 0.2 )
				{
					
					menuActivo = !menuActivo;
					canvasBotones.gameObject.SetActive(menuActivo);
					longClick = false;
				}
				
				if ( Input.GetMouseButtonUp(0) )
				{
					click = false ;
					
					if ( (Time.time - tiempo) < 0.2 )
					{
						// Click corto, enviar cliente a caja
						if(caja.estaActiva){
							mClientes.EnviarPrimerCliente(posicionPagar.position);
						}
					}else{
						longClick = true;
						
					}
				}
			}
		}


	
	}



	void OnMouseUp(){

	}
	
}
