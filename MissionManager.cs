using UnityEngine;

public class MissionManager : MonoBehaviour
{
    public int moneyTarget = 100;
    public int collectedMoney = 0;

    void Update()
    {
        collectedMoney = GameManager.instance.money;

        if(collectedMoney >= moneyTarget)
        {
            Debug.Log("Mission Complete !");
        }
    }
}
