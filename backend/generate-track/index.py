import json
import os
import urllib.request
import urllib.error
import time


def handler(event: dict, context) -> dict:
    """
    Генерация музыкального трека через Suno API (goapi.ai).
    Принимает lyrics, style, tempo, extra_prompt.
    Возвращает task_id для последующего polling статуса.
    """

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    lyrics = body.get("lyrics", "")
    style = body.get("style", "pop")
    tempo = body.get("tempo", 100)
    extra_prompt = body.get("extra_prompt", "")

    if not lyrics.strip():
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "lyrics обязательны"}),
        }

    api_key = os.environ.get("SUNO_API_KEY", "")
    if not api_key:
        return {
            "statusCode": 500,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "SUNO_API_KEY не настроен"}),
        }

    # Формируем style prompt для Suno
    tempo_label = "slow" if tempo < 80 else "mid-tempo" if tempo < 120 else "fast" if tempo < 150 else "very fast"
    style_prompt = f"{style}, {tempo_label}, {tempo} bpm"
    if extra_prompt:
        style_prompt += f", {extra_prompt}"

    payload = json.dumps({
        "custom_mode": True,
        "mv": "chirp-v3-5",
        "input": {
            "prompt": lyrics,
            "tags": style_prompt,
            "title": "AI Generated Song",
            "make_instrumental": False,
            "wait_audio": False,
        },
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://api.goapi.ai/suno/v1/music",
        data=payload,
        headers={
            "Content-Type": "application/json",
            "x-api-key": api_key,
        },
        method="POST",
    )

    with urllib.request.urlopen(req, timeout=30) as resp:
        data = json.loads(resp.read())

    task_id = data.get("data", {}).get("task_id") or data.get("task_id")

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"},
        "body": json.dumps({"task_id": task_id, "status": "processing"}),
    }
