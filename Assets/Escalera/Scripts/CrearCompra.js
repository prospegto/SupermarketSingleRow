#pragma strict

public var objetosCarrito : ArrayList;
public var numObjetos : int;
public var salida : GameObject;

function Start () {
	
		objetosCarrito = new ArrayList();
		numObjetos = Random.RandomRange(3, 15);

		/*var cube : GameObject  = GameObject.CreatePrimitive(PrimitiveType.Cube);
		cube.transform.parent = gameObject.transform;
		cube.transform.localPosition = Vector3(0, 0.5, 0);
		cube.AddComponent.<Rigidbody>();
		objetosCarrito.Add(cube);

		var sphere : GameObject = GameObject.CreatePrimitive(PrimitiveType.Sphere);		
		sphere.transform.parent = gameObject.transform;
		sphere.transform.localPosition = Vector3(0, 1.5, 0);
		sphere.AddComponent.<Rigidbody>();
		objetosCarrito.Add(sphere);

		var capsule : GameObject = GameObject.CreatePrimitive(PrimitiveType.Capsule);		
		capsule.transform.parent = gameObject.transform;
		capsule.transform.localPosition = Vector3(2, 1, 0);
		capsule.AddComponent.<Rigidbody>();
		objetosCarrito.Add(capsule);

		var cylinder : GameObject = GameObject.CreatePrimitive(PrimitiveType.Cylinder);	
		cylinder.transform.parent = gameObject.transform;
		cylinder.transform.localPosition = Vector3(-2, 1, 0);
		cylinder.AddComponent.<Rigidbody>();
		objetosCarrito.Add(cylinder);*/
}

function Update () {

}

function AplicarFuerza(){
	if(objetosCarrito != null){
		for(var i : int = 0; i < objetosCarrito.Count; i++){
			var obj : GameObject = objetosCarrito[i];
			//obj.transform.GetComponent.<Rigidbody>().AddForce(transform.forward * 10f);
		}
	}
}


function PagarObjetos(){
	for(var i : int = 1; i <= numObjetos; ){
		Debug.Log("Pagando " + numObjetos);
		numObjetos--;
		yield new WaitForSeconds (1);
	}
	if(numObjetos == 0){
		transform.parent.GetComponent.<EscalatorAI>().SalirDelSuper(transform.position, salida.transform.position);
	}
}