using UnityEngine;

public class BoostPad : MonoBehaviour
{
    void OnTriggerEnter(Collider other)
    {
        if(other.CompareTag("Player"))
        {
            CarController car = other.GetComponent<CarController>();

            if(car != null)
            {
                car.ActivateBoost();
            }
        }
    }
}
