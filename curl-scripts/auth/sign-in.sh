# Authenticate sign-in sh curl-scripts/auth/sign-in.sh

API="https://tic-tac-toe-wdi-production.herokuapp.com"
URL_PATH="/sign-in"
curl "${API}${URL_PATH}" \
    --include \
   --request POST \
   --header "Content-Type: application/json" \
   --data '{
     "credentials": {
       "email": "'"${EMAIL}"'",
       "password": "'"${PASSWORD}"'"
     }
   }'

echo
