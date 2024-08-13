import os
import pymongo
from pymongo import MongoClient


cluster=MongoClient(os.getenv('ATLAS_URI'))

db = cluster['best_ide']
collection = db['projects']



# Code for saving/updating/deleting files