# Generated by Django 4.1.7 on 2023-04-19 18:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('job_board', '0002_applicant_covering_letter'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='jobpost',
            name='company',
        ),
        migrations.AddField(
            model_name='jobpost',
            name='user',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='job_posts', to=settings.AUTH_USER_MODEL),
        ),
    ]
