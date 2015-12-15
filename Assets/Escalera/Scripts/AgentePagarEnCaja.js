#pragma strict


var interval = 0.8;
var speed = 0.8;
var multiplier = 2.0;
var radius = 0.2;
var fastForward = false;
var cajero : GameObject;

function Start() {

	while (true) {
		while (true) {
			var colliders = Physics.OverlapSphere(transform.position, radius);
			if (colliders && colliders.Length > 0) break;
			yield;
		}

		var ai = colliders[0].GetComponent.<EscalatorAI>();
		ai.PagarEnCaja(transform.position, cajero.transform.position, speed, 0.0);
	}
}

function OnDrawGizmos() {
    Gizmos.color = Color(0, 0, 0, 0.5);
    Gizmos.DrawWireSphere(transform.position, radius);
}
