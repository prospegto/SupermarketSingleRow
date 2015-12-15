#pragma strict

private var agent : NavMeshAgent;
private var animator : Animator;
private var ridden = false;
public var carrito : GameObject;

function Awake() {
	agent = GetComponent.<NavMeshAgent>();
	animator = GetComponent.<Animator>();
	agent.updateRotation = false;
}

function SetConfig(alt : boolean) {
	var entranceName = alt ? "Entrada 1" : "Entrada 1";
	agent.SetDestination(GameObject.Find(entranceName).transform.position);
	if (alt) gameObject.layer++;
}

function Start() {
	while (!ridden) {
		var speed = agent.velocity.magnitude;
		animator.SetFloat("speed", speed);
		if (speed > 0.1) {
			var rotation = Quaternion.LookRotation(agent.velocity);
			transform.rotation = ExpEase.Out(transform.rotation, rotation, -4.0);
		}
		yield;
	}
}

function OnTriggerEnter(other : Collider){
   if (other.gameObject.tag == "TriggerElim")
      Destroy(gameObject);
 }

function RideOnEscalator(entrance : Vector3, target : Vector3, escalatorSpeed : float, animSpeed : float) {
	ridden = true;
	agent.enabled = false;
	GetComponent.<Collider>().enabled = false;

	var rotation = Quaternion.LookRotation(Vector3.Scale(target - entrance, Vector3(1, 0, 1)));

	for (var time = 0.0; time < 0.5; time += Time.deltaTime) {
		transform.position = ExpEase.Out(transform.position, entrance, -4.0);
		transform.rotation = ExpEase.Out(transform.rotation, rotation, -4.0);
		animator.SetFloat("speed", animSpeed, 0.2, Time.deltaTime);
		yield;
	}

	while ((target - transform.position).magnitude > 0.1) {
		transform.position = Vector3.MoveTowards(transform.position, target, escalatorSpeed * Time.deltaTime);
		yield;
	}

	Destroy(gameObject);
}


function PagarEnCaja(entrance : Vector3, target : Vector3, escalatorSpeed : float, animSpeed : float){
	ridden = true;
	agent.enabled = false;
	GetComponent.<Collider>().enabled = false;

	var rotation = Quaternion.LookRotation(Vector3.Scale(target - entrance, Vector3(1, 0, 1)));
	transform.position = ExpEase.Out(transform.position, entrance, -4.0);
	transform.rotation = ExpEase.Out(transform.rotation, rotation, -4.0);
	
	//LLega a la caja
	animator.SetFloat("speed", animSpeed, 0, Time.deltaTime);	
	carrito.GetComponent.<CrearCompra>().PagarObjetos();

}


function SalirDelSuper(entrance : Vector3, target : Vector3){
	//animator.SetFloat("speed", 0.8, 0.2, Time.deltaTime);
	ridden = false;
	agent.enabled = true;
	GetComponent.<Collider>().enabled = true;
	
	GetComponent.<NavMeshAgent>().SetDestination(target);
	var rotation = Quaternion.LookRotation(Vector3.Scale(target - entrance, Vector3(1, 0, 1)));
	transform.position = ExpEase.Out(transform.position, entrance, -4.0);
	transform.rotation = ExpEase.Out(transform.rotation, rotation, -4.0);
	agent.SetDestination(target);
	Debug.Log("FINALIZADA, ir a : "+ target);
}
