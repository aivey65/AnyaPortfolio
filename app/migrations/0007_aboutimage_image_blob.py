# Generated by Django 5.0.2 on 2024-03-22 20:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_alter_profile_behance_alter_profile_instagram_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='aboutimage',
            name='image_blob',
            field=models.ImageField(blank=True, null=True, upload_to='images'),
        ),
    ]
