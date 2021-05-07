from rest_framework import generics
from rest_framework.response import Response
from django.conf import settings
import requests, json

class TrueLayerManager(generics.GenericAPIView):
	def get(self, request, payload):
		url = "https://auth.truelayer.com/connect/token"
		headers = { 'Content-Type': 'application/json; application/x-www-form-urlencoded' }

		response = requests.request("POST", url, headers=headers, data=payload)
		print(response.text)
		return Response({ 'data': response.text })

	def post(self, request, *args, **kwargs):
		data = request.data
		payload = {
			'grant_type': data['grant_type'],
			'client_id': data['client_id'],
			'client_secret': data['client_secret'],
			'redirect_uri': data['redirect_uri'],
			'code': data['code']
		}

		url = "https://auth.truelayer.com/connect/token"
		headers = { 'Content-Type': 'application/json; application/x-www-form-urlencoded' }

		response = requests.request("POST", url, headers=headers, data=json.dumps(payload))
		response = json.loads(response.text)
		return Response(response)
		return Response({'data': 'data'})

class AccountsManager(generics.GenericAPIView):
	def post(self, request):
		data = request.data
		url = "https://api.truelayer.com/data/v1/accounts"
		payload = {}
		headers = { 'Authorization': 'Bearer ' + data['accessToken'] }
		response = requests.request("GET", url, headers=headers, data=payload)
		response = json.loads(response.text)
		return Response(response)

class TransactionManager(generics.GenericAPIView):
	def post(self, request):
		data = request.data
		url = "https://api.truelayer.com/data/v1/accounts/" + data['accountId'] + "/transactions"
		payload = {}
		headers = { 'Authorization': 'Bearer ' + data['accessToken'] }
		response = requests.request("GET", url, headers=headers, data=payload)
		response = json.loads(response.text)
		return Response(response)