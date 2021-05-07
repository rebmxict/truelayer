from django.urls import path
from .api import TrueLayerManager, AccountsManager, TransactionManager

urlpatterns = [
	path('authtruelayer', TrueLayerManager.as_view()),
	path('accounts', AccountsManager.as_view()),
	path('transactions', TransactionManager.as_view())
]