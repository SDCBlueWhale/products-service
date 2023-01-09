#!/bin/bash
IDS=('1-W_7beRPqrP95t6DTpxdSCNsvn6gM8GM' '1zHrArvW4JI_K5Kj9uUyT9jFK4OLkrbNc' '11vpwszUgdEuT26QIJaswTF6z2d-m-uZK' '1RrUnymxIrJlbBDPfjVerYxixwpdQttwI' '1a8FjukI7bR4zav3MIcIETHGkEC5Oazhz' '1u-AQPr3pauwCophsmjcg-qGy7zabfXcR')
NAMES=('products.csv' 'styles.csv' 'features.csv' 'related.csv' 'skus.csv' 'photos.csv')
for i in "${!IDS[@]}"; do
  wget --load-cookies cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id='"${IDS[i]}" -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=${IDS[i]}" -O ${NAMES[i]} && rm -rf cookies.txt

done

# wget --no-check-certificate 'https://drive.google.com/uc?export=download&id='"${IDS[i]}" -O ${NAMES[i]}