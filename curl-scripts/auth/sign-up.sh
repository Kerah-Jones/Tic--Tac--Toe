#Authentication sign-up sh curl-scripts/auth/sign-up.sh


 API="https://tic-tac-toe-wdi-production.herokuapp.com"
 URL_PATH="/sign-up"
 curl "${API}${URL_PATH}" \
     --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'",
        "password_confirmation": "'"${PASSWORD}"'"
      }
    }'

echo
