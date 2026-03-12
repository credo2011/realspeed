using UnityEngine;

public class EnemyCar : MonoBehaviour
{
    public Transform[] waypoints;
    public float speed = 18f;
    int index = 0;

    void Update()
    {
        if (waypoints.Length == 0) return;

        Transform target = waypoints[index];

        transform.position = Vector3.MoveTowards(
            transform.position,
            target.position,
            speed * Time.deltaTime
        );

        transform.LookAt(target);

        if (Vector3.Distance(transform.position,target.position) < 3f)
        {
            index++;

            if (index >= waypoints.Length)
            index = 0;
        }
    }
}
