using UnityEngine;

public class CarController : MonoBehaviour
{
    public float speed = 25f;
    public float turnSpeed = 120f;
    public float boostPower = 40f;
    public float boostTime = 2f;

    float normalSpeed;

    void Start()
    {
        normalSpeed = speed;
    }

    void Update()
    {
        float move = Input.GetAxis("Vertical") * speed * Time.deltaTime;
        float turn = Input.GetAxis("Horizontal") * turnSpeed * Time.deltaTime;

        transform.Translate(0,0,move);
        transform.Rotate(0,turn,0);
    }

    public void ActivateBoost()
    {
        StopAllCoroutines();
        StartCoroutine(BoostRoutine());
    }

    System.Collections.IEnumerator BoostRoutine()
    {
        speed = normalSpeed + boostPower;
        yield return new WaitForSeconds(boostTime);
        speed = normalSpeed;
    }
}
