#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider){
	Debug.Log("Enter");
   if (other.gameObject.tag == "Cliente")
      Destroy(other.gameObject);
 }