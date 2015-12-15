#pragma strict

var prefab : GameObject;
var radius = 5.0;
var interval = 1.0;
var ratio = 0.2;
var numeroClientesEnCola = 0;

function Start() {
	while (true) {
		var phi = (Random.value * 0.6 - 0.3) * Mathf.PI;
		var pos = Vector3(Mathf.Sin(phi), 0.0, Mathf.Cos(phi));
		var instance = Instantiate(prefab, pos * radius + transform.position, Quaternion.identity) as GameObject;
		numeroClientesEnCola++;
		instance.transform.parent = gameObject.transform;
		if (ratio > 0.0 && ratio < 1.0) {
			instance.GetComponent.<EscalatorAI>().SetConfig(Random.value < ratio);
		} else {
			instance.GetComponent.<EscalatorAI>().SetConfig(pos.x < 0.0);
		}
		yield WaitForSeconds(interval);
	}
}
