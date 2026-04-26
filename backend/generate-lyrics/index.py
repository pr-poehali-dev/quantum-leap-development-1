import json
import os
import urllib.request
import urllib.error


def handler(event: dict, context) -> dict:
    """Генерация текста песни через OpenAI GPT-4o по жанру, теме и запросу пользователя."""

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
    genre = body.get("genre", "pop")
    mood = body.get("mood", "")
    prompt = body.get("prompt", "")

    system_prompt = (
        "Ты — профессиональный автор текстов песен. "
        "Пиши тексты на русском языке с чёткой структурой: куплеты, припев, бридж. "
        "Каждый блок обозначай в квадратных скобках: [Куплет 1], [Припев], [Куплет 2], [Бридж], [Аутро]. "
        "Текст должен быть поэтичным, с рифмами и ритмом, подходящим для исполнения. "
        "Не добавляй никаких пояснений — только сам текст песни."
    )

    user_parts = []
    if genre:
        user_parts.append(f"Жанр: {genre}")
    if mood:
        user_parts.append(f"Тема / настроение: {mood}")
    if prompt:
        user_parts.append(f"Дополнительные пожелания: {prompt}")
    user_parts.append("Напиши полный текст песни (минимум 2 куплета + припев).")
    user_message = "\n".join(user_parts)

    api_key = os.environ.get("OPENROUTER_API_KEY", "")
    if not api_key:
        return {
            "statusCode": 500,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "OPENROUTER_API_KEY не настроен"}),
        }

    payload = json.dumps({
        "model": "openai/gpt-4o-mini",
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_message},
        ],
        "max_tokens": 1200,
        "temperature": 0.9,
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://openrouter.ai/api/v1/chat/completions",
        data=payload,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}",
            "HTTP-Referer": "https://contentai.poehali.dev",
            "X-Title": "ContentAI Song Generator",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        err_body = e.read().decode("utf-8", errors="ignore")
        return {
            "statusCode": 502,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": f"OpenAI error {e.code}: {err_body[:300]}"}),
        }

    lyrics = data["choices"][0]["message"]["content"].strip()

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"},
        "body": json.dumps({"lyrics": lyrics}),
    }