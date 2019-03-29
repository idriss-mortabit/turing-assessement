# encoding: utf-8
from django.contrib import admin
from jet.admin import CompactInline
from dashboardviews.models import Customer, OrderDetail, Orders, Product, Category
from django.utils.translation import ugettext_lazy as _
from django.utils.html import format_html


class OrderDetailAdmin(admin.ModelAdmin):
    list_display = (
        'item_id',
        'order_id',
        'product_id',
        'attributes',
        'product_name',
        'quantity',
        'unit_cost',
    )
    search_fields = ('item_id','product_id','order_id', 'product_name')
    list_filter = (
        'order_id',
        'product_id',
        'product_name',
        'quantity',
    )

class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        'category_id',
        'department_id',
        'name',
        'description',
    )
    search_fields = ('category_id','department_id','name','description')
    list_filter = (
        'department_id',
    )



class OrdersAdmin(admin.ModelAdmin):
    list_display = (
        'order_id',
        'total_amount',
        'created_on',
        'shipped_on',
        'status',
        'comments',
        'customer_id',
        'auth_code',
        'reference',
        'shipping_id',
    )
    search_fields = ('order_id','created_on','comments', 'customer_id')
    list_filter = (
        'total_amount',
        'created_on',
        'shipped_on',
        'customer_id',
        'shipping_id',
    )

class CustomerAdmin(admin.ModelAdmin):
    list_display = (
        'customer_id',
        'name',
        'email',
        'address_1',
        'city',
        'region',
        'postal_code',
        'country',
        'shipping_region_id',

    )
    search_fields = ('name', 'email', 'city', 'phone')
    list_filter = (
        'city',
        'country',
        'postal_code',
        'shipping_region_id',
    )


class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'product_id',
        'name',
        'price',
        'discounted_price',
        'thumbnail',
        'display',
        'description',
    )
    list_filter = (
        'discounted_price',
        'price',
    )
    ordering = ('name', 'thumbnail')
    search_fields = ('name', 'description')

admin.site.site_header = format_html("Online Store Dashboard")
admin.site.site_title = format_html("Online Store Dashboard")
admin.site.register(Orders, OrdersAdmin)
admin.site.register(Customer, CustomerAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(OrderDetail, OrderDetailAdmin)
admin.site.register(Category, CategoryAdmin)

