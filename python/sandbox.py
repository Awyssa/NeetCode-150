chocolates = [
    {"flavour": "white", "cost": 1.50},
    {"flavour": "milk", "cost": 1.20},
    {"flavour": "dark", "cost": 1.80},
    {"flavour": "vegan", "cost": 2.00},
]

which_chocolate = input("Which chocolate would you like? ")

# Create a new variable to save the selected chocolate
selected_chocolate = None

# Loop over all the flavours and if one matches the which_chocolate save this to the selected_chocolate
for chocolate in chocolates:
    if chocolate["flavour"] == which_chocolate:
        selected_chocolate = chocolate
        break

# If we have a valid selected_chocolate print the cost, else tell the user that is not a valid flavour
if selected_chocolate:
  print(f"Okay, {selected_chocolate["flavour"]} chocolate costs £{selected_chocolate["cost"]}!")
else:
  print(f"Whoops! We do not have {which_chocolate}!")