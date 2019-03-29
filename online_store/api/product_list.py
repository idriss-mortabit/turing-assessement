from rest_framework.views import APIView
from rest_framework.response import Response
import pickle
from dashboardviews import models

class Brands_Api(APIView):
  """
  A custom endpoint for GET request.
  """
  def get(self, request, format=None):
    Brands = models.Category.objects.all()
    data=[]
    for Brand in Brands :
        data.append(Brand.category_id)
    return Response(data)
    
class Products_Api(APIView):
  """
  A custom endpoint for GET request.
  """
  def get(self, request, format=None):
    Products = models.Product.objects.all()
    data=[]
    path = 'https://raw.githubusercontent.com/zandoan/turing-fullstack/master/Images/product_images/'
    for Product in Products :
        categories = []
        cats = models.ProductCategory.objects.filter(product_id= Product.product_id)
        for cat in cats:
            categories.append(models.Category.objects.get(category_id= cat.category_id).name)
        data.append({
              "id" : Product.product_id,
              "title" : Product.name,
              "price" : Product.price,
              "category" : "",
              "description" : Product.description,
              "images" : 
                  [
                      path+Product.image,
                      path+Product.image_2
                  ],
              "brand":  categories,
              "cpu": "",
              "camera": "",
              "size": "",
              "weight": "",
              "display": "",
              "battery": "",
              "memory": ""  
          })
    return Response(data)
