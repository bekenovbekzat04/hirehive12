# Generated by Django 4.1.7 on 2023-04-19 18:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('job_board', '0003_remove_jobpost_company_jobpost_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='jobpost',
            name='categories',
        ),
        migrations.AddField(
            model_name='jobpost',
            name='category',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='job_posts', to='job_board.category'),
        ),
    ]