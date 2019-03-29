# Generated by Django 2.1 on 2019-01-09 09:59

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Campanycharges',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('charge_name', models.CharField(max_length=255, verbose_name='name')),
                ('price', models.IntegerField(max_length=255, verbose_name='price')),
                ('date', models.DateField(default=datetime.date.today, verbose_name='Date')),
                ('description', models.TextField(verbose_name='description')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='owner')),
            ],
            options={
                'verbose_name': 'campany charge',
                'verbose_name_plural': 'campany charges',
            },
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255, verbose_name='first name')),
                ('last_name', models.CharField(max_length=255, verbose_name='last name')),
                ('address', models.CharField(max_length=555, verbose_name='address')),
                ('city', models.CharField(max_length=555, verbose_name='city')),
                ('phone', models.CharField(max_length=255, verbose_name='phone')),
                ('email', models.EmailField(max_length=255, verbose_name='email')),
            ],
            options={
                'verbose_name': 'customer',
                'verbose_name_plural': 'customers',
            },
        ),
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image1', models.CharField(max_length=255, verbose_name='image1')),
                ('image2', models.CharField(max_length=255, verbose_name='image2')),
                ('image3', models.CharField(max_length=255, verbose_name='image3')),
            ],
            options={
                'verbose_name': 'images',
                'verbose_name_plural': 'images',
            },
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.CharField(max_length=100, primary_key=True, serialize=False, unique=True)),
                ('date', models.DateField(default=datetime.date.today, verbose_name='Date')),
                ('price', models.IntegerField(max_length=255, verbose_name='price')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboardviews.Customer', verbose_name='customer')),
            ],
            options={
                'verbose_name': 'order',
                'verbose_name_plural': 'orders',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.CharField(max_length=100, primary_key=True, serialize=False, unique=True)),
                ('title', models.CharField(max_length=255, verbose_name='title')),
                ('price', models.IntegerField(max_length=255, verbose_name='price')),
                ('inventory', models.IntegerField(max_length=255, verbose_name='inventory')),
                ('category', models.CharField(max_length=255, verbose_name='category')),
                ('section', models.CharField(max_length=255, verbose_name='section')),
                ('row', models.IntegerField(max_length=255, verbose_name='row')),
                ('link', models.CharField(max_length=470, verbose_name='link')),
                ('fabric', models.CharField(max_length=470, verbose_name='fabric')),
                ('color', models.CharField(max_length=470, verbose_name='color')),
                ('image', models.CharField(max_length=255, verbose_name='image')),
                ('description', models.TextField(verbose_name='description')),
                ('images', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboardviews.Images', verbose_name='images')),
            ],
            options={
                'verbose_name': 'product',
                'verbose_name_plural': 'products',
            },
        ),
        migrations.CreateModel(
            name='Productcharges',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(max_length=255, verbose_name='quantity')),
                ('price', models.IntegerField(max_length=255, verbose_name='price')),
                ('date', models.DateField(default=datetime.date.today, verbose_name='Date')),
                ('description', models.TextField(verbose_name='description')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='owner')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboardviews.Product', verbose_name='product')),
            ],
            options={
                'verbose_name': 'product charges',
                'verbose_name_plural': 'product charges',
            },
        ),
        migrations.AddField(
            model_name='order',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboardviews.Product', verbose_name='product'),
        ),
        migrations.AlterUniqueTogether(
            name='images',
            unique_together={('image1', 'image2', 'image3')},
        ),
        migrations.AlterUniqueTogether(
            name='product',
            unique_together={('id', 'title', 'inventory', 'price', 'image', 'description', 'category', 'link', 'fabric', 'color', 'section', 'images', 'row')},
        ),
    ]