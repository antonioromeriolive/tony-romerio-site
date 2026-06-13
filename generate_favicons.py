import os
from PIL import Image

source = "assets/images/favicon_sito.png"
if not os.path.exists(source):
    print("Source not found")
    exit(1)

img = Image.open(source)
sizes = {
    "favicon-16x16.png": (16, 16),
    "favicon-32x32.png": (32, 32),
    "favicon-192x192.png": (192, 192),
    "apple-touch-icon.png": (180, 180)
}

for name, size in sizes.items():
    resized = img.resize(size, Image.Resampling.LANCZOS)
    resized.save(f"assets/images/{name}")
    print(f"Created {name}")
