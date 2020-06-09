
# curl script for game create sh curl-scripts/games/create.sh

API="https://tic-tac-toe-wdi-production.herokuapp.com"
URL_PATH="/new-game"
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
