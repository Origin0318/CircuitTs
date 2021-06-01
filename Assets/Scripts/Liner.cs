using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Liner : MonoBehaviour
{
    public Vector3 targetPos;
    public Vector3 curPos;
    public Image line;
    public Image tagPosImage;
    public Image currentPosImage;
    // Start is called before the first frame update
    void Start()
    {
        curPos = currentPosImage.transform.localPosition;
        targetPos = tagPosImage.transform.localPosition;
    }

    // Update is called once per frame
    void Update()
    {
        curPos = currentPosImage.transform.localPosition;
        targetPos = tagPosImage.transform.localPosition;
        line.transform.localPosition = curPos;

        line.rectTransform.sizeDelta = new Vector2(Vector3.Distance(targetPos, curPos),45);

        //设置角度；
        double angle = Math.Atan2(targetPos.y - curPos.y, targetPos.x - curPos.x) * 180 / Math.PI;
        line.transform.rotation = Quaternion.Euler(0, 0, (float)angle );
    }
}
