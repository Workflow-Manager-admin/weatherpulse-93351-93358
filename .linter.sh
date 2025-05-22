#!/bin/bash
cd /home/kavia/workspace/code-generation/weatherpulse-93351-93358/main_container_for_weatherpulse
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

