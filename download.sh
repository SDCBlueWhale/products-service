#!/bin/bash
IDS=('1r3LBqzB8ibdd86goWl-mua81HhuHqVDi' '1FF-6nY7dLHrddYc5ynG9eWvNp3ukiP_F' '1HJ5bYXIV8I04R5OfFeD7B6kHsgo-XuSS' '11HIUqqHQqo5pZ_ItLC6iOnTImbmdZ811' '1j6N_ZomlgVIdNU8BL4HRFkDt0ofSgZpQ' '1YveiidmU0SeaGdB3-u1AQMJEN73cD6Pw')
NAMES=('products.csv' 'styles.csv' 'features.csv' 'related.csv' 'skus.csv' 'photos.csv')
for i in "${!IDS[@]}"; do
  wget --no-check-certificate 'https://drive.google.com/uc?export=download&id='"${IDS[i]}" -O ${NAMES[i]}
done