# Generated by Django 3.1.2 on 2021-06-24 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mapmo', '0007_auto_20210622_1642'),
    ]

    operations = [
        migrations.AlterField(
            model_name='public',
            name='lat',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='public',
            name='lng',
            field=models.CharField(max_length=20, null=True),
        ),
    ]