import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    """Проверка статуса генерации трека Suno по task_id. Возвращает статус и URL аудио когда готово."""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    params = event.get("queryStringParameters") or {}
    task_id = params.get("task_id", "")

    if not task_id:
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "task_id обязателен"}),
        }

    api_key = os.environ.get("SUNO_API_KEY", "")
    if not api_key:
        return {
            "statusCode": 500,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "SUNO_API_KEY не настроен"}),
        }

    req = urllib.request.Request(
        f"https://api.goapi.ai/suno/v1/music/{task_id}",
        headers={"x-api-key": api_key},
        method="GET",
    )

    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read())

    task_data = data.get("data", data)
    status = task_data.get("status", "processing")

    # Извлекаем аудио URL из ответа goapi.ai
    audio_url = None
    clips = task_data.get("clips") or task_data.get("output", {}).get("clips")
    if clips:
        first = clips[0] if isinstance(clips, list) else list(clips.values())[0]
        audio_url = first.get("audio_url") or first.get("url")

    result = {"status": status}
    if audio_url:
        result["audio_url"] = audio_url
    if status in ("completed", "succeeded") and not audio_url:
        result["status"] = "processing"

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"},
        "body": json.dumps(result),
    }
