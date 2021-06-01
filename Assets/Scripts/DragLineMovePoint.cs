using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class DragLineMovePoint : MonoBehaviour, IDragHandler, IPointerDownHandler, IPointerUpHandler
{

    private Vector2 offsetPos;  //临时记录点击点与UI的相对位置

    public void OnDrag(PointerEventData eventData)
    {
        transform.position = eventData.position - offsetPos;
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        offsetPos = eventData.position - (Vector2)transform.position;
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        UnityEngine.Debug.LogError("!!!!!!!!!!!!!!!!");
        //offsetPos = eventData.position - (Vector2)transform.position;
    }
}
