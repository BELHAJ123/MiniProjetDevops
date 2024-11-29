# Utiliser une image officielle Python
FROM python:3.13-slim

# Installer Git
RUN apt-get update && apt-get install -y git

# Installer Cython (nécessaire pour pycocotools)
RUN pip install cython

# Installer numpy explicitement avant les autres dépendances
RUN pip install numpy==1.24.3
# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier de dépendances et installer les packages
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copier le code de l'application
COPY . .

# Exposer le port 5000 pour l'application Flask
EXPOSE 5000

# Définir le command pour démarrer l'application avec gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
