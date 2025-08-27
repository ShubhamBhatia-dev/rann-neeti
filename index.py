import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def download_all_images(url, output_folder="images"):
    # Fetch the webpage
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch page: {response.status_code}")
        return

    soup = BeautifulSoup(response.text, "html.parser")

    # Find all <img> tags
    images = soup.find_all("img")
    if not images:
        print("No images found on the page.")
        return

    # Create output folder
    os.makedirs(output_folder, exist_ok=True)

    # Download each image
    for i, img in enumerate(images, start=1):
        img_url = img.get("src")
        if not img_url:
            continue
        # Handle relative URLs
        img_url = urljoin(url, img_url)

        try:
            img_data = requests.get(img_url).content
            ext = os.path.splitext(img_url)[1] or ".jpg"
            filename = os.path.join(output_folder, f"image_{i}{ext}")

            with open(filename, "wb") as f:
                f.write(img_data)

            print(f"Downloaded: {filename}")
        except Exception as e:
            print(f"Failed to download {img_url}: {e}")

# Example usage
download_all_images("https://shauryaiitkgp.in/events")
