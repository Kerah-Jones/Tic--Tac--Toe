

API="https://tic-tac-toe-wdi.herokuapp.com"
URL_PATH="/games/:id"
curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
