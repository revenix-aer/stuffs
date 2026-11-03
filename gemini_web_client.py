#!/usr/bin/env python3
"""Client for an already-running gemini-web-to-api broker.

This does not run or build the broker, collect cookies, or generate media.
"""
import json
import os
import sys
from pathlib import Path

import requests

DEFAULT_BASE_URL = "http://localhost:4981"
HEALTH_PATH = "/health"


def main() -> int:
    base_url = os.environ.get(
        "GEMINI_WEB_TO_API_BASE_URL", DEFAULT_BASE_URL
    ).rstrip("/")
    try:
        response = requests.get(base_url + HEALTH_PATH, timeout=5)
        print(f"Broker health: HTTP {response.status_code}")
        if response.ok:
            print("Broker reachable.")
            return 0
        print("Broker is not healthy.")
        return 1
    except requests.RequestException as exc:
        print(f"Broker unreachable: {exc}")
        print("Run the broker separately, then rerun this check.")
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
