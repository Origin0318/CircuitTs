using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using GT;
public class StartGame : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        GTJSManager.Instance.StartGame();
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
