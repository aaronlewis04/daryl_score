import requests
from bs4 import BeautifulSoup
import pickle
import pandas as pd

""" url = "https://www.statmuse.com/players#d"  # Replace with the URL of the website you want to scrape
response = requests.get(url)


soup = BeautifulSoup(response.content, "lxml")

lazy_img_elements = soup.find_all("lazy-img")

img_srcs = []


for img_element in lazy_img_elements:
    # Extract the source URL of the lazy image
    img_srcs.append(img_element.get("src")) """


""" file_path = "img_srcs.pkl"
with open(file_path, 'wb') as f:
    pickle.dump(img_srcs, f) """




""" file_path = "img_srcs.pkl"
# Load the array from the pickle file
with open(file_path, 'rb') as f:
    img_srcs = pickle.load(f)


filtered_img_srcs = []; 
for item in  img_srcs :
    if item.find("https://cdn.statmuse.com/img/nba/") != -1:
        filtered_img_srcs.append(item)
print(len(filtered_img_srcs)) """




#print(img_srcs[:50])

""" with open('ready_for_statmuse.pickle', 'rb') as file:
    salaries_raptor_darko = pickle.load(file)

nba_player_names_and_images = salaries_raptor_darko[["statmuse_player_names"]].copy()
nba_player_names_and_images["img_url"] = None




# Load the array from the pickle file
with open("filtered_img_srcs.pkl", 'rb') as f:
    img_srcs = pickle.load(f)

for index, row in nba_player_names_and_images.iterrows():
    for item in img_srcs:
        if item.find(row["statmuse_player_names"]) != -1:
            nba_player_names_and_images.at[index, 'img_url'] = item #google why this works when i get time



with open("names_and_img_srcs.pkl", 'wb') as f:
    pickle.dump(nba_player_names_and_images, f) """
    



with open("names_and_img_srcs.pkl", 'rb') as f:
    df = pickle.load(f)



df['statmuse_player_names_with_shaq'] = df['statmuse_player_names']

df.loc[df['img_url'].isna(), 'statmuse_player_names_with_shaq'] = 'shaq'


main_df = pd.read_csv("data_given_to_front_end/nba_player_data_cleaned.csv")
merged_df = pd.merge(main_df, df, on='statmuse_player_names', how='inner')


merged_df = merged_df.drop('img_url', axis=1)
merged_df = merged_df.drop('statmuse_player_names', axis=1)
merged_df = merged_df.rename(columns={'statmuse_player_names_with_shaq': 'statmuse_player_names'})

print(merged_df.head(50))

merged_df.to_csv('./data_given_to_front_end/nba_player_data_cleaned.csv', index=False)




""" ##### getting ones that do have an image url main thing that filters it ########
filtered_df = df[df['img_url'].notna()] """



""" import requests
def download_image(url, file_path):
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        with open(file_path, 'wb') as file:
            for chunk in response.iter_content(chunk_size=8192):
                file.write(chunk)
        
        print(f"Image downloaded successfully to '{file_path}'.")
    except requests.exceptions.HTTPError as errh:
        print(f"HTTP Error: {errh}")
    except requests.exceptions.RequestException as err:
        print(f"Request Exception: {err}")
 """


""" # Example usage
url = "https://cdn.statmuse.com/img/nba/players/shaquille-oneal1-los-angeles-lakers-min--lwnayebp.png"
file_path = "./player_images/" + "shaq" + ".png"
download_image(url, file_path) """


""" for index, row in filtered_df.iterrows() :
    image_path = "./player_images/" + filtered_df.at[index, "statmuse_player_names"] + ".png"
    image_url = filtered_df.at[index, "img_url"]
    download_image(image_url, image_path)
    
 """



