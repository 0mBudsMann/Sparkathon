import requests
from bs4 import BeautifulSoup
import json
import time

product_types = json.load(open("../../Amazon-HackOn/backend/static/product_type_map.json"))

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.14"
}


def get_page(url):
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    return response.text


def get_product_types(item):
    try:
        url = f"https://www.walmart.com/search?q={item}"
        page_content = get_page(url)

        soup = BeautifulSoup(page_content, 'html.parser')

        product_links = soup.select("a.absolute.w-100.h-100.z-1.hide-sibling-opacity")[:10]
        links = [link.get('href') for link in product_links]

        product_images = soup.select("img.absolute.top-0.left-0")[:10]
        images = [img.get('src') for img in product_images]

        print(product_images)

        products = {
            "url": links,
            "images": images
        }

        print(products)

        return {item: products}
    except Exception as e:
        print(e)
        return {}


def save_product_types(item):
    product_type = get_product_types(item)

    try:
        with open("../../Amazon-HackOn/backend/static/product_type_map.json", "r") as f:
            all_products = json.load(f)
    except FileNotFoundError:
        all_products = {}

    all_products.update(product_type)

    with open("../../Amazon-HackOn/backend/static/product_type_map.json", "w") as f:
        json.dump(all_products, f, indent=4)


def for_all_types():
    for item in product_types:
        save_product_types(item)
        time.sleep(3)

if __name__ == "__main__":
    for_all_types()
    # save_product_types("book")