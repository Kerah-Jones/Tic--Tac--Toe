
API="https://tic-tac-toe-wdi.herokuapp.com"
URL_PATH="/games?over=true"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo