import csv
import json
import pandas as pd
import numpy as np
import locale


""" df = pd.read_csv('./data_given_to_front_end/nba_player_data.csv')

# Set the locale to en_US (United States)
locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')

# Function to format a number as dollars with commas
def format_as_dollars(value):
    formatted = locale.currency(value, grouping=True)
    # Remove cents (last 3 characters)
    return formatted[:-3]

# Apply the formatting function to the 'Amount' column
df['salary_23_24'] = df['salary_23_24'].apply(format_as_dollars)
df['darko_zscore'] = df['darko_zscore'].round(2)
df['raptor_zscore'] = df['raptor_zscore'].round(2)
df['salary_23_24_log_zscores'] = df['salary_23_24_log_zscores'].round(2)
df['DARYL_SCORE'] = df['DARYL_SCORE'].round(2)

#getting rid of columns
df = df.drop('salary_24_25', axis=1)
df = df.drop('guaranteed', axis=1)
df = df.drop('player_id', axis=1)
df = df.drop('salary_23_24_log', axis=1)
df = df.drop('salary_24_25_log', axis=1)
df = df.drop('raptor_total', axis=1)
df = df.drop('nba_id', axis=1)
df = df.drop('DPM', axis=1)
df = df.drop('raptor_zscore_standardized', axis=1)
df = df.drop('darko_zscore_standardized', axis=1)
df = df.drop('raptor_plus_darko', axis=1)
df = df.drop('salary_23_24_log_zscores_transformed', axis=1)
df = df.drop('raptor_plus_darko_transformed', axis=1)
df = df.rename(columns={'DARYL_SCORE': 'daryl_score'})

print(df.head(50))

df.to_csv('./data_given_to_front_end/nba_player_data_cleaned.csv', index=False)
 """


# last steps
# Open and read the CSV file
with open("./data_given_to_front_end/nba_player_data_cleaned.csv", "r") as csv_file:
    csv_reader = csv.DictReader(csv_file)

    # Create a list to store the JSON data
    data = []

    # Iterate over the CSV rows and convert them to dictionaries
    for row in csv_reader:
        data.append(row)

# Convert the list of dictionaries to JSON
json_data = json.dumps(data, indent=4)

# Write the JSON data to a file
with open("./data_given_to_front_end/nba_player_data.json", "w") as json_file:
    json_file.write(json_data)
