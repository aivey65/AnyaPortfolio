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
    image_blob = models.ImageField(upload_to='images', blank=True, null=True)

    def save(self, *args, **kwargs):
       self.pk = '0'
       super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        pass

    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(pk='0')
        return obj

class Profile(models.Model):
    blurb = models.TextField(blank=False, null=False)
    skills = models.TextField(blank=True, null=True)
    hobbies = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    LinkedIn = models.CharField(max_length=100, blank=True, null=True)
    Instagram = models.CharField(max_length=100, blank=True, null=True)
    Behance = models.CharField(max_length=100, blank=True, null=True)

    def save(self, *args, **kwargs):
       self.pk = '0'
       super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        pass

    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(pk='0')
        return obj