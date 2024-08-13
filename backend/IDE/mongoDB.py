import os
import pymongo
import uuid
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))

cluster=MongoClient(os.getenv("ATLAS_URI"))
db = cluster['best_ide']
projects = db['projects']
accounts = db['accounts']
print("Connected to MongoDB")
# account object to save in db: id, email, username, password, verified, logged_in



def addAccount(email, username, password):
    account = {
        "_id": str(uuid.uuid4()),
        "email": email,
        "username": username,
        "password": password,
        "verified": False,
        "logged_in": False
    }
    accounts.insert_one(account)
    return account


# def sendVerificationEmail(email):