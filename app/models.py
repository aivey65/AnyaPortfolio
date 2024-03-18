from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    skills = models.TextField(blank=True, null=True)
    links = models.TextField(blank=True, null=True)

class ProjectImage(models.Model):
    image_name = models.CharField(max_length=100)
    image_blob = models.ImageField(upload_to='images', blank=True, null=True)
    project = models.ForeignKey('Project', on_delete=models.CASCADE, blank=False, null=False)

class AboutImage(models.Model):
    pass

class Profile(models.Model):
    blurb = models.TextField(blank=True, null=True)
    skills = models.TextField(blank=True, null=True)
    hobbies = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=100)
    LinkedIn = models.CharField(max_length=100)
    Instagram = models.CharField(max_length=100)
    Behance = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
       self.pk = 'X'
       super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        pass

    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(pk='X')
        return obj