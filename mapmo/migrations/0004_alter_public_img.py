# Generated by Django 3.2.4 on 2021-06-19 07:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mapmo', '0003_rename_write_public_public'),
    ]

    operations = [
        migrations.AlterField(
            model_name='public',
            name='img',
            field=models.FileField(blank=True, upload_to=''),
        ),
    ]
