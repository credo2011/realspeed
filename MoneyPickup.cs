using UnityEngine;

public class MoneyPickup : MonoBehaviour
{
    public int value = 10;

    void OnTriggerEnter(Collider other)
    {
        if(other.CompareTag("Player"))
        {
            GameManager.instance.AddMoney(value);
            Destroy(gameObject);
        }
    }
}
